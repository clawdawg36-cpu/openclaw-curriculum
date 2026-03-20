# Module 2 Quiz: Perception Concepts

**Topic:** How AI Sees, Hears, and Recognizes  
**Questions:** 5  
**Estimated Time:** 8–10 minutes  
**Format:** Auto-graded (multiple choice, true/false, scenario)

---

## Question 1 — Multiple Choice

**A digital image is 800 × 600 pixels. Each pixel stores color as an RGB value. How many individual color channel values does this image contain?**

- A) 480,000
- B) 1,440,000
- C) 800,600
- D) 3,000

**✅ Correct Answer: B) 1,440,000**

**Explanation:**  
Each pixel holds three values — one for Red, one for Green, and one for Blue. So: 800 × 600 = 480,000 pixels, and 480,000 × 3 = **1,440,000** total values. This is the raw numerical data a computer "sees" when it looks at an image. There's no understanding of objects or meaning — just numbers representing light intensity in each color channel.

---

## Question 2 — True/False

**True or False: An image classifier learns to recognize objects by being explicitly programmed with rules like "if it has four legs and fur, it's a dog."**

- A) True
- B) False

**✅ Correct Answer: B) False**

**Explanation:**  
Image classifiers don't use hand-written rules. Instead, they learn from **thousands of labeled examples** — images tagged with the correct answer (e.g., "dog," "cat"). During training, the model adjusts internal numerical weights based on its mistakes. Over many examples, it learns which visual patterns (edges, textures, shapes) are associated with which categories. The "rules" are never written by a human — they emerge from data.

---

## Question 3 — Multiple Choice

**Which of the following best explains why training data quality matters so much for AI classifiers?**

- A) The model only runs as fast as the slowest item in the dataset
- B) The model learns patterns from examples — biased or incomplete data leads to biased or unreliable predictions
- C) More data always means better results, regardless of what the data contains
- D) Training data is only needed to test the model, not to shape its behavior

**✅ Correct Answer: B) The model learns patterns from examples — biased or incomplete data leads to biased or unreliable predictions**

**Explanation:**  
A classifier is only as good as the data it learned from. If training images of "professional" mostly show one type of person, the model will encode that bias. If a certain category is underrepresented, the model will struggle to recognize it. This is why data curation, diversity, and labeling accuracy are critical — they directly shape what the AI "believes" about the world.

---

## Question 4 — Multiple Choice

**Speech recognition AI faces a challenge that text-based AI does not. Which of the following best describes this challenge?**

- A) Speech AI must process audio signals that include accents, background noise, speaking rate, and tone variation — all before any language understanding begins
- B) Speech AI cannot handle multiple languages
- C) Text AI is always more accurate because letters don't change meaning
- D) Speech AI requires a human to transcribe words before processing

**✅ Correct Answer: A) Speech AI must process audio signals that include accents, background noise, speaking rate, and tone variation — all before any language understanding begins**

**Explanation:**  
Text is already in a clean, symbolic form — each word is distinct. Speech is a continuous audio waveform that must first be segmented, cleaned, and converted to text (or tokens) before meaning can be extracted. Accents, ambient noise, fast talkers, homophones, and run-on words all add layers of complexity that text-based AI simply doesn't face at the input stage. This is why speech recognition requires specialized preprocessing that goes well beyond what a text model handles.

---

## Question 5 — Scenario

**A school is building two AI tools: Tool A helps students improve their essays by suggesting edits to written drafts. Tool B helps identify students in photos taken at school events.**

**Which statement best describes a key difference between how these two AI tools process information?**

- A) Both tools work the same way — they both read text and respond
- B) Tool A processes symbolic language (words and grammar); Tool B processes visual pixel data (spatial patterns in images) — they require fundamentally different model architectures and training data
- C) Tool B is simpler because images are easier to understand than text
- D) Tool A needs more training data because language has more complexity than images

**✅ Correct Answer: B) Tool A processes symbolic language (words and grammar); Tool B processes visual pixel data (spatial patterns in images) — they require fundamentally different model architectures and training data**

**Explanation:**  
Text AI (like the essay helper) works with sequences of tokens — words, punctuation, sentence structure. It's trained on text corpora and learns grammar, meaning, and style. Vision AI (like the photo identifier) works with grids of pixel values and must learn to recognize spatial features: edges, shapes, faces, poses. The two domains require different architectures (e.g., transformers for text, convolutional or vision transformers for images) and entirely different training datasets. A model trained only on text can't "see," and a model trained only on images can't "read."

---

*End of Quiz*
