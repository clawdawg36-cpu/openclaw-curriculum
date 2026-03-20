# Slides Outline — Lesson 6.1: Algorithms as Opinions

---

## Slide 1 — Title
**Lesson 6.1: Algorithms as Opinions**
*Module 6: AI Ethics, Bias, and Accountability*

Subtext: *"What your AI believes — and why it matters."*

---

## Slide 2 — Welcome to Module 6
**You've been building. Now we audit.**

- Module 1: What is AI?
- Module 2: Build your agent
- Modules 3–5: Train, connect, voice
- **Module 6: Does your agent do what it should?**

3-week arc: Bias → Surveillance → Privacy → Deepfakes → Debate → Responsibility

---

## Slide 3 — Warm-Up Results
**What did you think of?**

[Display student sticky notes or collected responses]

- When you saw "DOCTOR," you wrote: ___
- When you saw "NURSE," you wrote: ___

*Were your associations different? Were they automatic?*

---

## Slide 4 — What Is a Word Embedding?
**Words live in space.**

Diagram: 2D grid with word clusters
- "Cold" near "Ice" near "Winter"
- "Hot" near "Fire" near "Summer"
- "King" and "Queen" close together but offset

> "AI represents meaning as location. Words that appear together in text end up living near each other."

---

## Slide 5 — The Analogy Math
**King − Man + Woman = Queen**

[Visual: arrows showing vector arithmetic]

This isn't magic — it's geometry.
- Directions encode relationships
- Those directions come from the training data

*If the data encodes gender, so does the math.*

---

## Slide 6 — Your Predictions
**Worksheet Time**

Complete these analogies the way you think a FAIR AI should:
- Man : Doctor :: Woman : ___
- Father : Doctor :: Mother : ___
- Man : Brilliant :: Woman : ___
- Man : Career :: Woman : ___

*Write your answers. Keep them honest.*

---

## Slide 7 — The Reveal
**What AI actually produces**

| Analogy | Expected | Actual |
|---------|----------|--------|
| Man : Doctor :: Woman : ___ | Doctor | Nurse |
| Father : Doctor :: Mother : ___ | Doctor | Nurse |
| Man : Brilliant :: Woman : ___ | Brilliant | Lovely |
| Man : Career :: Woman : ___ | Career | Family |

*These are real outputs from models trained on large text corpora.*

---

## Slide 8 — Discussion: The Gut Check
**Your reaction matters.**

- Which one surprised you most?
- The AI didn't choose this. The training data did.
- Does that make it better? Worse? Both?
- Who wrote the text the AI trained on?

*Silence is okay. Take a moment.*

---

## Slide 9 — Opinions All the Way Down
**Where bias enters**

1. **Data collection** — What text was included?
2. **Data curation** — What was cleaned or filtered out?
3. **Training objective** — What was the model optimized for?
4. **Deployment** — Who used it and for what?

Every step is a human choice. Every choice carries assumptions.

---

## Slide 10 — Key Quote

> **"Garbage in, bias out.**
> **But the garbage looked clean because it was everywhere."**

The bias wasn't malicious. It was invisible — baked into the everyday language patterns of a society that had its own biases.

*That's what makes it hard to fix.*

---

## Slide 11 — The Audit Question
**Your Module 6 frame**

> *"Who made this, what did they assume, and who might be harmed by those assumptions?"*

Apply this to:
- Your OpenClaw agent
- Google search results
- Netflix recommendations
- Social media feeds

We'll use this question all module long.

---

## Slide 12 — Exit Ticket
**Your homework starts now.**

Write one paragraph:

> *"Is your OpenClaw agent biased? What would you need to check to know?"*

Keep this. You'll revisit it at the end of Module 6.

---

*End of Lesson 6.1 Slides*
