# Chapter 5: The Logic of AI — Rules, Trees, and Decisions

> **Module 3 | Companion Textbook**
> *Grades 6–8 | OpenClaw AI Literacy Curriculum*

---

[ILLUSTRATION: A wide scene of a kid at a fork in a trail through a forest. Each fork has a signpost: "Raining?" left arrow says "Yes → Take umbrella," right arrow says "No → Check cloud cover." In the background, layers of more forks branch out like a tree. The mood is adventurous and logical — like a puzzle being solved one step at a time. A small version of the OpenClaw mascot peers out from behind a tree, curious and alert.]

---

## 🤔 Big Question

**Can a computer think through a problem step by step?**

Humans do this all the time without even noticing. Should I wear a jacket today? *Well — it's cloudy, and yesterday's forecast said rain, and I'll be outside for two hours...* You're not flipping a coin. You're processing information, weighing it, following a chain of reasoning to a decision.

For most of computing history, machines couldn't do anything like that. They just followed fixed rules: *if this exact thing happens, do exactly that.* Anything unexpected? System frozen.

But there's a family of AI tools — starting with something called a **decision tree** — that can actually work through a problem the way you do. Step by step. Checking one thing, then the next, then the next — until they reach an answer.

In this chapter, we're going to understand exactly how that works. You'll build one yourself. And you'll see how this simple idea — "ask one question at a time until you know the answer" — turns out to be powerful enough to catch spam, predict the weather, and, controversially, influence whether someone gets a job or a loan.

Let's start with a question: *how does AI know anything at all?*

---

## Opening Story: Jordan's Decision Morning

Jordan stood at the front door, backpack on, and stared at the gray sky.

*Umbrella? No umbrella?*

Jordan's phone was already buzzing with alerts. The weather app said 60% chance of rain. But Jordan had learned the hard way that 60% didn't mean "definitely." Last Tuesday it was 70% and not a single drop fell. Yesterday it was 30% and they got drenched.

Jordan looked at the clouds again. They were heavy and dark, not wispy and thin. The air smelled like that before-rain smell — petrichor, Jordan had recently learned the word was called. And it was cold. When it was cold *and* the clouds were dark *and* the forecast was above 50%, it had rained basically every time.

"Okay," Jordan said out loud. "Bringing the umbrella."

No math. No spreadsheet. Just a series of quick questions, each one narrowing down the answer, until the right choice was obvious.

Jordan didn't know it, but they had just used the same logic as one of the most important algorithms in the history of AI.

---

## Section 1: From Data to Knowledge — How AI Represents the World as Numbers

Before AI can reason through a problem, it needs to *understand* the world — or at least, represent it in a way a computer can work with.

Here's the challenge: computers are machines. They process numbers. But the world isn't made of numbers. It's made of textures, smells, faces, words, feelings, temperatures, sounds. How do you translate all of that into something a machine can use?

The answer: **features and representation.**

### What's a Feature?

In AI, a **feature** is any measurable piece of information about a thing.

Think about describing a piece of fruit to someone who can't see it. You might say: it's round, about the size of a baseball, orange in color, slightly rough on the outside, and smells citrusy. Those are all *features.*

In machine learning, you do the same thing — but you turn every feature into a number.

| Feature | Human Description | Computer Representation |
|---|---|---|
| Color | Orange | R=255, G=165, B=0 |
| Size | Baseball-sized | Diameter: 8.5 cm |
| Texture | Slightly rough | Roughness score: 0.6 (0=smooth, 1=very rough) |
| Weight | Feels heavy | 213 grams |
| Smell | Citrusy | Volatile organic compound profile [list of values] |

Now you've turned a piece of fruit into a row of numbers: `255, 165, 0, 8.5, 0.6, 213...`

And a computer can work with *that.*

[ILLUSTRATION: A cartoon orange with arrows pointing to it labeled with features — "Color: (255, 165, 0)," "Weight: 213g," "Texture: 0.6," "Diameter: 8.5cm." The orange looks mildly surprised at being so thoroughly quantified.]

### Features Are Everywhere

Every domain has its own set of features:

- **An email:** word count, number of links, sender domain, presence of words like "WINNER" or "FREE," time sent
- **A weather day:** temperature, humidity, wind speed, cloud cover, barometric pressure
- **A patient's health record:** age, blood pressure, cholesterol level, family history (encoded as 0/1)
- **A house for sale:** square footage, number of bedrooms, neighborhood, year built, distance to school

Choosing the *right* features is one of the most important — and most human — parts of building an AI system. Pick the wrong features and your AI will be confused. Pick the right ones and it'll be surprisingly good at its job.

> **Fun Fact:** This process of turning raw information into useful features is called **feature engineering**, and for a long time it was considered more art than science. Today, powerful AI systems like deep neural networks can sometimes learn their own features from raw data — but for decision trees and many other practical AI tools, a human still picks the features.

### What Is Representation?

**Representation** is the way you encode information so a computer can process it.

Turning an orange into a list of numbers is a representation. Turning an email into a list of word frequencies is a representation. Turning a photo into a grid of RGB pixel values (as you learned in Chapter 2) is a representation.

The choice of representation matters *enormously.* A bad representation hides important information. A good representation makes patterns obvious and easy to learn.

Imagine trying to classify emails as spam or not-spam if the only feature you used was the length of the email. You'd miss almost everything important! But add in the *words used, the sender's history, and whether there are suspicious links,* and suddenly patterns jump out.

> ### 🌍 Real World: Numbers All the Way Down
>
> Here's something wild: when you ask a language AI like OpenClaw a question, your words get turned into numbers too. Each word in your message gets converted into a long list of numbers — called an **embedding** — that captures its meaning in relation to other words. "Dog" and "puppy" end up with similar number-patterns. "Hot" and "cold" end up far apart. Every single word in your message, turned into hundreds of numbers, then processed by billions of calculations.
>
> You typed a sentence. The AI "read" a mountain of numbers.
>
> [QR CODE: Word Embeddings explained — 3Blue1Brown, YouTube, "Word2Vec"]

### Turning Yes/No Into Numbers

Some features aren't numbers at first — they're categories or yes/no questions. AI handles these with a simple trick:

- **Yes/No (binary):** 1 for yes, 0 for no
- **Categories:** Each category gets its own column. "Is it a cat? Is it a dog? Is it a bird?" becomes three separate 0/1 features.

This is called **one-hot encoding.** It sounds fancy, but it just means: turn every category into a yes/no question and represent each answer as a number.

| Animal | Is Cat? | Is Dog? | Is Bird? |
|---|---|---|---|
| Cat | 1 | 0 | 0 |
| Dog | 0 | 1 | 0 |
| Bird | 0 | 0 | 1 |

Now *everything* is numbers. And computers *love* numbers.

---

## Section 2: Decision Trees — The Simplest Form of AI Reasoning

Now that AI knows how to see the world as numbers, it needs to *reason* about those numbers. How do you go from "here's a list of features" to "here's my answer"?

One of the oldest and most elegant solutions: the **decision tree.**

### The Basic Idea

A decision tree is exactly what it sounds like: a tree of decisions. You start at the top (the **root**), ask a question, follow the branch that matches your answer, ask another question, follow another branch... and eventually reach the bottom, where you find your answer. These bottom nodes — where the tree gives you its final answer — are called **leaf nodes.**

It works exactly like the flowcharts you may have used in class. Or like the process Jordan used this morning: *Is it cloudy? Is it cold? Is the forecast over 50%?*

Each question splits the data into groups. The goal is to ask the *most useful* questions first — the ones that separate things most cleanly.

[ILLUSTRATION: A visual decision tree for "Should I bring an umbrella?" Root node at top: "Is the forecast above 50% chance of rain?" Left branch (Yes) → "Are the clouds dark and heavy?" If yes → leaf node "BRING UMBRELLA ☂️". If no → leaf node "Probably fine 🌤". Right branch (No) → "Is the air cold and damp?" If yes → leaf node "Maybe bring it just in case 🌂". If no → leaf node "Leave it home ✅". Clean, colorful, easy to read.]

### Building a Decision Tree: Step by Step

Let's walk through building a real (tiny) decision tree together. We'll use a dataset of emails to decide: is this email spam or not?

Here's our dataset of 8 emails:

| Email # | Contains "FREE" | Has > 3 links | Sent after midnight | Spam? |
|---|---|---|---|---|
| 1 | Yes | Yes | No | Spam |
| 2 | Yes | No | Yes | Spam |
| 3 | No | No | No | Not Spam |
| 4 | No | Yes | No | Not Spam |
| 5 | Yes | Yes | Yes | Spam |
| 6 | No | No | Yes | Not Spam |
| 7 | Yes | No | No | Spam |
| 8 | No | Yes | No | Not Spam |

**Step 1: What's the best first question to ask?**

The goal is to pick the feature that divides our data into the cleanest groups — ideally, one group that's all spam and one that's all not-spam.

Let's check "Contains FREE":
- Emails with "FREE": #1, 2, 5, 7 → all 4 are spam ✅ (perfectly separated!)
- Emails without "FREE": #3, 4, 6, 8 → all 4 are not spam ✅ (perfectly separated!)

That's a perfect split! Every email with the word "FREE" is spam. Every email without it is not spam.

**Step 2: Build the tree**

```
Root: Contains "FREE"?
       /           \
     Yes            No
      |              |
   [SPAM] ✓    [NOT SPAM] ✓
```

That's it. In this tiny example, one question was enough.

**Step 3: In the real world, it's messier**

Real datasets aren't this clean. Usually the first split separates *most* emails but not all. So you keep going — ask another question for the remaining uncertain emails, then another, until every leaf node is "clean" enough (all spam or all not-spam) or you've run out of questions.

[ILLUSTRATION: An expanded tree showing a more complex spam example. Root: "Contains 'FREE'?" → If yes: "Has more than 3 links?" → Yes: SPAM. No: "Sent after midnight?" → Yes: SPAM. No: NOT SPAM. The tree grows downward like roots spreading, nodes labeled clearly.]

### What Makes a Good Question?

The math behind deciding which question to ask first involves a concept called **information gain** — essentially, how much does this question *reduce our uncertainty?*

You don't need to know the math formula (though it's interesting — it involves something called entropy, borrowed from physics). What you need to know is the *intuition:*

> **Ask the question that most cleanly separates your examples into groups.**

If you're trying to identify dogs vs. cats and you ask "Does it have fur?" — that doesn't help much, because both dogs and cats have fur. But if you ask "Does it meow?" — that separates them almost perfectly. *That's* the better first question.

> ### 💡 Key Insight: "Divide and Conquer"
>
> Decision trees work by **dividing** the problem — splitting data into smaller and smaller groups — until each group is simple enough to **conquer** (give a clear answer). This is one of the most powerful ideas in all of computer science. You'll see it again in sorting algorithms, search algorithms, and far more complex AI.

### Nodes and Leaf Nodes

Two vocabulary words you'll use a lot:

- A **node** is any point in the tree where a decision is made — a question is asked and the answer sends you left or right. The top node (the first question) is called the **root node.**
- A **leaf node** is the end of the tree — where no more questions are asked and the final answer is given (Spam / Not Spam, Approve / Deny, etc.).

[ILLUSTRATION: A simple tree diagram with nodes circled and labeled "decision node" and leaf nodes labeled "leaf node — final answer." Arrows show the flow from root down to leaves. Labels use friendly handwritten-style annotations.]

---

> ### 🌍 Real World Spotlight: How a Decision Tree Decides If an Email Is Spam
>
> Your email inbox is protected by a spam filter. And for a long time, spam filters were basically just decision trees — or collections of many decision trees working together (we'll get to that).
>
> Here's a simplified version of how an early spam filter worked:
>
> 1. **Does the subject line contain ALL CAPS?** → suspicious
> 2. **Is the sender not in your contacts?** → suspicious
> 3. **Does the email contain words like "WINNER," "FREE," "CLAIM YOUR PRIZE"?** → very suspicious
> 4. **Does it contain more than 5 links?** → suspicious
> 5. **Was it sent from a newly registered domain?** → suspicious
>
> Each "suspicious" answer adds to a score. If the score passes a threshold — into the spam folder it goes.
>
> Modern spam filters are much more sophisticated — they use neural networks, behavioral signals, and more. But the core logic is the same: check features, follow the path, reach a verdict.
>
> **The result?** Google's Gmail claims to block more than **99.9%** of spam before it reaches your inbox. That's hundreds of billions of spam emails stopped every day — most of it still using some form of tree-based reasoning.
>
> [QR CODE: How Gmail's spam filter works — Google Safety Center]

---

## 🛠️ Try It: Build a Mini Decision Tree

**"Should I bring an umbrella today?"**

This activity takes about 15 minutes. You'll need paper, a pencil, and either a window to look outside or access to a weather app.

### Step 1: Choose Your Features

Think about what information you use when you decide whether to bring an umbrella. List at least 5 features. Here are some to get you started:

- Rain chance from forecast (number: 0–100%)
- Cloud cover (clear / partly cloudy / mostly cloudy / overcast)
- Temperature (cold / mild / warm)
- Wind (calm / breezy / windy)
- Time of day you'll be outside
- How far you're walking
- How annoying it is to carry an umbrella (be honest!)

### Step 2: Pick Your Most Powerful Question

Which single feature, if you knew it, would tell you the *most* about whether you need an umbrella? That's your root node.

Most people choose something like: *"Is the rain forecast above 50%?"* because it does the most sorting work up front.

### Step 3: Build the Tree

Start with your root question. Draw two branches: Yes and No. For each branch, ask: *"Is this enough to decide? Or do I need to know more?"*

If you need to know more, add another question. Keep going until each branch ends at a clear answer: Bring it / Leave it home / Maybe take it just in case.

Here's a template to fill in:

```
Is [root question]?
        /           \
      Yes             No
       |               |
Is [question 2a]?   Is [question 2b]?
   /      \             /       \
 Yes       No         Yes        No
  |         |          |          |
[Answer]  [Answer]  [Answer]   [Answer]
```

### Step 4: Test It

Use your completed tree to make today's umbrella decision. Go through it step by step, checking each feature. What does your tree say?

Was it right? (You may need to check back after school.)

### Step 5: Reflect

- Which question did you choose as your root? Why?
- Did you have any "hard cases" where the tree didn't give a clean answer?
- How would you improve your tree if you had more features to work with?

> **Extension:** Swap trees with a classmate. Use their tree to make the umbrella decision for *today.* Do you get the same answer? If not, what's different about your trees?

---

> ### ⚖️ Ethical Spotlight: When Decision Trees Make Life-Changing Choices
>
> So far, decision trees have decided things like "spam or not spam" and "umbrella or no umbrella." Those are pretty low stakes. Getting it wrong means a wet backpack or a missed marketing email.
>
> But what if a decision tree were deciding... whether you get a job?
>
> Or whether you get a loan to start a business?
>
> Or how long you spend in jail?
>
> This isn't hypothetical. These things are happening right now.
>
> ### The Tools That Got Famous (and Controversial)
>
> **COMPAS** (Correctional Offender Management Profiling for Alternative Sanctions) is an AI tool used in some U.S. courtrooms to predict whether someone convicted of a crime is likely to commit another crime in the future — what's called **recidivism.** Judges use these scores when deciding sentences and bail.
>
> A 2016 investigation by ProPublica found that COMPAS was **twice as likely to wrongly flag Black defendants as future criminals** compared to white defendants with similar histories. The tool was making racially biased predictions — not because someone programmed racism into it, but because it learned from historical data that *already reflected systemic bias.*
>
> **Hiring algorithms** at many large companies use AI to screen résumés before a human ever sees them. These tools have been found to penalize résumés that include words like "women's chess club" or list a women's college, because the training data came from historical hiring decisions that favored men.
>
> **Loan algorithms** have been found to offer higher interest rates in neighborhoods that are majority Black or Hispanic — even when income and credit scores are equal.
>
> ### Why Does This Happen?
>
> Decision trees (and all AI systems) learn patterns from data. If the data reflects historical unfairness — and most real-world data does — the AI learns to be unfair too. It's not malicious. It's not even aware. It's just a machine finding patterns.
>
> But *"the algorithm did it"* doesn't protect the person who got denied a loan, lost a job opportunity, or received a harsher sentence.
>
> ### Questions Worth Sitting With
>
> - Should an algorithm ever have a say in whether someone goes to prison?
> - If an AI makes a biased decision, who is responsible — the programmer? The company? The judge who used it?
> - Is it possible to build an "unbiased" AI when the training data comes from a biased world?
>
> We'll return to these questions in depth in **Module 6: AI, Bias, and Society.** For now, keep them in the back of your mind as you build and use AI tools. The logic of a decision tree seems simple and clean. The consequences aren't always simple at all.
>
> [QR CODE: "Machine Bias" — ProPublica investigation into COMPAS, student-accessible version]
> [QR CODE: "Coded Bias" documentary trailer — algorithmic discrimination explained]

---

## Key Terms

| Term | Definition |
|---|---|
| **Feature** | A measurable piece of information about something — the inputs an AI uses to make decisions |
| **Representation** | The way information is encoded (usually as numbers) so a computer can process it |
| **Classification** | An AI task where the goal is to assign something to one of a set of categories (spam/not spam, dog/cat/bird, approve/deny) |
| **Decision Tree** | An AI model that makes decisions by asking a series of yes/no questions, following branches until reaching an answer |
| **Node** | A point in a decision tree where a question is asked and data is split into branches |
| **Leaf Node** | The end-point of a decision tree — where the final answer (classification) is given, with no further questions |

---

## Check Your Understanding

Answer in complete sentences. Try to explain in your own words — don't just copy definitions.

**1.** Jordan notices that every time it's both cloudy AND windy, it rains within two hours. What *features* is Jordan tracking, and how would those features appear in a decision tree?

**2.** An AI system is being trained to decide whether a news article is "real news" or "fake news." List at least four features the AI might use, and explain why each one might be helpful.

**3.** Look at the decision tree you built in the Try It activity. Identify one *node* and one *leaf node.* Explain how you know which is which.

**4.** The Ethical Spotlight describes AI tools that have made biased decisions about bail, hiring, and loans. Some people argue we should just stop using AI for these decisions. Others argue we should keep using AI but fix the bias. What do you think — and what would "fixing the bias" even require?

---

> ### 🐾 OpenClaw Challenge: Does AI Explain Its Reasoning?
>
> Decision trees are special for one reason: they're **explainable.** You can look at every step of the decision and see exactly *why* the AI gave the answer it did. Each branch, each question, each leaf — it's all visible.
>
> But what about more complex AI systems, like the language AI powering OpenClaw? Does it explain its reasoning?
>
> Let's find out.
>
> **Part 1: Ask OpenClaw to reason out loud**
>
> Open OpenClaw and try this prompt:
>
> *"I'm trying to decide whether to bring an umbrella today. Here are the conditions: it's 58°F outside, the sky is mostly cloudy with dark clouds to the west, the forecast says 65% chance of rain in the afternoon, and I'll be walking home from school at 3pm. Walk me through your decision step by step — ask yourself questions, show your reasoning, and tell me what you'd recommend."*
>
> Read the response carefully. Did OpenClaw:
> - Break the problem into steps?
> - Identify specific features (temperature, cloud type, forecast %, timing)?
> - Show its reasoning at each step?
> - Reach a clear recommendation?
>
> **Part 2: Push back**
>
> Now change one detail and see if OpenClaw updates its reasoning:
>
> *"Actually, I have a covered walkway the whole way home, so I won't be exposed to rain. Does that change your recommendation? Walk me through it again."*
>
> Did the reasoning change? Did it make sense?
>
> **Part 3: Reflect**
>
> A decision tree shows you exactly which branches it took. OpenClaw gives you *words* that describe its reasoning. Are these the same thing?
>
> Write a short paragraph (3–5 sentences) comparing the two:
> - What do they have in common?
> - What's different about how you can trust or verify each one?
> - If OpenClaw gave you a surprising or wrong answer, how would you figure out *why* it was wrong — compared to checking a decision tree?
>
> **Bonus Challenge:** Ask OpenClaw: *"Imagine you are a decision tree. What questions would you ask to decide if an email is spam? Draw the tree using text."* How does it do? Is the tree it describes one you could actually use?

---

## Chapter Summary

Here's what we covered in Chapter 5:

**Jordan's morning** showed us that humans reason step-by-step all the time — checking features, following logic, reaching decisions. AI does something similar.

**Features and representation** are how AI "sees" the world. Every piece of information gets turned into a number. Choosing the right features is one of the most important (and human) parts of building an AI system.

**Decision trees** are the simplest form of AI reasoning. They ask a series of questions, following branches based on yes/no answers, until they reach a final classification (leaf node). They're built by finding the features that split data most cleanly.

**Spam filters** were an early real-world win for decision-tree reasoning — and still use the same core logic today.

**Ethical risks** emerge when decision trees (or any AI) are trained on biased data. The tools learn the bias. People pay the price. These aren't just technical problems — they're human ones.

**OpenClaw and decision trees** both "reason through" problems — but there's a key difference: decision trees are fully transparent, while AI language models produce explanations that can sound confident but aren't always verifiable in the same way.

---

## Going Further

[QR CODE: *Teachable Machine* — Google, train a real classifier and see how it works]

[QR CODE: *Decision Tree interactive visualization* — R2D3.us, "A visual introduction to machine learning"]

[QR CODE: *Machine Bias* — ProPublica, the COMPAS investigation]

[QR CODE: *Coded Bias* — documentary about algorithmic discrimination in real life]

[QR CODE: *Crash Course AI: Decision Trees* — YouTube, PBS]

---

*End of Chapter 5*

---

> **Up Next → Chapter 6: Patterns at Scale — How Neural Networks Learn**
> *We go deeper into the black box — and discover how AI can find patterns too subtle for any human to see.*

---

*© OpenClaw AI Literacy Curriculum | Module 3 | Draft v0.1 | For classroom and educational use*
