import type { Metadata } from "next";
import { Noto_Sans_JP, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from '@/components/Navigation';

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FreshJelly - Digital Craftsmanship with a Human Touch",
  description: "プロフェッショナルなウェブ開発とクリエイティブなデザインを組み合わせた、温かみのあるデジタル体験を創造します。",
  keywords: "ウェブ開発, フロントエンド, React, Next.js, デザイン, ポートフォリオ",
  authors: [{ name: "FreshJelly" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#1A202C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${montserrat.variable} ${poppins.variable} antialiased`}
      >
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
