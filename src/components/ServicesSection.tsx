'use client'

import { motion } from 'framer-motion'
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollAnimations'

const services = [
  {
    title: "ウェブ開発",
    description: "モダンな技術スタックを使用したレスポンシブWebアプリケーションの設計・開発",
    icon: "🚀",
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"]
  },
  {
    title: "UI/UXデザイン",
    description: "ユーザー中心設計に基づいた直感的で美しいインターフェースデザイン",
    icon: "🎨",
    technologies: ["Figma", "Adobe XD", "Framer", "Principle"]
  },
  {
    title: "パフォーマンス最適化",
    description: "Core Web Vitalsを考慮したWebサイトの速度最適化とSEO対策",
    icon: "⚡",
    technologies: ["Lighthouse", "WebPageTest", "Core Web Vitals", "SEO"]
  },
  {
    title: "アニメーション開発",
    description: "Framer Motionやthree.jsを使用したインタラクティブアニメーション",
    icon: "✨",
    technologies: ["Framer Motion", "Three.js", "GSAP", "Lottie"]
  }
]

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  return (
    <StaggerItem>
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
      >
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="text-4xl mb-6 inline-block"
        >
          {service.icon}
        </motion.div>
        
        <h3 className="text-2xl font-bold text-dark-navy mb-4 group-hover:text-trust-blue transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-custom-gray mb-6 leading-relaxed">
          {service.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {service.technologies.map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: techIndex * 0.1 }}
              className="px-3 py-1 bg-gradient-to-r from-trust-blue/10 to-warm-orange/10 text-dark-navy-light text-sm rounded-full font-medium border border-trust-blue/20"
            >
              {tech}
            </motion.span>
          ))}
        </div>
        
        <motion.div
          className="mt-6 w-full h-1 bg-gradient-to-r from-trust-blue to-warm-orange rounded-full origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        />
      </motion.div>
    </StaggerItem>
  )
}

export default function ServicesSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-off-white via-white to-off-white py-20 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-trust-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-warm-orange/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-dark-navy mb-6"
              style={{
                background: "linear-gradient(135deg, #1A202C, #4299E1, #ED8936)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Services
            </motion.h2>
            <p className="text-xl text-custom-gray max-w-3xl mx-auto leading-relaxed">
              最新技術と創造性を融合させ、あなたのビジョンを現実に変える
              <br />
              プロフェッショナルなデジタルソリューションを提供します
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.title} 
              service={service} 
              index={index} 
            />
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.5}>
          <div className="text-center mt-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-trust-blue to-warm-orange text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              詳しく見る
            </motion.button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}