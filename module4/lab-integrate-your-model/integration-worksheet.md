# Integration Worksheet: My Trained Model → OpenClaw Skill

> **Fill this out BEFORE you write any code.**
> 
> Planning your integration first will save you time and help you build a better skill. This is how real engineers work.

**Your name:** ___________________________  
**Date:** ___________________________  
**Class period:** ___________________________

---

## Section 1: My Trained Model

**What did I train my model to do?**

_Example: "Classify whether a movie review is positive, negative, or neutral"_

> _______________________________________________
> _______________________________________________

**What tool did I use to train it?**

- [ ] ML4Kids
- [ ] Teachable Machine
- [ ] Hugging Face / Python
- [ ] Other: ___________________________

**What are my model's output categories (labels)?**

| Label Name | What it means | Example input that would get this label |
|------------|---------------|------------------------------------------|
| | | |
| | | |
| | | |
| | | |

**How many examples did I train it on (approximately)?**

> _______________

**Did I test my model before this lab? What accuracy did I get?**

> _______________________________________________

---

## Section 2: My Model's Endpoint

**Where does my model live?**

_This is the URL or access method your agent will use. Don't write your API key here — just note where it's stored._

| Tool | My Endpoint Info |
|------|------------------|
| ML4Kids | Project ID: _______________ (API key stored in: _______________) |
| Teachable Machine | Model URL: _______________ |
| Hugging Face | Model ID: _______________ (token stored in: _______________) |

**What format does my model accept as input?**

- [ ] Text (string)
- [ ] Image (URL)
- [ ] Image (file upload)
- [ ] Array of numbers
- [ ] Other: ___________________________

**What does a successful response look like?** (Write an example)

```
[paste or sketch the JSON response your model returns]
```

---

## Section 3: The Flow Diagram

Draw or fill in this flow diagram showing how data moves from your agent to your model and back.

```
┌─────────────────────────────────────────────────────────────┐
│                        MY AGENT                             │
│                                                             │
│   User says:                                                │
│   "_______________________________________________"         │
│                             │                               │
│                             ▼                               │
│   Agent recognizes skill trigger:                           │
│   "_______________________________________________"         │
│                             │                               │
└─────────────────────────────┼───────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                     MY SKILL SCRIPT                         │
│                                                             │
│   Script name: skills/_______________/scripts/_____________  │
│                                                             │
│   It sends this data to the model:                          │
│   _______________________________________________           │
│                             │                               │
└─────────────────────────────┼───────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      MY TRAINED MODEL                       │
│                                                             │
│   Endpoint: _______________________________________________  │
│   Tool: [ML4Kids / Teachable Machine / Hugging Face]        │
│                             │                               │
│   Returns:                  │                               │
│   ___________________________▼_____________________________  │
│   { "label": "___________", "confidence": ___________ }    │
│                                                             │
└─────────────────────────────┼───────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    AGENT'S RESPONSE                         │
│                                                             │
│   "My trained model thinks this is: ___________________    │
│    with ____% confidence."                                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Section 4: Skill Design

**What will I name my skill folder?**

> `skills/___________________________/`

**What description will I write so my agent knows when to use this skill?**

_Complete this sentence: "Use this skill when the user asks me to _______________"_

> _______________________________________________
> _______________________________________________

**Write 3 example phrases a user might say to trigger this skill:**

1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

**What secrets does this skill need? Where will I store them?**

| Secret | Where stored (1Password path) |
|--------|-------------------------------|
| | |
| | |

---

## Section 5: Test Plan

**List 3 inputs you'll use to test your model after integration:**

| # | Input I'll use | What I expect the model to output | Why I chose this input |
|---|---------------|-----------------------------------|------------------------|
| 1 | | | From training data |
| 2 | | | NOT from training data |
| 3 | | | Tricky / edge case |

**How will you test your skill before asking your agent to use it?**

> _______________________________________________
> (Hint: run the script directly from the terminal first!)

---

## Section 6: Comparison Plan

**What general-purpose model will you compare yours against?**

- [ ] Claude (via my OpenClaw agent)
- [ ] ChatGPT
- [ ] Other: ___________________________

**What question will you ask both models?**

> _______________________________________________

**What do you predict? Will your model or the general model do better? Why?**

> _______________________________________________
> _______________________________________________

---

## Section 7: Reflection (fill in AFTER the lab)

**What worked better than you expected?**

> _______________________________________________

**What was harder than expected?**

> _______________________________________________

**What would you change about your training data or labels if you did this again?**

> _______________________________________________
> _______________________________________________

**Complete this sentence:**

> "I gave my agent a capability no other agent has — because I trained it to **_______________________________________________**."

---

## Quick Reference: Key Concepts

| Concept | One-Sentence Definition |
|---------|------------------------|
| **Training** | Teaching a model using labeled examples |
| **Inference** | Using a trained model to make predictions on new inputs |
| **Endpoint** | A URL that accepts input and returns a prediction |
| **Confidence** | How certain the model is (0% = no idea, 100% = totally sure) |
| **Overfitting** | Model memorized training data but can't handle new examples |
| **API key** | A secret credential that lets your code access a service |

---

*Module 4 · OpenClaw Curriculum*
