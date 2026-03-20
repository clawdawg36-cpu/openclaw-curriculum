# Teacher Guide — Lab 2.4
## Hugging Face Intro + Connect Vision Skill

> **This is the Module 2 Capability Unlock lab.** Students connect a real AI vision model to their OpenClaw agents. It's the most technically complex lab in Module 2, but the payoff is enormous — students see their agents gain genuine new capabilities.

**Recommended Grade Level:** 7–10  
**Total Time:** 70 minutes (can be split across two class periods)  
**Max Class Size for Comfortable Facilitation:** 30 students  
**Tech Required:** Laptops (one per student or pair), stable internet connection

---

## 📋 Pre-Lab Setup (Do This Before Class)

### 1. Hugging Face API Keys

**Option A — Individual student accounts (recommended)**
- Have students create free Hugging Face accounts before lab day (assign as homework)
- Students generate their own `Read`-scope access tokens
- Free accounts get limited API calls/month but sufficient for class use

**Option B — Class/teacher account**
- Create one Hugging Face account for the class
- Generate a single token and distribute it
- Risk: rate limiting if many students call simultaneously
- Set model to something lightweight like `nlpconnect/vit-gpt2-image-captioning`

**Option C — Offline-first fallback**
- Pre-download sample API responses as JSON files
- Students practice with mock data before going live
- See Appendix A for sample responses

### 2. Verify API Availability
Before class, run this test:
```bash
curl -s \
  -X POST \
  -H "Authorization: Bearer hf_YOUR_TOKEN" \
  -H "Content-Type: application/octet-stream" \
  --data-binary @/path/to/test-image.jpg \
  "https://api-inference.huggingface.co/models/nlpconnect/vit-gpt2-image-captioning"
```
Expected: `[{"generated_text":"..."}]`

If you get `{"error": "Model ... is currently loading"}` — wait 30 seconds, it's warming up. First call after idle takes ~30s.

### 3. Secure API Key Storage Setup

**Method 1 — Environment variable in .zshrc (macOS)**
```bash
echo 'export HF_API_TOKEN="hf_your_token"' >> ~/.zshrc
source ~/.zshrc
```

**Method 2 — .env file + dotenv**
Create `~/.openclaw/workspace/.env`:
```
HF_API_TOKEN=hf_your_token
```
Load in scripts with: `source ~/.openclaw/workspace/.env`

**Method 3 — School keychain/secrets manager**
If your school has a secrets management system, integrate it here.

⚠️ **Critical:** Teach students NEVER to put API keys in:
- Git repositories (even private ones)
- Public files or chat messages
- Screenshots shared with others

### 4. Test the Full Skill Ahead of Time
Run through the Skill Creation Guide yourself before class. Know where students will likely get stuck.

### 5. Prepare Backup Images
Some image URLs from the internet may break or be blocked. Prepare:
- 5–10 image URLs that definitely work (host them yourself if possible)
- One URL that reliably causes a "model loading" error (for teaching error handling)

---

## 🎯 Learning Objectives

By the end of this lab, students will be able to:

1. **Explain** what Hugging Face is and how pre-trained models differ from Teachable Machine
2. **Navigate** Hugging Face Spaces and run inference on vision and audio models
3. **Create** a new OpenClaw skill directory with SKILL.md and a bash script
4. **Make** an authenticated HTTP API call from a shell script
5. **Test** their agent's new capability end-to-end
6. **Articulate** how the skill fits into the broader AI pipeline (data → training → inference → application)

---

## ⏱️ Suggested Time Plan

| Time | Activity |
|------|----------|
| 0:00 – 0:05 | Opening hook — "What if your agent could see?" Demo |
| 0:05 – 0:10 | Intro to Hugging Face (slides or walkthrough) |
| 0:10 – 0:25 | Part 1: Vision model exploration (3 models) |
| 0:25 – 0:35 | Part 1: Audio model exploration (2 models) |
| 0:35 – 0:40 | Reflection discussion: HF vs Teachable Machine |
| 0:40 – 0:45 | Part 2 intro: walk through what they're building |
| 0:45 – 1:00 | Part 2: Skill creation (follow Skill Creation Guide) |
| 1:00 – 1:05 | Part 2: Testing + debugging |
| 1:05 – 1:10 | Agent Journal update + wrap-up celebration |

**If splitting across two class periods:**
- Day 1: Part 1 (exploration) + 1.4 reflection
- Day 2: Part 2 (skill creation) + journal update

---

## 🪝 Opening Hook

Before students open laptops, do a live demo:

1. Open your own OpenClaw agent
2. Say: "I wonder if my agent can see. Let me ask it."
3. Send: "What's in this image? [URL of a clear, interesting photo]"
4. Show the agent *failing* or saying it doesn't have that capability
5. Say: "By the end of today, your agent will be able to answer that question."

This creates the "need" that motivates the lab.

---

## 🎓 Key Teaching Points

### On Hugging Face
- Emphasize: these models were trained by researchers on *millions* of images
- Students don't need to understand the training — they're using the tool
- The API is just a way to use the tool from code
- Analogy: you don't know how a calculator works internally, but you know how to use it

### On Pre-trained vs. Custom Models
The key insight students often miss:
> Pre-trained models are **general** — they can recognize anything they were trained on. Teachable Machine models are **specific** — they only know what you taught them.

Use this example: A Teachable Machine model trained to recognize red vs. blue blocks can ONLY do that. A Hugging Face model can recognize cats, cars, landscapes, food, people, animals — anything it saw during training.

### On API Calls
Students often find the HTTP request code intimidating. Simplify it:
> "We're filling out a form (the HTTP request), attaching an image (the data), and submitting it to Hugging Face (the URL). They process it and send us back the answer."

The authentication token is their "membership card" that tells Hugging Face they're allowed to use the service.

### On the SKILL.md Design
Help students understand why SKILL.md exists:
> "Your agent reads SKILL.md to understand new tools, just like you read an instruction manual. The trigger phrases help the agent know WHEN to use the tool."

---

## 🔧 Common Issues & Solutions

### "Model is currently loading" (HTTP 503)
**Cause:** Hugging Face cold-starts models after idle periods  
**Fix:** Wait 20–30 seconds and try again. This is normal behavior.  
**Teaching moment:** Explain cold starts — like a car engine that needs to warm up.

### "HF_API_TOKEN not set"
**Cause:** Student didn't run the export command, or opened a new terminal  
**Fix:** Run `export HF_API_TOKEN="hf_..."` again; or add to `.zshrc`  
**Prevention:** Have students verify with `echo $HF_API_TOKEN` before starting Part 2.

### "Could not download image"
**Cause:** The image URL returned an error, redirect to login, or invalid response  
**Fix:** Use a different image URL; test with the Wikipedia cat image (always works)  
**Note:** Images from Instagram, Facebook, Google Photos won't work — they require login.

### Agent doesn't recognize trigger phrases
**Cause:** SKILL.md trigger phrases don't match what student typed  
**Fix:** Review SKILL.md and either adjust the phrases or have student rephrase the question  
**Teaching moment:** "Your agent is only as smart as the instructions you write for it."

### Script runs but agent doesn't use it
**Cause:** Agent may not be loading the skill properly; check skill directory structure  
**Fix:** Verify files are in `~/.openclaw/workspace/skills/hf-vision/` not somewhere else  
**Debug:** Have student run the script manually from terminal first.

### API rate limiting (HTTP 429)
**Cause:** Too many requests from the same account  
**Fix:** Wait a few minutes; switch to a different model temporarily  
**Prevention:** If using class account, stagger testing — not all students at once.

### `permission denied` when running script
**Cause:** `chmod +x` was skipped  
**Fix:** Run `chmod +x ~/.openclaw/workspace/skills/hf-vision/scripts/caption.sh`

---

## 🔐 API Key Safety — Class Discussion (5 min)

Use this as a teachable moment about digital safety:

**Discussion questions:**
1. "What would happen if someone else got your Hugging Face token?"
2. "Why shouldn't you put API keys in a GitHub repository?"
3. "What's the difference between a password and an API key?"

**Key takeaways:**
- API keys are like passwords — keep them private
- If a key is ever shared accidentally, revoke it immediately and generate a new one
- Hugging Face lets you create multiple tokens with different permissions — use the minimum needed
- `Read` scope is enough for inference; don't give more permissions than necessary

---

## 📊 Grading Rubric

### Lab 2.4 Assessment (50 points total)

**Part 1 — Exploration (20 points)**

| Criterion | Points | Evidence |
|-----------|--------|----------|
| Completed Model Exploration Worksheet with all 5 models | 10 | Worksheet submitted |
| Reflection question answers show understanding (HF vs Teachable Machine) | 5 | Written responses |
| Participation in class discussion | 5 | Teacher observation |

**Part 2 — Skill Creation (20 points)**

| Criterion | Points | Evidence |
|-----------|--------|----------|
| SKILL.md created with correct structure and trigger phrases | 5 | File inspection |
| caption.sh script created and executable | 5 | File + `ls -la` output |
| Script successfully returns JSON response (tested from terminal) | 5 | Terminal output screenshot or demo |
| Agent correctly describes at least one image | 5 | Live demo or screenshot |

**Agent Journal Update (10 points)**

| Criterion | Points | Evidence |
|-----------|--------|----------|
| Testing log completed (3+ tests documented) | 3 | Journal pages |
| Reflection questions answered thoughtfully | 4 | Written responses |
| Agent profile card updated with Vision capability | 3 | Updated card |

---

## 🎉 Celebration Moment

When students get their first successful vision response, make it a moment:
- Ask them to share in class: "What did your agent see?"
- Have students do a quick gallery share — everyone reads one caption their agent generated
- This is the payoff for the whole module — celebrate it!

---

## 🔄 Differentiation

**For students who finish early:**
- Try the object detection model upgrade (DETR/YOLO)
- Explore the Hugging Face API docs for additional parameters
- Try combining vision with TTS: agent describes an image out loud
- Research: what model was trained on, its accuracy on benchmarks, ethical concerns

**For students who struggle:**
- Pair them with a peer who's completed the basic skill
- Use the "Option C" offline mock responses to decouple learning from API issues
- Focus on understanding the concept, not the exact bash syntax
- Have them complete Part 1 fully first before attempting Part 2

**For advanced/AP students:**
- Explore the Python version of the API call
- Try the Gradio client library instead of raw HTTP
- Research model bias: how might training data affect what the model "sees"?

---

## 📚 Extension Resources

**For teachers:**
- Hugging Face free API tiers: huggingface.co/pricing
- Classroom API key management: huggingface.co/docs/hub/security-tokens
- Hugging Face for Education program: huggingface.co/education

**For students (optional further reading):**
- How BLIP (captioning model) works: arxiv.org/abs/2201.12086 (accessible abstract)
- Hugging Face "Learn" section: huggingface.co/learn
- OpenAI Cookbook has examples of similar API patterns

---

## Appendix A — Sample API Responses (Offline Fallback)

If API access fails, share these pre-recorded responses with students:

**Image: cat on a table**
```json
[{"generated_text": "a cat sitting on a wooden table next to a window"}]
```

**Image: city street**
```json
[{"generated_text": "a busy city street with cars and people walking on the sidewalk"}]
```

**Image: food plate**
```json
[{"generated_text": "a plate of pasta with tomato sauce and fresh basil leaves"}]
```

**Image: mountain landscape**
```json
[{"generated_text": "a scenic mountain landscape with snow capped peaks and a blue sky"}]
```

**Image: sports action**
```json
[{"generated_text": "two soccer players competing for the ball on a green field"}]
```

---

## Appendix B — Quick Reference Commands

Print this and keep it at the teacher station:

```bash
# Test if API token is set
echo $HF_API_TOKEN

# Test the API directly (no student setup needed)
curl -s -X POST \
  -H "Authorization: Bearer $HF_API_TOKEN" \
  -H "Content-Type: application/octet-stream" \
  --data-binary @test.jpg \
  "https://api-inference.huggingface.co/models/nlpconnect/vit-gpt2-image-captioning"

# Check if skill files exist
ls -la ~/.openclaw/workspace/skills/hf-vision/
ls -la ~/.openclaw/workspace/skills/hf-vision/scripts/

# Make script executable
chmod +x ~/.openclaw/workspace/skills/hf-vision/scripts/caption.sh

# Test skill script directly
bash ~/.openclaw/workspace/skills/hf-vision/scripts/caption.sh \
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
```

---

*This lab is the Module 2 highlight. When it works, students feel the power of what they're learning. Good luck — and enjoy their reactions when their agents describe their first image!*
