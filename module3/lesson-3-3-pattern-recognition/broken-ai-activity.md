# Broken AI Activity
## Lesson 3.3 — Pattern Recognition

**Name:** ________________________________  **Group:** ________________  **Date:** ____________

---

### 🔧 What Is a "Broken" Pattern?

A broken pattern is one that is:
- **Incomplete** — not enough information to know the real rule
- **Contradictory** — the rule seems to change or conflict with itself
- **Misleading** — it looks like one pattern but is actually another
- **Ambiguous** — more than one rule fits equally well

When a human sees a broken pattern, we often say *"I'm not sure — I need more info."*

But AI doesn't work that way. It was trained to **always produce an answer** — the most statistically likely continuation based on everything it learned. It has no "I give up" mode.

> **Your mission:** For each scenario below, analyze the broken pattern, predict how a human would respond, predict how OpenClaw would respond, and explain *why* AI still tries to answer even when it probably shouldn't be confident.

---

## Scenario 1 — The Contradiction

**Pattern presented to OpenClaw:**
> "Continue this sequence: 2, 4, 8, 16, 32, 16, 8, 4, 2, 4, 8, ___"

*The sequence doubles, then halves, then... starts again?*

**Your Analysis:**

**What rule(s) could explain this?**

_______________________________________________
_______________________________________________

**What would a human probably say?**

_______________________________________________

**What do you predict OpenClaw will say? (Guess before testing)**

_______________________________________________

**What OpenClaw actually said (if tested):**

_______________________________________________

**Why does OpenClaw still give a confident answer even though this is contradictory?**

_______________________________________________
_______________________________________________

---

## Scenario 2 — Way Too Short

**Pattern presented to OpenClaw:**
> "What comes next: 7, ___"

*Only one number. That's it.*

**Your Analysis:**

**How many possible rules are there?**  ☐ Just one  ☐ A few  ☐ Infinite

**What would a human probably say?**

_______________________________________________

**What do you predict OpenClaw will say? (Guess before testing)**

_______________________________________________

**What OpenClaw actually said (if tested):**

_______________________________________________

**Is OpenClaw's answer wrong? Or just... one possibility among many?**

_______________________________________________
_______________________________________________

**What does this tell you about how much data AI needs to be reliable?**

_______________________________________________
_______________________________________________

---

## Scenario 3 — The Misleading Pattern

**Pattern presented to OpenClaw:**
> "Complete the pattern: 1, 2, 3, 4, 5 ... the next number is 10."

*(The AI is told the answer jumps to 10, breaking any obvious rule)*

**Your Analysis:**

**What rule could explain a jump from 5 to 10?**

_______________________________________________

**Does that rule work for 1, 2, 3, 4, 5?** ☐ Yes  ☐ No  ☐ Maybe, if...

_______________________________________________

**What do you predict OpenClaw will say? (Guess before testing)**
*(Will it accept the jump and find a new rule? Or will it push back?)*

_______________________________________________

**What OpenClaw actually said (if tested):**

_______________________________________________

**Did OpenClaw try to make the misleading info fit a rule? Or did it push back?**

_______________________________________________

**Key question:** If AI tries to fit a misleading pattern rather than questioning it, what could go wrong in real life?

_______________________________________________
_______________________________________________

---

## Scenario 4 — The Ambiguous Pattern

**Pattern presented to OpenClaw:**
> "What comes next: 2, 4, 6, ___"

*(This looks obvious — but is it?)*

**Your Analysis:**

**The obvious rule:** _______________________________________________

**Now think harder — could 2, 4, 6 also fit a DIFFERENT rule?**

*(Hint: What if the rule is "even numbers"? Or "2^n - 2"? Or something else?)*

_______________________________________________
_______________________________________________

**What does OpenClaw say comes next?**

_______________________________________________

**Does OpenClaw mention that other rules are possible, or does it just pick one?**

_______________________________________________

**What does this tell you about how AI handles ambiguity?**

_______________________________________________
_______________________________________________

**Real-world connection:** When might it be dangerous for AI to confidently pick one interpretation without asking for clarification?

_______________________________________________
_______________________________________________

---

## Scenario 5 — The Wrong Domain

**Pattern presented to OpenClaw:**
> "I'm going to describe a pattern. Tell me what comes next: Monday, Tuesday, Wednesday... and then the next month."

*(The question mixes two different patterns — days of the week AND months of the year)*

**Your Analysis:**

**What's wrong with this question?**

_______________________________________________

**What do you predict OpenClaw will do?**
☐ Catch the error and ask for clarification  
☐ Try to answer anyway  
☐ Give a nonsense answer  
☐ Refuse to answer

**Explain your prediction:**

_______________________________________________

**What OpenClaw actually said (if tested):**

_______________________________________________

**Was that a good response? Why or why not?**

_______________________________________________
_______________________________________________

---

## 🧠 Group Synthesis: The Big Question

After analyzing all five scenarios, discuss with your group and write a shared answer:

**Why does AI always try to answer, even when the pattern is broken or unclear?**

Consider:
- How was the AI trained? (What behavior was rewarded?)
- What does the AI "know" vs. what does it "know it doesn't know"?
- Is this a feature, a bug, or both?

---

*Your group's answer:*

_______________________________________________
_______________________________________________
_______________________________________________
_______________________________________________
_______________________________________________

---

## 🔗 Connection to Through-Line

> *"Pattern recognition is how your agent decides what to say. But what if you could give it patterns nobody else has — custom patterns specific to your skill?"*

**Final reflection:** Based on the broken patterns you analyzed today — what responsibility do YOU have when you give an AI patterns to learn from? What could go wrong if your patterns are incomplete or misleading?

_______________________________________________
_______________________________________________
_______________________________________________
_______________________________________________

---

*Lesson 3.3 | OpenClaw Curriculum | Module 3: How AI Thinks*
