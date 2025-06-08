import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FreshJelly - Digital Craftsmanship with a Human Touch',
  description: 'プロフェッショナルなウェブ開発とクリエイティブなデザインを組み合わせた、温かみのあるデジタル体験を創造します。',
  keywords: 'ウェブ開発, フロントエンド, React, Next.js, デザイン, ポートフォリオ, Three.js, GSAP',
  author: 'FreshJelly',
  themeColor: '#3B82F6',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}