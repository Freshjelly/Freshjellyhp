# 🚀 FreshJelly Portfolio Website

> Digital Craftsmanship with a Human Touch

美しい3Dアニメーションとインタラクティブな体験を組み合わせた、モダンなポートフォリオウェブサイト

## ✨ 特徴

### 🎨 デザイン・UX
- **インタラクティブ3Dオブジェクト** - Three.jsによるF字型キューブフォーメーション
- **パーティクルシステム** - マウス追従エフェクトで没入感を演出
- **スムーズなアニメーション** - Framer Motionによる洗練された動き
- **レスポンシブデザイン** - あらゆるデバイスに対応

### 🛠️ 技術的特徴
- **モダンな技術スタック** - Next.js 15 + TypeScript
- **高いパフォーマンス** - 最適化されたビルドサイズ（141KB）
- **アクセシビリティ対応** - WCAG準拠、キーボードナビゲーション
- **SEO最適化** - メタデータ、構造化データ対応

## 🎯 ページ構成

### 🏠 Home
- ヒーローセクション（3Dアニメーション）
- サービス紹介
- スクロールトリガーアニメーション

### 👤 About  
- スキルチャート（アニメーション付き）
- キャリアタイムライン
- 趣味・関心事

### 💼 Work
- プロジェクトカード（ホバーエフェクト）
- カテゴリフィルタリング
- 技術スタック表示

### 📝 Blog
- 記事一覧（マソンリーレイアウト）
- カテゴリ別フィルター
- ニュースレター購読

## 🎨 デザインシステム

### カラーパレット
```css
--color-dark-navy: #1A202C       /* メイン背景 */
--color-trust-blue: #4299E1      /* アクセントカラー */
--color-warm-orange: #ED8936     /* セカンダリアクセント */
--color-off-white: #F7FAFC       /* テキスト・背景 */
```

### タイポグラフィ
- **日本語**: Noto Sans JP
- **英語見出し**: Montserrat / Poppins
- **レスポンシブフォントサイズ**: clamp()使用

## 🚀 技術スタック

### フロントエンド
- **Next.js 15** - React フレームワーク
- **TypeScript** - 型安全性
- **TailwindCSS** - ユーティリティファーストCSS

### アニメーション・3D
- **Three.js** - 3Dレンダリング
- **@react-three/fiber** - React Three.js ラッパー
- **@react-three/drei** - Three.js ヘルパー
- **Framer Motion** - アニメーションライブラリ

### 開発・品質
- **ESLint** - コード品質
- **TypeScript** - 型チェック
- **Git** - バージョン管理

## 📦 インストール・セットアップ

### 前提条件
- Node.js 18.0.0 以上
- npm または yarn
- Git

### 🪟 Windows ユーザー向け

**自動セットアップ（推奨）**:
```powershell
# PowerShell
git clone https://github.com/Freshjelly/Freshjellyhp.git
cd Freshjellyhp
.\setup-windows.ps1

# または コマンドプロンプト
git clone https://github.com/Freshjelly/Freshjellyhp.git
cd Freshjellyhp
setup-windows.bat
```

**詳細ガイド**: [WINDOWS_SETUP.md](WINDOWS_SETUP.md) を参照

### 🍎 macOS / 🐧 Linux

```bash
# リポジトリをクローン
git clone https://github.com/Freshjelly/Freshjellyhp.git
cd Freshjellyhp

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

### スクリプト
```bash
npm run dev      # 開発サーバー起動
npm run build    # 本番ビルド
npm run start    # 本番サーバー起動
npm run lint     # ESLintチェック
```

## 🌐 デプロイ

### Vercel（推奨）
```bash
# Vercel CLIでデプロイ
npm i -g vercel
vercel --prod
```

### 手動デプロイ
1. [Vercel](https://vercel.com)にアクセス
2. GitHubリポジトリを連携
3. 自動デプロイ開始

## 📊 パフォーマンス

### ビルドサイズ
```
Route (app)                Size  First Load JS
┌ ○ /                   4.19 kB      141 kB
├ ○ /about             2.99 kB      140 kB  
├ ○ /work              3.05 kB      140 kB
└ ○ /blog              3.29 kB      140 kB
```

### 最適化項目
- ✅ コード分割（動的インポート）
- ✅ 画像最適化（Next.js Image）
- ✅ フォント最適化
- ✅ Three.js遅延読み込み
- ✅ Critical CSS

## 🎯 アクセシビリティ

### 対応項目
- ✅ キーボードナビゲーション
- ✅ スクリーンリーダー対応
- ✅ ARIAラベル
- ✅ カラーコントラスト（WCAG AA準拠）
- ✅ フォーカス管理
- ✅ reduced-motion対応

## 📝 ライセンス

MIT License - 詳細は [LICENSE](LICENSE) ファイルを参照

## 👨‍💻 作成者

**FreshJelly**
- GitHub: [@Freshjelly](https://github.com/Freshjelly)
- Portfolio: [freshjelly.dev](https://freshjelly.dev)

---

## 🤖 Generated with Claude Code

このプロジェクトは [Claude Code](https://claude.ai/code) を使用して作成されました。

Co-Authored-By: Claude <noreply@anthropic.com>