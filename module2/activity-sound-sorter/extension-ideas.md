# 🚀 Sound Sorter — Extension Ideas

You got the basics working. Here's how to make it genuinely impressive.

---

## 🎮 Level 1: Visual Polish

These are quick wins — 15–30 minutes each.

### 1A. Pulse Animation
Make the reaction emoji pulse when a sound is detected.

```css
@keyframes pulse {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.4); }
  100% { transform: scale(1); }
}

.detected {
  animation: pulse 0.4s ease-in-out;
}
```

```javascript
function react(label, confidence) {
  const panel = document.getElementById("reactionPanel");
  panel.textContent = REACTIONS[label] || "❓";
  panel.classList.remove("detected");
  void panel.offsetWidth; // force reflow to restart animation
  panel.classList.add("detected");
}
```

---

### 1B. Color Themes Per Sound
Each sound gets its own color scheme.

```javascript
const THEMES = {
  "Clap": { bg: "#2d1b69", accent: "#9b59b6" },
  "Snap": { bg: "#1a2d1b", accent: "#27ae60" },
  "Tap":  { bg: "#2d1b1b", accent: "#e74c3c" },
  "Background Noise": { bg: "#1a1a2e", accent: "#555" }
};

function applyTheme(label) {
  const theme = THEMES[label] || THEMES["Background Noise"];
  document.body.style.background = theme.bg;
  document.querySelectorAll(".bar-fill").forEach(b => b.style.background = theme.accent);
}
```

---

### 1C. Combo Counter
Track how many times each sound was detected and display counts.

```javascript
const counts = { "Clap": 0, "Snap": 0, "Tap": 0 };

// In your react() function:
if (counts[label] !== undefined) {
  counts[label]++;
  document.getElementById(`count-${label}`).textContent = counts[label];
}
```

---

## 🎵 Level 2: Audio Reactions

### 2A. Play Sound Effects
Add actual audio files to your project folder and play them on detection.

```javascript
const SOUNDS = {
  "Clap": "sounds/crowd-cheer.mp3",
  "Snap": "sounds/snap.mp3",
  "Tap":  "sounds/drum-hit.mp3"
};

function react(label, confidence) {
  if (SOUNDS[label]) playAudio(SOUNDS[label]);
  // ... rest of your reaction
}
```

**Free sound effect sources:**
- [freesound.org](https://freesound.org)
- [pixabay.com/sound-effects](https://pixabay.com/sound-effects/)
- [zapsplat.com](https://www.zapsplat.com)

---

### 2B. Synthesize Tones with Web Audio API
No files needed — generate tones in code.

```javascript
const audioCtx = new AudioContext();

function playTone(frequency, duration = 0.3) {
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.frequency.value = frequency;
  gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

  oscillator.start();
  oscillator.stop(audioCtx.currentTime + duration);
}

// Map sounds to musical notes (Hz)
const TONES = {
  "Clap": 523.25,  // C5
  "Snap": 659.25,  // E5
  "Tap":  783.99   // G5
};

// In react(): if (TONES[label]) playTone(TONES[label]);
```

**Challenge:** Make a 3-sound melody — clap, snap, tap in order plays a chord!

---

## 🎲 Level 3: Control a Game

### 3A. Sound-Controlled Pong / Breakout
Use sounds as game controls.
- **Clap** = move left
- **Snap** = move right
- **Tap** = speed boost

```javascript
// In react():
if (label === "Clap")  game.moveLeft();
if (label === "Snap")  game.moveRight();
if (label === "Tap")   game.boost();
```

Try this with a simple p5.js game — there are tons of starter templates on [openprocessing.org](https://openprocessing.org).

---

### 3B. Sound-Driven Particle System (p5.js)

Add p5.js and create particles that explode based on sound intensity.

```html
<script src="https://cdn.jsdelivr.net/npm/p5@1.9.0/lib/p5.min.js"></script>
```

```javascript
let particles = [];
let currentLabel = null;

function setup() {
  createCanvas(400, 300).parent("canvas-container");
  background(26, 26, 46);
}

function draw() {
  background(26, 26, 46, 30); // semi-transparent = trail effect

  // Spawn new particles on detection
  if (currentLabel && currentLabel !== "Background Noise") {
    for (let i = 0; i < 5; i++) {
      particles.push(new Particle(width/2, height/2, currentLabel));
    }
  }

  // Update and draw particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].draw();
    if (particles[i].isDead()) particles.splice(i, 1);
  }
}

class Particle {
  constructor(x, y, label) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(2, 8));
    this.life = 255;
    this.col = label === "Clap"  ? color(155, 89, 182) :
               label === "Snap"  ? color(39, 174, 96)  :
               label === "Tap"   ? color(231, 76, 60)  : color(100);
  }
  update() {
    this.pos.add(this.vel);
    this.vel.mult(0.95);
    this.life -= 8;
  }
  draw() {
    noStroke();
    fill(red(this.col), green(this.col), blue(this.col), this.life);
    circle(this.pos.x, this.pos.y, 8);
  }
  isDead() { return this.life <= 0; }
}

// In your react() function:
function react(label, confidence) {
  currentLabel = label;
  setTimeout(() => currentLabel = null, 200); // reset after 200ms
}
```

---

## 🏆 Level 4: Full Project Ideas

### Project A: Sound DJ Board
Build a 3x3 grid. Each cell maps to a sound+action combo. Clap triggers row 1, snap triggers row 2, tap triggers row 3. Hitting the same sound 3 times unlocks a "special effect."

### Project B: Accessibility Input Device
Build a web form or simple game that can be controlled *entirely* by clapping, snapping, and tapping — no hands needed for the controls. Think about how this could help people with limited mobility.

### Project C: Beat Machine
Use a timer + sound detection to build a step sequencer. Each detected sound adds a beat to a looping pattern. Record a 4-beat pattern, then loop it with synthesized audio.

### Project D: Mood Tracker
Tap once per mood on a 1–3 scale (clap = happy, snap = neutral, tap = sad). Build a local chart that shows your mood over time using localStorage.

---

## Resources for Going Further

- [p5.js examples gallery](https://p5js.org/examples/)
- [Web Audio API on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
- [ml5.js](https://ml5js.org/) — friendlier ML for p5.js
- [Tone.js](https://tonejs.github.io/) — professional music synthesis in the browser
- [OpenProcessing](https://openprocessing.org/) — community p5.js sketches (great for inspiration)

---

*The best extension is one you actually want to build. Pick something that excites you, then figure out how to make it work.*
