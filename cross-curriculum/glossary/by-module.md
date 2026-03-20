# Glossary by Module — OpenClaw AI Curriculum
## Terms Organized by Introduction Order

> **How to use this:** Read each module's section to review the vocabulary introduced in that unit. This is especially useful for studying before assessments or for reviewing what's "new" in each module. For full definitions, see [master-glossary.md](master-glossary.md).

---

## Module 1 — Introduction to AI
### 12 Terms | First Introduced

| Term | Plain-English Definition |
|------|--------------------------|
| **Artificial Intelligence (AI)** | When computers do things that normally require human thinking |
| **Machine Learning** | A type of AI where computers learn from examples, not explicit rules |
| **Algorithm** | A step-by-step set of instructions a computer follows to solve a problem |
| **Training Data** | The examples a machine learning system learns from |
| **Neural Network** | An AI system inspired by the human brain, using layers of connected nodes |
| **Natural Language Processing (NLP)** | AI that helps computers understand and respond to human language |
| **Computer Vision** | AI that teaches computers to "see" and make sense of images and videos |
| **Turing Test** | A challenge to determine if a computer can think like a human |
| **Automation** | Using technology to do tasks with little or no human effort |
| **Bias (in AI)** | When AI produces unfair results because training data wasn't balanced |
| **Dataset** | An organized collection of data used to train or evaluate an AI system |
| **Model** | The "brain" a computer builds after learning from data — used for predictions |

---

## Module 2 — How Computers See
### 11 New Terms | Builds on: Training Data, Model, Computer Vision, Neural Network from M1

| Term | Plain-English Definition |
|------|--------------------------|
| **Pixel** | The smallest unit of a digital image — a tiny colored tile |
| **RGB** | The color system computers use (Red, Green, Blue values 0–255) |
| **Classifier** | An AI model that sorts inputs into labeled categories |
| **Accuracy** | The percentage of predictions a model gets right |
| **Feature** | A specific measurable property a model uses to make predictions |
| **CNN (Convolutional Neural Network)** | A neural network architecture designed specifically for images |
| **Spectrogram** | A visual representation of sound over time — lets AI "see" audio |
| **Speech Recognition** | AI that converts spoken words into text |
| **Overfitting** | When a model memorizes training data and fails on new examples |
| **Annotation** | The process of labeling data so a model can learn from it |
| **Pre-Trained Model** | A model already trained on a large dataset, available for others to use |

> **Connections from M1:** Training Data shows up again (you annotate it before training). Model is what a Classifier *is*. Bias (in AI) connects to speech recognition's known accent problems.

---

## Module 3 — How AI Thinks
### 11 New Terms | Builds on: Feature, Pattern, Model, Training Data from M1–M2

| Term | Plain-English Definition |
|------|--------------------------|
| **Feature** *(deepened)* | *(M2 term extended)* In M3, features apply to all data types — not just images |
| **Representation** | How real-world information gets converted into numbers a computer can process |
| **Decision Tree** | A flowchart-like model that asks yes/no questions to reach a decision |
| **Node** | A single decision point (question) in a decision tree |
| **Leaf** | The final outcome at the end of a decision tree branch |
| **Classification** | Sorting data into categories based on features |
| **Pattern** | A repeated structure in data that AI learns to recognize |
| **Chain-of-Thought** | Asking AI to show its reasoning step by step |
| **Hallucination** | When AI confidently makes something up — sounds right but isn't |
| **Reasoning** | Using logic and evidence to reach a conclusion step by step |
| **Inference** | Drawing conclusions from incomplete or indirect information |
| **Knowledge Base** | The structured collection of facts an AI can draw from |

> **Connections from M1–M2:** Feature (M2) is generalized. Classification is what a Classifier (M2) does. Hallucination connects to why Knowledge Base quality matters. Pattern ties back to how Neural Networks work.

---

## Module 4 — Give Your Agent the Ability to Learn
### 3 New Terms | Builds on: Machine Learning, Training Data, Model, Accuracy, Overfitting from M1–M3

| Term | Plain-English Definition |
|------|--------------------------|
| **Label** | The correct answer attached to a training example |
| **Training Loop** | The foundational ML cycle: Collect Data → Label → Train → Evaluate → Iterate |
| **Weights** | Adjustable numbers inside a model that encode learned patterns |

> **Key M4 Deepenings (not new terms, but significantly expanded):**
> - **Overfitting:** M4 adds training accuracy vs. test/validation accuracy curves and prevention strategies
> - **Accuracy:** M4 distinguishes training accuracy from real-world accuracy — high training accuracy alone is meaningless
> - **Bias (in AI):** M4 introduces *distribution shift* — when training data doesn't match deployment context
> - **Machine Learning:** M4 formalizes the process with the Training Loop and Weights concepts

---

## Module 5 — Talking to AI
### 9 New Terms | Builds on: Model, Hallucination, Chain-of-Thought, Training Data from M1–M4

| Term | Plain-English Definition |
|------|--------------------------|
| **Token** | The basic unit of text that AI language models process (roughly a word) |
| **Context Window** | The maximum text an AI can "see" and remember at one time (measured in tokens) |
| **API** | Rules for how two software programs talk to each other |
| **Webhook** | An automatic notification from one service to another when something happens |
| **Bot** | A software program that automatically performs tasks in messaging apps |
| **Credential** | A secret key proving you have permission to access a system |
| **Prompt Engineering** | Carefully crafting AI inputs to get better outputs |
| **Few-Shot Prompting** | Teaching the AI your format by including 2–5 examples in your prompt |
| **Chain-of-Thought Prompting** *(deepened)* | *(M3 concept)* Reinforced as a concrete prompting technique in M5 |

> **Connections from M1–M4:** Hallucination (M3) returns — M5 repeats the same definition and emphasizes verification. Chain-of-Thought (M3) becomes an explicit prompting technique in M5.

---

## Module 6 — AI Ethics, Bias & Fairness
### 13 New Terms | Builds on: Bias (in AI), Model, Training Data, Automation, Dataset from M1–M5

| Term | Plain-English Definition |
|------|--------------------------|
| **Algorithmic Bias** | Systematic unfairness in AI outputs affecting certain groups |
| **Proxy Variable** | An indirect stand-in that can secretly encode bias |
| **Feedback Loop** | A cycle where AI outputs reinforce and amplify future inputs |
| **Surveillance** | Technology-aided monitoring of behavior, location, or activities |
| **Deepfake** | AI-generated synthetic media of real people saying/doing things they didn't |
| **Usage Policy** | Formal rules for how an AI system may and may not be used |
| **Guardrail** | A technical or procedural constraint on AI outputs or behavior |
| **Alignment** | Matching AI goals and behavior to human values and intent |
| **Responsible Disclosure** | Reporting AI flaws to developers before going public |
| **Stakeholder** | Anyone affected by an AI system — directly or indirectly |
| **Fairness** | Equitable treatment of individuals and groups by an AI system |
| **Transparency** | Visibility into how an AI system works and makes decisions |
| **Accountability** | Answerability for the outcomes an AI system produces |

> **Connections from M1–M5:** Algorithmic Bias builds directly on Bias (in AI) from M1. Feedback Loop connects to Overfitting (M2) and Distribution Shift (M4). Alignment connects to why Guardrails and Usage Policies exist. Transparency is the prerequisite for Accountability.

---

## Module 7 — AI Expo
### No New Terms

> Module 7 introduces no new vocabulary. Its purpose is to consolidate all prior learning — Modules 1–6 concepts should appear organically in student demos, reflections, and presentations. The master glossary and this document serve as student reference materials during Expo preparation.

---

## Cumulative Vocabulary Growth

```
Module 1:  12 terms  (running total: 12)
Module 2:  11 new    (running total: 23)
Module 3:  11 new    (running total: 34)
Module 4:   3 new    (running total: 37)  ← M4 deepens existing terms heavily
Module 5:   9 new    (running total: 46)
Module 6:  13 new    (running total: 47*) ← largest single module vocabulary
Module 7:   0 new    (running total: 47)
```

*\*Feature appears in both M2 and M3 but is counted once as its definition is consistently extended, not changed.*

---

## Cross-Module Term Appearances

Some terms appear across multiple modules. Here's where they show up:

| Term | Modules |
|------|---------|
| Training Data | M1 → M2 → M4 |
| Model | M1 → M2 → M3 → M4 → M5 |
| Accuracy | M2 → M4 |
| Overfitting | M2 → M4 |
| Feature | M2 → M3 |
| Hallucination | M3 → M5 |
| Bias (in AI) | M1 → M4 → M6 |
| Chain-of-Thought | M3 → M5 |

---

*Glossary by Module — OpenClaw AI Curriculum | cross-curriculum/glossary/by-module.md*
