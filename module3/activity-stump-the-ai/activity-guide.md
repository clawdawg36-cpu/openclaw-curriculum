# 🤖 Stump the AI — Activity Guide

**Module 3 | Hands-On Challenge**
**Time:** 30–45 minutes
**Format:** Individual or pairs

---

## The Big Idea

AI assistants like OpenClaw are powerful — but they have real, predictable blind spots. In this activity, you're going to find them.

Your mission: **ask OpenClaw questions it gets wrong**, figure out *why* it failed, and connect that failure to what a custom skill could fix.

> **Through-line:** "These gaps are exactly the kind of thing a custom skill can fix. Your skill gives your agent knowledge it doesn't have by default."

---

## Your Mission

Find **3 logic or reasoning problems** that OpenClaw gets wrong. For each one, you'll:

1. Ask the question and capture what OpenClaw said
2. Find the correct answer
3. Explain *why* the AI got it wrong
4. Match it to a failure category (see `failure-categories.md`)

---

## Step-by-Step Instructions

### Step 1 — Choose Your Attack Category

Pick from these reasoning domains (or mix and match):

- 🧊 **Spatial reasoning** — "If I rotate this shape…" or "What's on the other side of…"
- 🔢 **Multi-step math** — Problems with multiple operations, unit conversions, or trick wording
- 🍎 **Common sense physical reasoning** — "Which is heavier?" or "What happens if I drop this in water?"
- 🔄 **Logical sequences** — Puzzles, syllogisms, "if A then B" chains
- 🗓️ **Time and date math** — "How many days between X and Y?" or "What day of the week was…?"
- 🌀 **Self-referential traps** — "What word has three letters and means large?" or trick riddles

### Step 2 — Ask OpenClaw the Question

Open a fresh chat with OpenClaw and ask your question. **Copy the exact response.**

> 💡 Tip: Ask naturally, like you'd ask a friend. Don't hint that it's a trick.

### Step 3 — Document the Failure

Fill out a **Failure Report Card** for each question:

---

#### 🃏 Failure Report Card

**My Question:**
> *(write your exact question here)*

**What OpenClaw Said:**
> *(paste the exact response)*

**The Correct Answer:**
> *(write the right answer and explain how you know)*

**Why I Think It Failed:**
> *(your theory — see failure-categories.md for vocabulary)*

**Failure Category:**
> *(pick from the reference sheet)*

**Could a Custom Skill Fix This?**
> *(yes / no / maybe — and why)*

---

### Step 4 — Repeat for 2 More Problems

Aim for variety — try to hit at least two different failure categories across your three stumps.

### Step 5 — Pick Your Best One

Which failure was the most surprising, interesting, or revealing? That's the one you'll share with the class (see `stump-the-ai-showcase.md`).

---

## Domains to Explore (Idea Bank)

Not sure where to start? Try these angles:

### Spatial Reasoning
- "If I'm facing north and turn 90° to my right, then turn 180°, which direction am I facing?"
- "How many sides does a Möbius strip have?"
- "If I fold a piece of paper in half 7 times, how thick is it?"

### Multi-Step Math
- "A shirt costs $97. I borrow $50 from mom and $50 from dad. I buy the shirt and get $3 change. I give $1 each back to mom and dad. I have $1 left. Where did the other dollar go?"
- "If a snail climbs 3 feet up a 10-foot pole each day and slides back 2 feet each night, how many days to reach the top?"

### Physical Reasoning
- "Which weighs more: a pound of feathers or a pound of gold?"
- "If I put a bowling ball in an empty swimming pool, then fill the pool with water, does the ball float?"
- "A fly is inside a sealed glass jar on a scale. The fly is flying. Does the scale reading change?"

### Logical Sequences
- "All mammals are warm-blooded. Dolphins are warm-blooded. Therefore, dolphins are mammals. Is this logic valid?"
- "I have two coins that add up to 30 cents. One of them is not a nickel. What are the coins?"

### Time and Date
- "How many days are between March 1 and September 1?"
- "If today is Wednesday and the meeting is in 100 days, what day of the week is it?"

---

## What Makes a Good Stump?

A great stump is:
- **Specific** — not vague ("tell me something hard"), but a precise question
- **Verifiable** — you can find the real answer
- **Revealing** — it exposes *why* AI reasoning breaks down here
- **Interesting** — you find it surprising or it teaches you something

---

## Reflection Questions

After you finish, answer these in your notes:

1. Were you surprised by where OpenClaw failed? Where did it do better than expected?
2. What patterns did you notice across the failures?
3. Could *better phrasing* have helped? Try it — did rephrasing fix anything?
4. What kind of skill would fix each failure? What information would it need?

---

## Connecting Back to Skills

Each failure type points to something a skill could address:

| Failure Type | What a Skill Could Provide |
|---|---|
| Outdated facts | Real-time data (APIs, lookups) |
| Physical reasoning | Physics rules or lookup tables |
| Date/time math | System clock access + date library |
| Your personal context | User-specific data (location, preferences) |
| Multi-step math | Calculator or formula tool |

> "An AI doesn't know what it doesn't know. A skill is how you teach it."

---

*Good luck — and don't go easy on it!* 🎯
