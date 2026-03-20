# Module 3 Teacher Guide
## Give Your Agent a Knowledge Base — Comprehensive Educator Resource

**For educators without a CS or AI background**
*Module 3 of 7 in the OpenClaw Curriculum*

---

> **This guide is yours.** You don't need to be an AI expert to teach this module — you need to understand the concepts well enough to facilitate student thinking. That's a much lower bar, and this guide is designed to get you there.

---

## Table of Contents

1. [Module Overview](#1-module-overview)
2. [AI4K12 Alignment: Representation & Reasoning](#2-ai4k12-alignment-representation--reasoning)
3. [Through-Line Framing: Where M3 Lives in the Arc](#3-through-line-framing)
4. [Prerequisites & Setup](#4-prerequisites--setup)
5. [Materials Checklist](#5-materials-checklist)
6. [Day-by-Day Pacing Guide](#6-day-by-day-pacing-guide)
7. [Facilitation Tips Per Lesson](#7-facilitation-tips-per-lesson)
8. [The Build Your First Skill Lab: Teacher Setup](#8-build-your-first-skill-lab-teacher-setup)
9. [Ethics Discussion Facilitation (Lesson 3.5)](#9-ethics-discussion-facilitation-lesson-35)
10. [Differentiation Strategies](#10-differentiation-strategies)
11. [Common Student Questions + Teacher FAQ](#11-common-student-questions--teacher-faq)
12. [Cross-Subject Connections](#12-cross-subject-connections)

---

## 1. Module Overview

### Big Ideas

**Module 3 is where students cross from AI users to AI builders.** Up to this point, students have been configuring and querying AI. In M3, they write something — a custom skill — that extends what their agent knows. This is the first time the agent has knowledge that only *their* agent has.

Three big ideas anchor the module:

1. **Knowledge is structured.** Information doesn't become useful to an AI just because it exists — it has to be organized in a form the AI can parse and reason about. Students explore what "organized knowledge" looks like: features, tables, rules, decision trees.

2. **Reasoning is different from remembering.** AI models "know" things from training. But reasoning means taking what you know and applying it to a new situation. This module introduces rule-based and tree-based reasoning — the logical backbone before neural networks take over in M4.

3. **Design decisions have consequences.** When you build a knowledge base, you choose what goes in and what stays out. Those choices shape what the agent can and can't do — and who it helps or harms.

### Learning Goals

By the end of Module 3, students will be able to:

- **Explain** what features are and why machines need numerical representations
- **Design** a knowledge base for a specific domain (choose facts, structure them, justify choices)
- **Write** an OpenClaw SKILL.md with instructions and knowledge base
- **Build and test** a working custom skill deployed to their personal OpenClaw instance
- **Evaluate** their skill's limits and identify at least two ways it could fail or cause harm
- **Connect** representation and reasoning concepts to real-world algorithmic systems

### Pacing Recommendation

| Format | Weeks | Sessions |
|--------|-------|---------|
| Standard (5×/week) | 2–3 weeks | 10–15 class periods |
| Block scheduling (2×/week 90 min) | 3–4 weeks | 7–8 blocks |
| Compressed (limited time) | 1.5 weeks | 8 sessions minimum |

**Minimum viable module:** If you're pressed for time, the non-negotiables are:
- Lesson 3.1 (features concept)
- Lesson 3.3 (knowledge base design)
- The Build Your First Skill Lab
- Lesson 3.5 (ethics)

Everything else enriches the core — but those four cover the essential understanding.

### Essential Questions

1. What's the difference between an AI that *knows* things and one that can *reason* about them?
2. How do you represent knowledge in a way a computer can use?
3. When you build a skill, what are you actually deciding?
4. What could go wrong — and who gets hurt?

---

## 2. AI4K12 Alignment: Representation & Reasoning

### The Five Big Ideas in AI (Brief Primer for Teachers)

AI4K12 is a national initiative that identified five "Big Ideas" all K–12 students should understand:

1. **Perception** — How AI senses the world (Module 2)
2. **Representation & Reasoning** ← *This is Module 3*
3. **Learning** — How AI learns from data (Module 4)
4. **Natural Interaction** — Language and communication (Module 5)
5. **Societal Impact** — Ethics, fairness, consequences (woven throughout)

### Big Idea 2: Representation & Reasoning

This Big Idea breaks into two connected concepts:

**Representation:** AI systems represent the world with formal structures — numbers, graphs, rules, trees. Before a computer can reason about something, it needs a representation of that thing. This is why M3 starts with features and feature vectors: students experience the fundamental act of translating real-world objects into a form machines can process.

**Reasoning:** Given a representation, AI uses different strategies to reach conclusions: rule-based systems (IF-THEN logic), decision trees (branching choices), and search algorithms (trying paths to find solutions). Module 3 covers rule-based reasoning and decision trees in depth.

### Specific AI4K12 Progression Points Addressed

| Grade Band | Progression Point | Where in M3 |
|------------|------------------|-------------|
| 6–8 | Students can construct and use simple decision trees | Lesson 3.2 |
| 6–8 | Students know that AI uses features to represent objects | Lesson 3.1 + Feature Extraction Game |
| 6–8 | Students can explain what a knowledge base is | Lessons 3.1–3.3 |
| 6–8 | Students recognize that AI systems can encode bias | Lesson 3.5 |
| 9–10 | Students understand how feature selection affects model performance | Extension activities |

### CSTA Standards Addressed

| Standard | Description | M3 Lesson |
|----------|-------------|-----------|
| 2-AP-11 | Create clearly named variables that store data, perform operations | Lessons 3.1–3.3 |
| 2-DA-07 | Represent data using multiple encoding schemes | Lesson 3.1 |
| 2-IC-21 | Discuss issues of bias and accessibility in the design of existing technologies | Lesson 3.5 |
| 2-AP-13 | Decompose problems and subproblems into parts to facilitate design | Lab |
| 3A-IC-24 | Evaluate the ways computing impacts personal, ethical, social, economic, and cultural practices | Lesson 3.5 |

---

## 3. Through-Line Framing

### The Agent-Building Arc

Students are building an AI assistant across 7 modules — one capability at a time. Understanding where M3 sits in that arc helps you frame each lesson with a compelling "why."

```
M1: Identity     → Agent knows who it is and what it's for
M2: Vision       → Agent can see and describe the world
M3: Knowledge ←  → Agent has custom domain expertise
M4: Learning     → Agent can learn from new data
M5: Language     → Agent can understand and generate natural language
M6: Ethics       → Agent is designed responsibly
M7: Deployment   → Agent is shipped to a real use case
```

### How M3 Connects M2 to M4

**From M2 (Vision):** In M2, students learned that AI perception works by extracting *features* from images — edges, colors, shapes. That vocabulary carries directly into M3: features are how AI represents anything. The feature extraction game in Lesson 3.1 deliberately echoes M2's image analysis, making the conceptual bridge explicit.

**Into M4 (Learning):** In M4, students will train models — they'll feed data into a system and watch it adjust. But before a model can learn, it needs to represent what it's learning about. The knowledge base students build in M3 becomes a reference: in M4, they'll see how *machine-learned* knowledge differs from the *hand-curated* knowledge they built here. The contrast is the insight.

**The through-line bridge speech** (used in Lesson 3.1):
> "Your agent can talk — that's M1. Your agent can see — that's M2. Now it needs to *know things*. Not just what the internet knows — something *you* put in. By the end of this module, your agent will have knowledge that no other AI has, because you gave it to them."

Use this framing at the **start of Module 3** and **at each lesson start**. Students who see the arc stay motivated through the technical parts.

---

## 4. Prerequisites & Setup

### Student Prerequisites

Students should have completed:

- ✅ **Module 1** — Students have an active OpenClaw instance with a configured agent (name, persona, basic system prompt)
- ✅ **Module 2** — Students understand basic AI agent concepts, have used their agent interactively, and have been introduced to the concept of AI perception

**Minimum bar for M3 readiness:** A student who can open their OpenClaw instance, send a message to their agent, and explain in one sentence what their agent does is ready for M3.

**If some students haven't finished M1/M2:** Pair them with students who have, especially for the lab. The concepts in M3 can be taught without a working agent — students can complete most activities on paper or in simulation — but the lab requires OpenClaw to be running.

### Teacher Prerequisites

No CS or AI background required. Before teaching M3, spend 30 minutes with:

1. **Read** the Module 3 README in full — it gives you the student-facing arc
2. **Try** the Build Your First Skill Lab yourself using the `lab-guide.md` — experience what students will experience
3. **Skim** each lesson plan before teaching it — the "Teacher Says" sections give you scripts you can use verbatim

**If you're nervous:** The most important thing you can do is admit to students that you're learning alongside them. Students respect authentic "I don't know, let's find out" moments more than confident-but-wrong explanations.

### Technical Setup (IT Checklist)

Before Module 3 begins, confirm:

| Item | Required | Notes |
|------|----------|-------|
| OpenClaw installed on student devices | Required for Lab | Can pre-install or use student accounts |
| Text editor available | Required | VS Code, TextEdit, Notepad — any works |
| Internet access | Required for Weather Skill option | Other lab options work offline |
| Student agents configured (M1/M2 complete) | Required for Lab | Lab can be simulated on paper if needed |
| School network allows `wttr.in` | Only for Weather Skill | Test this a week before: `curl https://wttr.in/London?format=3` |
| Printer (optional) | For analog activities | Feature Extraction Game, worksheets |

---

## 5. Materials Checklist

**Print at least one week before your start date.** Items marked ★ are needed for the first lesson.

### Required Materials

- [ ] ★ Whiteboard or display projector (every lesson)
- [ ] ★ Student devices or printed worksheets
- [ ] Feature Extraction Game cards (`lesson-3-1-data-to-knowledge/feature-extraction-game.md`) — print one set per pair
- [ ] Sticky notes or index cards (Lesson 3.1, analog version) — 4–6 per student
- [ ] Markers
- [ ] Decision Tree Builder tutorial printouts or digital access (`tutorial-decision-tree-builder/`)
- [ ] Skill Design Worksheet (`lab-build-your-first-skill/skill-design-worksheet.md`) — one per student
- [ ] Lab Guide (`lab-build-your-first-skill/lab-guide.md`) — one per student or shared digitally
- [ ] Case Studies handout (`lesson-3-5-limits-ethics-bridge/case-studies.md`) — one per group of 3
- [ ] Reasoning Failure Audit worksheet (`lesson-3-5-limits-ethics-bridge/reasoning-failure-audit.md`) — one per student

### Optional / Enhancement Materials

- [ ] Physical props for Lesson 3.1 (a small stuffed animal, a piece of fruit, a rock — anything that can be "feature extracted")
- [ ] Pattern Detective activity cards (`activity-pattern-detective/`) — for early finishers
- [ ] Stump the AI activity (`activity-stump-the-ai/`) — for extension learners or enrichment days
- [ ] Build-a-Tree activity (`activity-build-a-tree/`) — hands-on decision tree building

### Digital Prep

- [ ] Bookmark the module README for student reference: `module3/README.md`
- [ ] Test OpenClaw on your own teacher device — know what a working student experience looks like
- [ ] Pre-create a demo skill (use the Riddle Skill example in the Lab Teacher Guide) — having a live demo ready saves 10 minutes of setup panic
- [ ] If using Google Forms for exit tickets, set them up before Day 1

---

## 6. Day-by-Day Pacing Guide

> This guide assumes 45–50 minute class periods. Adjust timing for block schedules by roughly doubling each session's depth.

### Overview

| Day | Lesson | Core Activity | Est. Time |
|-----|--------|---------------|-----------|
| 1 | Lesson 3.1 | From Data to Knowledge — Feature Extraction Game | 50 min |
| 2 | Lesson 3.2 | Decision Trees — Build-a-Tree Activity | 50 min |
| 3 | Lesson 3.3 | Pattern Recognition — How AI Learns Patterns | 50 min |
| 4 | Lesson 3.4 | OpenClaw Reasoning — How Your Agent Thinks | 50 min |
| 5 | Lesson 3.5 | Limits + Ethics Bridge — Case Studies + Audit | 50 min |
| 6–7 | Lab (Day 1) | Skill concept intro + Skill Design Worksheet | 45–50 min |
| 8–9 | Lab (Day 2) | Build SKILL.md + test + refine | 45–50 min |
| 10 | Lab (Day 3) | Skill Showcases | 45–50 min |
| 11 | Buffer | Catch-up, extension activities, reflection | 50 min |

### Detailed Daily Plan

#### Day 1 — Lesson 3.1: From Data to Knowledge

**Goal:** Students understand that AI needs numerical representations; they connect this to M2 (perception features).

| Time | Activity | Notes |
|------|----------|-------|
| 0–5 min | Through-line bridge: review M2, tease M3 capability unlock | Use the speech from Section 3 above |
| 5–13 min | Hook: "What makes a cat a cat?" discussion | Draw feature table on board |
| 13–20 min | Mini-lecture: features, feature vectors, training data | Keep it visual; refer to board table |
| 20–35 min | Feature Extraction Game (pairs) | Circulate actively; push for precision |
| 35–45 min | Debrief + bridge to M3 knowledge base | Save last 5 min for exit ticket |
| 45–50 min | Exit ticket | 3 questions; collect or photograph |

**Homework option:** "Find one AI system you interact with (Netflix? Spotify? Google Maps?). What features do you think it uses to make decisions about you?"

---

#### Day 2 — Lesson 3.2: Decision Trees

**Goal:** Students understand how rule-based AI reasons by working through decision trees manually.

| Time | Activity | Notes |
|------|----------|-------|
| 0–5 min | Warm-up: share homework findings from Day 1 | Quick pair-share |
| 5–15 min | Intro to decision trees — "Is it a mammal?" worked example | Build tree on board together |
| 15–30 min | Build-a-Tree activity (groups of 3–4) | Each group builds a different tree |
| 30–40 min | Gallery walk: evaluate other groups' trees | Sticky note feedback |
| 40–48 min | Debrief: where do trees break down? | Seed the "limits" discussion for Lesson 3.5 |
| 48–50 min | Exit ticket | One thing learned, one question |

**Teacher note:** Decision trees are the clearest example of human-readable AI reasoning students will see. Don't rush past this — it's the conceptual foundation for understanding why neural networks are both more powerful and less explainable.

---

#### Day 3 — Lesson 3.3: Pattern Recognition

**Goal:** Students explore how AI identifies patterns in data; they begin designing their own knowledge base domain.

| Time | Activity | Notes |
|------|----------|-------|
| 0–8 min | Pattern Detective warm-up activity | Cards from `activity-pattern-detective/` |
| 8–20 min | Mini-lecture: supervised vs. unsupervised patterns | Keep concrete — use students' own examples |
| 20–35 min | Knowledge base domain brainstorm | Students choose their skill topic today |
| 35–45 min | Share-outs: pair explains their domain choice | Quick validation before lab week |
| 45–50 min | Exit ticket + preview lab week | Show the Lab Guide structure |

**Key moment:** Students choosing their knowledge base domain is a high-engagement moment. Give them real choice. Guide away from topics that are too broad ("all of science") or too sensitive for a shared demo ("my friend's secrets"). Good topics: a game they know deeply, a hobby, a school subject, local geography, a sport, a favorite book/show.

---

#### Day 4 — Lesson 3.4: OpenClaw Reasoning

**Goal:** Students see how their agent actually processes a skill; they understand tool use and function calling at a conceptual level.

| Time | Activity | Notes |
|------|----------|-------|
| 0–5 min | Demo: agent with no skill vs. agent with skill (live demo) | Have your riddle skill ready |
| 5–15 min | Concept: what is a "skill" or "tool" in AI? | Toolbelt analogy |
| 15–25 min | "How AI Thinks" tutorial (self-paced, digital) | `tutorial-how-ai-thinks/` |
| 25–38 min | Skill Design Worksheet Part 1 (planning) | Students start their own skill plan |
| 38–48 min | Pair-share: describe your skill to a partner | Partners give feedback on clarity |
| 48–50 min | Preview lab sessions | Build starts next class! |

---

#### Day 5 — Lesson 3.5: Limits + Ethics Bridge

**Goal:** Students examine real cases of AI reasoning failures and audit their own skills for potential harms.

*(See dedicated Section 9 of this guide for detailed ethics facilitation guidance.)*

| Time | Activity | Notes |
|------|----------|-------|
| 0–5 min | Warm-up: "Has AI ever confidently told you something wrong?" | Pair-share, then class |
| 5–20 min | Case study groups: COMPAS, hiring screener, credit scoring | Groups of 3, jigsaw structure |
| 20–30 min | Mini-lecture: why reasoning AI fails (3 root causes) | Use board concept map |
| 30–40 min | Reasoning Failure Audit of their own skill design | Individual work |
| 40–48 min | Discussion: who is responsible? | See facilitation notes in Section 9 |
| 48–50 min | Exit ticket | What did you add or change in your skill design after the audit? |

---

#### Days 6–7 — Lab Day 1: Concept Intro + Design

| Time | Activity | Notes |
|------|----------|-------|
| 0–15 min | Lab intro lesson (toolbelt analogy + live demo) | Even if students saw Day 4 demo |
| 15–30 min | Students complete Skill Design Worksheet (finish or start) | Circulate and check plans before building |
| 30–40 min | Worksheet share-out + teacher approval | You are approving the scope before they build |
| 40–50 min | Begin SKILL.md draft | First lines only; get started |

---

#### Days 8–9 — Lab Day 2: Build + Test

| Time | Activity | Notes |
|------|----------|-------|
| 0–30 min | Build SKILL.md | Open work time; teacher circulates |
| 30–40 min | Test with 5 queries and document results | See Lab Guide for testing protocol |
| 40–48 min | Refine based on test results | Students fix the #1 thing they found |
| 48–50 min | Preview showcases | Brief them on 2-minute format |

---

#### Day 10 — Lab Day 3: Skill Showcases

| Time | Activity | Notes |
|------|----------|-------|
| 0–5 min | Setup and nerves management | Normalize that live demos sometimes fail |
| 5–43 min | 2-minute showcases (rotating) | ~12–15 students × 2 min = 24–30 min + transitions |
| 43–50 min | Whole-class reflection + module close | What did we build? What's next (M4)? |

**Showcase format:** Name of skill → what it does → live demo → one design decision you made. Time it. Two minutes is tight; that's intentional.

---

#### Day 11 — Buffer / Extension

Use as needed for:
- Students who didn't finish the lab
- Stump the AI activity (`activity-stump-the-ai/`)
- Agent Design Journal writing time
- Module 3 assessments
- Free exploration: what would a Module 4 skill look like?

---

## 7. Facilitation Tips Per Lesson

### Lesson 3.1 — From Data to Knowledge

**Common Misconceptions**

| Misconception | What Students Say | Correction |
|--------------|------------------|------------|
| AI "reads" descriptions like humans | "The computer just reads 'cat' and knows it's a cat" | Computers only work with numbers; they don't read language the way we do — they convert everything to numbers first |
| Features are obvious | "Everyone would pick the same features" | Run the Feature Extraction Game — students will immediately see that feature choices vary |
| More features = always better | "Just measure everything" | Irrelevant features add noise; introduce the idea of *signal vs. noise* |

**Tough Questions Students Ask**

> *"How does the AI know what the numbers mean?"*
→ It learns the pattern from labeled examples. The numbers don't "mean" anything to the machine until it sees them consistently paired with a label.

> *"What if my feature scale is different from someone else's?"*
→ Great question! This is called *normalization*, and it's a real problem in ML. Briefly: you pick a standard scale before training. The important insight is that this is a human design decision.

> *"Do phones really do this?"*
→ Yes. Your phone's camera uses features to decide if a photo has a human face in it. Show them — take a photo in class and point out the face-detection box.

**Where Students Get Stuck**
- Trying to be too precise on the feature scale ("is the cat's fur 6.7 or 7.2 on a scale of 1–10?"). Redirect: "Pick a number that feels right — precision matters less than consistency."
- Confusing features with labels. A label is what the object IS (cat/not-cat); a feature is a measurable property OF it.

---

### Lesson 3.2 — Decision Trees

**Common Misconceptions**

| Misconception | Correction |
|--------------|------------|
| Decision trees are just flowcharts | They are — functionally. Help students see that the intuitive flowchart they know IS the AI structure. No mystery here. |
| The order of questions doesn't matter | It does! Good tree design asks the most discriminating question first. Ask: "What question eliminates the most options fastest?" |
| AI trees are infinitely detailed and accurate | Trees overfit — they can memorize training data but fail on new examples. Preview this for M4. |

**Tough Questions**

> *"How does a computer decide which question to ask first?"*
→ It uses math (information gain / Gini impurity). You don't need to teach the math — just say "the algorithm tries every possible question and picks the one that splits the data most evenly."

> *"What happens when no tree branch fits my example?"*
→ The tree reaches a "default" category — or fails. This is a fundamental limitation: trees can't handle what they weren't designed for.

**Where Students Get Stuck**
- Building trees that are too deep (asking 10+ questions before reaching a leaf). Guide toward pruning: "What's the minimum number of questions to classify everything?"
- Circular logic ("Is it a mammal? → Does it have fur? → Is it a mammal?"). Catch this in the gallery walk and ask the group to find the loop.

---

### Lesson 3.3 — Pattern Recognition

**Common Misconceptions**

| Misconception | Correction |
|--------------|------------|
| AI "sees" patterns the way humans do | AI detects statistical regularities — not visual shapes or meaningful connections. A pixel that correlates with "cat" gets weighted up. |
| If the pattern is there, AI will find it | AI finds patterns in *training data*. If the pattern is absent from training, AI won't see it in the real world. |

**Domain Choice Facilitation**
This is the lesson where you help students pick their skill topic. Good facilitation moves:
- Let students brainstorm individually for 2 minutes before sharing
- Help students narrow: "What's one specific thing you know a lot about that other people might not?"
- Watch for scope creep: "all of history" → "the French Revolution" → "what caused the French Revolution"
- Watch for sensitivity: gently redirect away from topics that could expose personal information in a shared demo

---

### Lesson 3.4 — OpenClaw Reasoning

**Common Misconceptions**

| Misconception | Correction |
|--------------|------------|
| The AI reads SKILL.md like a human reads instructions | It processes it as context — part of the prompt. The agent weighs your instructions against its prior training. |
| Skills make the agent infallible on that topic | Skills improve accuracy on that topic; they don't guarantee correctness. |
| More instructions in SKILL.md = better skill | Concise, clear instructions often outperform long, complex ones. Ambiguity is the enemy. |

**Live Demo Tips**
- Keep the demo skill simple (the Riddle Skill or Joke Skill from the lab guide)
- Show failure first: ask the agent something the skill should handle, before the skill is installed
- Then install and show the difference — the contrast is memorable
- If the demo fails (it might!), say "this is actually a perfect example of skill failure — let's debug it together"

**Where Students Get Stuck**
- Understanding the concept of "tool use" — the agent deciding when to call a skill. Analogy: a chef has a knife, a blender, and a pan. They pick the right tool for the right job. The agent reads the skill description to decide if it's the right tool.

---

### Lesson 3.5 — Limits + Ethics Bridge

*(See dedicated Section 9 for comprehensive ethics facilitation guidance.)*

**Common Misconceptions**

| Misconception | Correction |
|--------------|------------|
| Bias only happens in "bad" or careless AI | COMPAS was built carefully. Amazon's hiring screener was built by experts. Bias often emerges from the data, not malice. |
| Fixing the AI fixes the problem | Algorithmic fairness is a complex sociotechnical problem. Even "fair" algorithms exist in unfair systems. |
| This doesn't affect me | Guide students to think about systems that affect them now: school recommendations, social media curation, content moderation. |

---

## 8. Build Your First Skill Lab: Teacher Setup Guide

### Before Day 6 (Lab Day 1) Checklist

- [ ] Read `lab-build-your-first-skill/lab-guide.md` in full — this is the student-facing guide
- [ ] Read `lab-build-your-first-skill/teacher-guide.md` — this has detailed setup notes per skill option
- [ ] Try building at least one skill yourself on your teacher device
- [ ] Prepare your live demo skill (Riddle Skill or Joke Skill recommended)
- [ ] Print or share the Skill Design Worksheet (`skill-design-worksheet.md`) — one per student
- [ ] Confirm OpenClaw is working on all student devices (or plan B — see below)

### Skill Options Overview

| Option | Technical Demand | Recommended For | Key Setup |
|--------|-----------------|-----------------|-----------|
| 🌤️ Weather Skill | Low | Most students | Needs internet + `wttr.in` accessible |
| 😂 Joke Generator | Minimal | Beginners; great for fun | No setup needed |
| 📚 Vocabulary Quiz | Low-Medium | Any; great cross-curricular | Students need word list ready |
| 🔍 Mini-Encyclopedia | Medium | Advanced; highly personal | Students need domain knowledge ready |

**For a class with mixed experience levels:** Let students choose, but nudge beginners toward Joke Generator and advanced students toward Mini-Encyclopedia. The Vocabulary Quiz pairs especially well with whatever content area they're in now.

### How to Scaffold for Different Experience Levels

**Complete Novice** (never written a code-like file before)
- Provide a pre-filled SKILL.md template with `[FILL THIS IN]` placeholders
- Sit with them during the first 10 minutes of build time
- Focus on understanding what a skill *does* rather than writing perfect syntax
- Success metric: they can explain their skill in plain English and demo it

**Intermediate**
- Provide the template but ask them to write at least one original section
- Encourage adding a feature that wasn't in the original template
- Challenge: what edge case does your skill not handle? Fix one.
- Success metric: working skill with one personalized element

**Advanced**
- No template — write from scratch using the examples as reference
- Challenge: design for failure (what happens if the user asks something off-topic?)
- Extend: chain two skills, or build a skill the list didn't include
- Success metric: working skill with original features + can explain design rationale

### What to Do If OpenClaw Is Down

**Plan A — Async fix:** Send a message to your school's tech coordinator and check status at `openclaw.io/status`. Sometimes it's a simple restart.

**Plan B — Paper simulation:** Students write their SKILL.md file and "test" it by role-playing as the agent. Partner A plays the user; Partner B reads the SKILL.md and tries to answer as the skill would. This is surprisingly effective for catching clarity issues in the skill design.

**Plan C — Demo-only:** Use your working teacher device for a whole-class demo. Students design their skills on paper and submit them for "later deployment." Schedule a makeup lab session or let students deploy at home.

**Plan D — Offline skill building:** The Vocabulary Quiz and Mini-Encyclopedia options don't require live OpenClaw connectivity to *design* — students can write the knowledge base and SKILL.md, and test against a partner's questions on paper. Only final deployment requires OpenClaw.

**Prevention tip:** Test OpenClaw on student devices the day *before* lab week starts. Don't wait until Day 6 morning to discover a configuration problem.

### Teacher Circulation Strategy During Build Time

During open build time (Days 8–9), use this circulation pattern:

1. **First 5 minutes:** Don't circulate — let students get started independently. Interrupting too early breaks momentum.
2. **Minutes 5–25:** Active circulation. Spend 1–2 minutes with each student or pair. Ask: "What does your skill do? Read me the description out loud."
3. **The test is the proof:** Ask every student: "Show me one question that should trigger your skill and one that shouldn't." If they can't show you both, they need to refine.
4. **Praise specific work:** "I like how you defined when NOT to use this skill — that's a hard design decision."
5. **Last 5 minutes:** Announce wrap-up. Students stop building and document what they want to fix before showcases.

---

## 9. Ethics Discussion Facilitation: Lesson 3.5

### Why This Lesson Matters

Lesson 3.5 is the ethics pivot of Module 3. Students have spent four days building things. Now they step back and ask: what could go wrong?

This lesson is by design more discussion-heavy and emotionally complex than the others. It connects to real events that have affected real people — including, possibly, students in your classroom whose families have interacted with the criminal justice system, hiring algorithms, or credit scoring.

**Your role** is not to have all the answers. It's to create a space where students can think hard about difficult questions without feeling unsafe.

### Content Overview

The three case studies in `case-studies.md`:
1. **COMPAS** — A tool used in U.S. criminal sentencing that predicted recidivism risk. Found to be biased against Black defendants.
2. **Amazon's Hiring Screener** — An AI that screened resumes; learned to penalize "women's" resumes due to biased training data.
3. **Credit Scoring Black Boxes** — Algorithmic credit decisions that give no explanation, making appeal or understanding impossible.

These are real. Some students may have family members directly affected by systems like COMPAS or credit algorithms.

### Setting the Room

**Before class:**
- Arrange desks in a circle or horseshoe if possible — it signals that discussion is expected
- Write the essential question on the board: *"When AI makes a mistake that hurts someone — who is responsible?"*
- Have the case study handouts printed and ready

**Opening framing (say this explicitly):**
> "Today we're looking at cases where AI systems caused real harm to real people. Some of this might connect to people you know or experiences you've had. That's okay. You can always pass on sharing your own experience — you'll still learn from listening. And if something feels too close to home, I'm here to talk after class."

### Discussion Facilitation Moves

**Starting the discussion:**
- Don't call on the first hand. Wait 5–8 seconds after asking a question. Silence is productive.
- Start with the safer question: "What surprised you in your case study?" before "Who was at fault?"
- Use pair-share before whole-class — it gives students who need to formulate thoughts time to do so

**Managing intensity:**
- If discussion gets heated around racial bias in COMPAS, validate the emotion: "This case makes a lot of people angry — including experts who study it. That anger makes sense."
- If a student shares a personal connection ("my dad got a score like this"), honor it briefly and bring it back to the group: "Thank you for sharing that. Let's think together about what could have been different."
- If a student defends the AI system ("it's just math, it's fair"), use it: "That's a position some people hold — let's pressure-test it. The math is accurate at the population level. Is that the same as being fair to this individual?"

**Redirecting if students get stuck on "just don't use AI":**
> "Okay, let's say we ban AI from sentencing. What do we use instead? Human judges? Are they always fair? What we're really asking is: can we build systems — AI or human — that we trust to make consequential decisions? And if so, how?"

### Handling Sensitive Student Disclosures

**If a student shares that a family member was affected by criminal justice algorithms:**
- Thank them for sharing
- Don't put them in the position of being the "example"
- After class: check in with the student privately
- Consider: does the school counselor need to know?

**If a student shares their own experience with bias or unfair systems:**
- Validate: "I hear you. That experience matters."
- Bridge: "What you're describing is exactly what these researchers found. You experienced firsthand what the data shows."
- Don't make them the lesson's spokesperson: "Would you be okay if I shared what you just said as an example, without naming you?" — and actually get consent

**If a student makes a comment that dismisses or trivializes harm:**
- Don't shame, redirect: "Help me understand your thinking there — what would you say to someone who was directly harmed by this system?"
- Peer correction often works: "Does anyone have a different perspective on what [student] just said?"

### Handling the "But Algorithms Are Objective" Debate

This comes up every time. Here's a scaffolded response:

1. **Affirm the grain of truth:** "You're right that the algorithm does math consistently. It doesn't get tired or have a bad day."

2. **Introduce the limitation:** "But where does the algorithm's data come from? If the arrest rate in a neighborhood is high partly because police patrol that neighborhood more — is that arrest rate an objective reflection of crime, or of policing?"

3. **Introduce GIGO:** "Garbage in, garbage out. If the data has a pattern of bias baked in, the algorithm learns that pattern. It just executes it more consistently."

4. **Close with the deeper question:** "So: is the problem the algorithm, or the data, or the system that produced the data? And if all three are tangled together — what does fixing 'the AI' actually fix?"

### Connecting Student Skills to the Ethics Lesson

The Reasoning Failure Audit worksheet asks students to apply the three failure modes (biased data, proxy variables, black box opacity) to their own skill design. This is intentional: connecting abstract ethics to their own work makes it real.

Walk around during the audit and ask:
- "Who could be harmed by your skill if it made a mistake?"
- "What data did you put in — and could that data have a bias?"
- "If your skill gave a wrong answer, would the user know?"

Most student skills are low-stakes (joke generators, vocabulary quizzes). That's fine — the audit still builds the habit of asking "what could go wrong and who gets hurt?"

---

## 10. Differentiation Strategies

### English Language Learners (ELL)

| Strategy | When to Use | How |
|----------|------------|-----|
| Vocabulary support | Every lesson | Provide the lesson vocabulary table as a physical card; add L1 translations if possible |
| Visual scaffolds | Lessons 3.1–3.2 | Use the physical props for Lesson 3.1; draw feature tables and decision trees visually |
| Native language discussion | Activities | Allow pair discussion in L1 before sharing in English |
| Written before spoken | Discussions | Give 2 minutes to write before calling on students |
| Sentence frames | Ethics discussion | "I think the AI was wrong because ___" / "The person who should be responsible is ___ because ___" |
| Simplified skill options | Lab | Joke Generator and Vocabulary Quiz have the clearest structure; mini-encyclopedia allows personal domain expertise which may be higher in native language than English |

**For the lab specifically:** Consider allowing ELL students to build a vocabulary skill for a language they're learning, or a knowledge base in their L1 that they translate to English. The translation process itself is a rich language learning activity.

### Advanced Learners

| Strategy | When to Use | Activity |
|----------|------------|---------|
| Extension questions | Every lesson | See "tough questions" in each lesson facilitation section — these are appropriate for advanced students to actually research |
| Adversarial design | Lesson 3.1 | Can you design a feature vector that fools the classifier? (Intro to adversarial examples) |
| Tree optimization | Lesson 3.2 | What's the minimum-depth tree that correctly classifies all examples? Prove it. |
| SKILL.md for edge cases | Lab | Advanced students design explicitly for what happens when the user asks the wrong question |
| Research extension | Lesson 3.5 | Investigate one more real-world case of algorithmic harm and prepare a 3-minute presentation |
| M4 preview | Any | Ask: "How would you teach a computer your skill instead of writing it by hand?" — plants the seed for M4 |

### Offline Fallbacks

For classes with no/limited device access:

| Activity | Offline Version |
|----------|----------------|
| Feature Extraction Game | Print and cut cards; use sticky notes as feature values |
| Decision Tree | Physical card sort — write objects on cards, questions on index cards, students physically arrange them |
| Skill Design | Students write SKILL.md on paper; partner "plays" the agent using the written instructions |
| Lab testing | Paper simulation (see Section 8, "What to Do If OpenClaw Is Down") |
| Ethics case studies | Print `case-studies.md`; group discussion with no tech needed |

**Offline module capstone:** Instead of deploying a working skill, students create a "Skill Proposal" — a written SKILL.md plus a one-paragraph reflection on what they'd need to test it. This is a valid alternative assessment if tech access is a barrier.

---

## 11. Common Student Questions + Teacher FAQ

### Student Questions

**"Can the AI just learn my skill automatically instead of me writing it?"**
> Yes, actually — that's what Module 4 is about. In M3 you're building knowledge *by hand*, which helps you understand what a knowledge base actually is. In M4, you'll train a model so it can build a knowledge base from examples. The contrast is intentional.

**"What if my skill is bad? Will the AI get dumber?"**
> No — skills are separate from the base model. Think of it like apps on your phone: a bad app doesn't make your phone worse, it just doesn't work well. You can always delete or rewrite your skill.

**"Can I give my agent a skill to do my homework?"**
> Let's talk about that. What kind of homework? If it's a vocab quiz skill that quizzes you on your words — that's a learning tool. If it's a skill that writes your essays — that's a different question. What do you think the difference is?

**"Why would a company use a biased algorithm if they knew it was biased?"**
> Sometimes they didn't know. Sometimes they knew and used it anyway because it was cheaper or faster. Sometimes "bias" in the algorithm was invisible to the people deploying it because the data looked normal. And sometimes the answer is: financial incentive was stronger than ethical concern. All of those are real reasons, and they're all worth being angry about.

**"Is our data being used to train AI?"**
> Great question — and the honest answer is: it depends on the service. When you use OpenClaw in this class, you can read the privacy policy to find out. This is always a good question to ask about any AI tool you use.

**"What happens if two students build the same skill?"**
> Their skills will perform differently, because they'll make different design choices — different knowledge, different instructions, different scope. Running the same query through both agents and comparing the results is actually a great test activity.

**"Can the AI refuse to use my skill?"**
> The agent decides whether to use a skill based on whether the user's request matches the skill's description. If the description is vague or the request doesn't seem to match, the agent might ignore the skill. That's a design problem you can fix by writing a clearer skill description.

---

### Teacher FAQ

**Q: I'm not a tech person. Can I really teach this?**
A: Yes. The most important concepts — features, decision trees, knowledge bases, ethical implications — are not programming concepts. They're design and reasoning concepts. You don't need to know how to code to facilitate excellent thinking about these ideas. The scripts in each lesson plan are tested and work.

**Q: What if OpenClaw breaks during the lab?**
A: See Section 8 above for the four-plan contingency. Short version: have the paper simulation ready. A student who designs and tests a skill on paper has done 90% of the cognitive work.

**Q: A student wants to build something I'm not sure is appropriate for class. What do I do?**
A: Common examples — a skill about weapons, a skill that roasts specific people, a skill about a very adult topic. Redirect with "what's the audience for this skill?" Most students, when asked to imagine their skill being demoed to the class, self-moderate. For edge cases: the skill must be demoable to the whole class. That's your standard.

**Q: How do I grade the lab?**
A: See the rubric in `lab-build-your-first-skill/teacher-guide.md`. Short version: weight the concept understanding and design decisions more heavily than technical perfection. A student with a beautifully designed but non-working skill taught themselves more than a student who copy-pasted a template that works.

**Q: Do students need to have exactly the same agent setup?**
A: No. The module works with any OpenClaw version that supports skills. Minor differences in agent configuration are fine. What matters is that each student can test their skill against their own agent.

**Q: Can I teach Lesson 3.5 (ethics) if I don't have strong opinions about algorithmic bias?**
A: Yes — and honestly, having strong opinions isn't necessary. The case studies speak for themselves. Your job is to ask good questions and protect the space for honest discussion, not to have the answers.

**Q: The ethics discussion got intense and I'm not sure I handled it well. What do I do?**
A: Take a breath. Check in with the student(s) who seemed most affected. Debrief with a counselor or a trusted colleague if needed. And remember: a discussion getting intense means students are engaging seriously with the material. Some discomfort is productive. You didn't cause the inequity — you created a space to look at it.

---

## 12. Cross-Subject Connections

### Mathematics — Functions and Inputs/Outputs

**The connection:** A skill is a function. It takes an input (a user's question), processes it through rules (the SKILL.md instructions and knowledge base), and returns an output (the agent's response). This is f(x) = y, made concrete.

**Classroom tie-in:**
- During Lesson 3.1, draw the function notation on the board: `classify(feature_vector) → label`
- Ask: "What's the domain of this function? What are the possible inputs?"
- Ask: "What happens when the input is outside the domain?" (Undefined behavior — a great conceptual hook)
- In the lab, have students formally write their skill as: Input → Process → Output before writing SKILL.md

**Vocabulary overlap:** input, output, domain, range, function, variable, value

**Standards:** Common Core 8.F.1 (understand function as a rule assigning one output per input)

---

### English Language Arts — Logical Argument Structure

**The connection:** A well-written SKILL.md is a logical argument. It states a claim ("when the user asks X"), provides evidence ("the knowledge base says Y"), and draws a conclusion ("therefore respond with Z"). Decision trees are visual logical arguments.

**Classroom tie-in:**
- Before Lesson 3.2, have students read a sample argument structure (claim → evidence → warrant → conclusion)
- Compare to a decision tree: the question is the claim, the branches are evidence, the leaf node is the conclusion
- The Reasoning Failure Audit in Lesson 3.5 is an evidence evaluation exercise — is this data sufficient to support this claim?
- For ELA teachers: have students write the *argument structure* of their skill ("My skill claims that when a user asks about weather, it can answer accurately because...")

**Vocabulary overlap:** claim, evidence, warrant, conclusion, logical fallacy, assumption

**Standards:** CCSS.ELA-LITERACY.W.6.1 (Write arguments to support claims with clear reasons and relevant evidence)

---

### Social Studies — Algorithmic Decision-Making in Society

**The connection:** Module 3, especially Lesson 3.5, is directly about how algorithmic systems affect social institutions — the justice system, employment, financial access. This is civics, history, and economics all at once.

**Classroom tie-in:**

*For a government/civics unit:*
- COMPAS connects to due process, presumption of innocence, and the right to understand a decision made about you
- Ask: "The 14th Amendment guarantees equal protection. Can an algorithm violate the 14th Amendment?"

*For an economics unit:*
- Credit scoring algorithms determine who gets loans, at what rates, which determines who can start businesses, buy homes, build wealth
- Ask: "If an algorithm perpetuates existing wealth inequalities, is it fair even if it's 'accurate'?"

*For a history unit:*
- Redlining was a government-codified geographic bias in lending — credit scoring algorithms that use ZIP codes as features may encode the same geography
- Ask: "How can past discrimination show up in present-day AI systems even if no one today is intentionally discriminating?"

**Vocabulary overlap:** due process, algorithmic accountability, transparency, recourse, redlining, proxy variable, systemic bias

**Standards:** C3 Framework D2.Civ.10.6-8 (Explain the relevance of personal interests and perspectives, civic virtues, and democratic principles when people address issues and problems in government and civil society)

---

### Optional: Computer Science / Technology Class Co-Teaching

If you have a CS teacher at your school, Module 3 is an ideal co-teaching opportunity:
- The CS teacher runs the technical implementation (SKILL.md writing, OpenClaw deployment)
- The classroom teacher runs the ethics discussion and cross-subject connections
- Both teachers are present for showcases

This models the interdisciplinary reality of AI work: technical and ethical decisions are made together.

---

## Appendix: Quick Reference Card

*Print this page and keep it with you during Module 3.*

**Module 3 in one sentence:** Students build a custom knowledge base for their AI agent, learning how machines represent and reason about information — and what can go wrong.

**The three essential concepts:**
1. Features — numbers that describe the world
2. Decision trees — rules that reason about features
3. Knowledge base — structured information an agent can look up

**The arc:**
M2 (Vision) → **M3 (Knowledge)** → M4 (Learning)

**When students ask "why are we doing this?":**
> "You're going from being someone who *uses* AI to someone who *designs* it. That distinction matters. When you understand how it works, you can make better tools — and catch it when it does something wrong."

**If OpenClaw breaks:** Paper simulation (partner plays the agent using the SKILL.md)

**If the ethics discussion gets heavy:** That's okay. Validate, protect, and follow up with affected students afterward.

**The most common teacher mistake:** Rushing past the feature extraction and decision tree concepts to get to the lab. The concepts are the foundation — if students don't have them, the lab is just copy-paste.

---

*Module 3 Teacher Guide — OpenClaw Curriculum*
*For educators without a CS/AI background. You've got this.*

*Part of the OpenClaw Curriculum — Module 3 of 7*
*Previous: [Module 2 Teacher Guide](../../module2/teacher-guide/) | Next: [Module 4 Teacher Guide](../../module4/teacher-guide/)*
