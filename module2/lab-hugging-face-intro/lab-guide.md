# Lab 2.4 — Hugging Face Intro + Connect Vision to Your Agent

> **MODULE 2 CAPABILITY UNLOCK** 🔓  
> This is the big one. By the end of this lab, your agent will be able to *see*. You'll explore the world's biggest AI model library, try out real computer vision and audio models, and then wire one of them directly into your personal OpenClaw agent. Let's go.

**Time:** ~70 minutes  
**Difficulty:** ⭐⭐⭐ (Intermediate)  
**Pairs with:** Lessons 2.1–2.5

---

## 🎯 What You'll Accomplish

- Explore Hugging Face — the "GitHub for AI models"
- Run 5 real AI models (3 vision, 2 audio) directly in your browser
- **Connect a vision model to your OpenClaw agent as a custom skill**
- Test it live: send your agent an image, get a description back
- Update your Agent Design Journal with your agent's new power

---

## Part 1 — Hugging Face Exploration (30 min)

### 1.1 What Is Hugging Face? (5 min)

Think of GitHub as a place where developers share code. **Hugging Face** is that, but for AI models. Thousands of researchers, companies, and students upload their trained models there so anyone can use them.

Key things to know:
- **Models** — pre-trained AI brains you can download or call via API
- **Spaces** — live demo apps where you can try models right in the browser
- **Datasets** — collections of training data (the food that fed the models)
- **The Inference API** — a way to send data to a model and get results back *without* downloading anything

🌐 **Go to:** [huggingface.co](https://huggingface.co)

Take 2 minutes to click around. Notice the search bar, the trending models, and the "Spaces" tab at the top.

---

### 1.2 Vision Models — 3 to Try (15 min)

Click **Spaces** in the top nav, then search for each model type below. Try each one with your own images!

> 💡 **Tip:** You can drag any image from Google Images into most Spaces. Or use the sample images provided.

#### Vision Model 1 — Image Classification
**What it does:** Looks at an image and gives it a label ("cat", "car", "pizza")  
**Search for:** `image classification`  
**Recommended Space:** Look for one using `google/vit-base-patch16-224` or similar

Try it with:
- A photo of your pet or a random animal
- A food photo
- Something in your classroom

**Record your results** on your Model Exploration Worksheet.

---

#### Vision Model 2 — Object Detection
**What it does:** Finds *multiple* things in an image and draws boxes around them  
**Search for:** `object detection`  
**Recommended Space:** Look for YOLO or DETR-based demos

Try it with:
- A street scene (lots of cars, people, signs)
- Your classroom or desk
- A sports photo

**Record your results** on your Model Exploration Worksheet.

---

#### Vision Model 3 — Image Captioning
**What it does:** Writes a sentence describing what's in an image — like giving sight a voice  
**Search for:** `image captioning`  
**Recommended Space:** Look for `Salesforce/blip-image-captioning-large` or `nlpconnect/vit-gpt2-image-captioning`

Try it with:
- A landscape photo
- A photo of people doing something
- Something funny or weird

**⭐ This is the one we'll connect to your agent in Part 2!**

**Record your results** on your Model Exploration Worksheet.

---

### 1.3 Audio Models — 2 to Try (10 min)

#### Audio Model 1 — Speech-to-Text
**What it does:** Listens to spoken audio and writes out the words  
**Search for:** `speech recognition` or `whisper`  
**Recommended Space:** Look for OpenAI Whisper demos

Try it with:
- Record yourself speaking a sentence
- Try speaking in a different accent or speed
- Try it with background noise

**Record your results** on your Model Exploration Worksheet.

---

#### Audio Model 2 — Sound Classification
**What it does:** Listens to a sound and identifies what it is (dog bark, clapping, music, etc.)  
**Search for:** `audio classification`  
**Recommended Space:** Look for `MIT/ast-finetuned-audioset` demos

Try it with:
- Clap your hands near your mic
- Play a short music clip
- Make an animal sound

**Record your results** on your Model Exploration Worksheet.

---

### 1.4 Reflection — Compare to Teachable Machine (5 min)

Think about what's different between Teachable Machine (Lab 2.3) and what you just did on Hugging Face.

| | Teachable Machine | Hugging Face |
|---|---|---|
| **Who trains the model?** | You do! | Researchers/companies |
| **Training data needed?** | Yes — you provide it | No — already trained |
| **How customized is it?** | Very (your data) | General purpose |
| **How powerful is it?** | Limited (your laptop) | Very powerful (huge servers) |
| **Best for...** | Your specific problem | General tasks |

💬 **Quick discussion:** When would you use Teachable Machine vs. Hugging Face? Share with a partner.

---

## Part 2 — Connect Vision to Your Agent (40 min) 🔓

This is the capability unlock. You're going to wire a Hugging Face model into your OpenClaw agent as a **custom skill**. When it's done, you can send your agent an image and it will describe what it sees.

### 2.1 Get Your Hugging Face API Key (5 min)

To call a Hugging Face model from code, you need an API key (like a password that tells Hugging Face "it's really me").

1. Go to [huggingface.co](https://huggingface.co) and create a free account (or log in)
2. Click your profile picture → **Settings**
3. Click **Access Tokens** in the left menu
4. Click **New token**
5. Name it `openclaw-vision`, set role to **Read**
6. Click **Generate a token**
7. **Copy the token** — it starts with `hf_`

⚠️ **Keep this private!** Don't share it, don't put it in public files. Your teacher will show you where to store it safely.

---

### 2.2 Create the Vision Skill (20 min)

You'll create a new skill folder in OpenClaw. Follow the **Skill Creation Guide** (separate document) for detailed step-by-step instructions with code.

Here's the big picture of what you're building:

```
You send image URL
    ↓
Your agent receives message
    ↓
Agent calls vision skill
    ↓
Skill sends image URL to Hugging Face API
    ↓
Hugging Face runs image captioning model
    ↓
Model returns description
    ↓
Agent sends description back to you! 🎉
```

**Your skill will live at:**  
`/Users/[yourname]/.openclaw/workspace/skills/hf-vision/`

It needs two files:
- `SKILL.md` — instructions telling your agent how/when to use the skill
- `scripts/caption.sh` — the actual code that calls Hugging Face

See the **Skill Creation Guide** for the exact code.

---

### 2.3 Test Your Vision Skill (10 min)

Once your skill is created, test it!

**Test 1 — Basic test:**
Send your agent this message:
> "What's in this image? https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"

**Expected result:** Your agent should describe a cat!

**Test 2 — Try your own image:**
Find any image URL online (right-click an image → Copy image address) and ask your agent to describe it.

**Test 3 — Creative test:**
Try a confusing or abstract image. How well does the model do?

---

### 2.4 Document in Your Agent Design Journal (5 min)

Use the **Agent Journal Update Template** (separate document) to record this new capability.

Key things to write:
- What your agent can do now that it couldn't do before
- How it works (in your own words)
- What you'd want to build next with this capability

---

## 🏁 Wrap-Up

You just did something real. You:
1. Explored the world's largest AI model library
2. Ran 5 state-of-the-art models with zero setup
3. Built a custom skill that gives your agent vision
4. Connected it end-to-end and tested it

**Update your Agent Journey Tracker** — you've unlocked the Vision capability! 👁️

---

## 🔍 Going Further (Optional Challenges)

- **Level up:** Try connecting an *object detection* model instead of captioning
- **Creative:** Ask your agent to describe artworks — does it understand art?
- **Technical:** Look at the Hugging Face API docs — what other parameters can you send?
- **Multi-modal:** What would it take to combine vision + speech? Sketch the flow.

---

## 📋 Checklist

Before you're done, make sure you can check all of these:

- [ ] Tried 3 vision models on Hugging Face Spaces
- [ ] Tried 2 audio models on Hugging Face Spaces
- [ ] Completed the Model Exploration Worksheet
- [ ] Created your `hf-vision` skill folder
- [ ] Successfully tested your agent describing an image
- [ ] Updated your Agent Design Journal
- [ ] Updated your Agent Journey Tracker (Vision unlocked!)
