# Teacher Facilitation Guide — Lesson 2.1: How Computers See

**For:** Teachers and teaching assistants  
**Lesson:** 2.1 — How Computers See  
**Time:** 1 period (~50–55 minutes)

---

## Overview for Teachers

This lesson is the entry point for Module 2, which builds toward giving students' AI agents the ability to "see" images using Hugging Face image-recognition models (Lab 2.4). Today is purely conceptual and unplugged — no computers required for the main activity.

**The big idea:** Everything students think of as a "picture" is actually a grid of numbers. Once they internalize this, they'll understand why AI can process images — and why that's hard.

---

## Before Class Checklist

- [ ] Print enough copies of `pixel-art-activity.md` (1 per student, or 1 per pair)
- [ ] Have colored pencils or markers ready (at minimum: red, green, blue, yellow, black, white)
- [ ] Load a high-resolution photo on your computer before class (a face or animal works great)
- [ ] Know how to zoom in on an image on your projector/screen (browser zoom works fine — open image in Chrome and Ctrl/Cmd + zoom)
- [ ] Draw the RGB table on the board *before* students arrive (saves time)
- [ ] Optional: Bookmark [https://www.color-hex.com](https://www.color-hex.com) — useful for showing custom RGB mixes

---

## Facilitation Notes by Section

### Warm-Up: The Zoom Demo (5 min)

**Goal:** Create curiosity. Students should be surprised when the photo "breaks apart."

**Best practices:**
- Use a photo with a face — students are wired to notice faces and the pixelation is dramatic
- Don't explain what's happening until *after* they've had time to wonder
- Let students name what they see ("squares," "blocks," "boxes") before you say "pixel"

**If tech fails:** Skip the demo and draw a rough pixel grid on the board instead. Works fine.

**Potential student response:** Some students will already know about pixels. Great! Ask them to explain it in their own words first, then build on it.

---

### Direct Instruction: Images Are Numbers (10 min)

**Key concepts to land (in order):**
1. Pixel = picture element = one colored square
2. Every color = three numbers (R, G, B), each 0–255
3. A whole image = a big grid of these number triplets

**Common confusion points:**
- Students often think 0 means "a lot" (because zero in math is nothing, but here "Red: 0" means no red at all). Be explicit: *higher number = more of that color.*
- Students may ask "why 255?" — the short answer is that 8 bits of binary data can hold values from 0 to 255 (256 possible values). You don't need to go deep here; it's fine to say "that's just the range computers use for color channels."
- Some students will ask about "other colors" like brown, gray, pink. Use the whiteboard and [color-hex.com](https://www.color-hex.com) to show that *any* color is a mix of R, G, B values. Brown ≈ (139, 69, 19), gray ≈ (128, 128, 128), etc.

**Board setup recommendation:**

```
PIXEL = picture element = one colored square
Every pixel has: R   G   B  (each 0–255)

Black  = (0,   0,   0)
White  = (255, 255, 255)
Red    = (255, 0,   0)
Green  = (0,   255, 0)
Blue   = (0,   0,   255)
Yellow = (255, 255, 0)  ← mix of R + G!
Purple = (128, 0,   128)
```

Leave this on the board for the entire activity — students will reference it constantly.

---

### Pixel Art Activity (20 min)

**Pacing guide:**
- 0–2 min: Distribute sheets, explain the two parts quickly
- 2–12 min: Part 1 (pixel art coloring)
- 12–20 min: Part 2 (encoding as numbers)

**Part 1 facilitation:**
- Circulate and ask: "How many total pixels does your image have?" (Answer: 100 for the 10×10 grid)
- For students who finish quickly: challenge them to count how many pixels are each color
- If students are being too artistic (shading, gradients): gently remind them that real pixels are one flat color — no blending!

**Part 2 facilitation:**
- The 4×4 encoding section can feel tedious — that's intentional! Students should feel the weight of "300 numbers for just 100 pixels"
- Help students who are stuck by pointing at the color reference chart on the activity sheet
- Encourage the decode challenge if time allows — it's fun and reinforces the concept powerfully

**Differentiation:**
- **Struggling students:** Have them just encode a 2×2 section (4 pixels = 12 numbers total). That's enough to get the concept.
- **Advanced students:** Ask them to figure out what RGB values would give them *brown* or *skin tone*. Let them hypothesize.

---

### Discussion + Debrief (10 min)

**Suggested discussion flow:**

**Q1: "What surprised you?"**
Common answers: "I didn't know every color was three numbers," "I didn't realize there were so many pixels," "I'm surprised it works at all."
→ Validate all of these. They're all right!

**Q2: "How might a computer learn to recognize what's in a photo?"**
Students may say:
- "It memorizes what colors go together" → Partially right! Guide toward: it learns *patterns* of numbers
- "It compares to examples it's seen before" → Great intuition! That's basically supervised learning.
- "I have no idea" → That's okay! Say: "That's what we'll learn in the next few lessons."

**Q3: "What could go wrong if lighting is different or the image is blurry?"**
- Different lighting = different RGB numbers for the same object
- Blurry image = pixel values averaged/mixed
- This is why AI image recognition is hard! The same dog photo looks like completely different numbers depending on the lighting.

---

### Through-Line Bridge (5 min)

**This is the most important part of the lesson.**

Read the bridge passage from the lesson plan (or your own version of it) with conviction. This is not a throwaway closure — it's what ties Module 2 together.

**Key beats to hit:**
1. Your agent is currently "blind" — it works with text only
2. By end of module, that changes
3. Images are numbers → AI can learn to read numbers → vision becomes possible
4. Lab 2.4 is coming: real image recognition with Hugging Face

**Tips:**
- Pause after "Your agent can't see yet." Let that land.
- End on an upward note: "But it will." Students should feel the anticipation.
- If students ask "what IS Hugging Face?" → "A platform where people share AI models. You'll use it in Lab 2.4 — for now, just know it's coming."

---

### Exit Ticket (5 min)

**Expected correct answers:**
1. *What is a pixel?* → The smallest unit of a digital image; a single colored square in a grid
2. *RGB values for yellow:* → (255, 255, 0)
3. *Why can't your text agent look at a photo?* → It only understands text/numbers as words, not as image data; it doesn't have a way to process or interpret an image grid

**Scoring guidance:**
- Full credit: precise, complete answers
- Partial credit: right idea, imprecise language (e.g., "yellow is red + green" is conceptually right)
- No credit: "because it's a computer" type non-answers

---

## Common Student Questions + Answers

| Question | Answer |
|----------|--------|
| "Why do we need three numbers per pixel? Why not just one?" | Because color isn't just brightness — it's a *combination* of different colored light. Three channels give us the full spectrum. |
| "What about black and white photos?" | They still use RGB! Black and white means R, G, and B are all equal values (e.g., gray = 128, 128, 128). |
| "What's the difference between pixels and megapixels?" | 1 megapixel = 1 million pixels. A 12-megapixel camera captures 12 million pixels per photo. |
| "Does my phone camera use RGB?" | Yes! And most also capture a 4th channel (Alpha = transparency) for certain file types like PNG. |
| "How does an AI actually *learn* to recognize a cat?" | Great question — that's Lesson 2.2! Short version: it sees millions of labeled photos and learns which patterns of numbers correspond to "cat." |
| "What is Hugging Face?" | A platform where researchers share trained AI models. In Lab 2.4, you'll use a model from there to give your agent vision. |

---

## Connecting to the Through-Line

This lesson is the first step in a longer arc:

```
Lesson 2.1: Images are numbers (TODAY)
    ↓
Lesson 2.2: How models learn from those numbers
    ↓
Lesson 2.3: What kinds of things models can recognize
    ↓
Lab 2.4: Connect your agent to a Hugging Face image model ← PAYOFF
```

Keep reminding students of this arc. Every lesson should feel like a step closer to something real.

---

## Pacing Adjustments

**If you're running short on time:**
- Cut the decode challenge (Part 2 bonus in the activity)
- Shorten discussion to 5 minutes
- The through-line bridge is non-negotiable — keep it even if you have to rush

**If you have extra time:**
- Show [https://www.pixilart.com](https://www.pixilart.com) — a free pixel art tool in the browser
- Have students look up their favorite color on color-hex.com and write the RGB
- Ask students to estimate: "How many numbers in a full iPhone photo?"
  - iPhone 15: 48 megapixels = 48,000,000 pixels × 3 = 144,000,000 numbers. Wow.

---

## Notes for Next Lesson

Before Lesson 2.2, students should know:
- ✅ What pixels are
- ✅ How colors are stored as RGB numbers
- ✅ That images are "just" grids of numbers
- ✅ That their agent is currently blind — and that's going to change

If any of these didn't land, spend 5 minutes reviewing at the start of 2.2.

---

*Good luck! This lesson tends to land well — the zoom demo usually gets a strong reaction, and the pixel art activity keeps energy high. Lean into the "wow, I never thought about it that way" moments. That's where the learning sticks.*
