# Deployment Guide

This guide will help you deploy the Sales Dashboard to various platforms.

## Prerequisites

- Node.js 18.0 or later
- Git repository with your project
- Account on your chosen deployment platform

## Option 1: Deploy to Vercel (Recommended)

Vercel is the platform created by the creators of Next.js and provides the best experience for Next.js applications.

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Deploy
```bash
# Navigate to your project directory
cd ad-next-sales

# Deploy to Vercel
vercel
```

### Step 3: Follow the Prompts
- Link to existing project or create new
- Set project name (optional)
- Confirm deployment settings

### Step 4: Get Your Live URL
After deployment, Vercel will provide you with:
- Production URL: `https://your-project.vercel.app`
- Development URL: `https://your-project-git-main.vercel.app`

### Step 5: Connect to GitHub (Optional)
For automatic deployments:
1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure build settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

## Option 2: Deploy to Netlify

### Step 1: Build Your Project
```bash
npm run build
```

### Step 2: Deploy via Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=.next
```

### Step 3: Deploy via Netlify UI
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `.next` folder
3. Or connect your GitHub repository

### Step 4: Configure Build Settings
If connecting via GitHub:
- Build command: `npm run build`
- Publish directory: `.next`
- Node version: 18

## Option 3: Deploy to Railway

### Step 1: Install Railway CLI
```bash
npm install -g @railway/cli
```

### Step 2: Deploy
```bash
# Login to Railway
railway login

# Initialize project
railway init

# Deploy
railway up
```

### Step 3: Configure Environment
Railway will auto-detect Next.js and configure the build process.

## Option 4: Deploy to AWS Amplify

### Step 1: Connect Repository
1. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "New app" → "Host web app"
3. Connect your GitHub repository

### Step 2: Configure Build Settings
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

## Option 5: Deploy to DigitalOcean App Platform

### Step 1: Create App
1. Go to [DigitalOcean App Platform](https://cloud.digitalocean.com/apps)
2. Click "Create App"
3. Connect your GitHub repository

### Step 2: Configure Build Settings
- Build Command: `npm run build`
- Run Command: `npm start`
- Environment: Node.js

## Environment Variables

If you need to add environment variables:

### Vercel
```bash
vercel env add VARIABLE_NAME
```

### Netlify
Go to Site Settings → Environment Variables

### Railway
```bash
railway variables set VARIABLE_NAME=value
```

## Custom Domain Setup

### Vercel
1. Go to your project dashboard
2. Settings → Domains
3. Add your custom domain
4. Configure DNS records

### Netlify
1. Site Settings → Domain Management
2. Add custom domain
3. Configure DNS

## Performance Optimization

### Enable Compression
Add to `next.config.ts`:
```typescript
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
}
```

### Enable Caching
Add headers to `next.config.ts`:
```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}
```

## Monitoring and Analytics

### Vercel Analytics
```bash
npm install @vercel/analytics
```

Add to your `app/layout.tsx`:
```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

## Troubleshooting

### Build Errors
1. Check Node.js version (18+ required)
2. Clear cache: `rm -rf .next node_modules && npm install`
3. Check for TypeScript errors: `npm run type-check`

### Runtime Errors
1. Check browser console for errors
2. Verify environment variables
3. Check deployment logs

### Performance Issues
1. Enable compression
2. Optimize images
3. Use CDN for static assets

## Security Considerations

1. **Environment Variables**: Never commit sensitive data
2. **HTTPS**: All modern platforms provide HTTPS by default
3. **Headers**: Add security headers in `next.config.ts`
4. **Dependencies**: Regularly update dependencies

### Security Headers
Add to `next.config.ts`:
```typescript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

## Support

If you encounter issues:
1. Check the platform's documentation
2. Review deployment logs
3. Contact platform support
4. Open an issue in the project repository

## Next Steps

After successful deployment:
1. Update your README.md with the live URL
2. Test all functionality on the live site
3. Set up monitoring and analytics
4. Configure custom domain (optional)
5. Set up CI/CD for automatic deployments
