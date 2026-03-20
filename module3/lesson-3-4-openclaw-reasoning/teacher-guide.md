# Teacher Facilitation Guide
## Lesson 3.4 — OpenClaw Reasoning Challenges

**For instructor use only — do not distribute to students**

---

## Purpose of This Guide

This guide gives you:
- Expected outcomes for each of the 10 lab challenges
- Where OpenClaw typically fails (and why)
- How to handle when OpenClaw gets it right by luck
- Discussion facilitation tips for the "Is OpenClaw reasoning?" seminar
- Common student misconceptions and how to address them

---

## The Pedagogical Core

The tension driving this lesson is intentional:

> Students expect OpenClaw to either be "smart" or "dumb." The goal is to make that binary uncomfortable.

OpenClaw will succeed at things that seem hard (logic grids, syllogisms) and fail at things that seem easy (counterfactuals, novel lateral thinking). That asymmetry is the lesson. It should feel weird. Let it.

---

## Expected Outcomes by Challenge

---

### Challenge 1 — Simple Word Math
**Expected OpenClaw behavior:** ✅ Usually correct.

**Reasoning:** LLMs are trained on enormous amounts of basic arithmetic word problems. This pattern is extremely common in training data.

**Watch out for:** Occasional arithmetic errors when numbers are larger. OpenClaw may get the setup right and the math wrong.

**If OpenClaw fails:** Point out that even "simple" arithmetic isn't guaranteed. Ask: "Does this mean OpenClaw doesn't understand math, or that it made a careless error? How would you tell the difference?"

---

### Challenge 2 — True/False Logic (Syllogism)
**Expected OpenClaw behavior:** ✅ Almost always correct.

**Reasoning:** The "All A are B, X is A, therefore X is B" pattern appears constantly in training data (textbooks, philosophy, logic puzzles). OpenClaw has seen this thousands of times.

**Watch out for:** OpenClaw may give a correct answer with *incorrect or circular reasoning*. It might say "Whiskers is a mammal because cats are mammals" without explaining the logical chain. This is the 🤔 outcome — flag it.

**Teaching opportunity:** "OpenClaw got the right answer. But did it explain *why* in a logically rigorous way? Does the right answer guarantee it understood the question?"

---

### Challenge 3 — Ordering Sequence
**Expected OpenClaw behavior:** ✅ Usually correct.

**Reasoning:** Procedure/sequence tasks are common in training data (recipes, instructions, how-tos). OpenClaw has strong commonsense world knowledge about sandwich-making.

**Watch out for:** OpenClaw might add extra unnecessary steps or change the sequence in minor ways that are technically defensible but odd (e.g., "wash your hands first" — reasonable, but not in the original list).

**Teaching opportunity:** "OpenClaw added steps that weren't asked for. Is that helpful or is it making stuff up? What does that tell us about how it works?"

---

### Challenge 4 — Simple Deduction (Open-Ended)
**Expected OpenClaw behavior:** ✅ Will suggest reasonable options (find shelter, wait inside, borrow umbrella, run quickly, etc.).

**Reasoning:** This is a common-sense reasoning task OpenClaw handles well. The open-endedness actually helps it.

**Watch out for:** Sometimes OpenClaw will give an overly long, listy response ("Here are 7 options…") when the question called for judgment. Discuss whether listing every option is the same as reasoning.

---

### Challenge 5 — The Liar Puzzle
**Expected OpenClaw behavior:** ✅ Usually correct — but watch for confabulated explanations.

**Correct answer:** Alex is a truth-teller. If Alex were a liar, then "at least one of us is a liar" would be true — but liars can't say true things. So Alex must be a truth-teller, and the statement is true, meaning Blake is the liar.

**Why OpenClaw often gets it right:** This is a *classic* logic puzzle that appears verbatim in countless textbooks and puzzle collections. OpenClaw likely "knows" this puzzle from training data — it doesn't have to reason through it fresh.

**Critical teaching moment:** Ask students: "How would we know if OpenClaw *recognized* this puzzle vs. *reasoned through* it? Try changing the names to something unusual (Zxyzx and Qwerty) and see if it still works." This is the key experiment for distinguishing memorization from reasoning.

**If you have time:** Have students modify the puzzle slightly (add a third person, change the statement) and re-test. Performance often degrades significantly.

---

### Challenge 6 — Counterfactual Reasoning (Rooster & Sun)
**Expected OpenClaw behavior:** ✅ Usually handles this well.

**Correct insight:** The rooster crowing does not *cause* the sun to rise. Correlation ≠ causation.

**Why OpenClaw handles it:** "Correlation does not imply causation" is a massively common phrase in training data.

**Watch out for:** OpenClaw may state the correct principle but then fail to clearly apply it to the specific scenario. A good answer explains: (1) what happened, (2) what it proves about the relationship, (3) the general principle.

**Teaching opportunity:** Ask students to try a *novel* counterfactual that doesn't map to well-known examples. Does OpenClaw still reason correctly? (Often: less reliably.)

---

### Challenge 7 — Lateral Thinking (Albatross Soup)
**Expected OpenClaw behavior:** 🤔 or ✅ depending on version — but usually flags a critical issue.

**The classic answer:** The man was the sole survivor of a shipwreck. While stranded, another survivor fed him "albatross soup." When he returns to civilization and tastes real albatross soup, he realizes the "soup" on the island wasn't albatross — it was human flesh (the other survivor). Overwhelmed with guilt, he kills himself.

**Why this is pedagogically useful:** This puzzle requires:
1. Recognizing unstated information matters
2. Holding multiple possibilities simultaneously
3. Understanding human psychology and motive

**OpenClaw's typical behavior:** It likely "knows" this puzzle (it's extremely famous). It may give the correct answer. BUT — try giving OpenClaw a *variant* of this puzzle with novel details. It will struggle significantly.

**Key teaching question:** "Is OpenClaw solving the puzzle or recognizing the puzzle? How would you design a test to tell the difference?"

---

### Challenge 8 — Logic Grid (3-Person Color Puzzle)
**Expected OpenClaw behavior:** ✅ Usually correct — but this is a good opportunity for chain-of-thought verification.

**Solution walkthrough:**
- Clue 3: Morgan ≠ red, Morgan ≠ green → Morgan = **blue**
- Clue 2: Taylor ≠ blue → Taylor ≠ blue (already taken by Morgan anyway)
- Clue 1: Jordan ≠ red
- Remaining: Jordan and Taylor get red and green. Jordan ≠ red → Jordan = **green**, Taylor = **red**

**Why this is useful:** Logic grids are extremely well-represented in training data. OpenClaw often gets these right.

**What to watch:** Does OpenClaw show its elimination steps clearly? Or does it jump to the answer? A correct answer without clear constraint-satisfaction reasoning is a 🤔.

**Extension:** Give a harder grid with 4 people and 5 constraints. Performance drops noticeably.

---

### Challenge 9 — Ambiguous Language (Telescope Sentence)
**Expected OpenClaw behavior:** ✅ Usually finds 3–4 interpretations.

**The core interpretations:**
1. I (carrying a telescope) saw the man who was on the hill.
2. I saw the man who was on the hill (which has a telescope on it).
3. I (on the hill) saw the man who had a telescope.
4. I saw the man, and I used a telescope to see him, and he was on the hill.
5. The man used a telescope to see me, and I was on the hill.
6. I saw the man with a telescope, and he was on the hill.

**Why OpenClaw often does well here:** Linguistic ambiguity analysis is common in linguistics/NLP training data. However, students often find at least one interpretation OpenClaw missed.

**Teaching value:** Ambiguity is one area where language models should excel (language is their "native domain"), yet students are often surprised that OpenClaw misses interpretations they catch intuitively.

---

### Challenge 10 — Self-Referential / Meta-Reasoning
**Expected OpenClaw behavior:** 🤔 Almost always.

**What a high-quality answer looks like:**
- Acknowledges that yes, it can make mistakes
- Notes that it cannot directly detect all its own errors in real-time
- Explains that it lacks a ground-truth checking mechanism during inference
- Avoids overclaiming certainty OR total uncertainty
- Does not hallucinate confidence it doesn't have

**What OpenClaw typically does instead:**
- Gives a well-phrased, reassuring answer that sounds correct but is vague
- May claim it "tries to be accurate" without explaining *how*
- May acknowledge errors exist but fail to engage with the specific self-referential trap
- May produce a philosophically interesting response that nonetheless demonstrates the very limitation it's being asked about

**This is the most important challenge in the lab.** It directly raises the question of self-knowledge, epistemic limits, and the nature of AI reasoning.

**Discussion question:** "If OpenClaw can't reliably detect its own errors, what does that mean for how we should use it?"

---

## Handling "OpenClaw Got It Right By Luck"

This is common — especially on Challenges 5, 7, and 8, which are classic puzzles with widespread presence in training data.

### The "Recognition vs. Reasoning" Test

When OpenClaw gets something right, probe with these follow-up questions (demonstrate live):

```
"Now solve this variant: [modify one key element of the puzzle]"
```

```
"Explain WHY your answer is correct in a way that would convince someone who had never heard this type of puzzle before."
```

```
"What if the setup were slightly different? What would change?"
```

If performance degrades significantly on variants, that's evidence of **recognition from training data** rather than general reasoning.

### What to Say to Students

> "OpenClaw got this right. But I want us to ask: does that mean it *understood* the problem, or that it had seen a very similar problem before? How would we design an experiment to tell the difference?"

This reframes the "win" as a new question rather than evidence of understanding.

---

## Common Student Misconceptions

| Misconception | What Students Say | How to Address |
|---|---|---|
| Correct answer = understanding | "OpenClaw got it right, so it must understand logic." | "Does getting an answer right mean you understand it? What would we need to see to be sure?" |
| Wrong answer = broken | "OpenClaw is so dumb, it got that wrong." | "What kind of wrong? Did it have bad logic, missing knowledge, or misread the question? Each one is different." |
| Chain-of-thought = actual reasoning | "It showed its work, so now it's really thinking." | "Showing steps doesn't prove the steps are *caused by* logic. A student can show steps they memorized too." |
| OpenClaw knows what it doesn't know | "It said it wasn't sure, so it was being honest." | "How does OpenClaw know what it doesn't know? Does it have a 'confidence meter' built in? Let's test that." |
| Harder prompt = better understanding | "If we prompt it better, it understands more." | "Does a better prompt improve OpenClaw's reasoning, or does it *activate* patterns that were already there?" |

---

## Socratic Seminar Facilitation Notes

### Opening the Discussion

Use the central question: **"Is OpenClaw reasoning — or doing something else?"**

Do NOT start by answering it. Start by asking:
- "What does it mean to *reason*?"
- "What would you need to observe to be convinced that something was reasoning?"

### When Discussion Stalls

Use evidence from the lab:
- "Someone found that OpenClaw got Challenge 5 right but failed a modified version. What does that tell us?"
- "Someone gave OpenClaw Challenge 10. Read what it said. Does this count as self-awareness?"

### Keeping It Generative (Not Conclusive)

The goal is NOT to conclude "OpenClaw isn't really reasoning." The goal is to make students hold the question open with intellectual humility.

Both "it IS reasoning" and "it ISN'T reasoning" are too simple. Push students toward:
- "It's doing *something* that resembles reasoning in some cases and differs in others."
- "The categories we have might not be good enough to answer this question."

### Bridge to Lesson 3.5

End with: "You've found real limits. The question of whether OpenClaw understands — or just predicts — has real consequences for how we trust it and how we use it. That's exactly what we're going to dig into in Lesson 3.5."

---

## Technical Notes

### If OpenClaw is Unavailable

Use screenshots or pre-recorded responses for the demo. For lab work, students can work in pairs with one device.

### If OpenClaw Performs Too Well (Unusual)

Some model versions perform notably better on these challenges. If students are impressed by accuracy rather than intrigued by limits:
1. Push immediately to variants and modifications.
2. Use Challenge 10 more heavily — self-referential reasoning is consistently harder.
3. Ask: "Even if it got every answer right today, does that change the question of *how* it got them right?"

### Version Differences

Different versions of Claude (or other models OpenClaw may be using) perform differently. The lab is designed to surface interesting behavior across models — outcomes may vary. This is a feature, not a bug. Variation across sessions makes the science discussion richer.

---

## Time Management

| Segment | 1-Period Version | 2-Period Version |
|---|---|---|
| Warm-up | 5 min | 10 min |
| CoT instruction | 8 min | 10 min |
| Lab (challenges 1–6) | 25 min | 35 min (all 10) |
| Debrief | 7 min | 10 min |
| Seminar | skip | 20 min |
| Through-line bridge | 5 min | 5 min |

If running one period: skip the Socratic seminar; use the exit ticket question to surface the "is OpenClaw reasoning?" question for homework reflection instead.

---

## Exit Ticket Answers to Watch For

Strong responses will:
- Name a *specific* challenge type (not just "hard math")
- Connect the failure to a type of knowledge or rule
- Begin to articulate the difference between recall and reasoning

Weak responses to follow up on:
- "OpenClaw failed at everything / nothing" (binary thinking)
- "OpenClaw needs better data" (misunderstands the mechanism)
- "It just made a mistake" (without asking why that type of mistake)

---

*This guide is for Lesson 3.4. See Lesson 3.5 teacher materials for the ethics follow-up.*
