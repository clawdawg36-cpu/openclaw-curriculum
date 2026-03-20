# Slides Outline — Lesson 4.3: Supervised Learning Lab

**Format:** Markdown-based slide-by-slide outline  
**Total Slides:** ~18 (across 2 periods)  
**Presenter Notes** are included in *italics* under each slide.  
**Note:** Slides are split between Period 1 (intro + setup) and Period 2 (debrief + reflection).

---

# PERIOD 1 SLIDES

## Slide 1 — Title Slide

**Title:** Supervised Learning Lab  
**Subtitle:** Module 4, Lesson 4.3 | You Train the Machine Today  
**Visual:** Student at laptop with webcam; Teachable Machine interface in background  

*Presenter: "Today you stop being a student of ML and start being a machine learning practitioner. You're going to train a real model. Let's go."*

---

## Slide 2 — What Is Supervised Learning?

**Heading:** Three Kinds of Learning — We're Doing This One

**Body:**

| Type | How It Works | Example |
|------|-------------|---------|
| **Supervised** ✅ TODAY | You provide labeled examples | Cat vs. dog classifier |
| **Unsupervised** | No labels — find patterns | Customer segmentation |
| **Reinforcement** | Agent gets rewards/penalties | Chess-playing AI |

**Why "supervised"?**
- A human is supervising: providing the answer key (labels)
- Model learns the mapping from input → label
- Most common ML type in production systems

*Presenter: "The other types exist — but supervised learning is what powers most of what you use every day. And it's what you're building today."*

---

## Slide 3 — Your Tool: Teachable Machine

**Heading:** Teachable Machine — Real ML, No Code Required

**Body:**
- Built by Google Creative Lab
- Browser-based — no install, no account needed
- Trains a real neural network (using transfer learning)
- Supports: images (webcam), audio (microphone), pose (body keypoints)

**What you'll build:** A classifier that distinguishes 2–3 things YOU choose

**Visit:** teachablemachine.withgoogle.com

**Visual:** Teachable Machine UI screenshot

*Presenter: Demo the site briefly. Point out: "This isn't a toy. Teachable Machine uses the same techniques as production ML models — it just makes the interface accessible."*

---

## Slide 4 — How Transfer Learning Works (Brief Explainer)

**Heading:** The Secret: Transfer Learning

**Body:**
- Training a model from scratch on images takes millions of examples and hours of compute
- Teachable Machine uses **MobileNet** — a pre-trained model that already understands images
- Your training: teaches MobileNet's last layer to recognize YOUR specific categories
- Result: You only need 30–100 examples instead of millions

**Analogy:** Like hiring an expert photographer and teaching them your specific shooting style — instead of teaching them what a camera is.

**Visual:** Two-stage diagram: Pre-trained base model → Your custom top layer

*Presenter: "You're not starting from zero. You're standing on the shoulders of a model trained on millions of images. That's why this works with just your webcam and a few minutes."*

---

## Slide 5 — Demo: Watch Me Build a Classifier

**Heading:** Live Demo — 3 Minutes to a Working Model

**Body (steps to narrate):**
1. Go to teachablemachine.withgoogle.com → Get Started → Image Project
2. Name your classes (e.g., "Thumbs Up" / "Thumbs Down")
3. Capture ~15 webcam samples per class — VARY your position!
4. Click "Train Model" — watch the graph
5. Test it in the preview panel
6. Note: confidence scores, what confuses it

**Key point to emphasize:** *"Notice I'm varying my angle and distance. Repetitive samples don't add information."*

*Presenter: Do this live. If there's tech trouble, show a recorded walkthrough video. The demo should take 3–4 minutes max.*

---

## Slide 6 — Your Mission: Build a Classifier

**Heading:** Your Classification Challenge

**Body:**

**Choose your task:**

🖐 **Gesture Classifier** — Rock / Paper / Scissors  
😊 **Emotion Classifier** — Happy / Neutral / Sad  
📦 **Object Classifier** — Objects from your bag  
✋ **Custom Hand Signal** — Invent 3 signals with meaning  
🔊 **Audio Classifier** (if microphone available) — Clap / Snap / Knock  

**Your goals for Period 1:**
- [ ] Choose and document your classification task
- [ ] Collect 50+ samples per class (minimum 30)
- [ ] Train your model
- [ ] Log your training accuracy

**Visual:** Checklist graphic

*Presenter: "Be intentional about your data collection. Don't just spam the button — vary your examples. The model learns from variety."*

---

## Slide 7 — Data Collection Rules

**Heading:** 🎯 Collect Data Like a Pro

**Body:**

**DO:**
- ✅ Vary your angle (straight on, left, right, above)
- ✅ Vary your distance (close, medium, far)
- ✅ Vary the background (move to different spots)
- ✅ Include edge cases (partial view, low light)
- ✅ Balance your classes (similar count per class)

**DON'T:**
- ❌ Take 50 identical photos from the same position
- ❌ Have one class with 3x more samples than another
- ❌ Include samples that belong to the wrong class

**Reminder:** The model learns exactly what you show it. Show it variety, it learns variety.

*Presenter: Post this slide while students collect data. Refer back to it when circulating and seeing repetitive sampling.*

---

## Slide 8 — Training Log Check

**Heading:** 📋 Period 1 Checkpoint

**Body (worksheet items to complete before Period 1 ends):**

> **Part 1 — Data Collection Plan**
> - What are your classes?
> - How many samples per class?
> - What variations did you include?
>
> **Part 2 — Training Log**
> - Samples per class: Class 1: ___ Class 2: ___ Class 3: ___
> - Training accuracy: ___%
> - Training duration: ___ seconds
> - One observation about the training process:
>
> **Prediction for Period 2:**
> - What will your model do well?
> - Where do you predict it will struggle?

*Presenter: "Before you leave today, save your model — use the 'Export Model' button or save a shareable link. You'll need it next class."*

---

# PERIOD 2 SLIDES

## Slide 9 — Period 2 Title

**Title:** Supervised Learning Lab — Period 2  
**Subtitle:** Evaluate, Iterate, Understand  
**Visual:** Scientist with clipboard testing a robot  

*Presenter: "Welcome back. You trained a model last class. Today you find out how good it actually is — and more importantly, why it performs the way it does."*

---

## Slide 10 — What Is Model Evaluation?

**Heading:** Training Accuracy ≠ Real Performance

**Body:**

**Training accuracy** — how well the model performs on data it's already seen during training

**Test accuracy** — how well it performs on NEW data it has never seen

**The difference matters:**
- A model could memorize all training examples → 100% training accuracy
- But fail completely on new examples → 10% test accuracy
- This is called **overfitting** (more in Lesson 4.4)

**Today's evaluation:** You'll test your model on examples NOT from your training set.

*Presenter: "Think of it this way: studying for a test vs. actually taking the test. Training accuracy is like memorizing the practice problems. Test accuracy is the real exam."*

---

## Slide 11 — Your Evaluation Plan

**Heading:** 3 Test Sets — Go Deeper Than "Does It Work?"

**Body:**

**Test Set 1 — Easy Cases (5 tests)**
- Similar to training data
- Should get these right

**Test Set 2 — Edge Cases (5 tests)**  
- Bad lighting, unusual angle, partial view
- Where does confidence drop?

**Test Set 3 — Adversarial Cases (5 tests)**
- Deliberately try to fool the model
- What breaks it? Why?

**Record for each test:**
- Predicted class
- Confidence score (%)
- Correct? ✅/❌

*Presenter: "Don't try to get 100%. Try to understand your model. A model that fails in interesting ways teaches you more than one that accidentally succeeds."*

---

## Slide 12 — Evaluate: Live Worksheet

**Heading:** 📋 Part 3 — Test Results

**Body (worksheet layout):**

| Test # | Input Description | Predicted Class | Confidence | Correct? |
|--------|------------------|-----------------|------------|----------|
| Easy 1 | | | | |
| Easy 2 | | | | |
| Easy 3 | | | | |
| Easy 4 | | | | |
| Easy 5 | | | | |
| Edge 1 | | | | |
| Edge 2 | | | | |
| ... | | | | |

**Calculate:** Overall accuracy: ___/15 = ___%

*Presenter: Circulate and prompt: "What did your edge cases reveal? Try the adversarial cases — get creative about breaking it."*

---

## Slide 13 — Improve Your Model

**Heading:** The ML Iteration Loop in Action

**Body:**

**Option A — More data:**
- Add 20+ samples targeting your weakest areas
- Retrain → retest
- Did accuracy improve?

**Option B — Better data:**
- Identify the systematic weakness in your collection strategy
- Redesign and re-collect a subset
- Retrain → compare

**Document:**
- What change did you make?
- What happened to accuracy?
- What does this tell you about the data → performance relationship?

*Presenter: "This is the real ML workflow: train, evaluate, identify weakness, improve data, retrain. Not: train, hope for the best, ship."*

---

## Slide 14 — Gallery Share

**Heading:** 🎪 Show Your Model — Warts and All

**Body:**

**With a partner or triad:**
1. Demo your model — show what it does well
2. Show what breaks it — the failures are the interesting part
3. Share: one thing you'd do differently starting over

**Focus on:** Not "look how good my model is" — but "here's what I learned about data and training"

*Presenter: Frame the gallery as a learning exchange. "Your failures are data for the class. Share them."*

---

## Slide 15 — Class Debrief

**Heading:** What Did We Learn?

**Body (fill in during discussion):**

1. What was the #1 reason models underperformed?
2. What data collection strategy worked best?
3. Did anyone achieve high accuracy? What did they do differently?
4. What would it take to make your model "production-ready"?

**Connect back:**
- Lesson 4.1: ML learns from labeled examples ✅
- Lesson 4.2: Data quality determines model quality ✅
- Lesson 4.3: You felt both of these firsthand ✅

*Presenter: "The best ML practitioners are obsessive about data quality. Not algorithm design — data quality. You've now felt why."*

---

## Slide 16 — Reflection Prompt

**Heading:** Final Reflection

**Body (journal prompt):**

> 1. Describe your classification task and the model you built.
> 2. What accuracy did you achieve on the test set? What does that mean practically?
> 3. What was the biggest factor affecting your model's performance?
> 4. What did training your own model teach you that the slides couldn't?
> 5. **Bonus:** If you deployed this as part of an app, what would you need to warn users about?

*Presenter: "Take 5 minutes. Be specific and honest. The best reflections name a specific example — not just 'I learned a lot.'"*

---

## Slide 17 — Coming Up: Overfitting

**Heading:** Next: When Models Learn Too Well

**Body:**
- Your model might have 95% training accuracy — but struggle on new data
- This has a name: **overfitting**
- Next lesson: What is overfitting? How do you detect it? How do you prevent it?
- **Preview question:** If you trained your model on only 5 examples per class and got 100% training accuracy — should you trust it? Why or why not?

*Presenter: "Leave students with that question. It's the hook for Lesson 4.4."*

---

## Slide 18 — Vocabulary Recap

**Heading:** Key Vocabulary — Lesson 4.3

| Term | Definition |
|------|-----------|
| **Supervised learning** | Learning from labeled examples where a human provides the correct answers |
| **Transfer learning** | Using a pre-trained model as a starting point for a new task |
| **Training accuracy** | How well a model performs on data it was trained on |
| **Test accuracy** | How well a model performs on new, unseen data |
| **Edge case** | An input at the boundary of what the model was trained on |
| **Adversarial example** | An input designed to fool or confuse a model |
| **Iteration** | The process of training → testing → improving → retraining |

*Presenter: Leave up for students to copy.*

---

*End of slide deck — Lesson 4.3*
