# Lesson 3.3 — Pattern Recognition

**Module:** 3 — How AI Thinks  
**Duration:** 1 Period (50 minutes)  
**Grade Level:** Middle School (6–8)  
**Prerequisites:** Lessons 3.1–3.2 (What Is AI?, How AI Learns)

---

## 🔗 Module Through-Line

> **"Pattern recognition is how your agent decides what to say. But what if you could give it patterns nobody else has — custom patterns specific to your skill? That's the lab."**

This lesson is the conceptual bridge of Module 3. Students move from *abstract* AI thinking to *personal* AI thinking — recognizing that the patterns an AI learns define what it can do, and that custom patterns (their own skills, knowledge, expertise) unlock custom agents.

---

## 📍 Curriculum Connections

### ← Looking Back: Module 2 (Perceiving Patterns in Pixels & Sound)
In M2, students saw how AI perceives the world — recognizing edges in images, phonemes in speech, objects in video frames. Those perception tasks are fundamentally **pattern matching**: the model learned what a "cat ear" looks like by seeing millions of examples.

**Bridge prompt for class:** *"In M2, we saw an AI recognize a dog from pixels. What pattern was it matching? Today we'll see the same idea with numbers and language."*

### → Looking Forward: Module 4 (Learning Patterns from Data)
In M4, students will explore how AI *acquires* patterns through training — gradient descent, loss functions, and dataset curation. Today's lesson provides the intuition: *before* you can learn patterns, you need to understand what a pattern is and why recognizing them is powerful (and fragile).

**Bridge prompt for class:** *"By the end of M4, you'll understand how OpenClaw learned ALL its patterns. Today you'll start asking: which patterns did it miss — and how could you add yours?"*

---

## 🎯 Learning Objectives

By the end of this lesson, students will be able to:
1. Identify the rule in a number or visual sequence
2. Explain how AI uses pattern recognition to generate responses
3. Analyze what happens when an AI receives incomplete or incorrect patterns
4. Connect pattern recognition to the concept of custom agent skills

---

## 🗂️ Materials

- [ ] Student devices (one per student or pair)
- [ ] OpenClaw access (teacher demo + optional student access)
- [ ] `pattern-detective-worksheet.md` (printed or digital, one per student)
- [ ] `broken-ai-activity.md` (printed or digital, one per student/group)
- [ ] Projector / display for class demo
- [ ] Whiteboard or chart paper

---

## ⏱️ Lesson Flow

### Warm-Up: The Pattern Game (8 minutes)

**Activity:** Write these sequences on the board one at a time. Ask students to call out the next number and (more importantly) *the rule*:

```
2, 4, 6, 8, ___        → Rule: add 2
1, 3, 9, 27, ___       → Rule: multiply by 3
1, 1, 2, 3, 5, 8, ___  → Rule: add previous two (Fibonacci!)
100, 91, 82, 73, ___   → Rule: subtract 9
```

**Discussion:** "Why is knowing the *rule* more powerful than knowing the next number?"

> **Key insight:** If you know the rule, you can predict ANY future number — not just the next one. AI does the same thing with language, images, and decisions.

---

### Direct Instruction: How AI Uses Patterns (10 minutes)

**Explain the concept:**

AI models (like the one behind OpenClaw) are trained on enormous amounts of text. They don't memorize facts — they learn *patterns*:
- "When someone asks a question starting with 'What is...', the pattern suggests a definition follows"
- "When code has a function definition, a return statement usually comes later"
- "When a sentence says 'The sky is...', 'blue' is far more likely than 'purple'"

**Connect to M2:** Show a brief visual — an image recognition AI identifying a bird. The AI matched pixel patterns to patterns it learned in training. *Same idea, different domain.*

**Key vocabulary:**
| Term | Definition |
|------|-----------|
| Pattern | A rule that describes a sequence or relationship |
| Pattern Recognition | Finding the rule in observed data |
| Generalization | Applying a learned rule to new, unseen cases |
| Hallucination | When AI applies a pattern confidently in the wrong context |

---

### Demo: OpenClaw as Pattern Completer (10 minutes)

**Live demo — teacher drives, students observe and predict:**

Before revealing OpenClaw's answer, ask students to predict what it will say.

**Demo 1 — Number Sequence:**
> Prompt: *"Complete this sequence and explain the rule: 3, 6, 12, 24, ___"*

**Demo 2 — Word Pattern:**
> Prompt: *"What word comes next and why? Apple : Fruit :: Carrot : ___"*

**Demo 3 — Story Pattern:**
> Prompt: *"Finish this sentence pattern: 'Once upon a time... [bad thing happened]... but then... [hero appeared]... and finally...'"*

**Discussion questions:**
- Was OpenClaw's rule the same as yours?
- How confident does it seem? Should it be that confident?
- What would happen if we gave it a misleading pattern?

> **Transition:** "Let's find out — in the Broken AI segment, we're going to deliberately confuse OpenClaw and see what happens."

---

### Activity 1: Pattern Detective Worksheet (10 minutes)

Students work independently or in pairs on `pattern-detective-worksheet.md`.

- Solve each puzzle themselves FIRST (no AI)
- Then check with OpenClaw (or teacher demo)
- Fill in the reflection column: *"Did OpenClaw find the same rule?"*

**Debrief:** Ask 2–3 students to share a puzzle where OpenClaw matched them — and one where it didn't. Why might that happen?

---

### Activity 2: Broken AI Analysis (8 minutes)

Students work in small groups on `broken-ai-activity.md`.

Each scenario presents a "broken" pattern — a sequence that's misleading, incomplete, or self-contradictory. Students:
1. Try to solve the pattern themselves
2. Predict what OpenClaw would do
3. (Optional) Test with OpenClaw
4. Explain *why* the AI still tries to answer even when the pattern is broken

**Key insight to surface:** AI doesn't know when it doesn't know. It was trained to always produce the most statistically likely continuation — it has no "I give up" mode built in. This is a feature and a bug.

---

### Synthesis + Through-Line Bridge (4 minutes)

Return to the through-line:

> *"Pattern recognition is how your agent decides what to say. But what if you could give it patterns nobody else has — custom patterns specific to your skill? That's the lab."*

**Discussion:**
- What patterns does OpenClaw have? (Everything it was trained on)
- What patterns does it NOT have? (Your personal knowledge, your domain expertise, your unique voice)
- What if you could add patterns about your topic — basketball stats, local history, your school's culture — to a custom agent skill?

**Ethics Touchpoint:**
> **Reflection prompt:** *"Are there patterns about people — based on race, gender, or where someone comes from — that an AI should NOT learn, even if those patterns appear in training data?"* Push students to distinguish between patterns that are statistically real and patterns that are ethically harmful to reinforce.

**Tease M4:** "In Module 4, we'll see exactly how AI *learns* patterns from data. And by Module 5, you'll be building skills that teach your agent patterns nobody else has."

---

### Exit Ticket (5 minutes)

Students write (or type) responses to two questions:
1. Describe one pattern from today's lesson where AI and humans agreed — and one where they disagreed. Why do you think they differed?
2. What's one pattern about *your* life or interests that an AI probably doesn't know? (This is a skill opportunity!)

Collect exit tickets — use them to identify students ready to conceptualize custom skills.

---

## 🧠 Differentiation

**For students who need support:**
- Work through Worksheet puzzles 1–5 only
- Focus on: "What is a rule?" and "Can the AI be wrong?"

**For students ready to go deeper:**
- Worksheet bonus: create their own "Broken AI" scenario
- Research: what is a "hallucination" and find a real-world example
- Extension: How would you describe a pattern from YOUR life as a set of examples for AI to learn from?

---

## 📝 Assessment

| Evidence | What It Shows |
|----------|--------------|
| Pattern Detective worksheet | Understanding of sequence rules + ability to compare AI vs. human reasoning |
| Broken AI analysis | Critical thinking about AI limitations and confidence |
| Exit ticket Q1 | Metacognition about AI-human comparison |
| Exit ticket Q2 | Creative connection to custom skills (M4/M5 readiness) |

---

## 🔧 Teacher Notes

- **If OpenClaw is unavailable:** Pre-screenshot demos are fine. The conceptual discussion is more important than live output.
- **If students go off-task with OpenClaw:** Redirect to the worksheet. The demo is a tool, not a toy.
- **Common misconception:** Students often think AI "understands" patterns the way humans do. Emphasize that it's statistical — not magical, not conscious.
- **Common insight to encourage:** Students who notice AI can be confidently wrong are making a sophisticated observation. Validate this.

---

*See also: `teacher-facilitation-guide.md` for detailed facilitation tips and common student questions.*
