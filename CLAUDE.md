# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

RoyHouse barber course landing page — a luxury editorial single-page app with Hebrew (RTL) support. Built with Next.js 15.3, React 19, TypeScript, and Tailwind CSS 4.

## Development Commands

```bash
npm run dev              # Start dev server with Turbopack (localhost:3000)
npm run build           # Build for production
npm start               # Run production server
npm run lint            # Run ESLint
npm run lint:fix        # Fix linting issues
npm run format          # Format code with Prettier
```

## Code Architecture

### Component Structure
```
src/
├── app/               # Next.js App Router (RootLayout, page.tsx)
├── components/
│   ├── layout/        # Page structure (Navbar, Footer)
│   ├── sections/      # Hero, Courses, Testimonials, etc.
│   └── ui/            # Reusable widgets (Button, AnimatedSection, etc.)
├── lib/
│   ├── constants.ts   # ALL content/strings centralized here (SITE_CONFIG, NAV_LINKS, COURSES, etc.)
│   └── utils.ts       # Utility functions
└── types/             # TypeScript definitions
```

### Key Patterns

**Content Centralization**  
All site content, links, and configuration live in `src/lib/constants.ts`. This is the single source of truth. Do not hardcode strings elsewhere.

**Server vs Client Components**  
- `layout.tsx` and most sections are Server Components (default)
- `Navbar.tsx` uses `'use client'` for scroll detection and mobile menu state
- Add `'use client'` only when interactivity (events, state, hooks) is required

**RTL & Hebrew**  
- HTML is `dir="rtl"` with `lang="he"` in layout.tsx
- Fonts: Heebo (sans, body) + Cormorant Garamond (serif, display)
- Both support Hebrew subset
- CSS custom properties use logical properties (start/end instead of left/right)

**Styling**  
- Tailwind CSS 4.0 with new `@theme` syntax in globals.css
- Custom theme colors (gold palette, dark background) defined in @theme block
- No custom Tailwind config file; all theming in globals.css

**Animations**  
- Framer Motion for scroll-triggered animations
- `AnimatedSection` wrapper component for fade-in effects
- IntersectionObserver for scroll-spy navigation

## TypeScript & Code Style

- Strict mode enabled
- Named exports preferred
- Props typed with TypeScript interfaces
- 2 spaces indentation
- Single quotes

## Design System

**Colors** (defined in globals.css @theme):
- Background: `#080808` (near black)
- Surface: `#0f0f0f`, `#141414`
- Gold accent: `#b8963e` (main), `#d4af6a` (light), `#8a6e2a` (dark)
- Text: `#f2ede4` (cream/primary), `#909090` (muted)
- Border: `#222222`

**Typography**:
- Display: Cormorant Garamond (serif, 300–700)
- Body: Heebo (sans, 300–900)

**Spacing/Radius**: Defined in @theme (sm: 2px, md: 4px, lg: 8px)

## Content & SEO

- Metadata and Open Graph tags in `src/app/layout.tsx`
- All copy is in Hebrew
- Robots index enabled
- WhatsApp links use SITE_CONFIG.whatsappNumber and pre-filled messages

## Development Notes

- Next.js 15.3 with Turbopack (enabled in dev)
- Remote image hostname: `images.unsplash.com` (configured in next.config.ts)
- Image formats: AVIF and WebP
- No API routes or external backend; purely static landing page

## Related Features

- WhatsApp Button: Floating CTA linking to WhatsApp with pre-filled course inquiry message
- Scroll animations: IntersectionObserver-based section reveals
- Mobile menu: Hamburger nav on small screens (managed in Navbar)
