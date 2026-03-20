# Module 3 Quiz — Representation & Reasoning Concepts

**Auto-graded | 5 Questions | XP Available: 50 (+ bonus for skipping hints)**

---

## Question 1 — Feature Representation
**Difficulty:** Recall 🟢
**Topic:** Turning real-world properties into numbers

A machine learning model is being trained to predict whether a house will sell quickly. Which of the following is the **best example** of feature representation?

- A) Writing a paragraph description of the house's neighborhood
- B) Encoding "3 bedrooms, 2 bathrooms, 1,500 sq ft, $450,000 list price" as the vector `[3, 2, 1500, 450000]`
- C) Taking a photo of the house and storing it as a JPEG
- D) Asking a real estate agent to rate the house 1–10

**✅ Correct Answer: B**

**Explanations:**
- **A — Incorrect.** A paragraph is unstructured text — a model can't do math on it without additional processing (like embeddings). Raw text is not a feature vector.
- **B — Correct.** Feature representation means converting real-world properties into numbers a model can compute with. Packing bedrooms, bathrooms, square footage, and price into a numeric vector `[3, 2, 1500, 450000]` is exactly that.
- **C — Incorrect.** Storing a JPEG is storing raw data, not a feature representation. The image would need to be processed (e.g., pixel arrays or CNN embeddings) before it could be used as input to most models.
- **D — Incorrect.** A 1–10 rating is a number, but it's a human judgment summary — not a structured feature representation of the house's properties. It throws away most of the information.

> 💡 **Hint** *(costs 1 XP)*: Think about what format a spreadsheet row would use to describe a house. That's feature representation.

---

## Question 2 — Decision Tree Structure
**Difficulty:** Application 🟡
**Topic:** Which node comes first? What do leaf nodes represent?

A decision tree is trained to classify emails as **spam** or **not spam**. The tree has the following structure:

```
[Does the email contain "FREE MONEY"?]
       /              \
     Yes               No
      |                 |
[Is the sender       [Not Spam]
 unknown?]
   /      \
 Yes       No
  |         |
[Spam]   [Not Spam]
```

Which of the following statements is **true**?

- A) "Does the email contain 'FREE MONEY'?" is a leaf node because it makes the first decision
- B) The root node is "Is the sender unknown?" because it splits the data first
- C) The root node is "Does the email contain 'FREE MONEY'?" because it is the first split in the tree
- D) Leaf nodes like [Spam] and [Not Spam] represent questions the model still needs to answer

**✅ Correct Answer: C**

**Explanations:**
- **A — Incorrect.** A node that asks a question and splits data is called an **internal node** (or decision node), not a leaf node. Leaf nodes don't split — they output a final answer.
- **B — Incorrect.** "Is the sender unknown?" appears on only one branch of the tree — it's an internal node below the root, not the root itself.
- **C — Correct.** The **root node** is always the first split — the question at the very top of the tree. Here, "Does the email contain 'FREE MONEY'?" is the root node because it's where all data enters the tree first.
- **D — Incorrect.** Leaf nodes (like [Spam] and [Not Spam]) are the **final output** of the tree — they represent a classification decision, not a question to be answered.

> 💡 **Hint** *(costs 1 XP)*: Picture a tree upside down. The root is at the top. Where does data enter first?

---

## Question 3 — Pattern Recognition
**Difficulty:** Application 🟡
**Topic:** Identify the rule in a sequence

Look at the following sequence of numbers:

**2, 6, 18, 54, 162, ___**

What is the next number, and what is the rule?

- A) 486 — the rule is "multiply each term by 3"
- B) 324 — the rule is "add 162 to the previous term"
- C) 486 — the rule is "add the previous two terms together"
- D) 648 — the rule is "multiply each term by 4"

**✅ Correct Answer: A**

**Explanations:**
- **A — Correct.** Each term is the previous term multiplied by 3: 2 × 3 = 6, 6 × 3 = 18, 18 × 3 = 54, 54 × 3 = 162, 162 × 3 = **486**. This is a geometric sequence with ratio 3.
- **B — Incorrect.** Adding 162 to itself would give 324, but that rule doesn't hold for earlier terms (2 + 162 ≠ 6).
- **C — Incorrect.** Adding the previous two terms (Fibonacci-style) gives 2, 6, 8, 14... which doesn't match this sequence.
- **D — Incorrect.** Multiplying by 4 would give 2, 8, 32, 128... — a completely different sequence.

> 💡 **Hint** *(costs 1 XP)*: Try dividing each term by the one before it. Do you get the same number every time?

---

## Question 4 — Chain-of-Thought Prompting
**Difficulty:** Analysis 🔴
**Topic:** Which prompt correctly asks AI to show its reasoning?

A student wants an AI to help solve a math word problem and show **all reasoning steps** before giving the final answer. Which prompt best uses **chain-of-thought** technique?

- A) "Solve this problem: A train travels 60 mph for 2.5 hours. How far does it go?"
- B) "What is 60 × 2.5?"
- C) "Solve this step by step, explaining your reasoning at each step: A train travels 60 mph for 2.5 hours. How far does it go?"
- D) "Give me only the final numerical answer, no explanation: A train travels 60 mph for 2.5 hours. How far does it go?"

**✅ Correct Answer: C**

**Explanations:**
- **A — Incorrect.** This is a standard prompt — it asks for a solution but doesn't instruct the AI to show its reasoning. The AI might give just a number.
- **B — Incorrect.** This reduces the word problem to a bare calculation. No chain-of-thought reasoning is requested or possible here.
- **C — Correct.** Chain-of-thought prompting explicitly asks the model to work through each step and explain its reasoning before reaching a conclusion. "Step by step, explaining your reasoning at each step" is the hallmark phrase.
- **D — Incorrect.** This is the **opposite** of chain-of-thought — it actively suppresses reasoning and asks only for the final answer.

> 💡 **Hint** *(costs 1 XP)*: Chain-of-thought = making the AI "think out loud." Which prompt asks it to do that?

---

## Question 5 — AI Reasoning Limits
**Difficulty:** Analysis 🔴
**Topic:** Which type of problem is most likely to confuse an LLM?

Which of the following tasks is **most likely** to produce an incorrect or unreliable result from a large language model (LLM)?

- A) Summarizing a 500-word news article into 3 bullet points
- B) Translating a simple sentence from English to Spanish
- C) Counting the exact number of times the letter "r" appears in a 1,000-word passage
- D) Explaining the general concept of photosynthesis

**✅ Correct Answer: C**

**Explanations:**
- **A — Incorrect.** Summarization is a core strength of LLMs — they are trained extensively on text comprehension and condensation tasks.
- **B — Incorrect.** Translation between common languages is a well-established LLM capability with high accuracy for simple sentences.
- **C — Correct.** LLMs process text as **tokens**, not individual characters. Precise character-level counting requires attention to every single character in sequence — something LLMs are prone to getting wrong because they don't "see" text character-by-character the way humans or simple programs do. This is a well-documented failure mode.
- **D — Incorrect.** Explaining general factual concepts from training data is one of the most reliable LLM use cases.

> 💡 **Hint** *(costs 1 XP)*: LLMs read text in chunks called tokens, not letter by letter. What kind of task requires perfect letter-by-letter precision?

---

## Quiz Summary

| # | Topic | Difficulty | Correct Answer |
|---|-------|------------|---------------|
| 1 | Feature Representation | 🟢 Recall | B |
| 2 | Decision Tree Structure | 🟡 Application | C |
| 3 | Pattern Recognition | 🟡 Application | A |
| 4 | Chain-of-Thought Prompting | 🔴 Analysis | C |
| 5 | AI Reasoning Limits | 🔴 Analysis | C |

**Scoring:** 10 XP per correct answer = 50 XP max  
**Hints:** Each hint costs 1 XP (deducted from your total)  
**Bonus:** +5 XP if you score 5/5 without using any hints
