# Lesson 5.2 — The Art of the Prompt

**Module:** 5 — Give Your Agent a Voice  
**Duration:** 1 period (~50 minutes)  
**Grade Level:** 7–8 (adaptable for 9–12)  
**Prerequisites:** Lesson 5.1 (students understand tokens, context windows, next-token prediction)

---

## 🔗 Through-Line Connection

> *"Now that you know HOW chatbots work — next-token prediction, context windows, probability — you have the keys. What you put in determines what comes out. Today we learn to use those keys."*

Lesson 5.2 takes the mechanism from 5.1 and makes it actionable. Students learn that prompting is a skill — not a guessing game — and they develop three core techniques: specificity, role-playing, and few-shot examples. The haiku challenge at the end makes the learning concrete and fun.

**Bridge to Lesson 5.3:** Today's techniques become the toolkit for the Prompt Engineering Olympics (5.3), where students will compete in structured events using what they learned here.

---

## 🎯 Learning Objectives

By the end of this lesson, students will be able to:

1. Explain why vague prompts produce worse results than specific ones, using their knowledge of next-token prediction.
2. Write a specific prompt using at least three of: task, role, format, length, constraints, examples.
3. Use role-playing prompting to shift the AI's "persona" and observe the change in output.
4. Construct a few-shot prompt that shows the AI the pattern they want it to follow.
5. Apply prompt engineering techniques to a creative challenge (the haiku challenge).

---

## 📋 Materials & Setup

| Item | Notes |
|------|-------|
| Computers / tablets | 1 per student or pair; access to AI agent or ChatGPT |
| Projector / display | For teacher demos |
| Prompt Comparison Worksheet | Print or share digitally (see `prompt-comparison-worksheet.md`) |
| Whiteboard | For recording student prompts during class |
| Student journals/notebooks | For the haiku challenge reflection |

**Teacher Prep:**
- Test that AI access is working for all students
- Have a simple demo prompt ready (e.g., "Tell me about dogs") to contrast with a specific version
- Optional: create a class shared doc where students can paste their prompts and results

---

## ⏱️ Lesson Outline

### Opening: The Worst Prompt Contest (5 min)

**Activity — no setup required:**

Ask: *"What's the most useless prompt you could give an AI? What would get you the most generic, boring, unhelpful response possible?"*

Take 3–4 answers. Students will say things like "Tell me stuff" or "Talk." Laugh about it together.

Then flip it: *"OK, now what's the BEST prompt you've ever tried? What made it good?"*

Take 2–3 answers. Most students won't have thought about this yet.

**Bridge:** *"By the end of today, you'll be able to write prompts that are genuinely good — not just less bad. And you'll know exactly WHY they work."*

---

### Segment 1: Vague vs. Specific (10 min)

**The Vague Prompt Problem**

Start with a live demo on the projector:

**Prompt 1 (vague):** *"Tell me about dogs."*

Show the output. It'll be a generic paragraph about dogs being pets, having fur, etc.

**Prompt 2 (specific):** *"You are a veterinarian speaking to a first-time dog owner who just adopted a 2-year-old rescue greyhound. In 3 bullet points, explain the three most important things they should know in the first week."*

Show the output. Night and day.

**Debrief:**
- *"Why did the second prompt work better?"* (Connect to 5.1: richer context → better probability distribution → better token predictions)
- *"What did I add to make it specific?"*

Write these on the board as students identify them:
- **Task** — what do you want?
- **Role** — who is the AI being?
- **Audience** — who is this for?
- **Format** — how should it look?
- **Length/scope** — how much?
- **Constraints** — what to include/exclude?

**Student Practice (3 min):**
Take the vague prompt: *"Help me with my essay."*  
Students write a more specific version in their journals. 2-3 volunteers share. Class evaluates which components they included.

---

### Segment 2: Role-Playing Prompts (10 min)

**Technique: Give the AI a Persona**

Explain: When you assign a role, you shift the probability distribution. The model draws on text written by/about that role, producing more targeted, appropriate language.

**Demo — Three versions of the same question:**

Question: *"What should I eat before a big test?"*

- Prompt 1: Just the question (baseline)
- Prompt 2: *"You are a sports nutritionist advising a teenage athlete. What should I eat before a big test?"*
- Prompt 3: *"You are a fun food blogger writing for middle schoolers. What should I eat before a big test?"*

Show all three outputs. Compare tone, vocabulary, recommendations.

**Discussion:**
- *"Which persona gave the most useful advice for you personally?"*
- *"Did the AI actually 'become' a nutritionist? Or did it predict tokens that nutritionists would use?"* (Reference 5.1!)
- *"What roles could you give your AI agent to make it more useful for different situations?"*

**Student Activity (3 min):**
Using the prompt comparison worksheet, students write THREE versions of a prompt using three different roles. They'll test these during the haiku challenge.

---

### Segment 3: Few-Shot Prompting (10 min)

**Technique: Show, Don't Just Tell**

Introduce: **Few-shot prompting** means giving the AI 2–3 examples of what you want, so it can match the pattern — rather than trying to describe the pattern in words.

**Why it works:** Connect to 5.1. The AI predicts what comes next based on the pattern in its context window. If you put examples IN the context window, the AI sees the pattern and continues it.

**Demo:**

*Zero-shot (just the instruction):*
```
Write a product review for wireless headphones.
```
Show output — fine, but generic.

*Few-shot (examples + instruction):*
```
Here are some product reviews I like. Please write one in the same style:

"These sneakers ruined every other sneaker for me. Put them on once — you can't go back."

"Honestly, this coffee maker is stupid good. I make six cups a day now. My wallet is sad. My mornings are not."

Now write one for wireless headphones.
```
Show output — the tone, rhythm, and personality match the examples.

**Key insight:**
> *"You don't have to tell the AI what style you want. You can SHOW it. Examples are context. Context shapes predictions."*

**Student Practice (4 min):**
Students write a 2-shot prompt for something they care about: a review, a text message, a story opening. Share 2–3 examples with the class.

---

### Segment 4: The Haiku Challenge (12 min)

**Apply all three techniques in a creative competition**

**Setup:**
> *"You're going to use your AI agent to write the world's greatest haiku. But there's a catch — you can't write it yourself. You have to prompt the AI to write it. You have 5 minutes to get the best haiku you can. Then we vote."*

**Rules:**
- Must use at least TWO of today's techniques (specific prompt, role-playing, few-shot)
- Must be a real haiku (5-7-5 syllables — verify it!)
- Can iterate as many times as you want in 5 minutes
- Save your BEST prompt and BEST result

**During the activity:**
Teacher circulates, asking students: *"What technique are you using? Why?"*

**After 5 minutes — Gallery vote:**
- Each student reads their haiku aloud (or projects it)
- Class votes on: Most Beautiful / Most Funny / Most Surprising / Best Prompt (teacher shares the winning prompt structure)

**Debrief:**
- *"What did the winning prompts have in common?"*
- *"When you iterated — what changed between your first attempt and your best one?"*
- *"What did you have to tell the AI that you didn't expect to have to tell it?"*

---

### Closing (3 min)

**The Prompt Engineer's Toolkit (summarize on board):**
1. ✅ Specificity — task, role, format, audience, constraints
2. 🎭 Role-playing — persona shifts the output
3. 📋 Few-shot — show examples, don't just describe

**Preview of 5.3:**
> *"Next class, you're going to use these exact techniques in a class competition — four events, one winner per event. Today was practice. Thursday is the Olympics."*

**Exit Ticket (2 min):**
Complete this sentence in your journal: *"A specific prompt works better than a vague one because ___"* (must reference something from Lesson 5.1 in the answer)

---

## 📊 Assessment

| Method | Description |
|--------|-------------|
| Prompt Comparison Worksheet | Students demonstrate vague vs. specific, 3 role versions |
| Haiku Challenge | Creative application of at least 2 techniques |
| Exit ticket | Connects today to 5.1 mechanism (shows integration of learning) |
| Participation | Sharing prompts, engaging in class demos |

---

## 🔧 Differentiation

**For students who finish early / advanced:**
- "Meta-prompting": write a prompt that asks the AI to help you write a better prompt. Then use that prompt.
- Research: What is "chain-of-thought" prompting? How is it different from few-shot?
- Try getting the AI to refuse to answer — what prompt breaks its safety guidelines? (Discuss why those exist.)

**For students who struggle:**
- Provide a "prompt template" with blanks: *"You are a [ROLE] helping a [AUDIENCE]. Please [TASK] in [FORMAT] using [NUMBER] [UNITS]."*
- Pair with a stronger student for the few-shot activity
- The haiku challenge is accessible regardless of tech level — all students can participate

**For ELL students:**
- Invite them to test whether the AI responds better in English vs. their home language for the same prompt
- Role-playing prompts often work cross-linguistically — try assigning a role in their home language

---

## 💬 Discussion Questions

1. *"Is prompt engineering a 'real' skill? Or will AI get good enough that it doesn't matter how you ask?"*
2. *"When you write a role-playing prompt, are you being dishonest? Is it OK to tell the AI it's a doctor or a poet?"*
3. *"Could a bad actor use these techniques to get an AI to do something harmful? What would prevent that?"*
4. *"If the AI can match any style you show it, who 'owns' the style? The original author, you, or the AI?"*

---

## 📎 Slide Outline

See `slides-outline.md` for the full slide-by-slide guide.

**Slide summary:**
1. Title: "The Art of the Prompt"
2. Warm-up: The Worst Prompt Contest
3. Vague vs. specific — live demo setup
4. The six components of a specific prompt
5. Role-playing technique + demo
6. Few-shot technique + demo
7. Haiku Challenge — rules
8. Haiku Gallery vote slide
9. The Prompt Engineer's Toolkit (summary)
10. Bridge to 5.3 / Exit ticket

---

## 🔗 Connections & Resources

- **Learn Prompting (free guide):** https://learnprompting.org
- **Anthropic Prompt Library:** https://docs.anthropic.com/claude/prompt-library
- **OpenAI Prompt Engineering Guide:** https://platform.openai.com/docs/guides/prompt-engineering
- **Previous Lesson:** 5.1 — How Chatbots Work (mechanism behind why these techniques work)
- **Next Lesson:** 5.3 — Prompt Engineering Lab: The Olympics (competitive application)

---

*Lesson authored for the OpenClaw AI Curriculum | Module 5: Give Your Agent a Voice*
