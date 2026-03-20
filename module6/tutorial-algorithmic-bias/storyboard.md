# Storyboard: What Is Algorithmic Bias?
**Module 6, Tutorial B — Online Tutorial**
**Format:** ~8 scenes across ~5 minutes
**Layout:** Each scene includes timestamp, narration excerpt, visual description, on-screen text/callouts, and production cues.

---

## Scene 01 — [00:00–00:15] Opening Hook: Two Identical Résumés

**Narration excerpt:**
> "Quick question: what's bias?"

**Visual description:**
Two nearly identical résumé icons side by side on screen. Same layout, same length, same general qualifications visible. One gets a green ✅ stamp. The other gets a ❌ stamp. The stamping happens without any visible human reviewer — automated, mechanical.

**On-screen text/callouts:**
- No title yet — let the visual ask the question
- Subtle text below stamps: "Same qualifications. Different outcome."

**Production cues:**
- Open cold — no intro music until after the first beat
- Stamping animation should feel robotic, impersonal
- Hold on the visual for 2–3 seconds after the stamps appear

**Transition:** Narrator begins "Bias is when…" — slide in definition card

---

## Scene 02 — [00:15–00:30] Defining Bias

**Narration excerpt:**
> "Bias is when something gets treated differently — not because of what it actually is, but because of assumptions baked into the system."

**Visual description:**
Three quick visual metaphors animate in sequence:
1. A coin flip: coin always lands heads (biased coin — labeled)
2. A judge's scale: always tipping one direction (biased judge — labeled)
3. Algorithm icon: always scoring certain profiles lower (biased algorithm — labeled)

**On-screen text/callouts:**
- Definition box: "Algorithmic Bias: When a computer system treats people differently in unfair ways."
- Each metaphor labeled as it appears: "Biased coin," "Biased judge," "Biased algorithm"

**Production cues:**
- Fast, clean animation — three beats in ~10 seconds
- Use consistent icon style across all three metaphors
- Definition box stays on screen through Scene 03 transition

**Transition:** Zoom in on "biased algorithm" icon → morphs into pipeline graphic

---

## Scene 03 — [00:30–01:30] How Bias Gets Into AI

**Narration excerpt:**
> "If the examples you learn from are biased… the AI learns those patterns too. It doesn't know the difference between 'this person is skilled' and 'this person looks like the people who historically got hired.'"

**Visual description:**
Animated pipeline in three stages:
1. **Examples in:** Stack of historical résumés with a "Past Hires" label → fed into machine/model icon
2. **Pattern extracted:** Model icon displays output: "Pattern learned: [certain traits] = hired"
3. **Decisions out:** New résumés enter → model stamps them → some ✅, some ❌ — based on the learned pattern

Overlay shows a subtle problem: the "Past Hires" stack has a hidden skew — a small info-icon that, when narrator mentions bias, expands to show the imbalance.

**On-screen text/callouts:**
- Stage labels: "Historical data in" → "Pattern extracted" → "Decisions out"
- Callout (appears at stage 3): "Same bad logic. Applied to everyone. At scale."
- Bottom: "Biased examples in → Biased decisions out."

**Production cues:**
- Pipeline should move left to right — reads naturally
- The "hidden skew" icon should be subtle until the reveal — don't telegraph it
- "At scale" text should pulse slightly to emphasize magnitude

**Transition:** Wipe to Amazon graphic

---

## Scene 04 — [01:30–02:15] Amazon Case Study — Setup

**Narration excerpt:**
> "In 2014, Amazon built an AI system to help screen job applicants. The idea was simple: feed it thousands of résumés, it learns what 'good' looks like, it scores new applicants…"

**Visual description:**
Stylized graphic: Amazon-style "A to Z" arrow logo (or neutral "Tech Company A" if preferred for copyright reasons), with a timeline: 2014 → AI screener built. Below: animated illustration of the intake process — thousands of résumé icons flowing into a funnel, a smaller number emerging with scores.

**On-screen text/callouts:**
- Timeline label: "2014: AI Hiring Screener Built"
- Funnel label: "Thousands of résumés in → Scored candidates out"
- Info callout: "Trained on 10 years of historical hiring data"
- Subtle note: "Amazon tech workforce: historically ~80% male at time of training"

**Production cues:**
- Keep Amazon name — it's a public, well-documented case study
- Add small source note: "(Reuters, 2018)" in lower corner
- Tone should be neutral/educational — not sensationalist

**Transition:** Continue timeline to 2018 reveal

---

## Scene 05 — [02:15–03:00] Amazon Case Study — The Discovery

**Narration excerpt:**
> "The system started penalizing résumés that contained the word 'women's.' As in: 'captain of the women's chess club.' The model didn't know it was doing anything wrong. It just learned that 'women's' appeared more often in résumés that — historically — didn't lead to a hire."

**Visual description:**
Close-up on a stylized résumé. The word "women's" is highlighted in a résumé line item: "Captain, Women's Chess Club." A robotic arm (algorithm) scans the résumé — highlights the word, score drops visibly on a gauge. The score drops from 65 to 42. ❌ Filtered out.

Then: a second résumé — identical except "Captain, Chess Club" (no "women's"). Same robotic arm. Score stays at 65. ✅ Advances.

**On-screen text/callouts:**
- Highlighted word: "women's" (amber highlight — meets contrast, see accessibility-notes.md)
- Score gauge labels: "Before: 65 → After: 42 (penalized)"
- Callout: "The model wasn't told to penalize women. It learned the pattern on its own."
- Year label: "2018: Amazon engineers discover the problem and scrap the tool."

**Production cues:**
- The score drop should be visceral but not dramatic — this isn't a horror scene, it's a cautionary one
- Show both résumés simultaneously for comparison to make the discrimination obvious
- End scene on: "Scrapped in 2018. But how many had already been filtered out?"

**Transition:** Slide to proxy variable explainer

---

## Scene 06 — [03:00–04:00] Proxy Variables — The Treasure Map

**Narration excerpt:**
> "Imagine you want to find buried treasure. You don't have a direct map. But you know treasure is usually buried near old oak trees. So you use oak trees as a proxy — a stand-in — for where to dig."

**Visual description:**
Animated treasure map sequence:
1. Treasure chest visible underground (goal: can't measure directly)
2. Oak trees on the surface (proxy: can observe/measure)
3. Adventurer uses oak tree locations to decide where to dig

Then: parallel structure applied to AI:
1. "Is this applicant competent?" (goal: can't measure directly)
2. "Did they use the word 'women's'?" (proxy: observable)
3. Algorithm uses the proxy → unfair outcome

Second real-world example:
- Zip code → proxy for race (due to housing segregation history)
- Loan algorithm uses zip code → racially disparate outcomes

**On-screen text/callouts:**
- Treasure map callout: "Proxy = a stand-in measurement"
- Definition box: "Proxy variable: something you CAN measure, used as a stand-in for something you can't (or shouldn't)"
- Second example label: "Zip code ← proxy for → Race (due to historical housing discrimination)"
- Key insight: "The algorithm doesn't 'know' it's discriminating. It's just following a pattern."

**Production cues:**
- Treasure map: fun, colorful — make this the "lightbulb moment" scene
- Transition from treasure map to AI example should feel like "same idea, different stakes"
- Grade 6 reading level for all on-screen text in this scene
- Test: can a 12-year-old explain proxy variables back after watching this scene?

**Transition:** Music lifts slightly → "What you can do" card

---

## Scene 07 — [04:00–04:45] What YOU Can Do

**Narration excerpt:**
> "Algorithmic bias is not inevitable. And you don't have to be a data scientist to do something about it."

**Visual description:**
Clean action card layout — five items appear one at a time as narrator speaks. Each has a clear icon, a bold short label, and a one-line explanation. Background is energized — slightly warmer palette than earlier scenes.

**On-screen text/callouts:**
- Card title: "What YOU Can Do"
- Items:
  1. 🔍 **Ask who it was trained on** — "Whose data did the AI learn from?"
  2. 📋 **Ask for transparency** — "You can ask if AI was used in a decision about you."
  3. 📢 **Call it out** — "Document it. Tell someone. Say something."
  4. 🌐 **Learn more** — "Algorithmic Justice League and others are fighting this."
  5. 🔧 **Build differently** — "If you go into tech: test for bias, include affected communities."
- Footer: "You have a role in this."

**Production cues:**
- Each item gets 7–8 seconds — pace this so it doesn't rush
- Icons: consistent line-art style with one accent color per item (accessible; see accessibility-notes.md)
- End on footer — hold for 3 seconds before transition

**Transition:** Fade to closing card

---

## Scene 08 — [04:45–05:00] Closing

**Narration excerpt:**
> "Algorithmic bias is not inevitable. You have a role in fighting it."

**Visual description:**
Clean closing card. Title: "What Is Algorithmic Bias?" in bold. Below: a simplified summary of the key ideas. Module progress indicator shows Tutorial B complete.

**On-screen text/callouts:**
- Closing summary (small text):
  - Algorithmic bias: when AI treats people unfairly based on historical patterns
  - Proxy variables: hidden stand-ins that smuggle bias into decisions
  - Amazon case: real, documented, scrapped — but not the last time
  - Your role: ask, call out, learn, build better
- Module map:
  - ✅ Tutorial A: AI and Society
  - ✅ Tutorial B: What Is Algorithmic Bias? ← *You are here*
- CTA: "Continue to Module 6 Discussion →"

**Production cues:**
- Close with same visual energy as the action card scene — empowered, not defeated
- CTA should be clearly actionable — not just text

---

## Storyboard Summary

| Scene | Timestamp | Topic | Key Visual |
|-------|-----------|-------|------------|
| 01 | 00:00–00:15 | Opening Hook | Two résumés, automated stamps |
| 02 | 00:15–00:30 | Defining Bias | Three metaphors: coin, judge, algorithm |
| 03 | 00:30–01:30 | How Bias Gets In | Left-to-right pipeline animation |
| 04 | 01:30–02:15 | Amazon Setup | Timeline + résumé funnel |
| 05 | 02:15–03:00 | Amazon Discovery | Score gauge drop + side-by-side résumés |
| 06 | 03:00–04:00 | Proxy Variables | Treasure map + real-world parallel |
| 07 | 04:00–04:45 | What You Can Do | Five-item action card |
| 08 | 04:45–05:00 | Closing | Summary card + module map |

---

**Production notes:**
- This tutorial is designed to be lively and approachable — pacing should be faster than Tutorial A
- Scene 06 (proxy variables / treasure map) is the pedagogical heart — spend extra time on clarity here
- All Amazon claims are based on publicly reported information — cite source in transcript
- Screen recordings at 1920×1080 minimum; all graphics at 2× resolution for Retina displays
- Text overlays: minimum 24pt; see accessibility-notes.md for all contrast requirements
