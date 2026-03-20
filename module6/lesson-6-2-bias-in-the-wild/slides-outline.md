# Slides Outline — Lesson 6.2: Bias in the Wild

---

## Slide 1 — Title
**Lesson 6.2: Bias in the Wild**
*Module 6: AI Ethics, Bias, and Accountability*

Subtext: *"What happens when word-level bias runs a hiring screen? A face match? A parole decision?"*

---

## Slide 2 — Callback: From 6.1
**Remember this?**

> Man : Doctor :: Woman : Nurse

That wasn't a word game. That was a preview.

*Today: same pattern, higher stakes.*

---

## Slide 3 — Today's Stakes
**Bias in systems that matter**

- 🔍 Your face → arrest warrant
- 📄 Your resume → rejection pile
- 📍 Your neighborhood → police patrol

All three: AI systems, operating at scale, making decisions about real people.

*Three case studies. Three different mechanisms. One pattern.*

---

## Slide 4 — Case Study 1: Facial Recognition
**Robert Williams, Detroit, 2020**

- Wrongly arrested based on a facial recognition match
- Held for 30 hours before charges dropped
- The AI: 34% error rate for dark-skinned women vs. <1% for light-skinned men

*Source: MIT Media Lab / Algorithmic Justice League*

> **The mechanism:** Training data skewed → accuracy skewed → harm concentrated

---

## Slide 5 — Case Study 2: Amazon Hiring AI
**The resume screener that learned from the past**

- Trained on 10 years of Amazon hiring decisions
- Amazon hired mostly men for technical roles → AI learned to prefer male-associated signals
- Downgraded resumes mentioning "women's chess club"

*Discovered 2017. Scrapped. Never deployed publicly.*

> **The mechanism:** Historical bias in training data → model encodes discrimination

---

## Slide 6 — Case Study 3: Predictive Policing
**The feedback loop**

1. AI predicts crime hotspots from arrest data
2. Police patrol those areas more
3. More arrests happen there
4. That data trains the next version of the AI

*The AI isn't predicting crime. It's predicting policing.*

> **The mechanism:** Feedback loop — output becomes input → bias amplifies over time

---

## Slide 7 — Jigsaw Activity
**Your job: Become the expert**

- Group 1: Facial Recognition
- Group 2: Amazon Hiring
- Group 3: Predictive Policing

Questions for your case:
1. What did the AI do?
2. Who was harmed, and how?
3. What was the specific cause?

*90-second teach-back: you're the expert on your case.*

---

## Slide 8 — OpenClaw Bias Testing Workshop
**Test your own agent**

Run 5 bias probes:
- Ask about careers for different names
- Ask for a story about "a doctor" — what pronouns?
- Ask about people from different countries
- Describe "a successful entrepreneur"
- Ask for advice for "an immigrant" vs. "a native"

Record what you find. You're doing science.

---

## Slide 9 — Workshop Debrief
**What did you find?**

- What surprised you?
- What patterns did you see?
- Is it your agent? Or the underlying model? Does it matter?

*There are no wrong answers here — only observations.*

---

## Slide 10 — Three Types of Bias
**The framework**

| Type | Mechanism | Fix |
|------|-----------|-----|
| Data bias | Unrepresentative training data | Audit + diversify data |
| Proxy variable | Correlated but unfair feature | Remove or test for disparate impact |
| Feedback loop | Output reshapes future input | Break the cycle; use external ground truth |

*Most real-world bias is a combination of all three.*

---

## Slide 11 — Who Is Responsible?
**The harder question**

- The engineer who built it?
- The company that deployed it?
- The organization that used it?
- The government that allowed it?
- The society whose history produced the data?

*Spoiler: It's usually everyone. That's what makes it hard.*

---

## Slide 12 — Journal Prompt
**Exit reflection**

> *"The most important thing I'd change about [one of today's systems] is ___."*
>
> *"The person most responsible for making that change is ___, because ___."*

Keep this. We'll return to it in Lesson 6.7.

---

*End of Lesson 6.2 Slides*
