# Quiz: ML Concepts

**Module:** 4 — How Machine Learning Works  
**Type:** Auto-graded | 8 Questions  
**Estimated Time:** 12–15 minutes  
**Passing Score:** 6/8 (75%)

> Answer each question, then reveal the explanation to understand why the answer is correct. Track your score and review any missed questions before moving on.

---

## Question 1 *(Multiple Choice | Easy)*

**In the machine learning training loop, what step comes immediately after training the model on your dataset?**

- A) Collecting more data
- B) Deploying the model to users
- C) Evaluating the model's performance on a separate validation set
- D) Deleting the training data

**✅ Correct Answer:** C

<details>
<summary>💡 Show Explanation</summary>

After training, you always evaluate — you check how well the model performs on data it hasn't seen before (a **validation set**). This tells you whether the model actually learned something useful, or just memorized the training examples. Only after evaluating (and adjusting if needed) do you consider deploying to real users.

</details>

---

## Question 2 *(Multiple Choice | Easy)*

**Which of the following best describes a "labeled example" in machine learning?**

- A) A piece of data with a timestamp attached
- B) An image or data point paired with the correct answer (e.g., a photo of a cat labeled "cat")
- C) Any data that has been cleaned and formatted
- D) A data point selected at random from a large dataset

**✅ Correct Answer:** B

<details>
<summary>💡 Show Explanation</summary>

A labeled example is a pairing of **input data + the correct output**. For image classification, that's a photo plus its correct category ("cat," "dog," "car"). The model learns by looking at thousands of these pairs and figuring out what patterns in the input predict the right label. Without labels, the model has no feedback signal to learn from.

</details>

---

## Question 3 *(Multiple Choice | Medium)*

**A model achieves 98% accuracy on its training data but only 61% accuracy on the validation set. What does this most likely indicate?**

- A) The model needs more computing power
- B) The validation set is too small to be meaningful
- C) The model has overfit — it memorized the training data instead of learning general patterns
- D) The model is performing well and is ready to deploy

**✅ Correct Answer:** C

<details>
<summary>💡 Show Explanation</summary>

This is the textbook definition of **overfitting**: high training accuracy, low validation accuracy. The model "memorized" the training examples (including noise and quirks) rather than learning patterns that generalize to new data. It's like a student who memorizes practice test answers word-for-word but can't answer slightly different questions. Fixes include gathering more data, simplifying the model, or using techniques like dropout or regularization.

</details>

---

## Question 4 *(Multiple Choice | Medium)*

**A dataset for detecting rare diseases contains 90% healthy patient scans and only 10% disease-positive scans. A model trained on this data achieves 90% accuracy. What is the most likely problem?**

- A) The model is outstanding — 90% accuracy is excellent
- B) The model may have learned to always predict "healthy" without actually detecting the disease, since that guess is right 90% of the time
- C) The training data needs to be collected more quickly
- D) The model needs more hidden layers to improve

**✅ Correct Answer:** B

<details>
<summary>�í Show Explanation</summary>

This is the **class imbalance** problem. When one class dominates the dataset, a model can "cheat" by predicting the majority class every single time and still look accurate. In this case, always guessing "healthy" yields 90% accuracy — but the model is useless at detecting the disease it was built to find. Solutions include resampling techniques, using weighted loss functions, or collecting more examples of the rare class.

</details>

---

## Question 5 *(Scenario-Based | Medium)*

**Scenario:** A technology company trains a face recognition system using photos primarily sourced from one region of the world, where most subjects have light skin tones. The system is then deployed globally.

**What is the most likely outcome?**

- A) The system will perform equally well on all users since faces are fundamentally similar
- B) The system will perform worse on users with darker skin tones, because it has seen few training examples that represent them
- C) The system will automatically improve as it encounters new faces in deployment
- D) Performance differences will be negligible because the model is mathematically objective

**✅ Correct Answer:** B

<details>
<summary>💡 Show Explanation</summary>

This is **data bias** — a real documented problem in commercial face recognition systems. A model learns from its training data. If that data underrepresents certain groups, the model will perform worse on those groups. Math doesn't make a model fair; data diversity does. This is why researchers and ethicists emphasize representative, balanced datasets — especially for systems used in high-stakes contexts like law enforcement or hiring.

</details>

---

## Question 6 *(True/False | Easy)*

**True or False: "Training" and "inference" are the same process — in both cases, the model is actively updating its internal parameters based on new data.**

- A) True
- B) False

**✅ Correct Answer:** B — False

<details>
<summary>💡 Show Explanation</summary>

**Training** and **inference** are fundamentally different. During training, the model processes labeled examples and adjusts its internal weights to get better at predictions — it's actively learning. During **inference**, the model's weights are frozen (fixed), and it simply applies what it learned to make predictions on new inputs. Think of training as studying, and inference as taking the test.

</details>

---

## Question 7 *(Multiple Choice | Medium)*

**When we say a machine learning model "learns" from data, what is it actually adjusting?**

- A) The code written by the developers
- B) The labels in the training dataset
- C) Internal numerical values called weights (or parameters) that determine how it processes inputs
- D) The hardware speed of the computer running it

**✅ Correct Answer:** C

<details>
<summary>💡 Show Explanation</summary>

A model's "knowledge" is stored in its **weights** (also called parameters) — millions of numerical values that get tuned during training. When the model makes a wrong prediction, the training process nudges these numbers in a direction that reduces the error. After training on enough examples, the weights encode useful patterns. The developer's code defines the model's structure, but the weights are what the model *learns*. No math required to understand this: think of it like tuning millions of tiny dials until the output sounds right.

</details>

---

## Question 8 *(Scenario-Based | Hard)*

**Scenario:** A hiring platform deployed a resume-screening model two years ago. At the time, it performed well. Recently, HR managers noticed it's recommending fewer qualified candidates. The job market has shifted — new skills and job titles have emerged that weren't common two years ago.

**What concept best explains why the model is underperforming, and what should the team do?**

- A) The model has a bug — it should be rolled back to the previous software version
- B) The model is experiencing model drift — the real world changed, but the model didn't. It should be retrained on more recent data.
- C) HR managers are wrong; the model is still accurate since it was validated at launch
- D) The server running the model needs an upgrade

**✅ Correct Answer:** B

<details>
<summary>💡 Show Explanation</summary>

This is **model drift** (also called concept drift or data drift). A model trained on historical data reflects the world as it was at training time. When the world changes — new skills emerge, language shifts, user behavior evolves — the model's predictions become less accurate. The fix is to **retrain the model** on fresh, representative data. Responsible AI deployment includes monitoring model performance over time and establishing triggers for retraining when drift is detected.

</details>

---

## 📊 Score Tracker

| Question | Topic | Difficulty | Your Answer | Correct? |
|----------|-------|------------|-------------|----------|
| 1 | ML training loop | Easy | | |
| 2 | Labeled data | Easy | | |
| 3 | Overfitting | Medium | | |
| 4 | Class imbalance | Medium | | |
| 5 | Data bias | Medium | | |
| 6 | Training vs. inference | Easy | | |
| 7 | What a model learns (weights) | Medium | | |
| 8 | Model drift / retraining | Hard | | |

**Total: ___ / 8**  
**Pass (75%+): 6 or more correct**
