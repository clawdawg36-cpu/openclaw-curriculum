# Module 3: Representation & Reasoning
## *Teaching Your Agent What to Know*

**Grade Band:** 6–8
**Duration:** 2–3 weeks (10–15 class periods, 45–50 min each)
**Capability Unlock:** Students give their agent a custom knowledge skill

---

## Overview

Module 3 is where students stop feeding their agent pre-built models and start *teaching* it things themselves. In Module 2, students gave their agent the ability to perceive the world — to see images and interpret sounds. Now they take the next step: they give their agent a **domain of knowledge** and teach it to reason within that domain.

The central challenge of this module is **representation**: how do you take something you know (facts about marine biology, sports statistics, local history) and encode it in a form that a machine can reason with? Students discover that intelligence isn't magic — it's structure. Data becomes knowledge only when it's organized, labeled, and linked.

By the end of the module, every student has a working **custom knowledge skill** running inside their agent — a piece of code that encodes facts and applies decision logic to answer questions in a domain the student chose.

---

## Big Ideas (AI4K12)

This module addresses two of the Five Big Ideas in AI:

### Big Idea 2: Representation & Reasoning
The central thread of this module. Students explore how knowledge must be *represented* in structured form before a machine can reason with it. Topics include:
- Feature vectors and how properties become numbers
- Decision trees as a visual model of if-then reasoning
- Pattern recognition as a form of learned representation
- The limits of rule-based reasoning and where it breaks down

### Big Idea 1: Perception (Bridging from M2)
Module 3 opens by revisiting perception — how does what an agent *perceives* get turned into something it can *reason about*? This connection reinforces that perception and reasoning are not separate but sequential stages of AI processing.

---

## Learning Goals

By the end of Module 3, students will be able to:

1. **Explain representation** — Describe how real-world information is converted into structured data (feature vectors, labeled categories, decision rules) that a computer can process.

2. **Build a decision tree** — Construct a working decision tree by hand and using a digital tool, and explain how each node and branch represents a reasoning step.

3. **Identify patterns in data** — Apply a simple pattern-recognition algorithm to a dataset and evaluate how well it generalizes to new examples.

4. **Write a custom knowledge skill** — Create and integrate a functional knowledge skill into their personal agent that answers questions in a chosen domain using structured data and conditional logic.

5. **Evaluate reasoning quality** — Identify when an AI system's reasoning succeeds or fails, articulate *why*, and propose how the knowledge representation could be improved.

6. **Connect ethics to knowledge design** — Recognize that the data and rules embedded in an AI skill encode human choices — and that those choices have consequences for fairness and accuracy.

---

## Capability Unlock: Custom Knowledge Skill

> **"Students give their agent a custom knowledge skill."**

This is the core deliverable of Module 3. A **knowledge skill** is a structured module that:
- Stores domain-specific facts as organized data
- Uses decision logic (if-then rules, lookup tables, or simple classifiers) to answer questions
- Is callable by the agent's core reasoning engine
- Returns answers in natural language

Students choose their own domain (sports, animals, music, geography, food, local history, etc.), research and encode relevant facts, design the decision logic, and test their skill against edge cases. The skill must be working and integrated into their agent by the end of the module's lab session.

**Example skill domains from previous cohorts:**
- Which NBA player should I watch based on my style preferences?
- Is this bird native to California?
- What's the right pasta shape for this sauce?
- Should I bring an umbrella today? (local weather rules)

---

## Lesson Sequence

### Lesson 3.1 — From Data to Knowledge
**Duration:** 2 class periods
**Big Question:** *What's the difference between data and knowledge?*

Students examine raw datasets (a spreadsheet of animals, a table of weather readings) and ask: when is data just data, and when does it become something a machine can "know"? Introduces feature representation — converting properties into numeric vectors. Students practice encoding real-world items as feature vectors by hand.

**Key concepts:** feature, feature vector, representation, encoding, structured data
**Activity:** Feature Encoding Workshop — students pick 5 real-world objects and encode them as vectors

---

### Lesson 3.2 — Decision Trees: Reasoning in Branches
**Duration:** 2 class periods
**Big Question:** *How do you teach a machine to make decisions step by step?*

Students are introduced to decision trees as a visual representation of if-then logic. They build decision trees on paper first (classifying snacks, movies, animals), then use the Decision Tree Builder tutorial to create a digital version. Emphasis on how the *choice of root node* affects the tree's efficiency.

**Key concepts:** decision node, leaf node, classification, root node, tree depth, overfitting (intro)
**Activity:** Paper Tree Challenge — build the most efficient decision tree for a provided dataset

---

### Lesson 3.3 — Pattern Recognition
**Duration:** 2 class periods
**Big Question:** *How does an AI find structure it wasn't explicitly told to look for?*

Builds on M2 perception concepts to introduce pattern recognition in non-image data. Students run the Pattern Detective activity using tabular data and explore how a system can learn to distinguish categories based on repeated examples. Connects to nearest-neighbor intuition without requiring formal math.

**Key concepts:** pattern, training examples, nearest neighbor (conceptual), generalization, overfitting
**Activity:** Pattern Detective — classify mystery items using only pattern-matching rules derived from example data

---

### Lesson 3.4 — OpenClaw Reasons: How Your Agent Thinks
**Duration:** 2 class periods
**Big Question:** *What's actually happening inside your agent when it answers a question?*

Students examine the OpenClaw reasoning pipeline — how a prompt goes in, what happens inside, and how a response comes out. Demystifies the "black box" by tracing a single query through retrieval, context building, and response generation. Students add a knowledge skill scaffold to their agent and test basic queries.

**Key concepts:** prompt, context window, retrieval, skill invocation, structured response
**Tutorial:** How AI Thinks — walkthrough of OpenClaw's reasoning architecture (non-code)
**Activity:** Stump the AI — test edge cases; discover where the agent's reasoning fails and why

---

### Lesson 3.5 — Limits, Ethics, and the Bridge to Learning
**Duration:** 2 class periods
**Big Question:** *What can't rule-based reasoning do — and why does that matter?*

Students encounter the hard limits of representation and reasoning: the combinatorial explosion problem, the frame problem, and the brittleness of hand-coded rules. Discussion: when a knowledge skill gets something wrong, who is responsible? Introduces the idea that *learning* (Module 4) is how AI systems move beyond rigid rules. Closes the module's narrative arc.

**Key concepts:** edge case, brittleness, knowledge gap, responsibility, transition to ML
**Discussion:** Case studies of AI systems that failed due to poor knowledge representation

---

### Lab: Build Your First Knowledge Skill
**Duration:** 2–3 class periods
**Format:** Project lab (individual or pair)

The capstone lab of Module 3. Students design, implement, and test a custom knowledge skill for their personal agent. Workflow:
1. Choose a domain and write a knowledge brief (1 page)
2. Collect and encode 15–20 facts as structured data
3. Design decision logic (decision tree or rule table)
4. Implement the skill using the OpenClaw skill scaffold
5. Test against 10 queries including at least 3 edge cases
6. Write a reflection in their Agent Design Journal

**Deliverable:** Working knowledge skill, integrated into their agent, with journal entry

---

### Activity Library

| Activity | Type | Duration | Description |
|----------|------|----------|-------------|
| Feature Encoding Workshop | Guided | 30 min | Encode real-world objects as feature vectors |
| Paper Tree Challenge | Group | 45 min | Build decision trees on paper; compete for efficiency |
| Pattern Detective | Individual | 30 min | Classify mystery data using pattern-matching |
| Stump the AI | Pair | 30 min | Find failure cases in the agent's reasoning |
| Build-a-Tree (digital) | Individual | 45 min | Use Decision Tree Builder tool |

---

## Assessment Overview

### Formative Assessments
- **Exit tickets** after Lessons 3.1 and 3.3: short concept-check questions (see `assessments/exit-tickets.md`)
- **Paper Tree Challenge** evaluated for correctness and tree efficiency
- **Pattern Detective** worksheet with explanation of reasoning strategy

### Summative Assessments
- **Module 3 Quiz** — 5-question auto-graded quiz covering representation, decision trees, pattern recognition, and limits (see `assessments/quiz.md`)
  - 50 XP base + bonus for unaided answers
- **Knowledge Skill Project** — graded on: domain knowledge quality, decision logic correctness, edge case handling, and journal reflection
  - Rubric in `lab-build-your-first-skill/rubric.md`

### Agent Design Journal Entry
Students update their journal with:
- Domain chosen and why
- What their skill can and cannot do
- One thing that surprised them when testing

---

## Materials and Tools

### Required
- OpenClaw installed and configured (from M1)
- Student agent with M2 perception skills already deployed
- Decision Tree Builder tutorial (in `tutorial-decision-tree-builder/`)
- How AI Thinks tutorial (in `tutorial-how-ai-thinks/`)
- Skill scaffold template (in `lab-build-your-first-skill/`)

### Physical Materials (per student/pair)
- Printed feature encoding worksheets (Lesson 3.1)
- Large index cards or sticky notes for Paper Tree Challenge
- Whiteboard or large paper for group tree-building

### Digital Tools
- OpenClaw web UI (or local install)
- Any text editor or the OpenClaw skill editor
- Optional: Teachable Machine (for cross-reference from M2), Scratch (for block-based decision tree visualization in lower grades)

### Teacher Resources
- Lesson slide decks in each lesson folder
- Teacher guide: `teacher-guide/`
- Answer keys for exit tickets and quiz in `assessments/`

---

## Connections to Other Modules

### ← Module 2: Perception (Vision & Sound)
Module 3 begins where Module 2 ends: perception produces data, and that data must be *represented* before reasoning can occur. The opening discussion of Lesson 3.1 explicitly revisits the M2 image classifier — "your agent can see this dog, but how does it *know* it's a dog?" This continuity helps students see the curriculum as a coherent build, not isolated units.

Students who built image classifiers in M2 will recognize that feature extraction (M3) is what was happening inside those models — M3 makes the implicit explicit.

### → Module 4: Learning (Machine Learning)
Module 3 closes by establishing the problem that Module 4 solves. Rule-based knowledge skills are powerful but brittle: they can only handle what their creator explicitly anticipated. Module 4 introduces machine learning as the answer — systems that can *discover* patterns in data rather than having every rule hand-coded.

Lesson 3.5 is written as a deliberate setup: students leave with a named frustration ("my skill can't handle this case") that ML will resolve. The knowledge skill they built in M3 also becomes a reference point for comparison in M4 ("what would it take to train a model to do what your skill does?").

---

## Pacing Notes

**2-week version (accelerated):** Combine Lessons 3.1/3.2 and 3.3/3.4 into double periods. Use the lab as homework across 3 days with one full class session for check-ins.

**3-week version (standard):** One lesson per 2 class periods; dedicated lab week at the end. Recommended for first-year implementations.

**Extension opportunities:** Students with prior coding experience can extend their knowledge skill with more sophisticated data structures (dictionaries, small JSON databases). See the advanced extension in `lab-build-your-first-skill/`.

---

*Module 3 is part of the OpenClaw Curriculum — a 7-module build-your-own-AI-assistant course for grades 6–8.*
*For curriculum overview and philosophy, see `CURRICULUM_VISION.md` at the repo root.*
