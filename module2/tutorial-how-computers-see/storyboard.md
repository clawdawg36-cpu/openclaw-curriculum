# How Computers See — Storyboard
**Module 2 | Animated Tutorial | 10 Scenes × ~42 seconds**

---

## Scene 1 — Hook: A World of Numbers
**Timestamp:** 0:00–0:42 | **Duration:** 42s

### Panel 1A (0:00–0:08)
**Visual:** Black screen. A single white dot appears center-frame. Pulses gently.
**Animation:** Fade in dot from black. Slow pulse (2x scale, 1s cycle).
**Audio cue:** Soft ambient tone begins.
**Narration:** *"You're looking at this screen right now, and your brain is doing something extraordinary."*

### Panel 1B (0:08–0:20)
**Visual:** More dots appear, scattered. They begin to drift toward each other, organizing. Slowly form the silhouette of an eye — outline only, dots as pixels.
**Animation:** Particle system, ~200 dots converge in ~8 seconds.
**Narration:** *"In a fraction of a second, it's turning photons into meaning — colors, shapes, faces, words. It's been training for years to do that."*

### Panel 1C (0:20–0:32)
**Visual:** The eye-silhouette of dots resolves into a photo of a cat. Zoom in smoothly until individual pixels are visible as colored squares.
**Animation:** Cross-dissolve from dot-art to photo; then zoom 1x → 12x over 5s.
**Narration:** *"Computers don't come with that. They have to learn it."*

### Panel 1D (0:32–0:42)
**Visual:** Pull back to show full cat photo. Title card: **"How Computers See"** appears in clean sans-serif over the image.
**Animation:** Title fades in, holds 3s, then slides up as scene 2 begins.
**Narration:** *"But here's the wild thing... Let's start at the very beginning."*

---

## Scene 2 — Pixels and RGB
**Timestamp:** 0:42–1:24 | **Duration:** 42s

### Panel 2A (0:42–0:52)
**Visual:** Extreme close-up of pixel grid. One pixel highlighted with a glow. Three labeled slider bars appear below: **R | G | B**.
**Animation:** Highlight bounces to pixel, sliders slide in from bottom.
**Layout:** Pixel (top 60%), sliders (bottom 40%).
**Narration:** *"Every digital image is made of pixels — tiny squares of color."*

### Panel 2B (0:52–1:05)
**Visual:** RGB sliders animate interactively. R→255 (pixel turns red), then G→255 (turns yellow), then B→255 (turns white), then all→0 (black), then back to a natural skin tone mix.
**Animation:** Smooth slider transitions, ~2s each state.
**Color labels:** Show hex code updating as sliders move.
**Narration:** *"Red. Green. Blue. Each channel goes from 0 to 255."*

### Panel 2C (1:05–1:15)
**Visual:** A 4×4 pixel grid of a simple stop sign (red octagon on white). Each pixel shows its RGB triple: e.g., (255,0,0) for red pixels.
**Animation:** Numbers count up as pixels appear.
**Narration:** *"Mix them and you get any color in the visible spectrum."*

### Panel 2D (1:15–1:24)
**Visual:** Counter: "4×4 image = 48 numbers." Then jump cut to label: "1080p photo = 6,220,800 numbers." Second label pulses for emphasis.
**Animation:** Numbers count up rapidly, then freeze with emphasis bounce.
**Narration:** *"So a tiny 4-by-4 image is already 48 numbers... That's what a computer actually sees."*

---

## Scene 3 — Images as Matrices
**Timestamp:** 1:24–2:06 | **Duration:** 42s

### Panel 3A (1:24–1:34)
**Visual:** A colorful photo of a parrot. Three layers peel apart from it: Red channel (grayscale heatmap), Green channel, Blue channel — spread out horizontally like a 3D fan.
**Animation:** Layer separation with subtle depth/shadow. Each layer labeled.
**Narration:** *"Mathematically, an image is a matrix — a grid of numbers. Actually, three matrices stacked on top of each other."*

### Panel 3B (1:34–1:46)
**Visual:** One channel (Red) shown full-screen as a grid of numbers, 8×8. Bright regions show high values (200+), dark regions show low values (0–30).
**Animation:** Numbers appear left-to-right, top-to-bottom, quickly.
**Color coding:** High values in warm red, low values in cool blue.
**Narration:** *"Each layer is called a 'channel.' The red channel tells you how much red is at each position."*

### Panel 3C (1:46–1:58)
**Visual:** MNIST-style handwritten "5" — black and white, zoomed in. Grid overlaid showing 28×28 matrix. Select cells labeled: 0 (black), 255 (white), 128 (gray).
**Animation:** Grid lines draw in; numbers pop in for key cells.
**Narration:** *"For grayscale, you only need one channel. This is the famous MNIST dataset — handwritten digits."*

### Panel 3D (1:58–2:06)
**Visual:** Counter: "28 × 28 = 784 numbers." Followed by a montage of 9 different handwritten 5s from the dataset — all look slightly different.
**Narration:** *"784 numbers total. That seems simple. But to a computer trying to read your handwriting? It's everything it knows."*

---

## Scene 4 — The Problem with Raw Pixels
**Timestamp:** 2:06–2:48 | **Duration:** 42s

### Panel 4A (2:06–2:18)
**Visual:** Two near-identical cat photos side by side. Cat A is centered; Cat B is shifted 20px right. Their pixel matrices appear beneath each — visually very different despite same cat.
**Animation:** Matrices highlighted with mismatched colors to emphasize difference.
**Narration:** *"Here's the problem: if you just compare raw pixel values, a cat on the left looks completely different from the same cat on the right."*

### Panel 4B (2:18–2:28)
**Visual:** Checkerboard split-screen. Pixels from Cat A and Cat B compared position by position. Mismatches glow red.
**Animation:** Position-by-position comparison, red flashes on mismatch.
**Narration:** *"The numbers change even when the meaning doesn't."*

### Panel 4C (2:28–2:38)
**Visual:** Two handwritten "A"s — one blocky, one loopy. Their raw pixel representations shown as grids, colored differently.
**Animation:** Simple cut. A small robot looking confused between the two.
**Narration:** *"And handwritten letters? One person's 'A' looks nothing like another's in raw pixel form."*

### Panel 4D (2:38–2:48)
**Visual:** A robot with a clipboard writing "Rule #1: look for curves here..." then erasing, rewriting, crossing out. Visually stressed.
**Animation:** Writing and crossing out in loop, speeding up until robot throws clipboard.
**Narration:** *"What we really needed was a way for the computer to learn what features matter. That's where convolutional neural networks come in."*

---

## Scene 5 — Convolutional Layers as Feature Detectors
**Timestamp:** 2:48–3:30 | **Duration:** 42s

### Panel 5A (2:48–3:00)
**Visual:** A grayscale cat photo. A glowing 3×3 grid (the kernel) slides across it from top-left to bottom-right, leaving a trail of processed values.
**Animation:** Kernel slides smoothly in raster scan pattern. Highlighted computation shown briefly: kernel values × patch values → sum.
**Narration:** *"A convolutional layer is like a flashlight scanning across an image. It uses a small filter — called a kernel — usually 3 by 3 pixels."*

### Panel 5B (3:00–3:10)
**Visual:** The kernel passes over a horizontal edge in the image. The output map shows a bright response at that location.
**Split screen:** Left = original image with kernel highlighted; Right = feature map building up.
**Animation:** Bright dot appears on feature map as kernel crosses the edge.
**Narration:** *"Each kernel is looking for a specific pattern. One kernel might respond strongly to horizontal edges."*

### Panel 5C (3:10–3:20)
**Visual:** 6 kernels shown simultaneously, each scanning in parallel, each producing a different feature map. Maps shown as color-coded overlays: edges (blue), blobs (yellow), diagonals (red).
**Animation:** Parallel processing shown with slight timing offsets for visual clarity.
**Narration:** *"Run the image through 64 different kernels and you get 64 feature maps. The network is learning to notice 64 different things."*

### Panel 5D (3:20–3:30)
**Visual:** Two-panel comparison. Layer 1 features: edges, corners, blobs. Layer 5 features: eye shapes, fur patterns, nose structure. Labels appear.
**Animation:** Simple side-by-side reveal.
**Narration:** *"Early layers detect simple stuff — edges, corners. Deeper layers combine those into complex features — an eye, a snout. Layer by layer."*

---

## Scene 6 — Pooling and Compression
**Timestamp:** 3:30–4:12 | **Duration:** 42s

### Panel 6A (3:30–3:42)
**Visual:** A 4×4 feature map. A 2×2 window highlights the top-left quadrant, showing values: 3, 7, 2, 9. The maximum (9) is extracted to a new, smaller 2×2 grid.
**Animation:** Window highlights → max value highlights → arrow to output grid.
**Numbers:** Large, clearly readable. Background dark.
**Narration:** *"After each convolutional layer, we usually apply 'pooling.' Take a 2 by 2 block, keep only the maximum. Slide. Repeat."*

### Panel 6B (3:42–3:52)
**Visual:** Full feature map (8×8) → max pool applied → output (4×4). Then again: 4×4 → 2×2. Size reduction visualized.
**Animation:** Grid shrinking with a smooth "compression" effect (tiles collapse).
**Labels:** "Before: 64 values" → "After: 16 values"
**Narration:** *"This makes the data smaller — less computation downstream."*

### Panel 6C (3:52–4:02)
**Visual:** The "same cat, different position" problem from Scene 4. Re-shown. Now with pooling applied — both cats produce the same (or very similar) pooled feature map. Check mark appears.
**Animation:** Before/after comparison. Match highlighted in green.
**Narration:** *"More importantly, it makes the network position-invariant. A whisker detected slightly left or right? Still a whisker."*

### Panel 6D (4:02–4:12)
**Visual:** A funnel/pipeline graphic. Full image → multiple feature maps → pooled maps → single flat vector (row of numbers).
**Animation:** Data flows down through funnel, condensing at each stage.
**Labels:** Each stage labeled.
**Narration:** *"By the end of several conv-pool layers, we've transformed an image into a compact, meaningful list of features. Now we're ready to decide."*

---

## Scene 7 — How a Classifier Assigns Probabilities
**Timestamp:** 4:12–4:54 | **Duration:** 42s

### Panel 7A (4:12–4:22)
**Visual:** The flattened feature vector from Scene 6 flows into a neural network diagram. Nodes in fully-connected layers light up in sequence. Output layer shows 3 nodes: Cat, Dog, Bird.
**Animation:** Activation flows forward through the network.
**Node style:** Circles with pulse effect on activation.
**Narration:** *"The final layers are fully connected. This is where classification happens."*

### Panel 7B (4:22–4:32)
**Visual:** Three raw output values → softmax arrow → three probability bars. Cat: 87%, Dog: 9%, Bird: 4%. Bars fill up proportionally.
**Animation:** Bars fill simultaneously from 0.
**Color coding:** Cat bar green, others gray.
**Equation:** Softmax formula shown briefly as a small inset, then fades.
**Narration:** *"We apply softmax to turn raw outputs into probabilities. They all add up to exactly 100%."*

### Panel 7C (4:32–4:42)
**Visual:** A famous "chihuahua or muffin" ambiguous image. Probability bars for "Dog" and "Muffin" both hover around 48-52%, fluctuating.
**Animation:** Bars waver, undecided. A "?" appears over the image.
**Narration:** *"The network isn't just saying 'cat.' It's saying 'I'm 87% confident.' Sometimes it's genuinely uncertain — and that's useful."*

### Panel 7D (4:42–4:54)
**Visual:** A confident prediction (a clear photo of a golden retriever → "Dog: 99%") vs. a tough photo (dog in snow, partial view → "Dog: 61%, Wolf: 28%, Fog: 11%").
**Animation:** Simple side by side. Confidence bars pulse.
**Narration:** *"A well-calibrated classifier tells you when it doesn't know."*

---

## Scene 8 — Why Training Data Matters
**Timestamp:** 4:54–5:36 | **Duration:** 42s

### Panel 8A (4:54–5:04)
**Visual:** A neural network represented as a student at a desk. A photo of a cat is shown. Student guesses: "Dog?" Big red X appears. A curved arrow (backpropagation) loops back, nudging the network weights. "Adjusting..." appears.
**Animation:** Guess → error → backprop arrow → adjustment. Repeat 3x, with student's guesses improving.
**Narration:** *"The network starts with random weights — basically guessing. It learns by seeing its mistakes."*

### Panel 8B (5:04–5:14)
**Visual:** A loss curve graph. X-axis: Training steps (0 to 100,000). Y-axis: Error. Curve starts high (big error), drops steeply, then plateaus near zero. Key milestones labeled: "Step 1,000: still guessing," "Step 50,000: getting it," "Step 100,000: solid."
**Animation:** Curve draws itself in real time.
**Narration:** *"Do that millions of times across millions of images, and the network converges on what makes a cat a cat."*

### Panel 8C (5:14–5:24)
**Visual:** A scale. Left side: small dataset — 100 orange cats only. Right side: 1M diverse cat photos (different breeds, lighting, angles). A test photo of a black cat: left scale predicts wrong, right scale predicts correctly.
**Animation:** Scale tips to the right. Check marks and X marks appear.
**Narration:** *"But the network can only learn from what it's seen. Train on only orange cats? It might fail on black ones."*

### Panel 8D (5:24–5:36)
**Visual:** Montage of diverse training images: cats of all colors/breeds, different lighting, indoor/outdoor, various angles. Each new image shown briefly, building a mosaic.
**Animation:** Mosaic builds up tile by tile, fast.
**Narration:** *"More data, more diversity, better results. This is why big AI models take so much compute — they're absorbing the world."*

---

## Scene 9 — Putting It All Together
**Timestamp:** 5:36–6:18 | **Duration:** 42s

### Panel 9A (5:36–5:48)
**Visual:** Full end-to-end pipeline diagram. Horizontal flow: Photo → Pixel Grid → Feature Maps → Pooled Maps → Flat Vector → Classifier → Probability Bars.
**Animation:** Diagram draws itself left-to-right. Each stage appears with a label pop-in.
**Style:** Clean, minimal, color-coded by stage type.
**Narration:** *"Let's run the full pipeline one more time, fast."*

### Panel 9B (5:48–5:58)
**Visual:** A new image enters (dog photo). Flows through the full pipeline. Each stage lights up as it processes. Output: "Dog: 92%."
**Animation:** Same pipeline, new image, real-time flow animation.
**Narration:** *"A photo enters. Pixels → features → probabilities. The answer comes out the other side."*

### Panel 9C (5:58–6:08)
**Visual:** Three more examples in quick succession: street sign → "Stop: 99%"; X-ray → "Pneumonia detected: 74%"; satellite image → "Forest: 88%."
**Animation:** Quick cuts, each running through abbreviated pipeline. Confidence bars flash.
**Narration:** *"The same architecture powers Google Photos, medical imaging, self-driving cars."*

### Panel 9D (6:08–6:18)
**Visual:** All three examples shown together in a 3-panel grid. Bold text over black: "The math is learnable. The intuition is accessible."
**Animation:** Panels fade to black. Text lingers 3s.
**Narration:** *"The math is learnable. The intuition is accessible. And now you have both."*

---

## Scene 10 — The Teaser: OpenClaw Gets Eyes *(Through-Line Preview Scene)*
**Timestamp:** 6:18–7:00 | **Duration:** 42s

### Panel 10A (6:18–6:26)
**Visual:** Black screen. A terminal cursor blinks in the center. Single line appears: `$ openclaw run`. Pause. Then the OpenClaw logo fades in beside it, with a small eye icon greyed out next to the logo.
**Animation:** Cursor blinks 3x, command types itself, logo dissolves in.
**Style:** Dark terminal aesthetic. Monospace font.
**Narration:** *"Here's something to sit with. Your OpenClaw agent — the one you've been building — doesn't have eyes yet."*

### Panel 10B (6:26–6:34)
**Visual:** ClawDawg mascot (cartoon dog) seated at a desk, staring at a blank image file. Paws it curiously. "?" bubble above head. Photo is sent to the agent: agent returns "I can't see images yet."
**Animation:** Simple character animation. Thought bubble fades in.
**Narration:** *"Right now, if you send it an image, it can't tell you what's in it. It's working purely in text."*

### Panel 10C (6:34–6:46)
**Visual:** Hugging Face logo fades in (the smiling face emoji logo). Then a code snippet appears on screen:
```python
from transformers import pipeline
classifier = pipeline("image-classification")
result = classifier("dog.jpg")
# → {"label": "golden_retriever", "score": 0.94}
```
**Animation:** Code types itself in. Result line highlights in green.
**Narration:** *"By the end of Module 2, you'll install the Hugging Face skill — and your agent will classify images, describe photos, and understand the visual world."*

### Panel 10D (6:46–7:00)
**Visual:** ClawDawg now has the Hugging Face skill loaded. A photo of a golden retriever appears. Agent responds in a chat bubble: *"I see a golden retriever, probably ~3 years old, sitting in a park. Tail looks waggable."* The eye icon on the OpenClaw logo lights up — now glowing.
**Animation:** Chat bubble types itself. Eye icon pulses and turns on. Slow zoom out to full logo.
**End card:** "Next up → **Installing the Hugging Face Skill**" with progress bar showing Module 2 position.
**Narration:** *"The math you just learned? That's running under the hood every time it does that. Your agent is about to gain its vision. Let's build that together."*

---

## Production Notes

### Animation Style
- **Overall aesthetic:** Clean, modern "explainer video" style (Kurzgesagt-adjacent but simpler)
- **Color palette:** Dark background (#1a1a2e), accent colors: electric blue (#4FC3F7), warm orange (#FFB74D), soft green (#81C784)
- **Typography:** Primary — Inter/DM Sans; Code — JetBrains Mono
- **Transitions:** Smooth dissolves (0.3s) between panels; hard cuts only when emphasizing contrast

### Pacing Notes
- Scenes 1–4: Slightly slower pacing, more pause time — foundational concepts
- Scenes 5–7: Slightly faster, more complex material — visuals carry more load
- Scene 10: Slower, let the teaser breathe — emotional beat

### Key Visual Motifs to Maintain Consistency
1. **The glowing kernel** (Scene 5) — reuse in Scene 9 pipeline
2. **ClawDawg mascot** — appears in Scene 4 (frustrated robot parallel), Scene 10
3. **The loss curve** — referenced in Scene 8, echoed in end card progress bar
4. **Color-coded pipeline stages** — establish in Scene 9, carry to Scene 10

### Sound Design
- Background: Soft ambient electronic (non-distracting)
- Scene transitions: Subtle "whoosh" or click
- Correct predictions: Gentle chime
- Scene 10: Transition to slightly warmer, more hopeful tone

---

*Storyboard v1.0 | ClawDawg | March 2026*
