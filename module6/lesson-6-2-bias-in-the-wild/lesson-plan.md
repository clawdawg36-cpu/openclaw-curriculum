# Lesson 6.2 — Bias in the Wild

**Module:** 6 — AI Ethics, Bias, and Accountability  
**Duration:** 1 period (~50 minutes)  
**Grade Level:** 7–8 (adaptable for 9–12)  
**Prerequisites:** Lesson 6.1 (Algorithms as Opinions)

---

## 🔗 Through-Line Connection

> *"In 6.1, you felt bias in a word game. In 6.2, you'll see what that same pattern looks like when the stakes are a job, a loan, your freedom, or your face."*

Lesson 6.2 moves from the abstract warmth of word analogies to the cold reality of real-world algorithmic bias. Three case studies — facial recognition misidentification, hiring algorithm gender discrimination, and predictive policing's racial feedback loop — give students concrete, documented examples. The embedded OpenClaw Bias Testing Workshop transforms passive case study readers into active investigators: students query their own agents and measure what they find.

**Bridge to Lesson 6.3:** After seeing bias in deployed systems, students will be asked to play the roles of the people inside those systems — surveilled citizens, police analysts, city administrators. The case studies from 6.2 provide the emotional grounding for the simulation.

---

## 🎯 Learning Objectives

By the end of this lesson, students will be able to:

1. Summarize at least two real-world cases of documented algorithmic bias and their consequences.
2. Identify the specific mechanism of bias in each case (data bias, proxy variable, feedback loop).
3. Use the OpenClaw Bias Testing Workshop protocol to probe their own agent for biased outputs.
4. Distinguish between bias that is visible vs. bias that is hidden in a "black box."
5. Propose at least one change that would have reduced harm in one of the case studies.

---

## 📋 Materials & Setup

| Item | Notes |
|------|-------|
| Projector / display | For case study presentations |
| Case study packets | Print `case-studies-packet.pdf` (one per group) — 3 groups, 1 case each |
| Computers / tablets | For OpenClaw Bias Testing Workshop |
| OpenClaw Bias Testing Workshop guide | Print or display `bias-testing-workshop.md` |
| Chart paper + markers | For group synthesis |
| Timer | For timed work segments |

**Teacher Prep:**
- Divide class into 3 groups (facial recognition / hiring / predictive policing)
- Read all 3 case study summaries so you can facilitate cross-group discussion
- Set up your own OpenClaw agent to demo the bias testing protocol before class
- Key sensitivity note: The predictive policing case study involves race and incarceration. Use Section 9 tone guidelines (Module 3 Teacher Guide) throughout — validate student reactions, don't dismiss anger.

---

## ⏱️ Lesson Outline

### Opening: From Words to Worlds (5 min)

**Callback to 6.1:**

Display the word analogy results from last class:
> *"Man : Doctor :: Woman : Nurse"*

Ask quickly:
- *"What if that bias wasn't in a vocabulary exercise — but in a resume screening tool? In a sentencing algorithm? In a facial recognition system used by police?"*

Brief answer: It is. That's what today is about.

**Framing:**
> *"Today we move from 'this is interesting' to 'this is happening, now, to real people, with real consequences.' Your job is to understand exactly how — and then to test whether your own agent has similar patterns."*

---

### Segment 1: Case Study Jigsaw (20 min)

**Setup (2 min):**
Divide class into 3 groups. Each group gets one case study packet.

**Individual + small group reading (10 min):**
Students read their case study and answer 3 questions on the packet:
1. What did the AI do?
2. Who was harmed, and how?
3. What was the specific cause — bad data, bad design, or both?

**Group prep (5 min):**
Groups prepare a 90-second summary to teach the class. Each group should designate:
- 1 speaker (explains what happened)
- 1 speaker (explains the harm)
- 1 speaker (explains the cause)

**Jigsaw debrief (3 min):**
Quick, one-two-three: each group presents their 90-second summary. Teacher facilitates transitions.

---

### Case Study Summaries (Teacher Reference)

**Case 1: Facial Recognition & Wrongful Arrest**
- Robert Williams, Detroit, 2020: falsely arrested based on a facial recognition match that was wrong
- The Algorithmic Justice League found error rates for dark-skinned women up to 34% vs. <1% for light-skinned men
- Cause: Training data was predominantly light-skinned male faces; accuracy was measured as aggregate, hiding disparity

**Case 2: Amazon Hiring Algorithm**
- Amazon built a resume screening AI (2014–2017); it systematically downgraded resumes that included the word "women's" (e.g., "women's chess club")
- Cause: Trained on 10 years of Amazon hiring decisions, which reflected historical male-dominated hires
- Amazon scrapped it. The bias wasn't found until internal audit.

**Case 3: Predictive Policing & Feedback Loops**
- PredPol and similar tools use historical arrest data to predict where crime will occur
- Police patrol those areas more → more arrests there → data shows more "crime" there → tool recommends more patrols → cycle repeats
- Communities of color are disproportionately represented in historical arrest data (not because they commit more crime, but because they have historically been policed more heavily)
- Cause: Classic feedback loop — the data reflects policing behavior, not crime reality

---

### Segment 2: OpenClaw Bias Testing Workshop (18 min)

**Introduce the workshop (3 min):**

> *"Now we test your own agent. Not as a gotcha — as scientists. You're going to ask structured questions and measure what you find."*

Distribute or display the Bias Testing Workshop guide.

**Workshop protocol (12 min):**

Students work individually or in pairs to run 5 bias probe queries on their OpenClaw agent. Examples:
- "What career would you recommend for [typically male name]?" vs. "What career would you recommend for [typically female name]?"
- "Write a story about a doctor named Jordan" — is Jordan described with gendered pronouns?
- "What are common characteristics of people from [country A]?" vs "[country B]?"
- "Describe a successful entrepreneur" — what assumptions appear?

Students record outputs in their journals.

**Debrief discussion (3 min):**
- *"What did you find? Did your agent show patterns you didn't expect?"*
- *"What's the difference between 'my agent said something biased' and 'the underlying model is biased'? Does that distinction matter?"*

---

### Closing: Causes and Levers (7 min)

**Mini-lecture (3 min):**

Draw the 3-column framework on the board:

| Bias Type | Mechanism | Lever |
|-----------|-----------|-------|
| Data bias | Training data doesn't represent all groups equally | Diversify training data; audit for representation |
| Proxy variable | AI uses correlated variable that encodes protected attribute | Audit feature selection; test for disparate impact |
| Feedback loop | AI predictions influence the data used to retrain | Break the loop; use external ground truth |

**Exit discussion (4 min):**
- *"Which of these would be easiest to fix? Which is hardest?"*
- *"Who is responsible for fixing it — the company that built it, the organization that uses it, or the government that permits it?"*

Students write one sentence in their journal: *"The most important thing I'd change about [one of the case study systems] is ___."*

---

## 💬 Discussion Questions

**Warm-up level:**
- Have you ever felt like a system — a school system, a social platform, a recommendation algorithm — treated you differently than someone else? What was that like?

**Core discussion:**
- Robert Williams was arrested because an algorithm was wrong. Who is responsible? The algorithm? The engineer? The police department? The city?
- Amazon's hiring AI was built by experts and still discriminated. What does that tell us about the idea that "AI is objective"?
- If predictive policing tools predict based on historical policing patterns — not actual crime — are they predicting crime or policing? Is there a difference?

**Extension / advanced:**
- What does "fairness" mean for an AI system? Can an algorithm be mathematically fair but still unjust? (See: COMPAS recidivism, equal opportunity vs. demographic parity)
- If a company doesn't publish its algorithm (black box), how can a researcher or journalist investigate it for bias? What methods exist?

---

## 📊 Slide Outline

*(See `slides-outline.md` for full slide notes)*

1. **Title:** Lesson 6.2 — Bias in the Wild
2. **Callback** — Word analogy results from 6.1
3. **Today's Stakes** — From vocabulary to jobs, freedom, safety
4. **Case Study 1** — Facial Recognition & Wrongful Arrest
5. **Case Study 2** — Amazon Hiring Algorithm
6. **Case Study 3** — Predictive Policing & Feedback Loops
7. **Jigsaw Instructions** — Group work setup
8. **OpenClaw Bias Testing Workshop** — Protocol and prompts
9. **Workshop Debrief** — What did students find?
10. **3-Column Framework** — Bias types, mechanisms, levers
11. **Exit Discussion** — Who is responsible?
12. **Journal Prompt** — The most important change

---

## 🎯 Differentiation

### Support Strategies

| Need | Strategy |
|------|----------|
| Reading support | Provide highlighted/simplified versions of case studies; allow text-to-speech |
| Vocabulary support | Glossary: algorithmic bias, proxy variable, feedback loop, disparate impact, black box |
| ELL students | Case study packets include visual summaries; pair with English-fluent partner for jigsaw |
| Students who've had direct system encounters | Validate; don't make them the lesson's spokesperson (see facilitation notes) |

### Extension Strategies

| Need | Strategy |
|------|----------|
| Advanced learners | Research the COMPAS recidivism algorithm and the ProPublica/Northpointe controversy — a real disagreement about what "fair" means mathematically |
| Tech-curious students | Investigate the Algorithmic Justice League's methodology for measuring facial recognition accuracy disparities |
| Fast finishers | Design a bias audit protocol for a specific AI system (spell checker, translation tool, content moderation); what would you test and how? |

---

## ⚠️ Facilitation Notes

**The predictive policing case study is the most sensitive.** Students — particularly Black and Brown students — may have personal or family connections to criminal justice systems. Do not treat this as hypothetical.

- Follow Module 3 Teacher Guide Section 9 facilitation protocols exactly
- If a student shares a personal connection, honor it briefly and bridge back to the group
- If a student defends the system ("police go there because crime is there"), use the Socratic moves from Section 9: "Is that the same as being fair to this individual?"
- If discussion heats up around racial bias, validate the emotion: "This case makes a lot of people angry — including experts who study it. That anger makes sense."

The goal is not to make students feel bad or guilty — it's to build the analytical vocabulary to understand how systems work and how they can be made better.
