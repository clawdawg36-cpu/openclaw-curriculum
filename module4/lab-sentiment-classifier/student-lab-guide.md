# Sentiment Classifier Lab — Student Guide
## Can you teach a computer to feel the vibe?

**Your Mission:** Train an AI to tell the difference between positive and negative movie reviews — without writing a single rule. Then build a Scratch project that uses your AI to sort new reviews automatically.

---

## Part 1: Set Up Machine Learning for Kids

### Step 1: Create Your Account

1. Go to **[machinelearningforkids.co.uk](https://machinelearningforkids.co.uk)**
2. Click **"Get started!"**
3. If your teacher gave you a login: click **"Log In"** and enter your credentials
4. If not: click **"Try it without logging in"** (your work won't be saved, but that's okay for today)

> 💡 **What is ML for Kids?**  
> Machine Learning for Kids is a free platform that lets you train real AI models using IBM's Watson AI technology. It's the same kind of tech used in products like Siri and Alexa!

---

### Step 2: Create a New Project

1. Click **"Projects"** in the top menu
2. Click the **"+ Add a new project"** button
3. Fill in the form:
   - **Project name:** `Movie Review Classifier`
   - **Recognise:** Text
   - **Language:** English
4. Click **"Create"**

You'll now see your project appear in the list. Click on it to open it.

---

## Part 2: Train Your Model

### Step 3: Set Up Your Training Buckets

Inside your project, click **"Train"**.

You'll see an empty training page. You need to create two **buckets** — think of these as folders that teach the AI what each category looks like.

1. Click **"Add new label"** → type `positive` → click **Add**
2. Click **"Add new label"** → type `negative` → click **Add**

Now you have two buckets: `positive` and `negative`.

---

### Step 4: Add Training Examples

This is the most important step! You're going to give the AI examples of each type of review so it can learn the pattern.

**Add these to the POSITIVE bucket** (click "Add example" under `positive`):

```
This movie was absolutely fantastic! I loved every minute of it.
A masterpiece. One of the best films I've ever seen.
Incredible performances and a gripping story from start to finish.
I was on the edge of my seat the whole time — brilliant!
Totally worth it. I'm recommending this to everyone I know.
The special effects were breathtaking and the plot kept me guessing.
Funny, heartwarming, and surprisingly emotional. A must-see!
One of those rare films that actually lives up to the hype.
The acting was superb and the soundtrack was beautiful.
I walked out of the theater feeling inspired. Amazing film.
```

**Add these to the NEGATIVE bucket** (click "Add example" under `negative`):

```
What a waste of time. I walked out halfway through.
Terrible acting and a plot full of holes. Don't bother.
The worst movie I've seen this year. Completely disappointing.
Boring, predictable, and way too long. I nearly fell asleep.
The dialogue was cringeworthy and the ending made no sense.
A cheap, lazy sequel that disrespects the original.
Nothing happened for the first hour. Total snoozefest.
The CGI looked fake and the jokes all fell flat.
I want my money back. Truly awful experience.
Poorly written, poorly directed, and poorly acted. Avoid.
```

> 🎯 **Pro tip:** More examples = smarter AI! If you have time, add more reviews you find online or make up your own. Aim for at least 15 in each bucket.

---

### Step 5: Train the Model

1. After adding your examples, click **"Back to project"** (top left)
2. Click **"Learn & Test"**
3. Click the big **"Train new machine learning model"** button
4. Wait 30–60 seconds while the AI trains. You'll see a progress indicator.
5. When it says "Your model is ready," you're good to go!

---

### Step 6: Test It Directly

Before building in Scratch, let's make sure the model works.

On the "Learn & Test" page, find the **"Test your model"** section:

Try these test reviews:
- `"The cinematography was gorgeous and the story moved me to tears"` → Should be: **positive**
- `"Slow, dull, and completely forgettable. Terrible film."` → Should be: **negative**
- `"It was fine. Not great, not terrible."` → What does the AI say? Is it right?

> 📝 **Write down:** What confidence percentage does the AI give each result? What does that number mean?

---

## Part 3: Build the Scratch Project

### Step 7: Open Scratch in ML for Kids

1. Go back to your project page
2. Click **"Make"**
3. Click **"Scratch 3"**
4. This opens a special version of Scratch that has your AI model built in!

> ⚠️ **Important:** Use this special Scratch link — not the regular scratch.mit.edu. Your AI model is only connected here.

---

### Step 8: Explore the AI Blocks

In Scratch, look at the block categories on the left. Scroll down — you should see a new section called **"Movie Review Classifier"** (your project name).

Click on it to see your AI blocks:
- `recognise text [ ] (label)` — gives you the label (positive/negative)
- `recognise text [ ] (confidence)` — gives you a percentage of certainty
- `confidence of recognising [ ] as [positive v]` — specific confidence for one label

These are the blocks that talk to your trained model!

---

### Step 9: Build the Review Sorter

Let's build a simple project that:
1. Asks the user to enter a movie review
2. Sends it to your AI
3. Sorts it into "Positive" or "Negative" with a visual reaction

**Create this Scratch program:**

**Backdrop:** Add two backdrops from the library — pick something that looks "happy" (for positive) and something that looks "gloomy" or "scary" (for negative). Or draw your own!

**Sprite:** Use the default cat, or pick a movie-themed sprite.

**Scripts (drag these blocks together):**

```
When [green flag] clicked
say [Welcome to the Movie Review Sorter! 🎬] for (2) seconds
ask [Enter a movie review:] and wait
set [review v] to (answer)

if <(recognise text (review) label) = [positive]> then
    switch backdrop to [happy backdrop v]
    say (join [✅ POSITIVE! Confidence: ] (recognise text (review) confidence [positive v])) for (3) seconds
else
    switch backdrop to [gloomy backdrop v]
    say (join [❌ NEGATIVE! Confidence: ] (recognise text (review) confidence [negative v])) for (3) seconds
end
```

> 💡 **Note:** The exact block names will match your project. Look for the recognise blocks in your ML section.

---

### Step 10: Add a Loop (Make It Repeatable)

Wrap your code in a `forever` loop or add a "Try another review?" prompt so users can test multiple reviews without restarting.

**Enhancement idea:** Add a score counter that tracks how many positive vs negative reviews have been entered!

---

## Part 4: Testing Protocol

### Step 11: Can the AI Generalize?

Now comes the real science. Your AI was trained on specific examples — but can it handle reviews it's **never seen before**?

Work through the following test reviews. For each one, **predict** what you think the AI will say BEFORE you test it, then record the actual result.

**Test Set A — Should be POSITIVE:**

| Review | Your Prediction | AI Result | Correct? |
|--------|-----------------|-----------|----------|
| "A delightful surprise — I laughed, I cried, I cheered." | | | |
| "The director's best work yet. Every scene was perfect." | | | |
| "My whole family loved it. We're watching it again this weekend." | | | |

**Test Set B — Should be NEGATIVE:**

| Review | Your Prediction | AI Result | Correct? |
|--------|-----------------|-----------|----------|
| "I've seen better acting in a school play." | | | |
| "Two hours of my life I'll never get back." | | | |
| "The sequel nobody asked for, executed worse than expected." | | | |

**Test Set C — Tricky/Ambiguous:**

| Review | Your Prediction | AI Result | Correct? |
|--------|-----------------|-----------|----------|
| "It's not the worst movie ever made, but it's close." | | | |
| "Some good moments buried under a lot of mediocrity." | | | |
| "Visually stunning but emotionally empty." | | | |
| "I didn't hate it." | | | |

---

### Step 12: Calculate Accuracy

Using your test results from Test Sets A and B (the clear ones):

- **Total tests:** ______  
- **Correct predictions:** ______  
- **Accuracy:** ______ / ______ = ______%

> **What's a good accuracy?** In machine learning, 80%+ is often considered solid for a simple classifier. 90%+ is very good. What did you get?

---

### Step 13: Improve Your Model (Bonus)

If your model got some wrong, go back to the "Train" section and add more examples similar to the ones it missed. Retrain and test again.

This is the real ML workflow: **Train → Test → Improve → Repeat.**

---

## Part 5: Wrap Up

### Step 14: Save and Share

1. In Scratch, click **File → Save to your computer** (download the .sb3 file)
2. Name it: `movie-review-classifier-[your name].sb3`
3. Submit to your teacher

---

> 🧠 **Remember:** The AI didn't learn rules like "if the word 'great' appears, it's positive." It learned *patterns* from all your examples together. That's what makes machine learning different from regular programming!
