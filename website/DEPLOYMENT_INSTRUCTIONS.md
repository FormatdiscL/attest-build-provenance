# Website Deployment Instructions

This document provides instructions for deploying the Cyberpunk website to various platforms.

## Deployment Options

### 1. Vercel (Recommended)

#### Automatic Deployment
The repository is configured for automatic deployment to Vercel when changes are pushed to the main branch.

#### Manual Deployment
To deploy manually to Vercel:

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Run the deployment script:
   ```bash
   ./deploy-to-vercel.sh
   ```

3. Follow the prompts to complete the deployment.

### 2. Netlify

#### Automatic Deployment
The repository is configured for automatic deployment to Netlify when changes are pushed to the main branch.

#### Manual Deployment
To deploy manually to Netlify:

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Deploy the website:
   ```bash
   netlify deploy --dir=website --prod
   ```

### 3. GitHub Pages

To deploy to GitHub Pages:

1. Enable GitHub Pages in the repository settings:
   - Go to Settings > Pages
   - Select "GitHub Actions" as the source
   - Save the settings

2. The website will be automatically deployed when changes are pushed to the main branch.

## Deployment Files

- `vercel.json`: Configuration for Vercel deployment
- `netlify.toml`: Configuration for Netlify deployment
- `.github/workflows/deploy-website.yml`: GitHub Actions workflow for GitHub Pages
- `.github/workflows/vercel-deploy.yml`: GitHub Actions workflow for Vercel

## Website Structure

- `index.html`: Main entry point
- `cyberpunk-styles.css`: Main stylesheet
- `cyberpunk-enhanced.js`: JavaScript functionality
- `api/`: API endpoints
- `icon-192.svg` and `icon-512.svg`: Website icons

## Post-Deployment

After deployment, the website will be available at:

- Vercel: [https://your-project-name.vercel.app](https://your-project-name.vercel.app)
- Netlify: [https://your-site-name.netlify.app](https://your-site-name.netlify.app)
- GitHub Pages: [https://username.github.io/repository-name](https://username.github.io/repository-name)