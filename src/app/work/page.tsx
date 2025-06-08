'use client'

import ProjectCard from '@/components/ProjectCard'
import { ScrollReveal } from '@/components/ScrollAnimations'

// サンプルプロジェクトデータ
const projects = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'モダンなReact.jsベースのECサイト。カート機能、決済システム、在庫管理を含む包括的なソリューション',
    image: '/images/project1.jpg',
    video: '/videos/project1.mp4',
    technologies: ['React', 'Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    category: 'Web Development',
    link: 'https://example.com',
    github: 'https://github.com/example/project1'
  },
  {
    id: '2',
    title: 'Portfolio Website',
    description: '3Dアニメーションと美しいUIを組み合わせたクリエイター向けポートフォリオサイト',
    image: '/images/project2.jpg',
    technologies: ['Three.js', 'React', 'Framer Motion', 'TailwindCSS'],
    category: 'UI/UX Design',
    link: 'https://example.com',
    github: 'https://github.com/example/project2'
  },
  {
    id: '3',
    title: 'Task Management App',
    description: 'チーム向けタスク管理アプリケーション。リアルタイム同期とプロジェクト管理機能を搭載',
    image: '/images/project3.jpg',
    technologies: ['Vue.js', 'Node.js', 'Socket.io', 'MongoDB'],
    category: 'Web Application',
    link: 'https://example.com'
  },
  {
    id: '4',
    title: 'Interactive Data Visualization',
    description: 'D3.jsを使用したインタラクティブなデータ可視化ダッシュボード',
    image: '/images/project4.jpg',
    technologies: ['D3.js', 'React', 'Python', 'FastAPI'],
    category: 'Data Visualization',
    github: 'https://github.com/example/project4'
  },
  {
    id: '5',
    title: 'Mobile Weather App',
    description: 'React Nativeで開発した天気予報アプリ。美しいアニメーションと直感的なUI',
    image: '/images/project5.jpg',
    technologies: ['React Native', 'Expo', 'Weather API', 'Reanimated'],
    category: 'Mobile Development',
    link: 'https://apps.apple.com/example'
  },
  {
    id: '6',
    title: 'Corporate Website',
    description: 'コーポレートサイトのリニューアル。SEO最適化とアクセシビリティを重視',
    image: '/images/project6.jpg',
    technologies: ['Next.js', 'Sanity CMS', 'TailwindCSS', 'Vercel'],
    category: 'Web Development',
    link: 'https://example.com'
  }
]

const categories = ['All', 'Web Development', 'UI/UX Design', 'Web Application', 'Data Visualization', 'Mobile Development']

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-off-white via-white to-off-white pt-20">
      {/* ヘッダーセクション */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-trust-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-warm-orange/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold text-dark-navy mb-6">
              <span 
                className="bg-gradient-to-r from-trust-blue via-dark-navy to-warm-orange bg-clip-text text-transparent"
              >
                My Work
              </span>
            </h1>
            <p className="text-xl text-custom-gray max-w-3xl mx-auto leading-relaxed">
              創造性と技術力を組み合わせて生み出された
              <br />
              プロジェクトの数々をご紹介します
            </p>
          </ScrollReveal>

          {/* カテゴリーフィルター */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    index === 0 
                      ? 'bg-gradient-to-r from-trust-blue to-warm-orange text-white shadow-lg'
                      : 'bg-white text-dark-navy hover:bg-trust-blue hover:text-white shadow-md hover:shadow-lg'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* プロジェクトグリッド */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-navy/5 to-trust-blue/5" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-navy mb-6">
              一緒にプロジェクトを始めませんか？
            </h2>
            <p className="text-lg text-custom-gray mb-8 leading-relaxed">
              あなたのアイデアを形にするお手伝いをします。
              お気軽にお問い合わせください。
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-trust-blue to-warm-orange text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              お問い合わせ
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}