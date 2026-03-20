# Step-by-Step Guide: Google Teachable Machine
## Lesson 2.3 | Module 2: Seeing & Understanding

**Time to complete:** ~30 minutes  
**What you'll build:** A 3-class image classifier trained on your webcam

---

## Before You Start

✅ Make sure you have:
- A computer with a working webcam
- A Google account (to save your project)
- Chrome or Edge browser (works best — Firefox may have issues)
- Good lighting — face a window or lamp if possible
- 2–3 objects or gestures you want to classify

💡 **Tip:** Simple is better for your first model. Rock/Paper/Scissors is a classic for a reason — the hand shapes are visually very different.

---

## Step 1: Open Teachable Machine

1. Go to: **[teachablemachine.withgoogle.com](https://teachablemachine.withgoogle.com)**
2. Click **"Get Started"**
3. On the project type screen, choose **"Image Project"**
4. Choose **"Standard image model"** (not the embedded version)

✅ You should now see the Teachable Machine training interface with two default classes.

---

## Step 2: Name Your Classes

1. Click on **"Class 1"** — rename it to your first class (e.g., "Rock")
2. Click on **"Class 2"** — rename it to your second class (e.g., "Paper")
3. Click **"Add a class"** at the bottom and name it your third class (e.g., "Scissors")

💡 **Naming tips:**
- Use short, clear names (no spaces work best)
- Names should match what you're training — `thumbs_up` not `positive_gesture`

---

## Step 3: Record Training Images — Class 1

1. Under Class 1, click **"Webcam"**
2. Allow camera access if prompted
3. Position yourself so the webcam can clearly see your object/gesture
4. Hold the button **"Hold to Record"** — images are captured as long as you hold
5. Aim for **at least 30 images** — ideally 40–50

💡 **Pro tips for good training data:**
- **Move around slightly** while recording — vary the angle a little
- **Don't be too still** — real-world use will have variation
- **Vary distance** — hold your object close and far
- **Vary background** if you can — move left/right slightly
- But **stay consistent** on the core shape/gesture — that's what the model learns

✅ You should see a grid of captured frames appear under your class.

---

## Step 4: Record Training Images — Classes 2 & 3

Repeat Step 3 for each remaining class:
- Click the class, click Webcam, hold to record 30–50 images
- Make sure you **switch to the correct class** before recording!

⚠️ **Common mistake:** Recording all images under the same class by accident. Double-check which class is selected before you record.

---

## Step 5: Train Your Model

1. Once all 3 classes have images, click **"Train Model"** (big blue button)
2. Wait — training usually takes 30–90 seconds in the browser
3. **DO NOT close the tab or navigate away** while training

You'll see a progress bar. When it finishes, the preview window will activate automatically.

---

## Step 6: Test Your Model (Live Preview)

The preview panel on the right shows your model running in real time.

**How to test:**
1. Show your webcam each class one at a time
2. Watch the confidence bars — the model shows what % confident it is for each class
3. Try to confuse it — show something that's between two classes

**Record your results on your lab worksheet!** Note which classes were most accurate and which got confused.

---

## Step 7: Save Your Project

1. Click **"Export Model"** → then **"Upload my model to the cloud"** (or save to Google Drive)
2. This gives you a shareable link — **copy it and save it somewhere**
3. You can also click **"Save project to Drive"** to save the editable version

✅ If you skip this step, you'll lose your work when you close the tab.

---

## Step 8: Document & Reflect

Fill out Part 2 and Part 3 of your **lab worksheet** now:
- How many images did you collect per class?
- What was your first accuracy estimate?
- What surprised you?

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Webcam won't turn on | Check browser permissions; try Chrome |
| Model seems random | Add more images; try 50+ per class |
| Two classes keep getting confused | Make the classes more visually different |
| Training took forever | Normal in browser — reload and try again if >3 min |
| Preview is dark/grainy | Move to better lighting |
| Model only detects one class | Make sure each class has a similar number of images |

---

## What's Happening Under the Hood? (Optional Deep Dive)

Teachable Machine uses **Transfer Learning**. It doesn't train a model from scratch. Instead:

1. It starts with a model (MobileNet) already trained on millions of images
2. It reuses the lower layers that detect basic features (edges, shapes, textures)
3. It only trains the final layers to recognize YOUR specific classes

That's why you can get a decent model with just 30–50 images instead of millions. You're standing on the shoulders of a much bigger model.

This is also why Teachable Machine is fast — and why Hugging Face models feel so powerful out of the box. They've already done the hard work.

---

*Guide for Lesson 2.3 — OpenClaw AI Curriculum, Module 2*
