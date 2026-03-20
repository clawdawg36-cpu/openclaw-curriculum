# AI Explorers Online — Content Mapping

**Version:** 1.0  
**Date:** March 2026  
**Purpose:** Maps every existing curriculum file to its home within the AI Explorers Online platform.

---

## How to Read This Document

Each row maps a curriculum file (by relative path from the repo root) to:
- **Platform Location:** Where it appears in the platform UI
- **Content Type:** How the platform treats it
- **Content Item ID:** The ID used in the platform's content schema
- **Action Required:** What work is needed to adapt the file for the platform

**Content Types:**
- `lesson` — Readable content delivered in the platform (Markdown → rendered HTML)
- `tutorial-video` — Video tutorial (linked out or embedded)
- `tutorial-interactive` — Interactive web tool specced per-module
- `lab-external` — Student leaves platform, works in OpenClaw/HuggingFace/browser, returns to mark complete
- `lab-interactive` — Future: embedded lab experience
- `activity` — In-class activity (printable or digital reference)
- `quiz` — Auto-graded quiz embedded in platform
- `assessment-rubric` — Teacher-facing document only (not surfaced to students)
- `teacher-resource` — Teacher dashboard / teacher guide (not surfaced to students)
- `journal-prompt` — Reflection prompts extracted and embedded in journal entry form
- `content-reference` — Background reference doc (linked, not a primary content item)
- `curriculum-admin` — Cross-platform admin docs (not surfaced in platform UI)

---

## Cross-Curriculum Files

| File | Platform Location | Content Type | Content Item ID | Action Required |
|------|------------------|--------------|-----------------|-----------------|
| `README.md` | Platform: About page / teacher onboarding docs | curriculum-admin | — | Adapt as platform About copy |
| `CURRICULUM_VISION.md` | Teacher onboarding / help center | teacher-resource | — | Summarize for teacher onboarding |
| `AGENT_JOURNEY.md` | Student Dashboard: Module Journey Arc | curriculum-admin | — | Powers the 7-module arc UI; extract capability unlock text per module |
| `agent-design-journal.md` | Journal Entry template for all 7 modules | journal-prompt | journal-template-v1 | Extract reflection prompts per module section; embed in Journal entry schema |
| `journal-teacher-guide.md` | Teacher Dashboard: Journal help docs | teacher-resource | — | Add to teacher help center |

---

## Module 1 — What Is AI?

### Lessons

| File | Platform Location | Content Type | Content Item ID | Action Required |
|------|------------------|--------------|-----------------|-----------------|
| `module1/lesson-1-1-what-is-ai/lesson-plan.md` | Module 1 → Lessons → Lesson 1-1 | lesson | m1-lesson-1-1 | Render as student-facing content; strip teacher-only notes into teacher layer |
| `module1/lesson-1-1-what-is-ai/slides-outline.md` | Module 1 → Lessons → Lesson 1-1 (Slides tab) | content-reference | — | Link as downloadable PDF or Google Slides |
| `module1/lesson-1-1-what-is-ai/teacher-facilitation-guide.md` | Teacher Dashboard → M1 Resources | teacher-resource | — | Teacher-only |
| `module1/lesson-1-2-ai-in-your-world/lesson-plan.md` | Module 1 → Lessons → Lesson 1-2 | lesson | m1-lesson-1-2 | Same as 1-1 |
| `module1/lesson-1-2-ai-in-your-world/slides-outline.md` | Module 1 → Lesson 1-2 (Slides) | content-reference | — | Link as downloadable |
| `module1/lesson-1-2-ai-in-your-world/ai-bingo-card.md` | Module 1 → Activities | activity | m1-activity-bingo | Render as printable/digital activity |
| `module1/lesson-1-2-ai-in-your-world/homework-assignment.md` | Module 1 → Activities | activity | m1-activity-homework | Render as student activity |
| `module1/lesson-1-3-first-contact/lesson-plan.md` | Module 1 → Lessons → Lesson 1-3 | lesson | m1-lesson-1-3 | Render |
| `module1/lesson-1-3-first-contact/reflection-journal-template.md` | Module 1 Journal Entry | journal-prompt | m1-journal-prompt-1-3 | Extract prompts into journal entry for M1 |
| `module1/lesson-1-3-first-contact/openclaw-101-lab.md` | Module 1 → Labs → OpenClaw 101 | lab-external | m1-lab-openclaw-101 | Link out to OpenClaw; completion manually confirmed |
| `module1/lesson-1-3-first-contact/slides-outline.md` | Module 1 → Lesson 1-3 (Slides) | content-reference | — | Link |
| `module1/lesson-1-3-first-contact/teacher-debrief-guide.md` | Teacher Dashboard → M1 Resources | teacher-resource | — | Teacher-only |
| `module1/lesson-1-4-turing-test/lesson-plan.md` | Module 1 → Lessons → Lesson 1-4 | lesson | m1-lesson-1-4 | Render |
| `module1/lesson-1-4-turing-test/discussion-guide.md` | Module 1 → Discussion (teacher seeded prompt) | teacher-resource | — | Teacher uses to seed M1 discussion forum |
| `module1/lesson-1-4-turing-test/exit-ticket.md` | Module 1 → Quiz: AI or Not AI (mapped below) | assessment-rubric | — | Content absorbed into quiz |
| `module1/lesson-1-4-turing-test/is-it-human-activity.md` | Module 1 → Activities | activity | m1-activity-turing | Render as activity |
| `module1/lesson-1-4-turing-test/slides-outline.md` | Module 1 → Lesson 1-4 (Slides) | content-reference | — | Link |
| `module1/lesson-1-5-intro-to-agentic-ai/lesson-plan.md` | Module 1 → Lessons → Lesson 1-5 | lesson | m1-lesson-1-5 | Render |
| `module1/lesson-1-5-intro-to-agentic-ai/my-agent-wishlist-activity.md` | Module 1 → Activities | activity | m1-activity-wishlist | Render; this feeds into journal |
| `module1/lesson-1-5-intro-to-agentic-ai/what-is-an-agent-handout.md` | Module 1 → Lessons → Lesson 1-5 (Handout tab) | content-reference | — | Link as downloadable |
| `module1/lesson-1-5-intro-to-agentic-ai/exit-ticket.md` | Module 1 → assessments (absorbed into quiz) | assessment-rubric | — | Add as quiz questions |
| `module1/lesson-1-5-intro-to-agentic-ai/slides-outline.md` | Module 1 → Lesson 1-5 (Slides) | content-reference | — | Link |
| `module1/lesson-1-5-intro-to-agentic-ai/teacher-notes.md` | Teacher Dashboard → M1 Resources | teacher-resource | — | Teacher-only |

### Activities

| File | Platform Location | Content Type | Content Item ID | Action Required |
|------|------------------|--------------|-----------------|-----------------|
| `module1/activity-sorting-cards/sorting-cards.md` | Module 1 → Activities → AI Sorting Cards | activity | m1-activity-sorting | Render as interactive or printable activity |
| `module1/activity-sorting-cards/digital-sorting-instructions.md` | Module 1 → Activities → Sorting Cards | activity | m1-activity-sorting-digital | Embed as instructions tab |
| `module1/activity-sorting-cards/printable-layout.md` | Module 1 → Activities → Sorting Cards (Print) | content-reference | — | Link as printable PDF |
| `module1/activity-sorting-cards/README.md` | — | curriculum-admin | — | Internal use only |

### Labs

| File | Platform Location | Content Type | Content Item ID | Action Required |
|------|------------------|--------------|-----------------|-----------------|
| `module1/lab-openclaw-101/lab-guide.md` | Module 1 → Labs → OpenClaw 101 | lab-external | m1-lab-openclaw-101 | Render instructions; link to OpenClaw; student marks complete |
| `module1/lab-openclaw-101/lab-worksheet.md` | Module 1 → Labs → OpenClaw 101 (Worksheet) | content-reference | — | Link as downloadable or render inline |
| `module1/lab-deploy-your-openclaw/lab-setup-guide.md` | Module 1 → Labs → Deploy Your OpenClaw | lab-external | m1-lab-deploy | Render; link to OpenClaw |
| `module1/lab-deploy-your-openclaw/deployment-checklist.md` | Module 1 → Labs → Deploy Your OpenClaw | content-reference | — | Render inline as checklist |
| `module1/lab-deploy-your-openclaw/customization-guide.md` | Module 1 → Labs → Deploy Your OpenClaw | content-reference | — | Render as optional extension |
| `module1/lab-deploy-your-openclaw/teacher-setup-guide.md` | Teacher Dashboard → M1 Lab Setup | teacher-resource | — | Teacher-only |

### Tutorials

| File | Platform Location | Content Type | Content Item ID | Action Required |
|------|------------------|--------------|-----------------|-----------------|
| `module1/tutorial-welcome-to-openclaw/script.md` | Module 1 → Tutorials → Welcome to OpenClaw | tutorial-video | m1-tutorial-welcome | Video script → needs video production; platform embeds video |
| `module1/tutorial-welcome-to-openclaw/storyboard.md` | — | curriculum-admin | — | For video production team |
| `module1/tutorial-welcome-to-openclaw/accessibility-notes.md` | — | curriculum-admin | — | Pass to video captioning |
| `module1/tutorial-first-conversation/tutorial.md` | Module 1 → Tutorials → First Conversation | tutorial-video | m1-tutorial-first-convo | Video script |
| `module1/tutorial-first-conversation/completion-criteria.md` | Module 1 → Tutorial completion logic | curriculum-admin | — | Informs completion detection for m1-tutorial-first-convo |

### Quizzes and Assessments

| File | Platform Location | Content Type | Content Item ID | Action Required |
|------|------------------|--------------|-----------------|-----------------|
| `module1/quiz-ai-or-not-ai/quiz.md` | Module 1 → Quiz: AI or Not AI? | quiz | m1-quiz-ai-or-not | Convert to quiz JSON schema; embed in platform |
| `module1/quiz-ai-or-not-ai/quiz-guide.md` | Teacher Dashboard → M1 Quiz Notes | teacher-resource | — | Teacher-only |
| `module1/assessments/exit-tickets.md` | Module 1 → informal assessments (absorbed into quiz + journal) | assessment-rubric | — | Extract exit ticket questions into quiz schema |
| `module1/assessments/module1-formative-check.md` | Module 1 → Quiz (supplemental) | assessment-rubric | — | Add as optional quiz variant |
| `module1/assessments/reflection-journal-rubric.md` | Teacher Dashboard → M1 Assessment | teacher-resource | — | Teacher-only |
| `module1/assessments/self-assessment.md` | Module 1 → Journal Entry (self-assessment section) | journal-prompt | m1-self-assessment | Embed prompts in M1 journal |
| `module1/assessments/seminar-rubric.md` | Teacher Dashboard → M1 Assessment | teacher-resource | — | Teacher-only |
| `module1/assessments/vocabulary-list.md` | Module 1 → Lesson Pages (vocabulary sidebar) | content-reference | — | Surface as glossary sidebar on lesson pages |

### Teacher and Textbook

| File | Platform Location | Content Type | Content Item ID | Action Required |
|------|------------------|--------------|-----------------|-----------------|
| `module1/teacher-guide/teacher-guide.md` | Teacher Dashboard → M1 Teacher Guide | teacher-resource | — | Teacher-only |
| `module1/textbook-chapter-1/chapter-1.md` | Module 1 → Textbook: Chapter 1 | lesson | m1-textbook-ch1 | Render as student-facing reading; include in module completion criteria |

---

## Module 2 — Give Your Agent Vision

### Lessons

| File | Platform Location | Content Type | Content Item ID | Action Required |
|------|------------------|--------------|-----------------|-----------------|
| `module2/lesson-2-1-how-computers-see/lesson-plan.md` | Module 2 → Lesson 2-1 | lesson | m2-lesson-2-1 | Render |
| `module2/lesson-2-1-how-computers-see/pixel-art-activity.md` | Module 2 → Activities → Pixel Art | activity | m2-activity-pixel-art | Render as activity |
| `module2/lesson-2-1-how-computers-see/teacher-facilitation-guide.md` | Teacher Dashboard → M2 Resources | teacher-resource | — | Teacher-only |
| `module2/lesson-2-2-image-recognition/lesson-plan.md` | Module 2 → Lesson 2-2 | lesson | m2-lesson-2-2 | Render |
| `module2/lesson-2-2-image-recognition/image-labeling-activity.md` | Module 2 → Activities | activity | m2-activity-labeling | Render |
| `module2/lesson-2-2-image-recognition/pretrained-vs-custom.md` | Module 2 → Lesson 2-2 (supplemental) | content-reference | — | Render as expandable sidebar |
| `module2/lesson-2-2-image-recognition/quickdraw-reflection.md` | Module 2 → Journal prompt | journal-prompt | m2-journal-prompt-2-2 | Extract into M2 journal entry |
| `module2/lesson-2-3-teachable-machine-lab/lesson-plan.md` | Module 2 → Lesson 2-3 | lesson | m2-lesson-2-3 | Render |
| `module2/lesson-2-3-teachable-machine-lab/lab-worksheet.md` | Module 2 → Labs → Teachable Machine | content-reference | — | Render inline with lab |
| `module2/lesson-2-3-teachable-machine-lab/teachable-machine-guide.md` | Module 2 → Labs → Teachable Machine (guide) | lab-external | m2-lab-teachable | Link out to teachablemachine.withgoogle.com |
| `module2/lesson-2-3-teachable-machine-lab/comparison-debrief.md` | Module 2 → Discussion prompt | teacher-resource | — | Teacher uses to seed M2 forum |
| `module2/lesson-2-3-teachable-machine-lab/extension-experiment.md` | Module 2 → Labs (extension) | content-reference | — | Optional extension content |
| `module2/lesson-2-4-speech-recognition/lesson-plan.md` | Module 2 → Lesson 2-4 | lesson | m2-lesson-2-4 | Render |
| `module2/lesson-2-4-speech-recognition/sound-classifier-activity.md` | Module 2 → Activities | activity | m2-activity-sound | Render |
| `module2/lesson-2-4-speech-recognition/discussion-guide.md` | Teacher Dashboard → M2 | teacher-resource | — | Teacher-only |
| `module2/lesson-2-4-speech-recognition/ethics-preview-note.md` | Module 2 → Lesson 2-4 (callout box) | content-reference | — | Render as ethics preview callout |
| `module2/lesson-2-5-openclaw-sees-hears/lesson-plan.md` | Module 2 → Lesson 2-5 | lesson | m2-lesson-2-5 | Render |
| `module2/lesson-2-5-openclaw-sees-hears/agent-preview-activity.md` | Module 2 → Activities | activity | m2-activity-agent-preview | Render |
| `module2/lesson-2-5-openclaw-sees-hears/twenty-questions-lab.md` | Module 2 → Labs | lab-external | m2-lab-twenty-questions | Lab using OpenClaw |
| `module2/lesson-2-5-openclaw-sees-hears/comparison-discussion-guide.md` | Teacher Dashboard → M2 | teacher-resource | — | Teacher-only |
| `module2/lesson-2-6-bias-in-perception/lesson-plan.md` | Module 2 → Lesson 2-6 | lesson | m2-lesson-2-6 | Render |
| `module2/lesson-2-6-bias-in-perception/case-studies.md` | Module 2 → Lesson 2-6 (case studies tab) | content-reference | — | Render inline |
| `module2/lesson-2-6-bias-in-perception/exit-ticket.md` | Module 2 → Quiz (supplemental questions) | assessment-rubric | — | Incorporate into M2 quiz |
| `module2/lesson-2-6-bias-in-perception/bias-audit-preview.md` | Module 2 → Lesson 2-6 (preview callout) | content-reference | — | Render as preview of M6 |
| `module2/lesson-2-6-bias-in-perception/teacher-guide.md` | Teacher Dashboard → M2 | teacher-resource | — | Teacher-only |

### Activities

| File | Platform Location | Content Type | Content Item ID | Action Required |
|------|------------------|--------------|-----------------|-----------------|
| `module2/activity-pixel-portrait/activity-guide.md` | Module 2 → Activities → Pixel Portrait | activity | m2-activity-pixel-portrait | Render |
| `module2/activity-pixel-portrait/pixel-grid-template.md` | Module 2 → Activities → Pixel Portrait | content-reference | — | Render inline / printable |
| `module2/activity-pixel-portrait/reflection-questions.md` | Module 2 → Journal / activity follow-up | journal-prompt | m2-journal-prompt-pixel | Extract prompts |
| `module2/activity-sound-sorter/activity-guide.md` | Module 2 → Activities → Sound Sorter | activity | m2-activity-sound-sorter | Render |
| `module2/activity-sound-sorter/starter-code.md` | Module 2 → Activities → Sound Sorter (Code tab) | content-reference | — | Render as code block |
| `module2/activity-sound-sorter/agent-skill-bridge.md` | Module 2 → Activities (bridge to M3) | content-reference | — | Render as preview callout |
| `module2/activity-sound-sorter/extension-ideas.md` | Module 2 → Activities (extension) | content-reference | — | Render as extension section |
| `module2/activity-teachable-machine-challenge/challenge-guide.md` | Module 2 → Activities → TM Challenge | activity | m2-activity-tm-challenge | Render |
| `module2/activity-teachable-machine-challenge/judging-rubric.md` | Teacher Dashboard → M2 | teacher-resource | — | Teacher-only |
| `module2/activity-teachable-machine-challenge/inspiration-ideas.md` | Module 2 → TM Challenge (ideas tab) | content-reference | — | Render inline |
| `module2/activity-teachable-machine-challenge/agent-usefulness-reflection.md` | Module 2 → Journal prompt | journal-prompt | m2-journal-prompt-tm | Extract into M2 journal |

### Labs, Tutorials, Quizzes

| File | Platform Location | Content Type | Content Item ID | Action Required |
|------|------------------|--------------|-----------------|-----------------|
| `module2/lab-image-classifier/lab-guide.md` | Module 2 → Labs → Image Classifier | lab-external | m2-lab-image-classifier | Link to Teachable Machine / OpenClaw |
| `module2/lab-image-classifier/lab-report-template.md` | Module 2 → Labs → Image Classifier (report) | content-reference | — | Render as fillable template |
| `module2/lab-image-classifier/teacher-guide.md` | Teacher Dashboard → M2 Labs | teacher-resource | — | Teacher-only |
| `module2/lab-sound-classifier/lab-guide.md` | Module 2 → Labs → Sound Classifier | lab-external | m2-lab-sound-classifier | Lab link |
| `module2/lab-sound-classifier/lab-worksheet.md` | Module 2 → Labs → Sound Classifier (worksheet) | content-reference | — | Render inline |
| `module2/lab-sound-classifier/extension-challenge.md` | Module 2 → Labs (extension) | content-reference | — | Optional extension |
| `module2/lab-hugging-face-intro/lab-guide.md` | Module 2 → Labs → Hugging Face Intro | lab-external | m2-lab-huggingface | Link to huggingface.co |
| `module2/lab-hugging-face-intro/model-exploration-worksheet.md` | Module 2 → Labs → HF Intro (worksheet) | content-reference | — | Render inline |
| `module2/lab-hugging-face-intro/skill-creation-guide.md` | Module 2 → Labs → HF Intro (guide) | content-reference | — | Render as guide tab |
| `module2/lab-hugging-face-intro/agent-journal-update.md` | Module 2 → Journal prompt | journal-prompt | m2-journal-prompt-hf | Extract prompts for M2 journal |
| `module2/lab-hugging-face-intro/teacher-guide.md` | Teacher Dashboard → M2 Labs | teacher-resource | — | Teacher-only |
| `module2/tutorial-how-computers-see/script.md` | Module 2 → Tutorials → How Computers See | tutorial-video | m2-tutorial-vision | Video production needed |
| `module2/tutorial-how-computers-see/storyboard.md` | — | curriculum-admin | — | Production use |
| `module2/tutorial-how-computers-see/accessibility-notes.md` | — | curriculum-admin | — | Caption requirements |
| `module2/tutorial-teachable-machine/tutorial.md` | Module 2 → Tutorials → Teachable Machine | tutorial-video | m2-tutorial-teachable | Video production needed |
| `module2/tutorial-teachable-machine/troubleshooting-guide.md` | Module 2 → Tutorial: TM (Troubleshooting tab) | content-reference | — | Render as help section |
| `module2/quiz-perception-concepts/quiz.md` | Module 2 → Quiz: Perception Concepts | quiz | m2-quiz-perception | Convert to quiz schema |
| `module2/quiz-perception-concepts/quiz-answer-key.json` | Platform quiz engine (internal) | curriculum-admin | — | Ingest into quiz schema |
| `module2/quiz-perception-concepts/quiz-guide.md` | Teacher Dashboard → M2 Quizzes | teacher-resource | — | Teacher-only |
| `module2/assessments/exit-tickets.md` | M2 Quiz (supplemental) | assessment-rubric | — | Supplement quiz questions |
| `module2/assessments/vocabulary-list.md` | Module 2 → Vocabulary sidebar | content-reference | — | Glossary sidebar |
| `module2/teacher-guide/teacher-guide.md` | Teacher Dashboard → M2 | teacher-resource | — | Teacher-only |
| `module2/textbook-chapter-2/chapter-2.md` | Module 2 → Textbook: Chapter 2 | lesson | m2-textbook-ch2 | Render as reading |

---

## Module 3 — Give Your Agent a Knowledge Base

*Pattern mirrors Modules 1–2. Abbreviated for key items.*

| File | Platform Location | Content Type | Content Item ID | Action Required |
|------|------------------|--------------|-----------------|-----------------|
| `module3/lesson-3-1-data-to-knowledge/lesson-plan.md` | Module 3 → Lesson 3-1 | lesson | m3-lesson-3-1 | Render |
| `module3/lesson-3-2-decision-trees/lesson-plan.md` | Module 3 → Lesson 3-2 | lesson | m3-lesson-3-2 | Render |
| `module3/lesson-3-3-pattern-recognition/lesson-plan.md` | Module 3 → Lesson 3-3 | lesson | m3-lesson-3-3 | Render |
| `module3/lesson-3-4-openclaw-reasoning/lesson-plan.md` | Module 3 → Lesson 3-4 | lesson | m3-lesson-3-4 | Render |
| `module3/lesson-3-5-limits-ethics-bridge/lesson-plan.md` | Module 3 → Lesson 3-5 | lesson | m3-lesson-3-5 | Render |
| `module3/lab-build-your-first-skill/lab-guide.md` | Module 3 → Labs → Build Your First Skill | lab-external | m3-lab-first-skill | OpenClaw lab |
| `module3/lab-build-your-first-skill/skill-design-worksheet.md` | Module 3 → Labs (worksheet) | content-reference | — | Render inline |
| `module3/activity-build-a-tree/activity-guide.md` | Module 3 → Activities → Build a Tree | activity | m3-activity-tree | Render |
| `module3/activity-pattern-detective/activity-guide.md` | Module 3 → Activities → Pattern Detective | activity | m3-activity-patterns | Render |
| `module3/activity-stump-the-ai/activity-guide.md` | Module 3 → Activities → Stump the AI | activity | m3-activity-stump | Render |
| `module3/tutorial-decision-tree-builder/tool-spec.md` | Module 3 → Interactive Tool: Decision Tree Builder | tutorial-interactive | m3-tool-decision-tree | Per-module tool spec; platform hosts/launches tool |
| `module3/tutorial-how-ai-thinks/SCRIPT.md` | Module 3 → Tutorials → How AI Thinks | tutorial-video | m3-tutorial-thinking | Video production needed |
| `module3/assessments/quiz.md` | Module 3 → Quiz | quiz | m3-quiz | Convert to quiz schema |
| `module3/assessments/vocabulary-list.md` | Module 3 → Vocabulary | content-reference | — | Glossary sidebar |
| `module3/teacher-guide/teacher-guide.md` | Teacher Dashboard → M3 | teacher-resource | — | Teacher-only |
| `module3/textbook-chapter-5/chapter-5.md` | Module 3 → Textbook: Chapter 5 | lesson | m3-textbook-ch5 | Render |
| `module3/textbook-chapter-6/chapter-6.md` | Module 3 → Textbook: Chapter 6 | lesson | m3-textbook-ch6 | Render |

---

## Module 4 — Give Your Agent the Ability to Learn

| File | Platform Location | Content Type | Content Item ID | Action Required |
|------|------------------|--------------|-----------------|-----------------|
| `module4/lesson-4-1-what-is-ml/lesson-plan.md` | Module 4 → Lesson 4-1 | lesson | m4-lesson-4-1 | Render |
| `module4/lesson-4-2-training-data/lesson-plan.md` | Module 4 → Lesson 4-2 | lesson | m4-lesson-4-2 | Render |
| `module4/lesson-4-3-supervised-learning-lab/lesson-plan.md` | Module 4 → Lesson 4-3 | lesson | m4-lesson-4-3 | Render |
| `module4/lesson-4-4-overfitting/lesson-plan.md` | Module 4 → Lesson 4-4 | lesson | m4-lesson-4-4 | Render |
| `module4/lesson-4-5-bias-in-training-data/lesson-plan.md` | Module 4 → Lesson 4-5 | lesson | m4-lesson-4-5 | Render |
| `module4/lesson-4-6-comparing-models/lesson-plan.md` | Module 4 → Lesson 4-6 | lesson | m4-lesson-4-6 | Render |
| `module4/lab-sentiment-classifier/student-lab-guide.md` | Module 4 → Labs → Sentiment Classifier | lab-external | m4-lab-sentiment | OpenClaw / ML for Kids lab |
| `module4/lab-sentiment-classifier/sample-reviews.md` | Module 4 → Labs → Sentiment Classifier (data) | content-reference | — | Render inline |
| `module4/lab-bias-testing/student-lab-guide.md` | Module 4 → Labs → Bias Testing | lab-external | m4-lab-bias | Lab |
| `module4/lab-bias-testing/bias-worksheet.md` | Module 4 → Labs → Bias Testing (worksheet) | content-reference | — | Render inline |
| `module4/lab-integrate-your-model/lab-guide.md` | Module 4 → Labs → Integrate Your Model | lab-external | m4-lab-integrate | OpenClaw lab |
| `module4/interactive-training-simulator/index.html` | Module 4 → Interactive Tool: Training Simulator | tutorial-interactive | m4-tool-training-sim | Platform hosts iframe or link-out to this HTML tool |
| `module4/tutorial-how-ai-learns/script.md` | Module 4 → Tutorials → How AI Learns | tutorial-video | m4-tutorial-how-ai-learns | Video production needed |
| `module4/tutorial-ml-for-kids/walkthrough-script.md` | Module 4 → Tutorials → ML for Kids | tutorial-video | m4-tutorial-ml-kids | Video production needed |
| `module4/quiz-ml-concepts/quiz.md` | Module 4 → Quiz: ML Concepts | quiz | m4-quiz-ml | Convert to quiz schema |
| `module4/quiz-ml-concepts/quiz.json` | Platform quiz engine | curriculum-admin | — | Ingest directly as quiz schema |
| `module4/quiz-ml-concepts/quiz-answer-key.json` | Platform quiz engine (internal) | curriculum-admin | — | Ingest |
| `module4/activities/01-human-learning-machine-game-guide.md` | Module 4 → Activities | activity | m4-activity-human-machine | Render |
| `module4/activities/02-labeling-sprint.md` | Module 4 → Activities | activity | m4-activity-labeling | Render |
| `module4/activities/03-overfitting-demo-worksheet.md` | Module 4 → Activities | activity | m4-activity-overfitting | Render |
| `module4/activities/04-kmeans-clustering-activity.md` | Module 4 → Activities | activity | m4-activity-clustering | Render |
| `module4/badge-ml-engineer/criteria.md` | Platform: M4 badge criteria (internal) | curriculum-admin | — | Ingest into badge schema for m4-badge |
| `module4/discussion-forum/prompt.md` | Module 4 → Discussion (teacher seeds this) | teacher-resource | — | Teacher seeds M4 forum |
| `module4/assessments/vocabulary-list.md` | Module 4 → Vocabulary | content-reference | — | Glossary |
| `module4/teacher-guide/teacher-guide.md` | Teacher Dashboard → M4 | teacher-resource | — | Teacher-only |
| `module4/textbook-chapter-7/chapter-7.md` | Module 4 → Textbook: Chapter 7 | lesson | m4-textbook-ch7 | Render |
| `module4/textbook-chapter-8/chapter-8.md` | Module 4 → Textbook: Chapter 8 | lesson | m4-textbook-ch8 | Render |

---

## Module 5 — Give Your Agent a Voice

| File | Platform Location | Content Type | Content Item ID | Action Required |
|------|------------------|--------------|-----------------|-----------------|
| `module5/lesson-5-1-how-chatbots-work/lesson-plan.md` | Module 5 → Lesson 5-1 | lesson | m5-lesson-5-1 | Render |
| `module5/lesson-5-2-art-of-the-prompt/lesson-plan.md` | Module 5 → Lesson 5-2 | lesson | m5-lesson-5-2 | Render |
| `module5/lesson-5-3-prompt-engineering-olympics/lesson-plan.md` | Module 5 → Lesson 5-3 | lesson | m5-lesson-5-3 | Render |
| `module5/lesson-5-4-ai-study-partner/lesson-plan.md` | Module 5 → Lesson 5-4 | lesson | m5-lesson-5-4 | Render |
| `module5/lesson-5-5-when-ai-gets-it-wrong/lesson-plan.md` | Module 5 → Lesson 5-5 | lesson | m5-lesson-5-5 | Render |
| `module5/lesson-5-6-how-channels-work/lesson-plan.md` | Module 5 → Lesson 5-6 | lesson | m5-lesson-5-6 | Render |
| `module5/lab-prompt-engineering/lab-guide.md` | Module 5 → Labs → Prompt Engineering | lab-external | m5-lab-prompt-eng | OpenClaw lab |
| `module5/lab-prompt-engineering/prompt-engineering-cheat-sheet.md` | Module 5 → Labs (cheat sheet) | content-reference | — | Render inline |
| `module5/lab-channel-connection/lab-guide.md` | Module 5 → Labs → Channel Connection | lab-external | m5-lab-channel | OpenClaw lab |
| `module5/lab-channel-connection/credential-safety-checklist.md` | Module 5 → Labs → Channel Connection | content-reference | — | Render as safety callout |
| `module5/tutorial-prompt-engineering-sandbox/tool-spec.md` | Module 5 → Interactive Tool: Prompt Sandbox | tutorial-interactive | m5-tool-prompt-sandbox | Per-module tool spec; platform hosts/launches |
| `module5/tutorial-how-llms-work/script.md` | Module 5 → Tutorials → How LLMs Work | tutorial-video | m5-tutorial-llms | Video production needed |
| `module5/quiz-prompt-engineering/quiz.md` | Module 5 → Quiz: Prompt Engineering | quiz | m5-quiz-prompts | Convert to quiz schema |
| `module5/quiz-prompt-engineering/quiz-answer-key.json` | Platform quiz engine | curriculum-admin | — | Ingest |
| `module5/assessments/vocabulary-list.md` | Module 5 → Vocabulary | content-reference | — | Glossary |
| `module5/teacher-guide/teacher-guide.md` | Teacher Dashboard → M5 | teacher-resource | — | Teacher-only |
| `module5/textbook-chapter-9/chapter-9.md` | Module 5 → Textbook: Chapter 9 | lesson | m5-textbook-ch9 | Render |
| `module5/textbook-chapter-10/chapter-10.md` | Module 5 → Textbook: Chapter 10 | lesson | m5-textbook-ch10 | Render |

---

## Module 6 — Make Your Agent Ethical

| File | Platform Location | Content Type | Content Item ID | Action Required |
|------|------------------|--------------|-----------------|-----------------|
| `module6/lesson-6-1-algorithms-as-opinions/lesson-plan.md` | Module 6 → Lesson 6-1 | lesson | m6-lesson-6-1 | Render |
| `module6/lesson-6-2-bias-in-the-wild/lesson-plan.md` | Module 6 → Lesson 6-2 | lesson | m6-lesson-6-2 | Render |
| `module6/lesson-6-3-surveillance-simulator/lesson-plan.md` | Module 6 → Lesson 6-3 | lesson | m6-lesson-6-3 | Render |
| `module6/lesson-6-4-privacy-and-your-data/lesson-plan.md` | Module 6 → Lesson 6-4 | lesson | m6-lesson-6-4 | Render |
| `module6/lesson-6-5-deepfakes-and-misinformation/lesson-plan.md` | Module 6 → Lesson 6-5 | lesson | m6-lesson-6-5 | Render |
| `module6/lesson-6-6-ai-debate-day/lesson-plan.md` | Module 6 → Lesson 6-6 | lesson | m6-lesson-6-6 | Render |
| `module6/lesson-6-7-builders-responsibility/lesson-plan.md` | Module 6 → Lesson 6-7 | lesson | m6-lesson-6-7 | Render |
| `module6/lab-audit-and-govern/lab-guide.md` | Module 6 → Labs → Audit and Govern | lab-external | m6-lab-audit | OpenClaw lab |
| `module6/lab-audit-and-govern/usage-policy-template.md` | Module 6 → Labs → Audit and Govern | content-reference | — | Render as fillable template (badge criterion) |
| `module6/lab-bias-testing-workshop/workshop-guide.md` | Module 6 → Labs → Bias Testing Workshop | lab-external | m6-lab-bias-workshop | Lab |
| `module6/lab-surveillance-simulator/scenario.md` | Module 6 → Labs → Surveillance Simulator | lab-external | m6-lab-surveillance | Lab |
| `module6/activities/stakeholder-mapping/stakeholder-mapping-template.md` | Module 6 → Activities → Stakeholder Mapping | activity | m6-activity-stakeholder | Render |
| `module6/activities/stakeholder-mapping/case-study-1-hiring-algorithm.md` | Module 6 → Activities → Stakeholder Mapping | content-reference | — | Render as case study tabs |
| `module6/activities/stakeholder-mapping/case-study-2-predictive-policing.md` | Module 6 → Activities → Stakeholder Mapping | content-reference | — | Case study tab |
| `module6/activities/stakeholder-mapping/case-study-3-content-recommendation.md` | Module 6 → Activities → Stakeholder Mapping | content-reference | — | Case study tab |
| `module6/tutorial-stakeholder-mapping-tool/tool-spec.md` | Module 6 → Interactive Tool: Stakeholder Mapper | tutorial-interactive | m6-tool-stakeholder | Per-module tool spec; platform hosts/launches |
| `module6/tutorial-ai-and-society/script.md` | Module 6 → Tutorials → AI and Society | tutorial-video | m6-tutorial-society | Video production needed |
| `module6/tutorial-algorithmic-bias/script.md` | Module 6 → Tutorials → Algorithmic Bias | tutorial-video | m6-tutorial-bias | Video production needed |
| `module6/quiz-ethics-scenarios/quiz.md` | Module 6 → Quiz: Ethics Scenarios | quiz | m6-quiz-ethics | Convert to quiz schema |
| `module6/quiz-ethics-scenarios/quiz-answer-key.json` | Platform quiz engine | curriculum-admin | — | Ingest |
| `module6/assessments/badge-criteria.md` | Platform: M6 badge criteria | curriculum-admin | — | Ingest into badge schema |
| `module6/assessments/vocabulary.md` | Module 6 → Vocabulary | content-reference | — | Glossary |
| `module6/teacher-guide/teacher-guide.md` | Teacher Dashboard → M6 | teacher-resource | — | Teacher-only |
| `module6/textbook-chapter-11/chapter-11.md` | Module 6 → Textbook: Chapter 11 | lesson | m6-textbook-ch11 | Render |
| `module6/textbook-chapter-12/chapter-12.md` | Module 6 → Textbook: Chapter 12 | lesson | m6-textbook-ch12 | Render |

---

## Module 7 — Capstone: AI Expo

| File | Platform Location | Content Type | Content Item ID | Action Required |
|------|------------------|--------------|-----------------|-----------------|
| `module7/lesson-7-1-demo-design/lesson-plan.md` | Module 7 → Lesson 7-1 | lesson | m7-lesson-7-1 | Render |
| `module7/lesson-7-2-capability-inventory/lesson-plan.md` | Module 7 → Lesson 7-2 | lesson | m7-lesson-7-2 | Render |
| `module7/workshop-7-3-demo-script/lesson-plan.md` | Module 7 → Workshop 7-3 | lesson | m7-workshop-7-3 | Render |
| `module7/workshop-7-4-rehearsal/lesson-plan.md` | Module 7 → Workshop 7-4 | lesson | m7-workshop-7-4 | Render |
| `module7/workshop-7-5-dry-run/lesson-plan.md` | Module 7 → Workshop 7-5 | lesson | m7-workshop-7-5 | Render |
| `module7/lesson-7-6-ai-expo/lesson-plan.md` | Module 7 → Lesson 7-6: AI Expo | lesson | m7-lesson-7-6 | Render |
| `module7/lesson-7-7-reflection/lesson-plan.md` | Module 7 → Lesson 7-7: Reflection | lesson | m7-lesson-7-7 | Render |
| `module7/capstone-guide/capstone-guide.md` | Module 7 → Capstone Guide | content-reference | m7-capstone-guide | Render as primary reference |
| `module7/demo-prep/demo-script-outline.md` | Module 7 → Activities → Demo Prep | activity | m7-activity-demo-script | Render |
| `module7/demo-prep/capability-inventory-worksheet.md` | Module 7 → Activities | activity | m7-activity-capability-inv | Render |
| `module7/agent-design-journal-final/final-journal-entry-guide.md` | Module 7 → Journal Entry M7 | journal-prompt | m7-journal-final | Extract prompts into M7 journal |
| `module7/agent-design-journal-final/full-year-portfolio-checklist.md` | Module 7 → Journal (portfolio checklist) | content-reference | — | Render as checklist sidebar |
| `module7/tutorial-how-to-pitch/script.md` | Module 7 → Tutorials → How to Pitch | tutorial-video | m7-tutorial-pitch | Video production needed |
| `module7/expo-planning-guide/ai-expo-planning-guide.md` | Teacher Dashboard → M7 Expo Planning | teacher-resource | — | Teacher-only |
| `module7/expo-planning-guide/judging-panel-guide.md` | Teacher Dashboard → M7 | teacher-resource | — | Teacher-only |
| `module7/assessments/ai-expo-presentation-rubric.md` | Teacher Dashboard → M7 Assessment | teacher-resource | — | Teacher-only |
| `module7/assessments/full-year-portfolio-rubric.md` | Teacher Dashboard → M7 Assessment | teacher-resource | — | Teacher-only |
| `module7/assessments/peer-evaluation-form.md` | Module 7 → Activities (peer eval) | activity | m7-activity-peer-eval | Render as activity form |
| `module7/careers-guide/careers-guide.md` | Module 7 → Careers in AI (optional extension) | content-reference | m7-careers | Render as optional resource |
| `module7/teacher-guide/teacher-guide.md` | Teacher Dashboard → M7 | teacher-resource | — | Teacher-only |
| `module7/textbook-chapter-13/chapter-13.md` | Module 7 → Textbook: Chapter 13 | lesson | m7-textbook-ch13 | Render |
| `module7/textbook-chapter-14/chapter-14.md` | Module 7 → Textbook: Chapter 14 | lesson | m7-textbook-ch14 | Render |
| `module7/textbook-chapter-15/chapter-15.md` | Module 7 → Textbook: Chapter 15 | lesson | m7-textbook-ch15 | Render |

---

## Summary Counts

| Category | Count |
|----------|-------|
| Student-facing lessons (render as content) | ~60 |
| Tutorial videos (need production) | 14 |
| Interactive tools (per-module, already specced) | 4 |
| Labs (external, mark-complete) | ~25 |
| Activities (render as content) | ~35 |
| Quizzes (convert to quiz schema) | 7 core + supplemental |
| Journal prompts (extract and embed) | ~21 sections (3/module) |
| Teacher-only resources | ~80 |
| Content references (supplemental, linked) | ~60 |
| Curriculum admin (internal use only) | ~20 |

---

## Action Required Summary

| Action | Files Affected |
|--------|---------------|
| **Render as Markdown → HTML** (direct) | ~95 files |
| **Convert to quiz JSON schema** | 7 quiz files + answer keys |
| **Extract journal prompts** | ~14 reflection/journal files |
| **Produce video from script** | 14 tutorial scripts |
| **Host/integrate interactive tool** | 4 tool-spec files (m3, m5, m6 + m4 has index.html) |
| **Teacher-only (no platform work)** | ~80 files |
| **Ingest badge criteria** | 3 explicit badge-criteria files + implied in module READMEs |
| **Link as downloadable** | ~30 slides outlines, printable templates |

---

*Content Mapping by AI Explorers Curriculum Team · March 2026*
