# Module 4 Portfolio Prompt
## Artifact: Sentiment Classifier Lab Report + Ethics Essay

> **Portfolio Section:** Module 4 — Give Your Agent the Ability to Learn
>
> **Time to complete:** ~45–60 minutes total (may be spread across 2–3 class sessions or done partially at home)
>
> **Format:** 2-part submission — one lab report artifact + one short ethics essay

---

## What You're Submitting

Your Module 4 portfolio entry has two pieces:

---

### Part A: Sentiment Classifier Lab Report

Include your **completed lab report** from the Sentiment Classifier Lab.

Your lab report must include all of the following sections:

- [ ] **Title** — What did you train your model to classify? What was your dataset?
- [ ] **Dataset** — How many examples? How many classes? Where did the data come from? What gaps or biases might exist?
- [ ] **Training** — What tool did you use? What settings did you choose?
- [ ] **Results** — Your training accuracy AND your test accuracy (on examples your model hadn't seen)
- [ ] **Performance Analysis** — At least 2 specific examples where your model made the wrong prediction, with your explanation of *why*
- [ ] **Improvement Ideas** — At least 3 specific suggestions for making your model more accurate or more fair, each tied to a specific weakness you observed
- [ ] **Integration** — How your trained model now works as a skill inside your OpenClaw agent (what triggers it, what it outputs, one example of it working)

**Format:** Written report (typed or handwritten), 400–600 words recommended. Tables, screenshots, and diagrams are encouraged.

---

### Part B: Short Ethics Essay — "Only Trained on One City"

Write a **short essay (200–350 words)** responding to this prompt:

> *You have trained a sentiment classifier using data collected from one city. Your agent is now being used to classify the mood of social media posts from across the entire country.*
>
> **Is it fair to use this classifier nationwide? What problems might arise? What would need to change to make it more fair?**

Your essay must:
- [ ] **Take a clear position** — don't just say "it depends." Commit to an answer and defend it.
- [ ] **Use reasoning** — explain *why* with at least one ML concept from Module 4 (distribution shift, bias, training data, generalization, overfitting, class imbalance)
- [ ] **Use examples** — reference at least one real-world AI system you studied in class OR invent a specific scenario that makes the abstract concrete
- [ ] **Stay within the word count** — 200–350 words (not counting your name/date/title)

---

## Why These Two Pieces Together?

The lab report and the ethics essay are two sides of the same coin.

The **lab report** asks: *What did my model actually learn? How well does it work? What would I change?*

The **ethics essay** asks: *Who gets hurt when a model like mine is deployed in the wrong context? What responsibility do I have as a builder?*

In the real world, engineers write the lab report. Ethicists write the essay. Good AI practitioners write **both**.

Your agent just gained a new capability. You now know enough to think clearly about both *how well it works* and *whether it should be deployed as-is*. That combination is what we're looking for.

---

## Scoring

Each part is reviewed using its own rubric:

- **Lab Report** → `sentiment-classifier-lab-report-rubric.md` (20 points)
- **Ethics Essay** → `ethics-essay-rubric.md` (16 points)

**Total possible: 36 points**

| Total | Letter |
|:---:|:---:|
| 32–36 | A |
| 26–31 | B |
| 20–25 | C |
| 13–19 | D |
| 0–12 | Not yet |

---

## Example Sentence Starters

**Lab Report (Performance Analysis section):**
- *"One case where my model got the prediction wrong was [example]. It predicted [X], but the correct label was [Y]. I think this happened because…"*
- *"My training accuracy was [X]% but my test accuracy was [Y]%. This gap suggests my model might be…"*

**Lab Report (Improvement Ideas section):**
- *"To improve accuracy on [specific failure], I would [specific change] because…"*
- *"My training data was unbalanced — I had [X] positive examples but only [Y] negative examples. To fix this, I would…"*

**Ethics Essay:**
- *"Using a classifier trained only on [one city's] data nationwide is unfair because…"*
- *"A real-world example of this kind of bias is [system], where…"*
- *"The core problem is [distribution shift / data bias / lack of diversity] — this means that…"*
- *"To make this classifier fairer, a developer would need to…"*

---

## A Note on Honesty

The best lab reports are the honest ones. You don't get more credit for a model that works perfectly — you get more credit for clearly documenting *what went wrong* and *why*, and for proposing thoughtful improvements.

The best ethics essays are also the honest ones. Don't write what you think the teacher wants to hear. Think through the actual consequences. A student who takes a clear position and defends it well — even if the teacher disagrees — will score higher than a student who hedges every sentence.

---

## Submitting Your Entry

Include both Part A and Part B in your portfolio folder or notebook.

Label it: **"Module 4 — Classifier Lab Report + Ethics Essay"**

**Due date:** ___________________________

**Teacher/class:** ___________________________
