'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface Project {
  id: string
  title: string
  description: string
  image: string
  video?: string
  technologies: string[]
  category: string
  link?: string
  github?: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_25px_rgba(0,0,0,0.15)] transition-all duration-300 relative w-full max-w-[400px] mx-auto">
        {/* 画像/動画セクション */}
        <div className="relative aspect-video overflow-hidden bg-gray-100">
          {/* 動画が設定されている場合 */}
          {isHovered && project.video ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-70"
            >
              <source src={project.video} type="video/mp4" />
            </video>
          ) : project.image ? (
            // 画像が設定されている場合
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            // プレースホルダー画像として gradientを使用
            <div className="absolute inset-0 bg-gradient-to-br from-trust-blue via-trust-blue-hover to-warm-orange" />
          )}
          
          {/* ホバー時のオーバーレイ効果 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-dark-navy/20 z-10"
          />
          
          {/* カテゴリーバッジ */}
          <div className="absolute top-4 left-4 z-20">
            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-dark-navy text-sm font-medium rounded-full">
              {project.category}
            </span>
          </div>
          
          {/* プロジェクトタイトル（ホバー時表示） */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 20 
            }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <div className="text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <div className="flex space-x-3">
                {project.link && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-4 py-2 bg-white text-dark-navy rounded-full text-sm font-medium hover:bg-off-white transition-colors"
                  >
                    View Live
                  </motion.button>
                )}
                {project.github && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-4 py-2 bg-dark-navy/80 text-white rounded-full text-sm font-medium hover:bg-dark-navy transition-colors"
                  >
                    GitHub
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* コンテンツセクション */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-dark-navy mb-3 group-hover:text-trust-blue transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-custom-gray mb-4 leading-relaxed line-clamp-2">
            {project.description}
          </p>
          
          {/* 技術スタック */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: techIndex * 0.05 }}
                className="px-2 py-1 bg-gradient-to-r from-trust-blue/10 to-warm-orange/10 text-dark-navy-light text-xs rounded-md font-medium border border-trust-blue/20"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* ホバー時のボトムライン */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-trust-blue to-warm-orange"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: 'left' }}
        />
      </div>
    </motion.div>
  )
}