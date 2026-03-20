# Remediation Tasks
## OpenClaw Curriculum — Accessibility & Differentiation Fix List
**Date:** March 2026  
**Based on:** accessibility-audit-report.md + differentiation-audit-report.md  
**Format:** Priority-ordered Kanban task descriptions, ready to create

---

## Priority Key

| Priority | Definition |
|----------|-----------|
| 🔴 P1 — Critical | Blocks access for students with disabilities; required for WCAG 2.1 AA compliance |
| 🟠 P2 — High | Significant differentiation gap affecting ELL or flexible scheduling; needed before any module deployment |
| 🟡 P3 — Medium | Incomplete coverage that weakens an existing feature; should be addressed before full curriculum release |
| 🟢 P4 — Low | Enhancement that improves quality but doesn't block access |

---

## 🔴 P1 — Critical (Accessibility Blockers)

---

### TASK: [M1] Render Caption Files for Tutorial-Welcome-to-OpenClaw
**Module:** Module 1  
**Category:** Accessibility — Captions  
**Description:**  
Script (`tutorial-welcome-to-openclaw/script.md`) and accessibility notes are complete. Convert the narration script into a properly timed WebVTT file (`captions.vtt`) and SRT fallback (`captions.srt`). Use M4's `tutorial-how-ai-learns/captions.vtt` as the format template. Publish both files in `tutorial-welcome-to-openclaw/`. Also create `transcript.md` (plain-text searchable version) per the accessibility notes spec.

**Acceptance Criteria:**
- [ ] `captions.vtt` created with accurate timestamps
- [ ] `captions.srt` created as fallback
- [ ] `transcript.md` created (plain-text)
- [ ] All non-speech audio events captioned (`[upbeat intro music]`, etc.)
- [ ] Caption timing reviewed against script scene markers

---

### TASK: [M2] Render Caption Files for Tutorial-How-Computers-See
**Module:** Module 2  
**Category:** Accessibility — Captions  
**Description:**  
Script (`tutorial-how-computers-see/script.md`) and accessibility notes are complete with scene-by-scene caption notes. Convert to timed WebVTT and SRT. Special attention to visual-only moments that need caption descriptions (RGB sliders, hex codes, pixel matrices per accessibility-notes.md). Create `transcript.md`.

**Acceptance Criteria:**
- [ ] `captions.vtt` with timestamps
- [ ] `captions.srt` fallback
- [ ] `transcript.md` plain-text version
- [ ] All on-screen visual events captioned per scene notes in `accessibility-notes.md`

---

### TASK: [M3] Render Caption Files for Tutorial-How-AI-Thinks
**Module:** Module 3  
**Category:** Accessibility — Captions  
**Description:**  
Script (`tutorial-how-ai-thinks/SCRIPT.md`) and `ACCESSIBILITY.md` are complete with 14 scene storyboard. Convert to WebVTT/SRT. All on-screen text not read aloud must be captioned (e.g., feature vectors, accuracy scores). Create `captions.srt` file.

**Acceptance Criteria:**
- [ ] `captions.vtt` with timestamps
- [ ] `captions.srt` fallback
- [ ] All on-screen text callouts captioned
- [ ] Sound effects properly labeled

---

### TASK: [M5] Render Caption Files for Tutorial-How-LLMs-Work
**Module:** Module 5  
**Category:** Accessibility — Captions  
**Description:**  
Script and accessibility notes complete. Convert to timed WebVTT and SRT. Create `transcript.md`.

**Acceptance Criteria:**
- [ ] `captions.vtt`
- [ ] `captions.srt`
- [ ] `transcript.md`

---

### TASK: [M6] Render Caption Files for Both Tutorial Videos
**Module:** Module 6  
**Category:** Accessibility — Captions  
**Description:**  
Two tutorials need caption files rendered: `tutorial-ai-and-society/` and `tutorial-algorithmic-bias/`. Both have complete scripts and detailed accessibility notes. Convert both to WebVTT and SRT. Create `transcript.md` for each.

**Acceptance Criteria:**
- [ ] `tutorial-ai-and-society/captions.vtt` and `captions.srt`
- [ ] `tutorial-ai-and-society/transcript.md`
- [ ] `tutorial-algorithmic-bias/captions.vtt` and `captions.srt`
- [ ] `tutorial-algorithmic-bias/transcript.md`

---

### TASK: [M7] Render Caption Files for Tutorial-How-to-Pitch
**Module:** Module 7  
**Category:** Accessibility — Captions  
**Description:**  
Script and detailed accessibility notes complete. Convert to WebVTT and SRT. Special note: "Zara" (agent name) spelling must be consistent across all caption blocks per accessibility-notes.md. Create `transcript.md`.

**Acceptance Criteria:**
- [ ] `captions.vtt` with timestamps
- [ ] `captions.srt`
- [ ] `transcript.md`
- [ ] Agent name consistently spelled

---

## 🟠 P2 — High (Differentiation Gaps)

---

### TASK: [M2] Add 1-Week Sprint and 4-Week Extended Version to README
**Module:** Module 2  
**Category:** Differentiation — Flex Plans  
**Description:**  
Module 2's README has a "Flex Options" section but lacks a structured 1-week sprint (5-day plan) and 4-week extended plan. Add both sections following the M1 README format:
- `## ⚡ 1-Week Sprint (5 days)` — day-by-day table with Skip/Compress guidance, formative assessments as exit tickets
- `## 📅 4-Week Extended Version (20 days)` — structured additions for Weeks 3–4 (audio extension, bias deep dive, independent model project, gallery walk)

**Acceptance Criteria:**
- [ ] 1-week sprint section added with day-by-day table
- [ ] Skip/Compress guidance noted
- [ ] 4-week extended section added with week-by-week plan
- [ ] Extended assessment artifacts identified

---

### TASK: [M7] Add 1-Week Sprint and 4-Week Extended Version to README
**Module:** Module 7  
**Category:** Differentiation — Flex Plans  
**Description:**  
Module 7's README has "Flex Options" with a "Minimal 3-Session" format, but no formal 1-week sprint or 4-week extended plan. Add:
- `## ⚡ 1-Week Sprint (5 days)` — compressed expo cycle (demo design + 2 rehearsals + expo + reflection)
- `## 📅 4-Week Extended Version` — incorporate community expo expansion from `expo-planning-guide/community-expo-expansion.md`, career connections, portfolio completion, alumni presentations

**Acceptance Criteria:**
- [ ] 1-week sprint section added (5-day plan)
- [ ] 4-week extended version documented
- [ ] References to existing materials (community-expo-expansion.md, careers-guide) integrated

---

### TASK: [M2] Add ELL Support Sections to Lesson Plans 2.1, 2.2, 2.3, 2.5, 2.6
**Module:** Module 2  
**Category:** Differentiation — ELL Support  
**Description:**  
Only `lesson-2-4-speech-recognition/lesson-plan.md` currently has an ELL section. Add "For ELL Students" sections to the five remaining lesson plans. Content should include:
- Visual scaffolds (pixel grid, image labels, diagram annotations)
- Sentence frames appropriate to each lesson's discussion (e.g., "This image is classified as ___ because ___")
- Vocabulary preview for key terms per lesson
- Partner pairing strategy for debrief

**Acceptance Criteria:**
- [ ] ELL section added to lesson-2-1-how-computers-see/lesson-plan.md
- [ ] ELL section added to lesson-2-2-image-recognition/lesson-plan.md
- [ ] ELL section added to lesson-2-3-teachable-machine-lab/lesson-plan.md
- [ ] ELL section added to lesson-2-5-openclaw-sees-hears/lesson-plan.md
- [ ] ELL section added to lesson-2-6-bias-in-perception/lesson-plan.md
- [ ] Each section includes sentence frames and visual scaffold notes

---

### TASK: [M7] Add ELL Support Sections to Workshop/Lesson Plans 7.2–7.5
**Module:** Module 7  
**Category:** Differentiation — ELL Support  
**Description:**  
ELL support for Module 7 is concentrated in the teacher guide (Section 7A). Distribute this to individual lesson plans. Add ELL accommodation notes to:
- `lesson-7-2-capability-inventory/lesson-plan.md`
- `workshop-7-3-demo-script/lesson-plan.md`
- `workshop-7-4-rehearsal/lesson-plan.md`
- `workshop-7-5-dry-run/lesson-plan.md`
Include sentence frames for the demo script (e.g., "My agent can ___ because ___"), gallery walk format as low-pressure alternative, and vocabulary preview.

**Acceptance Criteria:**
- [ ] ELL section added to all four lesson/workshop plans
- [ ] Sentence frames included
- [ ] Gallery walk format noted as alternative to stage presentation
- [ ] Cross-references to teacher-guide.md Section 7A

---

### TASK: [M4] Add Formal 4-Week Extended Version to README
**Module:** Module 4  
**Category:** Differentiation — Flex Plans  
**Description:**  
Module 4 has a 1-week sprint and a well-structured module, but the 4-week extended version is only implied through individual lesson extension notes. Create a formal `## 📅 4-Week Extended Version` section in `README.md` with week-by-week additions: expanded dataset labeling, model comparison research, ethics deep dive, career connections, capstone model project.

**Acceptance Criteria:**
- [ ] 4-week extended section added to README.md
- [ ] Week-by-week additions documented
- [ ] Extended assessment artifacts identified

---

## 🟡 P3 — Medium (Incomplete Coverage)

---

### TASK: [M4] Create Module 4 Vocabulary List
**Module:** Module 4  
**Category:** Accessibility — Key Terms  
**Description:**  
Module 4 is missing a standalone vocabulary list document. Create `assessments/vocabulary-list.md` covering all key ML terms. Use M1's vocabulary-list.md as the format template. Terms to include: supervised learning, unsupervised learning, training data, validation set, test set, feature, label, model, overfitting, underfitting, accuracy, precision, recall, sentiment analysis, classifier, neural network (overview), bias (statistical), dataset.

**Acceptance Criteria:**
- [ ] `assessments/vocabulary-list.md` created
- [ ] At minimum 15 terms with student-friendly definitions
- [ ] Terms organized by lesson/concept group
- [ ] Aligned with quiz and lesson plan vocabulary usage

---

### TASK: [M7] Create Module 7 Vocabulary/Key Terms List
**Module:** Module 7  
**Category:** Accessibility — Key Terms  
**Description:**  
Module 7 is missing a vocabulary document. Create `assessments/vocabulary-list.md` (or `key-terms.md`) covering capstone-specific terms. Terms to include: AI Expo, capability demo, portfolio, feedback loop, user testing, storyboard, Q&A, guardrail, ethical AI, system prompt, capability inventory, agent architecture.

**Acceptance Criteria:**
- [ ] `assessments/vocabulary-list.md` created
- [ ] Terms include student-friendly definitions
- [ ] Cross-reference to relevant module where term was introduced (e.g., "guardrail — introduced in M6")

---

### TASK: [M2] Add Offline Fallback to Lab-Image-Classifier and Lab-Sound-Classifier
**Module:** Module 2  
**Category:** Differentiation — Offline Lab Fallback  
**Description:**  
Both `lab-image-classifier/` and `lab-sound-classifier/` require webcam access and online models. Add documented offline fallbacks to each lab's teacher guide:
- For image classifier: "Paper-based classification exercise — students manually label a printed dataset of 20 images, calculate their own accuracy, compare to model results"
- For sound classifier: "Audio transcript exercise — students read sound descriptions and classify manually; compare to model's confusion matrix"
Update or create a `teacher-guide.md` in each lab with a "When Tech Fails" section.

**Acceptance Criteria:**
- [ ] Offline fallback documented in `lab-image-classifier/teacher-guide.md`
- [ ] Offline fallback documented in `lab-sound-classifier/` (create teacher-guide.md if missing)
- [ ] Each fallback is a complete standalone activity (not just "skip it")

---

### TASK: [M5] Add Offline Fallback for Lab-Channel-Connection
**Module:** Module 5  
**Category:** Differentiation — Offline Lab Fallback  
**Description:**  
The channel connection lab requires live bot/API access. Add a "Paper Bot Design" offline alternative to `lab-channel-connection/teacher-guide.md` or `lab-guide.md`. Students design a bot (define its purpose, list 5 commands, write expected responses, draw the message flow) without connecting it. This teaches the same concepts without live API dependency.

**Acceptance Criteria:**
- [ ] Paper bot design activity documented in `lab-channel-connection/`
- [ ] Includes bot design worksheet (or references challenge-worksheets.md)
- [ ] Teacher guidance for when to use offline alternative

---

### TASK: [M2] Add Accessibility Notes to Tutorial-Teachable-Machine
**Module:** Module 2  
**Category:** Accessibility — Print/Screen-Reader  
**Description:**  
The `tutorial-teachable-machine/` directory has no accessibility notes document. This is a browser-based interactive tutorial. Create `accessibility-notes.md` covering: keyboard navigation, screen reader compatibility for step-by-step instructions, alt text for any screenshots, and color contrast notes. Use `tutorial-how-computers-see/accessibility-notes.md` as the template.

**Acceptance Criteria:**
- [ ] `tutorial-teachable-machine/accessibility-notes.md` created
- [ ] Keyboard navigation documented
- [ ] Screen reader notes for sequential steps
- [ ] Color contrast notes if tutorial has visual elements

---

### TASK: [M3] Add Accessibility Notes to Tutorial-Decision-Tree-Builder (Interactive Tool)
**Module:** Module 3  
**Category:** Accessibility — Print/Screen-Reader  
**Description:**  
The `tutorial-decision-tree-builder/tool-spec.md` defines the interactive tool but has no dedicated accessibility notes document. Create `accessibility-notes.md` covering: keyboard accessibility for drag-and-drop (arrow key fallback), screen reader labels for tree nodes, color contrast for tree visualization, and print/export format accessibility.

**Acceptance Criteria:**
- [ ] `tutorial-decision-tree-builder/accessibility-notes.md` created
- [ ] Keyboard navigation alternative to drag-and-drop documented
- [ ] ARIA labels for tree node components specified
- [ ] Print/export accessibility notes

---

### TASK: [M3] Add ELL Sections to Lessons 3.2–3.5 Lesson Plans
**Module:** Module 3  
**Category:** Differentiation — ELL Support  
**Description:**  
Only `lesson-3-1-data-to-knowledge/lesson-plan.md` and `lesson-3-2-decision-trees/teacher-facilitation-guide.md` have ELL support. Add formal ELL sections to:
- `lesson-3-2-decision-trees/lesson-plan.md` (decision tree visual is inherently scaffolded — document this explicitly)
- `lesson-3-3-pattern-recognition/lesson-plan.md`
- `lesson-3-4-openclaw-reasoning/lesson-plan.md`
- `lesson-3-5-limits-ethics-bridge/lesson-plan.md`

**Acceptance Criteria:**
- [ ] ELL section added to all four lesson plans
- [ ] Sentence frames per lesson topic included
- [ ] Visual scaffolding explicitly noted for diagram-based activities

---

### TASK: [M5] Add ELL Sections to Lessons 5.3 and 5.4 Lesson Plans
**Module:** Module 5  
**Category:** Differentiation — ELL Support  
**Description:**  
`lesson-5-3-prompt-engineering-olympics/` and `lesson-5-4-ai-study-partner/` lesson plans are missing ELL sections. These are confirmed present in lessons 5.1, 5.2, 5.5, 5.6. Add ELL support to the two remaining plans, including sentence frames for prompt writing and discussion.

**Acceptance Criteria:**
- [ ] ELL section added to lesson-5-3-prompt-engineering-olympics/lesson-plan.md
- [ ] ELL section added to lesson-5-4-ai-study-partner/lesson-plan.md
- [ ] Sentence frames for prompt engineering context included

---

## 🟢 P4 — Low (Enhancement)

---

### TASK: [Cross-Curriculum] Standardize Caption Production Pipeline
**Module:** All modules  
**Category:** Accessibility — Process  
**Description:**  
M4 is the only module with rendered `.vtt` files. Create a `cross-curriculum/caption-production-guide.md` that documents the standard workflow for converting scripts to caption files, so future modules can follow the same process. Should include: tool recommendations (e.g., auto-caption then manually correct), VTT format template, naming convention, QA checklist, and where to save files.

**Acceptance Criteria:**
- [ ] `cross-curriculum/caption-production-guide.md` created
- [ ] Includes tool recommendations and step-by-step workflow
- [ ] References M4 tutorial-how-ai-learns as the template example
- [ ] Checklist for caption QA

---

### TASK: [Cross-Curriculum] Create Alt Text Audit for Lab Worksheets
**Module:** All modules  
**Category:** Accessibility — Print/Screen-Reader  
**Description:**  
The accessibility notes documents cover alt text for video tutorials, but printed lab worksheets and activity cards may include images, diagrams, or tables that don't have documented alt text. Conduct a spot-check of the top 3 printable worksheets per module (21 total) and create `cross-curriculum/alt-text-audit.md` noting any gaps. Priority: pixel grid templates, decision tree templates, role cards.

**Acceptance Criteria:**
- [ ] Spot-check of 3 printable materials per module (21 total) documented
- [ ] Any images/diagrams without alt text flagged
- [ ] Fix recommendations noted per item

---

### TASK: [M2] Document Advanced Learner Extensions in Lessons 2.1, 2.2, 2.5, 2.6
**Module:** Module 2  
**Category:** Differentiation — Advanced Extensions  
**Description:**  
Lessons 2.3 and the challenge activities have advanced extensions, but lessons 2.1, 2.2, 2.5, 2.6 don't explicitly call them out in lesson plans. Add a brief "Advanced Learner / Early Finisher" section to each lesson plan with 1–2 extension options (e.g., "Explore Hugging Face model cards independently," "Test your classifier against an edge case you designed yourself").

**Acceptance Criteria:**
- [ ] Extension section added to 4 lesson plans
- [ ] Each extension is self-directed (not teacher-intensive)

---

### TASK: [M7] Document Advanced Learner Extensions in Workshop Lesson Plans
**Module:** Module 7  
**Category:** Differentiation — Advanced Extensions  
**Description:**  
`workshop-7-3-demo-script/`, `workshop-7-4-rehearsal/`, and `workshop-7-5-dry-run/` lesson plans don't explicitly document advanced learner paths. Add brief extension sections: e.g., "Prepare a 2-minute technical deep dive for a CS-teacher-level audience," "Write a one-page technical spec document for your agent," "Research a real AI product comparable to yours."

**Acceptance Criteria:**
- [ ] Extension section added to 3 workshop lesson plans
- [ ] Extensions are relevant to the capstone context

---

## Remediation Priority Summary

| Priority | Task Count | Estimated Effort |
|----------|-----------|-----------------|
| 🔴 P1 — Critical (caption files) | 6 tasks | ~2–4 hours per tutorial (post-production) |
| 🟠 P2 — High (differentiation gaps) | 5 tasks | ~2–3 hours each |
| 🟡 P3 — Medium (incomplete coverage) | 7 tasks | ~1–2 hours each |
| 🟢 P4 — Low (enhancement) | 4 tasks | ~1 hour each |
| **Total** | **22 tasks** | |

---

## Recommended Execution Order

1. **Immediately:** All P1 caption rendering tasks (M1, M2, M3, M5, M6, M7) — blocks accessibility compliance
2. **Before beta deployment:** P2 tasks (M2 flex plans, M7 flex plans, ELL gaps in M2/M7, M4 4-week plan)
3. **Before full release:** P3 tasks (vocabulary lists, offline fallbacks, accessibility notes for tools)
4. **Post-launch:** P4 tasks (process documentation, alt text audit, enhancement extensions)

---

*Generated by ClawDawg — March 2026*  
*Cross-curriculum review for the OpenClaw Curriculum project*  
*For questions: review against accessibility-audit-report.md and differentiation-audit-report.md in this directory*
