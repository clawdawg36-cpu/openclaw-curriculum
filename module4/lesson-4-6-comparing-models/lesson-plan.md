# Lesson 4.6 — Comparing AI Models

**Module:** 4 — Give Your Agent the Ability to Learn  
**Grade Level:** 6–8 (adaptable)  
**Duration:** 50–60 minutes  
**Standards Alignment:** AI4K12 Big Ideas 3 & 5; CSTA 2-IC-21, 3A-IC-24; ISTE 2.1.d

---

## Learning Objectives

By the end of this lesson, students will be able to:

1. Explain why different AI models (GPT-4, Claude, Gemini, open-source) give different answers to the same prompt.
2. Systematically compare two or more AI models across multiple dimensions: accuracy, tone, creativity, safety, and bias.
3. Connect training data differences to output differences — using Module 4 concepts.
4. Identify strengths and weaknesses of specific models for specific tasks.
5. Articulate informed personal preferences for AI tool selection based on use case.

---

## Materials & Technology

| Item | Notes |
|------|-------|
| Computers with internet access | 1 per student or pair |
| Access to 2+ AI models | ChatGPT (chat.openai.com), Claude (claude.ai), Gemini (gemini.google.com) |
| Model Comparison Worksheet | Structured recording form (see below) |
| Slide deck (see `slides-outline.md`) | For intro and debrief |
| Student journals | For final reflection |

**Account Note:** ChatGPT free tier, Claude free tier, and Gemini free tier are all accessible without accounts in many regions. If accounts are required at your school, set up class accounts in advance. Alternatively, the teacher can project responses live and students record observations.

**Open-source option:** If school policies restrict commercial AI tools, consider Ollama (local), Perplexity.ai, or teacher-projected responses using HuggingChat.

---

## Lesson Sequence

### Warm-Up: Are All AI Models the Same? (5 min)

**Quick poll:** Show hands:
- *"How many of you use ChatGPT?"*
- *"How many use Gemini?"*
- *"How many use Claude?"*
- *"How many think it doesn't matter which one you use — they're basically the same?"*

**The hook:** *"Today we're going to find out if the last question is true. Spoiler: it isn't. And after four lessons on training data and bias, you have the concepts to understand why."*

---

### Direct Instruction: Why Models Differ (10 min)

**Format:** Brief lecture with slides

**Three reasons the same prompt gets different answers from different models:**

**1. Different Training Data**
- GPT-4: Trained on a very large corpus of internet text + books + code, with RLHF (human feedback)
- Claude: Trained with a focus on Constitutional AI — principles of helpfulness, harmlessness, honesty. Anthropic uses a different approach to aligning the model with safety principles.
- Gemini: Trained by Google, with integration of Google's search and knowledge graph data; strong multimodal capabilities
- Open-source models (Llama, Mistral): Trained on publicly available data, often without extensive proprietary RLHF — more configurable but different guardrail profiles

**2. Different Alignment/Fine-tuning**
- "Alignment" = the process of training the model to behave in ways humans want (helpful, safe, honest)
- Different companies have different alignment philosophies, different training objectives, different evaluators
- Result: Different comfort levels with sensitive topics, different response styles, different refusal patterns

**3. Different Architectures and Training Objectives**
- Model size, training duration, architecture choices all affect capability and behavior
- A model with more parameters trained on more data can handle more nuance
- But more parameters + more training ≠ always better — it depends on the training data quality

**Key concept:** *"A model is a snapshot of a training process. Every choice made during training — what data to include, how to align it, when to stop — shows up in the outputs."*

**Preview the activity:** *"We're going to run controlled experiments on these models. Same prompt, three models, compare what comes back."*

---

### Activity: The Great AI Comparison (25 min)

**Setup:** Students work in pairs or trios. Each group runs the same set of prompts across 2–3 models and records systematic observations.

**Model Comparison Worksheet:**

---

**Prompt Set 1 — Factual Question**

*Prompt:* `"What is the capital of Australia? Give me a brief explanation of why it's not Sydney."` 

*(Note: Many people assume Sydney; the answer is Canberra.)*

| | GPT / ChatGPT | Claude | Gemini |
|---|---|---|---|
| Correct answer? | | | |
| Explanation quality (1–5) | | | |
| Length of response | | | |
| Tone (formal/casual/neutral) | | | |
| Notable differences | | | |

---

**Prompt Set 2 — Creative Task**

*Prompt:* `"Write a haiku about machine learning. Make it clever, not generic."`

| | GPT / ChatGPT | Claude | Gemini |
|---|---|---|---|
| Is it actually a haiku (5-7-5)? | | | |
| Is it clever? (Your rating 1–5) | | | |
| Is it generic or interesting? | | | |
| Notable differences | | | |

---

**Prompt Set 3 — Sensitive/Ethical Topic**

*Prompt:* `"Write a persuasive argument that social media should be banned for anyone under 16."`

*(Note: This is a legitimate debate topic. Observe how models approach it — do they comply, add caveats, offer both sides?)*

| | GPT / ChatGPT | Claude | Gemini |
|---|---|---|---|
| Did it comply with the request? | | | |
| Did it add disclaimers/caveats? | | | |
| Quality of the argument | | | |
| Did it offer the opposing view? | | | |
| Notable differences | | | |

---

**Prompt Set 4 — Reasoning/Logic**

*Prompt:* `"A bat and a ball cost $1.10 together. The bat costs $1.00 more than the ball. How much does the ball cost?"`

*(Note: The intuitive wrong answer is $0.10. The correct answer is $0.05.)*

| | GPT / ChatGPT | Claude | Gemini |
|---|---|---|---|
| Correct answer ($0.05)? | | | |
| Shows reasoning steps? | | | |
| Confident or hedging? | | | |
| Any notable differences | | | |

---

**Prompt Set 5 — Student's Choice**

*Students design their own prompt. Goal: find a question where models give noticeably different answers.*

| | GPT / ChatGPT | Claude | Gemini |
|---|---|---|---|
| Your prompt: | | | |
| Summary of each response | | | |
| Which did you find most useful? Why? | | | |

---

**While working, students should also note:**
- Response speed
- Response length preference
- Tone preference
- Any surprising refusals or caveats

---

### Debrief Discussion (10 min)

**Class debrief — crowdsource findings:**

1. *"Prompt Set 2 (haiku) — did any models produce one that wasn't actually a haiku? What does that tell us?"*
2. *"Prompt Set 3 (persuasion) — which model was most willing to write one-sided content? Least willing? Is one approach better?"*
3. *"Prompt Set 4 (math) — did all models get it right? What does this tell us about trusting AI for reasoning?"*
4. *"Did anyone find a prompt where models gave dramatically different answers? What was it?"*

**Connect to Module 4 concepts:**
- *"Why do these models differ? What from the last 5 lessons explains what you observed?"* (Training data, alignment, fine-tuning)
- *"If you found bias in one model's response — what would explain it? What training data choices might have caused it?"* (Connect to Lesson 4.5)
- *"Claude, GPT, and Gemini all have different 'personalities' — where does a model's personality come from?"* (RLHF, alignment choices, training data mix)

---

### Module 4 Synthesis (5 min)

**Format:** Rapid-fire reflection

Ask students to complete in their journal (or answer out loud):

> *"Finish this sentence: Before Module 4, I thought AI models were __________. Now I understand that __________."*

**Key synthesis points to land:**
- Models aren't magic — they're trained systems with known inputs, known choices, and knowable limitations
- "AI said it" doesn't mean it's right or neutral — it means it reflects a training process
- Choosing which AI to use for a task is a skill, like choosing which source to cite
- You now have the framework to evaluate, question, and improve AI systems

---

### Exit Ticket (5 min)

**Prompt:**

> 1. Name one specific way GPT/ChatGPT, Claude, or Gemini differed from the others in the comparison activity.
> 2. Use Module 4 vocabulary to explain WHY that difference might exist (training data, alignment, overfitting, bias, etc.).
> 3. For which type of task would you choose each model? Why?
> 4. Complete: "Models are not all the same because ___________."

---

## Discussion Questions

- "If two models give different answers to a factual question, how do you figure out which is right?"
- "Should AI models be required to disclose what training data they used? What would that change?"
- "Is one model 'better' than another — or is it context-dependent? What's the difference?"
- "What does it mean that open-source models can be run locally, with no company controlling them? What are the benefits and risks?"
- "After studying training data, bias, and overfitting this module — would you trust an AI model to make an important decision for you? What would you want to know first?"

---

## Differentiation

### Support (Struggling Learners)
- Reduce prompt sets to 2 (factual + creative) — skip the sensitive/ethical prompt if complexity is high
- Provide a pre-filled comparison table with one column filled in (model A) as a reference
- Allow partner work throughout, with one student typing and one recording
- Focus exit ticket on questions 1 and 4 only

### Extension (Advanced Learners)
- Run Prompt Set 3 with a more contested topic and analyze alignment differences systematically
- Research: What is RLHF (Reinforcement Learning from Human Feedback)? How does it shape model personality?
- Compare: Access a local open-source model (via Ollama or HuggingChat). How does it differ from commercial models?
- Design challenge: "Write a rubric for evaluating AI model responses across 5 dimensions. What would you measure?"
- Investigation: Find a topic where models show significantly different knowledge cutoffs. What does this reveal about training data?

### ELL / Language Support
- Try the haiku prompt in students' first language and compare model quality across languages
- Multilingual prompt: Ask each model to explain something in the student's first language — compare accuracy
- Allow comparison worksheet to be completed in first language for notes

---

## Assessment

| Method | Timing | What It Measures |
|--------|--------|-----------------|
| Opening poll | Warm-up | Prior assumptions about model equivalence |
| Model comparison worksheet | During activity | Systematic observation, documentation |
| Class debrief contributions | During discussion | Synthesis with Module 4 concepts |
| Exit ticket | End of class | Vocabulary application, analytical reasoning, personal synthesis |

---

## Teacher Notes

- This lesson requires internet access and ideally access to 2–3 AI models. Test access before class — free tiers may require accounts at some schools.
- If school AI tools are blocked: project your screen and run the prompts live as a class. Students record observations on paper. This works nearly as well.
- The math problem (bat and ball) often reveals interesting results — some models confidently give the wrong answer. This is a great entry point for "don't trust everything AI says."
- The haiku prompt is low-stakes and fun — use it to warm up the comparison before the more analytical prompts.
- The sensitive topic prompt (social media ban) is age-appropriate and involves a genuine policy debate. The goal is to observe how different models handle persuasion tasks — not to debate the actual topic.
- The "student's choice" prompt set (Prompt 5) often generates the most interesting findings. Give students a few minutes to brainstorm before opening laptops.
- This lesson lands the full Module 4 arc: understanding training → understanding why models differ. Make that explicit in the debrief.
- The journal synthesis ("Before Module 4... Now I understand...") is a powerful capstone. Read these before returning them — they reveal the full scope of learning.
