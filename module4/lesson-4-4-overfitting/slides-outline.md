# Slides Outline — Lesson 4.4: Overfitting and Model Evaluation

**Format:** Markdown-based slide-by-slide outline  
**Total Slides:** ~15  
**Presenter Notes** are included in *italics* under each slide.

---

## Slide 1 — Title Slide

**Title:** Overfitting and Model Evaluation  
**Subtitle:** Module 4, Lesson 4.4 | When Memorizing Isn't Learning  
**Visual:** A student with a perfect score on a practice test, then a failing score on the real exam  

*Presenter: "Your Teachable Machine model from last class might have a problem you haven't noticed yet. Today we name it, understand it, and fix it."*

---

## Slide 2 — The Perfect Student Problem

**Heading:** Meet Alex

**Body:**

> Alex studied for the math test by memorizing the 20 practice problems.  
> Every number. Every step. Every answer.  
> 
> On test day: same problems, different numbers.

**Question:** How did Alex do?

**Bigger question:** Was Alex a good *learner*?

*Presenter: "Most students immediately understand: memorizing ≠ learning. Hold that intuition — it's exactly what we're about to apply to machine learning models."*

---

## Slide 3 — Introducing Overfitting

**Heading:** Overfitting: When a Model Is Too Much Like Alex

**Body:**

**Overfitting:** A model learns the training data TOO specifically — memorizing noise and quirks rather than the underlying pattern.

**Signs:**
- Training accuracy: very high (95–100%) ✅
- Validation/test accuracy: much lower (60–70%) ❌
- Gap between the two grows as training continues

**Result:** Works perfectly on data it has seen. Fails on data it hasn't.

*Presenter: "The model has essentially memorized the training set. It can ace the practice problems. But ask it something new, and it's lost."*

---

## Slide 4 — The Accuracy Curves

**Heading:** Reading the Training Curves

**Visual (draw live on whiteboard, then show):**

```
Accuracy (%)
  100 |   Training: ─────────────────────────→ (stays high)
      |
   80 |   Validation: ────────→ (peaks then drops)
      |
   60 |
      |________________________________________________
           Epochs (training rounds)  →

   🚨 The gap between these lines = overfitting signal
```

**Key insight:** When training accuracy keeps rising but validation accuracy plateaus or drops: you're overfitting.

*Presenter: Draw this live on the whiteboard. Have students copy it in their journals. Say: "This shape — training climbing, validation falling — is one of the most important patterns in all of ML practice."*

---

## Slide 5 — Why Does Overfitting Happen?

**Heading:** Four Causes of Overfitting

**Body:**

**1. Too little data**
- Small datasets are easy to memorize
- Model adjusts to quirks instead of patterns

**2. Not enough variety**
- 50 identical photos ≠ 50 examples
- Model learns "this specific photo" not "this category"

**3. Too complex a model**
- More parameters than the data can justify
- Model has too much capacity to memorize

**4. Training too long**
- Model keeps fitting noise in the data
- Should have stopped earlier

*Presenter: "Which of these do you think was most likely in your Teachable Machine lab? Look at your training notes."*

---

## Slide 6 — The Goldilocks Problem

**Heading:** Three States of Fit

**Visual:** Three columns with diagrams

| Underfitting | Just Right | Overfitting |
|-------------|-----------|-------------|
| 🤷 Didn't learn enough | ✅ Learned the pattern | 🎓 Memorized the noise |
| Low training accuracy | High training accuracy | Very high training accuracy |
| Low test accuracy | High test accuracy | Low test accuracy |
| Too simple / too little training | Balanced | Too complex / too much training |

**Goldilocks principle:** We want the model to learn the pattern — not too little, not too much.

*Presenter: "Most people think 'more training = better.' This slide is why that's wrong. There's a sweet spot."*

---

## Slide 7 — Activity: Memorizer vs. Generalizer

**Heading:** 🐕 Which Classifier Would You Deploy?

**Body:**

**Classifier A — The Memorizer**
- Training data: 10 photos (all golden retrievers, standing, outdoors)
- Training accuracy: 100%
- Test: Golden retriever outdoors → Dog ✅ | Black lab indoors → Not Dog ❌ | Chihuahua → Not Dog ❌
- **Test accuracy: 33%**

**Classifier B — The Generalizer**
- Training data: 100 photos (many breeds, positions, environments)
- Training accuracy: 87%
- Test: Golden retriever outdoors → Dog ✅ | Black lab indoors → Dog ✅ | Chihuahua → Dog ✅
- **Test accuracy: 89%**

**Question:** Classifier A had 100% training accuracy. Is that a good thing?

*Presenter: "Let the students sit with the paradox: 100% training accuracy was WORSE than 87%. Why? Because 100% = memorized. 87% = started to generalize."*

---

## Slide 8 — Connect to Your Lab

**Heading:** Look at Your Own Model

**Body:**

Pull out your Lesson 4.3 lab worksheet.

**Check:**
- What was your training accuracy? ____%
- What was your test accuracy? ____%
- Gap: ____% (training - test)

**Signals:**
- Gap > 15%: possible overfitting
- Gap > 30%: likely overfitting
- Test accuracy > training accuracy: almost impossible (sign of a different problem — very small test set)

**With a partner:** Compare your gaps. Who had more overfitting? What difference in training data might explain it?

*Presenter: "This is not a shame exercise — it's diagnostic. Most first-time Teachable Machine models overfit. The question is: why, and how would you fix it?"*

---

## Slide 9 — Live Demo (Optional)

**Heading:** Watch an Overfit Model — Then Fix It

**Body:**

**Part 1 — Build the Overfit Model:**
- Collect 5 identical samples per class
- Train → training accuracy: ~100%
- Test with varied input → accuracy drops

**Part 2 — Fix It:**
- Add 45 more varied samples per class
- Retrain → training accuracy drops a bit (87%)
- Test again → test accuracy improves

**Observation:** Lower training accuracy. Higher real-world accuracy. Better model.

*Presenter: "If you have the tech: do this live. The moment training accuracy drops while test accuracy improves is a great 'aha' moment."*

---

## Slide 10 — Four Fixes for Overfitting

**Heading:** How to Fight Overfitting

**Body:**

**1. 📦 More Data**
- Bigger datasets are harder to memorize
- More examples → forces generalization
- Best fix, but takes effort

**2. 🎲 More Diverse Data**
- Variety in your training set prevents narrow pattern matching
- Different angles, lighting, backgrounds, contexts

**3. ⏹ Early Stopping**
- Monitor validation accuracy during training
- Stop when the gap starts opening
- Don't let the model over-train on noise

**4. 🔄 Data Augmentation**
- Artificially transform existing examples
- Flip, rotate, adjust brightness → doubles or triples dataset variety
- Works especially well for image models

*Presenter: "Of these four, which is most relevant to your Teachable Machine lab? (Usually: more diverse data.)"*

---

## Slide 11 — Real-World Stakes

**Heading:** Overfitting in the Wild

**Body:**

**Medical Diagnosis AI:**
- Trained on hospital data from one city → 96% training accuracy
- Deployed in another hospital → 68% accuracy
- Reason: overfit to the specific patient population and equipment of the training hospital
- Stakes: misdiagnoses

**Hiring Algorithm:**
- Trained on 10 years of successful hires
- Overfit to historical patterns (including historical bias)
- Discriminated against candidates who didn't match the historical template
- Amazon discontinued a similar hiring AI for this reason

**Question:** How would you test for overfitting before deploying a medical AI?

*Presenter: "These are real consequences. Overfitting isn't just a model quality issue — when models are deployed in high-stakes settings, it's a safety issue."*

---

## Slide 12 — Vocabulary Recap

**Heading:** Key Vocabulary — Lesson 4.4

| Term | Definition |
|------|-----------|
| **Overfitting** | Model memorizes training data instead of learning generalizable patterns |
| **Underfitting** | Model doesn't learn enough — poor performance on both training and test data |
| **Training accuracy** | Model performance on data it saw during training |
| **Validation accuracy** | Model performance on held-out data not used during training |
| **Early stopping** | Halting training when validation accuracy stops improving |
| **Data augmentation** | Creating variations of existing training examples to increase diversity |
| **Generalization** | A model's ability to perform well on new, unseen data |

*Presenter: Leave up for students to copy.*

---

## Slide 13 — The Central Insight

**Heading:** The Most Important Idea of This Lesson

**Body (large, centered):**

> High training accuracy is not the goal.  
> **High test accuracy is the goal.**  
>  
> A model that performs well on unseen data has *learned*.  
> A model that only performs well on training data has *memorized*.

*Presenter: "Read this twice. Then have students read it back to you. This is the conceptual center of ML evaluation."*

---

## Slide 14 — Connection Forward

**Heading:** Where We're Headed

**Body:**

- **Lesson 4.5** — What if the training data isn't just insufficient, but systematically biased?
- **Lesson 4.6** — Different AI models have different training data and training approaches — that's why they give different answers

**Preview question for next lesson:**

> GPT-4 and Gemini were both trained on internet text.  
> If the internet has biases baked in, what does that mean for both models?

*Presenter: "Connect the thread: bad data → bad model. Biased data → biased model. That's Lesson 4.5."*

---

## Slide 15 — Exit Ticket

**Heading:** Before You Go

**Body:**

> 1. Define overfitting in your own words.
> 2. A model has 98% training accuracy and 62% validation accuracy. What does this tell you?
> 3. Looking at your Lesson 4.3 model: do you think you experienced overfitting? What's your evidence?
> 4. Name one thing you'd do to improve your model's generalization.

*Presenter: Collect before students leave.*

---

*End of slide deck — Lesson 4.4*
