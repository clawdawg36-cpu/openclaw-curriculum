# Lab: Sound Classifier with Teachable Machine

**Module 2 — Hands-On AI Lab**
**Estimated Time:** 45–60 minutes

---

## 🎯 Learning Goals

By the end of this lab you will:
- Train a machine learning model to recognize 3 distinct sounds
- Understand how audio data is collected and labeled
- Test and evaluate your model's real-world accuracy
- Connect this work to Module 4, where you can build an agent that *listens*

---

## 🔗 Through-Line: Why This Matters

> **"You're training an audio model. In Module 4, you could integrate this into your agent so it responds to different sounds — a clap starts a task, a whistle changes the music, a voice command triggers an action."**

This lab is practice. Every sample you record and every label you assign teaches the model what to listen for. That same skill applies when you wire it into a real AI agent.

---

## 🛠️ What You Need

| Item | Notes |
|------|-------|
| A computer with a microphone | Built-in laptop mic works fine |
| Chrome or Edge browser | Teachable Machine requires it |
| A quiet-ish space | Background noise affects training |
| 3 distinct sounds | See suggestions below |

---

## 🔊 Choosing Your 3 Sounds

Pick sounds that are **clearly different** from each other and **easy to reproduce consistently**.

**Good combinations:**
- 👏 Clap / 🤙 Snap / 🌬️ Whistle
- 👏 Clap / 🗣️ "Hey" (spoken word) / 🌬️ Blow
- 🥁 Desk knock / 👏 Clap / 🤫 Shh sound
- 🎵 Hum / 👏 Clap / 🗣️ "Go"

**Avoid:**
- Sounds that sound similar (hiss vs. shush)
- Sounds that require props you don't have
- Very short micro-sounds (under 0.3 seconds)

---

## 📋 Step-by-Step Instructions

### Step 1 — Open Teachable Machine

1. Go to [teachablemachine.withgoogle.com](https://teachablemachine.withgoogle.com)
2. Click **Get Started**
3. Select **Audio Project**
4. Choose **Standard audio model**

---

### Step 2 — Set Up Your Classes

You will see **"Background Noise"** already set up — keep it! This helps the model learn what silence/ambient sound sounds like.

Add 3 new classes:
1. Click **"Add a sound class"** for each
2. Name them clearly: e.g., `Clap`, `Snap`, `Whistle`

> 💡 **Tip:** Clear, descriptive names make it easier to debug later.

---

### Step 3 — Record Training Samples

For **each sound class**, record at least **20 samples** (aim for 30+):

1. Click the microphone icon in the class
2. Hold the button and make your sound
3. Release — Teachable Machine will auto-slice it into 1-second clips
4. Check the waveform preview; if it's flat, your mic didn't pick it up

**Recording Tips:**

| Tip | Why It Matters |
|-----|----------------|
| Record in the same position you'll test | Model learns your specific environment |
| Vary your volume slightly | Makes the model more robust |
| Take short breaks between samples | Avoids recording echoes |
| Do multiple recording bursts | Covers natural variation |
| Record 8–10 background noise samples too | Helps model ignore ambient sound |

> ⚠️ **Common mistake:** Recording all samples in one fast burst. Pause between each sound — Teachable Machine needs a clean start/stop.

---

### Step 4 — Train Your Model

1. Click **"Train Model"**
2. Wait for training to complete (usually 30–90 seconds)
3. Watch the **accuracy bar** — aim for 85%+

> 💡 If accuracy is low, go back and record more samples. 20 per class is the minimum — 40+ is better.

---

### Step 5 — Test Your Model

Use the **Preview** panel on the right:

1. Make each of your sounds
2. Watch which class lights up with the highest confidence bar
3. Try edge cases:
   - What happens with silence?
   - What if someone else makes the sound?
   - What if you make the sound from further away?

Record your results on the **Lab Worksheet**.

---

### Step 6 — Export Your Model

1. Click **"Export Model"**
2. Choose **"Upload (shareable link)"**
3. Copy your model URL — you'll use it in the Extension Challenge and in Module 4

---

## 🐛 Troubleshooting

**Model keeps predicting Background Noise:**
- Your sounds may be too quiet. Move closer to the mic.
- Try recording more samples of your actual sounds.

**Two sounds keep getting confused:**
- They may sound too similar. Record more distinct samples, or swap one sound.
- Check waveforms — they should look visually different.

**Microphone not working:**
- Check browser permissions: the mic icon in the address bar must show "Allowed"
- Try refreshing the page and re-allowing mic access
- On some machines, check System Preferences → Security & Privacy → Microphone

**Accuracy stuck below 70%:**
- Record more samples (aim for 50+ per class)
- Make sure you're in a consistent sound environment
- Delete and re-record any class that looks messy

**Model works in preview but not in code:**
- Make sure you exported/uploaded the model (not just downloaded)
- The shareable URL is what works in apps — the downloaded files need a server

---

## ✅ Wrap-Up Checklist

- [ ] 3 sound classes trained (+ background noise)
- [ ] 20+ samples per class recorded
- [ ] Model accuracy 80%+
- [ ] Model tested with live audio
- [ ] Model URL copied/saved
- [ ] Lab Worksheet completed

---

## 🔭 What's Next

In **Module 4**, you'll build an AI agent. You can plug this exact model in — so your agent *listens* for a clap to trigger an action, or a spoken word to change behavior. That's not sci-fi. You just trained the core of it.

---

*Lab created for OpenClaw Curriculum — Module 2*
