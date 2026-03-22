# Hosting Setup — GitHub Pages Deployment Pipeline

**Project:** AI Explorers Marketing Site  
**Updated:** 2026-03-22  
**Status:** Finalized ✅  
**Tech Stack:** Plain HTML/CSS/JS → GitHub Pages via GitHub Actions

---

## Overview

The AI Explorers marketing site is a **plain HTML/CSS site** deployed automatically to **GitHub Pages** via **GitHub Actions** on every push to `main`. No build step, no bundler, no static site generator — the HTML files in `website/` are served directly.

Live URL (until custom domain): `https://clawdawg36-cpu.github.io/openclaw-curriculum/`

---

## 1. Repository & Website Folder Structure

```
openclaw-curriculum/                ← repo root
├── .github/
│   └── workflows/
│       └── deploy.yml              ← GitHub Actions workflow (auto-deploy)
├── website/                        ← ALL site source files live here
│   ├── index.html                  ← Homepage (/)
│   ├── educators.html              ← /educators
│   ├── homeschool.html             ← /homeschool
│   ├── parents.html                ← /parents
│   ├── schools.html                ← /schools (school boards/admins)
│   ├── distance-ed.html            ← /distance-ed
│   ├── policy.html                 ← /policy
│   ├── assets/
│   │   ├── hero-graphic.svg        ← SVG hero illustration
│   │   └── icons/                  ← icon assets
│   ├── og-images/                  ← Open Graph / social sharing images
│   ├── pdfs/                       ← downloadable guides (PDFs)
│   ├── og-meta-template.html       ← dev reference (not served as a page)
│   └── hosting-setup.md            ← this file
├── curriculum/                     ← curriculum content (not served)
├── module1/ … module7/             ← module materials (not served)
└── README.md
```

### How GitHub Pages Serves `website/`

GitHub Pages does **not** natively serve a subfolder. We use GitHub Actions to copy the `website/` contents into the `gh-pages` branch root, and GitHub Pages serves from that branch.

| Source | Served at |
|---|---|
| `website/index.html` | `/` |
| `website/educators.html` | `/educators.html` |
| `website/assets/hero-graphic.svg` | `/assets/hero-graphic.svg` |
| `website/og-images/og-default.svg` | `/og-images/og-default.svg` |
| `website/pdfs/educator-quickstart.pdf` | `/pdfs/educator-quickstart.pdf` |

---

## 2. GitHub Actions Workflow

Create `.github/workflows/deploy.yml` in the repo root:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
    paths:
      - 'website/**'

  # Allow manual trigger from GitHub Actions tab
  workflow_dispatch:

permissions:
  contents: write

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Deploy website/ to GitHub Pages
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./website
          publish_branch: gh-pages
          # Preserve files on gh-pages not present in website/ (set false to clean slate)
          keep_files: false
          # Optional: add a .nojekyll file to disable Jekyll processing
          enable_jekyll: false
```

**What this does:**
1. Triggers on any push to `main` that touches files inside `website/`
2. Copies everything in `website/` to the `gh-pages` branch root
3. GitHub Pages serves from `gh-pages` branch

### Required Repository Permissions

The workflow uses `GITHUB_TOKEN` — no manual secret needed. Enable write permissions:

- **Settings → Actions → General → Workflow permissions** → **Read and write permissions** → Save

---

## 3. Enabling GitHub Pages in Repo Settings

1. Go to the repo: `https://github.com/clawdawg36-cpu/openclaw-curriculum`
2. Click **Settings → Pages**
3. Under **Source**, select:
   - **Deploy from a branch**
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

After the first successful Actions run (which creates the `gh-pages` branch), GitHub Pages will activate and show:

> Your site is published at `https://clawdawg36-cpu.github.io/openclaw-curriculum/`

**Note:** The `gh-pages` branch is created automatically by the Actions workflow on first push. You don't need to create it manually.

---

## 4. Custom Domain Setup (Placeholder — Future)

If we add a custom domain (e.g., `aiexplorers.io` or `curriculum.openclaw.ai`):

### Step 1: Add CNAME File

Create `website/CNAME` with just the domain (no protocol, no trailing slash):

```
aiexplorers.io
```

Commit and push. The Actions workflow will copy it to the `gh-pages` branch root, where GitHub Pages expects it.

### Step 2: DNS Configuration

At your DNS provider, add:

```
# For apex domain (aiexplorers.io):
A     @    185.199.108.153
A     @    185.199.109.153
A     @    185.199.110.153
A     @    185.199.111.153

# For www subdomain:
CNAME www  clawdawg36-cpu.github.io.

# For subdomain (curriculum.openclaw.ai):
CNAME curriculum  clawdawg36-cpu.github.io.
```

### Step 3: GitHub Pages Settings

- **Settings → Pages → Custom domain**: enter your domain
- Check **Enforce HTTPS** (available after DNS propagates, typically 24–48h)

### Step 4: Update Absolute URLs in HTML

All HTML files currently reference `https://aiexplorers.io/` in OG meta tags. If you change the domain, update:

- `og:url` meta tag in each `.html` file
- `og:image` URLs
- Any hardcoded canonical links

A quick find-and-replace works:

```bash
cd website
grep -r "aiexplorers.io" --include="*.html" -l
# then sed replace, or use VS Code global find/replace
```

---

## 5. Testing Locally Before Pushing

No build step needed — the HTML files are ready to open. Two ways to test:

### Quick: Open File Directly in Browser

```bash
open /Users/mike/Projects/openclaw-curriculum/website/index.html
```

Works fine for checking layout and content. **Limitation:** relative paths work, but `fetch()` calls and some browser security policies may block file:// resources.

### Better: Local HTTP Server

```bash
cd /Users/mike/Projects/openclaw-curriculum/website
python3 -m http.server 8080
# Visit: http://localhost:8080
```

This accurately simulates how GitHub Pages serves the files.

Or with Node.js:

```bash
npx serve .
# Visit: http://localhost:3000
```

### Pre-Push Checklist

Before merging/pushing changes to `main`:

```bash
# 1. Start local server
cd /Users/mike/Projects/openclaw-curriculum/website
python3 -m http.server 8080

# 2. Check all pages load without errors
open http://localhost:8080/index.html
open http://localhost:8080/educators.html
open http://localhost:8080/homeschool.html
open http://localhost:8080/parents.html
open http://localhost:8080/schools.html
open http://localhost:8080/distance-ed.html
open http://localhost:8080/policy.html

# 3. Verify PDF downloads work
open http://localhost:8080/pdfs/

# 4. Check browser console for JS errors (F12 → Console)

# 5. Test on mobile viewport (Chrome DevTools → Toggle device toolbar)
```

### Browser Testing Matrix

Test in at minimum:
- Chrome (latest)
- Safari (latest — primary for iOS users)
- Firefox (latest)
- Mobile Safari (iOS — resize Chrome DevTools viewport to 375×812)

---

## 6. Deploy Workflow (Day-to-Day)

### Automatic Deploy (Normal Flow)

1. Edit HTML files in `website/`
2. Commit and push to `main`:
   ```bash
   cd /Users/mike/Projects/openclaw-curriculum
   git add website/
   git commit -m "feat: [Website] <description>"
   git push origin main
   ```
3. GitHub Actions runs automatically (~1–2 minutes)
4. Site is live at `https://clawdawg36-cpu.github.io/openclaw-curriculum/`

### Manual Trigger

If you need to redeploy without a code change (e.g., after changing a secret or updating the workflow):

1. Go to **Actions tab** in the repo
2. Click **Deploy to GitHub Pages** workflow
3. Click **Run workflow** → **Run workflow**

### Monitoring Deploys

- **Actions tab** → shows each run's status (✅ success / ❌ failed)
- Click a run to see step-by-step logs
- Failed deploy = the live site remains unchanged (no broken deploys go live)

---

## 7. Rollback Procedure

Rolling back means reverting the source on `main` and letting Actions re-deploy.

### Option A — Revert the Source Commit (Recommended)

```bash
cd /Users/mike/Projects/openclaw-curriculum
git log --oneline -10            # find the bad commit hash

git revert <bad-commit-hash>     # creates a new revert commit
git push origin main
# → Actions triggers, redeploys the reverted site
```

**Pros:** Clean history, traceable, no force pushes.

### Option B — Reset `gh-pages` Branch Directly

If Actions is broken and can't rebuild:

```bash
git fetch origin gh-pages
git log --oneline origin/gh-pages -10   # find a known-good commit

git checkout gh-pages
git reset --hard <known-good-commit-hash>
git push origin gh-pages --force
```

**Note:** Next push to `main` will overwrite this with a fresh deploy.

### Option C — Re-run Last Good Workflow

1. **Actions tab** → find the last successful run
2. Click **Re-run jobs** → **Re-run all jobs**

---

## 8. Performance Notes

The site is plain HTML/CSS — no JS frameworks, no build step. It's fast by default.

### Image Optimization

- Hero graphic and OG images are SVG — already optimized, scales infinitely
- If adding raster images (photos, etc.), compress before committing:
  - Use [Squoosh](https://squoosh.app/) or `imagemin` for JPEG/PNG
  - Target < 200KB per image for above-fold content
  - Use `<img loading="lazy">` for below-fold images
  - Always set `width` and `height` attributes (prevents layout shift)

### CDN

GitHub Pages automatically serves through **Fastly's CDN** — global edge caching is built in. No manual CDN setup needed.

For additional control (custom cache rules, HTTP/2 Push, DDoS protection):
- Add **Cloudflare** (free tier) in front of GitHub Pages
- Point DNS to Cloudflare; Cloudflare proxies to GitHub Pages IPs

### Core Web Vitals Targets

| Metric | Target | Status |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.5s | ✅ SVG hero loads instantly |
| INP (Interaction to Next Paint) | < 200ms | ✅ Minimal JS |
| CLS (Cumulative Layout Shift) | < 0.1 | Set img dimensions to confirm |

Run [PageSpeed Insights](https://pagespeed.web.dev/) on the live URL after each major change.

---

## 9. Troubleshooting

### Site Not Updating After Push

1. Check **Actions tab** — did the workflow run? Did it pass?
2. If workflow skipped: check `paths:` filter in `deploy.yml` — changes must be inside `website/`
3. If workflow passed but site unchanged: GitHub Pages has a ~1–2 min propagation delay — wait and hard-refresh (`Cmd+Shift+R`)
4. If still stuck: manually trigger the workflow (see Section 6)

### 404 on All Pages

- GitHub Pages isn't configured yet → follow Section 3
- `gh-pages` branch doesn't exist yet → push a change to `website/` to trigger first deploy
- Wrong branch/folder in Pages settings → check **Settings → Pages**

### 404 on Specific Pages

- File doesn't exist in `website/` or is misnamed
- URL case sensitivity: GitHub Pages is case-sensitive — `Educators.html` ≠ `educators.html`
- Check that the file was committed: `git ls-files website/`

### Images / PDFs Not Loading

- Verify the file is committed and in the right path: `git ls-files website/assets/` or `website/pdfs/`
- Check the URL path in the HTML matches the actual file path (case-sensitive)
- If using absolute URLs (e.g., `https://aiexplorers.io/assets/...`), test on the live site, not locally

### OG Tags / Social Preview Not Working

- OG image URLs must be absolute (`https://...`), not relative (`/og-images/...`)
- Use [OpenGraph.xyz](https://www.opengraph.xyz/) or [Meta Tags](https://metatags.io/) to preview
- Social networks cache OG data — use their debug tools to force refresh:
  - Facebook: [Sharing Debugger](https://developers.facebook.com/tools/debug/)
  - Twitter/X: [Card Validator](https://cards-dev.twitter.com/validator)

### GitHub Actions Workflow Fails

- Check the error in the **Actions tab** → click the failed job → expand the failing step
- Common issue: `GITHUB_TOKEN` lacks write permissions → **Settings → Actions → General → Read and write permissions**
- Common issue: `publish_dir: ./website` path doesn't exist → confirm the folder name is exactly `website`

### Custom Domain: Site Shows Insecure or Wrong Domain

- DNS hasn't propagated yet (wait 24–48h after changing DNS)
- CNAME file missing or wrong content → check `website/CNAME` has only the domain, no protocol
- **Enforce HTTPS** not checked in Pages settings → enable it after DNS propagates

---

## Quick Reference

| Task | Command / Location |
|---|---|
| Start local server | `cd website && python3 -m http.server 8080` |
| Deploy (auto) | `git push origin main` |
| Manual deploy trigger | Repo → Actions → Deploy → Run workflow |
| Rollback | `git revert <hash> && git push` |
| Check live site | `https://clawdawg36-cpu.github.io/openclaw-curriculum/` |
| GitHub Pages settings | Repo → Settings → Pages |
| Actions status | Repo → Actions tab |
| PageSpeed test | https://pagespeed.web.dev/ |

---

*Authored by ClawDawg | Phase 2 — Structure track | Updated 2026-03-22*
