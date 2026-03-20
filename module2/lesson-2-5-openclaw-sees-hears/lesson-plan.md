# Lesson 2.5 — OpenClaw Sees & Hears
## Module 2 | 1 Period (50 minutes)

---

## 🎯 Lesson Objectives

By the end of this lesson, students will be able to:
1. Describe an image to OpenClaw using natural language and interpret its response
2. Play 20 Questions using only visual descriptions — no object names
3. Articulate the difference between text AI and vision AI
4. Identify 3 concrete use cases where their personal agent would benefit from real vision

---

## 🔗 Through-Line: The Gap That Sets Up the Payoff

**This lesson is a setup.** It's designed to make students *feel* a limitation so the payoff in Lab 2.4 (Connect Vision Skill) lands harder.

The core tension:

> "Right now, you have to describe what you see **in text** for OpenClaw to understand it. Every image you want your agent to process has to pass through your words first. In the lab, you'll close that gap — you'll give your agent **real eyes**."

Build this tension deliberately. When students get frustrated translating images to words, or when OpenClaw misunderstands a description — **that's the lesson working**. Name the friction. Celebrate it. It's the setup.

---

## ⏱️ Lesson Outline

### Warm-Up: The Telephone Game with a Photo (5 min)

Display an image on the projector (use one from the 20 Questions image set or your own).  
Ask: *"How would you describe this to someone who can't see it — using only words?"*

Take 2–3 student responses. Write them on the board. Notice how different they are.

**Bridge question:** *"If OpenClaw only reads text, how do you think it understands images right now?"*

---

### Part 1: Describe an Image, Get a Response (12 min)

**Activity:** Students work in pairs.

1. Each pair gets a printed or on-screen image (use the image set from `twenty-questions-lab.md`)
2. Students type a description of the image to OpenClaw in plain text
3. OpenClaw responds (answers questions, identifies what might be in the scene, speculates)
4. Students compare: *Did OpenClaw "see" what you meant?*

**Debrief (2 min):**
- What worked? What got lost in translation?
- Was OpenClaw ever wrong because your description was ambiguous?
- What would have been faster if OpenClaw could actually *see* the image?

**Through-line moment:** *"Everything you just typed — that's the human vision layer. You're doing the work of OpenClaw's future eyes. In Lab 2.4, you remove yourself from that loop."*

---

### Part 2: 20 Questions — Vision Edition (20 min)

See full instructions in `twenty-questions-lab.md`.

**Quick summary:**
- One student picks an image (they don't name it)
- Others ask up to 20 yes/no questions using **only visual descriptions**
- No color names in rounds 1–2 (stretch mode)
- Scoring rewards efficient questions

**Why this matters:** Forces students to think in visual feature language — the exact vocabulary a vision AI uses to parse the world. It's also genuinely fun.

---

### Part 3: Text AI vs. Vision AI Discussion (8 min)

Use the `comparison-discussion-guide.md` for Socratic prompts.

**Core questions to hit:**
1. What can text AI do that vision AI can't (and vice versa)?
2. Where does translation between words and images break down?
3. When does it *not* matter whether AI can see?

---

### Part 4: Agent Preview Activity (5 min)

Students individually complete `agent-preview-activity.md`:
> *"If your agent could actually SEE, what would it be able to do?"*

Each student writes 3 use cases specific to *their* personal agent concept.  
These will be referenced again at the start of Lab 2.4 as motivation.

---

### Wrap-Up: The Gap (5 min)

Return to the warm-up image on the projector.

Ask: *"What would be different if OpenClaw could just look at this directly?"*

**Closing line (say this verbatim or in your own words):**

> "Everything we did today — the describing, the 20 questions, the back-and-forth — that's what your agent currently has to do. Someone has to translate vision into language before it can help. Next lab, you remove that step. You give your agent eyes. That's a big deal."

---

## 🧰 Materials

- Printed or projected image set (6–8 images from `twenty-questions-lab.md`)
- Devices with OpenClaw access (1 per pair minimum)
- `twenty-questions-lab.md` (student handout or projected)
- `agent-preview-activity.md` (student handout, 1 per student)
- `comparison-discussion-guide.md` (teacher reference)

---

## 📊 Assessment

| Component | Points |
|-----------|--------|
| Part 1 participation (active description attempt) | 10 |
| 20 Questions lab (engagement + scoring sheet) | 20 |
| Agent Preview Activity (3 use cases, specificity) | 15 |
| Discussion contribution | 5 |
| **Total** | **50** |

---

## 🔮 Connection to What's Next

**Lab 2.4: Connect Vision Skill**  
Students will connect a real vision model to their OpenClaw agent. The images they described in text today will be processed directly. The frustration they felt in Part 1 becomes motivation.

Remind them: *"Today you felt the gap. Next lab, you close it."*

---

## 📝 Teacher Notes

- **If students finish Part 1 early:** Have them write what *specifically* was wrong about OpenClaw's interpretation and why — more nuanced preparation for the discussion.
- **If tech isn't working:** Part 1 can be done as a thought experiment — *"What do you think OpenClaw would say if you gave it this description?"*
- **Differentiation:** Advanced students can try zero-shot descriptions (describe without context) vs. scaffolded (describe knowing it's a kitchen scene, etc.) and compare OpenClaw's responses.
- **The gap framing is intentional.** Don't resolve the tension early. Let students sit with the awkwardness of being the "vision layer" — it makes Lab 2.4 feel earned.
