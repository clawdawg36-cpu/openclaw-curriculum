# Lesson 4.2 — Training Data: The Food AI Eats

**Module:** 4 — Give Your Agent the Ability to Learn  
**Grade Level:** 6–8 (adaptable)  
**Duration:** 50–60 minutes  
**Standards Alignment:** AI4K12 Big Ideas 3 & 5; CSTA 2-AP-13, 3B-AP-08

---

## Learning Objectives

By the end of this lesson, students will be able to:

1. Define "training data" and explain why it is the foundation of every ML model.
2. Distinguish between labeled and unlabeled data.
3. Identify three ways training data can be flawed (incomplete, biased, mislabeled).
4. Participate in an image labeling sprint to experience the cost and complexity of building training data.
5. Explain how data quality directly determines model quality.

---

## Materials & Technology

| Item | Notes |
|------|-------|
| Slide deck (see `slides-outline.md`) | Projected display required |
| Labeling Sprint image set | 30–50 printed or projected images (mixed, some ambiguous) |
| Labeling Sprint scoring sheet | 1 per student or pair |
| Whiteboard | For class labeling tallies and discussion |
| Student journals | For reflection |
| Optional: computer access | To explore Google's Open Images or Labelbox demo |

---

## Lesson Sequence

### Warm-Up: The Recipe Analogy (7 min)

**Opening hook:**

> *"Last class we learned that ML models learn from data. Today we ask: what if the data is junk?"*

**Analogy — The Food of AI:**
- Traditional programming is like following a recipe with written instructions.
- Machine learning is like a chef who *tastes thousands of dishes* and learns to cook by example.
- But what if all the dishes you tasted were burnt? Or all came from the same restaurant?
- You'd only know how to cook burnt food from that one place.

**Discussion:** *"What does 'bad training data' look like for a spam filter? For a face recognition system? For a medical diagnosis AI?"*

**Bridge:** *"Today we're going to become data labelers — one of the most critical, least glamorous jobs in all of AI. And we're going to discover why it's hard."*

---

### Direct Instruction: What Is Training Data? (12 min)

**Format:** Guided slides with class annotation

**Core Concepts:**

**1. Training Data = Input + Label**
- Every training example has two parts:
  - **Input:** The raw data (an image, a sentence, a sensor reading)
  - **Label:** The correct answer (what the model should predict for that input)
- Without labels, the model has nothing to learn from (unsupervised learning is different — preview for later)

**2. How Much Data Does a Model Need?**

| Task | Rough Data Requirement |
|------|----------------------|
| Simple classifier (3 categories) | ~100–500 labeled examples per class |
| Image recognition (ImageNet) | 1.2 million labeled images |
| GPT-3 language model | ~500 billion words of text |
| Tesla Autopilot | Millions of driving hours |

*"The more complex the task, the more data. Building training data is expensive — sometimes the hardest part of the whole project."*

**3. The Three Failure Modes of Training Data:**

- **Mislabeled data** — Examples with wrong labels. Model learns the wrong pattern.
  - Example: 5% of "spam" emails are actually labeled "not spam." Model learns to let some spam through.
  
- **Incomplete / sparse data** — Missing cases that matter.
  - Example: A self-driving car trained only on sunny California roads fails in Minnesota winter.
  
- **Biased data** — Systematic skew in who or what is represented.
  - Example: A hiring AI trained on 10 years of male-dominated engineering hires learns to prefer male applicants.
  - (Deep dive in Lesson 4.5 — plant the seed here)

**Check-in questions:**
- *"What kind of data failure is most dangerous? Does it depend on the application?"*
- *"How could you test whether your training data is biased?"*

---

### Activity: Labeling Sprint (20 min)

**Setup:** Students experience data labeling — the real, human work that makes ML possible.

**The Sprint:**

1. **Round 1 — Easy labels (5 min)**
   - Show 15 images of common objects: a dog, a car, a tree, a book...
   - Students label each with a single word in their sprint sheet.
   - *Speed goal: 15 labels in 5 minutes.*
   - Tally: How many labels did the class agree on 100%? How many had disagreement?

2. **Round 2 — Ambiguous labels (8 min)**
   - Show 15 harder images: A hotdog in a bun (food or sandwich?). A pickup truck (car or truck?). A teenager on a skateboard (child or adult?). A blurry photo (valid or discard?).
   - Label each — but this time note when you're unsure (rate confidence: certain / unsure / skip).
   - *Debrief: Count disagreements. Some images may have 5 different labels from 5 students.*

3. **Round 3 — The Cost Reveal (5 min)**
   - Reveal: Professional data labelers earn $5–$15/hour and label ~1,000 images/day.
   - ImageNet (1.2M images) was labeled by tens of thousands of crowd workers over years.
   - Ask: *"What happens to a model trained on your Round 2 labels? Where would it be confused?"*

**Debrief Discussion:**
1. *"Which images were hardest to label? Why?"*
2. *"If 3 out of 5 labelers disagree on an image, what do you do with it?"*
3. *"How would you build a labeling system for a medical AI? Would you use the crowd?"*
4. *"What does labeling sprint reveal about the 'cost' of AI?"*

---

### Wrap-Up: Data Quality = Model Quality (8 min)

**Format:** Direct summary + student connection

**Key principle to establish:**

> *"Garbage in, garbage out. A model is only as good as the data it was trained on."*

**Student activity:**
- In journals: *"Describe a real ML application. What training data would it need? What could go wrong with that data?"*
- Share 2–3 responses.

**Preview Lesson 4.3:**
*"Next class, you'll actually train your own ML model using Teachable Machine. You'll collect your own training data — and you'll feel immediately how data quality affects accuracy."*

---

### Exit Ticket (5 min)

**Prompt:**

> 1. Define "training data" in your own words.
> 2. What's the difference between a label and the raw input data?
> 3. Name two ways training data can be flawed.
> 4. Based on the labeling sprint: what surprised you about the labeling process?

---

## Discussion Questions

- "Who should be responsible for making sure training data is high quality? The programmer? The company? The government?"
- "Could an AI model be trained to do something harmful? Give an example."
- "If most of the photos on the internet show one group of people, what does an AI trained on those photos learn?"
- "Would you trust a medical AI to diagnose you? What would you need to know about its training data first?"

---

## Differentiation

### Support (Struggling Learners)
- Provide a vocabulary anchor chart: *input, label, training data, bias, accuracy*
- During the sprint, allow students to work in pairs
- Provide a "label bank" for Round 1 so students match rather than free-write
- Focus exit ticket on questions 1 and 2 only

### Extension (Advanced Learners)
- Research the Human Computation project (reCAPTCHA) — how does it secretly generate training data?
- Explore: What is "data augmentation"? How does it multiply limited training data?
- Investigate: ImageNet Roulette (artist Excavating AI) — what does biased labeling look like at scale?
- Design challenge: "Design a labeling protocol for a medical imaging AI. What safeguards would you include?"

### ELL / Language Support
- Labeling sprint can be done with image-only cards (no text clues required)
- Pair ELL students with bilingual partners for debrief discussion
- Allow journal reflections in first language if needed

---

## Assessment

| Method | Timing | What It Measures |
|--------|--------|-----------------|
| Warm-up discussion | Opening | Transfer from Lesson 4.1 |
| Labeling sprint accuracy | During activity | Hands-on grasp of labeling complexity |
| Journal entry | Wrap-up | Application to real ML scenario |
| Exit ticket | End of class | Vocabulary, conceptual understanding of data quality |

---

## Teacher Notes

- The labeling sprint is designed to generate productive disagreement. The ambiguous images in Round 2 are intentional — use the disagreements as data.
- If students notice that labeling is tedious or underpaid: lean into that. The ethics of training data labor is a real issue. (Amazon Mechanical Turk, Kenyan Sama workers for OpenAI, etc.)
- Plant the bias seed carefully here — the in-depth ethics work comes in Lesson 4.5. Don't shut down early discussion, but redirect: "That's exactly where we're going in Lesson 4.5."
- Anticipate: students may think "just get more data" solves everything. Push back: if the additional data has the same bias, more of it makes things worse, not better.
- The labeling sprint image set can be drawn from royalty-free sources (Unsplash, Pexels) or created as printed cards. About 30 images total works well for a class of 20–30.
