# Accessibility Notes: How to Pitch Your AI Project
**Module 7, Tutorial — Online Tutorial**
**Standard:** WCAG 2.1 AA compliance target
**Content sensitivity:** This tutorial features a student presenting in front of an audience. Ensure the student character is visually inclusive; avoid any implied anxiety or negative framing around public speaking that could alienate learners who experience speech-related challenges.

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
  - `[soft audience murmur]`
  - `[notification sound — agent responds]`
  - `[loading spinner sound]`
  - `[upbeat ambient music]`
- Spell out abbreviations on first use: "Artificial Intelligence (AI)"
- Agent name "Zara" (or curriculum-standard name) should be captioned consistently — do not vary spelling

### Italics and emphasis in captions
- When the script uses *italics* for emphasis, the caption equivalent is ALL CAPS for that word (e.g., "Show, DON'T TELL — every time.")
- Do not use markdown in VTT/SRT files — plain text only

### Sample VTT block:
```
WEBVTT

00:00:00.000 --> 00:00:08.000
Imagine this: you've spent weeks
building something.

00:00:08.000 --> 00:00:14.000
An AI agent with a name,
a personality, real capabilities.

00:00:14.000 --> 00:00:17.000
You made that.
```

---

## 2. Alt Text for All Visuals

### General principles
- Describe the *function* of the visual, not just its appearance
- Include all on-screen text that carries meaning
- Alt text under 125 characters where possible; use `longdesc` for complex diagrams
- Decorative transitions: `alt=""` (empty alt)
- All charts and data visualizations require a text alternative with equivalent information

### Scene-by-scene alt text

**Scene 01 — Opening Stakes**
> `alt="Illustrated gender-neutral middle-school student sitting at a laptop with a glowing screen. Behind them, rows of blurry audience members in warm light. Text fades in: How to Pitch Your AI Project, Module 7 AI Expo Tutorial."`

**Scene 02 — The Structure Overview**
> `alt="Animated horizontal timeline bar divided into four colored segments. Orange: Hook, 0 to 30 seconds. Blue: Build, 30 seconds to 2 minutes 30 seconds. Green: Demo, 2 minutes 30 seconds to 4 minutes 30 seconds. Purple: Reflect, 4 minutes 30 seconds to 5 minutes. Total time labeled: 5 minutes."`

> **longdesc:** "The timeline bar fills in left to right as each segment is named. Each segment displays its name, time range, and a one-line description. Hook: Start with something surprising. Build: Walk through the journey. Demo: Live, real inputs, real outputs. Reflect: Honest assessment of strengths and limits. A callout below reads: This is your structure. Don't improvise your way through it."

**Scene 03 — Show Don't Tell Split-Screen**
> `alt="Split screen comparison. Left side labeled Don't: student presenting a slide deck title slide reading My AI Project: An Overview. Audience appears unengaged. Right side labeled Do: student typing into a live chat interface. Agent responds in real time. Audience leans forward. Right side expands to full screen. Chat shows student asking about Paris weather; agent responds with a summary. Callout: Show, don't tell — every time."`

**Scene 04 — The Build: Module Tracker**
> `alt="Animated module progress tracker showing seven modules with icons. Module 1 chick icon: Name and personality. Module 2 eye icon: Image and audio perception. Module 3 brain icon: Custom knowledge. Module 4 books icon: Trained model. Module 5 microphone icon: Live channel. Module 6 scales icon: Guardrails and ethics. Module 7 graduation cap icon: Presented at Expo. Each icon glows gold as it is named. Below, a speech bubble shows example narration: In Module 1, my agent got a name and a personality, she's called Zara. Callout: The story of why is more interesting than the story of what."`

**Scene 05 — Live Demo Screen Recording**
> `alt="Screen recording of a live agent demo showing three capability moments. First: student holds up a photo of a handwritten math equation; agent identifies the equation and provides a step-by-step solution. Second: student types a question about studying for a science test on ecosystems; agent returns a structured study plan. Third: student sends a message on a blurred chat channel; agent replies in the channel. Capability labels overlay between cuts: Image Understanding, Knowledge Response, Live Channel."`

**Scene 06 — When Live Demos Fail**
> `alt="Three-panel sequence. Panel 1 labeled What can go wrong: laptop screen shows a spinning loading indicator and a red Wi-Fi error icon; presenter looks momentarily frozen. Panel 2 labeled What you prepared: presenter holds a tablet showing a backup video thumbnail labeled Backup Demo Zara recorded yesterday. Panel 3 labeled What you say: presenter plays backup video on projected screen while narrating. Speech bubble: My internet seems to be having trouble, let me show you the backup video I prepared. Callout: Backup plan equals 60-second video plus screenshots plus calm voice."`

**Scene 07 — Reflect: The Honest Part**
> `alt="Student standing at front of room. A thought bubble reads: My agent sometimes gives overconfident answers to questions it doesn't really know. Two side-by-side response cards below. Card labeled Weak reflection: It's pretty good, mostly works fine. Card labeled Strong reflection: Here's one thing I'd fix if I had more time, and here's why I haven't fixed it yet. Callout: Honest reflection equals the most credible part of your pitch."`

**Scene 08 — Tough Q&A Cards**
> `alt="Three animated Q&A cards. Card 1: Question reads What does your agent get wrong? Response guide reads Tell them something real, not the worst thing, but something true. Card 2: Question reads Could someone misuse this? Response guide reads Acknowledge the concern, explain your guardrails, be honest about limits. Card 3: Question reads How does AI actually work? Response guide reads Give your honest answer, including what you still don't fully understand. Footer: You don't have to know everything. You built something real, that's enough."`

**Scene 09 — Closing**
> `alt="Return to opening illustration: gender-neutral student at laptop, audience behind them. Student looks forward, ready. Large text: Hook arrow Build arrow Demo arrow Reflect. Below: You built this. Now show the world. Module map shows Tutorial How to Pitch Your AI Project marked complete with checkmark, followed by Checklist Pre-Expo Technical Checklist and Career Pathways What Comes Next as next steps."`

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
| Timeline — Hook (orange) | `#1A1A2E` dark navy | `#FFDDB0` light orange | 8.3:1 | ✅ AAA |
| Timeline — Build (blue) | `#FFFFFF` white | `#1A5276` deep blue | 9.1:1 | ✅ AAA |
| Timeline — Demo (green) | `#FFFFFF` white | `#1E6B3A` deep green | 7.4:1 | ✅ AAA |
| Timeline — Reflect (purple) | `#FFFFFF` white | `#6C3483` deep purple | 6.8:1 | ✅ AA |
| ✅ Strong card | `#155724` dark green | `#D4EDDA` light green | 5.2:1 | ✅ AA |
| ❌ Weak card | `#721C24` dark red | `#F8D7DA` light pink | 5.9:1 | ✅ AA |
| Q&A question text | `#1A1A2E` dark navy | `#EAF4FB` pale blue | 13.1:1 | ✅ AAA |
| Caption text | `#FFFFFF` white | `#000000` black (bar) | 21:1 | ✅ AAA |

### Color-blind considerations
- Timeline segments (Scene 02): use color AND shape — each segment also has a distinct icon anchor (● Hook, ◆ Build, ▶ Demo, ★ Reflect) so colorblind users can distinguish without color
- ✅ / ❌ cards (Scenes 03, 07): always paired with text labels — never color alone
- Module tracker glow (Scene 04): gold glow is supplemented by a checkmark icon appearing inside each module icon — not color alone
- Split-screen labels (Scene 03): use text labels "Don't" and "Do" with icons (✗ and ✓) in addition to desaturation — not color alone

### Scene-specific notes

**Scene 02 (Timeline bar):**
Each colored segment must pass contrast with both the white background and its own text label. Test all four color/text combinations before production. Avoid any two adjacent colors that read as similar under deuteranopia or protanopia.

**Scene 06 (Backup plan panels):**
Panel tint colors (red/neutral/warm) are supplemental mood cues only — all essential information is conveyed in text labels. Do not rely on panel color to signal meaning.

---

## 4. Content-Specific Accessibility Considerations

### Public speaking anxiety and learner inclusivity
- Some students experience significant anxiety about public speaking. This tutorial should feel supportive, not pressure-inducing.
- Language choice: avoid "perform" and "impress" — use "share," "explain," "show." The script currently uses these correctly; maintain in all future edits.
- The backup plan section (Scene 06) explicitly normalizes failure — this is critical for anxious learners. Do not cut or downplay this section.
- Reflection content: frame honest reflection as a strength, not an admission of inadequacy. Maintain current script framing: "this makes your presentation *more* credible."

### Student character representation
- The student character is gender-neutral and middle-school age
- Visual design should avoid any single racial/ethnic/gender coding — use ambiguity that invites learner identification
- The student should not appear nervous or stressed — even in the demo failure scene, they should look *prepared*, not panicked
- Consider showing mobility aids, glasses, or other common traits in some scenes to broaden representation

### Reading level
- Target: Grade 6–8 (Flesch-Kincaid) — this tutorial addresses students directly, so it should be slightly more accessible than the teacher-facing content
- Technical terms used in this tutorial: minimal by design
- "API" used in narration (demo failure section) — add a brief gloss: "API — the connection between your agent and the outside world"
- Avoid "impress" — use "show," "explain," "share"

### Agent name consistency
- The agent "Zara" is used as a stand-in throughout this tutorial. If the curriculum establishes a different default agent name, update consistently in: script.md (4 instances), storyboard.md (3 instances), and this file (2 instances)

### Audio description
Scenes requiring extended audio description for visually impaired learners:

- **Scene 02:** Describe the timeline bar completely: "A horizontal bar divided into four equal segments from left to right. Orange segment labeled Hook, duration 30 seconds. Blue segment labeled Build, duration 2 minutes. Green segment labeled Demo, duration 2 minutes. Purple segment labeled Reflect, duration 30 seconds."
- **Scene 04:** Read module tracker labels aloud — confirm the narration matches the graphic. Each module name and icon should be explicitly named in narration: "Module 1, chick icon, Name and personality" etc.
- **Scene 05:** Audio-describe each capability cut: what the student types or shows, and what the agent returns — do not assume the screen recording is self-explanatory
- **Scene 06:** Describe the panel sequence explicitly: "Three panels side by side. First: a laptop with a red Wi-Fi error symbol and a spinning circle on the screen. Second: hands holding a tablet showing a video labeled Backup Demo. Third: a projected screen showing the same video playing while the student stands nearby and narrates."

### Transcript
- Full plain-text transcript required, published alongside the video
- Transcript must include descriptions of all non-narrated visual elements
- Transcript should note all on-screen callout text that does not appear in narration
- File: `transcript.md` (to be created post-recording)

### Pacing and cognitive load
- This tutorial is shorter and more energetic than Module 6 counterparts — 5 minutes is tight
- The structure overview (Scene 02) is the cognitive anchor — do not rush it
- Q&A cards (Scene 08) require reading time: allow full 3–4 seconds per card before transition
- Offer a brief quiz or discussion prompt post-video to reinforce the Hook/Build/Demo/Reflect structure

---

## Caption Script Excerpt (First 60 seconds)

```
WEBVTT

00:00:00.000 --> 00:00:08.000
Imagine this: you've spent weeks
building something.

00:00:08.000 --> 00:00:14.000
An AI agent with a name,
a personality, real capabilities.

00:00:14.000 --> 00:00:17.000
It can see images.
It knows things. It responds.

00:00:17.000 --> 00:00:20.000
You made that.

00:00:21.000 --> 00:00:27.000
Now you're standing in front
of an audience —

00:00:27.000 --> 00:00:32.000
classmates, teachers,
maybe parents —

00:00:32.000 --> 00:00:37.000
and you have five minutes to make
them care about what you built.

00:00:38.000 --> 00:00:42.000
This tutorial is about how
to do exactly that.

00:00:42.000 --> 00:00:48.000
Not just how to SHOW your agent —
how to make your audience feel it.

00:00:50.000 --> 00:00:56.000
A great AI demo has four parts.
Hook. Build. Demo. Reflect.
```

---

*Last updated: Module 7 draft — pre-production*
*Owner: ClawDawg / OpenClaw Curriculum Team*
*Review cycle: Before each recording session; after any script changes; after any character design updates*
