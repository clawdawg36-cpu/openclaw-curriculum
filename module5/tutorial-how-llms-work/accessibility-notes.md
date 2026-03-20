# Accessibility Notes — How LLMs Work
**Module 5 | Animated Tutorial**

---

## Overview

This document covers accessibility requirements for the "How LLMs Work" animated tutorial video, including closed captions, alt text for all visual elements, and color/design guidelines for inclusive viewing.

---

## 1. Closed Captions (CC)

### General Principles
- All narration must be fully captioned with accurate timestamps
- Non-speech audio (music, sound effects) should be described in brackets: `[ambient music]`, `[keyboard tap sound]`, `[chime]`
- Captions should be positioned to avoid obscuring key visual elements; allow repositioning per WCAG 2.1 criteria
- Font: minimum 18px equivalent, white text on semi-transparent dark background (≥4.5:1 contrast ratio)
- No more than 2 lines per caption block; no more than 42 characters per line (ideal: 32)
- Reading speed: ≤160 words per minute for default display rate; allow user speed control

### Caption File Formats
Provide captions in:
- **VTT (WebVTT)** — primary format for web embedding
- **SRT** — secondary format for download/offline use
- **TXT transcript** — searchable full-text version linked from course page

### Scene-by-Scene Caption Notes

**Scene 1 (0:00–0:42) — Hook: The World's Best Autocomplete**
- Caption `[soft ambient music begins]` at 0:00
- At 0:10, when keyboard grows: `[Visual: phone keyboard grows to fill screen as streams of text flow in]`
- Title card: `[Title card: "How LLMs Work — Demystifying the world's best autocomplete"]`

**Scene 2 (0:42–1:24) — What's a Token?**
- When scissors appear: `[sound effect: soft snipping]`
- Tokenization visuals: `[Visual: Word "UNBELIEVABLE" cut into pieces: UN, BE, LIEV, ABLE, each in a colored box]`
- Example sentence tokens: `[Visual: "I love pizza!" shown with each word and punctuation in separate colored boxes labeled as tokens]`

**Scene 3 (1:24–2:06) — The Context Window**
- Spotlight image: `[Visual: A long text scroll with only a middle section illuminated — labeled "Context Window"]`
- Desk analogy: `[Visual: Overhead view of a desk with notes, tall filing cabinets behind labeled "Training Data — Not Accessible"]`
- Bubble overflow: `[Visual: Conversation bubbles fill a desk, oldest slides off the back edge and disappears]`

**Scene 4 (2:06–2:48) — Next-Word Prediction**
- Probability wheel intro: `[sound effect: ratcheting wheel spin]`
- Wheel visual: `[Visual: Spinning wheel with word segments sized by probability — "mat" largest, "treaty" tiny sliver]`
- Token-by-token building: `[Visual: Tokens appear one by one like beads on a string, forming a complete sentence]`

**Scene 5 (2:48–3:30) — Where Does It Learn From?**
- Library visual: `[Visual: Enormous library with glowing books; streams of text flow toward a central glowing orb]`
- Training loop: `[Visual: Animated loop — model guesses next word, gets feedback, small adjustment, repeats faster and faster]`
- Correct prediction chime: `[sound effect: gentle chime]`
- Orb settling: `[Visual: Glowing orb stabilizes, library fades; internal patterns visible. Caption: "Not storing the books. Storing the patterns."]`

**Scene 6 (3:30–4:12) — Why It's Fluent (But Not Always Right)**
- Fluent sentence: `[Visual: Sentence types itself: "The ancient Greeks believed that the heart was the seat of all human thought." Red asterisk and correction note appear]`
- Speaker at podium: `[Visual: Confident speaker at podium; subtitle bar shows a factually incorrect statement]`
- Two doors: `[Visual: Two doors labeled "PROBABLE" and "CORRECT" — sometimes they lead to the same room, sometimes different]`
- Hallucination label: `[Visual: Word "Hallucination" appears as floating label above the speaker]`

**Scene 7 (4:12–4:54) — How to Use This Well**
- Split screen: `[Visual: Split screen — left: person collaborating with editor (labeled "Useful tool"), right: person accepting oracle's words uncritically (labeled "Infallible oracle")]`
- Checklist green checks: `[Visual: Checklist with green check marks: Write a first draft, Explain a concept, Brainstorm ideas, Debug code, Translate a phrase]`
- Caution symbols: `[Visual: Same checklist, items with yellow caution symbols: Cite this article, What happened in 1847, Exact stats on X — each labeled "→ Verify"]`
- Prompt comparison: `[Visual: Two prompts side by side — vague vs. specific — with the specific prompt producing a more useful response]`

**Scene 8 (4:54–5:36) — Putting It All Together**
- Building blocks: `[Visual: Five labeled building blocks appear horizontally: Tokens, Context Window, Next-Token Prediction, Training, Fluent-Not Infallible]`
- Blocks connecting: `[Visual: Blocks connect left to right with arrows as each is described — forming a complete pipeline]`
- Machine assembled: `[Visual: Complete pipeline "machine" assembled; question enters left, answer exits right, human gives thoughtful thumbs-up]`

**Scene 9 (5:36–6:18) — What This Means for You**
- ClawDawg scene: `[Visual: ClawDawg mascot types a message, reads response, opens second tab to verify a fact, returns to main window]`
- Mini pipeline in bubble: `[Visual: Inside ClawDawg's chat bubble, a miniature version of the five-block pipeline is visible]`
- Vignette grid: `[Visual: Three panels — student checks textbook, developer runs code fix, writer edits AI draft]`
- Final speech bubble: `[Visual: ClawDawg's speech bubble reads "I'm a really good starting point. You're the expert on your own life."]`

**Scene 10 (6:18–7:00) — Teaser: Your Agent Learns to Talk**
- `[sound effect: soft keyboard typing]` at 6:18
- Token-by-token chat: `[Visual: Chat conversation appears on dark terminal background, responses building one token at a time]`
- Gear overlay: `[Visual: Semi-transparent probability wheels visible inside chat bubbles as each token is generated]`
- End card: `[End card: "Next up → Module 6: Writing Prompts That Actually Work" with module progress bar showing Module 5 complete]`

---

## 2. Alt Text for Key Visual Elements

The following alt text descriptions should accompany any static screenshots, thumbnails, or embedded images used in course materials or documentation.

---

### Scene 1 Visuals

**1A — Phone keyboard with autocomplete suggestions**
> A smartphone keyboard filling the lower half of the frame. In the text field above: "Happy birth—". Three suggestion chips appear above the keyboard: "day," "birthday," "day to you." Clean white UI on a dark background.

**1B — Growing keyboard with text streams**
> A giant phone keyboard expanding to fill the entire screen. Streams of text and images — books, Wikipedia entries, code, recipes — spiral inward from the screen edges and dissolve into the keyboard, as if being absorbed.

**1C — Word-cloud brain**
> A brain-shaped cloud made of floating words, glowing warmly. Words visible inside: "science," "history," "once upon a time," "print(hello)," "curiosity." The cloud pulses gently against a dark background.

---

### Scene 2 Visuals

**2A — Token scissors**
> The word "UNBELIEVABLE" in large chunky letters. An animated pair of scissors cuts it into four pieces: "UN" (blue box), "BE" (orange box), "LIEV" (green box), "ABLE" (purple box). The pieces bounce slightly as they separate.

**2B — Sentence tokenization**
> The sentence "I love pizza!" shown in a clean sans-serif font. Below each word and punctuation mark, a colored box appears: [I] in blue, [love] in orange, [pizza] in green, [!] in purple. Small arrows labeled "1 token each" point to each box.

**2C — Kitchen chopping analogy**
> A kitchen counter viewed from the side. Whole vegetables (carrot, potato, celery) on the left. A chef chops them. The pieces fall into labeled piles, each with a small "TOKEN" tag.

---

### Scene 3 Visuals

**3A — Context window spotlight**
> A long scroll of text extending across a wide dark screen. A spotlight illuminates one section in the middle, labeled "Context Window." The text outside the spotlight is dim and desaturated.

**3B — Desk with filing cabinets**
> An overhead view of a wooden desk. On the desk: a single page of notes (the context window). Behind the desk: tall filing cabinets labeled "Training Data — Not Accessible During Conversation." Only the desk is in focus.

**3C — Conversation bubbles overflowing desk**
> A desk viewed from above. Colored conversation bubbles stack up on the desk until it's full. The oldest bubble slides off the back edge and disappears. New bubbles continue arriving.

---

### Scene 4 Visuals

**4A — Probability wheel**
> A game-show-style spinning wheel with word segments of different sizes. "mat" occupies the largest slice. "roof" and "couch" are medium. "moon" is small. "treaty" is a tiny sliver. An arrow spins and decelerates toward the wheel.

**4B — Token bead string**
> A horizontal string extending across the screen. Tokens appear one by one as "beads" on the string, each popping in with a small visual cue. The string grows left to right until it forms a complete readable sentence.

---

### Scene 5 Visuals

**5A — Impossible library**
> An enormous library with floor-to-ceiling bookshelves receding into fog in every direction. Glowing books are visible. Streams of golden text spiral off their spines and flow toward a bright glowing orb at the center of the room.

**5B — Training loop**
> A simplified animated loop: a model "face" looks at a sentence with one word hidden behind a question mark block. It guesses a word — a red X flashes. A small dial adjusts slightly. The loop repeats, accelerating until it blurs.

**5C — Settled orb**
> A softly glowing orb on a dark background. The library has faded to a translucent outline behind it. Inside the orb, abstract shifting patterns are visible (no readable text — just the visual suggestion of internalized knowledge).

---

### Scene 6 Visuals

**6A — Fluent but flagged sentence**
> A clean white background. One sentence types itself in: "The ancient Greeks believed that the heart was the seat of all human thought." A small red asterisk appears at the end. Below the sentence, a smaller italic note appears: "— Actually about Aristotle; phrasing implies more certainty than warranted."

**6B — Confident speaker with wrong subtitle**
> A cartoon figure at a podium, gesturing confidently. Below the frame, a subtitle bar reads: "The moon has seventeen natural satellites." In the audience: several figures nodding attentively. A small caption below the image reads: "Fluent ≠ Correct."

**6C — Two doors**
> Two identical wooden doors side by side, labeled "PROBABLE" on the left and "CORRECT" on the right. A wide, bright path leads to a shared room behind both. A narrower, less-lit diverging path shows the doors sometimes leading to separate rooms.

---

### Scene 7 Visuals

**7A — Useful tool vs. infallible oracle**
> Split-screen illustration. Left half: a person handing a draft to a smiling editor — warm, collaborative. Below: "Useful tool." Right half: a person writing down every word from an oracle statue, expression overly serious. Below: "Infallible oracle."

**7B & 7C — Two-column checklist**
> A card with two sections. Top section: green check marks next to "Write a first draft ✓", "Explain a concept ✓", "Brainstorm ideas ✓", "Debug code ✓", "Translate a phrase ✓." Bottom section: yellow caution symbols next to "Cite this article ⚠", "What happened in 1847 ⚠", "Exact stats on X ⚠," each with "→ Verify" note.

**7D — Prompt comparison**
> Two prompt text boxes side by side. Left: "Explain photosynthesis." Right: "Explain photosynthesis to a 10-year-old who loves video games, in about 3 sentences." Below each box, a response box — the right response is clearly more tailored and shown with a subtle glow.

---

### Scene 8 Visuals

**8A-D — Pipeline assembly**
> A horizontal diagram of five labeled building blocks assembling left to right: (1) "Tokens" — scissors icon; (2) "Context Window" — desk icon; (3) "Next-Token Prediction" — probability wheel icon; (4) "Training" — glowing orb icon; (5) "Fluent — Not Infallible" — two-doors icon. Arrows connect each block. A question bubble enters from the left; an answer bubble exits from the right. A human figure reads the answer with a thoughtful expression.

---

### Scene 9 Visuals

**9A — ClawDawg fact-checking**
> ClawDawg (a friendly cartoon dog mascot) sits at a desk with a laptop open. A chat interface is visible on screen. He types a message, reads a response, then opens a second browser tab to check a fact. He nods and returns to the main window.

**9B — Pipeline inside bubble**
> Close-up of ClawDawg's chat bubble. Inside the bubble, a small version of the five-block pipeline diagram is visible, like the workings of a clock seen through glass.

**9C — Three-panel vignette grid**
> Three side-by-side small panels: Panel 1: A student reads an LLM explanation, then opens a textbook to confirm details. Panel 2: A developer gets a bug explanation, then runs code in a terminal window. Panel 3: A writer reads an AI-generated paragraph draft, then edits it with their own pen.

**9D — ClawDawg speech bubble**
> ClawDawg facing the viewer, one paw raised in a thumbs-up gesture. A speech bubble above him reads: "I'm a really good starting point. You're the expert on your own life."

---

### Scene 10 Visuals

**10A — Terminal conversation**
> A dark terminal window. A blinking cursor. Lines of conversation appear in monospace font — alternating user messages and assistant responses. Each response appears one token at a time with slight pauses between tokens.

**10B — Probability wheel overlay**
> The same terminal conversation, but now with a semi-transparent overlay visible inside response bubbles. Tiny probability wheels spin briefly as each token is generated, then disappear once the token is placed.

**10D — End card**
> ClawDawg waving against a clean dark background. A title card reads: "Next up → Module 6: Writing Prompts That Actually Work." Below it, a simple horizontal progress bar shows modules 1–7; Module 5 is highlighted as complete, Module 6 is lit as next.

---

## 3. Color Contrast and Design Guidelines

### Text on Background
- Minimum contrast ratio: **4.5:1** for normal text (WCAG AA)
- Minimum contrast ratio: **3:1** for large text (18pt+) and UI components
- Primary text: white (#FFFFFF) on dark background (#1a1a2e) — ratio: ~18:1 ✓
- Caption text: white on semi-transparent dark: minimum opacity 70% background

### Color Usage — Do Not Rely on Color Alone
All critical information (check marks, caution symbols, correct/incorrect feedback) should use both color AND a symbol or label:
- Green check + "✓" label
- Yellow caution + "⚠" symbol
- Red flag + "✗" label or text note

### Animation and Motion
- Avoid rapid flashing (>3 flashes/second violates WCAG 2.3.1)
- All motion should be stoppable via playback controls
- Consider providing a reduced-motion version (or CSS flag for web-embedded content) where animations are replaced with static frames
- Probability wheel spin: maximum 2 full rotations before slowing; avoid sustained spinning

### Font Accessibility
- Primary: DM Sans or Inter — both tested for readability at small sizes
- Code: JetBrains Mono — distinguishes similar characters (0/O, l/1/I)
- Minimum on-screen font size: 18px equivalent for captions; 24px for body text in visuals
- Avoid using italics for large blocks of text; use for single-word emphasis only

---

## 4. Audio Description Track

An audio description (AD) track should be provided for learners who are blind or have low vision. The AD track fills gaps in narration where visual information is not described verbally.

### Key AD Insertions by Scene

**Scene 1 (0:10):** *"The phone keyboard expands to fill the screen. Text streams — books, articles, code, recipes — spiral inward from all sides and dissolve into it."*

**Scene 2 (0:42):** *"The word UNBELIEVABLE appears in large letters. Animated scissors cut it into four labeled pieces: UN, BE, LIEV, and ABLE. Each piece bounces into its own colored box."*

**Scene 3 (1:34):** *"An overhead view of a desk. One page of notes sits in the center. Behind the desk, tall filing cabinets are labeled 'Training Data — Not Accessible.' The camera slowly descends toward the desk."*

**Scene 4 (2:06):** *"A game-show-style spinning wheel appears. Its segments are labeled with words and sized by probability. 'mat' occupies the largest slice. The wheel spins and slows to a stop."*

**Scene 5 (3:10):** *"A simple animation loop plays, showing a model guessing a word, receiving feedback, and making small adjustments. The loop accelerates rapidly, representing billions of training steps."*

**Scene 6 (3:42):** *"A cartoon figure stands at a podium, gesturing confidently. The subtitle bar below shows an incorrect statement. Audience members nod without questioning. The label 'Hallucination' floats above."*

**Scene 7 (4:12):** *"Split screen. On the left, a person collaborates warmly with an editor. On the right, a person transcribes every word from an oracle without questioning. Labels below each: 'Useful tool' and 'Infallible oracle.'"*

**Scene 8 (4:54):** *"Five labeled building blocks appear horizontally, then connect left to right with arrows, forming a complete pipeline diagram. A question enters from the left. An answer exits to the right."*

**Scene 9 (5:36):** *"ClawDawg, a friendly cartoon dog, sits at a laptop. He types a question, reads the response, opens a second browser tab to check a fact, then nods and returns to the first tab."*

**Scene 10 (6:50):** *"An end card appears showing ClawDawg waving. Text reads: 'Next up → Module 6: Writing Prompts That Actually Work.' A progress bar below shows Module 5 complete and Module 6 highlighted as next."*

---

## 5. Transcript (Plain Text)

The following is a clean plain-text version of the full narration script, suitable for:
- Screen reader users
- Search indexing
- Downloadable transcript linked from course page

---

**[Scene 1]**
You've seen it a thousand times. You start typing a text, and your phone guesses what comes next. "Happy birth—" and up pops "day." That's autocomplete. It's useful. It's sometimes wrong. And it's probably the best way to understand something that's been all over the news lately.

Now imagine that same autocomplete, but instead of learning from your text messages, it read — well — basically everything humans have ever written. Every book, every article, every forum post, every piece of code. Billions of pages.

That, in a nutshell, is a large language model. Let's peel it apart.

**[Scene 2]**
Before an LLM can understand anything, it has to chop your words into pieces. Those pieces are called tokens.

Tokens are roughly word-sized chunks — but not always. Common words like "the" or "I" might be a single token. Longer or rarer words get broken into smaller pieces. "Unbelievable" might become "un," "believ," and "able." The exclamation mark? Its own token.

Why chop them up? Because it's more efficient. There are only so many possible token-chunks, but infinite possible words and names and phrases. Chopping things down to manageable pieces lets the model handle language it's never seen before — like a new person's name or a slang word — by breaking it into familiar parts.

Right now, reading this sentence, your brain is doing something like this — and you didn't even notice.

**[Scene 3]**
Here's something important: an LLM doesn't read your entire conversation from memory. It works with a context window — a chunk of recent text it can "see" at one time.

Think of it like a desk. The model's desk can hold a certain number of tokens — maybe a few thousand, maybe tens of thousands, depending on the model. Everything you say, everything it says back, any context you give it — that goes on the desk.

But when the desk gets full, older messages fall off. The model can't see them anymore. This is why, in a very long conversation, an LLM might seem to "forget" something you told it at the start. It's not being rude — it literally can't see back that far.

The context window is one of the biggest practical limits of language models today. Researchers keep making it bigger, but it's always finite. What's on the desk is all the model has to work with.

**[Scene 4]**
Now for the core trick. Given everything in the context window, an LLM's job is to predict: what token should come next?

Not with a lookup table. Not by finding the "right answer" in a database. But by calculating a probability for every possible next token — and then picking one.

"The cat sat on the mat" — "mat" is very likely. But so is "roof," or "floor," or "couch." The model doesn't always pick the most likely option. Sometimes it picks the second or third most likely, which is part of why it can surprise you.

This happens one token at a time, over and over, incredibly fast. The model isn't "thinking up" a sentence all at once. It's building it token by token — each choice shaped by everything that came before.

That's it. That's the whole trick. Prediction, repeated at blinding speed.

**[Scene 5]**
Okay, but how does the model know which tokens are likely? Where do those probabilities come from?

Training. Before you ever talk to it, the model was trained on an enormous amount of text — we're talking hundreds of billions of words, maybe more. During training, the model read text with words hidden, guessed what came next, got told whether it was right, and adjusted — billions of times.

By the end of training, the model has absorbed patterns: how sentences flow, what words tend to follow other words, facts about the world, styles of different kinds of writing, how conversations work.

It doesn't store the text like a hard drive stores files. It stores the patterns — billions of tiny adjustments to how it weighs different possibilities. The books are gone. What's left is something more like... intuition.

**[Scene 6]**
This is where it gets interesting — and where a lot of people get confused.

LLMs are very good at producing fluent text. Sentences that sound right. Grammar that flows. Paragraphs that are easy to read. That's because they've learned the shape of language — not just words, but how ideas typically connect.

But here's the catch: the model is optimizing for what sounds right, not what is true. It doesn't have a fact-checker running in the background. It doesn't have a database of ground truth. It has patterns.

Most of the time, "probable" and "correct" overlap. If you ask how many continents there are, the training data is full of "seven continents" — so that's what comes out. Correct! But if you ask about an obscure person, or a very recent event, or something that's genuinely ambiguous in the training data — the model may produce fluent, confident nonsense.

This is sometimes called hallucination. The model generates something that sounds right because it fits the pattern — even if it isn't true. It's not lying. It has no concept of lying. It's doing exactly what it was trained to do: predict plausible next tokens.

**[Scene 7]**
So now that you understand what's actually happening — what does that mean for how you use it?

It's great for brainstorming, drafting, explaining, summarizing, translating, coding. These tasks align with what it does well — producing plausible, useful text.

It's risky as a sole source for specific facts. Dates, names, statistics, citations — always verify.

The more specific context you give it, the better. Because it works with what's in the context window — if you give it more to work with, it has more signal to predict from.

Think of it like a brilliant collaborator who's read everything but can't always be trusted on specifics, and who gets better the more clearly you explain what you need. Work with it, not around it.

**[Scene 8]**
Let's run through the whole picture one more time, fast.

Your input gets broken into tokens — manageable chunks the model can process.

Those tokens, plus the recent conversation, sit inside the context window — the model's working memory.

The model uses everything in that window to predict the most plausible next token. Then the next. Then the next.

Those predictions are guided by patterns absorbed during training on vast amounts of text.

The result is text that flows naturally — but needs your judgment to catch when "probable" isn't the same as "right."

That's an LLM. Not magic. Not a mind. A very powerful pattern-matching machine trained on human language — doing extremely fast autocomplete, at scale.

**[Scene 9]**
Here's why all of this matters to you specifically.

When you talk to OpenClaw — or any AI assistant — you're not talking to something that knows things the way a person knows things. You're talking to a very sophisticated pattern-completer that has absorbed enormous amounts of human knowledge and learned to generate useful responses.

That's not a put-down. Pattern-completion at that scale is genuinely remarkable. But it means you stay in the loop. You're the one who knows what's actually true about your situation. You're the one who can check the facts. The AI is a powerful tool — you're the person holding it.

The more you understand what's happening under the hood, the better you'll be at knowing when to trust it, when to push back, and when to verify.

**[Scene 10]**
You've now seen the engine under the hood.

Every message your OpenClaw agent sends is built token by token, guided by context, shaped by training. When it writes you a poem, helps you debug code, or explains something you've never understood before — that's what's happening, billions of times a second.

In the next module, we're going to look at how you can shape that process with better prompts — because now you know what the model is actually doing when you talk to it. You'll know why more context helps, why vague prompts get vague answers, and how to push the model toward exactly what you need.

You're not just a user anymore. You understand how this works.

---

*Accessibility Notes v1.0 | ClawDawg | March 2026*
