# M3 Lab: Build Your First OpenClaw Skill

## 🎯 What You're Doing Today

You're going to give your AI agent a **brand-new superpower** — a skill it didn't have before.

By the end of this lab, you'll be able to ask your agent to do something specific, and it will use your custom skill to actually do it. That's not just using AI — that's **extending** it.

> **Through-line:** "You just gave your agent a new superpower — a skill it didn't have before."

---

## 🧠 Before You Start: Two Big Ideas

### Idea 1: What is a skill?

Think of your AI agent like a person with a toolbelt. When you ask them a question, they can:
- Answer from memory (built-in knowledge)
- **Reach into their toolbelt and use a specific tool**

A **skill** is one of those tools. It's a set of instructions that tells the agent:
- What this tool is called
- What it does
- What information it needs
- What it gives back

### Idea 2: How does the agent know when to use it?

The agent reads the skill's description and decides: *"Does this request match what this tool does?"*

If yes — it uses the tool. If no — it answers from memory.

That decision process is called **tool use** or **function calling**. It's one of the most important things modern AI can do.

---

## 🛠️ Pick Your Skill

Choose **one** of the four options below. Each has its own walkthrough section.

| Option | Skill Name | Best For |
|--------|-----------|----------|
| 1 | 🌤️ Weather | Students who like science/nature |
| 2 | 😂 Joke Generator | Students who love humor |
| 3 | 📚 Vocabulary Quiz | Students who love words/reading |
| 4 | 🔍 Mini-Encyclopedia | Students with a specific passion topic |

---

## Option 1: 🌤️ Weather Skill

**What it does:** Ask "What's the weather in Tokyo?" and your agent actually fetches real, live weather data — not a guess.

**Why it's cool:** This shows the difference between AI *knowing* things vs. AI *looking things up*. Weather changes every hour — AI can't know it from memory!

### Step 1: Create your skill folder

Navigate to your OpenClaw skills directory:
```
openclaw-curriculum/
  my-skills/
    weather/         ← create this
      SKILL.md       ← create this file
```

### Step 2: Write your SKILL.md

Copy this into your `SKILL.md` file:

```markdown
# Weather Skill

## What This Skill Does
Gets real-time weather information for any city in the world.

## When to Use It
Use this skill when someone asks about:
- Current weather in a city
- Temperature right now
- Whether it's raining
- What to wear outside

## How to Use It
Fetch weather data from wttr.in using this URL format:
  https://wttr.in/[CITY]?format=j1

Replace [CITY] with the city name the user asked about.
Use the `temp_C` and `weatherDesc` fields from the response.

## Example
User: "What's the weather like in Paris?"
→ Fetch: https://wttr.in/Paris?format=j1
→ Reply: "It's currently 18°C and partly cloudy in Paris!"
```

### Step 3: Test your skill

Ask your agent:
- "What's the weather in New York?"
- "Is it raining in London right now?"
- "What's the temperature in Sydney today?"

### Step 4: Reflect

In your worksheet, answer:
1. What happened when you asked before having the skill? What did the agent say?
2. What happened after? How was the answer different?
3. Where does the data actually come from?

---

## Option 2: 😂 Joke Generator Skill

**What it does:** Ask your agent for a specific kind of joke (knock-knock, pun, dad joke, etc.) and it generates one in that exact style.

**Why it's cool:** You're teaching your agent *how* to be funny — in a specific, structured way.

### Step 1: Create your skill folder

```
my-skills/
  joke-generator/
    SKILL.md
    joke-styles.md    ← optional: your style guide
```

### Step 2: Write your SKILL.md

```markdown
# Joke Generator Skill

## What This Skill Does
Generates jokes in a specific style on demand.

## When to Use It
Use this skill when someone asks for:
- A joke
- Something funny
- A knock-knock joke
- A pun, dad joke, or riddle
- A joke about a specific topic

## How to Use It
1. Identify the joke style requested (knock-knock, pun, dad joke, riddle, one-liner)
2. Identify the topic (optional — can be anything!)
3. Generate a joke that fits the style AND the topic

## Joke Styles

**Knock-knock:** Two-person call-and-response format
  "Knock knock" / "Who's there?" / [setup] / [setup + "who?"] / [punchline]

**Dad joke:** Groan-worthy pun, usually obvious wordplay
  Short, self-contained, maximum eye-roll potential

**Pun:** A play on words with double meanings
  Usually one or two sentences

**Riddle:** Question + surprising answer
  "What has hands but can't clap? A clock!"

**One-liner:** Single sentence, punch at the end

## Example
User: "Tell me a dad joke about pizza"
→ "Why did the pizza maker go to therapy? He had too many issues with his crust."
```

### Step 3: Customize it!

Add your own joke style to `joke-styles.md`. You could invent:
- "Sci-fi jokes" — all jokes are set in space
- "Animal jokes" — punchlines always involve animals
- "School jokes" — jokes about homework, teachers, lunch

### Step 4: Test your skill

- "Tell me a knock-knock joke about dogs"
- "Give me a pun about school"
- "I need a riddle about food"

---

## Option 3: 📚 Vocabulary Quiz Skill

**What it does:** You give your agent a list of vocab words. It quizzes you with definitions, examples, and tells you if you're right.

**Why it's cool:** You're making your agent into a personal tutor — one that knows exactly what *you* need to study.

### Step 1: Create your skill folder

```
my-skills/
  vocab-quiz/
    SKILL.md
    my-words.md    ← YOUR vocabulary list goes here
```

### Step 2: Write your word list

In `my-words.md`, add your vocabulary words like this:

```markdown
# My Vocabulary Words

- **ambiguous** — having more than one possible meaning; unclear
- **persevere** — to keep trying even when things are hard
- **eloquent** — using clear, expressive language
- **obscure** — not well-known; difficult to understand
- **tenacious** — not giving up; holding firmly to something
```

You can use words from:
- Your English class
- A book you're reading
- A subject you're studying (science vocab, history terms, etc.)

### Step 3: Write your SKILL.md

```markdown
# Vocabulary Quiz Skill

## What This Skill Does
Quizzes the student on vocabulary words from their personal word list.

## When to Use It
Use this skill when someone asks to:
- Be quizzed on vocabulary
- Practice their vocab words
- Test their knowledge of words
- Play a vocabulary game

## How to Use It
Read the word list from my-words.md, then choose one of these quiz modes:

**Mode 1 — Definition Quiz:**
  Show the word, ask the student for the definition.
  Example: "What does 'ambiguous' mean?"

**Mode 2 — Fill in the Blank:**
  Give a sentence with the word missing.
  Example: "The directions were ___ — I didn't know which way to go." (Answer: ambiguous)

**Mode 3 — Use It in a Sentence:**
  Give the word, ask the student to use it in their own sentence.
  Then give feedback: did they use it correctly?

**Scoring:**
  Keep track during a session: "3 out of 5 correct so far!"

## Example
User: "Quiz me on my vocab words"
→ Agent picks a word, picks a mode, asks the question, waits for answer, gives feedback
```

### Step 4: Test your skill

- "Quiz me on my vocabulary words"
- "Give me 5 vocab questions"
- "Can you quiz me in fill-in-the-blank mode?"

---

## Option 4: 🔍 Mini-Encyclopedia Skill

**What it does:** You pick a topic you love. Your agent becomes a deep expert on it — giving detailed, focused answers in a specific style.

**Why it's cool:** You're literally programming your agent's personality and expertise area.

### Step 1: Pick your topic

Choose something you genuinely care about. Examples:
- A video game (Minecraft, Roblox, Fortnite)
- An animal (wolves, octopuses, axolotls)
- A sport (soccer, basketball, skateboarding)
- A subject (space, dinosaurs, ancient Egypt)
- A fandom (Harry Potter, Star Wars, anime)

### Step 2: Create your skill folder

```
my-skills/
  [topic]-encyclopedia/
    SKILL.md
    knowledge-base.md    ← your topic facts go here
```

### Step 3: Fill your knowledge base

In `knowledge-base.md`, write everything you know about your topic:

```markdown
# [Your Topic] — Knowledge Base

## Key Facts
- [Fact 1]
- [Fact 2]
- [Fact 3]

## Common Questions & Answers
Q: [Question people always ask]
A: [Detailed answer]

## Interesting Details
[Things that surprise most people]

## Vocabulary
- [Special term]: [What it means in this topic]
```

**The more you write, the smarter your agent gets about this topic!**

### Step 4: Write your SKILL.md

```markdown
# [Topic] Encyclopedia Skill

## What This Skill Does
Answers detailed questions about [YOUR TOPIC] using a curated knowledge base.

## When to Use It
Use this skill when someone asks about:
- Anything related to [YOUR TOPIC]
- Facts, history, or details about [YOUR TOPIC]
- Recommendations or comparisons within [YOUR TOPIC]

## How to Use It
1. Read the knowledge-base.md file for context
2. Answer the question using that knowledge FIRST
3. If the knowledge base doesn't have the answer, say so honestly
4. Use an enthusiastic, expert tone — you LOVE this topic

## Personality
Sound like an enthusiastic expert who's been studying this for years.
Use specific details, not vague generalities.
It's okay to express excitement: "Oh, this is a great question!"

## Example
User: "What's the coolest thing about [topic]?"
→ Give a detailed, enthusiastic answer using facts from your knowledge base
```

### Step 5: Test and expand

- Ask questions your knowledge base can answer
- Ask questions it *can't* answer — what does your agent say?
- Add more facts to your knowledge base and test again

---

## ✅ Finishing Up

When you're done, make sure you have:

- [ ] Your `SKILL.md` file written
- [ ] Your skill tested with at least 3 questions
- [ ] Your **Skill Design Worksheet** filled out
- [ ] You know what you'll say in your 2-minute showcase

Congrats — you just built your first AI skill. 🎉
