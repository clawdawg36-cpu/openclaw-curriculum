# 📉 Overfitting Demo Worksheet
### Teachable Machine Experiment — 3 vs 30 Training Images

---

**Name:** _________________________________  **Date:** ________________  **Period:** _______

---

## Background: What Is Overfitting?

Imagine you study for a test by memorizing ONLY the exact questions from last year's exam. You ace last year's test — but fail when the new test asks slightly different questions.

**That's overfitting.** A model that's overfitted has basically memorized its training data instead of learning the real underlying patterns. It performs great on training data but poorly on new, unseen data.

In this experiment, you'll train two versions of an image classifier using **Google's Teachable Machine** (teachablemachine.withgoogle.com) and compare their performance.

---

## Setup

**Tool:** Teachable Machine — Image Project  
**Categories:** "Happy Face" and "Not Happy Face"  
**Your own webcam** (or provided images)

---

## Experiment A: Small Training Set (3 images per class)

### Step 1: Train the Model
1. Open Teachable Machine and create a new Image Project
2. For **Class 1 ("Happy")**: capture or upload exactly **3 images** of happy faces
3. For **Class 2 ("Not Happy")**: capture or upload exactly **3 images** of not-happy faces
4. Click **Train Model** and wait for it to finish

### Step 2: Test the Model — Training Images
Show the model the **same 3 images you used to train it** for each class.

| Test Image | Expected Label | Model Predicted | Confidence % | Correct? |
|-----------|---------------|-----------------|--------------|----------|
| Happy #1 (training) | Happy | | | |
| Happy #2 (training) | Happy | | | |
| Happy #3 (training) | Happy | | | |
| Not Happy #1 (training) | Not Happy | | | |
| Not Happy #2 (training) | Not Happy | | | |
| Not Happy #3 (training) | Not Happy | | | |

**Training Accuracy (3-image model):** _______ / 6 = _______ %

### Step 3: Test the Model — NEW Images
Show the model **6 new images it has never seen** (different people, different lighting, etc.)

| Test Image | Expected Label | Model Predicted | Confidence % | Correct? |
|-----------|---------------|-----------------|--------------|----------|
| New Happy #1 | Happy | | | |
| New Happy #2 | Happy | | | |
| New Happy #3 | Happy | | | |
| New Not Happy #1 | Not Happy | | | |
| New Not Happy #2 | Not Happy | | | |
| New Not Happy #3 | Not Happy | | | |

**Test Accuracy (3-image model):** _______ / 6 = _______ %

---

## Experiment B: Larger Training Set (30 images per class)

### Step 1: Train the New Model
1. Create a NEW Teachable Machine project
2. For **Class 1 ("Happy")**: capture or upload **30 images** (vary lighting, angle, people)
3. For **Class 2 ("Not Happy")**: capture or upload **30 images**
4. Click **Train Model** and wait

### Step 2: Test the Model — NEW Images (same 6 test images as before)

| Test Image | Expected Label | Model Predicted | Confidence % | Correct? |
|-----------|---------------|-----------------|--------------|----------|
| New Happy #1 | Happy | | | |
| New Happy #2 | Happy | | | |
| New Happy #3 | Happy | | | |
| New Not Happy #1 | Not Happy | | | |
| New Not Happy #2 | Not Happy | | | |
| New Not Happy #3 | Not Happy | | | |

**Test Accuracy (30-image model):** _______ / 6 = _______ %

---

## Results Comparison Table

| Metric | 3-Image Model | 30-Image Model |
|--------|--------------|----------------|
| Training accuracy | | |
| Test accuracy (new images) | | |
| Difference (train − test) | | |
| Average confidence % | | |

---

## Analysis Questions

**Q1.** How did the training accuracy compare between the two models?

_________________________________________________________________________

**Q2.** How did the TEST accuracy compare? Which model did better on new images?

_________________________________________________________________________

**Q3.** In the 3-image model, was there a big gap between training accuracy and test accuracy?  
If yes, what does this suggest about the model?

_________________________________________________________________________

_________________________________________________________________________

**Q4.** Define overfitting in your own words based on what you observed:

_________________________________________________________________________

_________________________________________________________________________

**Q5.** The 30-image model required **10x more data**. Was the improvement in accuracy worth the extra effort? Explain your reasoning.

_________________________________________________________________________

_________________________________________________________________________

---

## Sketch Zone: Draw the Concept

Draw a simple diagram showing the difference between a model that's overfitted vs. one that generalizes well. Use training data points and test data points.

```
OVERFITTED MODEL              GENERALIZING MODEL
(memorized training data)     (learned the pattern)

+---------------------------+  +---------------------------+
|                           |  |                           |
|                           |  |                           |
|                           |  |                           |
|                           |  |                           |
|                           |  |                           |
+---------------------------+  +---------------------------+
```

---

## Conclusion

Complete this sentence based on your experiment:

*"When a model is trained on only a small amount of data, it tends to _________________ the training data, which means it _________________ when it sees new images. To fix this, we can _________________."*

---

*Module 4 — AI & Machine Learning Foundations | openclaw-curriculum*
