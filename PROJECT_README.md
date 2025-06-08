# 🍯 FreshJelly HP Project

> Digital Craftsmanship with a Human Touch

FreshJellyのポートフォリオウェブサイトプロジェクト全体を管理するリポジトリです。

## 📂 プロジェクト構造

```
FreshJellyhp/
├── 📄 ウェブサイト制作要件定義書.md    # 詳細な要件定義書
├── 📂 freshjelly-site/              # 実際のウェブサイト（サブモジュール）
│   ├── 🚀 Next.js ポートフォリオサイト
│   ├── 🎨 3Dアニメーション & インタラクション
│   ├── 📱 完全レスポンシブ対応
│   └── 🪟 Windows完全サポート
└── 📄 README.md                    # このファイル
```

## 🎯 コンテンツ

### 📋 要件定義書
- **ファイル**: `ウェブサイト制作要件定義書.md`
- **内容**: 詳細な機能仕様、デザインガイドライン、技術要件
- **目的**: プロジェクトの全体像とゴールの明確化

### 🚀 ウェブサイト
- **ディレクトリ**: `freshjelly-site/`
- **技術**: Next.js 15 + TypeScript + Three.js + Framer Motion
- **機能**: インタラクティブ3D、アニメーション、レスポンシブデザイン

## 🛠️ セットアップ方法

### 📥 プロジェクト全体をクローン
```bash
# サブモジュールも含めて完全クローン
git clone --recursive https://github.com/Freshjelly/Freshjellyhp.git
cd Freshjellyhp
```

### 🌐 ウェブサイトの開発開始

#### Windows ユーザー
```powershell
cd freshjelly-site
.\setup-windows.ps1
```

#### macOS / Linux ユーザー
```bash
cd freshjelly-site
npm install
npm run dev
```

## 🤖 Generated with Claude Code

このプロジェクトは [Claude Code](https://claude.ai/code) を使用して作成されました。

Co-Authored-By: Claude <noreply@anthropic.com>