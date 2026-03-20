# Skill Template: My Trained Model

> Copy the code block below into `skills/my-trained-model/SKILL.md` and fill in the bracketed sections.
> 
> This is the skill your OpenClaw agent will read to know how to use the model YOU trained.

---

## How to Use This Template

1. Create a folder: `skills/my-trained-model/` (rename `my-trained-model` to something meaningful, like `my-movie-classifier` or `my-emotion-detector`)
2. Create `SKILL.md` inside it and paste the template below
3. Create `scripts/classify.sh` (or `classify.py`) with your actual API call
4. Replace every `[FILL IN]` with your real info

---

## Template: SKILL.md

```markdown
# [FILL IN: Your Skill Name]
# Example: "my-movie-sentiment-model" or "my-dog-breed-classifier"

## Description

[FILL IN: 1–2 sentences about what your model does]

Example: "Classifies movie reviews as positive, negative, or neutral using a text model trained on 200 student-written reviews."

Use this skill when:
- [FILL IN: Trigger phrase 1 — when should the agent use this?]
- [FILL IN: Trigger phrase 2]
- [FILL IN: Trigger phrase 3]

Example triggers:
- "Use my trained model to classify this review: ..."
- "What does my ML4Kids model think about this text?"
- "Classify this with my custom model"

## Model Info

- **Trained with:** [ML4Kids / Teachable Machine / Hugging Face / other]
- **Model type:** [Text classifier / Image classifier / Other]
- **What I trained it to recognize:** [FILL IN: your categories/labels]
- **Approximate training examples:** [FILL IN: how many examples you used]
- **Model endpoint:** [FILL IN: your URL or describe where it lives — DON'T paste API keys here]

## How to Call It

Use the classify script:

```bash
bash skills/my-trained-model/scripts/classify.sh "[INPUT TEXT OR URL]"
```

The script outputs the predicted label and confidence score.

**Input format:** [FILL IN: text string / image URL / array of numbers]

**Output format:** 
```
Label: [predicted class] ([confidence]% confidence)
```

## Examples

```
# Example 1 — from my training data
bash skills/my-trained-model/scripts/classify.sh "This movie was absolutely incredible!"
# → Label: positive (94% confidence)

# Example 2 — something new
bash skills/my-trained-model/scripts/classify.sh "It was okay I guess"
# → Label: [FILL IN what you expect]

# Example 3 — edge case
bash skills/my-trained-model/scripts/classify.sh "[FILL IN: an ambiguous or tricky input]"
# → Label: [FILL IN what you expect, or note if it surprises you]
```

## Limitations

[FILL IN: What does your model NOT handle well?]

Examples to fill in:
- "Trained on movie reviews only — may not generalize to product reviews"
- "Only recognizes 3 categories: positive, negative, neutral"
- "Struggles with sarcasm and mixed sentiment"
- "Image model only works with clear, front-facing photos"

## Secrets

This skill uses the following secrets (stored in 1Password, NOT in this file):
- [FILL IN: e.g., "ML4Kids API key → op://Personal/ML4Kids/api-key"]
- [FILL IN: e.g., "Hugging Face token → op://Personal/HuggingFace/api-token"]

## Notes

[FILL IN: Anything else your agent should know — quirks, edge cases, tips]

---
*Skill created: [DATE]*  
*Model trained: [DATE]*  
*Training tool: [ML4Kids / Teachable Machine / Hugging Face]*
```

---

## Template: scripts/classify.sh

Choose the version that matches your path. Create it at `skills/my-trained-model/scripts/classify.sh`.

### Version A: ML4Kids Text Classifier

```bash
#!/bin/bash
# classify.sh — calls your ML4Kids text classification model

INPUT="${1:-}"

if [ -z "$INPUT" ]; then
  echo "Usage: classify.sh \"text to classify\""
  exit 1
fi

# Load secrets from 1Password (never hardcode these)
PROJECT_ID="$(op read 'op://Personal/ML4Kids/project-id' 2>/dev/null)"
API_KEY="$(op read 'op://Personal/ML4Kids/api-key' 2>/dev/null)"

if [ -z "$PROJECT_ID" ] || [ -z "$API_KEY" ]; then
  echo "Error: ML4Kids credentials not found in 1Password"
  echo "Store them at: op://Personal/ML4Kids/project-id and op://Personal/ML4Kids/api-key"
  exit 1
fi

# Call the ML4Kids API
RESPONSE=$(curl -s -X POST \
  "https://machinelearningforkids.co.uk/api/v1/classify/${PROJECT_ID}/classify" \
  -H "Content-Type: application/json" \
  -H "x-api-key: ${API_KEY}" \
  -d "{\"text\": \"$(echo "$INPUT" | sed 's/"/\\"/g')\"}")

# Parse and format output
echo "$RESPONSE" | jq -r '.[0] | "Label: \(.class_name) (\((.confidence * 100) | round)% confidence)"' 2>/dev/null \
  || echo "Error parsing response: $RESPONSE"
```

### Version B: Hugging Face Text Classifier

```bash
#!/bin/bash
# classify.sh — calls your Hugging Face inference endpoint

INPUT="${1:-}"
MODEL_ID="[FILL IN: your-username/your-model-name]"

if [ -z "$INPUT" ]; then
  echo "Usage: classify.sh \"text to classify\""
  exit 1
fi

# Load API token from 1Password
HF_TOKEN="$(op read 'op://Personal/HuggingFace/api-token' 2>/dev/null)"

if [ -z "$HF_TOKEN" ]; then
  echo "Error: Hugging Face token not found in 1Password"
  echo "Store it at: op://Personal/HuggingFace/api-token"
  exit 1
fi

# Call the Hugging Face Inference API
RESPONSE=$(curl -s -X POST \
  "https://api-inference.huggingface.co/models/${MODEL_ID}" \
  -H "Authorization: Bearer ${HF_TOKEN}" \
  -H "Content-Type: application/json" \
  -d "{\"inputs\": \"$(echo "$INPUT" | sed 's/"/\\"/g')\"}")

# Parse and format output
echo "$RESPONSE" | jq -r '.[0][0] | "Label: \(.label) (\((.score * 100) | round)% confidence)"' 2>/dev/null \
  || echo "Error parsing response: $RESPONSE"
```

### Version C: Teachable Machine (Python wrapper)

Teachable Machine models run in TensorFlow.js, so we use a small Python script:

```python
#!/usr/bin/env python3
# classify.py — calls your Teachable Machine model (image)
# Usage: python3 classify.py "https://example.com/image.jpg"

import sys
import json
import subprocess

IMAGE_URL = sys.argv[1] if len(sys.argv) > 1 else None
MODEL_URL = "[FILL IN: https://teachablemachine.withgoogle.com/models/YOUR_MODEL_ID/]"

if not IMAGE_URL:
    print("Usage: classify.py <image_url>")
    sys.exit(1)

# Node.js inline script to run TM model
node_script = f"""
const tf = require('@tensorflow/tfjs-node');
const tmImage = require('@teachablemachine/image');
const fetch = require('node-fetch');
const Canvas = require('canvas');

async function classify() {{
  const modelURL = '{MODEL_URL}model.json';
  const metadataURL = '{MODEL_URL}metadata.json';
  const model = await tmImage.load(modelURL, metadataURL);
  
  const img = await Canvas.loadImage('{IMAGE_URL}');
  const canvas = Canvas.createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  
  const predictions = await model.classify(canvas);
  const top = predictions.sort((a, b) => b.probability - a.probability)[0];
  console.log(`Label: ${{top.className}} (${{Math.round(top.probability * 100)}}% confidence)`);
}}

classify().catch(err => {{ console.error('Error:', err.message); process.exit(1); }});
"""

result = subprocess.run(['node', '-e', node_script], capture_output=True, text=True)
if result.returncode == 0:
    print(result.stdout.strip())
else:
    print(f"Error: {result.stderr.strip()}")
    sys.exit(1)
```

---

## Checklist Before You Test

- [ ] `SKILL.md` exists in `skills/my-trained-model/`
- [ ] All `[FILL IN]` sections are replaced with real content
- [ ] `scripts/classify.sh` (or `.py`) exists and is executable (`chmod +x`)
- [ ] API keys/tokens are stored in 1Password (NOT hardcoded)
- [ ] The script works when run directly from the terminal
- [ ] Agent description clearly states when to use this skill

---

*Module 4 · OpenClaw Curriculum*
