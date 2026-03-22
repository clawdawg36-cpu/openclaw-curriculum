# AI Explorers Website — Performance Audit Report
_Phase 4 Polish & Launch | Audit date: March 2026_

---

## Executive Summary

The website is in solid shape overall. All core pages exist and have content. The main issues are:
- **Missing OG/Twitter metadata** on 3 pages (parents, policy, distance-ed)
- **Wrong OG image** on schools.html (uses og-default.svg, should use schools.svg)
- **Missing `<link rel="preconnect" crossorigin>` for `fonts.gstatic.com`** on all pages (minor load perf)
- **No favicon** on any page
- **No `robots` meta tag** on any page (fine; not a blocker unless you want to noindex any pages)
- **No canonical** on parents.html, policy.html, distance-ed.html

---

## Page-by-Page Audit

### index.html ✅ Good
- Canonical: ✅ `https://aiexplorers.io/`
- OG tags: ✅ Full set
- Twitter card: ✅ Full set
- OG image: ✅ `og-images/og-default.svg` (1200×630)
- font-display:swap: ✅ (via `&display=swap` in Google Fonts URL)
- Preconnect: ✅ `fonts.googleapis.com` — ⚠️ **MISSING** `fonts.gstatic.com crossorigin`
- Favicon: ❌ Missing
- Schema/structured data: ❌ None (low priority for now)

### educators.html ✅ Good  
- Canonical: ✅ `https://aiexplorers.io/educators`
- OG tags: ✅ Full set
- Twitter card: ✅ Full set  
- OG image: ✅ `og-images/educators.svg` — correct page-specific image
- font-display:swap: ✅
- Preconnect gstatic: ❌ Missing
- Favicon: ❌ Missing
- Keywords meta: ✅ Present

### homeschool.html ✅ Good
- Canonical: ✅ `https://aiexplorers.io/homeschool`
- OG tags: ✅ Full set
- Twitter card: ✅ Full set
- OG image: ✅ `og-images/homeschool.svg` — correct page-specific image
- font-display:swap: ✅
- Preconnect gstatic: ❌ Missing
- Favicon: ❌ Missing
- Keywords meta: ✅ Present

### schools.html ⚠️ Needs fix
- Canonical: ✅ `https://aiexplorers.io/schools`
- OG tags: ✅ Present
- Twitter card: ✅ Present
- OG image: ❌ **Uses `og-default.svg` but `schools.svg` exists** — should use page-specific image
- font-display:swap: ✅
- Preconnect gstatic: ❌ Missing
- Favicon: ❌ Missing

### parents.html ❌ Missing metadata
- Canonical: ❌ **Missing**
- OG tags: ❌ **Missing entirely**
- Twitter card: ❌ **Missing entirely**
- OG image: ❌ **Missing** (parents.svg exists in og-images)
- font-display:swap: ✅
- Preconnect gstatic: ❌ Missing
- Favicon: ❌ Missing

### policy.html ❌ Missing metadata
- Canonical: ❌ **Missing**
- OG tags: ❌ **Missing entirely**
- Twitter card: ❌ **Missing entirely**
- OG image: ❌ **Missing** (policy.svg exists in og-images)
- font-display:swap: ✅
- Preconnect gstatic: ❌ Missing
- Favicon: ❌ Missing

### distance-ed.html ❌ Missing metadata
- Canonical: ❌ **Missing**
- OG tags: ❌ **Missing entirely**
- Twitter card: ❌ **Missing entirely**
- OG image: ❌ **Missing** (no distance-ed-specific OG image in og-images; use og-default.svg)
- Description: ✅ Present
- Keywords: ❌ Missing
- font-display:swap: ✅
- Preconnect gstatic: ❌ Missing
- Favicon: ❌ Missing

---

## Issues by Priority

### 🔴 HIGH — Fix Before Launch

| Issue | Pages Affected | Impact |
|-------|---------------|--------|
| Missing OG + Twitter meta | parents.html, policy.html, distance-ed.html | Social sharing shows blank/ugly previews |
| Wrong OG image on schools.html | schools.html | Generic preview instead of branded |
| Missing canonical tags | parents.html, policy.html, distance-ed.html | SEO duplicate content risk |

### 🟡 MEDIUM — Fix Soon

| Issue | Pages Affected | Impact |
|-------|---------------|--------|
| Missing `fonts.gstatic.com` preconnect | All pages | Extra DNS/TLS round-trip on font load |
| Missing favicon | All pages | Browser tab shows blank; looks unfinished |

### 🟢 LOW — Nice to Have

| Issue | Notes |
|-------|-------|
| No `meta name="robots"` | Fine unless you want to noindex any pages |
| No structured data (JSON-LD) | Would help search rich snippets; not required for launch |
| No `<link rel="preload">` for critical CSS font | Marginal gain; fonts already use display=swap |
| No `<noscript>` fallback for tab switcher on index.html | JS audience tabs degrade gracefully already |

---

## Specific Fixes Needed

### Fix 1: schools.html — update OG image
```html
<!-- Change from: -->
<meta property="og:image" content="https://aiexplorers.io/og-images/og-default.svg">
<!-- To: -->
<meta property="og:image" content="https://aiexplorers.io/og-images/schools.svg">
```
Also update `og:image:alt` and `twitter:image`.

### Fix 2: parents.html — add full OG/Twitter/canonical block
```html
<link rel="canonical" href="https://aiexplorers.io/parents" />
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="AI Explorers">
<meta property="og:url" content="https://aiexplorers.io/parents">
<meta property="og:title" content="For Parents — AI Explorers Curriculum">
<meta property="og:description" content="AI Explorers is a free, school-ready AI curriculum for grades 6–8. Safe, age-appropriate, no coding required. Help your child build real AI projects.">
<meta property="og:image" content="https://aiexplorers.io/og-images/parents.svg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:type" content="image/svg+xml">
<meta property="og:locale" content="en_US">
<!-- Twitter / X Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@aiexplorers">
<meta name="twitter:title" content="For Parents — AI Explorers Curriculum">
<meta name="twitter:description" content="AI Explorers is a free, school-ready AI curriculum for grades 6–8. Safe, age-appropriate, no coding required.">
<meta name="twitter:image" content="https://aiexplorers.io/og-images/parents.svg">
<meta name="twitter:image:alt" content="AI Explorers for Parents">
```

### Fix 3: policy.html — add full OG/Twitter/canonical block
```html
<link rel="canonical" href="https://aiexplorers.io/policy" />
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="AI Explorers">
<meta property="og:url" content="https://aiexplorers.io/policy">
<meta property="og:title" content="AI Literacy Policy Brief — AI Explorers">
<meta property="og:description" content="AI literacy is a workforce preparedness, equity, and national competitiveness issue. AI Explorers is a free, open-source, standards-aligned K–12 AI curriculum ready for policy action.">
<meta property="og:image" content="https://aiexplorers.io/og-images/policy.svg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:type" content="image/svg+xml">
<meta property="og:locale" content="en_US">
<!-- Twitter / X Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@aiexplorers">
<meta name="twitter:title" content="AI Literacy Policy Brief — AI Explorers">
<meta name="twitter:description" content="AI literacy is a workforce preparedness, equity, and national competitiveness issue. Free, open-source K–12 AI curriculum.">
<meta name="twitter:image" content="https://aiexplorers.io/og-images/policy.svg">
<meta name="twitter:image:alt" content="AI Explorers Policy Brief">
```

### Fix 4: distance-ed.html — add full OG/Twitter/canonical block
```html
<link rel="canonical" href="https://aiexplorers.io/distance-ed" />
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="AI Explorers">
<meta property="og:url" content="https://aiexplorers.io/distance-ed">
<meta property="og:title" content="AI Explorers for Online & Distance Learners">
<meta property="og:description" content="AI Explorers is fully online-ready — no physical materials, no fixed schedule, no classroom required. Perfect for virtual schools, online academies, and hybrid learners.">
<meta property="og:image" content="https://aiexplorers.io/og-images/og-default.svg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:type" content="image/svg+xml">
<meta property="og:locale" content="en_US">
<!-- Twitter / X Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@aiexplorers">
<meta name="twitter:title" content="AI Explorers for Online & Distance Learners">
<meta name="twitter:description" content="Fully online-ready AI curriculum. No physical materials, no fixed schedule. Perfect for virtual schools and hybrid learners.">
<meta name="twitter:image" content="https://aiexplorers.io/og-images/og-default.svg">
<meta name="twitter:image:alt" content="AI Explorers for Online Learners">
```

### Fix 5: All pages — add missing `fonts.gstatic.com` preconnect
After the existing `<link rel="preconnect" href="https://fonts.googleapis.com" />`, add:
```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

### Fix 6: Add favicon to all pages
Add to `<head>` on all pages (once favicon.svg/ico is created):
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
```
_Note: A simple robot emoji favicon.svg should be created in `website/` root._

---

## Load Performance Observations

- **All CSS is inline** — no external stylesheet requests beyond Google Fonts. Good for performance (zero render-blocking CSS files).
- **No images except SVGs** — all visuals are pure CSS/emoji. Excellent; no image optimization needed.
- **Google Fonts** is the only external resource. Adding the `gstatic.com` preconnect saves ~1 round-trip on first load.
- **JavaScript is minimal** — only the audience tab switcher on index.html (inline, ~15 lines). No framework overhead.
- **No analytics, no tracking scripts** — clean and fast by default.
- **Total page weight** is low: largest page (index.html) is ~1,771 lines of HTML + inline CSS, no external JS. Well within budget.

**Estimated LCP (Largest Contentful Paint):** Likely 0.8–1.5s on fast connections, 2–4s on 3G. Main bottleneck would be Google Fonts. The `display=swap` parameter already prevents FOIT.

---

## Summary Scorecard

| Category | Score | Notes |
|----------|-------|-------|
| Load performance | ✅ 9/10 | No external CSS, no JS bundles, SVG-only visuals |
| SEO metadata | ⚠️ 6/10 | 3 pages missing OG/canonical; schools.html has wrong OG image |
| Social sharing | ⚠️ 5/10 | 3 pages will show blank/ugly social previews |
| Font loading | ✅ 8/10 | display=swap present; missing gstatic preconnect |
| Accessibility (basic) | ✅ 8/10 | ARIA roles on tabs, semantic HTML, good color contrast |
| Favicon | ❌ 0/10 | Not present on any page |
| Schema/structured data | — | None; not required for launch |
| Cross-browser compat | ✅ 9/10 | Modern CSS only, graceful degradation |

---

## Recommended Next Steps

1. **Immediate (before launch):** Apply fixes 1–4 (OG/Twitter/canonical on parents, policy, distance-ed, schools)
2. **Launch day:** Create and add favicon (fix 6)
3. **Post-launch:** Add gstatic preconnect (fix 5) during any routine edit pass
4. **Optional future:** Add JSON-LD structured data for `WebSite` and `EducationalResource` schema types

---

_Audit performed by ClawDawg | Read-only review of all .html files in `website/` | No files were modified_
