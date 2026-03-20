# Skill Creation Guide
## Build the `hf-vision` Skill for Your OpenClaw Agent

> **What is a skill?** A skill is like a special tool you give your agent. Your agent already knows how to chat, search the web, and remember things. Now you're going to give it a brand new power: **vision** — the ability to look at an image and describe what it sees.
>
> Think of it like downloading a new app. Your phone doesn't know how to edit videos until you install a video editor app. After this guide, your agent won't know how to see... until you install this skill!

---

## 🗺️ Overview — What You're Building

Here's what will happen when your agent has this skill:

```
You                         Your Agent                    Hugging Face
  |                              |                              |
  |-- "What's in this image?" -->|                              |
  |   [image URL]                |                              |
  |                              |-- API call with image URL -->|
  |                              |                              |-- runs model
  |                              |<-- "a cat sitting on a     --|
  |                              |    wooden table"             |
  |<-- "I see: a cat sitting  ---|                              |
  |    on a wooden table"        |                              |
```

**The skill has two parts:**
1. `SKILL.md` — tells your agent *when* and *how* to use the skill (written in plain English!)
2. `scripts/caption.sh` — the actual code that talks to Hugging Face

---

## 📁 Step 1 — Create the Skill Folder

Open a terminal and run these commands one at a time:

```bash
# Go to your skills folder
cd ~/.openclaw/workspace/skills

# Create the new skill folder and its scripts subfolder
mkdir -p hf-vision/scripts

# Go into the skill folder
cd hf-vision
```

✅ **Check:** Run `pwd` — it should say something like `/Users/yourname/.openclaw/workspace/skills/hf-vision`

---

## 📝 Step 2 — Create the SKILL.md File

The `SKILL.md` file is like a job description. It tells your agent:
- What the skill is for
- When to use it
- How to call the script
- What to do with the results

Create the file:

```bash
# Open a text editor for SKILL.md
# (your teacher will show you which editor to use — nano, VS Code, etc.)
nano SKILL.md
```

**Paste in this content** (you can copy it exactly — but read it so you understand what each part does!):

```markdown
# hf-vision — Image Captioning via Hugging Face

## What This Skill Does
Describes the contents of an image URL using the Hugging Face image captioning API.
Use this skill whenever the user sends an image URL and asks what's in it,
what they're looking at, or wants a description of an image.

## When to Use This Skill
Trigger phrases:
- "What's in this image?"
- "What do you see?"
- "Describe this picture"
- "What is this?" (followed by an image URL)
- Any message containing an image URL (http/https ending in .jpg, .png, .gif, .webp)

## How to Use This Skill

Run the caption script with the image URL as an argument:

    bash ~/.openclaw/workspace/skills/hf-vision/scripts/caption.sh "[IMAGE_URL]"

Replace [IMAGE_URL] with the actual URL from the user's message.

## Interpreting Results

The script will return a JSON object. The caption is in the `generated_text` field.
Report it naturally: "I can see: [caption]" or "Looking at that image, I see [caption]."

If you get an error, let the user know the image couldn't be loaded and suggest
they try a different URL.

## Example

User: "What's in this image? https://example.com/cat.jpg"
You run: bash ~/.openclaw/workspace/skills/hf-vision/scripts/caption.sh "https://example.com/cat.jpg"
Script returns: [{"generated_text": "a tabby cat sitting on a red cushion"}]
You say: "I can see a tabby cat sitting on a red cushion! 🐱"
```

Save the file (in nano: press `Ctrl+X`, then `Y`, then `Enter`).

---

## 💻 Step 3 — Create the Caption Script

This is the actual code that talks to Hugging Face. It's a **bash script** — a file full of terminal commands.

```bash
# Create and open the script file
nano scripts/caption.sh
```

**Paste in this content:**

```bash
#!/bin/bash
# hf-vision/scripts/caption.sh
# Calls the Hugging Face image captioning API and returns the caption
#
# Usage: bash caption.sh "https://example.com/image.jpg"
# Returns: JSON with generated_text field

# ──────────────────────────────────────────────
# CONFIGURATION
# ──────────────────────────────────────────────

# The Hugging Face model we're using
# nlpconnect/vit-gpt2-image-captioning is free and fast
MODEL="nlpconnect/vit-gpt2-image-captioning"

# Build the API URL
# The Hugging Face Inference API follows this pattern:
# https://api-inference.huggingface.co/models/[model-name]
API_URL="https://api-inference.huggingface.co/models/${MODEL}"

# ──────────────────────────────────────────────
# GET THE IMAGE URL FROM THE COMMAND LINE
# ──────────────────────────────────────────────

# $1 means "the first argument you passed to this script"
IMAGE_URL="$1"

# Check: did we actually get an image URL?
if [ -z "$IMAGE_URL" ]; then
  echo '{"error": "No image URL provided. Usage: caption.sh <image_url>"}'
  exit 1
fi

# ──────────────────────────────────────────────
# GET THE API KEY
# ──────────────────────────────────────────────

# We store the API key as an environment variable named HF_API_TOKEN
# Your teacher will show you how to set this up safely
HF_TOKEN="${HF_API_TOKEN:-}"

if [ -z "$HF_TOKEN" ]; then
  echo '{"error": "HF_API_TOKEN environment variable not set. Ask your teacher for setup help."}'
  exit 1
fi

# ──────────────────────────────────────────────
# DOWNLOAD THE IMAGE
# ──────────────────────────────────────────────

# We need to download the image to send it to the API
# mktemp creates a safe temporary file that auto-deletes
TMPFILE=$(mktemp /tmp/hf-vision-XXXXXX.jpg)

# curl downloads the image from the URL
# -s = silent (no progress bar)
# -L = follow redirects
# -o = save to file
curl -s -L -o "$TMPFILE" "$IMAGE_URL"

# Check if the download worked
if [ ! -s "$TMPFILE" ]; then
  echo '{"error": "Could not download image from URL. Check that the URL is valid and publicly accessible."}'
  rm -f "$TMPFILE"
  exit 1
fi

# ──────────────────────────────────────────────
# CALL THE HUGGING FACE API
# ──────────────────────────────────────────────

# This is the important part! We're sending an HTTP POST request to Hugging Face.
# Think of it like filling out a form and submitting it — but in code.
#
# -s = silent
# -X POST = this is a POST request (we're sending data, not just reading)
# -H "Authorization: ..." = our API key (like showing an ID card)
# -H "Content-Type: ..." = telling HF we're sending image data
# --data-binary = the actual image file contents
# "$API_URL" = where to send it

RESPONSE=$(curl -s \
  -X POST \
  -H "Authorization: Bearer ${HF_TOKEN}" \
  -H "Content-Type: application/octet-stream" \
  --data-binary "@${TMPFILE}" \
  "$API_URL")

# ──────────────────────────────────────────────
# CLEAN UP AND RETURN RESULT
# ──────────────────────────────────────────────

# Delete our temporary image file
rm -f "$TMPFILE"

# Print the response from Hugging Face
# Your agent will read this and extract the caption
echo "$RESPONSE"
```

Save the file (`Ctrl+X`, `Y`, `Enter`).

---

## 🔐 Step 4 — Set Up Your API Key Safely

Your Hugging Face API key is like a password — it needs to be stored safely, not written in plain text files.

Your teacher will help with this step, but here's what's happening:

We store the key as an **environment variable** — a named value that lives in your terminal session, not in any file.

```bash
# Your teacher will give you the exact command, but it looks like this:
export HF_API_TOKEN="hf_your_token_here"
```

To make this permanent (so it works every time you open a terminal), add it to your shell profile:

```bash
# For most Macs, edit ~/.zshrc
echo 'export HF_API_TOKEN="hf_your_token_here"' >> ~/.zshrc
source ~/.zshrc
```

⚠️ **Important:** Replace `hf_your_token_here` with your actual token from Hugging Face. Never share this with anyone!

---

## ✅ Step 5 — Make the Script Executable

Before your agent can run the script, you need to give it "execute permission" — like telling the computer "yes, this file is a program you're allowed to run."

```bash
# Make the script executable
chmod +x ~/.openclaw/workspace/skills/hf-vision/scripts/caption.sh
```

---

## 🧪 Step 6 — Test the Script Directly

Before connecting it to your agent, test the script by itself:

```bash
# Test with a sample image
bash ~/.openclaw/workspace/skills/hf-vision/scripts/caption.sh \
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
```

**Expected output (something like):**
```json
[{"generated_text": "a cat sitting on a wooden surface"}]
```

If you see that, your script works! 🎉

**Common issues:**
- `HF_API_TOKEN not set` → Run the export command from Step 4
- `Could not download image` → Check your internet connection; try a different image URL
- `Loading` in the response → The model is warming up, wait 30 seconds and try again

---

## 🤖 Step 7 — Test with Your Agent

Now the fun part! Open your OpenClaw agent chat and send:

> "What's in this image? https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"

Your agent should:
1. Recognize you want image description (from the SKILL.md trigger phrases)
2. Run the caption script with that URL
3. Report back what it sees

If it works — **you did it!** Your agent can now see. 👁️

---

## 🔍 Understanding the Code — Key Concepts

### What is an API?
**API** stands for Application Programming Interface. It's a way for two programs to talk to each other. When you ordered food online, the restaurant's website talked to a payment API to charge your card. Our script talks to the Hugging Face API to get image captions.

### What is a POST request?
There are different types of requests you can make to an API:
- **GET** = "give me information" (like loading a webpage)
- **POST** = "here's some data, process it and give me a result"

We use POST because we're sending an image *to* Hugging Face and asking it to analyze it.

### What is JSON?
**JSON** (JavaScript Object Notation) is a format for data. It looks like this:
```json
[{"generated_text": "a cat on a table"}]
```
The `[` `]` means it's a list. The `{` `}` means it's an object with named fields. `"generated_text"` is the field name, and `"a cat on a table"` is the value. Your agent reads this structure to find the caption.

### What is a Bearer Token?
When we write `Authorization: Bearer ${HF_TOKEN}`, we're saying "I have permission to use this API, and here's my proof." The `Bearer` part is just a standard format for API authentication. It's like showing your ticket at the door.

---

## 🚀 Optional Upgrades

Once your basic skill works, try these enhancements:

### Upgrade 1 — Better Model
Change `nlpconnect/vit-gpt2-image-captioning` to:
```
Salesforce/blip-image-captioning-large
```
This model is more accurate but slightly slower.

### Upgrade 2 — Multiple Captions
Some models return multiple candidate captions. Try printing all of them:
```bash
# After echo "$RESPONSE", add:
echo "$RESPONSE" | python3 -c "
import json, sys
data = json.load(sys.stdin)
for i, item in enumerate(data):
    print(f'Option {i+1}: {item[\"generated_text\"]}')
"
```

### Upgrade 3 — Object Detection Instead
Swap the model to:
```
facebook/detr-resnet-50
```
And update your SKILL.md trigger phrases to mention "what objects are in this image."

---

## 📋 Skill Creation Checklist

- [ ] Created `~/.openclaw/workspace/skills/hf-vision/` folder
- [ ] Created `SKILL.md` with trigger phrases and instructions
- [ ] Created `scripts/caption.sh` with the API call code
- [ ] Made the script executable with `chmod +x`
- [ ] Set up `HF_API_TOKEN` environment variable
- [ ] Tested the script directly from the terminal — got a JSON response
- [ ] Tested with your agent — it described an image correctly
- [ ] Tried at least 3 different images with your agent

---

*Great work! You just built a real AI-powered tool from scratch. That's not beginner stuff — that's engineering.*
