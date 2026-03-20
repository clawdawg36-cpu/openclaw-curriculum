# Lesson 3.1 — From Data to Knowledge

**Module:** Module 3 — Give Your Agent a Brain  
**Duration:** 1 Period (45–50 minutes)  
**Grade Band:** 6–10  
**Prerequisite:** Module 1 (Agent Identity), Module 2 (Vision & Perception)

---

## Learning Objectives

By the end of this lesson, students will be able to:

1. **Explain** what a "feature" is and why features matter for machine learning.
2. **Translate** real-world object properties into numerical representations.
3. **Describe** how a trained AI agent "knows" things through features learned during training.
4. **Connect** feature extraction to the upcoming M3 unlock: adding a custom knowledge base to their agent.

---

## Standards Alignment

| Standard | Description |
|---|---|
| CSTA 2-AP-11 | Create clearly named variables that store data and perform operations on the data. |
| CSTA 2-DA-07 | Represent data using multiple encoding schemes. |
| ISTE 5c | Break problems into component parts, extract key information, and develop descriptive models. |

---

## Materials

- [ ] Printed or digital **Feature Extraction Game cards** (`feature-extraction-game.md`)
- [ ] Whiteboard / projector
- [ ] Student devices (optional — for digital card version)
- [ ] Sticky notes or index cards (for analog version)
- [ ] Markers
- [ ] Optional: a stuffed animal cat, a rock, a banana, a pencil (physical props)

---

## Vocabulary

| Term | Student-Friendly Definition |
|---|---|
| **Feature** | A measurable property of something — a number that describes one aspect of it. |
| **Feature vector** | A list of numbers that together describe an object. |
| **Feature extraction** | The process of turning real-world things into numbers a computer can use. |
| **Training data** | Examples with labels that a machine learning model learns from. |
| **Knowledge base** | A structured collection of facts or information an agent can look up. |

---

## Lesson Outline & Timing

### 🔁 Through-Line Bridge: Review + Tease (5 min)

**Teacher says:**
> "Before we dive in, let's remember what our agent can already do.
> — In Module 1, you gave it an *identity* — it knows who it is, what it's for.
> — In Module 2, you gave it *vision* — it can look at images and describe what it sees.
>
> Today we're starting Module 3. By the end of this module, your agent will have something brand new — a *custom skill*. Knowledge only **it** has. Not ChatGPT, not Siri — just yours."

**Pause for reaction.** Let students speculate briefly about what "knowledge only it has" might mean.

---

### 🐱 Hook: What Makes a Cat a Cat? (8 min)

**Teacher says:**
> "I'm thinking of an animal. It has fur, whiskers, and says 'meow.' What is it?"

**[Students respond: a cat]**

> "How did you know? What information did you use?"

Write student answers on the board. Guide toward:
- Physical features (fur, whiskers, tail shape, ear shape)
- Sounds (meow vs. bark vs. squeak)
- Behavior (independent, purrs, knocks things off tables)

**Key question:**
> "If I asked a computer to recognize a cat, what would I give it? The word 'cat' doesn't mean anything to a computer. It needs *numbers.*"

---

### 💡 Mini-Lecture: Features Are How Machines See (7 min)

Draw a simple table on the board:

| Property | Cat | Dog | Bird |
|---|---|---|---|
| Has fur? | 1 | 1 | 0 |
| Has feathers? | 0 | 0 | 1 |
| Makes meow sound? | 1 | 0 | 0 |
| Has four legs? | 1 | 1 | 0 |
| Has wings? | 0 | 0 | 1 |

**Teacher explains:**
> "Each row is a *feature*. The whole row of numbers is called a *feature vector*. When a machine learning model is trained, it looks at thousands of these feature vectors, paired with labels like 'cat' or 'dog,' and it learns the pattern.
>
> Your agent 'knows' things because it was trained on features just like these — but in Module 3, you're going to give it a brand-new knowledge base it didn't have before."

**Discussion questions (pick 1–2):**
1. What features would help a computer tell a lemon apart from a tennis ball? (They're both round and yellow!)
2. Is "furriness" easy or hard to turn into a number? What scale would you use?
3. What happens if two objects have the exact same feature vector?

**Ethics Touchpoint:**
> **Discussion question:** *"AI models are trained on internet data — but whose language, knowledge, and perspectives show up most online? Whose knowledge might be missing or underrepresented?"* Recognizing that training data reflects the people who created it is a foundational step toward understanding why AI systems can favor some groups over others.

---

### 🎮 Feature Extraction Game (15 min)

**Transition:**
> "Now you're going to try this yourself. You'll get a card with an object on it. Your job: describe it using *only numbers.*"

**Instructions:**
1. Distribute Feature Extraction Game cards (see `feature-extraction-game.md`).
2. Students work individually or in pairs to fill in the feature vector for their assigned object.
3. After 8 minutes, share out: read your numbers, the class guesses the object.
4. Compare: did two students describe the same object differently? Why?

**Debrief questions:**
- "Were any two people's number lists exactly the same for the same object?"
- "What made it hard to pick a scale?"
- "What features did everyone agree on? Which were controversial?"

---

### 🌉 Bridge to M3: The Custom Knowledge Base (5 min)

**Teacher says:**
> "Here's the thing — the AI agent you've been building has been trained on general knowledge. It knows *a lot*, but it doesn't know the specific things *you* know.
>
> In Module 3, you're going to fix that. You're going to create a *knowledge base* — a structured set of facts that only your agent has. Maybe it's facts about your school, your neighborhood, your favorite game, your science project.
>
> When you're done, your agent will be able to answer questions that no other AI can answer — because you taught it. And it learned, just like today, by turning information into a form it can use."

---

### ✍️ Exit Ticket (5 min)

Students write (or type) responses to:

1. What is a feature? Give one example.
2. Write the feature vector for a **pencil** using at least 4 features. Label each feature.
3. In one sentence: why does a machine learning model need numbers instead of words?

---

## Differentiation

### 🟢 Support (Struggling Learners)
- Provide a pre-filled feature template with suggested categories (color, size, weight, texture, sound, has legs, has wings, etc.)
- Use physical props so students can feel/see the objects they're encoding
- Allow pairs for the game instead of individual work

### 🔵 Extension (Advanced Learners)
- Ask students to design a feature set that could distinguish *two very similar objects* (e.g., apple vs. red ball)
- Challenge: can you design a feature vector that would fool a computer? (adversarial examples intro)
- Have students write a short pseudocode function that takes an object description and returns a feature vector

### 🌐 ELL Support
- Provide vocabulary cards with images
- Allow native-language discussion within pairs before English reporting

---

## Assessment

| Component | Points |
|---|---|
| Exit ticket: feature definition + example | 10 |
| Exit ticket: pencil feature vector (4+ features, labeled) | 20 |
| Exit ticket: why numbers | 10 |
| Participation in feature game + debrief | 10 |
| **Total** | **50** |

---

## Teacher Notes

- The "furriness" question is intentionally hard — there's no right answer, and that's the point. Let students struggle productively. Scale of 0–10? 0–1 continuous? Binary?
- The "two objects with the same feature vector" question seeds the idea of *dimensionality* and *feature selection* — the more good features you have, the less likely collision becomes.
- The through-line bridge at the start and end of class is important for motivation. Students should leave *wanting* to build the M3 knowledge base.

---

## Connection to Next Lesson

**Lesson 3.2 — What Is a Knowledge Base?**  
Students will explore structured data formats (JSON, tables) and begin designing the schema for their own agent knowledge base.
