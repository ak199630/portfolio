# Deployment Guide for Ankit Kumar Portfolio

## Quick Deploy Options

### 1. Vercel (Recommended - Easiest & Free)

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

**Configuration:** Already set up with `vercel.json`

**URL:** You'll get a URL like `your-portfolio.vercel.app`

---

### 2. Netlify (Free & Easy)

**Steps:**
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign up/login
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Set build settings:
   - **Build command:** `pnpm build`
   - **Publish directory:** `dist/public`
6. Click "Deploy site"

**Or use Netlify CLI:**
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist/public
```

---

### 3. GitHub Pages (Free)

**Steps:**
1. Update `vite.config.ts` to set `base: '/your-repo-name/'` if repo name isn't `ankit_portfolio`
2. Build: `pnpm build`
3. Install gh-pages: `pnpm add -D gh-pages`
4. Add to `package.json` scripts:
   ```json
   "deploy": "pnpm build && gh-pages -d dist/public"
   ```
5. Run: `pnpm deploy`

---

### 4. Cloudflare Pages (Free & Fast)

**Steps:**
1. Push code to GitHub/GitLab/Bitbucket
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Connect your repository
4. Set build settings:
   - **Build command:** `pnpm build`
   - **Build output directory:** `dist/public`
5. Deploy

---

### 5. Render (Free Tier Available)

**Steps:**
1. Push code to GitHub
2. Go to [render.com](https://render.com)
3. Create new "Static Site"
4. Connect repository
5. Set:
   - **Build Command:** `pnpm build`
   - **Publish Directory:** `dist/public`

---

## Build Commands

Before deploying, test the build locally:
```bash
pnpm build
pnpm preview  # Preview the production build
```

The built files will be in `dist/public/`

---

## Important Notes

- **Environment Variables:** If you add any, configure them in your hosting platform's dashboard
- **Custom Domain:** All platforms above support custom domains (some free, some paid)
- **HTTPS:** All platforms provide free SSL certificates
- **Auto-deploy:** Most platforms auto-deploy on git push to main branch

---

## Recommended: Vercel

Vercel is the easiest and most developer-friendly option with:
- ✅ Zero configuration needed
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Custom domains (free)
- ✅ Preview deployments for PRs
- ✅ Analytics (optional)

