# 🤖 Human Learning Machine
### Whole-Class Simulation — Game Guide

---

## Overview

In this activity, your class becomes an AI! You'll simulate how a machine learning model is **trained** through repeated feedback loops. Players will experience firsthand what it feels like to be a neural network — receiving input, making predictions, and learning from mistakes.

**Grade Level:** 6–8  
**Time:** 45–55 minutes  
**Group Size:** Full class (20–35 students)  
**Materials:** Facilitator cards (this guide), student role cards, whiteboard/projector

---

## Learning Objectives

By the end of this activity, students will be able to:
1. Explain what a training feedback loop is in machine learning
2. Describe how a model "learns" by adjusting based on errors
3. Identify the difference between training data and test data
4. Understand why more training data generally improves accuracy

---

## Roles

| Role | # of Players | Description |
|------|-------------|-------------|
| **The Input Layer** | 4–6 students | Receive the raw data (image cards), pass signals forward |
| **The Hidden Layer** | 6–10 students | Process signals, vote on what they represent |
| **The Output Layer** | 2–3 students | Announce the model's final prediction |
| **The Trainer** | 1 student | Reveals the correct answer, gives feedback |
| **The Loss Tracker** | 1 student | Records accuracy on the board each round |
| **The Data Scientists** | Remaining students | Observe, take notes, and rotate in |

---

## Setup (5 minutes)

1. Arrange the room in three "layers" — Input, Hidden, Output — facing the same direction
2. Give each Input Layer student a stack of 5 image cards (face-down)
3. Post the **Score Chart** on the board (Round | Predictions | Correct | Accuracy %)
4. Explain: *"You are now a neural network. Each round, you'll see data, make a prediction, and learn if you were right."*

---

## Gameplay — Round Structure

### Phase 1: Input (30 seconds)
- Input Layer students flip their top card and **whisper a number (1–5)** to represent the signal strength of the image
- They pass their number to the Hidden Layer neighbor on their right

### Phase 2: Processing (45 seconds)
- Hidden Layer students **average the numbers** they received from the Input Layer
- If average ≥ 3 → signal is "HAPPY"
- If average < 3 → signal is "NOT HAPPY"
- Hidden Layer students hold up a 👍 or 👎

### Phase 3: Output (15 seconds)
- Output Layer students look at Hidden Layer signals and announce: **"The model predicts: HAPPY / NOT HAPPY"**

### Phase 4: Feedback (30 seconds)
- The Trainer reveals the correct label from the answer key
- If **correct**: cheer! Loss Tracker writes +1 accuracy point
- If **incorrect**: Trainer explains why (e.g., "The smile was small — look for eye crinkles too")
- The network **adjusts**: Input Layer players may revise their scoring rule for next round

### Phase 5: Logging (15 seconds)
- Loss Tracker updates the board: Round #, % accuracy so far

---

## Full Game Flow

**Rounds 1–5:** Training Phase (network is learning, accuracy may be low)  
**Rounds 6–8:** Test Phase (use NEW image cards the network hasn't seen)  
**Round 9–10:** Bonus — try images that are ambiguous or tricky

---

## Discussion Questions (Post-Game)

1. What happened to your accuracy over the training rounds? Why?
2. How did it feel when you got feedback that you were wrong?
3. What does this tell us about how real AI models improve?
4. Did your accuracy on **test images** match your accuracy on **training images**? Why or why not?
5. What would happen if all the training images were photos of the same one person?

---

## Extension: The Overfitting Trap

After Round 8, reveal that all training images were from the same two students in class.

Ask: *"Is our model really good at reading emotions — or just really good at reading THESE two people?"*

This introduces the concept of **overfitting** — a model that works great on training data but fails on new data.

---

## Facilitator Notes

- Keep rounds moving quickly — momentum matters
- If the class is struggling, pause and let them discuss their scoring rules openly
- For large classes (30+), run two parallel networks and compare accuracy
- This works best printed on cardstock and laminated for repeated use

---

*Module 4 — AI & Machine Learning Foundations | openclaw-curriculum*
