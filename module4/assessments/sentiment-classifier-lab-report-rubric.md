# Sentiment Classifier Lab Report Rubric
## Module 4 — Give Your Agent the Ability to Learn

> **What is the Sentiment Classifier Lab?** Students collect or curate a labeled dataset of text examples (positive/negative/neutral), train a text sentiment classifier, evaluate its accuracy, and integrate it into their OpenClaw agent. This rubric assesses their written lab report documenting that process.

**Student Name:** _________________________ **Period:** _____ **Date:** ____________

**Scorer:** ☐ Self  ☐ Peer  ☐ Teacher

---

## Scoring Guide

| Score | What it means |
|:---:|---|
| **4 — Exceeds** | Work goes beyond expectations; demonstrates deep understanding |
| **3 — Meets** | Work fully satisfies the criteria; solid, complete, correct |
| **2 — Approaching** | Work is partially complete or has notable gaps/errors |
| **1 — Beginning** | Work is present but shows significant misunderstanding or is largely incomplete |

---

## Dimension 1: Dataset Description

*Does the student clearly describe the data they used to train their model?*

| Score | Descriptor |
|:---:|---|
| **4** | Report clearly describes the dataset: total number of examples, class distribution (how many positive/negative/neutral), where the data came from, and at least one specific potential bias or gap in the data. Student notes how they addressed (or couldn't address) that gap. |
| **3** | Report describes the dataset with total count and class labels; notes at least one source or collection method; mentions data quality or balance in general terms. |
| **2** | Report mentions a dataset exists but is vague about size, source, or class balance; no discussion of potential bias or data quality. |
| **1** | Dataset is barely mentioned or described incorrectly; no evidence the student understands what their training data contained. |

**Score:** _____ / 4

**Teacher notes:**

> ___________________________________________________________________________
>
> ___________________________________________________________________________

---

## Dimension 2: Performance Analysis

*Does the student accurately interpret their model's results?*

| Score | Descriptor |
|:---:|---|
| **4** | Report includes specific accuracy numbers (training accuracy AND at least one test/validation result); student correctly interprets what the numbers mean; identifies at least two specific examples where the model was wrong and explains *why* they think it made those errors; discusses whether accuracy alone is a good measure for this task. |
| **3** | Report includes accuracy numbers; student interprets results accurately; identifies at least one specific wrong prediction and offers a plausible explanation; accuracy is used as the primary metric without critically questioning it. |
| **2** | Report includes some numbers but student interpretation is incomplete or partially incorrect (e.g., confuses training accuracy with real-world performance); wrong predictions are mentioned but not analyzed. |
| **1** | Numbers are missing or copied without interpretation; student cannot explain what the accuracy means or where the model failed. |

**Score:** _____ / 4

**Teacher notes:**

> ___________________________________________________________________________
>
> ___________________________________________________________________________

---

## Dimension 3: Improvement Ideas

*Does the student propose thoughtful, specific ideas for making their model better?*

| Score | Descriptor |
|:---:|---|
| **4** | Student proposes at least **three** concrete improvement ideas; each idea is tied to a specific observed weakness (e.g., "The model confused sarcasm with positive sentiment, so I would add more sarcastic training examples"); ideas show understanding of the training loop (data quality, class balance, training examples, feature engineering). At least one idea addresses data diversity or bias. |
| **3** | Student proposes at least **two** improvement ideas; ideas are specific and tied to observed performance; at least one addresses data quality or quantity. |
| **2** | Student proposes one or two improvement ideas but they are generic ("add more data," "try again") without connecting them to specific failure modes. |
| **1** | No improvement ideas, or ideas are not feasible/coherent (e.g., "make the computer smarter"). |

**Score:** _____ / 4

**Teacher notes:**

> ___________________________________________________________________________
>
> ___________________________________________________________________________

---

## Dimension 4: Integration Documentation

*Does the student explain how their trained model connects to their OpenClaw agent?*

| Score | Descriptor |
|:---:|---|
| **4** | Report explains how the model was exported and integrated as an OpenClaw skill; includes a specific example of the agent using the classifier (input → output); describes at least one edge case or failure mode the student discovered during testing; documents the skill trigger/intent. |
| **3** | Report explains the integration process in sufficient detail for a classmate to understand how the skill works; includes at least one example of the agent using the classifier correctly. |
| **2** | Integration is mentioned but poorly documented; it's unclear how the model connects to the agent or what the skill actually does when triggered. |
| **1** | Integration is not documented; report reads as if the model was trained but never used. |

**Score:** _____ / 4

**Teacher notes:**

> ___________________________________________________________________________
>
> ___________________________________________________________________________

---

## Dimension 5: Scientific Communication

*Is the lab report written clearly and in an appropriate format?*

| Score | Descriptor |
|:---:|---|
| **4** | Report uses clear section headers (Dataset, Training, Results, Analysis, Improvement Ideas, Integration); writing is concise and precise; uses at least 4 Module 4 vocabulary terms correctly; tables or screenshots included where helpful; a classmate with no context could follow the report. |
| **3** | Report is organized with recognizable sections; writing is mostly clear; uses at least 2 Module 4 vocabulary terms correctly; generally readable. |
| **2** | Report is partially organized; some sections are missing or merged; vocabulary use is minimal or imprecise; some parts are confusing or unclear. |
| **1** | Report lacks structure; writing is very difficult to follow; vocabulary is absent or misused. |

**Score:** _____ / 4

**Teacher notes:**

> ___________________________________________________________________________
>
> ___________________________________________________________________________

---

## Score Summary

| Dimension | Score |
|---|:---:|
| 1. Dataset Description | /4 |
| 2. Performance Analysis | /4 |
| 3. Improvement Ideas | /4 |
| 4. Integration Documentation | /4 |
| 5. Scientific Communication | /4 |
| **TOTAL** | **/20** |

**Grade conversion (optional):**

| Total | Letter |
|:---:|:---:|
| 18–20 | A |
| 14–17 | B |
| 10–13 | C |
| 6–9 | D |
| 0–5 | Not yet |

---

## Overall Feedback

**Strengths:**

> ___________________________________________________________________________
>
> ___________________________________________________________________________

**One thing to improve:**

> ___________________________________________________________________________
>
> ___________________________________________________________________________

**Teacher signature:** _________________________ **Date:** _____________

---

## 📋 Lab Report Required Sections (Student Checklist)

Before submitting, confirm your report includes all of the following:

- [ ] **Title** with your name, date, and what you trained your model to classify
- [ ] **Dataset** — how many examples, how many classes, where the data came from
- [ ] **Training** — what tool you used (Teachable Machine, Python, etc.) and how long it took
- [ ] **Results** — your accuracy numbers (training + test/validation)
- [ ] **Analysis** — at least 2 specific examples of mistakes your model made
- [ ] **Improvement Ideas** — at least 3 specific suggestions with explanations
- [ ] **Integration** — how your model is now a skill in your OpenClaw agent
- [ ] **Reflection** — one sentence about what surprised you most about the training process
