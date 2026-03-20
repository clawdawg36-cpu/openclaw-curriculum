# Lesson 4.5 — Bias in Training Data

**Module:** 4 — Give Your Agent the Ability to Learn  
**Grade Level:** 6–8 (adaptable)  
**Duration:** 50–60 minutes  
**Standards Alignment:** AI4K12 Big Idea 5 (Societal Impact); CSTA 2-IC-20, 2-IC-21, 3A-IC-24; ISTE 2.1.c

---

## Learning Objectives

By the end of this lesson, students will be able to:

1. Define bias in the context of training data and explain how it enters a model.
2. Analyze a real case study where biased training data produced harmful outcomes.
3. Distinguish between different types of bias: representation bias, measurement bias, and feedback loops.
4. Evaluate a proposed training dataset for potential bias sources.
5. Articulate why "the algorithm is neutral" is a myth when training data reflects human choices.

---

## Materials & Technology

| Item | Notes |
|------|-------|
| Slide deck (see `slides-outline.md`) | Projected display required |
| Case study handout | "The Pulse Oximeter Problem" or "Gender Shades" (see Case Studies below) |
| Bias audit worksheet | For structured dataset analysis activity |
| Student journals | For reflection |
| Optional: laptop access | To explore AI Fairness 360 or Deon ethics checklist |

---

## Lesson Sequence

### Warm-Up: "The Algorithm Is Neutral" (8 min)

**Opening provocation:**

Write on the board: *"Algorithms don't have feelings. They can't be racist or sexist. They're just math."*

**Question:** *"Do you agree? Disagree? What's missing from this statement?"*

Give students 2 minutes to write their initial reaction. Then cold-call 3–4 responses.

**Teacher position (reveal after discussion):** *"This statement is wrong — but it's wrong in a specific way. Algorithms themselves don't have feelings. But the data they're trained on was created by humans — and humans have biases, blind spots, and historical patterns baked in. When you train a model on that data, you train in the bias too."*

**Bridge:** *"Today we look at real cases where that happened — and the very real harm it caused."*

---

### Direct Instruction: How Bias Enters a Model (12 min)

**Format:** Guided slides with discussion stops

**Three Pathways for Bias:**

**1. Representation Bias**
The training data doesn't equally represent all groups relevant to the problem.

- *Example:* A facial recognition system trained on 80% light-skinned faces performs well on light-skinned faces and poorly on dark-skinned faces. The training data didn't include enough representation of the full population.
- *Why it matters:* The model learns patterns from what it sees. What it doesn't see, it doesn't learn.

**2. Measurement Bias**  
The way data is collected or labeled systematically disadvantages certain groups.

- *Example:* A "creditworthiness" model uses ZIP code as a feature. ZIP codes correlate with race due to historical redlining. The feature is technically race-neutral but functionally carries racial bias.
- *Why it matters:* Bias can be hidden in proxy variables that seem objective.

**3. Feedback Loop Bias**
A biased model generates predictions that shape the world — and then the model is retrained on that shaped world, amplifying the original bias.

- *Example:* A predictive policing model sends more officers to certain neighborhoods → more arrests in those neighborhoods → retraining confirms "those neighborhoods have more crime" → model sends even more officers.
- *Why it matters:* The system can create a self-reinforcing cycle that makes bias grow over time.

**Discussion question after each type:**
- *"Who is harmed by this type of bias? Who might not notice it?"*

---

### Case Study Deep Dive (18 min)

**Choose one case study — or split class:**

---

#### Case Study A: Gender Shades (Joy Buolamwini, MIT Media Lab)

**Background:**
- Joy Buolamwini, while a student at MIT, noticed that facial analysis software didn't detect her face.
- When she put on a white mask, it worked.
- She conducted a systematic study of three major commercial facial analysis systems from major tech companies.

**Findings (Gender Shades, 2018):**
- All three systems performed significantly worse on darker-skinned faces, especially darker-skinned women.
- Accuracy gaps: up to 34 percentage points difference between lighter-skinned men and darker-skinned women.
- Root cause: Training datasets were heavily dominated by lighter-skinned male faces.

**Impact:**
- Microsoft, IBM, and others updated their systems and datasets after the study.
- This research influenced the EU AI Act and US federal policy discussions.
- Joy Buolamwini founded the Algorithmic Justice League.

**Case Study Questions:**
1. What type of bias is this? (Representation bias)
2. Why didn't the companies catch this before deployment?
3. Who was harmed — and who wasn't harmed and therefore didn't notice?
4. What would a bias audit of this training data have revealed?
5. Was this a technical failure or an ethical failure? (It's both.)

---

#### Case Study B: Pulse Oximeters and Skin Tone

**Background:**
- Pulse oximeters (the device that clips on your finger) measure blood oxygen levels non-invasively using light.
- They were approved by the FDA based on studies conducted primarily on light-skinned individuals.

**Findings:**
- Research published in the New England Journal of Medicine (2020) showed pulse oximeters systematically overestimated oxygen levels in patients with dark skin — reporting normal oxygen when levels were actually dangerously low.
- During the COVID-19 pandemic, this meant some patients were sent home when they needed to be admitted.

**Why it happened:**
- The "training data" for this medical device (clinical validation studies) didn't include adequate representation of patients with darker skin tones.
- The device was optimized for a subset of the population and then deployed universally.

**Case Study Questions:**
1. This is a hardware device, not software — but how is it similar to a biased ML model?
2. What type of bias is this? (Representation bias in validation data)
3. What were the real-world consequences?
4. Who had the power to catch this before deployment? Why didn't they?
5. What does "fairness" mean in medical technology?

---

### Bias Audit Activity (10 min)

**Scenario:** A team is building a job recommendation AI. Here's their proposed training dataset:

> - 500,000 successful job applications from the last 10 years
> - Sourced from a large tech company in Silicon Valley
> - Labeled "successful" = got the job; "unsuccessful" = didn't get the job
> - Features include: resume text, years of experience, university name, GPA, previous job titles

**In pairs, complete the bias audit:**

1. **Representation bias check:** Who is likely underrepresented in "successful" applications from a Silicon Valley tech company over the last 10 years?

2. **Measurement bias check:** Any features that might be proxies for protected characteristics? (Think: university name → correlated with family wealth; job titles → correlated with gender historically)

3. **Feedback loop risk:** If this model starts screening new applicants, what happens to its training data over time?

4. **Your recommendation:** What changes would you make to the dataset before training?

**Share out 2–3 responses to each question.**

---

### Wrap-Up: Who Is Responsible? (5 min)

**The responsibility question:**

*"We've seen how bias gets into models. Now: who's responsible for fixing it?"*

Quick class debate — each student picks one (can play devil's advocate):

- The engineers who built the model?
- The company that deployed it?
- The regulators who approved it?
- The users who trusted it?
- Everyone?

**Teacher takeaway:**
*"The honest answer is: all of them, at different stages. But the engineers and companies who build these systems have the most power to prevent harm before it happens — and the most responsibility."*

---

### Exit Ticket (5 min)

**Prompt:**

> 1. Define bias in training data in your own words.
> 2. Name the three types of bias we discussed. Give one example of each.
> 3. Why is "the algorithm is neutral" an incomplete statement?
> 4. What's one thing you think should happen — technically, socially, or legally — to address bias in AI?

---

## Discussion Questions

- "Is it possible to build a completely unbiased AI? Why or why not?"
- "Should AI be held to a higher standard of fairness than humans? Or a lower one? Why?"
- "If you were Joy Buolamwini, what would you have done after discovering the bias? What did she actually do?"
- "The companies said they didn't intend to discriminate. Does intent matter when harm occurs?"
- "What responsibility do users have? If you know an AI system might be biased, should you still use it?"

---

## Differentiation

### Support (Struggling Learners)
- Use a single case study (Gender Shades) with a pre-filled discussion scaffold
- Reduce the bias audit to one question: "Who might be underrepresented in this training data?"
- Provide a vocabulary anchor: *bias, representation, fairness, training data, feedback loop*
- Focus exit ticket on questions 1 and 3 only

### Extension (Advanced Learners)
- Read: Joy Buolamwini's "Unmasking AI" (excerpts) or her TED Talk
- Research: IBM's AI Fairness 360 toolkit — what metrics does it use to detect bias?
- Investigate: ProPublica's "Machine Bias" investigation on COMPAS recidivism algorithm
- Design challenge: "Design a bias audit protocol for a healthcare AI. What data would you require companies to provide?"
- Debate: "Should AI systems be required to pass fairness audits before deployment?" (Prepare both sides)

### ELL / Language Support
- Case study handouts in bilingual format if available
- Allow discussion in first language for pair work
- Provide bias audit with sentence starters: "This data might underrepresent... because..."
- Exit ticket in first language allowed

---

## Assessment

| Method | Timing | What It Measures |
|--------|--------|-----------------|
| Opening provocation | Warm-up | Prior beliefs about AI neutrality |
| Case study analysis | During lesson | Ability to identify bias types, consequences, stakeholders |
| Bias audit activity | During lesson | Application of concepts to new scenario |
| Exit ticket | End of class | Vocabulary, conceptual synthesis, personal position |

---

## Teacher Notes

- This lesson often generates strong feelings. Create a safe discussion environment — some students may have personal experience with algorithmic discrimination (in hiring, lending, criminal justice, healthcare).
- "The algorithm is neutral" is a real belief held by many adults and engineers. Don't dismiss it — dismantle it carefully with evidence.
- The pulse oximeter case is powerful because it's medical hardware, not software — it makes the point that "bias in data" isn't just a software problem.
- Gender Shades is particularly good because it shows one person (Joy Buolamwini) doing research that changed policy at major companies. Students can see that individuals can create change.
- Anticipate: students may want to jump to "ban the AI." Redirect: we want them to think about *how* to build more fair systems, not just whether to build them.
- If the responsibility debate gets heated: that's good. Let it run, then consolidate. The point isn't a right answer — it's recognizing that responsibility is distributed.
- Preview for Lesson 4.6: "Next class you'll compare different AI models — GPT, Claude, Gemini. After what you learned today, what do you think you'll find?"
