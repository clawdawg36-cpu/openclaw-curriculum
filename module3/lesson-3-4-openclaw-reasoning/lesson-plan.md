# Lesson 3.4 — OpenClaw Reasoning Challenges

**Module:** 3 — Teaching Your Agent  
**Duration:** 1–2 class periods (50–100 min)  
**Prerequisites:** Lessons 3.1–3.3 (students can interact with OpenClaw via the CLI or chat interface)  
**Materials:** OpenClaw Logic Lab worksheet (`openclaw-logic-lab.md`), pencils/paper, computers with OpenClaw access

---

## Learning Objectives

By the end of this lesson, students will be able to:

1. Use **chain-of-thought prompting** to ask OpenClaw to explain its reasoning step by step.
2. Identify specific types of reasoning tasks where OpenClaw performs well vs. where it fails.
3. Distinguish between **pattern-based prediction** and **genuine logical reasoning**.
4. Articulate the question: *Is OpenClaw actually reasoning — or doing something else?*
5. Connect their findings to the upcoming lesson on teaching agents new knowledge.

---

## Standards Alignment

- CSTA K-12 CS Standards: 3A-AP-16 (algorithms), 3B-AP-08 (decomposition)
- ISTE: Empowered Learner 1d, Computational Thinker 5c
- Common Core ELA: Cite evidence, construct arguments (RI/W.9-12)

---

## Period 1 (50 min)

### Warm-Up: The Black Box Problem (10 min)

**Prompt on the board:**
> "If something always gives you the right answer, does it understand the question?"

Ask students to think-pair-share. Accept all answers — goal is to surface the intuition that *correct output ≠ understanding*.

**Bridge:** "Today we're going to stress-test OpenClaw. We'll give it puzzles designed to trip up systems that are faking understanding — and we'll see what happens."

---

### Direct Instruction: Chain-of-Thought Prompting (10 min)

Explain the concept:

- **Default prompt:** "What is the answer to X?"
- **Chain-of-thought (CoT) prompt:** "Think step by step and show your reasoning. What is the answer to X?"

Why it matters:
1. It forces OpenClaw to expose its intermediate logic — making errors visible.
2. It often *improves* OpenClaw's answers on complex problems (and when it doesn't, that's revealing too).
3. It's a tool professional AI users rely on every day.

**Demo (live with projector):** Ask OpenClaw a simple math word problem — once without CoT, once with. Show students how the output differs.

Example:
```
Without CoT: "If a train travels 60 mph for 2.5 hours, how far does it go?"
With CoT:    "Think step by step and show your work. If a train travels 60 mph for 2.5 hours, how far does it go?"
```

Point out: CoT makes the reasoning *auditable*. You can spot where it went wrong.

---

### Lab Work: OpenClaw Logic Lab (25 min)

Distribute or display `openclaw-logic-lab.md`.

**Instructions:**
1. For each challenge, **solve it yourself first** (write your answer in the "My Answer" column).
2. Then give the problem to OpenClaw **using the chain-of-thought prompt format** provided.
3. Record OpenClaw's answer and reasoning.
4. Mark: ✅ OpenClaw got it right, ❌ OpenClaw got it wrong, 🤔 OpenClaw got the right answer for the wrong reason.
5. Write a 1–2 sentence reflection for each.

**Pacing:**
- Challenges 1–4: Easy (everyone should finish these)
- Challenges 5–7: Medium (aim to get here)
- Challenges 8–10: Hard (bonus — expect OpenClaw to struggle)

**Circulate and observe.** Note which challenges are generating the most student discussion. Collect observations for debrief.

---

### Debrief: Patterns of Success & Failure (5 min)

Quick show-of-hands or Socratic discussion:
- Which challenges did OpenClaw nail?
- Which ones did it fail?
- Did it ever get the right answer but with wrong reasoning?

Introduce vocabulary: **hallucination**, **pattern matching**, **statistical inference**.

---

## Period 2 (50 min) *(or continue from Period 1 if 1-period version)*

### Gallery Walk: Share Findings (10 min)

Students post their most interesting OpenClaw failure (or success) on a sticky note or shared doc. Class tours the "gallery."

**Guiding question:** Do you see any patterns in *when* OpenClaw fails?

---

### Socratic Seminar: Is OpenClaw Actually Reasoning? (20 min)

**Central question (post on board):**
> "Is OpenClaw reasoning — or is it doing something else? What's the difference, and does it matter?"

**Discussion scaffolds:**
- What does it mean to *reason*? (Logic, causality, abstraction)
- OpenClaw was trained on human text — is that enough to reason, or just to imitate?
- When OpenClaw gets the right answer, how do we know *why* it got it right?
- Does it matter if the answer is correct, even if the process was guessing?

**Teacher note:** Keep this generative, not conclusive. Students don't need to agree — they need to think carefully. This question intentionally sets up Lesson 3.5 (AI Ethics).

---

### Chain-of-Thought Extension: Prompt Engineering Experiment (15 min)

Students pick one challenge OpenClaw failed and try to "fix" it through better prompting:

Prompt variations to try:
```
"Let's think about this carefully, one step at a time."
"Before you answer, restate the problem in your own words, then solve it."
"What are all the possible answers? Now which one is correct and why?"
"Think like a logician. Identify all given facts, then apply rules step by step."
```

Can they get OpenClaw to succeed by changing the prompt? Does this change their thinking about whether OpenClaw "understands" the problem?

---

### Through-Line Bridge (5 min)

**Deliver this directly:**

> "You've just found the edges of what OpenClaw knows by default. You saw it succeed at some things and fail at others — and you noticed that a lot of its failures came from gaps in knowledge or from mixing up patterns with logic.
>
> In the next lesson, you're going to give your agent knowledge in an area where it's currently weak — filling in one of those gaps yourself. You're not just a user anymore. You're going to teach it."

**Exit ticket question:** Name one specific type of reasoning problem OpenClaw struggled with today. In one sentence, what kind of knowledge or rule would help it do better?

---

## Assessment

| Component | Points |
|---|---|
| Logic Lab worksheet (completed, with reflections) | 40 |
| CoT prompt usage (documented) | 20 |
| Discussion participation (Socratic seminar) | 20 |
| Exit ticket | 20 |

---

## Differentiation

**Support:**
- Pre-highlight the chain-of-thought prompt template in the lab sheet.
- Pair struggling students with a partner for challenges 1–4.
- Provide a "hint card" with examples of good CoT prompts.

**Extension:**
- Challenge students to *write* a reasoning problem specifically designed to trick OpenClaw.
- Research: What is "chain-of-thought prompting"? Who invented it and why?
- Compare OpenClaw's performance to a different AI tool on the same puzzles.

---

## Vocabulary

| Term | Definition |
|---|---|
| Chain-of-thought prompting | Asking an AI to show its reasoning step by step |
| Hallucination | When an AI states something false with confidence |
| Pattern matching | Finding similarities to training data vs. applying logical rules |
| Inference | Drawing conclusions from available information |
| Reasoning | Applying logic to move from known facts to new conclusions |

---

## Connections

- **Lesson 3.3** (recap): Students explored what OpenClaw knows and doesn't know.
- **Lesson 3.5** (preview): The ethics of AI that sounds confident but may not truly "understand."
- **Through-line:** Students are building toward creating a custom-knowledge agent. Today's failures are tomorrow's teaching opportunities.
