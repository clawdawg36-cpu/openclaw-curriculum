# How LLMs Work — Full Narration Script
**Module 5 | Animated Tutorial | Target Runtime: ~7 minutes**

---

## Scene 1 — Hook: The World's Best Autocomplete (0:00–0:42)

**[VISUAL: A phone keyboard. Someone types "Happy birth—" and three suggestions appear above the keyboard: "day", "birthday", "day to you". Zoom out to reveal it's a giant version of a phone keyboard floating in space.]**

**NARRATOR (warm, curious):**
You've seen it a thousand times. You start typing a text, and your phone guesses what comes next. "Happy birth—" and up pops "day." That's autocomplete. It's useful. It's sometimes wrong. And it's probably the best way to understand something that's been all over the news lately.

**[VISUAL: The phone keyboard transforms — growing enormous, filling the screen. Text streams across it. Words like "science," "history," "poems," "code," "recipes" swirl into it like it's absorbing a whole library.]**

Now imagine that same autocomplete, but instead of learning from your text messages, it read — well — basically everything humans have ever written. Every book, every article, every forum post, every piece of code. Billions of pages.

**[VISUAL: Title card: "How LLMs Work" appears over a glowing, quietly pulsing brain-shaped cloud of words.]**

That, in a nutshell, is a large language model. Let's peel it apart.

---

## Scene 2 — What's a Token? (0:42–1:24)

**[VISUAL: The word "UNBELIEVABLE" appears in large letters. A pair of scissors floats in and starts snipping it apart: "UN" | "BE" | "LIEV" | "ABLE". Each piece pops off separately, bouncing a little.]**

**NARRATOR:**
Before an LLM can understand anything, it has to chop your words into pieces. Those pieces are called *tokens*.

**[VISUAL: A simple sentence: "I love pizza!" gets tokenized. Each word and punctuation mark gets a colored box around it: [I] [love] [pizza] [!]. Arrows show each token.]**

Tokens are roughly word-sized chunks — but not always. Common words like "the" or "I" might be a single token. Longer or rarer words get broken into smaller pieces. "Unbelievable" might become "un," "believ," and "able." The exclamation mark? Its own token.

**[VISUAL: A grocery store analogy. Ingredients arrive at a kitchen — whole vegetables. A chef chops them into pieces. The chopped pieces are labeled "tokens." The chef (the model) works with pieces, not whole vegetables.]**

Why chop them up? Because it's more efficient. There are only so many possible token-chunks, but infinite possible words and names and phrases. Chopping things down to manageable pieces lets the model handle language it's never seen before — like a new person's name or a slang word — by breaking it into familiar parts.

**[VISUAL: "ChatGPT" gets tokenized: ["Chat"] ["G"] ["PT"]. Then "Zendaya": ["Z"] ["end"] ["aya"]. Both get handled, just with different sized chunks.]**

Right now, reading this sentence, your brain is doing something like this — and you didn't even notice.

---

## Scene 3 — The Context Window (1:24–2:06)

**[VISUAL: A spotlight on a long scroll of text. The spotlight only illuminates a section in the middle — the rest is in shadow. The lit section has a label: "Context Window."]**

**NARRATOR:**
Here's something important: an LLM doesn't read your entire conversation from memory. It works with a *context window* — a chunk of recent text it can "see" at one time.

**[VISUAL: Imagine a desk. On the desk: a page of notes. Off the desk: filing cabinets (training data). The model can only work with what's on the desk.]**

Think of it like a desk. The model's desk can hold a certain number of tokens — maybe a few thousand, maybe tens of thousands, depending on the model. Everything you say, everything it says back, any context you give it — that goes on the desk.

**[VISUAL: Conversation bubbles fill up the "desk." When the desk overflows, the oldest messages slide off the back edge and vanish.]**

But when the desk gets full, older messages fall off. The model can't see them anymore. This is why, in a very long conversation, an LLM might seem to "forget" something you told it at the start. It's not being rude — it literally can't see back that far.

**[VISUAL: A person trying to have a conversation while only seeing the most recent page of a very long letter. They respond sensibly — but have clearly lost the thread from earlier.]**

The context window is one of the biggest practical limits of language models today. Researchers keep making it bigger, but it's always finite. What's on the desk is all the model has to work with.

---

## Scene 4 — Next-Word Prediction (2:06–2:48)

**[VISUAL: A blank text field. Words appear one at a time: "The cat sat on the ___." A wheel of possibilities spins into view, weighted by size: "mat" (huge), "roof" (medium), "cloud" (small), "treaty" (tiny).]**

**NARRATOR:**
Now for the core trick. Given everything in the context window, an LLM's job is to predict: *what token should come next?*

Not with a lookup table. Not by finding the "right answer" in a database. But by calculating a *probability* for every possible next token — and then picking one.

**[VISUAL: The probability wheel slows down. "mat" has a big slice. "roof" has a smaller one. "moon" is a sliver. "treaty" is almost invisible. An arrow lands on "mat."]**

"The cat sat on the mat" — "mat" is very likely. But so is "roof," or "floor," or "couch." The model doesn't always pick the most likely option. Sometimes it picks the second or third most likely, which is part of why it can surprise you.

**[VISUAL: The process repeats: "The cat sat on the mat and ___." New wheel. New probabilities. Another token gets picked. Then again. And again. Tokens accumulating like beads on a string.]**

This happens one token at a time, over and over, incredibly fast. The model isn't "thinking up" a sentence all at once. It's building it token by token — each choice shaped by everything that came before.

**[VISUAL: A string of tokens extending across the screen, each one the result of one prediction. At the end, they combine to read a full, fluent sentence.]**

That's it. That's the whole trick. Prediction, repeated at blinding speed.

---

## Scene 5 — Where Does It Learn From? (2:48–3:30)

**[VISUAL: An enormous library fills the screen — floor to ceiling shelves, extending in every direction. Books fly off shelves and dissolve into streams of text flowing toward a central glowing orb (the model).]**

**NARRATOR:**
Okay, but how does the model know which tokens are likely? Where do those probabilities come from?

**[VISUAL: The library becomes a data stream: Wikipedia articles, news sites, books, Reddit threads, academic papers, code repositories, recipe blogs. All feeding in.]**

Training. Before you ever talk to it, the model was trained on an enormous amount of text — we're talking hundreds of billions of words, maybe more. During training, the model read text with words hidden, guessed what came next, got told whether it was right, and adjusted — billions of times.

**[VISUAL: A simplified "guess → feedback → adjust" loop. Model guesses the next word. Wrong → red flash, weights shift slightly. Repeat 100 billion times. Eventually the model is much better at guessing.]**

By the end of training, the model has absorbed patterns: how sentences flow, what words tend to follow other words, facts about the world, styles of different kinds of writing, how conversations work.

**[VISUAL: The glowing orb stabilizes. It now pulses gently with contained knowledge — snippets of text visible within it. It has "absorbed" the library without storing the books directly.]**

It doesn't store the text like a hard drive stores files. It stores the *patterns* — billions of tiny adjustments to how it weighs different possibilities. The books are gone. What's left is something more like... intuition.

---

## Scene 6 — Why It's Fluent (But Not Always Right) (3:30–4:12)

**[VISUAL: A beautiful, grammatically perfect sentence types itself onto the screen: "The ancient Greeks believed that the heart was the seat of all human thought." Then a red asterisk appears next to it.]**

**NARRATOR:**
This is where it gets interesting — and where a lot of people get confused.

LLMs are *very* good at producing fluent text. Sentences that sound right. Grammar that flows. Paragraphs that are easy to read. That's because they've learned the *shape* of language — not just words, but how ideas typically connect.

**[VISUAL: A confident speaker at a podium, speaking eloquently. But as they speak, the words that appear on the subtitle bar are... plausible-sounding but occasionally wrong. "The moon has seventeen natural satellites." Audience nods.]**

But here's the catch: the model is optimizing for what *sounds right*, not what *is true*. It doesn't have a fact-checker running in the background. It doesn't have a database of ground truth. It has patterns.

**[VISUAL: Two doors labeled "PROBABLE" and "CORRECT." A lot of the time, they lead to the same room. But sometimes — they're different rooms.]**

Most of the time, "probable" and "correct" overlap. If you ask how many continents there are, the training data is full of "seven continents" — so that's what comes out. Correct! But if you ask about an obscure person, or a very recent event, or something that's genuinely ambiguous in the training data — the model may produce fluent, confident nonsense.

**[VISUAL: The confident speaker at the podium again. The caption now reads something that sounds scholarly but is just made up. The audience still nods.]**

This is sometimes called *hallucination*. The model generates something that sounds right because it fits the pattern — even if it isn't true. It's not lying. It has no concept of lying. It's doing exactly what it was trained to do: predict plausible next tokens.

---

## Scene 7 — How to Use This Well (4:12–4:54)

**[VISUAL: A split screen. Left: a person handing a rough draft to an editor. Right: a person asking an oracle and writing down every word as law. Caption: "Useful tool" vs. "Infallible oracle."]**

**NARRATOR:**
So now that you understand what's actually happening — what does that mean for how you use it?

**[VISUAL: A checklist card appears. Items pop in one by one as the narrator speaks.]**

First: It's great for brainstorming, drafting, explaining, summarizing, translating, coding. These tasks align with what it does well — producing plausible, useful text.

**[VISUAL: Check marks appearing on: "Write a first draft," "Explain a concept," "Brainstorm ideas," "Debug code," "Translate a phrase."]**

Second: It's risky as a sole source for specific facts. Dates, names, statistics, citations — always verify.

**[VISUAL: Warning marks appearing on: "Cite this article," "What happened in 1847," "Give me stats on X." Then: "→ Verify these."]**

Third: The more specific context you give it, the better. Because it works with what's in the context window — if you give it more to work with, it has more signal to predict from.

**[VISUAL: Two prompts side by side. "Explain photosynthesis." vs. "Explain photosynthesis to a 10-year-old who loves video games, in about 3 sentences." The second one gets a much more useful response.]**

Think of it like a brilliant collaborator who's read everything but can't always be trusted on specifics, and who gets better the more clearly you explain what you need. Work with it, not around it.

---

## Scene 8 — Putting It All Together (4:54–5:36)

**[VISUAL: A clean, animated recap diagram. Each component introduced so far appears as a labeled building block, assembling into a simple machine.]**

**NARRATOR:**
Let's run through the whole picture one more time, fast.

**[VISUAL: Block 1 appears, labeled "Tokens." Words get chopped into pieces. Arrow.]**

Your input gets broken into tokens — manageable chunks the model can process.

**[VISUAL: Block 2: "Context Window." The tokens land in a highlighted window on a desk. Arrow.]**

Those tokens, plus the recent conversation, sit inside the context window — the model's working memory.

**[VISUAL: Block 3: "Next-Token Prediction." A probability wheel spins and picks a token. Arrow.]**

The model uses everything in that window to predict the most plausible next token. Then the next. Then the next.

**[VISUAL: Block 4: "Training." The glowing orb from Scene 5 — learned patterns from billions of words. An arrow connects it to Block 3.]**

Those predictions are guided by patterns absorbed during training on vast amounts of text.

**[VISUAL: Block 5: "Fluent — not infallible." The two-door image from Scene 6. "Probable" and "Correct" — usually aligned, not always.]**

The result is text that flows naturally — but needs your judgment to catch when "probable" isn't the same as "right."

**[VISUAL: The five blocks snap together into a simple machine. It hums. A question goes in one end, an answer comes out the other. A human gives a thumbs-up — not blindly, but thoughtfully.]**

That's an LLM. Not magic. Not a mind. A very powerful pattern-matching machine trained on human language — doing extremely fast autocomplete, at scale.

---

## Scene 9 — What This Means for You (5:36–6:18)

**[VISUAL: ClawDawg (the mascot) sits at a desk with a chat interface open. He types a message. A response comes back. He reads it, nods, fact-checks one part on a separate tab, and uses the rest.]**

**NARRATOR:**
Here's why all of this matters to you specifically.

When you talk to OpenClaw — or any AI assistant — you're not talking to something that *knows* things the way a person knows things. You're talking to a very sophisticated pattern-completer that has absorbed enormous amounts of human knowledge and learned to generate useful responses.

**[VISUAL: ClawDawg's chat bubble expands into a diagram: input → tokens → context → prediction → output. Small version of our pipeline.]**

That's not a put-down. Pattern-completion at that scale is genuinely remarkable. But it means you stay in the loop. You're the one who knows what's actually true about your situation. You're the one who can check the facts. The AI is a powerful tool — you're the person holding it.

**[VISUAL: Three quick "good use" vignettes. 1) A student asking for help understanding a history concept — then going to read the chapter. 2) A developer asking the model to explain a bug — then testing the fix. 3) A writer using the model to draft a paragraph — then editing it their way.]**

The more you understand what's happening under the hood, the better you'll be at knowing when to trust it, when to push back, and when to verify.

**[VISUAL: ClawDawg gives a thumbs-up. Speech bubble: "I'm a really good starting point. You're the expert on your own life."]**

---

## Scene 10 — Teaser: Your Agent Learns to Talk (6:18–7:00)

**[VISUAL: Fade to black. The terminal cursor blinks. Then lines of conversation appear — a back-and-forth between a user and ClawDawg. Each response appears one token at a time, building... building... until it says something genuinely helpful.]**

**NARRATOR:**
You've now seen the engine under the hood.

**[VISUAL: Under-the-hood view of the conversation: each token prediction lighting up in sequence, then the finished response appearing.]**

Every message your OpenClaw agent sends is built token by token, guided by context, shaped by training. When it writes you a poem, helps you debug code, or explains something you've never understood before — that's what's happening, billions of times a second.

**[VISUAL: ClawDawg at the same desk, but now with gears visible inside the chat bubbles — small token-wheels spinning as responses form.]**

In the next module, we're going to look at how you can shape that process with better prompts — because now you know what the model is actually doing when you talk to it. You'll know why more context helps, why vague prompts get vague answers, and how to push the model toward exactly what you need.

**[VISUAL: The gear-chat bubbles fade into a clean chat interface. ClawDawg waves. A bright new title card appears: "Next up: Module 6 — Writing Prompts That Actually Work."]**

You're not just a user anymore. You understand how this works.

*[End card: "Next up → Module 6: Writing Prompts That Actually Work"]*

---

## Timing Summary

| Scene | Title | Timestamp | Duration |
|-------|-------|-----------|----------|
| 1 | Hook: The World's Best Autocomplete | 0:00–0:42 | 42s |
| 2 | What's a Token? | 0:42–1:24 | 42s |
| 3 | The Context Window | 1:24–2:06 | 42s |
| 4 | Next-Word Prediction | 2:06–2:48 | 42s |
| 5 | Where Does It Learn From? | 2:48–3:30 | 42s |
| 6 | Why It's Fluent (But Not Always Right) | 3:30–4:12 | 42s |
| 7 | How to Use This Well | 4:12–4:54 | 42s |
| 8 | Putting It All Together | 4:54–5:36 | 42s |
| 9 | What This Means for You | 5:36–6:18 | 42s |
| 10 | Teaser: Your Agent Learns to Talk | 6:18–7:00 | 42s |
| **TOTAL** | | | **7:00** |

---

**Production notes:**
- Narrator pace: ~130 words/minute (conversational, curious — not breathless)
- Total word count: ~1,050 words → ~8 minutes at 130 wpm; trim narration for pacing, especially Scene 5 and 6
- Key tone notes: demystify without dismissing; curious and grounded; no math; no jargon that isn't explained
- Analogies to maintain consistency: phone keyboard (Scene 1), desk/context (Scene 3), probability wheel (Scene 4), glowing orb of patterns (Scene 5), two doors (Scene 6)
- ClawDawg mascot appears in Scene 9 and 10 for warmth and continuity

---

*Script v1.0 | ClawDawg | March 2026*
