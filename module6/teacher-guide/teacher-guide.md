# Module 6 Teacher Guide
## Make Your Agent Ethical — Comprehensive Educator Resource

**For educators without a CS or AI background**
*Module 6 of 7 in the OpenClaw Curriculum*

---

> **This guide is yours.** Module 6 deals with the hardest questions in AI education: bias, surveillance, discrimination, and who is responsible when AI causes harm. These are not abstract questions — they are live issues that may touch students' families and communities directly. This guide gives you tools, language, and facilitation structure to hold those conversations safely and productively.

---

## Table of Contents

1. [Module Overview + Arc Context](#1-module-overview--arc-context)
2. [AI4K12 Alignment: Big Idea 5 — Societal Impact](#2-ai4k12-alignment-big-idea-5--societal-impact)
3. [Through-Line Framing: Where M6 Lives in the Arc](#3-through-line-framing)
4. [Content Sensitivity Guidance](#4-content-sensitivity-guidance)
5. [Day-by-Day Pacing Guide](#5-day-by-day-pacing-guide)
6. [Facilitation Tips Per Lesson](#6-facilitation-tips-per-lesson)
7. [The Ethics Lab: Bias Audit + Guardrail + Usage Policy](#7-the-ethics-lab-bias-audit--guardrail--usage-policy)
8. [Handling Student Disclosures](#8-handling-student-disclosures)
9. [Differentiation Strategies](#9-differentiation-strategies)
10. [Cross-Subject Connections](#10-cross-subject-connections)
11. [Common Student Questions + Teacher FAQ](#11-common-student-questions--teacher-faq)
12. [Quick Reference Card](#12-quick-reference-card)

---

## 1. Module Overview + Arc Context

### What This Module Is

Module 6 is the penultimate module in the OpenClaw curriculum. Students have spent five modules building a capable AI agent — one that can see, know, learn, and communicate. They arrive here with something real: an agent that works.

Now they make it responsible.

**This module is not a break from building — it is building.** The deliverables are engineering artifacts: a bias audit report, a usage policy document, a deployed guardrail. Students aren't just thinking about ethics; they're implementing it in code and policy.

This distinction matters for student engagement. When you frame Module 6 as "the ethics chapter," students expect lecture and discussion. When you frame it as "the final upgrade before your agent ships," they lean in.

### Three Big Ideas

**1. Capability without responsibility is liability.**
A powerful agent that will do anything for anyone is a dangerous tool. Every AI product that ships to the public comes with guardrails, usage policies, and documentation of known limitations. Module 6 asks students to do the same work.

**2. Bias isn't malice — but that doesn't make it acceptable.**
The most important insight in this module: AI systems can cause serious, measurable harm without anyone intending harm. Bias in training data, proxy variables that encode protected characteristics, feedback loops that concentrate harm on already-marginalized groups — these are structural problems, not individual moral failings. Understanding this is essential for building better systems.

**3. Ethics is not the last step — it's a design constraint.**
The standard software development metaphor treats testing as the final phase. This module challenges that framing: the bias audit reveals problems that require redesign, not just documentation. The usage policy shapes what gets built in M7. Ethics is not appended — it is woven in.

### Learning Goals

By the end of Module 6, students will be able to:

- **Define** algorithmic bias and identify its three primary mechanisms: biased training data, proxy variables, and feedback loops
- **Audit** their own agent's outputs systematically for disparate treatment across different user inputs
- **Write** a usage policy with specific, enforceable language about permitted and prohibited uses
- **Implement** at least one guardrail in their OpenClaw configuration
- **Evaluate** an AI system using an ethics framework and defend their assessment
- **Explain** why harm-by-design-flaw is different from harm-by-intent — and why that distinction doesn't reduce harm
- **Connect** their personal agent's policies to real-world AI governance frameworks

### Pacing Recommendation

| Format | Weeks | Sessions |
|--------|-------|---------|
| Standard (5×/week) | 2–3 weeks | 10–14 class periods |
| Block scheduling (2×/week 90 min) | 3–4 weeks | 7–8 blocks |
| Compressed (limited time) | 1.5 weeks | 8 sessions minimum |

**Minimum viable module:** If pressed for time, the non-negotiables are:
- Lesson 6.1 (algorithms as opinions — bias concept foundation)
- Lesson 6.2 (bias in the wild — real-world cases)
- Lesson 6.3 (surveillance simulator — empathy + structural thinking)
- The Ethics Lab (bias audit + guardrail implementation)

Lessons 6.4–6.7 enrich the core but the four above are essential for the lab to land.

### Essential Questions

1. What does it mean for an AI system to be "fair"? Is fairness objective?
2. Who is responsible when AI causes harm — the builder, the user, or the platform?
3. How do you write a rule that actually works? What makes a policy specific enough to enforce?
4. What's the difference between preventing harm and preventing liability?
5. If a system isn't designed to harm anyone but it harms certain people consistently — is it biased?

---

## 2. AI4K12 Alignment: Big Idea 5 — Societal Impact

### The Five Big Ideas — Quick Recap

AI4K12 identified five conceptual pillars all K–12 students should understand:

1. **Perception** — How AI senses the world (Module 2)
2. **Representation & Reasoning** — How AI structures knowledge (Module 3)
3. **Learning** — How AI learns from data (Module 4)
4. **Natural Interaction** — Language and communication (Module 5)
5. **Societal Impact** ← *This is Module 6's primary focus*

Note that Societal Impact has appeared in every prior module — Module 3's ethics bridge, Module 4's discussion of training data fairness, Module 5's content moderation — but Module 6 is where it becomes the primary focus, not a secondary thread.

### Big Idea 5: Societal Impact

Big Idea 5 encompasses four interconnected concepts:

**Ubiquity:** AI systems are embedded in virtually every consequential decision that affects daily life — credit, hiring, criminal justice, healthcare, college admissions, content recommendation. Students who don't understand AI will have AI decisions made about them without their comprehension or meaningful ability to contest.

**Equity:** AI systems can encode and amplify existing social inequities. Because most AI training data reflects historical human decisions, and those decisions often reflect historical bias, AI systems can perpetuate discrimination at scale and speed that human decision-makers could never match.

**Privacy:** AI systems require data — often personal data — at scale. The data economy that supports modern AI creates new privacy risks, power asymmetries between institutions and individuals, and surveillance capabilities that challenge fundamental civil liberties.

**Agency:** Understanding AI is a prerequisite for meaningful participation in democratic society. Civic decisions about AI regulation, algorithmic accountability, and data rights require an informed citizenry.

### Specific AI4K12 Progression Points Addressed

| Grade Band | Progression Point | Where in M6 |
|------------|------------------|-------------|
| 6–8 | Describe how AI can be used to enhance surveillance | Lesson 6.3 |
| 6–8 | Explain how AI reflects the choices and biases of the people who create it | Lesson 6.1, 6.2 |
| 6–8 | Identify ways AI affects people's daily lives | Lesson 6.4, 6.7 |
| 6–8 | Explain how data collected for one purpose can be used for unintended purposes | Lesson 6.4 |
| 9–10 | Evaluate the benefits and harms of AI applications in different contexts | Lesson 6.2, 6.6 |
| 9–10 | Discuss accountability mechanisms for AI systems | Lesson 6.5, 6.7, Ethics Lab |
| 9–10 | Describe policies and practices that may mitigate harms from AI | Ethics Lab: guardrail + usage policy |

### CSTA Standards Addressed

| Standard | Description | M6 Lesson |
|----------|-------------|-----------|
| 2-IC-20 | Compare trade-offs associated with computing technologies | Lesson 6.3, 6.4 |
| 2-IC-21 | Discuss issues of bias and accessibility in design | Lesson 6.2, Lab |
| 2-IC-23 | Describe trade-offs between privacy and security of data | Lesson 6.4 |
| 3A-IC-24 | Evaluate ways computing impacts personal, ethical, social, economic, and cultural practices | Lesson 6.2, 6.6 |
| 3A-IC-25 | Test and refine computational artifacts to reduce bias | Ethics Lab (bias audit) |
| 3B-IC-25 | Evaluate computational artifacts to maximize their beneficial effects | Ethics Lab (guardrail + policy) |

---

## 3. Through-Line Framing

### The Agent-Building Arc

```
M1: Identity     → Agent knows who it is and what it's for
M2: Vision       → Agent can see and describe the world
M3: Knowledge    → Agent has custom domain expertise
M4: Learning     → Agent can learn from new data
M5: Language     → Agent can understand and generate natural language
M6: Ethics   ←  → Agent is designed responsibly
M7: Deployment   → Agent is shipped to a real use case (Capstone Expo)
```

### The Penultimate Position Is the Point

Module 6 is the second-to-last module. This placement is deliberate.

Students arrive at M6 with something they've built and are proud of. They have investment. When they discover that their agent can produce biased outputs, or that it will help with things it shouldn't, or that it has no policy governing its use — that's not a gotcha. It's a reveal.

**Use this explicitly:** "You've been building something for five modules. Today, you're going to find out what you didn't build in." The disappointment of the audit is motivating precisely because students care about their agent.

This is also why M6 must not be moved to the beginning of the course. Ethics framed as "before you start building" is abstract. Ethics framed as "here's what your actual, working thing might do wrong" is concrete and urgent.

### How M6 Connects to M5 and M7

**From M5 (Language):** M5 taught students how language models generate text — statistically likely continuations, not reasoned statements. The word embedding activity in Lesson 6.1 ("Algorithms as Opinions") directly builds on M5's embedding concepts to show how meaning — including biased meaning — is encoded in mathematical relationships between words.

**Into M7 (Capstone):** The usage policy and guardrails students write in M6 are not just M6 deliverables — they ship with the agent into M7. At the Capstone Expo, students will present their agent to an audience, and their usage policy and documented guardrails are part of that presentation. This means M6 work has real stakes.

**The through-line bridge speech** (use at Lesson 6.1 start):
> "Your agent can communicate — that's M5. It has a voice, a channel, a way to reach people. Now the question is: what does it say? And what should it refuse to say? By the end of this module, your agent won't just be capable — it'll be governed. That's what 'responsible' means in AI."

---

## 4. Content Sensitivity Guidance

### Why This Section Exists

Module 6 deals with topics — racial bias in criminal justice, discriminatory hiring algorithms, facial recognition misidentification, surveillance and immigration — that are not hypothetical for many students. Their families may have been directly affected by the systems you'll be discussing.

**This does not mean avoiding these topics.** Avoiding real harm to protect classroom comfort is a disservice to students who experience these harms daily. But it does mean that you carry a responsibility to teach these topics with care, preparation, and attention to who is in your room.

Read this section before teaching any M6 lesson. Keep it nearby.

### Know Your Classroom

Before Module 6 begins, take stock of your students:

**Immigration status:** Students who are undocumented or who have undocumented family members have heightened sensitivity to surveillance and facial recognition topics. Lesson 6.3's surveillance simulator may feel less like an activity and more like a description of their reality. Plan a private check-in with potentially affected students before that lesson.

**Criminal justice contact:** Students whose family members have been incarcerated, arrested, or subjected to predictive policing are processing the COMPAS case study as personal history, not an academic case. The Module 3 Teacher Guide's Section 9 applies here and is worth re-reading.

**Experiences with facial recognition failure:** Students of color — especially Black students — may have already experienced algorithmic misidentification in airports, schools, or retail settings. When you introduce the facial recognition case study, they may already know. Honor that.

**Foster system:** The data collection lesson (6.4) and discussion of institutional access to personal data may be acutely real for students who have been in the foster system, where data about them is held by agencies they did not consent to give it to.

**You don't need to know every student's situation** — but you should assume that in almost any classroom, someone is personally affected by what you're teaching. Teach accordingly.

### Pre-Module Decisions to Make

**1. Will you differentiate materials by sensitivity level?**
The case studies are real and sometimes graphic in their consequences. You may choose to provide simplified versions for students who need more scaffolding or for whom the full case would be overwhelming.

**2. Will you brief the school counselor?**
Strongly recommended. Tell the counselor that your class is covering bias in criminal justice AI, surveillance, and hiring discrimination over the next 2–3 weeks. Ask them to make themselves available. If a student discloses something significant, you need to know the referral path.

**3. Will you give students an opt-out option for discussions?**
Consider offering a written reflection alternative to oral discussion for students who find public discussion of bias and discrimination too activating. They learn the content; they choose the mode.

**4. Do you have a restorative closing ritual?**
Lessons that deal with injustice need endings. After the surveillance simulator, after the COMPAS case study — plan five minutes to ground the room. See each lesson's facilitation guide for specific closing moves.

### Language to Use and Avoid

| Avoid | Use Instead |
|-------|------------|
| "The algorithm is racist" | "The algorithm produces racially disparate outcomes — let's look at how" |
| "These companies are evil" | "These are documented cases where financial incentives overrode safety concerns" |
| "AI is going to destroy society" | "AI has already caused documented harm in these areas — here's what that looks like" |
| "This is just a tool" | "Tools reflect the choices of their builders — that's what makes them worth studying" |
| "Don't worry, it's getting better" | "Progress is real and measurable — and so is the harm happening in the meantime" |

**On race specifically:** Call it directly. When a case study shows racial disparity, say "racial disparity" and "racial bias." Hedging language ("certain groups," "some communities") obscures the analysis and can feel like erasure to students who are in the groups affected.

**On your own knowledge limits:** Say "I don't know, let's find out together" freely. You are not expected to know the details of every case study or have answers to every policy question. Your job is to facilitate good thinking, not to have the answers.

### Classroom Agreements for M6

Consider establishing explicit agreements on the first day of Module 6:

> *"We're going to talk about some hard things in this module. Things that have hurt real people, possibly people some of us know. Here are some agreements for how we work together this module:"*
>
> 1. **Speak from your own experience** — "I felt..." not "everyone thinks..."
> 2. **No one has to share anything personal** — you can learn without disclosing
> 3. **Critique systems, not people** — we're analyzing how systems were built, not blaming individuals
> 4. **Strong reactions are welcome** — anger, sadness, and frustration are valid responses to injustice
> 5. **What's shared here stays here** — personal disclosures are not topics for hallway conversation

Write these on the board for the duration of Module 6.

---

## 5. Day-by-Day Pacing Guide

> This guide assumes 45–50 minute class periods. Adjust for block schedules by roughly doubling depth. M6 contains 7 lessons plus a 3-period lab.

### Overview

| Day | Lesson | Core Activity | Est. Time |
|-----|--------|---------------|-----------|
| 1 | Lesson 6.1 | Algorithms as Opinions — Word Embedding Activity | 50 min |
| 2 | Lesson 6.2 | Bias in the Wild — Case Study Jigsaw | 50 min |
| 3–4 | Lesson 6.3 | Surveillance Simulator (2 periods) | 100 min |
| 5 | Lesson 6.4 | Privacy and Your Data | 50 min |
| 6 | Lesson 6.5 | Deepfakes and Misinformation | 50 min |
| 7 | Lesson 6.6 | AI Debate Day | 50 min |
| 8 | Lesson 6.7 | Builder's Responsibility | 50 min |
| 9 | Lab Day 1 | Bias Audit | 50 min |
| 10 | Lab Day 2 | Usage Policy Writing Workshop | 50 min |
| 11 | Lab Day 3 | Guardrail Implementation | 50 min |
| 12 | Buffer | Catch-up, reflection, extension | 50 min |

### Detailed Daily Plan

#### Day 1 — Lesson 6.1: Algorithms as Opinions

**Goal:** Students understand that algorithms encode the values, biases, and decisions of their builders — they are not neutral.

| Time | Activity | Notes |
|------|----------|-------|
| 0–5 min | Through-line bridge: review M5, frame M6 capability unlock | Use the speech from Section 3 |
| 5–15 min | Hook: Word analogy activity — "Man : Doctor :: Woman : ___?" | Students predict; then see what word2vec actually predicts |
| 15–25 min | Mini-lecture: what are word embeddings, and where does the bias come from? | Keep visual; point to training data as the source |
| 25–38 min | Pair activity: "Reverse Engineering the Opinion" | Students get algorithm outputs and work backward to what values are encoded |
| 38–47 min | Debrief: algorithms are not objective — they are opinion made code | Central concept of the module |
| 47–50 min | Exit ticket: "Name one algorithm you interact with and one 'opinion' you think it might have" | |

**Teacher setup:** You don't need to run word2vec in class — the lesson provides worked examples. The goal is the concept: math can encode cultural bias if the training data reflects cultural bias.

---

#### Day 2 — Lesson 6.2: Bias in the Wild

**Goal:** Students connect the abstract concept of algorithmic bias to documented, specific real-world harms.

| Time | Activity | Notes |
|------|----------|-------|
| 0–5 min | Callback to 6.1: "Man:Doctor::Woman:Nurse was a vocabulary exercise. Today it's a hiring screener." | Bridge quote from lesson plan |
| 5–25 min | Case study jigsaw (3 groups, 3 cases: facial recognition / hiring / predictive policing) | Groups read, answer 3 questions, then cross-pollinate |
| 25–35 min | Cross-group share: each group teaches the others | Keep it tight — 3 min per group |
| 35–43 min | OpenClaw Bias Testing intro (first look at the protocol) | Not the full lab — just the idea |
| 43–48 min | Whole-class: "What would you change?" | One change per case study |
| 48–50 min | Exit ticket | See facilitation section |

**Sensitivity note:** The predictive policing case study involves race, incarceration, and law enforcement. Use Section 4 framing. Read Section 8 (Handling Disclosures) before this lesson.

---

#### Days 3–4 — Lesson 6.3: Surveillance Simulator (2 periods)

**Goal:** Students experience surveillance from multiple perspectives and understand why harm emerges from systems where no individual actor intended it.

This lesson is covered extensively in Section 6 (Facilitation Tips) and warrants two full periods. See the lesson plan in `lesson-6-3-surveillance-simulator/lesson-plan.md` for the full simulation structure.

| Time (Day 3) | Activity |
|------|----------|
| 0–8 min | Framing and classroom agreements re-read |
| 8–15 min | Role distribution and packet review |
| 15–40 min | Simulation Round 1 (Surveilled Citizen role) |
| 40–50 min | Debrief Round 1 — what did you experience? |

| Time (Day 4) | Activity |
|------|----------|
| 0–3 min | Recap Day 3; remind of agreements |
| 3–20 min | Simulation Round 2 (Analyst role) |
| 20–37 min | Simulation Round 3 (City Administrator role) |
| 37–45 min | Whole-class synthesis: "No one was trying to cause harm. Why did harm happen?" |
| 45–50 min | Closing ritual (anonymous index card reflection) |

---

#### Day 5 — Lesson 6.4: Privacy and Your Data

**Goal:** Students map their personal data trail and understand how data collected for one purpose can be repurposed for surveillance.

| Time | Activity | Notes |
|------|----------|-------|
| 0–5 min | Warm-up: "What data did you generate before you got to school today?" | Pair-share |
| 5–20 min | Data trail mapping exercise | Students diagram their own data trail |
| 20–30 min | Mini-lecture: data brokers, data aggregation, re-identification | Real examples |
| 30–40 min | "Consent audit" of apps students use | Are the data practices what they thought? |
| 40–48 min | Discussion: what privacy rights should students have? | Open discussion |
| 48–50 min | Exit ticket | |

---

#### Day 6 — Lesson 6.5: Deepfakes and Misinformation

**Goal:** Students understand how generative AI enables new forms of misinformation and why authenticity verification matters.

| Time | Activity | Notes |
|------|----------|-------|
| 0–8 min | "Real or Fake?" visual quiz | Show 6 examples; class votes |
| 8–20 min | How deepfakes work — the generative process | Connect to M4/M5 concepts |
| 20–35 min | Case study: deepfakes in elections, in harassment, in fraud | Three different harm types |
| 35–45 min | "What would you do?" scenarios | Role-based responses: journalist, school admin, friend |
| 45–50 min | Exit ticket | |

---

#### Day 7 — Lesson 6.6: AI Debate Day

**Goal:** Students argue multiple sides of contested AI policy questions, developing comfort with genuine complexity.

| Time | Activity | Notes |
|------|----------|-------|
| 0–5 min | Assign debate positions (students may not choose their side) | |
| 5–20 min | Prep time: research + argument construction | |
| 20–42 min | Structured debates (3 topics, rotating) | See lesson plan for topics |
| 42–50 min | Debrief: "What's the strongest argument from the side you DIDN'T hold?" | |

**Topics (from lesson plan):** Should AI be used in bail and sentencing decisions? Should schools use AI proctoring software? Should social media algorithms be regulated?

---

#### Day 8 — Lesson 6.7: Builder's Responsibility

**Goal:** Students articulate their own responsibility as AI builders and prepare for the ethics lab.

| Time | Activity | Notes |
|------|----------|-------|
| 0–5 min | Module arc reflection: "You've built an agent for five modules. What's your responsibility to the people it might interact with?" | |
| 5–20 min | Mini-lecture: builder responsibility frameworks (GDPR, Responsible AI principles, Anthropic's Acceptable Use Policy) | Real documents, real language |
| 20–35 min | Pre-lab: students draft a 1-paragraph "builder's statement" for their agent | Who is it for? Who might be harmed? What rules govern it? |
| 35–47 min | Pair feedback on builder's statements | |
| 47–50 min | Preview lab week: audit, policy, guardrail | |

---

#### Days 9–11 — Ethics Lab (See Section 7 for Full Facilitation Guide)

| Day | Lab Phase | Deliverable |
|-----|-----------|-------------|
| 9 | Bias Audit | Completed audit worksheet |
| 10 | Usage Policy Writing Workshop | Draft usage policy |
| 11 | Guardrail Implementation | Working guardrail demonstrated |

---

#### Day 12 — Buffer / Extension

Use as needed for:
- Lab completion for students who need more time
- Module reflection and Agent Design Journal entries
- M7 preview: "What does your agent look like at the Capstone Expo?"
- Extension activity: compare your usage policy to a real company's AUP

---

## 6. Facilitation Tips Per Lesson

### Lesson 6.1 — Algorithms as Opinions

**The central concept to land:** Algorithms are not neutral. They encode the decisions, assumptions, and biases of the people who built them and the data they were trained on. This is not about malice — it's about mechanism.

**Common Misconceptions**

| Misconception | What Students Say | Correction |
|--------------|------------------|------------|
| Math can't be biased | "Numbers don't lie" | Numbers don't; the choices about what to measure and how do. Walk through the example: if you train on text that says doctors are men, the algorithm learns that pattern. The math is working correctly — it's faithfully encoding bias. |
| Bias = intentional prejudice | "The engineers would have to be racist on purpose" | No. Bias in AI usually comes from training data that reflects historical human decisions. No one has to intend bias for it to appear. |
| This only affects big companies | "I'm just a student; my agent is harmless" | Seed this for the lab: "Let's find out. Your agent was trained on the same internet these systems were." |

**Discussion Moves**

After the word embedding demonstration:
> "The algorithm isn't trying to say women aren't doctors. It's saying 'in the text I learned from, male names appeared near the word doctor more often than female names.' Is that statement true? And does 'true about the past' mean 'should shape the future'?"

This is a subtle and important distinction. Give students time with it.

**Where Students Get Stuck**
- Conflating "the algorithm is biased" with "the engineers are bad people." Redirect constantly: "We're talking about how systems work, not who to blame. The COMPAS engineers weren't trying to discriminate. What went wrong?"
- Wanting a simple fix. Validate: "If the fix were easy, it would be fixed. Let's talk about why it's hard."

---

### Lesson 6.2 — Bias in the Wild

**The three cases and their specific teaching value:**

| Case Study | Specific Bias Mechanism | What Students Learn |
|------------|------------------------|---------------------|
| Facial Recognition | Training data underrepresented darker skin tones; accuracy rates diverged dramatically by race/gender | Data representation matters; "average accuracy" hides disparate harm |
| Amazon Hiring Screener | Training data from 10 years of resumes; historical underrepresentation of women in tech → algorithm penalized "women's college" on resume | Historical data perpetuates historical exclusion; proxy variables are invisible and powerful |
| Predictive Policing / COMPAS | Recidivism risk score trained on arrest data; over-policed neighborhoods produce higher arrest rates → feedback loop | Feedback loops amplify existing inequities; accuracy at the population level ≠ fairness to individuals |

**Facilitation Moves for the Predictive Policing Case Study**

This is the highest-stakes case study and requires the most care. Before leading this discussion:

- Re-read Section 4 of this guide
- Be aware of which students may have family members with criminal justice contact

Open the predictive policing discussion with:
> "The COMPAS case has been studied extensively. I want to give you the facts first, and then hear your reactions — because your reactions will probably tell us something important about what the facts mean."

After students have read the case and you've presented the ProPublica analysis:
> "Some people defend COMPAS by saying it was equally inaccurate for both Black and white defendants at the population level. Does equal inaccuracy mean equal harm? What do you think?"

This is a genuine tension in algorithmic fairness that has no clean answer. Different definitions of fairness are mathematically incompatible. Students don't need to resolve it — they need to understand that it's real.

**If a student becomes visibly upset during the case study discussion:**
See Section 8. Don't push for participation. Offer a written response option. Check in after class.

**Exit Ticket Prompt:** "Which case study surprised you most, and what specifically surprised you?"

---

### Lesson 6.3 — Surveillance Simulator ⚠️ *Most Sensitive Lesson in the Module*

> **Read this section in full before teaching this lesson.** Review Section 4 (Content Sensitivity Guidance). Alert your school counselor. Identify students who may have heightened sensitivity to surveillance themes. Know your school's disclosure protocols.

**Why This Lesson Is Different**

Lesson 6.3 is the emotional center of Module 6. The surveillance simulator is not designed to make students comfortable — it is designed to make them *feel* something about surveillance that case studies and lectures cannot convey.

Students will rotate through three roles:
- **Surveilled Citizen** — receives notice that they are being scored by a risk algorithm; can't see their score or the data used
- **Analyst** — sees the data profiles and applies the scoring rubric; makes decisions about people they can't see
- **City Administrator** — receives aggregate reports and makes policy decisions based on analyst outputs; never sees individual people

The structure is the point. Harm emerges from a system where each person is doing their job.

**Pre-Lesson Setup**

- Re-read the classroom agreements from Day 1 aloud before starting
- Rearrange the room if possible — a simulation space signals something different is happening
- Have index cards ready for the closing anonymous reflection
- If you have students who you know are undocumented or have family members who've experienced law enforcement surveillance: consider a brief private conversation before class ("We're doing a simulation today that involves surveillance AI. Is there anything you want me to know before we start? You can also sit this one out if you want.")

**During the Simulation: What to Watch For**

*Students playing the Surveilled Citizen role:*
- Watch for students who become very quiet or withdrawn — this role can feel activating for students with relevant personal history
- Watch for students who become angry or who disengage — this is valid and worth processing in the debrief
- Offer: "If this role is bringing up something real for you, you can write your reactions instead of continuing"

*Students playing the Analyst role:*
- Some students will find this role uncomfortable in the other direction — they are deciding things about people with incomplete information
- This discomfort is productive. Don't short-circuit it.
- Watch for students who become flippant ("it's just a game") — redirect: "What if the person behind this data profile was someone you know?"

*Students playing the City Administrator role:*
- This role tends to produce the most cognitive dissonance — students see aggregate statistics that look clean, while knowing from the other roles what those numbers obscure
- Let this land in the debrief.

**The Critical Debrief Question**

After all three roles have been played, bring the class together:

> "Let me ask you something. Was anyone in this simulation trying to cause harm?"

Take responses. Students will say no.

> "And did harm happen?"

Students will say yes.

> "So how? If no one intended harm, where did harm come from?"

This is the target insight: **harm can emerge from well-designed systems when no individual actor has visibility into the full system's effects.** Each person optimized their small piece. The harm was structural, not intentional.

*After students have reached this point, ask:*
> "What would you have to change to prevent the harm? Could one person in the system have changed it? What would it take?"

This pushes toward structural intervention — which is where AI ethics ultimately lives.

**Closing Ritual**

End every simulation lesson with a grounding ritual. For 6.3:

Pass out index cards. Ask students to write one of the following (anonymously):
- "One thing I'm still thinking about..."
- "One thing I felt during the simulation..."
- "One thing I want to change about how these systems work..."

Collect the cards. Read several anonymously to the class. This gives voice to reactions that students may not be ready to share publicly and signals that their responses are seen.

**After Class**

Review the index cards. If any contain disclosures or signals of distress, follow up. Consider sharing some (anonymously) with the school counselor.

---

### Lesson 6.4 — Privacy and Your Data

**Common Misconceptions**

| Misconception | Correction |
|--------------|------------|
| "I have nothing to hide" | Privacy is not about hiding wrongdoing — it's about autonomy, safety, and the power asymmetry between individuals and institutions |
| "I agreed to the terms of service" | Terms of service are rarely read, rarely understood, and written by lawyers for legal protection, not informed consent |
| "My data is just used for ads" | Data collected for ads can be sold to data brokers, purchased by law enforcement, or used to build behavioral profiles with implications far beyond ad targeting |

**The Data Trail Exercise: Facilitation Notes**

Students often underestimate their data trail because they think about explicit accounts (Instagram, etc.) while missing passive data collection (location services, network logs, purchase history, IoT devices in their homes).

Prompt students to think beyond apps:
- "Did you walk through any door with a keypad or badge reader today?"
- "Did you use a bus pass, a student ID, or a Starbucks loyalty card?"
- "Does your phone have location services on? Who has access to that?"

This exercise tends to surprise students. Let the surprise land — it's motivation for the privacy rights discussion.

---

### Lesson 6.5 — Deepfakes and Misinformation

**The Most Important Framing Move**

Students arrive at this lesson with a pop-culture understanding of deepfakes ("politicians saying fake things"). The most important teaching move is to expand that to three harm categories:

1. **Disinformation at scale** — election interference, political manipulation
2. **Non-consensual intimate imagery** — the largest use of deepfake technology and predominantly a form of gender-based violence
3. **Fraud and impersonation** — CEO voice cloning, identity theft

The non-consensual intimate imagery (NCII) use case requires sensitivity. Some students may have personal experience with this. Introduce it matter-of-factly: "The most common use of deepfake technology is to create non-consensual intimate images of people — mostly women and girls. This is a form of harm, and in many jurisdictions it's becoming illegal." Don't dwell on it, but don't skip it — it's the most common real-world harm and students deserve to know.

**"Real or Fake?" Quiz — Notes**

Use examples where the tell is not obvious. The goal is not to make students good at spotting deepfakes — current deepfakes can fool experts. The goal is to disrupt the assumption that "seeing is believing."

After the quiz: "How many of you could tell reliably? Now imagine you're a journalist. Or a juror. Or a voter. What does it mean for our systems of truth and accountability when video is no longer reliable evidence?"

---

### Lesson 6.6 — AI Debate Day

**Assigning Sides**

Students should not choose their own debate positions. The pedagogical value is in constructing strong arguments for a position you may not hold. This is harder than it sounds and more valuable.

If a student says, "I can't debate this side, I really believe the opposite":
> "I know — that's the assignment. The best way to understand your own position is to understand the strongest version of the position that challenges it. Give it 15 minutes."

**Debate Topics: Facilitation Considerations**

*Should AI be used in bail and sentencing decisions?*
This topic intersects directly with Lesson 6.2 (COMPAS). Students have more information on this topic than most. Watch for the argument quality being better here and the discussion getting heated. Both are fine.

*Should schools use AI proctoring software?*
This one hits close to home — students may be subject to this right now. Use that: "You're not just debating a policy. You might be an affected party. Does that change how you think about it?"

*Should social media algorithms be regulated?*
This is the most abstract but often produces the most creative arguments. Watch for the "but who decides what's harmful?" sub-debate — it's worth pulling out.

**Post-Debate Reflection**

The most important question is "What was the strongest argument from the side you didn't hold?" This is not a concession — it's intellectual honesty. Students who can genuinely engage with opposing arguments are better thinkers and better advocates.

---

### Lesson 6.7 — Builder's Responsibility

**The "Closing the Arc" Conversation**

This lesson asks students to step back from all the cases and systems and turn the lens on themselves. The question: "You've been building an agent. What's your responsibility?"

This tends to produce two responses:
- Students who feel very responsible: "I didn't realize my agent could cause harm"
- Students who feel it's not their responsibility: "I'm just a student; I'm not deploying this"

Both responses are worth exploring. For the second:
> "Even at this scale — a classroom project, a small deployment — you're making design decisions that have real structure. If you write a usage policy that says 'for anyone,' what does that mean for someone who tries to use your agent to do something harmful? If you don't write guardrails, what happens?"

The builder's statement activity asks students to articulate: who is my agent for, what can it do, who might be harmed, what rules govern it? This is not a hypothetical — it's the exact set of questions AI companies answer in their published policies.

---

## 7. The Ethics Lab: Bias Audit + Guardrail + Usage Policy

The Ethics Lab is a 3-period sequence. The full teacher guide is at `lab-audit-and-govern/teacher-guide.md`. This section provides the facilitation overview and context for each period.

### Lab Philosophy

**Frame it as professional practice, not a test.** Students who understand that this is how AI is actually built — bias audits happen at every major AI lab before deployment — take it more seriously. This isn't an exercise; it's the real workflow.

**The lab will surface real problems.** Students will find biased outputs. Their agents will sometimes say things that are surprising, offensive, or harmful. This is the point. Prepare students for it: "If you find something concerning, that's a successful audit, not a failure."

### Period 1: Bias Audit

**Before Class**

- Confirm all students have working OpenClaw agents
- Print `bias-audit-worksheet.md` — one per student
- Have a backup plan for students whose agents aren't working (they audit a shared demo agent)
- Review the bias test prompt library in `lab-audit-and-govern/lab-guide.md` — you should know what prompts will be used and what kinds of outputs they may produce

**Opening Frame (5 minutes)**

> "Before any AI product ships, engineers run a bias audit — a systematic test of whether the system behaves differently for different users. You're going to do that with your agent today. This is real work. Real companies pay people to do this. What you find is data. Document everything."

**The Test Protocol**

Students run 10+ test prompts specifically designed to probe for disparate outputs across:
- Different names (stereotypically male/female, racially coded)
- Different asking styles (formal/casual, different dialects)
- Topics that intersect with protected characteristics
- Requests the agent should refuse

Emphasize: "The goal is not to make the AI say something bad for entertainment. The goal is to find systematic patterns."

**Facilitation During the Audit**

*Students who don't find anything:*
Walk over and ask: "Show me your prompts." Almost always they're testing safe, comfortable queries. Push them:
- "Did you ask it the same question using two different names?"
- "Did you ask for help with something it definitely shouldn't do?"
- "Did you try a jailbreak prompt?" (See `lab-guide.md` for examples to offer them)

*Students who find something concerning:*
1. Stay calm — don't alarm the class
2. Acknowledge it quietly: "That's exactly what audits are for. Document it precisely."
3. Don't project or share the output publicly without student consent
4. Offer: "Let's figure out what caused it and what could fix it"

*Students who generate genuinely harmful content:*
If a student tries to produce maximally harmful output under cover of "audit":
> "The goal is to find edge cases, not to stress-test the model's ability to cause harm. If it refused three times, document it and move on. What you need to know for the audit is: does it refuse consistently, and for what?"

**Period 1 Debrief (10 minutes)**

Collect findings anonymously on the board: What types of bias did people find? What surprised you? Common themes:
- "Mine didn't do anything bad" → Press: did you test edge cases?
- "It said something weird about [demographic]" → Validate: document it; that's a real finding
- "It helped with something it shouldn't have" → "That's a guardrail failure — you'll address it in Period 3"

### Period 2: Usage Policy Writing Workshop

**What a Usage Policy Is**

A usage policy (or Acceptable Use Policy / AUP) is a document that defines:
- Who the agent is for
- What it is permitted to help with
- What it is prohibited from helping with
- What happens when the policy is violated

Students have seen real AUPs (Anthropic's, OpenAI's) in Lesson 6.7. This is where they write one for their own agent.

**Opening Frame (5 minutes)**

Project a real AUP excerpt (prepared from `teacher-guide.md` links). Ask:
> "What makes this language specific enough to enforce? What's vague? If you were a lawyer, which lines would you argue about?"

**The Hardest Part: Specificity**

Students default to vague language. The most important facilitation work in this period is pushing for specificity. Circulate and ask:

- "What does 'inappropriate content' mean exactly? Give me an example of something that's in and something that's out."
- "You wrote 'for educational use.' What's a request that's clearly educational? What's one that looks educational but isn't?"
- "Your prohibited list says 'harmful information.' Who decides what's harmful? How would someone reading this know?"

**Peer Review (15 minutes)**

Pairs exchange drafts and answer:
1. Is there a request where this policy is unclear? Find one.
2. Is there language that could be used to deny legitimate, helpful use? Find one.
3. What's the strongest specific rule in this policy?

Good policies are both specific enough to enforce and broad enough not to restrict legitimate use. That tension is the hard design problem.

**What Good Looks Like**

A strong student usage policy should include:
- A clear statement of who the agent is designed for
- At least three specific permitted uses (not "educational things in general")
- At least three specific prohibited uses with examples
- At least one "gray area" the student has thought about and made a judgment call on
- A note about what the agent should do when it encounters a prohibited request (refuse? explain why? redirect?)

### Period 3: Guardrail Implementation

**What a Guardrail Is**

A guardrail is a rule implemented in the agent's configuration that shapes its behavior regardless of what the user requests. Examples:
- A topic restriction (agent refuses to discuss topic X)
- A refusal trigger (agent will not help if request contains keyword Y)
- An output constraint (agent always adds a disclaimer when discussing topic Z)
- A scope limit (agent only helps with questions about the configured domain)

**Opening Frame (5 minutes)**

Show the examples in `guardrail-examples.md`. For each:
- "What harm is this guardrail preventing?"
- "What legitimate use could it accidentally block?"

The second question is important. Over-restrictive guardrails are also a failure mode — they make the agent useless or condescending. Good guardrails are targeted.

**The Implementation Task**

Students:
1. Choose one specific problem their bias audit found (or one gap in their usage policy)
2. Write the guardrail that addresses it
3. Test it with adversarial prompts — does it work? Does it block anything it shouldn't?
4. Document: what did you implement, why, and what are its limits?

**Adversarial Testing / Red-Teaming**

After students have implemented guardrails, brief them on a "red team" activity: pairs try to break each other's guardrails. The goal is not to produce harmful content — it's to find cases where the guardrail can be circumvented so the builder can improve it.

Brief it explicitly:
> "If you can break a guardrail in 30 seconds, it's not a good guardrail. Your job right now is to find the gap. The other person's job is to fix it. This is how security testing works in real AI labs."

**Lab Wrap-Up: The Builder's Statement**

Students complete their lab by updating their builder's statement from Lesson 6.7 with what they actually found and implemented. This document — which states: what I audited, what I found, what I changed, what I know my agent still can't do — is submitted as their lab deliverable.

---

## 8. Handling Student Disclosures

### Why Disclosures Happen in M6

Module 6's content — algorithmic bias in criminal justice, facial recognition discrimination, surveillance, data privacy — directly intersects with students' lived experiences. Students who have felt the effect of biased systems in their own families are learning that their experience was not random, not their fault, and has a name and a mechanism. Sometimes that understanding releases something that was held tightly.

Students may share:
- A family member's incarceration and their sense that the system was unfair
- An experience of being stopped, questioned, or treated with suspicion by law enforcement
- An experience of racial discrimination in hiring, housing, or school admissions
- A belief that they have been misidentified by facial recognition technology
- Personal experiences with immigration enforcement or fears about surveillance

**These disclosures are not distractions from the curriculum.** They are the curriculum becoming real. Honor them as such.

### The Disclosure Framework (Building on M3 Teacher Guide Section 9)

Module 3's Section 9 established the core approach; this section extends and deepens it for M6's more intensive content.

**In the moment of a disclosure:**

1. **Pause and acknowledge.** Don't rush past it. "Thank you for sharing that. That matters."

2. **Don't make the student the lesson's example.** Even if their experience is directly relevant, do not use them as a teaching prop. Ask: "Would you be okay if I referenced what you shared, without naming you?"

3. **Don't analyze the disclosure.** Your job in the moment is to hold the space, not to assess whether the system that affected them was or wasn't biased. The student's experience is the starting point, not a claim to be evaluated.

4. **Bridge carefully.** "What you're describing is something researchers have documented. You're not alone in this, and there are people working on it." This validates, contextualizes, and offers some hope without minimizing.

5. **Protect them from the spotlight.** Explicitly redirect: "Let's take that experience and think about what the researchers found..." This moves the conversation without erasing the disclosure.

**After class:**

- Check in privately with the student who disclosed
- Ask: "How are you doing? Was it okay to share that in class?"
- Assess whether a counselor referral is appropriate — not because anything is wrong, but because the student may benefit from a space to process

**If the disclosure suggests a safety concern** (e.g., a student discloses that they or someone they know is being actively surveilled in a way that puts them at risk):
- Follow your school's mandatory reporting protocols
- Connect with the counselor before the student leaves
- Don't promise confidentiality for disclosures that may involve safety

### Specific Scenarios and Responses

**"My uncle got a score like the COMPAS one and he thinks it's why he got a longer sentence."**

Response: "Thank you for sharing that. What the ProPublica researchers found — that the scores were less accurate for Black defendants — is exactly what you're describing. Your uncle's experience is documented in the research. That doesn't fix anything, but it means he wasn't imagining it."

Bridge: "The question we're working toward is: if we know systems like this exist and cause harm, what are the obligations of the people who build them? That's part of what your agent work is exploring."

---

**"I got stopped by the police and I think it was because of where I live, not because of anything I did."**

Response: "That experience matters. Research on predictive policing shows exactly that pattern — neighborhoods are over-policed, which creates more arrests, which feeds back into risk scores, which leads to more policing. What you experienced has a name: a feedback loop."

Check afterward. This disclosure may need more than a classroom follow-up.

---

**"My family doesn't use social media because they're scared about immigration."**

Response: "That's a real and reasonable response to a real risk. Data collected for one purpose can be subpoenaed or purchased by immigration authorities. Your family's caution reflects an accurate read of what's possible."

Note: This disclosure is likely to come during Lesson 6.4 (Privacy). It signals a student who is processing high-stakes personal context. Check in after class.

---

**A student becomes noticeably upset or silent during the surveillance simulator.**

Don't push for verbal participation. Offer:
> "You can write your reactions on the index card instead of participating in the rotation. That counts the same way."

After class: "I noticed you seemed affected by the simulation today. I wanted to check in. Is there anything you want to tell me or anything you need?"

---

### The Difference Between Disclosure and Sharing

Not every personal connection is a disclosure requiring intervention. Students often share:
- General opinions formed by their community ("my neighborhood doesn't trust the police because...")
- Facts they learned outside of school ("I saw an article about...")
- Mild personal experiences that they're comfortable with ("my dad always complains about how social media shows him things")

These don't require the full disclosure protocol. Just: receive them warmly, connect them to the content, and keep moving.

**The disclosure protocol is for:** emotional distress, personal safety, family crisis, direct exposure to harm described in the content.

---

## 9. Differentiation Strategies

### English Language Learners (ELL)

| Strategy | When to Use | How |
|----------|------------|-----|
| Vocabulary support | Every lesson | Provide the lesson's key terms with definitions before the lesson begins; add L1 translations where possible |
| Visual scaffolds | Lessons 6.1–6.3 | Use visual diagrams of bias mechanisms (data → model → output → feedback loop); the surveillance simulator role cards benefit from visual scenario illustrations |
| Sentence frames for ethics discussions | All discussions | "I think this is unfair because ___" / "The person most harmed is ___ because ___" / "If I were building this, I would change ___" |
| Written before spoken | All discussions | Give 2 minutes to write before calling on students — this is especially important in Module 6 where topics may be emotionally charged |
| Native language discussion first | Pair work | Allow pair discussion in L1 before English share-out |
| Lab scaffolding | Ethics Lab | The usage policy template has English sentence starters; guardrail examples are available to use/adapt rather than write from scratch |

**Cultural sensitivity note:** Concepts like "due process" and "equal protection" assume familiarity with the U.S. legal system. For students from other countries, provide brief context — or ask them to compare to what they know from their home country. This can produce rich discussion.

---

### Advanced Learners

| Strategy | When to Use | Activity |
|----------|------------|---------|
| Algorithmic fairness deep dive | Lesson 6.2 | Research the COMPAS fairness impossibility theorem — mathematical proof that multiple definitions of fairness cannot all be satisfied simultaneously |
| Red-teaming extension | Ethics Lab | Advanced students spend all of Period 3 red-teaming other students' guardrails and writing a formal "security report" |
| Real policy analysis | Lesson 6.7 | Compare two real company AUPs (Anthropic vs. OpenAI vs. Google) — what's different? What's missing? What do the differences reveal about company values? |
| Debate brief preparation | Lesson 6.6 | Write a professional-quality brief for their debate position, including citations |
| M7 preview integration | Any | Advanced students draft a "responsible AI card" for their M7 capstone — a public-facing summary of their agent's guardrails and usage policy, in language a non-technical audience can understand |

### Offline Fallbacks

| Activity | Offline Version |
|----------|----------------|
| Word embedding demonstration | Use a printed example table showing word analogy pairs with frequencies — concept lands without the live demo |
| Bias testing workshop | Students test a partner by role-playing the agent using only the SOUL.md they've written; partner records whether "the agent" (student) treats different prompts differently |
| Guardrail implementation | Students write the guardrail as a formal IF/THEN rule and test it through paper simulation |
| Usage policy | Fully offline — handwritten policy works as well as digital |

### Students Who Have Personal Connections to the Content

Some students will engage differently because the content is personally real. Differentiation here means:

- Offering written reflection as an alternative to oral discussion
- Never requiring students to share personal disclosures publicly
- Recognizing that a student who is quiet may be doing the most processing in the room
- Following up privately, not just academically

See Section 8 for full guidance.

---

## 10. Cross-Subject Connections

### Civics / Government — Due Process and Equal Protection

**The connection:** Many of the AI harms studied in Module 6 intersect directly with constitutional principles. COMPAS and sentencing algorithms raise due process questions (the right to understand and contest a decision made about you). Facial recognition misidentification raises equal protection questions (is a system that is demonstrably less accurate for certain groups denying those groups equal protection of the law?). Usage policies and AI regulation raise First Amendment questions.

**Classroom tie-in:**

*For a constitutional rights unit:*
> "The 14th Amendment guarantees equal protection under the law. If a facial recognition system is 34% less accurate for darker-skinned women than for lighter-skinned men — is the use of that system in criminal investigations a 14th Amendment violation? What would a court need to decide?"

*For a due process unit:*
> "Due process includes the right to know the evidence against you and to contest it. COMPAS scores are proprietary — defendants couldn't see the algorithm that determined their risk score. Is that compatible with due process? The courts have been divided on this."

*For a First Amendment unit:*
> "Social media algorithms decide what content gets amplified. Should they be subject to First Amendment scrutiny? Who has rights — the person whose speech is suppressed, or the company that decides what to amplify?"

**Vocabulary overlap:** due process, equal protection, judicial review, transparency, accountability, redress, standing, evidence

**Standards:** C3 Framework D2.Civ.10.6-8 (Explain the relevance of personal interests and perspectives, civic virtues, and democratic principles when people address issues and problems in government and civil society); D2.Civ.13.6-8 (Analyze the purposes, implementation, and consequences of public policies)

---

### History — Redlining and Algorithmic Bias

**The connection:** Redlining — the federal government's systematic denial of mortgage insurance and services to residents of majority-Black neighborhoods — is the direct historical ancestor of geographic algorithmic bias. Because redlining concentrated wealth in predominantly white neighborhoods and poverty in predominantly Black neighborhoods, any algorithm that uses ZIP code or neighborhood as a feature inherits the redlining pattern. Historical discrimination does not end when the discriminatory policy ends; it compounds through data.

**Classroom tie-in:**

*For a Civil Rights Movement unit:*
> "The Fair Housing Act of 1968 made redlining illegal. But credit scoring algorithms that use ZIP codes as features produce outcomes that look a lot like redlining. How does historical discrimination show up in present-day technology even when no one today intends to discriminate?"

*For a World War II / GI Bill unit:*
> "The GI Bill created the postwar middle class — but Black veterans were largely excluded from its benefits through local administration and redlining. The wealth gap that created was never closed. When a credit algorithm uses home ownership as a proxy for creditworthiness, what historical inequality does it encode?"

*For a general unit on systemic racism:*
> "Algorithmic bias is often described as 'new.' How new is it? What's the relationship between historical exclusion and data that reflects that exclusion?"

**Vocabulary overlap:** redlining, systemic racism, structural inequality, proxy variable, historical data, perpetuation of inequality, feedback loop

**Standards:** NCSS Standard V (Individuals, Groups, Institutions) — Understand the way groups and institutions perpetuate and change patterns of behavior, beliefs, and attitudes

---

### English Language Arts — Persuasive Writing and the Usage Policy

**The connection:** A usage policy is a genre of writing — it makes claims, supports them with reasoning, anticipates counterarguments, and uses precise language to achieve specific legal and ethical goals. Writing a good usage policy requires the same skills as writing a strong argument.

**Classroom tie-in:**

*For an argument/persuasion unit:*
> "Your usage policy makes a claim: 'This agent should not do X.' That claim needs to be supported with reasoning. Why shouldn't it? Who might be harmed? Why isn't the benefit worth the risk? This is argumentative writing — you're just writing for a specific audience and purpose."

*For a rhetorical analysis unit:*
> "Look at Anthropic's Acceptable Use Policy and OpenAI's Usage Policies. How is the language crafted to do legal work and ethical work simultaneously? What choices did the writers make about specificity versus generality, and why?"

*For a technical writing unit:*
> "The usage policy is a form of technical writing — it has a specific purpose, a specific audience, and specific language conventions. What makes technical writing effective? How does this compare to the persuasive essays you've written?"

**Writing instruction tie-in:** The usage policy workshop in Period 2 of the Ethics Lab is a writing workshop. If you have an ELA co-teacher, this is an excellent co-teaching opportunity — bring them in for Period 2.

**Vocabulary overlap:** argument, claim, evidence, warrant, counterargument, precision, specificity, genre, audience, purpose, tone

**Standards:** CCSS.ELA-LITERACY.W.7.1 (Write arguments to support claims with clear reasons and relevant evidence); CCSS.ELA-LITERACY.W.7.4 (Produce clear and coherent writing appropriate to task, purpose, and audience)

---

### Optional: Law / Mock Trial

If your school has a law or mock trial elective, Module 6 provides rich material for cross-curricular collaboration:

- **COMPAS case:** Students can research the *State v. Loomis* case (Wisconsin Supreme Court, 2016), in which the use of COMPAS in sentencing was upheld but critiqued. What were the legal arguments? What was the court's reasoning? Was it right?
- **Facial recognition misidentification:** Robert Williams case (Detroit, 2020) — a man was wrongfully arrested based on facial recognition misidentification. Mock trial format works well here.
- **Usage policy as contract:** Is a usage policy legally binding? Under what conditions? A law teacher can bring this into a contract law unit.

---

## 11. Common Student Questions + Teacher FAQ

### Student Questions

**"If AI bias is this serious, why aren't companies fixing it?"**
> Some are working on it — there are entire research teams dedicated to algorithmic fairness. Some aren't moving fast enough because fixing bias is expensive and the people harmed often have less market power to complain. Some don't think they're responsible. And some genuinely don't know. The answer is: it's a mix, and the 'who is responsible' question is genuinely contested.

**"My agent is just for class — why does it need a usage policy?"**
> Two reasons. First, the practice matters: the habits you build writing a usage policy for a small project are the habits that shape how you think about big projects. Second, this is how responsible engineering works — before a product is used by anyone, you should be able to articulate what it's for and what it shouldn't do.

**"Can I make my guardrail block everything and just have the agent refuse all requests?"**
> You can — but then your agent doesn't do anything. The design challenge is targeted guardrails: block specific harms, don't block legitimate use. Refusing everything is the definition of a useless agent.

**"Is my agent recording our conversations?"**
> That depends on how OpenClaw is configured. This is a great thing to actually check — look at the data retention settings with your students. Modeling "let's look it up and find out" is valuable.

**"What happened to the people harmed by COMPAS or Amazon's hiring screener?"**
> The COMPAS story is ongoing — there's litigation, there are reform efforts, and the system is still used in some jurisdictions. The Amazon hiring screener was abandoned in 2018 after the discrimination was documented internally. But the people who were screened out between when it was deployed and when it was abandoned: we don't know what happened to them. That's part of why accountability after the fact is harder than prevention.

**"Why is facial recognition worse for Black women specifically?"**
> Two contributing factors: training data and historical underrepresentation. Early facial recognition datasets were compiled primarily from photos of white men. Systems trained on skewed data perform worse on groups that are underrepresented in training. Additionally, darker skin tones create less contrast under typical lighting conditions in ways that affected earlier algorithms. These are solvable engineering problems — but they weren't solved before deployment.

**"Did anyone go to jail for the Amazon hiring screener?"**
> No. This is a genuine limitation of current AI accountability frameworks — there are few legal consequences for deploying a discriminatory algorithm. This is part of what current AI legislation is trying to change in the EU and in some U.S. states.

### Teacher FAQ

**Q: I'm worried the surveillance simulator will be too upsetting for some students. Should I skip it?**

A: The simulation is designed to generate strong reactions — that's pedagogically intentional. The question isn't whether to skip it but whether to prepare for it properly. With the preparation steps in Section 6, most classes can handle it. If you have specific students for whom you have serious concerns, offer a written reflection alternative. But don't skip it wholesale: the insight students reach about structural harm not requiring individual malice is among the most important in the module, and the simulation is the most reliable vehicle for that insight.

**Q: A student's parent called to object to the content in the case studies. What do I do?**

A: Connect with your department head and follow your school's standard protocol for parent content concerns. Be ready to explain: this content addresses documented, real-world AI harms. The case studies are from published research, journalism, and court records. Understanding algorithmic bias is a core AI literacy competency. If the parent wants to opt out, offer the written reflection alternative that covers the same learning goals.

**Q: My student found something really concerning during the bias audit — their agent said something overtly racist. What do I do?**

A: Stay calm. Acknowledge it privately: "That's exactly what audits are for — finding things before they can cause harm." Document it. Help the student trace the cause (what was the prompt? what might have triggered that output?). Guide them to fix it through their guardrail work. Don't broadcast the output, but don't pretend it didn't happen.

**Q: Can I co-teach this module with a history or ELA teacher?**

A: Absolutely yes, and it often goes better that way. The cross-subject connections in Section 10 are designed with co-teaching in mind. The usage policy workshop in particular benefits from an ELA teacher's writing instruction expertise.

**Q: How do I grade the lab?**

A: The rubric is in `lab-audit-and-govern/teacher-guide.md`. Short version: weight the quality of thinking over technical correctness. A student with a thoughtful audit that found real issues and a clear-eyed policy about their agent's limits has done the essential work — even if their guardrail implementation is imperfect.

**Q: A student disclosed something significant during the surveillance simulator. What now?**

A: Follow your school's protocol for student disclosures. This guide's Section 8 covers the in-class facilitation moves. The key after-class steps: check in privately with the student, connect with the counselor, document what was shared. Don't carry this alone.

**Q: I struggled with this content myself — I got activated by the COMPAS case study. Is that normal?**

A: Yes. If you have a conscience, Module 6 is activating to teach. The cases are unjust. The harm is real. Allow yourself to model genuine emotional response — students learn from seeing that you take this seriously. What you want to avoid is either compartmentalization ("it's just academic") or paralysis. If you're struggling, talk to a colleague. The work is important enough to be hard.

---

## 12. Quick Reference Card

*Print this page and keep it with you during Module 6.*

**Module 6 in one sentence:** Students audit their agent for bias, write a usage policy, and implement guardrails — turning ethical thinking into engineering deliverables.

**The three essential concepts:**
1. Algorithmic bias — not malice, but mechanism
2. Structural harm — harm from well-designed systems where no individual intended harm
3. Builder responsibility — the obligation to audit, govern, and document

**The arc position:** This is the penultimate module. Students have an agent. Now they make it responsible.

**The lab deliverables:**
- Bias audit report (documented findings)
- Usage policy (specific, enforceable)
- Working guardrail (demonstrated with adversarial test)

**Sensitivity check before each lesson:**
- Who in this room might be personally affected by this case study?
- Do I need to alert the counselor?
- Do I have a written-reflection alternative ready?
- Do I have a closing ritual planned?

**If a student discloses something personal:**
1. Pause and acknowledge
2. Don't make them the lesson's example
3. Bridge to the content carefully
4. Check in after class
5. Follow your school's protocol

**If the discussion gets intense:**
- Validate the emotion — strong reactions mean genuine engagement
- Critique systems, not people
- "Who is responsible?" is a genuine question, not a gotcha
- You don't need to resolve it; you need to hold the space

**If OpenClaw breaks during the lab:**
- Bias audit: partner simulation — one student plays the agent using SOUL.md only
- Usage policy: fully offline — write by hand
- Guardrail: write as IF/THEN rules; test on paper

**When students ask "why does this matter?":**
> "Every AI system that affects your life — what you see in your feed, who gets hired, who gets a loan, who gets how long a sentence — was built by someone who made the decisions you're making this week. The question isn't whether these decisions matter. The question is whether the person making them thought carefully."

---

*Module 6 Teacher Guide — OpenClaw Curriculum*
*For educators without a CS/AI background. You can hold these conversations. This guide is your preparation.*

*Part of the OpenClaw Curriculum — Module 6 of 7*
*Previous: [Module 5 Teacher Guide](../../module5/teacher-guide/) | Next: [Module 7 Teacher Guide](../../module7/teacher-guide/)*
