# 🌳 Example Decision Trees — Reference

**Module 3 | Build-a-Tree Activity**

Use these examples if you get stuck. Study how the questions are structured, how the tree handles tricky cases, and how the leaves are organized.

---

## How to Read These Trees

- `[ Question? ]` = a **node** (a decision point — you ask yes or no)
- `YES →` and `NO →` = **branches** (the path you follow after answering)
- `( Answer )` = a **leaf** (the final result — no more questions)

Each path from root to leaf is a complete classification.

---

## Example 1 — Animal Classifier 🐾

**Domain:** Identify the animal from yes/no questions
**Items:** dog, eagle, salmon, frog, butterfly, snake, whale, bat

---

### The Tree

```
[ Does it have a backbone (vertebrate)? ]
          |                    |
         YES                   NO
          |                    |
[ Does it live in water?]  ( Butterfly 🦋 )
      |           |
     YES          NO
      |           |
[ Is it warm-blooded? ]   [ Does it have wings? ]
    |        |                  |          |
   YES       NO                YES         NO
    |        |                  |          |
( Whale 🐳 ) [ Does it have legs? ]  ( Eagle 🦅 )  [ Does it have legs? ]
                  |        |                              |         |
                 YES        NO                           YES        NO
                  |         |                             |         |
              ( Frog 🐸 )  ( Salmon 🐟 )             ( Dog 🐕 )  ( Snake 🐍 )
```

---

### How It Works

**Path: Whale**
1. Has a backbone? → YES
2. Lives in water? → YES
3. Warm-blooded? → YES → **Whale** ✅

**Path: Butterfly**
1. Has a backbone? → NO → **Butterfly** ✅
*(Note: This only works if butterfly is the only invertebrate in our set. A larger tree would need more questions here.)*

**Path: Snake**
1. Has a backbone? → YES
2. Lives in water? → NO
3. Has wings? → NO
4. Has legs? → NO → **Snake** ✅

---

### Design Notes

**Why "Does it have a backbone?" first?**
It cleanly splits vertebrates (6 items) from invertebrates (butterfly) — almost perfectly. A better root question for a larger set might be "Is it warm-blooded?" but for this 8-item set, backbone works.

**Edge case: Is a frog always an aquatic animal?**
Frogs split their time between water and land. This tree puts frog under "lives in water" — which works for this simplified set, but a more precise tree would add a question like "Does it spend part of its life in water?"

**Edge case: What about a duck?**
A duck has a backbone ✓, lives near water ✓, is warm-blooded ✓. It would fall on the whale path! This tree doesn't handle ducks correctly — you'd need an extra question like "Does it breathe with gills?" to separate fish from mammals.

> **Lesson:** Every tree has limits. Knowing *where* it breaks is as important as knowing *how* it works.

---

## Example 2 — What to Wear Today 🌤️

**Domain:** Suggest clothing based on weather conditions
**Items:** T-shirt, light jacket, heavy coat + gloves, raincoat + boots, snow gear, umbrella + layers

---

### The Tree

```
[ Is it precipitating (rain or snow)? ]
              |                   |
             YES                  NO
              |                   |
[ Is it snow or freezing rain? ]  [ Is it above 65°F (warm)? ]
       |               |                   |              |
      YES              NO                 YES             NO
       |               |                  |               |
( Snow Gear ❄️ )  ( Raincoat   [ Is there strong wind? ]  ( Light Jacket 🧥 )
               + Boots 🌧️ )       |              |
                               YES              NO
                                |               |
                          ( Umbrella      ( T-Shirt 👕 )
                          + Layers 🌂 )
```

---

### How It Works

**Path: Snow gear day**
1. Is it precipitating? → YES
2. Is it snow or freezing? → YES → **Snow Gear** ✅

**Path: Nice T-shirt weather**
1. Is it precipitating? → NO
2. Is it above 65°F? → YES
3. Strong wind? → NO → **T-Shirt** ✅

**Path: Light jacket day**
1. Is it precipitating? → NO
2. Is it above 65°F? → NO → **Light Jacket** ✅

---

### Design Notes

**Why start with precipitation?**
Because whether it's raining or snowing changes *everything* about what you wear — more than temperature alone. Precipitation is the most impactful variable for this decision.

**How would you add "heavy coat + gloves"?**
You'd need to split the "NO precipitation, cool temperature" branch further. Something like: "Is it below 40°F?" → YES → Heavy coat + gloves.

**What about fog?**
The tree doesn't handle fog — you'd either classify it under "precipitation = YES" (debatable) or add a new branch. Real-world trees get complicated fast.

---

## Example 3 — Food Classifier 🍕

**Domain:** Classify food into categories
**Items:** apple, carrot, bread, chicken, cheese, rice, banana, broccoli

**Target categories:** Fruit | Vegetable | Grain | Protein | Dairy

---

### The Tree

```
[ Does it come from an animal? ]
              |                    |
             YES                   NO
              |                    |
[ Is it meat or eggs? ]    [ Is it a seed or grain? ]
     |            |               |              |
    YES            NO            YES              NO
     |              |             |               |
( Chicken 🍗 )  ( Cheese 🧀 )  [ Is it rice or bread? ]   [ Is it sweet when ripe? ]
                  (Dairy)          |            |                  |            |
                                  YES           NO                YES            NO
                                   |             |                 |             |
                              ( Bread 🍞 )  ( Rice 🍚 )      ( Fruit 🍎🍌 )  ( Vegetable 🥦🥕 )
```

---

### Leaves for Fruit Branch

When a student reaches "Is it sweet when ripe? → YES," they've identified a fruit. Then classify further:

```
[ Is it yellow and curved? ]
        |           |
       YES           NO
        |             |
  ( Banana 🍌 )   ( Apple 🍎 )
```

---

### Leaves for Vegetable Branch

```
[ Is it orange? ]
      |       |
     YES      NO
      |        |
( Carrot 🥕 ) ( Broccoli 🥦 )
```

---

### Design Notes

**Why "Does it come from an animal?" first?**
It's the biggest categorical split — it cleanly separates the plant-based foods (5 items) from animal-based foods (3 items).

**The tomato problem:**
Tomatoes are botanically a fruit (they develop from the flower and contain seeds) but are culinarily a vegetable. If you added a tomato, your tree would put it in the "fruit" branch — which is scientifically correct but might surprise people.

This is a great classroom discussion: **what counts as the "right" answer depends on the purpose of your tree.** A botanist's tree and a grocery store's tree would look different.

**Edge case: Is bread made from grains → YES?**
Yes — bread is made from wheat flour, so "seed or grain" = YES. The tree handles it correctly.

---

## Common Mistakes to Avoid

### Mistake 1: Questions That Aren't Yes/No
❌ "What color is it?" (has more than two answers)
✅ "Is it red or orange?"

### Mistake 2: Questions That Apply to Only One Item
❌ "Does it have stripes?" (only narrows down one specific animal)
✅ "Does it have a shell?" (narrows down a whole category)

### Mistake 3: Unreachable Leaves
If an item can never make it to its leaf through any combination of yes/no answers, the tree has a bug. Test every item!

### Mistake 4: Too Many Items at One Leaf
A leaf should have exactly one answer. If two different things both end up at the same leaf, you need one more question to tell them apart.

### Mistake 5: Over-engineering the Root
The first question doesn't have to be the most dramatic one — it just has to split your list roughly in half. Simple beats clever.

---

## What Real AI Trees Look Like

The trees you built by hand follow the same logic as **CART (Classification and Regression Trees)** — one of the most widely used algorithms in machine learning.

The difference: instead of a human designing each question, the algorithm automatically finds the best question by computing **information gain** — a measure of how much each question reduces uncertainty.

But the output looks exactly like what you drew.

> "The algorithm does in milliseconds what you just did in 25 minutes — by hand. That's why computers are useful. But *you* understand why it works."

---

*Reference these trees as models — don't copy them exactly. Your tree should reflect your own thinking.* 🌳
