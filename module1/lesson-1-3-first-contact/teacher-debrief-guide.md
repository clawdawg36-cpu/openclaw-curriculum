# Teacher Debrief Guide — Lesson 1.3: First Contact with OpenClaw

**For:** Teachers facilitating the OpenClaw 101 Lab and class debrief
**Use with:** `lesson-plan.md`, `openclaw-101-lab.md`

---

## Purpose of This Guide

This guide helps you recognize quality responses during student exploration, lead a productive debrief, and handle common surprises. The lab is intentionally open-ended — your job is to help students *make meaning* from what they observed, not to validate specific "right answers."

---

## What Good Student Engagement Looks Like

### During the Lab
- Students are reading OpenClaw's responses fully before writing their notes
- Students are trying variations ("What if I ask it differently?")
- Students are talking to partners about what they noticed
- Students are asking *you* "why does it do that?" — that's gold
- Students are laughing, sighing, or expressing surprise — all valid reactions

### Watch Out For
- Students just copying responses without reading them
- Students giving up after one try if AI gives a weird answer
- Students treating AI responses as facts without verification
- Students trying to break the system with inappropriate prompts (redirect with curiosity: "What do you think that tells you about how it was trained?")

---

## Challenge-by-Challenge Debrief Notes

### Challenge 1: Just the Facts

**What a good response looks like:**
- Accurate answer (Earth is ~93 million miles / 150 million km from the Sun)
- Often includes additional context (average distance, perihelion/aphelion)
- May cite that the distance varies

**What to discuss:**
- AI often over-explains. Is extra context helpful or distracting?
- AI can be confidently wrong on less common facts. Always verify.
- Introduce: **hallucination** — when AI confidently states something false

**Common student observation:** "It answered but gave me way more than I asked for."
**Good follow-up:** "Is that a feature or a bug? When is more context helpful?"

---

### Challenge 2: Haiku Time

**What a good response looks like:**
- Attempts 5-7-5 syllable structure (often gets it slightly wrong — that's intentional)
- Shows tonal shift when asked for a different mood
- Uses nature or emotional imagery typical of haiku

**What to discuss:**
- Count the syllables together as a class. Does it match? (Frequently it doesn't — AI miscounts syllables)
- Does it *feel* like a haiku even if the count is off?
- When asked to change mood, what actually changed? (word choice, imagery, connotation)

**Key insight to surface:** AI understands haiku *style* but doesn't reliably count syllables. It pattern-matches to "haiku-like" text. This reveals the difference between *pattern recognition* and *understanding*.

---

### Challenge 3: Does It Have Opinions?

**What a good response looks like:**
- Hedging language: "Many would argue...", "In my view...", "It could be said..."
- Lists multiple candidates or perspectives before landing on one
- May explicitly say "As an AI, I don't have personal opinions, but..."

**What to discuss:**
- When AI says "I think," does it *mean* what a human means by that?
- Is it useful to have AI give opinions? In what contexts?
- Is it *dangerous* if students believe AI opinions are authoritative?

**Key insight:** AI imitates the *form* of opinion-giving without having subjective experience. It was trained on billions of human texts where people expressed opinions — so it's very good at *sounding* like it has one.

**Common student pushback:** "But it said it prefers X, so it does have opinions."
**Good response:** "Does a parrot have opinions when it repeats a phrase? What's the difference?"

---

### Challenge 4: Step by Step

**What a good response looks like:**
- Addresses all three parts in sequence
- May use numbered lists or clear structure
- Doesn't confuse parts or blend them together

**What to discuss:**
- Did it do all three? If it missed one, which did it skip?
- Longer, more complex prompts test AI's ability to "hold context." It can fail.
- This is called **prompt complexity** — how much you can pack into one request

**Teaching moment:** More specific prompts get better results. If students want AI to do something specific, they need to be clear and structured in how they ask.

---

### Challenge 5: The Trick Question

**What a good response looks like:**
- Correctly identifies the trick (roosters don't lay eggs / a pound = a pound)
- Explains *why* the question is a trick
- Doesn't get fooled by the framing

**What to discuss:**
- Did it recognize the trick, or fall for it?
- AI has seen these trick questions in training data — so it often "knows" the answer without truly *reasoning* through it
- New or novel trick questions (that aren't in the training data) can fool AI more easily

**Key insight:** AI that gets trick questions right may be pattern-matching to similar examples it was trained on — not "figuring it out" the way a human would.

---

### Challenge 6: Build a Story Together

**What a good response looks like:**
- Continues the story coherently from where the student left off
- Introduces interesting plot elements, not just filler
- Maintains character consistency and tone

**What to discuss:**
- Did the story go where students expected, or somewhere surprising?
- AI is good at narrative continuation — it's been trained on millions of stories
- What parts felt "AI-written" vs. what felt genuinely creative?

**Fun class activity:** Have two groups share their collaborative story openings. Read the AI's continuation for each. What's different? What does that reveal?

---

### Challenge 7: Math & Logic

**What a good response looks like:**
- Correct answer with clear reasoning steps shown
- Uses appropriate math notation or plain language
- Acknowledges when a problem is ambiguous

**Important caveat for teachers:**
AI can be unreliable at math, especially arithmetic. It's *better* at explaining concepts than computing. For word problems, AI often reasons correctly but makes arithmetic errors.

**What to discuss:**
- Did it show its work? Was the reasoning correct even if the math was off?
- Why might a language model be weaker at math than a calculator?
- When is AI a useful math tool vs. when should you just use a calculator?

**Common finding:** AI sometimes gets the *setup* right and the *calculation* wrong. This is because language models predict text, not perform arithmetic.

---

### Challenge 8: The Debate

**What a good response looks like:**
- Commits to the assigned side with clear, structured arguments
- Provides 3 distinct reasons without obvious overlap
- When switched, constructs *different* (not just negated) arguments for the other side

**What to discuss:**
- Was one side more convincing than the other? Or was AI equally strong on both?
- Does AI seem to *believe* what it's arguing?
- This demonstrates AI's flexibility — it can argue any position it's asked to argue. What are the implications for using AI to write persuasive essays?

**Key insight to surface:** AI can make *any* side sound convincing. This should make students more skeptical of AI-generated persuasive content, not less. The form of an argument isn't the same as its validity.

---

### Challenge 9: Summarize This

**What a good response looks like:**
- 2-sentence summary captures the main idea without losing crucial details
- "Explain to a 10-year-old" version uses simpler vocabulary, analogies, and shorter sentences
- Both versions are accurate to the source material

**What to discuss:**
- Summarization is one of AI's strongest skills. Why might that be?
- Did the simple version lose any important nuance?
- How can you verify the summary is accurate?

**Teaching moment:** AI summarization is useful but must be verified. AI can "hallucinate" details even when summarizing — occasionally adding things that weren't in the original text.

---

### Challenge 10: Finding the Limits

**Common limits students discover:**

| Limit | What the student tried | Why it happens |
|---|---|---|
| No real-time info | "What happened in the news today?" | Training data has a cutoff date |
| Can't predict future | "Who will win the next election?" | AI doesn't have access to future events |
| Safety refusals | Inappropriate content requests | Intentional design by the builders |
| Vague answers | "What should I do with my life?" | Too personal, no objective answer |
| Hallucination | Asked about obscure person/event | Generated plausible-sounding false info |

**What to discuss:**
- Is a limit a failure, or a design choice?
- If AI refused a prompt, why do you think it was built to refuse?
- Who decides what AI won't do — and how?

**Key insight:** Every AI limitation reflects a decision made by its builders. Understanding limits helps us understand values, biases, and the choices baked into the system.

---

## Handling Unexpected Situations

### AI gives a clearly wrong answer
> "This is a great example of what's called a *hallucination*. AI can state wrong things with complete confidence. What should you always do before trusting an AI answer?"

### AI refuses a student's prompt
> "What do you think triggered the refusal? Do you agree with that decision? Who do you think decides what the AI will and won't say?"

### A student gets a surprisingly deep or emotional response
> "That's interesting — what does it tell you about what the AI was trained on? Does a good answer mean the AI *understands* you?"

### A student says "AI is smarter than humans"
> "Let's test that. Ask it something you know the answer to that requires personal experience — like what it felt like on your first day of school. What do you notice?"

### A student says "AI is useless / stupid"
> "What would it take for AI to be useful? Are there things it *did* do well today? Being a critical user means knowing both the strengths and limits."

---

## Key Vocabulary to Reinforce

| Term | Student-Friendly Definition |
|---|---|
| **Prompt** | What you type to OpenClaw — your request or question |
| **Hallucination** | When AI states something false with confidence |
| **Language model** | An AI trained to predict the next word based on patterns in text |
| **Training data** | The huge amount of text AI learned from |
| **Bias** | Unfair preferences baked into AI from its training data |
| **Refusal** | When AI declines to answer, usually for safety reasons |
| **Context window** | How much of the conversation AI can "remember" at once |

---

## Connecting to Future Lessons

This lesson sets up key questions that run through the rest of the module:

- **Lesson 1.4 (Turing Test):** Could you tell if the responses you got were from a human or a machine?
- **Module 2 (How AI Learns):** Where did OpenClaw's knowledge actually come from?
- **Module 3 (Bias & Fairness):** Did you notice any patterns in who or what OpenClaw centered in its responses?
- **Module 5 (Ethics):** Was there anything today that felt uncomfortable or wrong? Why?

---

## Quick Debrief Script (If You're Short on Time)

If you only have 5 minutes:

1. "Hold up your worksheet — who filled in the most? Fewest?"
2. "Call out one word that describes OpenClaw. I'll write them on the board."
3. "Who found something it did *wrong*? Who found something it did *surprisingly well*?"
4. "One takeaway: AI is a powerful tool with real limits. Our job this semester is to learn *when* to use it, *how* to use it well, and *why* it does what it does."

---

*Good luck! The messiest, most surprising lab days are often the most memorable ones. Trust the curiosity.*
