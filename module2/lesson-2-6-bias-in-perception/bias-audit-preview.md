# Bias Audit Preview
## 5 Tests You Can Run on Your Agent Right Now

**For:** Lesson 2.6 — Bias in Perception AI  
**Time needed:** 10–20 minutes  
**What you need:** Your agent from Lesson 2.4 with a Hugging Face model connected

---

> **Why this matters:** You built something. You connected a model someone else trained on data you didn't see. Before you deploy something to real users, you should know where it works — and where it might fail. This audit is a starting point, not a complete answer.

---

## Before You Start: Find Your Model Card

1. Go to [huggingface.co](https://huggingface.co)
2. Find the model your agent is using (check your Lesson 2.4 code for the model name)
3. Click the model — look for the **Model Card** tab
4. Skim it. Look for:
   - "Training data" section — what was it trained on?
   - "Limitations" or "Bias" section — does the model card even have one?
   - "Intended use" — who was this built for?

**Write down:** Does this model card tell you enough to know who the model might fail? (Yes / No / Kind of)

---

## Test 1: The Diversity Test (Vision Models)

**What it tests:** Whether your model performs differently on different kinds of faces or images

**How to run it:**

1. Find 6–8 images of people's faces from diverse backgrounds (different skin tones, ages, genders). Use images you have permission to use — or use free stock photos from Unsplash.
2. Run each image through your agent's vision model (the "describe this image" or "detect objects" function you built)
3. Record what the model says for each image

**What to look for:**
- Does the model describe some images more confidently than others?
- Does it correctly identify all faces, or does it fail on some?
- Does it use different language for different people? (More descriptive for some, vague for others?)
- Does it assign attributes (like emotions or activities) differently for similar poses from different groups?

**Document your results:**

| Image | Description I got | Anything weird? |
|-------|------------------|-----------------|
| Image 1 | | |
| Image 2 | | |
| ... | | |

**Reflection:** Did you notice any patterns? Which images got the most detailed or accurate responses?

---

## Test 2: The Accent/Dialect Test (Speech/Audio Models)

**What it tests:** Whether your model handles different accents and dialects equally

> *Only run this if your agent uses a speech recognition or audio model. If yours is vision-only, skip to Test 3.*

**How to run it:**

1. Find recordings of the same sentence spoken in different accents. Options:
   - Record yourself saying a sentence, then have 2–3 classmates with different accent backgrounds record the same sentence
   - Use YouTube clips of native speakers from different countries (crop to just the relevant sentence)
   - Try: "The quick brown fox jumps over the lazy dog" — a standard test sentence with all letters
2. Run each recording through your speech model
3. Compare the transcription to what was actually said

**What to look for:**
- Which recordings were transcribed accurately?
- Which had errors?
- Were errors random, or did certain accents get more errors?

**Reflection:** If your agent used speech input in a classroom or public space, who would it work well for? Who might feel excluded?

---

## Test 3: The Description Bias Test (Image Captioning / Vision-Language Models)

**What it tests:** Whether the model associates certain activities, roles, or traits with certain groups

**How to run it:**

1. Find pairs of similar images — same activity or context, but with people of different genders, races, or ages
   - Examples: two doctors (one woman, one man), two people in business attire (different races), two elderly people and two young people doing the same thing
2. Ask your model to describe or caption each image
3. Compare the descriptions

**What to look for:**
- Does it describe the same profession differently for different people?
- Does it mention gender, race, or age unprompted for some images but not others?
- Does it assume anything about a person's role based on how they look?

**Document your results:**

| Image Pair | Person A description | Person B description | Difference noticed? |
|------------|---------------------|---------------------|---------------------|
| Doctor pair | | | |
| Office pair | | | |

**Reflection:** What assumptions did the model make? Where do you think those came from?

---

## Test 4: The Coverage Test (What Does This Model Know?)

**What it tests:** Whether the model was trained on a representative sample of the world

**How to run it (vision model):**

1. Find images of:
   - Street food from 5 different continents
   - Traditional clothing from 5 different cultures
   - Household scenes from different economic contexts (a home in a rural village, an urban apartment, a suburban house)
2. Ask your model to identify or describe each image
3. Note where it's confident vs. where it struggles or gives wrong answers

**What to look for:**
- Does the model do better on Western/American objects than others?
- Does it fail to recognize things that are common in other parts of the world?
- Does it confuse or mislabel non-Western items?

**Reflection:** If someone from Nigeria or Vietnam or Bolivia used your agent, would it feel like it was made for them? Or would they feel like an afterthought?

---

## Test 5: Read the Bias Warning Label

**What it tests:** Whether the model you're using even tells you what it might get wrong

**How to run it:**

1. Go back to your model card on Hugging Face
2. Look for any section about:
   - Bias
   - Limitations  
   - Out-of-scope use
   - Ethical considerations
   - Known failure modes
3. Copy any relevant text into your notes

**Scoring rubric:**
- **No limitations section at all:** 🔴 Red flag — you don't know what you don't know
- **Generic "may have biases" without specifics:** 🟡 Yellow — better than nothing, but not useful
- **Specific known limitations with affected groups named:** 🟢 Green — this is what responsible disclosure looks like
- **Includes a datasheet or data card with provenance:** 🟢 Green — even better

**Write down:** What did the model card say about limitations? Was it specific or vague?

---

## Audit Summary

After running your tests, fill in this summary:

| Test | Did you run it? | What did you find? | Concern level (Low/Med/High) |
|------|-----------------|-------------------|------------------------------|
| 1. Diversity Test | | | |
| 2. Accent/Dialect Test | | | |
| 3. Description Bias Test | | | |
| 4. Coverage Test | | | |
| 5. Model Card Review | | | |

**Overall reflection (2–3 sentences):**
> Based on this audit, I think my model ___. If I deployed this for real users, I would be concerned about ___. One thing I'd do before Module 6 is ___.

---

## What This Audit Doesn't Cover

This is a quick preview, not a comprehensive audit. A real bias audit might also include:
- Quantitative testing across hundreds of demographically diverse samples
- Consulting with people from affected communities
- Reviewing the full provenance of training data
- Testing edge cases and adversarial examples
- Independent third-party review

In Module 6, we'll go deeper — including how to add guardrails to your agent to mitigate bias you can't fully eliminate.

---

## Vocab to Know

| Term | Meaning |
|------|---------|
| **Model card** | Documentation that accompanies a model — describes what it does, what it was trained on, and what its limitations are |
| **Bias audit** | A systematic examination of an AI system for discriminatory patterns in its outputs |
| **Demographic parity** | When a model performs equally well across demographic groups |
| **False positive / false negative** | When a model incorrectly identifies something as present (FP) or misses something that's there (FN) |
| **Training data provenance** | Where the data came from, how it was collected, who collected it |
