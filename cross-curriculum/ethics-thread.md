# Cross-Curriculum Ethics Thread
## A Teacher Reference for the Spiral Ethics Arc, M1–M7

*Part of the OpenClaw AI Curriculum — Cross-Curriculum Reference Series*  
*Last updated: March 2026*

---

## Purpose and How to Use This Document

This document maps every ethics touchpoint across all seven modules of the OpenClaw curriculum. It is a **teacher reference**, not student-facing content.

Use it to:
- **Preview** what students already know before introducing ethics concepts in your module
- **Callback** explicitly to prior lessons when introducing new ethics depth
- **Identify gaps** where a thread goes quiet and students may need a bridge
- **Coordinate** across teachers in multi-section or team-taught deployments
- **Plan assessments** that require students to trace ethics concepts across the full arc

The curriculum follows a **spiral design**: core ethics concepts (bias, responsibility, transparency, harm) are introduced at low depth early, revisited with more complexity in the middle, and become design decisions and policy by the end. A student who encounters "bias" first in M1 should be able to trace that concept all the way to M7 as a lived design experience.

---

## The Full Spiral Map

This table summarizes where each major ethics concept lives across modules. Depth codes: 🌱 Introduced / 🌿 Deepened / 🌳 Applied / 🏛️ Policy/Synthesis.

| Ethics Concept | M1 | M2 | M3 | M4 | M5 | M6 | M7 |
|---|---|---|---|---|---|---|---|
| **Bias** | 🌱 | 🌿 🌿 | 🌿 | 🌳 | — | 🏛️ 🏛️ | 🏛️ |
| **Societal impact of AI** | 🌱 | — | — | — | 🌿 | 🌳 🌳 | 🏛️ |
| **Responsibility / accountability** | 🌱 | 🌿 | 🌿 | 🌳 | 🌿 | 🏛️ 🏛️ | 🏛️ |
| **Privacy / data** | — | — | — | — | — | 🌳 | 🏛️ |
| **Transparency / explainability** | — | — | 🌿 | 🌿 | 🌿 | 🌳 | 🏛️ |
| **Misuse / hallucination / deception** | — | — | — | — | 🌿 🌳 | 🌳 | 🏛️ |
| **Autonomy and human oversight** | 🌱 | — | — | 🌿 | — | 🌳 | 🏛️ |
| **Fairness and design for whom** | — | 🌿 | 🌿 | 🌳 | — | 🏛️ | 🏛️ |

---

## Module-by-Module Ethics Map

### Module 1 — What Is AI?

**Ethics framing:** AI is introduced alongside its societal context. Ethics here is *contextual and introductory* — planting vocabulary and intuitions rather than diving deep.

| Lesson / File | Ethics Concept | What Happens |
|---|---|---|
| `lesson-1-1-what-is-ai/lesson-plan.md` | Societal impact | AI4K12 Big Idea 5 (Societal Impact) is introduced. Students place AI examples on a sorting matrix including ethics-adjacent categories. Exit ticket asks: "What's one question you still have?" (often generates ethics questions) |
| `lesson-1-2-ai-in-your-world/lesson-plan.md` | Benefits vs. risks | Students categorize AI by domain and explicitly articulate both benefits and risks of AI in daily life. First structured encounter with dual-use framing. |
| `lesson-1-4-turing-test/lesson-plan.md` | Deception, autonomy | Turing Test discussion surfaces: "What does it mean to be fooled by a machine?" — seed for later transparency and deception threads |
| `lesson-1-5-intro-to-agentic-ai/lesson-plan.md` | Autonomy, responsibility | Students articulate one potential **benefit** and one **risk** of autonomous agents. Teacher explicitly bridges to Module 6: *"In Module 6, we'll come back to agents in a BIG way."* Exit ticket asks students to identify trust limits for their agent. |
| `module1/teacher-guide/teacher-guide.md` | General | Module 1 teacher guide frames the full arc and flags M6 as the ethics deepening. |

**What students walk away knowing:**
- AI is built by humans; it has limits
- AI is already in their lives and has consequences
- The Perceive→Reason→Act loop introduces the idea that AI makes decisions
- Agents can do things we didn't tell them to do explicitly — raises trust questions

---

### Module 2 — Perception & Sensing

**Ethics framing:** Module 2 is where ethics gets *personal and concrete* for the first time. Students have just built something (a Hugging Face perception model connected to their agent) — then Lesson 2.6 asks them to look critically at what they just built.

| Lesson / File | Ethics Concept | What Happens |
|---|---|---|
| `lesson-2-4-speech-recognition/ethics-preview-note.md` | Bias (speech recognition) | **First explicit seed.** The ethics-preview-note (teacher-facing only) describes this moment as "the first planted seed for Module 6." Students examine who speech recognition systems fail. Teacher facilitates the "Who was this built for?" sticky note activity. |
| `lesson-2-4-speech-recognition/lesson-plan.md` | Bias, fairness, design for whom | Discussion: speech AI performs worse for non-American accents, non-standard dialects. Connection made to training data composition. Students are told explicitly: "We're going to come back to this in Module 6." |
| `lesson-2-6-bias-in-perception/lesson-plan.md` | **Bias (deep)**, fairness, representation | **Primary ethics lesson of M2.** Three case studies: facial recognition & race (Gender Shades), speech recognition & accents, image classification & Western data. Students complete a 5-test bias audit of their own agent's Hugging Face model. Bridges explicitly to M6. |
| `lesson-2-6-bias-in-perception/bias-audit-preview.md` | Bias, fairness | Student-facing bias audit tool — a preview of the full M6 audit. Students attempt to apply it to their own model. |
| `lesson-2-6-bias-in-perception/case-studies.md` | Bias, harm | Three detailed case studies of perception AI failure by demographic group. |
| `lesson-2-6-bias-in-perception/teacher-guide.md` | Bias, facilitation | Teacher guide for handling sensitive discussion; notes on race, language, disability. |
| Module wrap-up / `AGENT_JOURNEY.md` journal | Bias, reflection | Journal prompt explicitly asks: "What did the bias case studies in Lesson 2.6 make you think about your own agent's model?" and "Knowing what you know now about bias and training data, what would you do differently?" |

**What students walk away knowing:**
- Bias in AI is *structural*, not malicious — it comes from who collects the data
- Their own agent uses a model they didn't fully investigate
- Three real cases where perception AI caused harm by demographic group
- A vocabulary: algorithmic bias, training data, representation
- A question to hold: "Who was this built for?"

**Teacher note:** The sticky notes from Lesson 2.4 (students write "Who was this built for?") are designed to be physically held and brought back at the start of M6. See `ethics-preview-note.md` for options on how to preserve them.

---

### Module 3 — Reasoning AI (Decision Trees & Rule-Based Systems)

**Ethics framing:** M3 shifts from *perception bias* (data about the world) to *reasoning bias* (logic and rules that encode harmful patterns). Lesson 3.5 is the dedicated ethics bridge lesson.

| Lesson / File | Ethics Concept | What Happens |
|---|---|---|
| `lesson-3-1-data-to-knowledge/lesson-plan.md` | Data quality, garbage in/garbage out | Students curate a knowledge base by hand, which sets up the GIGO lesson. Explicit question: "Who might this system fail?" appears in the teacher guide. |
| `lesson-3-5-limits-ethics-bridge/lesson-plan.md` | **Bias, GIGO, proxy variables, feedback loops, accountability** | **Primary ethics lesson of M3.** Three case studies: COMPAS recidivism, Amazon hiring AI, credit scoring black boxes. Students learn three root causes of reasoning AI failure. Apply a 5-test Reasoning Failure Audit to their own skill. Bridge to M6: *"Today you found the cracks. Module 6 is where you learn to patch them."* |
| `lesson-3-5-limits-ethics-bridge/case-studies.md` | Bias, accountability | COMPAS, Amazon hiring, credit scoring — each with harm analysis and accountability framing |
| `lesson-3-5-limits-ethics-bridge/reasoning-failure-audit.md` | Transparency, proxy variables, accountability | Student-facing self-audit of their own skill for failure modes |
| `lesson-3-5-limits-ethics-bridge/teacher-guide.md` | Facilitation | Notes on sensitive topics; anticipates student reactions |
| Module wrap-up / `AGENT_JOURNEY.md` | Reflection on ethics | Journal prompt asks students to connect the Reasoning Failure Audit to their "What I would change" entry — a direct link between building and ethics |

**New concepts introduced (not in M1–M2):**
- **Hallucination** — AI generating confident but false outputs
- **Garbage In / Garbage Out (GIGO)** — data quality determines model quality
- **Proxy variables** — neutral-looking features that encode protected traits (ZIP code ≈ race)
- **Feedback loops** — biased outputs shape future training data, amplifying bias
- **Accountability gap** — who is responsible when AI causes harm

**What students walk away knowing:**
- Their own knowledge base (skill) has potential failure modes — they audited it
- Three additional real-world cases of AI causing harm through reasoning bias
- GIGO, proxy variables, and feedback loops as named failure mechanisms
- The concept of accountability: builder, deployer, and actioner each have partial responsibility

---

### Module 4 — Machine Learning

**Ethics framing:** M4 is the *quantitative* ethics module. Students are now training actual models. Lesson 4.5 directly confronts training data bias with the strongest case studies in the curriculum (Gender Shades, pulse oximeters).

| Lesson / File | Ethics Concept | What Happens |
|---|---|---|
| `lesson-4-2-training-data/lesson-plan.md` | Data quality, representation | Students learn that training data determines what the model learns. Who collected the data? Who is represented? These questions are raised early in M4 before L4.5. |
| `lesson-4-5-bias-in-training-data/lesson-plan.md` | **Bias (deep/quantitative)**, representation, measurement bias, feedback loops, accountability | **Primary ethics lesson of M4.** Opens with the provocation: *"Algorithms don't have feelings. They can't be racist or sexist. They're just math."* — then dismantles it. Case studies: Gender Shades (Joy Buolamwini, MIT Media Lab) and pulse oximeters. New framing: responsibility is distributed across engineers, companies, regulators, and users. |
| `lesson-4-5-bias-in-training-data/slides-outline.md` | Bias | Presentation structure includes a live Bias Audit Activity on a hypothetical job-recommendation training dataset |
| `lab-bias-testing/student-lab-guide.md` | Bias testing, empirical measurement | Students run structured bias probe tests on their own trained model — now with actual numeric measurements, not just observations |
| `lab-bias-testing/teacher-guide.md` | Bias | Teacher guide for the lab |
| `lab-bias-testing/bias-worksheet.md` | Bias | Student bias audit worksheet |
| `activity-ethics-essay/prompt.md` | Accountability, societal impact | Ethics essay prompt — connects technical bias concepts to broader questions of responsibility |
| `assessments/ethics-essay-rubric.md` | Accountability | Summative rubric for ethics reasoning |
| `assessments/data-audit-rubric.md` | Bias, data quality | Rubric for systematic data evaluation |
| Module teacher guide (Section on M4 → M6 connections) | Bias, bridge | Explicit framing: "In M3, students learned GIGO; now they feel it. In M6, they'll govern it." |

**New concepts introduced (not in M1–M3):**
- **Representation bias** — training data doesn't equally represent all groups
- **Measurement bias** — how data is collected or labeled systematically disadvantages groups
- Three types of bias now have names, examples, and are distinguishable from each other
- Joy Buolamwini / Gender Shades as a case of *one person* creating systemic change through research
- **Disparate impact** — systems can discriminate without intent
- **Responsible disclosure** — introduced conceptually here, formalized in M6

**What students walk away knowing:**
- The specific mechanisms by which bias enters ML models (three named types)
- Real-world cases with quantified disparities (34 percentage point accuracy gap)
- That their own trained model can be *measured* for bias — not just felt
- That "the algorithm is neutral" is a myth when data reflects human choices
- Who bears responsibility for bias — and that it's always distributed

**Explicit callback opportunity for teachers:** When teaching Lesson 4.5, explicitly reference:
- M2 Lesson 2.6 case studies (facial recognition, speech recognition) — "Remember when we saw this in perception? Now we understand *why* it happens, technically."
- M3 Lesson 3.5 GIGO concept — "We called this 'garbage in/garbage out' in M3. Now we can name exactly what type of garbage."

---

### Module 5 — Communication and Channels

**Ethics framing:** M5 shifts context from *AI systems in the world* to *AI in your hands as a tool*. Ethics in M5 is about **responsible use** — academic integrity, critical verification, and the dangers of misplaced trust.

| Lesson / File | Ethics Concept | What Happens |
|---|---|---|
| `lesson-5-4-ai-study-partner/lesson-plan.md` | Academic integrity, authorship, learning | Students explore AI as a study tool, then have a structured conversation about what constitutes appropriate vs. inappropriate use. Students draft a personal "AI Study Policy." First encounter with the question: "What are you responsible for in your own use of AI?" |
| `lesson-5-5-when-ai-gets-it-wrong/lesson-plan.md` | Hallucination, transparency, critical verification, harm by misinformation | **Primary ethics lesson of M5.** Students experience AI hallucinations firsthand (lab: find the lies). Learn why AI sounds confident when wrong. Develop a 3-step fact-checking protocol. Discussion: Who is responsible when AI misinformation spreads? |
| `lab-prompt-engineering/academic-integrity-discussion-cards.md` | Academic integrity | Discussion cards for structured conversation about AI use in school contexts |
| `lab-prompt-engineering/fact-check-the-ai-worksheet.md` | Hallucination, verification | Student-facing worksheet for fact-checking AI output |
| `lesson-5-6-how-channels-work/lesson-plan.md` | Privacy, data flow | Introduction to how messages flow through channels; implicit privacy framing (data in transit) |
| `lab-channel-connection/credential-safety-checklist.md` | Privacy, security | Students are introduced to credential hygiene as a safety practice |

**Connection to earlier threads:**
- Hallucination concept was first named in M3 (Lesson 3.5 warm-up: "Has AI ever lied to you?"). M5 gives it a technical explanation (next-token prediction) and a practical protocol.
- The "Who is responsible?" question from M3 and M4 reappears here in a different register: not "who is responsible for the system?" but "who is responsible for what you do with it?"

**What students walk away knowing:**
- Hallucinations are structural, not bugs — they come from how LLMs work
- Six categories of high-risk AI output (dates, citations, calculations, recent events, specific people, professional advice)
- A repeatable 3-step fact-checking protocol
- AI has a legitimate, valuable role as a study tool — but requires critical engagement
- Using AI to replace learning harms the learner, not just the grade

**Gap note:** M5 does not explicitly revisit bias from M2–M4. Teachers facilitating M5 should note that a student might not connect "AI misinformation" in Lesson 5.5 to "algorithmic bias" from earlier modules without prompting. Consider: use Lesson 5.5 debrief to explicitly ask, *"How is hallucination similar to or different from the bias we studied in M4?"*

---

### Module 6 — AI Ethics, Bias, and Accountability

**Ethics framing:** M6 is the dedicated ethics module — the explicit deepening and synthesis of all prior threads. Every lesson in M6 is an ethics lesson. The module is explicitly designed to feel like a "return to" prior conversations, not a new topic.

| Lesson / File | Ethics Concept | What Happens |
|---|---|---|
| `lesson-6-1-algorithms-as-opinions/lesson-plan.md` | **Bias (felt), word embeddings, design choices** | MIT Word Analogies activity — students feel bias in word associations before they analyze it. Key framing: "Every algorithmic choice is a choice someone made." Opens with *explicit callback to M2–M4*: "You've built an AI. You've trained it. Now we ask: what does your AI believe?" |
| `lesson-6-2-bias-in-the-wild/lesson-plan.md` | **Bias (consequences)**, accountability | Case studies: Robert Williams (wrongful arrest by facial recognition), Amazon hiring algorithm, predictive policing feedback loops. Students run OpenClaw Bias Testing Workshop on their own agent. Three-column framework: bias type / mechanism / lever. |
| `lesson-6-3-surveillance-simulator/lesson-plan.md` | Privacy, surveillance, structural harm, empathy | Two-period simulation placing students in three roles: surveilled citizen, analyst, administrator. Students experience how structural harm happens without individual malice. Emotional center of M6. |
| `lesson-6-4-privacy-and-your-data/lesson-plan.md` | Privacy, data inference, consent | Students trace their own data trails; learn inference — how non-sensitive data reveals sensitive information. Concrete actions for reducing data exposure. |
| `lesson-6-5-deepfakes-and-misinformation/lesson-plan.md` | Deception, information integrity, verification | Deepfakes and AI-generated misinformation. "Real or AI?" evaluation activity. Builds on M5 hallucination thread with larger-scale deception framing. |
| `lesson-6-6-ai-debate-day/lesson-plan.md` | Policy, contested values | AI debate using agents as research assistants. Students argue contested AI policy positions. Ethics as contested, not resolved. |
| `lesson-6-7-builders-responsibility/lesson-plan.md` | **Accountability (synthesis)**, responsible disclosure, fairness | **Synthesis lesson.** Builder's Responsibility Triangle (builder / user / platform). Responsible disclosure protocol. Fairness Proposal activity — students write binding commitments for their own agent. Builder's Oath. Bridge to M7 Expo: responsible presentation of a built system. |
| `lab-audit-and-govern/lab-guide.md` | Bias, policy, guardrails | Students complete a full bias audit of their agent; implement at least one guardrail; write a usage policy document. |
| `lab-audit-and-govern/usage-policy-template.md` | Policy, accountability | Template for student-written usage policies |
| `lab-bias-testing-workshop/` | Bias (quantitative) | Full collaborative bias testing workshop — structured protocol with aggregation, analysis, and documentation |
| `lab-surveillance-simulator/` | Surveillance, privacy | Lab materials for the simulation |
| `assessments/rubric-fairness-proposal.md` | Fairness, accountability | Summative rubric for the Fairness Proposal |
| `assessments/rubric-ai-debate.md` | Policy, argumentation | Summative rubric for the debate |
| `activities/stakeholder-mapping/` | Accountability, stakeholders | Three case studies (hiring algorithm, predictive policing, content recommendation) with stakeholder mapping templates |

**Explicit callbacks built into M6 lesson plans:**
- Lesson 6.1 opens with: *"You've built an AI. You've trained it. You've deployed it. Now we ask the hardest question..."* — direct callback to M1–M5 arc
- Lesson 6.2 opens with the word analogy from 6.1 and connects to M2 facial recognition case study
- Lesson 6.7 displays the full Module 6 arc and explicitly bridges all six prior lessons before the Builder's Oath

**What students produce in M6:**
- A bias audit report for their own agent
- A usage policy document with specific, enforceable language
- At least one deployed guardrail
- A Fairness Proposal with builder commitments
- An ethics debate record

**What students walk away knowing:**
- Bias concepts, case studies, and mechanisms from M2–M4 are now a design framework, not just academic content
- They are responsible for their agent's behavior — the Builder's Responsibility Triangle names their accountability
- Responsible disclosure: what to do when you find a problem in a system you didn't build
- Privacy and data inference: surveillance is structural, not just intentional
- Deepfakes are a distinct problem from hallucination: intentional deception vs. structural miscalibration

---

### Module 7 — AI Expo Capstone

**Ethics framing:** In M7, ethics transitions from *learning* to *demonstration*. Students must explain what they built — including its limits — to a public audience. The M6 Fairness Proposal and usage policy become part of the presentation.

| Lesson / File | Ethics Concept | What Happens |
|---|---|---|
| `lesson-7-1-demo-design/lesson-plan.md` | Responsible presentation, transparency | Students are explicitly asked: "If someone asks whether your agent could cause harm, what do you say?" Demo design includes documenting known limitations. |
| `lesson-7-2-capability-inventory/lesson-plan.md` | Transparency, honest representation | Capability inventory requires students to list not just what works, but what doesn't — a direct accountability practice. |
| `workshop-7-4-rehearsal/adversarial-qa-question-bank.md` | Accountability, responsibility | Students practice answering hard questions about their agent, including: "Is your agent biased?" "What can it get wrong?" "Who is responsible if it causes harm?" |
| `lesson-7-6-ai-expo/lesson-plan.md` | Public accountability | The AI Expo requires public, honest representation of a built system. Students who found bias in their agent (M6 workshop) must decide how to disclose it. |
| `lesson-7-7-reflection/lesson-plan.md` | **Full arc synthesis** | Final portfolio journal entry explicitly traces the ethics arc: "When I started Module 1, I thought AI was... Now, after building [agent name], I understand that AI is..." Part 6 asks "What would Module 8 be?" — often generates ethics-forward answers. Part 7 is a letter to a future student. |
| `assessments/ai-expo-presentation-rubric.md` | Accountability, transparency | Rubric includes a criterion for honest representation of limitations — not just showing what the agent can do |
| `assessments/final-reflection-prompts.md` | Full arc reflection | Prompts explicitly ask students to reflect on the ethics learning arc |
| `demo-prep/tough-questions-prep-card.md` | Accountability, responsibility | Students prepare for audience questions including ethics-specific challenges |
| `expo-planning-guide/reflection-career-pathways.md` | Ethics careers | "AI Ethics Researcher" is named as a career pathway in the careers guide — contextualizing the module's work as professional practice |

**What students walk away knowing:**
- The complete ethics arc — from "what is AI?" to "I built it and I'm accountable for it"
- How to present a technical system honestly, including its limits
- That their Fairness Proposal is a real commitment, not just a class assignment
- Career pathways in AI ethics, policy, and responsible AI development

---

## Spiral Structure: Key Concepts Traced

### Bias — The Primary Thread

This is the longest, deepest ethics thread in the curriculum. It touches every module (with a gap in M5 — see below).

| Module | Lesson | What Happens to "Bias" |
|---|---|---|
| **M1** | 1.2, 1.5 | Not named as "bias" yet. Students encounter AI failures conceptually as "limitations." The seed is planted: AI has real limits that affect real people. |
| **M2** | 2.4, 2.6 | **First appearance of the word "bias."** Bias is defined concretely in perception AI. Three case studies. Students run their first (preview) bias audit on their own agent. Framing: bias comes from training data; it's structural. |
| **M3** | 3.5 | Bias extends to reasoning systems. New vocabulary: GIGO, proxy variables, feedback loops. Three new case studies (COMPAS, Amazon, credit scoring). Students audit their own reasoning skill. |
| **M4** | 4.5 + lab | Bias becomes **quantifiable**. Three types of bias named: representation, measurement, feedback loop. Gender Shades case study shows 34-point accuracy gap. Students measure bias in their own trained model. |
| **M5** | — | **Gap.** Bias is not explicitly revisited. Hallucination is covered (structurally related) but the bias thread goes quiet. (See Gap Analysis below.) |
| **M6** | 6.1, 6.2, lab | Bias returns as a **design framework and policy tool**. Students write usage policies, implement guardrails, complete a full bias audit. Bias is now something to govern, not just understand. |
| **M7** | 7.6 Expo, 7.7 | Bias is **presented publicly**. Students who found bias in M6 must decide how to disclose it. Final reflection asks them to trace their understanding from M1 to now. |

**Teacher guidance for M4 Lesson 4.5:**
Students entering this lesson know:
- (From M2) That facial recognition has a 34-point accuracy gap (by demographic)
- (From M2) That speech recognition fails non-American accents
- (From M3) That COMPAS penalizes Black defendants, Amazon's hiring AI downgraded women's resumes, credit scoring uses ZIP code as a race proxy
- (From M3) The vocabulary: GIGO, proxy variables, feedback loops

What Lesson 4.5 adds:
- *Technical* explanation of HOW these failures happen (the three bias mechanisms)
- Quantification (they now know the numbers, not just the stories)
- Responsibility framing (distributed across engineers, companies, regulators, users)
- Their own trained model as a testable subject

**Teacher guidance for M6 Lesson 6.2:**
Students entering this lesson know:
- All of the above, plus L6.1 word analogy experience
- Their own agent has measurable bias patterns
- GIGO, proxy variables, feedback loops (now for the third or fourth time)

What Lesson 6.2 adds:
- **Consequences** — Robert Williams was arrested. Amazon scrapped their tool. Feedback loops in policing are systemic.
- The OpenClaw Bias Testing Workshop — now applied to their *own* agent with structured output

---

### Responsibility / Accountability — The Second Thread

| Module | Lesson | What Happens to "Responsibility" |
|---|---|---|
| **M1** | 1.5 | "One potential risk of autonomous agents" — first framing of responsibility |
| **M2** | 2.6 | Students are asked: "Who might this system fail? Have we tested it on them?" — responsibility as a design question |
| **M3** | 3.5 | The Accountability Gap audit question is introduced: "If your skill made a harmful recommendation, who would be responsible: you, the AI, or whoever acted on it?" |
| **M4** | 4.5 | Responsibility is distributed: engineers, companies, regulators, users — each has a role |
| **M5** | 5.4, 5.5 | Responsibility as a **user**: academic integrity, fact-checking, not blindly trusting AI output |
| **M6** | 6.7 | **Synthesis.** Builder's Responsibility Triangle formalizes distributed accountability. Responsible disclosure protocol. Builder's Oath. |
| **M7** | 7.1–7.7 | Responsibility in public: honest presentation, disclosure of limitations, adversarial Q&A prep |

---

### Hallucination / Transparency — The Third Thread

| Module | Lesson | What Happens |
|---|---|---|
| **M3** | 3.5 | Hallucination is named as a failure mode in the warm-up ("Has AI ever lied to you?"). Not yet explained mechanically. |
| **M4** | 4.4 | Overfitting is introduced — AI that appears to perform well but has "memorized" rather than learned. Related concept. |
| **M5** | 5.5 | **Primary treatment.** Hallucination gets a technical explanation (next-token prediction; confident ≠ accurate). 3-step fact-checking protocol. Six high-risk output categories. |
| **M6** | 6.5 | Deepfakes and AI-generated misinformation — intentional deception contrasted with hallucination. Verification tools applied at ecosystem scale. |
| **M7** | 7.2, 7.4 | Transparency about agent limitations is a *presentation requirement*. Students practice answering "What can your agent get wrong?" |

---

### Privacy — The Fourth Thread

| Module | Lesson | What Happens |
|---|---|---|
| **M1–M4** | — | **Gap.** Privacy is not introduced in M1–M4. (See Gap Analysis.) |
| **M5** | 5.6 + credential checklist | Credential hygiene is introduced as a security practice — implicit privacy framing |
| **M6** | 6.3, 6.4 | **Full treatment.** Surveillance simulator (structural experience), then data trail analysis (personal inference). Privacy as a right and a design question. |
| **M7** | 7.6, 7.7 | Students may present agents that handle personal data; the usage policy (M6) governs what they've committed to. |

---

## Gap Analysis

### Gap 1 — Bias goes quiet in M5 ⚠️

**Thread:** Bias  
**Gap location:** Module 5 (all lessons)  
**Duration:** ~3 weeks

Bias is deeply developed in M2, M3, and M4, then goes silent in M5. M5's ethics focus is on hallucination and academic integrity — structurally adjacent but not the same.

**Risk:** Students who found the bias work compelling in M4 may feel it was "done" before M6 deepens it. Students who struggled with bias concepts in M4 get no reinforcement before M6.

**Mitigation options for teachers:**
1. At the close of Lesson 5.5 debrief, explicitly ask: *"How is hallucination similar to or different from the bias we studied in M4? Is a hallucination a type of bias?"* (There's a real answer here: hallucination is distributional in the model, not necessarily demographic — but it can intersect with bias.)
2. In the M5 teacher guide introduction to M6, reference the bias thread: *"In M6, we'll return to a topic students haven't visited since M4."*
3. Some teachers add a single reflection journal prompt between M5 and M6: *"What's one thing you're still thinking about from the bias unit in M4?"*

---

### Gap 2 — Privacy is almost entirely absent until M6 ⚠️

**Thread:** Privacy  
**Gap location:** Modules 1–5 (except M5 credential hygiene)  
**Duration:** ~15 weeks

Privacy is not substantively introduced until Module 6. Students may encounter questions about data privacy in their lives during M1–M5 (setting up their OpenClaw agent, connecting channels in M5, training models in M4) without any framing.

**Risk:** Students may share or expose data in M4–M5 without understanding what they're doing. The M5 credential safety checklist covers one aspect (API keys), but doesn't frame the broader question.

**Mitigation options for teachers:**
1. In M4, when students collect training data (images, audio), briefly surface: *"What are you choosing to put into a machine learning model? Is any of it sensitive?"*
2. In M5 Lab: Channel Connection, the credential safety checklist is a teachable moment — extend it slightly to cover not just API key safety but "what data flows through this channel?"
3. Alternatively, treat the M6 privacy unit as a full-return experience: *"You've been doing things with data for five modules. Now let's trace what that data was."*

---

### Gap 3 — M1's societal impact framing is thin 🌱

**Thread:** Societal impact  
**Gap location:** Module 1  
**Note:** This is intentional (M1 is introductory), but worth naming.

The AI4K12 "Societal Impact" big idea is named in M1 but not explored. The curriculum is designed this way — concepts are introduced before they're deepened — but teachers should know that students leaving M1 have minimal ethics vocabulary. Don't expect M2 students to have ethics fluency; they have ethics *curiosity*.

---

### Gap 4 — No explicit ethics touchpoint in M4 after L4.5 🔍

**Thread:** Bias, accountability  
**Gap location:** M4 Lessons 4.6+, lab work after the bias testing lab

After Lesson 4.5 and the Bias Testing Lab, M4 shifts to model comparison and integration. The ethics thread goes quiet for the final stretch of M4. 

**Risk:** Minor — the bias lab is recent enough. But if pacing stretches, students may complete M4 with the bias work feeling like a detour rather than the arc's center.

**Mitigation:** Use the M4 ethics essay assessment to keep the thread alive through the end of the module.

---

## Teacher Reference Cards

### When You Teach M2 Lesson 2.6
*What students already know:*
- AI has limits and societal impacts (M1 framing)
- AI is already in their lives

*What you're introducing:*
- The word "bias" applied to AI systems
- Three concrete case studies
- The question: "Who was this built for?"

*Where it leads:*
- M3 L3.5: Same framework applied to reasoning/decision AI
- M4 L4.5: Technical explanation of *how* bias enters, quantification
- M6 L6.1–6.2: Policy, governance, builder responsibility

---

### When You Teach M3 Lesson 3.5
*What students already know:*
- Bias definition from M2 (Lesson 2.6)
- Three perception-AI case studies
- Their own perception model may have bias (M2 audit)

*What you're introducing:*
- Reasoning AI failure modes: GIGO, proxy variables, feedback loops
- Three new case studies: COMPAS, Amazon, credit scoring
- Hallucination as a failure mode (conceptually)
- Accountability gap framing

*Where it leads:*
- M4 L4.5: Technical naming of bias types, quantification
- M5 L5.5: Hallucination gets full treatment
- M6: Full governance framework

---

### When You Teach M4 Lesson 4.5
*What students already know:*
- Definition of bias (M2)
- Three perception-AI case studies (M2)
- GIGO, proxy variables, feedback loops (M3)
- Three reasoning-AI case studies (M3)
- That their own perception model and reasoning skill both have potential bias

*What you're introducing:*
- Three formally named bias types: representation, measurement, feedback loop
- Gender Shades / pulse oximeters — strongest case studies in the curriculum
- Quantified disparities (34-point accuracy gap)
- Their *trained model* is now measurable — the Bias Testing Lab
- Distributed responsibility framework

*Where it leads:*
- M6 L6.1: "What does your AI believe?" callback
- M6 L6.2: OpenClaw Bias Testing Workshop on their agent
- M6 Ethics Lab: Bias audit report + usage policy + guardrail

---

### When You Teach M6 Lesson 6.1
*What students already know:*
- Bias definition, three perception-AI case studies (M2)
- GIGO, proxy variables, feedback loops, three reasoning-AI case studies (M3)
- Representation bias, measurement bias, Gender Shades, pulse oximeters (M4)
- Their own model has been tested for bias (M4 lab)
- Hallucination and fact-checking (M5)

*What you're introducing:*
- Felt experience of bias (word analogy activity)
- Word embeddings as a mechanism
- "Every algorithmic choice is a choice someone made" as a frame

*Key callback to make:*
> *"Remember when we looked at facial recognition bias in M2? And when we built the hiring-AI case study in M4? Today we're going to feel the same pattern in a vocabulary game."*

---

### When You Teach M6 Lesson 6.7 (Builder's Responsibility)
*What students already know:*
- All ethics content from M1–M6
- Six case studies of real-world AI bias (three from M2–M3, three revisited/added in M6)
- Their own agent's bias profile (from M6 Bias Testing Workshop)
- Hallucination and verification (M5)
- Privacy and data inference (M6 L6.4)
- Deepfakes and misinformation (M6 L6.5)

*What you're synthesizing:*
- Builder's Responsibility Triangle
- Responsible disclosure protocol
- Their Fairness Proposal is the culminating ethics artifact

*Where it leads:*
- M7: Public presentation includes honest disclosure of limitations
- M7 L7.7: Final reflection traces the full arc

---

## Index: Ethics Concepts by First Appearance

| Concept | First Introduced | First Named | First Applied |
|---|---|---|---|
| AI has societal impacts | M1 L1.1 | M1 L1.2 | M2 L2.6 |
| Bias (perception AI) | M2 L2.4 | M2 L2.6 | M2 L2.6 (audit preview) |
| Hallucination | M3 L3.5 (warm-up) | M3 L3.5 | M5 L5.5 |
| GIGO | M3 L3.5 | M3 L3.5 | M3 (skill audit) |
| Proxy variables | M3 L3.5 | M3 L3.5 | M4 L4.5 |
| Feedback loops | M3 L3.5 | M3 L3.5 | M4 L4.5 |
| Representation bias (named) | M4 L4.5 | M4 L4.5 | M4 lab |
| Measurement bias (named) | M4 L4.5 | M4 L4.5 | M4 lab |
| Accountability (distributed) | M3 L3.5 | M4 L4.5 | M6 L6.7 |
| Academic integrity / AI use | M5 L5.4 | M5 L5.4 | M5 (policy draft) |
| Critical verification | M5 L5.5 | M5 L5.5 | M5 lab |
| Privacy | M5 (credential) | M6 L6.4 | M6 L6.4 |
| Surveillance (structural) | — | M6 L6.3 | M6 simulation |
| Deepfakes / intentional deception | — | M6 L6.5 | M6 ("Real or AI?" activity) |
| Usage policy | — | M6 (lab) | M6 (lab deliverable) |
| Guardrails | — | M6 (lab) | M6 (lab deliverable) |
| Responsible disclosure | M4 (conceptual) | M6 L6.7 | M6 L6.7 scenario |
| Builder's responsibility (framework) | M1 L1.5 (seed) | M6 L6.7 | M6 L6.7 (Triangle) |
| Public accountability | — | M7 | M7 (AI Expo) |

---

## Related Documents

- `CURRICULUM_VISION.md` — Full arc overview; spiral curriculum framing described on p. 3
- `module2/lesson-2-4-speech-recognition/ethics-preview-note.md` — Teacher guide for the first ethics seed
- `module2/lesson-2-6-bias-in-perception/teacher-guide.md` — Facilitation guide for the M2 ethics lesson
- `module3/lesson-3-5-limits-ethics-bridge/teacher-guide.md` — Facilitation guide for the M3 ethics bridge
- `module4/lesson-4-5-bias-in-training-data/lesson-plan.md` — Primary bias lesson with full case studies
- `module6/teacher-guide/teacher-guide.md` — Comprehensive M6 teacher guide; see Section 3 for "Through-Line Framing"
- `module7/teacher-guide/teacher-guide.md` — M7 guide; see Section 8 "Post-Expo: Closing the Year" for reflection guidance
- **Planned (backlog):** `cross-curriculum/m1-m3-ethics-audit.md` — Detailed M1–M3 ethics threading audit

---

*OpenClaw AI Curriculum — Cross-Curriculum Reference Series*  
*For educator use. Not intended for student distribution.*
