'use client'

import { motion } from 'framer-motion'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollAnimations'

const skills = [
  { name: 'React/Next.js', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Language' },
  { name: 'Three.js', level: 85, category: 'Animation' },
  { name: 'TailwindCSS', level: 95, category: 'Styling' },
  { name: 'Node.js', level: 80, category: 'Backend' },
  { name: 'UI/UX Design', level: 88, category: 'Design' },
  { name: 'Framer Motion', level: 92, category: 'Animation' },
  { name: 'Python', level: 75, category: 'Language' }
]

const timeline = [
  {
    year: '2024',
    title: 'フリーランス開発者として独立',
    description: 'より多様なプロジェクトに挑戦し、クリエイティブな表現を追求'
  },
  {
    year: '2022-2023',
    title: 'スタートアップでフロントエンド開発',
    description: 'React/Next.jsを中心とした大規模アプリケーション開発に従事'
  },
  {
    year: '2020-2022',
    title: 'ウェブ制作会社でUI/UX設計',
    description: 'デザインからコーディングまで一貫したサービス提供を経験'
  },
  {
    year: '2018-2020',
    title: 'プログラミング学習開始',
    description: 'HTML/CSS/JavaScriptから始まり、モダンな技術スタックを習得'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-off-white via-white to-off-white pt-20">
      {/* ヒーローセクション */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-trust-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-warm-orange/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-dark-navy mb-6">
                  About
                  <span className="bg-gradient-to-r from-trust-blue to-warm-orange bg-clip-text text-transparent">
                    {' '}Me
                  </span>
                </h1>
                <p className="text-xl text-custom-gray leading-relaxed mb-8">
                  こんにちは！私は<strong>デジタルクリエイター</strong>として、
                  コードとデザインの力で人々の生活をより良くする体験を創造しています。
                </p>
                <p className="text-lg text-custom-gray leading-relaxed">
                  技術的な専門性と創造的な表現力を組み合わせ、
                  ユーザーの心に響くウェブ体験を設計・開発することが私の使命です。
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="relative">
                <div className="w-full aspect-square bg-gradient-to-br from-trust-blue via-trust-blue-hover to-warm-orange rounded-3xl relative overflow-hidden">
                  <div className="absolute inset-4 bg-white rounded-2xl flex items-center justify-center">
                    <div className="text-6xl">👨‍💻</div>
                  </div>
                </div>
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-warm-orange rounded-full flex items-center justify-center text-white text-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  ✨
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* スキルセクション */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-dark-navy mb-4">Skills & Expertise</h2>
              <p className="text-lg text-custom-gray max-w-2xl mx-auto">
                継続的な学習と実践を通じて習得した技術スタック
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <StaggerItem key={skill.name}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-dark-navy">{skill.name}</h3>
                    <span className="text-sm text-custom-gray bg-gray-100 px-2 py-1 rounded-full">
                      {skill.category}
                    </span>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-trust-blue to-warm-orange rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/20 rounded-full"></div>
                      </motion.div>
                    </div>
                    <span className="text-sm text-dark-navy font-medium mt-2 block">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* タイムラインセクション */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-dark-navy mb-4">Journey</h2>
              <p className="text-lg text-custom-gray">
                私のキャリアパスと成長の軌跡
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* タイムライン */}
            <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-trust-blue via-warm-orange to-trust-blue"></div>
            
            <StaggerContainer className="space-y-12">
              {timeline.map((item, index) => (
                <StaggerItem key={item.year}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="text-trust-blue font-bold text-lg mb-2">{item.year}</div>
                        <h3 className="text-xl font-semibold text-dark-navy mb-3">{item.title}</h3>
                        <p className="text-custom-gray leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* 中央のドット */}
                    <div className="relative z-10">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="w-4 h-4 bg-gradient-to-r from-trust-blue to-warm-orange rounded-full"
                      />
                    </div>
                    
                    <div className="w-1/2"></div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* 趣味・関心セクション */}
      <section className="py-20 bg-gradient-to-r from-dark-navy/5 to-trust-blue/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-dark-navy mb-4">Beyond Code</h2>
              <p className="text-lg text-custom-gray">
                コーディング以外の時間で大切にしていること
              </p>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="text-center">
                <div className="text-6xl mb-4">☕</div>
                <h3 className="text-xl font-semibold text-dark-navy mb-3">カフェ巡り</h3>
                <p className="text-custom-gray">
                  新しいカフェを発見し、美味しいコーヒーを味わいながらインスピレーションを得ています
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="text-center">
                <div className="text-6xl mb-4">📷</div>
                <h3 className="text-xl font-semibold text-dark-navy mb-3">写真撮影</h3>
                <p className="text-custom-gray">
                  街の風景や日常の美しい瞬間を切り取ることで、デザインセンスを磨いています
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="text-center">
                <div className="text-6xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold text-dark-navy mb-3">アート鑑賞</h3>
                <p className="text-custom-gray">
                  美術館やギャラリーを訪れ、クリエイティブなアイデアの源泉を探求しています
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>
    </div>
  )
}