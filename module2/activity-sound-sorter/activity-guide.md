# 🎵 Activity: Sound Sorter — Build a Sound Classification Soundboard

**Module 2 | Estimated Time: 45–60 minutes**  
**Prereq:** Completed the Teachable Machine Sound training lab (Module 2, Lab 1)

---

## What You're Building

You trained a sound model in Teachable Machine that recognizes **claps**, **snaps**, and **taps**. Now you're going to wire that model into a real web app — a **soundboard** that listens to you and *reacts* based on what it hears.

When it hears a clap → it displays 👏 and plays a sound effect.  
When it hears a snap → it displays 🫰 and lights up a panel.  
When it hears a tap → it displays 👆 and triggers an animation.

This is *your first AI-powered app*. Let's build it.

---

## Step 1: Export Your Teachable Machine Model

1. In Teachable Machine, click **Export Model**
2. Choose **TensorFlow.js** → **Upload (shareable link)**
3. Copy the model URL — it looks like:  
   `https://teachablemachine.withgoogle.com/models/XXXXXXXX/`
4. You'll paste this into your code in a moment

> **Why TensorFlow.js?** It runs your model *right in the browser* — no server, no Python, no installs. The model lives on Google's servers and loads on-demand.

---

## Step 2: Understand the Architecture

Here's what happens at runtime:

```
Microphone → Audio data → TensorFlow.js model → Prediction (clap/snap/tap) → UI reaction
```

You're building the last two parts: wiring up the model output to visual/audio responses.

### Key concepts:

| Concept | What it means in this app |
|---|---|
| **Model URL** | Where your trained model lives (Teachable Machine) |
| **Recognizer** | The JS object that listens + predicts |
| **Label** | The class name ("Clap", "Snap", "Tap", "Background Noise") |
| **Score/Probability** | 0–1, how confident the model is |
| **Threshold** | Minimum confidence before we act (default: 0.8) |

---

## Step 3: Open the Starter Code

Open `starter-code.md` and copy the HTML/JS into a new file called `index.html`.

Key things to fill in:
1. **Your model URL** (from Step 1)
2. **Your class labels** (must match exactly what you named them in Teachable Machine)
3. **Three reaction functions** — one for each sound

---

## Step 4: Add Your Reactions

For each sound class, decide what happens. Here are some ideas:

### Option A: Visual Reaction (Simplest)
Change the background color or show an emoji big on screen.

### Option B: p5.js Animation (Intermediate)
Use p5.js to draw particles, shapes, or animations when a sound is detected.

```html
<!-- Add this to your <head> to use p5.js -->
<script src="https://cdn.jsdelivr.net/npm/p5@1.9.0/lib/p5.min.js"></script>
```

### Option C: Audio Reaction (Fun!)
Use the Web Audio API or `<audio>` tags to play sound effects.

```javascript
function playEffect(soundFile) {
  const audio = new Audio(soundFile);
  audio.play();
}
```

---

## Step 5: Test It

1. Open `index.html` in Chrome (mic access works best there)
2. Click **Start Listening**
3. Try clapping, snapping, tapping your desk
4. Watch your app react!

**Debugging tips:**
- If the model never fires, check your threshold — lower it slightly (try 0.75)
- If it fires too much on background noise, raise the threshold (try 0.85)
- Make sure your class labels in the code match *exactly* what you typed in Teachable Machine (case-sensitive!)
- Check the browser console (F12 → Console) for errors

---

## Step 6: Customize and Make It Yours

Once the basics work, make it interesting:
- Add a **confidence bar** showing how sure the model is
- Add a **history log** showing the last 5 sounds it heard
- Change the reactions to something you care about
- Try it with different sounds (words? instruments? objects?)

See `extension-ideas.md` for bigger challenges.

---

## The Big Picture: What Did You Just Build?

You built a program that:
1. **Listens** to the real world (microphone input)
2. **Understands** what it heard (AI model)
3. **Decides** what to do (your reaction logic)
4. **Acts** (UI change, sound, animation)

That's not just a web app — that's an **agent loop**: perceive → reason → act.

In Module 3, you'll write an actual OpenClaw skill that does the exact same thing, but for a real AI assistant. You've already done the hard part — you understand the pattern.

> 📖 Read `agent-skill-bridge.md` to see exactly how this maps to a real OpenClaw skill.

---

## Reflection Questions

1. What confidence threshold worked best for your sounds? Why do you think that is?
2. What happens when two sounds are similar — how does the model handle it?
3. If you were building this for a real product, what would you need to improve?
4. Can you think of a use case where sound classification would be genuinely useful?

---

## Resources

- [Teachable Machine Sound documentation](https://teachablemachine.withgoogle.com/train/audio)
- [TensorFlow.js Speech Commands library](https://github.com/tensorflow/tfjs-models/tree/master/speech-commands)
- [p5.js reference](https://p5js.org/reference/)
- [Web Audio API basics](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [ml5.js](https://ml5js.org/) — friendlier ML wrapper for p5.js
