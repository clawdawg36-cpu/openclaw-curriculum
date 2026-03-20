# Lesson 3.2 — Decision Trees: How AI Decides

**Module:** 3 — How AI Thinks  
**Grade Band:** 6–8  
**Duration:** 1 class period (45–50 minutes)  
**Prerequisites:** Lesson 3.1 — What is Machine Learning?

---

## Learning Objectives

By the end of this lesson, students will be able to:

1. **Define** a decision tree and explain how it uses yes/no questions to classify things.
2. **Build** a simple decision tree by hand using the Build-a-Tree activity.
3. **Connect** decision tree logic to how their AI agent routes requests to the right skill.
4. **Design** an original decision tree (optional extension) using the pet advisor challenge.

---

## Standards Alignment

| Standard | Connection |
|---|---|
| CSTA K-12 CS Standards 2-AP-10 | Use flowcharts/pseudocode to design a program |
| CSTA 2-AP-12 | Design solutions that decompose problems into smaller parts |
| CSTA 2-DA-08 | Collect data using computational tools and transform data to make it more useful |
| ISTE 5c (Computational Thinker) | Break problems into component parts and design algorithms |

---

## Materials

- Printed or projected decision tree template (from `build-a-tree-activity.md`)
- Printed or projected decision-tree-design-challenge.md (for early finishers)
- Whiteboard or chart paper
- Sticky notes (optional)
- **Optional:** Computers/tablets for Scratch mini-lab

---

## Vocabulary

| Term | Definition |
|---|---|
| **Decision tree** | A flowchart-like model that asks yes/no questions to classify or decide |
| **Node** | A single decision point in the tree (a question) |
| **Branch** | The path taken after answering yes or no |
| **Leaf** | A final answer or outcome at the end of a branch |
| **Classification** | Sorting or labeling data into categories |
| **If-then logic** | Programming logic that says "if this is true, then do this" |

---

## Lesson Outline

### 🔔 Hook (5 min)

Play a quick round of "20 Questions" with the class.

1. Think of an animal (or have a student think of one).
2. Let students ask up to 5 yes/no questions to guess it.
3. After guessing (or not), ask:
   - *"What pattern did you notice about the questions we asked?"*
   - *"Did your questions narrow things down? How?"*

**Bridge to lesson:** "That pattern — asking questions in order to narrow down to an answer — is exactly how decision trees work. And it's one of the oldest, most important ideas in AI."

---

### 📖 Direct Instruction (10 min)

**Draw a simple decision tree on the board** as you explain:

```
Is it alive?
  ├── YES → Does it have wings?
  │           ├── YES → It's a bird! 🐦
  │           └── NO  → It's a mammal! 🐕
  └── NO  → Is it made of metal?
              ├── YES → It's a robot! 🤖
              └── NO  → It's a rock! 🪨
```

**Key points to hit:**

1. **Structure:** Every decision tree starts at the top (the "root") with one question. Each answer leads to another question or a final answer (a "leaf").

2. **If-then logic:** Each node is basically an `if/else` statement.
   - *"If the answer is yes, go left. If no, go right."*

3. **Classification:** Decision trees are used to **classify** — to put things into categories. The tree doesn't just guess; it follows rules.

4. **Real AI use:** Decision trees are used in spam filters, medical diagnosis tools, loan approval systems, and recommendation engines.

---

### 🌉 Through-Line Bridge (3 min)

> *"Here's something wild: your AI agent — the one you're building in this course — uses decision tree logic every time it picks a skill."*

Draw on the board or project:

```
User sends a message
        |
Does it ask about weather?
  ├── YES → Use the weather skill 🌤️
  └── NO  → Does it ask for a joke?
              ├── YES → Use the joke skill 😄
              └── NO  → Use the general conversation skill 💬
```

> *"This is called **intent routing** — figuring out what the user wants and sending it to the right tool. In the lab this week, you're going to set up exactly this kind of decision logic for your own agent. You'll write the rules. You'll decide the branches. That's YOU building AI."*

**Ask students:** *"What other skills might your agent need? What questions would it ask to pick the right one?"* (Quick 2-minute pair-share.)

---

### ✂️ Unplugged Activity: Build-a-Tree (15 min)

**Hand out (or project) `build-a-tree-activity.md`.**

Students work in pairs to fill in the blank decision tree for classifying school supplies.

- The tree has **4 decision nodes** and **3 outcome leaves**.
- Students must write yes/no questions that correctly route supplies to the right category.

**Debrief (3 min):**
- *"Did everyone's trees look the same? Why or why not?"*
- *"Could there be more than one correct tree?"*
- *"What made a good question? What made a bad one?"*

---

### 💻 Optional: Interactive Demo + Mini-Lab (10 min)

**Option A — Interactive visualization:**

Visit [ml-playground.com](https://ml-playground.com) or [teachablemachine.withgoogle.com](https://teachablemachine.withgoogle.com) to show a live decision tree being built from data.

- Show how a computer can learn which questions to ask.
- *"The computer is building a tree — just like you did — but automatically, from examples."*

**Option B — Scratch Mini-Lab:**

Students open Scratch and code a simple decision tree:
```
when green flag clicked
ask "Does it have wings?" and wait
if answer = "yes" then
  say "It might be a bird!" for 2 seconds
else
  ask "Does it have four legs?" and wait
  if answer = "yes" then
    say "It might be a dog!" for 2 seconds
  else
    say "I'm not sure!" for 2 seconds
  end
end
```

---

### 🎯 Closure (5 min)

**Exit ticket** (students write on an index card or sticky note):

1. In your own words, what is a decision tree?
2. How does your AI agent use decision tree logic?
3. One question you still have.

Collect and review before next class.

---

## Differentiation

| Strategy | For whom |
|---|---|
| Pre-filled partial tree | Students who need scaffolding |
| Design challenge (`decision-tree-design-challenge.md`) | Early finishers / advanced students |
| Scratch mini-lab | Students who are comfortable with coding |
| Pair work | Students who benefit from collaboration |

---

## Assessment

| Evidence | How to use it |
|---|---|
| Build-a-Tree worksheet | Formative — check for correct logic and branching |
| Exit ticket | Formative — gauge vocabulary and through-line understanding |
| Design challenge (optional) | Extension evidence of deeper learning |

---

## Teacher Notes

- The key misconception to address: students often think AI is magic or random. Decision trees show that AI follows **rules** — rules that humans design (or that machines learn from examples).
- The through-line connection to their agent is critical — keep coming back to it. Every time they write `if/else` logic in their agent, they're doing what a decision tree does.
- If time is tight, skip the Scratch lab and use the extra time to debrief the Build-a-Tree activity more thoroughly.

---

## Extensions & Homework

- **Design Challenge:** Complete `decision-tree-design-challenge.md` — design a pet advisor tree.
- **Research:** Find one real-world example of a decision tree being used (medical, finance, sports analytics).
- **Reflection:** Write 3–5 sentences about how your agent's skill routing is like a decision tree.

---

*Part of the OpenClaw AI Curriculum — Module 3: How AI Thinks*
