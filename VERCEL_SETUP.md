# Vercel Deployment Troubleshooting

## Current Status
- ✅ Commits are being pushed to GitHub (`main` branch)
- ✅ Git email is configured correctly (`221597666+karenpiper@users.noreply.github.com`)
- ❌ Vercel is not auto-deploying

## Manual Setup Steps (Do This Now)

### Step 1: Verify Vercel Project Connection

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Find your `dashboard` project
3. Click on it to open project settings

### Step 2: Check Git Integration

1. In your Vercel project, go to **Settings** → **Git**
2. Look for:
   - **Git Repository**: Should show `karenpiper/dashboard`
   - **Production Branch**: Should be `main`
   - **Git Provider**: Should show GitHub with a green checkmark

### Step 3: Reconnect if Needed

If the connection looks wrong or missing:

1. Click **Disconnect** (if connected)
2. Click **Connect Git Repository**
3. Select **GitHub**
4. Authorize Vercel (if prompted)
5. Select repository: `karenpiper/dashboard`
6. Click **Import**

### Step 4: Verify Webhook in GitHub

1. Go to [github.com/karenpiper/dashboard/settings/hooks](https://github.com/karenpiper/dashboard/settings/hooks)
2. Look for a webhook from `api.vercel.com` or `vercel.com`
3. If missing, Vercel should create it automatically when you reconnect
4. If present, check that it's **Active** and shows recent deliveries

### Step 5: Manual Deployment Test

In Vercel dashboard:
1. Go to **Deployments** tab
2. Click **Create Deployment** button (top right)
3. Select:
   - **Git Branch**: `main`
   - **Framework Preset**: Next.js
4. Click **Deploy**

This will test if the build works. If it succeeds, the issue is just the webhook/auto-deploy.

### Step 6: Check Project Settings

In Vercel → Settings → General:
- **Framework Preset**: Next.js
- **Root Directory**: Leave empty (or `./`)
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `.next` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

### Step 7: Verify Branch Protection

Make sure `main` branch isn't protected in a way that blocks Vercel:
1. GitHub repo → Settings → Branches
2. Check if `main` has branch protection rules
3. If yes, ensure Vercel has permission to push/access

## Alternative: Use Vercel CLI

If webhook setup continues to fail, you can link via CLI:

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Link project
cd /Users/karenpiper/dashboard-strat/dashboard
vercel link

# Follow prompts to connect to existing project
```

## Quick Test

After reconnecting, test with:
```bash
git commit --allow-empty -m "Test Vercel deployment"
git push origin main
```

Then immediately check Vercel dashboard - deployment should appear within 10-30 seconds.

## Common Issues

1. **Wrong repository connected**: Vercel might be connected to a different repo
2. **Wrong branch**: Production branch might be set to something other than `main`
3. **Webhook not created**: GitHub integration might not have created the webhook
4. **Permission issues**: Vercel might not have access to the repository
5. **Project mismatch**: Multiple Vercel projects might exist for the same repo

## Still Not Working?

If after all these steps it still doesn't work:
1. Screenshot your Vercel → Settings → Git page
2. Screenshot your GitHub → Settings → Webhooks page
3. Check Vercel dashboard for any error messages
4. Try creating a new Vercel project and connecting it fresh

