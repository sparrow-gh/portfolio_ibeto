@echo off
chcp 65001 >nul
echo.
echo 🚀 Website Deployment Helper
echo ==============================
echo.

REM Check if git is initialized
if not exist ".git" (
    echo 📝 Initializing Git repository...
    git init
    git branch -M main
)

echo 📝 Adding and committing files...
git add .
git commit -m "Ready for deployment - %date% %time%"

echo.
echo Select deployment platform:
echo 1^) Railway ^(Recommended - Easy^)
echo 2^) Render ^(Good alternative^)
echo 3^) GitHub only ^(for manual deployment^)
echo 4^) Show deployment URLs
echo.

set /p choice="Enter your choice (1-4): "

if "%choice%"=="1" (
    echo.
    echo 🚂 Railway Deployment
    echo ====================
    echo 1. Push your code to GitHub first
    echo 2. Go to: https://railway.app
    echo 3. Click 'Deploy Now'
    echo 4. Connect your GitHub repository
    echo 5. Railway will automatically deploy using the Dockerfile
    echo.
    echo Your app will be live in 2-3 minutes!
    echo.
    echo Environment variables to set in Railway:
    echo - DATABASE_URL=file:./db/prod.db
    echo - NODE_ENV=production
) else if "%choice%"=="2" (
    echo.
    echo 🎨 Render Deployment
    echo ===================
    echo 1. Push your code to GitHub first
    echo 2. Go to: https://render.com
    echo 3. Create new Web Service
    echo 4. Connect your GitHub repository
    echo 5. Use these settings:
    echo    - Build Command: npm install ^&^& npm run build
    echo    - Start Command: npm start
    echo    - Node Version: 18
    echo.
    echo Environment variables to set:
    echo - DATABASE_URL=file:./db/prod.db
    echo - NODE_ENV=production
) else if "%choice%"=="3" (
    echo.
    echo 📚 GitHub Repository Setup
    echo ==========================
    echo Your repository is ready for manual deployment
    echo All necessary files ^(Dockerfile, railway.json^) are included
) else if "%choice%"=="4" (
    echo.
    echo 🔗 Deployment Platform URLs
    echo ============================
    echo Railway: https://railway.app
    echo Render: https://render.com
    echo Heroku: https://heroku.com
    echo Vercel: https://vercel.com ^(not recommended for this project^)
    echo Netlify: https://netlify.com ^(not recommended for this project^)
    echo.
    echo Note: Vercel and Netlify don't support custom servers with Socket.IO
) else (
    echo Invalid choice. Please run the script again.
)

echo.
echo 📋 Quick GitHub Commands:
echo ========================
echo git remote add origin https://github.com/yourusername/your-repo.git
echo git push -u origin main

echo.
echo 🎉 Deployment files created:
echo - Dockerfile ^(for containerized deployment^)
echo - railway.json ^(Railway configuration^)
echo - .env.example ^(environment variables template^)
echo - DEPLOYMENT.md ^(detailed deployment guide^)

echo.
echo Need help? Check DEPLOYMENT.md for detailed instructions!
echo.
pause