# Launch Plan — AI Explorers Curriculum Website

**Project:** AI Explorers — Free AI Curriculum for Middle School
**Target Launch Date:** TBD (fill in before execution)
**Owner:** Marketing / Site Lead
**Last Updated:** 2026-03-21

---

## Phase 1: Pre-Launch Checklist

Complete all items before flipping the site to public.

### Site QA
- [ ] All pages load without errors (/, /educators, /homeschool, /school-boards, /policy, /curriculum)
- [ ] All PDF downloads work (homeschool guide, module 1, teacher guide, adoption brief, policy brief)
- [ ] Mobile layout tested on iOS Safari and Android Chrome
- [ ] Contact forms submit successfully and send confirmation email
- [ ] Interest list signup tested end-to-end
- [ ] No broken internal links (use a link checker like Screaming Frog or Broken Link Checker)
- [ ] All page meta titles and meta descriptions set per seo-keywords.md
- [ ] OG tags set for all pages (og:title, og:description, og:image)
- [ ] Twitter Card meta tags set
- [ ] Favicon set
- [ ] 404 page exists and links back to homepage
- [ ] sitemap.xml generated and accessible
- [ ] robots.txt set correctly (allow all for launch)
- [ ] SSL/HTTPS confirmed on all pages
- [ ] Page speed tested (target <3s LCP on mobile) — use PageSpeed Insights
- [ ] Schema markup validated (Course, FAQPage, Organization, BreadcrumbList)
- [ ] GitHub repo link verified and working
- [ ] All "Download" CTAs open PDF in new tab (not navigate away)

### Analytics Setup
- [ ] Google Analytics 4 (GA4) property created and tracking code installed
- [ ] Google Search Console property created and sitemap submitted
- [ ] Plausible (optional) installed as privacy-friendly secondary tracker
- [ ] All PDF download events wired and tested (pdf_download_* events from cta-matrix.md)
- [ ] Form submission events tested (form_submit_contact, form_submit_briefing_request, form_submit_interest_list)
- [ ] CTA click events tested (cta_click_github, cta_click_share_teacher)
- [ ] UTM parameter convention documented:
  - `utm_source`: reddit / twitter / linkedin / producthunt / hn / email / facebook
  - `utm_medium`: social / organic / cpc / email
  - `utm_campaign`: launch-2026 (or use actual launch date slug)
- [ ] Conversion goals set in GA4 (PDF downloads = conversions)

### Social Accounts
- [ ] Twitter/X account created or confirmed active (@AIExplorers or similar)
- [ ] LinkedIn page created
- [ ] Product Hunt upcoming page scheduled (set to draft, ready to publish day-of)
- [ ] Reddit accounts ready (do NOT use new accounts — use aged accounts with karma)
- [ ] Pinterest account created (optional; good for homeschool audience long-term)

### Email List
- [ ] Email service provider set up (Mailchimp, ConvertKit, or Loops)
- [ ] Interest list form connected to ESP
- [ ] Welcome email drafted and tested in ESP
- [ ] Audience segments created: homeschool, educator, policy/admin, general parent
- [ ] Unsubscribe/GDPR footer in email templates
- [ ] SPF, DKIM, DMARC records verified for sending domain

### Content Assets
- [ ] All PDFs finalized and uploaded: homeschool guide, module 1, teacher guide, adoption brief, policy brief
- [ ] Launch announcement copy finalized (see launch-copy.md)
- [ ] Product Hunt assets ready: tagline, description, logo (240x240), gallery images (1270x760), thumbnail
- [ ] Social share image (1200x630) created for OG meta
- [ ] Launch email written, segmented list ready to send

---

## Phase 2: Launch Day Sequence

**Goal:** Hit multiple channels in a coordinated burst to maximize early traffic and backlinks.

### T-24 Hours (Day Before)
- [ ] Schedule Product Hunt launch (set to 12:01 AM PST)
- [ ] Pre-write all social posts (save as drafts)
- [ ] Alert any supporters/friends to upvote on PH and HN day-of
- [ ] Do final smoke test of all download links
- [ ] Send "going live tomorrow" teaser to email list (optional)

### Launch Day Hour-by-Hour

**12:01 AM PST** — Product Hunt goes live
- Monitor comments, respond to all questions within first hour

**8:00 AM PST** — Email announcement
- Send to full interest list with launch subject line
- Segment: homeschool-specific copy to homeschool segment

**9:00 AM PST** — Hacker News "Show HN" post
- Post from aged account with karma
- Text: see launch-copy.md → Show HN section
- Stay online to respond to comments for first 2 hours

**10:00 AM PST** — Reddit wave 1
- Post to r/homeschool (see launch-copy.md → Reddit r/homeschool)
- Do NOT post to multiple subreddits simultaneously — space them 1–2 hrs apart
- Respond to all comments within 30 minutes

**11:00 AM PST** — Twitter/X thread
- Post full 5-7 tweet thread (see launch-copy.md → Twitter thread)
- Pin first tweet
- Ask supporters to retweet thread opener

**12:00 PM PST** — LinkedIn post
- Post from personal founder account (not company page — personal gets more reach)
- Tag 3-5 relevant educators or ed-tech people in comments (not in the post body)

**1:00 PM PST** — Reddit wave 2
- Post to r/Teachers (see launch-copy.md → Reddit r/Teachers)
- Respond to comments

**2:00 PM PST** — Reddit wave 3 (optional, if r/AIEducation is active)
- Post to r/AIEducation or r/artificial

**3:00 PM PST** — Facebook homeschool groups
- Post to top 3 homeschool Facebook groups (see outreach-homeschool.md for list)
- Customize intro for each group — do NOT copy-paste identical text

**5:00 PM PST** — Check Product Hunt ranking
- If in top 5: tweet about it, post in LinkedIn comments
- Respond to all remaining PH comments

**6:00 PM PST** — Twitter/X follow-up
- Quote-tweet or reply to your thread with a notable comment/reaction you received
- Thank early supporters publicly

### Launch Day Monitoring
- Check Google Analytics real-time every 30 min
- Track HN comment thread — respond thoughtfully to skeptics
- Track Reddit comment threads — do not get defensive
- Log all inbound links/mentions in a sheet

---

## Phase 3: Week 1 Post-Launch Actions

### Day 2–3
- [ ] Send follow-up to anyone who commented meaningfully on HN or Reddit — DM or reply
- [ ] Post a "Day 1 numbers" tweet/update (honest, humble — "X families downloaded Module 1")
- [ ] Submit to educational directories: OER Commons, Curriki, TeachersPayTeachers (free listing), Common Sense Education
- [ ] Post to r/edtech and r/MachineLearning if not already done
- [ ] Email the top 10 homeschool bloggers (see outreach-homeschool.md) with personal note

### Day 4–5
- [ ] Post second Twitter thread — "What students actually build" or "The 7 projects in our curriculum"
- [ ] LinkedIn: publish a long-form article version of the HN post (repurpose content)
- [ ] Post in 5 more Facebook homeschool groups
- [ ] Reach out to 3–5 education journalists (see outreach-policy.md) with a press pitch

### Day 6–7
- [ ] Week 1 analytics review (see success metrics below)
- [ ] Identify highest-traffic source — double down next week
- [ ] Document any broken links or UX issues found via user feedback
- [ ] Thank-you post on social: highlight early adopters, share a student quote or teacher reaction
- [ ] Start scheduling week 2 content (blog post, second email, more group posts)

---

## Channel Strategy

### Reddit
**Key subreddits:** r/homeschool, r/Teachers, r/AIEducation, r/edtech, r/MachineLearning, r/learnmachinelearning

**Rules:**
- Never post the same title/body to multiple subreddits. Rewrite each post natively.
- Always add genuine value to the community; lead with the problem you solve, not the product.
- Engage with every comment in first 2 hours — early engagement drives ranking.
- Don't delete posts if they get criticism — respond thoughtfully.
- Check each subreddit's rules before posting (link posts vs. text posts vary).

**r/homeschool:** Text post preferred. Lead with "built this for my kid, sharing in case useful" framing. 300 words max.

**r/Teachers:** Emphasize no-prep, ready-to-use, free. Teachers are busy. Respect their time.

**r/AIEducation:** More technical audience OK. Link to GitHub, talk about open source model.

### Twitter/X
- Thread format (5–7 tweets) outperforms single posts for launch content.
- Post between 9–11 AM PT on a weekday.
- Use 2–3 relevant hashtags max: #AIEducation #EdTech #Homeschool — don't stuff.
- Engage with replies for first 3 hours.
- Follow relevant educators, AI researchers, and homeschool parents — build the audience.

### LinkedIn
- Personal post from founder/team member > company page for launch.
- Long-form narrative performs well (tell the story of why you built it).
- Tag collaborators, not random influencers.
- Post at 8–10 AM on Tuesday–Thursday for best reach.
- Respond to all comments within 24 hours.

### Hacker News (Show HN)
- "Show HN: Free, open AI curriculum for middle school kids" format.
- Be transparent about what it is and isn't.
- HN audience values: technical credibility, open source, non-commercial framing.
- Acknowledge tradeoffs — HN punishes spin.
- Respond to every comment. Critical comments are the most valuable.

### Product Hunt
- Launch at 12:01 AM PST (midnight Pacific) for maximum voting window.
- Engage in comments all day.
- Ask supporters NOT to use fake accounts or bulk upvote (PH detects and kills launches).
- Link from PH to your best landing page, not the homepage.
- Your maker comment should be personal — why you built it.

### Homeschool Facebook Groups
- Most groups require introduction before posting. Read the rules.
- Personal framing wins: "I'm a [parent/teacher] and built this..."
- No coupon codes, no hard sell — homeschool groups are tight-knit communities.
- Offer to answer questions in comments, not in DMs (builds trust publicly).
- Post at 7–9 PM local time when parents are online.

---

## Success Metrics — Launch Week

### Primary KPIs
| Metric | Target (Week 1) | How to Measure |
|--------|-----------------|----------------|
| Unique visitors | 2,000+ | GA4 |
| PDF downloads (any) | 500+ | GA4 pdf_download events |
| Homeschool guide downloads | 200+ | GA4 pdf_download_homeschool_guide |
| Module 1 downloads | 150+ | GA4 pdf_download_module1 |
| Email list signups | 100+ | ESP dashboard |
| GitHub stars | 50+ | GitHub |
| HN upvotes | 50+ (top 10 Show HN) | HN |
| Product Hunt upvotes | 100+ | Product Hunt |

### Secondary KPIs
| Metric | Target | How to Measure |
|--------|--------|----------------|
| Reddit post upvotes | 100+ per post | Reddit |
| Avg. time on page (curriculum) | >2 min | GA4 |
| Bounce rate (homeschool page) | <60% | GA4 |
| Return visitors (Week 1) | >10% of total | GA4 |
| Contact form submissions | 5+ | GA4 + email |

### Quality Signals
- Teacher/educator comments describing how they'll use it
- Homeschool parent shares to another group
- Any journalist or blogger picks it up unprompted
- Inbound email from school district or curriculum director
- GitHub fork or issue filed by external contributor

### What Would Make This Launch a Win
**Good:** 500+ PDF downloads, 100 email signups, some Reddit traction
**Great:** 2,000+ visitors, 1,000+ downloads, HN top 5 Show HN, Product Hunt top 10
**Exceptional:** Education journalist pickup, school district inbound, 5,000+ visitors

---

*Last updated: 2026-03-21 | Owner: launch-plan.md*
