# Lesson 6.1 — Algorithms as Opinions

**Module:** 6 — AI Ethics, Bias, and Accountability  
**Duration:** 1 period (~50 minutes)  
**Grade Level:** 7–8 (adaptable for 9–12)  
**Prerequisites:** Modules 1–5 (students have a working OpenClaw agent with trained model, skills, and deployed channels)

---

## 🔗 Through-Line Connection

> *"You've built an AI. You've trained it. You've deployed it. Now we have to ask the hardest question of this whole course: what does your AI believe? And is that okay?"*

Students have been building and extending their AI agents throughout this curriculum. Module 6 pivots the lens from **builder** to **auditor**. Lesson 6.1 opens that pivot with a visceral, felt experience: before students can analyze algorithmic bias, they need to *feel* it. The MIT Word Analogies activity delivers that feeling before the analytical framework arrives.

The key insight: algorithms aren't neutral calculators. They encode the opinions, assumptions, and biases of the data they were trained on — and of the people who collected that data. Every algorithmic choice is a choice someone made.

**Bridge to Lesson 6.2:** Once students feel the bias in word embeddings, they're ready to see the same pattern amplified in real-world systems with real-world consequences.

---

## 🎯 Learning Objectives

By the end of this lesson, students will be able to:

1. Explain what a word embedding is using a non-technical analogy.
2. Identify at least two examples of bias encoded in word association patterns.
3. Argue that algorithmic outputs reflect choices made by humans — not objective facts.
4. Ask the question "who made this and what did they assume?" about any AI output.
5. Connect the structure of training data to the patterns an AI learns.

---

## 📋 Materials & Setup

| Item | Notes |
|------|-------|
| Projector / display | For MIT activity display and discussion |
| Word analogy worksheets | Print `word-analogies-worksheet.pdf` (one per student) |
| Sticky notes (2 colors) | For "word sorting" warm-up |
| Whiteboard or chart paper | For capturing "expected" vs. "actual" associations |
| Student journals/notebooks | For reflection prompts |
| Timer | For timed rounds |

**Teacher Prep:**
- Print word analogy worksheets (one per student or one per pair)
- Write the three "analogy templates" on the board before class:
  - `Doctor is to ___ as Nurse is to ___`
  - `Man is to King as Woman is to ___`
  - `CEO is to Man as ___ is to Woman`
- Optional: Bookmark the [Embedding Projector](https://projector.tensorflow.org/) for the live demo portion
- Review the "Handling Sensitive Moments" section before class — this activity sometimes hits close to home for students who've experienced gender or racial bias

---

## ⏱️ Lesson Outline

### Opening: Word Association Warm-Up (5 min)

**No AI, no tech — just instinct:**

Give each student two sticky notes (different colors). Tell them:
- Color 1: Write the first word that comes to mind when you see "DOCTOR"
- Color 2: Write the first word that comes to mind when you see "NURSE"

Collect on the board. Look at the patterns together.

Ask:
- *"Do you notice anything about what word went with which prompt?"*
- *"Where did those associations come from? Did you choose them?"*

**Bridge:** *"What if I told you an AI trained on billions of words does the same thing — but faster, more consistently, and at massive scale? Let's find out what it 'believes.'"*

---

### Segment 1: What Is a Word Embedding? (7 min)

**Concept: Meaning as Location**

Explain that AI language models represent words as numbers — specifically, as points in a high-dimensional space. Words that appear near each other in text end up near each other in this "meaning space."

Draw a simple 2D version on the board:
- "Cold" and "Ice" are close
- "Hot" and "Fire" are close
- "King" and "Queen" are... close but in a specific direction from each other

**The key insight:** The *direction* between words encodes relationships. Relationship = vector math.

Classic example: `King - Man + Woman = Queen`

This is called a **word analogy** and it's not magic — it's the math of training data.

**Ask:** *"If the training data reflects the world as it is — not as it should be — what does that mean for the 'math' the AI learns?"*

---

### Segment 2: MIT Word Analogies Activity (20 min)

**Setup (2 min):**

Distribute worksheets. Explain: students are going to complete word analogies the way *they* think a fair AI should complete them — before they see what AI actually produces.

**Round 1 — Student Predictions (8 min):**

Students complete the analogy pairs on the worksheet using their own judgment. They write what they *expect* a well-trained AI to say. Examples:
- `Man : Doctor :: Woman : ___`
- `White : Criminal :: Black : ___`
- `Brilliant : Man :: Brilliant : ___`
- `Family : Woman :: Career : ___`

**Round 2 — The Reveal (10 min):**

Show or read aloud what word embedding models (trained on historical corpora) actually produce for these analogies. Key results from research:

| Analogy | Expected (Fair) | Actual (Biased) |
|---------|----------------|-----------------|
| Man : Doctor :: Woman : ___ | Doctor | Nurse |
| Father : Doctor :: Mother : ___ | Doctor | Nurse |
| Man : Brilliant :: Woman : ___ | Brilliant | Lovely |
| Man : Successful :: Woman : ___ | Successful | Lovely |

**Discussion prompts (whole class):**
- *"Which one surprised you most? Why?"*
- *"The AI didn't choose these. The training data did. Does that make it better or worse?"*
- *"Who wrote the text that the AI trained on? What does that tell us?"*

---

### Segment 3: Opinions All the Way Down (10 min)

**Direct instruction + discussion:**

Walk through the argument:

1. Someone decided what text to include in the training data
2. That text reflected the world as it was (or as the collectors experienced it)
3. The AI learned patterns from that text
4. Those patterns now look like "objective" outputs

Every step is a human choice:
- What data to collect (inclusion bias)
- What data to clean/filter out (curation bias)
- What to optimize for during training (objective bias)
- How to deploy the model (deployment bias)

**Key phrase to write on board:**
> **"Garbage in, bias out. But the garbage looked clean because it was everywhere."**

Ask students to write in journals:
- *"Name one opinion or assumption that might be hiding in an AI system you use."*

---

### Closing: The Audit Habit (8 min)

**Group discussion → individual reflection:**

Introduce the frame that will carry through Module 6: the **Audit Question**:
> *"Who made this, what did they assume, and who might be harmed by those assumptions?"*

Apply it together to something familiar — Google search suggestions, Netflix recommendations, or a music streaming algorithm.

**Exit ticket:** Students write one paragraph answering:
*"Is your OpenClaw agent biased? What would you need to check to know?"*

(Students keep this. They'll revisit it at the end of Module 6.)

---

## 💬 Discussion Questions

**Warm-up level:**
- What's a word association you have that you didn't choose — it just feels automatic?
- Where do associations come from?

**Core discussion:**
- If an AI says "Man : Doctor :: Woman : Nurse" — is that a fact or an opinion?
- Can you fix algorithmic bias by just changing the math, without changing the data? Why or why not?
- What's the difference between an AI that reflects reality and an AI that shapes reality?

**Extension / advanced:**
- Word embeddings trained on historical text encode historical bias. Is that always bad? (E.g., if you're doing historical analysis.) When might it be useful vs. harmful?
- If you trained a word embedding on only children's books, what biases might you introduce or remove?

---

## 📊 Slide Outline

*(See `slides-outline.md` for full slide notes)*

1. **Title:** Lesson 6.1 — Algorithms as Opinions
2. **Module 6 Overview** — What we're doing for the next 3 weeks
3. **Warm-Up Results** — Student word associations on display
4. **What Is a Word Embedding?** — 2D visualization, "meaning space"
5. **Analogy Math** — King - Man + Woman = Queen diagram
6. **The MIT Activity** — Student prediction worksheet
7. **The Reveal** — Side-by-side table of expected vs. actual
8. **Discussion Slide** — The surprise reaction questions
9. **Opinions All the Way Down** — 4-step pipeline of where bias enters
10. **Key Quote** — "Garbage in, bias out. But the garbage looked clean."
11. **The Audit Question** — Introduce the Module 6 frame
12. **Exit Ticket** — Is your OpenClaw agent biased?

---

## 🎯 Differentiation

### Support Strategies

| Need | Strategy |
|------|----------|
| Vocabulary support | Provide glossary: embedding, vector, analogy, bias, training data |
| Abstract concept grounding | Use physical metaphor: "Your AI's dictionary has addresses instead of pages. Similar meanings live on the same street." |
| ELL students | Allow pair discussion in L1 before sharing; provide sentence frames: "I was surprised that ___ because I expected ___" |
| Students who struggle with abstract math | Skip the vector math — focus on the felt experience and the data source argument |

### Extension Strategies

| Need | Strategy |
|------|----------|
| Advanced learners | Explore the [Embedding Projector](https://projector.tensorflow.org/) — search for "doctor" and "nurse" and visualize their positions |
| Math-curious students | Look up "cosine similarity" and explain how the AI measures "closeness" between words |
| Research extension | Find one peer-reviewed paper on word embedding bias (Bolukbasi et al. 2016 is accessible) and summarize the methodology |
| Fast finishers | Draft a "debiased analogy set" — what would a fair version of the worksheet look like? How would you know if it was actually fair? |

---

## ⚠️ Facilitation Notes

**This activity can hit close to home.** Gender and racial bias in word associations can surface personal experiences for students. Watch for:
- Students who get quiet or seem uncomfortable during the reveal
- Students who get angry (at the AI, at the bias, at the curriculum)
- Students who want to defend the AI ("it's just reflecting reality")

All three are valid responses. Validate without dismissing:
- *"It makes sense that this is frustrating — this is a real problem that affects real people."*
- *"Your anger is pointing at something real."*
- *"Let's actually look at whether 'it just reflects reality' holds up..."*

See Module 3 Teacher Guide Section 9 for detailed facilitation guidance on bias discussions — the same framework applies here.

---

## 📚 References & Further Reading

- Bolukbasi, T., et al. (2016). "Man is to Computer Programmer as Woman is to Homemaker?" — the foundational word embedding bias paper
- MIT Teaching Systems Lab — Word Analogies activity
- [Embedding Projector](https://projector.tensorflow.org/) — Google's open visualization tool
- Caliskan, A., et al. (2017). "Semantics derived automatically from language corpora contain human-like biases."
