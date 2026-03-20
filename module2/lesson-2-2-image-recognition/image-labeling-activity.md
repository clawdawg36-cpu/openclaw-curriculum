# Activity: Human Annotator Simulation

**Lesson:** 2.2 — Image Recognition Deep Dive  
**Time:** ~10 minutes  
**Format:** Individual → Partner discussion → Class debrief

---

## 🎯 What You're Doing (and Why)

Before an AI can recognize images, humans have to label thousands — sometimes millions — of them. This is called **data annotation**, and it's one of the most important (and underappreciated) jobs in AI.

Today, **you** are the annotator. Your labels could be used to train a real image recognition model.

---

## 📋 Instructions

### Step 1: Label the Images (5 min)

Below is a set of image descriptions. For each one, write:

1. **Your label** — What is this image showing? (1–3 words)
2. **Confidence** — How sure are you? (High / Medium / Low)
3. **Notes** — Anything weird, ambiguous, or hard about this one?

> **If your teacher has printed images:** Use the physical sheet provided.  
> **If working digitally:** Your teacher will display images one at a time on screen.

---

### Image Set A — Object Identification

Label each image. Use specific, consistent terms.

| # | Image Description | Your Label | Confidence | Notes |
|---|-------------------|------------|------------|-------|
| 1 | A golden retriever running on a beach | | | |
| 2 | A golden retriever sitting inside a car | | | |
| 3 | A blurry photo — looks like a dog, maybe a cat | | | |
| 4 | A hot dog (food) in a bun | | | |
| 5 | A close-up of a human hand holding a phone | | | |
| 6 | A traffic light — only red visible, green cut off | | | |
| 7 | Two people — one person is partially blocked | | | |
| 8 | A stop sign half-covered in snow | | | |
| 9 | An open laptop on a desk — could be any brand | | | |
| 10 | Same laptop, Apple logo visible | | | |

---

### Image Set B — Emotion/Context Labels

For these, label the **mood or activity** shown.

| # | Image Description | Your Label | Confidence | Notes |
|---|-------------------|------------|------------|-------|
| 11 | Person smiling broadly at a birthday cake | | | |
| 12 | Person with arms crossed, not smiling | | | |
| 13 | Person laughing — head back, eyes closed | | | |
| 14 | Two people — one looks angry, one looks neutral | | | |
| 15 | Crowded street scene — many expressions | | | |

---

### Step 2: Compare with a Partner (2 min)

Find a partner and compare your labels.

**Discussion questions:**
1. Did you agree on all of them? Which ones had different labels?
2. Were there any images where you both felt uncertain?
3. Did anyone label image 4 as "dog" instead of "hot dog"? (Fun fact: early image models did too.)

---

### Step 3: Class Debrief (3 min)

Your teacher will lead a quick discussion. Think about:

- **Where did people disagree?** What does disagreement mean for a model trained on this data?
- **What makes a "good" label?** Should image 2 be labeled "dog" or "dog in car" or "golden retriever"?
- **What about image 12?** Is the person angry? Thinking? Tired? Your label shapes what the model learns.

---

## 🤔 Reflection Questions

Answer these in your notebook or on the back of this sheet:

1. **What surprised you** about the labeling process?

2. **Image 3 was blurry.** If you labeled it "dog" and the real answer was "cat," what happens to the model that trains on your label?

3. **Image 8 showed a snow-covered stop sign.** Self-driving cars need to recognize stop signs. What are the stakes if a model trained only on clear-weather stop signs fails in snow?

4. **Imagine doing this for 1 million images.** What human biases might creep into the labels? Give one example.

5. **Why does it matter** who does the labeling — a group of students in one school, or a diverse team from many countries and backgrounds?

---

## 🔗 Real-World Connection

Companies like Amazon Mechanical Turk, Scale AI, and Appen employ thousands of people worldwide to label training data. It's a global industry. The labels they produce shape what AI models "know" — including any biases baked into those labels.

> **Think about it:** If most of the people labeling "doctor" images are shown photos of men in white coats, and photos of women are labeled "nurse" — what does the AI learn?

This is why **diverse, thoughtful annotation** isn't just a quality issue — it's an ethics issue.

---

## 🏷️ Bonus Challenge

Design your own labeling task:
- What would you want a model to recognize?
- What labels would you use?
- What edge cases would be hardest to label consistently?

Write it up and share with the class!
