# Wireframe — AI Explorers Homepage
**File:** `wireframe-homepage.md`
**Phase:** 2 — Structure
**Last Updated:** 2026-03-21
**Status:** Draft ✅

---

## Notation Guide

```
┌─────────────────────────────────────────────────────────────────────┐
│  [COMPONENT TYPE]  Content placeholder or description               │
│  ═══ = section divider                                              │
│  --- = interior divider / column break                              │
│  ███ = image / illustration placeholder                             │
│  ◉   = selected state   ○ = unselected state                       │
│  [BTN] = button   [LINK] = text link   [INPUT] = form field        │
│  ~~ = gradient text / highlight                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Page Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│  SECTION 1 — Navigation Bar (sticky)                                │
├─────────────────────────────────────────────────────────────────────┤
│  SECTION 2 — Hero Section                                           │
├─────────────────────────────────────────────────────────────────────┤
│  SECTION 3 — Audience Selector / Tabs                               │
├─────────────────────────────────────────────────────────────────────┤
│  SECTION 4 — Module Arc Showcase                                    │
├─────────────────────────────────────────────────────────────────────┤
│  SECTION 5 — Social Proof                                           │
├─────────────────────────────────────────────────────────────────────┤
│  SECTION 6 — Secondary CTA (mid-page)                               │
├─────────────────────────────────────────────────────────────────────┤
│  SECTION 7 — How It Works (Process)                                 │
├─────────────────────────────────────────────────────────────────────┤
│  SECTION 8 — Final CTA / Conversion                                 │
├─────────────────────────────────────────────────────────────────────┤
│  SECTION 9 — Footer                                                 │
└─────────────────────────────────────────────────────────────────────┘
```

**Page theme:** Dark (`--bg-base: #0D0F14`)
**Mascot (Patch):** No (hero) / Yes (mid-page student callout)
**Gradient:** Yes (hero headline + hero illustration background)

---

## SECTION 1 — Navigation Bar

```
┌─────────────────────────────────────────────────────────────────────┐
│ STICKY NAV  bg: --bg-surface (#161B27)  border-bottom: --bg-border  │
│─────────────────────────────────────────────────────────────────────│
│                                                                     │
│  [LOGO / WORDMARK]          [NAV LINKS]               [CTA NAV]    │
│  ~~AI~~ Explorers →         Curriculum                [Get Started] │
│  (Clash Display, gradient   How It Works              btn: primary  │
│   "AI" + white "Explorers") For Educators             solid        │
│                             For Families              --accent-     │
│                             ▾ dropdown on hover        electric     │
│                                                                     │
│  ─────────────────────────────────────────────────────────────────  │
│  Layout: flex row, space-between, max-width: 1200px, centered       │
│  Height: 64px desktop / 56px mobile                                 │
│  Position: sticky top-0, z-index: 100                               │
│  Scroll behavior: border-bottom opacity 0→1 on scroll >20px         │
│                                                                     │
│  MOBILE (< 768px): hamburger menu icon right, wordmark left         │
│  Mobile menu: full-width overlay, vertical nav links, CTA at bottom │
└─────────────────────────────────────────────────────────────────────┘
```

**Nav links:**
- `Curriculum` → `/curriculum` (dropdown: Module 1–7 overview)
- `How It Works` → `/#how-it-works` (anchor on homepage)
- `For Educators` → `/educators`
- `For Families` → `/homeschool`
- `[Get Started]` → `/get-started` (primary CTA button, --accent-electric fill)

---

## SECTION 2 — Hero Section

```
┌─────────────────────────────────────────────────────────────────────┐
│ HERO  bg: --bg-base  min-height: 90vh  overflow: hidden             │
│─────────────────────────────────────────────────────────────────────│
│                                                                     │
│  [BACKGROUND LAYER]                                                 │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░  Subtle circuit/grid pattern SVG at 5% opacity (--bg-border)  ░  │
│  ░  Ambient gradient glow (radial, top-center): electric→pulse    ░  │
│  ░  at 8% opacity, 600px radius — creates a light bloom behind   ░  │
│  ░  the headline without dominating the dark background           ░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
│                                                                     │
│  ┌─────────────────────────────┬───────────────────────────────┐   │
│  │  HERO COPY (left, 55%)      │  HERO ILLUSTRATION (right,45%)│   │
│  │                             │                               │   │
│  │  [EYEBROW LABEL]            │  ███████████████████████████  │   │
│  │  LABEL: "AI CURRICULUM      │  ███                       ███│   │
│  │  FOR GRADES 6–8"            │  ███  Hero illustration:   ███│   │
│  │  font: Inter 500, 12px      │  ███  Student at workbench ███│   │
│  │  color: --text-secondary    │  ███  building with visible███│   │
│  │  letter-spacing: 0.06em     │  ███  AI outputs on screen ███│   │
│  │  all-caps                   │  ███  (line art, spot-color███│   │
│  │                             │  ███  in electric blue +   ███│   │
│  │  [H1 DISPLAY HEADLINE]      │  ███  signal teal)         ███│   │
│  │  "Your kid won't just       │  ███                       ███│   │
│  │   learn about AI."          │  ███████████████████████████  │   │
│  │                             │                               │   │
│  │  font: Clash Display 700    │  Image note: SVG illustration │   │
│  │  size: 72px (--text-7xl)    │  — floating, not boxed       │   │
│  │  color: --text-primary      │  — slight upward entrance     │   │
│  │  line-height: 1.1           │    animation on load          │   │
│  │  max-width: 600px           │  — right-bleed on desktop     │   │
│  │                             │  — stacks below copy mobile   │   │
│  │  [H2 GRADIENT SUBHEAD]      │                               │   │
│  │  ~~"They'll build one."~~   │  [FLOATING BADGE — animated]  │   │
│  │                             │  ┌───────────────────────┐    │   │
│  │  font: Clash Display 700    │  │ 🤖 "Just trained my   │    │   │
│  │  size: 72px                 │  │ first model!"          │    │   │
│  │  fill: gradient             │  │ — Mia, age 12          │    │   │
│  │  (electric→pulse→teal)      │  └───────────────────────┘    │   │
│  │                             │  Style: card, --bg-surface,   │   │
│  │                             │  --accent-signal border-left  │   │
│  │  [BODY COPY / DESCRIPTOR]   │  Entrance: fade-in-up, 400ms  │   │
│  │  "A 7-module, self-paced    │  delay after hero loads       │   │
│  │   curriculum where middle   │                               │   │
│  │   schoolers build real AI   │                               │   │
│  │   projects — not just read  │                               │   │
│  │   about them."              │                               │   │
│  │                             │                               │   │
│  │  font: Inter 400, 18px      │                               │   │
│  │  color: --text-secondary    │                               │   │
│  │  line-height: 1.6           │                               │   │
│  │  max-width: 500px           │                               │   │
│  │                             │                               │   │
│  │  [CTA BUTTON ROW]           │                               │   │
│  │  [See What They'll Build]   │                               │   │
│  │  Primary btn, filled,       │                               │   │
│  │  --accent-electric          │                               │   │
│  │  height: 48px, px: 32px     │                               │   │
│  │  font: Inter 600, 16px      │                               │   │
│  │  → links to #module-arc     │                               │   │
│  │                             │                               │   │
│  │  [Explore for Educators]    │                               │   │
│  │  Secondary btn, outlined,   │                               │   │
│  │  --text-secondary border    │                               │   │
│  │  hover: --text-primary      │                               │   │
│  │  → links to /educators      │                               │   │
│  │                             │                               │   │
│  │  [TRUST SIGNAL ROW]         │                               │   │
│  │  ★★★★★  "Used in 200+       │                               │   │
│  │  homeschools nationwide"    │                               │   │
│  │  font: Inter 400, 14px      │                               │   │
│  │  color: --text-muted        │                               │   │
│  │  icon: --accent-glow stars  │                               │   │
│  │                             │                               │   │
│  └─────────────────────────────┴───────────────────────────────┘   │
│                                                                     │
│  [SCROLL INDICATOR]                                                 │
│  Centered, bottom: 24px                                             │
│  Animated down-arrow or "↓ Scroll to explore" in --text-muted      │
│  Fade-out on scroll                                                 │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Hero copy notes:**
- Multi-audience hook via the dual CTA: student/family-facing primary ("See What They'll Build") + educator secondary
- Headline speaks to parents and students simultaneously — the curiosity hook works for both
- Descriptor stays factual and avoids buzzwords (no "AI-powered learning," no "future-ready")
- Floating student quote badge personalizes without claiming formal endorsement

**Responsive behavior:**
- Desktop (≥1024px): two-column, copy left / illustration right
- Tablet (768–1023px): copy stacks above illustration, illustration max-height: 400px
- Mobile (<768px): full-width copy, illustration hidden or shown as small accent below CTAs

---

## SECTION 3 — Audience Selector / Tabs

```
┌─────────────────────────────────────────────────────────────────────┐
│ AUDIENCE TABS  bg: --bg-surface  py: 80px                          │
│─────────────────────────────────────────────────────────────────────│
│                                                                     │
│  [SECTION LABEL]                                                    │
│  "WHO IS THIS FOR?"                                                 │
│  font: Inter 500, 12px, --text-muted, letter-spacing: 0.06em       │
│  centered                                                           │
│                                                                     │
│  [SECTION HEADING]                                                  │
│  "Built for curious minds — and the people who support them"        │
│  font: Inter 700, 30px (--text-3xl), --text-primary                 │
│  centered, max-width: 640px, margin: auto                           │
│                                                                     │
│  ─────────────────────────────────────────────────────────────────  │
│                                                                     │
│  [TAB BAR]  Horizontal scrollable on mobile                         │
│  ┌──────────────┬────────────────┬──────────────┬────────────────┐  │
│  │  ◉ Families  │ ○ Educators    │ ○ Districts  │ ○ Policy       │  │
│  └──────────────┴────────────────┴──────────────┴────────────────┘  │
│                                                                     │
│  Tab style:                                                         │
│  - Active: bg --bg-base, border-bottom 2px --accent-electric,      │
│    text --text-primary, font Inter 600                              │
│  - Inactive: no bg, text --text-muted, font Inter 500              │
│  - Transition: 150ms ease                                           │
│                                                                     │
│  ─────────────────────────────────────────────────────────────────  │
│                                                                     │
│  [TAB PANEL — "Families" (default active)]                          │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  ┌──────────────────────────┬──────────────────────────┐    │   │
│  │  │  AUDIENCE COPY (left)    │  AUDIENCE VISUAL (right) │    │   │
│  │  │                          │                          │    │   │
│  │  │  [ICON: compass/family]  │  ███████████████████     │    │   │
│  │  │  Phosphor icon, 32px,    │  ███               ███   │    │   │
│  │  │  --accent-electric       │  ███  Illustration: ███   │    │   │
│  │  │                          │  ███  Parent + child ███   │    │   │
│  │  │  [AUDIENCE HEADLINE]     │  ███  at table,      ███   │    │   │
│  │  │  "A semester your kid    │  ███  laptop open    ███   │    │   │
│  │  │   will actually finish"  │  ███████████████████     │    │   │
│  │  │  Inter 600, 24px         │                          │    │   │
│  │  │  --text-primary          │  [STATS ROW]             │    │   │
│  │  │                          │  ┌────────┬────────────┐ │    │   │
│  │  │  [BODY]                  │  │  7     │ 10–14      │ │    │   │
│  │  │  "7 modules. Flexible    │  │ modules│ ideal age  │ │    │   │
│  │  │  pace. Real projects     │  ├────────┼────────────┤ │    │   │
│  │  │  your child builds and   │  │  0     │ 200+       │ │    │   │
│  │  │  owns. No prior coding   │  │ prereqs│ families   │ │    │   │
│  │  │  required."              │  └────────┴────────────┘ │    │   │
│  │  │  Inter 400, 16px         │  Stat nums: Clash Display │    │   │
│  │  │  --text-secondary        │  700, 36px, --accent-     │    │   │
│  │  │  max-width: 420px        │  electric                 │    │   │
│  │  │                          │  Labels: Inter 400, 13px  │    │   │
│  │  │  [CHECKMARKS]            │  --text-muted             │    │   │
│  │  │  ✓ Self-paced — your     │                          │    │   │
│  │  │    schedule, not ours    │                          │    │   │
│  │  │  ✓ Every module has a    │                          │    │   │
│  │  │    deliverable to show   │                          │    │   │
│  │  │  ✓ Free to start, no     │                          │    │   │
│  │  │    credit card required  │                          │    │   │
│  │  │  Check icon: --accent-   │                          │    │   │
│  │  │  signal, 16px            │                          │    │   │
│  │  │  Inter 400, 15px         │                          │    │   │
│  │  │  --text-secondary        │                          │    │   │
│  │  │                          │                          │    │   │
│  │  │  [CTA]                   │                          │    │   │
│  │  │  [See Homeschool Guide →]│                          │    │   │
│  │  │  text link, Inter 600    │                          │    │   │
│  │  │  --accent-electric       │                          │    │   │
│  │  │  → /homeschool           │                          │    │   │
│  │  └──────────────────────────┴──────────────────────────┘    │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│  [TAB PANEL — "Educators" (inactive)]                               │
│  Same layout. Content from message-matrix §3:                       │
│  Headline: "Every lesson planned. Every rubric written."            │
│  Body: ready-to-use lesson plans, 50-min periods, sub-day safe     │
│  Checklist: ✓ No AI expertise required  ✓ Rubrics included         │
│             ✓ Works Monday morning                                  │
│  Stats: 50-min period fit | Grades 6–8 | Standards-aligned         │
│  CTA: [Download Unit 1 Free →] → /educators                        │
│                                                                     │
│  [TAB PANEL — "Districts" (inactive)]                               │
│  Headline: "Standards-aligned. Free forever. No lock-in."          │
│  Body: open license, no per-seat costs, FERPA/COPPA alignment      │
│  Checklist: ✓ CSTA + NGSS aligned  ✓ No vendor relationship        │
│             ✓ Works on Chromebooks                                   │
│  Stats: 0 per-seat cost | 7 modules | Open license                 │
│  CTA: [Request District Packet →] → /school-boards                 │
│                                                                     │
│  [TAB PANEL — "Policy" (inactive)]                                  │
│  Headline: "Equity-first AI literacy — before the gap widens."     │
│  Body: free, open, built for under-resourced contexts              │
│  Checklist: ✓ Evidence-based  ✓ Scales to 100k students            │
│             ✓ Evaluation metrics built in                           │
│  Stats: Free | Open-source | Research-backed                        │
│  CTA: [Read the Policy Brief →] → /policy                          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Interaction notes:**
- Tab switch: content fades (opacity 0→1, 150ms) — no slide animation (jarring with text)
- URL hash updates on tab switch (`#for-families`, `#for-educators`, etc.) for shareability
- Mobile: tabs horizontally scrollable, panels stack vertically

---

## SECTION 4 — Module Arc Showcase

```
┌─────────────────────────────────────────────────────────────────────┐
│ MODULE ARC  id="module-arc"  bg: --bg-base  py: 96px               │
│─────────────────────────────────────────────────────────────────────│
│                                                                     │
│  [SECTION LABEL]                                                    │
│  "THE CURRICULUM"                                                   │
│  font: Inter 500, 12px, --text-muted, 0.06em spacing, centered     │
│                                                                     │
│  [SECTION HEADING]                                                  │
│  "7 modules. One big idea: build the thing."                        │
│  font: Inter 700, 36px, --text-primary, centered                   │
│  max-width: 600px, margin: auto                                     │
│                                                                     │
│  [BODY INTRO]                                                       │
│  "Each module ends with a project — not a quiz. By module 7,       │
│   your student has a portfolio of working AI projects."             │
│  font: Inter 400, 18px, --text-secondary, centered                 │
│  max-width: 540px, margin: auto, mb: 48px                          │
│                                                                     │
│  ─────────────────────────────────────────────────────────────────  │
│                                                                     │
│  [MODULE CARDS — horizontal scroll on mobile, grid 4+3 on desktop] │
│                                                                     │
│  Desktop: 2 rows — Row 1: modules 1–4 | Row 2: modules 5–7 (centered)│
│  Card width: ~260px, gap: 16px                                      │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │ ROW 1 (cols 1–4)                                             │  │
│  │ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐         │  │
│  │ │ MODULE 1 │ │ MODULE 2 │ │ MODULE 3 │ │ MODULE 4 │         │  │
│  │ │          │ │          │ │          │ │          │         │  │
│  │ │ [ICON]   │ │ [ICON]   │ │ [ICON]   │ │ [ICON]   │         │  │
│  │ │ 🧠 brain/ │ │ 📊 data/ │ │ 💬 text/ │ │ 👁️ vision│         │  │
│  │ │ circuit  │ │ training │ │ language │ │ /camera  │         │  │
│  │ │ SVG icon │ │ SVG icon │ │ SVG icon │ │ SVG icon │         │  │
│  │ │ 48x48    │ │ 48x48    │ │ 48x48    │ │ 48x48    │         │  │
│  │ │          │ │          │ │          │ │          │         │  │
│  │ │ MODULE 1 │ │ MODULE 2 │ │ MODULE 3 │ │ MODULE 4 │         │  │
│  │ │ label:   │ │          │ │          │ │          │         │  │
│  │ │ Inter 500│ │          │ │          │ │          │         │  │
│  │ │ 11px     │ │          │ │          │ │          │         │  │
│  │ │ --text-  │ │          │ │          │ │          │         │  │
│  │ │ muted    │ │          │ │          │ │          │         │  │
│  │ │ 0.06em   │ │          │ │          │ │          │         │  │
│  │ │          │ │          │ │          │ │          │         │  │
│  │ │"What Is  │ │"How AI   │ │"AI &     │ │"AI &     │         │  │
│  │ │ AI?"     │ │ Learns"  │ │ Language"│ │ Vision"  │         │  │
│  │ │ Inter 600│ │          │ │          │ │          │         │  │
│  │ │ 18px     │ │          │ │          │ │          │         │  │
│  │ │ --text-  │ │          │ │          │ │          │         │  │
│  │ │ primary  │ │          │ │          │ │          │         │  │
│  │ │          │ │          │ │          │ │          │         │  │
│  │ │ [DESC]   │ │ [DESC]   │ │ [DESC]   │ │ [DESC]   │         │  │
│  │ │ 2–3 line │ │ 2–3 line │ │ 2–3 line │ │ 2–3 line │         │  │
│  │ │ teaser   │ │ teaser   │ │ teaser   │ │ teaser   │         │  │
│  │ │ Inter 400│ │          │ │          │ │          │         │  │
│  │ │ 14px     │ │          │ │          │ │          │         │  │
│  │ │ --text-  │ │          │ │          │ │          │         │  │
│  │ │ secondary│ │          │ │          │ │          │         │  │
│  │ │          │ │          │ │          │ │          │         │  │
│  │ │ [PROJECT │ │ [PROJECT │ │ [PROJECT │ │ [PROJECT │         │  │
│  │ │  OUTPUT] │ │  OUTPUT] │ │  OUTPUT] │ │  OUTPUT] │         │  │
│  │ │ Badge:   │ │          │ │          │ │          │         │  │
│  │ │"Builds:  │ │"Builds:  │ │"Builds:  │ │"Builds:  │         │  │
│  │ │ [X]"     │ │ [X]"     │ │ [X]"     │ │ [X]"     │         │  │
│  │ │ bg --bg- │ │          │ │          │ │          │         │  │
│  │ │ border   │ │          │ │          │ │          │         │  │
│  │ │ rounded  │ │          │ │          │ │          │         │  │
│  │ │ --accent-│ │          │ │          │ │          │         │  │
│  │ │ pulse    │ │          │ │          │ │          │         │  │
│  │ │ text     │ │          │ │          │ │          │         │  │
│  │ └──────────┘ └──────────┘ └──────────┘ └──────────┘         │  │
│  │                                                              │  │
│  │ ROW 2 (cols 5–7, centered 3-up)                              │  │
│  │          ┌──────────┐ ┌──────────┐ ┌──────────┐             │  │
│  │          │ MODULE 5 │ │ MODULE 6 │ │ MODULE 7 │             │  │
│  │          │          │ │          │ │          │             │  │
│  │          │ [ICON]   │ │ [ICON]   │ │ [ICON]   │             │  │
│  │          │ ⚖️ ethics/ │ │ 🔧 builder│ │ 🌅 horizon│             │  │
│  │          │ scale    │ │ /wrench  │ │ /path    │             │  │
│  │          │          │ │          │ │          │             │  │
│  │          │"AI Ethics"│ │"Building │ │"AI &     │             │  │
│  │          │          │ │ with AI" │ │ Your     │             │  │
│  │          │          │ │          │ │ Future"  │             │  │
│  │          │          │ │          │ │          │             │  │
│  │          │ [DESC]   │ │ [DESC]   │ │ [DESC]   │             │  │
│  │          │ [BADGE]  │ │ [BADGE]  │ │ [BADGE]  │             │  │
│  │          └──────────┘ └──────────┘ └──────────┘             │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  [MODULE CARD SPECS]                                                │
│  bg: --bg-surface                                                   │
│  border: 1px --bg-border                                            │
│  border-radius: 12px                                                │
│  padding: 24px                                                      │
│  hover: border-color → --accent-electric (200ms transition)         │
│  hover: translateY(-4px) (200ms)                                    │
│  cursor: pointer → links to /curriculum#module-{n}                  │
│                                                                     │
│  [CONNECTOR LINE — visual arc / progression indicator]              │
│  Subtle dashed line connecting module cards left→right              │
│  color: --bg-border, 1px dashed                                     │
│  Behind cards, not overlapping                                      │
│  Desktop only — hidden on mobile                                    │
│                                                                     │
│  ─────────────────────────────────────────────────────────────────  │
│                                                                     │
│  [SECTION CTA]                                                      │
│  centered, mt: 48px                                                 │
│  [Explore the Full Curriculum →]                                    │
│  outlined btn, --accent-electric border + text                      │
│  hover: fill --accent-electric, text white                          │
│  → /curriculum                                                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Module card content placeholders (to be filled from curriculum docs):**

| # | Title | Icon concept | 2-line teaser | Project output |
|---|---|---|---|---|
| 1 | What Is AI? | Brain + circuit | What AI really is (and isn't). Start building intuition from day 1. | Image classifier |
| 2 | How AI Learns | Data + training | How machines learn from examples. No magic — just math and data. | Trained ML model |
| 3 | AI & Language | Text + speech bubble | How AI reads, writes, and talks. Build your first language model. | Chatbot / text generator |
| 4 | AI & Vision | Camera + eye | How AI sees the world. Build a computer vision classifier. | Vision model demo |
| 5 | AI Ethics | Scale + fairness | Who decides what's fair? Explore bias, power, and accountability. | Ethics case study |
| 6 | Building with AI | Wrench + gear | Put it all together. Ship a real AI-powered project. | Full AI app |
| 7 | AI & Your Future | Horizon + path | What comes next? Map your own path with AI as a tool, not a boss. | Personal manifesto / portfolio |

---

## SECTION 5 — Social Proof

```
┌─────────────────────────────────────────────────────────────────────┐
│ SOCIAL PROOF  bg: --bg-surface  py: 80px                           │
│─────────────────────────────────────────────────────────────────────│
│                                                                     │
│  [SECTION LABEL]                                                    │
│  "WHAT PEOPLE ARE SAYING"                                           │
│  font: Inter 500, 12px, --text-muted, centered                     │
│                                                                     │
│  [SECTION HEADING]                                                  │
│  "From classrooms, kitchen tables, and school boards"               │
│  font: Inter 600, 30px, --text-primary, centered                   │
│  max-width: 560px, margin: auto, mb: 48px                          │
│                                                                     │
│  ─────────────────────────────────────────────────────────────────  │
│                                                                     │
│  [QUOTE CAROUSEL / TESTIMONIAL GRID]                                │
│  Layout: 3-column grid desktop / 1-column mobile with prev/next     │
│                                                                     │
│  ┌───────────────────┐ ┌───────────────────┐ ┌───────────────────┐ │
│  │ QUOTE CARD 1      │ │ QUOTE CARD 2      │ │ QUOTE CARD 3      │ │
│  │                   │ │                   │ │                   │ │
│  │ [OPEN QUOTE]      │ │ [OPEN QUOTE]      │ │ [OPEN QUOTE]      │ │
│  │ " (--accent-      │ │ " (gradient)      │ │ " (--accent-      │ │
│  │  electric, 48px)  │ │                   │ │  signal, 48px)    │ │
│  │                   │ │                   │ │                   │ │
│  │ "Quote text here. │ │ "Quote text here. │ │ "Quote text here. │ │
│  │  2–4 sentences.   │ │  2–4 sentences.   │ │  2–4 sentences.   │ │
│  │  Direct, genuine, │ │  Different        │ │  Different        │ │
│  │  specific."       │ │  audience voice." │ │  audience voice." │ │
│  │                   │ │                   │ │                   │ │
│  │ Inter 400, 16px   │ │ Inter 400, 16px   │ │ Inter 400, 16px   │ │
│  │ --text-secondary  │ │ --text-secondary  │ │ --text-secondary  │ │
│  │ line-height 1.6   │ │                   │ │                   │ │
│  │                   │ │                   │ │                   │ │
│  │ [ATTRIBUTION]     │ │ [ATTRIBUTION]     │ │ [ATTRIBUTION]     │ │
│  │ ┌──────────────┐  │ │ ┌──────────────┐  │ │ ┌──────────────┐  │ │
│  │ │ [AVATAR]  N  │  │ │ │ [AVATAR]  N  │  │ │ │ [AVATAR]  N  │  │ │
│  │ │ 40x40     a  │  │ │ │ 40x40     a  │  │ │ │ 40x40     a  │  │ │
│  │ │ circle    m  │  │ │ │ circle    m  │  │ │ │ circle    m  │  │ │
│  │ │ avatar    e  │  │ │ │ avatar    e  │  │ │ │ avatar    e  │  │ │
│  │ │ or        &  │  │ │ │           &  │  │ │ │           &  │  │ │
│  │ │ initials  r  │  │ │ │           r  │  │ │ │           r  │  │ │
│  │ │ bg accent ole│  │ │ │           ole│  │ │ │           ole│  │ │
│  │ └──────────────┘  │ │ └──────────────┘  │ │ └──────────────┘  │ │
│  │ Name: Inter 600   │ │                   │ │                   │ │
│  │ 14px --text-      │ │                   │ │                   │ │
│  │ primary           │ │                   │ │                   │ │
│  │ Role: Inter 400   │ │                   │ │                   │ │
│  │ 13px --text-muted │ │                   │ │                   │ │
│  │                   │ │                   │ │                   │ │
│  │ [AUDIENCE TAG]    │ │ [AUDIENCE TAG]    │ │ [AUDIENCE TAG]    │ │
│  │ "Homeschool Mom"  │ │ "7th Grade        │ │ "School Board     │ │
│  │ pill badge,       │ │  Teacher"         │ │  Member"          │ │
│  │ --bg-border bg    │ │                   │ │                   │ │
│  │ --text-muted text │ │                   │ │                   │ │
│  │ rounded-full      │ │                   │ │                   │ │
│  └───────────────────┘ └───────────────────┘ └───────────────────┘ │
│                                                                     │
│  Card style: bg --bg-base, border --bg-border, border-radius 12px  │
│  padding: 28px, gap: 20px                                           │
│  No hover effect (static content, not interactive cards)            │
│                                                                     │
│  ─────────────────────────────────────────────────────────────────  │
│                                                                     │
│  [USAGE STATS BAR]                                                  │
│  3-column flex row, centered, mt: 48px                              │
│  bg: --bg-base, border-radius: 12px, border: --bg-border            │
│  padding: 32px 48px                                                 │
│                                                                     │
│  ┌─────────────────────┬──────────────────┬──────────────────────┐  │
│  │      200+           │       7          │        0             │  │
│  │   Families          │   Modules        │     Cost             │  │
│  │   Enrolled          │   Available      │   to Start           │  │
│  ├─────────────────────┴──────────────────┴──────────────────────┤  │
│  │  Number: Clash Display 700, 48px, --accent-electric           │  │
│  │  Label: Inter 400, 13px, --text-muted                         │  │
│  │  Dividers: 1px --bg-border (vertical, between stats)          │  │
│  └─────────────────────────────────────────────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Testimonial copy placeholders (to be replaced with real quotes):**

| Card | Persona | Draft voice | Tag |
|---|---|---|---|
| 1 | Homeschool parent | "We've tried four different curricula that promised engagement. This is the only one my son came back to the next day without being asked." | Homeschool Mom |
| 2 | Classroom teacher | "I ran Module 1 with my 7th graders on a Tuesday with zero prep. The discussion it sparked ran over the bell." | 7th Grade Teacher |
| 3 | School board member | "No vendor pitch, no contract, no catch. The curriculum is a document you download. That alone made the adoption conversation easy." | School Board Member |

---

## SECTION 6 — Secondary CTA (Mid-Page)

```
┌─────────────────────────────────────────────────────────────────────┐
│ MID-PAGE CTA  bg: --bg-base  py: 64px                              │
│ Full-width gradient band:                                           │
│ linear-gradient(135deg, rgba(79,143,255,0.08) 0%,                  │
│                         rgba(124,92,252,0.08) 50%,                 │
│                         rgba(0,217,184,0.08) 100%)                 │
│─────────────────────────────────────────────────────────────────────│
│                                                                     │
│  [TWO-COLUMN FLEX: copy left + CTA right]                           │
│  max-width: 960px, margin: auto, gap: 48px                         │
│                                                                     │
│  ┌────────────────────────────────┬──────────────────────────────┐  │
│  │  COPY (left)                   │  CTA (right, centered)       │  │
│  │                                │                              │  │
│  │  [HEADLINE]                    │  [PRIMARY BTN]               │  │
│  │  "Start with Module 1.         │  [See Module 1 Free →]       │  │
│  │   It's free. No account        │  filled, --accent-electric   │  │
│  │   required."                   │  height: 52px, px: 40px      │  │
│  │                                │  Inter 600, 16px             │  │
│  │  Inter 600, 24px               │  → /curriculum#module-1      │  │
│  │  --text-primary                │                              │  │
│  │                                │  [SECONDARY]                 │  │
│  │  [BODY]                        │  or [Get the teacher guide]  │  │
│  │  "Download Module 1, run       │  text link, --accent-        │  │
│  │   the first activity, and      │  electric, Inter 500         │  │
│  │   see if your student comes    │  → /educators#download       │  │
│  │   back for more."              │                              │  │
│  │                                │  Note: two paths visible,    │  │
│  │  Inter 400, 16px               │  one for families, one for   │  │
│  │  --text-secondary              │  teachers — reinforces dual  │  │
│  │                                │  audience CTA strategy       │  │
│  └────────────────────────────────┴──────────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## SECTION 7 — How It Works

```
┌─────────────────────────────────────────────────────────────────────┐
│ HOW IT WORKS  id="how-it-works"  bg: --bg-surface  py: 96px        │
│─────────────────────────────────────────────────────────────────────│
│                                                                     │
│  [SECTION LABEL]                                                    │
│  "THE PROCESS"                                                      │
│  font: Inter 500, 12px, --text-muted, centered                     │
│                                                                     │
│  [SECTION HEADING]                                                  │
│  "Designed to be finished, not abandoned"                           │
│  font: Inter 700, 36px, --text-primary, centered                   │
│  max-width: 560px, margin: auto, mb: 64px                          │
│                                                                     │
│  ─────────────────────────────────────────────────────────────────  │
│                                                                     │
│  [PROCESS STEPS — horizontal on desktop, vertical on mobile]        │
│  3 steps, connected by a line/arrow between them                   │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │                                                              │  │
│  │  ┌────────────┐     ──→     ┌────────────┐  ──→  ┌────────┐ │  │
│  │  │   STEP 1   │             │   STEP 2   │       │ STEP 3 │ │  │
│  │  │            │             │            │       │        │ │  │
│  │  │  [ICON]    │             │  [ICON]    │       │ [ICON] │ │  │
│  │  │  Phosphor  │             │  Phosphor  │       │ Phosph.│ │  │
│  │  │  48px bold │             │  48px bold │       │ 48px   │ │  │
│  │  │  --accent- │             │  --accent- │       │ --acc  │ │  │
│  │  │  electric  │             │  pulse     │       │ signal │ │  │
│  │  │            │             │            │       │        │ │  │
│  │  │  "01"      │             │  "02"      │       │ "03"   │ │  │
│  │  │  Inter 500 │             │            │       │        │ │  │
│  │  │  11px      │             │            │       │        │ │  │
│  │  │  --text-   │             │            │       │        │ │  │
│  │  │  muted     │             │            │       │        │ │  │
│  │  │            │             │            │       │        │ │  │
│  │  │ "Pick a    │             │ "Work      │       │"Show   │ │  │
│  │  │  module.   │             │  through   │       │ it off.│ │  │
│  │  │  Any       │             │  the       │       │        │ │  │
│  │  │  module."  │             │  project." │       │Every   │ │  │
│  │  │            │             │            │       │module  │ │  │
│  │  │ Inter 600  │             │ Inter 600  │       │ends    │ │  │
│  │  │ 20px       │             │ 20px       │       │with a  │ │  │
│  │  │ --text-    │             │            │       │delivera│ │  │
│  │  │ primary    │             │            │       │ble."   │ │  │
│  │  │            │             │            │       │        │ │  │
│  │  │ [DESC]     │             │ [DESC]     │       │ [DESC] │ │  │
│  │  │ "No prereq │             │ "Each mod  │       │"A real │ │  │
│  │  │ required.  │             │ has        │       │project │ │  │
│  │  │ Start where│             │ readings,  │       │they can│ │  │
│  │  │ you are."  │             │ labs, and  │       │show    │ │  │
│  │  │            │             │ discussion │       │anyone" │ │  │
│  │  │ Inter 400  │             │ prompts."  │       │        │ │  │
│  │  │ 14px       │             │            │       │        │ │  │
│  │  │ --text-    │             │            │       │        │ │  │
│  │  │ secondary  │             │            │       │        │ │  │
│  │  └────────────┘             └────────────┘       └────────┘ │  │
│  │                                                              │  │
│  │  Connector arrow: 1px --bg-border line + arrow head         │  │
│  │  --accent-electric color, centered between step cards       │  │
│  │  Hidden on mobile (vertical layout, implicit flow)          │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                     │
│  ─────────────────────────────────────────────────────────────────  │
│                                                                     │
│  [MASCOT CALLOUT — student voice moment]                            │
│  bg: --bg-base, border: 1px --accent-signal, border-radius: 12px   │
│  max-width: 680px, margin: auto, mt: 48px, padding: 24px           │
│  display: flex, gap: 20px, align-items: center                     │
│                                                                     │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  [PATCH ILLUSTRATION]  │  [STUDENT VOICE COPY]               │  │
│  │  SVG, 80x80            │  "Patch" label: Inter 500, 11px,    │  │
│  │  "excited" variant     │  --accent-signal                    │  │
│  │  (arms up, full glow)  │                                     │  │
│  │                        │  "By module 3, you'll have trained  │  │
│  │                        │   your first AI model from scratch. │  │
│  │                        │   No prior experience needed."      │  │
│  │                        │                                     │  │
│  │                        │  Inter 400, 16px, --text-secondary  │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## SECTION 8 — Final CTA / Conversion

```
┌─────────────────────────────────────────────────────────────────────┐
│ FINAL CTA  bg: --bg-base  py: 96px                                  │
│─────────────────────────────────────────────────────────────────────│
│                                                                     │
│  [BACKGROUND TREATMENT]                                             │
│  Gradient radial glow (same as hero, but centered, tighter radius): │
│  radial-gradient(ellipse 800px 400px at 50% 50%,                   │
│    rgba(79,143,255,0.06), transparent)                              │
│                                                                     │
│  [CENTERED CONTENT — max-width 640px, text-center]                  │
│                                                                     │
│  [PRE-HEADLINE]                                                     │
│  "Ready to start?"                                                  │
│  Inter 500, 16px, --text-muted                                     │
│                                                                     │
│  [HEADLINE]                                                         │
│  "Your kid builds their first AI today."                            │
│  Clash Display 700, 48px, --text-primary                           │
│  line-height: 1.1                                                   │
│                                                                     │
│  [SUBHEAD — gradient]                                               │
│  ~~"Module 1 is free. No signup required."~~                        │
│  Clash Display 600, 48px, gradient fill (electric→pulse→teal)       │
│                                                                     │
│  [BODY]                                                             │
│  "Download the first module and run the intro activity.             │
│   Takes 30 minutes. No account, no credit card, no catch."         │
│  Inter 400, 18px, --text-secondary, line-height: 1.6              │
│  max-width: 520px, margin: auto, mt: 16px                         │
│                                                                     │
│  [CTA BUTTON ROW]  mt: 40px, gap: 16px, centered flex              │
│  ┌────────────────────────┬──────────────────────────┐             │
│  │  [Start Module 1 Free] │  [For Educators]         │             │
│  │  Primary, filled       │  Secondary, outlined     │             │
│  │  --accent-electric     │  --accent-electric       │             │
│  │  height: 56px          │  height: 56px            │             │
│  │  px: 40px              │  px: 32px                │             │
│  │  Inter 700, 17px       │  Inter 600, 17px         │             │
│  │  → /curriculum#mod-1   │  → /educators            │             │
│  └────────────────────────┴──────────────────────────┘             │
│                                                                     │
│  [REASSURANCE LINE]                                                 │
│  "Open curriculum. Free forever. No vendor lock-in."               │
│  Inter 400, 14px, --text-muted, centered, mt: 20px                 │
│  [→ Read our open license]  text link, --accent-electric           │
│  → /curriculum#license                                              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## SECTION 9 — Footer

```
┌─────────────────────────────────────────────────────────────────────┐
│ FOOTER  bg: --bg-surface  border-top: 1px --bg-border  py: 64px    │
│─────────────────────────────────────────────────────────────────────│
│                                                                     │
│  [FOOTER GRID — 4 columns desktop, 2 columns tablet, 1 mobile]      │
│  max-width: 1200px, margin: auto, px: 24px                         │
│  column-gap: 48px                                                   │
│                                                                     │
│  ┌────────────────┬────────────────┬────────────────┬─────────────┐ │
│  │ COL 1 — BRAND  │ COL 2 — LEARN  │ COL 3 — WHO    │ COL 4 — ORG│ │
│  │                │                │  FOR           │            │ │
│  │ [WORDMARK]     │ Curriculum     │ Homeschool     │ About      │ │
│  │ ~~AI~~         │ All 7 Modules  │ Families       │ Families   │ │
│  │ Explorers →    │ Module 1 Free  │ Classroom      │ OpenClaw   │ │
│  │                │ Scope &        │ Teachers       │ Project    │ │
│  │ [TAGLINE]      │ Sequence       │ School         │            │ │
│  │ "Build AI.     │ Sample         │ Districts      │ Open       │ │
│  │  Don't just    │ Activity       │ School Boards  │ License    │ │
│  │  learn about   │                │ Policy Makers  │            │ │
│  │  it."          │                │ Parents        │ Contact    │ │
│  │                │                │                │            │ │
│  │ Inter 400      │ [FOOTER        │ [FOOTER        │ [FOOTER    │ │
│  │ 15px           │  LINK STYLE]   │  LINK STYLE]   │ LINK STYLE]│ │
│  │ --text-        │ Inter 400,     │ Inter 400,     │ Inter 400, │ │
│  │ secondary      │ 14px,          │ 14px,          │ 14px,      │ │
│  │                │ --text-muted   │ --text-muted   │ --text-    │ │
│  │ [PATCH ICON]   │ hover:         │ hover:         │ muted      │ │
│  │ Small (40px),  │ --text-primary │ --text-primary │ hover:     │ │
│  │ neutral state  │ 200ms          │ 200ms          │ --text-    │ │
│  │ --accent-      │                │                │ primary    │ │
│  │ signal subtle  │ [COL HEADING]  │ [COL HEADING]  │ [COL HEAD] │ │
│  │ glow behind    │ Inter 500,     │ Inter 500,     │ Inter 500, │ │
│  │ mascot         │ 11px,          │ 11px,          │ 11px,      │ │
│  │                │ --text-muted,  │ --text-muted,  │ --text-    │ │
│  │                │ 0.06em,        │ 0.06em,        │ muted,     │ │
│  │                │ all-caps       │ all-caps       │ all-caps   │ │
│  │                │ mb: 16px       │ mb: 16px       │ mb: 16px   │ │
│  └────────────────┴────────────────┴────────────────┴─────────────┘ │
│                                                                     │
│  ─────────────────────────────────────────────────────────────────  │
│                                                                     │
│  [FOOTER BOTTOM BAR]                                                │
│  border-top: 1px --bg-border, pt: 24px, mt: 40px                   │
│  flex row, space-between                                            │
│                                                                     │
│  LEFT: © 2026 AI Explorers. OpenClaw Project.                       │
│        Inter 400, 13px, --text-muted                               │
│                                                                     │
│  CENTER: [Open Curriculum License]  [Privacy Policy]  [Terms]      │
│          text links, Inter 400, 13px, --text-muted                 │
│          hover: --text-secondary                                    │
│          gap: 24px                                                  │
│                                                                     │
│  RIGHT: [SOCIAL ICONS]                                             │
│         GitHub, Twitter/X, YouTube                                 │
│         Phosphor icons, 18px, --text-muted                         │
│         hover: --text-primary, 150ms                               │
│         gap: 16px                                                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Responsive Breakpoint Summary

| Breakpoint | Layout changes |
|---|---|
| `≥1280px` | Two-column hero, 4-col module grid, 4-col footer, 3-col testimonials |
| `1024–1279px` | Two-column hero (tighter), 4-col module grid (smaller cards), 3-col footer |
| `768–1023px` | Single-column hero (illustration stacks below), 2-col module grid, 2-col footer |
| `<768px` | Full-width all sections, module cards horizontal scroll, single-col footer, hamburger nav |

---

## Animation / Entrance Summary

| Section | Animation | Duration | Trigger |
|---|---|---|---|
| Hero headline | Fade-in from below (translateY 20px → 0) | 400ms, ease-out | Page load |
| Hero illustration | Fade-in from right (translateX 30px → 0) | 500ms, ease-out | 100ms after headline |
| Hero student quote badge | Fade-in-up | 400ms | 400ms after load |
| Module cards | Staggered fade-in-up (each card 60ms apart) | 350ms each | Scroll into view |
| Audience tabs panel swap | Opacity fade 0→1 | 150ms, ease | Tab click |
| Testimonial cards | Fade-in (no translate — stable content) | 300ms | Scroll into view |
| Final CTA headline | Fade-in-up | 350ms | Scroll into view |
| All entrance animations | Disabled | — | `prefers-reduced-motion: reduce` |

---

## Component Inventory (for dev handoff)

| Component | Type | Used in |
|---|---|---|
| `<NavBar>` | Sticky, responsive | All pages |
| `<HeroSection>` | Two-col layout, bg effect | Homepage |
| `<FloatingBadge>` | Animated card | Hero |
| `<AudienceTabBar>` | Tab UI with panel swap | Section 3 |
| `<AudiencePanel>` | Two-col content panel | Section 3 (×4) |
| `<StatsRow>` | Flex stat display | Section 3 (each panel) |
| `<ModuleCard>` | Interactive card, hover | Section 4 (×7) |
| `<ModuleGrid>` | 4+3 responsive grid | Section 4 |
| `<TestimonialCard>` | Quote + avatar + tag | Section 5 (×3) |
| `<StatsBar>` | 3-stat horizontal display | Section 5 |
| `<CTABand>` | Two-col CTA section | Section 6 |
| `<ProcessStep>` | Step card + number | Section 7 (×3) |
| `<MascotCallout>` | Patch + copy card | Section 7 |
| `<FinalCTASection>` | Centered hero-style CTA | Section 8 |
| `<Footer>` | 4-col + bottom bar | All pages |

---

*Wireframe created by ClawDawg | Phase 2 — Structure | File owner: `wireframe-homepage.md`*
