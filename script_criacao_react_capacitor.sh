#!/bin/bash
APP_NAME="my-capacitor-app"
APP_ID="com.exemplo.app"
echo "🚀 Criando app React + Capacitor..."
# 1. Criar React com Vite
npm create vite@latest $APP_NAME -- --template react
cd $APP_NAME || exit
npm install
# 2. Instalar Capacitor
npm install @capacitor/core @capacitor/cli
npx cap init "$APP_NAME" "$APP_ID" --web-dir=dist
# 3. Ajustar base do Vite
sed -i.bak "s|base:.*|base: './',|" vite.config.js || true
# 4. Build inicial
npm run build
# 5. Adicionar Android
npm install @capacitor/android
npx cap add android
echo "✅ Projeto criado!"
echo "👉 Para rodar no Android:"
echo "   npm run build"
echo "   npx cap sync"
echo "   npx cap open android"