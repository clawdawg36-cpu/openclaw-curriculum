# How LLMs Work — Storyboard
**Module 5 | Animated Tutorial | 10 Scenes × ~42 seconds**

---

## Scene 1 — Hook: The World's Best Autocomplete
**Timestamp:** 0:00–0:42 | **Duration:** 42s

### Panel 1A (0:00–0:10)
**Visual:** Close-up of a phone keyboard. Partial text in the message field: "Happy birth—". Above the keyboard, three suggestion chips appear one by one: "day," "birthday," "day to you."
**Animation:** Suggestion chips pop in sequentially with slight bounce. One gets tapped — "day" — message completes.
**Audio cue:** Soft ambient keyboard tap sounds begin.
**Narration:** *"You've seen it a thousand times. You start typing a text, and your phone guesses what comes next."*

### Panel 1B (0:10–0:22)
**Visual:** The phone keyboard grows. It expands off-screen edges, becoming enormous — a whole landscape of keys. Streams of text spiral inward from all sides: book covers, Wikipedia pages, forum posts, code snippets, recipes. All dissolving into the keyboard.
**Animation:** Keyboard scales up over 5s. Text streams flow in from screen edges (particle effect) and dissolve into center.
**Narration:** *"Now imagine that same autocomplete, but instead of learning from your text messages, it read — basically everything humans have ever written."*

### Panel 1C (0:22–0:32)
**Visual:** The streams of text coalesce into a glowing, brain-shaped cloud of floating words. The words pulse gently. The cloud is big, warm, slightly mysterious but not scary.
**Animation:** Text particles cluster into cloud shape over 4s. Words visible within: "science," "history," "curiosity," "once upon a time," "print(hello)."
**Narration:** *"Every book, every article, every forum post, every piece of code. Billions of pages."*

### Panel 1D (0:32–0:42)
**Visual:** Title card: **"How LLMs Work"** fades in over the word-cloud. Subtitle: *"Demystifying the world's best autocomplete."*
**Animation:** Title fades in with gentle scale-up. Holds 4s. Slides up as Scene 2 begins.
**Narration:** *"That, in a nutshell, is a large language model. Let's peel it apart."*

---

## Scene 2 — What's a Token?
**Timestamp:** 0:42–1:24 | **Duration:** 42s

### Panel 2A (0:42–0:52)
**Visual:** The word "UNBELIEVABLE" in large, chunky letters. A pair of animated scissors floats in from the right. It snips: "UN" | "BE" | "LIEV" | "ABLE." Each chunk bounces free and gets a colored box.
**Animation:** Scissors cut in two quick snips. Each chunk tumbles off and lands in its own box.
**Colors:** UN = blue, BE = orange, LIEV = green, ABLE = purple.
**Narration:** *"Before an LLM can understand anything, it has to chop your words into pieces. Those pieces are called tokens."*

### Panel 2B (0:52–1:04)
**Visual:** Sentence: "I love pizza!" Each token gets its own colored box: [I] [love] [pizza] [!]. Small arrows labeled "1 token each" point to each box. Then "Unbelievable" reappears, its three pieces labeled individually.
**Animation:** Boxes slide in under each word. Labels pop in.
**Layout:** Sentence at top, token boxes below, labels below those.
**Narration:** *"Tokens are roughly word-sized chunks — but not always. Common words might be one token. Longer words get broken into smaller pieces."*

### Panel 2C (1:04–1:14)
**Visual:** A kitchen counter. Whole vegetables on the left (a carrot, a potato, a celery stalk). A chef chops them into pieces. The pieces fall into labeled piles: each piece gets a small "TOKEN" tag.
**Animation:** Knife chops in smooth animated motion. Pieces scatter into organized piles.
**Narration:** *"Chopping things down lets the model handle language it's never seen before — by breaking it into familiar parts."*

### Panel 2D (1:14–1:24)
**Visual:** Two examples: "ChatGPT" → ["Chat"]["G"]["PT"]. "Zendaya" → ["Z"]["end"]["aya"]. Both tokenized, boxes shown.
**Animation:** Each word appears, then gets chopped and boxed.
**Bottom caption:** *"New words? No problem — just more pieces."*
**Narration:** *"Right now, reading this sentence, your brain is doing something like this — and you didn't even notice."*

---

## Scene 3 — The Context Window
**Timestamp:** 1:24–2:06 | **Duration:** 42s

### Panel 3A (1:24–1:34)
**Visual:** A long scroll of text stretches across a wide dark screen. A spotlight shines on one section in the middle. The lit section has a label below it: "Context Window." The rest of the scroll is in shadow.
**Animation:** Spotlight fades in. Text outside it is desaturated and dim.
**Narration:** *"An LLM doesn't read your entire conversation from memory. It works with a context window — a chunk of recent text it can 'see' at one time."*

### Panel 3B (1:34–1:44)
**Visual:** A wooden desk viewed from above. On the desk: a single page of notes (the context window). Behind the desk: tall filing cabinets (labeled "Training Data — Not Accessible During Conversation"). Only the desk page is accessible.
**Animation:** Camera descends slowly onto the desk. Filing cabinets blur into background.
**Narration:** *"Think of it like a desk. The model can only work with what's on the desk — the recent conversation, any context you've given it."*

### Panel 3C (1:44–1:54)
**Visual:** Conversation bubbles stack up on the desk, filling it. When the desk is full, the oldest bubble slides off the back edge and disappears. New bubbles keep arriving. The desk stays full but the oldest messages are gone.
**Animation:** Bubbles slide in from top-left. Oldest slides off back-right edge. Smooth, continuous motion.
**Narration:** *"When the desk gets full, older messages fall off. The model can't see them anymore."*

### Panel 3D (1:54–2:06)
**Visual:** A person reading a letter — but only the most recent page is on the desk; the earlier pages are gone. They write a reply that makes sense given what they can see, but clearly doesn't remember details from the start of the letter.
**Animation:** Character reads page, writes response. Earlier pages shown faded/blurred behind a "can't see" barrier.
**Caption:** *"Not forgetting on purpose — just can't look back that far."*
**Narration:** *"The context window is one of the biggest practical limits of language models today."*

---

## Scene 4 — Next-Word Prediction
**Timestamp:** 2:06–2:48 | **Duration:** 42s

### Panel 4A (2:06–2:18)
**Visual:** A text field with: "The cat sat on the ___." A spinning wheel of word options appears to the right. Words on the wheel segments, sized by probability: "mat" (biggest slice), "roof" (medium), "couch" (medium-small), "moon" (small), "treaty" (tiny sliver).
**Animation:** Wheel spins slowly, then decelerates. Segment sizes clearly proportional to likelihood.
**Style:** Bright colors, game-show wheel aesthetic — playful.
**Narration:** *"Given everything in the context window, an LLM's job is to predict: what token should come next?"*

### Panel 4B (2:18–2:28)
**Visual:** The wheel slows to a stop — arrow lands on "mat." "mat" pops into the blank. New blank appears: "The cat sat on the mat and ___." New wheel spins. Arrow lands on "purred." Word pops in. Repeat one more time.
**Animation:** Wheel → stop → word fills blank → new wheel → repeat. Each cycle takes ~3s.
**Narration:** *"'mat' is very likely — but so is 'roof' or 'floor.' The model doesn't always pick the top choice. That's part of why it can surprise you."*

### Panel 4C (2:28–2:38)
**Visual:** The process zooms out to show the token-by-token building. Tokens accumulate left to right like beads appearing on a string. Each bead: one prediction. The string grows into a full, fluent sentence.
**Animation:** Each bead appears with a small "pop." The string extends across the screen. End result: a complete, readable sentence.
**Narration:** *"This happens one token at a time, incredibly fast. The model isn't thinking up a sentence all at once — it's building it token by token."*

### Panel 4D (2:38–2:48)
**Visual:** The bead-string sentence complete. Bold caption underneath: **"Prediction, repeated at blinding speed."**
**Animation:** Caption fades in. A fast-forward animation shows the string of beads building much faster — blur effect.
**Narration:** *"Each choice shaped by everything that came before. That's it. That's the whole trick."*

---

## Scene 5 — Where Does It Learn From?
**Timestamp:** 2:48–3:30 | **Duration:** 42s

### Panel 5A (2:48–3:00)
**Visual:** An enormous, impossible library — shelves extending in every direction, floor-to-ceiling, receding into fog. Books glow. Streams of text spiral off their spines and float toward a central pulsing orb.
**Animation:** Books open, pages flutter, text detaches as light streams and flows toward the central orb. Warm gold light.
**Narration:** *"Before you ever talk to it, the model was trained on an enormous amount of text — hundreds of billions of words, maybe more."*

### Panel 5B (3:00–3:10)
**Visual:** The stream of text is labeled with source types: "Wikipedia," "Books," "Code," "News," "Forums." Each type a different color stream. All converging on the orb.
**Animation:** Labels appear as ribbons on each stream.
**Narration:** *"Wikipedia, books, code repositories, news articles — all feeding in during training."*

### Panel 5C (3:10–3:20)
**Visual:** A simplified loop animation: model sees a sentence with one word hidden. It guesses. WRONG — red flash, a small dial adjusts slightly (the weights). Guess again. Still wrong — smaller adjustment. Eventually: RIGHT — green flash. The loop spins faster and faster, representing billions of iterations.
**Animation:** Loop cycles at slow speed (2s/cycle), then speeds up to blur.
**Narration:** *"During training, the model guessed what words came next, got told whether it was right, and adjusted — billions of times."*

### Panel 5D (3:20–3:30)
**Visual:** The orb stabilizes and glows softly. The library fades behind it. No books are stored in the orb — instead, snippets of pattern are visible inside it, glowing and shifting. Caption: *"Not storing the books. Storing the patterns."*
**Animation:** Orb settles. Internal glow shows abstract patterns (not actual text). Library fades to translucent.
**Narration:** *"It doesn't store text like a hard drive. It stores the patterns — billions of tiny adjustments. What's left is something more like... intuition."*

---

## Scene 6 — Why It's Fluent (But Not Always Right)
**Timestamp:** 3:30–4:12 | **Duration:** 42s

### Panel 6A (3:30–3:42)
**Visual:** A beautiful, well-formatted sentence types itself onto a clean white background:
*"The ancient Greeks believed that the heart was the seat of all human thought."*
A small red asterisk appears next to it. Then below it: *"— Actually, this is about Aristotle, but the phrasing makes it sound more certain than it is."*
**Animation:** Sentence types in at natural reading pace. Asterisk pops in. Annotation fades in below.
**Narration:** *"LLMs are very good at producing fluent text. Sentences that sound right. Paragraphs that are easy to read."*

### Panel 6B (3:42–3:52)
**Visual:** A confident speaker at a podium. They speak eloquently. Subtitle bar below shows their words — but one line reads: *"The moon has seventeen natural satellites."* The audience nods. No one questions it.
**Animation:** Speaker gestures confidently. Subtitle updates. Audience reaction: thoughtful nods.
**Caption:** *"Fluent ≠ Correct"*
**Narration:** *"But the model is optimizing for what sounds right — not what is true. It doesn't have a fact-checker. It has patterns."*

### Panel 6C (3:52–4:02)
**Visual:** Two side-by-side doors, labeled "PROBABLE" and "CORRECT." A dotted line shows that most of the time the doors lead to the same room. But a diverging path shows sometimes they lead to different places.
**Animation:** Doors appear. The "same room" path is wide and well-lit. The "different rooms" path is narrow and shows up less frequently.
**Narration:** *"Most of the time, 'probable' and 'correct' overlap. But sometimes — for obscure facts, recent events, things that were ambiguous in training — the model produces fluent, confident nonsense."*

### Panel 6D (4:02–4:12)
**Visual:** The confident speaker again. This time the subtitle bar shows something clearly made-up, written in a very scholarly tone. The audience still nods. A label floats above: **"Hallucination."**
**Animation:** Subtitle text is visually stylized — looks authoritative but subtle "wrong" indicator (slight red tinge).
**Caption:** *"Not lying. Just doing exactly what it was trained to do."*
**Narration:** *"This is sometimes called hallucination. The model generates something that sounds right because it fits the pattern — even if it isn't true."*

---

## Scene 7 — How to Use This Well
**Timestamp:** 4:12–4:54 | **Duration:** 42s

### Panel 7A (4:12–4:22)
**Visual:** Split screen. Left side: a person hands a rough draft to an editor — collaborative, productive. Right side: a person writing down every word an oracle says without questioning anything. Caption below each: "Useful tool" vs. "Infallible oracle."
**Animation:** Both scenes animate simultaneously. Left side: warm, fluid. Right side: slightly rigid, over-serious.
**Narration:** *"So what does all this mean for how you use it?"*

### Panel 7B (4:22–4:32)
**Visual:** A checklist card. Items appear with green check marks as the narrator speaks: "Write a first draft ✓", "Explain a concept ✓", "Brainstorm ideas ✓", "Debug code ✓", "Translate a phrase ✓."
**Animation:** Each item slides in from left and check mark pops in.
**Style:** Clean, friendly card — not an overwhelming wall of text.
**Narration:** *"Great for brainstorming, drafting, explaining, summarizing, translating, coding. These tasks align with what it does well."*

### Panel 7C (4:32–4:42)
**Visual:** Same checklist. New items appear with a yellow caution symbol: "Cite this article ⚠", "What happened in 1847 ⚠", "Give me exact stats on X ⚠." Below each: "→ Verify."
**Animation:** Items slide in, caution symbol pops in (not alarming — just a heads up).
**Narration:** *"Riskier as a sole source for specific facts. Dates, names, statistics, citations — always verify."*

### Panel 7D (4:42–4:54)
**Visual:** Two prompt boxes side by side. Left: "Explain photosynthesis." Right: "Explain photosynthesis to a 10-year-old who loves video games, in about 3 sentences." Arrows to two response boxes — the right response is clearly more tailored and useful.
**Animation:** Both prompts and responses appear together. Right side glows slightly to indicate it's better.
**Caption:** *"More context = better signal = better predictions."*
**Narration:** *"The more specific context you give, the better. Because the model works with what's in the context window — more signal, better output."*

---

## Scene 8 — Putting It All Together
**Timestamp:** 4:54–5:36 | **Duration:** 42s

### Panel 8A (4:54–5:04)
**Visual:** A blank horizontal assembly diagram. Five labeled building blocks, not yet assembled: "Tokens," "Context Window," "Next-Token Prediction," "Training," "Fluent — Not Infallible."
**Animation:** Blocks appear in a row, not yet connected. Each block is color-coded and has a small icon.
**Narration:** *"Let's run through the whole picture one more time, fast."*

### Panel 8B (5:04–5:18)
**Visual:** Block 1 ("Tokens"): scissors icon, chopping a word. Arrow → Block 2 ("Context Window"): desk icon, tokens landing on the desk. Arrow → Block 3 ("Next-Token Prediction"): probability wheel spinning and landing on a token. Arrow → Block 4 ("Training"): glowing orb.
**Animation:** Each block activates and connects to the next as the narration mentions it. Arrow appears between each pair.
**Narration:** *"Tokens → context window → next-token prediction, guided by training on billions of words."*

### Panel 8C (5:18–5:28)
**Visual:** Block 5 ("Fluent — Not Infallible"): the two-door icon. Connects to Block 3.  All five blocks now connected in a flow. The complete machine is assembled.
**Animation:** Block 5 snaps into place. Machine "hums" — subtle vibration animation.
**Narration:** *"The result: text that flows naturally — but needs your judgment to catch when 'probable' isn't the same as 'right.'"*

### Panel 8D (5:28–5:36)
**Visual:** A question enters the left side of the machine — a text bubble with a "?". It flows through all five blocks. An answer exits the right side — a text bubble with complete text. A human figure reads it and gives a thoughtful thumbs-up (not a blind one — thinking expression).
**Animation:** Question bubble flows smoothly through machine. Answer emerges. Human reacts with considered approval.
**Caption:** *"Not magic. Not a mind. Extremely fast autocomplete at scale."*
**Narration:** *"That's an LLM. Not magic. A very powerful pattern-matching machine trained on human language."*

---

## Scene 9 — What This Means for You
**Timestamp:** 5:36–6:18 | **Duration:** 42s

### Panel 9A (5:36–5:46)
**Visual:** ClawDawg sits at a desk with a chat interface open. He types a message. A response streams in. He reads it, nods. Then opens a second browser tab and quickly checks one fact from the response. Satisfied, he uses the rest.
**Animation:** Character typing, response streaming in, second tab opens, quick check, back to main window.
**Style:** Warm, relatable — not clinical.
**Narration:** *"When you talk to OpenClaw, you're not talking to something that knows things the way a person does."*

### Panel 9B (5:46–5:56)
**Visual:** ClawDawg's chat bubble zooms out slightly. Inside the chat bubble, a mini pipeline diagram is visible — the same five blocks from Scene 8, tiny but recognizable.
**Animation:** Zoom out reveal. Pipeline visible inside the bubble like a clock face inside glass.
**Caption:** *"Every response: tokens → context → prediction → output."*
**Narration:** *"You're talking to a sophisticated pattern-completer that has absorbed enormous amounts of human knowledge."*

### Panel 9C (5:56–6:08)
**Visual:** Three quick vignettes in a 3-panel grid: 1) Student gets LLM explanation of history concept → opens textbook to confirm. 2) Developer gets LLM bug explanation → runs the fix in terminal. 3) Writer gets LLM draft paragraph → edits it their own way.
**Animation:** Quick cuts, 3s each. Each ends with the human doing the final step themselves.
**Narration:** *"The more you understand what's happening under the hood, the better you'll be at knowing when to trust it, push back, or verify."*

### Panel 9D (6:08–6:18)
**Visual:** ClawDawg gives a thumbs-up. Speech bubble above him: *"I'm a really good starting point. You're the expert on your own life."*
**Animation:** Thumbs-up pops in. Speech bubble types itself.
**Tone:** Warm, slightly self-aware.
**Narration:** *"The AI is a powerful tool. You're the person holding it."*

---

## Scene 10 — Teaser: Your Agent Learns to Talk
**Timestamp:** 6:18–7:00 | **Duration:** 42s

### Panel 10A (6:18–6:28)
**Visual:** Black screen. Terminal cursor blinks center-frame. Monospace font. A conversation appears line by line — a user message, then a response, then another message, then another response. Each response builds one token at a time.
**Animation:** Text types in at natural pace. Responses appear token-by-token, slight delay between each.
**Style:** Dark terminal aesthetic. Monospace. Subtle green glow.
**Narration:** *"You've now seen the engine under the hood. Every message your OpenClaw agent sends is built token by token, guided by context, shaped by training."*

### Panel 10B (6:28–6:38)
**Visual:** Semi-transparent "under the hood" overlay on the chat: inside each response bubble, the probability wheel from Scene 4 spins in miniature as each token appears — then disappears once the token is placed.
**Animation:** Overlay fades in, wheels spin briefly per token, then fade. Not overwhelming — subtle.
**Narration:** *"When it writes you a poem, helps you debug code, or explains something you've never understood before — that's what's happening, billions of times a second."*

### Panel 10C (6:38–6:50)
**Visual:** ClawDawg at his desk with the chat open. Now we can see the gears working inside the chat bubbles (a nod to Scene 9). He's not mystified — he's informed.
**Animation:** Gears spin subtly. ClawDawg looks engaged, not awed.
**Narration:** *"In the next module, we're going to look at how you can shape that process with better prompts — because now you know what the model is actually doing."*

### Panel 10D (6:50–7:00)
**Visual:** The gear-bubbles fade to a clean chat interface. ClawDawg waves. End card appears: **"Next up: Module 6 — Writing Prompts That Actually Work."** A simple progress bar shows Module 5 complete, Module 6 next.
**Animation:** Smooth transition to end card. Progress bar fills to Module 5 then lights up Module 6.
**End card text:**
- "Next up → Module 6: Writing Prompts That Actually Work"
- Module progress bar shown
**Narration:** *"You're not just a user anymore. You understand how this works."*

---

## Production Notes

### Animation Style
- **Overall aesthetic:** Clean, modern explainer — warm and curious, not clinical or cold
- **Color palette:** Dark background (#1a1a2e), accents: warm gold (#FFD54F), electric blue (#4FC3F7), soft green (#81C784), coral (#FF7043)
- **Typography:** Primary — DM Sans or Inter; Code — JetBrains Mono
- **Transitions:** Smooth dissolves (0.3s) between panels; hard cuts for emphasis/contrast moments

### Pacing Notes
- Scenes 1–2: Slightly slower; hook needs to land, token concept needs to settle
- Scenes 3–4: Core mechanics — let visuals carry the load; don't rush the context window reveal
- Scenes 5–6: Build to the "fluent but not infallible" punchline; this is the key insight
- Scenes 7–8: Practical and recap — can move faster, audiences are oriented now
- Scenes 9–10: Warm and inspiring — slow down for the human-in-the-loop moment

### Key Visual Motifs (Maintain Consistency)
1. **The phone keyboard** (Scene 1) — re-appear briefly in Scene 8 recap
2. **The probability wheel** (Scene 4) — reused in Scene 10 mini overlay
3. **The glowing orb of patterns** (Scene 5) — referenced in Scene 8 pipeline block
4. **The two doors** (Scene 6) — referenced in Scene 8 pipeline block
5. **ClawDawg mascot** — Scenes 9 and 10; warm, relatable, not expert-posturing

### Sound Design
- Background: Warm ambient electronic; slightly more "library" feeling than technical
- Keyboard tap sounds: Scenes 1, 10
- Token-chop sound: Scene 2 (soft snipping sound)
- Probability wheel: Scene 4 (ratcheting wheel click)
- Correct prediction chime: Scene 5 training loop
- Scene 10: Transition to slightly hopeful, forward-looking tone

---

*Storyboard v1.0 | ClawDawg | March 2026*
