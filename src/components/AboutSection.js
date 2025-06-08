'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const visualRef = useRef(null);
  
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });
    
    tl.fromTo(textRef.current, {
      opacity: 0,
      x: -80
    }, {
      opacity: 1,
      x: 0,
      duration: 1.2,
      ease: 'power3.out'
    })
    .fromTo(visualRef.current, {
      opacity: 0,
      x: 80,
      rotationY: 15
    }, {
      opacity: 1,
      x: 0,
      rotationY: 0,
      duration: 1.2,
      ease: 'power3.out'
    }, '-=0.8');
  }, []);
  
  return (
    <section ref={sectionRef} className="relative py-24 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div ref={textRef} className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                About
              </span>
              <br />
              <span className="text-gray-900">FreshJelly</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                私たちは、技術的な専門知識と創造的なビジョンを組み合わせて、
                お客様のデジタルプレゼンスを次のレベルに引き上げることを使命としています。
              </p>
              <p>
                最新のフロントエンド技術とユーザー中心設計の原則に基づいて、
                美しく機能的なウェブエクスペリエンスを創造します。
              </p>
              <p>
                React、Three.js、GSAP、そして最新のWebGL技術を駆使して、
                従来の枠を超えたインタラクティブな体験を提供しています。
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-2 rounded-full border border-blue-100">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">リアルタイム対応</span>
              </div>
              <div className="flex items-center space-x-3 bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-2 rounded-full border border-purple-100">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">最新技術</span>
              </div>
              <div className="flex items-center space-x-3 bg-gradient-to-r from-pink-50 to-blue-50 px-4 py-2 rounded-full border border-pink-100">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">クリエイティブ</span>
              </div>
            </div>
            
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
              <span className="relative z-10">もっと詳しく</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
          
          {/* Visual Element */}
          <div ref={visualRef} className="relative">
            <div className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-3xl p-12 overflow-hidden">
              {/* 3D-like Elements */}
              <div className="relative space-y-8">
                {/* Innovation Icon */}
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Innovation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    革新的なアプローチで<br/>
                    お客様の課題を解決します
                  </p>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-500 rounded-xl opacity-20 animate-float"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg opacity-30 animate-float animation-delay-1000"></div>
                <div className="absolute top-1/2 left-8 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-25 animate-float animation-delay-2000"></div>
              </div>
              
              {/* Grid Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full" style={{
                  backgroundImage: `linear-gradient(rgba(59,130,246,0.1) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(59,130,246,0.1) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;