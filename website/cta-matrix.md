# CTA Matrix & Analytics Event Plan — AI Curriculum Site

> **Purpose:** Define conversion goals, CTAs, and analytics instrumentation per audience segment.
> Feeds directly into site design, copy, and GA4/Plausible event naming.
> **Dependencies:** Personas, message matrix, site architecture all complete.
> **Owner:** `cta-matrix.md`

---

## What "Conversion" Means by Audience

| Audience | Primary Conversion | Secondary Conversion |
|---|---|---|
| Homeschool Family | Downloads homeschool guide PDF | Clicks through to GitHub repo |
| Educator | Downloads Module 1 or teacher guide PDF | Joins educator mailing list |
| School Board | Downloads adoption brief PDF | Submits contact form |
| Policy Maker | Downloads policy brief PDF | Requests a briefing (form or email) |
| Parent (General) | Shares with a teacher | Joins interest list |

---

## Segment CTA Matrix

### 1. Homeschool Families

**Primary CTA:** "Download the Homeschool Guide"
- Placement: Hero section, sidebar, module overview pages
- Format: PDF download (no account required); email capture optional with "send to inbox" option
- Copy: *"Get the complete guide — what to teach, how to sequence it, and what your child will build."*

**Secondary CTA:** "See the Full Curriculum on GitHub"
- Placement: Below primary CTA, in footer, on curriculum overview page
- Copy: *"Everything's open source. Read it, fork it, adapt it."*

**Tertiary CTA:** "Try Week 1 Today"
- Links to Module 1 landing page or inline preview
- Copy: *"No signup. Just start."*

**Success Metrics:**
- PDF download rate (homeschool guide)
- GitHub click-through rate
- Return visitor rate (indicates engagement post-download)
- Time on site for homeschool landing page

---

### 2. Educators (K–12 Teachers)

**Primary CTA:** "Download Module 1 — Free"
- Placement: Hero, teacher section landing page
- Format: PDF or ZIP (lesson plans + rubrics)
- Copy: *"Full lesson plan, rubric, and discussion guide — ready for Monday."*

**Secondary CTA:** "Download the Teacher Guide"
- Placement: Below primary, teacher guide page
- Format: PDF; standalone document explaining how to facilitate the full course
- Copy: *"Everything you need to teach AI without being an AI expert."*

**Tertiary CTA:** "Join Other Educators Using This Curriculum"
- Email list or community link
- Copy: *"See how other teachers are using this in their classrooms."*

**Success Metrics:**
- Module 1 PDF download rate
- Teacher guide PDF download rate
- Email list signups (educator segment)
- Referral traffic to GitHub from educator pages

---

### 3. School Boards

**Primary CTA:** "Download the Adoption Brief"
- Placement: School board / district section hero
- Format: 2-page PDF (what it is, what it costs, what other districts have done, key safeguards)
- Copy: *"A two-page brief for your next board meeting."*

**Secondary CTA:** "Talk to Someone"
- Contact form: Name, district, role, question
- Placement: Below adoption brief CTA
- Copy: *"Have questions before bringing this to your board? We'll respond within 2 business days."*

**Success Metrics:**
- Adoption brief PDF download rate
- Contact form submissions (role = board member / admin)
- Time on site for board/district pages
- Email open rate for board-targeted follow-ups

---

### 4. Policy Makers

**Primary CTA:** "Download the Policy Brief"
- Placement: Policy / government section hero
- Format: PDF, research-style document (equity framing, workforce data, funding alignment)
- Copy: *"The equity and workforce case for AI literacy — with the data to back it."*

**Secondary CTA:** "Request a Briefing"
- Lightweight form: Name, title/org, preferred format (call / email / in-person), timing
- Placement: Below policy brief CTA
- Copy: *"We're available for one-on-one briefings with state and federal education offices."*

**Success Metrics:**
- Policy brief PDF download rate
- Briefing request form submissions
- Document shares (PDF view count, forwarded emails if trackable)
- Referral source tracking (how did they arrive: direct, search, referral?)

---

### 5. Parents (General)

**Primary CTA:** "Share This With Your Child's Teacher"
- Placement: Parent section, post-FAQ section
- Format: Pre-filled share link / email template
- Copy: *"If you think this is worth trying, forward it to your kid's teacher. They can get started for free."*

**Secondary CTA:** "Join the Interest List"
- Email capture form (no commitment)
- Placement: End of parent section, post-video
- Copy: *"Get updates when new modules launch and hear what other families are doing with this."*

**Tertiary CTA:** "See What Students Have Built"
- Links to project gallery or showcase page
- Copy: *"Real projects from real students — not demo videos."*

**Success Metrics:**
- "Share with teacher" link clicks (and ideally referral tracking if the link is unique)
- Interest list signups (parent segment)
- Project gallery page views from parent referrer
- Bounce rate on parent landing page (low = engaged, high = wrong message)

---

## Analytics Event Plan

All events should fire on interaction, not on page load. Use consistent naming: `category_action_label`.

### PDF Downloads

| Event Name | Trigger | Properties |
|---|---|---|
| `pdf_download` | User clicks any PDF download link | `asset_name`, `audience_segment`, `page_path` |
| `pdf_download_homeschool_guide` | Homeschool guide PDF download | `audience: homeschool` |
| `pdf_download_module1` | Module 1 PDF download | `audience: educator` |
| `pdf_download_teacher_guide` | Teacher guide PDF download | `audience: educator` |
| `pdf_download_adoption_brief` | Adoption brief PDF download | `audience: school_board` |
| `pdf_download_policy_brief` | Policy brief PDF download | `audience: policy_maker` |

### Form Submissions

| Event Name | Trigger | Properties |
|---|---|---|
| `form_submit_contact` | Contact form submitted | `role`, `district`, `source_page` |
| `form_submit_briefing_request` | Briefing request form submitted | `org_type`, `source_page` |
| `form_submit_interest_list` | Interest list signup | `audience_segment`, `source_page` |

### Click Events

| Event Name | Trigger | Properties |
|---|---|---|
| `cta_click_github` | Click to GitHub repo | `source_page`, `audience_segment` |
| `cta_click_share_teacher` | Clicks "share with teacher" link | `source_page` |
| `cta_click_project_gallery` | Click through to project gallery | `source_page`, `audience_segment` |
| `cta_click_module1_preview` | Click to Module 1 inline preview | `source_page` |

### Engagement

| Event Name | Trigger | Properties |
|---|---|---|
| `scroll_depth_50` | Scrolled 50% of page | `page_path`, `audience_segment` |
| `scroll_depth_90` | Scrolled 90% of page | `page_path`, `audience_segment` |
| `video_play` | Plays intro or demo video | `video_name`, `source_page` |
| `video_complete` | Reaches end of video | `video_name`, `source_page` |

---

## Audience Detection / Segmentation Strategy

Because the site serves multiple audiences, we need to route people to the right section quickly. Recommended approaches:

1. **Homepage audience selector** — above the fold, 4–5 cards: *"I'm a homeschool parent / teacher / school administrator / policy maker / parent"* → each routes to a tailored landing section.
2. **URL parameters** — educator-targeted links (`?for=educator`) pre-set the active segment, enabling accurate analytics attribution.
3. **UTM tags on outbound shares** — the "share with teacher" link should carry `utm_source=parent_share&utm_medium=referral` so we can measure parent-driven educator acquisition.

---

## Conversion Funnel Summary

```
Visitor arrives
  └─ Views audience-specific section
       └─ Reads message aligned to their pain/motivation
            └─ Takes primary action (PDF download or form)
                 └─ Secondary: joins list, shares, or clicks through to GitHub
                      └─ Returns (tracked as engaged user)
```

Key drop-off risks:
- Audience mismatch at landing (wrong section for their role)
- PDF link broken or gated unexpectedly (kills trust immediately)
- Form too long (especially for policy makers and school boards)
- No social proof near CTAs (fix: add peer district names, teacher quotes near each download)

---

## Notes for Implementation

- **No login walls on primary PDFs.** All key assets must be downloadable without creating an account. Email capture is opt-in only.
- **UTM hygiene matters.** Define UTM conventions before launch; retrofitting is painful.
- **Policy brief and adoption brief are different documents.** Policy brief = equity/workforce framing for legislators. Adoption brief = implementation framing for administrators/boards.
- **Parent segment is a referral engine, not a direct adopter.** Success is measured by teacher and educator conversions downstream from parent shares — plan to track this chain.

---

*Last updated: 2026-03-21 | Owner: `cta-matrix.md` | Phase: 2 — Structure*
