# Case Studies: Bias in Perception AI

**For:** Lesson 2.6 — Bias in Perception AI  
**Use:** Small group study, jigsaw activity, or independent reading

---

## Case Study 1: Facial Recognition and Race

### What Happened

In 2018, MIT researcher Joy Buolamwini and Timnit Gebru published *"Gender Shades"*, a landmark study auditing commercial facial recognition systems from IBM, Microsoft, and Face++.

Their findings were stark:

| Group | Error Rate |
|-------|------------|
| Lighter-skinned men | 0.8% |
| Lighter-skinned women | 7.1% |
| Darker-skinned men | 12.0% |
| **Darker-skinned women** | **34.7%** |

The best-performing systems were up to **34 percentage points more accurate** on lighter-skinned male faces than darker-skinned female faces. The same software. The same task. Wildly different results depending on who you are.

### The Real-World Stakes

This isn't just a statistical curiosity. Facial recognition is deployed in:
- Law enforcement (matching suspects to databases)
- Airport security and border control
- Hiring software (scanning recorded video interviews)
- Building access and time-tracking systems

In 2019, Robert Julian-Borchak Williams became the first known American wrongfully arrested because of a facial recognition match. He is Black. The system matched his face to a grainy surveillance video. Police arrested him in front of his children. He was held for 30 hours before the case was dropped.

Other documented wrongful arrests due to facial recognition errors have also involved Black men.

### Why Did This Happen?

Training datasets for facial recognition were dominated by lighter-skinned faces — often because they were assembled from datasets like Labeled Faces in the Wild (LFW), which skewed heavily white and male. The models got very good at the faces they saw most. They got much worse at the faces they rarely saw.

### Key Terms

- **Training data:** The examples a model learns from
- **Benchmark dataset:** A standard dataset used to measure how good a model is — if the benchmark is biased, "high accuracy" can be meaningless for underrepresented groups
- **Algorithmic bias:** When a system's outputs are systematically skewed against certain groups

### Discussion Questions

1. Joy Buolamwini says she first noticed facial recognition couldn't detect her face — and had to put on a white mask for it to work. What does it tell you about who was in the room when these systems were built?

2. If you were a police department and you knew facial recognition had a 34.7% error rate for one group, would you use it to arrest people? What would "responsible use" look like, if it's possible at all?

3. The companies whose systems failed said they'd improved their models after the study came out. How would you verify that claim?

4. Think about your agent's vision capabilities. What kinds of faces has the model you're using probably seen most? How would you test it?

### Go Deeper

- Buolamwini, J. & Gebru, T. (2018). *Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification.* Proceedings of Machine Learning Research. (Available free: gendershades.org)
- *Coded Bias* (2020) — documentary film following Buolamwini's work (Netflix)
- ACLU: "Wrongful Arrests Tied to Facial Recognition" (search: ACLU facial recognition wrongful arrest)

---

## Case Study 2: Speech Recognition and Accents

### What Happened

In 2020, researchers at Stanford published a study examining how well five major automatic speech recognition (ASR) systems — from Apple, Amazon, Google, IBM, and Microsoft — performed on African American Vernacular English (AAVE) compared to white American English.

The average word error rate for white speakers: **19%**  
The average word error rate for Black speakers: **35%**

Some systems had error rates approaching **50% for Black speakers** — essentially unusable for transcription.

### What This Means in Practice

When speech recognition fails, it's not just an inconvenience. Speech-to-text powers:
- Closed captioning (accessibility for Deaf/HoH communities)
- Medical transcription (doctors dictating notes)
- Legal transcription (court proceedings)
- Voice assistants in schools, workplaces, public spaces
- 911 call centers (in some jurisdictions)

A system that's twice as bad at understanding you doesn't just slow you down — it can exclude you entirely from services that others take for granted.

### Beyond AAVE

Accent and dialect bias extends far beyond English variations:
- Voice assistants struggle significantly more with Indian English, Nigerian English, Scottish English, and Australian English compared to American English
- Systems trained on "English" often treat American English as the default and everything else as deviation
- Non-native English speakers — roughly 1.5 billion people — are systematically disadvantaged
- Languages outside the top 10 most spoken are often barely supported at all

In 2019, a viral thread documented Alexa repeatedly misunderstanding a Scottish man, while an Australian woman reported that Siri defaulted to American English pronunciation "corrections" that made her feel her voice was wrong.

### Why Did This Happen?

Speech recognition models train on recorded speech. The recordings have historically come from:
- Academic datasets (often recorded in labs, with recruited participants who were often students at Western universities)
- Voice assistant training data (skewed toward early adopters — disproportionately affluent, English-speaking, tech-savvy users)
- Audiobooks and podcasts (which skew heavily toward "broadcast standard" American/British English)

Dialects, accents, and code-switching patterns that don't appear in training data can't be learned from training data. The model isn't failing maliciously — it simply never encountered those speech patterns enough to learn them.

### Key Terms

- **Word Error Rate (WER):** The percentage of words a speech recognition system gets wrong. Lower is better.
- **African American Vernacular English (AAVE):** A systematic, rule-governed dialect of English with distinct grammatical, phonological, and lexical features — not "incorrect" English
- **Code-switching:** Moving between languages or dialects depending on context — a common and sophisticated linguistic skill that ASR systems often struggle with

### Discussion Questions

1. If a voice assistant is twice as accurate for one group of people, is it the same product for everyone? What are the ethical implications of releasing it?

2. How might poor speech recognition affect a student who speaks AAVE trying to use a voice-to-text tool for homework? What about a patient trying to use a voice assistant to manage their health?

3. The researchers suggest that the fix is more diverse training data. Who should be responsible for collecting it? Who should pay?

4. When you think about the agent you built: if you added a voice input feature, who would it work well for? Who might it fail?

### Go Deeper

- Koenecke et al. (2020). *Racial disparities in automated speech recognition.* PNAS. (Available free online)
- Search: "AAVE speech recognition bias Stanford 2020"
- Listen: "How Siri Came to Understand Different Accents" (NPR, various episodes on voice AI and language)

---

## Case Study 3: Image Classification and Western Data Bias

### What Happened

When researchers began testing image recognition models outside of Western contexts, they found consistent, systematic failure. Models that achieved near-human accuracy on standard benchmarks turned out to be trained on a very particular slice of the world.

A 2021 study found that models trained on ImageNet — the benchmark dataset that powered the deep learning revolution — performed measurably worse on images from non-Western countries, particularly for everyday object categories.

The reason: ImageNet was built primarily from images crawled from the internet circa 2009–2011. Internet access at that time was concentrated in wealthy, Western, English-speaking countries. The images of "kitchens," "markets," "homes," "food," and "people" reflected that.

### Concrete Examples

**Food:** Ask an image classifier to identify food from West African, South Asian, or Southeast Asian cuisines. It will often fail, guess wrong, or label items with embarrassingly incorrect or offensive descriptions. Models are excellent at identifying "sandwich," "pizza," and "burger." They're much worse at identifying *injera*, *idli*, or *bánh mì* — foods eaten by hundreds of millions of people.

**Household objects:** Models struggle with objects common in non-Western households that weren't well-represented in training data. A basic kitchen tool in one culture may be unknown to a model trained on Western kitchens.

**People and faces:** Beyond the facial recognition case study above, image captioning systems have been shown to produce biased descriptions — more likely to associate men with certain activities (sports, work) and women with others, more likely to associate certain races with certain roles. These patterns come directly from biases in the images they were trained on.

**Language and text:** Optical character recognition (OCR) systems — the tech that reads text in images — perform significantly worse on non-Latin scripts. A camera scanning a menu in Arabic, Korean, or Hindi may fail where the same camera scanning English text would succeed.

### The "Benchmark Illusion"

Here's the deeper problem: when we say a model is "95% accurate," we mean it's 95% accurate on a test dataset. If that test dataset has the same biases as the training data, we're just measuring how well the model learned the bias — not how well it works in the real world.

This is called **Goodhart's Law** in action: when a measure becomes a target, it ceases to be a good measure.

### Why Did This Happen?

Three compounding factors:

1. **Who has internet access:** The images used to build training sets came from where images were being uploaded. For a long time, that meant wealthy, connected countries.

2. **Who does the labeling:** Many datasets were labeled by workers on platforms like Amazon Mechanical Turk — again, skewing toward English-speaking, Western labelers who brought their own cultural assumptions to ambiguous images.

3. **What "good" means:** Model performance was measured on benchmark datasets with the same biases as the training data. A model that failed on African kitchens but excelled on American kitchens still looked "accurate" — because American kitchens dominated the benchmark.

### Key Terms

- **ImageNet:** A large visual database of over 14 million images organized into categories. It powered the modern deep learning revolution starting around 2012 and remains a key benchmark.
- **Benchmark:** A standard test used to measure AI performance. Only as fair as the test itself.
- **Training data provenance:** Where training data came from, how it was collected, who collected it, who labeled it.

### Discussion Questions

1. If you built an AI to help people identify food for dietary tracking, and it only recognized Western foods accurately, who could use it? Who would be excluded?

2. The companies that built these models didn't intend to exclude anyone. Does intent matter? Who bears responsibility?

3. What would a "truly global" training dataset look like? Who would need to be involved? What would it cost?

4. Look at the Hugging Face model card for the model you connected to your agent. Does it describe what data it was trained on? Does it mention limitations or known failure modes?

### Go Deeper

- Shankar et al. (2017). *No Classification Without Representation: Assessing Geodiversity Issues in Open Data Sets for the Developing World.* (Available: arxiv.org)
- Search: "ImageNet geographic bias" and "Dollar Street dataset" (an intentional effort to create more diverse image data)
- Search: "Excavating AI" — a critical analysis of the politics of image training datasets

---

## Synthesis Questions (for full-class debrief)

1. All three case studies involve AI systems that "work" — they have high accuracy in testing. How can a system be both "accurate" and harmful?

2. Across all three cases, who tends to be underrepresented in training data? Who tends to benefit most from current AI systems?

3. If you were going to build a perception AI system that worked fairly for everyone, what would you do differently from what the companies in these case studies did?

4. These failures became known because researchers studied them. Many failures are never studied. What does that mean for AI systems being deployed right now?
