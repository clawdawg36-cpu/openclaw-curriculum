# Lesson 2.3 — Teachable Machine Lab
## Module 2: Seeing & Understanding — AI Perception

**Duration:** 2 periods (approx. 50 min each)  
**Format:** Hands-on Computer Lab  
**Prerequisites:** Lesson 2.1 (What is Computer Vision?), Lesson 2.2 (Hugging Face Image Models)

---

## 🎯 Learning Objectives

By the end of this lab, students will be able to:
1. Train a 3-class image classifier using Google Teachable Machine
2. Interpret accuracy metrics and iterate to improve model performance
3. Articulate the difference between training your own model vs. using a pre-trained model
4. Make an informed decision about which approach fits their agent project

---

## 🔗 Through-Line Connection

> **Framing for students (say this at the start):**
>
> *"Today you're going to train a mini-version of exactly what powers the vision in your agent. When your agent 'sees' something — a face, an object, a gesture — it's using a model like the one you're about to build. The question we'll answer today: should you build your own, or use one someone else already trained on millions of examples?"*

This lab sits at the heart of Module 2's big question: **How does your agent perceive the world?** Students experience firsthand what training feels like — the tedium, the power, the limitations — before we introduce Hugging Face as a contrast in the debrief.

---

## 📚 Materials

- Computers with webcam (1 per student or pair)
- Google account (for saving Teachable Machine projects)
- Lab worksheet (see `lab-worksheet.md`)
- Step-by-step guide (see `teachable-machine-guide.md`)
- Extension experiment sheet (see `extension-experiment.md`)
- Comparison debrief slides (see `comparison-debrief.md`)
- Optional: props for image classes (cups, pens, hands, etc.)

---

## 🗓️ Period 1 (50 min): Train Your Classifier

### Warm-Up (5 min)
- Quick show of hands: *"Has anyone ever taught a computer to recognize something?"*
- Show a 30-second clip or screenshot of Teachable Machine in action
- Drop the through-line hook: *"By the end of today, you'll have trained a model — just like the big labs do, just smaller."*

### Direct Instruction: What is Teachable Machine? (10 min)
- What it is: a no-code tool by Google that lets you train an image, audio, or pose classifier in the browser
- How it works under the hood (brief): webcam captures frames → model learns visual patterns → classifies new images in real time
- The 3-class challenge: students will train a classifier with exactly 3 classes of their choosing
- **Good class ideas to suggest:**
  - Rock / Paper / Scissors (hand gestures)
  - Thumbs Up / Thumbs Down / Neutral
  - Cup / Pen / Phone
  - Smile / Frown / Surprised

### Lab Work: Train Your Model (30 min)
1. Students open `teachable-machine-guide.md` and follow step-by-step
2. Define 3 classes
3. Record 30+ images per class using webcam
4. Train the model
5. Test with live webcam preview
6. Record results on `lab-worksheet.md` (accuracy, confusion, surprises)

### Wrap-Up Period 1 (5 min)
- Quick share-out: *"What classes did you pick? Did anything surprise you?"*
- Tease Period 2: *"Next time we push it further — and we ask the big question: build vs. borrow?"*

---

## 🗓️ Period 2 (50 min): Accuracy Challenge + Big Debrief

### Recap (5 min)
- Brief review of Period 1 results
- Ask: *"Who got over 90% accuracy? Who struggled? What do you think caused the difference?"*

### Accuracy Challenge (15 min)
Students attempt to improve their model accuracy through one or more strategies:
- Add more training samples (aim for 50+ per class)
- Control lighting / background / distance
- Be more consistent in how they position objects

Students document changes and results in their worksheet.

### Extension Experiment (10 min)
Students who finish early (or all students if time allows) run the 5 vs. 50 images experiment:
- See `extension-experiment.md` for full protocol
- Core question: *"Does training with more images always make a better model?"*

### Comparison Debrief (15 min)
This is the heart of the lesson. Lead students through a structured discussion:

**Setup:**
> *"You just spent two periods training a model on maybe 50–100 images per class. The models on Hugging Face were trained on millions. Let's compare."*

Key discussion questions:
1. *"What was hard about training your model?"* (Data collection, consistency, time)
2. *"What could your model do that a generic model might not?"* (Custom classes, weird objects, niche use cases)
3. *"What could a Hugging Face model do that yours couldn't?"* (Scale, robustness, no training needed)
4. **The big one:** *"Which would YOU use for your agent? Why?"*

Guide students toward nuanced answers:
- Pre-trained = fast, broad, no data needed → great for common tasks
- Teachable Machine = custom, personal, specific → great for unique needs
- Many real projects use both!

### Exit Ticket (5 min)
Students complete the reflection section of their lab worksheet:
- One strength of Teachable Machine for agent development
- One limitation
- Which approach they'd choose for their specific agent, and why

---

## 📊 Assessment

| Component | Points |
|-----------|--------|
| Lab worksheet completed (hypothesis, training log, results) | 30 |
| Accuracy challenge attempted with documented strategy | 20 |
| Exit ticket reflection (3 sentences minimum) | 25 |
| Participation in debrief discussion | 25 |
| **Total** | **100** |

---

## 🔧 Differentiation

**For students who finish early:**
- Run the full extension experiment (5 vs. 50 images)
- Try training a pose or audio model instead of image
- Research: how does Transfer Learning make Teachable Machine possible?

**For students who struggle:**
- Pair with a student who has a working model
- Start with Rock/Paper/Scissors (clearest visual difference between classes)
- Focus on getting 2 classes working before adding the 3rd

---

## 🏠 Homework / Follow-Up

Reflection question (journal or Google Classroom):
> *"Your agent is going to need to 'see' something in the real world. Based on today's lab, describe what you'd train it to recognize and whether you'd use Teachable Machine, a Hugging Face model, or both. Minimum 5 sentences."*

---

## 🔗 Next Lesson

**Lesson 2.4 — Integrating Vision into Your Agent**  
Students pick a Hugging Face image model OR their Teachable Machine model and wire it into their agent's action loop.

---

*Lesson developed for the OpenClaw AI Curriculum — Module 2: Seeing & Understanding*
