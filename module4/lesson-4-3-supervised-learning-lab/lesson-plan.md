# Lesson 4.3 — Supervised Learning Lab

**Module:** 4 — Give Your Agent the Ability to Learn  
**Grade Level:** 6–8 (adaptable)  
**Duration:** 2 periods (100–120 minutes total)  
**Standards Alignment:** AI4K12 Big Idea 3 (Learning); CSTA 2-AP-16, 3A-AP-13; NGSS Science & Engineering Practice 3

---

## Learning Objectives

By the end of this lesson, students will be able to:

1. Define supervised learning and distinguish it from other learning paradigms.
2. Use Teachable Machine to train an image or audio classifier from scratch.
3. Collect balanced, diverse training data for their chosen classification task.
4. Evaluate their trained model by testing it on new, unseen examples.
5. Document what their model does well and where it fails — and hypothesize why.
6. Articulate how data quality and quantity affected their model's accuracy.

---

## Materials & Technology

| Item | Notes |
|------|-------|
| Computers or tablets with webcam | 1 per student or pair; webcam required for image classifier |
| Teachable Machine (teachablemachine.withgoogle.com) | Free, browser-based, no account required |
| Lab worksheet (see below) | Printed or digital — guides data collection + evaluation |
| Objects for image classification | Each student brings 2–3 physical objects to classify |
| Optional: microphone | For audio classifier version |
| Slide deck (see `slides-outline.md`) | Projected for intro and debrief |
| Student journals | For reflection and documentation |

**Tech Setup Note:** Test Teachable Machine access on school devices before class. Webcam permission must be allowed in the browser. If webcams are unavailable, use the audio classifier option or provide a pre-collected image dataset.

---

## Period 1: Data Collection & Training (50–60 min)

### Warm-Up: What Is Supervised Learning? (8 min)

**Connect to prior lessons:**
- In Lessons 4.1–4.2 we learned: ML learns from labeled examples.
- **Supervised learning** = the most common type: you provide labeled examples (inputs + correct outputs), and the model learns the mapping.
- *"Supervised" because a human is supervising the learning — providing the answer key.*

**Quick contrast:**
- **Supervised:** "Here are 1,000 labeled images of cats and dogs. Learn to tell them apart."
- **Unsupervised:** "Here are 1,000 unlabeled images. Group similar ones together."
- **Reinforcement:** "Here's a game. Figure out how to win by trying things and getting rewards."

**Today:** Pure supervised learning. You're the teacher. You'll provide the labels. The model will learn.

---

### Introduction to Teachable Machine (10 min)

**Demo (teacher-led):**

1. Open [teachablemachine.withgoogle.com](https://teachablemachine.withgoogle.com)
2. Select "Get Started" → "Image Project" → "Standard image model"
3. Show the interface: two class boxes, webcam input, "Train Model" button
4. Quick demo: Create Class 1 = "thumbs up," Class 2 = "thumbs down"
5. Capture ~15 samples per class using webcam
6. Click "Train Model" — watch the accuracy graph
7. Test in the preview panel: does it work?

**Key observations to point out:**
- The accuracy curve during training — what does it mean when it goes up?
- The confidence score — "73% thumbs up" — what does that tell us?
- What happens if one class has many more samples than the other?

**Student choice:** Students decide their classification task:
- **Image options:** Rock/paper/scissors, happy/sad/neutral face, objects (pen/eraser/ruler), hand signals
- **Audio options:** Clap/snap/knock, spoken words, background noise vs. voice
- **Challenge:** Think about what would make a good vs. bad training dataset for your task

---

### Data Collection Phase (20 min)

**Lab Worksheet guidance — Part 1: Data Collection Plan**

Students complete before collecting:
1. What are your classes? (List 2–3 categories)
2. How many samples will you aim for per class? (Goal: 50+)
3. What variations will you include? (Different lighting? Different angles? Different distances?)
4. What could make your data biased or incomplete?

**Data collection rules:**
- Minimum: 30 samples per class (aim for 50+)
- Vary your samples: don't take 30 identical photos
- Think about what the model will encounter in the real world — match that in training

**Teacher circulates:** Check that students are:
- Getting variety in their samples (not just 30 photos from the same angle)
- Labeling consistently (not mixing up classes)
- Aiming for balance (similar number of samples per class)

---

### Training Phase (10 min)

**Students click "Train Model" and observe:**
- The training accuracy graph
- How many epochs (passes through the data) it uses
- Final accuracy percentage

**Lab Worksheet — Part 2: Training Log**
1. How many samples did you collect per class? (Class 1: ___ Class 2: ___ Class 3: ___)
2. What accuracy did your model reach during training?
3. How long did training take?
4. Did anything surprise you about the training process?

**Period 1 Wrap-Up (5 min):**
- Save/export your model (Teachable Machine can save to Google Drive or generate a shareable link)
- Begin Lab Worksheet Part 3 for homework/start of Period 2: *"What do you predict your model will do well? What do you predict it will struggle with?"*

---

## Period 2: Evaluation, Analysis & Reflection (50–60 min)

### Warm-Up: Predictions Check (5 min)

- Students review their Period 1 predictions: "What did I think my model would do well? Struggle with?"
- Partner share: compare predictions with a classmate who built a similar classifier

---

### Model Evaluation Phase (25 min)

**Structured testing — Lab Worksheet Part 3:**

Students test their model on **new examples** (not used in training):

**Test Set 1 — Easy cases (5 tests)**
- Examples very similar to training data
- Record: predicted class, confidence score, correct?

**Test Set 2 — Edge cases (5 tests)**
- Examples at the boundaries: bad lighting, unusual angle, ambiguous input
- Record: predicted class, confidence score, correct?

**Test Set 3 — Adversarial cases (5 tests)**  
- Deliberately try to fool the model: partial view, background clutter, unusual context
- Record: what broke it? why do you think?

**Calculate:**
- Overall accuracy: ___/15
- Easy case accuracy: ___/5
- Edge case accuracy: ___/5
- Adversarial accuracy: ___/5

**Analysis questions (written in worksheet):**
1. Where was your model most confident? Least confident?
2. What types of inputs confused it most?
3. Looking at your training data — why do you think it struggled in those areas?
4. What would you add to your training data to improve it?

---

### Improving Your Model (10 min)

**Students have two options:**

**Option A — Collect more data:**
- Add 20+ new samples targeting the areas where the model struggled
- Retrain and retest: did accuracy improve?

**Option B — Redesign your training strategy:**
- Identify the systematic weakness in your data collection
- Re-collect a subset with better variation
- Retrain and compare

**Document in worksheet:** What change did you make? What happened to accuracy?

---

### Gallery Share & Debrief (10 min)

**Pair or triad share:**
- Demo your model to one other student (or group)
- Show what it does well AND what breaks it
- Share: one thing you'd do differently if you had to start over

**Class debrief questions:**
1. *"Whose model surprised them — either better or worse than expected?"*
2. *"What was the #1 reason for poor performance?"* (Usually: not enough data variation)
3. *"How does this connect to Lesson 4.2 — training data quality?"*
4. *"What would it take to make your model production-ready?"*

---

### Exit Ticket / Final Reflection (5 min)

**Journal prompt:**

> 1. Describe your classification task and the model you built.
> 2. What accuracy did you achieve? What does that mean in practical terms?
> 3. What was the biggest factor that affected your model's performance?
> 4. What did training your own model teach you that the slides couldn't?

---

## Lab Worksheet Summary

Students should submit a completed worksheet with:
- [ ] Part 1: Data collection plan (classes, sample count, variations)
- [ ] Part 2: Training log (samples per class, training accuracy, observations)
- [ ] Part 3: Test results (easy / edge / adversarial, accuracy scores)
- [ ] Part 4: Analysis (where it struggled, why, what you'd fix)
- [ ] Part 5: Reflection (what building a model taught you)

---

## Discussion Questions

- "If your model was deployed in a real app, what could go wrong?"
- "How is your Teachable Machine model similar to and different from GPT or image recognition in your phone?"
- "Would you trust your model to make decisions without human oversight? Why or why not?"
- "What would you have to do to make your model fair — meaning it works equally well for everyone who uses it?"

---

## Differentiation

### Support (Struggling Learners)
- Pre-assign a simple, clear 2-class task (thumbs up/down or hand-written A/B)
- Provide a step-by-step visual walkthrough of Teachable Machine
- Reduce test set to 6 examples (2 per category) instead of 15
- Pair students who need support with more confident peers for data collection

### Extension (Advanced Learners)
- Build a 4-class classifier instead of 2–3
- Export the model to JavaScript and embed it in a simple web page
- Add a third class for "unknown" / "neither" and see how the model handles it
- Document your training run like a real ML experiment: data distribution, accuracy curves, failure analysis
- Research: How does Teachable Machine work under the hood? (Transfer learning from MobileNet)

### ELL / Language Support
- Use image-only classification tasks (no language required)
- Provide lab worksheet in student's first language if available
- Allow verbal reflection instead of written for exit ticket

---

## Assessment

| Method | Timing | What It Measures |
|--------|--------|-----------------|
| Data collection plan | Period 1 | Understanding of training data requirements |
| Training log | Period 1 | Procedural fluency with Teachable Machine |
| Evaluation results | Period 2 | Ability to systematically test and analyze a model |
| Improvement step | Period 2 | Iteration mindset, data → performance connection |
| Final reflection | End of Period 2 | Conceptual synthesis, self-assessment |

---

## Teacher Notes

- **Test Teachable Machine before class** — browser permissions, webcam access, and network speed can cause delays. Have a fallback: pre-collected image datasets you can load.
- The "improve your model" section (Period 2, 10 min) is where the real learning happens. Students who quickly see "add more varied data → better accuracy" have internalized the core lesson.
- Encourage *productive failure* — a model that fails in interesting ways teaches more than one that accidentally works well on a narrow test set.
- If students have trouble with webcam-based image collection, the audio classifier (clap/snap/knock) works well without any preparation and generates interesting results.
- The gallery share builds classroom culture around sharing work-in-progress. Frame it: *"You're not showing off a finished product — you're sharing what you learned."*
- This lab connects directly to the module's capstone: integrating a trained model into their OpenClaw agent. Point this out during debrief.
