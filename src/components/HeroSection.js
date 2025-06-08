'use client';

import React, { useRef, useEffect, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { shaderMaterial, useTexture } from '@react-three/drei';
import { gsap } from 'gsap';
import * as THREE from 'three';
import { extend } from '@react-three/fiber';

// Custom Shader Material
const InteractiveMaterial = shaderMaterial(
  {
    uTime: 0,
    uMouse: new THREE.Vector2(0, 0),
    uResolution: new THREE.Vector2(1, 1),
    uIntensity: 1.0,
    uColor1: new THREE.Color('#3B82F6'),
    uColor2: new THREE.Color('#8B5CF6'),
    uColor3: new THREE.Color('#EC4899'),
  },
  // Vertex Shader
  `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform float uIntensity;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying float vDistortion;
    
    // Simplex noise function
    vec3 mod289(vec3 x) {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }
    
    vec4 mod289(vec4 x) {
      return x - floor(x * (1.0 / 289.0)) * 289.0;
    }
    
    vec4 permute(vec4 x) {
      return mod289(((x*34.0)+1.0)*x);
    }
    
    vec4 taylorInvSqrt(vec4 r) {
      return 1.79284291400159 - 0.85373472095314 * r;
    }
    
    float snoise(vec3 v) {
      const vec2  C = vec2(1.0/6.0, 1.0/3.0);
      const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
      
      vec3 i  = floor(v + dot(v, C.yyy));
      vec3 x0 =   v - i + dot(i, C.xxx);
      
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      
      i = mod289(i);
      vec4 p = permute(permute(permute(
               i.z + vec4(0.0, i1.z, i2.z, 1.0))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0))
             + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      
      float n_ = 0.142857142857;
      vec3  ns = n_ * D.wyz - D.xzx;
      
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      
      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
      
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;
      
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }
    
    void main() {
      vUv = uv;
      vPosition = position;
      vNormal = normal;
      
      // Calculate distance from mouse
      vec3 worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      vec2 mouseWorld = uMouse * 10.0;
      float mouseDistance = distance(worldPosition.xy, mouseWorld);
      float mouseInfluence = 1.0 - smoothstep(0.0, 3.0, mouseDistance);
      
      // Create noise-based distortion
      float noise = snoise(position * 2.0 + uTime * 0.5) * 0.3;
      float noise2 = snoise(position * 3.0 - uTime * 0.3) * 0.2;
      
      // Combine noise with mouse influence
      float totalDistortion = (noise + noise2) * (0.5 + mouseInfluence * uIntensity);
      vDistortion = totalDistortion;
      
      // Apply distortion to position
      vec3 distortedPosition = position + normal * totalDistortion;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(distortedPosition, 1.0);
    }
  `,
  // Fragment Shader
  `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec2 vUv;
    varying float vDistortion;
    
    void main() {
      // Create gradient based on position and distortion
      float gradient = (vPosition.y + vDistortion) * 0.5 + 0.5;
      
      // Mix colors based on gradient and time
      vec3 color1 = mix(uColor1, uColor2, gradient);
      vec3 color2 = mix(uColor2, uColor3, sin(uTime * 0.5) * 0.5 + 0.5);
      vec3 finalColor = mix(color1, color2, vDistortion + 0.5);
      
      // Add rim lighting
      float rimPower = 2.0;
      float rimIntensity = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), rimPower);
      finalColor += rimIntensity * 0.3;
      
      // Calculate mouse influence for color brightness
      vec3 worldPosition = vPosition;
      vec2 mouseWorld = uMouse * 5.0;
      float mouseDistance = distance(worldPosition.xy, mouseWorld);
      float mouseInfluence = 1.0 - smoothstep(0.0, 2.0, mouseDistance);
      
      finalColor *= (1.0 + mouseInfluence * 0.5);
      
      gl_FragColor = vec4(finalColor, 0.8 + vDistortion * 0.2);
    }
  `
);

// Extend the material
extend({ InteractiveMaterial });

// Interactive 3D Object Component
function InteractiveObject({ position, scale, mouse, time }) {
  const meshRef = useRef();
  const materialRef = useRef();
  
  useFrame(() => {
    if (materialRef.current) {
      materialRef.current.uTime = time.current;
      materialRef.current.uMouse = mouse.current;
    }
    
    if (meshRef.current) {
      // Gentle rotation
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.z += 0.001;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 4]} />
      <interactiveMaterial
        ref={materialRef}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// Camera Controller
function CameraController({ mouse }) {
  const { camera } = useThree();
  
  useFrame(() => {
    // Smooth camera movement based on mouse
    const targetX = mouse.current.x * 0.5;
    const targetY = mouse.current.y * 0.3;
    
    camera.position.x += (targetX - camera.position.x) * 0.02;
    camera.position.y += (targetY - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });
  
  return null;
}

// 3D Scene Component
function Scene() {
  const mouse = useRef(new THREE.Vector2(0, 0));
  const time = useRef(0);
  
  useFrame(({ clock }) => {
    time.current = clock.getElapsedTime();
  });
  
  // Generate random positions for objects
  const objectPositions = useMemo(() => {
    return Array.from({ length: 6 }, () => [
      (Math.random() - 0.5) * 8,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 4
    ]);
  }, []);
  
  return (
    <>
      <CameraController mouse={mouse} />
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#8B5CF6" />
      
      {objectPositions.map((position, index) => (
        <InteractiveObject
          key={index}
          position={position}
          scale={0.5 + Math.random() * 0.5}
          mouse={mouse}
          time={time}
        />
      ))}
    </>
  );
}

// Main Hero Section Component
const HeroSection = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  
  // Mouse movement handler
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMouse({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  // GSAP Text Animation
  useEffect(() => {
    const tl = gsap.timeline();
    
    // Title animation
    if (titleRef.current) {
      const text = titleRef.current.textContent;
      titleRef.current.innerHTML = '';
      
      text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.className = 'char inline-block';
        titleRef.current.appendChild(span);
      });
      
      tl.from('.char', {
        opacity: 0,
        y: 100,
        rotationX: -90,
        transformOrigin: '0% 50% -50',
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.08,
        delay: 0.5
      });
    }
    
    // Subtitle animation
    if (subtitleRef.current) {
      tl.from(subtitleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.0,
        ease: 'power3.out'
      }, '-=0.5');
    }
    
    // Button animations
    tl.from('.hero-button', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.2
    }, '-=0.3');
    
  }, []);
  
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-900">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          style={{ background: '#111111' }}
          dpr={[1, 2]}
          performance={{ min: 0.5 }}
        >
          <Scene />
        </Canvas>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center px-6 max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 
            ref={titleRef}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-tight tracking-tight"
            style={{
              textShadow: '0 0 30px rgba(59, 130, 246, 0.3)',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            アイデアを、コードで形に。
          </h1>
          
          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 font-light tracking-wide"
            style={{
              textShadow: '0 0 20px rgba(139, 92, 246, 0.2)'
            }}
          >
            Digital Craftsmanship with a Human Touch
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="hero-button group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              <span className="relative z-10">プロジェクトを見る</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="hero-button group relative px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:scale-105">
              <span className="relative z-10">お問い合わせ</span>
            </button>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 animate-bounce">
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2 tracking-widest">SCROLL</span>
              <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"></div>
              <div className="w-2 h-2 bg-white/60 rounded-full mt-1"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-gray-900/30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;