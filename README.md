# 3DGhar Coming Soon Page

A standalone, minimal Next.js project for the 3DGhar coming soon landing page.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Copy `.env.example` to `.env.local` and fill in your Supabase credentials:

```bash
cp .env.example .env.local
```

Required variables:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key

Optional:
- `NEXT_PUBLIC_SHOW_TOUR_DEMO` - Set to `true` to show 3D tour demo section

### 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the coming soon page.

## 📦 What's Included

- ✅ Premium coming soon page with animations
- ✅ Bilingual content (English + Nepali)
- ✅ Email signup form with validation
- ✅ Countdown timer to January 2026
- ✅ Key features showcase (12 features)
- ✅ Social media links
- ✅ Mobile-responsive design
- ✅ Theme-aware styling

## 🗄️ Database Setup

Make sure you have the `coming_soon_signups` table in your Supabase database. The migration file from the main project should be run:

```sql
-- See supabase/migrations/20250118_coming_soon_signups.sql in main project
```

## 🚢 Deployment

### Deploy to Vercel

1. Push this project to a GitHub repository
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_SHOW_TOUR_DEMO` (optional)
4. Deploy!

### Domain Setup

You can deploy this to your main domain (3dghar.com) or use a subdomain. In Vercel:
- Add your domain in Project Settings → Domains
- Configure DNS records as shown in Vercel

## 📝 Features

- **Minimal Dependencies**: Only what's needed for the coming soon page
- **Fast Builds**: Lightweight project, builds quickly
- **Separate from Main Project**: Develop main site without affecting live page
- **Easy to Remove**: Can be deleted when ready to launch

## 🔧 Customization

### Update Content

Edit `components/ComingSoonPage.tsx`:
- Change headlines and descriptions
- Modify feature list
- Update social media links
- Adjust launch date

### Styling

All colors are theme-aware using CSS variables. Edit `app/globals.css` to change the color scheme.

## 📚 Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Shadcn UI** - UI components
- **Supabase** - Database for signups
- **Zod** - Form validation

## 📞 Support

This is a standalone project. For issues or questions, refer to the main project documentation.

---

**Note**: This project is independent from the main 3DGhar frontend. You can develop the main site freely while this page is live for users.


