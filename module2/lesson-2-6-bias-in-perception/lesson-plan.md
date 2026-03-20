# Lesson 2.6 — Bias in Perception AI (Ethics Preview)

**Module:** 2 — Perception & Sensing  
**Duration:** 1 period (45 minutes)  
**Prerequisites:** Lesson 2.4 (students have connected a Hugging Face vision/speech model to their agent)  
**Through-line:** This lesson plants the ethics seed that blooms fully in Module 6. Students examine bias in the very perception models they just built with.

---

## Learning Objectives

By the end of this lesson, students will be able to:
1. Explain what algorithmic bias is and how it shows up in perception AI systems
2. Identify at least two real-world cases where perception AI failed specific groups of people
3. Describe why biased training data leads to biased models
4. Propose at least one concrete way to check their own agent for bias

---

## Materials

- Case studies handout (or: `case-studies.md` projected / shared digitally)
- Bias audit worksheet (`bias-audit-preview.md`)
- Exit ticket (`exit-ticket.md`)
- Optional: video clips (see case studies for links)
- Sticky notes or digital equivalent for warm-up
- Access to students' own agents (for Section 4)

---

## Lesson Flow

### ① Warm-Up: "Has technology ever failed you?" (5 min)

**Format:** Think → pair-share → brief whole-class

**Prompt (written on board/projected):**
> "Think of a time when technology didn't work the way you expected — maybe it didn't understand you, got something wrong about you, or just felt like it wasn't made for you. What happened?"

**Facilitation:**
- Give students 60 seconds to think or jot a note
- 90 seconds: share with a partner
- Take 3–4 examples from the class — don't force anyone to share
- Validate all answers: autocorrect fails, voice assistants mishearing names, map apps assuming car travel — these are all tech failures

**Teacher note:** Some students may share experiences that are directly tied to race, language, or disability. Receive those with care. See `teacher-guide.md` for facilitation support.

**Bridge:** "What you just described? A lot of those failures aren't random bugs. They're systematic. Today we're going to look at *why* AI systems fail certain people more than others — and then we're going to look at *your* agent."

---

### ② Case Studies (15 min)

**Format:** Small groups (3–4 students), jigsaw or parallel study

**Setup options:**
- **Option A (Jigsaw):** Assign each group one case study. Groups read, discuss, then share key points with the class.
- **Option B (Parallel):** All groups work through all three case studies simultaneously, then debrief together.

**The three case studies** (full detail in `case-studies.md`):

1. **Facial Recognition & Race** — Studies showing facial recognition systems have significantly higher error rates for darker-skinned women vs. lighter-skinned men. Real consequences: wrongful identification by law enforcement.

2. **Speech Recognition & Accents** — Major voice assistants perform notably worse for speakers with non-American accents, non-standard dialects, and certain first-language backgrounds.

3. **Image Classification & Western Data** — Models trained heavily on Western/English-language image datasets underperform on objects, foods, and scenes common in non-Western contexts.

**Each group discusses:**
- What happened? Who was harmed?
- Why do you think this happened?
- What would a "fair" version of this system look like?

**Debrief (5 min of the 15):** One spokesperson per group shares the biggest insight. Teacher captures themes on the board.

---

### ③ Why Does This Happen? (10 min)

**Format:** Direct instruction with discussion breaks

**Core concepts to cover:**

**1. Training data reflects who collected it**
> "A model learns from examples. If all the examples of 'faces' come from stock photo sites that skew toward lighter-skinned people in Western countries, the model gets really good at those faces — and worse at others."

Discussion break: *"Who do you think is taking the photos that end up in AI training datasets? Who's taking the selfies? Who's got access to high-quality cameras?"*

**2. Who builds the systems — and who tests them**
> "When the people building and testing a system all look similar, sound similar, and live similar lives, it's easy to miss failures that affect people who are different. Not because they're bad people — because it's hard to notice what doesn't affect you."

Discussion break: *"If you were building a speech recognition system and it worked perfectly for you, how would you even know it was failing for your classmate from Vietnam?"*

**3. The feedback loop**
> "Biased systems get deployed. They fail certain people. Those people may stop using them. The feedback data that comes back is now even more skewed. The model 'learns' even less from underrepresented users."

**Key takeaway to land:**
> "Bias in AI isn't usually malicious. It's structural. It happens when people don't ask the question: 'Who might this system fail? Have we tested it on them?'"

---

### ④ Your Agent and Bias (10 min)

**Format:** Structured reflection + hands-on audit attempt

**Opening prompt (projected):**
> "In Lesson 2.4, you connected a Hugging Face model to your agent. That model was trained on a dataset you didn't choose. You didn't read the data card. You probably didn't look at who built it or what it was tested on."
>
> **That's normal. And it's also a problem.**

**Walk through the 5-test bias audit** (`bias-audit-preview.md`):
- Brief each test (30 sec each)
- Students attempt 1–2 tests on their own agent with remaining time
- Encourage: "Even if you can't run the test right now, just *reading* the audit changes how you think about the model you're using"

**Discussion:**
- "Did anything surprise you?"
- "What would you do differently if you were starting over?"

**Bridge to Module 6:**
> "In Module 6, we're going to go deep on AI ethics and safety. You'll add actual guardrails to your agent. Today is about understanding *why* those guardrails exist — not as annoying restrictions, but as the difference between a system that works for everyone and one that works for some people at the expense of others."

---

### ⑤ Exit Ticket + Bridge (5 min)

Use `exit-ticket.md`. Students complete individually — this is not graded but collected.

**Three questions:**
1. Name one real-world case where perception AI failed a group of people. What caused it?
2. What is one question you'd ask before trusting an AI model with your users' data?
3. Complete this sentence: "Before Module 6, I want to understand more about ___."

---

## Assessment

- **Formative:** Class discussion quality, case study group work, audit attempt
- **Exit ticket:** Collected for teacher insight into student understanding and questions
- **No summative assessment this lesson** — this is a seed-planting lesson; the harvest is Module 6

---

## Extensions / Homework (Optional)

- Read: MIT Media Lab's "Gender Shades" project summary (available free online)
- Try: Find the model card for the Hugging Face model you connected. What does it say about training data? Limitations?
- Reflect: Write a paragraph — "Who is my agent for? Who might it fail?"

---

## Connections

| To... | How... |
|-------|--------|
| Lesson 2.4 | Students revisit the Hugging Face model they connected; now with a critical eye |
| Module 6 | Direct seed — ethics guardrails, bias auditing, responsible deployment |
| CS Principles | Abstractions, social impacts of computing |
| Real world | Facial recognition in policing, hiring algorithms, content moderation |

---

## 📓 Module 2 Close — Agent Design Journal

> *This closing ritual happens during the Module Wrap-Up session (Day 15), not immediately after Lesson 2.6. Include it as the final structured activity before transitioning to Module 3.*

**Tell students:**
> *"You've given your agent the ability to see and hear. Before we move to Module 3, let's document what we built — and what we learned about its limits."*

**Step 1 — Add the M2 Row to the Module Notes Table (5 min)**

Students open `AGENT_JOURNEY.md` and complete the M2 row of the Module Notes table using these prompts:

| Module | What I built | What surprised me | What I'd change |
|--------|-------------|-------------------|-----------------|
| M2 | | | |

**Prompts:**

1. **What I built:** What Hugging Face model did you connect to your agent? Describe what it can now see or hear. What did you name the skill, and how does it work?
2. **What surprised me:** Where did the perception model succeed unexpectedly? Where did it fail? What did the bias case studies in Lesson 2.6 make you think about your own agent's model?
3. **What I would change:** Knowing what you know now about bias and training data, what would you do differently? Would you choose a different model? Test it differently before deploying?

**Step 2 — Update the Agent Status Block (2 min)**

Students find and update the **Agent Status After M2** block in `AGENT_JOURNEY.md`:

```
🤖 [YOUR AGENT NAME]
   Can: Have a conversation, describe images, identify audio
   Can't yet: Know custom things, learn, speak out loud, or behave ethically by design
```

**Step 3 — Check the box (1 min)**

```
[x] Complete
```

**Teacher note:** Encourage students to be honest about failures in their journal entries. The bias discussion in Lesson 2.6 surfaces uncomfortable truths about the models students just built with — the journal is a safe place to process that honestly. These reflections will be powerful when students revisit them at the AI Expo.
