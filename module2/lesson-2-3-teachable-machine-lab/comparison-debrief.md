# Comparison Debrief: Teachable Machine vs. Hugging Face
## When Should You Build vs. Borrow?

**Lesson 2.3 Debrief | Module 2: Seeing & Understanding**  
**Format:** Class discussion guide + reference sheet  
**Time:** 15 minutes

---

## Facilitator Guide

> **Teacher/facilitator note:** This debrief is the payoff of the entire lab. Students just experienced training firsthand — now we zoom out and connect it to the broader landscape of AI tools. The goal is nuanced thinking, not a "one is better" conclusion.
>
> Start with this setup line:
>
> *"You just spent two periods training a model. You collected images, trained, tested, iterated. A Hugging Face model like the ones we used in Lesson 2.2 was trained on millions of images over days or weeks on specialized hardware. Let's compare."*

---

## Side-by-Side Comparison

### Quick Reference Table

| | **Teachable Machine** | **Hugging Face (Pre-trained)** |
|---|---|---|
| **Who trains it?** | YOU | Researchers/organizations (millions of examples) |
| **Training time** | Minutes (in browser) | Days to weeks (on powerful hardware) |
| **Training data needed** | 20–100 images/class | Millions of examples (already done) |
| **Setup time** | 5–10 minutes | 5–10 minutes |
| **Can recognize custom things?** | ✅ Yes — anything you train | ⚠️ Only what it was trained on |
| **Accuracy on general objects** | ⚠️ Limited | ✅ Very high |
| **Works without internet?** | ✅ Can export to run locally | ⚠️ Usually requires API call |
| **Privacy** | ✅ Data stays on device | ⚠️ Data sent to external server |
| **Cost** | Free | Free tier + paid tiers |
| **Technical skill needed** | Minimal (no code) | Some (API integration) |
| **Example use case** | Recognize your specific hand gesture | Identify whether an image has a dog |

---

## Discussion Questions (in order)

Run through these as a class. Pause for student responses. Don't rush to the answer.

---

### Question 1: What was hard about training your model today?

*Expected answers:*
- Collecting images took time
- Lighting and background messed things up
- Two classes looked similar and the model got confused
- Had to repeat training multiple times

*Facilitator follow-up:* "Imagine doing this at the scale of ImageNet — 14 million images across 20,000 classes. That's what the teams behind Hugging Face models did."

---

### Question 2: What could YOUR model do that a generic Hugging Face model couldn't?

*Expected answers:*
- Recognize MY specific hand gesture, not just "hand"
- Classify objects I made up or that are unusual
- Distinguish between things that look similar in a specific context
- Work without internet (if exported)

*Facilitator note:* This is the power of custom training. A Hugging Face model knows what "thumbs up" is — but it doesn't know YOUR specific thumbs up in YOUR lighting with YOUR background.

---

### Question 3: What could a Hugging Face model do that yours couldn't?

*Expected answers:*
- Identify thousands of things I haven't trained it on
- Work on the first try, no setup
- Handle edge cases (weird angles, partial views) better
- Be more accurate overall
- Run faster (optimized hardware)

---

### Question 4 (The Big One): Which would YOU use for YOUR agent? Why?

> *Let this one breathe. Take multiple student answers. Push for specificity — "it depends on what?" is a great answer to draw out.*

**Guide students toward these insights:**

**Use Teachable Machine (or custom training) when:**
- You need to recognize something specific and unique
- You have a niche use case that general models don't cover
- Privacy matters (data stays on device)
- You need the model to work offline
- You're prototyping quickly and your classes are simple

**Use Hugging Face (pre-trained) when:**
- You need to recognize common objects, people, faces, text, etc.
- You need high accuracy without collecting your own data
- You need the model to handle a wide variety of inputs
- You don't have time to train and iterate
- The task is well-established (object detection, sentiment, etc.)

**Use BOTH when:**
- A pre-trained model handles the "general" perception
- A custom model handles the "specific" decision on top of it
- (Example: Hugging Face detects "hand" → Teachable Machine classifies which gesture)

---

## Real-World Example: How Engineers Actually Do It

> *Share this to ground the discussion in industry practice:*

Most professional AI systems use a hybrid approach:

1. **Pre-trained foundation model** (like those on Hugging Face) handles the heavy lifting — understanding basic features, language, general objects
2. **Fine-tuned or custom layer** (like what Teachable Machine does, at scale) handles the specific task the product needs

Example: Google Photos uses massive pre-trained models for general image understanding, then fine-tunes on your specific photo library to recognize *your* face, *your* dog, *your* vacation spots.

You just experienced both sides of this in two weeks.

---

## Key Vocabulary (Post on Board)

| Term | Definition |
|------|------------|
| **Transfer Learning** | Reusing a pre-trained model's knowledge as a starting point for a new task |
| **Fine-tuning** | Adjusting a pre-trained model's final layers on new, specific data |
| **Pre-trained model** | A model already trained on large datasets, ready to use |
| **Custom classifier** | A model you train yourself on your own data |
| **Inference** | When a trained model makes a prediction on new data |
| **Training data** | The examples a model learns from |

---

## Exit Ticket Prompt

> Students complete this on their lab worksheet (Section 4.2):
>
> *"Which would YOU use for YOUR agent — Teachable Machine or a Hugging Face model? Be specific about what your agent needs to 'see' and why your choice fits."*

---

## Connection Forward

> Close with this:
>
> *"In Lesson 2.4, you're going to actually plug vision into your agent. You'll decide: do I use a pre-trained Hugging Face model, do I build something custom, or do I combine them? Everything you learned today — what training feels like, what accuracy means, what the tradeoffs are — that all goes into making that decision well."*

---

*Debrief guide for Lesson 2.3 — OpenClaw AI Curriculum, Module 2*
