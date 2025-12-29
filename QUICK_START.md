# 🚀 Quick Start Guide

Get your portfolio website up and running in 5 minutes!

## Step 1: Install Dependencies

```bash
npm install
```

This will install all necessary packages including Next.js, React, Tailwind CSS, and Framer Motion.

## Step 2: Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your portfolio!

## Step 3: Customize Your Content

### Must-Do Changes (5 minutes)

1. **Your Name** - `components/Hero.tsx` (Line 18)
   ```typescript
   Hi, I'm <span className="text-primary-600">Your Name</span>
   ```

2. **Social Links** - `components/Hero.tsx` (Lines 42-50) & `components/Footer.tsx` (Lines 12-46)
   - Update GitHub username
   - Update LinkedIn username
   - Update email address

3. **Contact Info** - `components/Contact.tsx` (Lines 101-124)
   - Email address
   - Phone number
   - Location

### Recommended Changes (30 minutes)

4. **Add Your Projects** - `components/Projects.tsx`
   - Replace sample projects with your real projects
   - Add GitHub links
   - Add demo/live links

5. **Update Skills** - `components/Skills.tsx`
   - Add/remove technologies you know
   - Organize by your preferred categories

6. **Education & Certifications** - `components/Education.tsx`
   - Your degree and university
   - Your certifications and courses

7. **About Section** - `components/About.tsx`
   - Write your personal story
   - Update statistics (projects, years, etc.)

8. **Add Your Resume** - Place your `resume.pdf` in `/public` folder

## Step 4: Test Your Site

```bash
# Check for errors
npm run lint

# Build for production (test if everything works)
npm run build
```

## Step 5: Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

**Done!** Your portfolio is now live! 🎉

---

## 📚 Need More Help?

- **Detailed customization**: See `CUSTOMIZATION_GUIDE.md`
- **Technical details**: See `README.md`
- **Stuck?**: Check Next.js documentation at [nextjs.org](https://nextjs.org)

## 🎨 Quick Tips

- **Change colors**: Edit `tailwind.config.ts` (primary colors)
- **Add dark mode**: Consider using `next-themes` package
- **Add animations**: Framer Motion is already included!
- **Connect form**: Use Formspree (free) or EmailJS

## ⚡ Common Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Run production build locally
npm run lint       # Check code for errors
```

## 🌟 Make It Yours!

This is YOUR portfolio. Feel free to:
- Change colors and fonts
- Add new sections
- Remove sections you don't need
- Add your personality!

**Good luck with your portfolio!** 🚀
