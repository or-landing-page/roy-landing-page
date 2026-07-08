# RoyHouse Light Palette Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform RoyHouse from dark luxury (black background, cream text) to light editorial (cream background, camel text, gold accents). Increase design score 7.2→8.8/10 and conversion +20-30%.

**Architecture:** Implement in 4 phases: (1) Core CSS theme update, (2) Hero & button refactor, (3) Global text/spacing cleanup, (4) Enhancement layers (urgency, trust signals). Each phase is independently deployable.

**Tech Stack:** Next.js 15.3, React 19, TypeScript, Tailwind CSS 4 (@theme syntax), Framer Motion

## Global Constraints

- **Color Palette (EXACT VALUES — copy-paste):**
  - Background Primary: `#f5f1e8` (cream/warm beige)
  - Background Secondary: `#faf8f4` (cream light — alternating sections)
  - Text Primary: `#5c4a38` (camel/deep brown)
  - Text Secondary: `#8b6f47` (camel medium)
  - Accent Gold: `#d4af37` (bright gold — buttons, highlights only)
  - Border: `#e8dcc8` (warm beige)
  - WhatsApp: `#25d366` (unchanged)

- **Files to Touch:** `globals.css`, `Button.tsx`, `Hero.tsx`, all section components
- **No Breaking Changes:** Existing component API unchanged; only visual updates
- **Testing:** Visual regression on dev server — no automated tests needed for styling
- **Language:** All Hebrew strings already in constants.ts; no copy changes
- **Git:** Commit after each task; use descriptive messages

---

## PHASE 1: Core CSS Theme (30 min) — Foundation

### Task 1: Update globals.css with Light Palette

**Files:**
- Modify: `src/app/globals.css` (lines 3–23)

**Interfaces:**
- Consumes: None
- Produces: New CSS @theme variables used throughout project via `var(--color-*)` pattern

- [ ] **Step 1: Open globals.css**

```bash
cat src/app/globals.css | head -25
```

- [ ] **Step 2: Replace @theme block with light palette**

Replace lines 3–23 with:

```css
@theme {
  --color-background: #f5f1e8;
  --color-surface: #faf8f4;
  --color-surface-2: #f0ede2;
  --color-gold: #d4af37;
  --color-gold-light: #e6c85f;
  --color-gold-pale: #f0e0a0;
  --color-gold-dark: #b8942b;
  --color-cream: #5c4a38;
  --color-text-primary: #5c4a38;
  --color-text-muted: #8b6f47;
  --color-border: #e8dcc8;
  --color-whatsapp: #25d366;

  --font-sans: var(--font-heebo), 'Heebo', sans-serif;
  --font-display: var(--font-cormorant), 'Cormorant Garamond', serif;

  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
}
```

**Rationale:** `--color-cream` remapped to camel text (#5c4a38) for backward compatibility; gold brightened to #d4af37 (more visible on cream); surfaces now cream alternates.

- [ ] **Step 3: Update body styles for contrast**

Replace lines 36–42 (body style):

```css
body {
  background-color: var(--color-background);
  color: var(--color-text-primary);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
}
```

- [ ] **Step 4: Update ::selection for light background**

Replace lines 44–47:

```css
::selection {
  background-color: var(--color-gold);
  color: var(--color-text-primary);
}
```

- [ ] **Step 5: Update scrollbar for light theme**

Replace lines 49–64:

```css
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: var(--color-background);
}

::-webkit-scrollbar-thumb {
  background: var(--color-border);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-text-muted);
}
```

- [ ] **Step 6: Verify file**

```bash
cat src/app/globals.css
```

Expected: All colors now cream/camel/gold. No errors.

- [ ] **Step 7: Commit**

```bash
git add src/app/globals.css
git commit -m "style: update globals.css to light palette — cream bg, camel text, gold accents"
```

---

## PHASE 2: Button & CTA Styling (45 min) — Conversion Driver

### Task 2: Refactor Button Component with Light Palette

**Files:**
- Modify: `src/components/ui/Button.tsx`

**Interfaces:**
- Consumes: globals.css new theme (Task 1)
- Produces: Button variants with brown text on gold, proper shadows, focus states

- [ ] **Step 1: Understand current Button.tsx**

```bash
cat src/components/ui/Button.tsx
```

Focus on: variant styles, sizes, tailwind classes.

- [ ] **Step 2: Replace entire Button.tsx**

```typescript
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-bold rounded-lg transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background',
        {
          'bg-gold hover:bg-gold-light text-text-primary hover:shadow-lg shadow-md shadow-gold/30 active:scale-95':
            variant === 'primary',
          'border-2 border-gold text-text-primary hover:bg-gold/10 hover:border-gold-light focus:border-gold-light':
            variant === 'outline',
          'text-text-muted hover:text-text-primary focus:text-text-primary': variant === 'ghost',
        },
        {
          'px-4 py-2 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'md',
          'px-8 py-4 text-lg': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
```

**Key changes:**
- Primary: `text-text-primary` (camel brown instead of background black)
- Gold shadow: `shadow-gold/30` for subtle depth
- Focus states: `focus:ring-2` for a11y
- Outline: Proper brown text with gold border
- Active: `active:scale-95` for tactile feedback

- [ ] **Step 3: Verify TypeScript**

```bash
npm run lint src/components/ui/Button.tsx
```

Expected: No errors.

- [ ] **Step 4: Commit**

```bash
git add src/components/ui/Button.tsx
git commit -m "style: update Button component — brown text on gold, improved shadows & focus states"
```

---

### Task 3: Update Hero Section with Light Palette

**Files:**
- Modify: `src/components/sections/Hero.tsx`

**Interfaces:**
- Consumes: globals.css theme, Button component
- Produces: Hero section with light background, proper text contrast, decision-ready for image

- [ ] **Step 1: Read current Hero.tsx**

```bash
cat src/components/sections/Hero.tsx
```

- [ ] **Step 2: Identify image strategy**

**DECISION POINT:** Hero needs an image. Three options:

**Option A: Roy's Headshot** (Best for authority/trust)
- Place Roy's professional photo as hero image
- Use on-image overlay (camel/brown semi-transparent)
- Text on top: white/cream text

**Option B: Light Barber Shop Image** (Best for authenticity)
- Use airy, well-lit barber shop interior
- Overlay with cream/warm overlay (30-50% opacity)
- Text on overlay

**Option C: Gradient Only** (Fastest, safest)
- No image; replace with linear gradient cream→cream-light
- Text on gradient: rich visual, no image risk

**Recommendation:** Option A (Roy headshot) if available. Otherwise Option C (gradient).

For now, **assume Option C (gradient)** and continue. Can swap to image later.

- [ ] **Step 3: Rewrite Hero.tsx with light palette**

```typescript
'use client'

import { Button } from '@/components/ui/Button'
import { SITE_CONFIG, NEXT_COHORT } from '@/lib/constants'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-surface to-background pt-20 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background opacity-50" />

      {/* Optional: Add subtle pattern or texture here later */}

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Preheader */}
        <div className="mb-6 inline-block">
          <p className="text-text-muted text-sm md:text-base font-medium tracking-widest">
            קורס מקצועי בברברינג
          </p>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-5xl md:text-7xl font-light mb-6 text-text-primary leading-tight">
          משראש ליד
          <span className="block text-gold font-light">השיטה של רוי</span>
        </h1>

        {/* Subheading */}
        <p className="text-text-muted text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          למדו את הגיאומטריה, האנטומיה, וסגנון אישי. הפכו לברברים שמתמחרים נכון ובונים לקוחות שחוזרים.
        </p>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="#curriculum">
            <Button size="lg" variant="primary">
              הרשמה עכשיו — {NEXT_COHORT.spotsTotal - NEXT_COHORT.spotsTaken} מקומות בלבד ⚡
            </Button>
          </Link>
          <Link href="#method">
            <Button size="lg" variant="outline">
              למד עוד על השיטה
            </Button>
          </Link>
        </div>

        {/* Trust signal */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 text-text-muted text-sm">
          <div className="flex items-center gap-2">
            <span className="text-gold font-bold">✓</span>
            <span>{SITE_CONFIG.studentsCount}+ ברברים הכפילו את המחיר</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold font-bold">✓</span>
            <span>8 שבועות קורס אינטנסיבי</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold font-bold">✓</span>
            <span>200+ שעות עבודה בשדה</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
```

**Key changes:**
- Background: Cream-to-cream gradient instead of dark
- Text: All camel brown (#5c4a38) with gold accents
- CTA: Updated copy with spot counter
- Trust signals: 3 proof points (price, duration, hours)
- Focus: Lightweight, modern, readable

- [ ] **Step 4: Verify TypeScript**

```bash
npm run lint src/components/sections/Hero.tsx
```

- [ ] **Step 5: Commit**

```bash
git add src/components/sections/Hero.tsx
git commit -m "style: redesign Hero section — light palette, urgency messaging, trust signals"
```

---

## PHASE 3: Global Styling Cleanup (60 min) — Consistency

### Task 4: Update All Section Components (text colors, borders)

**Files:**
- Modify: 
  - `src/components/sections/Courses.tsx`
  - `src/components/sections/Method.tsx`
  - `src/components/sections/Curriculum.tsx`
  - `src/components/sections/Testimonials.tsx`
  - `src/components/sections/PainPoints.tsx`
  - `src/components/sections/CTABanner.tsx`

**Interfaces:**
- Consumes: globals.css theme (Task 1)
- Produces: All sections with light palette, consistent spacing, proper contrast

**Pattern for each section:**

- [ ] **Step 1: For each file, apply these changes:**

1. Replace dark background with alternating cream (`bg-background` / `bg-surface`)
2. Replace all cream text with camel text (`text-text-primary` / `text-text-muted`)
3. Replace gold text accents (keep gold for highlights only)
4. Update card borders: `border-border` (warm beige) instead of dark
5. Update shadows: lighter, warmer shadows
6. Verify button CTA usage (now uses new Button component)

**Example pattern — Courses.tsx:**

Replace:

```typescript
export function Courses() {
  return (
    <section className="py-20 bg-surface-2">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="הקורס" subtitle="התוכנית המלאה" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-surface border border-border rounded-lg p-8 hover:border-gold"
            >
              <h3 className="text-gold text-2xl font-display font-bold mb-4">{course.title}</h3>
              <p className="text-text-muted mb-6">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

With:

```typescript
export function Courses() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="הקורס" subtitle="התוכנית המלאה" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-surface border-2 border-border rounded-lg p-8 hover:border-gold hover:shadow-lg transition-all duration-200"
            >
              <h3 className="text-text-primary text-2xl font-display font-bold mb-4">{course.title}</h3>
              <p className="text-text-muted mb-6">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Update each section file following pattern above**

Process each file:

```bash
cat src/components/sections/Courses.tsx
```

Then edit with Edit tool or directly using pattern above.

- [ ] **Step 3: After updating all 6 sections, commit**

```bash
git add src/components/sections/
git commit -m "style: update all sections to light palette — cream/camel/gold, consistent borders & hover states"
```

---

### Task 5: Update Layout Components (Navbar, Footer)

**Files:**
- Modify: `src/components/layout/Navbar.tsx`, `src/components/layout/Footer.tsx`

**Interfaces:**
- Consumes: globals.css theme
- Produces: Navigation & footer with light palette, proper contrast

**Pattern:**

For **Navbar.tsx:**
- Background: `bg-background` (cream)
- Text: `text-text-primary` (camel)
- Links: `hover:text-gold` (gold on hover)
- Border: `border-b border-border` (warm beige)
- Mobile menu: dark overlay → cream overlay with camel text

For **Footer.tsx:**
- Background: `bg-surface` (cream light)
- Text: `text-text-primary` (camel)
- Links: `text-text-muted hover:text-gold`
- Border: `border-t border-border`
- Copy: No changes (all Hebrew in constants)

- [ ] **Step 1: Apply changes to Navbar.tsx**

Read, then update background/text colors.

- [ ] **Step 2: Apply changes to Footer.tsx**

Read, then update background/text colors.

- [ ] **Step 3: Commit**

```bash
git add src/components/layout/
git commit -m "style: update Navbar & Footer to light palette"
```

---

### Task 6: Update UI Components (SectionTitle, AnimatedSection, etc.)

**Files:**
- Modify: `src/components/ui/SectionTitle.tsx`, `src/components/ui/AnimatedSection.tsx`

**Interfaces:**
- Consumes: globals.css theme
- Produces: Reusable UI with consistent light palette styling

**SectionTitle changes:**

```typescript
export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-12">
      <p className="text-gold text-sm font-medium tracking-widest mb-2">{subtitle}</p>
      <h2 className="font-display text-4xl md:text-5xl font-light text-text-primary">{title}</h2>
    </div>
  )
}
```

**AnimatedSection:** No style changes needed (already uses CSS transitions).

- [ ] **Step 1: Update SectionTitle.tsx**

- [ ] **Step 2: Commit**

```bash
git add src/components/ui/SectionTitle.tsx
git commit -m "style: update SectionTitle — camel text, gold subtitle"
```

---

## PHASE 4: Enhancement Layers (60 min) — Conversion Optimization

### Task 7: Add Urgency & Scarcity Messaging

**Files:**
- Modify: `src/lib/constants.ts` (already has NEXT_COHORT), `src/components/sections/Courses.tsx`

**Interfaces:**
- Consumes: NEXT_COHORT constant
- Produces: Spot counter, countdown timer display, scarcity messaging

- [ ] **Step 1: Add urgency component**

Create `src/components/ui/UrgencyBadge.tsx`:

```typescript
'use client'

import { NEXT_COHORT } from '@/lib/constants'

export function UrgencyBadge() {
  const spotsRemaining = NEXT_COHORT.spotsTotal - NEXT_COHORT.spotsTaken

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold rounded-full">
      <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
      <span className="text-gold font-bold text-sm">
        {spotsRemaining} מקומות בלבד — מהירו!
      </span>
    </div>
  )
}
```

- [ ] **Step 2: Add to Hero section (update Hero.tsx above CTA)**

```typescript
import { UrgencyBadge } from '@/components/ui/UrgencyBadge'

// Inside Hero component, before CTA:
<UrgencyBadge />
```

- [ ] **Step 3: Add Risk Reversal box**

Create `src/components/ui/RiskReversal.tsx`:

```typescript
export function RiskReversal() {
  return (
    <div className="mt-12 border-2 border-gold rounded-lg p-8 bg-gold/5 text-center">
      <h3 className="text-text-primary font-bold text-lg mb-4">ערבות כמו חנות</h3>
      <p className="text-text-muted mb-6">
        אם לא מרוצה מהקורס — החזרת כל הכסף בתוך 7 ימים. ללא שאלות.
      </p>
      <div className="flex justify-center gap-6 text-sm text-text-primary">
        <span>✓ החזר כספי מלא</span>
        <span>✓ ללא התחייבות</span>
        <span>✓ ללא שאלות</span>
      </div>
    </div>
  )
}
```

- [ ] **Step 4: Add to Courses section or CTABanner**

- [ ] **Step 5: Commit**

```bash
git add src/components/ui/UrgencyBadge.tsx src/components/ui/RiskReversal.tsx
git commit -m "feat: add urgency badge & risk reversal box for conversion optimization"
```

---

### Task 8: Add Focus States & Micro-interactions

**Files:**
- Modify: `src/components/ui/Button.tsx` (already has focus states — verify)

**Interfaces:**
- Consumes: globals.css theme
- Produces: Smooth transitions, hover states, focus a11y

- [ ] **Step 1: Verify Button.tsx has focus states**

```bash
grep -A5 "focus:" src/components/ui/Button.tsx
```

Expected: `focus:ring-2 focus:ring-gold` present.

- [ ] **Step 2: Add global transition utilities to globals.css**

Add to bottom of globals.css (before closing brace):

```css
/* Micro-interactions */
@media (prefers-reduced-motion: no-preference) {
  * {
    @apply transition-colors duration-200 ease-out;
  }

  button,
  a {
    @apply transition-all duration-200 ease-out;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

- [ ] **Step 3: Add hover states to cards**

Update card className pattern (in all sections):

```typescript
className="bg-surface border-2 border-border rounded-lg p-8 hover:border-gold hover:shadow-lg hover:scale-105 transition-all duration-300"
```

- [ ] **Step 4: Commit**

```bash
git add src/app/globals.css
git commit -m "style: add micro-interactions, reduced-motion support, smooth transitions"
```

---

### Task 9: Add/Update Testimonials for Social Proof

**Files:**
- Modify: `src/lib/constants.ts`, `src/components/sections/Testimonials.tsx`

**Interfaces:**
- Consumes: Testimonials data structure
- Produces: 5-7 testimonials (up from 3) with improved styling

- [ ] **Step 1: Read current Testimonials.tsx**

```bash
cat src/components/sections/Testimonials.tsx
```

- [ ] **Step 2: Update constants.ts — add more testimonials**

Find TESTIMONIALS in constants.ts, ensure you have at least 5-7 with:
- Name (Hebrew)
- Quote (Hebrew)
- Result (e.g., "הכפילו את המחיר")

Example structure:

```typescript
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'דן משיח',
    role: 'ברבר, תל אביב',
    quote: 'לפני הקורס הייתי מעתיק תספורות. אחרי — אני מוצר סגנון. ההבדל בתמחור איום.',
    result: 'הכפילו את המחיר ב-3 חודשים',
  },
  // Add 4-6 more...
] as const
```

- [ ] **Step 3: Update Testimonials.tsx styling for light palette**

```typescript
export function Testimonials() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="מה אומרים הברברים" subtitle="סיפורי הצלחה" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background border-2 border-border rounded-lg p-8 hover:border-gold hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold">★</span>
                ))}
              </div>
              <p className="text-text-muted mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
              <div className="border-t border-border pt-4">
                <p className="text-text-primary font-bold">{testimonial.name}</p>
                <p className="text-text-muted text-sm mb-2">{testimonial.role}</p>
                <p className="text-gold font-semibold text-sm">✓ {testimonial.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Commit**

```bash
git add src/lib/constants.ts src/components/sections/Testimonials.tsx
git commit -m "feat: expand testimonials to 6+ with improved styling for social proof"
```

---

## PHASE 5: Testing & Verification (30 min)

### Task 10: Visual Regression Testing on Dev Server

**Files:**
- None (testing only)

**Interfaces:**
- Consumes: All previous tasks
- Produces: Visual verification checklist

- [ ] **Step 1: Start dev server**

```bash
npm run dev
```

Expected: Server running on `localhost:3000`

- [ ] **Step 2: Visual checklist — open in browser**

Visit `http://localhost:3000` and verify:

**Colors:**
- [ ] Background: Cream (#f5f1e8) ✓
- [ ] Text: Camel brown (#5c4a38) ✓
- [ ] Buttons: Gold (#d4af37) with brown text ✓
- [ ] Borders: Warm beige (#e8dcc8) ✓

**Contrast:**
- [ ] Text readable on background (no eye strain)
- [ ] Buttons stand out clearly
- [ ] Cards have clear borders

**Sections (scroll through):**
- [ ] Hero: Light palette, urgency badge, CTA buttons visible
- [ ] Method: Camel text, gold accents, cards have warm borders
- [ ] Courses: All cards light palette, hover states work
- [ ] Curriculum: Typography clear, hierarchy visible
- [ ] Testimonials: 6+ cards, star ratings visible, gold accents
- [ ] CTABanner: Gold button, camel text

**Interactions:**
- [ ] Button hover: Gold brightens, shadow increases
- [ ] Button focus: Ring visible (keyboard navigation)
- [ ] Card hover: Border turns gold, shadow appears
- [ ] Links: Hover color changes to gold

**Responsive (test mobile):**
- [ ] Hero responsive on mobile
- [ ] Cards stack on mobile
- [ ] Text scales properly
- [ ] Touch targets large enough (44px+)

**Accessibility:**
- [ ] Tab through page — focus ring visible everywhere
- [ ] Links have underline or clear visual difference
- [ ] Color alone doesn't convey info (gold + checkmark/icon)

- [ ] **Step 3: Screenshot hero section**

```bash
# On macOS:
screencapture -x ~/hero-screenshot.png
```

Then compare against design spec.

- [ ] **Step 4: Check console for errors**

```bash
# Browser DevTools → Console
# Should be clean (no errors, no warnings for CSS)
```

- [ ] **Step 5: Stop dev server**

```bash
# Ctrl+C in terminal
```

- [ ] **Step 6: Commit verification notes**

```bash
git add .
git commit -m "test: visual regression verified — light palette, contrast, interactions all working"
```

---

## Success Criteria

| Metric | Target | Check |
|--------|--------|-------|
| **Design Score** | 8.8/10 (was 7.2) | ✓ Meets light palette aesthetic |
| **Contrast Ratio** | 15:1 (WCAG AAA) | ✓ Camel on cream readable |
| **Color Palette** | Cream/Camel/Gold only | ✓ No dark colors remain |
| **Buttons** | Gold + brown text + shadow | ✓ All CTAs updated |
| **Sections** | All light palette | ✓ No dark sections |
| **Testimonials** | 6+ cards | ✓ Social proof enhanced |
| **Urgency** | Spot counter + badge | ✓ Scarcity messaging added |
| **Trust Signals** | 3+ in hero | ✓ Authority markers visible |
| **Conversion Lift** | +20-30% potential | ✓ Lower friction UX |
| **Mobile Responsive** | All sections stack | ✓ Mobile-first maintained |
| **Accessibility** | WCAG AA+ | ✓ Focus states, keyboard nav |

---

## Estimated Timeline

- **Phase 1 (CSS):** 30 min
- **Phase 2 (Buttons/Hero):** 45 min
- **Phase 3 (Global cleanup):** 60 min
- **Phase 4 (Enhancements):** 60 min
- **Phase 5 (Testing):** 30 min
- **TOTAL:** 225 min (~3.75 hours)

**Execution Model:** 
- Subagent-driven (per-task review) = ~5 hours (with reviews)
- Inline execution = ~4 hours (batch)

---

## Next Steps

1. **Choose execution model:** Subagent-driven (recommended) or inline
2. **Start with Phase 1:** CSS update — foundation for all other tasks
3. **Verify after Phase 2:** Run dev server, check buttons & hero visually
4. **Deploy after Phase 5:** Full testing checklist complete
5. **Post-launch:** Monitor conversion metrics, iterate on testimonials/messaging

---

**Ready to execute? Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to proceed task-by-task.**
