# Module 3: Standards Alignment
## *Representation & Reasoning — Teaching Your Agent What to Know*

**Grade Band:** 6–8
**Duration:** 2–3 weeks

This document maps Module 3 learning experiences to nationally recognized standards frameworks. It is intended for curriculum administrators, school adoption reviewers, and instructional coaches evaluating alignment.

---

## AI4K12 — Five Big Ideas in AI

Module 3 is the curriculum's primary treatment of **Big Idea 2: Representation & Reasoning**. It also bridges from Big Idea 1 (Perception, primary focus of M2).

### Big Idea 2: Representation & Reasoning *(Primary)*

> *Intelligent agents represent features of the world in order to reason about it.*

| AI4K12 Competency (Grades 6–8) | Module 3 Coverage | Lesson/Activity |
|-------------------------------|-------------------|-----------------|
| **2-AP-11** Represent data using multiple encoding schemes | Students encode real-world properties as feature vectors using numeric, categorical, and Boolean representations | Lesson 3.1, Feature Encoding Workshop |
| **2-AP-12** Use computational representations to model and organize knowledge | Students design structured knowledge representations (feature tables, decision trees) to organize domain knowledge | Lessons 3.1–3.2, Lab |
| **2-AP-13** Use flowcharts and pseudocode to design and illustrate algorithms | Students diagram their decision tree logic before implementing it; translate tree diagrams into conditional logic | Lesson 3.2, Lab |
| **2-AP-14** Implement knowledge structures as code artifacts | Students implement their knowledge skill using the OpenClaw skill scaffold (conditional logic, data structures) | Lesson 3.4, Lab |
| **2-IC-20** Evaluate the capabilities and limitations of computing systems** | Students test their knowledge skill against edge cases and document where rule-based reasoning fails | Lesson 3.5, Stump the AI activity |

### Big Idea 1: Perception *(Bridging — from M2)*

| AI4K12 Competency (Grades 6–8) | Module 3 Coverage |
|-------------------------------|------------------|
| **1-AP-15** Describe how perception data is processed as input to AI systems | Lesson 3.1 explicitly connects M2 perception output (image classification results) to M3 representation input, tracing the pipeline from raw sensory data to structured features |

### Big Idea 4: Society *(Emerging — extended in M6)*

| AI4K12 Competency (Grades 6–8) | Module 3 Coverage |
|-------------------------------|------------------|
| **4-AP-16** Recognize that AI systems encode human choices about what to represent and how | Lesson 3.5 ethics discussion; students reflect on who decided which features to include in their knowledge skill and what that excludes |

---

## CSTA K–12 Computer Science Standards (2017)

Module 3 addresses competencies across three CSTA practice areas and two content strands.

### Strand: Algorithms & Programming (AP)

| Standard | Description | Module 3 Coverage |
|----------|-------------|------------------|
| **2-AP-11** | Create clearly named variables that represent different data types and perform operations on their values | Students create named data structures (feature vectors, lookup tables) in their knowledge skill implementation |
| **2-AP-12** | Design and iteratively develop programs that combine control structures, including nested loops and compound conditionals | Knowledge skill logic uses nested conditionals; students iterate on their decision tree during lab testing |
| **2-AP-13** | Decompose problems and subproblems into parts to facilitate the design, implementation, and review of increasingly complex programs | Students decompose their domain (e.g., "classify this bird") into sub-questions their decision tree addresses step by step |
| **2-AP-14** | Create procedures with parameters to organize code and make it easier to reuse | Knowledge skills are written as callable procedures with input parameters (the query) and return values (the answer) |
| **2-AP-17** | Systematically test and refine programs using a range of test cases | Students test their skill with ≥10 queries including edge cases; document failures and iterate |
| **2-AP-19** | Document programs in order to make them easier to follow, test, and debug | Students document their knowledge skill with inline comments and a knowledge brief |

### Strand: Data & Analysis (DA)

| Standard | Description | Module 3 Coverage |
|----------|-------------|------------------|
| **2-DA-07** | Represent data using multiple encoding schemes | Feature vectors encode categorical, numeric, and Boolean properties; students compare representations for the same object |
| **2-DA-08** | Collect data using computational tools and transform the data to make it more useful and reliable | Students collect domain facts, structure them as a feature table, and validate for completeness and accuracy |
| **2-DA-09** | Refine computational models based on the data they have generated | After testing their knowledge skill, students revise their decision tree or data encoding based on observed failures |

### Strand: Impacts of Computing (IC)

| Standard | Description | Module 3 Coverage |
|----------|-------------|------------------|
| **2-IC-20** | Compare tradeoffs associated with computing technologies that affect people's everyday activities and career options | Lesson 3.5 discusses where rule-based AI fails vs. where it excels; career connections to knowledge engineering |
| **2-IC-21** | Describe how computing has changed the way people work, communicate, and solve problems | Students discuss how expert systems and knowledge bases have changed fields like medicine, law, and science |

---

## ISTE Standards for Students (2016)

Module 3 addresses four of the seven ISTE student standards.

### 1. Empowered Learner
> *Students leverage technology to take an active role in choosing, achieving, and demonstrating competency in their learning goals.*

- Students **choose their own domain** for their knowledge skill, driving authentic ownership of learning
- Students set personal learning goals in their Agent Design Journal and reflect on progress
- **Evidence artifact:** Knowledge skill project and Agent Design Journal entry

### 3. Knowledge Constructor
> *Students critically curate a variety of resources using digital tools to construct knowledge.*

- Students **research and curate domain facts** from multiple sources to build their knowledge base
- Students evaluate sources for accuracy and relevance before encoding facts into their skill
- Students construct a structured knowledge representation from unstructured research
- **Evidence artifact:** Knowledge brief (pre-lab research document) and feature table

### 5. Computational Thinker
> *Students develop and employ strategies for understanding and solving problems in ways that leverage the power of technological methods.*

- Students decompose a complex domain into a set of discrete, answerable questions (decomposition)
- Students represent knowledge as structured data and decision logic (abstraction and pattern recognition)
- Students design, test, and debug algorithms in the form of decision trees (algorithm design)
- Students iterate on their skill based on systematic test results (iterative refinement)
- **Evidence artifact:** Decision tree diagram, knowledge skill code, test log

### 6. Creative Communicator
> *Students communicate clearly and express themselves creatively for a variety of purposes using the platforms, tools, styles, formats, and digital media appropriate to their goals.*

- Students write their knowledge skill to produce **natural language responses** appropriate for their intended audience
- Students present their skill's capabilities and limitations to peers in the Stump the AI activity
- **Evidence artifact:** Skill output samples, Stump the AI debrief

---

## Common Core State Standards — Mathematics

Module 3 has natural connections to the **Functions** domain, particularly the concept of input-output relationships.

### Functions (8.F) — Grade 8

| Standard | Connection to Module 3 |
|----------|----------------------|
| **8.F.A.1** — Understand that a function is a rule that assigns to each input exactly one output. The graph of a function is the set of ordered pairs consisting of an input and an output. | A knowledge skill is a function: for each input query, it produces exactly one output (an answer). Students map inputs to outputs when designing their decision tree. Decision trees can be visualized as input-output diagrams. |
| **8.F.B.4** — Construct a function to model a linear relationship between two quantities | Feature encoding (Lesson 3.1) introduces the idea of representing relationships between real-world quantities as numeric values; students reason about which numeric features best predict an outcome. |

### Expressions and Equations (7.EE) — Grade 7

| Standard | Connection to Module 3 |
|----------|----------------------|
| **7.EE.B.4** — Use variables to represent quantities in a problem | Students use named variables to represent features in their knowledge skill; conditional expressions use these variables to determine outcomes. |

### Statistics and Probability (6.SP / 7.SP) — Grades 6–7

| Standard | Connection to Module 3 |
|----------|----------------------|
| **6.SP.A.2** — Understand that a set of data collected to answer a statistical question has a distribution which can be described by its center, spread, and overall shape | In Pattern Detective (Lesson 3.3), students analyze the distribution of features across categories to identify patterns — a practical application of statistical reasoning. |
| **7.SP.A.2** — Use data from a random sample to draw inferences about a population | Students consider whether their 15–20 encoded facts are representative of their domain, and how gaps in the training data affect their skill's accuracy. |

### Mathematical Practices

Module 3 consistently engages the following Standards for Mathematical Practice:

- **MP.1** — Make sense of problems and persevere in solving them *(skill design and testing)*
- **MP.4** — Model with mathematics *(feature encoding, decision tree design)*
- **MP.6** — Attend to precision *(encoding rules exactly, debugging logic errors)*
- **MP.7** — Look for and make use of structure *(finding structure in data; building trees)*
- **MP.8** — Look for and express regularity in repeated reasoning *(pattern recognition across examples)*

---

## Common Core State Standards — English Language Arts

Module 3 involves significant reading, writing, and argumentation, particularly in the knowledge brief, journal reflection, and ethics discussion.

### Writing Standards (Grades 6–8)

| Standard | Connection to Module 3 |
|----------|----------------------|
| **CCSS.ELA-LITERACY.W.7.1** — Write arguments to support claims with clear reasons and relevant evidence | Lesson 3.5 ethics discussion requires students to argue a position on AI responsibility with evidence from their own skill's behavior; journal reflection asks students to justify their design choices |
| **CCSS.ELA-LITERACY.W.7.2** — Write informative/explanatory texts to examine a topic and convey ideas clearly | Students write a **knowledge brief** (pre-lab) explaining their chosen domain, the facts they'll encode, and the decision logic they'll use |
| **CCSS.ELA-LITERACY.W.7.7** — Conduct short research projects to answer a question, drawing on several sources | Students research domain facts from multiple sources and evaluate them for accuracy and relevance before encoding |

### Reading Standards for Informational Text (Grades 6–8)

| Standard | Connection to Module 3 |
|----------|----------------------|
| **CCSS.ELA-LITERACY.RI.7.8** — Trace and evaluate the argument and specific claims in a text, assessing whether the reasoning is sound | Students read and evaluate case studies in Lesson 3.5 about AI systems that failed due to poor knowledge representation; assess whether the reasoning behind each system's design was sound |
| **CCSS.ELA-LITERACY.RI.8.7** — Evaluate the advantages and disadvantages of using different mediums to present an idea | Students compare representing knowledge as prose vs. structured data vs. a decision tree; discuss the advantages and limitations of each format |

### Speaking and Listening (Grades 6–8)

| Standard | Connection to Module 3 |
|----------|----------------------|
| **CCSS.ELA-LITERACY.SL.7.1** — Engage effectively in a range of collaborative discussions | Paper Tree Challenge (Lesson 3.2) and Stump the AI (Lesson 3.4) are collaborative pair/group activities requiring substantive discussion and evidence-based reasoning |
| **CCSS.ELA-LITERACY.SL.7.4** — Present claims and findings, emphasizing salient points in a focused, coherent manner | Students present their knowledge skill's capabilities and failure cases to a partner or small group during the Stump the AI debrief |

### Language Standards (Grades 6–8)

| Standard | Connection to Module 3 |
|----------|----------------------|
| **CCSS.ELA-LITERACY.L.7.3** — Use knowledge of language and its conventions when writing, speaking, reading, or listening | Students write natural language output strings for their knowledge skill, making deliberate choices about register, clarity, and precision |

---

## Summary Alignment Table

| Framework | Standards Addressed | Depth |
|-----------|--------------------|----|
| AI4K12 Big Ideas | Big Idea 2 (primary), Big Idea 1 (bridging), Big Idea 4 (emerging) | Deep |
| CSTA K–12 (2017) | AP: 2-AP-11 through 2-AP-19; DA: 2-DA-07/08/09; IC: 2-IC-20/21 | Moderate–Deep |
| ISTE for Students | Standards 1, 3, 5, 6 | Moderate |
| Common Core Math | 6.SP, 7.EE, 7.SP, 8.F; Mathematical Practices 1,4,6,7,8 | Embedded |
| Common Core ELA | W.7.1/2/7, RI.7.8/8.7, SL.7.1/4, L.7.3 | Embedded |

---

## Notes for Adoption Reviewers

**Primary alignment strength:** This module is purpose-built around AI4K12 Big Idea 2 and represents one of the most comprehensive 6–8 grade implementations of Representation & Reasoning competencies available in an open curriculum.

**Math integration:** Math connections are embedded in learning activities rather than taught as separate math lessons. Teachers do not need to coordinate with math colleagues for this module, though cross-curricular connections are noted in the Teacher Guide for those who wish to make them explicit.

**ELA integration:** The knowledge brief (written pre-lab assignment) and Agent Design Journal entry provide natural opportunities for ELA teachers to co-teach or evaluate written work. The argument writing standard (W.7.1) is particularly well-served by the Lesson 3.5 ethics discussion.

**Standards not addressed:** This module does not address Big Ideas 3 (Learning), 4 (Society, beyond introductory), or 5 (Natural Interaction). These are covered in later modules (M4, M6, M5 respectively).

---

*Standards alignment document for the OpenClaw Curriculum, Module 3.*
*For full curriculum overview, see `CURRICULUM_VISION.md`. For module content, see `module3-overview.md`.*
*Framework sources: AI4K12 (ai4k12.org), CSTA K–12 CS Standards 2017, ISTE Standards for Students 2016, CCSS-M and CCSS-ELA (corestandards.org).*
