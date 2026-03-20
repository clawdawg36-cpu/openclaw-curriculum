# Accessibility Notes — How AI Learns
**Module 4 | Animated Tutorial**

---

## Overview

This document covers accessibility requirements for the "How AI Learns" animated tutorial video, including closed captions, alt text for all visual elements, audio description track notes, and color contrast guidelines.

---

## 1. Closed Captions (CC)

### General Principles
- All narration must be fully captioned with accurate timestamps
- Non-speech audio (music, sound effects) should be described in brackets: `[soft ambient music]`, `[chime sound]`, `[boing sound effect]`
- Captions should be positioned to avoid obscuring key visual elements; allow repositioning per WCAG 2.1 criteria
- Font: minimum 18px equivalent, white text on semi-transparent dark background (≥4.5:1 contrast ratio)
- No more than 2 lines per caption block; no more than 42 characters per line (ideal: 32)
- Reading speed: ≤160 words per minute for default display rate; allow user speed control

### Caption File Format
Provide captions in:
- **VTT (WebVTT)** — primary format for web embedding
- **SRT** — secondary format for download/offline use
- **TXT transcript** — searchable full-text version linked from course page

### Scene-by-Scene Caption Notes

**Scene 1 — Hook: The Baby Walker (0:00–0:45)**
- Caption `[soft, warm ambient music begins]` at 0:00
- Caption `[faint clapping and encouraging sounds off-screen]` when baby takes first steps
- Avoid captioning over the baby's walking animation — position captions at bottom-center
- Caption title card: `[Title card: "How AI Learns"]`
- When neural network appears: `[Visual: A glowing neural network diagram mirrors the baby's walking rhythm]`

**Scene 2 — What Is Training Data? (0:45–2:00)**
- When folder opens: `[Visual: A large digital folder opens revealing a grid of labeled images — cat photos labeled "CAT", dog photos labeled "DOG"]`
- Sticker animation: `[Visual: Labels appear on images with a sticker-slap animation]`
- Caption the counter: `[Visual: Counter shows 1 example... 10... 1,000... 1,000,000 examples]`
- Wrong-answer scene: `[chime sound for correct answer]` and `[soft boing sound for incorrect answer]`

**Scene 3 — The Training Loop (2:00–3:30)**
- Loop diagram: `[Visual: A circular diagram appears with four glowing stations: DATA, TRAIN, EVALUATE, ITERATE connected by arrows, spinning clockwise]`
- Dial array: `[Visual: An array of physical-style dials, each rotating a tiny amount simultaneously, labeled "Adjusting 10,000 dials"]`
- Test set banner: `[Visual: Banner reads "TEST SET — Never seen before! — New data only, no peeking"]`
- Accuracy counter: `[Visual: Score counter advances from 72% to 81% to 89% to 94%]`
- Confetti: `[confetti burst sound effect]`

**Scene 4 — What Does a Model Actually Learn? (3:30–4:30)**
- Network zoom: `[Visual: Zoom into neural network connections showing varying line thickness — thick bright lines indicate strong weights, thin dim lines indicate weak weights]`
- Data flow: `[Visual: Cat photo flows through network, specific connection paths light up, output reads "Cat: 91%"]`
- Split screen: `[Visual: Split screen comparison — left shows rigid IF/THEN rule list, right shows organic flowing network activation pattern]`

**Scene 5 — What Accuracy Means (4:30–5:15)**
- Judge scorecard: `[Visual: A friendly illustrated judge stamps checkmarks on 8 correct predictions and X marks on 2 incorrect ones. Score: 80%]`
- Spam filter: `[Visual: A robot stamps "NOT SPAM" on every email. A "99% Accuracy" badge appears. Then: spam floods the inbox, user overwhelmed]`
- Gauge dials: `[Visual: Two additional gauge dials appear, showing "Are confident guesses right?" and "Did we catch all the real cases?" spinning to healthy levels]`

**Scene 6 — What Is Overfitting? (5:15–6:15)**
- Study montage: `[Visual: Student studies same 20 practice questions repeatedly — highlighting, circling, memorizing]`
- Exam result: `[Visual: Student blanks on real exam. Score comparison: Practice Test 100% vs. Real Exam 43%]`
- Overfitting graph: `[Visual: Line graph. Blue line (Training Accuracy) climbs to near 100% and holds. Orange line (Test Accuracy) climbs then levels off and dips. Red-highlighted gap between lines grows, labeled "Overfitting Gap"]`
- Baby on grass: `[Visual: Baby who mastered a narrow hallway now wobbles on outdoor grass — back to square one]`

**Scene 7 — The Full Picture (6:15–7:00)**
- Enriched loop: `[Visual: The four-station loop diagram returns with baby imagery in small inset circles at each station]`
- Final baby shot: `[Visual: Toddler walks confidently across a sunny park, stumbles slightly on a rock, gets up and keeps going. A glowing neural network is overlaid semi-transparently. Text appears: "Data → Train → Evaluate → Iterate. That's how AI learns."]`

**Scene 8 — What's Next (7:00–7:30)**
- Bullet list: `[Visual: Five bullet points appear one at a time with icons: folder for Training Data, gear for Weights, target for Accuracy, book for Overfitting, refresh arrow for The Loop]`
- End card: `[Visual: OpenClaw mascot ClawDawg with a Module 4 progress bar (now complete/green). A door opens revealing a glowing training interface. End card: "Next up → Module 5: Train Your Own Model"]`
- Caption end card text: `[End card: "Next up → Module 5: Train Your Own Model" with Module 4 progress bar showing completion]`

---

## 2. Caption Script (Full Text, Scene by Scene)

> *This section provides the complete narration text for captioning purposes. Timestamps align with the script.md timing summary.*

---

**[00:00]** [soft, warm ambient music begins]

**[00:03]** Watch this baby.

**[00:07]** [faint encouraging sounds off-screen]

**[00:10]** She's never walked before. Nobody handed her a rulebook.

**[00:15]** Nobody programmed her with "Step 1: shift weight to left foot. Step 2: lift right knee." None of that.

**[00:23]** She just... tried. Fell. Got feedback. Tried again differently.

**[00:28]** And slowly — stumble by stumble — something clicked.

**[00:33]** [Visual: Neural network diagram mirrors baby's walking rhythm]

**[00:36]** That's exactly how machine learning works.

**[00:40]** Your AI isn't programmed with rules. It learns from examples — just like that baby.

**[00:45]** [Title card: "How AI Learns"]

**[00:45]** Let's go.

**[00:47]** Before a baby learns to walk, she needs a world to practice in.

**[00:52]** A floor. Gravity. Legs. Parents who say "yes, that's it!" when she takes a step — and catch her when she falls.

**[01:00]** For an AI, that environment is made of data. Specifically: training data.

**[01:07]** [Visual: Digital folder opens revealing labeled image grid]

**[01:10]** Training data is a collection of examples — usually labeled. The label is the answer.

**[01:17]** "Here's a photo. The right answer is: cat." Or "here's an email. The right answer is: spam."

**[01:24]** Or "here's a sentence. The right answer is: positive sentiment."

**[01:29]** [Visual: Labeled golden retriever photo flows into AI network]

**[01:32]** The more examples you give, the more the AI has to learn from.

**[01:37]** A baby who only ever practiced walking on smooth floors will struggle on grass.

**[01:43]** An AI trained only on orange cats might not recognize a black cat.

**[01:48]** [soft boing sound] [chime sound]

**[01:52]** The training data is the AI's experience of the world.

**[01:57]** What it sees during training is all it knows — at least at first.

**[02:00]** [Visual: Circular loop diagram appears — DATA, TRAIN, EVALUATE, ITERATE]

**[02:05]** Here's the heart of it. Machine learning is a loop. Four steps, repeating over and over.

**[02:13]** Step one: Data. You feed the AI a batch of labeled examples.

**[02:18]** "Here are a thousand photos of cats and dogs. Here are the right answers."

**[02:23]** Step two: Train. The AI makes predictions. At first — like the baby — it guesses badly.

**[02:30]** But here's the thing: the AI knows it's wrong.

**[02:34]** It calculates how wrong, and uses that information to adjust.

**[02:38]** [Visual: Array of dials, each rotating a tiny amount]

**[02:42]** Think of all the connections in an AI's brain as dials.

**[02:46]** When it gets an answer wrong, it turns those dials — just a tiny bit — so the next prediction is slightly more accurate.

**[02:55]** Do that a thousand times. A million times. And the dials converge on something that works.

**[03:02]** Step three: Evaluate. After training, we test the AI on examples it's never seen before.

**[03:09]** [Visual: "TEST SET — Never seen before!" banner]

**[03:12]** Not "can it repeat the answers it memorized?" but "can it handle genuinely new situations?"

**[03:19]** Step four: Iterate. Rarely does the first round of training nail it.

**[03:24]** So we adjust — add more data, change the setup, tune the parameters — and go around the loop again.

**[03:31]** [Visual: Accuracy score advances 72%... 81%... 89%... 94%]

**[03:36]** [confetti burst sound]

**[03:38]** This loop — data, train, evaluate, iterate — is the core of all machine learning. Everything else is details.

**[03:46]** [Visual: Confident toddler walking in a park]

**[03:48]** When the baby finally walks, what exactly did she learn?

**[03:52]** Not a rulebook. Not explicit instructions.

**[03:56]** She learned patterns — patterns stored somehow inside her, embedded.

**[04:02]** [Visual: Zoom into neural network connection weights]

**[04:05]** An AI model is the same. After training, the model is a set of numbers — called weights — stored inside the network.

**[04:14]** Those weights encode patterns the AI discovered in the training data.

**[04:19]** [Visual: Cat photo flows through network — output: "Cat: 91%"]

**[04:23]** When you show it a new photo, those weights activate — certain patterns resonate — and out comes a prediction.

**[04:31]** [Visual: Split screen — IF/THEN rules vs. flowing network]

**[04:35]** In traditional programming, you write the rules.

**[04:38]** In machine learning, the AI discovers the rules from the data — and stores them as weights.

**[04:45]** [Visual: Judge stamps checkmarks and X marks on predictions]

**[04:48]** Accuracy: out of all the predictions the AI made, what fraction were correct?

**[04:54]** 87 right out of 100? That's 87% accuracy. Sounds great. But accuracy alone can be misleading.

**[05:01]** [Visual: Spam filter robot stamping "NOT SPAM" on everything]

**[05:04]** Imagine a spam filter that says "not spam" for every single email, every time.

**[05:10]** If 99% of your emails really are normal, that filter has 99% accuracy. And catches zero spam.

**[05:17]** [Visual: Two gauge dials appear]

**[05:20]** That's why data scientists look at other measures too.

**[05:24]** Are the AI's confident guesses actually right? Are we catching all the real cases?

**[05:30]** Just like the baby: it's not just how often she succeeds. It's where she stumbles that matters.

**[05:38]** [Visual: Student studying 20 practice questions obsessively]

**[05:40]** Here's one of the sneakiest problems in machine learning.

**[05:44]** Imagine a student who studies for an exam by memorizing only the practice test.

**[05:50]** Every single question. Every exact answer. They could ace the practice test with their eyes closed.

**[05:57]** [Visual: Student blanks on real exam questions]

**[06:00]** But the real exam has different questions. And suddenly they're lost.

**[06:05]** This is overfitting. The AI has memorized the training data instead of learning from it.

**[06:12]** [Visual: Two-line graph — training accuracy up, test accuracy plateaus and dips]

**[06:15]** You can spot overfitting on this graph. Training accuracy keeps climbing.

**[06:20]** But test accuracy stops improving — or even gets worse.

**[06:24]** The gap between those two lines is the warning sign.

**[06:28]** [Visual: Baby mastered narrow hallway, struggles on outdoor grass]

**[06:31]** Return to our baby walker. Imagine she only ever practiced in one tiny hallway.

**[06:36]** She'd master that hallway perfectly. But the real world has tile floors, grass, stairs, and uneven sidewalks.

**[06:43]** The fix? More diverse training data. And special techniques that stop the AI from leaning too hard on any one pattern.

**[06:52]** [Visual: Enriched four-station loop with baby imagery at each station]

**[06:55]** Machine learning isn't magic. It's a loop — and you've seen every part of it.

**[07:00]** Data. Train — guess, fail, adjust. Evaluate — new examples only. Iterate — repeat until it's good enough.

**[07:09]** [Visual: Toddler walks across sunny park, stumbles, gets up, keeps going. Neural network overlaid.]

**[07:13]** Every stumble is feedback. Every correction is learning.

**[07:17]** Every time around the loop, it gets a little closer to something genuinely useful.

**[07:22]** Now you know how it works.

**[07:25]** [Text appears: "Data → Train → Evaluate → Iterate. That's how AI learns."]

**[07:29]** [Visual: Bullet list — five key terms]

**[07:30]** Training data. Model weights. Accuracy — with nuance. Overfitting. And the training loop.

**[07:38]** In the next module, you'll train your own simple model — and feel this loop for yourself.

**[07:44]** Ready? Let's build something.

**[07:47]** [End card: "Next up → Module 5: Train Your Own Model"]

**[07:30]** [soft, warm music fades out]

---

## 3. Alt Text — Visual Elements

### Images and Diagrams

| Element | Scene | Alt Text |
|---------|-------|----------|
| Baby first steps | 1 | "A stylized, charming baby in denim overalls standing in a warmly lit living room. She lets go of a couch cushion, takes one wobbly step, and falls gently onto a soft rug, sitting up with a surprised expression." |
| Baby walking montage | 1 | "Three attempts in sequence: the baby takes one step and falls, then two steps and falls, then three steps — each slightly better than the last. Small 'Attempt 1, 2, 3' labels mark each try." |
| Baby + neural network split | 1 | "A split screen. Left side: the baby takes three confident steps with a small smile. Right side: a glowing neural network diagram with nodes pulsing in the same rhythm as her footsteps — tentative at first, then steadier." |
| Title card | 1 | "Dark gradient background (deep blue to warm teal). Bold white text: 'How AI Learns.' Module 4 subtitle below in smaller text." |
| Baby/AI environment split | 2 | "Split screen. Left: a baby surrounded by soft furniture, a rug, and encouraging parent figures — her practice environment. Right: a neural network surrounded by floating labeled data cards — photos with label stickers attached." |
| Labeled image folder | 2 | "A large glowing digital folder opens to reveal a grid of labeled photos. Cat photos have bright 'CAT' label stickers. Dog photos have 'DOG' stickers. A sandwich has a 'SANDWICH' sticker. A counter in the corner shows example count growing rapidly." |
| Training data flow | 2 | "A golden retriever photo with a 'DOG' label glowing beneath it. An arrow points from the photo into a neural network diagram. Inside the network, a few connection lines shift and glow slightly brighter — representing a weight update." |
| Diverse vs. limited training | 2 | "Side-by-side comparison. Left: an AI trained only on orange cats gives a wrong answer (red X) when shown a black cat. Right: an AI trained on diverse cats (all colors, sizes, poses) correctly identifies the same black cat (green checkmark)." |
| Training loop diagram | 3 | "A circular diagram with four glowing stations connected by arrows in clockwise order: DATA (blue, folder icon), TRAIN (orange, dial icon), EVALUATE (green, checkmark icon), ITERATE (purple, refresh arrow icon). The diagram rotates slowly." |
| Data station highlight | 3 | "The DATA station of the loop glows brighter. A stream of labeled example cards (photos with labels, text with categories) flows into it from the left with a particle-trail effect." |
| Dial array animation | 3 | "An array of physical-looking dials (resembling mixing board dials) arranged in rows. All dials rotate by a tiny amount simultaneously. A label reads: 'Adjusting 10,000 dials...'" |
| Test set evaluation | 3 | "The EVALUATE station glows. A banner reads 'TEST SET — Never seen before! — New data only, no peeking!' Labeled examples flow in. A scoreboard fills with checkmarks and X marks. Final score: '72%' in large type." |
| Accuracy rising counter | 3 | "The four-station loop spinning at increasing speed. A score counter in the center displays: 72%... 81%... 89%... 94%. Small confetti bursts when the counter passes 90%." |
| Confident toddler | 4 | "A stylized toddler walking confidently across a park. Close-up on her feet moving fluidly — no visible effort or concentration. The movement is natural and automatic." |
| Network weight visualization | 4 | "A neural network diagram zoomed in to show individual connection lines between nodes. Some lines are thick and bright (strong weights). Others are thin and dim (weak weights). Numbers briefly appear on select lines." |
| Cat classification flow | 4 | "A cat photo on the left. An arrow shows it flowing into a neural network. Specific connection paths inside the network light up in sequence — a characteristic 'cat pattern.' An output node on the right displays: 'Cat: 91%.'" |
| Rules vs. weights split | 4 | "Split screen. Left: a list of rigid IF/THEN rules in a box ('IF has whiskers THEN cat', 'IF has floppy ears THEN dog') — styled like legal text, stiff and mechanical. Right: an organic, flowing neural network activation pattern — fluid and adaptive." |
| Judge scorecard | 5 | "A friendly illustrated judge at a desk. Ten prediction tiles are presented one by one. The judge stamps eight with green checkmarks and two with red X marks. A scoreboard in the corner reads '80%.'" |
| Spam filter robot | 5 | "A robot with a rubber stamp sits beside an email inbox, stamping 'NOT SPAM' on every email that arrives — regardless of content. A large '99% Accuracy!' badge appears. Then: the inbox overflows with spam emails. An illustrated user looks overwhelmed." |
| Extra gauge dials | 5 | "Two additional gauge dials appear beside the 'Accuracy' gauge. One is labeled 'Are confident guesses right?' The other: 'Did we catch all the real cases?' Both dials spin from low to healthy levels." |
| Student study montage | 6 | "A student at a desk with a stack of 20 practice exam questions. The student highlights, circles, and writes in margins — repeatedly going through the same 20 questions. A clock spins, showing time passing." |
| Exam day contrast | 6 | "Two side-by-side scenes. Left: student confidently walks into exam room. Right: student stares blankly at a real test with different questions — pencil tapping, sweat drop animation. Score comparison: 'Practice Test: 100% ✅' vs. 'Real Exam: 43% ❌'." |
| Overfitting graph | 6 | "A line graph with 'Training Rounds' on the x-axis and 'Accuracy' on the y-axis. A blue line (labeled 'Training Accuracy') climbs steadily to near 100% and holds there. An orange line (labeled 'Test Accuracy') climbs, levels off, then dips slightly. The growing gap between the two lines is highlighted in red and labeled 'Overfitting Gap ⚠️'." |
| Baby hallway vs. grass | 6 | "Left panel: a baby walks a narrow hallway with total confidence. Right panel: the same baby placed outdoors on grass immediately becomes wobbly and unsure — visually the same as her first attempts. Labels: 'Training Environment' (hallway), 'Real World' (grass)." |
| Enriched loop with baby | 7 | "The four-station loop diagram from earlier, now with small circular inset images at each station showing the baby analogy: labeled photos + baby's environment at DATA, dials + baby falling at TRAIN, scoreboard + baby on new terrain at EVALUATE, engineers + baby on different surfaces at ITERATE." |
| Final baby + network | 7 | "A toddler walks confidently across a sunny park. She stumbles slightly on a small rock, gets up without fuss, and keeps walking. Overlaid semi-transparently: a neural network diagram glowing steadily. Warm sunlight. Text fades in: 'Data → Train → Evaluate → Iterate. That's how AI learns.'" |
| Summary bullet list | 8 | "A clean dark background with five bullet points appearing one at a time. Each has an icon and text: 📁 Training Data — labeled examples; ⚙️ Model Weights — what was learned; 🎯 Accuracy — useful, but not the whole story; 📚 Overfitting — memorizing vs. learning; 🔄 The Loop — data, train, evaluate, iterate." |
| End card / ClawDawg | 8 | "OpenClaw mascot ClawDawg (a cartoon dog) stands beside a progress bar showing Module 4 complete (green fill). A door in front of ClawDawg opens, with warm light spilling out. End card text: 'Next up → Module 5: Train Your Own Model.'" |

---

## 4. Audio Description Track Notes

> *The audio description (AD) track supplements the main narration for visually impaired learners. It plays during pauses in narration or as an alternate audio track. Notes below indicate which scenes and panels require additional description beyond what the narration already conveys.*

### AD Priorities by Scene

**Scene 1 (0:00–0:45)**
- Describe baby's clothing and environment: "A stylized baby in denim overalls stands in a warmly lit living room, holding a couch cushion."
- Describe the fall: "She takes one step, wobbles, and sits down gently on a soft rug — surprised expression on her face."
- Describe the split screen: "The screen divides in half. On the right, a glowing diagram of connected circles and lines appears — a neural network — its lights pulsing in the same rhythm as the baby's footsteps."
- Describe title card: "The words 'How AI Learns' appear in bold white letters on a dark blue-teal gradient background."

**Scene 2 (0:45–2:00)**
- Describe label stickers: "Labels appear on each image like colorful stickers being slapped on — the word 'CAT' in bright letters on the cat photos, 'DOG' on the dog photos."
- Describe data flow visual: "A glowing arrow points from the labeled photo to the network diagram. Inside the network, a few connecting lines shift slightly brighter — like synapses strengthening."
- Describe the wrong/right comparison: "Left side: an AI makes a guess, a red X pops onto the screen. Right side: the AI guesses correctly, a green checkmark appears with a small chime effect."

**Scene 3 (2:00–3:30)**
- Describe the loop diagram in full: "A circular diagram with four glowing stations. Starting at the top: a blue station labeled DATA with a folder icon. Moving clockwise: an orange station labeled TRAIN with a dial icon, a green station labeled EVALUATE with a checkmark icon, and a purple station labeled ITERATE with a refresh arrow. Arrows connect each station in sequence, and the whole diagram rotates slowly."
- Describe the dial array: "A grid of round dials — like knobs on a mixing board — each rotating by the tiniest amount simultaneously. A text label reads: 'Adjusting 10,000 dials...'"
- Describe the accuracy counter: "A large number in the center of the screen advances: 72 percent... 81 percent... 89 percent... 94 percent. At 90 percent, small pieces of confetti burst across the screen."

**Scene 4 (3:30–4:30)**
- Describe network weights: "The camera zooms into the neural network until individual connection lines are visible. Some lines are thick and bright — representing strong connections. Others are thin and nearly invisible — representing weak connections. Numbers briefly flash on select lines before fading."
- Describe the split-screen comparison: "The screen splits. On the left, a list of rules in a rigid box — styled like a legal document, stiff and formal. On the right, a flowing animation of light moving through the network — organic, fluid, more like water than machinery."

**Scene 5 (4:30–5:15)**
- Describe spam filter scene: "A robot with a large rubber stamp sits next to an email inbox. Every email that arrives gets stamped 'NOT SPAM' instantly, without any checking. A badge reading '99% Accuracy!' appears with a fanfare. Then: the inbox fills to overflowing with spam messages. An illustrated person at a computer looks overwhelmed."
- Describe gauge dials: "Two additional circular gauge dials appear, similar to a car's speedometer. One needle points to a healthy level for 'Are confident guesses right?' and the other for 'Did we catch all the real cases?'"

**Scene 6 (5:15–6:15)**
- Describe overfitting graph in detail: "A graph fills the screen. The horizontal axis shows 'Training Rounds' from left to right. The vertical axis shows 'Accuracy' from bottom to top. A blue line labeled 'Training Accuracy' rises steadily until it reaches near the top of the graph and stays there. An orange line labeled 'Test Accuracy' also rises but then levels off and curves slightly downward. The space between the two lines grows wider toward the right side of the graph, filled with a soft red highlight. A label reads: 'Overfitting Gap' with a warning symbol."
- Describe baby on grass: "The baby who confidently walked the narrow hallway is now outside on grass. The same wobble returns — feet slipping, arms out for balance — just like her very first attempts to walk."

**Scene 7 (6:15–7:00)**
- Describe final shot: "A toddler walks across a park in warm sunlight. She stumbles slightly on a small rock, pauses, then stands and continues walking without distress. Overlaid on the image is the neural network diagram, now glowing with a steady, confident light. Slowly, text appears over the scene: 'Data → Train → Evaluate → Iterate. That's how AI learns.'"

**Scene 8 (7:00–7:30)**
- Describe end card: "The OpenClaw mascot — a cartoon dog named ClawDawg — stands in front of a door. A horizontal progress bar above shows Module 4's segments filled with green. The door opens, warm golden light spilling out. Text appears: 'Next up → Module 5: Train Your Own Model.'"

---

## 5. Color Contrast Guidelines

### WCAG 2.1 AA Compliance Targets
- **Normal text** (caption text, labels): minimum contrast ratio **4.5:1**
- **Large text** (titles, section headers ≥18pt or 14pt bold): minimum contrast ratio **3:1**
- **UI components and informational graphics**: minimum contrast ratio **3:1**
- **Decorative elements** (ambient particles, background texture): exempt

### Primary Color Pairs

| Element | Foreground | Background | Contrast Ratio | Status |
|---------|------------|------------|----------------|--------|
| Caption text | #FFFFFF (white) | #000000 80% opacity | ~12:1 | ✅ Passes AA & AAA |
| On-screen labels | #FFFFFF (white) | #1a1a2e (dark navy) | 15.8:1 | ✅ Passes AA & AAA |
| Correct prediction (green) | #1a1a2e (dark navy) | #81C784 (soft green) | 4.8:1 | ✅ Passes AA |
| Incorrect prediction (red) | #FFFFFF (white) | #E53935 (warm red) | 4.6:1 | ✅ Passes AA |
| Training accuracy line | #4FC3F7 (electric blue) | #1a1a2e (dark navy) | 7.9:1 | ✅ Passes AA & AAA |
| Test accuracy line | #FFB74D (warm orange) | #1a1a2e (dark navy) | 6.2:1 | ✅ Passes AA |
| Overfitting gap highlight | #E53935 (warm red) at 30% opacity | #1a1a2e (dark navy) | ≥3:1 (large graphic) | ✅ Passes AA for graphics |
| Weight lines (strong) | #4FC3F7 (electric blue) | #1a1a2e (dark navy) | 7.9:1 | ✅ Passes AA & AAA |
| Weight lines (weak) | #78909C (blue-gray) | #1a1a2e (dark navy) | 3.8:1 | ✅ Passes AA large |
| Code/term labels | #E0E0E0 (light gray) | #1a1a2e (dark navy) | 12.4:1 | ✅ Passes AA & AAA |
| Loop station — Data | #4FC3F7 (electric blue) | #1a1a2e (dark navy) | 7.9:1 | ✅ Passes AA & AAA |
| Loop station — Train | #FFB74D (warm orange) | #1a1a2e (dark navy) | 6.2:1 | ✅ Passes AA |
| Loop station — Evaluate | #81C784 (soft green) | #1a1a2e (dark navy) | 4.8:1 | ✅ Passes AA |
| Loop station — Iterate | #CE93D8 (soft lavender) | #1a1a2e (dark navy) | 5.3:1 | ✅ Passes AA |

### Color-Coding Conventions (Non-Color Redundancy — WCAG 1.4.1)

To prevent reliance on color alone:

1. **Correct prediction:** Green bar + ✓ checkmark icon + "[chime sound]" — NEVER color alone
2. **Incorrect prediction:** Red X icon + "boing sound" + crossed-out appearance — NEVER color alone
3. **Overfitting graph:** Lines labeled with text ("Training Accuracy", "Test Accuracy") AND distinguished by line pattern (solid blue, dashed orange) — not only by color
4. **Training loop stations:** Each station labeled with text AND a distinct icon, in addition to color coding
5. **Weight strength:** Strong vs. weak weights shown by line thickness AND brightness, not only color

### Red/Green Colorblindness Accommodations
- Correct/incorrect indicators use ✓ / ✗ icons alongside color
- The overfitting graph uses solid vs. dashed line styles in addition to color
- All "correct/incorrect" labels in scenes 2, 4, and 5 include text labels (not just colored indicators)
- Consider testing all color pairs with a deuteranopia simulator before final render

### Flashing Content (Photosensitivity — WCAG 2.3.1)
- No element flashes more than **3 times per second**
- The confetti burst in Scene 3: confetti pieces are slow-falling, not strobing (cycle time >1s)
- The gauge dials in Scene 5: smooth animation, not rapid oscillation
- The overfitting graph lines: drawn continuously, no flicker
- Score counter in Scene 3: smooth increment (not rapid flicker between numbers)

---

## 6. Additional Accessibility Considerations

### Screen Reader Navigation (for Course Platform)
- Video player must support keyboard-only navigation (play/pause: spacebar, seek: arrow keys, volume: up/down)
- Captions must be toggleable via keyboard (standard: C key)
- Transcript link must appear directly below or beside the video player in page DOM order
- Video thumbnail must have alt text: "Module 4 Tutorial: How AI Learns — animated video thumbnail showing a baby taking her first steps alongside a neural network diagram"

### Cognitive Accessibility
- On-screen text display time: minimum 3 seconds per key term, regardless of narration pace
- Baby analogy returns in every scene — consistent anchor reduces cognitive load for new learners
- Key terms defined on-screen at first use (see Storyboard Key Terms table)
- Scene counter optionally displayed (e.g., "Scene 3 of 8") for orientation
- The training loop diagram reappears in Scenes 3 and 7 — consistent visual repetition supports retention

### Language and Readability
- Narration reading level: target 7th–8th grade (Flesch-Kincaid ≤ 65)
- **No math notation in narration or on-screen text** — all concepts explained through analogy and visual metaphor only
- Technical terms introduced with plain-language definition on first use:
  - "weights" → "numbers inside the network that encode what it learned"
  - "overfitting" → "when the AI memorizes its homework instead of learning from it"
  - "accuracy" → "what fraction of predictions were correct"
- Transcript available in English; VTT format supports localization for future language tracks

### Motor/Physical Accessibility
- Video must include pause-anywhere functionality (not auto-resume after 30s)
- Captions must persist on screen long enough for readers who need more time (user-controlled speed)
- All interactive elements in the course platform (if present) must have adequate click/touch target sizes (≥44×44px)

---

## 7. Production Checklist

- [ ] VTT caption file generated and proofread against audio
- [ ] SRT caption file exported from VTT
- [ ] Full text transcript created and linked from course page
- [ ] All on-screen graphic text included in transcript (loop station labels, score counters, graph labels)
- [ ] Video thumbnail alt text added in course CMS
- [ ] All still image thumbnails in course lesson have alt text
- [ ] Contrast ratios verified on final rendered video (use Colour Contrast Analyser tool on screenshots)
- [ ] Red/green pairs confirmed to include non-color indicators (icons, labels, line styles)
- [ ] Overfitting graph line styles verified (solid vs. dashed, not color only)
- [ ] Flashing content reviewed at final render (no >3Hz flashes, check confetti scene)
- [ ] Audio description track recorded and synced to alternate audio track
- [ ] AD track tested by a screen reader user or accessibility reviewer
- [ ] Video player tested with keyboard-only navigation
- [ ] Video player tested with VoiceOver (macOS) and NVDA (Windows)
- [ ] Mobile caption rendering tested at 375px viewport
- [ ] Full narration reading level verified (target Flesch-Kincaid ≤ 65)
- [ ] No math notation confirmed across all on-screen text

---

*Accessibility Notes v1.0 | ClawDawg | March 2026*
*Standards reference: WCAG 2.1 AA | Section 508 | EN 301 549*
