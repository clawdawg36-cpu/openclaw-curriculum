# Prompt Engineering Lab — Student Guide
## Talking to Your Agent: From "meh" to Magic

**Module:** 5 — Give Your Agent a Voice  
**Time:** 3–4 class periods  
**What you'll build:** A Prompt Portfolio — your 3 best prompts, documented and ready to show

---

## The Big Idea

You already have an agent. It can talk. But *how* you talk to it changes everything.

Prompt engineering is the skill of designing inputs that get the outputs you actually want. It's not magic — it's craft. Like knowing how to phrase a good search query, but with a lot more nuance.

By the end of this lab, you'll have tried 15 different prompting techniques on your own agent, and you'll know exactly which ones work, which ones flop, and why.

---

## What Is a Prompt? What Is a Response?

A **prompt** is anything you send to your AI agent — a question, a command, an instruction, a scenario.

A **response** is what the agent sends back.

The same agent, given different prompts, will produce wildly different responses. The model doesn't change. You change how you talk to it.

> 🎯 **Prompt engineering** is the skill of writing prompts that consistently produce the output you want.

---

## How to Use This Lab

You'll work through **15 challenges**, organized into 5 skill tiers:

| Tier | Challenges | Focus |
|------|-----------|-------|
| 🟢 Tier 1 — Beginner | 1–3 | Specificity |
| 🟡 Tier 2 — Developing | 4–6 | Role Assignment |
| 🟠 Tier 3 — Intermediate | 7–9 | Few-Shot Examples |
| 🔴 Tier 4 — Advanced | 10–12 | Chain-of-Thought + Constraints |
| 🟣 Tier 5 — Expert | 13–15 | Output Formatting + Portfolio |

For each challenge, you'll:
1. Try the **"Before"** prompt (the weak version)
2. Try the **"After"** prompt (the stronger version)
3. Compare results side by side
4. Write your own variation

Use your **Challenge Worksheets** to record everything. They're your lab notebook — fill them out as you go.

---

## Setting Up

Before you start, make sure your OpenClaw agent is running.

**To start your agent:**
```bash
openclaw start
```

Then open your chat interface — this is where you'll test all your prompts.

If you're not sure how to start your agent, ask your teacher.

---

## 🟢 Tier 1: Specificity (Challenges 1–3)

The single biggest upgrade you can make to any prompt is **adding specificity.** Vague prompts get vague answers. Specific prompts get specific answers.

---

### Challenge 1: The Vague vs. Specific Test

**The concept:** Every word you add to a prompt narrows the space of possible responses. Think of it like a GPS: "Go north" vs. "Go to 123 Main Street, Springfield."

**BEFORE (try this first):**
```
Tell me about space.
```

**AFTER (try this next):**
```
In 3 bullet points, explain what makes the International Space Station 
different from a regular satellite, using language a 7th grader would 
understand. Focus only on its size, crew, and orbit.
```

> 📊 **Compare:** How long was the "before" response? How relevant was each sentence? How did the "after" response differ in focus and usefulness?

**Your turn:** Write a specific version of this vague prompt:
```
Tell me about dogs.
```

Your improved version: ________________________________

---

### Challenge 2: The Audience Shift

**The concept:** Adding an intended audience to a prompt changes tone, vocabulary, and complexity automatically.

**BEFORE:**
```
Explain what a loop is in programming.
```

**AFTER version A (audience: expert):**
```
Explain the concept of loops in programming as if I'm a senior software 
engineer who just asked a junior dev to review their loop implementation.
```

**AFTER version B (audience: beginner):**
```
Explain what a loop is in programming using only words a 10-year-old 
would know. Use an analogy from everyday life, not computers.
```

> 📊 **Compare:** Try all three. How does the reading level change? The vocabulary? The analogies used?

**Your turn:** Pick a topic you know well. Write the same explanation for two different audiences.

Topic: ________________________________  
Version for expert: ________________________________  
Version for beginner: ________________________________

---

### Challenge 3: The Context Add

**The concept:** Context before the question primes the AI. It's like handing someone a file before you ask them a question — they give you a more relevant answer.

**BEFORE:**
```
What should I do?
```

**AFTER:**
```
I'm a 7th grader working on a science fair project about soil erosion. 
I've collected data from three different soil types (clay, sand, loam) 
under simulated rain. My poster board is due Friday. 
What should I do next to analyze my data and make my poster compelling?
```

> 📊 **Compare:** The "before" prompt is almost impossible to answer. The "after" gives the AI everything it needs. What specific details made the difference?

**Your turn:** Take a question you've actually wanted to ask lately. Write a context-rich version.

Your question: ________________________________  
Context-rich version: ________________________________

---

## 🟡 Tier 2: Role Assignment (Challenges 4–6)

Telling the AI *who to be* changes how it answers. Not what information it has — but how it packages, frames, and delivers that information.

---

### Challenge 4: The Basic Role

**The concept:** Assigning a role is different from just giving context. You're telling the AI to *embody* a perspective, not just reference it.

**BEFORE:**
```
What's a good way to practice guitar?
```

**AFTER:**
```
You are a professional guitar instructor with 15 years of teaching 
middle schoolers. A student just picked up guitar for the first time 
last week and is getting frustrated because they can't form a clean G chord. 
What do you tell them?
```

> 📊 **Compare:** Does the AI give more specific, practical advice with the role assigned? Does it feel more like talking to a person?

**Your turn:** Think of advice you'd actually want. Assign a role that would make the answer better.

Question: ________________________________  
Role to assign: ________________________________  
Full prompt: ________________________________

---

### Challenge 5: The Opposing Roles Experiment

**The concept:** The same question answered by two opposing roles reveals how framing shapes information.

**Role A:**
```
You are a social media company executive who believes teenagers should 
have access to all social media platforms without age restrictions. 
Make the strongest case you can for your position.
```

**Role B:**
```
You are a child psychologist who studies the effects of social media 
on adolescent brain development. Make the strongest case you can for 
why age restrictions on social media are necessary.
```

> 📊 **Compare:** Do both responses make good points? What does this tell you about AI — that it can argue any side? What are the implications of that?

> ⚠️ **Discussion point:** If an AI can argue any position equally well, how does that affect how you should trust AI-written content?

**Your turn:** Pick a debate topic from your class. Write role prompts for both sides.

Topic: ________________________________  
Role A prompt: ________________________________  
Role B prompt: ________________________________

---

### Challenge 6: The Role + Task Combo

**The concept:** The most powerful role prompts combine who the person is AND what they're doing right now.

**BEFORE:**
```
Review my writing.
```

**AFTER:**
```
You are a newspaper editor at the school paper. You have 5 minutes 
before the issue goes to print. A student just handed you this paragraph 
and asked if it's ready to publish. 

[Paste a paragraph of your own writing here]

Give me your fast, honest editorial feedback — what works, what doesn't, 
and the ONE thing I must fix before this goes out.
```

> 📊 **Compare:** The "after" prompt creates urgency, specificity, and a clear deliverable. How does the feedback quality compare?

**Your turn:** Paste a paragraph from something you're working on (any class). Write a role + task prompt to get good feedback on it.

---

## 🟠 Tier 3: Few-Shot Examples (Challenges 7–9)

The most powerful way to show an AI what you want isn't to describe it — it's to *demonstrate* it. Few-shot prompting means giving examples before your actual question.

---

### Challenge 7: Zero-Shot vs. One-Shot vs. Three-Shot

**The concept:** "Shots" = examples you give before the task. Zero-shot = no examples. One-shot = one example. Three-shot = three examples.

**Zero-shot (no examples):**
```
Translate this sentence to formal English:
"yo bro that test was lowkey brutal"
```

**One-shot (one example):**
```
Translate informal sentences to formal English.

Informal: "bro I totally blanked on the answer lol"
Formal: "I was unfortunately unable to recall the correct response."

Now translate this:
"yo bro that test was lowkey brutal"
```

**Three-shot (three examples):**
```
Translate informal sentences to formal English.

Informal: "bro I totally blanked on the answer lol"
Formal: "I was unfortunately unable to recall the correct response."

Informal: "ngl that project hit different"
Formal: "I must acknowledge that the project had a notable impact."

Informal: "omg she ghosted me completely"
Formal: "She ceased all communication without explanation."

Now translate this:
"yo bro that test was lowkey brutal"
```

> 📊 **Compare all three.** Does the output get more consistent with more examples? More stylistically matched to your examples?

---

### Challenge 8: Showing Format with Examples

**The concept:** If you want output in a specific format, show that format in an example rather than describing it.

**BEFORE (describing the format):**
```
Give me book recommendations. Include title, author, and a one-sentence 
reason I'd like it. Use some kind of structure.
```

**AFTER (showing the format):**
```
Give me 3 book recommendations. Follow this exact format:

📚 **[TITLE]** by [Author]
*Why you'd like it:* [One sentence reason]
---

Here's an example of what I want:

📚 **The Giver** by Lois Lowry
*Why you'd like it:* A society that eliminates pain — but also memory, color, and choice — will make you question what you'd trade for comfort.
---

Now give me 3 more recommendations for someone who loved The Giver.
```

> 📊 **Compare:** Does the output match your format better when you showed it vs. described it?

**Your turn:** Choose an output format you care about (bullet list, table, numbered steps, etc.). Write a few-shot prompt that demonstrates your desired format.

---

### Challenge 9: Style Cloning with Examples

**The concept:** You can use few-shot examples to teach an AI a writing style — then have it generate new content in that style.

**Try this:**
```
Here are some example tweets from a tech journalist I like:

"Just spent 3 hours with the new [phone]. The camera is genuinely 
remarkable. The price is genuinely not."

"Everyone saying AI will take their job hasn't watched an AI try 
to write a joke that lands."

"Hot take: the best feature of any new device is the feature they 
decided to remove."

Now write 3 more tweets in this same style, about AI in schools.
```

> 📊 **What makes this work?** What elements of the style does the AI pick up on? (Sentence structure? Irony? Length? Topic structure?)

**Your turn:** Find 2–3 examples of writing you like (could be from a book, a website, a teacher's comments). Write a style-clone prompt.

---

## 🔴 Tier 4: Chain-of-Thought + Constraints (Challenges 10–12)

These are the techniques that separate casual AI users from power users.

---

### Challenge 10: Unlocking Reasoning with "Think Step by Step"

**The concept:** By default, AI models tend to jump to answers. Adding a phrase like "think step by step" activates chain-of-thought reasoning — the model works through the problem out loud before concluding.

**BEFORE:**
```
A train leaves Chicago at 9 AM going 60 mph toward New York. 
Another train leaves New York at 11 AM going 80 mph toward Chicago. 
The cities are 790 miles apart. When do the trains meet?
```

**AFTER:**
```
A train leaves Chicago at 9 AM going 60 mph toward New York. 
Another train leaves New York at 11 AM going 80 mph toward Chicago. 
The cities are 790 miles apart. When do the trains meet?

Think through this step by step. Show each step of your reasoning 
before giving the final answer.
```

> 📊 **Compare:** Does the step-by-step version get the right answer? Does seeing the reasoning help you catch mistakes if there are any?

**Your turn:** Find a word problem from math class. Try it with and without "think step by step." Which response do you trust more?

---

### Challenge 11: Adding Constraints to Control Output

**The concept:** Constraints are rules you add to prevent the AI from doing things you don't want. They can be length limits, topic limits, format restrictions, or anything else.

**Unconstrained:**
```
What are some things I should know about starting a small business?
```

**Constrained:**
```
What are some things I should know about starting a small business?

Constraints:
- Maximum 5 points
- Each point is one sentence, 20 words or fewer
- Do not include anything about taxes or legal requirements
- Write for a 14-year-old audience
- Do not repeat any word more than twice across all 5 points
```

> 📊 **Compare:** Do constraints make the output more or less useful for your actual needs? What happens if a constraint is impossible to satisfy?

**Your turn:** Write a prompt about something you're actually curious about. Add 4 constraints that make the output more useful for you specifically.

Topic: ________________________________  
Your constrained prompt:

---

### Challenge 12: The Iteration Loop

**The concept:** Prompting is rarely one-shot in real use. This challenge is about using follow-up prompts to refine output — the conversation as a design tool.

**Round 1 prompt:**
```
Write a short bio for my AI agent for the school AI Expo.
Agent name: [your agent's name]
Agent's skills: [list 2–3 things your agent can do]
```

**After you get a response, use one of these follow-up prompts:**

Option A (too long):
```
This is good but too long. Cut it to 3 sentences max. 
Keep the most interesting detail.
```

Option B (too formal):
```
The tone is too corporate. Rewrite it like a student wrote it — 
enthusiastic, a little informal, but still professional enough 
for the Expo display.
```

Option C (missing something):
```
Add a line at the beginning that starts with an interesting 
question or surprising fact. Don't use "Are you ready to meet..."
as the opener — I've seen that 10 times already.
```

> 📊 **Record:** What was the original output? Which follow-up did you use? What changed? How many rounds did it take to get something you actually liked?

---

## 🟣 Tier 5: Output Formatting + Portfolio (Challenges 13–15)

---

### Challenge 13: Structured Data Output

**The concept:** AI can output in structured formats — JSON, Markdown tables, CSV, and more. This is crucial if you ever want to use AI output in another program or spreadsheet.

**Prompt A — Plain text:**
```
List 5 planets in our solar system with their distance from the sun 
and number of moons.
```

**Prompt B — Table format:**
```
List 5 planets in our solar system with their distance from the sun 
and number of moons. Format this as a Markdown table with columns: 
Planet | Distance from Sun (AU) | Number of Moons
```

**Prompt C — JSON format:**
```
List 5 planets in our solar system with their distance from the sun 
and number of moons. Format the output as a JSON array where each 
planet is an object with keys: name, distance_au, moons.
Output only the JSON — no explanation text before or after.
```

> 📊 **Compare:** Which format is most useful if you're putting this into a Google Sheet? A website? A Python script? Which is easiest to read?

---

### Challenge 14: The "No Hallucination" Constraint

**The concept:** AI models sometimes confidently make up facts. This challenge explores how prompts can reduce — though never eliminate — hallucinations.

**Risky prompt:**
```
What are 10 peer-reviewed studies about screen time in teenagers 
published after 2022? Include authors and journals.
```

**Safer prompt:**
```
I want to understand the research on screen time in teenagers. 
Rather than citing specific studies (which you might get wrong), 
summarize the main themes and debates in this research area as of 
your knowledge cutoff. Clearly flag anything you're unsure about.
Then tell me what search terms I should use to find real peer-reviewed 
studies on this topic.
```

> 📊 **Compare:** Which response do you trust more? Why? What does this tell you about when to use AI vs. when to use a library database?

**Discussion:** What's the difference between "the AI made something up" and "the AI was wrong"? Does the distinction matter?

---

### Challenge 15: Your Signature Prompt

**The concept:** Your final challenge is to design a prompt that demonstrates everything you've learned — and that you're genuinely proud of.

This prompt will go in your **Prompt Portfolio**.

**Requirements for Challenge 15:**
- Must use at least 3 techniques from this lab
- Must produce output that's actually useful to you (not just impressive-looking)
- Must be for a real task — something you'd actually do or care about
- Write a "before" version (your first attempt) and your final polished version

**Techniques checklist:**
- [ ] Specificity (added context, audience, scope)
- [ ] Role assignment
- [ ] Few-shot examples
- [ ] Chain-of-thought ("think step by step")
- [ ] Constraints
- [ ] Output formatting
- [ ] Follow-up iteration

**Your before version:** ________________________________

**Your final version:** ________________________________

**Techniques you used:** ________________________________

---

## Your Prompt Portfolio

At the end of this lab, select your **3 best prompts** for your Prompt Portfolio. These should be prompts you're proud of — not the ones you just copied from this guide, but ones you actually designed or significantly improved.

For each prompt, you'll document it in the Challenge Worksheets using the Portfolio Template.

Your Portfolio will be part of your Module 5 assessment.

---

## Wrapping Up

You just spent three periods learning that *how* you talk to an AI matters as much as *what* you ask. That skill — prompt engineering — is genuinely useful right now, in your life, today. And it'll matter more as AI tools become more embedded in school, work, and daily life.

The best prompt engineers aren't just technically skilled. They're clear thinkers who know exactly what they want and can express it precisely. That's a skill that transfers way beyond AI.

---

> 🔗 **Next up:** Lab 5.2 — Channel Connection Lab. You've learned to talk to your agent better. Now let's wire it up to a real communication platform so the whole world can talk to it.

---

*Module 5 Lab 1 — Prompt Engineering | OpenClaw AI Curriculum*
