# Loading Screen + Curtain Reveal

## Purpose
First-visit splash: logo fade-in, then center-split curtain opens to reveal the site (matches reference site's loading-then-reveal pattern).

## Behavior
- Client component `LoadingScreen.tsx`, mounted once in `src/app/layout.tsx` around `{children}`.
- On mount, check `sessionStorage.getItem('rh-visited')`.
  - If present: render nothing, skip animation entirely.
  - If absent: run sequence, then `sessionStorage.setItem('rh-visited', '1')`.
- Sequence (~1.5-2s total):
  1. Full-screen fixed overlay (`inset-0`, `z-50`, bg `#080808`), logo (`/logo.png`) centered, fade-in ~400ms, hold ~600ms.
  2. Curtain reveal: overlay splits into two panels (left half, right half), each `bg-#080808`, sliding to `-100%` / `100%` respectively over ~700ms (framer-motion), logo fades out concurrently.
  3. After animation completes, unmount overlay entirely (`display: none` / remove from DOM), write sessionStorage flag.
- Site content (Hero incl. background video) is mounted underneath the overlay from the start — video already playing when curtain opens, no pop-in/layout shift.
- `prefers-reduced-motion: reduce` → skip straight to instant reveal (no fade/slide), just remove overlay after a minimal tick.

## Component
- New file: `src/components/ui/LoadingScreen.tsx`, `'use client'`.
- Self-contained: owns its own state machine (`loading` -> `revealing` -> `done`), no props needed.
- Uses framer-motion (already a project dependency per Hero's prior usage / AnimatedSection pattern).

## Integration
- `src/app/layout.tsx`: import and render `<LoadingScreen />` as a sibling wrapping/preceding `{children}` inside `<body>`, so it overlays everything via fixed positioning without altering page structure.

## Out of scope
- No configurable duration/props — hardcoded per this spec.
- No loading progress indicator (explicitly rejected in favor of simple fade).
- Does not persist across browser sessions (sessionStorage only, not localStorage) — resets each new tab/session per user's choice.
