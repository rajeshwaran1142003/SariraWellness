# SARIRA Wellness Website

A modern, responsive website for SARIRA wellness products built with Next.js, React, and Tailwind CSS.

## Features

- 🎨 Beautiful, responsive design
- 📱 Mobile-first approach
- ⚡ Fast loading with Next.js
- 🎯 SEO optimized
- 📝 Easy content management via config files
- 🚀 Static export ready for any hosting platform

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Export static files:**
   ```bash
   npm run export
   ```

## Content Management

All website content is stored in `src/config/content.js`. You can easily update:

- Site information (name, tagline, contact details)
- Hero section content and headlines
- Product information and pricing
- About section text
- Testimonials
- FAQ items
- Contact information
- Navigation menus

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── icons/          # Icon components
│   ├── layout/         # Layout components (Header, Footer)
│   ├── sections/       # Page sections
│   └── ui/             # UI components
├── config/             # Configuration files
│   └── content.js      # All website content
└── lib/                # Utility functions
```

## Customization

### Colors
The color scheme is defined in `tailwind.config.js`. The main colors are:
- Primary: Deep Green (#364A22)
- Accent: Burnt Orange (#E38A30)
- Background: Heritage Cream (#F8F5EF)

### Fonts
- Headlines: Playfair Display (serif)
- Body text: Poppins (sans-serif)

### Content Updates
Edit `src/config/content.js` to update any text content, contact information, or navigation items.

## Deployment

This project is configured for static export and can be deployed to:

- **Vercel**: Connect your GitHub repo
- **Netlify**: Drag and drop the `out` folder after running `npm run export`
- **Hostinger**: Upload the `out` folder contents to your hosting directory
- **GitHub Pages**: Use the static files from the `out` folder

## Dependencies

- Next.js 14
- React 18
- Tailwind CSS 3
- Framer Motion (animations)
- Lucide React (icons)
- Embla Carousel (image carousels)

## Support

For questions or support, contact:
- Email: sariranutrition@gmail.com
- Phone: +91-7010422748