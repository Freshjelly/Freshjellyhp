# 🪟 Windows セットアップガイド

Windows環境でFreshJelly Portfolio Websiteを開発するための詳細ガイドです。

## 📋 前提条件

### 必須ソフトウェア

1. **Node.js** (推奨: v18.17.0以上)
   - [Node.js公式サイト](https://nodejs.org/ja/) からLTS版をダウンロード
   - インストール時に「Add to PATH」にチェック

2. **Git**
   - [Git for Windows](https://gitforwindows.org/) をダウンロード
   - Git Bashを含むオプションを選択

3. **Visual Studio Code** (推奨)
   - [VS Code公式サイト](https://code.visualstudio.com/) からダウンロード

### 推奨ツール

1. **Windows Terminal** (Windows 11標準 / Windows 10は別途インストール)
   - [Microsoft Store](https://aka.ms/terminal) から入手

2. **PowerShell 7** (オプション)
   - [GitHub Releases](https://github.com/PowerShell/PowerShell/releases) から入手

## 🚀 セットアップ手順

### 1. リポジトリのクローン

```powershell
# PowerShell または Git Bash
git clone https://github.com/Freshjelly/Freshjellyhp.git
cd Freshjellyhp
```

### 2. Node.jsバージョン確認

```powershell
# Node.jsのバージョン確認
node --version
# v18.17.0 以上であることを確認

# npmのバージョン確認
npm --version
```

### 3. 依存関係のインストール

```powershell
# プロジェクトディレクトリで実行
npm install

# または yarn を使用する場合
npm install -g yarn
yarn install
```

### 4. 開発サーバーの起動

```powershell
# 開発サーバーを起動
npm run dev

# ブラウザで以下にアクセス
# http://localhost:3000
```

## ⚙️ Visual Studio Code 設定

### 推奨拡張機能

```json
{
  "recommendations": [
    "ms-vscode.vscode-typescript-next",
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json",
    "yzhang.markdown-all-in-one"
  ]
}
```

### settings.json 設定

プロジェクトルートに `.vscode/settings.json` を作成：

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  },
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"],
    ["className\\s*:\\s*['\"`]([^'\"`]*)['\"`]", "([a-zA-Z0-9\\-:]+)"]
  ]
}
```

## 🛠️ トラブルシューティング

### Node.js関連

#### 問題: `node` コマンドが認識されない
```powershell
# 解決方法1: PATHの確認
echo $env:PATH

# 解決方法2: Node.jsの再インストール
# https://nodejs.org からLTS版を再ダウンロード
```

#### 問題: npm install でエラーが発生
```powershell
# 解決方法1: キャッシュクリア
npm cache clean --force

# 解決方法2: node_modules削除後に再インストール
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### Git関連

#### 問題: git clone で認証エラー
```powershell
# HTTPSを使用する場合
git clone https://github.com/Freshjelly/Freshjellyhp.git

# SSH鍵を設定する場合（推奨）
# 1. SSH鍵を生成
ssh-keygen -t ed25519 -C "your-email@example.com"

# 2. SSH鍵をGitHubに登録
# https://github.com/settings/ssh/new
```

### ポート関連

#### 問題: ポート3000が使用中
```powershell
# 使用中のポートを確認
netstat -ano | findstr :3000

# プロセスを終了
taskkill /PID <プロセスID> /F

# または別のポートを使用
npm run dev -- --port 3001
```

### パフォーマンス最適化

#### 問題: 開発サーバーが重い
```powershell
# Windows Defender の除外設定
# プロジェクトフォルダを除外リストに追加
# 設定 > 更新とセキュリティ > Windows セキュリティ > ウイルスと脅威の防止 > 除外

# または .gitignore に以下を追加
.next/
node_modules/
```

## 🔧 スクリプト説明

```json
{
  "scripts": {
    "dev": "next dev --turbopack",      // 開発サーバー（Turbopack使用）
    "build": "next build",              // 本番ビルド
    "start": "next start",              // 本番サーバー起動
    "lint": "next lint"                 // ESLintチェック
  }
}
```

### カスタムスクリプト実行

```powershell
# 開発サーバーを別ポートで起動
npm run dev -- --port 3001

# ビルドして本番サーバーを起動
npm run build
npm run start

# ESLintでコードチェック
npm run lint

# ESLintで自動修正
npm run lint -- --fix
```

## 🌐 ブラウザサポート

### 推奨ブラウザ
- **Chrome** (推奨) - 最新版
- **Edge** - 最新版  
- **Firefox** - 最新版
- **Safari** - 最新版

### 開発者ツール設定
```javascript
// Chrome DevTools で3Dデバッグ
// F12 > Console タブで実行
console.log('Three.js scene:', window.__THREE_DEVTOOLS__)
```

## 📱 モバイル開発

### ローカルネットワークアクセス
```powershell
# IPアドレスを確認
ipconfig

# 開発サーバーを全IPでリッスン
npm run dev -- --hostname 0.0.0.0

# モバイルからアクセス
# http://[あなたのIP]:3000
```

## 🚀 デプロイ準備

### Vercel CLI（Windows）
```powershell
# Vercel CLIインストール
npm install -g vercel

# ログイン
vercel login

# デプロイ
vercel --prod
```

### 環境変数設定（.env.local）
```env
# 本番環境で使用する環境変数
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📝 追加リソース

### 学習資料
- [Next.js公式ドキュメント](https://nextjs.org/docs)
- [Three.js Journey](https://threejs-journey.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [TailwindCSS](https://tailwindcss.com/docs)

### Windows固有のTips
- **文字コード**: UTF-8を使用
- **改行コード**: LF（Git設定で自動変換）
- **ファイルパス**: スラッシュ（/）を使用
- **大文字小文字**: 区別する設定を推奨

---

## 🆘 サポート

問題が発生した場合：

1. **GitHub Issues**: [Issues page](https://github.com/Freshjelly/Freshjellyhp/issues)
2. **Discord/Slack**: 開発者コミュニティ参加
3. **Stack Overflow**: Next.js、Three.js関連の質問

Happy Coding! 🚀