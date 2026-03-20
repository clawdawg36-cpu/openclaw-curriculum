# Quiz Guide: Module 4 — ML Concepts

**For:** Instructors and Curriculum Designers  
**Quiz file:** `quiz.md`  
**Answer key:** `quiz-answer-key.json`

---

## Overview

This 8-question quiz assesses student understanding of core machine learning concepts covered in Module 4: the training loop, labeled data, overfitting, class imbalance, data bias, training vs. inference, model weights, and model drift.

### Topics Covered

| Q# | Topic | Format | Difficulty |
|----|-------|--------|------------|
| 1 | The ML training loop (what comes after training?) | Multiple choice | Easy |
| 2 | What labeled data is | Multiple choice | Easy |
| 3 | Overfitting — training vs. validation accuracy | Multiple choice | Medium |
| 4 | Class imbalance and misleading accuracy | Multiple choice | Medium |
| 5 | Data bias in face recognition | Scenario / Multiple choice | Medium |
| 6 | Training vs. inference | True/False | Easy |
| 7 | What a model "learns" — weights / parameters | Multiple choice | Medium |
| 8 | Model drift and when to retrain | Scenario / Multiple choice | Hard |

---

## Passing Recommendation

**Recommended passing score: 6 out of 8 (75%)**

| Score | Interpretation | Recommendation |
|-------|---------------|----------------|
| 8/8 | Excellent — strong conceptual mastery | Ready to advance to Module 5 |
| 6–7/8 | Solid understanding with minor gaps | Review explanations for missed questions |
| 4–5/8 | Partial understanding | Revisit Module 4 lessons, focus on missed topics |
| 3/8 or below | Significant gaps | Retake the full module before progressing |

---

## Administration Notes

### Format and Timing
- **Estimated time:** 12–15 minutes for most students
- **Format:** All questions are multiple choice or true/false, making this suitable for auto-grading on Google Forms, Canvas, Schoology, Kahoot, or similar platforms
- **Point value:** 1 point per question (8 points total)
- **Retakes:** Recommended — this is a formative check, not a high-stakes grade. Allow at least one retake after students review the answer explanations.

### Suggested Delivery
- Assign after students have completed all Module 4 reading/video content
- Encourage students to attempt questions independently before checking the `💡 Show Explanation` toggles
- Consider doing a brief class debrief on questions 4, 5, and 8 — these are the most conceptually nuanced and generate the best discussions

### Auto-Grading Setup
All 8 questions have exactly one correct answer (single-letter: A, B, C, or D for multiple choice; A or B for true/false). When configuring on a platform:
- Use the letters as answer keys exactly as listed in `quiz-answer-key.json`
- Do not shuffle answer choices without updating the answer key
- Short-answer fields are not included in this quiz (all questions are auto-gradeable as-is)

---

## Common Wrong Answers and Why Students Pick Them

### Question 1 — ML Training Loop
**Wrong: B (Deploy immediately)**  
Students often underestimate the evaluation step. They assume "training = done" and jump to deployment. Reinforce that validation is a non-negotiable step between training and production.

---

### Question 2 — Labeled Data
**Wrong: C (Clean/formatted data)**  
Students frequently conflate data cleaning with data labeling. Clarify: *cleaning* means removing errors and formatting consistently; *labeling* means adding the correct answer/category to each example. They are separate processes that often happen in sequence.

---

### Question 3 — Overfitting
**Wrong: D (Model is ready to deploy)**  
This is the most important misconception to catch. Students see 98% accuracy and assume success. Always teach students to look at *both* training and validation scores together. A huge gap is a red flag, even if training accuracy looks impressive. Phrase to reinforce: *"The gap matters more than the number."*

---

### Question 4 — Class Imbalance
**Wrong: A (90% is great!)**  
Extremely common. Students take accuracy at face value. Use a concrete analogy: *"If I always guess 'no rain' in a city that has sun 90% of the time, I'm 90% accurate — but I'm a useless weather forecaster."* Introduce the concept of **precision, recall, and F1 score** as better metrics for imbalanced problems (if the curriculum covers them).

---

### Question 5 — Data Bias
**Wrong: A (Equal performance for all users)**  
Students who haven't been exposed to AI fairness research may default to assuming math = neutrality. This question is a good entry point for a discussion on the documented real-world failures of facial recognition systems (e.g., MIT Media Lab's "Gender Shades" study). Emphasize: *"A model can only learn what it's shown."*

**Wrong: D (Mathematical objectivity)**  
This misconception is subtle and common among more technically-minded students. Math can amplify bias just as effectively as encode it — the inputs determine the outputs.

---

### Question 6 — Training vs. Inference
**Wrong: A (True — both update weights)**  
Students who think AI systems are constantly learning from every interaction get this wrong. Clarify the typical lifecycle: training phase (weights update) → deployment/inference phase (weights frozen). Note: online learning and fine-tuning are real techniques, but they require explicit engineering — it's not the default.

---

### Question 7 — Weights / Parameters
**Wrong: A (The code changes)**  
Students often think "learning" means the program rewrites itself. Clarify: the architecture (code) is static; what changes are the numerical weights inside the model. A good analogy: the structure of a brain doesn't change when you learn something — the *strength of connections* between neurons does.

---

### Question 8 — Model Drift
**Wrong: A (Roll back the software)**  
Students who come from a software engineering background sometimes treat model performance drops like bugs — "just roll back." Help them see the distinction: the model architecture may be fine, but the world it was trained on no longer matches current reality. A rollback does nothing to fix stale training data.

**Wrong: C (Past validation is still valid)**  
Important: validation at launch doesn't guarantee future performance. This is why production ML systems need ongoing monitoring. Introduce the concept of a **model health dashboard** or **drift detection alerts** if curriculum supports it.

---

## Discussion Prompts (Optional Enrichment)

These questions can be used for class discussion, journaling, or extra credit:

1. **On overfitting (Q3):** "Why might a model that memorizes training data seem impressive at first? What's the danger of only checking training accuracy?"

2. **On class imbalance (Q4):** "Can you think of a real-world situation where high overall accuracy would be dangerously misleading? (e.g., medical screening, fraud detection)"

3. **On data bias (Q5):** "If you were building a face recognition system for a global product, how would you make sure your training data was representative? What challenges might you face?"

4. **On model drift (Q8):** "What kinds of real-world changes could cause a model to become less accurate over time? Give two examples from different industries."

---

## Alignment with Learning Objectives

| Learning Objective | Question(s) |
|--------------------|-------------|
| Describe the steps in the ML training loop | Q1 |
| Define labeled data and explain why it is necessary | Q2 |
| Distinguish between overfitting and generalization | Q3 |
| Explain the class imbalance problem and why accuracy can mislead | Q4 |
| Identify how biased training data leads to biased model outputs | Q5 |
| Differentiate between training and inference | Q6 |
| Explain what a model "learns" in terms of weights/parameters | Q7 |
| Describe model drift and identify when retraining is needed | Q8 |

---

## Notes for Localization / Adaptation

- Q5 (face recognition scenario) can be swapped for a different bias scenario (e.g., loan approval, hiring, medical diagnosis) if the original example doesn't resonate with your classroom context
- Q8 (hiring platform scenario) can be adapted to healthcare, retail, or content recommendation contexts
- Difficulty level: appropriate for students ages 14+ with basic familiarity with what machine learning is; no prior math or coding experience required
- Estimated Bloom's Level: Knowledge (Q2), Understanding (Q1, Q3, Q6, Q7), Analysis (Q4), Application (Q5, Q8)
