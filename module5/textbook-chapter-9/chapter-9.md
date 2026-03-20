# Chapter 9: Talking with AI — The Art of the Prompt

> **Module 5 | Companion Textbook**
> *Grades 6–8 | OpenClaw AI Literacy Curriculum*

---

[ILLUSTRATION: A student sitting at a desk with a laptop, a glowing speech bubble above the screen. Inside the bubble, gears turn, words float, and light shoots back toward the student. The student looks curious, pencil in hand, mid-thought.]

---

## Opening Story: Two Questions, Two Very Different Answers

Jaylen needed help for his history project on the causes of World War I.

He typed into the AI: *"Tell me about WWI."*

What came back was a wall of text — dates, battles, a list of countries, the assassination of Archduke Franz Ferdinand, the Treaty of Versailles. It was technically correct. It was also completely overwhelming and not what he needed at all.

His friend Priya, sitting two seats over, was working on the same project. She typed: *"I'm a 7th grader writing a 2-paragraph summary of the main causes of World War I. Can you explain the three biggest reasons it started, in simple language, with one example for each?"*

The AI gave her exactly that: three clear causes, three examples, each explained simply enough for her to understand and put into her own words.

Same AI. Same topic. Same assignment.

*Very different results.*

What Priya knew — and Jaylen was about to learn — is that **how you talk to an AI matters enormously.** The same tool can be frustrating and useless, or genuinely helpful, depending on what you ask and how you ask it.

That skill has a name: **prompt engineering.** And by the end of this chapter, you'll know how to do it.

---

## Section 1: How Do AI Language Models Actually Work?

Before we can talk about *how* to prompt an AI, we need to understand — at least roughly — what's going on inside the machine when you type something.

This is the part where a lot of people wave their hands and say "it's magic!" But it's not magic. It's actually pretty fascinating.

### Tokens: The Building Blocks of AI Language

When you type a sentence to an AI, the AI doesn't read it the way you do. It doesn't even see words the way you do.

Instead, the AI breaks your text into tiny chunks called **tokens.** A token is roughly a piece of a word — sometimes a whole word, sometimes just a syllable or part of a word.

For example:
- The word "talking" might be one token
- The word "unbelievably" might be three tokens: "un" + "believ" + "ably"
- A space, a period, or a comma counts too

Why does this matter? Because **the AI processes tokens, not sentences.** It learned the patterns of language by reading billions of tokens — essentially, a huge chunk of the text that existed on the internet and in books. From all that reading, it figured out which tokens tend to follow which other tokens.

> ### 🧠 Think About It
>
> Here's a simple version of what the AI learned to do: fill in the blank.
>
> "She put on her shoes and went ______"
>
> You probably thought: *outside*, or *for a walk*, or *to school.* You didn't think "purple" or "mountain" or "the calculator." Why? Because you've read and heard millions of sentences, and you know what words tend to follow what other words.
>
> The AI learned the same patterns — from way, way more text than you've ever read.

### Next-Word (Well, Next-Token) Prediction

Here's the core idea behind how AI language models work: they're **prediction machines.**

When you type a message, the AI looks at every token you've given it and asks (mathematically): *What token is most likely to come next?*

Then it picks one. Then it asks again: *Given everything so far, what comes next?* And it picks again. And again. And again — until it's built a full response, one token at a time.

This is called **next-token prediction**, and it's the foundation of tools like ChatGPT, Claude, Gemini, and OpenClaw.

It sounds almost too simple, right? But when you train a system to do this on *hundreds of billions of sentences*, something remarkable happens: the AI starts producing text that's coherent, nuanced, and often genuinely useful.

[ILLUSTRATION: A diagram showing a sentence being written one word at a time, with arrows between each word and a small lightning bolt representing the AI's "choice" at each step. Each choice is labeled with a probability: "outside (42%), for a walk (28%), to the store (14%)..."]

### The Context Window: AI's Working Memory

Here's something important to understand: AI doesn't have infinite memory. It can only "see" a limited amount of text at a time.

That limit is called the **context window.** Think of it like a spotlight: anything inside the spotlight, the AI can see and use. Anything outside the spotlight? Gone. Invisible. Doesn't exist as far as the AI is concerned.

For most modern AI tools, the context window is quite large — it might hold a conversation that's dozens of pages long. But it's not unlimited. If you have a very long conversation with an AI, it may eventually "forget" what you talked about at the very beginning.

> ### 🔦 Spotlight Analogy
>
> Imagine you're reading a very long book, but you can only keep 50 pages visible at a time. As you flip forward, the earlier pages slide off the back. You can see what's in front of you clearly — but pages 1–10 are gone.
>
> That's roughly how AI context windows work. The more context the AI has, the better it can respond. But it has limits.

### What This Means for You

Here's the big takeaway from all of this:

The AI isn't *thinking* the way you think. It isn't *understanding* your question the way a teacher would. It's predicting the best continuation of your text based on patterns it learned from a massive amount of human-written content.

That's powerful. But it also means:

- **Garbage in, garbage out.** If your question is vague, the AI will make its best guess about what you meant — and it might guess wrong.
- **More context helps.** The more you tell the AI about who you are, what you need, and why you need it, the better it can predict what you want.
- **The AI doesn't know things you haven't told it.** It can't read your mind.

And *that* is exactly why prompts matter.

---

## Section 2: Why Prompts Matter

Let's do a quick demonstration.

**Vague prompt:** *"Write something about dolphins."*

**What you might get:** A general paragraph about dolphins — species, habitat, intelligence. Fine. Forgettable.

**Specific prompt:** *"Write a 150-word opening paragraph for a 6th grade science report about dolphin communication. Use engaging language and include at least one surprising fact."*

**What you might get:** A polished, grade-appropriate paragraph that actually fits your report, starts with a hook, and includes a cool fact about dolphin calls.

Same AI. Same knowledge. The difference is the **prompt** — the instructions you gave the AI before it started generating text.

> ### ⚠️ Common Misconception
>
> Many students think the AI will just "know" what they want and fill in the blanks. But the AI doesn't have any way to read your mind. It only knows what you've typed. Every detail you leave out is a guess the AI has to make for you.

Here's a way to think about it: imagine you're ordering at a restaurant. You say, "I want food." The waiter has to guess — and they might bring you something you hate, because technically you asked for "food."

But if you say: "I want a veggie burger, medium rare on the bun, extra pickles, no onions, with fries on the side," you'll get exactly what you want.

Prompting an AI is a lot like ordering at a restaurant. The more specific you are, the better your order.

---

## Section 3: Prompt Engineering Techniques

**Prompt engineering** is the practice of crafting better inputs to get better outputs from AI. Here are the core techniques:

---

### Technique 1: Specificity — Be Precise About What You Want

The single biggest upgrade you can make to any prompt is to be *more specific.*

Ask yourself before hitting send:
- **What do I actually need?** (Not just "help with my essay" — *what kind* of help?)
- **What format do I want?** (A list? A paragraph? A table?)
- **How long should the response be?** (One sentence? A page? Bullet points?)
- **What level should it be?** (Simple? Advanced? For a 7th grader?)
- **What's the purpose?** (For a class presentation? A personal project? To understand a concept?)

> **Before:** "Help me write an email."
>
> **After:** "Write a polite, professional email to my teacher asking if I can turn in my project one day late because I had a family emergency. Keep it under 4 sentences."

---

### Technique 2: Role Assignment — Give the AI a Persona

AI responds really well when you tell it *who it should be* in its response. This is called **role assignment** — you assign the AI a role, like an actor playing a part.

Role assignment works because the AI has learned from content written by all kinds of people. When you tell it to be a specific type of person, it shifts into using the patterns, vocabulary, and approach that type of person would use.

> **Example:**
>
> *"Act as a friendly science tutor for a 6th grader who is confused about photosynthesis. Explain it using simple language and a real-world analogy."*
>
> Compare that to just asking: *"Explain photosynthesis."*

The first prompt gets you a patient, clear, age-appropriate explanation. The second might get you something out of a college textbook.

Other roles you can try:
- "Act as a debate coach and give me feedback on my argument..."
- "Respond as a historian from 1920 describing what the world feels like..."
- "You are a copy editor. Review this paragraph and suggest improvements..."

---

### Technique 3: Few-Shot Examples — Show, Don't Just Tell

Sometimes the best way to get what you want is to *show the AI an example* of what you're looking for. This is called **few-shot prompting** — you give the AI a "few shots" (examples) to learn from.

> **Example:**
>
> *"I'm writing book summaries in this style:*
>
> *Title: The Giver*
> *Summary: A boy living in a controlled utopia discovers the dark truth about his society when he's assigned a unique role.*
>
> *Title: Hatchet*
> *Summary: A teenage boy stranded in the Canadian wilderness after a plane crash must learn to survive using only a hatchet.*
>
> *Now write a summary in the same style for: Charlotte's Web."*

Without the examples, the AI might write a two-page plot summary. With the examples, it knows *exactly* the format and length you want.

---

### Technique 4: Chain-of-Thought — Ask the AI to Show Its Work

When you need the AI to solve a complex problem, help with reasoning, or do anything that requires multiple steps, ask it to **think out loud.**

This technique is called **chain-of-thought prompting.** Instead of just asking for an answer, ask the AI to explain its reasoning step by step.

> **Without chain-of-thought:** "What should I do if two of my friends are fighting with each other?"
>
> **With chain-of-thought:** "Two of my friends are fighting with each other. Help me think through this step by step — what might be causing the conflict, what are my options, and what are the pros and cons of each option?"

Chain-of-thought prompting is especially useful for:
- Math and logic problems
- Decision-making
- Writing plans and outlines
- Analyzing something with many parts

It also helps you *catch the AI making mistakes* — when you can see the reasoning, you can spot where it went wrong.

---

### Technique 5: Constraints — Tell the AI What Not to Do

Sometimes what you leave out of a prompt is as important as what you put in. Adding **constraints** tells the AI what to avoid, what limits to stay within, and what not to do.

Common constraints:
- Length limits ("No more than 100 words")
- Audience limits ("Explain this to someone who has never heard of AI")
- Format limits ("Only use bullet points, no paragraphs")
- Tone limits ("Be serious and academic, not casual")
- Content limits ("Don't include any math in your explanation")

> **Example:**
>
> *"Explain how the American Civil War started. Keep it under 200 words, avoid military jargon, and explain it as if I've never learned about it before."*

Without those constraints, you might get a 1,000-word essay full of terms like "antebellum," "states' rights," and "secession" without any context.

---

> ### 💡 Prompt Engineering Quick Reference
>
> | Technique | What It Does | Example Starter |
> |---|---|---|
> | **Specificity** | Gets you exactly what you need | "Write a [length] [format] about [topic] for [audience]..." |
> | **Role Assignment** | Shifts tone and expertise | "Act as a [role]..." |
> | **Few-Shot** | Shows format by example | "Here are two examples... Now do the same for..." |
> | **Chain-of-Thought** | Reveals reasoning | "Think through this step by step..." |
> | **Constraints** | Limits unwanted content | "Keep it under [X] words / avoid [Y] / only use [Z]..." |

---

## Section 4: Before & After — Real Student Examples

Let's look at real prompt transformations. For each one, think about *what* changed and *why* it made a difference.

---

### Example A: The Science Report

**Before:**
*"Write about climate change."*

**Problems:** Too broad. No format. No length. No audience. No specific focus.

**After:**
*"I'm a 7th grader writing a 5-paragraph persuasive essay about one specific effect of climate change. Focus only on rising sea levels. Include at least two real-world examples, write for an audience of other middle schoolers, and keep each paragraph under 100 words."*

**What changed:** Topic narrowed. Format specified. Length defined. Audience identified. Real examples required.

---

### Example B: The Vocabulary Help

**Before:**
*"Help me understand this word."*

**Problems:** What word? What kind of understanding? How much context?

**After:**
*"I just read the word 'oligarchy' in my social studies textbook. I'm in 7th grade. Can you (1) define it in simple terms, (2) give me a real-world example from history, and (3) use it in a sentence I could write in a class discussion?"*

**What changed:** Specific word named. Grade level given. Three specific outputs requested. Purpose stated.

---

### Example C: The Creative Writing Block

**Before:**
*"Help me write a story."*

**Problems:** Story about what? For who? What style? How long?

**After:**
*"I'm stuck on the beginning of a short story I'm writing for English class. The story is about a 13-year-old who discovers a hidden room in their school. I want the opening paragraph to feel mysterious and suspenseful. Write three different possible first paragraphs and label them Option A, B, and C so I can pick which direction I like best."*

**What changed:** Context given. Genre established. Tone specified. Format structured (three options). Student retains creative choice.

---

### Example D: The Math Explanation

**Before:**
*"I don't understand fractions."*

**Problems:** Which part of fractions? What doesn't make sense? What grade level?

**After:**
*"I'm in 6th grade and I understand what a fraction is, but I keep getting confused when I have to add two fractions with different denominators. Can you explain just that step — adding fractions with different denominators — using simple language and one step-by-step example with the numbers 1/3 and 1/4?"*

**What changed:** Specific concept identified. Prior knowledge stated. One specific operation focused. Level appropriate. Example numbers given.

---

> ### 🐾 OpenClaw Challenge: Transform a Weak Prompt
>
> **With a partner or on your own:**
>
> Take each weak prompt below and transform it into a strong prompt using at least three techniques from this chapter. Then test both versions in OpenClaw and compare the responses.
>
> 1. "Explain something about space."
> 2. "Help me with my essay."
> 3. "What should I eat for lunch?"
> 4. "Tell me about ancient Egypt."
>
> **Discussion:** Which change made the biggest difference? Was there any case where the simpler prompt actually worked just as well?

---

## Section 5: Putting It All Together — The Prompt Formula

Here's a general formula for building strong prompts. You don't have to use every piece every time — but when you're stuck, run through this checklist:

**The CRAFTS Formula:**

- **C — Context:** Who are you? What's the situation? (I'm a 7th grader writing a report on...)
- **R — Role:** Who should the AI be? (Act as a patient tutor...)
- **A — Action:** What exactly do you want? (Explain / Write / Summarize / Compare...)
- **F — Format:** How should the response look? (Bullet points / paragraphs / numbered list...)
- **T — Tone:** What's the vibe? (Formal / casual / simple / academic / fun...)
- **S — Scope:** Length and boundaries? (Under 200 words / only focus on X / avoid Y...)

> **Example using CRAFTS:**
>
> *"I'm a 7th grader studying for a history test (Context). Act as a quiz master (Role). Give me 5 review questions (Action) as a numbered list (Format), in a fun, game-show style (Tone), covering only the causes of WWI — not the battles or outcomes (Scope)."*

---

> ### 🌍 AI in the Wild: Prompt Engineering Earns $300K?
>
> ---
> **SIDEBAR: Is Prompt Engineering a Real Job?**
>
> In 2023, headlines started appearing with titles like "This job pays $300,000 — and all you do is write questions for AI."
>
> People were shocked. You could earn a six-figure salary just for knowing how to talk to AI?
>
> The answer is: sort of. Here's the reality:
>
> **Yes, prompt engineering is a real skill.** Large companies — including hospitals, law firms, banks, and tech giants — need people who can figure out how to get reliable, useful, and safe outputs from AI systems. Writing prompts that consistently work is harder than it sounds, especially at scale.
>
> **Some companies did post "prompt engineer" job listings** with high salaries, mostly in 2023–2024. These jobs typically required a mix of technical understanding, clear writing, creativity, and domain expertise.
>
> **But it's evolving fast.** As AI tools get better, some prompt engineering tasks are becoming easier or automated. Many experts now say prompt engineering is becoming a *skill everyone needs* — not a separate job title.
>
> Think of it like typing. In the 1970s, companies hired "typists." Now, everyone types. Knowing how to communicate effectively with AI might follow the same path.
>
> **The bottom line?** You might not have "Prompt Engineer" on your business card one day — but knowing how to get the best results from AI is a skill that will matter in almost every job field. And you're learning it right now.
>
> [QR CODE: *The New York Times — "The AI Job Boom" (student-accessible version)*]

---

## Section 6: When Prompting Gets Complicated

Strong prompting isn't just about one message. It's also about the conversation that follows.

### Iterating: Make It Better in Rounds

The best results often come from multiple exchanges, not one perfect prompt. After you get a response, you can:

- **Ask for clarification:** "Can you explain the second point in simpler terms?"
- **Request changes:** "Make this shorter and more casual."
- **Push back:** "I don't think that example is accurate — can you check it?"
- **Go deeper:** "You mentioned X — can you tell me more about that specifically?"

This back-and-forth is called **iterating**, and it's one of the most powerful (and underused) skills in working with AI.

### When the AI Misunderstands You

Sometimes the AI will completely miss what you were asking for. That's okay — and it's not a failure on your part or the AI's part. It's just a communication gap.

When that happens:
1. **Don't just try the same thing again** — that's like ordering a dish that didn't come out right by repeating the same order.
2. **Rephrase, not repeat.** What detail did the AI seem to misunderstand? Fix that.
3. **Be more explicit.** Add another layer of specificity.
4. **Start fresh if needed.** Sometimes a bad conversation just needs a clean slate.

---

## Chapter Summary

Here's what you learned in Chapter 9:

**AI language models work by predicting tokens** — pieces of words — one at a time, based on patterns learned from huge amounts of text. They have a context window (a limited working memory) and no ability to read your mind.

**Prompts matter enormously.** The same AI can give you useless or excellent output depending on how you ask. Better inputs → better outputs.

**Five core prompt engineering techniques:**
1. **Specificity** — Be precise about what you want
2. **Role assignment** — Give the AI a persona to work from
3. **Few-shot examples** — Show it the format you want by example
4. **Chain-of-thought** — Ask it to reason step by step
5. **Constraints** — Tell it what to avoid and what limits to stay within

**The CRAFTS formula** — Context, Role, Action, Format, Tone, Scope — gives you a checklist for building strong prompts.

**Iterating matters.** Great results often come from a conversation, not a single perfect prompt.

---

## Key Vocabulary

| Term | Definition |
|---|---|
| **Token** | A chunk of text (part of a word, a whole word, or punctuation) that AI processes as a unit |
| **Context Window** | The amount of text an AI can "see" at one time — its working memory |
| **Next-Token Prediction** | How AI language models generate text: predicting the most likely next piece of text |
| **Prompt** | The text input you give to an AI system |
| **Prompt Engineering** | The practice of crafting effective inputs to get better outputs from AI |
| **Specificity** | Being precise and detailed — one of the most powerful prompting techniques |
| **Role Assignment** | Telling the AI to adopt a specific persona or expertise level |
| **Few-Shot Prompting** | Giving the AI examples of what you want before making your actual request |
| **Chain-of-Thought** | Asking the AI to show its reasoning step by step |
| **Constraints** | Limits you set in a prompt: length, format, tone, or content restrictions |
| **Iterating** | Improving results through a back-and-forth conversation with the AI |

---

## Review Questions

Answer in complete sentences. Use what you learned — put it in your own words.

1. **What is a token?** Why does the AI process tokens instead of whole words?

2. **What is next-token prediction?** Describe it in your own words as if explaining to a classmate.

3. **What is a context window?** Use an analogy to explain it (not the spotlight from the chapter — come up with your own).

4. **Why does the same question sometimes get very different answers from an AI?** Explain at least two reasons.

5. **Choose any two prompt engineering techniques from this chapter.** For each: (a) name and describe the technique, and (b) give your own example of a weak prompt and a strong version using that technique.

6. **What is iterating?** Why might it be more effective than trying to write a perfect first prompt?

7. **Is prompt engineering a real career?** Based on what you read, what do *you* think — and why?

---

## OpenClaw Challenge Exercises

### 🐾 Challenge 1: The Prompt Makeover

**Goal:** Practice transforming weak prompts into strong ones and see the difference.

**Instructions:**
1. Write three weak prompts — just short, vague questions about topics you're actually curious about.
2. For each, apply the CRAFTS formula to create a stronger version.
3. Run both the weak and strong versions in OpenClaw.
4. Compare the responses: Which was more useful? What specifically was different?
5. Write a short reflection: What did you learn about how the AI responds to different inputs?

---

### 🐾 Challenge 2: Teach a Role

**Goal:** Explore role assignment.

**Instructions:**
1. Pick a topic you're currently learning about in any class (science, history, math, language arts).
2. Try asking OpenClaw about that topic THREE different ways:
   - As a regular student asking a question
   - Assigning the AI the role of "a patient tutor for a 7th grader"
   - Assigning the AI the role of "a professor writing for college students"
3. Compare all three responses. How did the tone, vocabulary, and depth change?
4. Which response was most useful to you? Why?

---

### 🐾 Challenge 3: The Iteration Experiment

**Goal:** Practice improving results through conversation.

**Instructions:**
1. Start with a vague prompt: "Help me write a poem."
2. See what you get. Then, without starting over, use follow-up messages to make it:
   - About a specific topic
   - In a specific style (rhyming, haiku, free verse)
   - With a specific mood (funny, sad, hopeful)
   - The right length for your purpose
3. Track each exchange: What did you ask? What changed?
4. End up with a poem you're genuinely happy with.
5. Share your "iteration log" — the sequence of prompts that led to the final result.

---

## Going Further

[QR CODE: *Learn Prompting* — free open-source guide to prompt engineering (learningprompting.org)]

[QR CODE: *Prompt Engineering Guide* — DAIR.AI's comprehensive resource]

[QR CODE: *Google's "Prompting Essentials" course* — free beginner course]

[QR CODE: *Anthropic's Prompt Library* — example prompts for common tasks]

---

*End of Chapter 9*

---

> **Up Next → Chapter 10: When AI Gets It Wrong**
> *Even great tools make mistakes. We'll look at why AI "hallucinates," how to fact-check outputs, and what responsible use really looks like.*

---

*© OpenClaw AI Literacy Curriculum | Module 5 | Draft v0.1 | For classroom and educational use*
