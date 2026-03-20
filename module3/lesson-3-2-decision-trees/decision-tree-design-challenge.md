# Decision Tree Design Challenge
## Pet Advisor: What Pet Is Right for You?

**Lesson:** 3.2 — Decision Trees: How AI Decides  
**Type:** Independent Design Challenge (Extension Activity)  
**Time:** 15–20 minutes  

---

## The Scenario

You're building an AI-powered **Pet Advisor** — a tool that asks a few questions and recommends the right kind of pet for someone.

Your advisor must ask **exactly 4 yes/no questions** and recommend one of **3 pet types** at the end.

**The 3 outcomes your advisor must be able to recommend:**

| 🐕 Option A | 🐠 Option B | 🐹 Option C |
|---|---|---|
| **Dog or Cat** | **Fish or Reptile** | **Small Pet** |
| (high-energy, social pets) | (quiet, low-interaction pets) | (hamster, guinea pig, rabbit) |

---

## What Makes a Good Advisor?

A good pet advisor asks questions about **the person**, not the pet. Things like:

- How much time do you have each day?
- Do you have a big space or a small space?
- Do you want a pet that interacts with you?
- Do you have allergies?
- Are you okay with a pet that needs daily care?

Your 4 questions should help you figure out which of the 3 pet types fits best.

---

## Step 1 — Brainstorm Your Questions

Before you draw your tree, brainstorm at least **6 possible questions** you could ask. Circle the 4 you'll actually use.

| # | Your Question (yes/no format) | Why it's useful |
|---|---|---|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |
| 6 | | |

---

## Step 2 — Design Your Tree

Using your 4 chosen questions, draw your decision tree below. Make sure:
- Every path from top to bottom asks exactly the right number of questions to reach an outcome
- All 3 outcomes appear at least once
- Your questions use observable features (what someone can answer yes or no)

### Your Decision Tree (draw or write it out):

```
                          ┌──────────────────┐
                          │   Question 1:    │
                          │                  │
                          │ _______________? │
                          └────────┬─────────┘
                                   │
              ┌────────────────────┴──────────────────────┐
            YES                                           NO
              │                                            │
   ┌──────────▼──────────┐                    ┌───────────▼──────────┐
   │    Question 2:      │                    │    Question 3:       │
   │                     │                    │                      │
   │ _______________?    │                    │ ________________?    │
   └─────────┬───────────┘                    └──────────┬──────────┘
             │                                           │
    ┌────────┴────────┐                        ┌─────────┴──────────┐
  YES                 NO                     YES                    NO
    │                 │                       │                     │
    │       ┌─────────▼─────────┐             │                     │
    │       │    Question 4:    │             │                     │
    │       │                   │             │                     │
    │       │ _______________?  │             │                     │
    │       └────────┬──────────┘             │                     │
    │                │                        │                     │
    │       ┌────────┴────────┐               │                     │
    │     YES                 NO              │                     │
    │       │                 │               │                     │
┌───▼───┐ ┌─▼─────┐       ┌───▼───┐      ┌───▼───┐            ┌────▼────┐
│       │ │       │       │       │      │       │            │        │
│  Pet  │ │  Pet  │       │  Pet  │      │  Pet  │            │  Pet   │
│ Type: │ │ Type: │       │ Type: │      │ Type: │            │ Type:  │
│       │ │       │       │       │      │       │            │        │
└───────┘ └───────┘       └───────┘      └───────┘            └────────┘
```

**Fill in the blanks above OR use the write-in format below:**

---

### Write-In Format

**Question 1 (Root):**

> ________________________________________________________________________?

- **If YES →** go to Question 2  
- **If NO →** go to Question 3

---

**Question 2:**

> ________________________________________________________________________?

- **If YES →** 🏁 **Recommend:** ________________________________________
- **If NO →** go to Question 4

---

**Question 3:**

> ________________________________________________________________________?

- **If YES →** 🏁 **Recommend:** ________________________________________
- **If NO →** 🏁 **Recommend:** ________________________________________

---

**Question 4:**

> ________________________________________________________________________?

- **If YES →** 🏁 **Recommend:** ________________________________________
- **If NO →** 🏁 **Recommend:** ________________________________________

---

## Step 3 — Test Your Advisor

Create **3 "test users"** — imaginary people with different lifestyles. Run each one through your tree and make sure they land on a reasonable pet recommendation.

### Test User 1

**Describe them:** ________________________________________________________________

| Question | Their Answer (Yes/No) |
|---|---|
| Q1: | |
| Q2 or Q3: | |
| Q4 (if reached): | |
| **Recommendation:** | |

**Does the recommendation make sense for this person?**  ☐ Yes  ☐ No — Why not? _____________

---

### Test User 2

**Describe them:** ________________________________________________________________

| Question | Their Answer (Yes/No) |
|---|---|
| Q1: | |
| Q2 or Q3: | |
| Q4 (if reached): | |
| **Recommendation:** | |

**Does the recommendation make sense for this person?**  ☐ Yes  ☐ No — Why not? _____________

---

### Test User 3

**Describe them:** ________________________________________________________________

| Question | Their Answer (Yes/No) |
|---|---|
| Q1: | |
| Q2 or Q3: | |
| Q4 (if reached): | |
| **Recommendation:** | |

**Does the recommendation make sense for this person?**  ☐ Yes  ☐ No — Why not? _____________

---

## Step 4 — Reflect

Answer these questions in complete sentences.

**1. What was the hardest part of designing your tree?**

_______________________________________________________________________________

_______________________________________________________________________________

**2. Did your test users reveal any problems with your tree? What would you change?**

_______________________________________________________________________________

_______________________________________________________________________________

**3. How is your Pet Advisor similar to how your AI agent decides which skill to use?**

_______________________________________________________________________________

_______________________________________________________________________________

**4. If you had MORE questions to ask (say, 6 instead of 4), how would your tree change? Would your recommendations get better?**

_______________________________________________________________________________

_______________________________________________________________________________

---

## Bonus Challenge 🌟

If you finish early:

1. **Write your tree as Scratch code** (or pseudo-code). Use `ask` and `if/else` blocks.
2. **Add a 5th question** and a 4th outcome — "Senior Pet" (older, calmer animal like an older dog, a parrot, or a turtle).
3. **Swap trees with a classmate.** Run their test users through your tree and vice versa. Did you get the same results?

---

## What a Great Design Looks Like

| ✅ Strong design | ❌ Weak design |
|---|---|
| Questions are about the person, not the pet | Questions assume you already know what pet you want |
| Questions split the options evenly | One question sends everyone down the same path |
| All 3 outcomes are reachable | One outcome is impossible to reach |
| Test users get sensible recommendations | Recommendations feel random or wrong |
| Questions are clear yes/no questions | Questions are vague or opinion-based |

---

*Part of the OpenClaw AI Curriculum — Module 3: How AI Thinks*
