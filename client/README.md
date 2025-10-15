# Chemistry Club Website - Client

This directory contains the Next.js application for the Chemistry Club Website.

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 🏗️ Architecture

This project uses:

- **Next.js App Router** - Modern routing with layouts and route groups
- **Route Groups** - Organized as `(nav-home)` and `(nav-others)` for better structure
- **Responsive Components** - Separate mobile/desktop components for optimal performance

## 📱 Responsive Design

The application automatically detects screen size and renders appropriate components:

- Mobile: < 765px
- Desktop: ≥ 765px

## 🎨 Styling

- **Tailwind CSS** - Primary styling framework
- **CSS Modules** - Component-specific styles
- **Bootstrap** - Grid system and utilities
- **Framer Motion & GSAP** - Advanced animations

## 📦 Key Dependencies

- Next.js (latest)
- React 19.0.0
- TypeScript 5.7.2
- Tailwind CSS 3.4.16
- Framer Motion 11.18.2
- GSAP 3.13.0

For more information, see the main [README](../README.md) in the project root.
