# Vercel Auto-Deployment Setup

This guide ensures automatic deployments from GitHub to Vercel when you push from Cursor.

## Setup Steps

### 1. Connect GitHub Repository to Vercel

1. Go to [vercel.com](https://vercel.com) and log in
2. Go to your project dashboard
3. Click **Settings** → **Git**
4. If not connected, click **Connect Git Repository**
5. Select **GitHub** and authorize Vercel
6. Select the repository: `karenpiper/dashboard`
7. Click **Import**

### 2. Configure Project Settings

In Vercel project settings:

- **Framework Preset**: Next.js (should auto-detect)
- **Root Directory**: `./` (leave empty or set to `./`)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

### 3. Set Production Branch

1. Go to **Settings** → **Git**
2. Under **Production Branch**, ensure it's set to `main`
3. Save changes

### 4. Verify Webhook

1. Go to **Settings** → **Git**
2. Check that the GitHub integration shows as **Connected**
3. The webhook should be automatically created in your GitHub repository

### 5. Test the Integration

After setup, any push to the `main` branch will automatically trigger a deployment.

To test:
```bash
git commit --allow-empty -m "Test deployment trigger"
git push origin main
```

Then check your Vercel dashboard - a new deployment should appear within seconds.

## Troubleshooting

### If deployments don't trigger:

1. **Check GitHub Webhooks**:
   - Go to your GitHub repo → Settings → Webhooks
   - Look for a webhook from `api.vercel.com`
   - Ensure it's active and receiving events

2. **Reconnect the Integration**:
   - In Vercel → Settings → Git
   - Disconnect and reconnect the GitHub integration

3. **Check Branch Settings**:
   - Ensure Production Branch is set to `main`
   - Check that you're pushing to the correct branch

4. **Manual Trigger**:
   - Go to Vercel → Deployments
   - Click "Create Deployment"
   - Select branch `main` and deploy

## Current Configuration

- **Repository**: `karenpiper/dashboard`
- **Branch**: `main`
- **Framework**: Next.js 14
- **Node Version**: Auto (18.x or 20.x)

