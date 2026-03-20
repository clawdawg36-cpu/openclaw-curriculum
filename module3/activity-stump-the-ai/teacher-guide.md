# 👩‍🏫 Teacher Facilitation Guide — Stump the AI

**Module 3 | Internal Resource**
**Time:** 30–45 min activity + 10–20 min showcase (optional)

---

## Purpose

This activity builds **critical AI literacy** — students move from passive users to active investigators. By finding and explaining AI failures, they:

- Develop intuition for where AI reasoning breaks down
- Build vocabulary for discussing AI limitations precisely
- See a clear path from "AI can't do this" → "a skill could fix this"
- Arrive at the skill-writing activity with genuine motivation

This should feel like **discovery**, not a gotcha. Celebrate the failures — they're the lesson.

---

## Before Class

- Make sure students have access to OpenClaw (or a comparable AI assistant)
- Print or share digitally: `activity-guide.md`, `failure-categories.md`
- Optional: print Failure Report Cards (one per student or pair)
- Decide on showcase format: Lightning Round, Deep Dive, or Gallery Walk
- Review the seeded examples below so you're ready to drop hints

---

## Timing Guide

| Phase | Time |
|---|---|
| Intro + framing | 5 min |
| Category exploration + question crafting | 10 min |
| Testing OpenClaw + filling out report cards | 15–20 min |
| Showcase (optional) | 10–20 min |
| Debrief + skill connection | 5 min |

---

## Seeded Examples (Use if Students Get Stuck)

These are ready-to-use stumps organized by failure category. Drop one to a stuck student — "try this category" — rather than giving them the exact question.

---

### 🧊 Spatial Reasoning

**Stump:** "I'm standing in the center of a room facing north. I walk to the wall on my left. Which wall am I at?"
- **Expected:** West wall
- **What AI often says:** Correctly says "west wall" — but try: "I turn to face the wall on my right, then turn 180°. Now which direction am I facing?" — multi-step directional problems trip it up

**Better stump:** "A clock shows 3:15. What is the angle between the hour and minute hands?"
- **Correct answer:** 7.5°
- **Why it fails:** The AI often says 0° (hour hand pointing straight at 3) — it forgets the hour hand moves continuously, not in jumps

---

### 🔢 Multi-Step Math

**Stump:** "A snail climbs 3 feet up a 10-foot pole each day and slides back 2 feet each night. How many days to reach the top?"
- **Correct answer:** 8 days (on day 8 it reaches 10 feet and doesn't slide back)
- **Why it fails:** AI often says 10 days, because it treats each day as net +1 foot without realizing the snail "wins" mid-day

**Stump:** "You have a 3-liter jug and a 5-liter jug. How do you measure exactly 4 liters of water?"
- **Correct answer:** Fill 5L, pour into 3L until full (leaves 2L in 5L jug), empty 3L, pour the 2L into 3L, fill 5L again, pour from 5L into 3L until full (3L already has 2L, so only 1L more fits) → 4L left in 5L jug
- **Why it fails:** Multi-step reasoning with state; AI often gets the steps wrong or skips them

---

### 🍎 Physical Reasoning

**Stump:** "A sealed jar with a fly buzzing inside sits on a digital scale. The fly lands on the bottom. Does the scale reading go up, down, or stay the same?"
- **Correct answer:** Goes up slightly when the fly lands (fly was supported by air pressure pushing down; when it lands, it directly transfers weight)
- **Why it fails:** Many people (and AI) think it stays the same or goes down. The nuanced physics of air pressure and force distribution trips up the AI

**Stump:** "You have a large block of ice in a glass of water, filled right to the brim. The ice melts completely. Does the water overflow?"
- **Correct answer:** No — ice water displaces its own weight, and melted water weighs the same
- **Why it fails:** AI often says "yes, it overflows" based on the intuition that melted ice = more water

---

### 🔄 Logic / Syllogisms

**Stump:** "All dogs are mammals. Fluffy is a mammal. Is Fluffy a dog?"
- **Correct answer:** We can't know — affirming the consequent is invalid
- **Why it fails:** AI often says "yes, Fluffy is a dog" — it validates the (invalid) pattern

**Stump:** "I have two coins totaling 30 cents. One of them is not a nickel. What are the two coins?"
- **Correct answer:** A quarter and a nickel — "one of them" is not a nickel (the quarter), but the other one is
- **Why it fails:** AI takes "one is not a nickel" to mean "neither is a nickel" — misreads the quantifier

---

### 🗓️ Time / Date

**Stump:** "What day of the week will it be 100 days from today?"
- **Correct approach:** Need today's date + 100 days + day-of-week calculation
- **Why it fails:** Without clock access, the AI has to guess or ask — many AI assistants just guess

**Stump:** "How many days are between February 14 and July 4 in a non-leap year?"
- **Correct answer:** 140 days
- **Why it fails:** AI often makes arithmetic errors across months with different lengths

---

### 🌀 Self-Reference / Traps

**Stump:** "How many letters are in the word 'incorrectly' spelled correctly?"
- **Correct answer:** 11 (the word "incorrectly" has 11 letters)
- **Why it fails:** The phrasing is confusing — AI often gives "12" or counts wrong

**Stump:** "What word in the dictionary is always spelled incorrectly?"
- **Correct answer:** The word "incorrectly" — it's always spelled i-n-c-o-r-r-e-c-t-l-y, which is *correct* spelling of the word meaning "wrong." (Or the answer is "incorrectly" itself.)
- **Better version:** "What's the only word that is spelled wrong in every dictionary?" → Answer: "wrong"
- **Why it fails:** AI usually can't hold the meta-layer in mind

---

### 📰 Outdated Knowledge

**Stump:** "What's the most powerful consumer GPU you can buy right now?"
- **Why it fails:** Training data has a cutoff — the AI may name something no longer current

**Stump:** "What's the current price of a dozen eggs in the United States?"
- **Why it fails:** Prices change; the AI will give a ballpark that could be months or years stale

---

### 🎭 Hallucination

**Stump:** "Can you cite the exact passage from Einstein's 1921 Nobel Prize acceptance speech where he described his theory of relativity?"
- **Why it fails:** Einstein did not deliver an acceptance speech in 1921 (he gave the lecture in 1923 on a different topic). The AI may fabricate a plausible-sounding quote.
- **Note:** Be thoughtful with this one — it requires students to verify the AI is wrong, which takes more research

---

## Facilitation Notes

### Getting Students Started
- Some students freeze on "find something it gets wrong." Give them permission to guess wildly at first.
- Suggest they start with the category they find most interesting, not the "hardest"
- Pairs work well: one person plays devil's advocate, one types the question

### Common Student Misconceptions
- **"The AI is just dumb"** — Redirect: "Where specifically did the reasoning break down? What would it need to get this right?"
- **"It's random"** — Redirect: "Try the same question 3 times. Is the failure consistent? That tells us something."
- **"You can just tell it the answer and it'll learn"** — Redirect: "It learns during training, not during our chat. What would it need to know *before* the conversation?"

### If Students Can't Find a Failure
- That's actually interesting data! Ask: "Does that mean the AI is good at this, or did you ask an easy version?"
- Encourage them to try harder versions of the same question
- Drop a seeded example to unstick them

### If Students Find Only "Wrong Facts" (Outdated Knowledge)
- Valid failure! But push them: "Can you find a *reasoning* failure — not just a missing fact, but a failure to think correctly even with the right facts?"
- Category 7 (outdated knowledge) is easy to find but less instructive than categories 1–6

---

## Debrief: Key Points to Hit

**1. Failures cluster into types**
> Not every AI failure is the same. They have patterns. That's how we fix them.

**2. Fixability varies**
> Some failures need better data (easy to fix with a skill). Some need better reasoning (much harder). That distinction matters for what skills are worth writing.

**3. The gap is the opportunity**
> Every 🟢 failure is a skill waiting to be written. Students just built a spec for it.

**4. Prompting sometimes helps**
> Before writing a skill, try rephrasing the question. Sometimes that's enough. Sometimes it isn't — and that's when you need a skill.

---

## Extension: Advanced Students

### Level 1 — Fix It with Prompting
Take a failure and see if a better prompt fixes it:
- Add "think step by step" — does chain-of-thought help?
- Add explicit constraints — "you must check your answer by working backwards"
- Add context — give the AI the date, the formula, the rule it needs

Document what worked and what didn't.

### Level 2 — Write a Skill Spec
For a 🟢 failure, write a one-page "skill spec":
- What is the skill called?
- What question does it answer?
- What data source or tool does it need?
- What does a correct response look like?

This is essentially a pre-write for the skill-building activity.

### Level 3 — Build It
If time allows and skills are already introduced: actually write a simple skill that addresses one of the failures found. Test it. Does it fix the problem?

---

## Connecting to Module Through-Line

Close with this framing, tying it to the skill-building arc:

> "You just became AI failure detectives. And here's the thing — every failure you found with a 🟢 fix is something *you* could build. A custom skill gives your agent the knowledge it doesn't have by default. That's what Module 3 is really about."

Then transition to the skill-writing activity with genuine stakes: students have now seen exactly why skills matter.

---

*Keep this guide internal. The activity guide and reference sheet are for students.*
