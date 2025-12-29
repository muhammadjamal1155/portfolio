# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases projects, skills, and experience as a Data Science student and Full Stack Developer intern.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Smooth Animations**: Framer Motion for smooth page transitions and scroll animations
- **Clean UI**: Minimal and professional design with excellent user experience
- **SEO Optimized**: Built-in Next.js SEO features for better discoverability
- **Fast Performance**: Optimized for speed and performance

## 📋 Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Personal introduction and statistics
- **Skills**: Comprehensive display of technical skills organized by category
- **Projects**: Showcase of featured projects with descriptions and links
- **Education**: Academic background and certifications
- **Contact**: Contact form and information for easy communication

## 🛠️ Technologies Used

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon library

### Development Tools
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixes

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Customize Your Information

1. **Personal Information**: Update the following files with your information:
   - `components/Hero.tsx` - Your name and title
   - `components/About.tsx` - About section content and statistics
   - `components/Footer.tsx` - Social media links and email

2. **Projects**: Edit `components/Projects.tsx` to add your own projects:
   ```typescript
   const projects = [
     {
       title: 'Your Project Title',
       category: 'Data Science' or 'Full Stack',
       description: 'Project description',
       technologies: ['Tech1', 'Tech2'],
       github: 'https://github.com/yourusername/project',
       demo: 'https://project-demo.com',
     },
     // Add more projects...
   ]
   ```

3. **Skills**: Update `components/Skills.tsx` with your skills:
   - Add/remove skills from the skill categories
   - Import new icons from `react-icons` as needed

4. **Education**: Modify `components/Education.tsx`:
   - Update degree, institution, and dates
   - Add your certifications

5. **Contact Information**: Update `components/Contact.tsx`:
   - Change email, phone, and location
   - Configure form submission (connect to a backend or email service)

### Styling

- **Colors**: Modify `tailwind.config.ts` to change the primary color scheme
- **Fonts**: Change the font in `app/layout.tsx` (currently using Inter)
- **Custom CSS**: Add custom styles in `app/globals.css`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Deploy to Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm start
```

You can deploy to:
- **Netlify**: Connect your Git repository
- **AWS Amplify**: Deploy with CI/CD
- **GitHub Pages**: Export as static site
- **Docker**: Use the included Dockerfile (if you create one)

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🎨 Customization Tips

### Add a Dark Mode
Consider adding a dark mode toggle using `next-themes`

### Add Blog Section
Create a `/blog` route to showcase your articles and insights

### Add Analytics
Integrate Google Analytics or Vercel Analytics to track visitors

### Add Resume Download
Place your resume PDF in the `/public` folder and update the link in Hero component

### Form Submission
Connect the contact form to:
- **Formspree**: Simple form backend
- **EmailJS**: Send emails directly from the frontend
- **API Route**: Create your own API endpoint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourusername)
- GitHub: [Your GitHub](https://github.com/yourusername)

---

**Note**: Remember to update all placeholder content with your actual information before deploying!

## 🎯 Next Steps

1. Replace all placeholder text with your information
2. Add your actual projects with screenshots
3. Update social media links
4. Add your resume to `/public` folder
5. Configure form submission
6. Deploy to Vercel or your preferred hosting platform
7. Set up a custom domain (optional)

Happy coding! 🚀
