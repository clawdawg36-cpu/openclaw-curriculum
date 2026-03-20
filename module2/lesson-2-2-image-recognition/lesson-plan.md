# Lesson 2.2 — Image Recognition Deep Dive

**Module:** 2 — How AI Sees, Hears, and Reads  
**Duration:** 1 Period (~50 minutes)  
**Grade Level:** Middle / High School  
**Prerequisites:** Lesson 2.1 (Introduction to Computer Vision)

---

## 🎯 Learning Objectives

By the end of this lesson, students will be able to:

1. Explain how convolutional neural networks (CNNs) detect visual features using the "feature detector" metaphor.
2. Describe the role of labeled training data in teaching a model to recognize images.
3. Articulate why pre-trained models (like those on Hugging Face) are often a better starting point than training from scratch.
4. Connect image recognition to their OpenClaw agent's real-world capabilities.

---

## 🔗 Through-Line: The Agent Journey

> **"When you feed your OpenClaw agent an image, it can't understand it natively — it needs a vision model. Today we learn how those models are trained."**

Your agent reads text fluently. But show it a photo and, on its own, it sees nothing — just bytes. To give your agent eyes, it relies on a **vision model** sitting underneath. Before we can trust that model, we need to understand:

- **How did that model learn to see?**
- **Who labeled all that training data?**
- **Do we always have to train our own model?**

This lesson answers all three questions.

---

## 📋 Lesson Outline

### Warm-Up (5 min)

**Quick Demo:** Open [Google QuickDraw](https://quickdraw.withgoogle.com/) and have 2–3 volunteers draw something while the class watches the AI guess in real time.

**Discussion prompt:**
> "How do you think it knows what you drew? Did anyone teach it? How?"

---

### Part 1: How CNNs See (15 min)

#### The Feature Detector Metaphor

Explain CNNs using a layered metaphor:

**Layer 1 — Edge Detectors**  
Imagine a magnifying glass that only looks for lines: horizontal, vertical, diagonal. That's the first layer — it sweeps across the image looking for edges. It doesn't know what a cat is yet. It just sees edges.

**Layer 2 — Shape Detectors**  
Now imagine combining edges into shapes: circles, curves, corners. The second layer groups edges into simple shapes. Still no idea it's looking at a cat.

**Layer 3 — Part Detectors**  
Shapes combine into parts: ear, eye, whisker. Now we're getting somewhere. The model starts to recognize components.

**Layer 4+ — Object Recognizers**  
Parts combine into full objects: "That pattern of ear + eye + whisker + fur texture = cat."

**Analogy to share with students:**
> "Imagine looking at a mosaic from 1 inch away — you just see colored tiles. Step back 1 foot: you see groups of color. Step back 10 feet: you see the full picture. CNNs work the same way — they start close and zoom out conceptually."

#### Key Vocabulary

| Term | Plain English |
|------|--------------|
| Pixel | Smallest dot in an image; has a color value |
| Feature | A visual pattern the model learns to detect |
| Convolution | Sliding a detector "filter" across the image |
| Layer | A stage of pattern recognition; stacked layers = deeper understanding |
| Training | Showing the model thousands of examples with labels |

---

### Part 2: The Labeling Problem (10 min)

**Discussion:**
> "Before a model can learn, someone has to tell it what's in each image. Who does that?"

Key points to cover:
- Models learn from **labeled datasets** — millions of images where a human (or many humans) tagged each one: "cat," "stop sign," "dog," etc.
- This is called **data annotation** — and it's a massive industry.
- The quality of labels directly affects model quality. Garbage labels → garbage model.
- Famous labeled datasets: **ImageNet** (14M+ images), **COCO**, **Open Images**.

**Transition to Activity:**
> "You're about to become a data annotator. Welcome to the job that makes AI possible."

---

### Part 3: Hands-On Activity — Human Annotator Simulation (10 min)

➡️ **See:** `image-labeling-activity.md`

Students label a set of images (printed or on-screen), then compare their labels with a partner. Discussion follows about disagreements, edge cases, and what they reveal about AI bias.

---

### Part 4: Pre-Trained Models — The Shortcut (8 min)

**The Big Idea:**
> "You don't have to train a model from scratch. Someone else already did the hard work — you can borrow their model."

#### What Is a Pre-Trained Model?

A pre-trained model has already been trained on millions of images. It already knows how to detect edges, shapes, objects. You can:

- **Use it directly** — ask it "what's in this image?" and it answers.
- **Fine-tune it** — take its knowledge and teach it your specific task (e.g., "recognize only these 5 types of leaves").

#### Hugging Face — The App Store for AI Models

[Hugging Face](https://huggingface.co) is a platform where thousands of pre-trained models are freely available. For image recognition, popular choices include:

- `google/vit-base-patch16-224` — Vision Transformer for image classification
- `facebook/detr-resnet-50` — Object detection in images
- `openai/clip-vit-base-patch32` — Connects images and text descriptions

**OpenClaw connection:**
> "When you build an agent that can 'see,' you're not training your own vision model — you're calling one of these pre-trained models via an API. Hugging Face makes that easy."

➡️ **See:** `pretrained-vs-custom.md` for the full comparison handout.

---

### Part 5: QuickDraw Reflection + Wrap-Up (7 min)

➡️ **See:** `quickdraw-reflection.md`

Students complete a short written reflection on their QuickDraw experience, connecting it to what they now know about CNNs and training data.

**Exit ticket:** "In one sentence, explain why your OpenClaw agent needs a vision model to understand images."

---

## 🧰 Materials Needed

- [ ] Computers/tablets with internet access (or printed image sets for labeling activity)
- [ ] Google QuickDraw open on projector: https://quickdraw.withgoogle.com/
- [ ] Printed or digital copies of `image-labeling-activity.md`
- [ ] Printed copies of `pretrained-vs-custom.md` (1 per student)
- [ ] `quickdraw-reflection.md` (1 per student, or on-screen)

---

## 📊 Assessment

| Activity | What It Measures |
|----------|-----------------|
| QuickDraw warm-up discussion | Prior knowledge activation |
| Image labeling activity | Understanding of training data and annotation challenges |
| Exit ticket | Ability to connect vision models to agent architecture |
| QuickDraw reflection | Synthesis of lesson concepts |

---

## 🔑 Key Takeaways

1. CNNs learn to see by stacking layers of feature detectors — from edges → shapes → parts → objects.
2. Training requires labeled data; the quality of labels determines the quality of the model.
3. Pre-trained models (like those on Hugging Face) let you skip training from scratch.
4. Your OpenClaw agent uses pre-trained vision models to understand images you send it.

---

## 📚 Extension Resources

- [3Blue1Brown: But what is a neural network?](https://www.youtube.com/watch?v=aircAruvnKk)
- [Google Teachable Machine](https://teachablemachine.withgoogle.com/) — train your own image classifier in-browser
- [Hugging Face Spaces — Image Classification demos](https://huggingface.co/spaces?pipeline_tag=image-classification)
- [ImageNet large scale visual recognition challenge](https://image-net.org/)
