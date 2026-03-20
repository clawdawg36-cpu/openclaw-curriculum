# 👩🏫 Teacher Facilitation Guide — Build-a-Tree

**Module 3 | Internal Resource**
**Time:** 25–35 min activity + 10–15 min discussion
**Grade Band:** 6–8

---

## Purpose

This activity gives students a concrete, physical experience of decision tree logic before they encounter it computationally. By building a tree by hand:

- Students *feel* the challenge of choosing good splitting questions
- They discover edge cases organically (rather than being told they exist)
- They arrive at the AI connection with genuine intuition — not just a definition

The goal is for students to finish and say: *"Wait — I basically just made a tiny AI classifier."*

---

## Before Class

- [ ] Print or share `activity-guide.md` (one per student or pair)
- [ ] Print or share `tree-template.md` (one per student — or use blank paper)
- [ ] Make `example-trees.md` available for stuck students (optional — see note below)
- [ ] Prepare the board for a brief example tree (see Hook below)
- [ ] Decide: individual, pairs, or groups of 3?

**On the example trees:** Consider not distributing `example-trees.md` at the start — let students struggle productively first. Offer it as a hint after 10 minutes for groups who are stuck, or use it in the debrief to compare their trees to the reference.

---

## Timing Guide

| Phase | Time |
|---|---|
| Hook + framing | 3–5 min |
| Step 1: Choose domain + items | 3 min |
| Step 2–3: Design the tree | 10–12 min |
| Step 4–5: Test + edge cases | 5–7 min |
| Step 6: Reflect + share | 5–8 min |
| Debrief + AI connection | 5 min |

---

## Hook (3–5 minutes)

Before students open their worksheets, play a quick round of **"What Am I?"** — a stripped-down 20 Questions.

1. Think of an animal (or pick one from the board secretly)
2. Allow students to ask up to 5 yes/no questions
3. After they guess (or don't), draw their question path on the board

**Example board sketch:**
```
Does it have fur? → YES
Does it have four legs? → YES
Is it bigger than a cat? → YES
Does it live in a house? → NO
         → Could be a wolf, bear, deer...
Does it eat meat? → YES
         → ( Wolf? Bear? )
```

**Ask the class:**
- *"What happened when we asked a question that barely narrowed it down?"*
- *"Which question was the most useful? Why?"*

**Bridge:** "That pattern you just used — choosing questions that cut the list in half — is exactly how machine learning decision trees work. And today, you're going to build one from scratch."

---

## Facilitation Notes

### Getting Students Started

The most common stall point is **Step 2 (finding the root question)**. Students often try to start with the most specific question instead of the most broad one.

**If a student is stuck on their first question, ask:**
> "Imagine splitting your 8 items into two groups. What's the biggest difference between them?"

**If a student picked a question that only separates one item:**
> "If you ask that question, how many things are in the YES pile? How many in the NO pile? What would make it more even?"

### When Students Think They're Done Too Early

Some students will get 4–5 items working and declare the tree "done." Push them:
> "Does your tree handle all 8 items? Trace each one. Any surprises?"

Getting a "wrong" leaf is a great moment — it means there's a bug, and debugging is the lesson.

### Pairs vs. Individual

**Pairs** tend to produce richer trees — one student proposes a question, the other argues "but what about X?" That friction is productive. If working individually, encourage students to test each other's trees.

### Time Check at 12 Minutes

By minute 12, students should have a mostly complete tree on paper. If a group is still designing the root, prompt them to just pick one and go — they can fix it later.

---

## Seeded Examples (Use if Students Get Stuck)

These are starter trees to suggest — not to hand over. Frame them as: "Try this first question and see where it leads."

---

### 🐾 Animals (dog, eagle, salmon, frog, butterfly, snake, whale, bat)

**Good root question:** "Does it have a backbone?"
- YES: dog, eagle, salmon, frog, snake, whale, bat (7 items)
- NO: butterfly (1 item)
- *Note: this split is uneven — 7 vs 1. A better alternative:* "Is it warm-blooded?"
  - YES: dog, eagle, whale, bat (4)
  - NO: salmon, frog, snake, butterfly (4)
  - *This is a cleaner 50/50 split!*

**Common mistake to catch:** Students often put whale in the "lives in water" group and classify it as a fish. This is a great edge case to surface: "Is a whale a fish? How would you fix the tree to handle it correctly?"

**Follow-up question for early finishers:** "What if someone adds a penguin? Does your tree handle it?"

---

### 🌤️ Weather (sunny+warm, sunny+cold, rainy+warm, rainy+cold, snowy, windy+cloudy)

**Good root question:** "Is it precipitating (raining or snowing)?"
- YES: rainy+warm, rainy+cold, snowy
- NO: sunny+warm, sunny+cold, windy+cloudy

**Second-level for YES branch:** "Is it snow?"
**Second-level for NO branch:** "Is it warm (above 65°F)?"

**Edge case to surface:** "What if it's both windy AND rainy? Where does your tree put that?"

---

### 🍕 Food (apple, carrot, bread, chicken, cheese, rice, banana, broccoli)

**Good root question:** "Does it come from an animal?"
- YES: chicken, cheese
- NO: apple, carrot, bread, rice, banana, broccoli

**Common mistake:** Students often struggle with cheese. "It comes from a cow — but is it meat?" This is a productive discussion: categories matter, and the same item can be classified differently depending on your question.

**Famous edge case:** "Is a tomato a fruit or a vegetable in your tree?" (botanically fruit, culinarily vegetable — your tree's answer depends on which question you asked)

---

## Common Student Misconceptions

### "There's only one right tree"
**Reality:** Many different trees can correctly classify the same set. The best tree is the one that works correctly AND is easy to understand. There's room for good design here.

> Ask: "Compare your tree with your partner's. Do they both work? Which is easier to follow?"

### "More questions = better tree"
**Reality:** A tree that asks unnecessary questions is harder to read and slower to traverse. The best trees use the fewest questions that still classify correctly.

> Ask: "Can you find any questions in your tree that aren't needed? What would happen if you removed them?"

### "If the AI gets it wrong, it's stupid"
**Reality:** Getting things wrong isn't stupidity — it means the tree doesn't have a question that distinguishes two things. The same item classification challenge trips up real ML models in production.

> Redirect: "Which *question* would you need to add to fix the wrong answer? That's exactly what a machine learning engineer asks."

---

## Debrief: Key Points to Hit

### 1. The root question matters most

> "The first question you ask determines the whole structure. In machine learning, the algorithm picks this automatically — but it uses the same principle you used: pick the question that divides things most evenly."

### 2. Edge cases reveal limits

> "Every tree has items it doesn't handle well. Real AI models have the same problem — they fail on things that weren't in their training data or that don't fit neatly into any category."

### 3. Better questions, not more questions

> "You could build a tree with 100 questions that classifies 8 animals. Or a tree with 5 smart questions that does the same job. The second tree is better — it's simpler and easier to explain."

### 4. This is exactly how AI classifiers work

> "The algorithm you just did by hand — CART: Classification and Regression Trees — is one of the most widely used machine learning algorithms. You understand it now. Not just the definition — the actual logic."

---

## Discussion Prompts

Use these to extend the conversation:

- *"What information did you wish you had about your items when you were designing questions?"* (leads to: features, training data)
- *"What happens when a new item comes in that you've never seen before? Can your tree handle it?"* (leads to: generalization)
- *"What if two things on your list are almost identical — how do you tell them apart?"* (leads to: overfitting, precision)
- *"If you trained an AI on 1,000 animals, what would the decision tree look like?"* (leads to: scale, automated training)

---

## Extension: Advanced Students

### Level 1 — Optimize the Tree
Find the minimum number of questions needed to correctly classify all items. Can you build a tree that's 1 level shallower than your current one?

### Level 2 — Write the If-Then Code
Convert your decision tree into pseudocode or actual Python:

```python
def classify_animal(has_backbone, warm_blooded, lives_in_water, has_wings):
    if not has_backbone:
        return "butterfly"
    elif warm_blooded:
        if lives_in_water:
            return "whale"
        elif has_wings:
            return "eagle"
        else:
            return "dog"
    # ... and so on
```

### Level 3 — Build a Larger Tree
Start over with 12–15 items in your domain. Design a tree that handles the larger set. What changes about the structure?

---

## Connecting to the Module Through-Line

Close with this:

> "When OpenClaw routes a question to the right skill, it's doing something like what you just built — but across thousands of possible inputs, learned from millions of examples, instead of designed by hand. Your tree helps you understand the structure. Next, you'll see how the learning part works."

Then transition to Lesson 3.3 (Pattern Recognition) or the skill-writing activity, depending on your curriculum sequence.

---

*Keep this guide internal. Student-facing materials are `activity-guide.md`, `tree-template.md`, and (optionally) `example-trees.md`.*
