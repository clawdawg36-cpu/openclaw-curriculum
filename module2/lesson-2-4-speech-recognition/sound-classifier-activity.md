# Sound Classifier Activity — Clap / Snap / Tap

**Lesson:** 2.4 — How AI Hears: Speech Recognition  
**Tool:** Google Teachable Machine (Audio Project)  
**Time:** ~18 minutes  
**Setup:** Chrome browser, working microphone, no account needed

---

## 🎯 What You're Building

You're going to train a mini AI model to recognize three sounds you can make with your hands:
- **Clap** 👏 — bring both hands together
- **Snap** 🫰 — snap your fingers
- **Tap** 👆 — tap one finger on your desk

This is the same basic idea behind how voice assistants recognize the wake word "Hey Siri" or how security systems detect glass breaking. You're training the model to recognize *your* sounds.

---

## 🔧 Setup (2 min)

1. Open Chrome (must be Chrome — mic access works best here)
2. Go to: **https://teachablemachine.withgoogle.com**
3. Click **Get Started**
4. Select **Audio Project**
5. Choose **Standard audio model**

You should see a project with:
- A "Background Noise" class (already there — keep it!)
- A "Class 2" slot

---

## 📝 Step 1 — Name Your Classes (1 min)

Rename the classes:
- **Background Noise** — leave this name as-is
- **Class 2** → rename to `Clap`
- Click **Add a class** → name it `Snap`
- Click **Add a class** again → name it `Tap`

You should now have 4 classes: Background Noise, Clap, Snap, Tap.

---

## 🎤 Step 2 — Record Background Noise (2 min)

**Start with Background Noise** — this is crucial. Without it, the model will try to classify *everything* as a sound, even silence.

1. Click the microphone icon under **Background Noise**
2. Click **Record 20 seconds of background noise**
3. Don't speak or make sounds — let the room's ambient noise record
4. When done, you'll see audio samples appear

> **Tip:** If your room is very quiet, that's fine! If it's loud (fans, HVAC, people), that's fine too — the model will learn your specific environment.

---

## 👏 Step 3 — Record Clap Samples (3 min)

1. Click the microphone icon under **Clap**
2. You'll record short clips — the tool records ~1 second at a time
3. Record at least **20–30 samples**
4. **Vary your claps:** loud, soft, one hand on knee, two hands together, slow clap, quick clap

> **Why vary them?** A model trained only on your loud clap will fail on your quiet clap. Variation = robustness.

Repeat this for **Snap** and **Tap**:
- **Snap:** finger snaps — vary which hand, vary how loud
- **Tap:** desk taps with fingertip, fingernail, knuckle — mix it up

**Aim for 20–30 samples per class.**

---

## ⚙️ Step 4 — Train the Model (2 min)

1. Click the big **Train Model** button
2. A spinning indicator will appear — wait for it to finish (usually 30–60 seconds)
3. **Do not close the tab or navigate away** while training

> **What's happening?** Teachable Machine is converting your audio samples to spectrograms, then training a small neural network to distinguish the visual patterns between clap, snap, tap, and background noise.

---

## 🧪 Step 5 — Test It! (4 min)

Once training is complete, the **Preview** panel on the right will activate.

1. Make sure the preview is set to **Microphone** (not file upload)
2. Make a sound and watch the bars move
3. Try each sound: Clap, Snap, Tap

**Things to test:**

| Test | What to observe |
|------|----------------|
| Make a clap | Does "Clap" light up? How confident? |
| Snap loudly | Does it recognize it? |
| Snap very quietly | Does it still work? |
| Tap your desk | Does "Tap" register? |
| Don't make any sound | Should fall to "Background Noise" |
| Have a neighbor try your model | Does it work for their sounds? |

**Record your observations:**

```
My model works well for: ____________________________
My model struggles with: ____________________________
When my neighbor tested it: _________________________
```

---

## 💡 Reflection Questions

Answer these in your notes or be ready to discuss:

1. **Sample size:** How many samples did it take before your model worked reliably? What happened when you had fewer?

2. **Variation:** Did training with varied claps (loud/soft) make the model more or less reliable? Why?

3. **Cross-person testing:** When someone else tried your model, what happened? Why might that be?

4. **The big question:** You trained this model on YOUR hands and YOUR room. How is that similar to how large speech recognition systems are trained — and what problems might that create?

5. **Real world:** Can you think of a real product that does something similar to what you just built? What sounds does it recognize, and for whom does it work well?

---

## 🔄 If You Finish Early

**Challenge 1:** Add a 4th sound class. Try:
- Whistle
- Knock (on wood vs. desk)
- Finger snap vs. thumb snap

**Challenge 2:** Deliberately try to break your model. What sounds does it misclassify? Why?

**Challenge 3:** Research question — Look up "Teachable Machine audio under the hood." What kind of neural network does it use? What's a spectrogram, and why does converting sound to an image help?

---

## 🔗 What's Next

In **Lab 2.4**, you'll use Hugging Face's `transformers` library to add real speech-to-text capability to your agent. The pipeline you're building there (audio → text) is the full version of what you just explored with sounds → labels.

The questions you've started asking today — *who does this work for? what happens when sounds are different?* — will matter when you design your agent's listening behavior.

---

*Part of Lesson 2.4 — How AI Hears: Speech Recognition | OpenClaw AI Curriculum*
