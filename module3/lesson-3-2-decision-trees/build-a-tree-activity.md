# Build-a-Tree Activity
## Classifying School Supplies with a Decision Tree

**Lesson:** 3.2 — Decision Trees: How AI Decides  
**Time:** ~15 minutes  
**Group size:** Pairs  

---

## Your Mission

You're going to build a decision tree that can classify school supplies into **3 categories**:

| 🖊️ Writing Tools | 📏 Measuring/Drawing Tools | 📦 Storage/Organizing Tools |
|---|---|---|
| Pencil | Ruler | Folder |
| Pen | Protractor | Binder |
| Marker | Compass | Pencil case |
| Highlighter | Set square | Backpack |

Your tree must ask **exactly 4 yes/no questions** to correctly sort any supply into one of the 3 categories.

---

## How to Build a Decision Tree

A decision tree works like a flowchart of yes/no questions:

- Start at the **top** with one question
- Each answer (yes or no) leads to the **next question**
- Eventually you reach a **final answer** (called a "leaf")

**Example of a tiny tree:**

```
Is it round?
  ├── YES → Is it small?
  │          ├── YES → It's a marble!
  │          └── NO  → It's a ball!
  └── NO  → It's not round — figure it out!
```

---

## Blank Decision Tree Template

Fill in the boxes below. Write a yes/no question in each diamond. Write a category in each rectangle at the bottom.

```
                    ┌─────────────────────────┐
                    │  START: Is it a _______ │
                    │  _____________________? │
                    └────────────┬────────────┘
                                 │
               ┌─────────────────┴─────────────────┐
             YES                                    NO
               │                                    │
    ┌──────────▼──────────┐             ┌───────────▼──────────┐
    │ Question 2:         │             │ Question 3:           │
    │                     │             │                       │
    │ Is it ____________? │             │ Is it _____________?  │
    │ ___________________ │             │ ____________________  │
    └─────────┬───────────┘             └──────────┬───────────┘
              │                                    │
     ┌────────┴────────┐                  ┌────────┴────────┐
   YES                 NO               YES                 NO
     │                 │                 │                   │
     │      ┌──────────▼──────────┐      │                   │
     │      │ Question 4:         │      │                   │
     │      │                     │      │                   │
     │      │ Is it ____________? │      │                   │
     │      │ ___________________ │      │                   │
     │      └────────┬────────────┘      │                   │
     │               │                   │                   │
     │      ┌────────┴────────┐          │                   │
     │    YES                 NO         │                   │
     │      │                 │          │                   │
  ┌──▼──┐ ┌─▼───┐          ┌──▼──┐   ┌──▼──┐           ┌───▼──┐
  │     │ │     │          │     │   │     │           │      │
  │ OUT-│ │ OUT-│          │ OUT-│   │ OUT-│           │ OUT- │
  │COME │ │COME │          │COME │   │COME │           │COME  │
  │  A  │ │  B  │          │  C  │   │  A  │           │  B   │
  └─────┘ └─────┘          └─────┘   └─────┘           └──────┘
```

> **Note:** You only need 3 outcome types (Writing Tools, Measuring Tools, Storage Tools). Some outcomes may repeat!

---

## Your Decision Tree — Write-In Version

Use this cleaner version to write your final answers:

---

**Question 1 (Root):**

> Is it ________________________________________________________________?

- **If YES →** go to Question 2
- **If NO →** go to Question 3

---

**Question 2:**

> Is it ________________________________________________________________?

- **If YES →** 🏁 **OUTCOME A:** ________________________________
- **If NO →** go to Question 4

---

**Question 3:**

> Is it ________________________________________________________________?

- **If YES →** 🏁 **OUTCOME B:** ________________________________
- **If NO →** 🏁 **OUTCOME C:** ________________________________

---

**Question 4:**

> Is it ________________________________________________________________?

- **If YES →** 🏁 **OUTCOME A:** ________________________________ *(same as above)*
- **If NO →** 🏁 **OUTCOME B:** ________________________________ *(same as above)*

---

## Test Your Tree! ✅

Try running these items through your decision tree. Check ✓ if it lands in the right category.

| Supply | Expected Category | Your Tree Says | ✓ or ✗ |
|---|---|---|---|
| Pencil | Writing Tool | | |
| Ruler | Measuring Tool | | |
| Folder | Storage Tool | | |
| Marker | Writing Tool | | |
| Protractor | Measuring Tool | | |
| Binder | Storage Tool | | |
| Highlighter | Writing Tool | | |
| Compass | Measuring Tool | | |

**Score:** ______ / 8 items correctly classified

---

## Reflect

1. **What made a good question?** (Hint: think about which questions split the supplies most evenly)

   ___________________________________________________________________

   ___________________________________________________________________

2. **Did your tree match your partner's tree?** If not — whose was better? Why?

   ___________________________________________________________________

   ___________________________________________________________________

3. **Could you have used different questions and still gotten the right answers?**

   ___________________________________________________________________

---

## Facilitation Guide (Teacher Use)

### Setup
- Print one sheet per pair, or project on screen and have students draw on blank paper.
- Works well with sticky notes on a whiteboard — each question on a diamond sticky, outcomes on rectangle stickies.

### Suggested Starter Questions (if students are stuck)
- "Is it used to write or draw with?" (separates writing tools from the rest)
- "Does it make marks on paper?" (similar split)
- "Is it used to measure something?" (separates measuring tools)
- "Can you put things inside it?" (separates storage tools)

### Common Mistakes to Watch For
- **Circular questions:** "Is it a writing tool?" — too on-the-nose; push for observable features
- **Ambiguous questions:** "Is it useful?" — not yes/no enough
- **Unbalanced trees:** A question that puts 7 items on one side and 1 on the other isn't very efficient

### Debrief Questions
1. *"Can there be more than one correct tree? What does that tell us about decision trees?"*
2. *"What if you wanted your tree to work for ALL school supplies — not just these 8? What would change?"*
3. *"In programming, how would you write your Question 1 as code?"* (If/else!)
4. *"Your AI agent does this too — every time it gets a message, it asks: 'Does this ask about weather? Does this ask for a joke?' How is that the same as what you just built?"*

### Timing Tips
- 2 min: Read the instructions together as a class
- 8 min: Pairs work on their trees
- 3 min: Test their trees with the test table
- 3 min: Class debrief

### Extension
For students who finish early, direct them to `decision-tree-design-challenge.md` — they'll design their own tree for a pet advisor from scratch.

---

*Part of the OpenClaw AI Curriculum — Module 3: How AI Thinks*
