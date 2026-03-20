# Reasoning Failure Audit
### A 5-Test Self-Assessment for Your AI Skill

**Lesson 3.5 — Limits of Reasoning AI + Ethics Bridge**
**Your name:** ______________________________
**Your skill name/description:** ______________________________

---

> **What is this?**
> You just built a skill that gives an AI agent new reasoning ability. That's real power. Before you ship it into the world, you're going to audit it — look for places where it could go wrong, produce unfair outputs, or harm people who use it or are affected by it.
>
> This isn't about tearing down your work. It's about being the kind of developer who actually thinks about consequences. The engineers who built COMPAS, Amazon's resume screener, and credit scoring black boxes probably didn't think hard enough about this. You're going to do better.

---

## Test 1: Data Source Check

**The question:** Where did the rules, data, or logic in your skill come from?

Every reasoning skill is built on *something* — a dataset, a set of rules someone wrote, an API that returns information, real-world patterns someone encoded. That source has a history, and that history might be biased.

**Answer these questions:**

1a. What is the source of the data or rules your skill uses?

```
Your answer:
```

1b. Who created that source? (A company? A government? An individual? You?)

```
Your answer:
```

1c. When was it created? Could it be outdated?

```
Your answer:
```

1d. Was the source created to represent *everyone*, or primarily one group of people? Which group?

```
Your answer:
```

1e. **Verdict:** Based on your answers, how much do you trust your data source?

- [ ] High trust — created carefully, represents diverse people, recently updated
- [ ] Medium trust — seems okay but I'm not totally sure where it came from
- [ ] Low trust — unclear source, potentially biased, or outdated
- [ ] Uncertain — I don't know enough to say

**What I'd change to increase my trust in this source:**

```
Your answer:
```

---

## Test 2: Proxy Variable Scan

**The question:** Does your skill use any input that might secretly stand in for something sensitive?

Remember: Amazon's hiring AI didn't ask "are you a woman?" — it just learned that certain patterns on resumes correlated with gender. ZIP codes correlate with race. Education level correlates with income. These are **proxy variables**.

**List the main inputs your skill uses** (what information does it take in to make a decision or recommendation?):

```
Input 1:
Input 2:
Input 3:
Input 4 (if applicable):
```

**For each input, ask:**

| Input | Could this correlate with race? | Gender? | Income/class? | Age? | Disability? |
|-------|--------------------------------|---------|---------------|------|-------------|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

*(Mark Y/N/Maybe in each cell)*

**The most concerning proxy I found:**

```
Your answer:
```

**What I could do about it:**

```
Your answer:
```

---

## Test 3: Who Gets Helped (and Who Doesn't)

**The question:** Who benefits from your skill? Who might be left out or disadvantaged?

Skills are rarely neutral. They tend to work best for the people they were designed with in mind — which often means people similar to the designer.

**Describe who your skill is designed to help:**

```
Your answer:
```

**Now think about who might be *outside* that group. Check all that apply:**

People who might not benefit equally from my skill, or might be harmed by it:

- [ ] People with disabilities (does it assume certain physical or cognitive abilities?)
- [ ] Non-English speakers (does it assume English input/output?)
- [ ] People with low income (does it assume access to certain resources or technology?)
- [ ] Older people (does it assume familiarity with modern tools?)
- [ ] Younger people / minors (is there content that isn't age-appropriate?)
- [ ] People in other countries or cultures (does it assume U.S./Western context?)
- [ ] People from marginalized racial/ethnic groups (see proxy variable scan)
- [ ] Other: ______________________________

**For the groups I checked above, here's specifically how they might be disadvantaged:**

```
Your answer:
```

**One thing I could add to my skill to make it more inclusive:**

```
Your answer:
```

---

## Test 4: Confident Wrongness

**The question:** What happens when your skill encounters something it wasn't built for?

All AI systems have an **operating envelope** — the range of inputs they were designed to handle. Outside that envelope, they don't just stop working — they often keep going confidently and produce wrong, misleading, or harmful outputs.

**Describe your skill's "sweet spot" — the inputs it handles best:**

```
Your answer:
```

**Now design 3 adversarial inputs — things outside that sweet spot:**

| Adversarial input | What might my skill output? | Is that output harmful? |
|-------------------|---------------------------|------------------------|
| 1. | | |
| 2. | | |
| 3. | | |

**Does your skill fail gracefully?**

*Graceful failure = "I don't know" or "I can't handle that" or "please ask a human"*
*Ungraceful failure = confidently outputting something wrong*

- [ ] Yes — my skill says something like "I'm not sure" or refuses to answer when it shouldn't
- [ ] No — my skill will try to answer even when it shouldn't, and might output something wrong
- [ ] Partial — depends on the situation

**What I could add to make my skill fail more gracefully:**

```
Your answer:
```

---

## Test 5: The Accountability Gap

**The question:** If your skill made a harmful recommendation, who would be responsible?

This is the hardest question. Responsibility for AI decisions is genuinely contested — legally, ethically, and practically.

**Scenario:** Imagine your skill makes a recommendation that turns out to be wrong or harmful — someone follows its advice and gets hurt (financially, emotionally, physically, or reputationally).

**Who would bear responsibility? Rate each on a scale of 1–5:**

| Party | Responsibility (1=none, 5=fully responsible) | Reasoning |
|-------|----------------------------------------------|-----------|
| You (the skill builder) | | |
| The AI/agent that ran your skill | | |
| The company that makes the AI platform | | |
| The person who used the agent | | |
| The person who was harmed | | |

**The party I think should bear the MOST responsibility, and why:**

```
Your answer:
```

**What could I add to my skill to make accountability clearer?**
*(Ideas: warnings, disclaimers, "consult a human for important decisions," logging, explanations of how recommendations were reached)*

```
Your answer:
```

---

## Audit Summary

**Overall risk assessment for my skill:**

| Risk Area | My Rating (Low / Medium / High) |
|-----------|--------------------------------|
| Data source trustworthiness | |
| Proxy variable risk | |
| Inclusivity / who gets helped | |
| Graceful failure | |
| Accountability clarity | |

**The single most important change I'd make to my skill based on this audit:**

```
Your answer:
```

**One thing I'm genuinely proud of about how my skill handles fairness or safety:**

```
Your answer:
```

---

> 💡 **Remember:** Finding problems in your own work isn't failure. It's engineering. Every skill has limitations — the developers who cause harm are the ones who never looked for them.
>
> Save this audit. In Module 6, you'll use it as the starting point for adding guardrails.
