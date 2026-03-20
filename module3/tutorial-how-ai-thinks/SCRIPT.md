# How AI Thinks — Full Narration Script
**Module 3 | Tutorial Video | ~7 Minutes**
**Target runtime: 7:00 | Word count: ~1,050 words (~150 wpm)**

---

## [INTRO — 0:00–0:30]

**[NARRATION]**
You've heard AI described as "smart," "intelligent," even "thinking." But what does that actually mean? Today we're going to pull back the curtain and show you exactly how AI reasons — from the ground up.

By the end of this video, you'll understand how AI turns the real world into numbers, how it makes decisions, where it shines, and — importantly — where it fails. Let's go.

**[ON-SCREEN TEXT]**
"How AI Thinks"
Module 3 • OpenClaw Academy

---

## [SECTION 1: Features & Representation — 0:30–2:00]

**[NARRATION — 0:30–1:00]**
Here's the first big idea: AI doesn't see the world the way you do. It can't look at a photo of a cat and just *know* it's a cat. It needs that cat — and everything else — converted into numbers.

We call those numbers **features**. A feature is any measurable property of something you want an AI to understand.

**[ON-SCREEN TEXT]**
`FEATURE = a measurable property`

**[NARRATION — 1:00–1:30]**
Take a simple example: an apple. To a human, it's red, round, and delicious. To an AI, it might be represented as:
- Color: [255, 40, 40] — that's RGB
- Diameter: 7.5 cm
- Weight: 182 grams
- Texture score: 0.82

That list of numbers is called a **feature vector** — it's the AI's way of representing the apple in a language it can work with.

**[ON-SCREEN TEXT]**
`Feature Vector: [255, 40, 40, 7.5, 182, 0.82]`

**[NARRATION — 1:30–2:00]**
Everything AI works with gets this treatment. Words become numbers. Images become grids of pixel values. Even sounds become frequency patterns. The magic of modern AI is largely about finding *which* features matter most — and representing them in ways that make patterns findable.

This process is called **representation learning**, and it's one of the most important ideas in all of machine learning.

**[ON-SCREEN TEXT]**
`Representation Learning = finding the right numbers`

---

## [SECTION 2: Decision Trees — 2:00–3:00]

**[NARRATION — 2:00–2:30]**
Now that AI has numbers to work with, how does it actually make decisions? Let's start with the simplest form of AI reasoning: the **decision tree**.

You've used decision trees your whole life — you just didn't call them that. "Is it raining? → Yes → Grab an umbrella. → No → Leave it at home." That's a decision tree.

**[ON-SCREEN TEXT]**
`Decision Tree = a flowchart of yes/no questions`

**[NARRATION — 2:30–3:00]**
AI decision trees work the same way, but they're built automatically from data. The AI looks at thousands of examples, figures out which questions best separate the answers, and builds a branching tree of rules.

Here's a toy example — classifying fruit:
- Is it red? → Yes → Is it round? → Yes → It's probably an apple.
- Is it red? → No → Is it long and yellow? → Yes → It's a banana.

Simple. Interpretable. And surprisingly powerful for many real problems.

**[ON-SCREEN TEXT]**
`Interpretable = you can read the rules`
`(Unlike a neural network's "black box")`

---

## [SECTION 3: Pattern Recognition — 3:00–4:00]

**[NARRATION — 3:00–3:30]**
Decision trees find rules by hand. But most modern AI goes further — it finds **patterns** in data that humans never explicitly wrote down.

Pattern recognition is how AI learns to identify spam, detect fraud, recognize your face, or predict what movie you'll like. The AI isn't following rules you gave it — it's discovering rules on its own.

**[ON-SCREEN TEXT]**
`Pattern Recognition = finding rules in data automatically`

**[NARRATION — 3:30–4:00]**
Here's how it works at a high level: you show the AI thousands of labeled examples. A thousand photos labeled "cat" and a thousand labeled "not cat." The AI adjusts its internal weights — those numbers we talked about — until it can reliably tell the difference.

This is called **supervised learning**: you supervise the AI by providing correct answers, and it learns to generalize.

**[ON-SCREEN TEXT]**
`Supervised Learning = learn from labeled examples`
`Generalize = apply what you learned to new data`

---

## [SECTION 4: Where AI Succeeds & Fails — 4:00–5:00]

**[NARRATION — 4:00–4:30]**
So if AI can find patterns in data, can it do anything? Not quite. Let's talk about where it wins — and where it stumbles.

AI is excellent at:
- Recognizing patterns in large amounts of data
- Being consistent — it won't have a bad day
- Running fast on tasks it's trained for

**[ON-SCREEN TEXT]**
✅ Pattern matching at scale
✅ Consistency
✅ Speed on known tasks

**[NARRATION — 4:30–5:00]**
But AI fails in predictable ways too:

It can't **reason outside its training data**. Ask it something genuinely new, and it'll confabulate — make something up that sounds right but isn't.

It can be **fooled by adversarial examples** — tiny changes to inputs that flip its answer completely.

And it **doesn't know what it doesn't know** — unless you ask it to.

**[ON-SCREEN TEXT]**
❌ Out-of-distribution reasoning
❌ Adversarial inputs
❌ Calibrated uncertainty (without prompting)

---

## [SECTION 5: Chain-of-Thought — 5:00–6:00]

**[NARRATION — 5:00–5:30]**
Here's a game-changer: you can actually make AI reason better just by asking it to show its work. This is called **chain-of-thought prompting**.

Instead of asking "What's 17 × 24?" and hoping for the best, you say: "Think through this step by step." The AI then walks through each step — and gets the right answer far more reliably.

**[ON-SCREEN TEXT]**
`Chain-of-Thought = ask AI to show its steps`
`"Think step by step" → dramatically better accuracy`

**[NARRATION — 5:30–6:00]**
Why does this work? Because when an AI generates intermediate steps, each step becomes context for the next one. The model is essentially building a scratchpad in plain language.

It's one of the simplest, highest-leverage prompting techniques available — and it works on almost every large language model. When you want better reasoning, don't just ask for an answer. Ask for the reasoning process.

**[ON-SCREEN TEXT]**
Bad prompt: "Is this safe to eat?"
Better prompt: "List what you know about each ingredient, then decide."

---

## [SECTION 6: Lab Preview — 6:00–6:30]

**[NARRATION — 6:00–6:30]**
In the next part of this module — the lab — you're going to put this into practice. You'll take an AI agent that currently has no reasoning skill, and you'll give it one.

You'll wire up a chain-of-thought pipeline so your agent stops just guessing and starts showing its work. By the end, your agent will walk through problems step by step — and you'll be able to see exactly why it reached its conclusion.

**[ON-SCREEN TEXT]**
🔬 Coming Up in the Lab:
"Give your agent a reasoning skill it doesn't have yet"

---

## [OUTRO — 6:30–7:00]

**[NARRATION — 6:30–7:00]**
Let's recap what we covered today:

AI turns the world into **feature vectors** — lists of numbers. It uses tools like **decision trees** to make interpretable choices, and **pattern recognition** to find rules automatically. It has real strengths — and real failure modes you should know. And **chain-of-thought prompting** is your best tool for getting AI to reason carefully.

That's how AI thinks. Now go build something that thinks better.

**[ON-SCREEN TEXT]**
🏅 Complete this module to earn the **Logic Builder** badge

**[MUSIC OUT]**

---

*End of Script*
