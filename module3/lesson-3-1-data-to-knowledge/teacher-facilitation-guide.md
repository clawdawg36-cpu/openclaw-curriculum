# Teacher Facilitation Guide — Lesson 3.1: From Data to Knowledge

**For:** Lesson 3.1 — From Data to Knowledge  
**Audience:** Teachers / Facilitators  
**Time:** 45–50 minutes

---

## Before You Teach This Lesson

### What This Lesson Is Really About

This isn't just a lesson about feature extraction — it's about *why AI agents need structure*. Students often think AI "just knows" things the way humans do. This lesson breaks that illusion gently and productively, replacing magic with mechanism.

The key insight you want every student to walk away with:

> **"An AI doesn't understand a cat — it recognizes a pattern of numbers."**

Everything else in this lesson builds toward and from that idea.

### What Students Already Know

By this point in the curriculum:
- **Module 1:** Students built or configured an agent and gave it an identity (name, purpose, personality).
- **Module 2:** Students added vision — the agent can now process or describe images.
- **Now (Module 3):** Students are about to give the agent a *knowledge base* — structured information it can look up and reason over.

The through-line is: *agent identity → agent senses → agent knowledge*. Make this arc visible at the start and end of class.

---

## Facilitation Notes by Section

### 🔁 Through-Line Bridge (5 min)

**Goal:** Activate prior knowledge and build anticipation.

**What to do:**
- Spend 2 minutes reviewing M1 and M2 at a high level. Don't re-teach — just remind.
- The phrase *"knowledge only it has"* is intentional and motivating. Emphasize it.
- Let students speculate for 30–60 seconds about what custom knowledge might mean. Common guesses:
  - "Facts about our school?" → Yes!
  - "Things I told it?" → Exactly!
  - "Secrets?" → Depends on what you mean…

**Watch for:** Students who look confused about what they built in M1/M2. A quick 30-second pair-share ("tell your neighbor one thing your agent can do") often helps.

---

### 🐱 Hook: What Makes a Cat a Cat? (8 min)

**Goal:** Surface the idea that humans use *features* naturally; computers need them explicitly.

**What to do:**
1. Ask the cat riddle. (It always works. Everyone says "cat.")
2. Ask *how* they knew. Write every answer on the board — don't filter.
3. Start grouping the answers: "These are about *appearance*, these are about *sound*, these are about *behavior*."
4. Then ask: "Which of these could a computer use? What does a computer need instead of the word 'furry'?"

**Common student answers and how to respond:**

| Student says | Teacher move |
|---|---|
| "It has fur" | "Great — but is it a little furry or a lot furry? How would a computer measure that?" |
| "It says meow" | "What's the number version of 'meow'? Could you use sound frequency?" |
| "It looks like a cat" | "What does 'looks like' mean to a computer? That's actually what we're building toward in this module." |

**Common misconception:** Students often say "You just show it pictures." Acknowledge this is valid (that's computer vision!) but push them: "Okay, but how does the computer decide what's in the picture? Somewhere, features are being extracted — either by you or by the model."

**Optional props:** A stuffed animal cat works great here. Ask students to list features they can directly observe. Then ask: "What about features you can't see — like whether it's heavy or what sound it makes?"

---

### 💡 Mini-Lecture: Features Are How Machines See (7 min)

**Goal:** Introduce the vocabulary (feature, feature vector) with a concrete visual example.

**Key concepts to hit:**

1. **Feature** = one measurable property of a thing
2. **Feature vector** = the full list of numbers representing one object
3. **Training** = the process of learning which feature vectors correspond to which labels

**Pacing tip:** Draw the table on the board *live* rather than showing a slide. Slower is better here — it gives students time to copy and absorb.

**The "1/0" vs. "continuous scale" distinction:**
- Binary features (has legs: 0 or 1) are easy and often reliable.
- Continuous features (furriness: 0–10) are more expressive but introduce *subjectivity*.
- Ask: "Which kind of feature do you think is more useful for a computer? Why?"

**Discussion questions (pick 1–2 based on your class):**

1. *"What features would help a computer tell a lemon apart from a tennis ball?"*
   - Both yellow, both round, similar size.
   - Key differentiators: edible (1 vs. 0), texture (bumpy vs. felt), smell (if you add that feature!), weight.

2. *"Is 'furriness' easy or hard to turn into a number?"*
   - There's no right answer. That's the point.
   - Could measure hair length in mm. Could use a tactile sensor. Could rate 0–10.
   - Lead to: "This is called *feature engineering* — it's a real job in ML."

3. *"What happens if two objects have the exact same feature vector?"*
   - A computer would classify them the same.
   - This is actually a real problem. More features = less chance of collision.
   - Teaser: "This is why modern AI uses *thousands* of features — sometimes millions."

---

### 🎮 Feature Extraction Game (15 min)

**Goal:** Hands-on practice encoding objects as numbers; productive disagreement.

**Setup options:**
- **Analog:** Print and cut cards, hand them out physically. Students write on the card.
- **Digital:** Share the Google Doc / markdown file on student devices. Students fill in a table.
- **Hybrid:** Display cards on projector, students record answers on paper.

**Timing breakdown:**
- 2 min: explain the rules and the feature template
- 8 min: individual/pair encoding
- 5 min: share out + class guessing game

**Facilitation during work time:**
- Circulate and look for interesting disagreements to highlight in debrief.
- Prompt students who finish early: "Add one feature the template is missing. Explain why it helps."
- For students who are stuck: "Start with the easy ones — size and weight. Then come back to the hard ones."

**The guessing game:**
- Call on students to read their numbers aloud. Don't let them say the object name first.
- The class guesses. If the guess is wrong, ask: "What number threw you off? What would have made it clearer?"

**Debrief must-haves:**
1. Show two students who encoded the same object differently. Ask: "Whose version is 'correct'?" (Neither! This is feature subjectivity.)
2. Ask: "Did anyone add a feature that wasn't on the template?" Celebrate these — good feature engineering is creative.
3. Connect back: "Now imagine doing this with a million cats, a million dogs, a million rocks… that's what a training dataset looks like."

**Common facilitation challenges:**

| Situation | What to do |
|---|---|
| Students all rate the same | That's okay! Discuss *why* — some features really are universal. Focus debrief on the hard cases. |
| Students disagree strongly on one feature | Let them debate for 60 seconds, then name it as an example of *subjective feature engineering* |
| Students want to add binary features | Great! Let them. Discuss tradeoffs between binary and continuous. |
| Time runs short | Skip "comparison table" in the game sheet; jump straight to debrief questions 1 and 2. |

---

### 🌉 Bridge to M3 (5 min)

**Goal:** Connect today's conceptual work to the practical M3 project.

**What to do:**
- Restate the through-line: identity (M1) → senses (M2) → knowledge (M3).
- Make the M3 deliverable concrete: "You're going to create a structured knowledge base — a set of facts your agent can look up and use when answering questions."
- Plant the seed: "The facts in your knowledge base are a bit like feature vectors — structured, numerical or categorical, organized. We'll get into the format in Lesson 3.2."

**The emotional beat:** Students should feel *excited* about what they're about to build. The "knowledge only it has" framing is motivating. Let it land before moving to the exit ticket.

**Optional: Show a teaser.** If you have a working demo of an agent with a knowledge base that can answer a specific question (e.g., "What's our school mascot?" or "What are the rules of our game?"), show it here. 30 seconds of demo is worth 5 minutes of explanation.

---

### ✍️ Exit Ticket (5 min)

**Three questions — keep it tight:**

1. What is a feature? Give one example.
2. Write the feature vector for a **pencil** using at least 4 features. Label each feature.
3. In one sentence: why does a machine learning model need numbers instead of words?

**Grading guidance:**

| Q | Full credit looks like |
|---|---|
| 1 | "A feature is a measurable property of an object" + any valid example (size, color, weight, etc.) |
| 2 | 4+ labeled features with numeric values on a consistent scale. Credit for labeling even if numbers are "wrong." |
| 3 | Any version of "computers can't understand words the way humans do; numbers are universal/mathematical" |

---

## Frequently Asked Questions from Students

**"But ChatGPT understands words — why does it need numbers?"**

Great question to sit with. The short answer: even language models turn words into numbers internally (called embeddings or tokens). The model never works with the word "cat" — it works with a vector of numbers that represents the concept of "cat." Today's lesson is a simplified version of that same idea.

**"What if my features are wrong?"**

Features aren't right or wrong — they're more or less *useful*. A good feature is one that helps separate categories you care about. A bad feature is one that's the same for everything (e.g., "does it exist?" — always 1, useless) or one that's too noisy to measure consistently.

**"Why not just use a photo?"**

Photos *are* feature vectors! Every pixel is a number. A 100×100 grayscale image is a 10,000-number feature vector. When you add color (RGB), it's 30,000 numbers. This lesson is the foundation for understanding how images work in ML.

**"Is this how the agent we built actually works?"**

Partially! Large language models use a form of feature extraction called "embeddings" — but the principle is the same. When we build the knowledge base in M3, we'll also convert text into numbers so the agent can search and compare.

---

## Differentiation Quick Reference

| Learner Type | Adaptation |
|---|---|
| Struggling | Pre-filled feature template, physical props, pair work |
| On-level | Standard lesson as written |
| Advanced | Adversarial example challenge, pseudocode feature function, feature selection discussion |
| ELL | Vocabulary cards with images, native-language pair discussion first |
| Sensory/tactile learners | Physical objects to handle while encoding |

---

## Red Flags to Watch For

- **Students treating features as purely subjective/meaningless:** Gently push back — while there's subjectivity in feature *design*, good features should be reproducible. "If two people measure the same rock, would they get similar size scores?"
- **Students who rush through the game:** Prompt deeper: "Can you redesign the 'furriness' feature to be more precise? What would you need to measure?"
- **Students who disengage during lecture:** Get them to the game faster. The lecture is 7 minutes — if the class is losing interest, cut to the chase.

---

## Connection to Module 3 Arc

| Lesson | Builds On Today By |
|---|---|
| 3.2 — What Is a Knowledge Base? | Showing how features become structured data in JSON/tables |
| 3.3 — Building Your Knowledge Base | Students create their own feature-like entries for their agent's knowledge |
| 3.4 — Teaching Your Agent | Connecting the knowledge base to the agent's query/retrieval system |
| 3.5 — Demo Day | Students demonstrate what their agent "knows" that no other agent does |

---

## Notes Section

*Use this space for your own facilitation notes after teaching.*

**What worked well:**

**What to adjust next time:**

**Interesting student responses to remember:**

**Questions students asked that need follow-up:**
