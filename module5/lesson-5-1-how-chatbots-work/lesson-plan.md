# Lesson 5.1 — How Chatbots Work

**Module:** 5 — Give Your Agent a Voice  
**Duration:** 1 period (~50 minutes)  
**Grade Level:** 7–8 (adaptable for 9–12)  
**Prerequisites:** Modules 1–4 (students have a working OpenClaw agent)

---

## 🔗 Through-Line Connection

> *"You've built an agent. You've trained it. You've given it knowledge. But have you ever stopped to wonder: what is actually happening when it answers you?"*

Students have been using language models throughout this course without fully understanding the mechanism underneath. Lesson 5.1 pulls back the curtain. By the end of class, students understand that chatbots are not "smart" in the human sense — they are next-token prediction machines operating on statistical patterns. This understanding is foundational for Module 5's deeper work on prompt engineering and, ultimately, for understanding why careful prompting matters.

**Bridge to Lesson 5.2:** Once students understand how chatbots predict tokens, they'll see exactly *why* a specific, well-crafted prompt gets better results than a vague one.

---

## 🎯 Learning Objectives

By the end of this lesson, students will be able to:

1. Explain what a "token" is and why AI models think in tokens, not words.
2. Describe next-token prediction in plain language using the autocomplete analogy.
3. Define "context window" and explain why it matters for conversation quality.
4. Articulate at least two implications of the next-word prediction model for how chatbots behave.
5. Distinguish between "understanding" and "predicting" in the context of AI language models.

---

## 📋 Materials & Setup

| Item | Notes |
|------|-------|
| Projector / display | For token visualizer demo |
| Computers or tablets (optional) | Students can follow along with tokenizer |
| Whiteboard or chart paper | For drawing the prediction pipeline |
| Sticky notes (2 colors) | For the "build a sentence" activity |
| Student journals/notebooks | For reflection prompts |

**Teacher Prep:**
- Open platform.openai.com/tokenizer in a browser tab (free, no login required)
- Prepare a few example sentences to tokenize live (see Segment 1)
- Optional: have Claude or ChatGPT open to demo context window effects

---

## ⏱️ Lesson Outline

### Opening: The Autocomplete Experiment (5 min)

**No context, just the activity:**

Write this on the board, uncompleted:
> *"The cat sat on the ___"*

Ask 5 students for their answer. They'll all say "mat" or something similar. Ask:
- *"How did you know what word came next?"*
- *"Were you 'thinking' or were you pattern-matching from things you've read?"*

Then write: *"The quantum field fluctuation disrupted the ___"*

Ask again. Harder, right? Why?

**Bridge:** *"Your phone does this all the time. So does your AI agent. Today we're going to find out exactly how — and why it matters."*

---

### Segment 1: What Is a Token? (10 min)

**Concept: Tokens, Not Words**

Explain: AI language models don't think in words. They think in **tokens** — chunks of text that might be a word, part of a word, a space, or punctuation.

**Live Demo — The Tokenizer:**
- Open platform.openai.com/tokenizer
- Type: `Hello, how are you?` → Show the 6 tokens, each color-coded
- Type: `Unbelievable` → Show it splits into `Un` + `believ` + `able`
- Type: `ChatGPT` → Show it's one token; `openai` may be two
- Type a sentence in Spanish or emoji → Show different tokenization

**Key questions to ask students:**
- *"Why do you think the AI doesn't just work with words?"*
- *"What does it mean that numbers are tokenized differently?"*

**Explain:** Models have a fixed "vocabulary" of ~50,000 tokens. Every piece of text — whether a question, a story, or code — gets broken into this vocabulary before the model ever sees it.

**Analogy:** Think of tokens like puzzle pieces. The model was trained to recognize which puzzle pieces fit together in what patterns.

---

### Segment 2: Next-Token Prediction (12 min)

**Concept: The Core Mechanism**

Draw this on the board:

```
[Token 1] [Token 2] [Token 3] → Predict [Token 4]
"The"    "cat"    "sat"    →   ???
```

Explain the core idea:
- A language model is trained to look at a sequence of tokens and predict what comes next.
- It doesn't "know" the answer. It computes a **probability distribution** over all possible next tokens.
- The most likely token (or a random draw from the top candidates) becomes the next output.
- Then that token gets added to the sequence, and we predict again — one token at a time.

**Analogy: Autocomplete on steroids**
> *"Your phone's autocomplete suggests the next word based on your recent words. A language model does the same thing — but it was trained on hundreds of billions of words, so it's learned patterns far beyond what any phone keyboard knows."*

**Class Activity: "Human Token Prediction" (5 min)**
1. Teacher writes a sentence on the board, covering the last word.
2. Students vote (thumbs up/down or raise hands) on which of 4 candidate words is most likely.
3. Reveal. Discuss why some words feel "wrong" even if grammatically valid.
4. Key insight: this is probability, not meaning.

**Critical question:** *"If the model is just predicting the next word, how does it write a whole story? Or explain a concept?"*

Walk through: Each prediction feeds back in. The model generates token by token, building up a response. It's like a chain reaction — and the whole system can produce surprisingly coherent text without ever "understanding" anything.

---

### Segment 3: Context Windows (8 min)

**Concept: What the Model Can "See"**

Introduce the term: **context window** — the total amount of text the model can consider at once.

Draw a sliding window:

```
[==== CONTEXT WINDOW (e.g., 4,000 tokens) ====]
... [older conversation] ... [recent messages] [your current prompt]
```

Key points:
- Everything inside the window is what the model uses to make predictions.
- Older messages outside the window are **forgotten**. The model doesn't remember them.
- Longer context windows = more expensive to run, but better at maintaining long conversations.
- This is why chatbots can seem to "forget" what you said earlier in a long conversation.

**Analogy:** Imagine you're reading a book with a piece of cardboard that shows only 5 pages at a time. You can only answer questions based on those 5 pages. If the answer was on page 2 and you're now on page 10, the cardboard has moved on — and so have you.

**Demo (if computers available):**
- Have students open a chat with their AI agent.
- Tell it your name and something specific at the start.
- Chat for a while (or paste in a long block of text to fill the window).
- Then ask: *"What's my name?"*
- Note what happens.

**Discussion:** *"What does this tell us about how our agent 'remembers' things? What are the limitations?"*

---

### Segment 4: Implications — What This Means for You (10 min)

**Connecting mechanism to behavior**

Now that students understand the core mechanism, surface the implications:

**Ask students:** *"Knowing that chatbots work by predicting the next token, what would you expect to be true about them?"*

Guide toward:
1. **Confident but wrong** — The model predicts the most "probable" sounding text. Probable ≠ true. This is why hallucinations happen.
2. **Sensitive to phrasing** — Different words → different tokens → different probability distributions → different outputs. Your word choice *literally* changes what the model generates.
3. **Context-dependent** — The model uses everything in its context window. The more relevant context you give, the better the prediction.
4. **No persistent memory** — Each conversation starts fresh. The model doesn't remember you.

**Bridge to Module 5's arc:**
> *"This is exactly why prompt engineering matters. The model is predicting based on what you give it. If you give it vague input, you'll get probabilistic-but-vague output. If you give it rich, specific context, you'll get better predictions — and better answers. That's what we're building toward for the rest of this module."*

---

### Closing & Exit Ticket (5 min)

**Summarize the three big ideas:**
1. Tokens — AI thinks in chunks, not words
2. Next-token prediction — one probability at a time
3. Context windows — what the model can see is limited

**Exit Ticket (students write in journals, 2 min):**

Choose one:
1. Explain how a chatbot generates a response, as if you're explaining it to a 5th grader.
2. Why might a chatbot confidently give you wrong information? Use today's concepts in your answer.
3. What's one thing you now understand about your AI agent that you didn't before today?

---

## 📊 Assessment

| Method | Description |
|--------|-------------|
| Class activity participation | Human token prediction game |
| Exit ticket | Shows conceptual understanding of mechanism |
| Journal entry | Reflection connecting to prior agent experience |
| Observation | Student questions and "aha moments" during demo |

---

## 🔧 Differentiation

**For students who finish early / advanced:**
- Research: What's the difference between GPT-3 and GPT-4 in context window size? What did that unlock?
- Try to "trick" the tokenizer — find a word that splits unexpectedly
- Explore: What is "temperature" in language models? How does it affect token selection?

**For students who struggle with the concepts:**
- Focus on the autocomplete analogy — it's the most accessible entry point
- Use physical sticky notes to model token prediction (write words on notes, arrange and predict)
- Pair with a stronger student for the context window demo

**For ELL students:**
- The tokenizer demo is especially interesting — type in your home language and watch how it tokenizes differently
- This is a natural opening to discuss how models trained mostly on English may perform differently in other languages

---

## 💬 Discussion Questions

1. *"Your phone's autocomplete knows your style of texting. A language model was trained on everyone's writing. What's the difference — and which would you trust more for personal advice?"*
2. *"If a chatbot has no memory between conversations, is it the 'same' chatbot every time? Does that matter?"*
3. *"We said the model predicts the 'most probable' next token. Is the most probable answer always the best answer?"*
4. *"What kinds of questions would a next-token predictor be good at answering? What kinds would it be bad at?"*

---

## 📎 Slide Outline

See `slides-outline.md` for the full slide-by-slide guide.

**Slide summary:**
1. Title: "How Chatbots Work — Under the Hood"
2. Warm-up: The autocomplete sentence completion
3. Tokens — what they are, the tokenizer demo
4. Next-token prediction diagram
5. "Human Token Prediction" activity slide
6. Context window — the sliding window diagram
7. Four implications of next-token prediction
8. Bridge: Why prompt engineering matters
9. Exit ticket choices

---

## 🔗 Connections & Resources

- **OpenAI Tokenizer:** https://platform.openai.com/tokenizer
- **Andrej Karpathy's "Intro to LLMs" talk (YouTube):** accessible overview of the mechanism
- **3Blue1Brown: "Attention in transformers" (YouTube):** visual explanation of context windows
- **Next Lesson:** 5.2 — The Art of the Prompt (building on today's mechanism understanding)
- **Module connection:** Lesson 5.6 will show how these text-generating agents connect to live channels

---

*Lesson authored for the OpenClaw AI Curriculum | Module 5: Give Your Agent a Voice*
