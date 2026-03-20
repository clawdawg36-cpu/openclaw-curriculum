# 🔑 Pattern Detective — Answer Key

**Module 3 | Teacher Use Only**

---

> **Keep this internal.** Do not distribute to students before or during the activity.

---

## Standard Cards — Answers and Explanations

---

### 🟢 Card 1 — The Evens

**Next value:** 12

**Rule:** Add 2 to each term (even numbers in order starting from 2)

**AI connection:** This is a linear sequence — the simplest kind of pattern. An AI trained on these values would correctly predict any term with high confidence. It's an example of a *clean, consistent* training signal.

---

### 🟢 Card 2 — The Doublers

**Next value:** 32

**Rule:** Multiply each term by 2 (powers of 2: 2⁰, 2¹, 2², …)

**AI connection:** This is exponential growth. If an AI was trained on only the first 4 values, it might not distinguish "doubling" from "adding an increasing amount." More data points make the pattern unambiguous.

---

### 🟢 Card 3 — The Countdown

**Next value:** 55

**Rule:** Subtract 9 from each term

**AI connection:** Students might initially think it's "subtract 10" after seeing 100→91. The actual rule (subtract 9) requires checking more pairs. Good discussion prompt: "How many values did you need before you were sure?"

---

### 🟡 Card 4 — The Famous One (Fibonacci)

**Next value:** 13

**Rule:** Each term is the sum of the two previous terms (Fibonacci sequence)

**Explanation:**
- 1 + 1 = 2
- 1 + 2 = 3
- 2 + 3 = 5
- 3 + 5 = 8
- 5 + 8 = 13 ✅

**AI connection:** This is a great example of a rule that requires *context* — you can't predict the next value from just the current one. You need at least two values. Language models face the same challenge: understanding context windows and how much prior text matters.

**Student misconception:** Some students will think it's "add 2, then add 1, then add 2…" looking at the first few terms. Only with 6+ values does Fibonacci become clear. This is a perfect discussion about the value of more training data.

---

### 🟡 Card 5 — The Squares

**Next value:** 36

**Rule:** Each term is a perfect square (n²): 1, 4, 9, 16, 25, 36…

**Bonus:** Formula is y = n² where n is the position.

**AI connection:** This is a non-linear pattern (quadratic). A student (or AI) who assumes "add a constant amount" will get it wrong — because the gap between terms keeps increasing (+3, +5, +7, +9, +11…). The rule requires recognizing the *type* of pattern, not just the difference.

---

### 🟡 Card 6 — The Letter Pattern

**Next letter:** M

**Rule:** Every other letter in the alphabet (skip one letter each time: A, skip B, C, skip D, E…)

**15th term:** Starting from A (position 1): A=1, C=2, E=3, G=4, I=5, K=6, M=7, O=8, Q=9, S=10, U=11, W=12, Y=13, (skip Z, back to A?). With 26 letters and this pattern staying within A–Z: position 15 = W.

**Alternative count:** If treating letter index: A(1), C(3), E(5), G(7), I(9), K(11), M(13), O(15), Q(17), S(19), U(21), W(23), Y(25). The 15th term = position 29th letter? Pattern wraps or ends at Y.

**Teacher note:** The precise 15th term depends on whether the pattern wraps or stops at Z. Either interpretation is valid — the key is the rule. Use this ambiguity as a discussion point: patterns can have edge cases even when the core rule is clear.

---

### 🟡 Card 7 — The Table Pattern

**Missing values:** When x = 5, y = 11. When x = 10, y = 21.

**Formula:** y = 2x + 1

**Explanation:**
- x=1: 2(1)+1 = 3 ✅
- x=2: 2(2)+1 = 5 ✅
- x=3: 2(3)+1 = 7 ✅
- x=5: 2(5)+1 = 11
- x=10: 2(10)+1 = 21

**AI connection:** This is linear regression — the most fundamental AI learning task. The AI "learned" the formula y = 2x + 1 from a handful of examples and can generalize to any x. This is exactly what a simple ML model does.

---

### 🟡 Card 8 — Temperature Trends

**Predicted Saturday temperature:** 73°F

**Rule:** Temperature increases by 3°F per day

**Is it a safe prediction?** This is a subjective discussion point. Key answers:
- It's only safe if the trend continues (linear warming trend)
- It could be wrong if a cold front arrives
- It's based on 6 data points — a real meteorologist uses much more data

**AI connection:** This illustrates *extrapolation* — predicting beyond the known data. AI models can extrapolate, but they're less reliable the further they go from the training data. A model trained on a 6-day warming streak might confidently predict indefinite warming — which would be wrong.

---

### 🟡 Card 9 — The Shape Sequence (Triangular Numbers)

**Figure 4:** 10 dots

**Figure 5:** 15 dots

**Rule:** Each figure adds a new row with one more dot than the previous row.
- Figure 1: 1 dot (row of 1)
- Figure 2: 3 dots (rows of 2, 1)
- Figure 3: 6 dots (rows of 3, 2, 1)
- Figure 4: 10 dots (rows of 4, 3, 2, 1)
- Figure 5: 15 dots (rows of 5, 4, 3, 2, 1)

**Formula:** Figure n = n(n+1)/2

**AI connection:** This is an example of a pattern that's hard to see numerically (1, 3, 6, 10, 15…) but obvious visually. AI systems that process visual data can sometimes find patterns that purely numeric AI can't — and vice versa. The representation matters.

---

### 🔴 Card 10 — The Tricky Table

**When x = 10, y = 21**

**Formula:** y = 2x + 1

**When x = 1:** y = 2(1) + 1 = 3. But the table doesn't start at x = 1 — it starts at x = 2 (y = 5). Does the formula work? Yes: 2(2)+1 = 5 ✅. The formula works for all positive x.

**AI connection:** Many formulas that "work" for the observed data points also extrapolate to unobserved values — but some don't. Students who find y = 2x + 1 can verify it beyond the table. An AI has the same task: does the learned rule *generalize*, or does it just fit the training examples?

---

### 🔴 Card 11 — The Alternating Rule

**Next value:** 4

**Two rules:**
- **Rule A (odd positions: 1, 3, 5, 7):** 1, 2, 3, 4 → increasing by 1
- **Rule B (even positions: 2, 4, 6):** 4, 8, 12 → multiples of 4 (or: multiply the previous odd-position value by 4)

**Explanation:**
- Position 1: 1 (Rule A, count = 1)
- Position 2: 4 (Rule B, 1 × 4)
- Position 3: 2 (Rule A, count = 2)
- Position 4: 8 (Rule B, 2 × 4)
- Position 5: 3 (Rule A, count = 3)
- Position 6: 12 (Rule B, 3 × 4)
- Position 7: 4 (Rule A, count = 4) ✅

**AI connection:** This demonstrates that some patterns have multiple *interleaved* rules. An AI looking for a single rule would fail here. Real-world data often has this structure — seasonal patterns, day/night cycles, weekday/weekend differences. Recognizing the right structure is as important as finding the rule.

---

### 🔴 Card 12 — The Word Pattern

**Rule:** Reverse the letters (read backward)

**Answers:**
- `pots` → `stop`
- `loop` → `pool`
- `repaid` → `diaper`

**Why might AI struggle?** Language models are trained to process text left to right. Reversal requires holding the whole word in mind and re-reading it backward — a different kind of processing. AI models often make errors on reversal tasks because they don't naturally "reverse" token sequences.

**Teacher note:** This is a great bridge to the "Stump the AI" activity — reversal is a known AI weakness you can test live.

---

### 🔴 Card 13 — The Population Table

**2020 population:** ~123,000 (approximately)

**Working:**
- 1970→1980: +10k (+20%)
- 1980→1990: +12k (+20%)
- 1990→2000: +14k (+19.4%)
- 2000→2010: +17k (+19.8%)
- Pattern: roughly 20% growth per decade

**2020 estimate:** 103 × 1.20 ≈ 123.6 → ~124,000

**Is it linear or exponential?** Exponential — the *amount* added each decade is increasing, not staying constant. If linear, each decade would add the same fixed amount.

**2030 estimate:** ~148,000 (124 × 1.20)

**AI connection:** Distinguishing linear from exponential growth is a real challenge for pattern-matching systems. An AI that learns "add ~13,000 per decade" would underestimate; one that learns "multiply by 1.2 each decade" would extrapolate correctly. The right model matters.

---

## Trick Card Answers

---

### 🚨 Card 14 — The Almost-Perfect Sequence

**First impression:** Rule appears to be "add 3" (arithmetic sequence: 3, 6, 9, 12, 15, 18, 21)

**The error:** Position 5. The value is 16, but it should be 15.

**Corrected sequence:** 3, 6, 9, 12, **15**, 18, 21

**How would the AI be fooled?**
An AI that learned from this data might build a model that fits most points but includes extra complexity around position 5 — perhaps learning that "sometimes there's a +4 step." Or it might treat position 5 as an outlier and still roughly learn "add 3." Either way, its predictions after position 5 could be off.

**Would it know something was wrong?** Not necessarily. This is a core challenge with noisy training data: the AI accepts what it's given. It doesn't flag "this value seems wrong" unless it's specifically designed to detect anomalies.

---

### 🚨 Card 15 — The Mislabeled Table

**The error:** Position 4 (4 hours). The value is $50, but it should be $48 (4 × $12 = $48).

**Corrected table:**
| Hours | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| Earned | $12 | $24 | $36 | **$48** | $60 |

**What would an AI predict for 10 hours (using wrong data)?**
An AI that saw the $50 data point might try to fit a formula that includes a bump at hour 4. Its predictions could be unreliable or inconsistent. If it naively averaged, it might predict something near $110–$120 for 10 hours instead of the correct $120.

**Correct answer for 10 hours:** $120 (10 × $12)

**Lesson:** A single wrong data point in training can skew a model's predictions. In real ML, this is why data cleaning and validation are critical steps before training.

---

### 🚨 Card 16 — The Almost-Fibonacci

**The famous sequence:** Fibonacci (each term = sum of two previous)

**Errors:**
- Position 5: value is 6, should be **5** (2 + 3 = 5, not 6)
- Position 6: value is 8, should be **8** — Wait: if position 5 was corrected to 5, then position 6 = 3 + 5 = 8. ✅ Position 6 is only wrong if we keep the broken position 5.

**Actually:** With the broken sequence as given:
- Correct Fibonacci: 1, 1, 2, 3, 5, 8, 13, 21
- Given sequence: 1, 1, 2, 3, **6**, **8**, 13, 21

Errors are at positions 5 (should be 5, not 6) and — if we keep position 5 broken — position 6 would then be expected as 3+6=9, but it shows 8. So position 6 is also wrong given the broken position 5. The cleanest answer: **two errors at positions 5 and 6.**

**Position 9 prediction:**
- Broken sequence: …13, 21 → next would be 34 (if they somehow only caught one error)
- Correct Fibonacci position 9: 34 ✅ (happens to be correct either way, since positions 7 and 8 match)

**Teacher note:** This is intentionally confusing — that's the point. One error early in a sequence propagates and makes later values hard to trust. In ML training data, a corrupted label in the middle of a sequence causes all downstream predictions to be questionable.

---

## General Discussion Points

**"How many data points do you need to be sure of the rule?"**
It depends on the complexity of the rule. For "add 2," you need 3 points. For Fibonacci, you need at least 5–6. For real-world patterns (weather, population), you often need hundreds. This is the fundamental challenge of learning from data.

**"What's the difference between the rule fitting the data and the rule being right?"**
A rule can *fit* training data perfectly but be wrong for new data. This is called **overfitting**. For example, you could draw a squiggly line through every data point — it "fits" perfectly but predicts nothing useful. AI models face this constantly.

**"What does it mean for training data to be 'clean'?"**
Clean data means: no errors, no missing values, consistent labels, and good coverage of the patterns you want the AI to learn. The Trick Cards demonstrate what happens when training data isn't clean.

---

*Do not distribute this key. Review answers before class and prepare to guide discussion using the notes above.*
