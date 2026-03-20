# Module 4: Give Your Agent the Ability to Learn — Machine Learning in Practice

> **Capability Unlock:** By the end of this module, your agent will be able to **use a model you trained yourself.**

**Duration:** 2–3 weeks (10–15 class periods, ~50 min each)
**Grade Level:** 6–8
**Prerequisites:** Module 3 — Give Your Agent a Knowledge Base

---

## 🤖 Your Agent Journey — Module 4 of 7

> **Arc:** *Build Your AI Assistant, Piece by Piece*

| Before M4 | After M4 |
|-----------|----------|
| Agent uses only pre-built models | ✅ Agent includes a model you trained |
| "Machine learning" is abstract | ✅ You've run the training loop yourself |
| Data feels invisible | ✅ You've felt the difference good/bad data makes |
| Model accuracy is a mystery | ✅ You can evaluate and explain model performance |

**Previous unlock → Module 3:** Knowledge (custom knowledge base + retrieval skill)
**Next unlock → Module 5:** Give your agent a voice (connect to a live channel)

See your full progress tracker: [Your Agent Journey](../AGENT_JOURNEY.md)

---

## ⭐ KEY DELIVERABLE: Lab M4.4 — Train a Model and Integrate It Into Your Agent

> This is the lab that unlocks the capability. Everything else in the module builds toward this moment.
> Students train a **real image or audio classifier** using ML4Kids or Teachable Machine, export it, and integrate it into their OpenClaw agent as a custom skill — their agent will literally *think with something they built*.

---

## 1. Essential Questions

1. **What does it actually mean for a machine to "learn"?** What changes inside a model during training?
2. Why does the quality and diversity of training data matter so much — and what happens when it's poor?
3. How do you know if your model learned something real, or just memorized the training examples?
4. Who benefits and who might be harmed when AI systems are trained on biased or unrepresentative data?
5. What happens when you integrate a model you trained into a larger system — what can go wrong, and how do you catch it?

---

## 2. "I Can" Statements

By the end of this module, students will be able to say:

- **I can** explain the machine learning training loop: data → train → evaluate → iterate.
- **I can** collect or curate a labeled dataset for a classification problem I defined.
- **I can** train a model using ML4Kids or Teachable Machine and interpret its accuracy results.
- **I can** explain the difference between training accuracy and real-world performance.
- **I can** describe at least two ways that biased or unbalanced training data harms a model's outputs.
- **I can** export a trained model and wrap it in an OpenClaw skill.
- **I can** test my integrated model end-to-end and document where it succeeds and where it fails.
- **I can** reflect on the human cost of training data — who collects it, who labels it, and why that matters.

---

## 3. Standards Alignment

### AI4K12 — Big Idea 3: Learning
> *Computers can learn from data.*

| Standard | Description | Module 4 Connection |
|----------|-------------|---------------------|
| **3-A** | Machine learning systems learn from labeled training data | Teachable Machine / ML4Kids training loop; students label their own data |
| **3-B** | The structure and quality of training data affect what is learned | Data audit activity; class imbalance experiments |
| **3-C** | Feedback during training adjusts model parameters | Loss/accuracy curves discussion; iterating on training data |
| **3-D** | Trained models can be evaluated and compared using metrics | Accuracy, confusion matrices, held-out test sets |
| **3-E** | Training data reflects human choices, which may introduce bias | Bias testing lab; data ethics discussion |

### CSTA K–12 CS Standards (2017)
| Standard | Description |
|----------|-------------|
| **2-DA-07** | Represent data using multiple encoding schemes | Labeled image/audio datasets; feature vectors; class labels |
| **2-DA-08** | Collect data using computational tools and transform to make it more useful | Data collection for classifier; cleaning and labeling examples |
| **2-AP-11** | Create clearly named variables to store data and use expressions | Skill code: variables for model input, output, confidence scores |
| **2-AP-13** | Decompose problems into parts that can be implemented as a program | ML pipeline: collect → label → train → evaluate → integrate |
| **2-AP-16** | Incorporate existing code, libraries, or other assets | ML4Kids/Teachable Machine export + OpenClaw skill wrapper |
| **2-IC-20** | Describe tradeoffs between privacy and digital systems | Training data ethics; labeled data sourcing; consent |
| **2-IC-21** | Discuss how computing has impacted collaboration and communication | Crowdsourced labeling (Amazon MTurk, reCAPTCHA); open datasets |

### ISTE Standards for Students (2016)
| Standard | Description |
|----------|-------------|
| **1d — Empowered Learner** | Use technology to demonstrate learning | Trained model integrated into agent as concrete artifact |
| **4a — Innovative Designer** | Solve problems using design process | Define → collect → train → test → iterate on ML project |
| **4c — Innovative Designer** | Test solutions iteratively | Evaluate model accuracy, debug failures, retrain |
| **5b — Computational Thinker** | Collect data and use digital tools to analyze | Dataset curation, accuracy metrics, confusion matrix analysis |
| **5d — Computational Thinker** | Understand complex systems through modeling | ML training pipeline as a system with inputs, feedback, outputs |
| **6a — Creative Communicator** | Choose platforms and tools to communicate ideas | Agent demo + journal reflection on training process |

### Common Core State Standards (CCSS)
| Standard | Description |
|----------|-------------|
| **ELA-RST.6-8.3** | Follow multistep technical procedures | Lab M4.4 step-by-step training and integration instructions |
| **ELA-RST.6-8.7** | Integrate information from text and visual displays | Reading accuracy charts, confusion matrices, training dashboards |
| **ELA-WHST.6-8.2** | Write explanatory/informational text | Data audit documentation; model evaluation writeup |
| **ELA-WHST.6-8.1** | Write arguments supported by evidence | Ethics discussion: bias in training data; position paper option |
| **ELA-SL.8.4** | Present findings using appropriate detail | Capability unlock demo; model performance presentation |
| **Math-SP.A** | Summarize and describe distributions (6–8) | Class distribution in training data; accuracy as percentage |
| **Math-MP.1** | Make sense of problems and persevere | Debugging poor model accuracy; iterating on dataset |
| **Math-MP.4** | Model with mathematics | Accuracy rates; confidence scores; confusion matrix interpretation |

---

## 4. Day-by-Day Pacing Calendar

> **Week 1: How Machines Learn**

| Day | Lesson / Activity | Type | Notes |
|-----|-------------------|------|-------|
| 1 | **Lesson M4.1:** What Does "Learning" Mean for a Machine? (training loop, labeled data, parameters) | Direct instruction + discussion | Hook: show the same model before and after training |
| 2 | **Lesson M4.2:** Training Data — Where It Comes From and Why It Matters | Lecture + examples | Crowdsourcing, reCAPTCHA, ImageNet story |
| 3 | **Activity:** Data Collector — Students define a classification problem and collect 3 classes of training images | Hands-on | Use phone cameras or web search; 20–30 images per class |
| 4 | **Tutorial:** ML4Kids — account setup, interface walkthrough, first training run | Guided tutorial | ML4Kids account required (free for teachers); Teachable Machine as fallback |
| 5 | **Lab:** Train Your First Classifier — train the model from Day 3, interpret accuracy results | Lab | Where did it work? Where did it fail? |

> **Week 2: Evaluate, Improve, and Integrate — The KEY Lab**

| Day | Lesson / Activity | Type | Notes |
|-----|-------------------|------|-------|
| 6 | **Lesson M4.3:** Overfitting, Underfitting, and the Train/Test Split | Direct instruction | Intuition first: memorizing vs. understanding |
| 7 | **Activity:** Data Audit — analyze your dataset for class imbalance, gaps, and potential bias | Hands-on | Fill out data audit worksheet; peer review |
| 8 | ⭐ **Lab M4.4 — KEY LAB:** Integrate Your Trained Model Into Your Agent (Part 1) | Lab | Export model from ML4Kids; write OpenClaw skill wrapper |
| 9 | ⭐ **Lab M4.4 — KEY LAB:** Integrate Your Trained Model Into Your Agent (Part 2) | Lab | Test end-to-end; debug; add confidence score to output |
| 10 | **Lab M4.4 Showcase:** Demo your trained model to a partner; collect feedback | Pair share + reflection | Capability unlock entry in Agent Design Journal |

> **Week 3 (Flex / Extension): Bias, Ethics, and Going Deeper**

| Day | Lesson / Activity | Type | Notes |
|-----|-------------------|------|-------|
| 11 | **Lab:** Bias Testing — deliberately construct a biased dataset and observe the effect on predictions | Lab | Compare results before and after fixing the bias |
| 12 | **Lesson M4.4:** Ethics of Training Data — who labels it, who owns it, who is harmed by errors | Socratic seminar | High-value discussion; connect to real cases (facial recognition, hiring AI) |
| 13 | **Extension Lab:** Sentiment Classifier (optional Python path) — train a simple text classifier in a Jupyter notebook | Lab | Optional; for classes ready for Python |
| 14 | **Assessment Day:** Model performance writeup + capability unlock reflection | Assessment | |
| 15 | **Module Wrap-Up:** Update Agent Journey, preview Module 5 | Celebration + transition | **Agent Design Journal close** |

> **Key:** ⭐ = KEY LAB (Lab M4.4) — this is the central deliverable

---

## 5. Materials & Tech List

### Hardware
- [ ] Student devices (Chromebook, Mac, PC, or iPad — browser-based labs work on all)
- [ ] Webcams (built-in or USB) — for Teachable Machine image collection (optional; pre-collected images also work)
- [ ] Microphones (built-in) — for audio classifier option

### Accounts & Services (free unless noted)
- [ ] **ML4Kids** — [machinelearningforkids.co.uk](https://machinelearningforkids.co.uk) — **free teacher accounts available**; provides managed Scratch/Python/App Inventor integrations; recommended primary tool
- [ ] **Google Teachable Machine** — [teachablemachine.withgoogle.com](https://teachablemachine.withgoogle.com) — no account needed; excellent fallback or supplement
- [ ] **OpenClaw** — student instances from Modules 1–3
- [ ] **Hugging Face** — [huggingface.co](https://huggingface.co) — free account; used for model hosting in extension activities

### Software / Optional Python Path
- [ ] A text editor (VS Code, Replit, or similar) — for skill integration code
- [ ] **Python + Jupyter Notebook** *(optional)* — for extension sentiment classifier lab; Replit or Google Colab requires no local install
- [ ] OpenClaw skill development environment (from Module 1)
- [ ] ML4Kids Node.js/Python library *(optional)* — for programmatic model calls

### Classroom Materials
- [ ] Data audit worksheet (provided in `/module4/activities/`)
- [ ] Sample labeled image sets for fallback if students cannot collect their own (provided in `/module4/activities/`)
- [ ] Printed or digital confusion matrix template

### Teacher Resources
- [ ] [Teacher Guide](./teacher-guide/) — lesson plans, facilitation notes, common bugs
- [ ] [Assessments](./assessments/) — rubrics, reflection prompts, data audit checklist
- [ ] [Quiz: ML Concepts](./quiz-ml-concepts/)

---

## 6. Module Arc Narrative

**How M4 Connects Module 3 to Module 5 — and Why "Learning" Is the Hinge**

By the end of Module 3, students' agents can *retrieve* — they can pull from a knowledge base someone else built. That's powerful, but it's still fundamentally passive. The agent is a conduit for existing information. Module 4 changes that.

**The pivot from using to building:**
Modules 1–3 give students a capable agent that uses pre-built AI. Module 4 is the first time students are on the *building* side of the equation. They define a problem, collect data, make labeling decisions, run training, interpret results, and own the consequences when the model gets it wrong. This is the module where "AI" stops being something that happens to you and starts being something you do.

**Why this comes before Module 5 (voice/channel):**
Module 5 connects the agent to live channels — real users, real stakes. Before that happens, students need to understand that the models powering their agent are artifacts shaped by human choices. The data audit activity and bias testing lab in M4 build the critical lens students need before they deploy a live agent in M5. An agent that speaks to the world should be an agent whose training students can interrogate.

**The through-line — the trained model as identity:**
In Module 2, students gave their agent senses (borrowed from Hugging Face). In Module 3, they gave it knowledge (their own curated content). In Module 4, they give it *judgment* — a classifier they trained on data they chose. That classifier reflects their decisions. When the model is wrong, students have to ask: what did I do that caused this? This is the closest middle schoolers will come to understanding why AI systems fail in the real world.

**Bridging into Module 5:**
The trained model from M4 becomes optional enrichment in M5 — students can invoke their custom classifier through their agent's live channel. The integration pattern (skill wrapper → agent capability) is identical, which reinforces Module 1's core architecture lesson: the agent is a platform; capabilities are pluggable.

---

## 7. Agent Journey Progress Tracker

This module corresponds to **Unlock #4: Learning** in the full 7-module arc.

```
Agent Journey Progress:
[ Module 1 ] ✅ Identity        — Your agent has a name and personality
[ Module 2 ] ✅ Perception      — Your agent can see and hear
[ Module 3 ] ✅ Knowledge       — Your agent has a custom knowledge base
[ Module 4 ] 🧠  Learning       ← YOU ARE HERE
[ Module 5 ]    Voice           — Connect to a live channel
[ Module 6 ]    Communication   — Multi-channel delivery
[ Module 7 ]    Orchestration   — Multi-agent systems
```

**See the full tracker:** [AGENT_JOURNEY.md](../AGENT_JOURNEY.md)

After Lab M4.4, students should:
1. Open their Agent Design Journal
2. Write an entry: *"My agent can now classify [describe what]. Here's accuracy I achieved: [X%]. Here's where it surprised me: [reflection]."*
3. Check off **Unlock #4: Learning** in their journey tracker

---

## 📓 Module Close — Agent Design Journal

> Complete this section at the end of Day 15 (Module Wrap-Up day).

**Open your `AGENT_JOURNEY.md` file.** Find the **Module Notes** table and add your M4 row:

| Module | What I built | What surprised me | What I'd change |
|--------|-------------|-------------------|-----------------|
| M4 | *(e.g., Trained a rock/paper/scissors gesture classifier, integrated it as an OpenClaw skill)* | *(e.g., How much accuracy dropped on images the model hadn't seen)* | *(e.g., I'd collect more diverse training images — different backgrounds and lighting)* |

**Journal Prompts:**

1. **What I built:** Describe the classification problem you defined. What did you train your model to distinguish? How many examples per class did you collect?
2. **What surprised me:** Where did your model succeed when you didn't expect it to — or fail when you thought it would get it right? What does that tell you about how training data shapes model behavior?
3. **What I would change:** If you were building this again, what would you do differently? More data? Different classes? A different problem definition?

Then update the **Agent Status After M4** block to reflect your agent's current capabilities.

> 💡 *You just trained a model. Not "used" one — trained one. The journal is where you capture what that felt like and what you'd do differently. That's how engineers learn.*

---

## 8. Assessment Overview

### Formative
- **Exit tickets** after Days 1, 5, 7 (see teacher guide for prompts)
- **Lab M4.4 progress check** — mid-lab check-in: has student exported their model and started the skill wrapper?
- **Data audit worksheet** (Day 7) — teacher review before lab begins
- **Peer demo** (Day 10) — partner feedback on model capability and failure modes

### Summative

| Assessment | Description | Rubric Location |
|------------|-------------|-----------------|
| **Lab M4.4 — Trained Skill** | Working trained-model skill deployed to student's OpenClaw agent | [assessments/lab-m4-4-rubric.md](./assessments/) |
| **Data Audit** | Written documentation of training dataset — class balance, gaps, potential biases, and mitigation plan | [assessments/data-audit-rubric.md](./assessments/) |
| **Capability Unlock Reflection** | Written reflection: What did you train? What accuracy did you achieve? Where did it fail, and why? | [assessments/reflection-prompt.md](./assessments/) |
| **ML Concepts Quiz** | 15-question quiz on training loop, labeled data, overfitting, accuracy metrics | [quiz-ml-concepts/](./quiz-ml-concepts/) |

### Capability Unlock Reflection Prompt
> *You trained a machine learning model. What did you teach it to do? What accuracy did you achieve — and what does that number actually mean? Where did it fail, and what do you think caused the failure? If you were going to collect a new training dataset for this same problem, what would you do differently?*

### Ethics Discussion Assessment (Optional)
> *ML systems are only as good as their training data. Choose a real-world AI system (hiring algorithms, medical imaging, content moderation) and argue: what training data decisions led to documented failures in that system — and who was responsible for fixing it?*

---

## 9. Flex Options

### 1-Week Sprint (Compressed)
For classes with limited time:
- **Day 1:** Lesson M4.1 (training loop) + Teachable Machine first run (combine)
- **Day 2:** Data Collector activity (collect 3 classes, ~20 images each)
- **Day 3:** Train + evaluate using Teachable Machine (skip ML4Kids for speed)
- **Day 4:** ⭐ KEY LAB — Integrate model into agent (provide starter skill code to reduce debug time)
- **Day 5:** Demo + reflection journal

*Skip:* Data audit, overfitting lesson, ethics seminar, Python extension. Core capability unlock still achieved.

### 4-Week Extended Version
For classes with additional time or deeper CS integration:
- **Week 1:** Full Lessons M4.1–M4.2 + data collection + ML4Kids deep dive
- **Week 2:** Overfitting/underfitting lesson + data audit + KEY LAB (3 days)
- **Week 3:** Bias testing lab + ethics seminar + Python sentiment classifier (optional)
- **Week 4:** Student-designed extension projects + peer presentations + full module assessment

*Add:* Full Python path (sentiment classifier notebook), research project comparing multiple classifiers, final presentation with data audit + model performance + ethical analysis.

### Differentiation Options

**For faster classes / extension:**
- **Python path:** Replace Teachable Machine with a Jupyter notebook training run (scikit-learn or TensorFlow Lite)
- **Multi-class challenge:** Train a 5+ class classifier; analyze where confusion occurs
- **Research project:** Compare accuracy of Teachable Machine vs. ML4Kids vs. Python classifier on the same dataset
- **Ethics deep dive:** Research Amazon Rekognition's failure rates by demographic; produce a findings report

**For slower classes / scaffolding:**
- **Provide pre-collected datasets** — removes data collection friction for struggling students
- **Pair programming** during Lab M4.4 — strong pairing strategy reduces debugging frustration
- **Skip the Python extension entirely** — Teachable Machine alone satisfies the learning objective
- **Use Teachable Machine** instead of ML4Kids if account setup is a bottleneck
- **Provide starter skill code** with clearly marked TODO sections for the OpenClaw integration

**For different contexts:**
- **No webcams?** Use pre-collected image sets for Teachable Machine (image upload instead of live camera)
- **Chromebook-only?** All primary tools (ML4Kids, Teachable Machine, Replit) are fully browser-based
- **Privacy concerns?** Restrict training data to non-personal images (objects, drawings, food, landmarks) — facial/biometric training is not a required part of this module

---

## 10. Lessons, Labs & Resources

| Resource | Description |
|----------|-------------|
| [Lesson M4.1](./lesson-m4-1-how-machines-learn/) | How Machines Learn: training loop, labeled data, parameters |
| [Lesson M4.2](./lesson-m4-2-training-data/) | Training Data: where it comes from and why it matters |
| [Lesson M4.3](./lesson-m4-3-overfitting/) | Overfitting, Underfitting, and the Train/Test Split |
| [Lesson M4.4](./lesson-m4-4-ethics-training-data/) | Ethics of Training Data: labels, labor, and bias |
| ⭐ [Lab M4.4 — KEY LAB](./lab-integrate-your-model/) | Train a Model and Integrate It Into Your Agent |
| [Lab: Bias Testing](./lab-bias-testing/) | Construct a biased dataset and observe the effect |
| [Lab: Sentiment Classifier](./lab-sentiment-classifier/) | Optional Python path — train a text classifier in a notebook |
| [Activity: Data Collector](./activities/) | Define a problem, collect labeled training examples |
| [Activity: Data Audit](./activities/) | Analyze your dataset for balance, gaps, and potential bias |
| [Interactive: Training Simulator](./interactive-training-simulator/) | Visualize how training loss decreases over epochs |
| [Tutorial: How AI Learns](./tutorial-how-ai-learns/) | Student-facing guided reading on the training loop |
| [Tutorial: ML4Kids Walkthrough](./tutorial-ml-for-kids/) | Step-by-step ML4Kids setup and first training run |
| [Quiz: ML Concepts](./quiz-ml-concepts/) | Formative/summative assessment on training loop and evaluation |
| [Badge: ML Engineer](./badge-ml-engineer/) | Printable/digital badge awarded at capability unlock |
| [Discussion Forum](./discussion-forum/) | Async discussion prompts for hybrid/online contexts |
| [README Tutorial](./README-tutorial.md) | Additional setup and walkthrough notes |
| [Teacher Guide](./teacher-guide/) | Facilitation notes, common bugs, differentiation strategies |
| [Assessments](./assessments/) | Rubrics, reflection prompts, data audit checklist |

---

*Module 4 of 7 — Previous: [Module 3: Give Your Agent a Knowledge Base](../module3/README.md) | Next: [Module 5: Give Your Agent a Voice](../module5/README.md)*

*Full lesson plans and labs in the subdirectories above.*
