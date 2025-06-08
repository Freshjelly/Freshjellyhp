# 📁 プロジェクト構造

```
freshjelly-site/
├── 📂 src/
│   ├── 📂 app/                    # Next.js App Router
│   │   ├── 📄 layout.tsx          # ルートレイアウト
│   │   ├── 📄 page.tsx            # ホームページ
│   │   ├── 📄 globals.css         # グローバルスタイル
│   │   ├── 📂 about/
│   │   │   └── 📄 page.tsx        # Aboutページ
│   │   ├── 📂 work/
│   │   │   └── 📄 page.tsx        # Workページ
│   │   └── 📂 blog/
│   │       └── 📄 page.tsx        # Blogページ
│   │
│   └── 📂 components/             # 再利用可能コンポーネント
│       ├── 📄 Navigation.tsx      # ナビゲーション
│       ├── 📄 Hero.tsx            # ヒーローセクション
│       ├── 📄 CubeFormation.tsx   # 3Dキューブアニメーション
│       ├── 📄 ServicesSection.tsx # サービス紹介
│       ├── 📄 ProjectCard.tsx     # プロジェクトカード
│       └── 📄 ScrollAnimations.tsx # スクロールアニメーション
│
├── 📂 public/                     # 静的ファイル
│   ├── 🖼️ *.svg                   # SVGアイコン
│   └── 🖼️ favicon.ico             # ファビコン
│
├── ⚙️ tailwind.config.js          # TailwindCSS設定
├── ⚙️ tsconfig.json               # TypeScript設定
├── ⚙️ next.config.ts              # Next.js設定
├── ⚙️ package.json                # 依存関係
├── 📄 README.md                   # プロジェクト説明
└── 📄 STRUCTURE.md                # このファイル
```

## 🏗️ アーキテクチャ

### App Router構成
- **layout.tsx** - 全ページ共通のレイアウト（ナビゲーション含む）
- **page.tsx** - 各ページのメインコンテンツ
- **globals.css** - カスタムCSS変数、フォント、基本スタイル

### コンポーネント設計

#### 📄 Navigation.tsx
- レスポンシブナビゲーション
- スクロール検知による背景変化
- モバイルハンバーガーメニュー
- アクセシビリティ対応

#### 📄 Hero.tsx
- 3Dアニメーション統合
- パーティクルシステム
- タイポグラフィアニメーション
- パララックス効果

#### 📄 CubeFormation.tsx
- Three.js + React Three Fiber
- インタラクティブ3Dオブジェクト
- マウス追従エフェクト
- パフォーマンス最適化

#### 📄 ScrollAnimations.tsx
- 再利用可能なアニメーションコンポーネント
- Intersection Observer使用
- パフォーマンス重視の実装

### スタイリング戦略

#### TailwindCSS カスタマイズ
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'dark-navy': '#1A202C',
        'trust-blue': '#4299E1',
        'warm-orange': '#ED8936',
        // ...
      },
      fontFamily: {
        'noto-sans': ['Noto Sans JP', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        // ...
      },
      animation: {
        'fade-in-up': 'fadeInUp 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        // ...
      }
    }
  }
}
```

#### CSS変数（globals.css）
```css
:root {
  --color-dark-navy: #1A202C;
  --color-trust-blue: #4299E1;
  --gradient-primary: linear-gradient(135deg, var(--color-dark-navy) 0%, var(--color-dark-navy-light) 100%);
}
```

### パフォーマンス最適化

#### 1. コード分割
- 3Dコンポーネントの動的インポート
- ページベースの自動分割

#### 2. 画像最適化
- Next.js Image component使用
- WebP対応
- 遅延読み込み

#### 3. フォント最適化
- Google Fonts の最適な読み込み
- フォント表示の最適化

#### 4. アニメーション最適化
- GPU加速プロパティ使用
- will-change の適切な設定
- reduced-motion 対応

### 型安全性

#### TypeScript設定
- strict モード有効
- 型チェックの徹底
- コンポーネントpropsの型定義

#### インターフェース例
```typescript
interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  category: string
}

interface ProjectCardProps {
  project: Project
  index: number
}
```

## 🔧 開発ワークフロー

### 1. 新機能開発
```bash
# 新しいブランチ作成
git checkout -b feature/new-feature

# 開発
npm run dev

# ビルドテスト
npm run build

# コミット
git add .
git commit -m "✨ Add new feature"

# プッシュ
git push origin feature/new-feature
```

### 2. デバッグ
- React DevTools
- Three.js Inspector
- Chrome DevTools Performance

### 3. デプロイ
- Vercel自動デプロイ
- プルリクエスト時のプレビュー
- 本番環境の監視