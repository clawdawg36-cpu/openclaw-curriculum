# Lesson 3.5 — Limits of Reasoning AI + Ethics Bridge

**Module:** 3 — Reasoning AI (Decision Trees & Rule-Based Systems)
**Duration:** 1 period (~45 minutes)
**Companion to:** Lesson 2.6 (Bias in Perception AI)
**Plants the seed for:** Module 6 (AI Ethics & Guardrails)

---

## Learning Objectives

By the end of this lesson, students will be able to:
1. Identify at least three ways reasoning AI systems fail (hallucination, bias, black-box opacity)
2. Explain the concepts of "garbage in/garbage out," proxy variables, and feedback loops
3. Audit their own skill for at least two potential failure modes
4. Articulate who might bear responsibility when a reasoning AI causes harm

---

## Materials Needed

- Student devices (to reference the skill they built in Lessons 3.1–3.4)
- `case-studies.md` — printed or shared digitally
- `reasoning-failure-audit.md` — one per student
- `exit-ticket.md` — one per student (or Google Form equivalent)
- Whiteboard / projector for concept mapping

---

## Lesson Flow

### 🔥 Warm-Up: "Has AI Ever Lied to You?" (5 min)

**Prompt on board:**
> "Has AI ever confidently told you something wrong? What happened? Did you believe it at first?"

Ask students to share a brief story with the person next to them (1 min pair share), then take 3–4 examples from the class.

**Facilitator moves:**
- Validate all examples — wrong directions, fake citations, made-up historical "facts" are all fair game
- Write key words on the board as they come up: *confident*, *wrong*, *trusted it*, *didn't check*
- Bridge: "Today we're going to zoom out from your skill and ask: what could go wrong when AI makes decisions about *people*?"

> 🔑 **Key term to introduce:** *Hallucination* — when AI generates fluent, confident-sounding text that is factually wrong.

---

### 📚 Case Studies: When Reasoning AI Hurts People (15 min)

Distribute or display `case-studies.md`. Students read in groups of 3; each group gets one case study to become "experts" on.

**Three cases:**
1. **COMPAS** — predicts recidivism risk; used in sentencing
2. **Automated Hiring Screeners** — Amazon's resume AI
3. **Credit Scoring Black Boxes** — algorithmic denial with no explanation

**Group task (8 min):**
- What did the AI decide?
- Who was harmed?
- What data or rule caused the problem?
- Who should have been responsible?

**Jigsaw share-out (5 min):** Each group gives a 60-second summary to the class.

**Teacher synthesis:** Draw a simple 3-column table on the board:

| Case | Failure Type | Who Was Harmed |
|------|-------------|----------------|
| COMPAS | Biased training data | Black defendants |
| Hiring Screener | Proxy variable (gender) | Women applicants |
| Credit Scoring | Black box / no recourse | Low-income borrowers |

---

### 🧠 Why Reasoning AI Fails (10 min)

**Mini-lecture + concept map (projected or on board)**

Three root causes — teach each with a concrete example:

#### 1. Garbage In / Garbage Out (GIGO)
> The AI is only as fair as the data it learned from.

- If you train a hiring AI on 10 years of hiring decisions, and those decisions were biased against women… the AI learns to be biased against women.
- The AI didn't *decide* to be biased — it faithfully learned from history.

**Analogy:** "If you learn to cook from someone who always over-salts food, your cooking will be over-salted."

#### 2. Proxy Variables
> When the AI uses a neutral-looking variable that secretly correlates with a protected trait.

- ZIP code ≈ race (due to historical redlining)
- Names ≈ gender, ethnicity
- Grammar style ≈ socioeconomic background

The AI isn't explicitly using race — it's using ZIP code. But the effect is the same.

**Discussion question:** "Can you think of a variable in YOUR skill that might accidentally act as a proxy for something you didn't intend?"

#### 3. Feedback Loops
> When the AI's decisions shape future training data, amplifying the original bias.

- AI predicts high crime in neighborhood → police patrol there more → more arrests there → AI trains on arrest data → predicts high crime again
- Loop locks in the original error and makes it self-reinforcing

**Check for understanding:** Call on 2–3 students to explain one concept back in their own words.

---

### 🔍 Your Skill Under the Microscope (10 min)

**Transition statement:**
> "You just built a skill that gives your agent new reasoning ability. That's powerful. Now let's ask: what could go wrong?"

Hand out `reasoning-failure-audit.md`. Students work individually (5 min) to apply 5 audit tests to the skill they built in this module.

The 5 tests:
1. **Data Source Check** — Where did the rules/data in your skill come from? Could it be biased?
2. **Proxy Variable Scan** — Does your skill use any variable that might be a stand-in for something sensitive?
3. **Who Gets Helped** — Who benefits from your skill? Who might not?
4. **Confident Wrongness** — What happens when your skill encounters input it wasn't designed for? Does it fail gracefully or confidently output something wrong?
5. **Accountability Gap** — If your skill made a harmful recommendation, who would be responsible: you, the AI, or whoever acted on it?

**Pair debrief (3 min):** Share your most interesting/surprising finding with a partner.

**Class share-out (2 min):** "What's one thing you discovered about your skill that you hadn't thought about before?"

---

### 🎟️ Exit Ticket + Bridge to Module 6 (5 min)

Distribute `exit-ticket.md` (or share Google Form link).

Students complete independently (3 min), then teacher reads bridge statement:

> "In Module 6, we're going to build guardrails — ways to make AI systems safer, more transparent, and more accountable. Everything you found today in your audit? That's exactly what you'll be fixing. Today you found the cracks. Module 6 is where you learn to patch them."

Collect exit tickets. Review before next class to identify misconceptions and surface student concerns for the teacher guide.

---

## Standards Alignment

| Standard | How Addressed |
|----------|--------------|
| CSTA 3A-IC-24 | Evaluate the beneficial and harmful effects of computing innovations |
| CSTA 3A-IC-25 | Test and refine computational artifacts to reduce bias and inequity |
| CSTA 3B-IC-27 | Evaluate computational artifacts for their beneficial and harmful effects |
| AI4K12 Big Idea 5 | Societal impacts of AI — bias, fairness, transparency, accountability |

---

## Assessment

- **Formative:** Exit ticket (3-question written reflection)
- **Formative:** Reasoning failure audit (self-assessment of their own skill)
- **Summative (optional):** Add a "Limitations & Risks" section to their skill documentation

---

## Pacing Notes

- This lesson runs close to 45 minutes. If time is tight, cut the individual audit to 3 min and skip the pair debrief.
- If students are highly engaged in the case study jigsaw, let it run an extra 3–4 min and compress the mini-lecture.
- The warm-up usually runs long — be ready to cut it at 6 min.

---

## See Also

- `case-studies.md` — Full case study descriptions with discussion questions
- `reasoning-failure-audit.md` — Student self-audit tool
- `exit-ticket.md` — 3-question exit assessment
- `teacher-guide.md` — Facilitation notes, sensitive topic handling, deeper resources

---

## 📓 Module 3 Close — Agent Design Journal

> *This closing ritual happens during the Module Wrap-Up session (Day 15 or the final period), not immediately after Lesson 3.5. Include it as the final structured activity before transitioning to Module 4.*

**Tell students:**
> *"You designed something that didn't exist before — a skill that gives your agent expertise in a domain you chose. Before we move to Module 4, let's document what we built, what we discovered, and what we'd improve."*

**Step 1 — Add the M3 Row to the Module Notes Table (5 min)**

Students open `AGENT_JOURNEY.md` and complete the M3 row:

| Module | What I built | What surprised me | What I'd change |
|--------|-------------|-------------------|-----------------|
| M3 | | | |

**Prompts:**

1. **What I built:** What domain did you choose for your agent's expertise? Describe the knowledge base you curated and the reasoning logic you wrote. Be specific — what can your agent now answer that a generic AI couldn't?
2. **What surprised me:** Where did your skill succeed unexpectedly? Where did it fail? What did today's Reasoning Failure Audit reveal about your own skill that you hadn't noticed before?
3. **What I would change:** Knowing what you now know about how reasoning AI fails — GIGO, proxy variables, feedback loops — what would you design differently? What did you include that you'd cut, or leave out that you'd add?

**Step 2 — Update the Agent Status Block (2 min)**

Students find and update the **Agent Status After M3** block:

```
🤖 [YOUR AGENT NAME]
   Can: Have a conversation, see images, identify audio, use custom knowledge
   Can't yet: Learn from new data, speak out loud, or behave ethically by design
```

**Step 3 — Check the box (1 min)**

```
[x] Complete
```

**Teacher note:** The "What I would change" prompt is particularly powerful after Lesson 3.5's ethics content — students have just audited their own skill for failure modes, so they have concrete things to reflect on. Encourage them to connect the two. These journals are a living record of their growth as AI designers, not just builders.
