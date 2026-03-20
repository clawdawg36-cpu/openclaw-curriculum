# 🤖 Agent Usefulness Reflection
## *Would Your Classifier Make a Good Agent Skill?*

**Module 2 | Through-Line Activity | ~5 minutes**

---

## What's This About?

In Module 4, you'll build your own AI agent — a program that can perceive the world, make decisions, and take actions.

Agent skills are the specific things an agent can *do*: read a file, search the web, send a message, control a smart light, or... run an image classifier.

Before you present, take 5 minutes to think about the classifier you just built:

> **Would you add your classifier as a skill in an AI agent? Why or why not?**

---

## Reflection Worksheet

**Your team's classifier:** _______________________  
**Your 3 classes:** _______________________ / _______________________ / _______________________

---

### Step 1: Describe What Your Classifier Detects

In one sentence, what does your model do?

> *Example: "Our model detects whether someone is focused, distracted, or asleep at their desk."*

_______________________

---

### Step 2: Imagine the Agent

If an AI agent had this skill, **when would it use it?**

Think about:
- What would *trigger* the agent to run the classifier? *(e.g., every 5 minutes, when you open your laptop, when it hears noise)*
- What **input** would the classifier receive? *(webcam frame, uploaded photo, screenshot)*
- What would the agent **do next** based on the result?

| Classification Result | Agent Action |
|----------------------|--------------|
| _______________________ | _______________________ |
| _______________________ | _______________________ |
| _______________________ | _______________________ |

> *Example:*
> | Focused | Do nothing — don't interrupt |
> | Distracted | Send a gentle nudge: "Hey, you've been away for 10 min" |
> | Asleep | Lower screen brightness + play soft alert |

---

### Step 3: Rate the Agent Usefulness

Circle your honest assessment:

**Would this make a genuinely useful agent skill?**

```
⭐ Definitely    ⭐⭐ Probably    ⭐⭐⭐ Maybe    ⭐⭐⭐⭐ Probably not    ⭐⭐⭐⭐⭐ No
```

*(Full marks go to the best reasoning, not the most optimistic answer.)*

---

### Step 4: What Are the Limitations?

Even great ideas have problems. What would make your classifier *unreliable* as an agent skill?

Consider:
- **Lighting changes** — does it only work in your classroom?
- **Angle / distance** — does it fail if the camera moves?
- **Edge cases** — what inputs would confuse it?
- **Privacy** — is it appropriate to run this automatically?
- **Latency** — does it need to be instant? What if it's slow?

Write 1–2 limitations:

_______________________

_______________________

---

### Step 5: Your Verdict

Finish this sentence for your presentation:

> *"We [would / would not] add our [classifier name] to an AI agent because..."*

_______________________

---

## 💡 Examples of Strong Reflections

**Strong "Yes" example:**
> *"We'd add our posture detector to a study agent because it could trigger a reminder after 20 minutes of slouching — the input is just a webcam frame, the action is a notification, and posture is actually visible from a fixed desk camera."*

**Strong "No" example:**
> *"We wouldn't add our chip-shape classifier to an agent — it only works with good lighting on a white surface, it solves no real problem, and there's no useful action the agent could take based on knowing a chip is flat vs. curved."*

**Strong "Maybe" example:**
> *"Our focus detector could work as an agent skill, but only in a controlled environment with consistent lighting. It would be useful for a study timer app, but we'd need way more training data from different people to make it reliable enough to actually act on."*

---

## After the Activity

Think about this as we head toward Module 4:

> The skills you build for an agent aren't magic — they're classifiers, detectors, and decision-makers just like the one you built today. The difference is they're connected to something that *acts*.

What other classifiers would you want in an agent?  
What would your ideal agent *see* and *respond to*?

---

*Your reflection doesn't have to be "yes, this is amazing." The most honest answer — with real reasoning — wins full points.*
