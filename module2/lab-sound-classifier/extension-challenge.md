# Extension Challenge: Build a Soundboard App 🎛️

**Module 2 — Sound Classifier Extension**
**Estimated Time:** 30–60 minutes
**Prerequisite:** Completed Sound Classifier lab + exported model URL

---

## 🎯 The Challenge

Turn your trained sound model into a **live soundboard app** that reacts to what it hears:

| Sound | Action |
|-------|--------|
| 👋 **Wave / Hand Whoosh** | 🎵 Play music (toggle on/off) |
| 👏 **Clap** | 🎨 Change background color randomly |
| 🌬️ **Whistle / Blow** | *(Your choice — see bonus ideas)* |

By the end, you'll have a working web app that **listens** using your trained AI model and **responds** with real actions. That's an agent loop in miniature.

---

## 🧠 How It Works

```
Microphone → Teachable Machine model → Prediction → JavaScript action
```

Teachable Machine gives you a JavaScript library (`@tensorflow/tfjs` + `@teachablemachine/audio`) that runs your model directly in the browser. No server needed.

---

## 🛠️ Setup

### What You Need
- Your **model URL** from the lab (looks like `https://teachablemachine.withgoogle.com/models/XXXXXXXX/`)
- A code editor (VS Code, Replit, or even a plain `.html` file)
- Chrome or Edge browser

### File Structure
Create a folder called `soundboard/` with one file: `index.html`

---

## 💻 Starter Code

Copy this into `index.html` and replace `YOUR_MODEL_URL_HERE` with your actual model URL:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>🎛️ AI Soundboard</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Segoe UI', sans-serif;
      background: #1a1a2e;
      color: #eee;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 24px;
      transition: background 0.4s ease;
    }

    h1 { font-size: 2rem; letter-spacing: 2px; }

    #status {
      font-size: 1.1rem;
      opacity: 0.7;
      min-height: 1.5em;
    }

    #action-display {
      font-size: 4rem;
      min-height: 5rem;
      text-align: center;
      transition: transform 0.2s ease;
    }

    #action-display.pulse {
      transform: scale(1.3);
    }

    .bars {
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 320px;
    }

    .bar-row {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .bar-label {
      width: 100px;
      font-size: 0.85rem;
      text-align: right;
      opacity: 0.8;
    }

    .bar-track {
      flex: 1;
      background: rgba(255,255,255,0.1);
      border-radius: 4px;
      height: 18px;
      overflow: hidden;
    }

    .bar-fill {
      height: 100%;
      background: #7c3aed;
      border-radius: 4px;
      width: 0%;
      transition: width 0.1s ease;
    }

    button {
      padding: 12px 28px;
      font-size: 1rem;
      border: 2px solid #7c3aed;
      background: transparent;
      color: #eee;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.2s;
    }

    button:hover { background: #7c3aed33; }
    button:disabled { opacity: 0.4; cursor: default; }

    audio { display: none; }
  </style>
</head>
<body>

  <h1>🎛️ AI Soundboard</h1>
  <div id="status">Press Start to activate the microphone</div>
  <div id="action-display">🎤</div>

  <div class="bars" id="bars"></div>

  <button id="start-btn" onclick="startListening()">▶ Start Listening</button>

  <!-- 
    Add a short audio clip here for the wave/music action.
    You can use any royalty-free MP3. Example uses a public domain clip.
  -->
  <audio id="music" loop>
    <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
  </audio>

  <!-- Teachable Machine + TensorFlow.js -->
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@teachablemachine/audio@0.8.0/dist/teachablemachine-audio.min.js"></script>

  <script>
    // ⬇️ REPLACE THIS WITH YOUR MODEL URL
    const MODEL_URL = "YOUR_MODEL_URL_HERE";

    // Map class names to actions
    // Update these to match your actual class names from Teachable Machine
    const SOUND_ACTIONS = {
      "Wave":   actionPlayMusic,
      "Clap":   actionChangeColor,
      "Whistle": actionCustom,
      // Add more if you have more classes
    };

    const COLORS = [
      "#1a1a2e", "#16213e", "#0f3460", "#533483",
      "#2d6a4f", "#1b4332", "#6a0572", "#023e8a"
    ];

    let model, recognizer;
    let musicPlaying = false;

    // ── Actions ─────────────────────────────────────────────────────────────

    function actionPlayMusic() {
      const music = document.getElementById("music");
      if (musicPlaying) {
        music.pause();
        showAction("⏸️ Music paused");
      } else {
        music.play().catch(() => showAction("⚠️ Click page first to allow audio"));
        showAction("🎵 Music on!");
      }
      musicPlaying = !musicPlaying;
    }

    function actionChangeColor() {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      document.body.style.background = color;
      showAction("🎨 Color changed!");
    }

    function actionCustom() {
      // 🏗️ STUDENTS: Add your own action here!
      // Ideas: show a GIF, display a message, increment a counter, make confetti...
      showAction("✨ Custom action!");
    }

    // ── Display ──────────────────────────────────────────────────────────────

    function showAction(text) {
      const el = document.getElementById("action-display");
      el.textContent = text;
      el.classList.remove("pulse");
      void el.offsetWidth; // reflow trick to re-trigger animation
      el.classList.add("pulse");
      setTimeout(() => el.classList.remove("pulse"), 300);
    }

    function updateBars(predictions) {
      predictions.forEach((p, i) => {
        const fill = document.getElementById(`bar-fill-${i}`);
        if (fill) fill.style.width = (p.probability * 100).toFixed(1) + "%";
      });
    }

    // ── Model ────────────────────────────────────────────────────────────────

    async function startListening() {
      const btn = document.getElementById("start-btn");
      btn.disabled = true;
      document.getElementById("status").textContent = "Loading model...";

      const modelURL   = MODEL_URL + "model.json";
      const metaURL    = MODEL_URL + "metadata.json";

      recognizer = await tmAudio.load(modelURL, metaURL);

      // Build confidence bars
      const barsEl = document.getElementById("bars");
      recognizer.wordLabels().forEach((label, i) => {
        barsEl.innerHTML += `
          <div class="bar-row">
            <div class="bar-label">${label}</div>
            <div class="bar-track">
              <div class="bar-fill" id="bar-fill-${i}"></div>
            </div>
          </div>`;
      });

      document.getElementById("status").textContent = "🎙️ Listening...";
      document.getElementById("action-display").textContent = "🔊";

      await recognizer.listen(result => {
        const predictions = result.scores.map((s, i) => ({
          label: recognizer.wordLabels()[i],
          probability: s
        }));

        updateBars(predictions);

        // Find highest confidence prediction
        const best = predictions.reduce((a, b) => a.probability > b.probability ? a : b);

        // Trigger action if confident enough and it's not background noise
        if (best.probability > 0.85 && best.label !== "Background Noise" && SOUND_ACTIONS[best.label]) {
          SOUND_ACTIONS[best.label]();
        }

      }, { includeSpectrogram: false, probabilityThreshold: 0.7, invokeCallbackOnNoiseAndUnknown: true });
    }
  </script>
</body>
</html>
```

---

## 🧩 Customizing Your App

### Change the Music Trigger
The `actionPlayMusic()` function uses a free online MP3. Swap it with any `.mp3` file — just drop it in your folder and update the `<source src="">` to `"your-song.mp3"`.

### Change the Colors
Edit the `COLORS` array to use hex codes you prefer:
```js
const COLORS = ["#ff6b6b", "#ffd93d", "#6bcb77", "#4d96ff"];
```

### Add a Third Action (Whistle / Blow)
Find `actionCustom()` and fill it in. Ideas:
- **Confetti burst** — use a library like `canvas-confetti`
- **Counter increment** — keep score of how many times you've clapped
- **Toggle dark/light mode**
- **Show a random joke** via a jokes API
- **Emoji rain** — spawn falling emojis on screen

### Tune the Sensitivity
Change `probabilityThreshold` (0.7 = 70% confidence needed):
```js
// More sensitive — triggers easier, more false positives
probabilityThreshold: 0.6

// Less sensitive — requires very clear sound
probabilityThreshold: 0.9
```

---

## 🏆 Bonus Challenges

**Level 1 — Polish**
- Add a visual "sound wave" animation when the mic is active
- Add a countdown before listening starts
- Show which sound was detected in a history log

**Level 2 — Features**
- Add a volume knob that responds to the clap sound
- Implement a "cooldown" so an action can't trigger twice in 2 seconds
- Let users remap sounds to actions via a settings panel

**Level 3 — Extend the Model**
- Go back to Teachable Machine and train 2 more sounds
- Add them as new classes in `SOUND_ACTIONS`
- What new actions can you add?

**Level 4 — Module 4 Preview**
- Export this as a reusable function: `initSoundClassifier(modelURL, handlers)`
- Write it so it could be imported into a larger app
- Can you make it work alongside a chatbot or voice assistant?

---

## 🔁 The Agent Connection

Notice the pattern in this app:

```
Listen → Classify → Act → Listen again...
```

That's a **perception → decision → action** loop. It's the same loop that powers AI agents. In Module 4, you'll build that loop with much more complexity — but the core is exactly what you just coded.

Your sound model is already "agent-ready." All that's left is hooking it up.

---

## 📤 Submission

When you're done, share:
1. A screen recording of your soundboard in action (30–60 seconds)
2. Your `index.html` file
3. Your model URL

Bonus points for creative third actions! 🎉

---

*OpenClaw Curriculum — Module 2 Extension Challenge*
