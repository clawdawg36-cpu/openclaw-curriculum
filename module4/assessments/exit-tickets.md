# Module 4 Exit Tickets
## Lessons 4.1 – 4.5

> **For teachers:** Exit tickets are designed to take 3–5 minutes at the end of class. Use them as quick formative checks — not grades. Review responses before the next lesson to catch misconceptions early.
>
> **Module 4 Lesson Overview:**
> - **4.1** — How AI Actually Learns: The Training Loop
> - **4.2** — Building Your Dataset: Data Collection & Labeling
> - **4.3** — Training Your Model (Teachable Machine Lab)
> - **4.4** — Evaluating Your Model: What Does Accuracy Really Mean?
> - **4.5** — Integrating Your Model + Ethics Check

---

## Lesson 4.1 Exit Ticket — How AI Actually Learns: The Training Loop

**Name:** _________________________ **Date:** _____________ **Period:** _____

Answer each question in 1–2 sentences or by circling the best answer.

**1.** In your own words, what is the machine learning *training loop*? List the steps in order.

> Step 1: _____________________________________________________________________
>
> Step 2: _____________________________________________________________________
>
> Step 3: _____________________________________________________________________
>
> Step 4: _____________________________________________________________________

**2.** Circle the best analogy for what happens when an AI model "trains":

- A) A human reads a textbook and memorizes every sentence
- B) A student practices many examples, gets feedback on mistakes, and adjusts how they approach problems
- C) A computer downloads all the answers from the internet
- D) A robot copies a human's exact movements

**3.** What is the difference between *training data* and *test data*? Why do we need both?

> ___________________________________________________________________________
>
> ___________________________________________________________________________

**4.** True or False: A model that has 100% training accuracy is definitely ready to be used in the real world. Explain your answer in one sentence.

> True / False — because: _____________________________________________________
>
> ___________________________________________________________________________

**5.** 🌟 *Stretch:* The word "iteration" is important in machine learning. What does it mean to *iterate* on a model, and why would you do it?

> ___________________________________________________________________________
>
> ___________________________________________________________________________

---

## Lesson 4.2 Exit Ticket — Building Your Dataset: Data Collection & Labeling

**Name:** _________________________ **Date:** _____________ **Period:** _____

**1.** You are building a sentiment classifier. Your three classes are: *positive*, *negative*, *neutral*. You have 80 positive examples, 15 negative examples, and 5 neutral examples. What problem does this create?

> ___________________________________________________________________________
>
> ___________________________________________________________________________

**2.** What does it mean for a dataset to be *labeled*? Why can't the model just figure out the labels on its own?

> ___________________________________________________________________________
>
> ___________________________________________________________________________

**3.** Circle the dataset that would be most likely to cause problems for a model trained to recognize "friendly" messages:

- A) 500 messages labeled by 10 different reviewers from 5 different countries
- B) 500 messages all labeled by one person from one school in one city
- C) 200 messages labeled by 20 reviewers who disagreed and discussed to reach consensus
- D) 200 messages randomly sampled from many different apps and platforms

**4.** Name one way that the *person doing the labeling* can introduce bias into a dataset, even if they're trying to be fair.

> ___________________________________________________________________________
>
> ___________________________________________________________________________

**5.** 🌟 *Stretch:* The phrase "garbage in, garbage out" (GIGO) is famous in computing. Write a 2-sentence version of GIGO that specifically applies to training a machine learning model.

> ___________________________________________________________________________
>
> ___________________________________________________________________________

---

## Lesson 4.3 Exit Ticket — Training Your Model (Teachable Machine Lab)

**Name:** _________________________ **Date:** _____________ **Period:** _____

**1.** What did you train your model to classify today? Name your classes.

> I trained a _________________________ classifier with these classes: ________________
>
> ___________________________________________________________________________

**2.** What was your training accuracy? What was your test accuracy (when you tried examples the model hadn't seen)?

> Training accuracy: ________%  |  Test accuracy: ________%

**3.** Describe one example where your model got the prediction **wrong**. What did it predict, and what was the correct answer?

> Wrong prediction: _________________________ Correct answer: _________________________
>
> Why do you think it got this wrong? ____________________________________________
>
> ___________________________________________________________________________

**4.** What is *overfitting*? Do you think your model might be overfitting? Why or why not?

> ___________________________________________________________________________
>
> ___________________________________________________________________________

**5.** 🌟 *Stretch:* If you could change ONE thing about your training data to improve your model's real-world accuracy, what would you change and why?

> ___________________________________________________________________________
>
> ___________________________________________________________________________

---

## Lesson 4.4 Exit Ticket — Evaluating Your Model: What Does Accuracy Really Mean?

**Name:** _________________________ **Date:** _____________ **Period:** _____

**1.** A spam classifier is 95% accurate. But 95% of emails in the dataset are not spam. Can a model reach 95% accuracy without learning anything useful? How?

> ___________________________________________________________________________
>
> ___________________________________________________________________________

**2.** What is the difference between *training accuracy* and *real-world performance*? Give a specific example of why they might differ.

> ___________________________________________________________________________
>
> ___________________________________________________________________________

**3.** Fill in the blanks:

> A *false positive* is when the model predicts _________ but the correct answer is _________.
>
> A *false negative* is when the model predicts _________ but the correct answer is _________.

**4.** Which type of error would be worse in each situation? Circle your answers.

| Situation | Worse error |
|---|---|
| A spam filter (classifies spam as not-spam) | False Positive / False Negative |
| A medical test (classifies sick as healthy) | False Positive / False Negative |
| A fire alarm (goes off when there's no fire) | False Positive / False Negative |

**5.** 🌟 *Stretch:* "Accuracy isn't always the right metric." What would you use instead of accuracy to evaluate a spam classifier, and why? (Hint: think about *which* type of mistake matters more.)

> ___________________________________________________________________________
>
> ___________________________________________________________________________

---

## Lesson 4.5 Exit Ticket — Integrating Your Model + Ethics Check

**Name:** _________________________ **Date:** _____________ **Period:** _____

**1.** Your trained model is now a skill inside your OpenClaw agent. Describe what happens step-by-step when a user sends a message that triggers your new skill.

> Step 1: User sends: "___________________________________________________________"
>
> Step 2: Agent routes to: _______________________________________________________
>
> Step 3: Model predicts: _________________________________________________________
>
> Step 4: Agent responds: _________________________________________________________

**2.** You trained your sentiment classifier on social media posts from your school. A company wants to use your model to classify customer reviews on their national website. Name one specific way this could go wrong.

> ___________________________________________________________________________
>
> ___________________________________________________________________________

**3.** Complete the sentence: "A model trained only on data from one source is problematic because…"

> ___________________________________________________________________________
>
> ___________________________________________________________________________

**4.** What is one change you would make to your classifier before you'd feel comfortable sharing it with the whole class? Why?

> ___________________________________________________________________________
>
> ___________________________________________________________________________

**5.** 🌟 *Stretch:* Think about the people whose data was used to train public AI models (like the ones behind search engines or social media recommendations). Do you think they consented to being part of that training data? Does it matter? Defend your answer in 2–3 sentences.

> ___________________________________________________________________________
>
> ___________________________________________________________________________
>
> ___________________________________________________________________________
