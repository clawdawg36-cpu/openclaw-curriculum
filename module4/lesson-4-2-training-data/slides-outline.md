# Slides Outline — Lesson 4.2: Training Data — The Food AI Eats

**Format:** Markdown-based slide-by-slide outline  
**Total Slides:** ~15  
**Presenter Notes** are included in *italics* under each slide.

---

## Slide 1 — Title Slide

**Title:** Training Data: The Food AI Eats  
**Subtitle:** Module 4, Lesson 4.2 | OpenClaw Curriculum  
**Visual:** A robot chef tasting dishes at a huge buffet of labeled data examples  

*Presenter: "Last lesson you learned what ML is. Today we go deeper: what does a model actually learn FROM? And what happens when that source material is garbage?"*

---

## Slide 2 — Opening Analogy: The Chef

**Heading:** AI Learns Like a Chef — Sort Of

**Body:**
- Traditional programming: Follow a written recipe
- Machine learning: Taste thousands of dishes and figure out the recipe yourself

**But what if...?**
- All the dishes you tasted were burnt? 🔥
- All from the same one restaurant? 🍟
- Half of them had wrong labels on the plate?

**You'd only learn to cook burnt fast food.**

*Presenter: "This is the central problem of training data. The model can only learn what's in the data you give it. Quality and diversity aren't optional — they're everything."*

---

## Slide 3 — What Is Training Data?

**Heading:** Training Data = Input + Label

**Visual:** Two-column layout

| Input (raw data) | Label (correct answer) |
|------------------|----------------------|
| 🖼 Photo of a cat | "cat" |
| 📧 Email text | "spam" or "not spam" |
| 🩺 X-ray image | "tumor" or "no tumor" |
| 🎵 Audio clip | "jazz" or "classical" |
| 🌡 Temperature reading | "hot" or "cold" |

**Body:** Every training example = (input, label) pair. Without the label, the model has nothing to learn from.

*Presenter: "Think of the label as the answer key. The model learns by comparing its guesses to the answer key and adjusting."*

---

## Slide 4 — How Much Data?

**Heading:** The Data Hunger of ML Models

| Task | Approximate Data Needed |
|------|------------------------|
| Simple 3-class image classifier | 100–500 examples per class |
| ImageNet image recognition | 1.2 million labeled images |
| GPT-3 language model | ~500 billion words |
| Self-driving cars | Millions of hours of driving video |

**Body:** Building training data is often the hardest, most expensive part of building a model.

**Question:** Who builds all this data?

*Presenter: "The answer is: often thousands of low-wage workers clicking, labeling, and categorizing for hours. We'll come back to that in a minute."*

---

## Slide 5 — When Data Goes Wrong: 3 Failure Modes

**Heading:** Three Ways Training Data Fails

**Body:**

**1. 🏷 Mislabeled Data**
- Examples have wrong labels
- Model learns the wrong patterns
- Example: 5% of "spam" emails mislabeled as "safe" → model misses real spam

**2. 🕳 Incomplete / Sparse Data**
- Missing important cases
- Model is blind in those areas
- Example: Self-driving car trained only on sunny roads → fails in snow/rain

**3. ⚖️ Biased Data**
- Systematic skew in who or what is represented
- Model inherits the skew as if it were truth
- Example: Hiring AI trained on male-dominated hires → learns to prefer men

*Presenter: "These are three separate problems with three separate fixes. Can you name one fix for each failure mode?"*

---

## Slide 6 — The Cost of Labels

**Heading:** Who Builds the World's Training Data?

**Body:**
- Amazon Mechanical Turk — 500,000+ crowd workers worldwide
- Scale AI & Sama — professional labeling services
- ImageNet — built with unpaid crowd volunteers (CrowdFlower)
- OpenAI content moderation labels — outsourced to workers in Kenya for ~$2/hr

**Numbers:**
- Professional labelers: ~$5–15/hour
- Speed: ~1,000 images/day for a trained labeler
- ImageNet: 1.2M images, 22,000 categories, years of work

*Presenter: "When we talk about 'AI training data,' we're talking about real human labor, often underpaid and invisible. This is part of the full picture of how AI gets built."*

---

## Slide 7 — Activity: Labeling Sprint

**Heading:** 🏃 Labeling Sprint — You're the Data Labeler

**Body:**

**Round 1 — Easy Labels (5 min)**
- 15 common object images
- Label each with 1 word
- Goal: 15 labels in 5 minutes

**Round 2 — Ambiguous Labels (8 min)**  
- 15 harder images — some unclear, some borderline
- Label + rate your confidence: certain / unsure / skip
- How many do your classmates agree with?

**Round 3 — The Reveal (5 min)**
- How much disagreement did you find?
- What does this mean for the model trained on your data?

*Presenter: Project images one at a time for Rounds 1 and 2. Use a class vote/show of hands to reveal agreement levels. Save Round 3 for the key debrief moment.*

---

## Slide 8 — Sprint Debrief

**Heading:** What Your Labels Tell Us

**Body (fill in during class debrief):**

- Images with 100% class agreement: ___
- Images with significant disagreement: ___
- Images most people skipped: ___

**Big Questions:**
1. For images with disagreement — whose label wins? How would you decide?
2. What would a model trained on your ambiguous labels look like?
3. How does this apply to medical diagnosis? Legal decisions?

*Presenter: Draw out student responses. Push on: "If labeling is this hard for everyday objects, imagine doing it for medical scans or legal documents."*

---

## Slide 9 — Garbage In, Garbage Out

**Heading:** The Golden Rule of Training Data

**Body (large, centered):**

> "A model is only as good as the data it was trained on."

**The corollary:**

> "The model doesn't know the data is wrong. It will learn whatever pattern you give it — including your mistakes."

**Visual:** Split: 🗑️ Bad data → 🤖 confused model | ✅ Good data → 🤖 accurate model

*Presenter: "This is one of the most important ideas in all of AI. It's the reason why building ML systems is hard — not because the math is hard, but because the data work is hard."*

---

## Slide 10 — Data Diversity Matters

**Heading:** Why Diverse Data Makes Better Models

**Body:**

**Scenario:** You're training a face recognition system.

- Training set: 90% light-skinned faces
- Test set: diverse faces from around the world
- Result: System performs well on light-skinned faces, poorly on dark-skinned faces

**This isn't hypothetical** — it's exactly what happened with:
- Amazon's facial recognition Rekognition
- Several academic face recognition systems (MIT Media Lab Gender Shades study)

**Question:** How would you fix it?

*Presenter: "The answer isn't 'try harder.' The answer is: deliberately collect more diverse training data. Representation in data = representation in model outcomes."*

---

## Slide 11 — Real World: Labeled Data Is Everywhere

**Heading:** You've Been Building Training Data Without Knowing It

**Body:**
- 🚦 **reCAPTCHA** — "Select all images with traffic lights" → You're labeling Google's self-driving car training data
- 📸 **Photo tagging** — When you tag a friend on Instagram, you're helping train face recognition
- ⭐ **Star ratings** — 5-star reviews train recommendation models
- 📍 **Waze corrections** — Road updates train navigation AI

**Visual:** Screenshots or icons of reCAPTCHA, photo tags, star ratings

*Presenter: "Every time you fill out a CAPTCHA, you're doing unpaid labor for a tech company's training dataset. How do you feel about that?"*

---

## Slide 12 — Journal Prompt

**Heading:** Connecting to Real ML

**Body (journal prompt):**

> Think of one ML application you use or have heard about.  
> 
> - What training data would it need?  
> - Where might that data come from?  
> - What could go wrong with the data?  
> - Who might be harmed if the data is flawed?

**Take 3 minutes. Share one with the class.**

*Presenter: Walk the room. Listen for nuanced thinking. Students who connect data quality to real-world harm are making the key conceptual leap.*

---

## Slide 13 — Preview: Lesson 4.3

**Heading:** Next: You Train Your Own Model

**Body:**
- In Lesson 4.3 you'll use **Teachable Machine** to train a real image or audio classifier
- You'll collect your own training data — and feel immediately how data quality affects accuracy
- **Your data challenge:** Can you collect data that's diverse, balanced, and cleanly labeled?

**Visual:** Teachable Machine screenshot or logo

*Presenter: "Collect a preview thought: What would you want your model to classify? We'll use that in next class."*

---

## Slide 14 — Vocabulary Recap

**Heading:** Key Vocabulary — Lesson 4.2

| Term | Definition |
|------|-----------|
| **Training data** | Labeled examples used to teach a model |
| **Label** | The correct answer attached to a training example |
| **Mislabeled data** | Training examples with incorrect labels |
| **Incomplete data** | Training sets that are missing important cases |
| **Bias (in data)** | Systematic skew in representation within a dataset |
| **Data labeling** | The human process of adding labels to raw data |
| **Data diversity** | Having a wide range of examples from different contexts |

*Presenter: Leave up for students to copy.*

---

## Slide 15 — Exit Ticket

**Heading:** Before You Go

**Body:**

> 1. Define "training data" in your own words.  
> 2. What's the difference between raw input data and a label?  
> 3. Name two ways training data can be flawed.  
> 4. What surprised you most about the labeling sprint?

*Presenter: Collect before students leave. Review for misconceptions before Lesson 4.3.*

---

*End of slide deck — Lesson 4.2*
