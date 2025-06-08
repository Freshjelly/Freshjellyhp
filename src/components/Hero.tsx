'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

// 3Dコンポーネントを動的インポート（SSR回避）
const CubeFormation = dynamic(() => import('./CubeFormation'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-16 h-16 border-4 border-trust-blue border-t-transparent rounded-full"
      />
    </div>
  ),
})

const ScrollIndicator = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 3 }}
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
  >
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="flex flex-col items-center text-off-white/70"
    >
      <span className="text-sm mb-2 font-light tracking-wider">SCROLL</span>
      <motion.div
        className="w-px h-12 bg-gradient-to-b from-trust-blue to-transparent"
        animate={{ scaleY: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="w-2 h-2 bg-trust-blue rounded-full mt-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  </motion.div>
)

const ParticleBackground = () => {
  const [particles, setParticles] = useState<Array<{
    id: number
    x: number
    y: number
    size: number
    opacity: number
    speed: number
  }>>([])

  useEffect(() => {
    const particleArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.5 + 0.1,
    }))
    setParticles(particleArray)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-trust-blue"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
          animate={{
            y: [0, -100, -200],
            opacity: [particle.opacity, particle.opacity * 0.5, 0],
          }}
          transition={{
            duration: 10 + particle.speed * 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e
    const { innerWidth, innerHeight } = window
    setMousePosition({
      x: (clientX / innerWidth - 0.5) * 20,
      y: (clientY / innerHeight - 0.5) * 20,
    })
  }

  return (
    <section 
      className="relative h-screen bg-gradient-to-br from-dark-navy via-dark-navy-light to-dark-navy overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* パーティクル背景 */}
      <ParticleBackground />
      
      {/* 3Dオブジェクト */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 max-w-[80vw] max-h-[80vw]">
          <CubeFormation />
        </div>
      </div>

      {/* パララックス背景要素 */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-trust-blue/5 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-warm-orange/5 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * -0.5,
          y: mousePosition.y * -0.5,
        }}
        transition={{ type: "spring", stiffness: 30, damping: 30 }}
      />

      {/* キャッチコピー */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.5, 
            delay: 2.5,
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="text-center z-10"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-noto-sans text-off-white mb-6 leading-tight"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            style={{
              background: "linear-gradient(90deg, #F7FAFC, #4299E1, #ED8936, #F7FAFC)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            アイデアを、
            <br />
            コードで形に。
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.5 }}
            className="text-lg md:text-xl text-off-white/80 font-light tracking-wide"
          >
            Digital Craftsmanship with a Human Touch
          </motion.p>
        </motion.div>
      </div>

      {/* スクロールインジケーター */}
      <ScrollIndicator />

      {/* グラデーション装飾 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-off-white/10 to-transparent pointer-events-none" />
    </section>
  )
}