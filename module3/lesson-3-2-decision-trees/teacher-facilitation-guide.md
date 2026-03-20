# Teacher Facilitation Guide
## Lesson 3.2 — Decision Trees: How AI Decides

**Audience:** Teachers and instructional coaches  
**Grade Band:** 6–8  
**Duration:** 1 class period (45–50 min)

---

## Big Picture: What This Lesson Is Really About

This lesson does three things at once:

1. **Teaches a core ML concept** — decision trees as classification tools
2. **Makes if/else logic concrete and visual** — students see it before they code it
3. **Deepens the through-line** — students connect what they're learning to their own AI agent project

The through-line is key. By the end of this lesson, students should understand that their agent's "skill routing" — deciding which tool to use for a given message — is fundamentally a decision tree. This insight makes the coming lab feel purposeful, not just mechanical.

---

## Before Class

### Prep Checklist

- [ ] Print `build-a-tree-activity.md` (1 per pair) OR prepare to project it
- [ ] Print `decision-tree-design-challenge.md` for early finishers
- [ ] Prepare whiteboard space for drawing the example tree during direct instruction
- [ ] If using Option A (visualization demo): test your internet connection and bookmark [ml-playground.com](https://ml-playground.com) or [teachablemachine.withgoogle.com](https://teachablemachine.withgoogle.com)
- [ ] If using Option B (Scratch mini-lab): verify students have Scratch accounts or can use scratch.mit.edu without login

### Know Your Students

**If students struggled with if/else in a previous unit:** Spend more time on the through-line bridge and less on the Scratch mini-lab. The visual/unplugged tree is the priority.

**If students are comfortable with coding:** The Scratch mini-lab is a great extension — let fast finishers try it while others complete the Build-a-Tree activity.

**If students aren't yet building their AI agents:** The through-line bridge can be more hypothetical. Adjust the language from "your agent" to "imagine you were building an agent."

---

## Minute-by-Minute Guide

### 0:00–5:00 — Hook: 20 Questions

Start with a quick game. Don't overthink this — it should feel casual and fun.

**Suggested script:**
> "I'm thinking of an animal. You have 5 yes/no questions to figure out what it is. Go!"

Pick something moderately hard — not a dog, not a dinosaur. A platypus, a chameleon, or a manatee works well. Let students ask questions naturally.

After the game:
> "Okay — what did you notice? Did the questions get more specific as you went? Did some questions eliminate more possibilities than others? That pattern — that funnel of yes/no questions getting you closer and closer to an answer — that's a decision tree. That's literally what we're studying today."

**Common mistake:** Don't rush past the reflection. The 30 seconds of student observation here primes everything that follows.

---

### 5:00–15:00 — Direct Instruction

**Draw on the board while you talk — don't just talk.**

Students retain the visual structure much better than a verbal explanation alone.

#### Draw the example tree

Start with the root:
```
Is it alive?
```

Then add both branches, then their children. Say out loud as you draw:
> "Every question has two answers: yes or no. Each answer leads to either another question or a final answer. We call the final answers 'leaves' — like the leaves at the tips of a tree's branches."

#### Connect to if/else code

After drawing the tree:
> "If I were writing this as code, the first question would look like:
> 
> `if is_alive == true:`  
> `  ask next question...`  
> `else:`  
> `  ask different question...`
> 
> That's it. A decision tree is just a bunch of if/else statements, stacked up and branching out."

#### Real-world examples (quick)

Mention 2–3 real uses — don't go deep on any of them:
- "Spam filters use decision trees: is the email from someone I know? Does it have weird links? Does it ask for my password?"
- "Doctors use them: does the patient have a fever? Is it above 103? Are they having trouble breathing?"
- "Netflix uses a much fancier version to decide what to recommend."

---

### 15:00–18:00 — Through-Line Bridge

**This is the most important 3 minutes of the lesson.** Don't skip it or rush it.

Draw the agent routing example on the board:
```
User sends a message
        ↓
Does the message ask about weather?
   YES → Use the weather skill 🌤️
   NO  ↓
Does it ask for a joke?
   YES → Use the joke skill 😄
   NO  → Use the general chat skill 💬
```

**Say explicitly:**
> "This is called 'intent routing.' When your agent gets a message, it has to figure out: what does this person want? And then it picks the right skill — the right tool — to handle it. That's a decision tree. You're going to build exactly this in lab this week. You'll write the questions. You'll decide the branches. You will literally be coding this diagram."

**Quick pair-share (2 min):**
> "Turn to your partner. What other skills might your agent need? What question would it ask to decide when to use that skill?"

Call on 2–3 pairs to share. Write their examples on the board. This gives students ownership of the concept.

---

### 18:00–33:00 — Build-a-Tree Activity

Hand out the worksheets (or project them).

**Give instructions clearly:**
> "You're going to build a decision tree that classifies school supplies into 3 categories: writing tools, measuring tools, and storage tools. You need exactly 4 questions. Work in pairs. You have 8 minutes."

**Circulate and watch for:**

| What you see | What to do |
|---|---|
| Students naming categories in their questions ("Is it a writing tool?") | Redirect: "Ask about what the supply *does* or *looks like*, not what category it's in" |
| Students writing multi-part questions | Redirect: "It needs to be a clean yes or no. One thing at a time." |
| Students with an unbalanced tree (7 items on one side) | Ask: "What if you changed your first question so each answer covers about half the supplies?" |
| Fast finishers | Direct to test their tree with the test table, then to the design challenge |

**Debrief (3 min):**

1. Ask a pair to share their first question. Write it on the board.
2. Ask if anyone had a different first question. Write that too.
3. *"Both of these lead to correct trees. There's usually more than one right answer in AI design — and that's actually a big deal. Human choices shape how the AI behaves."*
4. *"What makes one tree better than another?"* (Guide to: fewer questions needed, more balanced splits, easier to understand)

---

### 33:00–43:00 — Optional Extension (choose one)

#### Option A — Visualization Demo (10 min)

Navigate to [ml-playground.com](https://ml-playground.com) (or equivalent).

- Show a pre-loaded dataset
- Walk through how the algorithm chooses which question to ask first
- *"Notice how it picks the question that splits the data most evenly? That's called 'information gain' — and it's how real decision tree algorithms work."*

#### Option B — Scratch Mini-Lab (10 min)

Students open Scratch and build a simple animal-guesser or supply-classifier based on their tree.

The starter code in `lesson-plan.md` can be projected or distributed.

**Key teaching move:** After students build it, ask:
> "Does your Scratch code look like your decision tree? Can you find each question in both?"

This makes the visual ↔ code connection explicit.

---

### 43:00–48:00 — Closure

**Exit ticket** (give students an index card or have them write in their notebooks):

1. What is a decision tree? (In your own words — no copying.)
2. How does your AI agent use decision tree logic?
3. One question you still have.

Collect these. Review before the next class — they'll tell you what to reinforce.

---

## Differentiation Strategies

### For students who need more support

- Pre-fill Question 1 on the Build-a-Tree worksheet ("Does it make marks on paper?")
- Provide a word bank of possible questions they can choose from
- Allow them to work with a stronger partner who explains their reasoning

### For students who need more challenge

- Design Challenge (pet advisor) — fully independent, requires original thinking
- Ask them to code their tree in Scratch
- Challenge: "Can you build a tree that asks FEWER questions and still gets the right answer every time?"
- Ask them to research "information gain" and explain it in a 2-minute presentation

### For English Language Learners

- Provide vocabulary card with key terms (decision tree, node, branch, leaf, classification)
- Allow pair work with a bilingual partner
- Accept drawings/diagrams as an alternative to written reflections

---

## Common Questions Students Ask

**"Can a question lead to more than two answers?"**
> "In a binary decision tree — the kind we're building — no. Every question splits into exactly two paths: yes or no. Some trees use different structures, but the yes/no version is the most common and the easiest to build."

**"Does the computer always build better trees than people?"**
> "Not necessarily. Computers can process more data faster, but humans are often better at knowing which questions are meaningful. That's why people still design the features that algorithms use."

**"What if someone lies when answering the questions?"**
> "Great question! Decision trees assume honest input. If the input is bad, the output will be wrong. That's a real problem in AI — it's called 'garbage in, garbage out.' What could you do to make your agent more robust against bad input?"

**"Is my agent actually using a real decision tree?"**
> "Technically, your agent uses a language model that has learned complex patterns — it's more sophisticated than a simple decision tree. But the *logic* of routing to the right skill is the same structure. Think of the decision tree as the blueprint, and your agent as a much more powerful version of that blueprint."

---

## Connections to Future Lessons

| Future Lesson | Connection |
|---|---|
| 3.3 — Neural Networks | Decision trees are interpretable; neural networks are not — introduces the concept of the "black box" |
| Lab Week — Skill Routing | Students write if/else routing logic for their agents — this is the direct application |
| 4.1 — Training Data | Decision trees can be *learned* from data, not just hand-designed |
| 5.2 — AI Ethics | Who decides what questions an AI asks? What biases can enter through question design? |

---

## Quick Reference: Key Vocabulary

| Term | Student-friendly definition |
|---|---|
| Decision tree | A flowchart of yes/no questions that leads to an answer |
| Node | One question in the tree |
| Branch | The path you take after answering yes or no |
| Leaf | The final answer at the end of a branch |
| Classification | Sorting things into categories |
| Intent routing | How an AI agent decides which tool or skill to use |
| If/else logic | Code that says "if this is true, do this; otherwise, do that" |

---

## Feedback & Iteration

After teaching this lesson, consider noting:
- Which part took longer than expected?
- Where did students get confused?
- What questions came up that aren't answered here?
- Did the through-line land? Did students make the connection to their agent?

Share feedback with the curriculum team so this guide can improve.

---

*Part of the OpenClaw AI Curriculum — Module 3: How AI Thinks*  
*Teacher Facilitation Guide — Not for student distribution*
