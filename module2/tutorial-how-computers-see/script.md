# How Computers See — Full Narration Script
**Module 2 | Animated Tutorial | Target Runtime: ~7 minutes**

---

## Scene 1 — Hook: A World of Numbers (0:00–0:42)

**[VISUAL: Black screen. A single glowing dot appears. Then another. Then hundreds — forming the shape of an eye.]**

**NARRATOR (warm, curious):**
You're looking at this screen right now, and your brain is doing something extraordinary. In a fraction of a second, it's turning photons into meaning — colors, shapes, faces, words. It's been training for years to do that.

Computers don't come with that. They have to learn it.

**[VISUAL: The dots resolve into pixels. Zoom out to reveal a photo of a cat — then zoom in until individual colored squares are visible.]**

But here's the wild thing: computers have gotten *remarkably* good at learning to see. And in this video, you're going to understand exactly how that works — from a single pixel all the way to a neural network saying "I'm 94% sure that's a cat."

Let's start at the very beginning.

---

## Scene 2 — Pixels and RGB (0:42–1:24)

**[VISUAL: A pixel grid zooms in. One pixel is highlighted and labeled: R, G, B with slider bars beneath each.]**

**NARRATOR:**
Every digital image is made of pixels — tiny squares of color. Your phone camera might capture twelve *million* of them in a single shot. But underneath, each pixel is just three numbers.

**[VISUAL: Sliders animate — R goes to 255, G and B to 0. The pixel turns red. Then G goes to 255, turns yellow. Then all three at 255 — white. All at 0 — black.]**

Red. Green. Blue. Each channel goes from 0 to 255. Zero means none of that color, 255 means maximum.

Mix them and you get any color in the visible spectrum. A warm sunset orange? About R:255, G:100, B:20. A deep ocean blue? R:0, G:70, B:180.

**[VISUAL: A 4×4 image of a stop sign appears. Labels show each pixel's RGB values.]**

So a tiny 4-by-4 image is already 48 numbers. A 1080p photo? Over six *million* numbers — just to describe what it looks like. That's what a computer actually sees.

---

## Scene 3 — Images as Matrices (1:24–2:06)

**[VISUAL: The pixel grid animates into a grid of numbers — a matrix. Rows and columns highlight as numbers appear.]**

**NARRATOR:**
Mathematically, an image is a matrix — a grid of numbers. Actually, three matrices stacked on top of each other: one for red, one for green, one for blue.

**[VISUAL: Three colored layers (R/G/B) peel apart from a photo, each showing its number grid.]**

Each layer is called a "channel." The red channel tells you how much red is at each position. Stack the three channels together and you reconstruct the full color image.

**[VISUAL: A grayscale image of a handwritten "5" appears, with its matrix overlaid — bright pixels near 255, dark ones near 0.]**

For grayscale, you only need one channel. This is the famous MNIST dataset — handwritten digits. Each image is just 28 by 28 numbers. 784 numbers total. That seems simple. But to a computer trying to read your handwriting? It's everything it knows.

---

## Scene 4 — The Problem with Raw Pixels (2:06–2:48)

**[VISUAL: Two nearly identical photos of cats — one slightly shifted to the right. Their pixel matrices appear side by side, looking completely different.]**

**NARRATOR:**
Here's the problem: if you just compare raw pixel values, a cat on the left side of the image looks *completely different* from the same cat on the right side.

**[VISUAL: A checkerboard-style animation showing pixel-by-pixel comparison failing as images shift.]**

The numbers change even when the *meaning* doesn't. And handwritten letters? One person's "A" looks nothing like another's in raw pixel form.

**[VISUAL: A frustrated robot bouncing between two "A"s that look different.]**

Early computer vision tried to hand-craft rules: "look for curves here, lines there." It sort of worked... but it was brittle. Every new category needed new rules.

What we really needed was a way for the computer to *learn* what features matter. That's where convolutional neural networks come in.

---

## Scene 5 — Convolutional Layers as Feature Detectors (2:48–3:30)

**[VISUAL: A small 3×3 grid slides across a larger image, leaving a "processed" version in its wake — edges start to glow.]**

**NARRATOR:**
A convolutional layer is like a flashlight scanning across an image. It uses a small filter — called a kernel — usually 3 by 3 pixels. That filter slides across the entire image, one patch at a time.

**[VISUAL: The kernel shows its numbers. It passes over an edge in the image. A bright response appears in the output map.]**

Each kernel is looking for a specific pattern. One kernel might respond strongly to horizontal edges. Another to vertical edges. Another to diagonal lines.

**[VISUAL: Multiple kernels animate in parallel, each producing its own "feature map" — shown as colored overlays.]**

The output is called a feature map — a grid showing *where* in the image that pattern appears. Run the image through 64 different kernels and you get 64 feature maps. The network is learning to notice 64 different things.

**[VISUAL: Stack of feature maps for early layer (edges, blobs) vs. deep layer (eyes, wheels, faces).]**

Early layers detect simple stuff — edges, corners, color blobs. Deeper layers combine those into complex features — an eye, a wheel, a snout. The network builds understanding layer by layer.

---

## Scene 6 — Pooling and Compression (3:30–4:12)

**[VISUAL: A large feature map shrinks as a max-pooling window slides over it, keeping only the brightest value from each region.]**

**NARRATOR:**
After each convolutional layer, we usually apply something called "pooling" — most commonly max pooling. Take a 2 by 2 block of values, keep only the maximum. Slide. Repeat.

**[VISUAL: Before/after: large feature map → smaller, more abstract version. Numbers shown.]**

This does two things. First, it makes the data smaller — less computation downstream. Second, and more importantly, it makes the network *position-invariant*. A whisker detected slightly to the left or right? Still a whisker.

**[VISUAL: The "cat shifting positions" from Scene 4, now with a check mark — the pooled features match.]**

This is how convolutional networks solve the "same cat, different position" problem. Features get detected, then pooled into a position-robust signal.

**[VISUAL: A funnel animation: full image → feature maps → pooled maps → flattened vector of numbers.]**

By the end of several conv-pool layers, we've transformed an image into a compact, meaningful list of features. Now we're ready to make a decision.

---

## Scene 7 — How a Classifier Assigns Probabilities (4:12–4:54)

**[VISUAL: A flattened vector feeds into a fully-connected neural network. Nodes light up. Output layer shows labeled bars: Cat 87%, Dog 9%, Bird 4%.]**

**NARRATOR:**
The final layers of the network are fully connected — every neuron connects to every other. This is where classification happens.

The last layer has one output node per category. And we apply a function called *softmax* to turn the raw outputs into probabilities. They all add up to exactly 100%.

**[VISUAL: Softmax equation shown briefly, then replaced with an intuitive animation: three cups, water poured in proportion to "confidence."]**

So the network isn't just saying "cat." It's saying: "I'm 87% confident this is a cat, 9% it's a dog, and 4% it might be a bird." The highest probability wins.

**[VISUAL: A tricky image — a chihuahua that looks like a muffin. Both "dog" and "muffin" bars are high. The network hesitates.]**

Sometimes the network is genuinely uncertain — and that uncertainty is useful information. A well-calibrated classifier tells you when it doesn't know.

---

## Scene 8 — Why Training Data Matters (4:54–5:36)

**[VISUAL: A neural network as a student, shown a photo labeled "CAT." It guesses wrong. Loss arrow fires back. Weights adjust. Repeat thousands of times.]**

**NARRATOR:**
None of this works without training. The network starts with random weights — basically guessing. You show it a labeled image, it makes a prediction, you calculate how wrong it was, and you nudge every weight in a direction that reduces that error. That's called *backpropagation*.

**[VISUAL: Loss curve dropping over thousands of training steps. The network's guesses gradually improving — recognizing more and more cats.]**

Do that millions of times, across millions of images, and the network's weights converge on something that genuinely represents "what makes a cat a cat."

**[VISUAL: A scale: small dataset on one side, wrong predictions. Large diverse dataset on other side — correct predictions.]**

But — and this is huge — the network can only learn from what it's seen. Train it only on orange cats? It might fail on black cats. Train it only on Western faces? It'll struggle with others. The training data *is* the world the network knows.

**[VISUAL: Diverse images: different cat breeds, lighting, angles. The network improves.]**

More data, more diversity, better results. This is why big AI models take so much compute — they're trying to absorb as much of the world as possible.

---

## Scene 9 — Putting It All Together (5:36–6:18)

**[VISUAL: End-to-end animation. Photo → pixel grid → feature maps → pooled maps → vector → classifier → probability output. Each step labeled.]**

**NARRATOR:**
Let's run the full pipeline one more time, fast.

A photo enters. It's broken into pixels — three numbers per pixel, arranged in matrices.

Convolutional layers scan for features — edges, textures, shapes — building up from simple to complex.

Pooling compresses and stabilizes those features.

A fully connected classifier reads the compact feature vector and outputs probabilities.

**[VISUAL: The pipeline runs for different images — a dog, a street sign, an X-ray — each correctly classified.]**

This same architecture — with variations — powers everything from Google Photos to medical imaging to self-driving cars.

The math is learnable. The intuition is accessible. And now you have both.

---

## Scene 10 — The Teaser: OpenClaw Gets Eyes (6:18–7:00)

**[VISUAL: Fade to a dark screen. A terminal cursor blinks. Then: the OpenClaw logo resolves, with a small eye icon appearing next to it.]**

**NARRATOR:**
Here's something to sit with.

Your OpenClaw agent — the one you've been building — doesn't have eyes yet.

**[VISUAL: ClawDawg (the mascot) looking at a blank screen, pawing at it curiously.]**

Right now, if you send it an image, it can't tell you what's in it. It's working purely in text. But that's about to change.

**[VISUAL: Hugging Face logo fades in. A code snippet appears: `from transformers import pipeline`. Then a result: `{"label": "cat", "score": 0.94}`]**

By the end of Module 2, you're going to install the Hugging Face skill — and your agent will be able to classify images, describe photos, read signs, and understand the visual world.

**[VISUAL: ClawDawg + a photo of a dog. The agent outputs: "I see a golden retriever, probably around 3 years old, sitting in a park."]**

The math you just learned? That's what's running under the hood every time it does that.

**[VISUAL: Zoom out — the eye icon is now fully lit on the OpenClaw logo.]**

**NARRATOR:**
Your agent is about to gain its vision. Let's build that together.

*[End card: "Next up → Installing the Hugging Face Skill"]*

---

## Timing Summary

| Scene | Title | Timestamp | Duration |
|-------|-------|-----------|----------|
| 1 | Hook: A World of Numbers | 0:00–0:42 | 42s |
| 2 | Pixels and RGB | 0:42–1:24 | 42s |
| 3 | Images as Matrices | 1:24–2:06 | 42s |
| 4 | The Problem with Raw Pixels | 2:06–2:48 | 42s |
| 5 | Convolutional Layers as Feature Detectors | 2:48–3:30 | 42s |
| 6 | Pooling and Compression | 3:30–4:12 | 42s |
| 7 | How a Classifier Assigns Probabilities | 4:12–4:54 | 42s |
| 8 | Why Training Data Matters | 4:54–5:36 | 42s |
| 9 | Putting It All Together | 5:36–6:18 | 42s |
| 10 | The Teaser: OpenClaw Gets Eyes | 6:18–7:00 | 42s |
| **TOTAL** | | | **7:00** |

---

*Script v1.0 | ClawDawg | March 2026*
