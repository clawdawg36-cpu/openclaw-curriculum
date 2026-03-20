# Module 3: Give Your Agent a Knowledge Base

---

## 🤖 Your Agent Journey — Module 3 of 7

> **Arc:** *Build Your AI Assistant, Piece by Piece*

**This module's capability unlock: 🧠 Knowledge — Build a custom skill with reasoning.**

Your agent can talk and see. Now teach it something. In this module, you write a custom OpenClaw skill that gives your agent specific knowledge — something *you* decide it should know. Maybe it knows everything about your school. Maybe it knows the rules of your favorite game. Maybe it's an expert in marine biology. Whatever you choose, you'll write the reasoning logic that makes your agent genuinely useful in a domain.

| Before M3 | After M3 |
|-----------|----------|
| Agent knows only what its base model knows | ✅ Agent has custom domain knowledge |
| Agent can perceive but can't reason about a domain | ✅ Agent can reason with if/then logic |
| Agent has no unique knowledge | ✅ Agent has something unique you put into it |

**Previous unlock → Module 2:** Vision (image + audio)
**Next unlock → Module 4:** Give your agent the ability to learn (train a model)

See your full progress: [Your Agent Journey](../AGENT_JOURNEY.md)

---

> *"Intelligence isn't magic — it's structure. Data becomes knowledge only when it's organized, labeled, and linked."*

**Duration:** 2–3 weeks (10–15 class periods, ~50 min each)
**Grade Band:** 6–8 (primary target: 7th grade)
**Prerequisites:** Module 2 — Give Your Agent Vision
**Status:** ✅ Complete — March 2026

---

## Module Arc Narrative

**Module 3 is where students cross from AI users to AI builders.** Up to this point, students have been configuring and querying AI. In M3, they write something — a custom skill — that extends what their agent knows. This is the first time the agent has knowledge that only *their* agent has.

**Phase 1 (Lessons 3.1–3.2): Building the Mental Model**
The module opens by revisiting perception — how does what an agent *perceives* get turned into something it can *reason about*? Lesson 3.1 grounds students in the fundamental act of translation: real-world objects become numbers, numbers become feature vectors, feature vectors become something a machine can compare and classify. Lesson 3.2 introduces decision trees — the clearest example of human-readable AI reasoning students will encounter. Students build trees by hand before touching any code, making the logical structure intuitive.

**Phase 2 (Lessons 3.3–3.4): Under the Hood**
With the mental model in place, students go deeper. Lesson 3.3 introduces pattern recognition in non-image data — how AI finds structure it wasn't explicitly told to look for. Lesson 3.4 demystifies the OpenClaw reasoning pipeline: a prompt goes in, what happens? Students trace a single query through retrieval, context building, and response generation. The "black box" becomes a glass box.

**Phase 3 (Lesson 3.5 + Lab): Building and Reflecting**
The lab is the capstone: students design, implement, and test their own custom knowledge skill. But before they ship, Lesson 3.5 asks the hard questions — what can't rule-based reasoning do? When a skill gets something wrong, who is responsible? Students audit their own designs for potential harms before showcasing them.

**The through-line:** Module 3 connects M2 (perception produces data) to M4 (learning discovers patterns). The hand-curated knowledge skill students build here becomes the reference point in M4: "What would it take to train a model to do what your skill does?" The contrast between building knowledge by hand and letting a model learn it is the insight that drives Module 4.

---

## Essential Questions

1. **What's the difference between an AI that *knows* things and one that can *reason* about them?**
2. **How do you represent knowledge in a way that a computer can use?**
3. **What does it mean to build a "skill" — what are you actually deciding when you design one?**
4. **What domain would you want your agent to be an expert in, and why?**
5. **When a knowledge skill gets something wrong, who is responsible?**

---

## Student "I Can" Statements

By the end of this module, students will be able to say:

- **I can** explain the difference between a base language model's knowledge and a custom skill.
- **I can** describe how real-world information is converted into structured data (feature vectors, labeled categories, decision rules) that a computer can process.
- **I can** construct a working decision tree by hand and explain how each node represents a reasoning step.
- **I can** design a knowledge base for a specific domain (choose facts, structure them, justify choices).
- **I can** write an OpenClaw SKILL.md with instructions, references, and reasoning logic.
- **I can** test my skill by querying my agent and evaluating whether it uses the knowledge correctly.
- **I can** explain what "retrieval-augmented generation" (RAG) means at a conceptual level.
- **I can** identify when a reasoning system fails and explain why.
- **I can** reflect on the design decisions I made and explain why I made them.
- **I can** recognize that the data and rules embedded in an AI skill encode human choices — and those choices have consequences.

---

## Standards Alignment

Module 3 is the curriculum's primary treatment of **AI4K12 Big Idea 2: Representation & Reasoning**. It also bridges from Big Idea 1 (Perception, primary focus of M2). This section maps Module 3 learning experiences to nationally recognized standards frameworks and is intended for curriculum administrators, school adoption reviewers, and instructional coaches evaluating alignment.

### AI4K12 — Five Big Ideas in AI

#### Big Idea 2: Representation & Reasoning *(Primary)*

> *Intelligent agents represent features of the world in order to reason about it.*

| AI4K12 Competency (Grades 6–8) | Module 3 Coverage | Lesson/Activity |
|---|---|---|
| **2-AP-11** Represent data using multiple encoding schemes | Students encode real-world properties as feature vectors using numeric, categorical, and Boolean representations | Lesson 3.1, Feature Encoding Workshop |
| **2-AP-12** Use computational representations to model and organize knowledge | Students design structured knowledge representations (feature tables, decision trees) to organize domain knowledge | Lessons 3.1–3.2, Lab |
| **2-AP-13** Use flowcharts and pseudocode to design and illustrate algorithms | Students diagram their decision tree logic before implementing it; translate tree diagrams into conditional logic | Lesson 3.2, Lab |
| **2-AP-14** Implement knowledge structures as code artifacts | Students implement their knowledge skill using the OpenClaw skill scaffold (conditional logic, data structures) | Lesson 3.4, Lab |
| **2-IC-20** Evaluate the capabilities and limitations of computing systems | Students test their knowledge skill against edge cases and document where rule-based reasoning fails | Lesson 3.5, Stump the AI activity |

#### Big Idea 1: Perception *(Bridging — from M2)*

| AI4K12 Competency (Grades 6–8) | Module 3 Coverage |
|---|---|
| **1-AP-15** Describe how perception data is processed as input to AI systems | Lesson 3.1 explicitly connects M2 perception output (image classification results) to M3 representation input, tracing the pipeline from raw sensory data to structured features |

#### Big Idea 4: Society *(Emerging — extended in M6)*

| AI4K12 Competency (Grades 6–8) | Module 3 Coverage |
|---|---|
| **4-AP-16** Recognize that AI systems encode human choices about what to represent and how | Lesson 3.5 ethics discussion; students reflect on who decided which features to include in their knowledge skill and what that excludes |

### CSTA K–12 CS Standards (2017)

#### Strand: Algorithms & Programming (AP)

| Standard | Description | Module 3 Coverage |
|---|---|---|
| **2-AP-11** | Create clearly named variables that represent different data types and perform operations on their values | Students create named data structures (feature vectors, lookup tables) in their knowledge skill implementation |
| **2-AP-12** | Design and iteratively develop programs that combine control structures, including nested loops and compound conditionals | Knowledge skill logic uses nested conditionals; students iterate on their decision tree during lab testing |
| **2-AP-13** | Decompose problems and subproblems into parts to facilitate the design, implementation, and review of programs | Students decompose their domain into sub-questions their decision tree addresses step by step |
| **2-AP-14** | Create procedures with parameters to organize code and make it easier to reuse | Knowledge skills are written as callable procedures with input parameters (the query) and return values (the answer) |
| **2-AP-17** | Systematically test and refine programs using a range of test cases | Students test their skill with ≥10 queries including edge cases; document failures and iterate |
| **2-AP-19** | Document programs in order to make them easier to follow, test, and debug | Students document their knowledge skill with inline comments and a knowledge brief |

#### Strand: Data & Analysis (DA)

| Standard | Description | Module 3 Coverage |
|---|---|---|
| **2-DA-07** | Represent data using multiple encoding schemes | Feature vectors encode categorical, numeric, and Boolean properties; students compare representations for the same object |
| **2-DA-08** | Collect data using computational tools and transform the data to make it more useful and reliable | Students collect domain facts, structure them as a feature table, and validate for completeness and accuracy |
| **2-DA-09** | Refine computational models based on the data they have generated | After testing their knowledge skill, students revise their decision tree or data encoding based on observed failures |

#### Strand: Impacts of Computing (IC)

| Standard | Description | Module 3 Coverage |
|---|---|---|
| **2-IC-20** | Compare tradeoffs associated with computing technologies that affect people's everyday activities and career options | Lesson 3.5 discusses where rule-based AI fails vs. where it excels; career connections to knowledge engineering |
| **2-IC-21** | Discuss issues of bias and accessibility in design of existing technologies | Lesson 3.5: case studies in algorithmic bias (COMPAS, hiring screeners, credit scoring) |
| **3A-IC-24** | Evaluate ways computing impacts personal, ethical, social, economic, and cultural practices | Lesson 3.5: COMPAS, hiring screeners, credit scoring |

### ISTE Standards for Students (2016)

| Standard | Module 3 Coverage | Evidence Artifact |
|---|---|---|
| **1. Empowered Learner** | Students choose their own domain for their knowledge skill, driving authentic ownership of learning; set personal learning goals in Agent Design Journal | Knowledge skill project and Agent Design Journal entry |
| **3. Knowledge Constructor** | Students research and curate domain facts from multiple sources; evaluate for accuracy and relevance before encoding; construct structured knowledge from unstructured research | Knowledge brief (pre-lab research document) and feature table |
| **5. Computational Thinker** | Students decompose a complex domain into discrete answerable questions; represent knowledge as structured data and decision logic; design, test, and debug algorithms; iterate based on test results | Decision tree diagram, knowledge skill code, test log |
| **6. Creative Communicator** | Students write their knowledge skill to produce natural language responses appropriate for their intended audience; present capabilities and limitations to peers in Stump the AI | Skill output samples, Stump the AI debrief |

### Common Core State Standards — Mathematics

#### Functions (8.F) — Grade 8

| Standard | Connection to Module 3 |
|---|---|
| **8.F.A.1** — Understand that a function is a rule that assigns to each input exactly one output | A knowledge skill is a function: for each input query, it produces exactly one output. Students map inputs to outputs when designing their decision tree. |
| **8.F.B.4** — Construct a function to model a linear relationship between two quantities | Feature encoding introduces representing relationships between real-world quantities as numeric values; students reason about which numeric features best predict an outcome. |

#### Expressions and Equations (7.EE) — Grade 7

| Standard | Connection to Module 3 |
|---|---|
| **7.EE.B.4** — Use variables to represent quantities in a problem | Students use named variables to represent features in their knowledge skill; conditional expressions use these variables to determine outcomes. |

#### Statistics and Probability (6.SP / 7.SP) — Grades 6–7

| Standard | Connection to Module 3 |
|---|---|
| **6.SP.A.2** — Understand that a set of data has a distribution which can be described by its center, spread, and shape | In Pattern Detective (Lesson 3.3), students analyze the distribution of features across categories to identify patterns. |
| **7.SP.A.2** — Use data from a random sample to draw inferences about a population | Students consider whether their 15–20 encoded facts are representative of their domain, and how gaps affect accuracy. |

**Mathematical Practices engaged:** MP.1 (make sense of problems), MP.4 (model with mathematics), MP.6 (attend to precision), MP.7 (look for structure), MP.8 (look for regularity in repeated reasoning).

### Common Core State Standards — English Language Arts

| Standard | Connection to Module 3 |
|---|---|
| **CCSS.ELA-LITERACY.W.7.1** — Write arguments to support claims | Lesson 3.5 ethics discussion; journal reflection asks students to justify design choices; Lab design document |
| **CCSS.ELA-LITERACY.W.7.2** — Write informative/explanatory texts | Students write a knowledge brief explaining their domain, the facts they'll encode, and the decision logic they'll use |
| **CCSS.ELA-LITERACY.W.7.7** — Conduct short research projects | Students research domain facts from multiple sources and evaluate them for accuracy before encoding |
| **CCSS.ELA-LITERACY.RI.7.4** — Determine the meaning of domain-specific vocabulary | All lessons: AI vocabulary (feature, decision tree, knowledge base, retrieval, etc.) |
| **CCSS.ELA-LITERACY.RI.7.8** — Trace and evaluate arguments in a text | Students read and evaluate Lesson 3.5 case studies about AI systems that failed due to poor knowledge representation |
| **CCSS.ELA-LITERACY.SL.7.1** — Engage effectively in collaborative discussions | Lesson 3.5 ethics discussion; Paper Tree Challenge; Stump the AI debrief |
| **CCSS.ELA-LITERACY.SL.7.4** — Present claims and findings | Students present their knowledge skill's capabilities and failure cases to a partner or small group |

### Summary Alignment Table

| Framework | Standards Addressed | Depth |
|---|---|---|
| AI4K12 Big Ideas | Big Idea 2 (primary), Big Idea 1 (bridging), Big Idea 4 (emerging) | Deep |
| CSTA K–12 (2017) | AP: 2-AP-11 through 2-AP-19; DA: 2-DA-07/08/09; IC: 2-IC-20/21/3A-IC-24 | Moderate–Deep |
| ISTE for Students | Standards 1, 3, 5, 6 | Moderate |
| Common Core Math | 6.SP, 7.EE, 7.SP, 8.F; Mathematical Practices 1, 4, 6, 7, 8 | Embedded |
| Common Core ELA | W.7.1/2/7, RI.7.4/7.8, SL.7.1/4 | Embedded |

> **Note for adoption reviewers:** This module is purpose-built around AI4K12 Big Idea 2 and represents one of the most comprehensive 6–8 grade implementations of Representation & Reasoning competencies available in an open curriculum. Math connections are embedded in learning activities rather than taught as separate math lessons. The knowledge brief and Agent Design Journal entry provide natural ELA co-teaching opportunities. Standards not addressed here (Big Ideas 3, 4 beyond intro, 5) are covered in later modules (M4, M6, M5 respectively).

---

## Connections to Other Modules

### ← Module 2: Perception (Vision & Sound)
Module 3 begins where Module 2 ends: perception produces data, and that data must be *represented* before reasoning can occur. The opening discussion of Lesson 3.1 explicitly revisits the M2 image classifier — "your agent can see this dog, but how does it *know* it's a dog?" This continuity helps students see the curriculum as a coherent build, not isolated units.

Students who built image classifiers in M2 will recognize that feature extraction (M3) is what was happening inside those models — M3 makes the implicit explicit.

### → Module 4: Learning (Machine Learning)
Module 3 closes by establishing the problem that Module 4 solves. Rule-based knowledge skills are powerful but brittle: they can only handle what their creator explicitly anticipated. Module 4 introduces machine learning as the answer — systems that can *discover* patterns in data rather than having every rule hand-coded.

Lesson 3.5 is written as a deliberate setup: students leave with a named frustration ("my skill can't handle this case") that ML will resolve. The knowledge skill they built in M3 also becomes a reference point for comparison in M4 ("what would it take to train a model to do what your skill does?").

---

## Module Structure

This module contains five core lessons, one multi-day lab, and supporting activities and tutorials.

| # | Type | Title | Duration | Notes |
|---|---|---|---|---|
| 3.1 | Lesson | From Data to Knowledge | 2 days | Feature vectors, representation, encoding |
| 3.2 | Lesson | Decision Trees: Reasoning in Branches | 2 days | If-then logic, tree building |
| 3.3 | Lesson | Pattern Recognition | 2 days | AI finds structure; connects M2→M3 |
| 3.4 | Lesson | OpenClaw Reasons: How Your Agent Thinks | 2 days | Reasoning pipeline, skill scaffold |
| 3.5 | Lesson | Limits, Ethics, and the Bridge to Learning | 2 days | Failure cases, responsibility, M4 preview |
| Lab | Lab | Build Your First Knowledge Skill | 2–3 days | **Capstone deliverable** |
| — | Tutorial | Decision Tree Builder | Flexible | Digital decision tree tool walkthrough |
| — | Tutorial | How AI Thinks | Flexible | OpenClaw reasoning architecture |
| — | Activity | Feature Encoding Workshop | 30 min | Encode objects as feature vectors |
| — | Activity | Paper Tree Challenge | 45 min | Build decision trees; compete for efficiency |
| — | Activity | Pattern Detective | 30 min | Classify mystery data using pattern-matching |
| — | Activity | Stump the AI | 30 min | Find failure cases in agent reasoning |
| — | Activity | Build-a-Tree (digital) | 45 min | Decision Tree Builder tool |

> **The Lab** is the keystone hands-on experience. Students design, implement, and test a custom knowledge skill deployed to their personal OpenClaw instance. See [`lab-build-your-first-skill/`](./lab-build-your-first-skill/) for all lab materials.

---

## Day-by-Day Pacing Calendar

> **Standard version: 3 weeks (11 days of lessons + 3 lab days + 1 buffer day)**
> Adjust using the flex options below for 1-week or 4-week implementations.

### Week 1 — Representation & Decision Trees

| Day | Focus | Activity | Materials |
|---|---|---|---|
| **Day 1** | Module Launch + Lesson 3.1 | Through-line bridge from M2; "What makes a cat a cat?" discussion; feature table on board | Whiteboard, sticky notes |
| **Day 2** | Lesson 3.1 continued | Feature Encoding Workshop — encode 5 real-world objects as vectors; pair-share | Printed worksheets, `lesson-3-1-data-to-knowledge/` |
| **Day 3** | Lesson 3.2 — Decision Trees | "Is it a mammal?" worked example; build decision tree on board together | Index cards, markers |
| **Day 4** | Lesson 3.2 continued | Paper Tree Challenge (groups of 3–4); gallery walk with sticky note feedback | Large paper or whiteboard |
| **Day 5** | Week 1 Check-in | Exit ticket review; introduce domain choice for lab; students begin brainstorming their knowledge base topic | Exit ticket, domain brainstorm sheet |

### Week 2 — Pattern Recognition + Agent Reasoning

| Day | Focus | Activity | Materials |
|---|---|---|---|
| **Day 6** | Lesson 3.3 — Pattern Recognition | Pattern Detective warm-up; mini-lecture: supervised vs. unsupervised patterns | `activity-pattern-detective/` cards |
| **Day 7** | Lesson 3.3 continued | Students finalize domain choice; pair-share domain brief before lab week | Notebook or journal |
| **Day 8** | Lesson 3.4 — OpenClaw Reasons | Live demo: agent with no skill vs. agent with skill; toolbelt analogy | Teacher device with demo skill ready |
| **Day 9** | Lesson 3.4 continued | How AI Thinks tutorial (self-paced); Skill Design Worksheet Part 1 | `tutorial-how-ai-thinks/`, worksheet |
| **Day 10** | Lesson 3.5 — Limits + Ethics | Case study groups (COMPAS, hiring screener, credit scoring); Reasoning Failure Audit | Printed `case-studies.md`, audit worksheet |

> **📍 After Day 10, Lab Week begins (Days 11–13)**

### Week 3 — Lab: Build Your First Knowledge Skill

| Day | Focus | Activity | Materials |
|---|---|---|---|
| **Day 11** | Lab Day 1 | Lab intro; complete Skill Design Worksheet; teacher approval of scope; begin SKILL.md draft | `lab-build-your-first-skill/` materials, `skill-design-worksheet.md` |
| **Day 12** | Lab Day 2 | Build SKILL.md; test with 5 queries; document results; refine based on findings | Devices, text editor, OpenClaw |
| **Day 13** | Lab Day 3 | Skill Showcases (2-min format: name → what it does → live demo → one design decision) | Working agent skills |
| **Day 14** | Buffer / Extension | Catch-up, Stump the AI activity, Agent Journal writing, module assessments | `activity-stump-the-ai/`, journals |
| **Day 15** | Module Wrap-Up | Update Agent Journey, whole-class reflection, preview Module 4; **Agent Design Journal close** | [AGENT_JOURNEY.md](../AGENT_JOURNEY.md) |

---

## Materials & Tech List

### Physical Materials
- Index cards (for Paper Tree Challenge and Feature Encoding Workshop)
- Large paper or sticky notes (decision tree building)
- Printed feature encoding worksheets (`lesson-3-1-data-to-knowledge/`)
- Printed case study handouts (`lesson-3-5-limits-ethics-bridge/case-studies.md`) — one per group of 3
- Reasoning Failure Audit worksheet — one per student
- Skill Design Worksheet — one per student
- Student notebooks / Agent Design Journals

### Technology
- **OpenClaw** — student instances from M1 (required for Lab)
- **Any text editor** — VS Code, TextEdit, Notepad, Replit, or similar (for SKILL.md writing)
- **Decision Tree Builder** — included in [`tutorial-decision-tree-builder/`](./tutorial-decision-tree-builder/)
- **Teachable Machine** — [teachablemachine.withgoogle.com](https://teachablemachine.withgoogle.com) (optional cross-reference from M2)
- **Scratch** — [scratch.mit.edu](https://scratch.mit.edu) (optional block-based decision tree visualization for lower grades)
- Devices: laptops or tablets (1:1 preferred for Lab week; can share for Weeks 1–2)

### Network / Service Requirements
- Internet access required for Lab (OpenClaw + optional weather skill)
- If using Weather Skill option: confirm school network allows `wttr.in` (test in advance: `curl https://wttr.in/London?format=3`)
- All other lab skill options work offline once OpenClaw is installed

### Teacher Resources
- [Teacher Guide](./teacher-guide/) — full facilitation notes, common misconceptions, ethics discussion guide, differentiation strategies
- [Assessments](./assessments/) — rubrics, exit tickets, quiz
- [Standards Alignment](#standards-alignment) — detailed AI4K12, CSTA, and CCSS mapping (inline above)

---

## Assessment Overview

| Assessment | Type | When | Weight |
|---|---|---|---|
| Exit Ticket (Lessons 3.1, 3.3) | Formative | Days 2, 7 | Ungraded / progress check |
| Paper Tree Challenge | Formative | Day 4 | Completion + correctness |
| Pattern Detective Worksheet | Formative | Day 6 | Participation / completion |
| Skill Design Worksheet | Formative | Day 9–11 | Teacher approval checkpoint |
| Reasoning Failure Audit | Formative | Day 10 | Individual work |
| Lab: Knowledge Skill | Summative | Day 13 | Full rubric (see `lab-build-your-first-skill/rubric.md`) |
| Module 3 Quiz | Summative | Day 14 | 5-question quiz; see `assessments/quiz.md` |
| Agent Design Journal Entry | Reflection | Day 13–14 | Student-facing, ungraded |

### Knowledge Skill Rubric (Summary)
The lab project is graded on four dimensions:
1. **Domain knowledge quality** — Are the facts accurate, specific, and useful?
2. **Decision logic correctness** — Does the skill reason correctly within its scope?
3. **Edge case handling** — Did the student test and account for at least 3 edge cases?
4. **Journal reflection** — Does the student show understanding of what their skill can and cannot do?

See full rubric: [`lab-build-your-first-skill/rubric.md`](./lab-build-your-first-skill/)

### 📓 Agent Design Journal — Module Close Prompt

> **For teachers:** See [`journal-teacher-guide.md`](../journal-teacher-guide.md) for facilitation tips, formative check-in timing, and grading guidance for the Agent Design Journal.

At the end of the module (Day 14–15, after the showcase), students complete a structured journal update in `AGENT_JOURNEY.md`.

**Step 1 — Add the M3 Row to the Module Notes Table:**

| Module | What I built | What surprised me | What I'd change |
|--------|-------------|-------------------|-----------------|
| M3 | | | |

**Prompts:**
1. **What I built:** What domain did you give your agent expertise in? Describe the knowledge base you curated and the reasoning logic you wrote. What can your agent now do that it couldn't before?
2. **What surprised me:** What was hardest to represent as knowledge? Did your agent answer a question in a way that genuinely surprised you — for better or worse? What did the Reasoning Failure Audit (Lesson 3.5) reveal about your own skill?
3. **What I would change:** What's one thing your skill *can't* do — and why? If you had 2 more days, what would you change about your skill's scope, knowledge base, or reasoning logic?

**Step 2 — Update the Agent Status After M3 block:**
```
🤖 [YOUR AGENT NAME]
   Can: Have a conversation, see images, identify audio, use custom knowledge
   Can't yet: Learn from new data, speak out loud, or behave ethically by design
```

**Step 3 — Check the box:**
```
[x] Complete
```

---

## Flex Options

### ⚡ 1-Week Sprint (5 days)

Use when: sub unit, preview module, or compressed schedule.

| Day | Focus |
|---|---|
| Day 1 | Lesson 3.1 + 3.2 combined — features, vectors, decision trees (50 min) |
| Day 2 | Lesson 3.3 + 3.4 combined — patterns, OpenClaw reasoning pipeline |
| Day 3 | Lesson 3.5 — limits and ethics (case study + audit) |
| Day 4 | Lab Day 1+2 combined — design + build SKILL.md |
| Day 5 | Lab showcase + module reflection |

**Skip:** Paper Tree gallery walk, Pattern Detective deep dive, full Stump the AI activity
**Compress:** All formative assessments become exit tickets; journal entry is brief

---

### 📅 4-Week Extended Version (20 days)

Use when: standalone elective unit, first-year implementation, or students need more scaffolding.

**Add in Week 1:**
- Day 2b: Physical props — bring in a real object (stuffed animal, piece of fruit) and "feature extract" it as a class
- Day 4b: Build-a-Tree (digital version) using the Decision Tree Builder tutorial

**Add in Week 2:**
- Day 7b: Students research their domain for homework; bring 10 facts to class vetted for accuracy
- Day 9b: Stump the AI warm-up — test a classmate's draft SKILL.md before the ethics lesson

**Add in Week 3:**
- Extend Lab to 4 full days: Day 11 (design), Day 12 (build), Day 13 (test + refine), Day 14 (showcases)
- Day 15: Guest speaker or virtual visit — someone who builds AI tools professionally

**Add in Week 4 (new):**
- Day 16: "Design Reflection" — what would you change about your skill if you had 2 more days?
- Day 17: Peer test — exchange agents with a partner; find the edges of each other's skill
- Day 18: Write a "skill improvement proposal" — 3 specific changes and why
- Day 19: Preview M4 — what would it take to *train* a model to do what your skill does manually?
- Day 20: Module celebration + Agent Journey update

**Extended assessments:** Add a "Skill Improvement Proposal" as a summative artifact alongside the lab. Students identify 3 ways their skill could fail or harm someone and propose design changes.

---

## Agent Journey Progress Tracker

This module corresponds to **Unlock #3: Knowledge** in the full 7-module arc.

```
Agent Journey Progress:
[ Module 1 ] ✅ Identity        — Your agent has a name and personality
[ Module 2 ] ✅ Perception      — Your agent can see and hear
[ Module 3 ] 🧠 Knowledge      ← YOU ARE HERE
[ Module 4 ]    Learning        — Agent can train a model
[ Module 5 ]    Language        — Agent understands and generates natural language
[ Module 6 ]    Ethics          — Agent is designed responsibly
[ Module 7 ]    Deployment      — Agent is shipped to a real use case
```

**See the full tracker:** [AGENT_JOURNEY.md](../AGENT_JOURNEY.md)

After the Lab, students should:
1. Open their `AGENT_JOURNEY.md` Agent Design Journal
2. Complete the M3 row in the Module Notes table (see Assessment section for full prompts)
3. Update the **Agent Status After M3** block with their agent's current capabilities
4. Check off **Unlock #3: Knowledge** in their journey tracker

---

## Lessons, Labs & Resources in This Module

| Resource | Description |
|----------|-------------|
| [Lesson 3.1](./lesson-3-1-data-to-knowledge/) | From Data to Knowledge: features, vectors, encoding |
| [Lesson 3.2](./lesson-3-2-decision-trees/) | Decision Trees: reasoning in branches, tree building |
| [Lesson 3.3](./lesson-3-3-pattern-recognition/) | Pattern Recognition: how AI finds structure in data |
| [Lesson 3.4](./lesson-3-4-openclaw-reasoning/) | OpenClaw Reasons: how your agent thinks |
| [Lesson 3.5](./lesson-3-5-limits-ethics-bridge/) | Limits, Ethics, and the Bridge to Learning |
| ⭐ [Lab: Build Your First Knowledge Skill](./lab-build-your-first-skill/) | Capstone lab — design, build, test, and deploy a custom skill |
| [Activity: Feature Encoding Workshop](./lesson-3-1-data-to-knowledge/) | Encode real-world objects as feature vectors |
| [Activity: Paper Tree Challenge](./lesson-3-2-decision-trees/) | Build decision trees on paper; compete for efficiency |
| [Activity: Pattern Detective](./activity-pattern-detective/) | Classify mystery data using pattern-matching |
| [Activity: Stump the AI](./activity-stump-the-ai/) | Find failure cases in agent reasoning |
| [Activity: Build-a-Tree (digital)](./activity-build-a-tree/) | Digital decision tree building |
| [Tutorial: Decision Tree Builder](./tutorial-decision-tree-builder/) | Step-by-step tool walkthrough |
| [Tutorial: How AI Thinks](./tutorial-how-ai-thinks/) | OpenClaw reasoning architecture walkthrough |
| [Textbook Chapter 5](./textbook-chapter-5/) | Student-facing reading: Representation |
| [Textbook Chapter 6](./textbook-chapter-6/) | Student-facing reading: Reasoning |
| [Standards Alignment](#standards-alignment) | Detailed AI4K12, CSTA, CCSS mapping (inline in this README) |
| [Assessments](./assessments/) | Rubrics, exit tickets, quiz |
| [Teacher Guide](./teacher-guide/) | Facilitation notes, ethics guide, differentiation, FAQ |

---

*Module 3 of 7 — Previous: [Module 2: Give Your Agent Vision](../module2/README.md) | Next: [Module 4: Give Your Agent the Ability to Learn](../module4/README.md)*

*Last updated: March 2026 — ClawDawg*
