# Slides Outline — Lesson 6.7: The Builder's Responsibility

---

## Slide 1 — Title
**Lesson 6.7: The Builder's Responsibility**
*Module 6: AI Ethics, Bias, and Accountability*

Subtext: *"Who is responsible? The answer isn't simple. But there is a framework."*

---

## Slide 2 — Module 6 Arc
**Six lessons. Six questions.**

| Lesson | Big Question |
|--------|-------------|
| 6.1 | What does your AI believe? |
| 6.2 | What harm has AI bias caused? |
| 6.3 | What does it feel like to be inside a surveillance system? |
| 6.4 | What can be inferred from your data? |
| 6.5 | How does AI-generated deception spread? |
| 6.6 | Who wins when we argue about AI? |
| **6.7** | **Who is responsible?** |

*Which one hit hardest? What question is still open?*

---

## Slide 3 — The Builder's Responsibility Triangle

```
           [BUILDER]
          /         \
         /           \
    [USER]  ——————  [PLATFORM]
```

Three vertices. Three kinds of responsibility.
Real harms involve all three.

*The question isn't "who?" — it's "how is it distributed?"*

---

## Slide 4 — Vertex 1: The Builder
**You designed it.**

Responsible for:
- Transparency about what the system does and doesn't do
- Documentation of limitations
- Bias auditing before deployment
- Honest communication when it fails

*Examples: OpenAI building GPT. You building your OpenClaw agent.*

---

## Slide 5 — Vertex 2: The User
**You deployed it.**

Responsible for:
- Using the system appropriately for its intended purpose
- Understanding its limitations before relying on it
- Not outsourcing your judgment to the algorithm

*Examples: A police dept. using PredPol. You using your agent for a friend's question.*

---

## Slide 6 — Vertex 3: The Platform
**You distributed it.**

Responsible for:
- Moderation policies
- Transparency reports
- Surfacing limitations to users
- Liability when amplification causes harm

*Examples: App stores. Social media platforms hosting AI content.*

---

## Slide 7 — Case Study Revisit
**Robert Williams. Which vertex?**

- The company that built the facial recognition system?
- The police department that ran the match?
- The city that signed the contract?

> *Is there a fourth vertex? What about the public? The courts?*

---

## Slide 8 — Responsible Disclosure
**When you find a problem in something you didn't build**

The principle:
1. Find the problem
2. Document it clearly
3. Notify the organization
4. Give them time to fix it (standard: 90 days)
5. If no response: go public, escalate, or contact journalists

> *"Responsible disclosure means: don't look away, but don't cause additional harm by going public without giving the builder a chance to fix it."*

---

## Slide 9 — Responsible Disclosure Scenario
**What would you do?**

> You're testing your OpenClaw agent. You discover that when you ask about job candidates with certain names, it consistently scores candidates with traditionally Black or Latino names lower.
>
> You didn't design that. The underlying model did.
>
> What do you do?

*Options: Document → Notify Anthropic → Consider use → Be honest with users*

---

## Slide 10 — Fairness Proposal Activity
**Now it's your turn.**

Your worksheet, Part A — Audit Questions:
1. What domain does my agent serve?
2. Where could bias enter?
3. What's the worst-case harm from a wrong answer?
4. What limitations should I disclose to users?

Part B — Three Commitments:
1. I will ___ to reduce risk of ___
2. I will tell users ___ so they can make informed decisions
3. If I discover ___, I will ___

---

## Slide 11 — Partner Review
**Does this commitment actually work?**

Exchange worksheets. Ask your partner:
- Does this commitment address the actual risk?
- Is it specific enough to hold yourself to?
- What's missing?

*A commitment you can't define can't be kept.*

---

## Slide 12 — The AI Expo Is Coming
**Module 7 preview**

You've spent this module auditing and governing your agent.

**Now you'll present it to the world.**

The AI Expo: your agent, your work, your reasoning — in front of an audience.

*You won't just show what it does. You'll show that you've thought about what it shouldn't do.*

---

## Slide 13 — The Question
**What does responsible ownership look like in public?**

If someone at the Expo asks:
- *"Could your agent cause harm?"*
- *"Did you find any bias in it?"*
- *"What happens when it's wrong?"*

What do you say?

> *That's not a gotcha question. It's the most important question about your work.*

---

## Slide 14 — The Builder's Oath
**Read together**

> *I built this. I know what it does. I know what it can't do.*
> *I know where it might fail.*
>
> *I won't pretend it's perfect.*
> *I won't pretend I've thought of everything.*
>
> *I commit to staying curious about the harms I haven't seen yet.*
> *I commit to being honest with the people who use what I build.*
> *I commit to doing something when I find a problem — not just moving on.*

*Adapt it. Make it yours.*

---

## Slide 15 — Exit Ticket

> **One commitment you're making as a builder:**
> *"I will ___."*
>
> **One thing you'll hold others to as a user:**
> *"I expect builders to ___."*

*Carry these into Module 7.*

---

*End of Lesson 6.7 Slides — End of Module 6*
