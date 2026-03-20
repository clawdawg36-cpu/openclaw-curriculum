# AI Explorers Online — Technology Recommendations

**Version:** 1.0  
**Date:** March 2026  
**Audience:** Engineering team, CTO, curriculum director  
**Purpose:** Evaluate platform technology options with pros, cons, and a final recommendation.

---

## Executive Summary

**Recommended approach: Standalone PWA with optional Google Classroom / Canvas LTI integration as a Phase 2 add-on.**

The AI Explorers Online platform has specific requirements — gamification, a custom Agent Design Journal, COPPA-first data model, and a PWA that works beautifully on Chromebooks and tablets — that don't fit well inside existing LMS products. Canvas and Google Classroom are powerful tools, but they are learning *management* systems, not learning *experience* platforms. Trying to build the badge system, XP engine, and journal UX inside Canvas would be fighting the platform constantly.

The right call is a purpose-built standalone PWA that teachers can optionally connect to their existing LMS for assignment sync and grade passback. This gives us full control over UX and data model while staying compatible with school IT environments.

---

## Option Comparison Overview

| Option | Build Cost | Control | UX Quality | LMS Fit | COPPA | Rec |
|--------|-----------|---------|------------|---------|-------|-----|
| Standalone PWA (custom) | High | Full | Excellent | Integration possible | Full control | ✅ **Recommended** |
| Canvas LMS Customization | Medium | Partial | Poor for gamification | Native | Limited | ❌ |
| Google Classroom Plugin | Low-Medium | Low | Very limited | Native | Adequate | ⚠️ Phase 2 only |
| Schoology / Brightspace | Medium | Low | Poor | Native | Adequate | ❌ |
| Open-source LMS (Moodle) | Medium-High | Medium | Poor without plugins | N/A | Configurable | ❌ |
| No-code (Notion, Google Sites) | Very Low | Very Low | Poor | None | Inadequate | ❌ |

---

## Option 1: Standalone Progressive Web App (Custom Build)

### Description

Build AI Explorers Online as a purpose-built PWA using modern web technologies. Deploy to a cloud hosting provider. Optionally provide LTI 1.3 or Google Classroom API hooks as a Phase 2 integration.

### Technology Stack Options

#### Frontend

**Option A: Next.js (React) — Recommended**
- Server-side rendering for fast initial load on Chromebooks
- App Router supports PWA manifest + service workers cleanly
- Excellent TypeScript support
- Large ecosystem for UI components (shadcn/ui, Radix)
- Vercel or self-hosted deployment

**Option B: SvelteKit**
- Lighter bundle size than Next.js (better on older Chromebooks)
- Smaller ecosystem
- Less developer talent available

**Option C: Vue + Nuxt**
- Good PWA support
- Smaller talent pool than React
- Well-suited if team is Vue-native

**Recommendation: Next.js (React)** — widest talent pool, best ecosystem, strong PWA support.

#### Backend

**Option A: Node.js + Express/Fastify — Recommended**
- Natural fit for JavaScript-native team
- Strong ecosystem for education apps
- Easy to deploy on Railway, Render, Fly.io, or AWS

**Option B: Python + FastAPI**
- Great if team is Python-native
- Fast API development
- May need JS adapter for some frontend integrations

**Option C: Supabase (Postgres + auto-generated REST + Auth)**
- Dramatically reduces backend boilerplate
- Row-level security for COPPA data model
- Real-time subscriptions (useful for teacher dashboard live updates)
- **Strongly consider as the database + auth layer** regardless of backend choice

**Recommendation: Node.js/Fastify backend + Supabase for database/auth**

#### Database

**Option A: PostgreSQL (via Supabase or direct) — Recommended**
- Relational model fits the data (students → classes → progress → badges)
- Row-level security (RLS) is critical for COPPA isolation
- Full-text search for teacher roster filtering
- Supabase provides managed hosting with backups

**Option B: MongoDB**
- Flexible schema for content items
- Weaker RLS story; COPPA isolation harder to enforce at DB level
- Not recommended for this use case

#### Authentication

**Supabase Auth — Recommended**
- Supports email/password, Google OAuth, Microsoft OAuth out of the box
- Anonymous / magic-link sessions for students (no email required)
- Class code → temporary session → promote to full account flow is achievable
- JWT-based, works seamlessly with row-level security

Alternative: Auth0 (more expensive, more features than needed)

#### PWA / Offline

- Service Worker via `next-pwa` or `workbox` directly
- Cache: lesson content, journal entries (read-only offline)
- Background sync: quiz completions queue when offline, sync on reconnect
- Manifest: `display: standalone`, proper icons for iOS/Android/Chrome OS

#### Hosting

| Option | Pros | Cons | Cost (est.) |
|--------|------|------|-------------|
| Vercel | Easiest Next.js deploy, edge network, great DX | Vendor lock-in, expensive at scale | Free tier → $20/mo/team |
| Railway | Simple full-stack, includes Postgres | Smaller CDN footprint | ~$20-50/mo |
| Fly.io | Global edge, Docker-based, full control | More DevOps work | ~$30-80/mo |
| AWS (Amplify + RDS) | Enterprise-grade, compliance features | Complex, expensive | $100-500/mo |
| Self-hosted (school VPS) | Maximum data control, COPPA ideal | Requires IT ops | Varies |

**Recommendation for a school/nonprofit context: Vercel (frontend) + Supabase (backend/db)** — low ops overhead, generous free tiers, can scale to thousands of students.

**For a district deployment requiring data residency: self-hosted on school VPS or AWS with specific region constraints.**

### Pros

- **Full UX control:** XP animations, badge unlock screen, gamification done right — impossible to replicate inside Canvas
- **COPPA-optimized:** We control the entire data model; no third-party trackers; student PII never leaves our system
- **Curriculum-native:** Built for this curriculum, not a generic LMS retrofitted to it
- **PWA-first:** Works on Chromebook, tablet, phone without app store installs
- **Extensible:** Can add LTI/Google Classroom integration in Phase 2 without rebuilding
- **Cost-effective at small scale:** Free tier covers initial pilot deployments

### Cons

- **Higher initial build cost:** Estimated 3–4 months of engineering to build v1.0
- **Maintenance burden:** We own the infrastructure, not a vendor
- **No built-in content authoring:** Teachers can't edit lesson content in-platform (content comes from the curriculum repo)
- **Authentication complexity:** COPPA-compliant under-13 auth requires careful implementation

### Estimated Build Effort

| Component | Estimated Weeks |
|-----------|----------------|
| Auth + class enrollment (COPPA flow) | 2–3 weeks |
| Student dashboard + module pages | 3–4 weeks |
| XP engine + badge system | 2 weeks |
| Agent Design Journal | 2 weeks |
| Quiz engine | 2 weeks |
| Teacher dashboard + analytics | 3–4 weeks |
| Assignment tracker | 1–2 weeks |
| Discussion forum + moderation | 2 weeks |
| PWA manifest + service worker | 1 week |
| Content ingestion pipeline (Markdown → platform) | 2 weeks |
| Testing + accessibility audit | 2 weeks |
| **Total (rough estimate)** | **~22–26 weeks (5–6 months, 1 engineer)** |

With 2 engineers: ~12–14 weeks to v1.0.

---

## Option 2: Canvas LMS Customization

### Description

Deploy Canvas (open-source or Canvas Cloud) and customize it with:
- Custom theme for AI Explorers branding
- Canvas Badges (Badgr integration) for module badges
- Custom JavaScript for XP-like engagement scoring
- Canvas ePortfolio for Agent Design Journal

### Pros

- **LMS compatibility:** Many schools already have Canvas; zero new system for IT
- **Assignment/grade workflow:** Canvas grade book is battle-tested
- **Hosted option:** Canvas Cloud = no self-hosting
- **Compliance:** Canvas has COPPA/FERPA compliance docs and BAA available

### Cons

- **Gamification is painful:** XP system requires custom Canvas JavaScript or external app; not a first-class feature
- **Journal UX is poor:** Canvas ePortfolio is generic and not curriculum-specific
- **Badge unlock experience:** Badgr badges are just images; no confetti animation, no in-app moment
- **Student dashboard:** Canvas's student view is a list of courses/assignments — not the agent-centric journey arc we need
- **Mobile experience:** Canvas mobile app is adequate but not PWA-optimized for the engagement we want
- **Cost:** Canvas Cloud is expensive for small schools; $5,000–$15,000+/year
- **Vendor lock-in:** Canvas data export is possible but migration is painful
- **COPPA under-13:** Canvas requires email accounts for students; requires district-level COPPA setup

### Verdict

❌ **Not recommended for primary platform.** Canvas is a good LMS for assignment and grade management, but it cannot deliver the gamified, agent-centric student experience the curriculum requires. The student experience would feel like a generic homework tracker, not a badge-earning agent-builder journey.

**Canvas as an integration target (Phase 2):** Yes. Teachers who use Canvas should be able to sync AI Explorers assignments to Canvas grade book via LTI 1.3. That's a reasonable Phase 2 integration.

---

## Option 3: Google Classroom Plugin / Add-on

### Description

Build a Google Classroom add-on using the Google Workspace for Education API. Students access curriculum content via Google Classroom assignments; the add-on surfaces AI Explorers content inside the Classroom interface.

### Pros

- **Zero IT friction:** Most K-12 schools are already on Google Workspace for Education
- **Device alignment:** Chromebooks + Google Classroom is the #1 K-12 combo in the US
- **Student familiarity:** Students already use Google Classroom daily
- **No new login:** Students use their existing school Google account (teacher creates accounts, not students)
- **Free to use:** Google Workspace for Education is free for K-12
- **COPPA:** Google Workspace for Education has strong COPPA/FERPA compliance; managed student accounts under school control

### Cons

- **Severely limited UX:** Google Classroom add-ons are iframes inside Google's UI — we can't control the outer shell, navigation, or branding
- **No native gamification:** XP, badges, and animations would live in the iframe but feel out of place
- **Assignment-centric model:** Classroom is organized around assignments, not a student progress journey
- **API limitations:** Google Classroom API doesn't give us good hooks for real-time progress updates or custom student profiles
- **Dependency:** We're dependent on Google API stability and add-on approval process
- **iOS experience:** Google Classroom on iPhone/iPad via Safari has inconsistencies

### Best Use: Google Classroom as Assignment Distribution (Phase 2)

The right model is: AI Explorers Online is the primary platform, but teachers can optionally **push assignments to Google Classroom** so students see them alongside their other schoolwork. This is achievable via the Google Classroom API without making Google Classroom the primary UI.

### Verdict

⚠️ **Not recommended as primary platform. Strongly recommended as Phase 2 integration.**  
Build the Google Classroom assignment sync as an optional feature in Phase 2: teacher clicks "Sync to Google Classroom" in the assignment creator, and the assignment appears in their Google Classroom course.

---

## Option 4: Schoology / Brightspace / Other LMS

### Description

Similar to Canvas — deploy on an existing LMS platform (Schoology, Brightspace by D2L, etc.) and customize it for AI Explorers.

### Pros

- Pre-built LMS features (grading, rosters, communication)
- Some schools already have these

### Cons

- Same fundamental problem as Canvas: these platforms are designed for assignment management, not gamified learning experiences
- Schoology's gamification features are basic
- Brightspace has some gamification (Awards module) but limited badge UX
- High cost for standalone deployments
- Custom development inside LMS proprietary APIs is painful

### Verdict

❌ **Not recommended.** Same constraints as Canvas, with less market presence.

---

## Option 5: Open-Source LMS (Moodle)

### Description

Deploy Moodle (the world's most widely used open-source LMS) with custom plugins for badges, XP, and the Agent Design Journal. The Level Up XP plugin provides gamification. The Open Badges standard is supported natively.

### Pros

- **Free:** No licensing costs
- **Open-source:** Full control over code
- **Gamification plugins:** Level Up XP plugin is well-established
- **Open Badges:** Native support via Moodle Backpack
- **COPPA compliance:** Configurable; no external data sharing

### Cons

- **Server hosting required:** Moodle is a PHP application that needs a LAMP/LEMP server; not trivial to run
- **UX is dated:** Moodle's default student experience is significantly worse than a modern PWA
- **Customization requires PHP:** The AI Explorers Journal and agent-centric dashboard would require custom PHP plugin development
- **Performance:** Moodle can be slow on underpowered school servers
- **Mobile:** Moodle has a companion app but the PWA story is weak

### Verdict

❌ **Not recommended** for schools without existing Moodle infrastructure. The hosting and customization complexity is comparable to building a standalone PWA, but with worse UX and less control.

**Exception:** If a school district already runs Moodle and wants to deploy this as a Moodle plugin, it's viable. Level Up XP + Open Badges + custom Journal plugin could work. Estimated: 2–3 months of PHP plugin development.

---

## Option 6: No-Code / Low-Code Platforms

### Description

Use platforms like Notion, Google Sites, Webflow, Glide, or Teachable to publish curriculum content and track engagement.

### Examples:
- Notion workspace with student pages for journal entries
- Webflow site for curriculum content + Airtable for progress tracking
- Glide app (built from Google Sheets)
- Teachable or Thinkific (online course platform)

### Pros

- **Extremely fast to prototype:** Can have something live in days
- **No backend engineering required**
- **Low cost**

### Cons

- **Gamification is impossible:** No XP engine, no badge unlock animation, no live leaderboard — all would require significant custom code or third-party services
- **COPPA compliance is your problem:** These platforms are not designed for students under 13; using them for students requires careful legal review
- **Data isolation:** Can't enforce per-student data privacy properly
- **Scalability:** Breaks down past ~50 students per class
- **Journal:** Notion gives students access to each other's content unless carefully configured
- **Not a PWA:** Can't install as home screen app

### Verdict

❌ **Not recommended for production deployment.** Only acceptable for a one-teacher pilot proof-of-concept where COPPA compliance is managed manually and gamification is not yet a requirement.

---

## Recommended Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                      AI Explorers Online                            │
│                   Progressive Web App (PWA)                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────────────┐    ┌─────────────────────────────────┐ │
│  │   Frontend (Next.js)    │    │   Phase 2 Integrations          │ │
│  │                         │    │                                 │ │
│  │  - Student Dashboard    │    │  ┌──────────────────────────┐   │ │
│  │  - Module Content Hub   │◄───┼──┤ Google Classroom API     │   │ │
│  │  - Agent Design Journal │    │  │  (assignment sync)       │   │ │
│  │  - Badge Collection     │    │  └──────────────────────────┘   │ │
│  │  - Teacher Dashboard    │    │                                 │ │
│  │  - Quiz Engine          │    │  ┌──────────────────────────┐   │ │
│  │  - Discussion Forum     │    │  │ Canvas LTI 1.3           │   │ │
│  │                         │    │  │  (grade passback)        │   │ │
│  └────────────┬────────────┘    │  └──────────────────────────┘   │ │
│               │                 └─────────────────────────────────┘ │
│               ▼                                                     │
│  ┌─────────────────────────┐    ┌─────────────────────────────────┐ │
│  │   API (Node.js/Fastify) │    │   Content Pipeline              │ │
│  │                         │    │                                 │ │
│  │  - Auth middleware      │    │  curriculum GitHub repo         │ │
│  │  - XP engine            │    │  ──→ Markdown parser            │ │
│  │  - Badge service        │    │  ──→ Content store (Supabase)   │ │
│  │  - Progress tracking    │    │  ──→ Quiz JSON ingestion        │ │
│  │  - Assignment service   │    │                                 │ │
│  │  - Analytics service    │    └─────────────────────────────────┘ │
│  └────────────┬────────────┘                                        │
│               │                                                     │
│               ▼                                                     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │                  Supabase                                    │   │
│  │  PostgreSQL + Row Level Security + Auth + Storage            │   │
│  │                                                              │   │
│  │  Tables: students, classes, teachers, progress_events,       │   │
│  │          badges_earned, xp_log, journal_entries,             │   │
│  │          quiz_attempts, assignments, discussion_posts,       │   │
│  │          parental_consents                                   │   │
│  └─────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
```

---

## COPPA Technical Considerations by Platform

| Requirement | Custom PWA | Canvas | Google Classroom | Moodle |
|-------------|-----------|--------|-----------------|--------|
| No email required for under-13 | ✅ (class code flow) | ❌ | ⚠️ (school Google account) | ✅ (configurable) |
| Data residency control | ✅ Full control | ⚠️ Canvas Cloud = vendor datacenter | ⚠️ Google datacenter | ✅ Self-hosted |
| No third-party ad tracking | ✅ | ⚠️ Limited | ⚠️ Limited | ✅ |
| Parental consent flow | Build custom | Requires district setup | Requires district COPPA config | Plugin required |
| Student data deletion | Build custom | Supported | Supported via admin | Supported |
| Data export for parents | Build custom | Supported | Supported | Supported |
| BAA / DPA available | Build your own | ✅ Canvas Cloud offers | ✅ Google offers | N/A (self-hosted) |

---

## Phase 1 vs Phase 2 Scope

### Phase 1: Standalone PWA (MVP)

**Build:**
- Student dashboard with XP + module arc
- Module content hub (Markdown content rendering)
- Agent Design Journal (7 entries)
- XP engine + badge system
- Basic quiz engine (multiple choice / T-F)
- Teacher dashboard (class progress table + basic analytics)
- Class enrollment (code-based, COPPA flow)
- Discussion forum (basic, moderated)
- PWA manifest + basic offline support

**Timeline:** 12–16 weeks with 2 engineers  
**Stack:** Next.js + Supabase + Vercel  

### Phase 2: LMS Integration + Enhancements

**Add:**
- Google Classroom assignment sync
- Canvas LTI 1.3 grade passback
- Enhanced teacher analytics (quiz score breakdowns, cohort comparisons)
- Parent portal (limited)
- Advanced offline (full content cache)
- OpenClaw webhook integration for lab completion detection
- School/district admin dashboard

**Timeline:** 8–12 additional weeks  

---

## Cost Estimates

### Build Cost (one-time)

| Phase | Engineering Weeks | Estimated Cost (contract) |
|-------|------------------|--------------------------|
| Phase 1 MVP | 24–32 (2 engineers) | $50,000–$80,000 |
| Phase 2 LMS integration | 16–24 (1–2 engineers) | $30,000–$50,000 |

### Hosting Cost (recurring, per year)

| Scale | Vercel + Supabase | AWS | Self-hosted VPS |
|-------|------------------|-----|----------------|
| 1–5 classes (50–150 students) | ~$0–50/mo | ~$50–100/mo | ~$20–40/mo |
| 10–50 classes (500–1,500 students) | ~$100–300/mo | ~$200–500/mo | ~$50–100/mo |
| District (100+ classes) | ~$500–1,500/mo | ~$500–2,000/mo | ~$100–300/mo |

---

## Final Recommendation

**Build a standalone PWA. Start with Supabase + Next.js. Add LMS integrations in Phase 2.**

The curriculum's core promise — "build your AI agent, piece by piece" — is a journey metaphor. That journey needs a purpose-built platform that feels exciting, visual, and personal. An LMS cannot deliver that. A custom PWA can.

The engineering investment is higher upfront, but the result is a platform that actually serves the curriculum's goals rather than a compromise product that fights the LMS model at every step.

Start small: pilot with 1–3 classes on the Vercel/Supabase free tier, iterate on the UX, then scale. Don't overbuild Phase 1. Get the core loop right: student opens platform → sees their agent → knows exactly what to do next → earns XP → earns badge → feels proud.

That loop, done well, is worth more than any LMS integration.

---

*Technology Recommendations by AI Explorers Curriculum Team · March 2026*  
*For implementation questions, open an issue at [github.com/clawdawg36-cpu/openclaw-curriculum](https://github.com/clawdawg36-cpu/openclaw-curriculum)*
