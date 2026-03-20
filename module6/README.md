# Module 6: Make Your Agent Ethical — Responsibility, Fairness & Societal Impact

---

## 🤖 Your Agent Journey — Module 6 of 7

> **Arc:** *Build Your AI Assistant, Piece by Piece*

**This module's capability unlock: ⚖️ Responsibility/Ethics — Add guardrails, audit for bias, and write the policy that governs your agent.**

Your agent has been growing since Module 1 — it has a name, vision, knowledge, memory, and a live channel. But a capable agent without ethical guardrails is a liability. In this module, you become the policy-maker, the auditor, and the designer of what your agent *should and shouldn't do.* By the end, your agent is not just powerful — it is responsible.

This module is the ethical reckoning that gives meaning to everything you built in Modules 1–5. It asks the hardest questions of the entire curriculum: not *can* we build this, but *should* we — and on whose terms?

| Before M6 | After M6 |
|-----------|----------|
| Agent has no explicit behavioral rules | ✅ Written usage policy (your words, your rules) |
| No bias documentation | ✅ Bias audit documented and addressed |
| Guardrails are undefined | ✅ Guardrail logic deployed and tested |
| Ethics is abstract | ✅ Ethics is a design decision you made |

**Previous unlock → Module 5:** Communication (live multi-channel delivery)
**Next unlock → Module 7:** Capstone — AI Expo (present your finished agent to the world)

See your full progress: [Your Agent Journey](../AGENT_JOURNEY.md)

---

> *"The question is not whether AI will be used to make decisions that affect human lives. It already is. The question is whether the people building these systems will take responsibility for the outcomes."*

**Duration:** 2–3 weeks (9–11 class periods + 2-day lab)
**Grade Band:** 6–8 (primary target: 7th–8th grade)
**Subject Integration:** Computer Science · ELA · Social Studies / Civics · Critical Thinking

---

> ⚠️ **Content Note for Teachers — Read Before Teaching This Module**
>
> Module 6 addresses topics that may be sensitive for some students: surveillance, facial recognition, algorithmic bias, misinformation, and the potential for AI to be used as a tool of oppression or social control. These are not hypothetical topics — they are present realities that affect students' communities, families, and lives in ways that are not evenly distributed.
>
> **Specific guidance:**
> - **Lesson 6.3 (Surveillance Simulator)** uses a simulated scenario in which students experience being profiled or monitored by an algorithm. This activity is designed to build empathy and critical awareness, but it can surface real feelings about privacy, surveillance, and being unfairly targeted. Pre-screen your class's context before running it. See the full [Sensitivity Prep Guide in teacher-guide/](./teacher-guide/) and allow 30–45 minutes of extra time. Consider a debrief circle, not just an exit ticket.
> - **Lesson 6.4 (Privacy & Your Data)** may reveal that students have personal experience with data collection or privacy violations. Establish trust norms before this lesson.
> - **Lesson 6.5 (Deepfakes & Misinformation)** exposes students to manipulated media. Preview examples before class; skip or replace any that are too close to current events your class is navigating.
> - Students from communities historically harmed by algorithmic systems (predictive policing, child welfare algorithms, hiring tools) may bring personal knowledge or lived experience to these discussions. Center that knowledge; do not debate their reality.
>
> This module does not require students to share personal experiences. Create space for those experiences to surface voluntarily, but never make them required.
>
> **The goal is critical agency, not despair.** Every lesson should end with something students can *do* — a question to ask, a policy to write, a guardrail to implement. Avoid leaving students feeling that AI harm is inevitable or that they have no power. They do.

---

## Essential Questions

1. **Who is responsible when AI does something harmful?** The builder who wrote the code? The company that deployed it? The user who prompted it? The policymaker who allowed it?
2. **What is fairness — and is it possible to build a fair AI system?** Can an algorithm be neutral? Should it be?
3. **What does it mean to "audit" an AI system?** How do you systematically find what's wrong with something you built yourself?
4. **Where does the builder's responsibility end?** If someone uses your agent to spread misinformation, is that your problem?
5. **Who gets to decide the rules?** When you write a usage policy, whose values are you encoding — and whose are you leaving out?

---

## Student "I Can" Statements

By the end of this module, students will be able to say:

- **I can** define algorithmic bias and explain at least two ways it enters an AI system.
- **I can** design and run a structured bias audit of my own agent's outputs.
- **I can** articulate the difference between intent and impact when evaluating AI harm.
- **I can** write a usage policy that clearly defines permitted and prohibited uses for my agent.
- **I can** implement at least one guardrail in OpenClaw that enforces a behavioral limit.
- **I can** explain the difference between rule-based guardrails and model-level alignment.
- **I can** analyze a real-world AI system using a structured ethics framework and defend my assessment in writing.
- **I can** identify what fairness means in a specific context — and explain why definitions of fairness can conflict.
- **I can** explain who is responsible (and at what level) when an AI system causes harm.
- **I can** take a position on an AI ethics question and support it with evidence.

---

## Standards Alignment

### AI4K12 — Big Idea 5: Societal Impact
> *AI can impact society in both positive and negative ways.*

| Standard | Description | Module 6 Connection |
|----------|-------------|---------------------|
| **5-A** | AI can automate tasks, raising questions about employment and access | Lesson 6.7: Builders' responsibility; automation ethics |
| **5-B** | AI can reflect and amplify existing human biases | Lessons 6.1–6.2: Algorithms as opinions; bias in the wild |
| **5-C** | AI is shaped by the choices made by its designers | Lab: Audit and Govern — students are the designers |
| **5-D** | Society uses laws, policies, and norms to govern AI | Lesson 6.6: AI Debate Day; usage policy writing |
| **5-E** | Individuals can take action to shape how AI is used | Lesson 6.7: Responsible disclosure; civic agency |

### CSTA K–12 CS Standards

| Code | Standard | Module 6 Connection |
|------|----------|---------------------|
| **2-IC-20** | Compare tradeoffs associated with computing technologies that affect people's everyday activities | Lessons 6.1–6.4: Tradeoffs of surveillance, personalization, automation |
| **2-IC-21** | Discuss issues of bias and accessibility in the design of existing technologies | Lessons 6.1–6.2: Bias origins and case studies |
| **2-IC-22** | Collaborate with many partners to develop a broader perspective on potential impacts of computational artifacts | Lesson 6.6: AI Debate Day; peer audit sharing |
| **2-IC-23** | Describe tradeoffs between allowing information to be public and keeping information private and secure | Lesson 6.4: Privacy and your data; data collection norms |
| **3A-IC-24** | Evaluate the ways computing impacts personal, ethical, social, economic, and cultural practices | Lessons 6.3–6.5: Surveillance, deepfakes, misinformation |
| **3A-IC-25** | Test, analyze, and describe the impact of removing personal information from a provided dataset | Lab: Bias Testing Workshop — data anonymization activity |
| **3A-IC-27** | Predict how computational artifacts can have unintended effects | All lessons: design decisions → unintended societal effects |
| **3A-AP-22** | Design a solution to a real-world problem involving a human-computer interaction | Key Lab: Guardrail design + implementation |

### ISTE Standards for Students

| Standard | Indicator | Connection |
|----------|-----------|------------|
| **2. Digital Citizen** | 2a — Cultivate and manage digital identity responsibly | Lesson 6.4: Privacy; lesson 6.7: builder identity and responsibility |
| **2. Digital Citizen** | 2b — Act with integrity in technology use | Usage policy writing; bias audit |
| **2. Digital Citizen** | 2c — Demonstrate awareness of technology's impact on culture | Lessons 6.3–6.5: Surveillance, deepfakes, inequity |
| **3. Knowledge Constructor** | 3d — Build knowledge by exploring real-world issues using digital tools | All lessons: case-based exploration of real AI harms |
| **5. Computational Thinker** | 5d — Test and analyze solutions to identify and fix problems | Lab: Bias audit + guardrail testing |
| **6. Creative Communicator** | 6d — Publish or present content that customizes the message for the intended audience | Lesson 6.6: AI Debate Day; usage policy as public document |
| **7. Global Collaborator** | 7b — Use collaborative technologies to work with others on global issues | AI policy discussion as global civic issue |

### Common Core ELA Standards

| Standard | Application in Module 6 |
|----------|------------------------|
| **CCSS.ELA-LITERACY.RI.7.1** — Cite several pieces of textual evidence | Lessons 6.1–6.2: Students cite case studies when arguing about bias |
| **CCSS.ELA-LITERACY.RI.7.6** — Determine author's point of view or purpose | Lesson 6.5: Analyzing deepfake/misinformation rhetoric |
| **CCSS.ELA-LITERACY.RI.7.8** — Trace and evaluate an argument | Lessons 6.1, 6.6: Evaluate claims in AI ethics debates |
| **CCSS.ELA-LITERACY.W.7.1** — Write arguments to support claims with evidence | Reflection Essay (summative): position paper on AI responsibility |
| **CCSS.ELA-LITERACY.W.7.2** — Write explanatory texts to examine a topic | Usage policy writing; bias audit report |
| **CCSS.ELA-LITERACY.W.7.4** — Produce clear and coherent writing appropriate to task | Usage policy: real-world genre writing |
| **CCSS.ELA-LITERACY.W.7.9** — Draw evidence from informational texts | Case study annotations; policy writing research |
| **CCSS.ELA-LITERACY.SL.7.1** — Engage effectively in collaborative discussions | Lessons 6.3, 6.6: Structured seminar and debate |
| **CCSS.ELA-LITERACY.SL.7.4** — Present claims and findings clearly | Lesson 6.6: AI Debate Day presentations |

### C3 Social Studies Standards — Civics & Civic Agency

| Standard | Description | Module 6 Connection |
|----------|-------------|---------------------|
| **D2.Civ.1.6-8** | Distinguish the powers and responsibilities of citizens, political parties, interest groups, and the media in elections and public policy | Lesson 6.6: Who makes AI policy? Citizens, companies, governments? |
| **D2.Civ.2.6-8** | Explain specific roles played by citizens (individuals, groups, and institutions) to develop rules and laws | Lesson 6.7: Students as citizens writing usage rules |
| **D2.Civ.5.6-8** | Explain how governments, corporations, and communities use regulation to govern AI and technology | Lessons 6.6–6.7: AI governance frameworks; real-world policy examples |
| **D2.Civ.7.6-8** | Apply civic virtues and democratic principles in school and community settings | Key Lab: Writing a usage policy as an act of civic agency |
| **D2.Civ.10.6-8** | Explain the relevance of personal interests and perspectives, civic virtues, and democratic principles when people address issues and problems in government and civil society | Essential questions 1–5: Personal stake in AI governance |
| **D4.7.6-8** — Civic Agency | Assess their individual and collective capacities to take action to address local, regional, and global problems | Lesson 6.7: Responsible disclosure; what students can actually *do* |

---

## Module Structure

This module contains seven core lessons and a 2-day keystone lab.

| # | Type | Title | Duration | Notes |
|---|------|-------|----------|-------|
| 6.1 | Lesson | Algorithms as Opinions | 1–2 days | Opening hook: every algorithm encodes values |
| 6.2 | Lesson | Bias in the Wild | 1–2 days | Case studies: Amazon hiring, COMPAS, facial recognition |
| 6.3 | Lesson | **Surveillance Simulator** | **2 days** | ⚠️ See sensitivity note below |
| 6.4 | Lesson | Privacy and Your Data | 1 day | Data collection, consent, and what companies know |
| 6.5 | Lesson | Deepfakes & Misinformation | 1 day | Synthetic media, trust, and epistemics |
| 6.6 | Lesson | AI Debate Day | 1–2 days | Structured debate: AI policy positions |
| 6.7 | Lesson | The Builder's Responsibility | 1 day | Culminating lesson: you built it, you own it |
| **Key Lab** | **Lab (2 days)** | **Audit & Govern Your Agent** | **2 days** | Bias audit + usage policy + guardrail |
| — | Lab | Bias Testing Workshop | Flexible | Supplemental: structured adversarial prompting |

---

## Day-by-Day Pacing Calendar

> **Standard version: 3 weeks (9 lessons/days + 2-day lab)**
> Adjust using the flex options below.

### Week 1 — Algorithms Have Opinions

| Day | Focus | Activity | Materials |
|-----|-------|----------|-----------|
| **Day 1** | Module Launch + Lesson 6.1 | Hook: "Is this AI fair?" case gallery walk — 6 real AI systems, students vote and discuss. Mini-lecture: every algorithm encodes the values of its designers. | Gallery walk cards (in activities/), whiteboard |
| **Day 2** | Lesson 6.1 continued + Lesson 6.2 | What is algorithmic bias? Where does it come from — training data, design choices, deployment context? Case study intro: Amazon hiring tool (2018). | Lesson 6.1 slides, case study handout |
| **Day 3** | Lesson 6.2 — Bias in the Wild | Jigsaw: 4 case studies (COMPAS recidivism algorithm, facial recognition accuracy disparities, predictive policing, social media feeds). Students become experts, teach each other. | Case study packets, jigsaw worksheet |
| **Day 4** | Lesson 6.2 wrap-up + Bias Audit Intro | Debrief jigsaw. Intro the bias audit framework students will use in the Key Lab. Preview: what does it mean to audit *your own* agent? | Bias audit worksheet (lab-audit-and-govern/) |
| **Day 5** | Week 1 Check-In | Formative: Exit ticket + vocabulary checkpoint (terms 1–8). "What I Know / What I Wonder" journal. | Vocab list, notebooks |

### Week 2 — Surveillance, Privacy, and Truth

| Day | Focus | Activity | Materials |
|-----|-------|----------|-----------|
| **Day 6** | ⚠️ Lesson 6.3 — Surveillance Simulator (Day 1) | **See sensitivity prep guide before this lesson.** Students participate in a structured simulation in which an algorithm "watches" and scores their behavior. First session: run the simulation, collect data on how it feels. Debrief with structured prompts. Allow full class period. | `lesson-6-3-surveillance-simulator/` materials, sensitivity prep guide |
| **Day 7** | ⚠️ Lesson 6.3 — Surveillance Simulator (Day 2) | Day 2: analyze the simulation — who was flagged? What patterns emerged? Who was most affected? Connect to real-world surveillance systems (Ring cameras, school monitoring software, predictive policing). Debrief circle (not just exit ticket). | Same materials + debrief protocol |
| **Day 8** | Lesson 6.4 — Privacy and Your Data | What data does your phone collect? What does OpenClaw collect? What do students consent to when they sign up for apps? Hands-on: privacy audit of a familiar app's Terms of Service. | Device (for TOS activity), discussion norms |
| **Day 9** | Lesson 6.5 — Deepfakes & Misinformation | How are deepfakes made? How do you spot them? How do AI-generated images and voices undermine trust? Hands-on: spot-the-fake image activity. Ethics: who is responsible — the creator, the platform, the viewer? | Pre-screened image examples (teacher-curated), detection tools |

> ⚠️ **Lesson 6.3 — Surveillance Simulator: Extra Time and Sensitivity Prep Required**
>
> This lesson is the emotional core of Module 6. It is also the one most likely to surface real feelings, real experiences, and real conflict. Plan for the full two days — do not try to compress it into one period. Prepare by reading the full sensitivity guide in [`teacher-guide/`](./teacher-guide/) *before the week it runs.* Have a quiet workspace option available for students who need to step back. Build in 10–15 extra minutes on Day 7 for the debrief circle — this is not optional. The debrief is where the learning happens.

### Week 3 — Debate, Policy, and the Builder's Responsibility

| Day | Focus | Activity | Materials |
|-----|-------|----------|-----------|
| **Day 10** | Lesson 6.6 — AI Debate Day (Prep) | Assign positions on four AI policy questions (see lesson plan). Students research and prepare arguments. Provide evidence packets. | Debate prep guide, evidence packets |
| **Day 11** | Lesson 6.6 — AI Debate Day (Debate) | Structured debate: four rounds, four AI policy questions. Audience votes + evaluates evidence quality. | Debate rubric (`assessments/rubric-ai-debate.md`) |

### Week 3 (continued) — Key Lab: Audit & Govern Your Agent

| Day | Focus | Activity | Materials |
|-----|-------|----------|-----------|
| **Day 12** | ⭐ Key Lab Day 1 — Bias Audit | Students run 15+ adversarial test prompts on their own OpenClaw agent. Document outputs. Identify patterns. Flag anything concerning. Write up findings in the bias audit report template. | `lab-audit-and-govern/bias-audit-worksheet.md`, student OpenClaw instance |
| **Day 13** | ⭐ Key Lab Day 2 — Usage Policy + Guardrail | Students write a 1-page usage policy for their agent. Then implement at least one guardrail in OpenClaw configuration. Test the guardrail with adversarial inputs. Verify it works. | `lab-audit-and-govern/usage-policy-template.md`, `guardrail-examples.md` |
| **Day 14** | Lesson 6.7 — The Builder's Responsibility | Culminating lesson: What are your obligations as an AI builder? Responsible disclosure. The gap between intent and impact. What would you do if you found a serious problem in a system you didn't build? | Lesson 6.7 slides and discussion guide |
| **Day 15** | Module Wrap-Up + Assessment | Module reflection essay (summative). Vocabulary post-test. Agent Design Journal close. Preview Module 7 — AI Expo. | Reflection rubric (`assessments/rubric-reflection-essay.md`), AGENT_JOURNEY.md |

---

## Materials & Tech List

### Physical Materials
- Printed case study packets (Amazon hiring, COMPAS, facial recognition, predictive policing)
- Gallery walk cards for Day 1 hook (in [`activities/`](./activities/))
- Student notebooks or journals
- Whiteboard / chart paper + markers
- Index cards for debate prep

### Technology
- **Student OpenClaw instances** — required for Key Lab (from Modules 1–5)
- **Laptops or tablets** — 1:1 preferred for Weeks 2–3 labs
- **Pre-screened deepfake examples** — teacher-curated from [detectfakes.com](https://detectfakes.com) or similar (teacher preview required before class)
- **Surveillance Simulator materials** — all in [`lesson-6-3-surveillance-simulator/`](./lesson-6-3-surveillance-simulator/)
- **App TOS for Day 8 activity** — students use their own device to pull up a familiar app (Instagram, TikTok, YouTube) TOS

### Reference Tools
- **AI Incident Database** — [incidentdatabase.ai](https://incidentdatabase.ai) — real-world AI failures for research
- **Algorithmic Justice League** — [ajl.org](https://ajl.org) — bias research and resources
- **Electronic Frontier Foundation** — [eff.org](https://eff.org) — privacy + surveillance resources
- **Mozilla Foundation** — [foundation.mozilla.org](https://foundation.mozilla.org) — internet health + AI ethics
- **Civic Tech + AI tools** — [datasociety.net](https://datasociety.net), [aistudentethics.com](https://aistudentethics.com)

### Teacher Resources
- [Teacher Guide](./teacher-guide/) — lesson plans, facilitation notes, sensitivity prep for 6.3
- [Assessments](./assessments/) — all rubrics and reflection prompts
- [Activities](./activities/) — gallery walk cards, debate evidence packets

---

## Module Arc Narrative

**Module 6 is not a standalone ethics unit.** It is the ethical reckoning that gives meaning to everything students built in Modules 1–5. Without it, students have a capable agent and no framework for what it should or shouldn't do. With it, they have both a tool *and* a set of values they chose to embed in that tool.

**Why This Module Lives Here**
Every previous module gave students power: the power to build an AI agent, give it senses, equip it with knowledge, give it memory, connect it to communication channels. Module 6 asks: *now that you have all that power, what are you going to do with it?* That sequencing is intentional. Students cannot fully engage with AI ethics in the abstract. They engage with it most deeply when they are already invested — when the agent in question is *theirs.*

**The Three Phases of the Module**

**Phase 1 (Lessons 6.1–6.2): Seeing the Problem**
The module opens with a simple, disruptive claim: every algorithm is an opinion. Students often come in believing that algorithms are neutral — that math can't be biased. Lesson 6.1 dismantles this belief with concrete examples. By Lesson 6.2, students are doing case study analysis on real AI systems that caused real harm. The jigsaw structure ensures every student becomes an expert on at least one case — and teaches that expertise to peers. This phase builds the vocabulary and the pattern recognition students need for everything that follows.

**Phase 2 (Lessons 6.3–6.5): Feeling the Problem**
This phase is designed to move ethics from the head to the gut. The Surveillance Simulator (Lesson 6.3) is the most powerful — and most sensitive — activity in the entire curriculum. Students don't just read about surveillance; they experience a version of it in simulation. The debrief is where the learning crystallizes. Lesson 6.4 (Privacy) makes the abstract concrete with a real app TOS. Lesson 6.5 (Deepfakes) asks students to think about epistemology: how do you know what's real? All three lessons build toward the Key Lab's central question: *what does your agent do that you haven't explicitly authorized?*

**Phase 3 (Lessons 6.6–6.7 + Key Lab): Owning the Problem**
The module's third phase is about agency. The AI Debate Day (Lesson 6.6) asks students to take defensible positions on real policy questions — not "should AI be good" (too easy) but specific, contested questions where reasonable people disagree. The Key Lab is the capstone: students become auditors of their own work, write a governance document (the usage policy), and implement a technical control (the guardrail). Lesson 6.7 closes the loop — you built it, you're responsible for it, and here's what responsible builders do.

**The Central Tension**
This module holds two ideas in tension throughout: *AI systems cause real harm* AND *students are capable of building responsible AI systems*. The risk is that students leave either in denial ("AI isn't really that harmful") or in despair ("there's nothing we can do"). The module is designed to produce neither. The goal is *critical agency* — students who understand the problems clearly enough to work on them, and who believe their choices as builders matter.

**Connection to the Full Arc**
Module 6 retroactively reframes everything that came before. The agent students built in M1–M5 is now a case study. When did they think about who their agent serves? What assumptions are baked into its personality (M1)? Its perception models (M2)? Its knowledge base (M3)? Its memory (M4)? Its communication channels (M5)? Every design decision was a values decision. Module 6 is where students see that clearly — and decide what to do about it.

---

## Flex Options

### ⚡ 1-Week Sprint (5 days)

Use when: preview unit, ethics standalone, or compressed schedule.

| Day | Focus |
|-----|-------|
| Day 1 | Lesson 6.1: Algorithms as Opinions — hook + core concept (combine Days 1–2) |
| Day 2 | Lesson 6.2: Bias case studies — jigsaw (compress to 2 cases) |
| Day 3 | Lesson 6.3: Surveillance Simulator (Day 1 only — run simulation, begin debrief) |
| Day 4 | Lesson 6.6 compressed: AI ethics debate (pair discussion format instead of full debate) |
| Day 5 | Key Lab compressed: bias audit only (skip guardrail implementation); reflection |

**Skip:** Full Key Lab (usage policy + guardrail), Lessons 6.4–6.5, 6.7
**Compress:** All formative assessments become exit tickets; reflection becomes a paragraph

**Note:** If you skip Lesson 6.3 Day 2, ensure you still run a full debrief — do not leave students in the middle of the surveillance simulation experience without closure.

---

### 📅 4-Week Extended Version (20 days)

Use when: standalone elective unit, social studies integration, or class with significant prior interest in ethics topics.

**Add in Week 1:**
- Day 4b: Student-choice case study research — each student finds and presents their own AI harm case (2-minute share-outs)

**Add in Week 2:**
- Day 7b: Lesson 6.3 extended debrief — invite a guest speaker (civil rights attorney, privacy advocate, or community organizer) to connect simulation to real-world surveillance
- Day 9b: Deepfake creation ethics — students use a (teacher-approved, face-off) deepfake tool to understand how easy it is; then discuss platform responsibility

**Add in Week 3:**
- Day 11b: Research day — students write a "Fairness Proposal" for one of the AI systems from the Lesson 6.2 jigsaw. How would they redesign it to be more fair? What tradeoffs would they accept? (See `assessments/rubric-fairness-proposal.md`)
- Day 13b: Expert panel — invite local tech professionals to hear students' usage policies and guardrail designs

**Add in Week 4 (new):**
- Day 16: Civic action research — what laws or policies exist in your state/city about AI surveillance, facial recognition, or algorithmic decision-making?
- Day 17: Draft a "community AI policy" as a class — what rules would you want if AI was deployed in your school?
- Day 18: Peer review + revision of community policy
- Day 19: Present community AI policy to another class, administrator, or community stakeholder
- Day 20: Module 7 preview + Agent Journey celebration

**Extended assessments:** Add the Fairness Proposal and Community AI Policy as summative artifacts alongside the reflection essay.

---

### 🔀 For Different Contexts

**No OpenClaw instances?** The Key Lab can be adapted: students audit a publicly available AI tool (Replika, Google Bard, ChatGPT) and write a usage policy for *that* tool instead of their own agent.

**Social studies integration?** Lead with Lessons 6.6 (Debate) and 6.7 (Builder's Responsibility) and use the C3 standards as the primary frame. The Key Lab becomes a "policy document" assignment.

**Students with privacy concerns about simulations?** The Surveillance Simulator can be run with fictional personas instead of students' own behavior — students play characters in a scenario rather than themselves.

---

## Full Resource Table

| Resource | Description |
|----------|-------------|
| [Lesson 6.1](./lesson-6-1-algorithms-as-opinions/) | Algorithms as Opinions — every algorithm encodes values |
| [Lesson 6.2](./lesson-6-2-bias-in-the-wild/) | Bias in the Wild — case studies and jigsaw analysis |
| [Lesson 6.3](./lesson-6-3-surveillance-simulator/) ⚠️ | Surveillance Simulator — 2-day experiential activity; sensitivity prep required |
| [Lesson 6.4](./lesson-6-4-privacy-and-your-data/) | Privacy and Your Data — consent, data collection, TOS analysis |
| [Lesson 6.5](./lesson-6-5-deepfakes-and-misinformation/) | Deepfakes & Misinformation — synthetic media and epistemic trust |
| [Lesson 6.6](./lesson-6-6-ai-debate-day/) | AI Debate Day — structured policy debate |
| [Lesson 6.7](./lesson-6-7-builders-responsibility/) | The Builder's Responsibility — culminating lesson |
| ⭐ [Key Lab: Audit & Govern](./lab-audit-and-govern/) | Bias audit + usage policy + guardrail implementation — 2 days |
| [Lab: Bias Testing Workshop](./lab-bias-testing-workshop/) | Supplemental: structured adversarial prompting workshop |
| [Lab: Surveillance Simulator](./lab-surveillance-simulator/) | Extended simulation materials and facilitation guide |
| [Tutorial: AI and Society](./tutorial-ai-and-society/) | Guided reading and interactive explainer |
| [Tutorial: Algorithmic Bias](./tutorial-algorithmic-bias/) | Student-facing primer on bias origins and types |
| [Textbook Chapter 11](./textbook-chapter-11/) | Student reading: AI Ethics — Theory and Practice |
| [Textbook Chapter 12](./textbook-chapter-12/) | Student reading: Who Governs AI? Policy, Law, and Civic Action |
| [Assessments](./assessments/) | All rubrics and reflection prompts |
| [Teacher Guide](./teacher-guide/) | Facilitation notes, sensitivity prep guide, differentiation |
| [Activities](./activities/) | Gallery walk cards, debate evidence packets, discussion protocols |

### Assessment Overview

| Assessment | Type | When | Rubric |
|------------|------|------|--------|
| Vocabulary checkpoint (terms 1–8) | Formative | Day 5 | Exit ticket |
| Exit tickets (Days 1, 4, 8, 9) | Formative | Each lesson | `assessments/exit-tickets.md` |
| Lesson 6.3 Debrief reflection | Formative | Day 7 | Journal entry (not graded) |
| AI Debate Day | Performance | Day 11 | `assessments/rubric-ai-debate.md` |
| Bias Audit Report | Summative | Day 12 | `assessments/rubric-key-lab.md` |
| Usage Policy Document | Summative | Day 13 | `assessments/rubric-key-lab.md` |
| Working Guardrail Demo | Performance | Day 13 | `assessments/rubric-key-lab.md` |
| Fairness Proposal (extended) | Summative | Week 4 (extended only) | `assessments/rubric-fairness-proposal.md` |
| Reflection Essay | Summative | Day 15 | `assessments/rubric-reflection-essay.md` |
| Portfolio prompt | Reflection | Day 15 | `assessments/portfolio-prompt.md` |
| Module Self-Assessment | Reflection | Day 15 | Student-facing, ungraded |
| Agent Design Journal entry | Reflection | Day 15 | `AGENT_JOURNEY.md` |

---

## 📓 Module Close — Agent Design Journal

> Complete this section at the end of Day 15 (or the final class period of Module 6).

**Open your `AGENT_JOURNEY.md` file.** Find the **Module Notes** table and add your M6 row:

| Module | What I built | What surprised me | What I'd change |
|--------|-------------|-------------------|-----------------|
| M6 | *(e.g., Wrote a usage policy, deployed a topic guardrail, found 2 bias patterns in my agent's outputs)* | *(e.g., How my agent responded differently to the same question asked by different "users")* | *(e.g., I'd audit earlier — I'd build the bias tests into my workflow from Module 1)* |

**Journal Prompts:**

1. **What I built:** Describe your Key Lab deliverables. What did your bias audit find? What does your usage policy say? What guardrail did you implement, and what does it prevent?
2. **What surprised me:** Did your agent's outputs surprise you during the audit? Did anything make you uncomfortable? What did that feeling tell you?
3. **The hardest question:** Which of the essential questions from this module do you still not have a confident answer to — and why is it hard?
4. **My responsibility:** You built this agent. Finish this sentence: *"If someone uses my agent to [something harmful], my responsibility is to _______________."*

Then find the **Agent Status After M6** block and update it:

```
⚖️ [YOUR AGENT NAME] — after Module 6
   Personality: _______________
   Can: Have a conversation, see images, use a knowledge base,
        remember conversations, use tools, send messages
   Governed by: [Your usage policy, 1 sentence summary]
   Guardrails: [What you added]
   Bias findings: [What you found and how you addressed it]
```

> 💡 *Your agent is almost complete. Module 7 is the AI Expo — you'll present everything you built to a real audience. The journal entry you write today is source material for your presentation. Make it honest.*

---

*Module 6 of 7 — Previous: [Module 5: Give Your Agent a Voice](../module5/README.md) | Next: [Module 7: Capstone — AI Expo](../module7/README.md)*

*Last updated: March 2026 — ClawDawg*
