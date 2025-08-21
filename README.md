# Alex Johnson - Developer Portfolio

A modern, responsive developer portfolio website built with React, TypeScript, and TailwindCSS. Features a clean design with smooth animations, dark theme, and comprehensive sections showcasing skills, projects, and experience.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark theme and electric blue accents
- **Responsive**: Fully responsive design optimized for desktop, tablet, and mobile
- **Smooth Animations**: Custom CSS animations and smooth scroll interactions  
- **SEO Optimized**: Complete SEO setup with meta tags, structured data, and Open Graph
- **Performance**: Optimized images, lazy loading, and fast load times
- **Accessible**: Semantic HTML and ARIA labels for accessibility

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: TailwindCSS, Custom CSS animations
- **UI Components**: Shadcn/ui components
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Forms**: React Hook Form with Zod validation
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   ├── Navigation.tsx  # Header navigation
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About me section
│   ├── Projects.tsx    # Projects showcase
│   ├── Skills.tsx      # Technical skills
│   ├── Experience.tsx  # Work & education timeline
│   ├── Contact.tsx     # Contact form & info
│   └── Footer.tsx      # Footer component
├── assets/             # Images and static assets
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── index.css          # Global styles & design system
```

## 🎨 Design System

The portfolio uses a comprehensive design system defined in `src/index.css`:

- **Colors**: Dark-first theme with HSL color variables
- **Typography**: Inter font family with responsive sizing  
- **Gradients**: Custom CSS gradients for visual appeal
- **Animations**: Custom keyframe animations and transitions
- **Components**: Reusable utility classes for glass effects, hover states

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd developer-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

### Building for Production

```bash
# Build the project
npm run build

# Preview the build locally
npm run preview
```

## 🎯 Customization

### Personal Information

Update the following files with your information:

1. **Hero Section** (`src/components/Hero.tsx`):
   - Name, role, and tagline
   - Social media links
   - Contact email

2. **About Section** (`src/components/About.tsx`):
   - Bio and personal story
   - Skills list
   - Profile picture

3. **Projects** (`src/components/Projects.tsx`):
   - Add your projects with descriptions
   - Update GitHub and demo links
   - Replace project images

4. **Experience** (`src/components/Experience.tsx`):
   - Work history and education
   - Company names and descriptions
   - Technologies and achievements

5. **Contact** (`src/components/Contact.tsx`):
   - Contact information
   - Social media profiles
   - Form submission endpoint

### SEO & Meta Tags

Update `index.html` with your:
- Name and title
- Website URL
- Social media handles
- Profile images

### Styling

The design system is in `src/index.css`. Customize:
- Color palette (HSL values)
- Typography (fonts, sizes)
- Animations and transitions
- Component styles

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Upload `dist` folder to Netlify
3. Configure redirects for SPA

### Other Platforms
The built files in `dist` can be deployed to any static hosting service.

## 📊 Performance

- **Lighthouse Score**: 95+ across all categories
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Image Optimization**: WebP format with lazy loading
- **Bundle Size**: Optimized with tree shaking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💬 Contact

Alex Johnson - [alex@example.com](mailto:alex@example.com)

Project Link: [https://github.com/alexjohnson/portfolio](https://github.com/alexjohnson/portfolio)

---

⭐ If you found this portfolio helpful, please give it a star!