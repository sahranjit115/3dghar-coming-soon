# 🚀 Deployment Guide: 3DGhar Coming Soon Page

Complete guide to deploy your coming soon page to Vercel with your domain **3dghar.com**

---

## 📋 Prerequisites

- ✅ GitHub account
- ✅ Vercel account (free - sign up at https://vercel.com)
- ✅ Access to your domain registrar (where you bought 3dghar.com)
- ✅ Supabase project with credentials

---

## Step 1: Push Project to GitHub

### 1.1 Initialize Git (if not already done)

```bash
cd 3dghar-coming-soon
git init
git add .
git commit -m "Initial commit: 3DGhar Coming Soon page"
```

### 1.2 Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `3dghar-coming-soon`
3. Description: "Coming soon landing page for 3DGhar.com"
4. Privacy: **Public** or **Private** (your choice)
5. **DO NOT** initialize with README (we already have files)
6. Click **Create repository**

### 1.3 Push to GitHub

```bash
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/3dghar-coming-soon.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy to Vercel

### 2.1 Sign Up / Log In to Vercel

1. Go to https://vercel.com
2. Click **Sign Up** (or **Log In**)
3. **Sign up with GitHub** (recommended for easy integration)
4. Authorize Vercel to access your GitHub account

### 2.2 Import Your Project

1. On Vercel dashboard, click **Add New...** → **Project**
2. Click **Import** next to your `3dghar-coming-soon` repository
3. If you don't see it, click **Adjust GitHub App Permissions** and give access

### 2.3 Configure Project Settings

**Framework Preset:** Next.js (should auto-detect)

**Root Directory:** `./` (leave as default)

**Build Command:** `npm run build` (default is fine)

**Output Directory:** `.next` (default is fine)

**Install Command:** `npm install` (default is fine)

### 2.4 Add Environment Variables

Click **Environment Variables** and add:

| Name | Value | Where to get it |
|------|-------|-----------------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://xxxxx.supabase.co` | Supabase Dashboard → Settings → API |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6...` | Supabase Dashboard → Settings → API → anon/public key |
| `NEXT_PUBLIC_SHOW_TOUR_DEMO` | `false` | Optional: set to `true` when you add 3D tour |

**Important:** 
- Make sure to add these to **Production**, **Preview**, and **Development** environments
- Click the checkboxes for all three environments

### 2.5 Deploy

1. Click **Deploy**
2. Wait 1-2 minutes for build to complete
3. You'll get a URL like: `https://3dghar-coming-soon.vercel.app`
4. Click **Visit** to see your site live! 🎉

---

## Step 3: Connect Your Domain (3dghar.com)

### 3.1 Add Domain in Vercel

1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. In the "Add Domain" field, type: `3dghar.com`
3. Click **Add**
4. Also add `www.3dghar.com` (repeat the process)

Vercel will show you DNS records to configure.

### 3.2 Configure DNS Records

You'll need to add DNS records at your domain registrar (where you bought 3dghar.com).

#### Option A: Using A Records (Recommended)

Add these records at your domain registrar:

| Type | Name | Value |
|------|------|-------|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

#### Option B: Using CNAME (Alternative)

| Type | Name | Value |
|------|------|-------|
| `CNAME` | `@` | `cname.vercel-dns.com` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

**Note:** Some registrars don't allow CNAME for root domain (@). Use Option A if this is the case.

### 3.3 Popular Domain Registrars Instructions

#### **GoDaddy**
1. Log in to GoDaddy
2. Go to **My Products** → **Domains**
3. Click **DNS** next to 3dghar.com
4. Click **Add** to add new records
5. Add the A record and CNAME record from above
6. Save

#### **Namecheap**
1. Log in to Namecheap
2. Go to **Domain List** → click **Manage** next to 3dghar.com
3. Click **Advanced DNS** tab
4. Click **Add New Record**
5. Add the A record and CNAME record
6. Save

#### **Cloudflare** (if using)
1. Log in to Cloudflare
2. Select your domain
3. Go to **DNS** → **Records**
4. Click **Add record**
5. Add the A record and CNAME record
6. **Important:** Set Proxy status to **DNS only** (gray cloud, not orange)
7. Save

#### **Other Registrars**
The process is similar - look for "DNS Management", "DNS Records", or "Advanced DNS" section.

### 3.4 Verify Domain

1. After adding DNS records, go back to Vercel
2. In **Settings** → **Domains**, you'll see your domain with status
3. Click **Refresh** to check if DNS propagated
4. Status will change from "Invalid Configuration" to "Valid Configuration"
5. **Note:** DNS propagation can take 5 minutes to 48 hours (usually ~1 hour)

### 3.5 Set as Primary Domain (Optional)

If you added both `3dghar.com` and `www.3dghar.com`:

1. In **Settings** → **Domains**
2. Click the three dots (...) next to your preferred domain
3. Click **Set as Primary Domain**
4. The other domain will auto-redirect to the primary

**Recommended:** Set `3dghar.com` (without www) as primary

---

## Step 4: SSL Certificate (HTTPS)

Vercel automatically provisions SSL certificates for your domain.

- ✅ This is FREE
- ✅ Auto-renews
- ✅ Usually ready within 1-2 hours after DNS verification
- ✅ Your site will be accessible via `https://3dghar.com`

---

## Step 5: Verify Everything Works

### Check these URLs:

1. ✅ `https://3dghar.com` - Should load your coming soon page
2. ✅ `https://www.3dghar.com` - Should redirect to 3dghar.com (or vice versa)
3. ✅ `http://3dghar.com` - Should redirect to HTTPS automatically
4. ✅ Test email signup form - Check Supabase to see if data is saved

---

## 🔄 Future Updates

### Update Content or Code

1. Make changes in your local project
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
3. Vercel will **automatically deploy** the new version (1-2 minutes)

### Update Environment Variables

1. Go to Vercel → Your Project → **Settings** → **Environment Variables**
2. Edit the variable
3. Click **Save**
4. Go to **Deployments** → Click the three dots on latest deployment → **Redeploy**

---

## 📊 Monitor Your Site

### Analytics (Optional)

Add Vercel Analytics for free:
1. Go to **Analytics** tab in your project
2. Click **Enable**
3. See visitor stats, page views, etc.

### Check Signups

1. Go to your Supabase dashboard
2. Click **Table Editor** → `coming_soon_signups`
3. See all email signups in real-time

---

## 🆘 Troubleshooting

### "Domain not verified" error
- Wait 1-2 hours for DNS propagation
- Double-check DNS records match Vercel's instructions exactly
- Use https://dnschecker.org to check if DNS propagated globally

### "Invalid Configuration" in Vercel
- Make sure you added DNS records correctly
- Check for typos in DNS values
- Some registrars need you to use `@` for root, others need blank

### Build fails on Vercel
- Check **Deployments** → Click on failed deployment → View build logs
- Usually missing environment variables
- Make sure all dependencies are in `package.json`

### Email signup not working
- Check Supabase credentials in environment variables
- Verify `coming_soon_signups` table exists in Supabase
- Check browser console for errors (F12 → Console tab)

### Hero image not showing
- Make sure `frames-for-your-heart-mR1CIDduGLc-unsplash.jpg` is in `public/` folder as `hero-bg.jpg`
- Push the image to GitHub
- Redeploy on Vercel

---

## 📝 Summary Checklist

- [ ] Push code to GitHub
- [ ] Create Vercel project
- [ ] Add environment variables (Supabase URL & Key)
- [ ] Deploy to Vercel
- [ ] Add 3dghar.com in Vercel domains
- [ ] Configure DNS at domain registrar
- [ ] Wait for DNS propagation (1-24 hours)
- [ ] Verify domain shows "Valid Configuration"
- [ ] Test site at https://3dghar.com
- [ ] Test email signup form
- [ ] Enable Vercel Analytics (optional)

---

## 🎉 Done!

Your coming soon page is now live at **https://3dghar.com**

Users can sign up for early access while you develop the main platform in the `3dghar-frontend` project.

---

## 💡 Pro Tips

1. **Keep the coming soon project simple** - Don't add too many features
2. **Monitor signups regularly** - Check Supabase for new subscribers
3. **Update countdown** - It's set to January 1, 2026
4. **Add social links** - Replace `#` with your actual social media URLs
5. **Set up email notifications** - Get notified when someone signs up (optional)

---

Need help? Check:
- Vercel Docs: https://vercel.com/docs
- Supabase Docs: https://supabase.com/docs
- Next.js Docs: https://nextjs.org/docs

