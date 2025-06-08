'use client'

import { motion } from 'framer-motion'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ScrollAnimations'

const blogPosts = [
  {
    id: '1',
    title: 'React 19の新機能を深掘り',
    excerpt: 'React 19で追加された新しい機能とその実装方法について詳しく解説します。Suspenseの改善やServer Componentsの進化について...',
    category: 'Tech',
    date: '2024年12月1日',
    readTime: '5分',
    image: '/images/blog1.jpg',
    tags: ['React', 'JavaScript', 'Frontend']
  },
  {
    id: '2',
    title: '渋谷の隠れ家カフェ「Blue Bottle Coffee」',
    excerpt: 'コーヒー愛好家として、今回は渋谷にある素敵なカフェを発見しました。こだわりのコーヒーと落ち着いた空間が魅力的で...',
    category: 'Life',
    date: '2024年11月28日',
    readTime: '3分',
    image: '/images/blog2.jpg',
    tags: ['カフェ', '渋谷', 'コーヒー']
  },
  {
    id: '3',
    title: 'Three.jsでインタラクティブな3D体験を作る',
    excerpt: 'ウェブブラウザ上で美しい3D体験を提供するThree.jsの基本的な使い方から応用まで、実践的な例を交えて解説します...',
    category: 'Tech',
    date: '2024年11月25日',
    readTime: '8分',
    image: '/images/blog3.jpg',
    tags: ['Three.js', '3D', 'WebGL']
  },
  {
    id: '4',
    title: '街角で見つけた美しい瞬間',
    excerpt: '普段の散歩中に撮影した写真を通して、日常に潜む美しさについて考えてみました。光と影、色彩の組み合わせが生み出すアート...',
    category: 'Photography',
    date: '2024年11月22日',
    readTime: '4分',
    image: '/images/blog4.jpg',
    tags: ['写真', 'アート', '日常']
  },
  {
    id: '5',
    title: 'フリーランス1年目で学んだこと',
    excerpt: 'フリーランス開発者として独立してから1年が経ちました。この期間で学んだこと、失敗談、成功体験を率直に振り返ります...',
    category: 'Career',
    date: '2024年11月20日',
    readTime: '6分',
    image: '/images/blog5.jpg',
    tags: ['フリーランス', 'キャリア', '体験談']
  },
  {
    id: '6',
    title: 'Framer Motionでマイクロインタラクション',
    excerpt: 'ユーザー体験を向上させるマイクロインタラクションの設計と実装について、Framer Motionを使った具体例とともに説明します...',
    category: 'Tech',
    date: '2024年11月18日',
    readTime: '7分',
    image: '/images/blog6.jpg',
    tags: ['Framer Motion', 'UX', 'Animation']
  }
]

const categories = ['All', 'Tech', 'Life', 'Photography', 'Career']

const CategoryBadge = ({ category }: { category: string }) => {
  const colors = {
    Tech: 'from-trust-blue to-trust-blue-hover',
    Life: 'from-warm-orange to-warm-orange-hover',
    Photography: 'from-purple-500 to-purple-600',
    Career: 'from-green-500 to-green-600',
  }
  
  return (
    <span className={`px-3 py-1 bg-gradient-to-r ${colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600'} text-white text-sm rounded-full font-medium`}>
      {category}
    </span>
  )
}

const BlogCard = ({ post }: { post: typeof blogPosts[0] }) => {
  return (
    <StaggerItem>
      <motion.article
        whileHover={{ y: -8, scale: 1.02 }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
      >
        {/* 画像部分 */}
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-trust-blue via-trust-blue-hover to-warm-orange">
          <div className="absolute top-4 left-4 z-10">
            <CategoryBadge category={post.category} />
          </div>
          
          {/* オーバーレイ効果 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-dark-navy/20 z-5"
          />
        </div>

        {/* コンテンツ部分 */}
        <div className="p-6">
          <div className="flex items-center text-sm text-custom-gray mb-3">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}で読める</span>
          </div>
          
          <h2 className="text-xl font-bold text-dark-navy mb-3 group-hover:text-trust-blue transition-colors duration-300 line-clamp-2">
            {post.title}
          </h2>
          
          <p className="text-custom-gray mb-4 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
          
          {/* タグ */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: tagIndex * 0.05 }}
                className="px-2 py-1 bg-gray-100 text-dark-navy-light text-xs rounded-md hover:bg-trust-blue/10 transition-colors"
              >
                #{tag}
              </motion.span>
            ))}
          </div>
          
          {/* 続きを読む */}
          <motion.div
            whileHover={{ x: 5 }}
            className="flex items-center text-trust-blue font-medium group-hover:text-warm-orange transition-colors duration-300"
          >
            続きを読む
            <motion.span
              className="ml-2"
              whileHover={{ x: 3 }}
            >
              →
            </motion.span>
          </motion.div>
        </div>
      </motion.article>
    </StaggerItem>
  )
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-off-white via-white to-off-white pt-20">
      {/* ヘッダーセクション */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-64 h-64 bg-trust-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-warm-orange/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold text-dark-navy mb-6">
              <span className="bg-gradient-to-r from-trust-blue via-dark-navy to-warm-orange bg-clip-text text-transparent">
                Blog
              </span>
            </h1>
            <p className="text-xl text-custom-gray max-w-3xl mx-auto leading-relaxed mb-8">
              技術的な知見から日常の発見まで、
              <br />
              私の思考と体験を記録した場所
            </p>
          </ScrollReveal>

          {/* カテゴリーフィルター */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    index === 0 
                      ? 'bg-gradient-to-r from-trust-blue to-warm-orange text-white shadow-lg'
                      : 'bg-white text-dark-navy hover:bg-trust-blue hover:text-white shadow-md hover:shadow-lg'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ブログ記事グリッド */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ニュースレター購読 */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-navy/5 to-trust-blue/5" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-navy mb-4">
                最新記事を見逃さない
              </h2>
              <p className="text-lg text-custom-gray mb-8 leading-relaxed">
                新しい記事の更新通知を受け取りませんか？
                技術やデザインの最新トレンドをお届けします。
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="メールアドレス"
                  className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-trust-blue"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-trust-blue to-warm-orange text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  購読する
                </motion.button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}