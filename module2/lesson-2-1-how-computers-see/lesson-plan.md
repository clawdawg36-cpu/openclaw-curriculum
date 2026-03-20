# Lesson 2.1 — How Computers See

**Module:** 2 — Teaching Your Agent to See  
**Duration:** 1 class period (50–55 minutes)  
**Grade Level:** 6–10  
**Prerequisites:** Module 1 (students have built a basic text agent)

---

## Learning Objectives

By the end of this lesson, students will be able to:

1. Explain what a pixel is and how images are made of grids of pixels
2. Describe how colors are represented as numbers (RGB values)
3. Connect the concept of digital images to how AI computer vision works
4. Articulate why their current text agent "can't see" and what would need to change

---

## Materials

- Printed or projected pixel art grids (see `pixel-art-activity.md`)
- Colored pencils or markers (at least red, green, blue + a few extras)
- A projector or large monitor for the zoom demo
- A high-resolution photo (included in activity files, or any clear close-up photo)
- Whiteboard or chart paper for notes

---

## Lesson Flow

### 🔵 Warm-Up: The Zoom Challenge (5 minutes)

**Teacher action:** Open a photo on the projector. Ask students:

> "What do you see in this image?"

Students respond with the subject (a dog, a building, a face, etc.).

Then zoom in — keep zooming until the image breaks apart into colored squares.

> "What happened? What are those squares?"

**Key reveal:** Every digital image is made of tiny colored squares called **pixels**. From far away they blend together. Up close, you can see the grid.

---

### 📘 Direct Instruction: Images Are Numbers (10 minutes)

Walk through these concepts on the whiteboard:

#### 1. What is a pixel?
- Short for **"picture element"**
- The smallest unit of a digital image
- A grid of pixels makes up every photo, screenshot, and emoji you've ever seen

#### 2. How does a pixel store color?
- Every pixel has a color described by three numbers: **R, G, B**
- **R** = Red intensity (0–255)
- **G** = Green intensity (0–255)
- **B** = Blue intensity (0–255)
- 0 = none of that color, 255 = maximum

**Examples to write on the board:**
| Color | R | G | B |
|-------|---|---|---|
| Black | 0 | 0 | 0 |
| White | 255 | 255 | 255 |
| Red | 255 | 0 | 0 |
| Green | 0 | 255 | 0 |
| Blue | 0 | 0 | 255 |
| Yellow | 255 | 255 | 0 |
| Purple | 128 | 0 | 128 |

**Discussion question:**
> "If a computer only sees numbers, what does the color 'red' actually look like to it?"

*(Answer: It looks like the number sequence 255, 0, 0 — just three numbers!)*

#### 3. Images = Grids of Number Triplets
- A 10×10 image = 100 pixels = 300 numbers
- A 1920×1080 HD photo = over 6 million numbers!
- This is how images are stored and processed by computers (and AI models)

---

### 🎨 Activity: Pixel Art + Number Encoding (20 minutes)

Students complete the hands-on activity in `pixel-art-activity.md`:

**Part 1 (10 min):** Color a pixel art grid to create an image (heart, star, or their own design)

**Part 2 (10 min):** Encode a simple 4×4 grid as RGB number triplets

See `pixel-art-activity.md` for full instructions and grid templates.

**Circulate and ask:**
- "How many pixels is your whole image?"
- "Can you find a pixel that's not pure red, green, or blue? What numbers might describe it?"
- "If a computer wanted to recognize your heart drawing, what would it actually 'read'?"

---

### 🗣️ Discussion + Debrief (10 minutes)

Bring the class back together. Ask:

1. **"What surprised you about how images work?"**
2. **"If images are just grids of numbers, how do you think a computer might learn to recognize what's in a photo?"**
   - Guide toward: it learns patterns in those numbers
3. **"What could go wrong if the lighting is different? Or the image is blurry?"**
   - Guide toward: the numbers change, making recognition harder

---

### 🌉 Through-Line Bridge: Planting the Seed (5 minutes)

Close the lesson with this bridge to the rest of the module:

---

> *"You've been building a text agent — it reads words and responds to words. But right now, your agent is 'blind.' It has no idea what an image looks like, no way to understand a photo, no ability to tell a dog from a cat in a picture.*
>
> *By the end of this module, that's going to change.*
>
> *Now you know the foundation: images are just grids of numbers. And if images are numbers... then maybe an AI can learn to read those numbers the same way it learns to read words. That's exactly what image-recognition models do — and you're going to use one.*
>
> *In Lab 2.4, you'll connect your agent to a real AI model on Hugging Face that can look at images and describe what it sees. But first, we need to understand a little more about how those models are trained and what they actually learn. That's what the next few lessons are about.*
>
> *Your agent can't see yet. But it will."*

---

### ✅ Exit Ticket (5 minutes)

Students answer on a notecard or in their notebook:

1. What is a pixel?
2. Write the RGB values for the color yellow.
3. In one sentence: why can't your text agent currently look at a photo?

---

## Assessment

| Criteria | Exceeds | Meets | Approaching |
|----------|---------|-------|-------------|
| Pixel art completed | Creative design, labeled with pixel count | Design completed | Partial completion |
| RGB encoding | All values correct with explanation | Most values correct | Attempted with errors |
| Exit ticket | Full, precise answers | Mostly correct | Partial answers |

---

## Extension / Early Finishers

- Try encoding a 6×6 grid entirely in numbers and challenge a classmate to reconstruct it
- Google "pixel art" and find an example — count how many pixels wide/tall it is
- Look up: what does a 1-bit image look like? (only black and white — 0 or 1 per pixel)

---

## Standards Alignment

- **CSTA K-12 CS Standards:** 2-DA-07 (Represent data using multiple encoding schemes), 3A-AP-15 (Justify the selection of specific control structures)
- **ISTE:** 5c (Students break problems into component parts and extract key information)

---

## Teacher Notes

- The zoom demo works best with a portrait photo at high resolution — try a face or animal photo
- Some students may already know about pixels — use them as helpers during the activity
- The RGB table on the board should stay visible throughout the activity
- If students ask about "how does the AI actually recognize things" — tell them that's exactly what Lesson 2.2 covers. This lesson is about the *input*; next lesson is about the *learning*.
