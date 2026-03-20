# Accessibility Notes: What Is Algorithmic Bias? Tutorial
**Module 6, Tutorial B — Online Tutorial**
**Standard:** WCAG 2.1 AA compliance target
**Content note:** This tutorial discusses algorithmic discrimination in hiring. Includes a real-world case study (Amazon, 2018). Language is designed to be informative and empowering.

---

## 1. Caption Guidelines

### Format & Timing
- **Format:** WebVTT (`.vtt`) for web delivery; SRT (`.srt`) as fallback
- **Max characters per line:** 42 characters (two lines max per caption block)
- **Display duration:** Minimum 1.0 second; maximum 7.0 seconds per caption
- **Reading speed:** ≤17 characters per second
- **Timing offset:** Captions appear 0–100ms after speech begins; never before

### Content Standards
- Transcribe all spoken narration verbatim — do not paraphrase
- Include `[pause]` markers for deliberate silences longer than 3 seconds
- Mark non-speech audio with informational value:
  - `[automated stamping sound]`
  - `[soft upbeat music begins]`
  - `[score gauge drops — sound effect]`
- Spell out abbreviations and define technical terms on first use
- "Amazon" should be captioned by name — do not replace with "a tech company" in captions

### Sample VTT block:
```
WEBVTT

00:00:00.000 --> 00:00:04.500
Quick question: what's bias?

00:00:04.500 --> 00:00:10.000
Bias is when something gets treated differently—
not because of what it actually is,

00:00:10.000 --> 00:00:14.000
but because of assumptions
baked into the system.
```

---

## 2. Alt Text for All Visuals

### General principles
- Describe the *function* of the visual, not just its appearance
- Include all on-screen text that carries meaning
- Alt text under 125 characters; use `longdesc` for complex visuals
- Decorative transitions: `alt=""` (empty alt)

### Scene-by-scene alt text

**Scene 01 — Two Identical Résumés**
> `alt="Two résumé icons side by side. Both appear identical in length and layout. A robotic arm stamps the left one with a green checkmark and the right one with a red X. Caption below: Same qualifications. Different outcome."`

**Scene 02 — Defining Bias**
> `alt="Three quick animations. First: a coin flipping and always landing heads, labeled Biased coin. Second: a judge's scale always tipping left, labeled Biased judge. Third: an algorithm icon consistently scoring certain profiles lower, labeled Biased algorithm. Definition box: Algorithmic Bias — When a computer system treats people differently in unfair ways."`

**Scene 03 — AI Bias Pipeline**
> `alt="Three-stage pipeline animation reading left to right. Stage 1 labeled Historical data in: a stack of résumé icons from past hires feeds into a model. Stage 2 labeled Pattern extracted: the model outputs a learned rule such as certain traits equal hired. Stage 3 labeled Decisions out: new résumés enter, some receive green checkmarks and some red X marks. A callout reads: Same bad logic. Applied to everyone. At scale."`

> **longdesc:** "The pipeline flows left to right in three labeled stages. In stage 1, a stack of résumés labeled 'Past Hires (Historical Data)' feeds into a box labeled 'AI Model.' A small information icon on the résumé stack expands when the narrator mentions bias, revealing that the historical stack is skewed — most résumés are from one demographic group. In stage 2, the model outputs a learned pattern. In stage 3, new résumés of various types enter the model — some receive green checkmarks (advance) and others receive red X marks (rejected). The overall callout at the bottom reads: Biased examples in → Biased decisions out."

**Scene 04 — Amazon Case Study Setup**
> `alt="Amazon logo with a timeline showing 2014: AI Hiring Screener Built. Below, thousands of résumé icons funnel downward into a smaller output group of scored candidates. Info callout: Trained on 10 years of historical hiring data. Source note: Reuters, 2018."`

**Scene 05 — Amazon Discovery**
> `alt="Side-by-side résumé comparison. Left résumé: contains the line Captain, Women's Chess Club with the word women's highlighted in amber. An algorithm icon scans the résumé and a score gauge drops from 65 to 42. Red X: filtered out. Right résumé: contains Captain, Chess Club with no gender reference. Same algorithm scan. Score stays at 65. Green checkmark: advances. Caption: The model was not told to penalize women. It learned the pattern on its own. Year label: 2018: Amazon engineers discover the problem and scrap the tool."`

> **longdesc:** "Two résumés are shown side by side with identical formatting and similar qualifications. The key difference: the left résumé contains the phrase 'Captain, Women's Chess Club' with the word 'women's' highlighted in amber. An animated robotic scanner passes over it and a gauge labeled Score drops from 65 to 42. A red X appears. The right résumé contains 'Captain, Chess Club' without the word 'women's.' The scanner passes over it, the score stays at 65, and a green checkmark appears. A callout explains: 'The model was not told to penalize women. It learned the pattern on its own.' The scene ends with the text: '2018: Amazon engineers discover the problem and scrap the tool.'"

**Scene 06 — Proxy Variables (Treasure Map)**
> `alt="Animated treasure map. A treasure chest is shown underground labeled Goal: cannot measure directly. Oak trees are shown on the surface labeled Proxy: can observe and measure. An adventurer uses oak tree locations to decide where to dig. Below, a parallel structure applied to AI: Is this applicant competent? labeled as goal, with Did they use the word women's? labeled as proxy. A second real-world example: zip code as proxy for race due to historical housing discrimination. Definition box: Proxy variable — something you CAN measure, used as a stand-in for something you cannot or should not use directly."`

> **longdesc:** "The scene has two parts. Part 1: Treasure map animation. A treasure chest underground represents the goal (cannot measure directly). Oak trees on the surface represent the proxy (observable). An adventurer sees the oak trees and digs near them. Text: Proxy = a stand-in measurement. Part 2: Parallel structure applied to algorithmic bias. Goal: 'Is this applicant competent?' shown underground. Proxy: 'Did they use the word women's?' shown at surface level. Algorithm uses the proxy and produces an unfair outcome. A second example follows: Zip code is shown as a proxy for race, with an explanatory note: 'Due to decades of segregated housing policies, zip code correlates strongly with race. Algorithms using zip code may produce racially disparate outcomes even without directly using race as a variable.' Definition box: 'Proxy variable: something you CAN measure, used as a stand-in for something you cannot (or should not) use directly.'"

**Scene 07 — What You Can Do**
> `alt="Five-item action card titled What YOU Can Do. Item 1 with magnifying glass icon: Ask who it was trained on — Whose data did the AI learn from? Item 2 with clipboard icon: Ask for transparency — You can ask if AI was used in a decision about you. Item 3 with megaphone icon: Call it out — Document it. Tell someone. Say something. Item 4 with globe icon: Learn more — Algorithmic Justice League and others are fighting this. Item 5 with wrench icon: Build differently — If you go into tech, test for bias and include affected communities. Footer: You have a role in this."`

**Scene 08 — Closing Card**
> `alt="Closing summary card for What Is Algorithmic Bias tutorial. Four summary bullet points: Algorithmic bias is when AI treats people unfairly based on historical patterns. Proxy variables are hidden stand-ins that smuggle bias into decisions. Amazon case was real, documented, and scrapped — but not the last time. Your role: ask, call out, learn, build better. Module progress map shows both Tutorial A and Tutorial B complete. Call to action: Continue to Module 6 Discussion."`

---

## 3. Color Contrast Notes

### Minimum contrast ratios (WCAG 2.1 AA)
- **Normal text (< 18pt / < 14pt bold):** 4.5:1 minimum
- **Large text (≥ 18pt / ≥ 14pt bold):** 3:1 minimum
- **UI components and graphics:** 3:1 minimum

### Approved color combinations

| Element | Foreground | Background | Ratio | Pass/Fail |
|---------|------------|------------|-------|-----------|
| Body text on dark bg | `#FFFFFF` white | `#1A1A2E` dark navy | 18.1:1 | ✅ AAA |
| Body text on light bg | `#1A1A2E` dark navy | `#F5F5F5` off-white | 16.2:1 | ✅ AAA |
| Definition boxes | `#1A1A2E` dark navy | `#EAF4FB` pale blue | 13.1:1 | ✅ AAA |
| Red X stamp | `#B22222` dark red | `#FFFFFF` white | 5.8:1 | ✅ AA |
| Green ✅ stamp | `#155724` dark green | `#FFFFFF` white | 7.2:1 | ✅ AA |
| Amazon résumé highlight | `#E65100` dark amber | `#FFFFFF` white | 4.7:1 | ✅ AA |
| Score gauge drop | `#B22222` dark red | `#F5F5F5` off-white | 5.3:1 | ✅ AA |
| Action card accents | Varies by item — see below | | | |
| Caption text | `#FFFFFF` white | `#000000` black | 21:1 | ✅ AAA |

### Action card item colors (Scene 07)
Each item uses a distinct accent color for its icon background:

| Item | Icon BG | Icon FG | Ratio | Pass/Fail |
|------|---------|---------|-------|-----------|
| Ask who it was trained on | `#005B99` dark blue | `#FFFFFF` | 7.4:1 | ✅ AA |
| Ask for transparency | `#3D6B35` dark green | `#FFFFFF` | 6.1:1 | ✅ AA |
| Call it out | `#8B3E72` dark mauve | `#FFFFFF` | 6.8:1 | ✅ AA |
| Learn more | `#5C4000` dark gold | `#FFFFFF` | 9.1:1 | ✅ AA |
| Build differently | `#004D5E` dark teal | `#FFFFFF` | 8.3:1 | ✅ AA |

### Scene-specific notes

**Scene 01 (Two résumés):**
Red X and Green ✅ stamps must differentiate by more than color alone — use distinct shapes (✅ circle vs. ❌ hexagon or slash shape). Icon shapes apply redundant coding.

**Scene 05 (Amazon résumé, score drop):**
The amber highlight on "women's" uses `#E65100` (dark amber) against a white résumé background — passes at 4.7:1. Do not use standard yellow (`#FFFF00`) — fails AA.

The score gauge uses animation and number change (65 → 42) in addition to color — do not rely on color alone for the "score dropped" message.

**Scene 06 (Treasure map):**
The treasure map may use a parchment-style background. If so, text must use a color with ≥4.5:1 contrast against that parchment. Suggested text: `#3B2200` dark brown on `#F5E6C8` parchment = 7.1:1 ✅.

---

## 4. Additional Accessibility Considerations

### Reading level — proxy variable section (Scene 06)
- This is the most conceptually demanding part of the tutorial
- All on-screen text in Scene 06 must be at ≤6th grade reading level (target: Grade 5–6, Flesch-Kincaid)
- Test draft text with: "Can a typical 12-year-old explain this back to you after one viewing?"
- Avoid: "correlates with," "statistical association," "demographic proxy" — use plain alternatives
- Use: "acts as a stand-in for," "connected to," "used instead of"

### Proxy variable comprehension check
Before final recording, test Scene 06 with learners aged 11–13. Key comprehension questions:
1. "What is a proxy variable in your own words?"
2. "Give me an example of a proxy variable that isn't in the video."
3. "Why is a proxy variable a problem in an AI system?"

If fewer than 70% answer correctly without rereading: revise script and retest.

### Amazon case study — sensitivity note
- The Amazon story involves documented gender discrimination — this may resonate personally with some learners
- Framing is informational and analytical — avoid language that dramatizes or sensationalizes
- Include source attribution (Reuters, 2018) visibly in the video and in the transcript
- Do not imply that Amazon is uniquely bad — note that "most companies using AI hiring tools don't have the resources to audit like that"

### Motion and animation
- Scene 02 (three metaphors) contains rapid sequential animation — ensure no more than 3 transitions per second
- Scene 05 (score gauge drop) should not use a fast flash — gauge should drop over at least 0.5 seconds
- Provide reduced-motion video option or CSS `prefers-reduced-motion` override for web embed

### Audio description
Scenes requiring extended audio description:

- **Scene 03:** "A pipeline diagram shows résumés flowing into an AI model from the left. A small icon on the historical data stack expands to reveal that most past hires came from a narrow demographic group — this is the bias entering the system. On the right, the model's decisions show a mix of accepted and rejected applicants."
- **Scene 05:** "Two résumés appear side by side. The left résumé, belonging to a candidate who used the phrase 'Women's Chess Club,' receives a score of 65 which then drops to 42 when the algorithm scans it, resulting in rejection. The right résumé, using the phrase 'Chess Club' without the word women's, maintains a score of 65 and advances. Both résumés have otherwise identical qualifications."
- **Scene 06:** "A treasure map animation shows a chest buried underground — this represents the goal the algorithm wants to measure. Oak trees on the surface represent the proxy — the stand-in the algorithm actually uses. An adventurer digs near oak trees. Then the same concept is applied to AI: 'Is this person competent?' is buried underground, and 'Did they use the word women's?' is the oak tree on the surface."

### Transcript
- Full plain-text transcript required at publication
- Transcript must include visual element descriptions not covered by narration
- Cite: "Amazon AI Hiring Screener. Reuters, October 2018." in transcript footnote
- File: `transcript.md` (to be created post-recording)

### Language and framing
- Use "people from underrepresented communities" or specific group names — not "minorities"
- Use "unfair outcomes" or "discriminatory patterns" — not "discrimination" in isolation (more precise)
- Empowering close: the final scene explicitly affirms learner agency — do not cut this

---

*Last updated: Module 6 draft — pre-production*
*Owner: ClawDawg / OpenClaw Curriculum Team*
*Review cycle: Before recording; with community review before publication; after any script changes*
