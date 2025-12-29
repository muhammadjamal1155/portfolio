# Portfolio Customization Guide

This guide will help you personalize your portfolio website with your own information.

## 🎯 Quick Start Checklist

- [ ] Update personal information in Hero section
- [ ] Add your projects
- [ ] Update skills and technologies
- [ ] Add education and certifications
- [ ] Update contact information
- [ ] Replace social media links
- [ ] Add your resume
- [ ] Update metadata for SEO

## 📝 Step-by-Step Customization

### 1. Personal Information

#### Hero Section (`components/Hero.tsx`)
```typescript
// Line 18-20: Update your name and title
<h1>Hi, I'm <span>Your Name</span></h1>
<p>Data Science Student & Full Stack Developer Intern</p>
<p>Your personal tagline or introduction...</p>

// Line 42-50: Update resume link and social media
href="/resume.pdf"  // Point to your resume
href="https://github.com/YOUR_USERNAME"
href="https://linkedin.com/in/YOUR_USERNAME"
```

#### About Section (`components/About.tsx`)
```typescript
// Lines 23-36: Update your bio
<p>Write about your background...</p>
<p>Your data science experience...</p>
<p>Your full-stack development experience...</p>

// Lines 42-54: Update statistics
<div>50+</div>  // Number of projects
<div>10+</div>  // Technologies
<div>2+</div>   // Years of experience
```

### 2. Projects Section (`components/Projects.tsx`)

Replace the sample projects with your own:

```typescript
const projects = [
  {
    title: 'Your Project Name',
    category: 'Data Science',  // or 'Full Stack'
    description: 'Detailed description of what the project does...',
    technologies: ['Python', 'TensorFlow', 'React'],
    github: 'https://github.com/yourusername/project-repo',
    demo: 'https://your-demo-link.com',
    image: '/projects/project-image.jpg',  // Optional
  },
  // Add more projects...
]
```

**Tips for great project descriptions:**
- Highlight the problem you solved
- Mention key technologies used
- Include results/metrics if applicable (e.g., "Achieved 92% accuracy")

### 3. Skills Section (`components/Skills.tsx`)

Customize your skills by category:

```typescript
const skillCategories = [
  {
    title: 'Data Science & ML',
    skills: [
      { name: 'Python', icon: <FaPython /> },
      // Add your skills...
    ],
  },
  // Customize other categories...
]
```

**Available Icon Libraries:**
- `react-icons/fa` - Font Awesome icons
- `react-icons/si` - Simple Icons (brand icons)

To add new icons:
```typescript
import { SiYourTech } from 'react-icons/si'
```

### 4. Education Section (`components/Education.tsx`)

Update your academic background:

```typescript
const education = [
  {
    degree: 'Your Degree',
    institution: 'Your University',
    period: 'Start Year - End Year',
    description: 'Relevant coursework: ...',
    gpa: '3.8/4.0',  // Optional
  },
]

const certifications = [
  {
    name: 'Certificate Name',
    issuer: 'Issuing Organization',
    date: 'Year',
  },
  // Add more certifications...
]
```

### 5. Contact Information (`components/Contact.tsx`)

Update your contact details:

```typescript
// Lines 101-106: Email
href="mailto:your.email@example.com"
your.email@example.com

// Lines 110-115: Phone
href="tel:+1234567890"
+1 (234) 567-890

// Lines 119-124: Location
City, State, Country
```

### 6. Footer (`components/Footer.tsx`)

Update social media links:

```typescript
// Lines 12-46: Update all social links
href="https://github.com/YOUR_USERNAME"
href="https://linkedin.com/in/YOUR_USERNAME"
href="https://twitter.com/YOUR_USERNAME"
href="mailto:your.email@example.com"
```

### 7. Navigation (`components/Navbar.tsx`)

The navigation automatically links to sections. To add/remove sections:

```typescript
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  // Add or remove links...
]
```

### 8. SEO & Metadata (`app/layout.tsx`)

Update for better search engine visibility:

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Data Science & Full Stack Developer',
  description: 'Portfolio showcasing data science and full-stack projects by Your Name',
}
```

## 🎨 Styling Customization

### Change Color Scheme (`tailwind.config.ts`)

```typescript
colors: {
  primary: {
    500: '#0ea5e9',  // Main color
    600: '#0284c7',  // Hover state
    // Update other shades...
  },
}
```

Popular color schemes:
- **Blue** (current): Professional, trustworthy
- **Purple**: Creative, innovative (`#8b5cf6`)
- **Green**: Growth, data-focused (`#10b981`)
- **Red**: Bold, energetic (`#ef4444`)

### Change Font (`app/layout.tsx`)

```typescript
import { Inter, Roboto, Poppins } from 'next/font/google'

const font = Poppins({ 
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'] 
})
```

## 📄 Add Your Resume

1. Export your resume as PDF
2. Name it `resume.pdf`
3. Place it in the `public` folder
4. The download button in Hero section will automatically work

## 🔌 Connect Contact Form

The form currently shows a success message without actually sending. To make it functional:

### Option 1: Formspree (Easiest)
```typescript
// In components/Contact.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: { 'Content-Type': 'application/json' }
  })
  
  if (response.ok) {
    setStatus('success')
  }
}
```

### Option 2: EmailJS
1. Install: `npm install @emailjs/browser`
2. Set up EmailJS account
3. Use their send function in handleSubmit

### Option 3: API Route
Create `app/api/contact/route.ts` for server-side handling

## 🖼️ Add Project Images

1. Create `/public/projects` folder
2. Add project screenshots/images
3. Update image paths in `components/Projects.tsx`
4. Recommended size: 800x600px

## 📊 Add Analytics

### Google Analytics
```bash
npm install @next/third-parties
```

In `app/layout.tsx`:
```typescript
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
```

## ✅ Pre-Deployment Checklist

- [ ] All placeholder text replaced
- [ ] Social media links updated
- [ ] Projects added with real data
- [ ] Contact information correct
- [ ] Resume uploaded
- [ ] Form submission configured
- [ ] SEO metadata updated
- [ ] Test on mobile devices
- [ ] Run `npm run build` successfully
- [ ] Check for console errors

## 🚀 Ready to Deploy!

Once you've completed customization, follow the deployment instructions in README.md

---

**Need Help?** Check the README.md for more detailed technical information.
