# Teacher Guide: Image Classifier Lab
### Module 2 — Teachable Machine (3-Class Classifier)

---

## 📌 Overview

**Lab Duration:** 60–90 minutes (can extend to 2 class periods)  
**Grade Level:** 8–12 (adaptable)  
**Prerequisites:** Students should have completed Lesson 2-3 (Teachable Machine intro) or have basic familiarity with what machine learning is.  
**Group Size:** Individual or pairs

**Core Learning Objectives:**
- Students collect, curate, and train a real ML dataset
- Students understand the relationship between data quality and model performance
- Students iterate on a model — experiencing the "build, test, improve" cycle
- Students begin connecting this skill to a real agent integration (Module 4 preview)

---

## 🛠️ Setup & Prerequisites

### What You'll Need:
- Computers with webcams (one per student/pair)
- Stable internet connection (Teachable Machine is browser-based)
- Google accounts for students (to save/export models)
- Physical objects for training (or students bring their own)

### Day-Before Prep:
1. **Test Teachable Machine** at [https://teachablemachine.withgoogle.com/](https://teachablemachine.withgoogle.com/) on school computers
2. **Check if webcams work** in Chrome/Edge — some school browsers block webcam by default
3. **Prepare prop bins** if using Option A (Recyclables) — gather plastic bottles, cardboard, food waste examples
4. **Review the three category options** in the lab guide — decide if you want to assign categories or let students choose

### Webcam Troubleshooting (Pre-Lab):
- Teachable Machine requires webcam permissions — have students click "Allow" when prompted
- If school IT blocks webcams, students can use the Upload option and collect photos on their phones
- Test in Chrome specifically — it has the best compatibility

---

## 📅 Suggested Pacing

### Option A: One 90-Minute Session

| Time | Activity |
|------|----------|
| 0:00–0:10 | Intro: through-line framing + demo Teachable Machine live |
| 0:10–0:25 | Students set up project, decide categories, start collecting images |
| 0:25–0:55 | Data collection + training (this takes the longest) |
| 0:55–1:10 | Testing + completing test checklist |
| 1:10–1:20 | Iteration attempt |
| 1:20–1:30 | Export model, begin lab report / reflection |

### Option B: Two 45-Minute Sessions

**Day 1:** Setup, category selection, data collection, initial training  
**Day 2:** Testing, iteration, export, complete lab report

---

## 🎯 Intro Framing Script

Use this to open the lab (adjust to your voice):

> *"Today you're going to do something most people never do — you're going to build a machine learning model from scratch. Not set up someone else's model. Build your own, with your own data.*
> 
> *Here's why this matters beyond today: In Module 4, you're going to give your AI agent the ability to see. It's going to use a model — just like the one you're building right now — to perceive the world and make decisions. So this isn't just a lab. This is you building something you'll actually use.*
> 
> *Your model. Your data. Your agent. Let's go."*

---

## ⚠️ Common Issues & Fixes

### Issue 1: Low Accuracy (<70%) After First Training

**Cause:** Usually not enough data diversity — students took all photos from the same angle with the same background.

**Fix:**
- Ask: *"Did you move the object around while recording? Did you try different backgrounds?"*
- Have students add 15–20 more images with intentional variety
- Remind them: the webcam records continuously — hold still, then move!

---

### Issue 2: One Class Always "Wins"

**Symptom:** Model almost always predicts Class 1 (or whichever class has the most images).

**Cause:** Class imbalance — one class has significantly more training images than others.

**Fix:**
- Count images per class (visible in the Teachable Machine UI)
- Add images to the underrepresented classes until all are roughly equal

---

### Issue 3: Webcam Not Working

**Options:**
1. Try a different browser (Chrome preferred)
2. Have student reload and re-grant camera permissions
3. Use the Upload option — student photographs objects with phone, transfers via USB/AirDrop/email

---

### Issue 4: Training Takes Too Long / Browser Freezes

**Cause:** Too many images + slow computer can stress the browser.

**Fix:**
- Reduce to 30 images per class (meeting the minimum)
- Close other browser tabs
- Use Chrome for best WebGL performance

---

### Issue 5: Model Export Fails / Link Doesn't Work

**Cause:** Google account not signed in; unstable network during upload.

**Fix:**
- Make sure student is signed into Google before uploading
- Try again on a stable connection
- As a backup, students can download the model files locally (TF.js format) instead of uploading

---

### Issue 6: Categories Are Too Similar

**Example:** Student tries to classify "cat photos from Google" vs. "dog photos from Google" — model performs poorly because internet photos vary too much.

**Fix:**
- Redirect toward physical, in-person objects with webcam collection
- The best results come from objects students can hold and rotate in front of their camera

---

## 📐 Differentiation

### Students Who Finish Early:
- Challenge: Can they get to 95%+ confidence? What does it take?
- Extension: Try adding a 4th class — does accuracy go down? Why?
- Reflection: Write a one-page "agent concept" for how their model would be used in Module 4

### Students Who Need More Support:
- Pre-assign categories (Option B: Hand Gestures is the easiest — props always available)
- Pair with stronger student for data collection phase
- Allow lower threshold: 25 images per class minimum for struggling students
- Teacher can demo the full workflow live while students follow along

---

## 📊 Grading Rubric

### Standard Rubric (100 points)

| Criterion | Excellent (Full Credit) | Satisfactory (Partial) | Incomplete |
|-----------|------------------------|----------------------|------------|
| **Data Collection** (20 pts) | 30+ images per class, clear variety in angles/lighting | 20–29 images per class, some variety | Under 20 images per class |
| **Model Accuracy** (20 pts) | 85%+ accuracy after training | 70–84% accuracy | Below 70% |
| **Testing Documentation** (15 pts) | Testing checklist fully complete with observations | Most tests completed | Checklist incomplete |
| **Iteration** (15 pts) | Made at least one improvement attempt, documented before/after | Attempted iteration but didn't document | No iteration attempted |
| **Lab Report** (20 pts) | All sections complete, thoughtful responses | Most sections complete | More than 2 sections missing |
| **Model Export** (10 pts) | Model link saved and working | Model exported but link not recorded | Not exported |
| **Total** | **100 pts** | | |

---

### Module 4 Reflection Rubric (Part 7 of Lab Report)

This section is especially important — it seeds thinking for Module 4. Grade on thoughtfulness:

| Score | Description |
|-------|-------------|
| 10/10 | Student articulates a specific, plausible agent use case with input → model → action logic. Shows genuine thinking about limitations. |
| 7/10 | Student describes an agent use case but it's vague or generic. Limitations section is surface-level. |
| 4/10 | Student attempted the section but responses are minimal or unclear. |
| 0/10 | Section not completed. |

---

## 🔗 Module 4 Connection Notes

In Module 4 ("Give Your Agent the Ability to Learn"), students will:
- Load their saved Teachable Machine model via URL into an agent
- Connect it to a webcam feed using TensorFlow.js
- Trigger agent actions based on classification results

**Make sure students:**
1. Export their model and save the shareable URL
2. Keep their lab report — the Part 7 reflection becomes the starting point for Module 4's design activity

Consider having students share their model links in a class doc or LMS submission so they can access them easily in Module 4.

---

## 📎 Resources

- [Teachable Machine](https://teachablemachine.withgoogle.com/) — main tool
- [Teachable Machine FAQ](https://teachablemachine.withgoogle.com/faq) — troubleshooting
- [Google Teachable Machine tutorial (official)](https://www.youtube.com/watch?v=T2qQGqZxkD0) — 5-min intro video
- [ml5.js](https://ml5js.org/) — the library used in Module 4 to load TM models in agents
- [TensorFlow.js](https://www.tensorflow.org/js) — background reading if students want to go deeper

---

## 🗒️ Teacher Notes & Tips

- **The through-line framing matters** — Students who understand they'll USE this model in Module 4 are more motivated to make it good. Remind them at multiple points.
- **Encourage physical objects over internet images** — Transfer learning works better when training data matches the real-world context (webcam photos vs. stock photos have very different visual distributions).
- **Hand gestures are the most reliable option** — If you're short on time or props, Option B (hand gestures) requires zero materials and is easy to collect with a webcam.
- **Celebrate iteration** — Make it explicit that the best engineers iterate. Getting 70% and improving to 88% is a success story, not a failure.
- **Manage expectations about "perfection"** — A 90% accurate model that fails in bad lighting is completely normal and worth discussing. Real ML systems have limitations too.

---

*This teacher guide is part of the OpenClaw AI Curriculum — Module 2: How Computers Perceive the World.*
