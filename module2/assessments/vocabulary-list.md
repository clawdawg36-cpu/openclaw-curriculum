# Module 2 Vocabulary List

**How Computers See — 12 Key Terms**

Study these terms before the module assessment. Each definition is written in plain language — no jargon.

---

## 1. Pixel

**What it is:** The smallest unit of a digital image. Every photo, screenshot, or video frame is made up of a grid of pixels.

**Think of it like:** A tiny colored tile in a mosaic. Up close, you see individual tiles. Step back, and you see the picture.

**In a sentence:** *"A 1920×1080 screen displays over 2 million pixels at once."*

**Why it matters for AI:** Image-recognition AI doesn't "see" a cat — it analyzes patterns across millions of pixel values.

---

## 2. RGB

**What it is:** The color system computers use. Every color on a screen is made by mixing Red, Green, and Blue light at different intensities (0–255 each).

**Think of it like:** Three spotlights (red, green, blue) shining on the same spot. Adjust each one and you get any color.

**In a sentence:** *"Pure red in RGB is (255, 0, 0); white is (255, 255, 255); black is (0, 0, 0)."*

**Why it matters for AI:** When an AI looks at an image, it sees a grid of RGB numbers — not a picture.

---

## 3. Training Data

**What it is:** The examples used to teach a machine learning model. The model learns patterns from these examples.

**Think of it like:** Flashcards for an AI. The more flashcards (with correct labels), the better it learns.

**In a sentence:** *"Our gesture classifier needed training data — hundreds of labeled photos of each hand gesture."*

**Why it matters for AI:** The quality and variety of training data determines how well the model works.

---

## 4. Classifier

**What it is:** A type of AI model that sorts inputs into labeled categories (classes).

**Think of it like:** A sorting machine at a post office — it reads the package and puts it in the right bin.

**In a sentence:** *"Our image classifier looked at a photo and decided: wave, thumbs up, or neutral."*

**Why it matters for AI:** Most practical AI tasks (spam detection, image recognition, medical diagnosis) are classification problems.

---

## 5. Accuracy

**What it is:** The percentage of predictions a model gets right. Accuracy = correct predictions ÷ total predictions.

**Think of it like:** Your score on a quiz. If you get 18/20 right, your accuracy is 90%.

**In a sentence:** *"Our model had 85% accuracy — it got the gesture wrong about 1 in 7 times."*

**Why it matters for AI:** High accuracy sounds good, but it can be misleading — especially if one class appears much more often than others.

---

## 6. Feature

**What it is:** A specific measurable property that a model uses to make predictions. For images, features might include edges, colors, textures, or shapes.

**Think of it like:** The clues a detective uses. A fingerprint, a footprint, and a hat are all features of a crime scene.

**In a sentence:** *"The AI learned to recognize a thumbs up by detecting the curved shape of a thumb pointing upward — that shape is a feature."*

**Why it matters for AI:** A model learns which features matter most during training. Bad features = bad model.

---

## 7. CNN (Convolutional Neural Network)

**What it is (simplified):** A type of AI architecture designed specifically for images. It scans images in small patches to find patterns (edges, shapes, textures), then combines those patterns into higher-level features.

**Think of it like:** Looking at a photo with a magnifying glass in small overlapping sections, then stepping back to see the whole picture.

**In a sentence:** *"CNNs are what make modern image recognition work — they're trained on millions of photos and learn to spot features automatically."*

**Why it matters for AI:** Almost every powerful image AI (face recognition, self-driving cars, medical scans) uses a CNN under the hood.

---

## 8. Spectrogram

**What it is:** A visual representation of sound over time. It shows frequency (pitch) on one axis and time on the other, with color or brightness showing volume.

**Think of it like:** A map of a song — instead of showing notes on a staff, it shows the sound's shape as a heatmap.

**In a sentence:** *"Speech recognition AI often converts audio into spectrograms and uses image-recognition techniques to identify words."*

**Why it matters for AI:** Turning sound into an image lets AI "see" speech — which is why vision AI and speech AI share a lot of the same techniques.

---

## 9. Speech Recognition

**What it is:** AI that converts spoken words into text. It listens to audio, identifies phonemes (sound units), and reconstructs words and sentences.

**Think of it like:** A very fast typist who listens and types what you say — in real time.

**In a sentence:** *"Voice assistants use speech recognition to turn 'Hey, what's the weather?' into words the AI can process."*

**Why it matters for AI:** Speech recognition is one of the most widely deployed AI systems — but it has known bias problems based on accent, dialect, and language.

---

## 10. Overfitting

**What it is:** When a model memorizes the training data so well that it fails on new examples. It learned the specifics instead of the pattern.

**Think of it like:** Studying only the exact practice problems and then getting a different version on the test. You memorized answers, not concepts.

**In a sentence:** *"Our gesture model overfit — it recognized MY wave perfectly but failed on everyone else's."*

**Why it matters for AI:** Overfitting is one of the most common problems in machine learning. More varied training data usually helps.

---

## 11. Annotation

**What it is:** The process of labeling data so a model can learn from it. For images, this means tagging them with the correct class (e.g., "wave," "thumbs up," "neutral").

**Think of it like:** Labeling photos in an album. Someone has to write "dog" under the dog photos before an AI can learn what dogs look like.

**In a sentence:** *"Before we could train our classifier, we had to annotate every image — label it with the correct gesture name."*

**Why it matters for AI:** Every supervised learning model requires annotated data. Human annotators are the invisible workforce behind AI.

---

## 12. Pre-Trained Model

**What it is:** A model that was already trained by someone else on a large dataset, then made available for others to use. You can use it as-is, or fine-tune it for your specific task.

**Think of it like:** Starting a recipe with a pre-made sauce. You didn't make it from scratch, but you can customize it for your dish.

**In a sentence:** *"Instead of training from zero, we used a pre-trained model that already knew how to detect faces and just added our own gesture classes on top."*

**Why it matters for AI:** Pre-trained models save enormous amounts of time and data. Most real-world AI starts with a pre-trained model.

---

## Quick Reference Table

| Term | 5-Word Summary |
|------|---------------|
| Pixel | Smallest unit of digital image |
| RGB | Red, Green, Blue color numbers |
| Training data | Examples used to teach AI |
| Classifier | Sorts inputs into labeled categories |
| Accuracy | Percent of correct predictions |
| Feature | Measurable property AI uses |
| CNN | Neural net designed for images |
| Spectrogram | Visual picture of sound |
| Speech recognition | AI that converts speech to text |
| Overfitting | Memorized training, fails on new |
| Annotation | Labeling data for AI learning |
| Pre-trained model | Already-trained model, ready to use |

---

## Study Tips

- **Pixel + RGB** go together — an image is a grid of pixels, each pixel is an RGB number.
- **Training data + annotation** go together — you can't have one without the other.
- **Overfitting** is the enemy of generalization — more varied data is the cure.
- **CNN + spectrogram** connect vision and audio — both work by finding patterns in 2D grids.
- **Pre-trained model + classifier** are your tools — you can use pre-trained models as powerful classifiers.

---

*12 terms. Module 2: How Computers See.*
