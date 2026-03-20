# 👩🏫 Teacher Facilitation Guide — Pattern Detective

**Module 3 | Internal Resource**
**Time:** 10–15 min (warm-up mode) or 20–30 min (full activity)
**Grade Band:** 6–8

---

## Purpose

Pattern Detective builds the foundational intuition for Lesson 3.3 (Pattern Recognition). By finding rules in simple datasets, students:

- Develop vocabulary for talking about patterns precisely
- Discover firsthand that the *same data* can sometimes support multiple rules
- Encounter "broken" data and see why training data quality matters
- Arrive at the AI connection with genuine intuition: "AI is doing what I just did — at massive scale"

The activity scales from a quick warm-up (2–3 cards, 10 minutes) to a full exploration (all cards + reflection, 30 minutes).

---

## Before Class

- [ ] Print `pattern-cards.md` — one copy per 2 students (or display on projector)
- [ ] Have `answer-key.md` ready (teacher only — do not distribute)
- [ ] Decide: warm-up mode or full activity? (see timing below)
- [ ] If full activity: print `activity-guide.md` (one per student)
- [ ] Decide whether to include Trick Cards (14–16) — they're great for discussion but add complexity

**Card selection tips:**
- **10-minute warm-up:** Use Cards 1, 4, and 14 (one easy, one medium, one trick)
- **20-minute activity:** Cards 1–3 (warm-up), Cards 7–9 (medium), Card 14 or 15 (trick)
- **Challenge groups:** All Red cards + all Trick Cards

---

## Timing Guide

### Warm-Up Mode (10–15 min)

| Phase | Time |
|---|---|
| Distribute 2–3 cards | 1 min |
| Students work individually/pairs | 5–7 min |
| Class share-out (one rule per card) | 3–5 min |
| Bridge to lesson | 1–2 min |

### Full Activity Mode (25–30 min)

| Phase | Time |
|---|---|
| Intro + first card as a class | 3 min |
| Individual/pair card work | 10–12 min |
| Trick Card discussion | 5 min |
| Reflection (Part 4 of activity-guide.md) | 5 min |
| AI connection debrief | 3–5 min |

---

## Hook — The Pattern Game (First 3 Minutes)

Before distributing cards, write these sequences on the board one at a time. Ask students to call out the next number and, crucially, **the rule**:

```
2, 4, 6, 8, ___        → Rule: add 2
1, 3, 9, 27, ___       → Rule: multiply by 3
1, 1, 2, 3, 5, 8, ___  → Rule: add previous two (Fibonacci!)
100, 91, 82, 73, ___   → Rule: subtract 9
```

**Key question to ask after each one:**
> *"Why is knowing the rule more useful than just knowing the next number?"*

**Target insight:** If you know the rule, you can find the 100th term, the 1000th term — any term. That's prediction power. AI does the same thing with language, images, and decisions.

**Bridge:** "Those were warm-up sequences. Now you're going to work with harder ones — and some with deliberate errors. Your job is to find the rule and spot the fakes."

---

## Facilitation Notes

### Getting Students Started

Students sometimes stare at the card without trying anything. Prompt them:
> "Pick any two consecutive values. What operation connects them? Does the same operation work for the next pair?"

For tables with two variables (Cards 7, 10, 13):
> "Try doubling x. Does that get you close to y? Try adding a constant."

### When Students Find a Rule Too Quickly

Some cards have obvious rules (Card 1, Card 2). Push early finishers:
> "Could there be another rule that also fits? What's the *simplest* rule that works?"

Also ask:
> "What's the 50th term? The 100th? What if I asked for any term?"

### When Students Are Stuck on Fibonacci (Card 4)

Many students will see: 1, 1, 2, 3, 5, 8 and say "the differences are 0, 1, 1, 2, 3 — those are also Fibonacci!" That's correct and a beautiful observation. Redirect:
> "That's true! Is there a simpler rule that describes the whole sequence without looking at the differences?"

Give this hint if needed: "Cover up all but the last two numbers. What do they add up to?"

### The Alternating Rule Card (Card 11)

This one often stumps students the longest. If they've been working on it for 3+ minutes:
> "Look only at positions 1, 3, 5, 7. Do you see a pattern just in those? Now look only at positions 2, 4, 6. Different pattern?"

This is a key insight: **some patterns are actually multiple patterns interleaved.** Real datasets often work this way (weekday/weekend, seasonal cycles, AM/PM patterns).

---

## The Trick Cards — Special Facilitation Notes

The Trick Cards (14–16) are the most pedagogically rich part of the activity. Handle them carefully.

**Best approach:** Do one Trick Card as a class before having students work on others individually.

**Class procedure for a Trick Card:**
1. Display the card on the projector
2. Ask: "What rule seems to fit? Show me the math."
3. Let students confirm the rule works for most values
4. Ask: "Does it work for *all* values? Check every one."
5. When someone finds the error: "How would an AI trained on this data behave? Would it know something was wrong?"

**Common student reactions to Trick Cards:**

*"I thought I had the rule but one value was weird — so I ignored it."*
→ "That's what AI does too — it tries to find the 'best fit' rule even with noisy data. That can lead to systematic errors."

*"I just assumed I made a math mistake."*
→ "Good instinct — but in data science, when your model doesn't fit, you also check the *data*, not just your formula."

*"This feels like a trap."*
→ "It is! Real-world data is full of traps. That's why data scientists spend 60–80% of their time cleaning data before they ever run a model."

---

## Key Discussion Points

### "How many data points do you need?"

This comes up naturally after Fibonacci and the Trick Cards.
> "For Card 1 (add 2), how many values did you need before you were confident? For Card 4 (Fibonacci), how many? Why the difference?"

**Key insight:** Complex rules require more examples to distinguish from simpler alternatives. This is why AI training datasets are enormous.

### "Can the same data support different rules?"

Ask this after students have done a few cards:
> "Did anyone find a sequence where two different rules both fit the data you were given? What would happen if an AI learned the wrong rule?"

Example: The sequence 1, 2, 4 could be "add 1, add 2, add 4…" (geometric: ×2) OR it could be fitting a quadratic. Both rules work for just 3 data points. More data clarifies which is right.

### "What makes training data 'bad'?"

Use the Trick Cards to drive this:
> "Card 14 had one wrong value in 7. Was that enough to fool the rule? What if only 1 in 100 values was wrong? 1 in 1000?"

**Key insight:** Even small amounts of bad data can confuse a model if the errors are systematic (always wrong in the same direction) rather than random.

### "Is it better to have a simpler rule or a more accurate one?"

After Cards 9–13:
> "Card 10 has a clean formula: y = 2x + 1. Card 13 (population growth) fits better with a messier exponential model. Which would you trust more to make predictions 50 years out?"

**Key insight:** Simpler models generalize better to new data. More complex models can overfit — they memorize the training data instead of learning the pattern. This is one of the deepest problems in machine learning.

---

## Connecting to the Module Through-Line

After the activity, close with this:

> "Everything your AI agent knows about language — every response, every skill activation, every prediction — came from pattern recognition at massive scale. Not 8 data points, but billions. Not one rule, but millions of overlapping patterns.
>
> Your job isn't to memorize how the patterns work. Your job is to understand *what kind of patterns* your agent knows — and what it doesn't. Because the gaps are where your custom skills live."

Then transition to the Direct Instruction portion of Lesson 3.3.

---

## Assessment Options

### Quick Check (Warm-Up Mode)
Ask students to write one sentence: "The rule for my card is ___. I know this because ___."

### Formative (Full Activity Mode)
Collect the Detective Report Cards (Part 1 of activity-guide.md). Look for:
- ✅ Correct rule stated in plain English
- ✅ Alternative rules considered when applicable
- ✅ At least one Trick Card error identified with explanation

### Discussion Assessment
Ask any of the debrief questions listed above. Look for students who can:
- Explain *why* more data points increase confidence
- Describe what happens when AI learns a broken rule
- Connect pattern recognition to their AI agent's behavior

---

## Extension: Advanced Students

### Level 1 — Write the Formula
For any Table card, write the rule as a mathematical formula (y = …). Then graph it. Is it linear or curved?

### Level 2 — Real-World Pattern Hunt
Find a real dataset online (weather, sports stats, population data). Identify the pattern. Does it follow a clean rule, or is it messier? Why?

### Level 3 — Train the AI
Enter one of your card patterns into OpenClaw (or a spreadsheet ML tool). Ask it to predict the next value. Does it get the rule right? What about a Trick Card — does it detect the error?

### Level 4 — Design the Curriculum
Create a set of 4 pattern cards for a younger student (grades 3–5). Include one Trick Card. Write the answer key. How did you choose the difficulty level?

---

*Keep this guide internal. Student-facing materials are `activity-guide.md` and `pattern-cards.md`. `answer-key.md` is teacher-only.*
