# Accessibility Notes — How Computers See
**Module 2 | Animated Tutorial**

---

## Overview

This document covers accessibility requirements for the "How Computers See" animated tutorial video, including closed captions, alt text for all visual elements, and color contrast guidelines.

---

## 1. Closed Captions (CC)

### General Principles
- All narration must be fully captioned with accurate timestamps
- Non-speech audio (music, sound effects) should be described in brackets: `[ambient music]`, `[chime sound]`
- Captions should be positioned to avoid obscuring key visual elements; allow repositioning per WCAG 2.1 criteria
- Font: minimum 18px equivalent, white text on semi-transparent dark background (≥4.5:1 contrast ratio)
- No more than 2 lines per caption block; no more than 42 characters per line (ideal: 32)
- Reading speed: ≤160 words per minute for default display rate; allow user speed control

### Caption File Format
Provide captions in:
- **VTT (WebVTT)** — primary format for web embedding
- **SRT** — secondary format for download/offline use
- **TXT transcript** — searchable full-text version linked from course page

### Scene-by-Scene Caption Notes

**Scene 1 (0:00–0:42)**
- Caption `[soft ambient tone begins]` at 0:00
- Avoid captioning over the eye-dot animation; position captions at bottom-center
- Caption the title card: `[Title card: "How Computers See"]`

**Scene 2 (0:42–1:24)**
- When RGB sliders animate, add caption: `[Visual: RGB sliders animate, showing color mixing]`
- Hex code changes are visual-only — add caption note: `[Hex color code updates: e.g., #FF0000 for red]`

**Scene 3 (1:24–2:06)**
- Caption matrix number display: `[Visual: Grid of numbers representing pixel values, ranging from 0 (black) to 255 (white)]`
- Note the MNIST digit: `[Visual: Handwritten number 5 with overlaid pixel value grid]`

**Scene 4 (2:06–2:48)**
- Caption the comparison: `[Visual: Two cat photos shown side by side with very different pixel matrices despite same subject]`
- Robot animation: `[Visual: Cartoon robot writing and erasing rules, becoming frustrated]`

**Scene 5 (2:48–3:30)**
- Caption kernel animation: `[Visual: 3×3 filter sliding across image in grid pattern]`
- Feature map description: `[Visual: Bright response appears on feature map where edge is detected]`

**Scene 6 (3:30–4:12)**
- Caption pooling math: `[Visual: 2×2 grid with values 3, 7, 2, 9 — maximum value 9 is selected]`
- Caption funnel: `[Visual: Pipeline diagram showing data compression from image to feature vector]`

**Scene 7 (4:12–4:54)**
- Softmax equation: `[Visual: Softmax equation shown briefly as mathematical formula]`
- Probability bars: `[Visual: Bar chart showing Cat 87%, Dog 9%, Bird 4%]`
- Chihuahua/muffin image: `[Visual: Ambiguous image that could be a chihuahua or a blueberry muffin]`

**Scene 8 (4:54–5:36)**
- Backpropagation: `[Visual: Curved arrow representing error signal flowing backward through the network]`
- Loss curve: `[Visual: Graph showing decreasing error over 100,000 training steps]`
- Scale animation: `[Visual: Balance scale comparing small vs. large training datasets]`

**Scene 9 (5:36–6:18)**
- Full pipeline: `[Visual: Horizontal diagram showing complete pipeline from photo to probability output, labeled at each stage]`
- Medical example: `[Visual: Chest X-ray with "Pneumonia detected: 74%" prediction]`

**Scene 10 (6:18–7:00)**
- Eye icon: `[Visual: OpenClaw logo with greyed-out eye icon that later lights up]`
- Code snippet: Caption full code block:
  ```
  [Visual: Python code:
  from transformers import pipeline
  classifier = pipeline("image-classification")
  result = classifier("dog.jpg")
  Result: {"label": "golden_retriever", "score": 0.94}]
  ```
- ClawDawg response: `[Visual: Agent chat bubble reads "I see a golden retriever, probably ~3 years old, sitting in a park. Tail looks waggable."]`
- End card: `[End card: "Next up → Installing the Hugging Face Skill" with Module 2 progress bar]`

---

## 2. Alt Text — Visual Elements

### Images and Diagrams

| Element | Scene | Alt Text |
|---------|-------|----------|
| Eye made of dots | 1 | "An eye shape constructed from hundreds of small white dots on a black background, suggesting pixels forming a recognizable image" |
| Cat photo (full) | 1, 9 | "A photograph of a tabby cat sitting and looking at the camera" |
| Cat photo (zoomed) | 1 | "The same cat photo zoomed in until individual colored pixels are visible as distinct squares" |
| RGB slider UI | 2 | "Three horizontal slider bars labeled R, G, and B, each ranging from 0 to 255, with a colored preview square above showing the resulting mixed color" |
| Stop sign pixel grid | 2 | "A 4×4 pixel grid representation of a stop sign, showing RGB values at each position" |
| Parrot RGB channels | 3 | "A colorful parrot photo separated into three grayscale layers: the red channel, green channel, and blue channel, each shown as a grid of values" |
| Handwritten digit 5 | 3 | "A handwritten numeral 5 from the MNIST dataset, overlaid with a 28×28 grid showing grayscale pixel values from 0 to 255" |
| Two cats side by side | 4 | "Two nearly identical photos of the same cat: one centered, one shifted slightly to the right. Below each, pixel value matrices are shown, appearing visually very different despite depicting the same subject" |
| Frustrated robot | 4 | "A cartoon robot at a desk, writing rules on a clipboard then crossing them out, representing the difficulty of hand-crafted computer vision rules" |
| Kernel scanning | 5 | "A 3×3 grid of numbers (a convolutional kernel) sliding across a grayscale cat image in a left-to-right, top-to-bottom scan pattern" |
| Feature maps | 5 | "Six side-by-side grayscale maps showing where different patterns (edges, blobs, diagonals) were detected in an image" |
| Early vs deep features | 5 | "Two-panel comparison: left panel shows simple features (edges and corners detected by early network layers); right panel shows complex features (eye shapes and fur patterns detected by deeper layers)" |
| Max pooling diagram | 6 | "A 2×2 grid containing values 3, 7, 2, and 9. An arrow points to a single cell containing 9 (the maximum), representing the max pooling operation" |
| Compression funnel | 6 | "A funnel-shaped diagram showing data flowing from a full image (top) through feature maps, pooled maps, and finally a flat vector of numbers (bottom)" |
| Neural network classifier | 7 | "A diagram of a fully-connected neural network with an input layer of nodes on the left, hidden layers in the middle, and three output nodes on the right labeled Cat, Dog, and Bird" |
| Probability bars | 7 | "A horizontal bar chart showing classification probabilities: Cat 87% (green bar), Dog 9% (gray bar), Bird 4% (gray bar)" |
| Chihuahua/muffin | 7 | "A side-by-side of a chihuahua puppy and a blueberry muffin, both roughly circular and similarly colored, illustrating classifier ambiguity" |
| Training loop | 8 | "A cartoon neural network depicted as a student receiving a photo, guessing incorrectly, then receiving feedback via a looping arrow (backpropagation) that adjusts its internal settings" |
| Loss curve | 8 | "A line graph with 'Training Steps' on the x-axis (0 to 100,000) and 'Error' on the y-axis. The line starts high and curves steeply downward, eventually flattening near zero" |
| Training data scale | 8 | "A balance scale. The left side holds 100 orange cat images and tips downward (heavier/worse). The right side holds 1 million diverse cat images and tips downward (better model)" |
| Full pipeline | 9 | "A horizontal flowchart showing the full computer vision pipeline: Photo → Pixel Grid → Feature Maps → Pooled Maps → Flat Vector → Classifier → Probability Bars, with each stage color-coded and labeled" |
| OpenClaw logo (dark) | 10 | "The OpenClaw logo with a greyed-out eye icon to its right, indicating the agent does not yet have vision capabilities" |
| OpenClaw logo (lit) | 10 | "The OpenClaw logo with a glowing blue eye icon to its right, indicating the agent now has vision capabilities after installing the Hugging Face skill" |
| ClawDawg confused | 10 | "ClawDawg, the cartoon dog mascot, sitting at a desk and pawing curiously at a blank image file with a question mark thought bubble above its head" |
| ClawDawg + result | 10 | "ClawDawg looking at a photo of a golden retriever. A chat bubble shows the agent's response: 'I see a golden retriever, probably ~3 years old, sitting in a park. Tail looks waggable.'" |
| Hugging Face logo | 10 | "The Hugging Face logo: a yellow circle containing a smiling face emoji, representing the Hugging Face AI platform" |
| Code snippet | 10 | "A Python code block on a dark terminal background, showing how to use the Hugging Face transformers library to classify an image" |
| End card | 10 | "A dark end card reading 'Next up → Installing the Hugging Face Skill' with a horizontal progress bar showing the current position within Module 2" |

---

## 3. Color Contrast Guidelines

### WCAG 2.1 AA Compliance Targets
- **Normal text** (caption text, labels): minimum contrast ratio **4.5:1**
- **Large text** (titles, section headers): minimum contrast ratio **3:1**
- **UI components and graphics**: minimum contrast ratio **3:1**
- **Decorative elements** (background texture, ambient particles): exempt

### Primary Color Pairs Used in Video

| Element | Foreground | Background | Contrast Ratio | Status |
|---------|------------|------------|----------------|--------|
| Caption text | #FFFFFF (white) | #000000 80% opacity (near-black) | ~12:1 | ✅ Passes AA & AAA |
| Pipeline labels | #FFFFFF (white) | #1a1a2e (dark navy) | 15.8:1 | ✅ Passes AA & AAA |
| Probability bar (Cat/correct) | #1a1a2e (dark navy) | #81C784 (soft green) | 4.8:1 | ✅ Passes AA |
| Probability bar (other) | #1a1a2e (dark navy) | #78909C (blue-gray) | 3.9:1 | ✅ Passes AA large |
| Code block text | #E0E0E0 (light gray) | #0d1117 (near-black) | 14.1:1 | ✅ Passes AA & AAA |
| Code highlight (result) | #000000 (black) | #81C784 (soft green) | 5.5:1 | ✅ Passes AA |
| Feature map "hot" values | #FFFFFF (white) | #E53935 (warm red) | 4.6:1 | ✅ Passes AA |
| Feature map "cold" values | #FFFFFF (white) | #1565C0 (dark blue) | 8.3:1 | ✅ Passes AA & AAA |
| Loss curve line | #FFB74D (orange) | #1a1a2e (dark navy) | 6.2:1 | ✅ Passes AA |
| Title card text | #FFFFFF (white) | semi-transparent photo | Variable — ensure ≥4.5:1 with drop shadow |
| Kernel highlight glow | #4FC3F7 (electric blue) | #1a1a2e (dark navy) | 7.9:1 | ✅ Passes AA & AAA |

### Color-Coding Conventions (Consistent Across Video)

To prevent reliance on color alone (WCAG 1.4.1 — Use of Color):

1. **Correct prediction:** Green bar + ✓ checkmark icon (never color alone)
2. **Incorrect prediction:** Red X icon + crossed-out bar (never color alone)
3. **Feature map intensities:** Use both color AND texture/value labels in educational diagrams
4. **RGB channels:** Each channel labeled with letter (R/G/B) in addition to color coding
5. **Pipeline stages:** Each stage labeled with text AND icon in addition to color-coded background

### Red/Green Colorblindness Accommodations
The video uses red (#E53935) and green (#81C784) to indicate wrong/correct. These must NEVER be the only differentiator:
- Always pair with icons (✗ / ✓) or text labels ("Correct" / "Incorrect")
- Consider adding shape coding (circle = correct, X = incorrect) for animations

### Flashing Content (Photosensitivity)
- No element flashes more than **3 times per second** (WCAG 2.3.1 compliance)
- The "chihuahua/muffin" probability bars waver slowly (max 1 oscillation/second)
- The backpropagation arrow loop in Scene 8: ensure cycle time ≥ 1 second
- All "rapid" number count-up animations: ensure no strobing effect; use smooth increments

---

## 4. Additional Accessibility Considerations

### Audio Description (AD)
Provide an audio-described version (or audio description track) for visually-impaired learners:
- Describe all on-screen text that appears as graphics (e.g., code snippets, matrix values)
- Describe key visual transitions (e.g., "The eye icon on the OpenClaw logo lights up, now glowing blue")
- AD track should be available as an alternate audio track (not replacing main narration)

### Keyboard/Screen Reader Navigation (for Course Platform)
- Video player must support keyboard-only navigation (play/pause: spacebar, seek: arrow keys)
- Captions must be toggleable via keyboard (C key standard in most players)
- Transcript link must be adjacent to video player in DOM order
- All alt text for still images/thumbnails must be available to screen readers

### Cognitive Accessibility
- On-screen text display time: minimum 3 seconds per label, regardless of narration pace
- Key terms introduced with definition on first use (e.g., "kernel" with brief definition)
- Consistent visual language throughout: same colors, icons, and positions for recurring elements
- Scene count indicator (e.g., "Scene 5 of 10") optionally shown for learner orientation

### Language and Readability
- Narration reading level: target 8th grade (Flesch-Kincaid ≤ 65)
- Technical terms: kernel, convolution, softmax — each defined in the video and in course glossary
- Captions available in English; provide translation hook for future localization (VTT format supports multi-track)

---

## 5. Checklist for Production Team

- [ ] VTT caption file generated and proofed against narration audio
- [ ] SRT caption file exported from VTT
- [ ] Full text transcript created and linked from course page
- [ ] All still image thumbnails have alt text in course CMS
- [ ] All animated diagram descriptions added to transcript
- [ ] Code snippet in Scene 10 included in transcript as preformatted text
- [ ] Contrast ratios verified in final rendered video (use Colour Contrast Analyser on screenshots)
- [ ] Red/green pairs verified to include non-color indicators
- [ ] Flashing content reviewed at final render (no >3Hz flashes)
- [ ] Audio description track recorded and synced
- [ ] Video player tested with keyboard-only navigation
- [ ] Video player tested with VoiceOver (macOS) and NVDA (Windows)
- [ ] Mobile caption rendering tested at 375px viewport

---

*Accessibility Notes v1.0 | ClawDawg | March 2026*
*Standards reference: WCAG 2.1 AA | Section 508 | EN 301 549*
