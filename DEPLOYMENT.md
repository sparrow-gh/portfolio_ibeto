# Website Deployment Guide

This guide will help you deploy your portfolio website to various platforms.

## Prerequisites

Before deploying, make sure you have:
- Git installed on your computer
- A GitHub account
- Your project built successfully (`npm run build`)

## Option 1: Railway (Recommended)

Railway is perfect for Next.js applications with custom servers.

### Steps:

1. **Create a GitHub Repository:**
   - Go to GitHub.com and create a new repository
   - Upload your project files to the repository

2. **Deploy to Railway:**
   - Go to [railway.app](https://railway.app)
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway will automatically detect the Dockerfile and deploy

3. **Environment Variables:**
   Add these in Railway's dashboard:
   ```
   DATABASE_URL=file:./db/prod.db
   NODE_ENV=production
   ```

4. **Custom Domain (Optional):**
   - In Railway dashboard, go to Settings
   - Add your custom domain

**Cost:** Free tier includes 500 hours/month, $5/month for unlimited

---

## Option 2: Render

Another great platform for Node.js applications.

### Steps:

1. **Create a GitHub Repository** (same as above)

2. **Deploy to Render:**
   - Go to [render.com](https://render.com)
   - Sign up with GitHub
   - Click "New +" → "Web Service"
   - Connect your repository
   - Use these settings:
     - **Build Command:** `npm install && npm run build`
     - **Start Command:** `npm start`
     - **Node Version:** 18

3. **Environment Variables:**
   ```
   DATABASE_URL=file:./db/prod.db
   NODE_ENV=production
   ```

**Cost:** Free tier available, $7/month for custom domains

---

## Option 3: Heroku

Traditional platform, reliable but paid.

### Steps:

1. **Install Heroku CLI:**
   - Download from [devcenter.heroku.com](https://devcenter.heroku.com/articles/heroku-cli)

2. **Create Heroku App:**
   ```bash
   heroku create your-app-name
   heroku config:set NODE_ENV=production
   heroku config:set DATABASE_URL=file:./db/prod.db
   ```

3. **Deploy:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push heroku main
   ```

**Cost:** $7/month minimum

---

## Option 4: VPS (DigitalOcean, Linode, etc.)

For more control and potentially lower costs.

### Requirements:
- Basic server management knowledge
- SSH access to server

### Steps:
1. Create a VPS instance
2. Install Node.js 18+
3. Clone your repository
4. Install dependencies: `npm install`
5. Build the project: `npm run build`
6. Set up PM2 for process management
7. Configure nginx as reverse proxy
8. Set up SSL with Let's Encrypt

**Cost:** $5-10/month

---

## Quick Start with Railway (Easiest Option)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Deploy to Railway:**
   - Visit [railway.app](https://railway.app)
   - Click "Deploy Now"
   - Select GitHub repo
   - Railway will handle the rest!

3. **Your site will be live in 2-3 minutes!**

---

## Important Notes

- **Database:** Currently using SQLite, which works for small to medium sites
- **Files:** Make sure all image files in `/public/my-designs/` are uploaded
- **Environment:** Set `NODE_ENV=production` for all platforms
- **Port:** Application runs on port 3000 by default

## Troubleshooting

If deployment fails:
1. Check build logs in the platform dashboard
2. Ensure all dependencies are in `package.json`
3. Verify environment variables are set correctly
4. Make sure database migrations run successfully

## Need Help?

If you encounter any issues during deployment, please share the error messages and I'll help you resolve them!