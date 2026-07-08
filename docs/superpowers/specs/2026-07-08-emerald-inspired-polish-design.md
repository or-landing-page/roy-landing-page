# Emerald-Inspired Polish Pass

## Purpose
Adopt select visual patterns from emeraldltd.co.il (bold pill navbar CTA, before/after proof imagery, bolder section-heading hierarchy) into RoyHouse's existing dark/gold design system. Also fix Gallery section, which exists but is not rendered on the page.

## 1. Navbar CTA — pill style
File: `src/components/layout/Navbar.tsx`
- Desktop CTA (`הצטרף לקורס ←`) changes from square/sharp to `rounded-full`, adds a subtle gold shadow (`shadow-lg shadow-gold/20`), keeps existing hover scale.
- Mobile menu CTA gets the same `rounded-full` treatment for consistency.
- No color change — stays `bg-gold` / `text-background`, per user's "same colors, just more punchy" instruction.

## 2. Gallery — before/after comparison grid
File: `src/components/sections/Gallery.tsx`
- Replace the current 9 empty placeholder boxes (✂️ icon divs) with paired before/after cards: each card shows two stacked or side-by-side image slots labeled "לפני" / "אחרי", using the same placeholder-image approach already used elsewhere in the codebase (check `About.tsx` / `Testimonials.tsx` for the existing image-placeholder pattern and match it — likely `next/image` with a real path, since `roi-photo.jpg` exists in `public/`; if no more real photos are available, keep clearly-labeled placeholder divs, not fake stock photos).
- Grid: reduce from 9 masonry items to a fixed set (e.g. 6 before/after pairs) in a responsive grid (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`), replacing the `columns-*` masonry layout — before/after pairs need consistent card shape, not variable-height masonry.
- Keep existing "ראה עוד עבודות באינסטגרם" link below the grid.

## 3. Wire Gallery into the page
File: `src/app/page.tsx`
- Import `Gallery` and render it between `About` and `Testimonials`:
  `... <About /> <Gallery /> <Testimonials /> ...`

## 4. Bolder section-title hierarchy
File: `src/components/ui/SectionTitle.tsx` (shared component — this single change propagates to every section using it)
- `h2` size increases: `text-3xl md:text-5xl` → `text-4xl md:text-6xl` (aligns with Emerald's large bold headline treatment while staying inside RoyHouse's existing type scale used elsewhere, e.g. Hero/IntroCTA already use up to `text-6xl`/`text-7xl`).
- Weight stays `font-black` (already the boldest available) — no change needed there, size increase alone delivers the "significantly bigger" ask.
- No change to eyebrow or subtitle sizing — only the main heading grows.

## Out of scope
- No navbar structural changes (nav links, logo, scroll-spy logic untouched).
- No new imagery sourcing/generation beyond what's specified — if real before/after photos aren't available, use clearly-labeled placeholders (consistent with existing Gallery TODO comment convention), not stock photos passed off as real work.
- No color palette changes anywhere.
