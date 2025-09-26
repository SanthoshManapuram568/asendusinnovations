# Deployment Guide for Netlify

## Quick Deployment Steps

### 1. Install Dependencies
```bash
cd asendus-expo-web
npm install
```

### 2. Test Locally
```bash
npm run web
```
Visit http://localhost:19006 to test the application.

### 3. Build for Production
```bash
npm run build
```

### 4. Deploy to Netlify

#### Option A: Drag & Drop Deployment
1. Run `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag the `web-build` folder to the deploy area

#### Option B: Netlify CLI
```bash
npm install -g netlify-cli
netlify login
npm run deploy
```

#### Option C: Git Integration (Recommended)
1. Initialize git repository:
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Push to GitHub/GitLab:
```bash
# Add your remote repository
git remote add origin YOUR_REPO_URL
git push -u origin main
```

3. Connect to Netlify:
   - Go to https://app.netlify.com
   - Click "New site from Git"
   - Connect your repository
   - Set build command: `npm run build`
   - Set publish directory: `web-build`
   - Deploy

## Environment Configuration

### Build Settings for Netlify
- **Build command**: `npm run build`
- **Publish directory**: `web-build`
- **Node version**: 18 (set in netlify.toml)

### Custom Domain (Optional)
After deployment, you can add a custom domain in your Netlify site settings.

## Troubleshooting

### Common Issues
1. **Build fails**: Make sure Node.js version is 18 or higher
2. **Assets not loading**: Check that all required assets are in the `assets` folder
3. **Routing issues**: The netlify.toml file handles SPA routing redirects

### Performance Optimization
- The app is already optimized for web deployment
- Expo Web automatically handles code splitting and optimization
- All images and assets are optimized during the build process

## Post-Deployment Checklist
- [ ] Test all navigation links
- [ ] Verify contact form functionality
- [ ] Check responsive design on different devices
- [ ] Test loading performance
- [ ] Verify custom domain (if configured)

## Updating the Site
To update the deployed site:
1. Make your changes
2. Commit and push to your git repository
3. Netlify will automatically rebuild and deploy

For manual deployment:
```bash
npm run build
netlify deploy --prod --dir=web-build
```