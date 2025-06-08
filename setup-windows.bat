@echo off
chcp 65001 > nul
echo.
echo 🚀 FreshJelly Portfolio Website - Windows セットアップ
echo ============================================================
echo.

echo 📋 前提条件チェック...
echo.

REM Node.jsチェック
node --version > nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.jsが見つかりません
    echo    インストール: https://nodejs.org/
    pause
    exit /b 1
) else (
    echo ✅ Node.js: 
    node --version
)

REM npmチェック
npm --version > nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ npmが見つかりません
    pause
    exit /b 1
) else (
    echo ✅ npm: v
    npm --version
)

REM Gitチェック
git --version > nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Gitが見つかりません
    echo    インストール: https://gitforwindows.org/
    pause
    exit /b 1
) else (
    echo ✅ Git: 
    git --version
)

echo.
echo 📦 依存関係をインストール中...
echo.

if exist package-lock.json (
    echo package-lock.json が見つかりました。npm ci を実行します...
    npm ci
) else (
    echo npm install を実行します...
    npm install
)

if %errorlevel% neq 0 (
    echo ❌ 依存関係のインストールに失敗しました
    echo トラブルシューティング:
    echo 1. npm cache clean --force
    echo 2. rmdir /s node_modules
    echo 3. del package-lock.json
    echo 4. npm install
    pause
    exit /b 1
)

echo ✅ 依存関係のインストール完了
echo.

echo 🏗️ ビルドテスト中...
npm run build

if %errorlevel% neq 0 (
    echo ❌ ビルドに失敗しました
    pause
    exit /b 1
)

echo ✅ ビルドテスト完了
echo.

echo 🎉 セットアップ完了！
echo ============================================================
echo.
echo 🚀 次のステップ:
echo 1. 開発サーバーを起動: npm run dev
echo 2. ブラウザでアクセス: http://localhost:3000
echo 3. VS Code で開く: code .
echo.
echo 📚 ドキュメント:
echo - README.md: プロジェクト概要
echo - WINDOWS_SETUP.md: Windows詳細ガイド
echo - STRUCTURE.md: プロジェクト構造
echo.
echo 🛠️ 利用可能なコマンド:
echo npm run dev    # 開発サーバー起動
echo npm run build  # 本番ビルド
echo npm run start  # 本番サーバー起動
echo npm run lint   # コード品質チェック
echo.

set /p startDev="開発サーバーを今すぐ起動しますか？ (y/N): "
if /i "%startDev%"=="y" (
    echo.
    echo 🌟 開発サーバーを起動中...
    echo ブラウザで http://localhost:3000 を開いてください
    echo 停止するには Ctrl+C を押してください
    npm run dev
) else (
    echo 開発を開始するには 'npm run dev' を実行してください
    pause
)