# 20 Questions Lab — Vision Edition
## Lesson 2.5 | OpenClaw Sees & Hears

---

## 🎯 Goal

Play 20 Questions — but you can **only ask about visual features**. No naming the object. No color in early rounds. Think like a vision AI parsing the world into attributes.

This trains the vocabulary that real vision models use: shape, texture, size, edges, light, composition.

---

## 📋 How to Play

### Setup
- One student (the **Describer**) picks an image from the Image Set below (or receives one secretly from the teacher)
- The Describer **does not name the object** — ever
- All other students (the **Questioners**) ask yes/no questions to figure out what's in the image
- Maximum **20 questions** per round

### Rules
1. Questions must be about **visual properties only** — what you could observe if you were looking at it
2. No asking "Is it a ___?" until question 15 or later (naming too early = no points)
3. No questions about function/use ("Do you use it in the kitchen?") — only appearance
4. The Describer answers only **Yes / No / Kinda** (kinda = the question is partially right)

### Stretch Mode (Rounds 2+)
- **No color names** — instead of "Is it red?" ask "Does it have warm tones?" or "Does it absorb light or reflect it?"
- This is hard. That's the point.

---

## 🗃️ Image Set

Use these categories and suggested image searches. Print 1 image per card, or display on screen.

### Tier 1 — Easy (Good for warm-up)
| # | Subject | Visual Clues to Guide Questions |
|---|---------|----------------------------------|
| 1 | **Apple (fruit)** | Round, smooth, small, stem, uniform surface |
| 2 | **Baseball** | Round, stitching texture, white, palm-sized |
| 3 | **Spiral staircase** | Circular structure, metal or wood, repeating pattern, height |
| 4 | **Sunflower** | Circular center, radial petals, tall stem, large |
| 5 | **Brick wall** | Rectangular units, rough texture, pattern, flat surface |

### Tier 2 — Medium (Main game)
| # | Subject | Visual Clues to Guide Questions |
|---|---------|----------------------------------|
| 6 | **Cracked egg on a pan** | Circular + irregular, two textures, reflective surface, flat context |
| 7 | **Overflowing bookshelf** | Vertical rectangles, varied widths/heights, dense, colorful spines |
| 8 | **Foggy forest path** | Depth/vanishing point, organic shapes, low contrast, soft edges |
| 9 | **Close-up of an eye** | Circular iris, radial texture, glossy, very detailed |
| 10 | **Old payphone** | Boxy, vertical orientation, rectangular panels, mounted/hanging |

### Tier 3 — Hard (Expert round)
| # | Subject | Visual Clues to Guide Questions |
|---|---------|----------------------------------|
| 11 | **Wet cobblestone street at night** | Reflections, irregular surface, dark tones, light sources from below |
| 12 | **Cross-section of a tree trunk** | Circular rings, organic, rough outer edge, smooth center |
| 13 | **Lightning bolt** | Jagged, vertical, bright against dark background, branching |
| 14 | **Crumpled aluminum foil** | Highly reflective, complex shadows, irregular shapes, metallic |
| 15 | **Empty swimming pool** | Large rectangular depression, tiled surface, sloped walls, no water |

---

## 📝 Prompt Templates

Use these prompts when interacting with OpenClaw during Part 1 of the lesson.

### Template A — Basic Description Prompt
```
I'm looking at an image. Here's what I see:
[describe what's in the image using only shapes, textures, sizes, and arrangements]

Based on this description, what do you think this image might show?
```

### Template B — Guided Follow-Up
```
I described an image to you as: [your description]

You guessed: [OpenClaw's guess]

Here's what was actually in the image: [actual subject]

What part of my description was most misleading? What would have helped you figure it out faster?
```

### Template C — Vision Gap Reflection
```
I want to show you a limitation. Here's an image described in text:
[your description]

If you could actually SEE this image instead of reading my description, what additional details might you notice that I missed or got wrong?
```

### Template D — 20 Questions Assist
```
I'm playing 20 Questions and need to describe something visually without naming it.

The object/scene is: [subject]

Help me think of 5 yes/no questions someone might ask about this that are purely visual — no function, no name, just what it looks like.
```

---

## 📊 Scoring Sheet

### Per Round

| Question # | Question Asked | Answer | Points |
|------------|----------------|--------|--------|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| ... | | | |
| 20 | | | |

### Scoring Rules

| Outcome | Points |
|---------|--------|
| Correct guess in 1–7 questions | 20 pts |
| Correct guess in 8–12 questions | 15 pts |
| Correct guess in 13–17 questions | 10 pts |
| Correct guess in 18–20 questions | 5 pts |
| No correct guess | 0 pts |
| **Bonus:** Used no color names (Stretch Mode) | +5 pts |
| **Bonus:** Correct guess used a "shape/texture" question as the final clue | +3 pts |
| **Penalty:** Named the object before question 15 | -5 pts |

### Team Scorecard

| Round | Image # | Guessed By | Questions Used | Mode | Total Points |
|-------|---------|------------|----------------|------|--------------|
| 1 | | | | Normal / Stretch | |
| 2 | | | | Normal / Stretch | |
| 3 | | | | Normal / Stretch | |

---

## 💬 Post-Lab Reflection Questions

1. **What visual attributes were the most useful** for narrowing down answers quickly?
2. **What made Stretch Mode harder?** What words were you *not* allowed to use that you kept wanting to say?
3. **If OpenClaw was actually looking at the image** instead of reading your description — which of your questions would it have been able to answer itself?
4. **Where did your description fail?** What did you describe one way but mean another?

---

## 🔗 Through-Line Note

Every question you asked today — OpenClaw had to answer from *your words*, not the actual image.

In Lab 2.4, you'll connect a vision skill so OpenClaw can process the image directly. The questions you struggled to ask today? Your agent will be able to answer them automatically.

That's the gap. Lab 2.4 closes it.
