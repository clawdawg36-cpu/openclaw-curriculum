# 📋 Judging Rubric — Teachable Machine Challenge

**Module 2 | Judge's Reference Sheet**

---

## Overview

Judges score each team across **4 criteria** for a maximum of **100 points**.  
Use the live demo protocol described in `challenge-guide.md` for accuracy testing.

---

## Criterion 1: Accuracy (40 points)

*Does it actually work? Can it correctly classify new inputs it hasn't seen before?*

The judge tests each classifier with **9 new inputs** (3 per class), recording correct vs. incorrect.

| Score | Description |
|-------|-------------|
| **36–40** | Excellent — 8 or 9 correct (89–100%). Model generalizes well. |
| **28–35** | Good — 6–7 correct (67–78%). Mostly reliable with minor misclassifications. |
| **18–27** | Developing — 4–5 correct (44–56%). Works for some classes but not others. |
| **8–17** | Struggling — 2–3 correct (22–33%). Significant errors or overfitting. |
| **0–7** | Not working — 0–1 correct. Model fails to generalize at all. |

**Accuracy Score = (Correct ÷ 9) × 40**  
*(Round to nearest whole point)*

### What Judges Look For
- Does the model correctly classify inputs that weren't part of training?
- Does it perform consistently across all 3 classes (not just 1 or 2)?
- Does it fail gracefully — low confidence on ambiguous inputs rather than a wrong confident answer?

---

## Criterion 2: Creativity (30 points)

*Is this idea interesting, original, or surprising? Would you have thought of it?*

| Score | Description |
|-------|-------------|
| **27–30** | Outstanding — Genuinely surprising or novel. Makes you think "I never would have thought of that." |
| **21–26** | Strong — Clearly original, not a default choice (no cats/dogs/simple colors). |
| **13–20** | Adequate — Some originality, but concept is fairly expected or straightforward. |
| **6–12** | Low — Common or obvious categories (e.g. thumb up / thumb down / nothing). |
| **0–5** | Very low — Cliché or near-identical to examples shown in class. |

### What Judges Look For
- **Novelty**: Is this something most teams wouldn't think of?
- **Relevance**: Do the 3 classes relate to something real or interesting (a problem, a context, a joke)?
- **Specificity**: Specific categories ("espresso / pour-over / instant coffee") beat vague ones ("type A / type B / type C").
- **Surprise factor**: Does the demo moment make the room react?

### Creativity Bonus (+2 points, max 30)
Award 2 bonus points if the team demonstrates their classifier could be used for something genuinely useful *or* genuinely hilarious.

---

## Criterion 3: Presentation (20 points)

*Did the team communicate clearly, confidently, and within the time limit?*

| Score | Description |
|-------|-------------|
| **18–20** | Excellent — Clear, engaging, hit all 5 beats, demo was smooth, stayed on time. |
| **14–17** | Good — Mostly clear, demo worked, minor stumbles or small overrun (<30 sec). |
| **9–13** | Adequate — Covered basics but demo had hiccups or explanation was unclear. |
| **4–8** | Developing — Disorganized, demo didn't work well, significantly over/under time. |
| **0–3** | Incomplete — Skipped major sections, demo failed entirely, or team was unprepared. |

### Presentation Beats (from challenge-guide.md)
- [ ] Stated what the 3 classes are
- [ ] Explained why they chose this concept
- [ ] Ran a live demo with real-time predictions
- [ ] Shared one surprising moment from training
- [ ] Gave agent usefulness reflection

---

## Criterion 4: Agent Usefulness (10 points)

*Did the team thoughtfully consider whether their classifier could be used as an AI agent skill?*

This criterion rewards **quality of reflection**, not whether the answer is "yes."  
A well-reasoned "no, here's why" is worth full marks.

| Score | Description |
|-------|-------------|
| **9–10** | Insightful — Clear reasoning about *why* it would or wouldn't make a good agent skill. Connects to real-world use (triggers, actions, automation). |
| **6–8** | Solid — Shows understanding of what an agent skill does. Makes a reasonable case with some specifics. |
| **3–5** | Surface-level — Yes/no answer with minimal reasoning. Generic response ("it could help with things"). |
| **0–2** | Missing — Skipped this section, or answer shows no understanding of what an agent skill is. |

### Prompts for Judges to Consider
- Did they think about *when* an agent would use this classifier?
- Did they consider *what action* the agent would take based on the classification?
- Did they acknowledge real-world limitations (lighting, angle, variety)?

---

## Scoring Sheet

**Team Name:** _______________________  
**Classifier Concept:** _______________________

| Criterion | Max | Score | Notes |
|-----------|-----|-------|-------|
| Accuracy (live demo) | 40 | | |
| Creativity | 30 | | |
| Presentation | 20 | | |
| Agent Usefulness | 10 | | |
| **TOTAL** | **100** | | |

**Award Categories Nomination:**
- [ ] Grand Champion (highest overall)
- [ ] Most Accurate
- [ ] Most Creative
- [ ] Best Agent Skill

**Judge's top comment:**

_______________________

---

## Tie-Breaking Protocol

If two teams are within 2 points of each other:
1. Head judge casts deciding vote on **creativity**
2. If still tied: audience vote (class raises hands)
3. If still tied: co-champion status (both win that category)

---

*Judges: complete one sheet per team. Tally scores after all presentations.*
