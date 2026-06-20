# Peter Sandel Interior Design

**Award-winning luxury interior design portfolio website**

A world-class portfolio website for Peter Sandel Interior Design, inspired by Kelly Wearstler and top interior designers. Built with modern web technologies optimized for performance, SEO, and conversion.

## 🌟 Features

- **Luxury Minimalist Design** - Sophisticated typography, elegant transitions, and micro-interactions
- **Video Hero Sections** - Stunning full-screen video backgrounds with parallax effects
- **Project Portfolio** - Filterable gallery with individual project pages
- **Client Screening Form** - $250K minimum budget qualification with multi-step form
- **Calendly Integration** - Automatic scheduling for qualified leads
- **Shop Integration** - Seamless connection to Provenance & Patina e-commerce
- **Social Media** - Instagram feed integration
- **SEO Optimized** - Full metadata, structured data, and Core Web Vitals optimization
- **Responsive Design** - Mobile-first approach for all devices

## 🛠 Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Analytics**: Vercel Analytics
- **Hosting**: Vercel
- **CDN**: Cloudflare R2 (for media assets)
- **CMS**: Sanity.io (for project management)

## 🎨 Design System

### Color Palette
- **Cream/Whites**: `#FAF9F7`, `#F5F4F0`, `#EDE9E3`
- **Charcoal/Neutrals**: `#2C2C2C`, `#4A4A4A`, `#6B6B6B`
- **Gold Accents**: `#C9A96E`, `#B8956E`

### Typography
- **Display**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Accent**: Cormorant Garamond (italic serif)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact with client screening form
│   ├── services/          # Services overview
│   ├── work/              # Portfolio pages
│   │   └── [slug]/        # Individual project pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── Navigation.tsx     # Header navigation
│   ├── Footer.tsx         # Site footer
│   ├── HeroSection.tsx    # Video/image hero sections
│   ├── ProjectGallery.tsx # Filterable project grid
│   ├── ClientScreeningForm.tsx  # Multi-step lead form
│   └── ...
└── lib/                   # Utilities and config
    ├── config.ts          # Site configuration
    └── utils.ts           # Helper functions
```

## 📸 Media Assets

Images and videos should be placed in:
- `/public/images/` - Static images
- `/public/videos/` - Video backgrounds

For production, configure Cloudflare R2 or similar CDN for optimal delivery.

### Dropbox Integration
To integrate with Dropbox for project images:
1. Use Dropbox API to sync images
2. Or manually export and upload to R2/CDN
3. Update image paths in Sanity CMS

## 🔧 Configuration

Update site configuration in `src/lib/config.ts`:
- Contact information
- Social media links
- Calendly URL
- Minimum budget threshold

## 📊 Analytics

The site includes Vercel Analytics. Add Google Analytics by updating the environment variables.

## 🚢 Deployment

Deploy to Vercel for optimal performance:

```bash
vercel
```

Or connect your GitHub repository for automatic deployments.

## 📝 License

Private - All rights reserved Peter Sandel Interior Design

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
