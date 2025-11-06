# ⚡ Quick Deploy Guide

**TL;DR - Get your coming soon page live in 15 minutes**

---

## 1️⃣ Push to GitHub (5 min)

```bash
cd 3dghar-coming-soon
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/3dghar-coming-soon.git
git push -u origin main
```

---

## 2️⃣ Deploy to Vercel (5 min)

1. Go to https://vercel.com → Sign up with GitHub
2. Click **Add New...** → **Project**
3. Import `3dghar-coming-soon` repository
4. Add Environment Variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your Supabase anon key
5. Click **Deploy**

✅ Your site is now live at `https://3dghar-coming-soon.vercel.app`

---

## 3️⃣ Connect Domain (5 min + DNS wait time)

### In Vercel:
1. Go to **Settings** → **Domains**
2. Add `3dghar.com` and `www.3dghar.com`
3. Copy the DNS records shown

### At Your Domain Registrar:
Add these DNS records:

| Type | Name | Value |
|------|------|-------|
| `A` | `@` | `76.76.21.21` |
| `CNAME` | `www` | `cname.vercel-dns.com` |

**Save** and wait 10-60 minutes for DNS to propagate.

---

## 4️⃣ Done! 🎉

Visit **https://3dghar.com** to see your coming soon page live!

---

## Quick Troubleshooting

**Issue:** Domain not working  
**Fix:** Wait 1-2 hours for DNS propagation

**Issue:** Build failed  
**Fix:** Check you added Supabase environment variables

**Issue:** Signup form not working  
**Fix:** Verify Supabase credentials and table exists

---

**Full guide:** See `DEPLOYMENT_GUIDE.md` for detailed instructions.

