# 🧪 AI Lab Report
### Sentiment Classifier Performance Analysis

---

**Student Name:** _________________________________  
**Lab Partner(s):** _________________________________  
**Date:** ________________  **Period:** _______  
**Tool Used:** ☐ Teachable Machine  ☐ ml5.js  ☐ Other: ______________

---

## Section 1: Introduction

### 1.1 What Did You Build?

Describe your sentiment classifier in 2–3 sentences. What does it classify? What did you train it on?

_________________________________________________________________________

_________________________________________________________________________

_________________________________________________________________________

### 1.2 Research Question

*"How accurately can a machine learning model trained on [YOUR DATA] classify sentiment as [LABEL 1] vs. [LABEL 2]?"*

Fill in the brackets above with your specifics.

### 1.3 Hypothesis

What did you predict would happen? How accurate did you expect your model to be, and why?

_________________________________________________________________________

_________________________________________________________________________

---

## Section 2: Methods

### 2.1 Training Data

| Category | Label Used | # of Training Examples |
|----------|-----------|------------------------|
| Positive/Happy | | |
| Negative/Not Happy | | |
| **Total** | — | |

**How did you collect or select your training data?**

_________________________________________________________________________

**Did you try to make your training set diverse (different people, lighting, angles)?**  
☐ Yes — describe how: ___________________________________________________  
☐ No — explain why not: ________________________________________________

### 2.2 Testing Data

How many **new, unseen** examples did you use to evaluate the model?

| Category | # of Test Examples |
|----------|-------------------|
| Positive/Happy | |
| Negative/Not Happy | |
| **Total** | |

---

## Section 3: Results

### 3.1 Confusion Matrix

Fill in how many examples the model got right and wrong for each category:

```
                    PREDICTED
                   Happy    Not Happy
         ┌─────────┬──────────┐
  Happy  │   TP:   │   FN:    │
ACTUAL   ├─────────┼──────────┤
NotHappy │   FP:   │   TN:    │
         └─────────┴──────────┘
```

**Key:**
- **TP** (True Positive): Model said Happy, was actually Happy
- **TN** (True Negative): Model said Not Happy, was actually Not Happy
- **FP** (False Positive): Model said Happy, was actually Not Happy
- **FN** (False Negative): Model said Not Happy, was actually Happy

### 3.2 Performance Metrics

Use your confusion matrix numbers to calculate:

| Metric | Formula | Your Result |
|--------|---------|-------------|
| **Accuracy** | (TP + TN) / Total | |
| **Precision** | TP / (TP + FP) | |
| **Recall** | TP / (TP + FN) | |

**Overall accuracy: _______ %**

### 3.3 Confidence Scores

When the model was correct, what was the average confidence score? _______ %  
When the model was wrong, what was the average confidence score? _______ %

### 3.4 Examples of Errors

List 3 examples where your model made a mistake. Describe the input and what the model predicted vs. what was correct:

| # | Input Description | Model Said | Correct Label |
|---|------------------|------------|---------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |

---

## Section 4: Discussion

### 4.1 What Went Well?

Describe 1–2 things your model did well:

_________________________________________________________________________

_________________________________________________________________________

### 4.2 Three Ways to Improve Your Model

This is the most important part! Think critically about your results and identify **three specific, actionable improvements**:

---

**Improvement #1:** ___________________________________________________

**Type of improvement:** ☐ More data  ☐ Better data  ☐ Different architecture  ☐ Better labels  ☐ Other

**Why this would help:**

_________________________________________________________________________

_________________________________________________________________________

**Expected impact:** ☐ Small improvement  ☐ Medium improvement  ☐ Large improvement

---

**Improvement #2:** ___________________________________________________

**Type of improvement:** ☐ More data  ☐ Better data  ☐ Different architecture  ☐ Better labels  ☐ Other

**Why this would help:**

_________________________________________________________________________

_________________________________________________________________________

**Expected impact:** ☐ Small improvement  ☐ Medium improvement  ☐ Large improvement

---

**Improvement #3:** ___________________________________________________

**Type of improvement:** ☐ More data  ☐ Better data  ☐ Different architecture  ☐ Better labels  ☐ Other

**Why this would help:**

_________________________________________________________________________

_________________________________________________________________________

**Expected impact:** ☐ Small improvement  ☐ Medium improvement  ☐ Large improvement

---

### 4.3 Limitations

What limitations does your model have? Who or what might it NOT work well for?

_________________________________________________________________________

_________________________________________________________________________

### 4.4 Real-World Implications

If your model was deployed in a real product (like a customer service app that detects frustrated users), what could go wrong if its accuracy is only _______ %?

_________________________________________________________________________

_________________________________________________________________________

---

## Section 5: Conclusion

Summarize your findings in 3–5 sentences. Did your hypothesis hold up? What was the most important thing you learned?

_________________________________________________________________________

_________________________________________________________________________

_________________________________________________________________________

_________________________________________________________________________

_________________________________________________________________________

---

## Grading Rubric

| Section | Points | Earned |
|---------|--------|--------|
| Introduction & Hypothesis | 10 | |
| Methods — training/test data documented | 15 | |
| Confusion matrix complete & correct | 20 | |
| Three improvements (specific + reasoned) | 30 | |
| Discussion & limitations | 15 | |
| Conclusion | 10 | |
| **Total** | **100** | |

---

*Module 4 — AI & Machine Learning Foundations | openclaw-curriculum*
