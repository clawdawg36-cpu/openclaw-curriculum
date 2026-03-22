# Hosting Setup — GitHub Pages Deployment Pipeline

**Project:** OpenClaw AI Curriculum for Middle School  
**Decision Date:** 2026-03-22  
**Status:** Finalized ✅  
**Tech Stack:** Eleventy (11ty) → GitHub Pages via GitHub Actions

---

## Overview

The AI Explorers marketing site is a static site built with **Eleventy (11ty)** and deployed automatically to **GitHub Pages** via **GitHub Actions** on every push to `main`. No manual deploys, no FTP, no build servers — push code, site updates.

---

## 1. Repository Structure for GitHub Pages

We use the **GitHub Actions → `gh-pages` branch** approach rather than the `docs/` folder. This keeps the build output completely separate from source files.

```
openclaw-curriculum/               ← repo root
├── .github/
│   └── workflows/
│       └── deploy.yml             ← GitHub Actions workflow (auto-deploy)
├── src/                           ← source files (what you edit)
│   ├── _includes/
│   │   ├── base.njk               ← shared layout (nav + footer)
│   │   └── page.njk               ← content wrapper
│   ├── _data/
│   │   └── nav.json               ← nav links (single source of truth)
│   ├── assets/
│   │   ├── style.css              ← global stylesheet
│   │   ├── js/                    ← optional JS (analytics, etc.)
│   │   └── images/                ← site images
│   ├── downloads/                 ← PDFs (passthrough copy)
│   │   └── syllabus.pdf
│   ├── index.njk                  ← Homepage (/)
│   ├── educators.njk              ← /educators
│   ├── homeschool.njk             ← /homeschool
│   ├── school-boards.njk          ← /school-boards
│   ├── policy.njk                 ← /policy
│   ├── curriculum.njk             ← /curriculum
│   ├── about.njk                  ← /about
│   └── get-started.njk            ← /get-started
├── .eleventy.js                   ← Eleventy config
├── .gitignore
├── package.json
└── package-lock.json

# Generated (gitignored):
_site/                             ← Eleventy build output (never commit)
node_modules/                      ← npm packages (never commit)

# Auto-managed by GitHub Actions:
gh-pages branch                    ← live site (what GitHub Pages serves)
```

### Why `gh-pages` Branch vs `docs/` Folder

| Approach | Verdict | Reason |
|---|---|---|
| `docs/` folder on `main` | ❌ Skip | Mixes build artifacts with source; messy PRs |
| `gh-pages` branch | ✅ Chosen | Clean separation; Actions manages it; `main` stays pristine |
| GitHub Actions (Pages artifact) | ✅ Also valid | Newer approach; no extra branch; slightly more config |

**We use `gh-pages` branch via `peaceiris/actions-gh-pages@v4`** — battle-tested, simple, widely used.

---

## 2. GitHub Actions Workflow for Auto-Deploy

The workflow at `.github/workflows/deploy.yml` triggers on every push to `main` and:

1. Checks out the code
2. Installs Node.js dependencies
3. Runs the Eleventy build
4. Pushes `_site/` to the `gh-pages` branch

See the full workflow file at `.github/workflows/deploy.yml`.

### Required GitHub Repository Settings

1. Go to **Settings → Pages** in the GitHub repo
2. Set **Source** to `Deploy from a branch`
3. Set **Branch** to `gh-pages`, folder to `/ (root)`
4. Save — GitHub Pages will serve from the `gh-pages` branch

### Workflow Permissions

The workflow uses `GITHUB_TOKEN` (auto-provided by GitHub Actions, no manual secret needed). Make sure the repo has write permissions enabled:

- **Settings → Actions → General → Workflow permissions**: set to **Read and write permissions**

---

## 3. Custom Domain Setup

If we add a custom domain (e.g., `curriculum.openclaw.ai` or `aiexplorers.education`):

### Step 1: Add CNAME File to Source

Create `src/CNAME` with the domain (no protocol):

```
curriculum.openclaw.ai
```

Eleventy will passthrough-copy this to `_site/CNAME` so it survives every deploy.

Add to `.eleventy.js`:

```js
eleventyConfig.addPassthroughCopy("src/CNAME");
```

### Step 2: DNS Configuration

At your DNS provider, add:

```
# For apex domain (openclaw.ai):
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153

# For subdomain (curriculum.openclaw.ai):
CNAME curriculum  clawdawg36-cpu.github.io.
```

### Step 3: GitHub Pages Settings

- **Settings → Pages → Custom domain**: enter your domain
- Check **Enforce HTTPS** (available after DNS propagates, usually 24–48h)

### Step 4: Update Base URL

In `.eleventy.js`, set the base URL for production:

```js
module.exports = function(eleventyConfig) {
  // ...
  return {
    pathPrefix: "/"  // "/" for custom domain; "/openclaw-curriculum/" for github.io subdirectory
  };
};
```

---

## 4. Build Process (Eleventy)

### Prerequisites

```bash
node -v  # needs Node 18+
```

### Initial Setup

```bash
cd /Users/mike/Projects/kanban/curriculum
npm install  # installs @11ty/eleventy and any other deps
```

### Eleventy Config (`.eleventy.js`)

```js
module.exports = function(eleventyConfig) {
  // Pass through static assets unchanged
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/downloads");
  // eleventyConfig.addPassthroughCopy("src/CNAME");  // uncomment for custom domain

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    templateFormats: ["njk", "md", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};
```

### `package.json` Scripts

```json
{
  "scripts": {
    "build": "eleventy",
    "start": "eleventy --serve",
    "dev": "eleventy --serve --watch"
  }
}
```

### Build Output

Eleventy compiles `src/` → `_site/`:

```
src/index.njk          →  _site/index.html
src/educators.njk      →  _site/educators/index.html   (clean URL: /educators/)
src/homeschool.njk     →  _site/homeschool/index.html
src/assets/style.css   →  _site/assets/style.css       (passthrough)
src/downloads/*.pdf    →  _site/downloads/*.pdf         (passthrough)
```

---

## 5. Environment Considerations (Dev vs. Prod)

### Dev (Local)

- **URL:** `http://localhost:8080`
- **Live reload:** built into Eleventy's `--serve` mode
- **No HTTPS:** use plain http locally
- **Assets:** served from `/assets/` (relative paths work fine)

### Prod (GitHub Pages)

- **URL:** `https://clawdawg36-cpu.github.io/openclaw-curriculum/` (until custom domain set)
- **With custom domain:** `https://curriculum.openclaw.ai/`
- **HTTPS:** enforced by GitHub Pages
- **Base path:** if no custom domain, URLs need a path prefix (see below)

### Handling the Path Prefix Problem

Without a custom domain, GitHub Pages serves the site at `/openclaw-curriculum/` (the repo name), not `/`. Absolute paths like `/assets/style.css` break.

**Solution — use Eleventy's `pathPrefix`:**

```js
// .eleventy.js
const isProd = process.env.ELEVENTY_ENV === "production";

return {
  pathPrefix: isProd ? "/openclaw-curriculum/" : "/"
};
```

In the workflow, set:

```yaml
- run: ELEVENTY_ENV=production npm run build
```

Or better: set up a custom domain and set `pathPrefix: "/"` always.

### Environment-Specific Data

Use `src/_data/site.js` for environment-aware values:

```js
// src/_data/site.js
module.exports = {
  url: process.env.ELEVENTY_ENV === "production"
    ? "https://curriculum.openclaw.ai"
    : "http://localhost:8080",
  title: "OpenClaw AI Curriculum",
  description: "AI literacy curriculum for middle school"
};
```

Use in templates: `{{ site.url }}`, `{{ site.title }}`

---

## 6. Testing Locally Before Deploying

### Quick Start

```bash
cd /Users/mike/Projects/kanban/curriculum

# Install deps (first time or after npm changes)
npm install

# Start dev server with live reload
npm start
# → Site available at http://localhost:8080
# → Saves trigger auto-rebuild + browser refresh
```

### Pre-Deploy Checklist

Before pushing to `main`:

```bash
# 1. Run a clean production build (catches template errors)
npm run build

# 2. Check _site/ output exists and looks right
ls _site/
open _site/index.html  # spot-check in browser (note: no dev server, paths may differ)

# 3. Check for broken links (optional but recommended)
npx broken-link-checker http://localhost:8080 --recursive --exclude-external

# 4. Validate HTML (optional)
npx html-validate _site/**/*.html
```

### Testing with Prod-Like URL Prefix

If testing path prefix behavior without a custom domain:

```bash
ELEVENTY_ENV=production npm run build
cd _site && python3 -m http.server 8080
# Visit http://localhost:8080/openclaw-curriculum/ (manually adjust)
```

### Browser Testing Matrix

Test in at minimum:
- Chrome (latest)
- Safari (latest — primary for mobile)
- Firefox (latest)
- Mobile Safari (iOS, via simulator or real device)
- Chrome for Android

---

## 7. Rollback Procedure

GitHub Pages serves from the `gh-pages` branch. Rolling back means pointing that branch to a previous commit.

### Option A — Revert the Source Commit (Recommended)

```bash
# On main branch
git log --oneline -10  # find the bad commit hash

# Revert (creates a new commit, preserves history)
git revert <bad-commit-hash>
git push origin main
# → GitHub Actions triggers, rebuilds from reverted source, redeploys
```

**Pros:** Clean history, traceable, no force pushes.

### Option B — Reset to Previous Deploy on `gh-pages`

If the Actions workflow itself is broken and can't rebuild:

```bash
# Check recent commits on gh-pages
git fetch origin gh-pages
git log --oneline origin/gh-pages -10

# Reset gh-pages to a known-good commit
git checkout gh-pages
git reset --hard <known-good-commit-hash>
git push origin gh-pages --force
```

**Note:** This bypasses the Actions workflow. The next push to `main` will overwrite with a fresh build.

### Option C — Re-trigger the Last Good Workflow

In GitHub UI:
1. **Actions tab** → find the last successful workflow run
2. Click **Re-run jobs** → **Re-run all jobs**
3. GitHub redeploys from that run's build artifacts

### Rollback Decision Tree

```
Deploy broke the site?
  ├── Source code bug?           → git revert + push main
  ├── Actions workflow broke?    → fix workflow + push main
  ├── Need instant recovery?     → Option B (force-reset gh-pages)
  └── Build artifact issue?      → Option C (re-run last good workflow)
```

---

## 8. Performance Considerations

### Asset Optimization

#### CSS

- Minify CSS in CI before deploy. Add to workflow:

```bash
npm install --save-dev clean-css-cli
npx cleancss -o _site/assets/style.min.css _site/assets/style.css
```

Or use a PostCSS pipeline with cssnano:

```bash
npm install --save-dev postcss postcss-cli cssnano autoprefixer
```

- Prefer a single bundled CSS file over multiple imports (fewer HTTP requests)
- Keep unused CSS out — don't pull in full Bootstrap if you only need a grid

#### Images

- Use WebP with JPEG/PNG fallback:
  ```html
  <picture>
    <source srcset="/assets/images/hero.webp" type="image/webp">
    <img src="/assets/images/hero.jpg" alt="AI Explorers hero">
  </picture>
  ```
- Optimize images before committing: use [Squoosh](https://squoosh.app/), `imagemin`, or `sharp`
- Lazy-load below-fold images: `<img loading="lazy">`
- Set explicit `width` and `height` to prevent layout shift (Core Web Vitals)

#### JavaScript

- Eleventy outputs zero JS by default — keep it that way unless needed
- If adding analytics (Fathom, Plausible), use their async scripts with `defer`
- Avoid loading third-party scripts synchronously in `<head>`

### CDN

GitHub Pages automatically serves through **Fastly's CDN**. No manual CDN config needed — global edge caching is included.

For additional edge coverage or if GitHub Pages CDN isn't sufficient:
- **Cloudflare** (free tier, put in front of GitHub Pages): add Cloudflare nameservers, set DNS to GitHub's IPs, enable proxying
- Benefits: Cloudflare adds HTTP/2, Brotli compression, edge caching rules, DDoS protection, and analytics

### Caching Headers

GitHub Pages sets `Cache-Control: max-age=600` (10 minutes) by default. You can't configure this without Cloudflare or a different host.

**With Cloudflare:** Set page rules or Cache Rules for:
- `/assets/*` → cache for 30 days (cache-busting via filename hashing)
- `/` and HTML pages → cache for 5 minutes (or bypass — they're small)

### Eleventy Performance Plugins

For larger sites (20+ pages), add:

```bash
npm install --save-dev @11ty/eleventy-img
```

Auto-optimizes images at build time — generates WebP, resizes, and updates `<img>` tags.

### Core Web Vitals Targets

| Metric | Target | How |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.5s | Optimize hero image; preload critical CSS |
| FID / INP (Interaction) | < 200ms | Minimal JS; no heavy frameworks |
| CLS (Cumulative Layout Shift) | < 0.1 | Set image dimensions; avoid injected content |

### Monitoring

- **Google Search Console** — Core Web Vitals report (requires domain verification)
- **PageSpeed Insights** — run on live URL after each major change: `https://pagespeed.web.dev/`
- **Lighthouse** in Chrome DevTools — run locally before deploying

---

## Quick Reference

| Task | Command |
|---|---|
| Dev server | `npm start` |
| Production build | `npm run build` |
| Deploy (auto) | `git push origin main` |
| Rollback | `git revert <hash> && git push` |
| Check live site | `https://clawdawg36-cpu.github.io/openclaw-curriculum/` |
| GitHub Pages settings | Repo → Settings → Pages |
| Actions status | Repo → Actions tab |

---

*Authored by ClawDawg | Phase 2 — Structure track*
