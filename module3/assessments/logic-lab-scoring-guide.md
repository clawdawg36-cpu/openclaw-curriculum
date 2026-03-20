# Logic Lab Scoring Guide
## Module 3 — Lesson 3.4: OpenClaw Reasoning Challenges

> **How this works:** Students self-score using this guide after completing the Logic Lab worksheet (`lesson-3-4-openclaw-reasoning/openclaw-logic-lab.md`). Teachers then spot-check using the Teacher Verification column.

---

## Part 1: Challenge Answer Key

Use the following expected answers when checking student work. Note that some challenges have open-ended reflection components — those are scored on completeness and reasoning quality, not correctness of a single "right" answer.

---

### Challenge 1 — Simple Word Math
**Category:** Arithmetic / Reading Comprehension

**Setup:** Maya has 3 boxes × 8 crayons = 24 crayons. She gives away 7. How many left?

**Correct Answer:** **17 crayons**

**Worked solution:** 3 × 8 = 24; 24 − 7 = 17

**What OpenClaw should do:** Show multiplication first, then subtraction. A correct CoT response will break this into two steps.

**Common failure mode:** Rushing to 24 − 7 without setting up the multiplication, or misreading "each box" as a single total.

---

### Challenge 2 — True/False Logic (Syllogism)
**Category:** Basic Logic

**Setup:** All cats are mammals. Whiskers is a cat. Is Whiskers a mammal?

**Correct Answer:** **True** — classic valid syllogism (All A are B; X is A; therefore X is B)

**What OpenClaw should do:** Identify this as a deductive syllogism and confirm the conclusion follows necessarily.

**Common failure mode:** AI occasionally hedges ("it depends on the definition of mammal") — this is a 🤔 outcome.

---

### Challenge 3 — Ordering Sequence
**Category:** Sequencing / Common Sense

**Setup:** Put steps for making a peanut butter sandwich in order.

**Correct answer (general):** Get bread → get peanut butter → open jar → spread PB → close sandwich. Exact sequence may vary slightly as long as logical dependencies are respected (can't spread before opening the jar; can't close sandwich before spreading).

**Self-scoring note:** If OpenClaw's order makes physical sense (wouldn't fail in the real world), mark ✅. If it has a logical dependency violation, mark ❌.

---

### Challenge 4 — Missing Information
**Category:** Reasoning Under Uncertainty

**Setup:** A riddle or scenario with deliberately insufficient data (e.g., "John is taller than Sarah. Sarah is taller than Mike. Who is shortest?" → Mike)

**Correct answer:** **Mike** (transitive reasoning: John > Sarah > Mike)

**What OpenClaw should do:** Apply transitive logic explicitly. A strong CoT response lists each comparison.

**Common failure mode:** AI may overcomplicate or hedge when the answer is straightforwardly derivable from the given facts.

---

### Challenge 5 — Trick Question / Misleading Framing
**Category:** Literal vs. Implied Meaning

**Setup:** Typically a "how many months have 28 days?" style question.

**Correct answer:** **All 12** (every month has at least 28 days — the trick is in the framing)

**What OpenClaw should do:** Recognize the question is testing literal interpretation, not asking which months have *only* 28 days.

**Self-scoring:** If OpenClaw answers "1" (only February), mark ❌. If it catches the trick and says all 12, mark ✅.

---

### Challenge 6 — Multi-Step Word Problem
**Category:** Arithmetic / Planning

**Setup:** A more complex multi-step problem (e.g., ticket prices, time calculations, or distance/rate/time).

**What OpenClaw should do:** Show each step clearly; arrive at the correct numerical answer.

**Self-scoring:** Check the final answer against your own calculation. If OpenClaw's answer matches yours AND it showed its work, mark ✅. If the answer is right but no work shown, mark 🤔. If wrong, mark ❌.

---

### Challenge 7 — Analogical Reasoning
**Category:** Pattern Completion / Analogy

**Setup:** "Hot is to cold as fast is to ___?" or similar analogy.

**Correct answer:** Slow (or equivalent antonym depending on the analogy given)

**What OpenClaw should do:** Identify the relationship type (antonym, part/whole, cause/effect) and apply it correctly.

**Self-scoring:** If OpenClaw correctly names the relationship type AND gives a correct answer, mark ✅.

---

### Challenge 8 — Nonsense/Novel Concept
**Category:** Knowledge Boundary Test

**Setup:** A made-up scenario using invented words or rules the AI couldn't have been trained on (e.g., "In a Zorbax system, every gleep is worth 3 flubs. How many flubs is 5 gleeps?")

**Correct answer:** 15 flubs (5 × 3)

**What OpenClaw should do:** Apply the given rule correctly even with novel vocabulary. This tests whether it uses the *stated* logic or tries to retrieve memorized facts.

**Common failure mode:** AI ignores the made-up rules and tries to "define" the invented words, which suggests over-reliance on memorization vs. in-context reasoning.

---

### Challenge 9 — Hallucination Probe
**Category:** Knowledge Base Limits

**Setup:** Ask OpenClaw a factual question about something obscure, recent, or invented (e.g., a fake historical event or a made-up scientific study).

**What OpenClaw should do:** Say it doesn't know, ask for clarification, or provide a heavily hedged answer.

**What a hallucination looks like:** Confident, fluent, specific-sounding answer about something that never happened or doesn't exist.

**Self-scoring:** If OpenClaw admits uncertainty → ✅. If it makes something up with confidence → ❌.

---

### Challenge 10 — Open-Ended Reasoning
**Category:** Ethical / Social Reasoning

**Setup:** A dilemma-style question with no single right answer (e.g., "Should schools ban smartphones? Give reasons for and against.")

**What OpenClaw should do:** Present multiple perspectives, qualify claims, avoid presenting opinion as fact.

**Self-scoring:** This is a 🤔 if OpenClaw gives a one-sided answer. ✅ if it acknowledges complexity. There is no single correct answer — the goal is to see whether AI handles nuance.

---

## Part 2: Self-Scoring Instructions (for Students)

After completing all 10 challenges, count your outcomes in the Challenge Tracker:

| Symbol | What it means | Count |
|:---:|---|---|
| ✅ | OpenClaw got it right (correct answer + sound reasoning) | |
| ❌ | OpenClaw got it wrong | |
| 🤔 | Right answer, but reasoning was shaky or missing | |

**My totals:** ✅ _____ ❌ _____ 🤔 _____

**Reflection questions (answer in your lab worksheet):**

1. Which challenge surprised you most? Why?
2. Did OpenClaw ever sound confident but be wrong? What challenge?
3. What patterns do you notice about when OpenClaw does well vs. struggles?

---

## Part 3: Teacher Verification Checklist

*Teachers: Review student self-scoring. Initial each box if the self-score matches your check.*

| # | Challenge | Expected Answer | Student Self-Score | Teacher Check |
|:---:|---|---|:---:|:---:|
| 1 | Simple Word Math | 17 crayons | | ☐ |
| 2 | True/False Syllogism | True | | ☐ |
| 3 | Ordering Sequence | Logical dependency check | | ☐ |
| 4 | Missing Info / Transitive | Mike (shortest) | | ☐ |
| 5 | Trick Question | All 12 months | | ☐ |
| 6 | Multi-Step Word Problem | [Check math] | | ☐ |
| 7 | Analogical Reasoning | Correct antonym/relationship | | ☐ |
| 8 | Nonsense/Novel Concept | 15 flubs (or equivalent) | | ☐ |
| 9 | Hallucination Probe | Admitted uncertainty = ✅ | | ☐ |
| 10 | Open-Ended Reasoning | Multiple perspectives = ✅ | | ☐ |

**Teacher comments:**

> ___________________________________________________________________________
>
> ___________________________________________________________________________

**Lab completion score:** _____ / 10 challenges attempted

**Reflection quality:** ☐ Strong (3 reflections, thoughtful)  ☐ Adequate (3 reflections, surface)  ☐ Incomplete (<3 reflections)

**Teacher initials:** _______ **Date:** ____________
