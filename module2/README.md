# Module 2: Give Your Agent Senses — Vision & Audio Perception

> **Capability Unlock:** By the end of this module, your agent will be able to **see images and identify sounds.**

**Duration:** 2–3 weeks (10–15 class periods)
**Grade Level:** 6–8
**Prerequisites:** Module 1 — What Is AI? (agent with name + personality)

---

## 🤖 Your Agent Journey — Module 2 of 7

> **Arc:** *Build Your AI Assistant, Piece by Piece*

| Before M2 | After M2 |
|-----------|----------|
| Agent processes text only | ✅ Agent describes images |
| No sensory input | ✅ Agent identifies audio |
| Single-modal AI | ✅ Agent has multimodal perception |

**Previous unlock → Module 1:** Identity (name + personality)
**Next unlock → Module 3:** Give your agent a knowledge base (custom skill)

See your full progress tracker: [Your Agent Journey](../AGENT_JOURNEY.md)

---

## ⭐ KEY DELIVERABLE: Lab 2.4 — Connect Your Agent to a Hugging Face Vision Model

> This is the lab that unlocks the capability. Everything else in the module builds toward this moment.
> Students deploy a **real Hugging Face vision model** as a custom OpenClaw skill — their agent will literally be able to *see*.

---

## 1. Essential Questions

1. **How can I give my agent the ability to see?**
2. How do machines "see"? What does a computer actually do when it processes an image?
3. What is the difference between recognizing a pattern and understanding what it means?
4. What are the limits of perception models — when do they get it wrong, and why?
5. What new possibilities open up when your agent can perceive images and sound?
6. Who benefits (and who might be harmed) when AI gains the ability to identify people and objects in the real world?

---

## 2. "I Can" Statements

By the end of this module, students will be able to say:

- **I can** explain how a computer vision model processes an image (pixels → features → prediction).
- **I can** describe the difference between image classification, object detection, and image captioning.
- **I can** connect a vision model to my OpenClaw agent using the Hugging Face API.
- **I can** write a custom OpenClaw skill that wraps a Hugging Face model.
- **I can** test my agent's vision capability and evaluate where it succeeds and fails.
- **I can** explain what "multimodal AI" means and give a real-world example.
- **I can** train a simple image classifier using Google Teachable Machine and describe how it learns.
- **I can** discuss ethical implications of computer vision — surveillance, consent, and bias.

---

## 3. Standards Alignment

### AI4K12 — Big Idea 1: Perception
> *Computers perceive the world using sensors.*

| Standard | Description | Module 2 Connection |
|----------|-------------|---------------------|
| **1-A** | Computers input data from the world using sensors | Webcam as sensor; image/audio input to models |
| **1-B** | Data representation affects what computers can perceive | Pixels, frequency spectrograms, feature vectors |
| **1-C** | Perception models classify input into categories | Image classification, audio classification labs |
| **1-D** | Perception AI has real-world applications and limitations | Failure mode analysis; ethics discussion |

### CSTA K–12 CS Standards (2017)
| Standard | Description |
|----------|-------------|
| **2-AP-11** | Create clearly named variables storing data and using expressions | Skill code: variables for API keys, inputs, outputs |
| **2-AP-13** | Decompose problems into parts | Skill architecture: input → API call → output |
| **2-AP-16** | Incorporate existing code/libraries | Hugging Face API integration |
| **2-IC-20** | Describe tradeoffs between privacy and digital systems | Surveillance, facial recognition ethics |
| **2-IC-21** | Discuss how computing has impacted collaboration | AI in accessibility, medicine |

### ISTE Standards for Students (2016)
| Standard | Description |
|----------|-------------|
| **1d — Empowered Learner** | Use technology to demonstrate learning | Agent capability unlock as artifact |
| **4a — Innovative Designer** | Solve problems using design process | Skill design: define → build → test → iterate |
| **5b — Computational Thinker** | Collect data and use digital tools to analyze | Perception data collection + model evaluation |
| **6a — Creative Communicator** | Choose platforms and tools to share creatively | Agent demo + journal reflection |
| **7a — Global Collaborator** | Use digital tools to connect with learners globally | Hugging Face open-source community |

### Common Core State Standards (CCSS)
| Standard | Description |
|----------|-------------|
| **ELA-RST.6-8.3** | Follow multistep procedure in technical text | Lab 2.4 step-by-step skill instructions |
| **ELA-WHST.6-8.2** | Write explanatory/informational text | Agent Journal reflection; lab writeup |
| **ELA-SL.8.4** | Present findings, using appropriate detail | Capability unlock demo presentation |
| **Math-MP.1** | Make sense of problems and persevere | Debugging perception failures; iterating |
| **Math-MP.4** | Model with mathematics | Accuracy metrics; confidence scores |

---

## 4. Day-by-Day Pacing Calendar

> **Week 1: How Machines See**

| Day | Lesson / Activity | Type | Notes |
|-----|-------------------|------|-------|
| 1 | **Lesson 2.1:** How Do Computers See? (pixels → features → predictions) | Direct instruction + discussion | Hook: show model misclassification |
| 2 | **Lesson 2.2:** Image Recognition in the Wild — types of vision tasks | Lecture + examples | Classification vs. detection vs. captioning |
| 3 | **Activity:** Pixel Portrait — represent an image as a grid of numbers | Hands-on activity | Paper/digital; builds intuition for pixel data |
| 4 | **Lab:** Google Teachable Machine — train your own image classifier | Lab | Webcam required; low-floor entry point |
| 5 | **Lesson 2.3:** Teachable Machine Deep Dive + reflection | Discussion + journal | Where did it work? Where did it fail? |

> **Week 2: How Machines Hear + The KEY Lab**

| Day | Lesson / Activity | Type | Notes |
|-----|-------------------|------|-------|
| 6 | **Lesson 2.4:** How Computers Hear — audio as data (waveforms + spectrograms) | Direct instruction | Activity: Sound Sorter |
| 7 | **Tutorial:** Intro to Hugging Face — model hub tour, free account setup | Guided tutorial | Hugging Face account required (free, no credit card) |
| 8 | ⭐ **Lab 2.4 — KEY LAB:** Connect Your Agent to a Hugging Face Vision Model (Part 1) | Lab | Write the skill skeleton; set up API key |
| 9 | ⭐ **Lab 2.4 — KEY LAB:** Connect Your Agent to a Hugging Face Vision Model (Part 2) | Lab | Test with real images; debug and iterate |
| 10 | **Lab 2.4 Showcase:** Demo your agent's vision to a partner | Pair share + reflection | Capability unlock reflection in Agent Journal |

> **Week 3 (Flex / Extension): Audio + Ethics**

| Day | Lesson / Activity | Type | Notes |
|-----|-------------------|------|-------|
| 11 | **Bonus Lab:** Add audio classification to your agent (Hugging Face audio model) | Lab | Optional extension |
| 12 | **Lesson 2.5:** Ethics of Computer Vision — surveillance, consent, bias, facial recognition | Socratic seminar | Strong discussion potential |
| 13 | **Activity:** Teachable Machine Challenge — edge cases and failure modes | Hands-on | What breaks your model? |
| 14 | **Assessment Day:** Capability unlock check-in + reflection writing | Assessment | |
| 15 | **Module Wrap-Up:** Update Agent Journey, preview Module 3 | Celebration + transition | |

> **Key:** ⭐ = KEY LAB (Lab 2.4) — this is the central deliverable

---

## 5. Materials & Tech List

### Hardware
- [ ] Student devices (Chromebook, Mac, PC, or iPad — browser-based labs work on all)
- [ ] Webcams (built-in or USB) — required for Teachable Machine labs (Days 4–5)
- [ ] Microphones (built-in) — for audio activities (optional but recommended)

### Accounts & Services (all free, no credit card required)
- [ ] **Google Teachable Machine** — [teachablemachine.withgoogle.com](https://teachablemachine.withgoogle.com) — no account needed
- [ ] **Hugging Face** — [huggingface.co](https://huggingface.co) — free account, email only, no credit card
- [ ] **OpenClaw** — student instances from Module 1

### Software / APIs
- [ ] Hugging Face Inference API (free tier — sufficient for classroom use)
- [ ] OpenClaw skill development environment (from Module 1)
- [ ] A text editor (VS Code, Replit, or similar)

### Classroom Materials
- [ ] Printed or digital pixel grid worksheets (Pixel Portrait activity)
- [ ] Sample images for testing (provided in `/module2/activity-pixel-portrait/`)
- [ ] Sound clips for audio lab (provided in `/module2/activity-sound-sorter/`)

### Teacher Resources
- [ ] [Teacher Guide](./teacher-guide/) — lesson plans, facilitation notes, common bugs
- [ ] [Assessments](./assessments/) — rubrics, reflection prompts
- [ ] [Quiz: Perception Concepts](./quiz-perception-concepts/)

---

## 6. Module Arc Narrative

**How This Module Builds Toward the Capability Unlock**

The module is structured as a deliberate ramp from *understanding* to *doing*.

**Days 1–2 — Build the Mental Model:**
Students start by understanding *what* computers see — not magic, but math. Images are grids of numbers. Models are functions that transform those numbers into labels. The "pixel portrait" activity makes this concrete without any code.

**Days 3–5 — Experience It Firsthand (Low Stakes):**
Google Teachable Machine gives students a no-code path to training a real image classifier using their own webcam. This is intentionally low-floor — the goal is *experience*, not code. Students discover firsthand that training data matters, that models can be fooled, and that "AI" is something they can build themselves.

**Day 6 — Expand to Sound:**
Audio follows naturally from vision. Computers hear via waveforms and spectrograms — different encoding, same core idea (data → model → prediction). The Sound Sorter activity bridges vision concepts to audio.

**Day 7 — Meet the Tool That Enables the Unlock:**
The Hugging Face tutorial is deliberately placed *before* the key lab. Students need to understand the model hub before they can use it. They browse existing models, understand what "inference" means, and set up their free account.

**Days 8–9 — THE KEY LAB (Lab 2.4):**
This is where it all comes together. Students write a custom OpenClaw skill that calls a Hugging Face vision model API. They feed their agent an image. Their agent *sees* it and responds. This is the capability unlock — tangible, deployable, and genuinely exciting. The two-day format gives time for the inevitable debugging, which is itself a learning opportunity.

**Day 10 — Demonstrate and Reflect:**
Students show each other their agents' vision capabilities. The reflection captures not just "it worked" but "where did it fail, and why?" — building epistemic humility about AI perception alongside genuine pride in the achievement.

**Days 11–15 — Deepen and Extend:**
The final week extends to audio models, ethics, and edge cases. These are explicitly flex — teachers can spend more or less time based on their class. The ethics discussion (Day 12) is high-value and often runs long.

---

## 7. Agent Journey Progress Tracker

This module corresponds to **Unlock #2: Perception** in the full 7-module arc.

```
Agent Journey Progress:
[ Module 1 ] ✅ Identity        — Your agent has a name and personality
[ Module 2 ] 👁️  Perception     ← YOU ARE HERE
[ Module 3 ]    Knowledge       — Custom knowledge base
[ Module 4 ]    Memory          — Conversation memory
[ Module 5 ]    Action          — Tool use and automations
[ Module 6 ]    Communication   — Multi-channel delivery
[ Module 7 ]    Orchestration   — Multi-agent systems
```

**See the full tracker:** [AGENT_JOURNEY.md](../AGENT_JOURNEY.md)

After Lab 2.4, students should:
1. Open their Agent Design Journal
2. Write an entry: *"My agent can now [describe capability]. Here's a test I ran: [image/sound + result]. Here's where it surprised me: [reflection]."*
3. Check off **Unlock #2: Perception** in their journey tracker

---

## 8. Assessment Overview

### Formative
- **Exit tickets** after Days 1, 5, 7 (see teacher guide for prompts)
- **Lab 2.4 progress check** — mid-lab check-in: has student gotten a working API call?
- **Peer demo** (Day 10) — partner feedback on agent capability

### Summative
| Assessment | Description | Rubric Location |
|------------|-------------|-----------------|
| **Lab 2.4 Skill** | Working vision skill deployed to student's OpenClaw agent | [assessments/lab-2-4-rubric.md](./assessments/) |
| **Capability Unlock Reflection** | 1-page written reflection: What can your agent see? Where did it fail? Why does that matter? | [assessments/reflection-prompt.md](./assessments/) |
| **Perception Concepts Quiz** | 15-question quiz on vision/audio concepts, model types, Hugging Face basics | [quiz-perception-concepts/](./quiz-perception-concepts/) |

### Capability Unlock Reflection Prompt
> *Your agent can now see. What did you test? What worked? What failed — and what do you think caused the failure? What does it mean that a computer can now do something your parents thought only humans could do? What could you build next?*

### Ethical Discussion Assessment (Optional)
> *Should AI systems be allowed to identify people's faces in public spaces without consent? Take a position and support it with at least two pieces of evidence from class.*

---

## 9. Flex Options

### For Faster Classes / Extension
- **Bonus Lab:** Add an audio classification model to the agent alongside the vision model (full multimodal perception)
- **Creative Extension:** Build a "What's in my fridge?" app — student holds up phone to fridge, agent identifies ingredients
- **Research Project:** Compare 3 different Hugging Face image captioning models — which is most accurate? Most descriptive? Fastest?
- **Ethics Deep Dive:** Research a real case where computer vision caused harm (Amazon Rekognition, predictive policing) and present findings

### For Slower Classes / Scaffolding
- **Skip Day 3** (Pixel Portrait) if time is short — it's foundational but not required for Lab 2.4
- **Provide starter code** for Lab 2.4 skill skeleton — reduces time-to-first-success for struggling students
- **Pair programming** during Lab 2.4 — strong pairing strategy reduces debugging frustration
- **Teachable Machine only** path — some classes may not be ready for the Hugging Face API; Teachable Machine alone satisfies the "experience with perception AI" objective
- **Extend to 3 weeks** by adding a full day for ethics discussion and a final project presentation day

### For Different Contexts
- **No webcam?** The Teachable Machine lab can be done with uploaded images instead of live camera — still effective
- **Slow internet?** Pre-cache the Teachable Machine models and Hugging Face API responses; provide local alternatives if needed
- **Privacy concerns?** All Teachable Machine training can be done with non-personal images (objects, drawings); facial recognition is not a required part of this module

---

## Lessons & Labs in This Module

| Resource | Description |
|----------|-------------|
| [Lesson 2.1](./lesson-2-1-how-computers-see/) | How Computers See: pixels → features → predictions |
| [Lesson 2.2](./lesson-2-2-image-recognition/) | Image Recognition: classification, detection, captioning |
| [Lesson 2.3](./lesson-2-3-teachable-machine-lab/) | Teachable Machine Lab |
| [Lesson 2.4](./lesson-2-4-speech-recognition/) | How Computers Hear: audio as data |
| [Lesson 2.5](./lesson-2-5-openclaw-sees-hears/) | OpenClaw Sees & Hears: multimodal integration |
| ⭐ [Lab 2.4 — KEY LAB](./lab-image-classifier/) | Connect Your Agent to a Hugging Face Vision Model |
| [Lab: Sound Classifier](./lab-sound-classifier/) | Connect Your Agent to a Hugging Face Audio Model |
| [Activity: Pixel Portrait](./activity-pixel-portrait/) | Represent images as data |
| [Activity: Sound Sorter](./activity-sound-sorter/) | Represent audio as data |
| [Activity: Teachable Machine Challenge](./activity-teachable-machine-challenge/) | Train + break your own classifier |
| [Tutorial: How Computers See](./tutorial-how-computers-see/) | Guided reading + interactive |
| [Tutorial: Teachable Machine](./tutorial-teachable-machine/) | Step-by-step Teachable Machine walkthrough |
| [Quiz: Perception Concepts](./quiz-perception-concepts/) | Formative/summative assessment |
| [Textbook Chapter 2](./textbook-chapter-2/) | Student-facing reading |
| [Teacher Guide](./teacher-guide/) | Facilitation notes, common bugs, differentiation |
| [Assessments](./assessments/) | Rubrics and reflection prompts |

---

*Module 2 of 7 — Previous: [Module 1: What Is AI?](../module1/README.md) | Next: [Module 3: Give Your Agent a Knowledge Base](../module3/README.md)*

*Full lesson plans and labs in the subdirectories above.*
