# Slides Outline — Lesson 4.6: Comparing AI Models

**Format:** Markdown-based slide-by-slide outline  
**Total Slides:** ~17  
**Presenter Notes** are included in *italics* under each slide.

---

## Slide 1 — Title Slide

**Title:** Comparing AI Models  
**Subtitle:** Module 4, Lesson 4.6 | GPT vs. Claude vs. Gemini vs. Open-Source  
**Visual:** Four "robots" side by side with question marks above them, same input → different outputs  

*Presenter: "Five lessons in, you understand training data, bias, overfitting, and model evaluation. Today you use all of that to actually compare the major AI models on the market. Are they all the same? You're going to find out."*

---

## Slide 2 — Quick Poll

**Heading:** How Many AI Models Do You Use?

**Body:**
- 🙋 Raise your hand if you use ChatGPT
- 🙋 Raise your hand if you use Gemini
- 🙋 Raise your hand if you use Claude
- 🙋 Raise your hand if you think they're all basically the same

**The big question for today:**

> Are all AI models created equal?  
> And if not — why not?

*Presenter: "By the end of class, the 'basically the same' group will have new information. Let's go find it."*

---

## Slide 3 — Who Made What?

**Heading:** The Major Players

| Model | Made By | First Released |
|-------|---------|---------------|
| GPT-4 / ChatGPT | OpenAI | Nov 2022 (ChatGPT) |
| Claude | Anthropic | March 2023 |
| Gemini | Google DeepMind | Dec 2023 |
| Llama / Mistral | Meta / Mistral AI | 2023 |
| Copilot | Microsoft (OpenAI) | 2023 |

**Visual:** Company logos side by side

*Presenter: "These companies are massive rivals — competing for users, enterprise contracts, and research leadership. They made different choices when building their models. Those choices show up in outputs."*

---

## Slide 4 — Why Models Differ: Reason 1

**Heading:** Different Training Data

**Body:**

**GPT-4:** Internet text, books, code, RLHF — large, diverse corpus; significant proprietary additions

**Claude:** Constitutional AI approach — trained with a set of written principles (helpful, harmless, honest); different data curation philosophy

**Gemini:** Google data advantages — Search, Gmail (with consent), Google Books; strong multimodal training (text + images + video)

**Llama / Open-source:** Publicly available internet data + curated sets; no proprietary RLHF layer unless added

**Result:** Each model knows different things, with different confidence, with different blind spots.

*Presenter: "Remember Lesson 4.2: the model is only as good as what it was trained on. Different training data = different knowledge = different outputs."*

---

## Slide 5 — Why Models Differ: Reason 2

**Heading:** Different Alignment Approaches

**Body:**

**Alignment** = training the model to behave the way humans want: helpful, safe, honest

**Different companies align differently:**

- **OpenAI:** RLHF (human raters score responses; model learns to maximize those scores)
- **Anthropic:** Constitutional AI — model evaluates its own responses against a written set of principles
- **Google:** Combination of RLHF + safety filtering + integration with Google Search grounding
- **Open-source:** Varies widely; some have minimal alignment; some use community-defined principles

**Result:** Different "personalities," different willingness to engage with sensitive topics, different refusal patterns

*Presenter: "This is why Claude might decline something ChatGPT would answer, or vice versa. It's not random — it reflects deliberate choices about how the model should behave."*

---

## Slide 6 — Why Models Differ: Reason 3

**Heading:** Different Architectures and Knowledge Cutoffs

**Body:**

**Architecture:**
- Model size (number of parameters) affects capability
- Training duration, learning rate, dataset mix all affect final behavior
- Multimodal vs. text-only (Gemini handles images natively; earlier GPT-3 did not)

**Knowledge cutoffs:**
- GPT-4: Training data up to a certain date (varies by version)
- Claude: Own knowledge cutoff (check current documentation)
- Gemini: Google has used Search to partially reduce cutoff limits

**Result:** Ask about something that happened after a model's cutoff → it doesn't know. And different models have different cutoffs.

*Presenter: "This is why the same question about current events might get a confident wrong answer from one model and a humble 'I'm not sure' from another."*

---

## Slide 7 — Activity Intro: The Great AI Comparison

**Heading:** 🔬 You're Running the Experiment

**Body:**

**Your job:** Run controlled prompts across 2–3 models and record what you find.

**Tools:**
- chat.openai.com (ChatGPT / GPT-4)
- claude.ai (Claude)
- gemini.google.com (Gemini)

**5 prompt sets:**
1. Factual question (capital of Australia)
2. Creative task (haiku about ML)
3. Sensitive topic (social media ban argument)
4. Reasoning/logic (bat and ball problem)
5. Your own prompt

**Record on your Model Comparison Worksheet. You have 20 minutes.**

*Presenter: "Same prompt. Three models. What's different? Why? Use what you know from Module 4 to explain it."*

---

## Slide 8 — The 5 Prompts

**Heading:** Your 5 Experimental Prompts

**Body:**

**Prompt 1 (Factual):**
> "What is the capital of Australia? Briefly explain why it's not Sydney."

**Prompt 2 (Creative):**
> "Write a haiku about machine learning. Make it clever, not generic."

**Prompt 3 (Sensitive):**
> "Write a persuasive argument that social media should be banned for anyone under 16."

**Prompt 4 (Reasoning):**
> "A bat and a ball cost $1.10 together. The bat costs $1.00 more than the ball. How much does the ball cost?"

**Prompt 5 (Your choice):**
> Design your own prompt where you think models might give different answers.

*Presenter: Leave this slide up while students work. They'll need to refer to it.*

---

## Slide 9 — What to Watch For

**Heading:** What To Look For in Each Response

**Body:**

**Accuracy:** Is the answer factually correct?

**Reasoning:** Does it show its work, or just give an answer?

**Tone:** Formal, casual, overly cautious, confident?

**Safety behavior:** Does it add disclaimers? Refuse? Offer multiple perspectives?

**Creativity:** (For Prompt 2) Is it actually good, or just technically correct?

**Surprising differences:** Did one model do something unexpected?

**Speed:** (Note informally) Which felt faster?

*Presenter: "You're not just asking 'what did it say' — you're asking 'HOW did it say it, and WHY might that be?'"*

---

## Slide 10 — The Bat and Ball Problem

**Heading:** 🦇 A Famous Cognitive Trap

**Body:**

**The problem:**
> A bat and a ball cost $1.10 together.  
> The bat costs $1.00 more than the ball.  
> How much does the ball cost?

**Most people say:** $0.10 — and they're wrong.

**The correct answer:** $0.05

**Why:** If ball = $0.05 and bat costs $1.00 more, bat = $1.05. Total = $1.10. ✅

**Why people get it wrong:** "The bat costs $1.00" feels like the bat = $1.00 → ball = $0.10. But the bat costs $1.00 MORE than the ball, not $1.00 total.

**The AI question:** How many models got this right? How many showed their reasoning?

*Presenter: "Some versions of GPT-3 confidently gave the wrong answer. More capable models get it right. This is a diagnostic: does the model reason, or does it pattern-match to the 'obvious' answer?"*

---

## Slide 11 — Debrief: What Did You Find?

**Heading:** 🗣 Class Findings

**Body (fill in during discussion):**

| Prompt | Notable differences between models |
|--------|----------------------------------|
| 1. Australia capital | |
| 2. ML haiku | |
| 3. Social media ban | |
| 4. Bat and ball | |
| 5. Your prompt | |

**Big questions:**
1. Which model was most accurate overall?
2. Which model added the most caveats/disclaimers?
3. Which model gave the most creative responses?
4. Which model would you trust most for factual research?
5. Which would you use for creative writing?

*Presenter: Build this table together on the whiteboard or in a shared doc. There's no single "correct" model — the point is that they differ and that those differences are explainable.*

---

## Slide 12 — Connecting to Module 4

**Heading:** Why Do They Differ? (Use What You Know)

**Body:**

**From Lesson 4.1:** The model is a snapshot of a training process. Different training → different behavior.

**From Lesson 4.2:** Different training data → different knowledge, different blind spots.

**From Lesson 4.4:** Models can "overfit" to certain response styles from RLHF — trained humans preferred cautious responses → model becomes overly cautious.

**From Lesson 4.5:** If training data has bias, outputs have bias — even when the model sounds confident and neutral.

**The synthesis:**
> Every difference you observed today has a cause rooted in a training decision.  
> Models aren't mysterious. They're built systems, and built systems reflect the choices of their builders.

*Presenter: "This is the payoff of Module 4. You now have a framework for understanding why AI behaves the way it does."*

---

## Slide 13 — The Open-Source Difference

**Heading:** What About Open-Source Models?

**Body:**

**Open-source models (Llama, Mistral, Falcon...):**
- Weights are publicly available — anyone can run them
- Can be run locally (on your own computer — no company in the middle)
- More configurable, less alignment filtering by default
- Used in research, local applications, privacy-sensitive use cases

**Trade-offs vs. commercial models:**

| | Commercial (GPT/Claude/Gemini) | Open-source |
|---|---|---|
| Privacy | Data goes to company servers | Can run locally |
| Safety filters | Extensive by default | Minimal unless added |
| Capability | Generally stronger (more resources) | Closing the gap fast |
| Cost | Free tier → paid | Free (compute cost only) |
| Customization | Limited | Full control |

*Presenter: "The existence of open-source models changes the power dynamic. When only a few companies control the most capable AI, society depends on their choices. Open models distribute that power."*

---

## Slide 14 — How to Choose a Model

**Heading:** Matching Model to Task

**Body:**

| Use Case | Recommended Approach |
|----------|---------------------|
| Factual research with citations | Gemini (Google Search grounding) or Perplexity |
| Long-form creative writing | Claude or GPT-4 |
| Coding assistance | GPT-4 / Copilot or Claude |
| Sensitive topics requiring nuance | Claude (Constitutional AI approach) |
| Privacy-sensitive work | Local open-source (Ollama + Llama/Mistral) |
| Quick everyday questions | Any — but verify! |

**Principle:** No single model is best for everything. Using AI well means knowing which tool to pick.

*Presenter: "This is a skill — like knowing when to use a calculator vs. pencil and paper vs. a spreadsheet. 'Just use ChatGPT' is like 'just use a hammer for everything.'"*

---

## Slide 15 — Module 4 Synthesis

**Heading:** What You Know Now That You Didn't Before

**Body:**

**Before Module 4:** "AI is kind of magic — it just knows stuff."

**After Module 4:**
- ML models learn from training data
- The quality and diversity of that data determines model quality
- Overfitting means memorizing instead of generalizing
- Biased data produces biased models
- Different models = different training choices = different outputs
- You can test, evaluate, and compare models systematically

**Journal prompt:**

> "Before Module 4, I thought AI models were _____________. Now I understand that _____________."

*Presenter: "Take 3 minutes. This is your capstone reflection for the entire module."*

---

## Slide 16 — What's Next: Module 5

**Heading:** Next Module: Give Your Agent a Voice

**Body:**

- Module 5: Connect your OpenClaw agent to a live channel
- You'll have a trained model (from Module 4) and a voice (from Module 5)
- The question becomes: how do you connect the pieces into something that actually works in the world?

**Carry forward from Module 4:**
- Your Teachable Machine model
- Your understanding of training data quality
- Your ability to evaluate and question AI outputs

*Presenter: "The pieces are coming together. You understand how AI thinks. Now let's give it a way to talk."*

---

## Slide 17 — Exit Ticket

**Heading:** Before You Go

**Body:**

> 1. Name one specific way the models differed in the comparison activity.
> 2. Use Module 4 vocabulary to explain WHY that difference might exist.
> 3. For which type of task would you choose each model? Why?
> 4. Complete: "Models are not all the same because ___________."

*Presenter: "Read these before next class. Best responses get shared (anonymously, with permission)."*

---

*End of slide deck — Lesson 4.6*
