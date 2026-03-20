# Lab: Integrate Your Trained Model into OpenClaw

> **Module 4 — Key Lab**
> 
> You've collected data, labeled it, and trained a model. Now it's time to plug that model directly into your OpenClaw agent — giving it a capability *no other agent has* because **you** trained it.

---

## Overview

In this lab you will:
1. Export or access your trained model's endpoint
2. Write a custom OpenClaw skill that calls your model
3. Test it — ask your agent to classify something using YOUR model
4. Compare your model's output against a general-purpose model
5. Reflect on what you'd improve and retrain

**Time:** ~60–90 minutes  
**Prerequisites:** You must have a trained model from one of the Module 4 ML labs (ML4Kids, Teachable Machine, or Hugging Face/Python)

---

## Before You Build — Fill Out the Worksheet

Before writing any code, open `integration-worksheet.md` and fill it out. Planning your skill before building it will save you time and help you think clearly about what your model does.

---

## Part 1: Get Your Model Endpoint

Your model lives somewhere. An *endpoint* is just a URL (or function call) that accepts input and returns a prediction. Find yours below.

---

### 🟦 Path A: ML4Kids

ML4Kids trains models in Scratch-style blocks, but it also exposes a REST API you can call from any code.

**Step 1: Find your Project API key**
1. Log into [machinelearningforkids.co.uk](https://machinelearningforkids.co.uk)
2. Go to your project → "Make" → "Learn & Test"
3. At the top of the page, find your **API key** and **project ID**

**Step 2: Locate your model type**
- Text classifier → you'll POST text, get back label + confidence
- Image classifier → you'll POST an image URL
- Numbers → you'll POST an array of values

**Step 3: Test your endpoint manually**
```bash
curl -X POST \
  "https://machinelearningforkids.co.uk/api/v1/classify/YOUR_PROJECT_ID/classify" \
  -H "Content-Type: application/json" \
  -H "x-api-key: YOUR_API_KEY" \
  -d '{"text": "I love this!"}'
```

Expected response:
```json
[{"class_name": "positive", "confidence": 0.87}]
```

**Step 4: Note these values for your skill:**
- Base URL: `https://machinelearningforkids.co.uk/api/v1/classify/`
- Your project ID
- Your API key (store this in 1Password or `.env`, not in the skill itself)

---

### 🟩 Path B: Teachable Machine

Teachable Machine exports models you can host yourself or deploy via a public URL.

**Step 1: Export your model**
1. Open your Teachable Machine project at [teachablemachine.withgoogle.com](https://teachablemachine.withgoogle.com)
2. Click **Export Model**
3. Choose one of:
   - **Upload (shareable link)** — easiest; gives you a public URL immediately
   - **Download** — for hosting yourself (more control)

**Step 2: Copy your model URL**

After uploading, you'll see a URL like:
```
https://teachablemachine.withgoogle.com/models/ABC123XYZ/
```

This URL contains:
- `model.json` — the model architecture
- `weights.bin` — the trained weights
- `metadata.json` — your class labels

**Step 3: Test with TensorFlow.js (optional)**

If you want to test in Node.js before writing your skill:
```bash
npm install @tensorflow/tfjs-node @teachablemachine/image
```

```javascript
const tmImage = require('@teachablemachine/image');
const modelURL = 'https://teachablemachine.withgoogle.com/models/ABC123XYZ/model.json';
const model = await tmImage.load(modelURL, metadataURL);
const prediction = await model.classify(imageElement);
console.log(prediction);
```

**Step 4: Note these values for your skill:**
- Your model URL (the base, e.g., `https://teachablemachine.withgoogle.com/models/ABC123XYZ/`)
- Your class labels (from metadata.json)
- Input type: image, audio, or pose

---

### 🟨 Path C: Hugging Face Hosted Model

If you trained or fine-tuned a model and pushed it to Hugging Face, you can call it via the Inference API.

**Step 1: Find your model on Hugging Face**
1. Go to [huggingface.co](https://huggingface.co) and find your model repo
2. Note the model ID: `your-username/your-model-name`

**Step 2: Get an API token**
1. Go to [huggingface.co/settings/tokens](https://huggingface.co/settings/tokens)
2. Create a **Read** token
3. Store it in 1Password — you'll reference it in your skill

**Step 3: Test your endpoint**
```bash
curl -X POST \
  "https://api-inference.huggingface.co/models/your-username/your-model-name" \
  -H "Authorization: Bearer YOUR_HF_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"inputs": "This movie was amazing!"}'
```

Expected response (text classification):
```json
[[{"label": "POSITIVE", "score": 0.9998}]]
```

**Step 4: Note these values for your skill:**
- Inference API URL: `https://api-inference.huggingface.co/models/your-username/your-model-name`
- Your HF token (stored securely)
- Task type: text-classification, image-classification, etc.

---

## Part 2: Write Your OpenClaw Skill

Now that you know your endpoint, it's time to build the skill. Open `skill-template.md` — it has a pre-scaffolded `SKILL.md` you can customize.

**Key steps:**

1. Create a new folder in your OpenClaw skills directory:
   ```
   skills/my-trained-model/
   ```

2. Copy the template from `skill-template.md` into `skills/my-trained-model/SKILL.md`

3. Fill in:
   - **What your model does** (the description)
   - **How to call it** (the endpoint + required parameters)
   - **Example invocations** (at least 2–3 test phrases)

4. Create the script that actually calls your model:
   ```
   skills/my-trained-model/scripts/classify.sh
   ```
   (or `classify.py` if Python is easier for your path)

**Example script for ML4Kids text classifier:**
```bash
#!/bin/bash
INPUT="$1"
PROJECT_ID="$(op read 'op://Personal/ML4Kids/project-id')"
API_KEY="$(op read 'op://Personal/ML4Kids/api-key')"

curl -s -X POST \
  "https://machinelearningforkids.co.uk/api/v1/classify/${PROJECT_ID}/classify" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ${API_KEY}" \
  -d "{\"text\": \"${INPUT}\"}" | jq '.[0] | "Label: \(.class_name) (\(.confidence * 100 | round)% confidence)"' -r
```

**Example script for Hugging Face:**
```bash
#!/bin/bash
INPUT="$1"
HF_TOKEN="$(op read 'op://Personal/HuggingFace/api-token')"
MODEL_ID="your-username/your-model-name"

curl -s -X POST \
  "https://api-inference.huggingface.co/models/${MODEL_ID}" \
  -H "Authorization: Bearer ${HF_TOKEN}" \
  -H "Content-Type: application/json" \
  -d "{\"inputs\": \"${INPUT}\"}" | jq '.[0][0] | "Label: \(.label) (\(.score * 100 | round | tostring)% confidence)"' -r
```

---

## Part 3: Test Your Skill

Once your skill is saved, ask your OpenClaw agent to use it:

> "Classify this text using my trained model: *[your test input]*"

> "Use my ML4Kids model to predict the category of: *[something from your training data]*"

> "Ask my Teachable Machine model what it thinks about this image: *[image URL]*"

**Run at least 3 tests:**

| Input | Your Model's Output | Confident? (Y/N) |
|-------|---------------------|-------------------|
| (example from training data) | | |
| (example NOT from training data) | | |
| (edge case or ambiguous input) | | |

---

## Part 4: Compare Your Model vs. a General Model

Now ask your agent the **same questions** using a general-purpose model (like Claude or GPT). Compare the results.

**Discussion prompts:**
- Where did your trained model do *better*? Why?
- Where did it struggle? What might explain that?
- The general model has seen millions of examples. You gave yours maybe 50–100. What does that tell you about data?

**Example comparison table:**

| Input | Your Model | General Model (Claude) | Better? |
|-------|------------|------------------------|---------|
| | | | |
| | | | |

---

## Part 5: Reflect & Iterate

Answer these questions in your notebook or the worksheet:

1. **What would improve your model the most?**
   - More data?
   - Better labels?
   - Different categories?
   - Cleaner examples?

2. **If you retrained tomorrow, what would you do differently?**

3. **What's one task your trained model is surprisingly good at?**

4. **Complete the through-line sentence:**
   > "I just gave my agent a capability that no other agent has — because I trained it to _______________."

---

## Wrap-Up Checklist

- [ ] I found my model endpoint
- [ ] I created a skill folder and `SKILL.md`
- [ ] My agent can call my trained model
- [ ] I tested with at least 3 inputs
- [ ] I compared my model against a general model
- [ ] I wrote down what I'd improve

---

## Key Vocabulary

| Term | Meaning |
|------|---------|
| **Endpoint** | A URL your agent can send data to and get a prediction back |
| **Inference** | Using a trained model to make predictions on new data |
| **Training** | The process of teaching a model using labeled examples |
| **Confidence** | How sure the model is about its prediction (0–100%) |
| **API key** | A secret token that proves you're allowed to use a service |
| **Overfitting** | When a model memorizes training data but fails on new examples |

---

*Module 4 · OpenClaw Curriculum*
