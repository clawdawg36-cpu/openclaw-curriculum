# Extension Experiment: 5 Images vs. 50 Images
## Does More Training Data Always Help?

**Lesson 2.3 Extension | Module 2: Seeing & Understanding**  
**Time to complete:** ~20–25 minutes  
**Recommended for:** Students who finish the main lab early, or as an optional at-home investigation

---

## The Question

> **Does training with more images always produce a more accurate model?**

This sounds obvious — of course more data is better, right? Let's find out if that's actually true, and when it matters.

---

## Background

When ML engineers talk about **data quantity**, there's a commonly observed pattern:
- Going from 5 → 50 images usually makes a **huge** difference
- Going from 500 → 5000 images makes a **smaller** difference
- Going from 5,000 → 50,000 might make only a **tiny** difference

This is called **diminishing returns**. Today you're going to observe the first big jump — 5 vs. 50 — in real time.

---

## Setup

You'll train **two separate models** on the same 3 classes:

| Model | Training Images Per Class | Notes |
|-------|--------------------------|-------|
| Model A (Tiny) | 5 images | Capture quickly, same pose each time |
| Model B (Full) | 50 images | Capture carefully, vary angles/distances |

Use the same 3 classes for both. Keep everything else the same — same lighting, same objects, same testing method.

---

## Experiment Protocol

### Phase 1: Train Model A (5 images/class)

1. Open a new Teachable Machine project: [teachablemachine.withgoogle.com](https://teachablemachine.withgoogle.com)
2. Set up your 3 classes (same as your main lab)
3. For each class, record **exactly 5 images** — don't move around, keep it quick
4. Train the model
5. Test it: show each class 10 times, count correct detections
6. Record results below

| Class | Correct / 10 tests | Notes |
|-------|--------------------|-------|
| Class 1: | / 10 | |
| Class 2: | / 10 | |
| Class 3: | / 10 | |
| **Overall accuracy** | / 30 = _____% | |

---

### Phase 2: Train Model B (50 images/class)

1. Start a **new** Teachable Machine project (don't modify Model A)
2. Same 3 classes
3. For each class, record **50 images** — this time vary angles, distances, and positions
4. Train the model
5. Test it the exact same way — show each class 10 times
6. Record results below

| Class | Correct / 10 tests | Notes |
|-------|--------------------|-------|
| Class 1: | / 10 | |
| Class 2: | / 10 | |
| Class 3: | / 10 | |
| **Overall accuracy** | / 30 = _____% | |

---

## Analysis Questions

Answer each question in 2–4 sentences.

**1. What was the accuracy difference between your 5-image and 50-image models?**
```
_____________________________________________________________
_____________________________________________________________
_____________________________________________________________
```

**2. Were you surprised by how well (or badly) the 5-image model did? Why or why not?**
```
_____________________________________________________________
_____________________________________________________________
_____________________________________________________________
```

**3. Was the improvement proportional to the data increase? (You added 10x more data — did accuracy improve by 10x? By half as much? Explain.)**
```
_____________________________________________________________
_____________________________________________________________
_____________________________________________________________
_____________________________________________________________
```

**4. What does this tell you about the relationship between data quantity and model quality?**
```
_____________________________________________________________
_____________________________________________________________
_____________________________________________________________
```

---

## Challenge Variant (If You Have Extra Time)

Try a 3rd model: **5 images per class, but super varied** (different angles, backgrounds, distances, even partial views).

| Model | Accuracy |
|-------|----------|
| Model A (5 images, same pose) | % |
| Model B (50 images, varied) | % |
| Model C (5 images, varied) | % |

**Reflection:** Did varying your data matter more than the quantity? What does that suggest?

```
_____________________________________________________________
_____________________________________________________________
_____________________________________________________________
_____________________________________________________________
```

---

## Connection to Your Agent

Think about this in the context of your AI agent project:

> If you were training a custom model for your agent, and you could only collect 10 minutes of training data — how would you spend that time?
>
> - Capturing as many samples as possible (quantity focus)?
> - Capturing fewer but more varied samples (quality/diversity focus)?
> - Something else?

```
_____________________________________________________________
_____________________________________________________________
_____________________________________________________________
_____________________________________________________________
```

---

## What ML Researchers Have Found

For small Teachable Machine–style models, research and practice show:

- **Fewer than 20 images/class:** Very unreliable. The model has too little to generalize from.
- **20–50 images/class:** Usually enough for simple, visually distinct classes. This is the "sweet spot" for quick prototyping.
- **50–100+ images/class:** Better robustness, especially in varied lighting or backgrounds.
- **Data diversity often matters more than quantity** — 50 varied images usually beats 200 identical ones.

This matches what Hugging Face model trainers discovered too — which is why modern large models train on web-scale datasets with huge variety, not just huge volume.

---

*Extension experiment for Lesson 2.3 — OpenClaw AI Curriculum, Module 2*
