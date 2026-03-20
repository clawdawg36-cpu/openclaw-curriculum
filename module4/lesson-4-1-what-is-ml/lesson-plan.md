# Lesson 4.1 — What Is Machine Learning?

**Module:** 4 — Give Your Agent the Ability to Learn  
**Grade Level:** 6–8 (adaptable)  
**Duration:** 50–60 minutes  
**Standards Alignment:** AI4K12 Big Idea 3 (Learning); CSTA 2-AP-11, 3A-AP-18

---

## Learning Objectives

By the end of this lesson, students will be able to:

1. Distinguish between traditional programming (rules → outputs) and machine learning (data → patterns → outputs).
2. Explain the basic machine learning training loop: data → train → model → predict → evaluate.
3. Give two real-world examples of machine learning in their daily lives.
4. Participate in the "Human Learning Machine" game to experience training from the inside.

---

## Materials & Technology

| Item | Notes |
|------|-------|
| Slide deck (see `slides-outline.md`) | Projected display required |
| Human Learning Machine game cards | Printed or displayed on screen (see Activity section) |
| Whiteboard or chart paper | For T-chart: Traditional Programming vs. ML |
| Index cards (20–30) | For the game — image cards with labels |
| Student journals or notebooks | For reflection prompts |
| Optional: internet-connected devices | For checking ML examples live |

---

## Lesson Sequence

### Warm-Up: The Sorting Machine (8 min)

**Activity: Traditional vs. Magic?**

1. Tell students: *"I'm going to describe two systems that do the same thing — decide if an email is spam. Tell me which feels different, and why."*

2. **System A:** A programmer reads 1,000 spam emails and writes rules:
   - "If subject contains 'FREE MONEY' → spam"
   - "If sender ends in '.xyz' → spam"
   - "If body contains 'click here now' → spam"
   - (How many rules would you need? What happens with new tricks?)

3. **System B:** You show the system 10,000 examples labeled "spam" or "not spam." It figures out the patterns itself. No rules written.

4. Ask: *"Which would you rather build? Which do you think actually works better?"*

**Discussion bridge:** *"System B is machine learning. Today we find out how it works — and you'll try being the machine."*

---

### Direct Instruction: Traditional Programming vs. ML (12 min)

**Format:** Guided slides with T-chart buildup

**Key Concept: The Programmer's Dilemma**

Traditional programming flow:
```
Rules/Logic + Input Data → Computer → Output
```

ML flow:
```
Input Data + Desired Outputs → Training → Model → New Input → Prediction
```

**The shift:** In traditional programming, *humans* write the rules. In ML, the *machine finds* the rules (patterns) from examples.

**Examples to walk through:**

| Task | Traditional Approach | ML Approach |
|------|---------------------|-------------|
| Recognize a cat photo | Write rules: "4 legs, pointy ears, fur..." | Show 100,000 cat photos, model learns |
| Translate English → Spanish | Program grammar rules for every case | Train on millions of translation pairs |
| Recommend a song | User picks genres, programmer makes filters | Model learns from listening history |
| Detect skin cancer | Doctor writes diagnostic criteria | Train on 100,000+ labeled skin images |

**Check-in questions:**
- *"Why would writing rules for cat recognition be basically impossible?"*
- *"What does 'training' a model actually mean — what's changing inside it?"*

**The Training Loop (introduce the vocabulary):**
1. **Data** — labeled examples (input + correct answer)
2. **Train** — model looks at examples and adjusts internal "weights"
3. **Model** — the trained system ready to make predictions
4. **Predict** — model sees new input, outputs a guess
5. **Evaluate** — compare predictions to correct answers; iterate

---

### Activity: The Human Learning Machine Game (20 min)

**Setup:** Transform students into a machine learning system — experiencing training from the inside.

**The Scenario:** Students are a "fruit classifier." Their job: learn to identify fruit from descriptions, trained by examples.

**Round 1 — No Training (Baseline)**
- Show 5 fruit description cards (no images, just text clues like "small, red, sweet, grows on trees").
- Students guess the fruit with no prior training.
- Record accuracy as a class.

**Round 2 — Training Phase**
- Show 15 "labeled training examples" — description card + correct fruit label.
- Students study the patterns. (Remind them: this is what a model's training loop does — it sees examples and adjusts.)
- After studying, hide the labels.

**Round 3 — Test Phase**
- Show 10 new description cards (not seen before).
- Students predict the fruit.
- Reveal answers. Calculate accuracy.

**Debrief Questions:**
1. *"How did your accuracy change from Round 1 to Round 3? Why?"*
2. *"What patterns did you pick up on? How did you figure out the rules?"*
3. *"If I showed you 100 training examples instead of 15, what would happen?"*
4. *"What if half the training examples were wrong? How would that affect your predictions?"* (Foreshadow Lesson 4.2)

**Connect to ML:** *"You just did exactly what a machine learning model does: saw labeled examples, extracted patterns, and used them to predict on new data. The difference: a model does this with millions of examples and math."*

---

### Wrap-Up: Real-World ML Everywhere (8 min)

**Format:** Quick-fire examples + student additions

Walk through: Where is ML running right now in the world?
- Face unlock on your phone (image classifier)
- Spotify Discover Weekly (recommendation model)
- Google Search ranking (ranking model)
- Gmail spam filter (text classifier)
- Self-driving car steering (trained on millions of driving hours)
- Autocomplete on your keyboard (language model)

**Student challenge:** *"In your journal, write one app or service you use that probably uses ML. What do you think it was trained on?"*

---

### Exit Ticket (5 min)

**Prompt (in journal or on card):**

> 1. What's the key difference between traditional programming and machine learning?
> 2. Name the 4 steps in the ML training loop.
> 3. In the Human Learning Machine game, what was your "training data"? What was your "test set"?
> 4. What's one thing you're curious or confused about?

---

## Discussion Questions

- "Could you write rules to teach a computer to recognize your face? Why is that hard?"
- "Why do ML models need so much data? What happens with less data?"
- "Are there decisions you'd trust a machine to make? Decisions you wouldn't? What's the difference?"
- "If the training data is wrong, what happens to the model?"

---

## Differentiation

### Support (Struggling Learners)
- Provide a vocabulary card: *data, label, training, model, predict, accuracy, pattern*
- During the game, pair students and allow collaboration
- Provide a pre-filled T-chart with one example per column; students add two more
- Reduce exit ticket to questions 1 and 2 only

### Extension (Advanced Learners)
- Research: How does backpropagation work? What are "weights" in a neural network?
- Compare: Decision trees vs. neural networks — when would you use each?
- Challenge: Find a ML model that made a high-profile mistake. What went wrong with the training?
- Explore: Google's "Teachable Machine" (preview for Lesson 4.3) — try training a quick classifier

### ELL / Language Support
- Provide bilingual vocabulary cards if available
- Use diagrams for the training loop (arrows and icons, not just words)
- Allow game participation in pairs so language-dominant partners can explain

---

## Assessment

| Method | Timing | What It Measures |
|--------|--------|-----------------|
| Warm-up discussion | Opening | Prior knowledge about programming vs ML |
| Human Learning Machine game accuracy | During activity | Grasp of training/testing concept |
| Journal entry | During wrap-up | ML in real world, personal connection |
| Exit ticket | End of class | Training loop vocabulary, conceptual understanding |

---

## Teacher Notes

- The Human Learning Machine game is the heart of this lesson. Don't rush it — the debrief questions matter as much as the game.
- Students often think ML is "magic" or "just AI knowing things." This lesson should demystify it: it's pattern-matching at scale.
- The fruit game can be adapted: use images of handwritten letters, shapes, or even sounds (clap patterns) if you want a different modality.
- Anticipate: students may conflate "training" with "programming." Keep returning to: *"Who wrote the rules? The programmer or the machine?"*
- See `teacher-facilitation-guide.md` for anticipated misconceptions and debrief talking points.
- Lesson 4.2 builds directly on the question: *"What if the training data is wrong?"* — plant that seed here.
