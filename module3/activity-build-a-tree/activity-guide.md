# 🌳 Build-a-Tree — Activity Guide

**Module 3 | Decision Trees Activity**
**Time:** 25–35 minutes
**Format:** Individual, pairs, or small groups

---

## The Big Idea

Decision trees are one of the simplest — and oldest — ideas in AI. They work by asking a series of yes/no questions to sort things into categories. The neat thing? You can build one by hand.

Today you'll do exactly that. You'll pick a classification problem, design the questions, draw the tree, and test it.

> **Through-line:** "AI doesn't guess randomly — it follows a path of questions. Your decision tree is a tiny AI that classifies things the same way."

---

## What You'll Build

A decision tree that can classify things in **one of these domains** (you pick):

- 🐾 **Animals** — Identify an animal from yes/no questions
- 🌤️ **Weather** — Suggest what to wear based on weather conditions
- 🍕 **Food** — Classify a food into categories (fruit, veggie, grain, protein…)

Or propose your own domain to your teacher!

---

## Step-by-Step Instructions

---

### Step 1 — Pick Your Domain and Items

Choose your domain, then pick **6–8 things** you want to classify.

**Examples:**

| Domain | Example Items |
|---|---|
| Animals | dog, eagle, salmon, frog, butterfly, snake, whale, bat |
| Weather | sunny + warm, sunny + cold, rainy + warm, rainy + cold, snowy, windy + cloudy |
| Food | apple, carrot, bread, chicken, cheese, rice, banana, broccoli |

Write your items in the space on your `tree-template.md`.

**Tip:** Start with items that are clearly different from each other. Add tricky edge cases once your base tree works.

---

### Step 2 — Find the Best First Question

Your first question needs to **split your items into two roughly equal groups**.

Ask yourself: *What one yes/no question divides my list most cleanly in half?*

**Good first questions:**
- 🐾 Animals: "Does it have four legs?"
- 🌤️ Weather: "Is it raining or snowing?"
- 🍕 Food: "Is it a plant?"

**What makes a bad first question:**
- It only separates one item from all the others (too narrow)
- It doesn't apply to all items (too vague)
- The answer is "maybe" for most things (too ambiguous)

Write your first question in the **top node** of your template.

---

### Step 3 — Build Each Branch

For each answer (YES and NO), keep asking:
- *What things are on this branch?*
- *What one question can split them?*

Keep branching until each path ends with exactly **one item** — that's your **leaf node** (the answer).

**Drawing tips:**
- Use boxes for questions (nodes)
- Use lines for branches — label each one YES or NO
- Use ovals or circles for final answers (leaves)

If you're working on paper, sketch it out roughly first before committing to the final layout. Trees grow — leave room!

---

### Step 4 — Test Your Tree

Pick **3 items** from your list and trace them through the tree from the top.

For each one:
1. Start at the top question
2. Answer YES or NO
3. Follow the branch
4. Repeat until you reach a leaf
5. Check: is the leaf the right answer?

If you end up at the wrong answer, trace back and find where the branch went wrong. Fix the question or reorganize.

---

### Step 5 — Try an Edge Case

Pick something that *almost* fits one of your items but isn't on your list.

**Examples:**
- 🐾 If your tree classifies a whale as a fish (wrong — it's a mammal), what question would fix it?
- 🌤️ What happens if it's both windy AND rainy?
- 🍕 Is a tomato a fruit or a vegetable in your tree?

Write down:
- The edge case you tried
- What your tree said
- Whether it was right or wrong
- What you'd change to fix it

---

### Step 6 — Reflect

Answer these questions in your notes:

1. **What was the hardest part about picking your questions?**
2. **Did your tree ever give a wrong answer? What caused it?**
3. **How is this similar to how AI makes decisions?**
4. **What would make your tree smarter — more questions, or better questions?**

---

## Bonus Challenges

If you finish early, try one of these:

### 🌿 Make It Deeper
Add 2 more items to your domain and extend your tree to classify them. Does your tree still work, or do you need to restructure?

### 🔀 Swap with a Partner
Trade completed trees with a partner. Test theirs with 3 items. Did it classify them correctly? Give feedback: which questions were clear? Which were confusing?

### 🤖 Teach It to OpenClaw
Describe your decision tree in plain language to OpenClaw. Can it follow your logic? Ask it to classify something using your tree. Does it get it right?

### 🎨 Redesign It
Try the same domain with a completely different first question. Does the new structure work better or worse? What does that tell you about how first choices shape everything downstream?

---

## Vocabulary Reference

| Term | Meaning |
|---|---|
| **Node** | A question in the tree (a decision point) |
| **Branch** | The path taken after answering yes or no |
| **Leaf** | A final answer — the end of a path |
| **Depth** | How many questions deep a path goes |
| **Classification** | Sorting things into categories based on their features |
| **Feature** | A property of a thing that can be tested (does it fly? is it warm?) |

---

## The Connection to AI

When you built this tree, you were doing exactly what a machine learning engineer does — but by hand.

Real AI decision trees are built differently: instead of a person designing the questions, an algorithm finds the best questions automatically by analyzing thousands of examples. But the structure is the same: questions → branches → answers.

The fancy term for "finding the best question to split the data" is **information gain**. The algorithm picks whichever question separates the groups most cleanly — just like you were trying to do in Step 2.

> "You just did machine learning. You analyzed your data, designed a model, tested it, and debugged it. That's the job."

---

*When you're done, hold onto your tree — you may use it in the class showcase!* 🌳
