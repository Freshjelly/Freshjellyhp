'use client'

import { useRef, useMemo, useCallback, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'

interface CubeProps {
  position: [number, number, number]
  targetPosition: [number, number, number]
  delay: number
  mousePosition: { x: number; y: number }
}

function Cube({ position, targetPosition, delay, mousePosition }: CubeProps) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (!meshRef.current) return
    
    // アニメーション進行度（0から1）
    const progress = Math.min((state.clock.elapsedTime - delay) / 2, 1)
    const smoothProgress = THREE.MathUtils.smoothstep(progress, 0, 1)
    
    if (progress > 0) {
      // 初期位置からターゲット位置への補間
      meshRef.current.position.lerpVectors(
        new THREE.Vector3(...position),
        new THREE.Vector3(...targetPosition),
        smoothProgress
      )
    }
    
    // マウス追従効果
    const mouseInfluence = 0.5
    const distanceToMouse = Math.sqrt(
      (mousePosition.x - meshRef.current.position.x) ** 2 +
      (mousePosition.y - meshRef.current.position.y) ** 2
    )
    
    if (distanceToMouse < 3) {
      const influence = (3 - distanceToMouse) / 3
      meshRef.current.position.x += (mousePosition.x - meshRef.current.position.x) * influence * mouseInfluence * 0.1
      meshRef.current.position.y += (mousePosition.y - meshRef.current.position.y) * influence * mouseInfluence * 0.1
    }
    
    // 回転
    meshRef.current.rotation.x += 0.01
    meshRef.current.rotation.y += 0.01
    
    // ホバー効果
    meshRef.current.scale.setScalar(hovered ? 1.2 : 1)
  })
  
  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial 
        color={hovered ? "#ED8936" : "#4299E1"}
        emissive={hovered ? "#ED8936" : "#4299E1"}
        emissiveIntensity={hovered ? 0.3 : 0.1}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  )
}

function Scene({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  // F字型の配置を作成
  const cubePositions = useMemo(() => {
    const positions: Array<{ 
      initial: [number, number, number]; 
      target: [number, number, number]; 
      delay: number 
    }> = []
    
    // F字の形状定義
    const fShape = [
      // 縦の線
      [0, 3], [0, 2], [0, 1], [0, 0], [0, -1], [0, -2],
      // 上の横線
      [1, 3], [2, 3], [3, 3],
      // 中の横線
      [1, 1], [2, 1],
    ]
    
    fShape.forEach(([x, y], index) => {
      // 初期位置（ランダムに散らばった状態）
      const initialPos: [number, number, number] = [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10
      ]
      
      // ターゲット位置（F字の形）
      const targetPos: [number, number, number] = [x - 1.5, y - 0.5, 0]
      
      positions.push({
        initial: initialPos,
        target: targetPos,
        delay: index * 0.1
      })
    })
    
    return positions
  }, [])
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ED8936" />
      
      {cubePositions.map((cube, index) => (
        <Cube
          key={index}
          position={cube.initial}
          targetPosition={cube.target}
          delay={cube.delay}
          mousePosition={mousePosition}
        />
      ))}
      
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  )
}

interface CubeFormationProps {
  className?: string
}

export default function CubeFormation({ className = "" }: CubeFormationProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    const y = -((event.clientY - rect.top) / rect.height) * 2 + 1
    
    setMousePosition({ x: x * 5, y: y * 5 })
  }, [])
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full h-full cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ width: '100%', height: '100%' }}
      >
        <Scene mousePosition={mousePosition} />
      </Canvas>
    </motion.div>
  )
}