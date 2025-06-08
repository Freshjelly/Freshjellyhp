# FreshJelly Portfolio Website - Windows Setup Script
# PowerShell実行ポリシーが必要な場合: Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

Write-Host "🚀 FreshJelly Portfolio Website - Windows セットアップ" -ForegroundColor Green
Write-Host "=" * 60

# Node.jsバージョンチェック
Write-Host "`n📋 前提条件チェック..." -ForegroundColor Yellow

try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js: $nodeVersion" -ForegroundColor Green
    
    if ([version]($nodeVersion -replace "v", "") -lt [version]"18.0.0") {
        Write-Host "⚠️  警告: Node.js 18.0.0以上を推奨します" -ForegroundColor Red
        Write-Host "   最新版をダウンロード: https://nodejs.org/" -ForegroundColor Yellow
    }
} catch {
    Write-Host "❌ Node.jsが見つかりません" -ForegroundColor Red
    Write-Host "   インストール: https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

try {
    $npmVersion = npm --version
    Write-Host "✅ npm: v$npmVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ npmが見つかりません" -ForegroundColor Red
    exit 1
}

try {
    $gitVersion = git --version
    Write-Host "✅ Git: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Gitが見つかりません" -ForegroundColor Red
    Write-Host "   インストール: https://gitforwindows.org/" -ForegroundColor Yellow
    exit 1
}

# 依存関係インストール
Write-Host "`n📦 依存関係をインストール中..." -ForegroundColor Yellow

if (Test-Path "package-lock.json") {
    Write-Host "package-lock.json が見つかりました。npm ci を実行します..." -ForegroundColor Blue
    npm ci
} else {
    Write-Host "npm install を実行します..." -ForegroundColor Blue
    npm install
}

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ 依存関係のインストールに失敗しました" -ForegroundColor Red
    Write-Host "トラブルシューティング:" -ForegroundColor Yellow
    Write-Host "1. npm cache clean --force" -ForegroundColor Yellow
    Write-Host "2. Remove-Item -Recurse node_modules" -ForegroundColor Yellow
    Write-Host "3. Remove-Item package-lock.json" -ForegroundColor Yellow
    Write-Host "4. npm install" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ 依存関係のインストール完了" -ForegroundColor Green

# ビルドテスト
Write-Host "`n🏗️  ビルドテスト中..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ ビルドに失敗しました" -ForegroundColor Red
    exit 1
}

Write-Host "✅ ビルドテスト完了" -ForegroundColor Green

# セットアップ完了
Write-Host "`n🎉 セットアップ完了！" -ForegroundColor Green
Write-Host "=" * 60

Write-Host "`n🚀 次のステップ:" -ForegroundColor Cyan
Write-Host "1. 開発サーバーを起動: npm run dev" -ForegroundColor White
Write-Host "2. ブラウザでアクセス: http://localhost:3000" -ForegroundColor White
Write-Host "3. VS Code で開く: code ." -ForegroundColor White

Write-Host "`n📚 ドキュメント:" -ForegroundColor Cyan
Write-Host "- README.md: プロジェクト概要" -ForegroundColor White
Write-Host "- WINDOWS_SETUP.md: Windows詳細ガイド" -ForegroundColor White
Write-Host "- STRUCTURE.md: プロジェクト構造" -ForegroundColor White

Write-Host "`n🛠️  利用可能なコマンド:" -ForegroundColor Cyan
Write-Host "npm run dev    # 開発サーバー起動" -ForegroundColor White
Write-Host "npm run build  # 本番ビルド" -ForegroundColor White
Write-Host "npm run start  # 本番サーバー起動" -ForegroundColor White
Write-Host "npm run lint   # コード品質チェック" -ForegroundColor White

# 開発サーバー起動確認
$startDev = Read-Host "`n開発サーバーを今すぐ起動しますか？ (y/N)"
if ($startDev -eq "y" -or $startDev -eq "Y") {
    Write-Host "`n🌟 開発サーバーを起動中..." -ForegroundColor Green
    Write-Host "ブラウザで http://localhost:3000 を開いてください" -ForegroundColor Yellow
    Write-Host "停止するには Ctrl+C を押してください" -ForegroundColor Yellow
    npm run dev
}