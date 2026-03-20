# Lesson 4.4 — Overfitting and Model Evaluation

**Module:** 4 — Give Your Agent the Ability to Learn  
**Grade Level:** 6–8 (adaptable)  
**Duration:** 50–60 minutes  
**Standards Alignment:** AI4K12 Big Idea 3 (Learning); CSTA 2-AP-15, 3A-AP-15

---

## Learning Objectives

By the end of this lesson, students will be able to:

1. Define overfitting and explain why it happens.
2. Distinguish between training accuracy and validation/test accuracy.
3. Identify signs of overfitting in an accuracy curve (high training, low validation).
4. Describe at least two strategies to prevent or reduce overfitting.
5. Connect overfitting to their own Teachable Machine experience from Lesson 4.3.

---

## Materials & Technology

| Item | Notes |
|------|-------|
| Slide deck (see `slides-outline.md`) | Projected display required |
| Overfitting demo (optional) | Live Teachable Machine with intentionally bad training data |
| Student journals | For reflection and the "memorizer vs. generalizer" activity |
| Whiteboard | For drawing accuracy curves live |
| Student Teachable Machine models from Lesson 4.3 | For connecting to their own work |

---

## Lesson Sequence

### Warm-Up: The Perfect Student Problem (8 min)

**Opening scenario:**

> *"Alex studied for the math test — but only using the exact 20 practice problems from the study guide. Alex memorized every problem: the exact numbers, the exact steps, the exact answers. On test day, the same 20 problems appeared... but with different numbers."*

**Questions:**
- *"How did Alex do on the test?"* (Badly — they memorized, not understood)
- *"Was Alex a good learner or a bad learner?"* (Bad — didn't generalize)
- *"This exact thing happens to machine learning models. We call it overfitting."*

**Bridge:** *"An overfit model is like Alex: it's memorized the training examples but hasn't learned the underlying pattern. It 'aces' data it's seen and fails on data it hasn't."*

---

### Direct Instruction: Overfitting Explained (15 min)

**Format:** Guided slides with live diagram drawing

**Core Concept:**

Overfitting occurs when a model learns the training data too specifically — including its noise, quirks, and random variation — rather than learning the underlying generalizable pattern.

**Signs of overfitting:**
- Training accuracy: very high (95–100%)
- Validation/test accuracy: significantly lower (60–70% or worse)
- Gap between training and validation accuracy grows over time

**Draw on whiteboard — The Accuracy Curves:**
```
Accuracy
100% |  Training ——————————————————→ (stays high)
     |
 80% |  Validation ————→ (peaks then DROPS)
     |
 60% |
     |_________________________________
     0    Epochs (training rounds) →
```
*"When the gap between training and validation opens up: overfitting."*

**Why does overfitting happen?**
1. **Too little data** — Model memorizes a small dataset instead of learning patterns
2. **Model too complex** — Too many parameters for the amount of data
3. **Training too long** — Model keeps adjusting to fit noise in training data
4. **No variation in training data** — Model learns to recognize very specific examples

**The Goldilocks Problem:**
- Underfitting: Model doesn't learn enough (too simple, too little training)
- Overfitting: Model learns too much of the wrong things (memorizes noise)
- Just right: Model learns the generalizable pattern

---

### Activity: The Memorizer vs. The Generalizer (15 min)

**Activity: Two Classifiers — Which Is Better?**

Present two "student" classifiers (can be done as whole-class or pairs):

**Classifier A (The Memorizer)**
- Training data: 10 photos of dogs (all golden retrievers, all standing, all outdoors)
- Training accuracy: 100%
- Test case 1: Golden retriever standing outdoors → Predicted: Dog ✅
- Test case 2: Black lab sitting indoors → Predicted: Not Dog ❌
- Test case 3: Chihuahua in sunglasses → Predicted: Not Dog ❌
- Test accuracy: 33%

**Classifier B (The Generalizer)**
- Training data: 100 photos of dogs (many breeds, many positions, many environments)
- Training accuracy: 87%
- Test case 1: Golden retriever standing outdoors → Predicted: Dog ✅
- Test case 2: Black lab sitting indoors → Predicted: Dog ✅
- Test case 3: Chihuahua in sunglasses → Predicted: Dog ✅
- Test accuracy: 89%

**Discussion:**
1. *"Which classifier would you rather deploy in an app?"*
2. *"Classifier A had 100% training accuracy — is that a good thing?"*
3. *"What was the key difference in their training data?"* (Diversity)
4. *"How does this connect to your Teachable Machine model from last class?"*

**Connect to Lesson 4.3:** *"Look at your own training log. Do you see a gap between your training accuracy and your test accuracy? What might explain it?"*

---

### Overfitting Demo (Optional — 8 min)

**If tech is available:**

Live demo: Build an intentionally overfit Teachable Machine model.

1. Create a classifier with only 5 samples per class — all from the same angle, same lighting
2. Train → show 99%+ training accuracy
3. Test with varied examples → show accuracy collapse
4. Collect 50 varied samples, retrain → show accuracy improvement

*"You just watched a model go from overfit to better generalization by adding diverse data. The training accuracy goes down — but the real-world performance goes up."*

---

### Prevention Strategies (7 min)

**Format:** Rapid-fire with examples

**4 Ways to Fight Overfitting:**

1. **More data** — Harder to memorize a large, diverse dataset. Most reliable fix.
   - *"If you have 1,000 varied examples, the model can't memorize — it has to generalize."*

2. **More diverse data** — Variation in your training set prevents narrow pattern matching.
   - *"Collector A took 50 identical photos. Collector B took 50 varied photos. Same count, very different models."*

3. **Early stopping** — Stop training when validation accuracy starts to drop.
   - *"Watch the curves. When the gap opens: stop training."*

4. **Data augmentation** — Artificially increase diversity: flip images, rotate, adjust brightness.
   - *"Double your dataset without taking new photos — just transform what you have."*

---

### Exit Ticket (5 min)

**Prompt:**

> 1. Define overfitting in your own words.
> 2. What does it mean for training accuracy to be 98% but validation accuracy to be 62%?
> 3. Looking at your Lesson 4.3 model — do you think you experienced overfitting? What's your evidence?
> 4. Name one thing you'd do to improve your model's generalization.

---

## Discussion Questions

- "A company deploys a medical diagnosis AI with 99% training accuracy. Should you trust it? What would you want to check first?"
- "Is it possible to underfit and overfit at the same time? What would that even mean?"
- "In your own learning: have you ever 'overfit' — studied for a specific test format but couldn't apply the concepts to a new problem?"
- "How is overfitting related to the idea that 'practice problems aren't the real test'?"

---

## Differentiation

### Support (Struggling Learners)
- Use only the Memorizer vs. Generalizer activity (skip live demo if confusing)
- Provide a visual: "overfitting = memorizer, good fit = generalizer"
- Reduce exit ticket to questions 1 and 2
- Allow students to look back at their Lesson 4.3 models during discussion

### Extension (Advanced Learners)
- Research: What is regularization? How does dropout in neural networks prevent overfitting?
- Compare: Decision trees overfit easily — how does "pruning" fix it?
- Try: Deliberately overfit a Teachable Machine model (5 identical samples), then fix it (50 varied samples), document the accuracy curves
- Explore: Bias-variance tradeoff — what is it and why does it matter?

### ELL / Language Support
- The "Alex memorized the study guide" analogy is universally relatable — lean on it
- Provide a visual diagram of overfitting curves with labels in both languages
- Allow exit ticket in first language

---

## Assessment

| Method | Timing | What It Measures |
|--------|--------|-----------------|
| Warm-up discussion | Opening | Intuitive grasp of memorizing vs. learning |
| Memorizer vs. Generalizer activity | During lesson | Ability to identify and analyze overfitting |
| Lesson 4.3 model connection | During lesson | Transfer: applying concept to their own work |
| Exit ticket | End of class | Vocabulary, conceptual understanding, self-assessment |

---

## Teacher Notes

- The warm-up analogy (Alex and the study guide) should be immediately relatable. Every student has experienced rote memorization vs. true understanding.
- The accuracy curve drawing is important — do this on the whiteboard, not just on slides. Have students copy it into their journals.
- When students realize "100% training accuracy might be a bad sign," that's the key conceptual flip. Celebrate that moment.
- Connect explicitly to Lesson 4.3: "Your model is probably overfit if you collected very repetitive training data." This makes the abstract concrete.
- If the live demo doesn't work (tech issues), the Memorizer vs. Generalizer activity alone is sufficient to land the concept.
