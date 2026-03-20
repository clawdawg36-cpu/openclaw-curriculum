# Accessibility Notes: AI and Society Tutorial
**Module 6, Tutorial A — Online Tutorial**
**Standard:** WCAG 2.1 AA compliance target
**Content sensitivity:** This tutorial covers topics related to systemic discrimination. Language and framing should be carefully reviewed for impact on learners from affected communities.

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
- Mark deliberate pauses longer than 3 seconds: `[pause]`
- Mark non-speech audio with informational value:
  - `[keyboard typing sounds]`
  - `[hold music]`
  - `[ambient city sounds]`
  - `[soft music swell]`
- Spell out abbreviations on first use: "Applicant Tracking System (ATS)"
- Proper names of organizations (Algorithmic Justice League, AI Now Institute) should be captioned exactly as spoken

### Sensitivity note
- At no point do captions or transcripts use language that pathologizes or blames affected communities
- Review captions with a community member from a group discussed in the content before publishing

### Sample VTT block:
```
WEBVTT

00:00:00.000 --> 00:00:06.000
Meet Jordan. Jordan just graduated from college
with a degree in marketing,

00:00:06.000 --> 00:00:10.500
a solid GPA, and two internships
on their résumé.
```

---

## 2. Alt Text for All Visuals

### General principles
- Describe the *function* of the visual, not just its appearance
- Include all on-screen text that carries meaning
- Alt text under 125 characters where possible; use `longdesc` for complex diagrams (flowcharts, network diagrams)
- Decorative transitions: `alt=""` (empty alt)
- All charts and data visualizations require a text alternative with equivalent information

### Scene-by-scene alt text

**Scene 01 — Jordan's World**
> `alt="Illustrated portrait of Jordan, a gender-neutral young adult in their early 20s, sitting at a desk with a laptop and a stack of printed résumés. Text overlay: 47 Applications. 3 Weeks."`

**Scene 02 — The Silence**
> `alt="Split screen. Left: email inbox showing mostly empty folders. Right: animated counter. 47 applications sent, 16 responses received, 31 shown as hollow grey circles labeled as no response."`

**Scene 03 — Who Builds AI? (Globe + Chart)**
> `alt="World map with bright dots over San Francisco, Seattle, New York, London, and Beijing labeled Most AI R&D happens here. Below, a bar chart titled Who Works in AI? showing approximately 80 percent male, 75 percent holding advanced degrees, and low representation of first-generation college students. Caption: Who builds a system shapes what it sees as normal."`

> **longdesc:** "The bar chart shows three categories. Gender breakdown: approximately 80% identify as male, 20% as other genders, based on published AI workforce survey estimates. Education: approximately 75% hold a graduate degree. First-generation college students: a small unlabeled segment at the base of the bar, annotated as 'underrepresented.' Figures are approximate industry averages from published surveys, cited in transcript."

**Scene 04 — ATS Pipeline Flowchart**
> `alt="Animated flowchart showing Jordan's résumé entering an Applicant Tracking System pipeline. Five steps labeled: Submit, Parse, Score, Filter, and maybe Human Review. Jordan's résumé is assigned a score of 34 out of 100, falls below a red threshold line at 60, and is dropped into a rejected pile. A second résumé scores 72 and advances to human review with a green checkmark."`

> **longdesc:** "The flowchart shows two parallel paths. Path 1 (Jordan): Résumé submitted → ATS parses document → keywords extracted (highlighted: marketing, campaign, analytics) → score of 34 assigned → score compared to threshold of 60 → résumé dropped into rejected pile labeled 'no human review.' Path 2 (other candidate): identical steps → score of 72 → passes threshold → advances to 'human review' with a green checkmark. Statistic overlay: 98% of Fortune 500 companies use ATS systems."

**Scene 05 — Historical Data Bias**
> `alt="Two-panel diagram. Left panel labeled Historical hiring data shows a stack of résumés dated 2005 to 2020. Right panel labeled What the model learned shows arrows connecting schools and neighborhoods to hired or not hired outcomes. Caption: Biased past equals biased future."`

**Scene 06 — Proxies and Feedback Loops**
> `alt="Three-panel infographic. Panel 1: Venn diagram showing zip code overlapping with race, and college name overlapping with class, labeled proxy variables. Panel 2: Text card about Amazon's AI hiring screener that downgraded résumés containing the word women's, citing a 2018 reported case. Panel 3: Circular arrow diagram labeled feedback loop showing biased decision leading to no hire leading to missing success data leading back to reinforced bias."`

**Scene 07 — Black Box and Barriers**
> `alt="Animated sequence. Jordan calls HR, gets an automated message. Jordan sends an email, receives a canned reply reading high volume, can't provide feedback. Then a dark cube labeled Proprietary algorithm with résumés entering and scores exiting but the interior hidden. Four bullet points appear: No disclosure that AI was used. No criteria shared. No appeal process. No legal requirement to explain."`

**Scene 08 — Accountability Grid**
> `alt="Four-quadrant grid titled Paths to Accountability. Top left: Algorithmic Audits showing a magnifying glass over code, labeled NYC Local Law 144 2023 requires employers to audit and disclose AI hiring bias. Top right: Regulation showing a gavel, labeled EU AI Act 2024 classifies employment AI as high risk. Bottom left: Litigation showing scales of justice, labeled class actions filed in hiring, facial recognition, and lending. Bottom right: Advocacy showing diverse people with a megaphone, labeled Algorithmic Justice League and AI Now Institute. Footer: Accountability requires all of these."`

**Scene 09 — City Network Diagram**
> `alt="Aerial illustration of a city with a network diagram overlaid. Nodes labeled Hiring, Lending, Housing, Healthcare, Education, and Criminal Justice are connected by animated lines. Caption: One biased model times thousands of employers equals millions of people affected. Key text: AI does not erase historical injustice. It automates it."`

**Scene 10 — Jordan's Next Move**
> `alt="Illustration of Jordan at a library or coffee shop, laptop open showing a webpage titled Know Your Rights: AI in Hiring. A friend sits nearby making a phone call. Caption: The referral worked. The system still did not."`

**Scene 11 — What You Can Do Card**
> `alt="Five-item card titled What YOU Can Do. Item 1 brain icon: Learn the landscape. AI is making decisions about you. Know where. Item 2 question mark icon: Ask questions. Was AI involved? What are your rights? Item 3 megaphone icon: Support accountability. Back transparency laws and advocacy organizations. Item 4 wrench icon: Build differently. If you work in tech, audit, explain, include affected communities. Item 5 magnifying glass icon: Stay curious. This field moves fast. Informed citizens are the check. Footer: You do not have to be an engineer to demand better."`

**Scene 12 — Closing Card**
> `alt="Module 6 progress map. Tutorial A AI and Society marked complete with a checkmark. Tutorial B What Is Algorithmic Bias shown as next step. Text: The algorithm does not have to be the last word."`

---

## 3. Color Contrast Notes

### Minimum contrast ratios (WCAG 2.1 AA)
- **Normal text (< 18pt / < 14pt bold):** 4.5:1 minimum
- **Large text (≥ 18pt / ≥ 14pt bold):** 3:1 minimum
- **UI components and graphics:** 3:1 minimum
- **Focus indicators:** 3:1 minimum

### Approved color combinations

| Element | Foreground | Background | Ratio | Pass/Fail |
|---------|------------|------------|-------|-----------|
| Body text on dark bg | `#FFFFFF` white | `#1A1A2E` dark navy | 18.1:1 | ✅ AAA |
| Body text on light bg | `#1A1A2E` dark navy | `#F5F5F5` off-white | 16.2:1 | ✅ AAA |
| Section callouts | `#1A1A2E` dark navy | `#EAF4FB` pale blue | 13.1:1 | ✅ AAA |
| Warning/barrier list | `#B22222` dark red | `#FFF8F8` near-white | 5.6:1 | ✅ AA |
| Accountability grid | `#155724` dark green | `#D4EDDA` light green | 5.2:1 | ✅ AA |
| CTA button text | `#FFFFFF` white | `#0066CC` blue | 4.6:1 | ✅ AA |
| Caption text | `#FFFFFF` white | `#000000` black (bar) | 21:1 | ✅ AAA |
| Jordan character label | `#FFFFFF` white | `#4A4A6A` muted purple | 6.8:1 | ✅ AA |

### Color-blind considerations
- ❌ Red/green pairs without additional coding — always pair with icons AND text labels
- All pipeline steps (Scene 04) use shape differentiation in addition to color (✅ circle for pass, ❌ hexagon for reject)
- The black box graphic (Scene 07) uses texture + border in addition to color fill
- Feedback loop arrows (Scene 06) use dashed vs. solid lines to differentiate direction, not color alone

### Scene-specific notes

**Scene 03 (Demographic chart):**
Bar segments must meet contrast with the white chart background. Use `#2A5699` (blue) and `#8B3E72` (mauve) — both pass at 4.5:1 or better against white.

**Scene 08 (Accountability grid):**
Each quadrant uses a distinct background tint — all must pass contrast check against the text color used within. Pre-test all four combinations before production.

**Scene 09 (Network diagram):**
City illustration is a background — do not rely on the city colors to convey information. All data is in the overlay nodes, which must maintain 4.5:1 against the overlay panel background.

---

## 4. Content-Specific Accessibility Considerations

### Emotional content and trigger considerations
- This tutorial discusses hiring discrimination and systemic inequality — topics that may be emotionally resonant for learners from affected communities
- Include a brief content note at the start (visible in the video thumbnail or pre-roll card): "This video discusses AI systems and their impact on hiring, including bias and discrimination."
- Do not add a traumatizing framing — this is informational, not gratuitous

### Jordan as a character
- Jordan uses they/them pronouns throughout — narration and captions must be consistent
- Visual design of Jordan should be reviewed to avoid defaulting to any single race, gender, or disability presentation
- Suggested: show Jordan with a subtle ambiguity that invites learner identification, not a specific demographic coding

### Reading level
- Target: Grade 9–11 (Flesch-Kincaid) — slightly higher than Module 1 due to content complexity
- Technical terms defined on first use: "Applicant Tracking System (ATS)," "proxy variable," "feedback loop," "algorithmic audit"
- Avoid using "minority" as a noun; use specific group names or "people from underrepresented communities"

### Audio description
Scenes requiring extended audio description (for visually impaired learners):

- **Scene 03:** Describe bar chart data in full: "A bar chart shows the gender breakdown of AI workers: approximately 80% identify as male, 20% other genders. Education: approximately 75% hold graduate degrees. First-generation college students are a small segment at the base, labeled underrepresented."
- **Scene 04:** Read the ATS pipeline labels aloud in narration — this is already in the script; confirm audio matches graphic
- **Scene 06:** Describe the feedback loop diagram: "A circular arrow diagram showing four stages cycling: biased decision → applicant not hired → no success data from this group → model continues to score similar applicants lower → back to biased decision."
- **Scene 09:** Describe the network: "A city skyline with six labeled nodes connected by lines: Hiring, Lending, Housing, Healthcare, Education, Criminal Justice — showing how AI decisions intersect across all major life domains."

### Transcript
- Full plain-text transcript required, published alongside the video
- Transcript must include descriptions of all non-narrated visual elements
- Transcript should link to sources for all statistics cited
- File: `transcript.md` (to be created post-recording)

### Pacing and cognitive load
- This is the most content-dense tutorial in Module 6 — 8 minutes is appropriate
- Sections are structured so learners can pause between major topics (each section ends on a visual callout, not mid-thought)
- Discussion questions or a brief quiz should be offered post-video to reinforce retention

---

*Last updated: Module 6 draft — pre-production*
*Owner: ClawDawg / OpenClaw Curriculum Team*
*Review cycle: Before each recording session; after any script changes; with community review before publication*
