# AI Explorers: Your Guide to Artificial Intelligence
## Full Table of Contents

> **OpenClaw AI Literacy Curriculum | Companion Textbook**
> *Grades 6–8 | 15 Chapters | Modules 1–7*
> *Draft compiled: March 2026*

---

## About This Book

*AI Explorers: Your Guide to Artificial Intelligence* is the student-facing companion textbook for the OpenClaw AI Literacy Curriculum. Designed for grades 6–8, it accompanies a hands-on, project-based course in which students build their own AI assistant (using OpenClaw) while learning the concepts, history, ethics, and real-world implications of artificial intelligence.

Each chapter introduces concepts through narrative opening stories, explains core ideas with illustrations and sidebars, and closes with vocabulary, OpenClaw hands-on challenges, and review questions.

---

## Module 1: What Is AI?

### Chapter 1: What Is AI?
**Source:** `module1/textbook-chapter-1/chapter-1.md` ✅

**Chapter Summary:**
Maya's Monday morning — full of AI she doesn't notice — opens the chapter. Students explore what "intelligence" actually means (learning, adapting, solving new problems), contrast traditional software with AI, and take a brief tour of AI history from Alan Turing's 1950 question through the 2020s. The chapter introduces the OpenClaw assistant that students will use throughout the course and emphasizes AI as a thinking partner, not an answer machine.

**Key Concepts:** intelligence, artificial intelligence, machine learning, neural networks, algorithm, training data, Turing Test, AI Winter, deep learning

**Opening Story:** Maya's Monday Morning
**AI in the Wild Sidebars:** The Turing Test, AlphaGo's Impossible Move, AI in Healthcare, AI Writing Partner
**OpenClaw Challenges:** Day-in-the-Life AI Hunt, Quiz the AI, Teach the Concept

---

### Chapter 2: AI Through History — From Turing to Today
**Source:** `module1/textbook-chapter-2/chapter-2.md` ✅

**Chapter Summary:**
A deep-dive history of AI from Alan Turing's 1950 paper through the 2020s generative AI era. Opens with Turing's "Computing Machinery and Intelligence" and the Imitation Game, then traces AI through the Dartmouth Conference, the early optimism of expert systems and symbolic AI, two AI winters (1974 and 1987), the rise of machine learning and neural networks, the deep learning revolution triggered by ImageNet 2012, the emergence of the Transformer architecture, and the GPT/ChatGPT era. Closes with a section on what comes next and why history matters to students building AI tools today.

**Key Concepts:** Turing Test, Dartmouth Conference, expert systems, symbolic AI, AI Winter, machine learning, neural network, backpropagation, deep learning, ImageNet, Transformer, large language model (LLM), ChatGPT

**Opening Story:** "The Question That Started Everything" — Alan Turing in 1950
**Key Figures Profiled:** Alan Turing, John McCarthy, Geoffrey Hinton, Garry Kasparov (Deep Blue), Lee Sedol (AlphaGo)
**AI in the Wild Sidebars:** Turing Test in Action (Eugene Goostman), Lessons From the Winter, AlphaGo and Move 37, The Researchers Who Worry (2023 open letter)
**OpenClaw Challenges:** Timeline Detectives, Turing Test Experiment, AI Winters vs. AI Hype essay

---

## Module 2: How AI Perceives the World

### Chapter 3: How Computers See — Pixels, Patterns, Perception
**Source:** `module2/textbook-chapter-3/chapter-3.md` ✅

**Chapter Summary:**
The chapter opens with a school camera that learns to recognize faces, then breaks down exactly how: pixels as RGB data grids, feature detection through neural network layers (edges → shapes → parts → objects), image classification with confidence scores, and the difference between classification, object detection, and image captioning. A major section covers training data: where it comes from, why diversity matters, and the "garbage in, garbage out" rule. Introduces Hugging Face as a platform for pre-trained models. Closes with a bias section focused on the Gender Shades study and facial recognition inequality.

**Key Concepts:** pixel, RGB, feature detection, image classification, object detection, image captioning, deep neural network, training data, pre-trained model, Hugging Face, Inference API, bias (in AI), Gender Shades

**Opening Story:** The Camera That Learned Your Face
**AI in the Wild Sidebars:** Instagram's Secret Layer, Self-Driving Cars and the Tractor Problem, The Open-Source AI Revolution, The Wrongful Arrest (Robert Williams)
**OpenClaw Challenges:** Caption Safari, The Bias Test, Build a "What Do You See?" Game

*Note: This is the vision-only chapter, split from the original combined `module2/textbook-chapter-2/chapter-2.md`. The original file is preserved.*

---

### Chapter 4: How Computers Hear — Sound, Speech, Signals
**Source:** `module2/textbook-chapter-4/chapter-4.md` ✅

**Chapter Summary:**
Opens with the origin story of OpenAI's Whisper (diversity-first training on 680,000 hours of internet audio). Covers sound as waveform data (amplitude over time, 44,100 samples/second), conversion to spectrograms for pattern recognition, and the full speech recognition pipeline: capture → preprocessing → neural network → language model correction → output. Draws explicit analogy between spectrograms and image processing (Chapter 3 connection). A major ethics section examines systematic bias in speech recognition (2× error rates for Black speakers, accent discrimination in hiring AI). Closes with the Module 2 Complete section and Module 3 preview.

**Key Concepts:** waveform, sample rate, spectrogram, speech recognition, acoustic model, language model, Whisper, transcription, accent bias, multimodal

**Opening Story:** "The Voice That Taught a Machine to Listen" — the origin of Whisper
**AI in the Wild Sidebars:** Real-Time Captioning for Deaf Students, Accent Discrimination in Hiring AI
**OpenClaw Challenges:** Whisper Test, Spectrogram Explorer, Hearing Equality Audit

*Note: This is the audio-only chapter, split from the original combined `module2/textbook-chapter-2/chapter-2.md`. The original file is preserved.*

---

## Module 3: How AI Thinks

### Chapter 5: The Logic of AI — Rules, Trees, and Decisions
**Source:** `module3/textbook-chapter-5/chapter-5.md` ✅

**Chapter Summary:**
Jordan's rainy-morning decision-making introduces how AI represents and reasons through problems. The chapter covers how the world becomes numbers (features, encoding), decision trees (splitting data based on questions), random forests (ensembles of trees), and how these tools are applied to real problems: spam filters, credit scoring, medical diagnosis. A major section examines algorithmic decision-making in high-stakes contexts — hiring, loan approval, recidivism prediction — and why "the data said so" is never a complete ethical answer.

**Key Concepts:** feature, decision tree, node, leaf, splitting criterion, random forest, ensemble, overfitting, underfitting, algorithmic decision-making

**Opening Story:** Jordan's Decision Morning
**AI in the Wild Sidebars:** Spam filters, credit scoring algorithms, predictive policing
**OpenClaw Challenges:** Build your own decision tree, test an AI decision system

---

### Chapter 6: AI Detectives — Patterns and Reasoning
**Source:** `module3/textbook-chapter-6/chapter-6.md` ✅

**Chapter Summary:**
Maya's Spotify playlist that matched her Sunday sadness opens a chapter about how AI finds patterns humans miss — and misses patterns humans find easily. Covers pattern recognition at scale (50 million rows of music data), recommendation systems, chain-of-thought prompting, and where AI reasoning fails. The chapter directly contrasts human and AI cognition: AI excels at statistical patterns in large datasets; humans excel at context, emotion, and novel situations. Lab 3.4 preview: chain-of-thought prompting to make AI show its work.

**Key Concepts:** pattern recognition, recommendation systems, collaborative filtering, chain-of-thought prompting, reasoning, hallucination (preview), cognitive bias vs. statistical bias

**Opening Story:** The Playlist That Knew You Were Sad
**AI in the Wild Sidebars:** Music recommendation, chess AI patterns, language model reasoning failures
**OpenClaw Challenges:** Chain-of-thought prompting, catch-the-AI-mistake exercises

---

## Module 4: How AI Learns

### Chapter 7: How AI Learns — Training, Models, Predictions
**Source:** `module4/textbook-chapter-7/chapter-7.md` ✅

**Chapter Summary:**
Dr. Sio's X-ray AI — trained on 89,000 labeled scans until it matched radiologist accuracy — introduces the training loop. The chapter walks through machine learning step by step: labeled data, model initialization, forward pass, loss calculation, backpropagation, and iteration. Contrasts supervised, unsupervised, and reinforcement learning with concrete examples. The training loop metaphor (data → model → evaluate → improve) recurs throughout. Students understand that AI "learning" is iterative optimization, not magic.

**Key Concepts:** machine learning, supervised learning, unsupervised learning, reinforcement learning, training loop, labeled data, model, loss function, backpropagation, epoch, overfitting

**Opening Story:** How a Computer Learned to Spot Tumors
**AI in the Wild Sidebars:** Medical AI, game-playing AI (reinforcement learning), recommendation systems
**OpenClaw Challenges:** Train a simple classifier, observe overfitting in action

---

### Chapter 8: Data — The Food AI Eats
**Source:** `module4/textbook-chapter-8/chapter-8.md` ✅

**Chapter Summary:**
Amazon's 2014 hiring algorithm — which learned to penalize the word "women's" because historical hiring data was male-dominated — opens a chapter about data quality, diversity, and ethics. Covers labeled vs. unlabeled data, data collection methods (internet scraping, paid labeling, synthetic data, CAPTCHAs), class imbalance, data poisoning, and privacy implications of training data. Synthesizes Module 4's lessons: AI learns from data, so bad/biased data produces bad/biased AI.

**Key Concepts:** labeled data, unlabeled data, annotation, class imbalance, data poisoning, synthetic data, data provenance, CAPTCHA, consent

**Opening Story:** The Hiring Algorithm That Only Hired Men
**AI in the Wild Sidebars:** Data labeling labor conditions, synthetic data for rare events, GDPR and training data
**OpenClaw Challenges:** Audit a dataset for bias, design a data collection plan

---

## Module 5: How AI Communicates

### Chapter 9: Talking with AI — The Art of the Prompt
**Source:** `module5/textbook-chapter-9/chapter-9.md` ✅

**Chapter Summary:**
Jaylen's vague "Tell me about WWI" vs. Priya's precisely framed prompt — same AI, very different results — introduces prompt engineering. The chapter covers the anatomy of a good prompt (role, context, task, format, constraints), common prompt patterns (few-shot, chain-of-thought, role assignment), how large language models work at a conceptual level (next-token prediction), and why prompt quality matters so much. Includes extensive hands-on practice: writing, testing, and refining prompts for real tasks.

**Key Concepts:** prompt engineering, large language model (LLM), few-shot prompting, chain-of-thought prompting, role prompting, context window, temperature, hallucination (preview)

**Opening Story:** Two Questions, Two Very Different Answers
**AI in the Wild Sidebars:** Professional prompt engineers, AI in education, customer service bots
**OpenClaw Challenges:** Prompt rewriting workshop, few-shot example design, compare prompt outputs

---

### Chapter 10: When AI Gets It Wrong — Hallucinations, Limits, and Responsible Use
**Source:** `module5/textbook-chapter-10/chapter-10.md` ✅

**Chapter Summary:**
Amara's nearly-submitted report on the fictional Dr. Elena Vasquez — confidently fabricated by an AI — opens a chapter on AI failure modes. Covers hallucination (why LLMs fabricate with confidence), knowledge cutoffs, context window limits, prompt injection, jailbreaking, and the difference between confident-sounding and actually-accurate. The chapter's core lesson: critical thinking and verification are not optional when using AI tools. Closes with a practical checklist for responsible AI use.

**Key Concepts:** hallucination, knowledge cutoff, context window, prompt injection, jailbreaking, verification, critical evaluation, AI-generated misinformation

**Opening Story:** The Case of the Missing Scientist
**AI in the Wild Sidebars:** Medical AI errors, AI in journalism, deepfakes
**OpenClaw Challenges:** Fact-check an AI response, try to trigger a hallucination, build a verification checklist

---

## Module 6: Ethics and Society

### Chapter 11: Algorithmic Bias — When AI Is Unfair
**Source:** `module6/textbook-chapter-11/chapter-11.md` ✅

**Chapter Summary:**
Marcus's algorithmic risk score in a courtroom — a number that may determine his future, generated by a system trained on decades of biased historical data — frames the chapter's central question: when AI makes decisions about people, who is responsible for whether those decisions are fair? Covers types of bias (historical, measurement, aggregation, evaluation), the COMPAS recidivism tool and ProPublica's analysis, facial recognition in policing, and frameworks for thinking about AI fairness (accuracy parity, demographic parity, individual fairness). Emphasizes that "the algorithm decided" is not a moral escape hatch.

**Key Concepts:** algorithmic bias, COMPAS, recidivism prediction, historical bias, measurement bias, fairness metrics, accountability, proxy discrimination

**Opening Story:** The Code That Decided Marcus's Future
**AI in the Wild Sidebars:** COMPAS and the ProPublica investigation, facial recognition in policing, hiring algorithms
**OpenClaw Challenges:** Analyze a real algorithmic decision system, write a fairness policy, debate: Should AI be used in criminal sentencing?

---

### Chapter 12: AI, Privacy, and Your Data
**Source:** `module6/textbook-chapter-12/chapter-12.md` ✅

**Chapter Summary:**
Zara's "What Kind of Animal Are You?" quiz — a 47-page terms of service that granted away her location, device data, and behavioral profile — opens a chapter on data privacy. Covers what data AI systems collect and why, data brokers, surveillance capitalism, GDPR and COPPA, differential privacy, federated learning, and practical steps students can take to protect their own data. Balances realistic concern with agency: you can't opt out of the digital world, but you can navigate it more knowledgeably.

**Key Concepts:** personal data, data broker, terms of service, surveillance capitalism, GDPR, COPPA, differential privacy, federated learning, consent, data minimization

**Opening Story:** The App That Knew Too Much
**AI in the Wild Sidebars:** Cambridge Analytica, smart speakers and ambient recording, facial recognition databases
**OpenClaw Challenges:** Audit your own digital footprint, read (and decode) a real terms of service, design a privacy-respecting app

---

## Module 7: AI Futures

### Chapter 13: What AI Can and Cannot Do — An Honest Assessment
**Source:** `module7/textbook-chapter-13/chapter-13.md` ✅

**Chapter Summary:**
The turtle-classified-as-a-rifle adversarial attack opens an honest inventory of AI capabilities and limits. The chapter systematically surveys what current AI does well (pattern recognition at scale, language generation, image and audio processing, certain games and optimization tasks) and where it fails (common sense reasoning, genuine understanding, physical world interaction, creativity with meaning, ethical judgment). Distinguishes between "AI can do X" and "AI understands X." Prepares students to be thoughtful consumers and designers of AI tools.

**Key Concepts:** adversarial attack, generalization, common sense reasoning, artificial general intelligence (AGI), narrow AI, embodied cognition, AI limitations

**Opening Story:** The Time an AI Thought a Turtle Was a Rifle
**AI in the Wild Sidebars:** AI in games vs. AI in the real world, GPT and "understanding," robot limitations
**OpenClaw Challenges:** Map AI strengths and weaknesses, design a task AI cannot do, discuss: Will AI ever truly understand?

---

### Chapter 14: Careers in AI and Technology
**Source:** `module7/textbook-chapter-14/chapter-14.md` ✅

**Chapter Summary:**
Three character stories — Sofia the AI ethicist, James the self-taught ML engineer, and a third path yet revealed — show students that careers in AI span far beyond coding. The chapter surveys roles across the AI ecosystem: data scientists and ML engineers (technical), AI ethicists and policy analysts (critical/social), UX designers for AI products, data labelers and annotators (often overlooked), educators, journalists, lawyers, and community advocates. Emphasizes that every background — writing, art, science, social science, law — has a place in shaping how AI develops.

**Key Concepts:** data scientist, machine learning engineer, AI ethicist, policy analyst, UX design, data annotation, AI governance

**Opening Story:** Three Paths Into AI
**Featured Profiles:** Sofia (ethicist path), James (engineering path), and more
**OpenClaw Challenges:** Interview an AI professional (real or imagined), map your own path into AI, research one AI career in depth

---

### Chapter 15: Your Agent and Your Future
**Source:** `module7/textbook-chapter-15/chapter-15.md` ✅

**Chapter Summary:**
A letter to the student opens the final chapter: a reflection on how far they've come and what it means. Revisits everything built across seven modules (identity → perception → knowledge → learning → communication → ethics → futures). The chapter closes with forward-looking questions: What will you do with what you know? What kind of AI future do you want to help build? Students complete their Agent Design Journal capstone and prepare for the Expo (Module 7 lab). A final "You Are an AI Explorer" manifesto closes the book.

**Key Concepts:** agency, lifelong learning, digital citizenship, AI literacy, responsible innovation, capstone reflection

**Opening:** A Letter to You
**Closing:** You Are an AI Explorer — a manifesto and call to action
**OpenClaw Challenges:** Capstone reflection, Expo presentation preparation, write your own "AI manifesto"

---

## Chapter Status Summary

| Ch | Title | Module | Status |
|----|-------|--------|--------|
| 1 | What Is AI? | 1 | ✅ Complete |
| 2 | AI Through History — From Turing to Today | 1 | ✅ Complete (added March 2026) |
| 3 | How Computers See — Pixels, Patterns, Perception | 2 | ✅ Complete (split from chapter-2.md, March 2026) |
| 4 | How Computers Hear — Sound, Speech, Signals | 2 | ✅ Complete (split from chapter-2.md, March 2026) |
| 5 | The Logic of AI | 3 | ✅ Complete |
| 6 | AI Detectives | 3 | ✅ Complete |
| 7 | How AI Learns | 4 | ✅ Complete |
| 8 | Data — The Food AI Eats | 4 | ✅ Complete |
| 9 | Talking with AI | 5 | ✅ Complete |
| 10 | When AI Gets It Wrong | 5 | ✅ Complete |
| 11 | Algorithmic Bias | 6 | ✅ Complete |
| 12 | AI, Privacy, and Your Data | 6 | ✅ Complete |
| 13 | What AI Can and Cannot Do | 7 | ✅ Complete |
| 14 | Careers in AI and Technology | 7 | ✅ Complete |
| 15 | Your Agent and Your Future | 7 | ✅ Complete |

**Chapters complete:** 15 of 15 ✅
**Fixed March 2026:** Chapter 2 (AI Through History) created at `module1/textbook-chapter-2/chapter-2.md`
**Fixed March 2026:** Module 2 chapter-2.md split — Chapter 3 at `module2/textbook-chapter-3/chapter-3.md`, Chapter 4 at `module2/textbook-chapter-4/chapter-4.md`. Original combined file preserved at `module2/textbook-chapter-2/chapter-2.md`.

---

## Estimated Page Count

Based on content density and formatting comparable to middle-school textbooks (approximately 250–300 words per printed page, accounting for illustrations, sidebars, tables, and white space):

| Section | Chapters | Est. Pages |
|---------|----------|------------|
| Module 1 | Ch 1–2 | ~28 pp |
| Module 2 | Ch 3–4 | ~32 pp |
| Module 3 | Ch 5–6 | ~28 pp |
| Module 4 | Ch 7–8 | ~28 pp |
| Module 5 | Ch 9–10 | ~28 pp |
| Module 6 | Ch 11–12 | ~28 pp |
| Module 7 | Ch 13–15 | ~30 pp |
| Front matter | — | ~8 pp |
| **Total** | | **~210 pp** |

*Estimated total falls within the 180–200 page target range once Ch 2 is added and layout is finalized.*

---

*Compiled: March 2026 | Cross-Curriculum Assembly | AI Explorers Companion Textbook*
