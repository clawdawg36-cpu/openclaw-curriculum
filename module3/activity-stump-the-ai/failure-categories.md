# 🗂️ AI Failure Categories — Reference Sheet

**Module 3 | Stump the AI Activity**

Use this sheet to classify the failures you discover. Match each "stump" to one (or more) of the categories below.

---

## How to Use This Sheet

When OpenClaw gets something wrong, ask yourself:
> *Why did it fail? What kind of thinking did it need that it couldn't do?*

Then find the category that best fits. Some failures fall into multiple categories — that's okay! Pick the most important one.

---

## The Failure Categories

---

### 🧊 Category 1: Spatial Reasoning Failure

**What it is:** The AI struggles to mentally rotate, fold, navigate, or visualize objects in 3D space.

**Why it happens:** Language models process text as sequences of tokens — they have no internal "mental image" or spatial simulation engine. They can *describe* spatial concepts but can't actually *reason* about them.

**Common signs:**
- Wrong answers on rotation/reflection problems
- Fails to correctly track position after a series of moves
- Gets confused by perspective ("what does it look like from behind?")
- Can't predict how a folded/cut shape will look

**Example failure:**
> "If you fold a square piece of paper in half diagonally, then fold it in half again, what shape do you get when you unfold it?"
> *(AI may describe the wrong number of crease lines)*

**Skill fix potential:** Low — spatial reasoning would need a visual processing tool (image generation/analysis). Prompting strategies sometimes help.

---

### 🔢 Category 2: Multi-Step Arithmetic / Math Error

**What it is:** The AI loses track of intermediate values, makes arithmetic mistakes, or misunderstands the structure of a math problem.

**Why it happens:** Language models generate text statistically — they don't run a calculator internally. They often get the *approach* right but slip on computation, especially with large numbers, fractions, or many steps.

**Common signs:**
- Correct method but wrong final answer
- Off-by-one errors in counting problems
- Fails to carry intermediate results accurately
- Gets confused by trick wording ("borrow/return" problems)

**Example failure:**
> "What is 17% of 348?"
> *(AI may compute this incorrectly without a calculator tool)*

**Skill fix potential:** High — a skill with calculator access would eliminate this category entirely.

---

### 🍎 Category 3: Physical / Common Sense Reasoning Failure

**What it is:** The AI gives a physically wrong answer about how the real world works — objects, forces, materials, chemistry.

**Why it happens:** The AI learned from text about the world, not from experiencing it. It has no physics engine, no sensory data, no ability to "run a simulation." It pattern-matches to common descriptions, which are sometimes wrong or incomplete.

**Common signs:**
- Wrong about buoyancy, weight, heat, or material properties
- Confuses what happens "in principle" vs. what happens in practice
- Agrees with physically impossible scenarios
- Struggles with edge cases ("what if the container is sealed?")

**Example failure:**
> "A sealed jar with a fly flying inside sits on a scale. Does the weight change when the fly lands?"
> *(Correct answer involves air pressure; AI often gets this wrong)*

**Skill fix potential:** Medium — a physics reference skill or lookup tool could help for well-defined domains.

---

### 🔄 Category 4: Logical / Syllogistic Reasoning Failure

**What it is:** The AI makes errors in formal logic — invalid syllogisms, affirming the consequent, or missing logical traps.

**Why it happens:** Formal logic requires following precise rules, not pattern-matching. The AI may *recognize* that something looks like a logical argument and agree with it even when it's invalid.

**Common signs:**
- Validates invalid syllogisms ("All A are B. X is B. Therefore X is A.")
- Gets confused by negations ("not all" vs. "none")
- Fails to catch circular reasoning
- Misses "trick" riddles that require careful literal interpretation

**Example failure:**
> "All squares are rectangles. This shape is a rectangle. Therefore it's a square." Is this valid?
> *(AI may incorrectly say "yes")*

**Skill fix potential:** Low to medium — better prompting (chain-of-thought) helps significantly here.

---

### 🗓️ Category 5: Time, Date, and Calendar Failure

**What it is:** The AI makes errors when calculating dates, durations, days of the week, or time zone differences.

**Why it happens:** The AI has no access to a live clock unless given a tool. It also has to do date arithmetic in its head, which is error-prone for complex cases (leap years, month-length differences, etc.).

**Common signs:**
- Wrong day-of-week calculations
- Off-by-one errors in "how many days between" problems
- Doesn't know the current date (or guesses wrong)
- Confused by daylight saving time or time zones

**Example failure:**
> "What day of the week is it 100 days from now?"
> *(Without clock access, the AI must guess or ask — and often doesn't)*

**Skill fix potential:** Very high — a date/time skill with system clock access fixes this category completely.

---

### 🌀 Category 6: Self-Reference / Meta-Reasoning Trap

**What it is:** The AI gets confused by questions about itself, language, or questions that require stepping outside the literal text.

**Why it happens:** The AI is very good at pattern-matching but can stumble when the answer requires recognizing a trick, counting letters, or reasoning about the question structure rather than its content.

**Common signs:**
- Wrong letter counts ("how many R's in STRAWBERRY?")
- Falls for riddles that require rejecting the premise
- Gets confused by questions with ambiguous referents
- Agrees with trick questions instead of questioning the premise

**Example failure:**
> "How many letters are in the word 'four'?" *(AI may say 4, the correct answer is 4, but ask about "five" — it may say 5 instead of 4)*
> 
> Better: "What 5-letter word becomes shorter when you add two letters to it?"
> *(Answer: "short" — AI often over-thinks this)*

**Skill fix potential:** Low — this requires meta-reasoning, which is hard to fix with external data.

---

### 📰 Category 7: Outdated or Missing Knowledge

**What it is:** The AI gives wrong or outdated answers because its training data has a cutoff date or doesn't include specific local/personal information.

**Why it happens:** Language models are trained on a static snapshot of data. Events, prices, people, or facts that changed after training are unknown or stale. Personal/local information (your name, your city's bus schedule) was never in training data at all.

**Common signs:**
- Wrong current events, prices, or statistics
- Doesn't know about recent products, releases, or discoveries
- Can't answer personal questions ("what's my name?")
- Guesses about live/real-time data (weather, stock prices)

**Example failure:**
> "What's the current price of a gallon of milk in Los Angeles?"
> *(AI will give a plausible-sounding but potentially stale or fabricated number)*

**Skill fix potential:** Very high — this is the *core use case* for custom skills. A skill with API access or personal data is the exact fix.

---

### 🎭 Category 8: Overconfident Hallucination

**What it is:** The AI confidently states something false, often making up specific details (names, dates, citations, stats) that sound plausible.

**Why it happens:** The AI is trained to generate fluent, helpful responses. It sometimes generates a confident-sounding answer even when it doesn't "know" — filling in with plausible-seeming text.

**Common signs:**
- Cites sources or papers that don't exist
- Gives specific numbers that are wrong
- States uncertain things as fact
- Doesn't say "I don't know" when it should

**Example failure:**
> "What did Einstein say in his 1921 Nobel Prize acceptance speech?"
> *(Einstein didn't give an acceptance speech — but the AI may fabricate one)*

**Skill fix potential:** Medium — fact-checking skills and knowledge-base integrations help, but hallucination is a fundamental model behavior.

---

## Quick Reference Summary

| # | Category | Core Cause | Skill Fix? |
|---|---|---|---|
| 1 | Spatial Reasoning | No mental imagery | Low |
| 2 | Multi-Step Math | No calculator | High ✅ |
| 3 | Physical Reasoning | No physics engine | Medium |
| 4 | Logic / Syllogisms | Pattern-matching vs. formal logic | Medium |
| 5 | Time / Date | No clock access | Very High ✅ |
| 6 | Self-Reference / Traps | Meta-reasoning gaps | Low |
| 7 | Outdated Knowledge | Training data cutoff | Very High ✅ |
| 8 | Hallucination | Over-confident generation | Medium |

---

## Bonus: "Fixability" Scale

When you find a failure, rate how fixable it is with a custom skill:

- 🔴 **Hard to fix** — Core model limitation (spatial, meta-reasoning)
- 🟡 **Possible to fix** — With the right reference data or rules
- 🟢 **Easy to fix** — A simple skill with API or tool access solves it

> The most instructive stumps are the 🟢 ones — because *you* could write that skill.

---

*Use this reference alongside the Activity Guide and Failure Report Cards.*
