# Sentiment Classifier Lab — Teacher Guide
## Facilitation Notes, Timing, and Troubleshooting

---

## At a Glance

| | |
|---|---|
| **Duration** | 90–120 minutes (recommend 2 x 50-min periods) |
| **Grade Level** | 6–10 |
| **Group Size** | Individual or pairs (pairs recommended for troubleshooting) |
| **Prerequisites** | Basic Scratch familiarity helpful but not required |
| **Materials** | Laptops/Chromebooks, printed or digital student guides |

---

## Learning Objectives

By the end of this lab, students will be able to:
- Define supervised machine learning and explain how training data works
- Train a text classifier using labeled examples
- Connect a machine learning model to a Scratch project using ML-specific blocks
- Evaluate model accuracy using a held-out test set
- Articulate basic limitations of ML models (bias, generalization)

---

## Preparation (Do This Before Class)

### 1. Test ML for Kids Yourself
- Visit [machinelearningforkids.co.uk](https://machinelearningforkids.co.uk) and create a test project
- Make sure Watson AI is working (it occasionally has outages — have a backup plan)
- Check that Scratch 3 opens correctly from within a project

### 2. Set Up Student Accounts (Recommended for Saving Work)
- Create a teacher account at ML for Kids
- Generate student logins via the teacher dashboard (up to 30 free)
- Distribute credentials to students before the lab
- **Alternative:** Use "Try without logging in" — works fine, but students cannot save their ML projects

### 3. Network Check
ML for Kids uses IBM Watson for training. If your school network blocks external APIs, you may see errors during model training. Test on school Wi-Fi in advance. Known blocked domains: `gateway.watsonplatform.net` and `us-south.ml.cloud.ibm.com`.

### 4. Print or Share Materials
- `student-lab-guide.md` → Convert to PDF or share via Google Classroom
- `sample-reviews.md` → Optional: print as a cheat sheet
- `lab-report.md` → Print or assign digitally

---

## Suggested Timing

### Day 1 (50 minutes): Training

| Time | Activity | Notes |
|------|----------|-------|
| 0–5 min | Hook: "Can a computer have feelings?" | Show a funny/bad movie review. Ask: how would YOU know if this is positive or negative? |
| 5–10 min | Brief concept intro | Supervised ML: you show examples, AI learns patterns. No more than 5 min — get them doing, not listening |
| 10–15 min | ML for Kids account setup | Walk through Steps 1–2 as a class |
| 15–35 min | Training (Steps 3–5) | Independent work. Circulate. Encourage more than 10 examples each |
| 35–45 min | Test the model directly (Steps 6) | Students test, fill in the quick prediction table |
| 45–50 min | Share out: whose model was most confident? | Quick show of hands — who got 90%+ confidence? |

### Day 2 (50 minutes): Build + Test

| Time | Activity | Notes |
|------|----------|-------|
| 0–5 min | Recap Day 1 | Quick: what did the AI learn? How? |
| 5–30 min | Scratch project (Steps 7–10) | Most time-consuming. Pair slower students with faster ones |
| 30–45 min | Testing protocol (Steps 11–12) | Students run all test sets, fill in tables |
| 45–50 min | Begin lab report or assign as homework | |

---

## Facilitation Tips

### Making Training Fun
- Challenge students to write their OWN movie reviews instead of just using the samples
- Run a class competition: who can train the most accurate model?
- Use silly reviews ("This movie was so bad it looped back around to being good") as discussion starters

### Common Student Questions

**"Why do I need so many examples?"**  
The AI needs to see enough variety to find real patterns, not just memorize your specific words. More examples = better generalization.

**"What does the confidence percentage mean?"**  
It means the AI is saying "I'm X% sure this belongs in this category." 90% confident means there's a 10% chance it's wrong. It's NOT a quality score — it's a probability estimate.

**"Why did the AI get it wrong?"**  
Usually: (1) not enough training data, (2) the review used words/styles not represented in training, or (3) genuinely ambiguous language. All three are worth discussing.

**"Can I make it better without retraining?"**  
No — you have to add examples and retrain. This is a key insight: changing an AI's behavior requires changing its training data, not just adjusting a setting.

---

## Troubleshooting

### "I can't find the ML blocks in Scratch"
Make sure students are using the special ML for Kids Scratch link (from inside their project on ML for Kids), NOT regular scratch.mit.edu. The AI blocks only appear in the ML for Kids version.

### "Training is taking forever / never completes"
This is usually a network/API issue. Options:
- Wait 2–3 minutes (IBM Watson can be slow)
- Refresh the page and try again
- If persistent: use "Try without logging in" for a fresh session
- Check if Watson is down: [status.ng.bluemix.net](https://status.ng.bluemix.net)

### "The model says everything is the same label"
Too few training examples or imbalanced data (e.g., 20 positive, 2 negative). Have students add more examples to the underrepresented category and retrain.

### "Scratch keeps crashing when I test a review"
The ML for Kids Scratch is browser-based and memory-intensive. Close other tabs, use Chrome (best compatibility), avoid testing too rapidly.

### "The model has low confidence on everything (50%–60%)"
This often means examples in both buckets are too similar. Have students look at their training data: are they using really different language for positive vs negative? If not, they need clearer contrast in examples.

### "Students finished too fast"
Extensions available:
- Add a "neutral" third category (mixed reviews) — requires retraining
- Track confidence scores and visualize them in Scratch
- Test with reviews from different genres (action vs romance vs horror)
- Try to fool the AI with misleading reviews

---

## Assessment

### Formative (During Lab)
- Circulate during training: do students understand why they're labeling examples?
- Check Scratch projects: are they using the recognise blocks correctly?
- Listen during testing: can they explain why the AI got something wrong?

### Summative (Lab Report)
The `lab-report.md` includes:
- Quantitative accuracy calculation (Section 2)
- Written reflection on ML vs. programming (Section 4.1)
- Bias awareness question (Section 4.2)
- Self-assessment (Section 5)

**Suggested grading:**
- Training completion + accuracy calculation: 40%
- Scratch project functionality: 30%
- Lab report reflections: 30%

---

## Extension Activities

1. **Multi-class classifier:** Add a "neutral" category and retrain
2. **Different domain:** Train a new model on something else (restaurant reviews, product descriptions, tweets)
3. **Bias investigation:** Train two models — one with only 5 examples each, one with 20+. Compare accuracy. What does this show?
4. **Creative writing:** Write a review specifically designed to fool the AI — then explain your strategy

---

## Connections to Standards

- **CSTA K-12 CS Standards:** 3A-AP-13 (decompose problems), 3A-DA-11 (training data)
- **NGSS:** Science & Engineering Practices (data analysis, testing hypotheses)
- **Common Core ELA:** Writing informative text (lab report), evidence-based analysis

---

## Notes from Field Testing

> *"The moment students saw the AI correctly classify a review they'd never seen, there was always an 'oh wow' reaction. Protect that moment — don't over-explain before it happens."*

> *"The ambiguous test set (Test Set C) generates the best discussions. Students argue genuinely about whether 'I didn't hate it' is positive or negative. That's the real learning."*

> *"IBM Watson occasionally has slowdowns on Friday afternoons. Have a fallback plan (show a pre-trained demo, or let students design their training data on paper and train it later)."*
