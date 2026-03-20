# Chapter 8: Data — The Food AI Eats

> **Module 4 | Companion Textbook**
> *Grades 6–8 | OpenClaw AI Literacy Curriculum*

---

[ILLUSTRATION: A wide, colorful scene styled like a farm-to-table kitchen. On one side, a "farm" of raw data — piles of unlabeled photos, audio clips, and text blobs. Workers are carefully tagging each one with labels. The labeled items travel on a conveyor belt into a gleaming "kitchen" — a computer processing them into a finished dish served on a plate labeled "Trained Model." Some bins on the farm look sparse (tiny class) while one bin is overflowing (imbalanced class). The vibe is warm but thoughtful.]

---

## Opening Story: The Hiring Algorithm That Only Hired Men

In 2014, Amazon built a tool that would change recruiting forever — or so they hoped.

The idea was simple and appealing: use AI to screen job applicants. Feed it thousands of old resumes, along with data about who Amazon had hired and promoted over the past decade. Let the AI figure out what made a great Amazon engineer. Then apply that knowledge to millions of new applications, automatically ranking candidates.

It worked great in testing.

It was a disaster in reality.

In 2018, Amazon quietly shut it down. The reason? The algorithm had learned to *penalize* applicants who mentioned the word "women's" — as in "women's chess club" or "women's leadership conference." It ranked all-male colleges higher than other schools. It seemed to actively discriminate against women.

Nobody had programmed that. Amazon engineers didn't sit down and type "downgrade women's resumes." It happened because the AI learned from historical data — and Amazon's historical hiring data was from an era when tech was *extremely* male-dominated. The AI didn't learn what made a good engineer. It learned what Amazon's past hiring managers had decided — and those decisions carried years of human bias.

The data was biased. So the model was biased. And the model's decisions — applied automatically, at scale, across thousands of applications — amplified that bias far beyond what any single biased human could have done alone.

This chapter is about data. Where it comes from, what makes it good or bad, and why it is the single most important ingredient in any AI system.

---

> ### 🤖 Your Agent's Journey — Where We Are
>
> **Your agent's current capabilities:**
> - ✅ Has a name and personality (Module 1)
> - ✅ Can perceive images and audio (Module 2)
> - ✅ Has a knowledge base (Module 3)
> - ✅ Understands how learning works (Module 4 — Chapter 7)
> - 🔓 *Unlocking now:* Data literacy — understanding what your agent eats and why it matters
>
> In Chapter 7, we learned *how* AI learns. Now we're asking a deeper question: *what does it learn from?* The answer matters enormously — for performance, for fairness, and for safety.

---

## Section 1: What Is Labeled Data — and Why Is It So Expensive?

Go back to the training loop from Chapter 7. Step 1 was "data." But not just *any* data — for supervised learning, you need **labeled data**.

### What Does "Labeled" Mean?

A **label** is a tag that tells the AI what something *is* — the correct answer it should learn to produce.

- A photo of a cat → labeled "cat"
- An email that's spam → labeled "spam"
- A scan showing a tumor → labeled "malignant"
- An audio clip of someone saying "stop" → labeled "stop"
- A sentence written in a toxic way → labeled "toxic"

Without labels, supervised learning is impossible. The model has nothing to compare its predictions against. It can't calculate error. It can't improve.

Labels transform raw data into **training data** — the actual food AI eats.

---

### The Anatomy of a Labeled Dataset

Here's what a small piece of a labeled dataset might look like for an image classifier:

```
Image ID   |  Filename          |  Label     |  Annotator  |  Confidence
-----------+--------------------|------------|-------------|------------
0001       |  img_0001.jpg      |  cat       |  worker_42  |  high
0002       |  img_0002.jpg      |  dog       |  worker_07  |  high
0003       |  img_0003.jpg      |  cat       |  worker_42  |  medium
0004       |  img_0004.jpg      |  unknown   |  worker_15  |  low
0005       |  img_0005.jpg      |  dog       |  worker_07  |  high
```

Notice: labels aren't always certain. Workers often have to make judgment calls. And those judgment calls become the ground truth the model trains on.

---

### Why Is Labeling So Expensive?

Let's run the numbers on a moderately-sized dataset.

Suppose you're building an AI to classify 1,000 species of plants from photos. You want:
- 200 photos per species (bare minimum for decent performance)
- 3 independent labels per photo (to catch errors and disagreements)

That's: 1,000 species × 200 photos × 3 labels = **600,000 individual labeling tasks**

If each task takes 30 seconds (look at photo, identify plant, click label):
- 600,000 × 30 seconds = 5,000 hours of human labor
- At $15/hour = **$75,000 just for labeling**

And that's a *small* dataset by modern standards. Industrial image classifiers often train on **millions** of labeled images. Medical AI models need expert physicians to label data — which might cost $200+ per hour instead of $15.

Large language models like GPT-4 were trained on *trillions* of words — most from the internet (which is "self-labeled" in some sense) plus millions of hours of human feedback.

**Labeled data is the oil of the AI economy.** It's valuable, hard to extract, and the quality of the final product depends entirely on it.

---

> ### 🌍 AI in the Wild: ImageNet — The Dataset That Changed Everything
>
> In 2009, a Stanford researcher named Fei-Fei Li and her team built **ImageNet** — a dataset of over 14 million labeled images across 20,000 categories ("flamingo," "speedboat," "basketball," "microscope"...).
>
> It took years and cost millions of dollars. Thousands of Amazon Mechanical Turk workers around the world labeled images, verified each other's labels, and flagged edge cases.
>
> When researchers used ImageNet to run an annual competition (can your AI identify these images correctly?), something remarkable happened: in 2012, a deep learning system called AlexNet shattered previous records. Error rates dropped from ~26% to ~15% in a single year.
>
> The breakthrough wasn't just the algorithm. It was the *data*. ImageNet made modern computer vision possible.
>
> Today, almost every image-recognizing AI you've ever used was trained on ImageNet or its descendants.
>
> [QR CODE: Fei-Fei Li TED Talk — "How we're teaching computers to understand pictures"]

---

> ### 💡 OpenClaw Challenge: The Hidden Label
>
> Every time you label images on Google's "I'm not a robot" challenges — clicking on all the traffic lights, crosswalks, or fire hydrants — you may be helping train AI systems.
>
> 1. Next time you see a CAPTCHA, notice what it's asking you to label.
> 2. Ask OpenClaw: *"How do CAPTCHA challenges relate to training data for computer vision AI? Who benefits from this labor, and is it ethical?"*
> 3. Discuss: Is using people's CAPTCHA responses to train AI a fair or sneaky use of human attention?

---

## Section 2: Class Balance — What Happens When Your Training Set Is Unequal

Here's a problem that sounds simple but causes real damage in AI systems: **class imbalance**.

### What Is a Class?

In a classification task, a **class** is one of the categories the model is trying to predict. For a spam classifier, the classes are "spam" and "not spam." For a tumor detector, the classes might be "malignant," "benign," and "normal."

### What Is Class Imbalance?

Class imbalance happens when the training set has **far more examples of some classes than others**.

Imagine you're training a model to detect credit card fraud. Of the 1 million transactions in your training data, only 1,000 are fraudulent — that's 0.1%.

What's the laziest possible thing your model could do? **Always predict "not fraud."** On your training data, that would be 99.9% accurate! 

But it would also catch exactly **zero fraud cases**. It's useless.

This is the **accuracy paradox** — a model can look accurate on paper while being completely useless at the thing you actually care about.

---

> ### 🌍 AI in the Wild: Skin Cancer and the 99% That's Benign
>
> Researchers training skin cancer detection AI face serious class imbalance. The vast majority of skin lesions are benign. If you train a model on real clinical photos without correcting for this, the model learns to say "probably fine" most of the time — because that's what the data says.
>
> For common rashes, that's okay. For rare but deadly cancers, "probably fine" is the wrong answer.
>
> Researchers have to deliberately **oversample** rare cancer cases (more on this in the next section) so the model takes them seriously.
>
> [QR CODE: "Skin lesion analysis toward melanoma detection" — ISIC Challenge overview]

---

### The Problems Caused by Class Imbalance

1. **The majority class wins by default.** The model leans toward the most common class because guessing it gets rewarded more often.

2. **Rare but important cases get missed.** Often the minority class is exactly what you care about most — fraud, disease, rare species.

3. **Misleading metrics.** High accuracy looks good in a report but hides the failure to detect anything useful.

4. **Bias amplification.** If one demographic group is underrepresented in the training data, the model will perform worse for them — and might even learn to treat them differently.

---

### How Engineers Fix Imbalance

There are several strategies. None is perfect; they each involve tradeoffs.

**1. Oversampling the minority class**
Use the minority class examples more often in training. Some techniques duplicate them. Others (like **SMOTE** — Synthetic Minority Oversampling Technique) generate *new* synthetic examples that are similar to real ones.

**2. Undersampling the majority class**
Use fewer examples from the majority class. This reduces the imbalance but throws away data you paid for.

**3. Class weighting**
Tell the model that errors on the minority class should count *more* in the loss calculation. This forces it to try harder to get rare cases right.

**4. Different metrics**
Stop measuring accuracy and switch to metrics like **precision**, **recall**, and **F1 score** — which explicitly measure how well the model finds the rare class.

**5. Gather more data**
The ideal solution: just get more examples of the underrepresented class. But this is often the hardest and most expensive option.

---

> ### 💡 Think About It: Precision vs. Recall
>
> Two important metrics for imbalanced problems:
>
> - **Precision:** Of all the times the model said "fraud," how often was it actually fraud? (Avoid false alarms)
> - **Recall:** Of all the actual fraud cases, how many did the model catch? (Avoid missing real cases)
>
> You almost always have to trade one for the other. A fraud detector with high recall might flag a lot of legitimate transactions (annoying, but safer). One with high precision might miss some real fraud (cleaner, but riskier).
>
> There's no perfect answer — it's a business and ethical decision about which kind of mistake is worse.

---

## Section 3: Data Augmentation — Tricks to Make Small Datasets Bigger

Labeled data is expensive. So what do you do when you don't have enough of it?

You get creative. You **augment** what you have.

**Data augmentation** is the practice of generating new training examples by transforming existing ones. The new examples aren't *real* — they're modified versions of real examples — but they're close enough to help the model learn.

Think of it like this: if you've learned to recognize a chair from one angle, and someone shows you that same chair from a slightly different angle, you probably still recognize it as a chair. You didn't need to see a whole new chair. A small transformation of the existing experience was enough.

AI models work similarly.

---

### Augmentation for Images

Image augmentation is the most common type. Here are techniques engineers use routinely:

| Technique | What It Does | Why It Helps |
|---|---|---|
| **Flipping** | Mirror the image left-right | A cat flipped is still a cat |
| **Rotation** | Rotate by a small random angle | Objects appear at many angles in the real world |
| **Cropping** | Zoom into a random region | Forces the model not to rely on context at edges |
| **Color jitter** | Randomly adjust brightness, contrast, saturation | Lighting varies enormously in real photos |
| **Noise injection** | Add random pixel noise | Makes the model robust to imperfect images |
| **Cutout** | Black out a random rectangle | Forces the model to recognize partial objects |
| **Mixup** | Blend two images together | Creates smooth decision boundaries |

With these techniques, a dataset of 10,000 images can effectively become 100,000+ unique training examples — each one teaching the model something slightly different about the variation that exists in the real world.

---

> ### 🌍 AI in the Wild: Medical Imaging on a Budget
>
> Getting labeled medical images is hard. Doctors' time is expensive. Privacy regulations restrict data sharing. Rare diseases might have only dozens of confirmed cases.
>
> Researchers building AI for diagnosing rare retinal diseases might have only 500 labeled eye scans. Through aggressive augmentation — rotations, flips, brightness changes, synthetic blending — they can expand that to tens of thousands of training examples. The model learns from the variations and becomes far more robust.
>
> Without augmentation, many medical AI tools simply wouldn't have enough data to work.
>
> [QR CODE: "Data augmentation in medical image analysis" — summary article]

---

### Augmentation for Text

Text can be augmented too, though it's trickier:

- **Synonym replacement:** Swap some words for synonyms ("happy" → "joyful")
- **Back-translation:** Translate to another language and back — the result is paraphrased
- **Random insertion/deletion:** Add or remove words randomly (within reason)
- **Paraphrase generation:** Use another AI to rephrase sentences

Text augmentation is more subtle because changing words changes meaning. Swapping "not happy" for "not joyful" is fine, but some swaps break the meaning entirely.

---

### The Limits of Augmentation

Augmentation helps, but it has limits:

- **It can't manufacture information the dataset doesn't contain.** Flipping a photo of a cat 100 times gives you 100 flipped cats — not more *types* of cats.
- **Poorly chosen augmentations can hurt.** If you train a tumor detector on flipped medical scans but doctors always orient scans a certain way, flipping might confuse more than it helps.
- **It doesn't fix bias.** If your original data is biased, augmented data is biased too — just more of it.

The best augmentation strategies are designed thoughtfully, with domain knowledge about what variations *actually occur* in the real world.

---

## Section 4: Bias in Training Data — Where It Comes From and Why It Persists

We've arrived at the most important section of this chapter. Maybe the most important section in this module.

**Training data bias** is when the data used to train an AI system contains distortions, gaps, or skews that cause the model to behave unfairly or inaccurately for some groups of people or situations.

This is not a theoretical problem. It has caused real harm to real people. Let's understand it deeply.

---

### Source 1: Biased Data Collection

Data is collected from somewhere. And wherever it comes from, it reflects who collected it, when, where, and from whom.

**Geographic bias:** ImageNet was largely assembled from images found on Western internet platforms. As a result, models trained on it sometimes do poorly at recognizing objects from African, Asian, or Latin American contexts — even something as simple as a "house" looks different in different places.

**Temporal bias:** Data collected in 2010 reflects 2010's world. A hiring model trained on 2010 resumes doesn't know that Python has become more important than COBOL. A recommendation system trained on pre-pandemic data doesn't know that people's media habits have changed.

**Sampling bias:** If you only collect data from people who use a certain app, you get data about *that app's users* — not people in general. Instagram photos skew toward certain demographics, incomes, and aesthetics.

---

### Source 2: Historical Bias

Sometimes the data accurately reflects history — and history is biased.

If you train a word-embedding model (a way of representing word meanings mathematically) on historical text, it may learn that "doctor" is more similar to "man" and "nurse" is more similar to "woman." Not because you wanted it to — but because that's what the text said, because that's how those professions were historically gender-segregated.

Amazon's hiring algorithm from our opening story is a perfect example. The data *accurately* reflected what Amazon had done. But what Amazon had done was discriminatory. The AI learned discrimination from truth.

This is one of the hardest forms of bias to fix, because the data isn't wrong — the history it reflects is wrong.

---

### Source 3: Measurement Bias

Sometimes the thing you're measuring isn't what you think you're measuring.

In criminal justice, AI systems have been built to predict "recidivism" — whether a person will commit another crime. Judges use these scores to make bail and sentencing decisions.

But "recidivism" is usually measured by *re-arrest*, not by whether the person actually committed a crime. Re-arrest rates are strongly influenced by policing patterns — and communities that are heavily policed get re-arrested at higher rates, regardless of actual crime rates.

So the AI doesn't learn "who will commit a crime." It learns "who looks like the people who got arrested before." And because policing is racially unequal in the United States, these tools have been found to rate Black defendants as higher risk at roughly twice the rate as white defendants who committed the same crimes.

The tool called **COMPAS** became infamous for this. Investigative journalists at ProPublica documented the disparity in 2016. The company that built COMPAS disputed the findings. Researchers still debate the right way to measure fairness — because it turns out "fairness" in statistics can be defined in multiple incompatible ways.

---

> ### 🌍 AI in the Wild: Facial Recognition Fails
>
> In 2018, MIT researcher Joy Buolamwini published a landmark study: *Gender Shades*. She tested three commercial facial recognition systems — built by major tech companies — and found stark accuracy gaps:
>
> - Lighter-skinned males: error rate as low as 0.8%
> - Darker-skinned females: error rate as high as **34.7%**
>
> The systems were nearly perfect on the faces they'd seen most in training. They were dramatically worse on the faces that were underrepresented.
>
> This isn't just an academic problem. Facial recognition is used by police departments across the US. Incorrect matches have led to wrongful arrests — and multiple documented cases involved Black individuals identified incorrectly.
>
> Joy Buolamwini went on to found the **Algorithmic Justice League**, a nonprofit dedicated to fighting AI bias. Her work directly influenced decisions by IBM, Amazon, and Microsoft to pause sales of facial recognition to law enforcement.
>
> [QR CODE: Gender Shades project — MIT Media Lab]
> [QR CODE: Algorithmic Justice League — ajl.org]

---

### Source 4: Label Bias

Even when the data is collected fairly, labeling introduces its own bias.

Labels are produced by humans. Humans have perspectives, cultural backgrounds, blind spots, and unconscious assumptions. When workers are asked to label "aggressive behavior" in videos, researchers have found systematic differences based on the race of the person in the video.

When workers label text as "toxic," they sometimes rate text written in African American Vernacular English (AAVE) as more toxic than equivalent text in Standard American English — even when the meaning is the same.

These biases in labels become biases in models.

---

### Why Bias Persists

You might be thinking: "Okay, so we know about all these biases. Why haven't companies fixed them?"

It's a fair question, and it deserves a real answer.

**1. Fixing bias requires admitting it.** Companies sometimes resist acknowledging bias because it exposes them to legal or reputational risk. Amazon shelved its hiring algorithm quietly rather than publicly addressing what went wrong.

**2. Data is hard and expensive to replace.** Collecting new, more representative data takes years and costs millions. Existing datasets have enormous momentum because they've been used in so many published papers and tools.

**3. "Fairness" is philosophically complicated.** Mathematicians have proven that some common definitions of algorithmic fairness are *mathematically incompatible* — you literally cannot satisfy all of them simultaneously. There's no perfect answer, only tradeoffs.

**4. Bias is sometimes invisible until it harms someone.** Many biased systems were deployed, used for years, and only identified as biased when someone was harmed and investigated. By then, the harm has already happened.

**5. Economic incentives push toward speed.** Building diverse, carefully audited datasets takes longer than using whatever data is available. In competitive markets, speed often wins over fairness.

None of these explanations excuse the harms. But understanding them is important if you want to be part of fixing them.

---

> ### 💡 OpenClaw Challenge: Define "Fair"
>
> In math and statistics, researchers have proposed at least 20 different formal definitions of fairness. Some of the most common:
>
> - **Demographic parity:** The model should give positive outcomes to all demographic groups at the same rate
> - **Equal opportunity:** Among people who *deserve* a positive outcome, the model should give one equally often across groups
> - **Calibration:** When the model says 70% confident, it should be right 70% of the time, equally across groups
>
> Here's the twist: it has been mathematically proven that you **cannot** simultaneously satisfy all three of these definitions unless your dataset has no existing disparity between groups.
>
> 1. Ask OpenClaw to explain one of these fairness definitions in plain language.
> 2. Discuss with your class: Which definition do you think is *most* important? Are there situations where your answer changes?
> 3. Do you think it's ever acceptable to deploy a system that can only be "partially fair"? When? Under what conditions?

---

## Section 5: Connection Forward — Data, Bias, and Ethics

We've covered a lot of difficult ground in this chapter. Before we close, let's look ahead.

Everything in this chapter — the labor of labeling, the harm of imbalanced classes, the real-world damage of bias — connects directly to the questions we'll tackle in **Module 6: AI Ethics**.

Here's a preview of where we're going:

---

### Who Is Responsible When Data Is Biased?

When Amazon's hiring algorithm discriminated against women, who was responsible? The engineers who built it? The executives who approved it? The customers who used it? The entire system that produced biased historical data in the first place?

These questions don't have simple answers — and that's exactly what makes them ethical questions rather than technical ones.

---

### What Obligations Do AI Builders Have?

If you know your training data might be biased, do you have an obligation to fix it before deployment? What if fixing it would make your product slower to market, and your competitor doesn't fix theirs?

If your AI performs worse for some demographic groups, are you required to disclose that? To fix it? To halt the product?

---

### Who Gets to Decide What's Fair?

The people most likely to be harmed by biased AI are often the least likely to be in the rooms where AI systems are designed. AI teams at major tech companies are notoriously homogeneous — often predominantly white and male.

Researchers like Joy Buolamwini argue that diverse teams building diverse datasets isn't just a "nice to have" — it's a prerequisite for building AI that works for everyone. Her rallying cry: **"If you have a face, you have a stake in this."**

---

### The Core Insight of This Chapter

Here it is, as plainly as we can state it:

> **AI systems are not neutral. They learn from human-created data. And wherever there is human history, there is human bias.**

That doesn't mean AI is inevitably harmful. It means that building AI responsibly requires *deliberately* confronting the imperfections in our data — not pretending they aren't there.

The engineers who built these systems weren't (usually) trying to discriminate. But good intentions don't prevent bad outcomes. Careful, thoughtful, inclusive data practices do.

That's a lesson we'll keep coming back to.

---

## Chapter Summary

**Labeled data** is the foundation of supervised machine learning. Each label is a human judgment — and those judgments are expensive, time-consuming, and fallible.

**Class imbalance** occurs when some categories dominate the training data. This can cause models to ignore rare but important cases, report misleading accuracy scores, and perform differently for different groups of people.

**Data augmentation** helps stretch small datasets by generating modified versions of existing examples — flipping, rotating, recoloring, rephrasing. It makes models more robust but can't fix underlying biases or manufacture information that wasn't there.

**Bias in training data** comes from four main sources:
1. Biased collection (who/where/when data was gathered)
2. Historical bias (data accurately reflects a biased past)
3. Measurement bias (proxies that encode inequality)
4. Label bias (human annotators' assumptions affect labels)

Bias persists because it's hard to see until it harms someone, because fixing it is expensive, because "fairness" is philosophically contested, and because economic pressures favor speed over rigor.

None of this is inevitable — but preventing it requires **deliberate effort, diverse perspectives, and ongoing accountability.** That's what Module 6 is about.

---

## Key Vocabulary

| Term | Definition |
|---|---|
| **Labeled Data** | Training examples annotated with the correct answer (label) |
| **Label** | The correct answer tag attached to a training example |
| **Training Data** | Labeled (or structured) examples used to teach a model |
| **Class** | One category in a classification task (e.g., "spam" vs. "not spam") |
| **Class Imbalance** | When some classes have far more examples than others in the training set |
| **Accuracy Paradox** | When high accuracy is misleading because a model simply predicts the majority class |
| **Oversampling** | Using minority class examples more often (or generating synthetic ones) to fix imbalance |
| **Undersampling** | Using fewer majority class examples to reduce imbalance |
| **Precision** | Of all positive predictions, how many were actually positive |
| **Recall** | Of all actual positives, how many did the model correctly identify |
| **Data Augmentation** | Creating new training examples by transforming existing ones |
| **Training Data Bias** | Systematic distortion in training data that causes unfair or inaccurate model behavior |
| **Historical Bias** | Bias that enters data because the past was itself biased |
| **Measurement Bias** | When a proxy measure doesn't actually capture what you care about |
| **Label Bias** | Bias introduced when human annotators apply inconsistent or prejudiced labels |
| **Distribution Shift** | When real-world data differs from the training distribution |
| **Recidivism** | Re-offending after a criminal conviction; sometimes used (problematically) as an AI target variable |
| **Algorithmic Fairness** | Mathematical definitions of how AI systems should treat different groups equally |

---

## Review Questions

Answer in complete sentences. Use your notes and the chapter, but write in your own words.

1. **What is labeled data?** Why is labeling necessary for supervised learning, and why is it expensive?

2. **Use the credit card fraud example** to explain class imbalance and the accuracy paradox. What would a model that always predicts "not fraud" score on accuracy, and why is that score misleading?

3. **Name three techniques for addressing class imbalance.** For each one, explain how it works and describe one potential downside.

4. **What is data augmentation?** Give three specific examples of image augmentation techniques and explain how each one helps the model learn.

5. **What are the four sources of bias in training data?** Give a real-world example of each (you can use examples from the chapter or your own).

6. **Why does bias persist** even when researchers know it exists? List at least three reasons from the chapter and explain each in your own words.

7. **Looking ahead:** What do you think is the most important ethical question raised by this chapter? Who do you think should be responsible for answering it?

---

## OpenClaw Challenge Exercises

### 🐾 Challenge 1: Dataset Audit

**Goal:** Apply data quality thinking to a real AI system.

**Instructions:**

Pick one AI system you use or have heard of (recommendation algorithm, face filters, predictive text, search engine, etc.).

1. Ask OpenClaw: *"What kind of training data would [your chosen AI] have been trained on? What are three ways that data might be biased or limited?"*
2. Research one documented case of bias or failure related to your chosen AI (web search or use the QR codes below).
3. Write a 1-page report:
   - What is the system and what does it do?
   - What data does it likely learn from?
   - What bias or failure have you found evidence of?
   - Who was harmed, and how?
   - What could have been done differently?

---

### 🐾 Challenge 2: Build a Balanced Dataset (Design Exercise)

**Goal:** Think through what good data collection looks like.

**Instructions:**

You want to build an AI that can recognize emotions from photos of faces (happy, sad, angry, surprised).

1. Design your dataset. Answer these questions in writing:
   - How many photos would you need? (Hint: think about diversity *within* each emotion — different ages, skin tones, lighting, cultural expressions)
   - Where would you get the photos? (Selfies? Stock photos? Clinical studies?)
   - How would you label them? Who would do it?
   - How would you check for labeling consistency?
   - What groups of people might your initial dataset underrepresent? How would you fix that?

2. Ask OpenClaw: *"What are the documented problems with facial emotion recognition AI? What has research found about accuracy gaps across different groups?"*

3. After reading the response: what changes would you make to your dataset design?

---

### 🐾 Challenge 3: The ProPublica Investigation

**Goal:** Engage with a landmark real-world case of algorithmic bias.

**Instructions:**

1. Use the QR code below (or search "ProPublica COMPAS Machine Bias") to read ProPublica's 2016 investigation into the COMPAS recidivism algorithm.

2. Ask OpenClaw: *"What was COMPAS? What did ProPublica find about racial disparities? How did Northpointe (the company) respond? How do researchers still disagree about it?"*

3. Discuss in class or write a 1-page response:
   - What is your reaction to this story?
   - Do you think COMPAS was "fair"? (Use specific definitions of fairness from the chapter)
   - Should AI systems be used in criminal justice at all? Under what conditions?

---

### 🐾 Challenge 4: Data Augmentation Lab

**Goal:** Experience augmentation hands-on.

**Instructions:**

1. Open **Teachable Machine** (teachablemachine.withgoogle.com).
2. Train an image classifier with a small dataset — say, 20 photos per class.
3. Test it. Note the accuracy.
4. Now re-train with more photos of the same subjects, taken at different angles, in different lighting, from different distances.
5. Test again. Did it improve?
6. Write a reflection: What does this tell you about why augmentation works? What *didn't* improve? What would you need more of?

---

## Going Further

[QR CODE: *Gender Shades* — Joy Buolamwini's bias research at MIT Media Lab]

[QR CODE: *ProPublica "Machine Bias"* — the landmark COMPAS investigation]

[QR CODE: *Algorithmic Justice League* — ajl.org, advocacy and research]

[QR CODE: *Fei-Fei Li TED Talk* — "How we're teaching computers to understand pictures"]

[QR CODE: *"The Dataset" documentary* — short film about ImageNet and its complicated legacy]

[QR CODE: *Data Feminism* — summary article about D'Ignazio & Klein's book on data and power]

---

*End of Chapter 8*

---

> **Up Next → Module 5: Building Your Own AI Project**
> *You've seen how AI works under the hood. Now it's time to build something. In Module 5, you'll plan, build, and present your own AI-powered project — from concept to demo.*

---

*© OpenClaw AI Literacy Curriculum | Module 4 | Draft v0.1 | For classroom and educational use*
