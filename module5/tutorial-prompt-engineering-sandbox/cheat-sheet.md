# Prompt Engineering Cheat Sheet
### Your Desk Reference for the Prompt Olympics 🏆

---

> **Print instructions:** Print double-sided, fold in half → pocket-sized reference card. Font size 10pt minimum for legibility.

---

## FRONT: The 6 Core Techniques

---

### 1. 🎯 SPECIFICITY
*Tell the AI exactly what you want — no guessing games.*

| ✅ DO | ❌ DON'T |
|---|---|
| "Write 3 study tips for memorizing Spanish vocabulary" | "Help me study" |
| "Explain gravity to a 6th grader in 2 sentences" | "Explain gravity" |
| "List 5 healthy lunch ideas under 500 calories" | "Give me food ideas" |

**One-liner:** The more specific your input, the more useful the output.

---

### 2. 🎭 ROLE (Persona)
*Give the AI a job title or character to play — it changes how it responds.*

| ✅ DO | ❌ DON'T |
|---|---|
| "You are a patient math tutor. Explain fractions step by step." | "Explain fractions" |
| "Act as a travel guide for Tokyo. Suggest a one-day itinerary." | "Tell me about Tokyo" |
| "You are a strict editor. Improve this paragraph for clarity." | "Fix my paragraph" |

**One-liner:** Roles give the AI context and change its voice, depth, and approach.

---

### 3. 📋 FEW-SHOT EXAMPLES
*Show the AI what "good" looks like with 1–3 examples before asking.*

| ✅ DO | ❌ DON'T |
|---|---|
| "Translate formal → casual. Example: 'I require assistance' → 'Can you help me?' Now translate: 'I would like to inquire...'" | "Make this more casual" |
| "Rate movies like this — Title: ★★★★☆ — Review: Great plot, slow ending. Now rate: Interstellar" | "Rate Interstellar" |

**One-liner:** Examples are the fastest way to show the AI your style, format, or tone.

---

### 4. 🚧 CONSTRAINTS
*Set limits on length, tone, complexity, or audience.*

| ✅ DO | ❌ DON'T |
|---|---|
| "Summarize in 3 bullet points, under 20 words each" | "Summarize this" |
| "Write a persuasive paragraph. No more than 100 words." | "Write something persuasive" |
| "Explain for a 5th grader — avoid technical jargon" | "Explain it simply" |

**One-liner:** Constraints prevent rambling and force the AI to stay on target.

---

### 5. 📐 OUTPUT FORMAT
*Specify how you want the answer structured.*

| ✅ DO | ❌ DON'T |
|---|---|
| "Respond as a numbered list with bold headers" | "Tell me the steps" |
| "Format as a table: Column 1 = Pros, Column 2 = Cons" | "Compare the two options" |
| "Write in Markdown. Use ## for section headers." | "Organize your response" |

**One-liner:** Formatting instructions make responses easier to read and use.

---

### 6. 🔄 ITERATION
*Your first prompt is a draft — refine based on the response you get.*

| ✅ DO | ❌ DON'T |
|---|---|
| "That's good — now make it funnier and shorter" | Give up after one try |
| "Add one more example to step 3" | Rewrite the whole prompt from scratch |
| "Rewrite this but for a 3rd grade audience instead" | Assume the AI can't improve |

**One-liner:** Prompting is a conversation. Follow up, adjust, and improve.

---

## BACK: Troubleshooting + Quick Reference

---

## 🔧 When Your Prompt Isn't Working

| PROBLEM | TRY THIS |
|---|---|
| Response is too vague or generic | Add **specificity** — what exactly do you want? |
| Response is too long / hard to read | Add **constraints** — "in 3 bullet points", "under 100 words" |
| Response is in the wrong tone | Add a **role** — "You are a [job/character]..." |
| AI keeps doing something wrong | Add a **few-shot example** showing the right approach |
| Response is disorganized | Add **output format** — "as a table", "numbered list", "Markdown" |
| Response is off-topic | Be more specific about what NOT to include |
| Same boring answer every time | Change the **role**, add constraints, or try a new angle |
| AI says "it depends" or hedges too much | Add context — tell the AI what situation you're in |

---

## ⚡ Prompt Formula Cheat Codes

**The Role + Task + Format combo:**
```
You are a [role]. [Task/question]. Respond as [format].
```
> *"You are a nutrition coach. Give me a 5-day meal plan. Format as a table."*

**The Context + Question + Constraint combo:**
```
[Background context]. [Specific question]? Keep your answer [limit].
```
> *"I'm a 7th grader studying for a history test. What were the main causes of WWI? Keep your answer under 150 words."*

**The Show-Then-Ask (Few-Shot) combo:**
```
Here's an example of what I want: [example]. Now do the same for: [your input].
```
> *"Here's an example summary: 'The book explores friendship and loss.' Now summarize: The Giver."*

---

## 📊 Prompt Quality Quick-Check

Before you run your prompt, ask yourself:

- [ ] Does the AI know **who it is** (role)?
- [ ] Does the AI know **exactly what I want** (task)?
- [ ] Does the AI know **how long/formatted** the answer should be (constraints + format)?
- [ ] Would a **stranger** understand this prompt without extra context?
- [ ] Have I given an **example** if the format matters?

If you checked all 5 → 🏆 You're ready for the Prompt Olympics.

---

## 🏅 Prompt Olympics Scoring Reminder

| Criteria | Points |
|---|---|
| Response is accurate and useful | 3 |
| Used 2+ techniques intentionally | 2 |
| Can explain WHY you wrote it this way | 2 |
| Response is formatted/structured cleanly | 1 |
| Iterated and improved the prompt | 2 |

**Max: 10 points per round**

---

*Made for OpenClaw Curriculum · Module 5: The Art of the Prompt*
