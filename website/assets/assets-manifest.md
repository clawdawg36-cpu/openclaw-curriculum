# AI Explorers — Assets Manifest
**Version:** 1.0  
**Last Updated:** 2026-03-21  
**Status:** Phase 2 — Partial (icons + hero delivered; remaining priority tiers defined)

---

## Overview

This manifest lists all visual assets needed for the AI Explorers marketing site across all pages and contexts. Assets are organized by delivery priority.

**Brand reference:** See `curriculum/brand-guidelines.md` for color tokens, typography, icon style, and usage rules.

---

## Priority 1 — Module Arc Icons (✅ DELIVERED)

These 7 SVG icons represent the capability unlock at each curriculum module. Used in the module overview grid, curriculum page section headers, and progress tracking UI.

| Filename | Module | Theme | Dimensions | Format | Status |
|---|---|---|---|---|---|
| `icons/m1-identity.svg` | M1: Identity | Robot face / personality | 64×64px | SVG | ✅ Done |
| `icons/m2-vision.svg` | M2: Vision | Eye / camera lens | 64×64px | SVG | ✅ Done |
| `icons/m3-knowledge.svg` | M3: Knowledge | Brain / open book | 64×64px | SVG | ✅ Done |
| `icons/m4-learning.svg` | M4: Learning | Neural net / upward graph | 64×64px | SVG | ✅ Done |
| `icons/m5-voice.svg` | M5: Voice | Speech bubble / waveform | 64×64px | SVG | ✅ Done |
| `icons/m6-ethics.svg` | M6: Ethics | Shield / balance scale | 64×64px | SVG | ✅ Done |
| `icons/m7-capstone.svg` | M7: Capstone | Rocket / star burst | 64×64px | SVG | ✅ Done |

### Icon Usage Notes
- Icons are designed for **dark backgrounds** (`--bg-base #0D0F14`, `--bg-surface #161B27`)
- Each icon uses a unique primary accent color reflecting its module's personality:
  - M1: Electric Blue → Pulse Purple (gradient)
  - M2: Electric Blue → Signal Teal (gradient)  
  - M3: Pulse Purple → Electric Blue (gradient)
  - M4: Signal Teal → Electric Blue (gradient)
  - M5: Glow Yellow → Spark Orange (gradient)
  - M6: Signal Teal → Pulse Purple (gradient)
  - M7: Full 3-stop gradient (Electric Blue → Pulse Purple → Signal Teal)
- Use at **64×64px** minimum; scale up to **128×128px** for featured/hero contexts
- All include `role="img"` and `aria-label` for accessibility
- CSS classes on internal elements support hover/animation effects (see animation spec below)

### Icon Scale Variants Needed (Phase 3)
- 128×128px versions for curriculum page hero
- 32×32px versions for nav breadcrumbs and progress indicators

---

## Priority 2 — Hero Graphic (✅ DELIVERED)

| Filename | Description | Dimensions | Format | Status |
|---|---|---|---|---|
| `hero-graphic.svg` | Main homepage hero — student + AI growing across 7 modules | 960×540px | SVG | ✅ Done |

### Hero Graphic Concept
The hero shows a student silhouette at a workstation on the left. Their AI companion grows from a simple identity dot (M1) through increasingly complex visual forms — eye, book, neural net, speech bubble, shield, rocket — connected by a glowing circuit-trace arc path. The rocket (M7) launches upward at the far right, symbolizing the capstone outcome.

### Hero Technical Notes
- Dark background (`#0D0F14`) — drop-in on homepage dark theme
- Designed for **960×540px** (16:9); responsive scaling via CSS `max-width: 100%`
- CSS animation hooks via class names:
  - `.hero-bg-nebula` — opacity pulse animation (ambient glow)
  - `.arc-trace` — `stroke-dashoffset` reveal on load (the connecting path draws in)
  - `.patch-stage-N` (1–7) — staggered `fadeInUp` on scroll
  - `.rocket-launch` — `translateY(-20px)` float animation (infinite, slow)
  - `.student-silhouette` — static; no animation
- See animation spec section below for CSS values

### Hero Variants Needed (Phase 3)
| Filename | Dimensions | Usage |
|---|---|---|
| `hero-graphic-mobile.svg` | 390×520px | Mobile hero (portrait, simplified) |
| `hero-graphic-educators.svg` | 960×400px | `/educators` page hero (teacher-centered, no mascot) |
| `hero-og-card.png` | 1200×630px | Open Graph / social sharing default |

---

## Priority 3 — Brand Identity Assets (⏳ TODO)

### Wordmark & Logomark

| Filename | Description | Dimensions | Format | Status |
|---|---|---|---|---|
| `brand/wordmark-dark.svg` | "AI Explorers" wordmark, dark bg variant | 240×60px | SVG | ⏳ Needed |
| `brand/wordmark-light.svg` | "AI Explorers" wordmark, light bg variant | 240×60px | SVG | ⏳ Needed |
| `brand/logomark-color.svg` | Compass/neural node icon, gradient fill | 64×64px | SVG | ⏳ Needed |
| `brand/logomark-mono.svg` | Single-color logomark variant | 64×64px | SVG | ⏳ Needed |

### Wordmark Spec (for execution)
- **"AI"** — Clash Display Bold, gradient fill (`#4F8FFF` → `#7C5CFC`)
- **"Explorers"** — Clash Display 600, `#F0F4FF` on dark / `#0D1326` on light
- Optional **→** glyph after "Explorers" in `#00D9B8` at ~0.5em
- Min width: 120px digital / 1.5in print

### Logomark Spec (for execution)
- Compass rose with one arm replaced by a neural network node connection
- Circular bounding shape for app icon contexts
- Gradient: `#4F8FFF` → `#7C5CFC` → `#00D9B8`

---

## Priority 4 — Mascot "Patch" (⏳ TODO)

| Filename | Description | Dimensions | Format | Status |
|---|---|---|---|---|
| `mascot/patch-neutral.svg` | Default standing pose | 200×280px | SVG | ⏳ Needed |
| `mascot/patch-thinking.svg` | LED array pulsing, thoughtful look | 200×280px | SVG | ⏳ Needed |
| `mascot/patch-excited.svg` | Arms up, full LED glow | 200×280px | SVG | ⏳ Needed |
| `mascot/patch-confused.svg` | Question mark on display | 200×280px | SVG | ⏳ Needed |
| `mascot/patch-celebratory.svg` | Confetti, star burst | 200×280px | SVG | ⏳ Needed |

### Patch Visual Spec (for execution)
- **Form:** Rounded robot body — approachable, not intimidating
- **Primary color:** `--accent-signal` (`#00D9B8`) as main glow/LED color
- **Style:** Line art primary with single accent color fill
- **LED array:** Chest panel of 5×3 dots; CSS-animatable for pulse states
- **Expression panel:** Swappable face region (eyes + mouth SVG group)
- **Clearspace:** 16px minimum on all sides at 200×280px

### Patch Animation CSS Reference
```css
/* LED pulse for thinking state */
@keyframes led-pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1.0; }
}
.patch-led { animation: led-pulse 1.2s ease-in-out infinite; }
.patch-led:nth-child(2) { animation-delay: 0.2s; }
.patch-led:nth-child(3) { animation-delay: 0.4s; }
```

---

## Priority 5 — Social & OG Assets (⏳ TODO)

| Filename | Description | Dimensions | Format | Status |
|---|---|---|---|---|
| `social/og-default.png` | Default OG card (dark, wordmark, tagline) | 1200×630px | PNG | ⏳ Needed |
| `social/og-students.png` | Student-audience OG card | 1200×630px | PNG | ⏳ Needed |
| `social/og-educators.png` | Educator-audience OG card (lighter tone) | 1200×630px | PNG | ⏳ Needed |
| `social/og-homeschool.png` | Homeschool-audience OG card | 1200×630px | PNG | ⏳ Needed |
| `social/og-policy.png` | Policy/school-board OG card | 1200×630px | PNG | ⏳ Needed |
| `social/twitter-card.png` | Twitter summary card | 800×418px | PNG | ⏳ Needed |

### OG Card Template Spec
- **Background:** `#0D0F14` with gradient nebula overlay
- **Wordmark:** Top-left, ~200px wide
- **Tagline:** Center, Clash Display 700, 48px, gradient text fill
- **Sub-copy:** Inter 400, 20px, `#8B9BC2`
- **Watermark/URL:** Bottom-right, Inter 400, 14px, `#4A5578`
- **No mascot** on default/educator/policy variants

---

## Priority 6 — Favicon Set (⏳ TODO)

Generated from `brand/logomark-color.svg` using `realfavicongenerator.net` or equivalent.

| Filename | Description | Dimensions | Format |
|---|---|---|---|
| `favicon/favicon.ico` | Classic multi-size ICO | 16/32/48px | ICO |
| `favicon/favicon-16.png` | Browser tab minimum | 16×16px | PNG |
| `favicon/favicon-32.png` | Standard browser tab | 32×32px | PNG |
| `favicon/apple-touch-icon.png` | iOS home screen | 180×180px | PNG |
| `favicon/android-chrome-192.png` | Android home screen | 192×192px | PNG |
| `favicon/android-chrome-512.png` | Android splash | 512×512px | PNG |
| `favicon/site.webmanifest` | PWA manifest | — | JSON |

---

## Priority 7 — Marketing Illustrations (⏳ TODO)

| Filename | Description | Dimensions | Format | Context |
|---|---|---|---|---|
| `illustrations/hero-educators.svg` | Teacher viewing student work on screen | 800×500px | SVG | `/educators` hero |
| `illustrations/community.svg` | Diverse students collaborating | 800×400px | SVG | Homepage social proof section |
| `illustrations/module-progress.svg` | Arc/journey timeline graphic | 960×200px | SVG | Curriculum overview page |
| `illustrations/hero-homeschool.svg` | Student + parent at home setup | 800×480px | SVG | `/homeschool` hero |

---

## Priority 8 — UI Component Assets (⏳ TODO)

| Filename | Description | Dimensions | Format | Context |
|---|---|---|---|---|
| `patterns/circuit-grid.svg` | Subtle circuit/grid texture | Tileable | SVG | Hero section background overlay |
| `patterns/dot-grid.svg` | Fine dot grid pattern | Tileable | SVG | Section backgrounds |
| `ui/empty-state-dashboard.svg` | Empty dashboard state | 400×300px | SVG | Dashboard page |
| `ui/empty-state-search.svg` | Empty search results | 400×280px | SVG | Search/filter pages |
| `ui/empty-state-error.svg` | 404 / error page | 400×300px | SVG | Error pages |

---

## CSS Animation Reference (for delivered SVGs)

### Hero Graphic Arc Reveal
```css
.arc-trace {
  stroke-dasharray: 1200;
  stroke-dashoffset: 1200;
  animation: arc-reveal 1.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
}

@keyframes arc-reveal {
  to { stroke-dashoffset: 0; }
}
```

### Module Stage Staggered FadeIn
```css
.patch-stage-1 { animation: stage-fadein 0.5s ease-out 0.5s both; }
.patch-stage-2 { animation: stage-fadein 0.5s ease-out 0.8s both; }
.patch-stage-3 { animation: stage-fadein 0.5s ease-out 1.1s both; }
.patch-stage-4 { animation: stage-fadein 0.5s ease-out 1.4s both; }
.patch-stage-5 { animation: stage-fadein 0.5s ease-out 1.7s both; }
.patch-stage-6 { animation: stage-fadein 0.5s ease-out 2.0s both; }
.patch-stage-7 { animation: stage-fadein 0.5s ease-out 2.3s both; }

@keyframes stage-fadein {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### Rocket Float (M7 continuous)
```css
.rocket-launch {
  animation: rocket-float 3s ease-in-out infinite;
}

@keyframes rocket-float {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-6px); }
}
```

### Nebula Ambient Pulse
```css
.hero-bg-nebula {
  animation: nebula-pulse 4s ease-in-out infinite alternate;
}

@keyframes nebula-pulse {
  from { opacity: 0.7; }
  to   { opacity: 1.0; }
}
```

### Reduced Motion (required)
```css
@media (prefers-reduced-motion: reduce) {
  .arc-trace,
  .patch-stage-1, .patch-stage-2, .patch-stage-3,
  .patch-stage-4, .patch-stage-5, .patch-stage-6, .patch-stage-7,
  .rocket-launch, .hero-bg-nebula {
    animation: none;
    opacity: 1;
    transform: none;
    stroke-dashoffset: 0;
  }
}
```

---

## File Structure

```
website/assets/
├── icons/
│   ├── m1-identity.svg      ✅
│   ├── m2-vision.svg        ✅
│   ├── m3-knowledge.svg     ✅
│   ├── m4-learning.svg      ✅
│   ├── m5-voice.svg         ✅
│   ├── m6-ethics.svg        ✅
│   └── m7-capstone.svg      ✅
├── brand/
│   ├── wordmark-dark.svg    ⏳
│   ├── wordmark-light.svg   ⏳
│   ├── logomark-color.svg   ⏳
│   └── logomark-mono.svg    ⏳
├── mascot/
│   ├── patch-neutral.svg    ⏳
│   ├── patch-thinking.svg   ⏳
│   ├── patch-excited.svg    ⏳
│   ├── patch-confused.svg   ⏳
│   └── patch-celebratory.svg ⏳
├── social/
│   ├── og-default.png       ⏳
│   ├── og-students.png      ⏳
│   ├── og-educators.png     ⏳
│   ├── og-homeschool.png    ⏳
│   ├── og-policy.png        ⏳
│   └── twitter-card.png     ⏳
├── favicon/                 ⏳ (full set)
├── illustrations/           ⏳
│   ├── hero-educators.svg
│   ├── community.svg
│   ├── module-progress.svg
│   └── hero-homeschool.svg
├── patterns/                ⏳
│   ├── circuit-grid.svg
│   └── dot-grid.svg
├── ui/                      ⏳
│   ├── empty-state-dashboard.svg
│   ├── empty-state-search.svg
│   └── empty-state-error.svg
├── hero-graphic.svg         ✅
└── assets-manifest.md       ✅ (this file)
```

---

## Changelog

| Date | Version | Changes |
|---|---|---|
| 2026-03-21 | 1.0 | Initial manifest. Module arc icons × 7 + hero graphic delivered. Full site asset list defined. |
