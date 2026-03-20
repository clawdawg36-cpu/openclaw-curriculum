# Lesson 2.4 — How AI Hears: Speech Recognition

**Module:** 2 — How AI Understands the World  
**Duration:** 1 period (~50 minutes)  
**Level:** High School (Grades 9–12)  
**Prerequisites:** Lessons 2.1–2.3 (text, images, and structured data)

---

## 🔗 Through-Line Connection

> *"Your agent can now understand text. But what if someone wants to talk to it? Or what if your agent needs to hear the world around it?"*

In previous lessons, students built agents that understand and respond to typed input. Lesson 2.4 opens a new sensory channel: **sound**. By the end of this lesson, students understand how machines convert raw audio into meaning — and why that process is harder than it looks.

**Bridge to Lab 2.4:** Students will implement audio capabilities in their personal agents using Hugging Face's speech-to-text and audio classification pipelines. Today's conceptual foundation and hands-on sound classifier directly prepares them for that build.

**Bridge to Module 6 (Ethics):** Today's discussion of speech recognition bias — who it works for, who it fails — is the first structured preview of the ethics work in Module 6. Capture student observations and questions today; you'll return to them explicitly in Lesson 6.2 (AI Fairness & Bias).

---

## 🎯 Learning Objectives

By the end of this lesson, students will be able to:

1. Explain the pipeline from audio waveform → spectrogram → text
2. Demonstrate real-time speech-to-text and identify where it succeeds and fails
3. Train a simple sound classifier using Teachable Machine (clap, snap, tap)
4. Articulate at least two reasons speech recognition may perform unevenly across different speakers and environments
5. Connect today's lesson to their ongoing agent project and the ethics themes ahead

---

## 📋 Materials & Setup

| Item | Notes |
|------|-------|
| Computers with microphones | 1 per student or pair |
| Chrome browser | Required for Teachable Machine |
| Teachable Machine (teachablemachine.withgoogle.com) | No account needed for basic use |
| Web Speech API demo | Built into Chrome; no install needed |
| Projector / display | For teacher demos |
| Discussion Guide (see discussion-guide.md) | Print or share digitally |
| Sticky notes or whiteboard space | For bias reflection activity |

**Teacher Prep:**
- Test microphone access in Chrome before class
- Have Teachable Machine open in a browser tab, project view ready
- Optional: pre-load a spectrogram visualizer (e.g., spectrogram.surge.sh) for the waveform demo

---

## ⏱️ Lesson Outline

### Opening (5 min) — The Question That Breaks the Model

**Prompt (no context, cold open):**
> *"Everyone open Chrome. Go to: [Web Speech API demo link]. Speak a sentence. Did it get it right? Now try whispering it. Now try it with an accent, or speak really fast."*

Let students experiment for 2 minutes. Then ask:
- *"What happened?"*
- *"What do you think the computer is actually doing when you speak?"*

**Bridge:** *"We've taught our agents to read. Today we're going to teach them to listen — and we're going to discover why listening is surprisingly complicated."*

---

### Segment 1: From Sound to Text (12 min)

**Concept: The Audio Pipeline**

Draw or display the pipeline on the board:

```
Microphone → Waveform → Spectrogram → Feature Extraction → Text
```

**Step-by-step explanation:**

1. **Waveform** — Sound is vibration. A microphone converts pressure changes into a waveform (amplitude over time). Show a waveform visualization. Ask: *"What does this look like? Can you read words from this?"*

2. **Spectrogram** — We can't easily read words from a waveform. So AI converts it to a spectrogram — a 2D image showing frequency (pitch) over time, colored by intensity. Ask: *"What does this remind you of?"* (images!). Key insight: **speech recognition is partly an image recognition problem**.

3. **Feature Extraction** — Models like Whisper or Wav2Vec extract learned features from the spectrogram, similar to how CNNs extract features from images.

4. **Decoding to Text** — A language model predicts the most likely word sequence given the acoustic features. It uses context — not just sounds, but what words make sense together.

**Quick check:** Have students explain the pipeline to a partner in 30 seconds.

---

### Segment 2: Real-Time Speech-to-Text Demo (8 min)

**Demo 1: Web Speech API (Chrome built-in)**
- Teacher types a URL for a live speech-to-text demo
- Speak clearly → show transcript
- Speak with noise in background
- Use a less common name or technical term

**Demo 2: Hugging Face Whisper (online inference)**
- Navigate to huggingface.co/spaces — find a Whisper demo
- Upload or record a short audio clip
- Show confidence scores if available

**Discussion prompt:**
> *"Where did it struggle? What types of input seem harder for the model?"*

Take 3–4 responses. Note: accents, background noise, domain-specific words, fast speech. Save this list — it feeds into the bias discussion.

---

### Segment 3: Teachable Machine Sound Classifier (18 min)

**Activity: Train Your Own Ear**

Students train a 3-class sound classifier: **clap / snap / tap**

See: `sound-classifier-activity.md` for full step-by-step instructions.

**Teacher framing:**
> *"We're going to train a tiny version of what Alexa or Google Assistant does — recognize specific sounds. But instead of voices, we'll start with three simple sounds you can make with your hands."*

**Steps overview:**
1. Go to teachablemachine.withgoogle.com → Audio Project
2. Label classes: Clap, Snap, Tap (+ Background Noise)
3. Record 20–30 samples per class
4. Train the model
5. Test it in real time

**Debrief questions:**
- *"How many samples did it take before it got reliable?"*
- *"What happens if you snap quietly vs. loudly?"*
- *"What would happen if you trained on YOUR clap and then I tried to use it?"*

That last question is the bridge to bias.

---

### Segment 4: Who Does AI Hear? (7 min)

**Discussion: Speech Recognition & Bias**

Transition from the Teachable Machine debrief:
> *"You just discovered that your model might work better for your clap than for mine. Now scale that up: what happens when you train a speech recognition system on millions of voice samples — but most of them are from one type of person?"*

Use `discussion-guide.md` for structured prompts. Key points to surface:
- Training data shapes what the model "hears" well
- English-dominant models fail speakers of other languages
- Accent bias has real-world consequences (medical, legal, workplace contexts)
- This isn't just a technical problem — it's a design and data problem

**Ethics Preview:**
> *"We're going to come back to this in Module 6 when we study AI fairness in depth. For now, I want you to hold this question: **Who was this system built for?** Write that on a sticky note and keep it."*

See `ethics-preview-note.md` for teacher guidance on this moment.

---

### Closing (5 min) — Bridge to Lab 2.4

**Return to the through-line:**
> *"Your agent can read. Next lab, you're going to give it ears. You'll use Hugging Face pipelines to add real speech-to-text capability to your agent — and you'll get to decide how you handle the edge cases we talked about today."*

**Exit ticket (choose one):**
1. In one sentence: explain what a spectrogram is and why it matters for speech recognition.
2. Name one group of people who might be underserved by current speech recognition systems, and why.
3. What's one feature you'd want your agent's listening capability to have, based on what you learned today?

---

## 📊 Assessment

| Method | Description |
|--------|-------------|
| Sound Classifier | Did student successfully train and test a 3-class model? |
| Exit Ticket | Shows conceptual understanding of pipeline OR bias |
| Participation | Engagement in demo exploration and bias discussion |
| Lab 2.4 readiness | Framing today as prep; formal assessment in Lab 2.4 |

---

## 🔧 Differentiation

**For students who finish early:**
- Try adding a 4th class to Teachable Machine (e.g., whistle or knock)
- Test their model on a classmate's sounds — document accuracy differences
- Research: What languages does Whisper perform best/worst on? Why?

**For students who struggle with concepts:**
- Focus on the "spectrogram = picture of sound" metaphor
- Pair with a student who grasps the pipeline
- The bias discussion is accessible regardless of technical level — encourage these students to lead that conversation

**For ELL students:**
- This lesson is especially relevant — invite them to share personal experience with speech recognition systems in their first language
- Honor their expertise in this domain

---

## 🔗 Connections & Resources

- **Teachable Machine:** https://teachablemachine.withgoogle.com
- **Hugging Face Whisper Space:** https://huggingface.co/spaces/openai/whisper
- **Web Speech API Demo:** https://www.google.com/intl/en/chrome/demos/speech.html
- **Spectrogram Visualizer:** https://musiclab.chromeexperiments.com/Spectrogram/
- **Research: Bias in Speech Recognition:** "Racial Disparities in Automated Speech Recognition" — Washington Post / Stanford study (2020)
- **Wav2Vec explainer:** https://huggingface.co/blog/wav2vec2-with-ngram
- **Next Lesson:** Lab 2.4 — Adding Audio to Your Agent (Hugging Face)
- **Future Connection:** Lesson 6.2 — AI Fairness & Bias

---

*Lesson authored for the OpenClaw AI Curriculum | Module 2: How AI Understands the World*
