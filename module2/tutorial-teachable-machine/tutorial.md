# Module 2: Training Your First AI Model with Google Teachable Machine

**Time:** ~30 minutes  
**Difficulty:** Beginner  
**What you'll build:** A working image classification model you can actually use

---

## What Is Teachable Machine?

Google Teachable Machine is a free, browser-based tool that lets you train a machine learning model without writing a single line of code. You teach it by showing it examples — like showing a friend what a cat looks like. It's the fastest way to go from "I want an AI that recognizes X" to actually having one.

By the end of this tutorial, you'll have a real, working model. And at the end of Module 4, you'll plug that model directly into your agent. So choose something you'd actually want your agent to recognize.

> 💡 **Good project ideas:** hand gestures, facial expressions, objects on your desk, plant health, whether a room is occupied, custom signs or symbols.

---

## Step 1: Open the Tool

1. Go to **[teachablemachine.withgoogle.com](https://teachablemachine.withgoogle.com)**
2. Click the big **"Get Started"** button

[SCREENSHOT: Teachable Machine homepage with "Get Started" button highlighted]

3. You'll see three project types:
   - **Image Project** — classify images or webcam frames
   - **Audio Project** — classify sounds
   - **Pose Project** — classify body poses

4. Click **"Image Project"**

[SCREENSHOT: Project type selection screen with Image Project highlighted]

5. On the next screen, choose **"Standard image model"**

> 💡 **Tip:** You don't need a Google account to train a model. You only need one if you want to save your project to Google Drive.

---

## Step 2: Create Your Project and Add Classes

When the editor opens, you'll see two default classes: **"Class 1"** and **"Class 2"**. These are your categories — think of them as folders labeled with what's inside.

[SCREENSHOT: Teachable Machine editor with two default classes visible]

1. **Rename Class 1:** Click the pencil icon next to "Class 1" and type your first category name (e.g., "Thumbs Up")
2. **Rename Class 2:** Do the same for "Class 2" (e.g., "Thumbs Down")
3. **Need more than 2 classes?** Click **"Add a class"** at the bottom to add more

[SCREENSHOT: Renaming a class — pencil icon clicked, text field active]

> 💡 **Tip:** Be specific with class names. "Cat" and "Not Cat" will work better than "Animal" and "Other Thing". Clear classes = cleaner model.

> ⚠️ **Minimum classes:** You need at least 2 classes to train. Teachable Machine won't let you train with just one.

---

## Step 3: Add Images to Each Class

This is where you teach the model what each class looks like. You have two options: **webcam** or **file upload**.

### Option A: Webcam (Recommended for live demos)

1. Click **"Webcam"** under a class
2. Allow browser access to your camera if prompted
3. Hold up your object/gesture and **click and hold** the **"Hold to Record"** button
4. Aim for **at least 50–100 samples** per class — more is better
5. Move the object around, change angles, vary the lighting

[SCREENSHOT: Webcam capture interface — "Hold to Record" button active, sample count visible]

### Option B: Upload Images

1. Click **"Upload"** under a class
2. Select image files from your computer (JPG, PNG, GIF supported)
3. Drag and drop works too

[SCREENSHOT: Upload interface — drag-and-drop zone with image files being added]

> 💡 **Golden rule:** Aim for **at least 50 samples per class**, but 100+ will give you noticeably better results. More variety in your samples = better real-world performance.

> 💡 **Vary your samples:** Different angles, lighting conditions, backgrounds, and distances. The model needs to see the variety it'll encounter in the real world.

> ⚠️ **Balance your classes:** Try to have roughly equal numbers of samples in each class. If one class has 200 images and another has 20, the model will be biased.

---

## Step 4: Train Your Model

Once you've added samples to all your classes, it's time to train.

1. Click **"Train Model"** in the Training panel (center column)

[SCREENSHOT: "Train Model" button highlighted in Training panel, with sample counts visible per class]

2. A progress bar will appear showing training epochs. **Don't close the browser tab** while training runs.
3. Training typically takes **30 seconds to 2 minutes** depending on sample count and your connection

[SCREENSHOT: Training in progress — epoch counter and progress bar visible]

> 💡 **What's an epoch?** One complete pass through all your training data. More epochs = more refined model (up to a point). Default settings are fine for most projects.

> 💡 **Advanced settings:** Click the arrow next to "Advanced" to adjust epochs, batch size, and learning rate. Leave these at defaults unless you know what you're doing.

> ⚠️ **Training happens in your browser.** Your images never leave your computer (unless you explicitly export to the cloud). Privacy is built in.

---

## Step 5: Test Your Model's Accuracy

When training finishes, the **Preview** panel (right column) activates. This is where you evaluate how well your model actually works.

[SCREENSHOT: Preview panel showing webcam feed with live classification bars]

### Live webcam test:
1. The preview panel shows a live webcam feed
2. Point your camera at each class and watch the confidence bars
3. You want to see **one bar clearly dominant** (80%+ confidence) for the correct class

### What good results look like:
- ✅ Correct class shows 85–99% confidence
- ✅ Switching to a different class quickly shifts the prediction
- ✅ Lighting/angle changes don't completely break it

### What to do if results are bad:
- Add more samples (especially edge cases)
- Make sure your lighting is consistent
- Check that your classes are visually distinct
- Re-train after adding more data

[SCREENSHOT: Good prediction result — one class at 94% confidence, others near 0%]

> 💡 **Tip:** Test with samples the model hasn't seen before (different lighting, angle, background). This is called "out-of-sample testing" and tells you how the model will perform in the real world.

---

## Step 6: Export Your Model

Here's where this gets exciting. You're not just playing with a toy — you're building something you'll actually deploy.

1. Click **"Export Model"** in the top-right of the Preview panel

[SCREENSHOT: "Export Model" button in Preview panel]

2. You'll see three export options:
   - **Tensorflow.js** (for web projects — this is what we'll use in Module 4)
   - **Tensorflow Lite** (for mobile/edge devices)
   - **Tensorflow** (for Python/server-side projects)

[SCREENSHOT: Export modal with three tabs: Tensorflow.js, Tensorflow Lite, Tensorflow]

3. Stay on the **Tensorflow.js** tab
4. Click **"Upload my model"** — this uploads to Google's servers and gives you a shareable URL

[SCREENSHOT: Tensorflow.js tab — "Upload my model" button and the generated URL after upload]

5. **Copy and save the model URL** — it looks like: `https://teachablemachine.withgoogle.com/models/XXXX/`

> 💡 **Save this URL.** You'll need it in Module 4 when you integrate your model into your agent. Keep it somewhere safe — a note, a doc, wherever you won't lose it.

> 💡 **Alternatively:** Use "Download my model" to save files locally. This gives you `model.json` and `.bin` files you can host yourself.

---

## 🔭 Module 4 Preview

**What you just did matters.** You trained a real machine learning model that can classify images in real time. In Module 4: *Agent Integration*, you'll:

- Load this model into a JavaScript agent using TensorFlow.js
- Connect it to a live webcam feed
- Trigger agent actions based on what the model sees

The URL you just copied is your ticket in. When we get there, you'll recognize exactly what's happening — because you built the model yourself.

**Suggested homework before Module 4:** Train a model with 3+ classes that does something *useful to you* — a gesture controller, a room state detector, a sorting tool. The more intentional your model, the more satisfying the integration.

---

## Quick Reference

| Step | Action | Time |
|------|--------|------|
| 1 | Open Teachable Machine | 1 min |
| 2 | Create classes | 2 min |
| 3 | Capture/upload samples (50+ per class) | 10–15 min |
| 4 | Train | 1–2 min |
| 5 | Test accuracy | 5 min |
| 6 | Export model, save URL | 2 min |

**Total: ~20–25 minutes for a simple 2-class model**

---

*Module 2 of the OpenClaw AI Curriculum | Next: Module 3 — Understanding What Your Model Learned*
