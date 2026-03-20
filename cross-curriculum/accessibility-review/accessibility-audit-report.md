# Accessibility Audit Report
## OpenClaw Curriculum — All 7 Modules
**Date:** March 2026  
**Auditor:** ClawDawg  
**Scope:** Caption scripts, print/screen-reader compatibility, offline/unplugged fallbacks, key terms defined in context  
**Standard:** WCAG 2.1 AA

---

## Audit Legend

| Symbol | Meaning |
|--------|---------|
| ✅ | Fully present / compliant |
| ⚠️ | Partial — present but incomplete |
| ❌ | Missing / not found |
| N/A | Not applicable (e.g., interactive tool, not a video) |

---

## Summary Table

| Module | Caption Scripts | Print/Screen-Reader Materials | Offline/Unplugged Fallback | Key Terms Defined |
|--------|----------------|-------------------------------|---------------------------|-------------------|
| M1 — What Is AI? | ⚠️ | ✅ | ✅ | ✅ |
| M2 — Give Your Agent Senses | ⚠️ | ⚠️ | ⚠️ | ✅ |
| M3 — Reasoning & Representation | ⚠️ | ⚠️ | ✅ | ✅ |
| M4 — How Machine Learning Works | ✅ | ✅ | ✅ | ❌ |
| M5 — The Art of the Prompt | ⚠️ | ✅ | ⚠️ | ✅ |
| M6 — AI Ethics, Bias & Accountability | ⚠️ | ✅ | ✅ | ✅ |
| M7 — Capstone: AI Expo | ⚠️ | ✅ | ✅ | ❌ |

---

## Module-by-Module Detail

---

### Module 1 — What Is AI?

#### ✅ Caption Scripts
- `tutorial-welcome-to-openclaw/script.md` — full narration script exists with scene-by-scene breakdown  
- `tutorial-welcome-to-openclaw/accessibility-notes.md` — detailed caption guidelines (WebVTT/SRT format, timing specs, sample VTT block)  
- **Gap:** No `.vtt` or `.srt` caption file generated yet (script is draft stage; captions not yet rendered). Tutorial `first-conversation` and `tutorial-first-conversation` are text-based walkthroughs (not videos) — no captions needed.

#### ✅ Print/Screen-Reader Compatible Materials
- `accessibility-notes.md` includes WCAG 2.1 AA color contrast table with hex ratios  
- All lesson materials are Markdown-based (inherently screen-reader compatible when rendered to HTML)  
- `lab-deploy-your-openclaw/deployment-checklist.md` and `lab-openclaw-101/lab-worksheet.md` are printable formats  
- `assessments/reflection-journal-rubric.md`, `seminar-rubric.md`, `self-assessment.md` all print-ready

#### ✅ Offline/Unplugged Fallback
- Lesson 1.1: Algorithm unplugged activity (PB&J sandwich exercise, index cards) — fully offline  
- Lesson 1.2: AI Bingo card (`ai-bingo-card.md`) — printable, no device required  
- Lesson 1.3: Reflection journal template — paper-based  
- Lesson 1.4: "Is It Human?" discussion activity — no tech required  
- `activity-sorting-cards/` — physical sorting cards for AI vs. non-AI classification  

#### ✅ Key Terms Defined in Context
- `assessments/vocabulary-list.md` — 12 terms with student-friendly definitions  
- Terms defined in-text throughout `textbook-chapter-1/chapter-1.md`  
- ELL vocabulary support documented in `lesson-1-*.md` lesson plans  

**M1 Notes:** The main gap is that caption files (`.vtt`/`.srt`) haven't been produced yet from the script — this is pre-production. Scripts are complete and detailed.

---

### Module 2 — Give Your Agent Senses (Vision & Audio)

#### ⚠️ Caption Scripts
- `tutorial-how-computers-see/script.md` — full narration script with scene-by-scene breakdown  
- `tutorial-how-computers-see/accessibility-notes.md` — detailed caption guidelines, scene-by-scene notes  
- `tutorial-teachable-machine/tutorial.md` — text-based tutorial (step-by-step walkthrough, no video) → N/A  
- **Gap:** No `.vtt` or `.srt` caption file generated. Script is present but captions not rendered.  
- **Gap:** `tutorial-teachable-machine/` has no accessibility notes document.

#### ⚠️ Print/Screen-Reader Compatible Materials
- `tutorial-how-computers-see/accessibility-notes.md` covers WCAG AA compliance, alt text per scene, color contrast  
- `activity-pixel-portrait/pixel-grid-template.md` — printable grid template ✅  
- `lab-image-classifier/lab-report-template.md`, `lab-sound-classifier/lab-worksheet.md` — printable ✅  
- **Gap:** `tutorial-teachable-machine/` lacks an accessibility notes document.  
- **Gap:** No explicit accessibility notes for `lab-hugging-face-intro/` (key lab).

#### ⚠️ Offline/Unplugged Fallback
- Lesson 2.1: "Today is purely conceptual and unplugged — no computers required" (teacher-facilitation-guide.md)  
- `activity-pixel-portrait/` — can be done on paper ✅  
- `lab-hugging-face-intro/teacher-guide.md` — "Option C: Offline-first fallback" with mock responses ✅  
- **Gap:** `lab-image-classifier/` and `lab-sound-classifier/` lack documented offline fallbacks (both depend on Teachable Machine webcam).  
- **Gap:** `lesson-2-3-teachable-machine-lab/` mentions offline model capability but no structured offline activity guide.

#### ✅ Key Terms Defined in Context
- `assessments/vocabulary-list.md` — module vocabulary with definitions  
- Terms defined in `textbook-chapter-2/chapter-2.md`

**M2 Notes:** The key capability lab (Lab 2.4) has offline fallback. Teachable Machine labs need structured paper fallbacks for webcam/API failures.

---

### Module 3 — Reasoning & Representation

#### ⚠️ Caption Scripts
- `tutorial-how-ai-thinks/SCRIPT.md` — full narration script, 7-minute tutorial with 14 scenes  
- `tutorial-how-ai-thinks/ACCESSIBILITY.md` — caption format, alt text, color contrast ✅  
- `tutorial-decision-tree-builder/` — interactive browser tool (not a video) → N/A for captions  
- **Gap:** No `.vtt`/`.srt` caption file for `tutorial-how-ai-thinks` yet.

#### ⚠️ Print/Screen-Reader Compatible Materials
- `tutorial-how-ai-thinks/ACCESSIBILITY.md` — WCAG AA compliance, alt text per scene ✅  
- `activity-build-a-tree/tree-template.md` — printable tree template ✅  
- `activity-pattern-detective/pattern-cards.md` — printable cards ✅  
- `tutorial-decision-tree-builder/` — "If a student's device can't run the tool, provide the printed dataset tables" (teacher-guide.md) ✅  
- **Gap:** No accessibility notes document for the `tutorial-decision-tree-builder/` interactive tool.  
- **Gap:** `lesson-3-5-limits-ethics-bridge/` has no explicit print/screen-reader notes.

#### ✅ Offline/Unplugged Fallback
- `activity-build-a-tree/` — fully offline paper activity ✅  
- `activity-pattern-detective/` — printable pattern cards, offline ✅  
- `activity-stump-the-ai/` — group discussion activity, can be offline ✅  
- `tutorial-decision-tree-builder/teacher-guide.md` — paper fallback documented ✅  
- `teacher-guide/README.md` — "Other lab options work offline"; case studies printable ✅

#### ✅ Key Terms Defined in Context
- `assessments/vocabulary-list.md` — module vocabulary ✅  
- Terms defined throughout `textbook-chapter-5/chapter-5.md` and `chapter-6.md`

**M3 Notes:** Good offline coverage. Main gap is missing rendered captions and no accessibility notes for the decision tree interactive tool.

---

### Module 4 — How Machine Learning Works

#### ✅ Caption Scripts
- `tutorial-how-ai-learns/script.md` — full video script ✅  
- `tutorial-how-ai-learns/captions.vtt` — **rendered WebVTT file exists** ✅  
- `tutorial-how-ai-learns/accessibility-notes.md` — WCAG AA compliance doc ✅  
- `tutorial-ml-for-kids/captions-mlkids.vtt` — **rendered WebVTT file exists** ✅  
- `tutorial-ml-for-kids/walkthrough-script.md` — script ✅  
- **Best practice module** — only module with actual `.vtt` files.

#### ✅ Print/Screen-Reader Compatible Materials
- `tutorial-how-ai-learns/accessibility-notes.md` — full WCAG AA doc ✅  
- `activities/05-lab-report-template.md` — printable ✅  
- `lab-bias-testing/bias-worksheet.md`, `findings-template.md` — printable ✅  
- `lab-sentiment-classifier/lab-report.md` — printable ✅  
- `interactive-training-simulator/` — works offline ✅  
- `activities/README.md` notes print versions

#### ✅ Offline/Unplugged Fallback
- `teacher-guide/teacher-guide.md` — "Paper fallback: Students design their model without building it" ✅  
- `interactive-training-simulator/README.md` — "Works offline" ✅  
- `lab-sentiment-classifier/teacher-guide.md` — fallback plan documented ✅  
- `badge-ml-engineer/criteria.md` — "For offline/paper classrooms: teacher manually awards badge" ✅

#### ❌ Key Terms Defined
- **No vocabulary list file found** in `assessments/` or elsewhere  
- Quiz (`quiz-ml-concepts/quiz.md`) includes some term definitions in explanations, but no standalone vocabulary list  
- **Gap:** Vocabulary glossary for Module 4 terms (e.g., supervised learning, overfitting, validation set, feature, label) is missing  

**M4 Notes:** This module is the gold standard for captions — it has actual `.vtt` files. Main gap is the missing vocabulary list document.

---

### Module 5 — The Art of the Prompt

#### ⚠️ Caption Scripts
- `tutorial-how-llms-work/script.md` — full video script ✅  
- `tutorial-how-llms-work/accessibility-notes.md` — WCAG AA compliance doc ✅  
- `tutorial-prompt-engineering-sandbox/` — interactive browser tool → N/A for video captions  
- **Gap:** No `.vtt`/`.srt` caption file for `tutorial-how-llms-work` yet.

#### ✅ Print/Screen-Reader Compatible Materials
- `tutorial-how-llms-work/accessibility-notes.md` ✅  
- `lab-prompt-engineering/prompt-engineering-cheat-sheet.md` — printable reference ✅  
- `lab-prompt-engineering/challenge-worksheets.md` — printable ✅  
- `lab-channel-connection/test-plan-template.md`, `credential-safety-checklist.md` — printable ✅  
- `lesson-5-2-art-of-the-prompt/prompt-comparison-worksheet.md` — printable ✅

#### ⚠️ Offline/Unplugged Fallback
- `lab-channel-connection/lab-guide.md` — offline preparation steps documented ✅  
- `tutorial-prompt-engineering-sandbox/teacher-guide.md` — notes offline usage  
- **Gap:** `lab-channel-connection/` (key lab requiring live API/bot) has no structured offline alternative for when internet is unavailable  
- **Gap:** `lesson-5-3-prompt-engineering-olympics/` — depends on AI access; no fully offline version of the event documented  

#### ✅ Key Terms Defined in Context
- `assessments/vocabulary-list.md` — module vocabulary ✅  
- Terms defined in `textbook-chapter-9/` and `textbook-chapter-10/`

**M5 Notes:** The channel connection lab is inherently online-dependent; at minimum a paper "design a bot" fallback should be documented.

---

### Module 6 — AI Ethics, Bias & Accountability

#### ⚠️ Caption Scripts
- `tutorial-ai-and-society/script.md` — full video script ✅  
- `tutorial-ai-and-society/accessibility-notes.md` — WCAG AA compliance ✅  
- `tutorial-algorithmic-bias/script.md` — full video script ✅  
- `tutorial-algorithmic-bias/accessibility-notes.md` — WCAG AA compliance ✅  
- `tutorial-stakeholder-mapping-tool/` — interactive tool → N/A for captions  
- **Gap:** No `.vtt`/`.srt` caption files rendered for either tutorial video.

#### ✅ Print/Screen-Reader Compatible Materials
- Both tutorial accessibility-notes.md files cover WCAG AA in detail ✅  
- `tutorial-stakeholder-mapping-tool/printable-version.md` — "Low-tech fallback for no-device or low-connectivity scenarios" ✅  
- `lab-surveillance-simulator/role-cards.md` — printable ✅  
- `lab-bias-testing-workshop/documentation-template.md`, `aggregation-sheet.md` — printable ✅  
- `activities/` — all activity templates printable ✅

#### ✅ Offline/Unplugged Fallback
- `lab-audit-and-govern/` — "handwritten policy works as well as digital" (teacher-guide.md) ✅  
- `tutorial-stakeholder-mapping-tool/printable-version.md` — print fallback ✅  
- `tutorial-stakeholder-mapping-tool/tool-spec.md` — "fully offline after initial load" ✅  
- `lab-surveillance-simulator/` — roleplay activity, fully offline ✅  
- All case study activities in `activities/` — printable, discussion-based ✅  
- `lab-bias-testing-workshop/` — can be adapted to paper documentation

#### ✅ Key Terms Defined in Context
- `assessments/vocabulary.md` — module vocabulary ✅  
- Terms defined in `textbook-chapter-11/` and `textbook-chapter-12/`

**M6 Notes:** Excellent offline coverage and print materials. Only gap is rendered caption files (.vtt) for the two video tutorials.

---

### Module 7 — Capstone: AI Expo

#### ⚠️ Caption Scripts
- `tutorial-how-to-pitch/script.md` — full narration script ✅  
- `tutorial-how-to-pitch/accessibility-notes.md` — detailed WCAG AA guidelines ✅  
- **Gap:** No `.vtt`/`.srt` caption file rendered.  
- **Note:** Most Module 7 content is workshop/lesson-plan format (not video). The `tutorial-how-to-pitch` is the only video tutorial.

#### ✅ Print/Screen-Reader Compatible Materials
- `tutorial-how-to-pitch/accessibility-notes.md` ✅  
- `demo-prep/demo-script-outline.md`, `demo-storyboard-template.md` — printable ✅  
- `expo-planning-guide/` — extensive printable materials including `room-setup-diagram.md`, `presentation-schedule-template.md`, `celebration-certificates.md` ✅  
- `assessments/peer-evaluation-form.md`, `audience-evaluation-card.md` — printable ✅  
- `tech-contingency-guide/student-contingency-guide.md` — addresses offline backup ✅

#### ✅ Offline/Unplugged Fallback
- `tech-contingency-guide/` — full contingency plans for offline scenarios ✅  
- `tutorial-how-to-pitch/script.md` — "Before your expo, record a backup video...save it offline" ✅  
- `expo/expo-setup-guide.md` — "Backup video is downloaded and playable offline" ✅  
- `tutorial-how-to-pitch/checklist.md` — "Video accessible offline" ✅

#### ❌ Key Terms Defined
- **No vocabulary list file found** for Module 7  
- Career/domain vocabulary referenced in `careers-guide/careers-guide.md` but no standalone glossary  
- Terms like "AI Expo," "capability demo," "portfolio" are used without a formal definitions document  
- **Gap:** Missing standalone vocabulary/key terms document for Module 7 capstone content

**M7 Notes:** Strong on offline contingency (the expo setup actively plans for tech failure). Main gaps are missing rendered captions and no vocabulary list.

---

## Cross-Curriculum Findings

### Caption Production Status
| Status | Modules |
|--------|---------|
| Script + Accessibility Notes complete, `.vtt` not yet rendered | M1, M2, M3, M5, M6, M7 |
| Script + Accessibility Notes + `.vtt` rendered (**complete**) | M4 only |
| Interactive tool (no captions needed) | M1 (tutorial-first-conversation), M2 (tutorial-teachable-machine), M3 (tutorial-decision-tree-builder), M5 (tutorial-prompt-engineering-sandbox), M6 (tutorial-stakeholder-mapping-tool) |

**Root cause:** Caption rendering is a production step that has not yet been executed for 6 of 7 modules. M4 should serve as the template.

### Screen-Reader Format Notes
All curriculum content is written in Markdown, which is inherently compatible with screen readers when rendered to HTML. The main risks are:
1. Images/diagrams without alt text (covered in accessibility-notes.md for video tutorials but not audited for all lab worksheets)
2. Complex tables in lesson plans — should use simple column/row format

### Offline Fallback Coverage
- Strongest: M3 (unplugged by design for conceptual lessons), M6 (roleplay + printable tools), M7 (contingency guide)
- Weakest: M5 (channel lab inherently online), M2 (Teachable Machine webcam labs)

---

*Generated by ClawDawg — March 2026*  
*Part of the OpenClaw Curriculum cross-curriculum review process*
