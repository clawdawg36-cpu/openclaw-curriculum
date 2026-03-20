# 🎵 Sound Sorter — Starter Code

Copy everything below into a file called `index.html` and open it in Chrome.

---

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sound Sorter 🎵</title>

  <!-- TensorFlow.js — runs your Teachable Machine model in the browser -->
  <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>

  <!-- Teachable Machine Audio library — wraps TF.js for audio models specifically -->
  <script src="https://cdn.jsdelivr.net/npm/@teachablemachine/audio@0.8/dist/teachablemachine-audio.min.js"></script>

  <style>
    /* ===== BASE STYLES ===== */
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Segoe UI', sans-serif;
      background: #1a1a2e;
      color: #eee;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      padding: 2rem;
    }

    h1 { font-size: 2rem; margin-bottom: 0.5rem; }
    p.subtitle { color: #aaa; margin-bottom: 2rem; }

    /* ===== START BUTTON ===== */
    #startBtn {
      background: #e94560;
      color: white;
      border: none;
      padding: 1rem 2.5rem;
      font-size: 1.1rem;
      border-radius: 50px;
      cursor: pointer;
      margin-bottom: 2rem;
      transition: transform 0.1s, background 0.2s;
    }
    #startBtn:hover { background: #c73652; transform: scale(1.05); }
    #startBtn:disabled { background: #555; cursor: not-allowed; transform: none; }

    /* ===== STATUS DISPLAY ===== */
    #status {
      font-size: 0.9rem;
      color: #aaa;
      margin-bottom: 1.5rem;
      min-height: 1.2em;
    }

    /* ===== REACTION PANEL ===== */
    #reactionPanel {
      font-size: 6rem;
      min-height: 8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    /* ===== CONFIDENCE BARS ===== */
    #bars {
      width: 100%;
      max-width: 400px;
      margin-top: 2rem;
    }

    .bar-row {
      display: flex;
      align-items: center;
      margin-bottom: 0.75rem;
      gap: 0.75rem;
    }

    .bar-label {
      width: 140px;
      font-size: 0.85rem;
      text-align: right;
      flex-shrink: 0;
    }

    .bar-bg {
      flex: 1;
      background: #333;
      border-radius: 4px;
      height: 18px;
      overflow: hidden;
    }

    .bar-fill {
      height: 100%;
      background: #e94560;
      border-radius: 4px;
      width: 0%;
      transition: width 0.15s ease;
    }

    /* ===== DETECTION LOG ===== */
    #log {
      margin-top: 2rem;
      max-width: 400px;
      width: 100%;
      font-size: 0.8rem;
      color: #888;
    }

    #log h3 { font-size: 0.85rem; margin-bottom: 0.5rem; color: #aaa; }

    #logList {
      list-style: none;
      max-height: 120px;
      overflow-y: auto;
    }

    #logList li {
      padding: 2px 0;
      border-bottom: 1px solid #2a2a3e;
    }
  </style>
</head>

<body>
  <h1>🎵 Sound Sorter</h1>
  <p class="subtitle">Clap, snap, or tap — I'm listening.</p>

  <button id="startBtn" onclick="startListening()">Start Listening 🎤</button>

  <div id="status">Click the button to begin.</div>

  <!-- This is where the big emoji reaction appears -->
  <div id="reactionPanel">🎵</div>

  <!-- Confidence bars — one per class -->
  <div id="bars">
    <!-- TODO: These will be generated dynamically once the model loads -->
    <!-- You don't need to edit this section -->
  </div>

  <!-- Detection log -->
  <div id="log">
    <h3>Recent Detections</h3>
    <ul id="logList"></ul>
  </div>


  <script>

    // ============================================================
    // TODO #1: PASTE YOUR MODEL URL HERE
    // Get this from Teachable Machine → Export → Upload (shareable link)
    // Example: "https://teachablemachine.withgoogle.com/models/ABC123/"
    // ============================================================
    const MODEL_URL = "YOUR_MODEL_URL_HERE/";


    // ============================================================
    // TODO #2: UPDATE THESE LABELS
    // These must EXACTLY match the class names you used in Teachable Machine.
    // Order matters — it should match the order in your model.
    // ============================================================
    const LABELS = [
      "Background Noise",  // usually the first class
      "Clap",
      "Snap",
      "Tap"
    ];


    // ============================================================
    // TODO #3: SET YOUR REACTIONS
    // Map each label to an emoji that will appear when it's detected.
    // You can also change these to text, colors, or anything you want.
    // ============================================================
    const REACTIONS = {
      "Background Noise": "😶",
      "Clap":             "👏",
      "Snap":             "🫰",
      "Tap":              "👆"
    };


    // ============================================================
    // CONFIG: Adjust these to tune detection sensitivity
    // ============================================================
    const CONFIDENCE_THRESHOLD = 0.80;  // 0–1. Lower = more sensitive, Higher = stricter
    const PREDICTION_INTERVAL  = 200;   // milliseconds between predictions (lower = faster)


    // ============================================================
    // INTERNAL STATE — don't change these
    // ============================================================
    let model, recognizer;
    let isListening = false;
    let lastDetected = null;
    const logEntries = [];


    // ============================================================
    // STEP 1: Load the model
    // Called automatically on page load — you don't need to change this.
    // ============================================================
    async function loadModel() {
      setStatus("Loading model…");

      try {
        // This tells TM audio library where to find your model
        const checkpointURL = MODEL_URL + "model.json";
        const metadataURL   = MODEL_URL + "metadata.json";

        recognizer = speechCommands.create(
          "BROWSER_FFT",   // uses browser's built-in audio processing
          undefined,
          checkpointURL,
          metadataURL
        );

        await recognizer.ensureModelLoaded();
        setStatus("Model loaded! Ready to listen.");
        buildBars();

      } catch (err) {
        setStatus("❌ Failed to load model. Check your MODEL_URL.");
        console.error("Model load error:", err);
      }
    }


    // ============================================================
    // STEP 2: Start listening
    // Called when the user clicks the button.
    // ============================================================
    async function startListening() {
      if (!recognizer) {
        setStatus("Model not loaded yet — wait a moment.");
        return;
      }
      if (isListening) return;

      isListening = true;
      document.getElementById("startBtn").disabled = true;
      document.getElementById("startBtn").textContent = "Listening… 🔴";
      setStatus("Listening! Try clapping, snapping, or tapping.");

      // Listen continuously and call onPrediction for each result
      await recognizer.listen(
        onPrediction,
        {
          includeSpectrogram: false,
          probabilityThreshold: 0.0,  // we handle thresholding ourselves below
          invokeCallbackOnNoiseAndUnknown: true,
          overlapFactor: 0.5
        }
      );
    }


    // ============================================================
    // STEP 3: Handle predictions
    // This is called ~5 times per second with model output.
    // scores: array of probabilities, one per class (0–1, sums to ~1)
    // ============================================================
    function onPrediction(result) {
      const scores = result.scores;

      // Update confidence bars
      updateBars(scores);

      // Find the class with the highest score
      let maxScore = 0;
      let maxIndex = 0;
      for (let i = 0; i < scores.length; i++) {
        if (scores[i] > maxScore) {
          maxScore = scores[i];
          maxIndex = i;
        }
      }

      const detectedLabel = LABELS[maxIndex] || `Class ${maxIndex}`;
      const confidence    = Math.round(maxScore * 100);

      // Only react if confidence is above our threshold
      if (maxScore >= CONFIDENCE_THRESHOLD) {

        // TODO #4: CALL YOUR REACTION FUNCTION HERE
        // Right now we just show an emoji. Want to do more? Add it here!
        // Examples:
        //   playSound("clap.mp3");
        //   changeBackground("#ff6600");
        //   triggerAnimation("explode");
        react(detectedLabel, confidence);

        // Log it (but don't spam the same sound repeatedly)
        if (detectedLabel !== lastDetected) {
          addLog(detectedLabel, confidence);
          lastDetected = detectedLabel;
        }

      } else {
        // Below threshold — show quiet state
        setReaction("…", false);
        lastDetected = null;
      }
    }


    // ============================================================
    // REACT: Show a reaction for a detected sound
    // TODO #5: Make this more interesting!
    // ============================================================
    function react(label, confidence) {
      const emoji = REACTIONS[label] || "❓";
      setReaction(emoji, true);
      setStatus(`Detected: ${label} (${confidence}% confident)`);

      // TODO: Add your own reactions here!
      // For example, if you want different things for each sound:
      //
      // if (label === "Clap") {
      //   document.body.style.background = "#1a1a2e"; // flash color
      //   setTimeout(() => document.body.style.background = "#1a1a2e", 200);
      // }
      //
      // if (label === "Snap") {
      //   playAudio("snap.mp3");
      // }
    }


    // ============================================================
    // HELPER: Play an audio file
    // Usage: playAudio("sounds/clap.mp3");
    // ============================================================
    function playAudio(src) {
      const audio = new Audio(src);
      audio.play().catch(e => console.warn("Audio play failed:", e));
    }


    // ============================================================
    // UI HELPERS — you can change these but don't need to
    // ============================================================

    function setStatus(msg) {
      document.getElementById("status").textContent = msg;
    }

    function setReaction(emoji, active) {
      const panel = document.getElementById("reactionPanel");
      panel.textContent = emoji;
      panel.style.transform = active ? "scale(1.2)" : "scale(1)";
    }

    function buildBars() {
      const container = document.getElementById("bars");
      container.innerHTML = "";
      LABELS.forEach((label, i) => {
        container.innerHTML += `
          <div class="bar-row">
            <span class="bar-label">${label}</span>
            <div class="bar-bg">
              <div class="bar-fill" id="bar-${i}"></div>
            </div>
          </div>`;
      });
    }

    function updateBars(scores) {
      scores.forEach((score, i) => {
        const bar = document.getElementById(`bar-${i}`);
        if (bar) bar.style.width = Math.round(score * 100) + "%";
      });
    }

    function addLog(label, confidence) {
      const time = new Date().toLocaleTimeString();
      logEntries.unshift(`${time} — ${label} (${confidence}%)`);
      if (logEntries.length > 10) logEntries.pop();
      const list = document.getElementById("logList");
      list.innerHTML = logEntries.map(e => `<li>${e}</li>`).join("");
    }


    // ============================================================
    // INIT: Load the model when the page is ready
    // ============================================================
    window.addEventListener("load", loadModel);

  </script>
</body>
</html>
```

---

## Quick Checklist Before Testing

- [ ] Replaced `YOUR_MODEL_URL_HERE` with your actual Teachable Machine URL
- [ ] Updated `LABELS` to match your class names exactly (check spelling + capitalization)
- [ ] Updated `REACTIONS` with the emojis or text you want
- [ ] Opened the file in **Chrome** (mic access is most reliable there)
- [ ] Allowed microphone access when prompted

---

## Stuck? Common Fixes

| Problem | Fix |
|---|---|
| "Failed to load model" | Double-check your MODEL_URL — does it end with `/`? |
| Model loads but never fires | Lower `CONFIDENCE_THRESHOLD` to `0.70` |
| Fires constantly for background noise | Raise threshold to `0.88`, or re-train with more background noise examples |
| Labels show as "Class 0", "Class 1" | Your LABELS array doesn't match the model — check Teachable Machine class names |
| No microphone prompt | Try a different browser, or check browser permissions in Settings |

---

## Next Steps

Once your basic version works, check out `extension-ideas.md` for ways to take it further!
