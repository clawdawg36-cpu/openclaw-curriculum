# Magic Gesture Detector — Creative Project Brief

**Module 2 Capstone Project**
**Estimated Time:** 2–3 class sessions + independent work

---

## The Big Idea

You're going to build something that feels like magic: wave your hand and music plays. Give a thumbs up and the screen changes color. Your AI agent will watch through the camera, recognize your gestures in real time, and respond with actions.

This is your first **vision-powered AI agent**. By the end, you'll have something you can demo to anyone and explain how it works.

---

## What You're Building

### Core Gestures (Required)
| Gesture | Action |
|---------|--------|
| 🌊 Wave | Play a music clip or toggle music on/off |
| 👍 Thumbs Up | Change the background color of the screen |

### Optional Add-Ons (Choose 1 or more)
| Gesture | Action |
|---------|--------|
| ✋ Open hand / "stop" | Pause the music |
| 👎 Thumbs down | Reset screen color to white |
| 🤟 Rock on / "love" | Trigger a surprise (your choice!) |
| 👋 Two-handed wave | Play a different song |
| Custom gesture | Custom action — design your own! |

---

## Tools & Tech

- **Teachable Machine** (teachablemachine.withgoogle.com) — to train your gesture classifier
- **Scratch, p5.js, or MIT App Inventor** — to build the interactive interface (teacher will guide setup)
- **Your device's camera** — for live gesture detection
- **A computer with a browser** — that's it!

*No special hardware needed. Everything runs in your browser.*

---

## Project Phases

### Phase 1 — Train Your Gesture Model (1 session)
1. Go to Teachable Machine → Image Project
2. Create classes for each gesture you want to detect (start with just Wave and Thumbs Up)
3. Record **at least 50 images per class** — vary your hand position, distance, lighting
4. Add a "No Gesture / Neutral" class with 50+ images of your hand at rest or nothing
5. Train your model
6. Test it — check accuracy for each class
7. Export your model (copy the shareable link)

**Checkpoint:** Can your model correctly identify each gesture 8 out of 10 times?

### Phase 2 — Build the Interface (1–2 sessions)
Connect your Teachable Machine model to an interactive project:

**Option A — Scratch** (beginner-friendly)
- Use the Teachable Machine Scratch extension
- Add blocks: "When wave detected → play sound"
- Add blocks: "When thumbs up detected → change backdrop color"

**Option B — p5.js** (intermediate)
- Use the ml5.js library with your model URL
- Write code to trigger actions based on prediction label
- Design your own visual interface

**Option C — Design your own** (advanced)
- Use any platform approved by your teacher
- Must include real-time camera input and at least 2 distinct gesture responses

### Phase 3 — Test, Refine, Demo (30 min)
- Test with a classmate — do they trigger the gestures correctly?
- Fix any glitches in your gesture training or code
- Prepare your 2-minute demo and explanation

---

## Deliverables

Submit all of the following:

1. **Working demo** — live demonstration to the class or recorded 2-minute video
2. **Teachable Machine model link** — your exported model URL
3. **Project file** — your Scratch project, p5.js sketch, or code
4. **Project reflection** (1 page — see prompts below)
5. **Agent Design Journal update** — document this as a new capability for your agent

---

## Reflection Prompts

Answer all 4 questions in your project reflection:

1. **How it works:** Explain in plain English (2–3 sentences) how your gesture detector knows what gesture you're making. No code — just concepts.

2. **The data behind it:** How many training images did you take? Did you try to vary them? What happened when you tested with a classmate who hadn't trained the model?

3. **What surprised you:** Name one thing that didn't work the way you expected. What did you do about it?

4. **Next gesture:** If you added a third gesture to your agent, what would it be and what would it do? Why?

---

## Grading (100 points)

| Component | Points |
|-----------|--------|
| Working demo — both core gestures function correctly | 30 |
| Training quality — 50+ images per class, neutral class included | 20 |
| Interface — actions trigger correctly and are distinct | 20 |
| Reflection — thoughtful, specific answers to all 4 prompts | 20 |
| Agent Design Journal updated | 10 |

**Bonus (up to 10 extra points):** Add a 3rd custom gesture and action. Explain the design choice in your reflection.

---

## Tips for Success

- **More data = better accuracy.** If your model gets confused, add more training images from different angles.
- **The neutral class matters.** Without it, your model might see gestures everywhere.
- **Test with real humans.** Your model was trained on your hand. Other hands might look different!
- **Keep gestures distinct.** Wave and thumbs up should look obviously different from each other.
- **Have fun with the actions.** The gestures are required; the sounds and colors are yours to design.

---

## Inspiration Gallery

Past students have created:
- A DJ booth where different gestures control different tracks
- A mood board that changes colors to match emoji gestures
- A "magic 8-ball" that responds to different hand signals
- A Simon Says game where the AI is the judge

*Your Magic Gesture Detector is yours. Make it weird. Make it personal. Make it yours.*

---

*Project aligned with Module 2: How Computers See. Supports CSTA K-12 CS Standards 2-AP-12, 2-DA-07.*
