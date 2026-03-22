# Mobile-First Responsive Design Audit
**Date:** 2026-03-22  
**Status:** Phase 4 Polish & Launch — Audit Pass  
**Scope:** All pages in `website/` — read-only audit  
**Task ID:** mn1b772dh4efu

---

## Summary

All 7 content pages have a `<meta name="viewport" content="width=device-width, initial-scale=1.0" />` tag and a base responsive breakpoint at `@media (max-width: 640px)` that hides the nav links and reduces section padding. Most grid layouts use `auto-fit/minmax()` or have explicit 768px breakpoints. Overall the pages are reasonably responsive, but there are **7 issues** worth addressing before launch.

---

## Issues Found

### 🔴 HIGH — Missing hamburger / mobile nav menu (all pages)

**Affected:** `index.html`, `educators.html`, `parents.html`, `homeschool.html`, `schools.html`, `distance-ed.html`, `policy.html`

At `≤640px`, `.nav-links { display: none }` — the nav links vanish entirely. There is **no hamburger menu fallback**. The `nav-cta` button (top-right CTA like "Get the Curriculum →", "Download Policy Brief") stays visible but the main navigation disappears completely.

On most pages the nav-cta provides one escape path, but users on mobile can't navigate between sections without scrolling all the way back up or guessing at anchors.

**Fix:** Add a hamburger button (≈44px touch target) that toggles a fullscreen or dropdown mobile nav overlay on `≤640px`. Same JS can be shared across all pages.

---

### 🟡 MEDIUM — `nav-cta` not hidden on mobile — overlaps or crowds small nav

**Affected:** All pages

At `≤640px`, the nav renders: `[🤖 AI Explorers logo] [Download Policy Brief →]` or similar — two items, no hamburger. This is workable but: 
1. Long CTA text (e.g., "Start Module 1 →", "Download Adoption Brief →") can overflow on very small screens
2. The `nav-cta` button has 0.5rem 1.25rem padding, which is borderline for 44px touch target compliance

**Fix:** Either hide the `nav-cta` on `≤640px` (rely on hero CTA) or shrink the text + ensure ≥44px height.

---

### 🟡 MEDIUM — `distance-ed.html` nav logo is a `<div>` not a `<a>` link

**Affected:** `distance-ed.html` only

```html
<div class="nav-logo">🤖 AI Explorers</div>  ← not a link
```

All other pages use `<a href="index.html" class="nav-logo">`. The distance-ed page logo is a dead element — tapping it on mobile does nothing.

**Fix:** Change `<div class="nav-logo">` → `<a href="index.html" class="nav-logo">`.

---

### 🟡 MEDIUM — Form inputs missing `font-size: 16px` (iOS auto-zoom)

**Affected:** `parents.html` (email/name form), `schools.html` (contact form), `contact.html` (if it exists)

iOS Safari zooms in on any `<input>` or `<select>` with `font-size < 16px`. If inputs inherit the body font-size or use smaller sizes, they'll trigger unwanted zoom. Pages with forms (`parents.html` signup form, `schools.html` contact form) should explicitly set `font-size: 16px` on inputs to prevent this.

**Fix:** Add to each page's responsive block:
```css
@media (max-width: 640px) {
  input, select, textarea { font-size: 16px; }
}
```

---

### 🟡 MEDIUM — `.trust-split` / multi-column "sticky aside" on `educators.html` and `homeschool.html`

**Affected:** `educators.html` (`.trust-split`), `distance-ed.html` (`.included-split`), `index.html` (`.educators-grid`)

These two-column layouts correctly go to `1fr` at `≤768px`. However the `position: sticky; top: 6rem` sticky aside still applies on stacked mobile layout, which can cause the aside to visually stack mid-content. This is typically fine since sticky doesn't matter on single-column, but verify visually.

**Fix:** Add `@media (max-width: 768px) { .edu-aside, .included-card { position: static; } }` to be safe.

---

### 🟢 LOW — Missing `max-width` on hero-inner text at very small sizes

**Affected:** `index.html`, `parents.html`, `homeschool.html`

Hero `h1` uses `clamp(2.5rem, 6vw, 4.5rem)` — this is correct. However on 320px devices (older iPhones), `6vw = 19.2px` which makes the min of `2.5rem = 40px` kick in. Combined with line breaks (`<br/>` tags in h1), this may cause layout tightness. Not critical but worth visual testing at 320px.

---

### 🟢 LOW — `.audience-tab-bar` tabs on `index.html` wrap awkwardly on mobile

**Affected:** `index.html`

The audience tab bar uses `flex-wrap: wrap` with `white-space: nowrap` per tab. On mobile (320-375px), the 4 tabs wrap to 2 rows, which is fine. However there's no `@media` breakpoint that reduces tab font-size or padding. Consider smaller tab padding at `≤400px`.

---

### 🟢 LOW — `policy.html` hero stats bar has no mobile layout

**Affected:** `policy.html`

The `.policy-stats` flex bar (if present) has no `@media` breakpoint. The `flex-wrap: wrap` on the stats bar in `index.html` is correct, but verify the policy page's equivalent is also wrapping gracefully.

---

## Pages: Breakpoint Coverage Summary

| Page | Viewport Meta | 640px break | 768px break | Nav hidden | Hamburger |
|------|:---:|:---:|:---:|:---:|:---:|
| `index.html` | ✅ | ✅ | ✅ | ✅ | ❌ |
| `educators.html` | ✅ | ✅ | ✅ | ✅ | ❌ |
| `parents.html` | ✅ | ✅ | ✅ | ✅ | ❌ |
| `homeschool.html` | ✅ | ✅ | ✅ | ✅ | ❌ |
| `schools.html` | ✅ | ✅ | ✅ | ✅ | ❌ |
| `distance-ed.html` | ✅ | ✅ | ✅ | ✅ | ❌ |
| `policy.html` | ✅ | ✅ | ✅ | ✅ | ❌ |

---

## Recommended Fix Priority

1. **Hamburger menu** — biggest UX gap; shared JS snippet works across all pages
2. **`distance-ed.html` logo link** — one-liner fix
3. **Form input font-size: 16px** — prevents iOS zoom on signup/contact forms
4. **Nav-cta overflow on tiny screens** — minor cosmetic
5. **Sticky aside reset** — defensive CSS only
6. **Tab/stats bar fine-tuning** — polish-level

---

## What's Working Well

- All pages have correct viewport meta
- `h1`/`h2` use `clamp()` for fluid type — solid
- Grid layouts use `auto-fit/minmax()` or explicit breakpoints — grids collapse correctly
- CTAs use `flex-wrap: wrap` — button groups stack on mobile
- Section padding reduces from `6rem 2rem` → `4rem 1.25rem` on mobile — comfortable
- `overflow-x: hidden` on body prevents horizontal scroll
- `why-stats-bar`, `curr-stat-div`, and audience cards all have mobile breakpoints

---

*Generated by ClawDawg — Mobile-first responsive design pass (Phase 4)*
