# Module 4 Teacher Guide: Give Your Agent the Ability to Learn

**For Educators Without a CS or AI Background**
**Grade Level:** 6–8 | **Duration:** ~3 weeks (15 class periods)
**Last Updated:** March 2026

---

> **The big moment of this module is the Train-Integrate Lab.** Students have used AI, shaped AI, and fed AI knowledge. Now they train one. When a student shows their agent a gesture it has never seen — and the agent names it correctly because of *data the student collected* — that's the unlock. Keep that destination in view from Day 1.

---

## Table of Contents

1. [Module Overview + Arc Context](#1-module-overview--arc-context)
2. [AI4K12 Alignment: Big Idea 3 — Learning](#2-ai4k12-alignment-big-idea-3--learning)
3. [Prerequisites & Technical Setup](#3-prerequisites--technical-setup)
4. [Materials Checklist](#4-materials-checklist)
5. [Day-by-Day Pacing Guide](#5-day-by-day-pacing-guide)
6. [Facilitation Tips Per Lesson](#6-facilitation-tips-per-lesson)
7. [The Train-Integrate Lab: Teacher Setup Guide](#7-the-train-integrate-lab-teacher-setup-guide)
8. [Differentiation Strategies](#8-differentiation-strategies)
9. [Common Student Questions + Teacher FAQ](#9-common-student-questions--teacher-faq)
10. [Cross-Subject Connections](#10-cross-subject-connections)

---

## 1. Module Overview + Arc Context

### Module 4 in the Arc: "Build Your AI Assistant"

Students are building a personal AI assistant across 7 modules. Module 4 is the technical heart of the curriculum — the moment where "machine learning" stops being a buzzword and becomes something students have done.

| Module | Capability Unlock | Student's Agent After |
|--------|------------------|-----------------------|
| 1 | Identity | Has a name and personality |
| 2 | Perception | Can see images and hear audio |
| 3 | Knowledge | Has a custom knowledge base |
| **4** | **Learning** | **Includes a model the student trained** |
| 5 | Voice / Communication | Connects to a live channel |
| 6 | Ethics | Has guardrails and usage policy |
| 7 | Presentation | Demoed at AI Expo |

### How M4 Connects M3 → M5

**From M3 (Knowledge):** In M3, students built a knowledge base by hand — writing SKILL.md files with facts they curated themselves. That process was deliberate: it gave students a concrete understanding of what "structured knowledge" is. M4 asks: *what if the machine could build some of that knowledge itself, from examples?* The contrast between hand-curated knowledge (M3) and machine-learned knowledge (M4) is the central insight. Return to it explicitly.

> "In M3, you wrote down every rule. In M4, the machine figures out the rules from the data you give it. You're still in charge — you choose what data to collect. The machine finds the pattern."

**Into M5 (Communication):** In M5, students will connect their agent to a live channel and work on natural language interaction. The model they train in M4 can become a *capability* their agent uses during those live interactions — detecting emotion, gesture, or custom sounds. If M3 gave the agent memory, M4 gives it a new sense. M5 puts all of it in front of an audience.

### Big Ideas

Three ideas anchor Module 4:

1. **Learning requires examples, not rules.** Traditional programming tells the computer exactly what to do. Machine learning shows the computer examples of what to do — and the computer figures out the pattern. This is a paradigm shift students need to feel, not just hear.

2. **Data is the most important ingredient.** A more sophisticated model trained on bad data loses to a simple model trained on great data. The quality, quantity, and diversity of training data determine what the model actually learns. Students will feel this acutely when their poorly-balanced dataset produces a biased model.

3. **Accuracy ≠ understanding.** A model with 95% training accuracy might be memorizing, not learning. Testing on *unseen* examples is the only honest measure. Students discover the difference between a model that learned and a model that cheated.

### Learning Goals

By the end of Module 4, students will be able to:

- Explain the ML training loop: data → train → evaluate → iterate
- Collect or curate a labeled dataset for a classification problem they defined
- Train a model using Teachable Machine (or equivalent) and evaluate its accuracy
- Explain the difference between training accuracy and real-world performance
- Describe at least two ways biased or unbalanced training data harms a model's outputs
- Integrate their trained model into their OpenClaw agent as a new capability
- Test their integrated model and document where it works and where it fails

### Pacing Recommendation

| Format | Duration | Sessions |
|--------|----------|---------|
| Standard (5×/week) | 3 weeks | 15 class periods |
| Sprint (compressed) | 1 week | 5–6 sessions |
| Extended (2–3×/week) | 4–5 weeks | 15+ sessions |

**Minimum viable module:** If time is tight, the non-negotiables are:
- Lesson 4.1 (the training loop concept)
- Lesson 4.3 (data quality and overfitting)
- The Train-Integrate Lab (2–3 sessions)
- Lesson 4.5 (ethics and reflection)

Everything else enriches the core — but those four cover the essential understanding.

### Essential Questions

1. What does it actually mean for a machine to "learn"? What changes inside the model?
2. Why does the quality and diversity of training data matter so much?
3. How do you know if your model learned something real — or just memorized the training examples?
4. What happens when you integrate a model you trained into a larger system? What can go wrong?

---

## 2. AI4K12 Alignment: Big Idea 3 — Learning

### The Five Big Ideas in AI (Brief Primer)

AI4K12 is the national framework for K–12 AI education. It identifies five "Big Ideas" all students should understand:

1. **Perception** — How AI senses the world (Module 2)
2. **Representation & Reasoning** — How AI structures and reasons about knowledge (Module 3)
3. **Learning** ← *This is Module 4*
4. **Natural Interaction** — Language and communication (Module 5)
5. **Societal Impact** — Ethics, fairness, consequences (woven throughout)

### Big Idea 3: Learning

The AI4K12 description: *"Computers can learn from large amounts of data, but the type of learning is different from how humans learn."*

This Big Idea breaks into four connected concepts students should understand:

**What learning means for machines:** AI systems improve at tasks by adjusting internal parameters (weights) in response to training examples. Unlike human learning, which is continuous and contextual, ML training happens in a defined loop: forward pass → loss calculation → backward adjustment → repeat.

**The role of data:** Training data shapes everything the model learns — including biases present in the data. Students must understand that the model doesn't "know" anything beyond what its training data showed it.

**The generalization problem:** A model that performs well on training data but poorly on new data has overfit. The goal isn't memorization — it's generalization. This is the hardest concept in the module for most students.

**Human oversight:** Humans decide what problem to solve, what data to collect, what counts as "good enough" accuracy, and how to deploy the model. The algorithm doesn't make those choices.

### Specific AI4K12 Progression Points Addressed

| Grade Band | Progression Point | Where in M4 |
|------------|------------------|-------------|
| 6–8 | Students can explain that ML systems learn from labeled examples | Lesson 4.1 |
| 6–8 | Students understand the concepts of training and testing datasets | Lessons 4.1–4.3 |
| 6–8 | Students can identify how biased data leads to biased models | Lesson 4.3 + Data Audit |
| 6–8 | Students can train a simple classification model and evaluate it | Train-Integrate Lab |
| 9–10 | Students understand overfitting and techniques to reduce it | Lesson 4.3 + extensions |

### CSTA Standards Addressed

| Standard | Description | M4 Lesson |
|----------|-------------|-----------|
| 2-DA-07 | Represent data using multiple encoding schemes | Lesson 4.1 |
| 2-DA-08 | Collect data using computational tools and transform it to make it more useful | Lab |
| 2-AP-12 | Design and iteratively develop programs that combine control structures | Lab |
| 2-IC-21 | Discuss issues of bias and accessibility in the design of existing technologies | Lessons 4.3, 4.5 |
| 3A-DA-11 | Create interactive data visualizations | Lab data audit |
| 3A-IC-24 | Evaluate the ways computing impacts personal, ethical, social, economic, and cultural practices | Lesson 4.5 |

---

## 3. Prerequisites & Technical Setup

### Student Prerequisites

Students should have completed:

- ✅ **Module 1** — Students can describe AI in their own words and have an active OpenClaw instance
- ✅ **Module 2** — Students understand how AI "sees" using features extracted from data
- ✅ **Module 3** — Students have built a custom SKILL.md and understand what a knowledge base is

**The critical conceptual bridge from M3:** Students who deeply understood M3's feature extraction will find M4 easier. The feature vector concept (representing objects as numbers) is the foundation of how Teachable Machine works. If students are shaky on features, do a quick 10-minute review at the start of Lesson 4.1.

**Minimum bar for M4 readiness:** A student who can open their OpenClaw agent, explain what a feature is, and describe what their M3 skill does is ready for M4.

**If some students haven't finished M3:** They can still participate in the Train-Integrate Lab using a shared class agent or a paper-based simulation. The conceptual learning is intact. Only the integration step requires a working OpenClaw setup.

### For You (The Teacher)

Before teaching M4:

- [ ] **Read this guide fully** — 45–60 min
- [ ] **Create a free Teachable Machine account** at [teachablemachine.withgoogle.com](https://teachablemachine.withgoogle.com) — takes 5 minutes
- [ ] **Train your own small model before teaching** — spend 20 minutes making a gesture classifier or image classifier with 3 classes. Experience the training loop yourself. This is the single most valuable prep you can do.
- [ ] **Skim the ML for Kids setup** at [machinelearningforkids.co.uk](https://machinelearningforkids.co.uk) — if using this as an alternative (see below)
- [ ] **Watch one short video:** Search YouTube for "3Blue1Brown But what is a neural network?" — 19 minutes, beautifully animated, no math required

**After training your own model, you will be able to say:**
> "I tried this myself. Here's what surprised me. Here's where I got stuck. Here's what happened when I used bad data."

That credibility is worth more than any technical expertise.

### Technical Setup Checklist

**Accounts and Access (complete at least one week before start):**

- [ ] Create a teacher Teachable Machine account and test it
- [ ] Confirm student devices can access [teachablemachine.withgoogle.com](https://teachablemachine.withgoogle.com) — check school network/firewall
- [ ] If using ML for Kids: create a class account at [machinelearningforkids.co.uk](https://machinelearningforkids.co.uk) and create student accounts in advance (takes 30+ min for a class)
- [ ] If using Python notebooks (advanced path): confirm Jupyter Notebook or Google Colab access; test the starter notebook in `tutorial-ml-for-kids/notebook/` on a student device
- [ ] Test your OpenClaw integration path: can you export a Teachable Machine model and reference it in an OpenClaw skill?

**Hardware Requirements:**

- [ ] Webcam or built-in camera on student devices (required for image/gesture classifiers; optional for text/audio classifiers)
- [ ] Microphone (only needed for audio classifier projects)
- [ ] Charging cables or power access — Teachable Machine training can drain laptops faster than normal browsing

**Network Requirements:**

- [ ] [teachablemachine.withgoogle.com](https://teachablemachine.withgoogle.com) is accessible (not blocked)
- [ ] [machinelearningforkids.co.uk](https://machinelearningforkids.co.uk) is accessible (alternative)
- [ ] Google Colab accessible if using Python notebook path
- [ ] Download bandwidth: students will export trained models (typically 5–50MB per model)

**Before Each Lab Day:**

- [ ] Test Teachable Machine on a student device (camera permissions, training speed)
- [ ] Have the teacher model you trained as a live demo ready
- [ ] Know which students need extra scaffolding (check with ELL support, IEP coordinator)
- [ ] Have the paper fallback plan ready (see Section 7)

---

## 4. Materials Checklist

**Print at least one week before your start date.** Items marked ★ are needed for the first lesson.

### Physical Materials

| Item | Quantity | Used In |
|------|----------|---------|
| ★ Whiteboard / display projector | 1 per room | Every lesson |
| ★ Sticky notes (3+ colors) | 1 pad each color per class | Lessons 4.1, 4.3, 4.5 |
| Index cards | 2 per student | Data collection activity, exit tickets |
| Markers | 1 set per group | Activities throughout |
| Printed "Training Data Collector" worksheet | 1 per student | Lab Day 1 |
| Printed "Model Evaluation" worksheet | 1 per student | Lab Day 2 |
| Printed "Data Audit" worksheet | 1 per student | Lab Day 2–3 |
| Printed "What Went Wrong?" reflection cards | 1 per student | Lab Day 3 |
| Optional: sticky labels for physical data collection | 1 sheet per pair | Lesson 4.2 analog activity |

### Digital Materials (on student devices)

| Resource | Location |
|----------|----------|
| Tutorial: How AI Learns | `tutorial-how-ai-learns/` |
| Tutorial: ML for Kids | `tutorial-ml-for-kids/` |
| Teachable Machine (external) | [teachablemachine.withgoogle.com](https://teachablemachine.withgoogle.com) |
| ML for Kids (external, alternative) | [machinelearningforkids.co.uk](https://machinelearningforkids.co.uk) |
| Lab: Train a Model, Integrate It | `lab-integrate-your-model/` |
| Lab: Sentiment Classifier | `lab-sentiment-classifier/` |
| Lab: Bias Testing | `lab-bias-testing/` |
| Quiz: ML Concepts | `quiz-ml-concepts/` |
| Interactive Training Simulator | `interactive-training-simulator/` |
| Discussion Forum prompts | `discussion-forum/` |
| Module assessments | `assessments/` |

### Teacher-Only Materials

| Resource | Location |
|----------|----------|
| Answer keys | `assessments/answer-keys/` |
| Lab teacher guide (detailed) | `lab-integrate-your-model/teacher-guide.md` |
| This teacher guide | `module4/teacher-guide/teacher-guide.md` |

---

## 5. Day-by-Day Pacing Guide

> **Timing:** All lessons designed for 50-minute class periods. Adjust for block scheduling by roughly doubling activity depth. For shortened periods (40–45 min), cut the warm-up or extension.

---

### Standard Pacing — 3 Weeks (15 Days)

#### Week 1: Understanding the Training Loop

##### Day 1 — Lesson 4.1, Part 1: What Does It Mean to Learn?

**Goal:** Build intuition for the training loop; contrast machine learning with rule-based programming and M3 knowledge bases.

- (10 min) Opening hook: "How did you learn to ride a bike? Can you write down every rule?" — partner discussion, then class share
- (15 min) Direct instruction: the training loop — data → train → evaluate → iterate. Draw it on the board. Leave it there all module.
- (10 min) Contrast with M3: "Last module you wrote the rules. Today — what if you showed examples instead?"
- (10 min) Interactive Training Simulator demo (whole-class, teacher drives) — show training happening in real time
- (5 min) Exit ticket: "In your own words, what does it mean for a computer to 'learn'?"

**Teacher checkpoint:** Collect exit tickets. Skim for the "it just memorizes" framing — that's a misconception to address tomorrow.

---

##### Day 2 — Lesson 4.1, Part 2: Training, Testing, and Why You Need Both

**Goal:** Introduce the concept of training vs. test data; plant the seed of overfitting.

- (5 min) Return to exit tickets: share 2–3 interesting student definitions anonymously
- (15 min) Direct instruction: What is training data? What is test data? Why can't you test on training data? (Use the "studying for the exam vs. taking the exam" analogy)
- (15 min) "Memorizer or Learner?" activity — students role-play as a model: given flashcards (training data), can they answer novel questions (test data)?
- (10 min) Introduce overfitting: what happens when you memorize the training data instead of the pattern?
- (5 min) Exit ticket: "What's the difference between a model that learned and a model that cheated?"

---

##### Day 3 — Tutorial: How AI Learns + First Teachable Machine Demo

**Goal:** Students see a real model train in real time; everyone gets hands on a keyboard.

- (5 min) Setup: everyone opens Teachable Machine (confirm access)
- (10 min) Teacher demo: train a 3-class gesture classifier live in front of class. Narrate every step. Make a mistake deliberately.
- (25 min) Self-paced: `tutorial-how-ai-learns/` — students follow tutorial and train their first model (they don't need to keep this one — it's just practice)
- (10 min) Share-out: "What surprised you? What confused you? What happened when you didn't give it enough data?"

**Likely tech trouble:** Camera permissions. Have a step-by-step permission guide printed. This is the single most common blocker.

---

##### Day 4 — Lesson 4.2: Labeled Datasets

**Goal:** Students understand what labeled data is, why it's hard to produce, and how labeling decisions shape what a model learns.

- (5 min) Warm-up: show an unlabeled image dataset — can the model learn from this? Why not?
- (20 min) Lesson 4.2 core: what is a label, what is a class, what is class balance? — discussion + examples
- (15 min) "Label This" activity — students label a small shared dataset (10–15 images or items) and discover how quickly labelers disagree
- (10 min) Discussion: "Who labels the data behind the AI tools you use? How much does that cost? Who decides what labels exist?"

**Teacher note:** The labeling disagreement moment is powerful. When students can't agree on whether a photo shows "happy" or "neutral," they've understood why dataset quality is hard. Don't rush past it.

---

##### Day 5 — Lesson 4.2 + Student Project Scoping

**Goal:** Students choose their ML classification problem; teacher validates scope before building begins.

- (5 min) Review: the training loop + labeled datasets — quick quiz-game warmup
- (20 min) Project brainstorm: students choose their classification problem. What will your model distinguish?
- (15 min) Scope validation: students pitch their project idea to a partner, then to you. Four criteria: (1) 3+ distinct classes, (2) collectable data with available equipment, (3) demoable in class, (4) appropriate for school. Approve before they collect data.
- (10 min) Preview next week: data collection, training, testing, and integration

**Good project ideas:** gesture classifier (rock/paper/scissors), facial expression (happy/sad/surprised), sound classifier (snap/clap/whistle), custom image categories tied to their M3 skill topic, text sentiment (positive/negative/neutral).

**Projects that need redirection:** Anything requiring students to capture images of other students without consent. Anything with protected characteristics (race, gender presentation) as the classification target. Anything requiring data you can't collect in school.

---

#### Week 2: Data, Training, and Evaluation

##### Day 6 — Data Collection Workshop, Part 1

**Goal:** Students collect training data for their model; experience the labor of data creation.

- (5 min) Data collection norms: consent, quality vs. quantity, class balance
- (35 min) Students collect training data using Teachable Machine's capture interface (or manual upload if using pre-existing images)
- (10 min) Reflection: "How many examples do you have per class? Are they balanced? What types of variation did you capture? What variation did you miss?"

**Circulate actively.** Watch for: students collecting all examples in the same lighting/position/distance (low variation), wildly unbalanced classes, students capturing images of others without asking.

---

##### Day 7 — Data Collection Workshop, Part 2 + Data Audit

**Goal:** Students audit their training data quality before training begins.

- (5 min) "Why does variation matter?" — quick demo: train on all-similar examples, test on a varied one. Watch it fail.
- (30 min) Students complete the Data Audit worksheet: total examples per class, describe variation captured, identify gaps, note what they'd collect differently
- (15 min) Data Audit pair-share: partners evaluate each other's dataset plans. Give structured feedback: "One strength in your dataset: ___. One gap I notice: ___."

**Teacher note:** The Data Audit is not busywork. Students who complete it carefully train better models. It's also the assessment artifact that shows you whether students understand what good data looks like.

---

##### Day 8 — Training Day

**Goal:** Students train their model; discover that training accuracy is not the whole story.

- (5 min) Reminder: save your model! Name it something specific. Export it.
- (35 min) Students train their model in Teachable Machine, test against new examples they haven't trained on, document their accuracy
- (10 min) Discussion: "Who got 100% training accuracy? Does that mean your model is perfect? Let's test on something it's never seen."

**What if it's slow?** Teachable Machine training is usually 30–60 seconds. If a student's machine is very slow, have them start training and move to the reflection while it runs.

---

##### Day 9 — Lesson 4.3: Overfitting, Data Bias, and What Accuracy Really Means

**Goal:** Students learn why high training accuracy doesn't guarantee good real-world performance.

- (5 min) Warm-up: show two student models — one with 95% training accuracy but poor real-world performance, one with 85% training accuracy but solid real-world performance. Which is better?
- (20 min) Lesson 4.3 core: overfitting, underfitting, the bias-variance tradeoff (conceptually), data augmentation
- (15 min) "Why Did It Fail?" pairs: students test their own model on 5 novel examples, document where it works and fails, hypothesize why
- (10 min) Journal entry: "What would you change about your training data if you could start over?"

---

##### Day 10 — Iteration: Improve Your Dataset, Retrain

**Goal:** Students experience the training loop as a loop — not a one-time event.

- (5 min) "What are you changing?" — each student states one specific change they're making to their dataset or training
- (30 min) Students update their training data and retrain
- (10 min) Compare accuracy before and after: did the change help? Why or why not?
- (10 min) Preview: integration. "Your model is good enough to connect to your agent. Let's do that."

---

#### Week 3: Integration, Testing, and Reflection

##### Day 11 — Lab Day 1: The Train-Integrate Lab Introduction + Setup

**Goal:** Students understand the integration goal and set up the connection between trained model and OpenClaw agent.

*(See Section 7 for full lab teacher setup guide.)*

- (15 min) Lab intro: what does "integration" mean? Demo: teacher's trained model running as part of their agent
- (30 min) Students follow `lab-integrate-your-model/` step 1 and 2 — export model, create skill wrapper
- (5 min) Preview Day 12: testing the integration end-to-end

---

##### Day 12 — Lab Day 2: Integration + End-to-End Testing

**Goal:** Students complete integration and run end-to-end tests.

- (40 min) Students complete integration and run at least 5 end-to-end tests (use the "Model Evaluation" worksheet)
- (10 min) Document results: what worked, what failed, how does the integrated model compare to the standalone model?

---

##### Day 13 — Lab Day 3: Polish + Bias Testing

**Goal:** Students test their integrated model for bias and document failure modes.

- (5 min) Frame: "You've built something. Now break it — intentionally. Find where it fails. That's responsible engineering."
- (35 min) `lab-bias-testing/` — students systematically test their model across variations (lighting, angle, background, person, voice pitch, etc.) and document results
- (10 min) Reflection: "Who would be harmed if your model was deployed as-is? What would you need to fix?"

---

##### Day 14 — Lesson 4.5: The Human Side of Machine Learning + Ethics

**Goal:** Connect the lab experience to the broader societal context of ML training.

- (5 min) Warm-up: "What would it take to train a model as good as the ones inside Google Photos or Face ID?"
- (20 min) Lesson 4.5: the human cost of training data — labeling labor, data collection ethics, who provides the data and who profits
- (15 min) Discussion: "Is a model you trained on data from the internet just using other people's work without asking? Is that different from how humans learn?"
- (10 min) Exit ticket: "One thing you would do differently if you were building a real-world ML system."

---

##### Day 15 — Module 4 Showcases + Reflection

**Goal:** Students demonstrate their trained, integrated models; celebrate what was built.

- (5 min) Setup — normalize that live demos sometimes fail. That's okay.
- (35 min) Rapid-fire showcases: each student/pair gets 2 minutes — "Here's what I trained, here's what it can do, here's where it fails." Time it.
- (10 min) Module close: "What is your agent now capable of that it wasn't before M4? What's left? What comes next in M5?"

---

### Sprint Pacing — 1 Week (5–6 Days)

Use this when time is tight. You'll compress hard — prioritize the lab experience over conceptual depth.

| Day | Focus | What to Cut |
|-----|-------|-------------|
| Day 1 | Training loop concept + Teachable Machine demo | Skip "Memorizer or Learner?" activity; use lecture only |
| Day 2 | Data collection + Data Audit | Skip "Label This" activity; assign Data Audit as homework |
| Day 3 | Train + Test | Combine with Day 2 if possible |
| Day 4 | Integration (Lab) | Skip bias testing; focus on working demo |
| Day 5 | Showcase + Ethics reflection | Combine showcase with a brief discussion |

**What you cannot cut in a sprint:**
- The moment of training (students must do this themselves)
- The data audit (without it, students miss the core insight)
- The integration (without it, M5 has no foundation)

---

### Extended Pacing — 4 Weeks (20 Days)

Use this for deeper engagement, block scheduling, or when students need more processing time.

| Week | Focus |
|------|-------|
| Week 1 | Concept-heavy: training loop, labeled data, overfitting — go deep |
| Week 2 | Data collection, iteration, comparison of multiple datasets |
| Week 3 | Integration lab + bias testing + ethics discussion |
| Week 4 | Refinement, peer review, showcases, + extension projects (sentiment classifier, Python notebook path) |

**Extensions for extra time:**
- `lab-sentiment-classifier/` — a second lab using text data instead of images/audio
- Python notebook path in `tutorial-ml-for-kids/notebook/` — for classes with coding experience
- Research project: investigate a real-world ML failure (medical misdiagnosis, hiring bias, autonomous vehicle accident) and present findings
- Guest speaker: a local ML engineer, data scientist, or AI researcher

---

## 6. Facilitation Tips Per Lesson

> This section is your preparation for the moments in class that are hardest to navigate — questions that stumped teachers last year, conversations that went sideways, and misconceptions that keep coming up.

---

### Lesson 4.1 — What Does It Mean to Learn?

#### Common Misconceptions

| Misconception | What Students Say | How to Address It |
|--------------|------------------|-------------------|
| "It's just memorization" | "The computer just stores the photos" | Close! But training changes the model's *weights* — the internal numbers. After training, the model can recognize photos it's never seen. Pure memorization can't do that. |
| "It learns like a human" | "It understands what a cat looks like" | It finds mathematical patterns. It doesn't understand cats — it finds pixel configurations that correlate with the label "cat." Ask: "What happens when you show it a cat in a costume? Does it 'understand' it's still a cat?" |
| "More data = always better" | "Just feed it everything" | More good data helps. More bad data can hurt. And after a certain point, the marginal gain from more data shrinks. This will come back in Lesson 4.3. |
| "The model learns what *I* care about" | "It knows what I want" | It learns correlations from data. If your training images of cats always have blue backgrounds, it might "learn" that blue backgrounds mean cats. |

#### Tough Questions

**"How does it actually change inside? What are weights?"**
> Keep it intuitive: "Think of weights as volume knobs — hundreds of thousands of them. Each knob controls how much attention the model pays to a particular pattern. Training turns those knobs, slowly, in response to mistakes. After many examples, the knobs are tuned to the patterns that matter."

**"Is this the same as how ChatGPT learned?"**
> "Same general idea — a feedback loop, adjustments, millions of examples. ChatGPT used a much more complex version of the same basic process, on a vastly larger dataset. Your Teachable Machine model does it visibly, in 30 seconds. ChatGPT's training took months on thousands of powerful computers."

**"Can a model unlearn something?"**
> "Yes, but it's expensive — you'd typically retrain from scratch on updated data. This is a real problem: what do you do when a model has learned something wrong or harmful? You can't just erase one lesson. This is called the 'machine unlearning' problem, and it's an active research area."

#### Energy Management

Lesson 4.1 is the most conceptually dense lesson in the module. Break it up every 10–12 minutes with a pair-share or physical activity. The "Memorizer or Learner?" activity on Day 2 is high-energy — lean into it.

---

### Lesson 4.2 — Labeled Datasets

#### Common Misconceptions

| Misconception | How to Address It |
|--------------|-------------------|
| "Labeling is just clicking buttons — easy" | The "Label This" activity will fix this faster than any lecture. Students who disagree about a label understand immediately why this is hard. |
| "The labels are objective" | Labels are human decisions. "Happy" vs. "content" vs. "neutral" — where's the line? Different labelers draw it differently. This is where dataset bias enters. |
| "AI automatically knows what labels mean" | Labels are just strings. "Cat" and "dog" mean nothing to the model — it's just learning that certain pixel patterns correlate with one string vs. another. |
| "Bad data is obvious" | Often it isn't. Biased data looks fine. The problem only appears when you test in new contexts. |

#### Tough Questions

**"Who labeled all the images that trained Teachable Machine?"**
> "Teachable Machine's base model (MobileNet) was pre-trained on ImageNet — over a million images labeled by workers, often crowdsourced platforms like Amazon Mechanical Turk. Workers are paid pennies per label. The AI companies profit enormously. That labor is mostly invisible — which is one of the issues people are pushing to change."

**"Can I use data from the internet for my model?"**
> "Depends on the source. Creative Commons images — yes. Copyrighted images — legally complicated. Personal photos posted publicly — ethically complicated even if technically 'public.' Real ML teams have entire legal departments for these questions. For class, use your own data or labeled educational datasets."

**"What if my classes are really similar — like happy vs. very happy?"**
> "Good observation. Fine-grained distinctions are genuinely hard for ML. The model needs clear, consistent visual differences between classes. If humans can barely tell the classes apart from the examples, the model will struggle too. This is why class definition is a design decision, not just a technical one."

#### Where Students Get Stuck

- **Class definition:** Students choose classes that are too similar ("slightly smiled" vs. "big smile") or too broad ("all emotions" as one class). Review class definitions before data collection begins.
- **Not enough examples:** Teachable Machine can technically train on very few examples, but the model quality degrades. Push for 30+ examples per class.
- **All examples look the same:** Students hold their face in the same position for every photo. Point out that the test environment will be different — varied lighting, angles, distances.

---

### Lesson 4.3 — Overfitting, Bias, and Accuracy

#### Common Misconceptions

| Misconception | How to Address It |
|--------------|-------------------|
| "100% accuracy means a perfect model" | "100% training accuracy is a warning sign, not a trophy. It usually means the model memorized, not learned. What's the test accuracy?" |
| "Low accuracy means the model is wrong" | "Depends on the baseline. If random chance gives 50% accuracy, 65% is meaningful. If random chance gives 90% (very unbalanced classes), 92% might not be telling you much." |
| "Overfitting is a bug I can fix" | "It's more like a tension to manage. More data helps. Stopping training earlier helps. Better regularization helps. But it's a fundamental challenge — not a mistake in your code." |
| "Bias only affects models with protected classes" | "Bias can affect anything. A gesture classifier trained only on right-handed people will be biased against left-handed users. A plant classifier trained in California will be biased against plants that only grow elsewhere." |

#### Tough Questions

**"What's the point of training accuracy if it doesn't tell us how good the model is?"**
> "Training accuracy tells you the model converged — it learned *something*. Validation accuracy tells you if it generalized. You need both. Training accuracy with no validation is like acing a practice test and never taking the real one."

**"How much accuracy is 'good enough'?"**
> "Depends entirely on the stakes. A spam filter that's 90% accurate is mostly fine — missing some spam or filtering good mail is annoying but not catastrophic. A medical diagnosis model that's 90% accurate may be dangerously wrong 10% of the time. 'Good enough' is a human judgment, not a number."

**"Why do models fail on different demographics?"**
> "Two main reasons: (1) the training data didn't include enough examples from that demographic, or (2) the demographic group was labeled differently by labelers. Both are data problems. Both produce models that work better for whoever was well-represented in the data. This is why dataset diversity matters."

#### Where Students Get Stuck

- Understanding that training and test data must be separate. Make this concrete: "Would you study using the exact test questions? That's not learning — it's cheating. Your model needs to 'take the test cold' on data it's never seen."
- The difference between high accuracy and correct classification. A model can be 90% accurate and still fail badly on the one class that matters most.

---

### Tutorial: How AI Learns + Teachable Machine

#### Practical Facilitation Tips

**Before opening Teachable Machine:**
- Confirm camera permissions are allowed in the browser settings (this will block 15–20% of students otherwise)
- Have students move slightly away from each other — overlapping faces in the webcam feed cause confusion
- Tell students to choose a *simple* gesture or expression for the tutorial — don't get fancy yet

**During training:**
- The training progress bar takes 20–60 seconds. Students will try to talk to their neighbors. Use this time: "While it trains, what do you think is happening inside? What are the weights doing?"
- If training is taking very long: close other browser tabs, reduce image resolution, try a different device

**After training — what to test:**
- First: test with the gesture/expression they trained on. Should work.
- Then: test in different lighting. Often fails.
- Then: test with a variation they didn't include. Often fails.
- Then: ask "why did it fail?" — that's the lesson.

**What to do when the model does something weird:**
> "This is not a failure — it's data. What does the model think that gesture is? Why might it think that? What would you add to your training data to fix it?"

---

### Lesson 4.5 — The Human Side of Machine Learning

#### Common Misconceptions

| Misconception | How to Address It |
|--------------|-------------------|
| "AI companies create training data" | "They mostly buy it — or collect it from users who don't know it's being used. The actual labeling is often done by low-wage workers in the Global South, paid cents per image." |
| "Once trained, the model is done" | "Models need retraining as the world changes. GPT models become outdated. Face recognition models trained before masks fail on masked faces. Maintenance is ongoing and expensive." |
| "Open source models are free" | "Free to use, but the training was massively expensive — compute, human labor, data collection. Someone paid. Usually a large company, often subsidized by investors hoping to profit later." |
| "If data was public, using it is fine" | "Legally complicated, ethically contested. Artists have sued AI companies for training on their work. Photographers. Writers. The law is catching up, but it's not there yet." |

#### Handling the "Copyright and AI" Conversation

This will come up, especially with students who are interested in art or writing. Frame it as a live, unresolved debate:

> "This is genuinely unsettled — even experts disagree. Some argue that AI training is like a human reading a book for inspiration — no law is broken. Others argue it's fundamentally different because the model can reproduce style or content in ways a human can't. Courts are deciding this right now. The honest answer is: nobody knows yet how this will land legally."

---

## 7. The Train-Integrate Lab: Teacher Setup Guide

### Overview

The Train-Integrate Lab is the culminating technical experience of Module 4. Students export their trained model and connect it to their OpenClaw agent as a new skill. The lab spans 3 class periods (Days 11–13).

**Lab deliverables:**
1. A working trained model (Teachable Machine or equivalent)
2. An OpenClaw skill that calls the model
3. A completed Data Audit
4. A Bias Testing report documenting failure modes

### Before Day 11 (Lab Day 1) Checklist

- [ ] Read `lab-integrate-your-model/teacher-guide.md` in full — it has per-step technical notes
- [ ] Train your own demo model (if you haven't already) — the live demo on Day 11 is essential
- [ ] Test the full integration path yourself: train → export → skill wrapper → deploy → query via agent
- [ ] Confirm all student models from Week 2 were saved and exported (check before Day 11 begins)
- [ ] Print Data Audit and Model Evaluation worksheets — one per student
- [ ] Have your Plan B (paper simulation) ready if tools break

### Integration Path: How the Lab Works

The full technical flow:

```
Student trains model in Teachable Machine
           ↓
Exports model files (model.json + weights + metadata)
           ↓
Stores model in their OpenClaw workspace (or accessible URL)
           ↓
Writes a skill wrapper (SKILL.md or skill script) that:
  - Describes when to use this capability
  - Calls the model with user input (image/audio/text)
  - Returns the model's prediction to the agent
           ↓
Agent uses the skill when the user request matches
           ↓
End-to-end test: user asks agent → agent calls model → model returns prediction → agent responds
```

**What "integration" means at different levels:**

| Level | What students do | What they produce |
|-------|-----------------|-------------------|
| Basic | Export model, add reference in SKILL.md, demonstrate prediction | Working demo with manual input |
| Intermediate | Write skill wrapper that calls model API | Agent can invoke model on request |
| Advanced | Agent proactively uses model when relevant input is detected | Seamless capability integration |

For most students, **Basic** is the right target. Advanced students can extend.

### Scaffolding for Different Levels

**Complete Novice (never written a skill before, M3 felt hard):**
- Provide a pre-filled SKILL.md template with `[FILL THIS IN]` placeholders
- Pair with a peer for lab Day 1 — one navigates, one types
- Success metric: they can describe what their model does and demonstrate it working
- Assessment: emphasize the Data Audit and reflection over the technical implementation

**Intermediate:**
- Provide the template but ask them to write the description section from scratch
- Require at least 5 documented tests with results
- Challenge: "What happens when someone gives your model an input from outside your training classes?"
- Success metric: working integration + documented failure modes

**Advanced:**
- No template — design the integration from the skill specification
- Challenge: can you chain your trained model with your M3 knowledge base? When the model classifies something, have the agent look it up in the knowledge base.
- Research extension: read the Teachable Machine documentation and implement one feature not covered in class
- Success metric: working integration with original design decisions + can explain why each choice was made

### What to Do If Tools Break

**Teachable Machine won't load:**
1. Check network — firewall may be blocking it. Have IT contact ready.
2. Try a different browser (Chrome works most reliably).
3. Try ML for Kids as an alternative (same concepts, different interface).
4. **Paper fallback:** Students design their model (define classes, describe training data, predict accuracy) without building it. Partner plays the model using the design specification.

**Model export fails:**
1. Save the Teachable Machine project URL (it auto-saves to Google account if logged in).
2. Try "Download my model" instead of "Upload my model to the cloud."
3. If download fails: have students screenshot their model's performance metrics and use those for the Data Audit and evaluation.

**OpenClaw integration doesn't work:**
1. Check that the model file is accessible from where OpenClaw is running.
2. Test the skill wrapper with a hardcoded response first — confirm the skill itself is working before adding the model call.
3. **Plan B:** Students demo their model standalone in Teachable Machine and narrate how it would work integrated. This is a valid demonstration of understanding.

**Everything is broken and nothing works:**
Run the Paper Simulation protocol:
- Student reads their SKILL.md aloud
- Partner "plays the agent" — given the SKILL.md instructions, how would you respond to the user?
- Student role-plays the user and tests the interaction
- Both document what worked and what didn't

This sounds low-tech — but it surfaces exactly the same design issues as real testing. Students who complete the paper simulation understand integration better than students who copy-pasted a working script.

### Teacher Circulation Strategy During Lab

**Lab Day 1 (Days 11):**
- Minutes 0–5: Don't circulate — let students start independently
- Minutes 5–20: Circulate and confirm every student knows their three lab deliverables
- Minutes 20–35: Focus on students who are stuck at the model export step
- Minutes 35–45: Check integration setup; troubleshoot blockers before next session

**Lab Day 2 (Day 12):**
- Focus on end-to-end testing. Ask every student: "Show me one case where your model works and one case where it fails."
- If they can only show success: "Now test on something at the edge. Lower light. Different angle. Different person."
- Praise specific design decisions: "I like how you included examples with different backgrounds — that was thoughtful."

**Lab Day 3 (Day 13 — Bias Testing):**
- This is the reflection lab. Slow down. Quality of thinking matters more than more data.
- Ask: "Who would be harmed if your model was deployed to real users? Have you tested for them?"
- Ask: "What's one thing you'd change if you had two more days?"

### Rubric Guidance

*Full rubric in `lab-integrate-your-model/teacher-guide.md`*

Weight these outcomes most heavily:
- **Understanding (40%):** Can the student explain what their model learned? What data they used? Why it works where it works and fails where it fails?
- **Design process (30%):** Did they iterate? Complete the Data Audit? Document failure modes?
- **Technical execution (30%):** Does the integration work? (Full credit for a documented paper simulation if tools were inaccessible.)

A student with a broken demo who can explain exactly why it broke and what they'd fix has demonstrated more learning than a student with a working demo who can't explain their choices.

---

## 8. Differentiation Strategies

### English Language Learners (ELL)

| Strategy | When | How |
|----------|------|-----|
| Visual vocabulary cards | Every lesson | Provide cards for: *training data, label, class, accuracy, overfitting, feature, model, prediction* — include images illustrating each concept |
| Bilingual support | Lab days | Allow data collection and notes in L1 before translating to English for submission |
| Sentence frames | Discussions and exit tickets | "My model learned to ___." / "The training data included ___." / "My model failed when ___ because ___." |
| Visual tasks | Lesson 4.2 | The "Label This" activity is inherently visual — ELL students often shine here |
| Native language domain expertise | Project selection | Students who are experts in a topic in their L1 can build a classifier related to that domain — the ML concepts are the same regardless of the topic |
| Spoken assessment option | All | Allow verbal explanation of Data Audit and model results instead of written |

**Lab-specific ELL support:** Teachable Machine's interface is mostly visual and interactive — it requires less reading than other tools. This is often an advantage for ELL students.

### Advanced Learners

| Extension | Activity | Challenge Level |
|-----------|----------|-----------------|
| Python notebook path | `tutorial-ml-for-kids/notebook/` | Advanced — requires comfort with code |
| Sentiment Classifier lab | `lab-sentiment-classifier/` | Intermediate-Advanced — text data, different modality |
| Transfer learning concept | Extension reading | Advanced — why Teachable Machine trains fast even with small datasets |
| Adversarial examples | Research | Advanced — what input deliberately fools a classifier? |
| Model chaining | Integration design | Advanced — connect trained model output to M3 knowledge base lookup |
| "Stump the model" design challenge | Lab extension | Any level — systematically find edge cases and document a test battery |

**For your fastest students:** The real advanced challenge is *rigor*, not complexity. Ask them to design a formal test protocol before building — define success criteria, minimum accuracy, edge cases to test, demographic groups to evaluate. Then hold them to it.

### Offline Fallbacks

For classes with limited/no device access:

| Activity | Offline Version |
|----------|----------------|
| Teachable Machine training | "Human Training" simulation — students act as neurons, sorting physical cards |
| Data collection | Physical sorting of printed images into labeled groups |
| Model testing | Paper-based: read 5 novel descriptions aloud, have "model" (another student) classify them using the training examples |
| Lab integration | Paper integration: write the SKILL.md, describe the interaction flow, have partner role-play the agent |
| Bias testing | Structured discussion: "What 5 types of users were NOT represented in our data? How might the model fail for them?" |

**Offline module capstone:** Students write a "Model Proposal" — define the classification problem, describe the training data they would collect, predict expected accuracy, identify potential failure modes, and explain how they'd integrate it into their agent. This is a valid assessment of M4 learning without any technology.

---

## 9. Common Student Questions + Teacher FAQ

### Student Questions

**"Wait — the model isn't in my agent? It's in Teachable Machine?"**
> "Right. The model lives outside your agent until you integrate it. Think of it like a specialty restaurant: the agent is your maître d', who knows when to call on the chef. The chef (your model) lives somewhere else but can be called in when needed. Integration connects them so the maître d' knows when and how to call the chef."

**"Why does my model work great here and fail on someone else's device?"**
> "Lighting, camera quality, angle, background — your model learned from the specific conditions in your training data. It doesn't know to generalize beyond those conditions unless you showed it a variety. This is the generalization problem in miniature. What would you add to your training data to fix it?"

**"Can I use my model for my M5 project?"**
> "Yes — that's exactly the design intention. In M5, when your agent connects to a live channel, your trained capability from M4 can be a feature. If you trained a gesture classifier, users on that channel might be able to send you images and your agent can classify them."

**"My accuracy went down when I added more data. Why?"**
> "Good catch! Adding the wrong data — low-quality examples, mislabeled images, examples that blur the line between classes — can hurt accuracy. More data only helps if it's good data. What did the new data look like? Was it as clean as your original set?"

**"Can AI be trained on private data? Like my messages or photos?"**
> "Yes, and it has been — that's why AI privacy is a big policy issue. Companies have trained models on data scraped from social media, private messages (in some cases), medical records (with consent — sometimes without). The EU's GDPR and other laws are trying to regulate this. The answer to 'should this data be used?' is different from 'can it be used?'"

**"What's better — Teachable Machine or learning to code ML myself?"**
> "Teachable Machine gives you the experience of the training loop without needing to write code. That experience is the point. If you want to understand what's actually happening inside, the Python notebook path will show you. Eventually, production ML systems are written in code — but understanding the concepts first makes the code make sense. You're doing it in the right order."

**"How do real AI companies train their models?"**
> "Much more data (millions to billions of examples), much more computing power (thousands of specialized chips running for weeks), teams of ML engineers tweaking the architecture, and armies of human labelers. The concepts are the same as what you're doing — the scale is just incomprehensible. Google Photos has classified more images than every human who has ever lived has seen."

**"Is my model as good as Google's?"**
> "No. But that's okay — your model does *something specific* that you designed, trained, tested, and integrated yourself. That's something Google's engineers understand: the first model they built was also tiny and limited. The difference is they had 1000 times more data and 100 times more compute. The understanding you're building is the same."

**"Can someone else use my trained model to do something bad?"**
> "If you export it and share it publicly, technically yes. The same model that detects your gesture can be repurposed. This is called 'dual use' — a fundamental challenge in AI safety. For your class project, your model stays in your OpenClaw workspace and isn't publicly accessible. But it's a good question to keep asking about any technology you build."

---

### Teacher FAQ

**Q: I tried Teachable Machine before class and it worked fine, but half the class can't access it. What happened?**
A: School firewalls often block Google services intermittently or based on specific network ports. Have IT verify access specifically from the student network, not just the teacher network. The ML for Kids alternative (`machinelearningforkids.co.uk`) is often accessible when Google isn't. Have that URL ready.

**Q: A student trained a model that classifies students by appearance (race, gender, etc.). How do I handle it?**
A: Intervene before testing begins. Frame it as a design problem, not a discipline issue: "This is actually a real problem ML engineers face — training classifiers on protected characteristics creates legal liability and causes harm. Let's talk about why that is, and then redirect your project to something else." This is a teaching moment, not a crisis — but don't let the model go live.

**Q: Should I grade based on model accuracy?**
A: No. Grading on accuracy creates perverse incentives — students will overfit to get high training accuracy. Grade on: quality of the Data Audit, honest documentation of failure modes, explanation of design decisions, and demonstration that the student understands what the model learned (or didn't). See the rubric in `lab-integrate-your-model/teacher-guide.md`.

**Q: What if a student's model is really bad (50% accuracy)?**
A: Help them diagnose it. Low accuracy usually has a clear cause: too few examples, overlapping classes, inconsistent labeling, low data variation. Walk through the Data Audit with them — it's almost always visible there. A bad model that's been thoughtfully diagnosed and corrected shows more learning than a good model that was accidentally right.

**Q: Students are very excited about their models but the integrations aren't working. Can I just let them demo in Teachable Machine?**
A: Yes, for the Day 15 showcase. The integration is the learning target, but if the integration fails due to a tool issue (not student understanding), the student can demonstrate in Teachable Machine and narrate "here's how it would work connected to my agent." This is a valid demonstration of conceptual understanding.

**Q: The ethics discussion in Lesson 4.5 got into territory about AI and jobs. I'm not sure how to handle it.**
A: This is expected. Use the same framing from M3's ethics discussion: validate the concern, distinguish what we know from what's uncertain, and redirect toward agency. "AI will change what jobs look like — that's true. The question isn't whether to fight that change but how to be prepared. People who understand how AI works will be better positioned than people who don't. That's why you're here."

**Q: Can I skip the bias testing lab (Day 13)?**
A: We strongly discourage skipping it. Students who build a model without testing it for bias will leave M4 thinking their model is better than it is. The bias testing lab is where the hardest lessons land — that good intentions don't prevent harmful outcomes. It's also often the most memorable session of the module.

---

## 10. Cross-Subject Connections

### Mathematics — Statistics and Accuracy Metrics

**The core connection:** Accuracy, precision, recall, and F1 score are applied statistics. Students are calculating ratios, interpreting percentages, and making decisions based on quantitative evidence. This is data analysis, made concrete and motivating.

**Specific connections:**

*Fractions and ratios (6th grade):*
- Accuracy = correct predictions / total predictions. Students calculate this from their test results.
- Class balance: "If 90% of your test examples are Class A, a model that always predicts Class A gets 90% accuracy without learning anything." This is the base rate problem in disguise.

*Percentages and comparisons (6th–7th grade):*
- "Your model improved from 72% to 84% accuracy after adding more training data. How many more examples would you need to reach 90%?" — not answerable with the data, but prompts thinking about diminishing returns.
- Compare accuracy across different demographic groups from bias testing results.

*Introduction to statistics (8th grade / Algebra):*
- Train/test split is random sampling. Why do we randomize? What bias could enter if we didn't?
- Visualizing performance: bar charts of accuracy by class, confusion matrices as tables.

**Classroom tie-in:**
Before Day 8 (Training Day), ask the math teacher if students are in a fractions/percentages or statistics unit. If so, have students calculate their accuracy using fractions first, then convert to percentages. Have them discuss: "Is 85% accuracy good? Compared to what?"

**Vocabulary overlap:** accuracy, sample, population, ratio, percentage, data, bias, error rate

**Standards:** CCSS 6.RP.A.3 (ratios and proportional relationships), CCSS 7.SP.A.1 (use random sampling to draw inferences), CCSS 8.SP.A.4 (two-way tables)

---

### Science — Experimental Design

**The core connection:** Training a machine learning model is a scientific experiment. Students define a question, design a procedure, collect data, run the experiment (training), measure outcomes (accuracy), and iterate based on results. The scientific method maps almost perfectly onto the ML training loop.

**Specific connections:**

*Variables and controls:*
- What is the independent variable when comparing two training datasets? (The data itself.)
- What needs to be held constant? (Same model architecture, same test set, same number of training epochs.)
- Iteration — changing one thing at a time — is a scientific principle students may already know.

*Observation and measurement:*
- What counts as a correct prediction? How do you measure it consistently?
- Students designing their bias tests are designing controlled experiments: "I'll test with 5 examples per lighting condition, holding all other variables constant."

*Claims, evidence, and reasoning:*
- "My model performs worse for left-handed users. Evidence: 60% accuracy vs. 88% for right-handed users. Reasoning: my training data was 80% right-handed examples."

*Scientific humility:*
- "Based on these 20 test examples, I conclude..." — students should qualify their claims based on sample size. This is the same epistemics as scientific practice.

**Classroom tie-in:**
Frame the Data Audit as a "materials and methods" section of a scientific paper. Frame the bias testing as an experiment with hypothesis, procedure, results, and conclusion. If students have a science class, coordinate so they see the parallel explicitly.

**Vocabulary overlap:** variable, control, hypothesis, procedure, data, evidence, conclusion, error, sample size, generalization

**Standards:** NGSS Science and Engineering Practice 3 (planning and carrying out investigations), NGSS SEP-6 (constructing explanations and designing solutions)

---

### English Language Arts — Data as Evidence

**The core connection:** Using data to support claims is a form of argument. Students who train a model and document its performance are, in ELA terms, building an argument with evidence: "My model is good at gesture detection (claim) as shown by 87% accuracy on 50 test examples (evidence) because I collected varied training data across three lighting conditions (reasoning)."

**Specific connections:**

*Argument writing:*
- The bias testing lab produces naturally structured arguments: "This model should not be deployed to Group X because (evidence from bias testing)."
- The Model Evaluation worksheet is a structured claim-evidence-reasoning document.

*Technical writing:*
- A SKILL.md is technical documentation. Clear, precise, unambiguous writing is the same standard whether you're writing code comments, a lab report, or a medical chart.
- Data Audit = materials and methods. It must be precise enough that someone else could replicate your data collection procedure.

*Research and evidence literacy:*
- Where does AI training data come from? Students evaluate sources: "Is a dataset with only US college students representative of all humans? What claims can you make with it?"
- Lesson 4.5 connects to media literacy: AI-generated content was trained on existing content. Who made that content? Were they compensated?

*Synthesis and revision:*
- The ML training loop (iterate, improve, test again) is a form of revision. Just as a writer revises a draft based on feedback, a student revises their training data based on test results. The goal — saying the right thing clearly — is the same.

**Classroom tie-in:**
Ask the ELA teacher if students are working on argument writing. Offer to have students write their Model Evaluation as a formal argument. The data is already there — it just needs to be framed as a claim with evidence.

**Vocabulary overlap:** claim, evidence, reasoning, source, bias, credibility, synthesis, revision, audience, purpose

**Standards:** CCSS.ELA-LITERACY.W.6.1 (write arguments to support claims), CCSS.ELA-LITERACY.RST.6-8.7 (integrate quantitative technical information with text)

---

### Optional: Cross-Subject Unit Design

If your school does interdisciplinary units, M4 is the strongest candidate in the curriculum for cross-departmental collaboration. A suggested three-class unit:

| Class | Contribution |
|-------|--------------|
| CS/Technology | Train-Integrate Lab — building and testing the model |
| Science | Experimental design — treating the training process as a controlled experiment |
| Math | Accuracy metrics — calculating and interpreting quantitative results |
| ELA (optional) | Bias testing report — writing the argument about who the model does and doesn't serve |

Students produce one integrated project across all three classes. Assessment is shared.

---

## Appendix: Quick Reference Card

*Print and keep with you during Module 4.*

**Module 4 in one sentence:** Students train a real machine learning model on data they collect, evaluate it honestly, and integrate it into their personal AI agent.

**The three essential concepts:**
1. The training loop — data → train → evaluate → iterate
2. Good data matters more than a good algorithm
3. Training accuracy ≠ real-world performance

**The arc:**
M3 (Knowledge) → **M4 (Learning)** → M5 (Communication)

**When students ask "why are we doing this?":**
> "You went from using AI, to describing AI, to teaching AI what you know. Now you're training AI from scratch. Part of your agent's brain is literally something you built. That's the point."

**If Teachable Machine breaks:** Use ML for Kids, or run the paper simulation (see Section 7).

**If a student's model is terrible:** Help them audit the data — the answer is almost always there.

**If the ethics discussion gets heavy:** Validate. Protect space. Follow up with affected students.

**The most common teacher mistake:** Rushing through data collection to get to training. The quality of the data determines everything. The time spent on the Data Audit is not wasted — it is the lesson.

---

*Module 4 Teacher Guide — OpenClaw Curriculum*
*For educators without a CS/AI background. The training loop will make sense. You've got this.*

*Part of the OpenClaw Curriculum — Module 4 of 7*
*Previous: [Module 3 Teacher Guide](../../module3/teacher-guide/README.md) | Next: Module 5 Teacher Guide (coming soon)*
