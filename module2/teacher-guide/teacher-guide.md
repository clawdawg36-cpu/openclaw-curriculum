# Module 2 Teacher Guide: Give Your Agent Vision

**For Educators Without a CS or AI Background**
**Grade Level:** 6–8 | **Duration:** ~3 weeks (15 class periods)
**Last Updated:** March 2026

---

> **The big moment of this module is Lab 2.4.** Everything before it is scaffolding; everything after it is reflection. When a student's agent successfully calls a Hugging Face model and describes a photo — that's the unlock. Keep that destination in view from Day 1.

---

## Table of Contents

1. [Module Overview + Arc Context](#1-module-overview--arc-context)
2. [Prerequisites & Setup](#2-prerequisites--setup)
3. [Materials Checklist](#3-materials-checklist)
4. [Day-by-Day Pacing Guide](#4-day-by-day-pacing-guide)
5. [Facilitation Tips Per Lesson](#5-facilitation-tips-per-lesson)
6. [Differentiation Strategies](#6-differentiation-strategies)
7. [FAQ: Common Student Questions + Teacher Responses](#7-faq-common-student-questions--teacher-responses)
8. [Background Reading for Teachers](#8-background-reading-for-teachers)
9. [Cross-Subject Connections](#9-cross-subject-connections)
10. [Parent Communication Email Template](#10-parent-communication-email-template)

---

## 1. Module Overview + Arc Context

### Module 2 in the Arc: "Build Your AI Assistant"

The full curriculum is structured as a single through-line: **students build a personal AI assistant, adding capabilities module by module.** By Module 7, each student has a working agent with identity, perception, memory, and values. Module 2 is where the agent gains its first sense — vision (and hearing).

Here's where Module 2 sits in that journey:

| Module | Capability Unlock | Student's Agent After |
|--------|------------------|-----------------------|
| 1 | Identity | Has a name and personality |
| **2** | **Perception** | **Can see images and hear audio** |
| 3 | Knowledge | Has a custom knowledge base |
| 4 | Learning | Can train on new data |
| 5 | Memory | Remembers past conversations |
| 6 | Ethics | Has values and constraints |
| 7 | Deployment | Lives in the real world |

**Why this matters for your teaching:** Students sometimes feel Module 2's early lessons (pixels, convolutions, training data) are slow. Remind them — and yourself — that every concept here feeds Lab 2.4. The student who understands *why* a model struggles with unusual lighting is the student who can debug their API integration later. The conceptual scaffolding is not filler; it's preparation.

### The KEY Deliverable: Lab 2.4 — Hugging Face Skill Integration

**Lab 2.4 is the crown jewel of this module.** Everything else — how computers see, Teachable Machine, the speech recognition discussion — exists to prepare students for this moment: connecting their personal OpenClaw agent to a real Hugging Face model via a custom skill.

When Lab 2.4 works, a student can:
1. Send their agent a photo
2. Have their agent call a Hugging Face image-captioning model via API
3. Receive a description back, inside their agent's conversation interface

This is not a demo. It's not a simulation. It's a real API call to a production AI model that the student wrote code to invoke. It is genuinely impressive, and students know it.

**As a teacher, orient every lesson toward this outcome.** Ask: "How does this concept help you build the skill in Lab 2.4?" You'll find clear answers for almost everything.

### Big Ideas

1. **Machines perceive differently than humans do.** A computer doesn't "see" a cat — it sees a matrix of pixel values and learns that certain patterns of values tend to co-occur with the label "cat." That distinction matters for understanding both capabilities and failure modes.

2. **AI models are made by people, trained on data, and optimized for something specific.** Who made the data? Who labeled it? What was it optimized for? These questions apply to every model students will use in Lab 2.4.

3. **Hugging Face is a library, not a mind.** Thousands of models, built by researchers and companies around the world, hosted in one place. Understanding the model hub is a practical AI literacy skill students will use for the rest of their lives.

4. **Building is understanding.** Students don't just learn *about* computer vision — they connect a vision model to their own agent. Doing makes the concepts real.

### Learning Goals

By the end of Module 2, students will be able to:

- Explain how a computer vision model processes an image (pixels → features → predictions)
- Distinguish between image classification, object detection, and image captioning
- Describe what Hugging Face is and navigate the model hub
- Write a custom OpenClaw skill that calls a Hugging Face model API
- Test and evaluate their agent's vision outputs for accuracy and failure modes
- Discuss the limits of perception models and the ethics of surveillance AI

### Standards Alignment

| Standard | Alignment |
|----------|-----------|
| AI4K12 Five Big Ideas — Perception | Lessons 2.1, 2.2, 2.3 |
| CSTA 2-AP-10 (Use flowcharts and pseudocode) | Lab 2.3, Lab 2.4 |
| CSTA 2-AP-17 (Test and refine programs) | Labs 2.3, 2.4, 2.5 |
| CSTA 2-IC-20 (Harmful effects of computing) | Lesson 2.4, Ethics discussion |
| CCSS ELA Speaking & Listening 6-8 | Discussions throughout |
| NGSS Science & Engineering Practices | Data collection, evaluation in Labs |

---

## 2. Prerequisites & Setup

### Module 2 in the Arc: What Students Need First

**Students must have completed Module 1** before starting Module 2. Specifically:

- They should have an active OpenClaw account and have had at least one conversation with their agent
- They should understand the basic concept of training data (introduced in Module 1)
- They should have completed their Agent Design Journal entry from Module 1 (agent name + personality)

If you're starting Module 2 with students who skipped Module 1, run the abbreviated "fast-forward" orientation at the start of Day 1 (see Pacing Guide).

### For You (The Teacher)

Before Day 1:

- **Read this guide fully** — 45–60 min
- **Create your own Hugging Face account** at [huggingface.co](https://huggingface.co) — free, takes 5 minutes
- **Try Lab 2.4 yourself** before students do. Get stuck. Work through it. Your lived experience debugging the API will be invaluable when students hit the same walls.
- **Read at least one of the background readings** in Section 8
- **Watch** the 3Blue1Brown "But what is a neural network?" video (linked in Section 8) — it's 19 minutes and will give you confident vocabulary for the whole module

### Required Student Accounts

Each student needs all three of these before Day 1. Set them up in advance if possible.

| Account | URL | Notes |
|---------|-----|-------|
| Google Account | accounts.google.com | Required for Teachable Machine (Labs 2.2, 2.3) |
| Hugging Face | huggingface.co | Required for Lab 2.4 — the key lab |
| OpenClaw | Your school instance | Carried over from Module 1 |

**Hugging Face setup notes:**
- Students under 13 need parental consent per Hugging Face ToS — check your school's age policy
- Accounts are free; no credit card required
- Students will need their API token from Account → Settings → Access Tokens — have them save this somewhere safe (not on a sticky note on their screen)
- API tokens do NOT expire unless revoked, but students should treat them like passwords

**Webcam requirement:** Lab 2.3 (Teachable Machine) and Lab 2.4 require a webcam for data collection and testing. Chromebooks with built-in cameras work well. External USB webcams work as backup. If some students lack webcams, pair them with a partner — collecting data together is actually educationally richer.

### Technical Setup Checklist

**Before Day 1:**

- [ ] Test [teachablemachine.withgoogle.com](https://teachablemachine.withgoogle.com) on a student device — some school networks block it. File an IT exception request early.
- [ ] Test [huggingface.co](https://huggingface.co) — confirm it's accessible from school network
- [ ] Confirm student OpenClaw instances are accessible
- [ ] Verify webcams work on student devices (open a video call or camera app to test)
- [ ] Test the school's internet speed — Lab 2.4 makes API calls; slow networks will cause timeouts. (A simple [fast.com](https://fast.com) test is enough)
- [ ] Print or prepare digital copies of lab guides and the Lab 2.4 skill template

**Backup plans:**

- Teachable Machine blocked: Use the browser-based demo mode at teachablemachine.withgoogle.com — it doesn't require saving, so Google login is optional
- Hugging Face API slow/blocked: Pre-cache sample API responses for the demo; students can see the output even if live calls fail. Contact IT to whitelist `api-inference.huggingface.co`
- No webcam: Use a phone camera to collect images and transfer via USB or Google Drive. Pre-collected image datasets (provided in lab guide) also work.

### Room Setup

- Desks in pairs or groups of three work best — Lab 2.4 debugging benefits from peer support
- One projector setup you're comfortable with — you'll be live-demoing API calls in front of the class
- Whiteboard space to draw pixel grids and neural network diagrams (Lesson 2.1 especially)
- Charging stations: the Teachable Machine labs are GPU-intensive and drain batteries fast

---

## 3. Materials Checklist

### Physical Materials

| Item | Quantity | Used In | Notes |
|------|----------|---------|-------|
| Graph paper | 1 per student | Lesson 2.1 | For pixel grid activity |
| Colored pencils or markers | 1 set per group | Lesson 2.1 | Drawing "pixel art" |
| Index cards | 30+ per class | Lesson 2.2 | Sorting activity |
| Printed image sets (optional) | 1 per pair | Lesson 2.2 | Pre-printed photos for classification exercise |
| Lab report template (printed or digital) | 1 per student | Labs 2.3, 2.4, 2.5 | Digital preferred |
| Agent Design Journal | 1 per student | Ongoing | Carried over from Module 1 |
| Exit ticket slips | 1 per student per day | Daily | Can be index cards |

### Digital Tools

| Tool | URL | Lessons |
|------|-----|---------|
| Teachable Machine | teachablemachine.withgoogle.com | Labs 2.3, 2.4 |
| Hugging Face Model Hub | huggingface.co/models | Lesson 2.3, Lab 2.4 |
| Hugging Face Inference API | api-inference.huggingface.co | Lab 2.4 |
| OpenClaw (student instances) | Your school URL | Lab 2.4, Lesson 2.5 |
| Google Colab (optional) | colab.research.google.com | Extension activity |
| 3Blue1Brown Neural Networks video | youtube.com/3blue1brown | Teacher background (optional student) |

### Files to Distribute to Students

| File | Where to Find | When to Distribute |
|------|---------------|--------------------|
| Lab 2.3 Guide | module2/lab-image-classifier/lab-guide.md | Day 7 |
| Lab 2.3 Report Template | module2/lab-image-classifier/lab-report-template.md | Day 7 |
| Lab 2.4 Skill Template | module2/lab-sound-classifier/ (reference) | Day 11 |
| Lesson 2.5 Agent Preview Activity | module2/lesson-2-5-openclaw-sees-hears/agent-preview-activity.md | Day 13 |

### Teacher-Only Reference Files

| File | Purpose |
|------|---------|
| module2/lesson-2-4-speech-recognition/discussion-guide.md | Full discussion facilitation guide for Day 10 |
| module2/lesson-2-4-speech-recognition/ethics-preview-note.md | Context on Lesson 2.4 ethics connection |
| module2/lab-image-classifier/teacher-guide.md | Lab-specific teacher notes |

---

## 4. Day-by-Day Pacing Guide

**Total: 15 class periods (~50 min each) across 3 weeks**

### Week 1: How Machines Perceive

| Day | Lesson | Core Activity | Key Concept | Assessment |
|-----|--------|---------------|-------------|------------|
| 1 | 2.1 — How Computers See | Pixel grid activity (graph paper) | Pixels → numbers | Exit ticket: "What does a computer see when it looks at a photo?" |
| 2 | 2.1 continued | Demo: zoom in on real images, see pixel values | Features and patterns | Partner discussion: "What makes two cat photos similar to a computer?" |
| 3 | 2.2 — Image Recognition | Sorting card activity: image classification vs. object detection vs. captioning | Three types of vision tasks | Quick write: describe each type in one sentence |
| 4 | 2.2 continued | Video: How does a CNN actually work? | Convolutional neural networks (conceptual only) | Check for understanding: whiteboard sketch of CNN pipeline |
| 5 | 2.2 — Limits & Failures | Show model failures: adversarial examples, lighting changes, out-of-distribution | Failure modes and confidence scores | Discussion: "When would you NOT trust a vision model?" |

### Week 2: Train Your Own Model + Hear the World

| Day | Lesson | Core Activity | Key Concept | Assessment |
|-----|--------|---------------|-------------|------------|
| 6 | 2.3 — Teachable Machine Setup | Introduce Teachable Machine; choose categories; begin data collection | Training data, labels | Check: student has Google account logged in, has chosen 3 categories |
| 7 | Lab 2.3 — Build Image Classifier | Collect 30+ images per class; train model; first test | Training vs. testing data | Lab check-in: model is trained and making predictions |
| 8 | Lab 2.3 — Evaluate & Iterate | Test accuracy; identify failure modes; iterate data collection | Overfitting, class imbalance | Lab report: accuracy + 2 failure modes documented |
| 9 | 2.4 — Speech Recognition | Live speech-to-text demo; test with different voices | Speech recognition basics | Quick poll: who tested an accent or non-standard pronunciation? |
| 10 | 2.4 — Discussion: Who Does AI Hear? | Structured discussion using discussion-guide.md | Bias in training data | Reflection write: "Who is left out of AI systems, and why?" |

### Week 3: Connect to the World — Lab 2.4

| Day | Lesson | Core Activity | Key Concept | Assessment |
|-----|--------|---------------|-------------|------------|
| 11 | Lab 2.4 — Intro to Hugging Face | Tour the model hub; find an image-captioning model; read the API docs | What is Hugging Face? | Check: student has HF account, has generated API token |
| 12 | Lab 2.4 — Write the Skill (Part 1) | Write the skeleton of the OpenClaw skill; make first API call via Postman or curl | API calls, authentication headers | Milestone: successful API call returns any response |
| 13 | Lab 2.4 — Write the Skill (Part 2) | Wire the API response into the OpenClaw skill; test with a photo | Skill integration | **Key milestone: agent returns a caption for a photo** |
| 14 | Lesson 2.5 — Your Agent with Eyes | Agent Preview Activity: write 3 use cases for your agent now that it can see | Application of perception | Use cases shared with class |
| 15 | Review + Assessment | Module reflection; portfolio update; Agent Design Journal entry | Module synthesis | Journal entry submitted; Skill working in OpenClaw |

### Pacing Notes

**Day 12–13 are the most critical days of the module.** Budget time buffers here. If you're running behind, Days 6 or 14 are the most compressible (reduce data collection time; shorten Agent Preview to a quick pair-share). Do NOT compress Days 11–13.

**If students finish Lab 2.4 early** (some will on Day 13), have them attempt the bonus: connect an *audio* classification model using the same pattern. This foreshadows Module 4 and rewards fast finishers without leaving the class behind.

**If students are stuck on Day 13**, run the whole-class debug session (see Facilitation Tips, Lesson 2.4). Many students will have the same problem; solving it once for everyone is more efficient than 1:1 debug.

---

## 5. Facilitation Tips Per Lesson

### Lesson 2.1 — How Computers See (Days 1–2)

**The core misconception to address:** Students think computers "see" images the way we do — recognizing objects, perceiving depth, understanding context. They don't. A computer sees a grid of numbers. That's it.

**The pixel grid activity works really well.** Give students a 10×10 graph paper grid and ask them to represent the word "HI" in black and white pixels. Then swap papers — can their neighbor "read" it? Now ask: what would you tell a computer to recognize this? This makes the leap to machine learning feel intuitive.

**Go slowly on Day 1.** The number → pixel → feature → prediction chain is conceptual bedrock for everything that follows. If students don't have it here, Lab 2.4 will feel like magic instead of engineering.

**Common question:** *"Why can't the computer just look at the whole image at once?"*
Good answer: "It kind of does, but in layers. Think of it like looking at a painting: you first notice big shapes, then colors, then textures, then fine details. CNNs work the same way — early layers see edges and colors, later layers see complex shapes like 'nose' or 'wheel.'"

**Day 2 tip:** Zooming in on an actual image in a photo editing tool (or browser dev tools) to show pixel grids is more memorable than any slide. Do it live. Pick a class photo or a meme they'll recognize.

---

### Lesson 2.2 — Image Recognition (Days 3–5)

**Three task types are easy to confuse.** Use these one-sentence summaries and return to them often:
- **Classification:** "What's in this image?" → One label, whole image
- **Object detection:** "What's in this image and WHERE is it?" → Bounding boxes
- **Captioning:** "Describe this image in a sentence" → Natural language output

**The sorting card activity on Day 3** (match use cases to task types) reveals whether students understand the difference. Expect confusion between classification and captioning. The key question: "Does the output need to be structured (a category) or descriptive (a sentence)?"

**Day 5 — Failure Modes** is an underrated lesson. Showing students where models break — adversarial examples, images cropped unusually, objects in unusual lighting — builds appropriate skepticism and intellectual honesty about AI. It also directly prepares them for Lab 2.4, where their model WILL fail in interesting ways.

**Good demo:** Find the model on Hugging Face for any image classifier. Feed it a photo of a Chihuahua and see if it says "muffin." (This is a famous dataset — search "Chihuahua vs. muffin" for photos.) Students love this and it makes the point that confidence score ≠ accuracy.

---

### Lesson 2.3 — Teachable Machine Lab (Days 6–8)

**Days 6–8 are student-driven.** Your job is logistics, not lecture. Common issues:

- **Students choose categories that look too similar:** "Jeans vs. khakis" — the model won't learn. Redirect to visually distinct categories. Use the lab guide's suggested options (recyclables, hand gestures, desk objects) as defaults.
- **30 images minimum per class:** Students underestimate this. Less than 15 per class and the model basically guesses randomly. Push them to collect more.
- **The "I got 100% accuracy!" problem:** If a student has 100% training accuracy after one round, they probably overtrained on too few varied images. Ask them to test with new photos they didn't use for training. Expect the accuracy to drop dramatically.

**The iterate-and-improve loop on Day 8** is the most important learning. The model's failure modes (it's confused when the object is at an angle, or when the background changes) are data about what's missing from the training set. This is authentic ML engineering thinking.

---

### Lesson 2.4 — Speech Recognition + Discussion (Days 9–10)

**Day 9 is lighter — a live demo and brief exploration.** The real work is Day 10's discussion.

**Discussion guide:** Use the full `discussion-guide.md` file in `lesson-2-4-speech-recognition/`. It has three rounds of prompts: technical challenges, then data/design problems, then ethical implications. Don't rush to the ethics — the technical grounding makes the ethical discussion land harder.

**The Koenecke et al. (2020) study on racial disparities in ASR** is a real, peer-reviewed paper. Students often expect to debate whether this is true; tell them directly that it's documented fact. The interesting questions are why it happened and what would have to change.

**Watch for:** Students who dismiss the bias discussion ("they're just words, it doesn't matter"). The speech recognition context is good for this because accents and dialects are often tied to students' own identities. Bring it personal: "Has anyone ever had a voice assistant completely misunderstand them? What did that feel like?"

---

### Lab 2.4 — Hugging Face Skill Integration (Days 11–13)

**This is the most important facilitation block in the module. Read this section carefully.**

#### Day 11: Setting Up

The Hugging Face model hub is overwhelming at first. Students need a structured tour, not free exploration.

**Recommended sequence for the Day 11 demo:**
1. Go to huggingface.co/models
2. Filter by task: "Image-to-Text" (captioning)
3. Sort by Downloads (most popular)
4. Open `Salesforce/blip-image-captioning-base` — this is the recommended starter model; it's reliable, fast, and free-tier friendly
5. Click "API" in the model card — show students the example `curl` command
6. Walk through what each part of that command does: the URL, the Authorization header, the binary body

**API token setup — do this as a class:**
- Have everyone go to huggingface.co → Account Settings → Access Tokens
- Create a new token, role: "Read"
- Copy it — **tell students to paste it somewhere safe right now** (a notes app, not a public document). Lost tokens can be regenerated but it wastes time.

#### Day 12: First API Call

**The single most important milestone on Day 12:** Every student makes a successful API call that returns ANY response — even an error message. A 200 OK with a caption is ideal; even a 503 (model loading) response means the plumbing works.

**Use the `curl` command from the model card first.** Don't jump to writing the OpenClaw skill yet. Verify the raw API works before wrapping it in skill code. Students who skip this step and go straight to the skill lose debugging visibility.

**Common errors on Day 12:**

| Error | Cause | Fix |
|-------|-------|-----|
| `401 Unauthorized` | Wrong or missing API token | Check token in Authorization header: `Bearer <token>` |
| `503 Service Unavailable` | Model is loading (cold start) | Wait 30 seconds, try again. Add `"wait_for_model": true` to request body |
| `400 Bad Request` | Image not encoded correctly | Must be base64-encoded or sent as raw bytes; use the lab guide's helper function |
| `429 Too Many Requests` | Free tier rate limit | Wait 60 seconds; use a lighter model; consider caching |
| Empty response | Model returned but caption is empty | Try a different image; check image format (JPEG preferred) |

**If the whole class is hitting 503:** The model is cold. Switch to `Salesforce/blip-image-captioning-large` which tends to stay warm during school hours, or use the cached response fallback in the lab guide.

#### Day 13: Wiring Into the Skill

**This is the day students go from "I made an API call" to "my agent can see."**

Expect a wide spread: some students will finish in 30 minutes and start the bonus. Others will spend the whole period debugging. Both are fine.

**The whole-class debug session (run if more than 1/3 of students are stuck):**
1. Ask: "Who's getting a 401?" (hands) → fix together
2. Ask: "Who's getting a 503?" (hands) → fix together
3. Ask: "Who's getting a valid response but it's not showing in the agent?" → this is usually a skill return value issue; debug on screen

**The moment a student's agent returns a caption for a photo** is genuinely exciting. Make space for it. "Show the class" moments are powerful. Have a couple of students whose skill is working demonstrate to the room — peer success is motivating.

**Helping students who get completely stuck on the API/skill integration:**

The most common deep-stuck state is: API call works in curl, but fails inside the skill. This is almost always one of:
1. The image is being passed as a string path, not read as bytes
2. The authorization header has a typo (extra space, missing "Bearer")
3. The skill is returning before the async API call completes

Checklist to walk through with stuck students:
- [ ] Can you show me a successful curl call? (If no → go back to Day 12 curl debugging)
- [ ] Is your API token in the skill as a string, not an environment variable that hasn't been set?
- [ ] Are you reading the image file as bytes (not just passing the filename)?
- [ ] Is your skill returning the `result` from the API call (not undefined)?
- [ ] Did you test with a small JPEG? (Large images and PNGs sometimes fail silently)

**If a student is deeply blocked and Day 13 is ending:** Let them use the pre-built reference skill (provided in lab materials) to see the end result. Understanding the working code is more valuable than leaving the module without a working agent. They can revisit writing it from scratch as a take-home extension.

---

### Lesson 2.5 — Your Agent with Eyes (Day 14)

This is a reflection and synthesis day. The Agent Preview Activity asks students to write three use cases for their agent now that it can see.

**The best use cases are specific and personal.** Push back on vague ones: "Help me more" → "Look at a photo of my homework and tell me which problems I got wrong" is a use case. The specificity reveals how much students actually understand about what their agent can and can't do.

**Share-out works well as a gallery walk** (post sticky notes on a wall, students browse) or as quick 30-second partner shares. Avoid going around the room one by one — it takes too long and the later students disengage.

---

### Day 15 — Review + Assessment

**Portfolio and journal entry before anything else.** Students who haven't finished Lab 2.4 should spend this time finishing. Students who are done should write their Agent Design Journal entry.

**Key reflection prompts for the journal:**
- What surprised you about how machines see?
- Where did your model get it right? Where did it fail — and why?
- What does it mean that your agent can now perceive images?
- What would you change about your vision skill if you had more time?

---

## 6. Differentiation Strategies

### For Students Who Need More Support

**On conceptual content:**
- Use the pixel grid analogy consistently (come back to it). When in doubt, draw it.
- Pair with a stronger peer for Labs 2.3 and 2.4 — the thinking-out-loud a skilled partner does is more valuable than any explanation you can give.
- Allow voice notes or verbal reflections instead of written exit tickets.

**On Lab 2.4:**
- Provide the skill skeleton (header, function signature, return structure) with the API call section blanked out. Students who can't write the full skill from scratch can still learn to read, fill in, and debug code.
- Allow use of the pre-built reference skill as a model — studying working code is legitimate learning.
- Reduce the Lab 2.4 requirement: a successful single API call in curl (not full skill integration) earns partial credit.

**On discussion:**
- Pre-teach vocabulary: pixel, feature, label, confidence score, training data, bias. A brief glossary card at the start of each week helps students who need it.
- Sentence frames for discussions: "I think [X] because..." / "I'm not sure about this, but..." / "That connects to what [Y] said because..."

### For Advanced Students

**Extend Lab 2.3:** Can they improve their model's accuracy by addressing specific failure modes? Can they document the improvement systematically (before/after accuracy numbers)?

**Extend Lab 2.4 — the bonus:** Connect a second model — an audio classification model — using the same API pattern. Write a second skill and document the differences in how the two models work.

**Go deeper on Hugging Face:** Have advanced students browse the model card for their chosen model. What was it trained on? Who built it? What are the known limitations listed in the model card? Present findings to the class.

**Google Colab extension:** For students with Python exposure, the optional Google Colab activity lets them call the Hugging Face API directly in Python, inspect the raw JSON, and visualize attention maps for an image. This is genuinely college-level material and some middle schoolers are ready for it.

### For English Language Learners

- Pre-teach the Lab 2.4 vocabulary in students' home languages where possible: "model," "API," "token," "caption"
- The Teachable Machine lab (Lab 2.3) works largely without text and is great for ELL students — they can collect images and train the model without needing to navigate complex documentation
- Allow translation tools during the Hugging Face model hub exploration
- Discussion participation: reactions (thumbs up/down) and sentence starters are lower-barrier than open responses

### For Students with IEPs/504s

- Extended time on Labs 2.3 and 2.4 — these are process-intensive and the extra time is meaningful
- Alternative to webcam data collection: pre-collected image sets (provided in lab guide)
- Oral assessment option: instead of a written lab report, students can narrate their experience into a voice recorder or to the teacher directly
- Reduce the image classification categories from 3 to 2 for students overwhelmed by the data collection task

---

## 7. FAQ: Common Student Questions + Teacher Responses

---

**Q1: What's Hugging Face? Is it a social media thing?**

No — it's a platform for sharing and using AI models. Think of it like GitHub, but for machine learning models instead of code. Researchers and companies publish their models there, and anyone can use them. The name comes from the 🤗 emoji (their logo). There are hundreds of thousands of models on Hugging Face covering images, text, audio, video, and more. In Lab 2.4, you'll use it to give your agent a vision capability by connecting to a model someone else trained.

---

**Q2: How is Hugging Face different from OpenClaw?**

Great question — they're different layers of the same stack. OpenClaw is your *agent platform* — it's what your agent runs on, what gives it a personality, memory, and the ability to have conversations. Hugging Face is a *model library* — it hosts the specific AI models that do things like describe images or transcribe audio. In Lab 2.4, you're connecting these two layers: your OpenClaw agent will call a Hugging Face model as a tool. OpenClaw is the brain; Hugging Face is one of the senses you're plugging in.

---

**Q3: My student can't get the API to work — what do I do?**

Work through this checklist in order:

1. **Can they make a successful curl call at all?** If not, the problem is either the API token (check for typos, missing "Bearer") or network access (can they reach api-inference.huggingface.co from school?).
2. **Is the model loaded?** Hugging Face free-tier models go to sleep. Add `"wait_for_model": true` to the request body, or wait 30 seconds and retry. A 503 error almost always means "model loading."
3. **Is the image encoded correctly?** The API expects base64-encoded image data or raw bytes. A plain file path won't work. Use the helper function in the lab guide.
4. **Is the skill returning the right thing?** The skill might work but return `undefined`. Check that the return statement uses the actual API response value.

If none of these fix it: use the pre-built reference skill. Sometimes the most important thing is seeing the end state work, then backtracking to understand why their code didn't.

---

**Q4: Do we need to pay for Hugging Face?**

No. The Inference API has a free tier that's sufficient for this lab. The main limitation is rate limits (you can only make a certain number of calls per hour) and occasional slowness when models are loading from cold. For a class of 30 students, you won't hit rate limits unless everyone is hammering the API at the same moment — stagger testing if needed.

---

**Q5: What if the model describes my photo wrong?**

That's a feature, not a bug. Documenting when and why the model gets it wrong is part of the lab assessment. Ask: what about this image might have confused the model? Was the lighting unusual? Was the main subject small in the frame? Was the image blurry? Understanding failure modes is one of the most important skills in AI engineering.

---

**Q6: Can I connect my Teachable Machine model to OpenClaw instead of a Hugging Face model?**

Yes — in a more advanced extension. Teachable Machine models can be exported and hosted, and can receive API calls. However, this requires more setup than Lab 2.4 covers. It's a great bonus project for advanced students (see Module 4 preview activities). For Lab 2.4, stick with the Hugging Face hosted model.

---

**Q7: Is our data private when we send it to Hugging Face?**

The images you send to the Inference API are processed to generate a response and are not stored by Hugging Face under normal use (see their privacy policy). That said: don't send images containing personally identifiable information, faces of real people, or anything you wouldn't want processed on a third-party server. For this lab, stick to objects, scenes, and the lab's suggested image types.

---

**Q8: Is this how the AI in my phone works?**

Conceptually, yes — your phone's face recognition, Google Lens, and the "search similar images" feature all use computer vision models similar in architecture to what you're using in Lab 2.4. The main differences are scale (billions of training examples vs. the Hugging Face model's millions), hardware (dedicated AI chips in phones vs. Hugging Face's cloud servers), and optimization (phone models are compressed to run in milliseconds). What you're building is a real, working version of the same idea.

---

**Q9: Can AI see everything? Should we be worried about surveillance?**

This is worth exploring carefully. Yes — computer vision is used in surveillance systems. Cities have cameras that automatically track faces and license plates. Retail stores use it to detect shoplifters. Some employers use it to monitor workers. The technology works — and that raises hard questions: Who has the right to watch you in public? Should a computer be allowed to identify your face without your knowledge? What happens when the system makes a mistake and misidentifies someone? These are live debates in policy and law. The U.S. and EU have very different regulations. There are no easy answers, but being informed is the first step to having a say.

---

**Q10: Why does the AI do better with some types of images than others?**

Training data. The model learned to describe images by processing millions of example images with human-written captions. If the training set had lots of photos of dogs but few photos of, say, traditional clothing from non-Western cultures, the model will be much better at the former than the latter. This isn't random — it reflects whose photos made it into the training data, who took them, and whose perspective they represent.

---

**Q11: What's the difference between the model I built in Teachable Machine and the one on Hugging Face?**

Scale and depth, mostly. Your Teachable Machine model has three classes and was trained on a few hundred images in a few minutes. The Hugging Face image-captioning model has hundreds of millions of parameters and was trained on billions of image-text pairs over days or weeks on specialized hardware. Your model can classify three specific things you chose; the Hugging Face model can describe almost any image in natural language. But the underlying principle — learn patterns from labeled examples — is identical.

---

**Q12: What happens to my model after this class? Can I keep it?**

Yes. Teachable Machine models can be exported (they're TensorFlow Lite files) and you can run them locally or deploy them to a website. Hugging Face models belong to their creators; you're just using them via the API. Your OpenClaw *skill* that you wrote in Lab 2.4 is yours — it lives in your agent and keeps working as long as your Hugging Face token is valid. You can take it with you.

---

**Q13: Why do some images make the model produce really weird captions?**

Usually because the image is "out of distribution" — meaning it's different from what the model trained on. Very abstract images, unusual perspectives (looking straight down, extreme close-ups), low-light photos, or images with text overlaid often confuse captioning models. The model generates a caption based on what it's seen before; when an image doesn't match any pattern in its training data, it produces something that sounds plausible but is wrong. This is called "hallucination" — and it's a known problem with generative AI systems.

---

**Q14: What's next after this module? Will my agent keep getting better?**

Yes — that's the whole arc. In Module 3, you'll give your agent a custom knowledge base so it can answer questions from your own documents. In Module 4, it learns from new examples. By Module 7, you'll deploy a fully capable agent. The vision skill you built in Lab 2.4 stays with your agent through all of it. Think of each module as an upgrade.

---

## 8. Background Reading for Teachers

You don't need to be a computer vision researcher to teach this module. But a few hours of reading will give you the confidence to field hard questions and contextualize the technology for students. These three sources are readable, accurate, and directly relevant.

---

### Source 1: "How Do Machines See?" — AI4K12 Initiative

**URL:** [ai4k12.org/resources](https://ai4k12.org/resources) → Big Idea 2: Representation & Reasoning

**Why read it:** AI4K12 is the definitive K-12 AI education framework, developed by computer science educators and AI researchers. Their "Big Idea 2" materials cover exactly what you're teaching: how machines represent the world, how they perceive images and sound, and what the limits of that perception are. The educator materials are written for non-specialist teachers.

**Time required:** 30–45 minutes

**Key takeaway for teaching:** AI systems perceive the world by representing it as data — and the choice of representation shapes what the system can learn. Students who understand this will understand both the power and limits of everything they build in Module 2.

---

### Source 2: "A People's Guide to AI" — Mimi Onuoha & Mother Cyborg (Allied Media Projects)

**URL:** [alliedmedia.org/peoples-ai](https://alliedmedia.org/peoples-ai) (free PDF)

**Why read it:** This zine-style guide covers AI basics including computer vision through the lens of equity and access. It's written for non-technical adults, beautifully designed, and directly addresses the kinds of ethical questions that come up in Lesson 2.4's speech recognition discussion and the surveillance conversation in FAQ Q9. It will help you facilitate those discussions with confidence.

**Time required:** 45–60 minutes (it's readable and visually engaging)

**Key takeaway for teaching:** The technical choices made in AI systems — what data to collect, what to label, who to include in testing — are human choices with human consequences. This framing will help you help students connect the technical content to the world they live in.

---

### Source 3: "ImageNet and the Origins of Deep Learning" — Quanta Magazine

**URL:** [quantamagazine.org](https://www.quantamagazine.org) — search "ImageNet deep learning history"

**Why read it:** ImageNet is the dataset that launched the modern era of computer vision. The story of how Fei-Fei Li assembled 14 million labeled images — by recruiting Amazon Mechanical Turk workers, often at wages of a few cents per image — is a fascinating and honest look at how AI systems are actually built. It also includes the famous moment in 2012 when AlexNet beat everything else in the competition, launching the deep learning era. This history gives Module 2 concepts a concrete origin story you can share with students.

**Time required:** 20–30 minutes

**Key takeaway for teaching:** Modern computer vision didn't come from nothing — it came from a huge labor of data collection and labeling, often done by underpaid workers. When students learn about training data, they can understand this backstory.

---

### Bonus Video

**"But what is a neural network?" — 3Blue1Brown**
**URL:** youtube.com/watch?v=aircAruvnKk
**Time:** 19 minutes

This is the clearest visual explanation of how neural networks work that exists on the internet. The animation style makes abstract concepts concrete. Watch it before Day 4 (the CNN lesson) and you'll be able to explain activation functions and layers with real confidence.

---

## 9. Cross-Subject Connections

### Science

**The Eye and the Camera:** Lesson 2.1 connects directly to biology units on the human eye. How does a camera lens compare to the human cornea and lens? How do photoreceptor cells compare to pixel sensors? Students can draw the comparison themselves and identify where the analogy breaks down (the brain, obviously, does more than classify).

**The Scientific Method in Machine Learning:** The train-test-improve loop in Lab 2.3 is the scientific method in action. Hypothesis (this category will be classifiable) → experiment (collect data, train) → observation (test accuracy) → revise hypothesis (why did it fail, what data is missing?). This connection can help science teachers see Lab 2.3 as a natural extension of their methods curriculum.

**Neuroscience Crossover:** For teachers with 8th grade biology: visual cortex processing in the human brain inspired convolutional neural networks. The parallel is imperfect but compelling. A quick "inspired by biology" framing on Day 4 can bridge both subjects.

### Math

**Pixels as Matrices:** Image data is literally a matrix. For classes with matrix math exposure (typically 7th–8th grade depending on curriculum), Lab 2.3 can include a brief look at how image data is represented numerically. Students who have done matrix operations will understand convolutions at a deeper level.

**Probability and Confidence Scores:** Every classification model returns confidence scores (probabilities). This connects directly to probability and statistics: what does it mean that the model is "87% confident" this is a cat? Is a coin flip better or worse than 87%? When should you act on a confidence score and when shouldn't you?

**Data and Averages:** When evaluating model accuracy (Lab 2.3), students calculate their own accuracy percentages. This is applied arithmetic in a meaningful context.

### ELA and Social Studies

**Argument and Evidence:** The discussion in Lesson 2.4 on speech recognition bias (the Koenecke et al. study) is a direct application of claim-evidence-reasoning. Students make claims about why disparities exist and must support them with evidence from the discussion.

**Media Literacy:** The module's engagement with AI-generated descriptions raises questions about trust and sourcing. If an AI "says" something about an image, is that reliable? Under what conditions? This parallels media literacy work on evaluating sources.

**History of Technology:** The ImageNet story (see Background Reading) connects to discussions of labor history and the gig economy. Who does the invisible work that makes AI systems possible?

**World Languages:** Speech recognition bias is a rich topic for language classes: which languages are well-supported? Which aren't? Why? The 7,000 languages vs. 100 covered statistic from the Lesson 2.4 discussion guide can anchor a conversation in any language class about whose voices are heard.

### Art

**Computational Photography:** Lesson 2.1's pixel work connects to digital art — how images are made, how resolution affects quality, how filters work at the pixel level. Many art programs use digital tools and this module can give students a technical understanding of those tools.

**Style Transfer:** As an extension, neural style transfer (applying the "style" of one image to another's "content") is a striking AI art application that comes directly from the feature representations students learn in Lesson 2.2. Several browser-based demos exist that require no code.

---

## 10. Parent Communication Email Template

Use this template at the start of Module 2. Customize the bracketed sections with your class specifics.

---

**Subject:** Starting Module 2 — Your Student Will Build an AI That Can See

---

Dear [Parent/Guardian Name],

We're starting our second module in our AI explorers course! I wanted to send a quick update on what we're doing and what your student will be working on over the next few weeks.

**What Module 2 is about**

In Module 1, students learned the basics of what AI is and had their first conversations with an AI assistant (OpenClaw). In Module 2 — "Give Your Agent Vision" — students will explore how AI systems perceive the world through images and sound. The module's highlight is a lab where students will connect their personal AI agent to a real computer vision model, giving it the ability to describe photos.

By the end of this module, your student will be able to:
- Explain how a computer sees an image (it's different from how we do!)
- Train their own simple image recognition model using a free tool called Teachable Machine
- Connect their AI agent to a vision model from Hugging Face, a leading AI model platform

**Accounts your student will need**

Your student will need accounts on a few free platforms for this module:
- **Google Account** — for saving their Teachable Machine projects (they may already have one)
- **Hugging Face** — a platform for accessing AI models. Creating an account is free and requires only an email. [If your school uses SSO, note that here.]

These are educational tools used by professional AI engineers and researchers. No payment information is required.

**A note on privacy**

In some activities, students may take photos using their computer's webcam to train their own image recognition model. These photos are used only for the classroom activity and are processed by Teachable Machine, which runs in the browser. Students are instructed not to photograph faces (their own or others') for these activities.

**What to watch for at home**

Students will be working on something genuinely exciting: an AI agent that can describe what it sees in a photo. If your student is energized about this, encourage them to show you what they built — seeing a student's agent respond to an image is pretty cool!

If your student mentions getting "stuck on the API," that's completely normal. Lab 2.4 involves writing real code to call a real AI service. Getting stuck and working through it is part of the experience. Encourage them to work through it step by step.

**Questions?**

If you have questions about the curriculum, the tools we're using, or anything else, please reach out. I'm happy to share more details about the Hugging Face platform, the privacy policies of the tools we use, or the specific activities planned.

Looking forward to a great module!

[Teacher Name]
[Contact Info]
[Course Name and Period]

---

*The complete AI Explorers curriculum is available at [curriculum URL]. Module 2 materials are in the module2/ folder.*

---

*Module 2 of 7 — Previous: [Module 1 Teacher Guide](../../module1/teacher-guide/teacher-guide.md) | Next: Module 3 Teacher Guide (coming soon)*

*Full curriculum: [AI Explorers — Build Your AI Assistant](../../README.md)*
