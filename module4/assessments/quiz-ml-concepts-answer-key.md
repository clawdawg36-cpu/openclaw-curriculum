# Module 4 Quiz — ML Concepts Answer Key
## Give Your Agent the Ability to Learn

**Answer Key | Teacher Use Only**

> **Student version:** `quiz-ml-concepts/` (separate file/folder)
>
> **Format:** 5 questions | Difficulty ranges from Recall 🟢 to Analysis 🔴
>
> **Scoring:** 10 XP per correct answer = 50 XP max
> Hints cost 1 XP each (deducted from total).
> **Bonus:** +5 XP for 5/5 with no hints used.

---

## Question 1 — The Training Loop
**Difficulty:** Recall 🟢
**Topic:** Understanding the ML training loop

Which sequence correctly describes the machine learning **training loop**?

- A) Predict → Collect Data → Train → Deploy
- B) Collect Data → Label → Train → Evaluate → Iterate
- C) Label → Deploy → Evaluate → Retrain → Collect Data
- D) Train → Collect Data → Label → Iterate

**✅ Correct Answer: B**

**Explanations:**
- **A — Incorrect.** You can't predict before you train. Deployment also comes after evaluation, not as part of the training loop itself.
- **B — Correct.** The training loop is: collect data → label it → train the model → evaluate performance → iterate (repeat with improved data or settings). This is the foundational cycle of supervised machine learning.
- **C — Incorrect.** You cannot deploy before training and evaluating. Deploying early and then evaluating is a costly real-world mistake — not the intended loop.
- **D — Incorrect.** You can't train before you have labeled data. This sequence skips the labeling step entirely.

> 💡 **Hint** *(costs 1 XP)*: Think about what you did in the Teachable Machine lab — in what order did you do things?

---

## Question 2 — Training vs. Real-World Accuracy
**Difficulty:** Application 🟡
**Topic:** Overfitting and the difference between training and test accuracy

A student trains a gesture classifier in Teachable Machine. After training, the model correctly identifies 98 out of 100 training gestures. When the student tests it on new gestures from a classmate, it only gets 60 out of 100 correct. What is the most likely explanation?

- A) The model needs more hardware to run faster
- B) The classmate is moving their hands wrong
- C) The model is overfitting — it memorized the training gestures instead of learning the general pattern
- D) 60% accuracy is actually very good for a gesture classifier

**✅ Correct Answer: C**

**Explanations:**
- **A — Incorrect.** Hardware speed has nothing to do with prediction accuracy. A faster computer running the same model would make the same predictions.
- **B — Incorrect.** If the model truly learned to recognize gestures, it should generalize to slightly different hand movements. Blaming the classmate ignores the real problem.
- **C — Correct.** When training accuracy is very high (98%) but test accuracy is much lower (60%), the model has **overfit** — it learned the specific examples in training data so well that it can't recognize variations it hasn't seen. This is one of the most common problems in ML.
- **D — Incorrect.** 60% might seem OK in isolation, but a gap of 38 percentage points between training and test accuracy is a red flag that should not be dismissed.

> 💡 **Hint** *(costs 1 XP)*: What's the word for when a model memorizes training examples instead of learning the underlying pattern?

---

## Question 3 — Data Bias and Distribution Shift
**Difficulty:** Application 🟡
**Topic:** What happens when training data doesn't match deployment context

A team trains a sentiment classifier on movie reviews written by adults in Los Angeles. They deploy it to analyze feedback from middle school students across the country. Which of the following is the **most likely** problem?

- A) The model will run out of memory because students write more than adults
- B) The model may misclassify student slang, informal language, or regional expressions it was never trained on
- C) The model will work perfectly because sentiment is the same everywhere
- D) The model will learn the student data over time on its own

**✅ Correct Answer: B**

**Explanations:**
- **A — Incorrect.** Memory usage is not related to who wrote the text. This is a hardware concern, not a bias concern.
- **B — Correct.** This is **distribution shift**: the model was trained on one kind of language (adult movie reviews, Los Angeles) and is now being used on a very different kind of language (middle school students, nationwide). Slang, informal spelling, regional expressions, and different emotional norms mean the model's learned patterns may not apply.
- **C — Incorrect.** Sentiment expression varies significantly by age, culture, region, and context. "This hits different" might be positive student slang that an adult model would misclassify as negative or neutral.
- **D — Incorrect.** Deployed models do not automatically learn from new data unless explicitly retrained. The model is static after training (unless a retraining pipeline is built).

> 💡 **Hint** *(costs 1 XP)*: What term describes when the data a model sees in the real world is different from its training data?

---

## Question 4 — False Positives and False Negatives
**Difficulty:** Analysis 🔴
**Topic:** Types of classification errors and their consequences

A hospital deploys an AI to screen patients for a serious but treatable disease. The AI predicts "no disease" when the patient actually has it. What type of error is this, and why is it dangerous?

- A) False positive — dangerous because it causes unnecessary treatment
- B) False negative — dangerous because the patient doesn't receive treatment they need
- C) False positive — dangerous because the AI is too confident
- D) True negative — this is actually the correct outcome, so it's not dangerous

**✅ Correct Answer: B**

**Explanations:**
- **A — Incorrect.** A false *positive* would be predicting "disease" when there is none — leading to unnecessary treatment. That's the opposite of what happened here.
- **B — Correct.** A **false negative** is when the model predicts the *negative class* ("no disease") when the truth is *positive* ("disease present"). In medical screening, false negatives are extremely dangerous because a patient who is told they're healthy may not seek treatment until the disease is much harder to treat.
- **C — Incorrect.** Confidence is a separate concept from error type. "False positive" is also wrong — see explanation for A.
- **D — Incorrect.** A true negative would be predicting "no disease" when the patient genuinely has no disease — that would be correct. Here, the patient *does* have the disease, so predicting "no disease" is an error.

> 💡 **Hint** *(costs 1 XP)*: A false negative means the model said "no" when it should have said "yes." Now apply that to the medical context.

---

## Question 5 — Ethics of Training Data
**Difficulty:** Analysis 🔴
**Topic:** Fairness, consent, and the human cost of labeled data

A company builds a highly accurate image classifier using 10 million photos scraped from social media without asking users for permission. Which of the following is the **best critique** of this approach?

- A) The model will perform poorly because internet photos are low quality
- B) The model is fine to use because accuracy is high and the photos were publicly posted
- C) The model may encode the biases of what people chose to post online, and using photos without consent raises ethical concerns even if the photos were public
- D) The only problem is that 10 million photos might not be enough data

**✅ Correct Answer: C**

**Explanations:**
- **A — Incorrect.** Image quality is not the primary concern here. Modern classifiers handle a wide range of image quality. This answer sidesteps the ethical issue entirely.
- **B — Incorrect.** "Publicly posted" doesn't automatically mean "consented to be used for AI training." This conflates availability with permission. Many platforms' terms of service prohibit scraping, and users posting photos typically don't expect their images to train commercial AI systems.
- **C — Correct.** There are two distinct issues here: (1) **bias** — photos shared on social media reflect who uses social media and what they choose to share, which is not a random or representative sample of the world; and (2) **consent** — the people in those photos did not agree to be training data for a commercial model. Both are legitimate critiques even when accuracy is high.
- **D — Incorrect.** 10 million images is a large dataset. Data quantity is not the main problem — data ethics and representativeness are.

> 💡 **Hint** *(costs 1 XP)*: Think about two separate questions: (1) Who is *in* the photos? (2) Did those people agree to be used this way?

---

## Quiz Summary

| # | Topic | Difficulty | Correct Answer |
|---|-------|------------|----------------|
| 1 | The Training Loop | 🟢 Recall | B |
| 2 | Training vs. Real-World Accuracy | 🟡 Application | C |
| 3 | Data Bias and Distribution Shift | 🟡 Application | B |
| 4 | False Positives and False Negatives | 🔴 Analysis | B |
| 5 | Ethics of Training Data | 🔴 Analysis | C |

**Scoring:** 10 XP per correct answer = 50 XP max
**Hints:** Each hint costs 1 XP (deducted from total)
**Bonus:** +5 XP for 5/5 with no hints used

---

## Common Misconceptions to Watch For

| Misconception | Correct Understanding |
|---|---|
| "High training accuracy = good model" | High training accuracy alone is meaningless — test accuracy on unseen data is what matters. |
| "Public data = free to use for training" | Availability ≠ consent. Ethical ML requires considering *how* data will be used, not just whether it was accessible. |
| "Models improve themselves after deployment" | Models are static unless explicitly retrained. They don't learn from new data on their own. |
| "More data always fixes bias" | More of the *same biased data* makes bias worse, not better. Diverse, representative data is needed. |
| "False positive and false negative sound the same" | False positive = predicted positive, actually negative. False negative = predicted negative, actually positive. Help students memorize with examples. |
