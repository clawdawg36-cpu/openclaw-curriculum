# Accessibility Notes: Welcome to OpenClaw Tutorial
**Module 1 — Online Tutorial**
**Standard:** WCAG 2.1 AA compliance target

---

## 1. Caption Guidelines

### Format & Timing
- **Format:** WebVTT (`.vtt`) for web delivery; SRT (`.srt`) as fallback for video players
- **Max characters per line:** 42 characters (two lines max per caption block)
- **Display duration:** Minimum 1.0 second; maximum 7.0 seconds per caption
- **Reading speed:** ≤17 characters per second (comfortable reading pace)
- **Timing offset:** Captions should appear 0–100ms after speech begins; never before

### Content Standards
- Transcribe all spoken narration verbatim — do not paraphrase
- Include **[pause]** markers for deliberate silences longer than 3 seconds
- Mark non-speech audio events that carry meaning:
  - `[upbeat intro music]`
  - `[soft keyboard typing sounds]`
  - `[transition sound]`
- Do **not** caption background music unless it has informational value
- Spell out abbreviations on first use: "Social Security Number (SSN)"

### Speaker identification
- This tutorial uses a single narrator; no speaker ID tags needed unless a second voice is added in future versions
- If a second voice is added: `[Narrator]:` and `[Demo User]:` prefix style

### Sample VTT block:
```
WEBVTT

00:00:00.000 --> 00:00:05.500
Hey, welcome. If you've ever wished you had
a smart, always-available assistant—

00:00:05.500 --> 00:00:09.000
that's exactly what we're building
together here.
```

---

## 2. Alt Text for All Visuals

### General alt text principles
- Describe the *function* of the visual, not just its appearance
- Include all on-screen text that's part of the image (not separately captioned)
- Keep alt text under 125 characters where possible; use `longdesc` for complex diagrams
- For decorative elements (logo animations, transitions): use `alt=""` (empty alt)

### Scene-by-scene alt text

**Scene 01 — Logo & Title Card**
> `alt="OpenClaw logo on dark background. Text reads: Welcome to OpenClaw — Your AI assistant, done right. Module 1: Getting Started."`

**Scene 02 — OpenClaw Interface + Diagram**
> `alt="OpenClaw app interface showing sidebar, chat area, and settings icon. A diagram compares local-first setup (Your Device ↔ OpenClaw) versus cloud service (You → Cloud → ??? )."`

**Scene 03 — Prompt Comparison Card**
> `alt="Two-column comparison. Left column labeled with a red X: 'Write me an email'. Right column labeled with a green checkmark: 'Write me a short, professional email to my landlord asking for a rent extension due to medical bills'. Caption: More context equals better answers."`

**Scene 04 — Category Grid**
> `alt="Five-category grid. Row 1: Research and Learning (magnifying glass icon). Row 2: Writing and Editing (pencil icon). Row 3: Planning and Productivity (calendar icon). Row 4: Coding and Tech (laptop icon). Row 5: Creative Work (paint brush icon). All categories shown in equal-sized tiles with light background."`

**Scene 05 — Privacy Shield / "Never Share" List**
> `alt="Amber shield icon above a list titled Keep These Private. Four items each marked with a red X: Social Security and ID numbers; Passwords and PINs; Credit card and bank account numbers; Other people's private information. Footer reads: If you wouldn't text it to a stranger, don't type it here."`

**Scene 06 — Safe Prompts Panel**
> `alt="Green-tinted panel titled Safe and Smart. Four items each marked with a green checkmark: General questions; Your own ideas and writing; Anonymized scenarios; Planning without private details. Side-by-side example: red X on 'Paste confidential report'; green checkmark on 'Help me structure a performance review'."`

**Scene 07 — Hallucination Example**
> `alt="AI chat response with a citation highlighted in amber. Callout bubble reads: Always verify this. Overlay text reads: AI can hallucinate — confidently stating incorrect information."`

**Scene 08 — Evaluation Checklist**
> `alt="Five-item checklist card titled Critical Evaluation Checklist. Items: 1. Does it sound right? Trust your gut. 2. Can you verify it? Cross-check facts. 3. Is it relevant to your situation? 4. Did it answer what you actually asked? 5. If unsure, ask a follow-up. Each item has an animated checkmark. Footer reads: For medical, legal, or financial matters, always consult a professional."`

**Scene 09 — Live Demo + Tips Card**
> `alt="OpenClaw chat window showing typed prompt: I have a free weekend in late March and I'm based in Los Angeles. I love hiking and good food. Suggest a 2-day trip itinerary. Response visible below with callout: Review: real places? Answers the question? Five Quick Tips card in corner."`

**Scene 10 — Wrap-Up / Module Map**
> `alt="Module progress map showing three modules. Module 1 Welcome to OpenClaw marked complete with a checkmark. Module 2 Writing Prompts That Actually Work shown as next step. Module 3 Privacy Deep Dive shown as upcoming. Call to action text: Open OpenClaw and ask your first question."`

---

## 3. Color Contrast Notes

### Minimum contrast ratios (WCAG 2.1 AA)
- **Normal text (< 18pt / < 14pt bold):** 4.5:1 minimum
- **Large text (≥ 18pt / ≥ 14pt bold):** 3:1 minimum
- **UI components and graphical elements:** 3:1 minimum against adjacent colors
- **Focus indicators:** 3:1 minimum

### Approved color combinations used in this tutorial

| Element | Foreground | Background | Ratio | Pass/Fail |
|---------|------------|------------|-------|-----------|
| Body text on dark bg | `#FFFFFF` white | `#1A1A2E` dark navy | 18.1:1 | ✅ AAA |
| Body text on light bg | `#1A1A2E` dark navy | `#F5F5F5` off-white | 16.2:1 | ✅ AAA |
| Callout text | `#1A1A2E` dark navy | `#FFF3CD` amber tint | 11.8:1 | ✅ AAA |
| "Never share" list | `#B22222` dark red | `#FFF8F8` near-white | 5.6:1 | ✅ AA |
| "Safe" list | `#155724` dark green | `#D4EDDA` light green | 5.2:1 | ✅ AA |
| CTA button text | `#FFFFFF` white | `#0066CC` blue | 4.6:1 | ✅ AA |
| Caption text | `#FFFFFF` white | `#000000` black (caption bar) | 21:1 | ✅ AAA |

### Colors to avoid
- ❌ Red/green color pairs without additional differentiation (use icons + labels)
- ❌ Light grey text on white backgrounds (fails at any size)
- ❌ Yellow text on white backgrounds
- ❌ Relying solely on color to convey meaning (e.g., "the red items are bad") — always pair with text labels or icons

### Scene-specific notes

**Scene 05 (Privacy — Never Share):**
The ❌ icon and amber shield provide redundant visual coding beyond color alone. The word "Private" appears in the section header to ensure color-blind users receive the message.

**Scene 06 (Safe Prompts):**
Green panel paired with ✅ checkmarks and explicit "Safe & Smart" label. Do not rely on green color alone to convey safety — the icons and text label are required.

**Scene 07 (Hallucination Example):**
Amber highlight on the fake citation must have sufficient contrast against the chat bubble background. If chat bubbles are light grey (`#F0F0F0`), the amber highlight (`#FFC107`) achieves 2.1:1 — **insufficient for AA.** Use a darker amber (`#E65100`) or add a border/underline for the callout.

**Recommendation for Scene 07:** Use underline + callout arrow instead of background highlight to avoid color-contrast issues entirely.

---

## 4. Additional Accessibility Considerations

### Motion and animation
- All animated transitions (fade, slide, zoom) should complete within 500ms
- Provide a **reduced-motion version** of the video or subtitle the animations in the transcript if users report vestibular issues
- Avoid flashing content: no more than 3 flashes per second (WCAG 2.3.1)
- The logo pulse animation in Scene 01 should be subtle — max 1 cycle per 2 seconds

### Font and typography
- **Minimum on-screen text size:** 24pt at 1080p output resolution
- **Recommended font:** System sans-serif stack (SF Pro, Segoe UI, Roboto) for screen readability
- **Avoid:** Decorative or script fonts for any instructional text
- **Line spacing:** Minimum 1.4× for multi-line on-screen text blocks

### Audio description
- The narration in this tutorial is closely synchronized with on-screen action — standard captions are sufficient
- If a standalone audio-description track is requested (for visually impaired learners), the following scenes require extended description:
  - **Scene 02:** Describe the UI layout in detail ("The left sidebar contains…")
  - **Scene 03:** Read the prompt comparison text aloud fully
  - **Scene 09:** Read the live-typed prompt and response excerpt

### Transcript
- A full plain-text transcript should be published alongside the video
- Transcript should describe visual elements not covered by narration (e.g., "A comparison diagram appears showing…")
- Transcript file: `transcript.md` (to be created post-recording)

### Language and reading level
- Target reading/listening level: Grade 8–10 (Flesch-Kincaid)
- Avoid jargon without immediate plain-English definition
- Key technical terms defined on first use: "hallucinate," "local-first," "language model"

---

*Last updated: Module 1 draft — pre-production*
*Owner: ClawDawg / OpenClaw Curriculum Team*
*Review cycle: Before each recording session and after any script changes*
