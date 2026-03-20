# Lab: Build Your Own Image Classifier

> **Module 2 Lab — Perception & Machine Learning**

---

## 🧠 Before You Begin: Why This Matters

You're about to train your very first machine learning model.

Not someone else's model. Not a pre-built demo. **YOUR model** — trained on **YOUR data**, designed to recognize categories that YOU chose.

Here's the bigger picture: In **Module 4 (Give Your Agent the Ability to Learn)**, you'll integrate a model exactly like this one directly into your AI agent. Your agent will be able to *see* the world through the lens of a model you trained. This lab is your first step toward that.

When you're done today, you'll have a working image classifier. Hold onto that — you'll need it later.

---

## 🎯 Lab Objectives

By the end of this lab, you will:

- Collect and organize a real-world image dataset (30+ images per class)
- Train a 3-class image classifier using [Teachable Machine](https://teachablemachine.withgoogle.com/)
- Test and evaluate your model's accuracy
- Identify weaknesses and iterate to improve performance
- Reflect on how this model could power an intelligent agent

---

## 🗂️ Your Three Categories

For this lab, you'll train your classifier to recognize **three categories of everyday objects**. Here are the suggested categories — you can use these or propose your own (check with your teacher first):

### Option A: **Recyclables vs. Trash vs. Compost** ♻️
> Train your model to sort waste! 
- **Class 1:** Recyclables (plastic bottles, cardboard, aluminum cans)
- **Class 2:** Trash (chip bags, styrofoam, candy wrappers)
- **Class 3:** Compost (apple cores, banana peels, food scraps)

### Option B: **Hand Gestures** ✋
> Train your model to read your hands!
- **Class 1:** Thumbs Up 👍
- **Class 2:** Peace Sign ✌️
- **Class 3:** Fist ✊

### Option C: **Desk Objects** 📚
> Train your model to identify what's on your desk!
- **Class 1:** Books / notebooks
- **Class 2:** Electronics (phone, laptop, headphones)
- **Class 3:** Snacks / food containers

> **Custom Option:** Have a better idea? Propose three categories to your teacher. Requirements: visually distinct, easy to photograph, at least 30 images each.

---

## 🛠️ What You'll Need

- A computer with a webcam (or a phone camera + USB to transfer photos)
- A [Google account](https://accounts.google.com) (to save your project)
- Your three categories (decided above)
- Props/objects for each category
- This lab guide

---

## Step 1: Set Up Teachable Machine

1. Go to [https://teachablemachine.withgoogle.com/](https://teachablemachine.withgoogle.com/)
2. Click **"Get Started"**
3. Select **"Image Project"**
4. Choose **"Standard image model"**

You'll see a workspace with **Class 1**, **Class 2**, and **Class 3** columns. These represent your three categories.

**Rename each class:**
- Click on the pencil icon next to "Class 1" and type your first category name
- Repeat for Class 2 and Class 3

---

## Step 2: Collect Your Images (30+ Per Class)

This is the most important step. **Your model is only as good as your data.**

### Tips for collecting good training data:

| ✅ DO | ❌ DON'T |
|-------|----------|
| Take photos from multiple angles | Use only one angle |
| Vary the lighting (bright, dim, natural) | Always use the same lighting |
| Use different backgrounds | Always use the same background |
| Include close-up AND farther shots | Only do close-ups |
| Have different people hold the object | Only use your own hand |
| Aim for 40–50 images to be safe | Stop at exactly 30 |

### How to add images:

**Option A — Webcam (recommended):**
1. Click **"Webcam"** under a class
2. Hold up your object and click **"Hold to Record"**
3. Move the object around as you record — variety is key!
4. Record for 3–5 seconds per angle/position

**Option B — Upload files:**
1. Click **"Upload"** under a class
2. Select your image files

> 📸 **Challenge:** Can you hit 50 images per class? More data usually means a smarter model.

---

## Step 3: Train Your Model

Once you have 30+ images in each class:

1. Click **"Train Model"** in the center panel
2. Wait for training to complete (usually 1–3 minutes)
3. Watch the accuracy stats — a good starting model hits **85%+**

**What's happening under the hood?**
Teachable Machine is using a technique called *transfer learning* — it starts with a model already trained on millions of images, then fine-tunes it on YOUR data. That's why training only takes a minute instead of weeks.

---

## Step 4: Test Your Model

In the **Preview** panel on the right:

1. Enable your webcam
2. Hold up objects from each class
3. Observe the confidence bars — how sure is your model?

### Testing Checklist

Work through each item below and note your results in your lab report:

- [ ] Test each class with an object it's seen before (training data)
- [ ] Test each class with a **new object** it hasn't seen
- [ ] Test in **different lighting** than you used for training
- [ ] Try holding the object at an unusual angle
- [ ] Try a "trick" — hold up something that's **not** any of your classes. What happens?

---

## Step 5: Analyze & Iterate

Look at where your model struggles. Common issues:

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| Confuses Class A with Class B | They look too similar | Add more diverse images, make categories more distinct |
| Low confidence on everything | Not enough training data | Add 20+ more images per class |
| Works great in testing, fails on new objects | Overfitting to specific backgrounds | Vary your backgrounds more |
| One class always wins | Class imbalance | Make sure all classes have similar image counts |

**Iterate at least once:**
1. Identify your model's weakest class
2. Add 10–15 more images for that class
3. Retrain
4. Compare results — did it improve?

---

## Step 6: Export Your Model

You'll need this for Module 4!

1. Click **"Export Model"**
2. Select **"Tensorflow.js"** tab
3. Click **"Upload my model"** (this saves it to Google's servers)
4. Copy the shareable link — **save it in your lab report!**

> 🔗 **Keep this link.** In Module 4, you'll paste this URL directly into your agent so it can use your model.

---

## 🔭 Through-Line: Looking Ahead to Module 4

You've just trained a real machine learning model. In **Module 4: Give Your Agent the Ability to Learn**, you'll come back to exactly this skill.

Here's what that will look like:

```
Your Agent
    ↓
Webcam Feed
    ↓
[Your Teachable Machine Model]  ← This is what you built today
    ↓
Classification Result
    ↓
Agent Takes Action
```

Imagine: your agent watches the webcam, detects a recyclable vs. trash, and automatically logs it. Or your agent reads hand gestures and executes commands. **That's real AI — and you built the core piece today.**

---

## 📋 Deliverables

Submit the following:

1. ✅ **Lab Report** (use the template provided)
2. ✅ **Shareable model link** from Teachable Machine
3. ✅ **Screenshot** of your model working in Preview mode (showing confidence bars)
4. ✅ **Before/after comparison** if you iterated (screenshots of accuracy before and after)

---

## Grading

| Component | Points |
|-----------|--------|
| 30+ images per class | 20 pts |
| Trained model with 80%+ accuracy | 20 pts |
| Testing documentation (checklist complete) | 15 pts |
| Iteration (at least one improvement attempt) | 15 pts |
| Lab report submitted | 20 pts |
| Model exported & link saved | 10 pts |
| **Total** | **100 pts** |

---

*Good luck — and remember, this model is yours. You built it. In Module 4, you'll unleash it.*
