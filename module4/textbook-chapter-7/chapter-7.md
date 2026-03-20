# Chapter 7: How AI Learns — Training, Models, Predictions

> **Module 4 | Companion Textbook**
> *Grades 6–8 | OpenClaw AI Literacy Curriculum*

---

[ILLUSTRATION: A wide classroom scene — but instead of students, it's a computer surrounded by stacks of labeled flashcards (images with handwritten tags: "cat," "dog," "bird"). The computer has a curious expression on a tiny screen face. A looping arrow connects four stations around it: "Data," "Model," "Evaluate," and "Improve." Bright and energetic, not intimidating.]

---

## Opening Story: How a Computer Learned to Spot Tumors

Dr. Sio had been reading X-rays for twenty years.

She was good at it. Very good. But even she admitted that after reviewing her hundredth scan of the day, her eyes got tired. Details blurred. She second-guessed herself. She was human.

In 2020, a hospital in Denmark ran an experiment. They took 89,000 chest X-rays — scans that had already been labeled by doctors as "cancer" or "no cancer" — and fed them to a computer program. Not to *show* the program the answer. To *teach* it to figure it out.

The program started out terrible. It guessed randomly. It was wrong most of the time.

But here's the thing: every time it was wrong, it adjusted. It looked at what it got right and what it got wrong. It tried again. Adjusted again. Tried again.

After weeks of this — millions of adjustments, across millions of examples — something remarkable happened. The program started getting things right. Then *very* right. By the end of the study, it matched the accuracy of experienced radiologists on scans it had never seen before.

It hadn't been programmed with rules about what cancer looks like. Nobody handed it a checklist. It had *learned* — the same way Dr. Sio had learned over twenty years of practice — just at superhuman speed, and from far more examples than any person could ever review.

This is machine learning. And this chapter is about how it works.

---

> ### 🤖 Your Agent's Journey — Where We Are
>
> **Your agent's current capabilities:**
> - ✅ Has a name and personality (Module 1)
> - ✅ Can perceive images and audio (Module 2)
> - ✅ Has a knowledge base (Module 3)
> - 🔓 *Unlocking now:* Learning — understanding how your agent actually gets smarter
>
> So far we've talked about *what* AI can do. Now we're going behind the curtain to understand *how it learns to do it.* This is where things get really interesting.

---

## Section 1: What Is Machine Learning?

Let's start with a question: what's the difference between teaching a dog a trick and programming a calculator?

When you teach a dog to sit, you don't hand it a rulebook. You show it what you want, reward it when it gets close, and repeat — hundreds of times if necessary. The dog's brain slowly adjusts. Eventually, it *just knows* to sit when you say the word.

Programming a calculator is different. You write out exact rules — step by step, covering every possibility. Add these numbers. Show this result. The calculator never "gets better." It just follows instructions.

**Machine learning is much more like the dog.**

Instead of a programmer writing out every rule, you show the system thousands (or millions) of examples and let it figure out the patterns on its own. The system adjusts, adjusts, adjusts — until it gets really good at the task.

Here's the formal definition we'll use throughout this chapter:

> **Machine Learning** is a way of building AI systems that learn from examples, rather than following rules written by a programmer.

But machine learning isn't one single thing. There are three major *flavors* — called **paradigms** — and they work quite differently from each other.

---

### Paradigm 1: Supervised Learning

**The idea:** You give the system examples where you already know the right answer. It learns by trying to match those answers.

Imagine you want to teach an AI to tell the difference between photos of cats and dogs. You gather 10,000 photos and label each one: *"cat"* or *"dog."* You feed all those labeled examples to the AI. It looks for patterns — ears, noses, fur textures, body shapes — until it can predict the label of a new photo it's never seen.

This is called **supervised** learning because you're supervising the training — you're providing the correct answers the whole time.

**Real-world uses:**
- Spam detection (labeled examples of "spam" and "not spam")
- Disease diagnosis (labeled medical scans)
- Voice recognition (labeled recordings of spoken words)
- Predicting tomorrow's weather

---

> ### 💡 OpenClaw Challenge: Label Like a Machine
>
> Before any supervised learning can happen, someone has to label the data.
>
> 1. Find a partner. Open a folder of random images (or use Google Images to search something like "dogs").
> 2. Go through 20 images. For each one, write: the label, how confident you are (0–100%), and *why* you labeled it that way.
> 3. Compare your labels with your partner's. Did you always agree? What happened when you disagreed?
> 4. Ask OpenClaw: *"Why is it expensive and difficult to label training data for AI?"* Compare its answer to what you just experienced.

---

### Paradigm 2: Unsupervised Learning

**The idea:** You give the system data *without* labels and let it find patterns on its own.

Imagine dumping 10,000 photos on an AI — no labels, no categories — and saying, *"Figure it out."* A good unsupervised learning system might notice that some photos have pointy-eared animals and some have floppy-eared animals, and start grouping them together — even though nobody told it the groups were "cats" and "dogs."

This is called **unsupervised** because you're not supervising. You're not providing right answers. You're asking the AI to discover structure that you didn't already know was there.

**Real-world uses:**
- Customer segmentation (finding different "types" of shoppers without defining them in advance)
- Anomaly detection (spotting unusual credit card transactions that don't fit normal patterns)
- Recommendation systems (grouping users who like similar things)
- Compressing large datasets (finding hidden structure to represent data more efficiently)

---

> ### 🌍 AI in the Wild: Spotify's Recommendations
>
> Spotify uses unsupervised learning techniques to discover music "genres" that no human ever defined. Their algorithm noticed that certain songs get played together a lot — and from those patterns, it discovered weird micro-genres like "deep filthstep" or "mallsoft" that no music critic had ever named.
>
> Nobody labeled those genres. The pattern was in the data, waiting to be found.
>
> [QR CODE: "Every Noise at Once" — the massive map of every Spotify-discovered music genre]

---

### Paradigm 3: Reinforcement Learning

**The idea:** The system learns by trying things, getting feedback, and maximizing rewards over time.

Picture a robot learning to walk. Nobody hands it a physics textbook. It just tries to move — falls over, adjusts, tries again. Every time it takes a step without falling, it gets a small "reward" signal. Every time it crashes, it gets a penalty. Over thousands (or millions) of attempts, it learns to walk.

This is **reinforcement learning** — inspired by how animals (including humans) learn through trial and error. The system is called an **agent**, and it acts in an **environment**. The goal is to find the strategy that gets the most rewards over time.

**Real-world uses:**
- Training game-playing AI (like AlphaGo, which learned to play the board game Go better than any human)
- Robotics (teaching robots to grasp objects, navigate rooms)
- Self-driving cars (making decisions in complex traffic)
- Personalized recommendations that adapt as your tastes change

---

> ### 🌍 AI in the Wild: OpenAI's Robot Hand
>
> OpenAI built a robotic hand that learned to solve a Rubik's Cube — not by being programmed with the solution, but through reinforcement learning. The hand was trained entirely in a computer simulation (billions of virtual attempts over the equivalent of 10,000 years). Then it was tested on a real Rubik's Cube.
>
> It solved it. Not perfectly, but it solved it — with a robot hand, which is incredibly hard.
>
> [QR CODE: OpenAI Dactyl — Rubik's Cube robot hand, official video]

---

### The Three Paradigms at a Glance

| | Supervised | Unsupervised | Reinforcement |
|---|---|---|---|
| **Labeled data?** | Yes | No | No (just rewards) |
| **You provide** | Examples + correct answers | Examples only | A reward signal |
| **AI discovers** | How to match labels | Hidden patterns/groups | Best strategy |
| **Good for** | Classification, prediction | Clustering, discovery | Decision-making, games |

---

## Section 2: The Training Loop

Now that we know *what* machine learning is, let's zoom in on *how* it actually happens.

No matter which paradigm you're using, almost all machine learning involves a cycle. We call it the **training loop.**

Here it is in four steps:

```
┌──────────────────────────────────────────────────────┐
│                   THE TRAINING LOOP                   │
│                                                        │
│    1. DATA           2. MODEL           3. EVALUATE    │
│    ┌──────┐          ┌──────┐           ┌──────┐       │
│    │ Feed │ ───────► │ Make │ ────────► │ How  │       │
│    │examples│        │predictions│      │ wrong?│      │
│    └──────┘          └──────┘           └──────┘       │
│                                              │         │
│                    4. ITERATE ◄─────────────┘         │
│                   (adjust & repeat)                    │
└──────────────────────────────────────────────────────┘
```

Let's walk through each step:

---

### Step 1: Data

Everything starts with data. You gather your examples — photos, text, audio, numbers, whatever — and feed them into the system. The quality and quantity of this data matters *enormously*. We'll spend all of Chapter 8 on this.

For now, just know: **garbage in, garbage out.** If your data is bad, biased, or too small, the model will learn the wrong things.

---

### Step 2: Model — Making Predictions

The model takes the data and makes a prediction. At the very beginning of training, those predictions are basically random. The model doesn't know anything yet.

Think of a brand-new student on their first day of school. They don't know the material. They're guessing. That's fine — that's where everyone starts.

---

### Step 3: Evaluate — How Wrong Is It?

This is the crucial step. We compare the model's prediction to the correct answer and calculate an **error** — a number that measures how wrong the model was.

If the correct answer was "cat" and the model said "dog," the error is big. If the model said "cat" with high confidence, the error is small.

This error score is called the **loss** (or sometimes the **cost**). The whole goal of training is to make this number as small as possible.

---

### Step 4: Iterate — Adjust and Repeat

Here's the magic. Based on the error, the model makes tiny adjustments to its internal settings — small nudges that push it toward better answers. Then it tries again. And again. Thousands of times. Millions of times.

Each pass through the data is called an **epoch**. Training might take hundreds of epochs before the model gets good.

This adjustment process has a name: **gradient descent**. You don't need to know the math behind it for this course — just know that it's basically the model asking, "Which direction do I need to lean to be less wrong?" and then leaning slightly that way, over and over.

---

> ### 💡 Think About It: Hot and Cold
>
> You've probably played the "hot and cold" guessing game. Someone hides an object. You guess where it is. They say "warmer" when you're closer and "colder" when you're farther away. You adjust your guesses based on that feedback.
>
> Gradient descent is basically that game, but happening millions of times with math. The "error signal" is your "warmer/colder" feedback, and the model adjusts its guesses accordingly.
>
> The difference? A machine can play that game millions of times per second.

---

### Putting It Together: A Real Example

Let's trace one specific example through the loop — teaching an AI to recognize whether an email is spam.

1. **Data:** You gather 100,000 emails, each labeled "spam" or "not spam."
2. **Model:** The model sees email #1 and predicts: "not spam." But it actually *is* spam. Error = big.
3. **Evaluate:** The system calculates: "I was really wrong. The word 'FREE MONEY' was in there and I ignored it."
4. **Iterate:** The model adjusts slightly — now it pays a tiny bit more attention to phrases like "FREE MONEY." It moves on to email #2.

Repeat this process 100,000 times (one epoch), then 100,000 more times, then again... and after several epochs, the model has learned that certain words, patterns, and sender behaviors are strong signals for spam. It's not perfect, but it's very good.

---

## Section 3: What Is a Model, Actually?

We keep using the word "model." But what *is* it?

Here's the short answer:

> **A model is a function. It takes an input and produces an output.**

That probably sounds abstract. Let's make it concrete.

A function in math takes a number (or numbers) in and gives a number out:

```
f(x) = 2x + 1

Input x = 3 → Output = 7
Input x = 10 → Output = 21
```

A machine learning model works the same way — but instead of a simple math formula, the "function" is built from millions (or billions) of tiny adjustable numbers called **parameters** (or **weights**).

When you show the model a photo of a cat, every pixel value flows through these millions of weighted calculations, and out comes a prediction: "cat: 94%, dog: 5%, bird: 1%."

Those millions of weights *are* the model. They encode everything the model has "learned" about what cats look like, what spam looks like, what tumors look like — whatever it was trained on.

When you "train" a model, you're adjusting those weights. When you "save" a model, you're saving those weights. When you use a model to make predictions, those weights are being used to calculate outputs.

---

> ### 🌍 AI in the Wild: How Big Is a Big Model?
>
> GPT-4, one of the large language models behind many AI assistants, has an estimated **1 trillion parameters** — one trillion adjustable numbers, each tuned to help it predict language.
>
> Each of those parameters started as a random number. After training on billions of documents, they settled into values that make the model extremely good at understanding and generating text.
>
> If you printed each parameter on a Post-it note and stacked them, the stack would be about 63,000 miles tall — roughly a quarter of the way to the Moon.
>
> [QR CODE: Understanding large language models — 3Blue1Brown "But what is a neural network?" (YouTube)]

---

### Inputs and Outputs: Many Shapes

Models are flexible. Inputs and outputs can take many forms:

| Task | Input | Output |
|---|---|---|
| Image classification | Grid of pixel values | Category label ("cat," "dog") |
| Spam detection | Words in an email | "spam" or "not spam" |
| Translation | Sentence in English | Sentence in Spanish |
| Medical diagnosis | Patient test results | Disease probability |
| Next word prediction | Sentence so far | Next most-likely word |
| Self-driving | Camera/sensor data | Steering angle, speed |

In every case: **inputs go in, the model does math, outputs come out.** The training process is about adjusting the math until the outputs are reliably correct.

---

## Section 4: Training Accuracy vs. Real-World Performance

Here's something that trips up even experienced engineers: a model can look *great* during training and then fail in the real world.

Why? Let's talk about that.

### Training Accuracy

When you train a model, you're measuring its performance on the data you used to train it. This is called **training accuracy**.

If your spam model gets 98% of your 100,000 training emails right, that sounds excellent. But there's a problem: those emails were the exact examples the model *trained on.* Of course it does well — it's seen them before. It's like acing a test where you had all the answers in advance.

The real question is: how does it do on emails it has *never* seen before?

### Validation and Test Sets

Good engineers know this trap. To get a fair measure of real performance, they split their data into (at least) two groups *before* training:

- **Training set:** The examples the model learns from (~70–80% of the data)
- **Test set:** Examples held back, never used in training, used only to evaluate the final model (~20–30%)

Sometimes there's a third group:
- **Validation set:** A smaller held-back set used to check progress *during* training (so you don't peek at the test set too early)

The test set accuracy is the number that matters. It tells you how the model performs on data it's never seen — which is what you actually care about.

---

> ### 💡 OpenClaw Challenge: The Hidden Test
>
> 1. Ask OpenClaw: *"Why do machine learning engineers hold back a 'test set' and keep it secret from the model during training? What would happen if they used all the data for training?"*
> 2. Read the answer. Then think of an analogy from real life — a time when "practicing with the test" would give you an unfair advantage.
> 3. Share your analogy in class.

---

### The Distribution Problem

Even test set accuracy can fool you, because your test set was collected from the same source as your training data. The real world might look different.

A facial recognition model trained only on photos taken in bright studio light might fail in dim hallways. A spam filter trained on 2015 emails might miss 2025 spam tactics. A medical AI trained on data from one hospital might underperform at another hospital with a different patient population.

This is called a **distribution shift** — when the data the model encounters in the real world is different from the data it trained on.

Handling distribution shift is one of the hardest and most important problems in practical AI. A model isn't "done" just because it worked well in the lab.

---

## Section 5: Overfitting — When Your Model Memorizes Instead of Learns

We need to talk about one of the most common ways machine learning goes wrong: **overfitting**.

Here's the setup: Imagine you're studying for a history test. The teacher has 500 potential questions. You study by memorizing the exact answers to the 50 practice problems you were given — word for word, nothing more.

On test day, if those exact 50 questions appear, you'll ace it. But if the teacher asks different questions about the same material, you're lost. You memorized, but you didn't *learn*.

That's overfitting.

### What Overfitting Looks Like in a Model

An overfitted model has "memorized" the training examples rather than learning the *underlying pattern*. It performs incredibly well on training data but fails on new data.

Here's a visual analogy:

```
  Training data points: ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦

  A simple model (curve fits the pattern):
       ___smooth curve going through most points___
  → Generalizes well. Misses a few training examples but 
    gets the actual trend right.

  An overfit model (curve fits every point):
       ___jiggly curve hitting every single point___
  → Perfect on training data. Falls apart on new data because
    it learned the noise, not the pattern.
```

### Why It Happens

Overfitting is more likely when:
- **The model is too complex** for the amount of data (too many parameters, not enough examples)
- **Training goes on too long** (the model has time to memorize rather than generalize)
- **The training set is too small** (the model can memorize it all)

### How Engineers Fight Overfitting

1. **More data:** The single best solution. It's hard to memorize a million examples; you have to learn the pattern.
2. **Regularization:** Techniques that penalize models for getting too complex — basically giving them a "stay simple" nudge.
3. **Dropout:** Randomly "switching off" parts of the model during training so it can't rely on memorizing specific paths.
4. **Early stopping:** Watching the validation set performance and stopping training when it starts to get worse (even if training accuracy keeps improving).
5. **Cross-validation:** Training multiple versions of the model on different subsets of the data and averaging results.

---

> ### 🌍 AI in the Wild: The COVID Test Case
>
> When COVID-19 hit in 2020, researchers rushed to build AI tools that could detect it from chest X-rays. Over 300 AI models were published in academic papers. Most sounded very impressive.
>
> But when independent researchers tested them on *real hospital data*, almost none of them worked. The models had overfit to weird quirks in the training data — like the fact that one dataset was mostly scans taken while patients were lying down (COVID patients) versus standing up (healthy people). The AI "learned" body position instead of disease signs.
>
> Only *2 out of 300+* models were ready for real clinical use.
>
> It was a painful reminder: lab accuracy doesn't equal real-world reliability.
>
> [QR CODE: "AI COVID tools failed" — Nature Machine Intelligence article summary]

---

## Section 6: Underfitting — The Other End of the Problem

While we're here, there's an opposite problem worth naming: **underfitting**.

If an overfit model memorizes too much, an underfit model hasn't learned *enough*. It's too simple to capture the patterns in the data. Like a student who barely glanced at the study guide and shows up unprepared for both the practice questions *and* the real test.

The goal of machine learning is to find the **Goldilocks zone** — a model complex enough to learn real patterns, but not so complex that it memorizes noise.

```
  Underfit:      Learns almost nothing. Fails on training AND new data.
  Just right:    Learns the real pattern. Does well on new data.
  Overfit:       Memorizes training data. Falls apart on new data.
```

---

## Section 7: The Human Cost of Training Data

*(Sidebar)*

---

> ### 👁️ Behind the Curtain: Who Labels All This Data?
>
> Every supervised learning model needs labeled data. Every image in an image classifier needed someone to draw a box around each object and type "cat" or "car" or "stop sign." Every sentence in a language model needed someone to check if it was toxic or safe. Every piece of spam in a spam filter needed a human to say "yes, that's spam."
>
> Millions and millions of labels.
>
> **Who does this work?**
>
> Much of it is done by workers on platforms like Amazon Mechanical Turk, Remotasks, Scale AI, and dozens of smaller companies. Workers are often paid by the task — sometimes fractions of a cent per label. The work is repetitive and requires intense focus. Mistakes hurt quality; speed is rewarded.
>
> Many of these workers are in Kenya, the Philippines, Venezuela, and other countries where wages stretch further — often earning $1–5 per hour, sometimes less, for work that is cognitively demanding but rarely recognized.
>
> **There's a darker side too.**
>
> To make AI content moderation systems safe, workers have to label violent, disturbing, and traumatizing content — and look at thousands of examples of it per day. In 2023, reporting by TIME and other outlets revealed that Kenyan workers employed by a company contracting with OpenAI were paid around $2/hour to label some of the most disturbing content imaginable — so that ChatGPT would learn not to produce it.
>
> Several reported serious psychological harm. Some described symptoms of PTSD.
>
> **What should you take away from this?**
>
> When an AI product is "free" or cheap to use, someone else paid a cost you didn't see. The gleaming AI tools we use depend on a global workforce doing hard, underpaid, often psychologically costly labor.
>
> That doesn't mean AI is evil. It means that like all technology, it sits inside an economic and human system — and those systems have people in them who deserve fair pay, safe working conditions, and recognition for the work they do.
>
> *We'll return to this topic in Module 6 when we dig into AI ethics.*
>
> [QR CODE: TIME Investigates — "OpenAI Used Kenyan Workers on Less Than $2 Per Hour"]

---

## Chapter Summary

Let's bring it all together.

**Machine learning** is AI that learns from examples rather than following hand-coded rules. There are three main paradigms:

- **Supervised learning:** Learn from labeled examples. Great for classification and prediction.
- **Unsupervised learning:** Find patterns in unlabeled data. Great for clustering and discovery.
- **Reinforcement learning:** Learn by trying, failing, and maximizing rewards. Great for decision-making and games.

The **training loop** is the engine behind all of it: feed data into a model, measure the error, adjust the model, repeat — thousands or millions of times.

A **model** is a function: inputs go in, the model does math (using millions of tunable weights), outputs come out. Training is the process of adjusting those weights to minimize error.

**Training accuracy** measures how well a model does on its training data — but real performance is what matters on *new* data. That's measured using a held-back **test set**.

**Overfitting** happens when a model memorizes training examples instead of learning the underlying pattern. It aces training data but fails in the real world. **More data, regularization, and early stopping** help prevent it.

And behind all of this, **human labor** makes it possible. Labeled data doesn't appear by magic — it comes from people, and those people deserve to be seen.

---

## Key Vocabulary

| Term | Definition |
|---|---|
| **Machine Learning** | AI that learns patterns from data, rather than following hand-coded rules |
| **Supervised Learning** | Learning from labeled examples where the correct answer is provided |
| **Unsupervised Learning** | Finding patterns in data without labels or predefined categories |
| **Reinforcement Learning** | Learning by trying actions, receiving rewards or penalties, and maximizing reward over time |
| **Training Loop** | The cycle of feeding data, making predictions, measuring error, and adjusting — repeated until the model is good |
| **Model** | A mathematical function with tunable parameters that maps inputs to outputs |
| **Parameters / Weights** | The millions of adjustable numbers inside a model that encode what it has learned |
| **Loss / Error** | A number that measures how wrong the model's predictions are |
| **Epoch** | One full pass through the training data |
| **Gradient Descent** | The process of adjusting weights to reduce error, step by step |
| **Training Set** | Data used to train the model |
| **Test Set** | Data held back and used only to evaluate final model performance |
| **Overfitting** | When a model memorizes training data and fails to generalize to new data |
| **Underfitting** | When a model is too simple to learn the actual patterns in the data |
| **Distribution Shift** | When real-world data differs from the training data, causing model performance to drop |
| **Labeled Data** | Training examples that have been annotated with the correct answer |

---

## Review Questions

Answer in complete sentences. Use your notes and the chapter, but write in your own words.

1. **In your own words, what is machine learning?** How is it different from traditional software programming?

2. **Describe the three paradigms.** For each one (supervised, unsupervised, reinforcement), give one real-world example *not* mentioned in the chapter.

3. **Trace an email spam filter through the training loop.** Describe what happens at each of the four steps (data → model → evaluate → iterate).

4. **What is a model, and what are parameters?** Use an analogy of your own to explain what happens when a model "trains."

5. **What's the difference between training accuracy and test set performance?** Why do engineers hold back a test set instead of using all their data for training?

6. **Explain overfitting in plain language**, as if you were describing it to someone who has never heard the term. Use the study-habits analogy or one of your own.

7. **What is the "human cost" of training data?** Who does the labeling work, and what concerns did the sidebar raise?

---

## OpenClaw Challenge Exercises

### 🐾 Challenge 1: Train a Machine (for Real)

**Goal:** Experience supervised learning hands-on.

**Instructions:**

1. Go to **Teachable Machine** (teachablemachine.withgoogle.com) — a free Google tool that lets you train a real image classifier in your browser.
2. Create a project with three categories — you choose what (hand signs, facial expressions, objects in the room, etc.).
3. Record training examples for each category using your webcam.
4. Train the model. Then test it.
5. Try to *fool* the model. What breaks it?
6. Write a reflection: What did you notice about how many examples were needed? What made it fail? Did it overfit?

---

### 🐾 Challenge 2: Find the Distribution Shift

**Goal:** Discover real examples of AI failing due to distribution shift.

**Instructions:**

1. Ask OpenClaw: *"Can you give me 5 real examples where an AI system failed because it was tested on different data than it was trained on? Explain each briefly."*
2. Read the examples. Pick the one you find most interesting or surprising.
3. Research it a little more (web search, QR codes, etc.).
4. Present it to your class in 2 minutes: What was the AI, what did it fail at, and why?

---

### 🐾 Challenge 3: Design a Training Set

**Goal:** Think like an ML engineer.

**Instructions:**

You want to build an AI that identifies whether food in a photo is "healthy" or "unhealthy."

1. List 5 decisions you'd have to make about your training data:
   - What counts as "healthy"? Who decides?
   - How many examples would you need?
   - Where would you get the photos?
   - Who would label them? How long would that take?
   - What could go wrong with your labels?

2. Ask OpenClaw: *"What are the hardest challenges in building a food-healthiness classifier? What would a responsible engineer worry about?"*

3. Compare its concerns to your list. What did you miss? What did it miss?

---

### 🐾 Challenge 4: The Labeling Economy

**Goal:** Engage with the ethics of AI labor.

**Instructions:**

1. Read (or re-read) the sidebar on labeling labor.
2. Ask OpenClaw: *"What are some ways AI companies could treat data labelers more fairly? What structural changes have been proposed?"*
3. Write a 1-page opinion piece: *Should AI companies be required to pay labelers a living wage? Why or why not?*
4. Share and debate in class.

---

## Going Further

[QR CODE: *Teachable Machine* — Google, free in-browser ML training tool]

[QR CODE: *3Blue1Brown — "But what is a neural network?"* — YouTube, visual explainer]

[QR CODE: *"The Exploited Labor Behind AI"* — TIME Magazine investigative piece]

[QR CODE: *Machine Learning for Kids* — train real models in a block-based IDE]

[QR CODE: *Crash Course AI* — YouTube series, episode on machine learning]

---

*End of Chapter 7*

---

> **Up Next → Chapter 8: Data — The Food AI Eats**
> *A model is only as good as its training data. We dig into what makes data good, bad, biased, and balanced — and why getting it right is harder than it sounds.*

---

*© OpenClaw AI Literacy Curriculum | Module 4 | Draft v0.1 | For classroom and educational use*
