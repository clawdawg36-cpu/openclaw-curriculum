# Quiz Guide: Module 5 — Prompt Engineering Concepts

**For:** Instructors and Curriculum Designers  
**Quiz file:** `quiz.md`

---

## Overview

This 5-question quiz assesses student understanding of the core concepts covered in Module 5: how large language models process text, how prompt design affects output quality, what hallucination is and why it occurs, and how to use AI responsibly in academic contexts.

### Topics Covered

| Q# | Topic | Format |
|----|-------|--------|
| 1 | What a token is (conceptual, not mathematical) | Multiple choice |
| 2 | Why role context improves LLM responses | Multiple choice |
| 3 | What hallucination is and why it happens | True/False |
| 4 | Identifying the better prompt (specificity) | Multiple choice |
| 5 | Academic integrity scenario: appropriate vs. inappropriate AI use | Scenario / Multiple choice |

---

## Passing Recommendation

**Recommended passing score: 4 out of 5 (80%)**

- Students scoring **5/5** demonstrate strong conceptual and applied understanding of prompting — ready to advance.
- Students scoring **4/5** have solid understanding with one gap — review the explanation for the missed question before proceeding.
- Students scoring **3/5** should revisit the Module 5 lesson, especially the sections on specificity and hallucination.
- Students scoring **2/5 or below** should retake the module before progressing.

---

## How to Administer

### ✅ Recommended approach: formative check-in, not high-stakes grading

This quiz is designed to consolidate learning, not rank students. Recommended administration:

- **Placement:** Give at the end of Module 5 after students have read or watched all core content. It can also be used mid-module after the "tokens and prompting" section as an early check.
- **Individual completion first:** Have students answer independently before any group discussion, even if you plan to debrief as a class.
- **Debrief aloud:** Walk through each question and explanation together. The explanations in `quiz.md` are written for learners — read them aloud or display them on screen.
- **Allow retakes:** Since this is formative, students who score below passing should be allowed to retry after reviewing the explanations. Learning is the goal.
- **No calculators or lookups needed:** This quiz is entirely conceptual. Students should answer from memory and understanding.

### 📊 Auto-Grading Setup

This quiz is designed for platforms that support multiple-choice auto-grading (e.g., Google Forms, Canvas, Schoology, Kahoot). When configuring:

- All questions have exactly one correct answer
- Point value: 1 point per question (total: 5 points)
- Distractors are carefully designed to surface common misconceptions — avoid rewording them without review

---

## Common Wrong Answers and Why Students Choose Them

### Question 1 — Tokens
**Common wrong answer: C) "A single character"**  
Why: Students who have programmed in Python or other languages often think of text processing as character-by-character. Reinforce that tokens are larger and variable in size — the word "running" might be one token, but "unbelievable" might be split into two or three.

**Common wrong answer: A) "A password or access key"**  
Why: The word "token" appears in authentication contexts (API tokens, OAuth tokens), so students with some tech exposure may confuse the two meanings. This is a good opportunity to discuss context-dependent vocabulary.

---

### Question 2 — Role Context
**Common wrong answer: C) "It prevents the model from making up facts"**  
Why: Students who have learned about hallucination may incorrectly believe that more detailed prompts eliminate it. Clarify: role context shapes *style and tone*, not factual accuracy. Hallucination can still occur even with a well-crafted system prompt.

**Common wrong answer: A) "It gives the model access to more recent data"**  
Why: Some students conflate prompt engineering with retrieval-augmented generation (RAG) or real-time internet access. Clarify that standard LLMs have a fixed training cutoff and prompts don't change the knowledge base.

---

### Question 3 — Hallucination
**Common wrong answer: A) True (the model is deliberately misleading)**  
Why: "Hallucination" has an eerie connotation, and students may anthropomorphize the model as having intent. Emphasize the mechanical nature: next-token prediction has no built-in fact verification. The model isn't lying — it genuinely has no way to know it's wrong.

**Discussion prompt:** Ask students: *"Why is it important to know that hallucination isn't intentional? Does it change how you'd use AI differently?"* This usually produces good conversation about verification habits.

---

### Question 4 — Prompt Specificity
**Common wrong answer: A) "Shorter prompts give the AI more creative freedom"**  
Why: Students may believe brevity equals flexibility. In practice, vague prompts produce unpredictable, often generic output. The "creative freedom" framing sounds appealing but misunderstands how LLMs work — they fill ambiguity with the most statistically common response pattern, not the most creative one.

**Common wrong answer: D) "Too many details confuse the AI"**  
Why: Students applying human social norms may think over-explaining is rude or counterproductive. Reinforce that LLMs don't get "confused" by detail — they benefit from it, as long as the details are accurate and consistent.

---

### Question 5 — Academic Integrity
**Common wrong answer: A) "Using AI for schoolwork is always acceptable if you don't copy from another student"**  
Why: Students often frame academic integrity narrowly as "don't plagiarize from other students." Expand the concept: submitting AI-generated work as your own is a form of academic dishonesty because it misrepresents your learning and bypasses the skill-building the assignment is designed to achieve.

**Common wrong answer: D) "Students should never use AI for any part of a school assignment"**  
Why: Some students (or their families) may hold a blanket prohibition view. Acknowledge that policies vary and that teachers have final authority — but use this as a teachable moment: AI used as a scaffold (like outlining, brainstorming, or checking understanding) is different from AI used as a ghostwriter.

**Important note:** Policies on AI use vary by school, district, and teacher. Encourage students to always ask their teacher what is permitted for a specific assignment. Transparency is always the right approach.

---

## Formative Usage Notes

- **Q5 is a strong discussion anchor.** Even students who answered correctly benefit from unpacking *why* Option B is acceptable. Follow up with: *"What would you do if you weren't sure whether your teacher allowed AI?"* and *"How would Option B look different if Jaylen didn't verify the outline against his textbook?"*
- **Q3 pairs well with a live demo.** If you have access to an AI tool in class, ask it a question that produces a hallucination (e.g., fabricated citation, wrong historical date) and show students the result. This concretizes the concept better than any explanation.
- **Q4 can be extended as a writing exercise.** Have students take Prompt A ("Write something about healthy eating") and rewrite it using the specificity principles from Prompt B. Share and compare rewrites.

---

## Alignment with Learning Objectives

| Learning Objective | Question |
|--------------------|----------|
| Explain what a token is and how it relates to LLM processing | Q1 |
| Describe why role context improves the quality of AI responses | Q2 |
| Explain what hallucination is and why it is not intentional | Q3 |
| Evaluate prompt quality using specificity as a criterion | Q4 |
| Apply academic integrity principles to AI-assisted schoolwork | Q5 |

---

## Notes for Localization / Adaptation

- Q5's scenario (history essay, World War I) can be swapped for any subject area while preserving the core distinction between Option A and Option B
- Difficulty level: accessible to students with no prior AI experience (appropriate for ages 13+)
- Estimated Bloom's Levels: **Understanding** (Q1–Q3), **Application** (Q4), **Evaluation** (Q5)
- This quiz replaces the quiz previously described in the [Module 5] Online Tutorial Content task — it is the canonical M5 assessment
