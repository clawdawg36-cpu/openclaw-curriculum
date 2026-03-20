# Module 5 Teacher Guide: Give Your Agent a Voice

**For Educators Without a CS or AI Background**
**Grade Level:** 7–8 | **Duration:** ~3 weeks (15 class periods)
**Last Updated:** March 2026

---

> **The big moment of this module is the first real reply.** When a student sends a message to their agent — not through a terminal, not through a tutorial, but through Discord or iMessage, from their phone, on a platform their friends actually use — and their agent writes back, something shifts. The agent stops being a school project and becomes something that *exists in the world*. Keep that destination in view from Day 1.

---

## Table of Contents

1. [Module Overview + Arc Context](#1-module-overview--arc-context)
2. [AI4K12 Alignment: Big Idea 4 — Natural Interaction](#2-ai4k12-alignment-big-idea-4--natural-interaction)
3. [The Two-Part Nature of This Module](#3-the-two-part-nature-of-this-module)
4. [Prerequisites & Technical Setup](#4-prerequisites--technical-setup)
5. [Materials Checklist](#5-materials-checklist)
6. [Day-by-Day Pacing Guide](#6-day-by-day-pacing-guide)
7. [Facilitation Tips: Prompt Engineering Lessons](#7-facilitation-tips-prompt-engineering-lessons)
8. [The Channel Connection Lab: Teacher Setup Guide](#8-the-channel-connection-lab-teacher-setup-guide)
9. [Lesson 5.4: AI as Study Partner — Academic Integrity Discussion Guide](#9-lesson-54-ai-as-study-partner--academic-integrity-discussion-guide)
10. [Differentiation Strategies + Offline Fallbacks](#10-differentiation-strategies--offline-fallbacks)
11. [Cross-Subject Connections](#11-cross-subject-connections)
12. [Common Student Questions + Teacher FAQ](#12-common-student-questions--teacher-faq)

---

## 1. Module Overview + Arc Context

### Module 5 in the Arc: "Build Your AI Assistant"

Students are building a personal AI assistant across 7 modules. Module 5 is the communication layer — the moment the agent stops being a private project and becomes something that can reach the world.

| Module | Capability Unlock | Student's Agent After |
|--------|------------------|-----------------------|
| 1 | Identity | Has a name and personality |
| 2 | Perception | Can see images and hear audio |
| 3 | Knowledge | Has a custom knowledge base |
| 4 | Learning | Includes a model the student trained |
| **5** | **Communication** | **Connected to a live channel — real messages, real replies** |
| 6 | Ethics | Has guardrails and usage policy |
| 7 | Presentation | Demoed at AI Expo |

### How M5 Connects M4 → M6

**From M4 (Learning):** In M4, students trained machine learning models from their own data. They learned that data shapes what a model knows, and that the gap between training accuracy and real-world performance is where the interesting (and dangerous) things happen. M5 takes everything students have built so far — identity, perception, knowledge, a trained model — and connects it to a communication channel. The agent they've been developing in private now has a public face.

> "In M4, you taught your agent to recognize things. In M5, you give it a way to talk. Those two things together — recognition and language — are most of what makes AI feel alive."

**Into M6 (Ethics):** Connecting an agent to a live channel changes the ethics conversation entirely. In M6, students will build guardrails, usage policies, and safety mechanisms for their agents. The motivation for that work comes from M5: once your agent can be reached by real people (including people who didn't build it), you need to think hard about what it should and shouldn't do. M5 creates the need; M6 provides the response.

> "Everything we've built so far has been private. The moment you connect to a channel, other people can interact with what you've made. What changes when that happens?"

### Big Ideas

Three ideas anchor Module 5:

1. **Language is an interface — and interfaces have design.** How you phrase a request shapes what an AI returns. Prompt engineering is not a trick or a cheat code; it's interface design for natural language. Students who understand this become empowered users, not passive consumers.

2. **Connecting to a channel is publishing.** When your agent is connected to Discord or iMessage, it's no longer just a personal tool. It can receive messages from strangers. It can reply in ways you didn't anticipate. The moment of connection is a publication event, with all the responsibility that implies.

3. **APIs and protocols are how software talks.** Discord, iMessage, and every other platform expose structured ways for other programs to communicate with them. Understanding how APIs and webhooks work — even at a conceptual level — is a fundamental CS literacy skill.

### Learning Goals

By the end of Module 5, students will be able to:

- Explain at a conceptual level how large language models (LLMs) work — including training on text, tokenization, and next-token prediction
- Articulate the difference between a vague prompt and a precise one, and explain why precision matters
- Apply at least two prompt engineering techniques (role assignment, format specification, few-shot examples, chain-of-thought) deliberately and intentionally
- Describe what an API is and what a webhook is, in plain language
- Configure an OpenClaw channel plugin (Discord, iMessage, or equivalent) to connect their agent to a live channel
- Test their channel connection end-to-end: send a message on the platform, receive a response from their agent
- Discuss the academic integrity questions raised by AI as a study tool — including where the line is between assistance and substitution

### Pacing Recommendation

| Format | Duration | Sessions |
|--------|----------|---------|
| Standard (5×/week) | 3 weeks | 15 class periods |
| Sprint (compressed) | 1 week | 5–6 sessions |
| Extended (2–3×/week) | 4–5 weeks | 15+ sessions |

**Minimum viable module:** If time is extremely tight, the non-negotiables are:
- Lesson 5.1 (how LLMs work — conceptual foundation)
- Lesson 5.2 + 5.3 (prompt engineering — the core skill)
- The Channel Connection Lab (the moment the agent comes alive)
- Lesson 5.4 (AI as study partner — critical for every student's life right now)

The "Prompt Engineering Olympics" (5.3) and "When AI Gets It Wrong" (5.5) enrich but are cuttable. The Channel Connection Lab is not.

### Essential Questions

1. How is communicating with an AI different from communicating with a human — and how is it the same?
2. Why does the phrasing of a request change what an AI returns? What does that tell us about how AI language systems work?
3. What changes when your AI agent can be reached by people who didn't build it?
4. How do you use AI tools as a study partner without crossing into academic dishonesty — and who gets to define that line?

---

## 2. AI4K12 Alignment: Big Idea 4 — Natural Interaction

### The Five Big Ideas in AI (Brief Primer)

AI4K12 is the national framework for K–12 AI education. It identifies five "Big Ideas" all students should understand:

1. **Perception** — How AI senses the world (Module 2)
2. **Representation & Reasoning** — How AI structures and reasons about knowledge (Module 3)
3. **Learning** — Machine learning from data (Module 4)
4. **Natural Interaction** ← *This is Module 5*
5. **Societal Impact** — Ethics, fairness, consequences (Module 6, woven throughout)

### Big Idea 4: Natural Interaction

The AI4K12 description: *"Intelligent agents require many kinds of knowledge to interact naturally with humans."*

This Big Idea covers how AI systems understand, generate, and respond to natural language — the kind of unstructured, ambiguous, context-dependent communication humans use all the time.

Four connected concepts students should understand:

**Language is hard for computers.** Natural language is full of ambiguity, context-dependence, and implicit meaning. "Can you open the window?" isn't really a question about capability. "That's great" can mean the opposite of what it says. Getting AI to understand language has required massive amounts of data and entirely new approaches to machine learning.

**LLMs learn from text, at scale.** The language models powering modern AI assistants were trained on enormous corpora of human-generated text — books, websites, code, conversations. They learned to predict likely next words (tokens) given what came before, at massive scale, until those predictions became remarkably useful. The quality and diversity of the training corpus shapes everything the model knows and how it expresses it.

**Prompting is interaction design.** The phrasing of a request is not neutral — it shapes what the model retrieves, what persona it adopts, what format it uses, and how confident it sounds. Learning to prompt well is learning to communicate effectively with a particular kind of mind.

**Natural language interfaces have limits.** LLMs can sound authoritative while being wrong. They can be confidently biased, politely harmful, or subtly misleading. Understanding these limits is as important as understanding the capabilities.

### Specific AI4K12 Progression Points Addressed

| Grade Band | Progression Point | Where in M5 |
|------------|------------------|-------------|
| 6–8 | Students can describe how natural language processing works at a high level | Lesson 5.1 |
| 6–8 | Students understand that AI language systems predict likely responses based on training data | Lesson 5.1 |
| 6–8 | Students can describe how prompt phrasing affects AI output | Lessons 5.2, 5.3 |
| 6–8 | Students can configure an AI agent to operate in a specific communication channel | Channel Connection Lab |
| 9–10 | Students understand how APIs and protocols enable software-to-platform communication | Lesson 5.6 + Lab |

### CSTA Standards Addressed

| Standard | Description | M5 Lesson |
|----------|-------------|-----------|
| 2-AP-10 | Use flowcharts and/or pseudocode to address complex problems as algorithms | Lesson 5.1 (how LLMs process) |
| 2-CS-02 | Design projects that combine hardware and software components | Channel Connection Lab |
| 2-NI-04 | Model the role of protocols in transmitting data across networks | Lesson 5.6 |
| 2-IC-20 | Compare tradeoffs associated with computing technologies | Lesson 5.4 |
| 2-IC-21 | Discuss issues of bias and accessibility | Lesson 5.5 |
| 3A-IC-24 | Evaluate ways computing impacts personal, ethical, social, economic, and cultural practices | Lessons 5.4, 5.5 |

---

## 3. The Two-Part Nature of This Module

Module 5 has a distinctive two-part structure. It's important to understand this before planning your instruction — the two parts feel quite different in classroom energy and technical intensity.

### Part A: How LLMs Work + Prompt Engineering (Lessons 5.1–5.5)

**Duration:** ~2 weeks (Days 1–10)
**Energy:** Conceptual, hands-on, discussion-rich, often surprising

This part teaches students *how to communicate with AI well* — starting from first principles about how large language models work, and building toward systematic prompt engineering skills. It culminates in the "Prompt Engineering Olympics" (Lesson 5.3), a structured competition that surfaces real differences in prompting skill, and in Lesson 5.4's academic integrity discussion, which connects directly to students' daily lives.

**Why it comes first:** Students need to understand how LLMs work before they connect their own agents. Otherwise, the channel connection lab is just following steps. With this conceptual foundation, students understand *why* the configuration matters, *why* their system prompt shapes the agent's behavior, and *why* the agent sometimes fails.

**What makes it work:**
- Keep it interactive. The "vague vs. precise" prompt comparison activities in Lesson 5.2 produce genuinely surprising outputs that create natural discussion.
- Embrace the surprises. When a prompt produces unexpected output, don't explain it away — ask the class "why did it do that? What does that tell us about how this works?"
- Don't rush to the "right answer." The Prompt Engineering Olympics works best when students disagree about which prompt is better. That disagreement is the learning.

### Part B: Channel Connection Lab (Lesson 5.6 + Lab)

**Duration:** ~1 week (Days 11–15)
**Energy:** Technical, procedural, intensely satisfying when it works

This part connects the agent to a live platform. Students configure an OpenClaw channel plugin, obtain and manage credentials, and test the end-to-end connection. The first real reply from their connected agent is a milestone moment in the curriculum.

**Why it comes second:** The channel connection lab requires students to make decisions about their agent's behavior and communication style — decisions that require the prompt engineering skills from Part A. The system prompt they write for their connected agent is an application of everything they learned in Part A.

**What makes it work:**
- Prepare exhaustively (see Section 8). The channel connection lab has more moving parts than any other lab in the curriculum. Small setup problems at the teacher level create large delays for students.
- Pair students strategically. Some students will sail through the configuration; others will need step-by-step support. The students who finish first make the best technical support partners.
- Celebrate the first reply. The first student who gets a real reply from their connected agent — make it a moment. Ask them to read it aloud. Others will be motivated.

### The Bridge Between Parts

Between Part A and Part B, there's a natural connective thread: the system prompt. In Part A, students learned how to craft prompts that produce specific, useful, appropriate outputs. In Part B, they write a system prompt that will govern how their connected agent behaves for every message it receives. That system prompt is Part A's skills applied to Part B's challenge.

> "Everything you learned about prompting in the first two weeks comes together in one document: the system prompt you write for your connected agent. That prompt is your agent's instructions for life — at least until you change it."

---

## 4. Prerequisites & Technical Setup

### Student Prerequisites

Students should have completed:

- ✅ **Module 1** — Students have an active OpenClaw instance; understand what AI is
- ✅ **Module 2** — Students understand how AI perceives the world; familiar with the OpenClaw interface
- ✅ **Module 3** — Students have a working custom knowledge base (SKILL.md)
- ✅ **Module 4** — Students have trained a model; understand how AI learns from data

**The critical conceptual bridge from M4:** Students who understood that AI learns from patterns in training data will find the LLM section of M5 much more intuitive. The jump from "my Teachable Machine model learned from my gesture examples" to "GPT learned from billions of text examples" is a matter of scale, not kind. Revisit this bridge explicitly in Lesson 5.1.

**If some students haven't finished M4:** They can still participate in the prompt engineering portion of M5 — that requires only a working OpenClaw instance. For the channel connection lab, they will need an active agent to connect. If their M4 work is incomplete, have them use the class demo agent as their connection target.

**Minimum bar for M5 readiness:** A student who can open their OpenClaw agent, explain what a knowledge base is, and have a back-and-forth conversation with their agent is ready for M5.

### For You (The Teacher)

Before teaching M5:

- [ ] **Read this guide fully** — 45–60 min
- [ ] **Use an AI chatbot deliberately for one week.** Before teaching prompt engineering, practice prompt engineering. Use Claude, ChatGPT, or Gemini to accomplish real tasks. Notice when your first prompt fails. Rewrite it. Notice what changed. You cannot teach this skill effectively without having felt the frustration of a bad prompt and the satisfaction of a good one.
- [ ] **Set up your own Discord server** (or BlueBubbles/iMessage equivalent) for teacher testing — see Section 8 for step-by-step instructions
- [ ] **Test the full channel connection flow yourself** before students do it: create bot → get token → configure OpenClaw plugin → send message → receive reply
- [ ] **Have a conversation with your school IT department** about Discord access. Do this at least two weeks before the lab begins. See Section 8 for specific questions to ask.

**After doing the channel connection yourself, you will be able to say:**
> "I set this up myself. Here's exactly where I got confused. Here's what the error message looked like. Here's what fixed it."

That's worth more than any technical documentation.

### Technical Setup Checklist

**Decision: Discord or iMessage/BlueBubbles?**

This is the most important technical decision you make for M5. Use this guide:

| Factor | Discord | iMessage / BlueBubbles |
|--------|---------|----------------------|
| Account requirement | Free Discord account per student | Apple ID (most students already have) |
| School network | Often blocked — check early | BlueBubbles runs on a home Mac; school network usually not an issue |
| Teacher setup complexity | Moderate (bot creation, token management) | High (requires a dedicated Mac running BlueBubbles server) |
| Student experience | Familiar for many; some schools restrict it | Feels genuinely like texting their agent |
| Offline fallback | Harder | Harder |
| Best for | Schools with Discord unblocked and tech-savvy teacher | Schools with Discord blocked; teacher has a Mac available |

**If your school blocks Discord:** Use iMessage/BlueBubbles. See Section 8 for the full setup guide including the "Discord is blocked" fallback path.

**If neither Discord nor iMessage is viable:** Use the webhook/CLI fallback — students connect their agent to a simple webhook endpoint and test via curl commands from the terminal. Less visceral than a real message platform, but the technical learning is equivalent.

---

#### Discord Setup Checklist (Complete 2 Weeks Before Lab Starts)

**Teacher-level setup (do once per class, not per student):**

- [ ] Create a class Discord server (free; takes 5 minutes)
- [ ] Name it clearly: "Ms. Smith — Period 3 AI Class" — avoid personal names of students in the server name
- [ ] Create channels: `#general`, `#agent-testing`, `#agent-[name]` pattern for individual student bots
- [ ] Enable Developer Mode in Discord settings (User Settings → Advanced → Developer Mode — this lets you copy IDs)
- [ ] Create a Discord Application for the class at [discord.com/developers/applications](https://discord.com/developers/applications)
- [ ] For each student (or in batches): create a Bot user within that application; get the bot token
- [ ] **Never paste bot tokens into shared documents, public channels, or screenshots.** They are credentials.
- [ ] Distribute bot tokens to students via a secure method — school email, not Discord DM

**Student-level setup (each student, in lab class time):**

- [ ] Student opens `lab-channel-connection/` in their workspace
- [ ] Student adds their bot token to OpenClaw channel plugin configuration
- [ ] Student invites the bot to the class server using the invite URL you generate (see Section 8 for how)
- [ ] Student sends a test message and verifies their agent responds

**Network verification (do this before Day 11):**

- [ ] Confirm Discord is accessible from the student network — send the IT ticket now, not on lab day
- [ ] Test `discord.com` and `discord.gg` from a student device on the student network
- [ ] Also test the Discord API endpoint: `discord.com/api/v10` — this is what the bot uses, and it may be blocked even if the website is not
- [ ] Have the IT ticket number and a fallback plan ready

---

#### iMessage / BlueBubbles Setup Checklist

This setup requires a dedicated Mac running the BlueBubbles server software. It cannot run on Windows or Linux.

**Teacher-level setup (one-time, ideally done well before M5):**

- [ ] Identify a Mac computer that can be the BlueBubbles host — ideally on a stable network, not a laptop that moves around
- [ ] Install BlueBubbles from [bluebubbles.app](https://bluebubbles.app)
- [ ] Sign in with an Apple ID that will be the "agent" phone number/account — use a school Apple ID, not your personal one
- [ ] Configure BlueBubbles: enable the REST API, note the server URL and API key
- [ ] Configure OpenClaw's BlueBubbles channel plugin with those credentials
- [ ] Test: send an iMessage to the Apple ID from your personal phone and confirm you receive a reply through OpenClaw

**Per-student setup:**

- [ ] Each student adds the school Apple ID as a contact
- [ ] Student's agent is configured in OpenClaw to respond on that channel
- [ ] Test: student sends a message to the Apple ID, student's agent replies

**Important consideration:** With BlueBubbles, all students share the same Apple ID as the "target" of their agent. Student agents are distinguished by OpenClaw's routing logic. Make sure students understand they're all messaging the same endpoint — privacy implications exist. Consider whether students should be able to see each other's test messages.

---

#### OpenClaw Channel Plugin Configuration

Regardless of platform, the OpenClaw configuration step is the same:

1. Open OpenClaw configuration (workspace root)
2. Navigate to the channel plugin section
3. Enter the appropriate credentials (Discord token OR BlueBubbles URL + key)
4. Set the system prompt — this is the most important configuration step for students
5. Set response filtering rules (what the agent should refuse)
6. Test with a simple message

**The system prompt is curriculum.** Students should write their own system prompt based on their agent's identity (from M1) and knowledge base (from M3). A copy-pasted generic system prompt is a missed learning opportunity.

---

#### Before Each Lab Day

- [ ] Confirm platform access from student devices (test the day before, not day of)
- [ ] Have your demo agent running and connected — students need to see a working example
- [ ] Know which students have credential issues before class starts (collect troubleshooting notes from previous session)
- [ ] Print the fallback activity (see Section 10) in case the platform is inaccessible
- [ ] Have 1Password or equivalent credential manager ready — you'll be managing multiple bot tokens

---

## 5. Materials Checklist

**Print at least one week before your start date.** Items marked ★ are needed for the first lesson.

### Physical Materials

| Item | Quantity | Used In |
|------|----------|---------|
| ★ Whiteboard / display projector | 1 per room | Every lesson |
| ★ Sticky notes (3+ colors) | 1 pad each color per class | Lessons 5.1, 5.2, 5.4 |
| Index cards | 2 per student | Prompt cards, exit tickets |
| Markers | 1 set per group | Activities throughout |
| Printed "Prompt Engineering Worksheet" | 1 per student | Lessons 5.2, 5.3 |
| Printed "Channel Connection Checklist" | 1 per student | Lab days |
| Printed "System Prompt Design Sheet" | 1 per student | Day 10 (lab bridge) |
| Printed "Test Plan" worksheet | 1 per student | Lab Day 2–3 |
| Optional: timer (visible to class) | 1 per room | Prompt Engineering Olympics |

### Digital Materials (on student devices)

| Resource | Location |
|----------|----------|
| Lesson 5.1: How Chatbots Work | `lesson-5-1-how-chatbots-work/` |
| Lesson 5.2: Art of the Prompt | `lesson-5-2-art-of-the-prompt/` |
| Lesson 5.3: Prompt Engineering Olympics | `lesson-5-3-prompt-engineering-olympics/` |
| Lesson 5.4: AI as Study Partner | `lesson-5-4-ai-study-partner/` |
| Lesson 5.5: When AI Gets It Wrong | `lesson-5-5-when-ai-gets-it-wrong/` |
| Lesson 5.6: How Channels Work | `lesson-5-6-how-channels-work/` |
| Lab: Prompt Engineering | `lab-prompt-engineering/` |
| Lab: Channel Connection | `lab-channel-connection/` |
| Module assessments + rubric | `assessments/` |
| Prompt Portfolio Rubric | `assessments/prompt-portfolio-rubric.md` |

### Teacher-Only Materials

| Resource | Location / Action |
|----------|----------|
| This teacher guide | `module5/teacher-guide/teacher-guide.md` |
| Discord Developer Portal | [discord.com/developers/applications](https://discord.com/developers/applications) |
| BlueBubbles documentation | [bluebubbles.app/docs](https://bluebubbles.app/docs) |
| Credential tracking sheet (private) | Your password manager — never a shared doc |

---

## 6. Day-by-Day Pacing Guide

> **Timing:** All lessons designed for 50-minute class periods. For block scheduling (85–90 min), add depth to activities rather than rushing the timeline. For shortened periods (40–45 min), cut the warm-up or the extension.

---

### Standard Pacing — 3 Weeks (15 Days)

#### PART A: HOW LLMs WORK + PROMPT ENGINEERING (Days 1–10)

---

##### Day 1 — Lesson 5.1, Part 1: How Chatbots Actually Work

**Goal:** Build accurate mental models of LLMs — not magic, not full understanding, but honest intuition.

- **(10 min) Opening hook:** Display a response from ChatGPT/Claude to the prompt "Write me a poem about homework." Ask: "What did it *do* to produce this? Where did it come from?" Take 4–5 guesses without validating — just list them.
- **(20 min) Direct instruction:** The LLM explanation arc:
  - "It read an enormous amount of text." (What's enormous? Estimate: more words than a human could read in 10,000 lifetimes.)
  - "It learned to predict what word comes next." (Tokenization; next-token prediction — keep it intuitive)
  - "That prediction, done billions of times, produces language that *seems* meaningful." (Emergence — careful here; this is genuinely weird)
  - "It doesn't 'understand' in the human sense — it pattern-matches at extraordinary scale."
- **(10 min) Compare with M4:** "Your Teachable Machine model learned from gesture examples. GPT learned from text examples. What's similar? What's different?" — think-pair-share
- **(10 min) Exit ticket:** "In your own words, how does a language model know what word to say next?"

**Teacher checkpoint:** Collect exit tickets. The most important misconception to flag: students who think the model is "looking up" answers in a database. It's not. It's generating.

---

##### Day 2 — Lesson 5.1, Part 2: What LLMs Know (and Don't Know)

**Goal:** Understand training data, knowledge cutoffs, hallucination, and the limits of LLM knowledge.

- **(5 min) Return to exit tickets:** Share 2–3 anonymous student answers — don't correct yet, just surface the range of mental models
- **(15 min) Key concepts:**
  - Training data: what the model "read" and when. Models have a knowledge cutoff — they don't know things that happened after training.
  - Hallucination: the model generates plausible-sounding text even when it doesn't have reliable information. It can cite fake papers, invent dates, and confidently describe things that didn't happen.
  - Context window: the model only "remembers" what's in the current conversation. It has no persistent memory of you between sessions (unless given tools).
- **(15 min) "Find the Hallucination" activity:** Give pairs a set of AI-generated paragraphs with embedded errors (fabricated statistics, wrong dates, invented citations). Students identify and explain the errors.
- **(10 min) Discussion:** "How does knowing this change how you'd use AI tools? What would you always check?"
- **(5 min) Preview:** "You've seen what LLMs are. Next: how do you actually communicate with them well?"

---

##### Day 3 — Lesson 5.2, Part 1: The Art of the Prompt

**Goal:** Students experience the difference between vague and precise prompts firsthand.

- **(5 min) Warm-up:** Display two prompts side by side: "Help me study" vs. "Create a 10-question quiz on the causes of World War I, at 8th grade level, in multiple-choice format with explanations for each correct answer." Ask: "Which one would give you more useful output? Why?"
- **(20 min) Direct instruction — anatomy of a good prompt:**
  - **Role:** Who should the AI be? ("Act as a patient 8th-grade science tutor who never just gives answers but asks guiding questions instead.")
  - **Task:** What exactly do you want? (Specific, concrete, measurable.)
  - **Context:** What does the AI need to know to help you? (Subject, level, constraints, purpose.)
  - **Format:** How should the output be structured? (Bullet list, numbered steps, table, paragraph.)
  - **Constraints:** What should it NOT do? (Avoid jargon, don't exceed 100 words, don't include X.)
- **(20 min) Hands-on comparison:** Students write two versions of the same prompt — vague and precise — for the same task. Submit both to their agent. Compare outputs. Document the difference.
- **(5 min) Share-out:** 2–3 pairs share their comparison. What surprised them?

---

##### Day 4 — Lesson 5.2, Part 2: Prompt Engineering Techniques

**Goal:** Students learn and practice specific, named prompt engineering techniques.

- **(5 min) Review:** What are the five components of a good prompt? Students recall from yesterday without looking.
- **(20 min) Technique instruction (3 techniques today):**
  - **Few-shot prompting:** Give the model examples before asking your question. ("Here are two examples of what I mean by a 'gentle correction tone': [example 1] [example 2]. Now write one for...")
  - **Chain-of-thought:** Ask the model to show its work. ("Think step by step" or "Explain your reasoning before giving your final answer.")
  - **Role assignment:** Give the model a persona that shapes its expertise and tone. ("You are a friendly marine biologist who specializes in explaining complex topics to middle schoolers...")
- **(20 min) Technique practice:** Students apply each technique to a prompt of their choosing. Document the technique used and how the output changed.
- **(5 min) Exit ticket:** "Pick one technique. In one sentence, explain *why* it works — what does it do to the model's output?"

**Facilitation tip:** See Section 7 for common mistakes students make with each technique and how to redirect.

---

##### Day 5 — Lesson 5.2, Part 3: The Haiku Challenge

**Goal:** High-engagement, constrained prompt writing activity that surfaces the tradeoffs between precision and creativity.

*(See Section 7 for full haiku challenge facilitation guide.)*

- **(5 min) Setup:** "Today you have one task: get the AI to write a haiku about a specific topic — but the topic changes every round, and you have 90 seconds per round to write your prompt and submit it."
- **(35 min) Haiku Challenge:** 4–5 rounds, teacher calls topics. Students write prompts, submit, share outputs. Class votes on best haiku from each round.
- **(10 min) Debrief:** What made the best prompts work? What patterns emerged? How did the time pressure change your prompting?

**Teacher note:** The haiku format creates natural comparability — everyone's output is 5–7–5 syllables (ideally), so quality differences are immediately visible. The time pressure forces students to make rapid decisions about what's most important to specify.

---

##### Day 6 — Lesson 5.3: Prompt Engineering Olympics

**Goal:** Structured competition that surfaces real skill differences and prompts reflection on what makes prompts good.

- **(5 min) Setup and teams:** Form groups of 3. Explain the Olympics format: each team gets the same task; best output wins each round.
- **(35 min) Olympics:** 3–4 rounds with increasing difficulty. Each round has a clear evaluation criterion (most accurate, most creative, most specific audience match, etc.). Students document their prompt for each round.
- **(10 min) Awards + debrief:** Which strategies won? Which failed spectacularly? What would you do differently?

**See Section 7 for full facilitation guide including judging criteria and dispute resolution.**

---

##### Day 7 — Lesson 5.4: AI as Study Partner

**Goal:** Careful, facilitated discussion of academic integrity, AI assistance, and where the line is.

**This lesson needs the most careful preparation.** Read Section 9 before Day 7. This is not a lesson where you lecture — it's a lesson where you facilitate a genuinely difficult conversation.

- **(10 min) Opening case:** Present an anonymized scenario (student uses AI to outline an essay; is this cheating?). No answer yet — just surface the question.
- **(15 min) Spectrum activity:** Students physically place themselves on a spectrum from "clearly fine" to "clearly not okay" for a series of AI use cases. Each placement requires a reason.
- **(15 min) Discussion:** Where did people disagree? What values drive those disagreements? What does the school policy actually say vs. what does the spirit of the assignment ask for?
- **(10 min) Personal reflection:** Students write privately: "How do I currently use AI for schoolwork? Is there anything I'd want to examine?"

**See Section 9 for full facilitation guide.**

---

##### Day 8 — Lesson 5.5: When AI Gets It Wrong

**Goal:** Students document, analyze, and categorize AI failure modes firsthand.

- **(5 min) Hook:** "What's the most embarrassing thing an AI has ever said or done?" Take a few stories. Validate them as real data.
- **(20 min) Failure mode taxonomy:**
  - **Hallucination:** Confidently wrong facts
  - **Sycophancy:** Agreeing with the user even when the user is wrong
  - **Bias:** Reflecting patterns from training data that are unfair or harmful
  - **Prompt injection:** Malicious instructions hidden in content that redirect the AI's behavior
  - **Scope creep:** Doing something adjacent but not what was asked
- **(20 min) Failure hunt:** Students try to trigger each type of failure mode in their own agent. Document: what prompt triggered it? What did it output? Which category?
- **(5 min) Share-out:** Most interesting failure from each group.

---

##### Day 9 — Lesson 5.6, Part 1: How Channels Work

**Goal:** Conceptual understanding of APIs, webhooks, and how message platforms work — before students touch any credentials.

- **(10 min) Opening analogy:** "How does a package get from Amazon to your door? There's a whole system: trucks, warehouses, tracking numbers, protocols. What's the equivalent system when a message goes from your phone to an AI agent and back?"
- **(20 min) Concept instruction:**
  - **APIs:** Application Programming Interfaces — how software talks to other software. A contract: "if you send me this shape of data, I'll respond with this shape of data."
  - **Webhooks:** "Reverse APIs" — instead of your software asking the platform for updates, the platform *pushes* updates to your software when something happens.
  - **Tokens and authentication:** How a platform knows your bot is authorized to act on your behalf. Tokens are like keys — unique, secret, and replaceable if lost.
  - **Message routing:** How a platform knows which bot should respond to which message.
- **(15 min) Draw it:** Students diagram the message flow from "user sends message in Discord" to "agent processes and replies." What happens at each step?
- **(5 min) Exit ticket:** "What is a webhook, in your own words?"

---

##### Day 10 — Lesson 5.6, Part 2: System Prompt Design + Lab Preview

**Goal:** Students design the system prompt for their connected agent — the bridge between Part A and Part B.

- **(5 min) Framing:** "Everything you learned about prompts in the last two weeks leads here. Your system prompt is the one prompt that governs every conversation your agent will ever have."
- **(20 min) System prompt workshop:**
  - What is a system prompt? (Instructions given to the agent before any user message — it sets persona, rules, and context.)
  - Review your M1 identity document and M3 knowledge base — these inform your system prompt.
  - Draft a system prompt: persona, expertise, tone, what to do when asked something outside the knowledge base, what to refuse.
- **(15 min) Peer review:** Partner reads your system prompt and tries to find gaps: "What would happen if someone asked it this? And this? And this?"
- **(10 min) Lab preview:** Walk through the Channel Connection Lab structure. Answer questions. Confirm access to platform (test on a student device, not teacher device).

---

#### PART B: CHANNEL CONNECTION LAB (Days 11–15)

---

##### Day 11 — Lab Day 1: Getting Connected

**Goal:** Every student leaves class with credentials configured and a connection attempt documented.

*(See Section 8 for full teacher setup guide.)*

- **(15 min) Lab introduction + teacher demo:** Show your own connected agent. Narrate what you're doing as you send a message and receive a reply. Show what the OpenClaw configuration looks like.
- **(30 min) Students work through `lab-channel-connection/` steps 1–3:** account/invite setup, credential entry, initial connection attempt
- **(5 min) Status check:** How many students have a working connection? Note blockers for tomorrow.

**Expected blockers Day 11:** Credential errors (token copied wrong), permission issues (bot not invited to server), network blocks. Have your troubleshooting guide open. See Section 8.

---

##### Day 12 — Lab Day 2: First Message, First Reply

**Goal:** Every student sends a real message and receives a real reply from their connected agent.

- **(5 min) Review blockers from Day 11** — address the most common ones as a class
- **(40 min) Students continue `lab-channel-connection/` steps 4–6:** sending test messages, verifying replies, running through the test script
- **(5 min) Celebration moment:** Who got their first reply today? Have them share it. Make it a moment.

**If a student gets a reply and it's hilariously wrong:** Don't smooth it over. Ask "why did it say that? What does your system prompt say? What would you change?" That's the best learning in the lab.

---

##### Day 13 — Lab Day 3: Testing and Edge Cases

**Goal:** Students move beyond happy-path testing and discover how their agent behaves in unexpected situations.

- **(5 min) Frame:** "You've proved the connection works. Now I want you to try to break it."
- **(35 min) Edge case testing:** Students run through the test plan worksheet — basic Q&A, topic outside the knowledge base, ambiguous question, rude message, very long message, follow-up question, foreign language input. Document expected vs. actual behavior.
- **(10 min) Share-out:** "What was your most surprising failure? What would you fix?"

---

##### Day 14 — Lab Day 4: System Prompt Iteration + Polish

**Goal:** Students use test results to improve their system prompt.

- **(5 min) "What needs fixing?"** — students identify their top 2–3 issues from Day 13
- **(30 min) System prompt iteration:** Students revise their system prompt, redeploy, and retest. At least 3 rounds of change → test → observe.
- **(15 min) Documentation:** Students complete their test plan with final results and write their agent journal entry (which channel they connected, first real message, what they'd want their agent to never do).

---

##### Day 15 — Showcase + Module Close

**Goal:** Students demonstrate their connected agents; the module closes with forward-looking reflection.

- **(5 min) Setup + normalize demos sometimes failing** — "Live demos are unpredictable. That's real engineering."
- **(35 min) Rapid-fire showcases:** Each student/pair gets 2 minutes — "Here's my agent, here's the channel it's connected to, here's what it can do, here's one thing I still want to fix." If the connection fails during demo, student narrates what should have happened.
- **(10 min) Module close:** "Your agent now exists somewhere people actually are. That changes things. What should it and shouldn't it do? That's what Module 6 is about."

---

### Sprint Pacing — 1 Week (5–6 Days)

| Day | Focus | What to Cut |
|-----|-------|-------------|
| Day 1 | How LLMs work + prompt anatomy | Compress 5.1 and 5.2 into one session; skip Haiku Challenge |
| Day 2 | Prompt technique practice + AI as Study Partner | Skip Prompt Engineering Olympics; discuss academic integrity in 15 min |
| Day 3 | API/webhook concepts + system prompt design | Skip Lesson 5.5; give system prompt design as guided homework |
| Day 4 | Channel Connection Lab — configure + first message | Focus on getting one successful connection |
| Day 5 | Testing + showcase | Compressed test plan; 1 min per student for showcase |

**What you cannot cut in a sprint:**
- The vague vs. precise prompt comparison (the "aha" moment of Part A)
- The first real channel connection (the "aha" moment of Part B)
- The academic integrity conversation (Lesson 5.4) — even 15 minutes is better than nothing

---

### Extended Pacing — 4 Weeks (20 Days)

| Week | Focus |
|------|-------|
| Week 1 | Deep dive into LLMs: how they work, what they know, training data and bias in language |
| Week 2 | Prompt engineering mastery: all techniques, Haiku Challenge, Olympics, academic integrity, failure modes |
| Week 3 | API/webhook deep dive + system prompt design + channel connection |
| Week 4 | System prompt iteration, edge case testing, peer review of agents, showcase |

**Extensions for extra time:**
- Research project: compare system prompt behavior across two different AI models
- "Red team" your partner's agent: find ways to make it misbehave and document them
- API design exercise: if you were designing the Discord API, what would you change?
- Guest speaker: a developer who has built bots or worked with LLM APIs

---

## 7. Facilitation Tips: Prompt Engineering Lessons

> This section is your preparation for the moments that trip teachers up — common misconceptions, conversations that go sideways, and the specific dynamics of the Haiku Challenge and Prompt Engineering Olympics.

---

### Common Bad Prompts and How to Redirect

Students come to prompt engineering with habits from search engines. Search engine queries are optimized for keyword matching; LLM prompts work completely differently. These are the most common patterns and how to address them:

---

#### Type 1: The Search Query

**Example:** `world war 2 causes`
**What happens:** The model gives a decent generic summary — but not what most students actually need.
**What the student says:** "It worked fine!"
**The real problem:** Students don't know what better looks like.

**How to redirect:**
> "You got an answer. But what did you *need*? Were you writing a 5-paragraph essay? Studying for a quiz? Making a comparison chart? Show me a prompt that would be perfect for exactly what you need."

Ask them to name their actual task. Then build the prompt from there. The generic query never surfaces the specificity gap — only concrete tasks do.

---

#### Type 2: The Emotional Request

**Example:** `help me i don't understand fractions at all`
**What happens:** The model gives a sympathetic intro and then dumps a complete tutorial on fractions.
**What the student says:** "It's too much, I don't need all of this."
**The real problem:** The emotional framing swamped the specific request.

**How to redirect:**
> "What specifically about fractions is confusing? Which part — turning mixed numbers to improper fractions? Dividing fractions? Adding with different denominators? Narrow it down, then ask."

The rule of thumb: replace emotional framing with a specific diagnosis. The model cannot diagnose; students have to.

---

#### Type 3: The Mega-Prompt

**Example:** A 200-word prompt asking for 15 different things at once.
**What happens:** The model gives a 500-word response that partially addresses everything and fully addresses nothing.
**What the student says:** "It didn't do what I asked."
**The real problem:** Too many competing constraints — the model can't optimize for all of them at once.

**How to redirect:**
> "Pick the ONE thing that matters most. Write a prompt for just that. Then we'll add constraints back one at a time and see what breaks."

The lesson: specificity is not the same as length. A precise 25-word prompt usually outperforms a vague 200-word one.

---

#### Type 4: The Yes/No Test

**Example:** `Is photosynthesis important?`
**What happens:** The model says "yes" and then explains why.
**What the student says:** "I guess that's right."
**The real problem:** The question structure guarantees an unhelpful response.

**How to redirect:**
> "What did you actually want to know? Can you ask that as an open question? What specifically about photosynthesis are you trying to understand?"

Reframe as: "Explain why photosynthesis matters for..." — the open-ended frame forces more useful output.

---

#### Type 5: The Implicit Audience Problem

**Example:** `Write an explanation of DNA replication`
**What happens:** The model writes at an adult, technical level.
**What the student says:** "This is too complicated."
**The real problem:** No audience specified — the model assumed a general adult reader.

**How to redirect:**
> "Who are you writing for? A 5th grader? A high school biology student? Someone who's never heard of cells? Tell the model who the reader is."

Audience specification is one of the highest-leverage prompt improvements. Always ask: "Who is this for?"

---

### How to Push for Specificity: The Three Questions

When a student is stuck or has a vague prompt, ask these three questions in order:

1. **"What exactly do you want?"** — Force them to name the output format, the subject, the constraints. If they say "help with my essay," ask "which part of the essay? The thesis? The evidence? The transitions?"

2. **"Who is this for?"** — Audience changes everything. "Explain this to me like I'm in 8th grade" produces a completely different output than "Explain this in technical detail for a college student."

3. **"What should it NOT do?"** — Negative constraints are powerful and underused. "Don't include definitions I already know." "Don't give me the answer directly, ask me guiding questions instead." "Don't use bullet points."

These three questions will fix 90% of bad prompts.

---

### The Haiku Challenge: Full Facilitation Guide

**Why Haiku?**

The 5–7–5 structure creates natural comparability. Everyone's output is short. Quality differences are immediately visible. The strict format creates tension with natural language, which surfaces interesting failures when the model approximates rather than gets it exactly right.

**Round Structure:**

Each round has a topic (called out by the teacher) and 90 seconds for students to write and submit their prompt. After 90 seconds, everyone shares their output.

**Topic ideas (use any combination):**

- Round 1 (easy): "Write me a haiku about homework." (Students see the baseline: almost everyone's output is different despite the same topic.)
- Round 2 (constrained): "Write me a haiku about homework — but from the homework's perspective." (Forces role/perspective constraint.)
- Round 3 (audience): "Write me a haiku about homework that would make a 4-year-old laugh." (Audience constraint changes vocabulary and tone completely.)
- Round 4 (format battle): "Write me a haiku about homework that uses no words longer than 5 letters." (Students learn to stack constraints — and discover that too many constraints can make the model's output fall apart.)
- Round 5 (technique battle): "Write me a haiku about homework using a few-shot example: here's one haiku I like — [student provides example] — now write one like it." (Advanced: models a "few-shot" haiku style.)

**Judging:**

- First criterion: Is it actually 5–7–5? (Count together as a class. This is often wrong and very instructive.)
- Second criterion: Does it address the topic and constraints? (Simple show of hands — "who thinks this one met the constraint?")
- Third criterion: Which one do you like best? (Voice vote — this is aesthetic and shouldn't be over-rationalized.)

**Debrief questions:**

- "Did prompts that were longer tend to produce better haikus? Why or why not?"
- "When the model got the syllable count wrong, what do you think happened?"
- "If you had 5 more seconds, what one word would you add to your prompt?"
- "What surprised you about what made prompts work or not work?"

**What to watch for:**

- Students who copy what they see working and iterate — this is excellent metacognitive behavior
- Students who focus on being clever rather than precise — gently redirect: "clever gets worse results than clear"
- Students who think longer = better — let the outputs prove it wrong, then debrief

---

### Prompt Engineering Olympics: Full Facilitation Guide

**Structure:**

Teams of 3. 3–4 rounds. Each round: same task, different criteria for winning. Students write their prompt, submit, share output with class, class judges based on the stated criterion.

**Suggested rounds:**

| Round | Task | Judging Criterion |
|-------|------|------------------|
| 1 | Explain how vaccines work | "Most accurate — verify at least 3 claims" |
| 2 | Write a movie pitch for a film set in ancient Rome | "Most creative and unexpected" |
| 3 | Write a study guide for [current class topic] | "Would this actually help a student who missed the lesson?" |
| 4 | Write a persuasive argument for a position the team disagrees with | "Most convincing to a skeptic" |

**Judging disputes:**

When students disagree on the winner, that's the most valuable moment of the Olympics. Don't resolve it quickly. Ask: "What are you actually disagreeing about? Is it about the criterion? Or about your values?" Criteria like "most accurate" are measurable; "most creative" requires agreement on what creativity means. That conversation is the lesson.

**What to watch for:**

- Teams that iterate between rounds — they're applying learning. Praise this explicitly.
- Teams that copy each other's prompts — address by adding a "original approach required" criterion
- Teams that get genuinely unexpected outputs — slow down for these. "Why did it do that? What does that tell us?"

**Debrief questions:**

- "Which technique appeared most often in winning prompts?"
- "Were there tasks where longer prompts won? Tasks where shorter prompts won? Why?"
- "What would you do differently if you had one more minute per round?"

---

## 8. The Channel Connection Lab: Teacher Setup Guide

### Why This Lab Is Different

Every other lab in the curriculum is self-contained: a student, their device, their OpenClaw workspace. The channel connection lab introduces an external dependency: a real platform (Discord or iMessage) that has its own authentication, permissions, rate limits, and failure modes. This makes the lab harder to set up and harder to debug. It also makes the learning richer — because real engineering looks exactly like this.

**Set aside 2–3 hours for teacher setup before the lab begins.** Not because it's hard, but because credential management and platform configuration require careful attention and patience. Don't do this the night before.

---

### Discord Setup: Step-by-Step

#### Step 1: Create the Class Server

1. Open Discord and click the "+" icon in the server list.
2. Choose "Create My Own" → "For me and my friends" (you can adjust permissions later).
3. Name it something professional: "[Teacher Name] — [Course Name] — [Year]"
4. Create text channels:
   - `#general` — general class communication
   - `#agent-testing` — shared space for testing (optional; you may prefer per-student channels)
   - One channel per student named `#[first-name]-agent` (e.g., `#alex-agent`) — this gives each student their own testing space and prevents agents from responding to each other's messages

#### Step 2: Enable Developer Mode

1. In Discord: User Settings (gear icon) → Advanced → Enable Developer Mode
2. With Developer Mode on, you can right-click any server, channel, or user to copy its ID — you'll need these IDs for OpenClaw configuration

#### Step 3: Create the Discord Application and Bot

1. Go to [discord.com/developers/applications](https://discord.com/developers/applications)
2. Click "New Application" — name it after the class, not after a specific student
3. Navigate to the "Bot" section in the left sidebar
4. Click "Add Bot" → "Yes, do it!"
5. You now have a bot. Under the bot's settings:
   - Enable "Message Content Intent" — **this is required for the bot to read messages**
   - Enable "Server Members Intent" (may be needed for routing)
   - Enable "Presence Intent" (optional but harmless)
6. Click "Reset Token" to get the bot token. **Copy it immediately and store it in your password manager. You cannot see it again.**

**For classes with multiple students:** You have two options:
- **One bot for the class, routed by channel:** All students use the same bot token; OpenClaw routes to different agents based on which channel the message is in. Simpler credential management; less individual ownership.
- **One bot per student:** Each student has their own bot token and their own bot identity. More authentic; significantly more setup work for you (and more credentials to manage).

Recommendation: Start with one bot per student for classes of 20 or fewer. Use one shared bot for larger classes or time-limited setups.

#### Step 4: Generate the Bot Invite URL

1. In the Developer Portal, go to OAuth2 → URL Generator
2. Select scopes: `bot`
3. Select bot permissions: `Send Messages`, `Read Message History`, `View Channels`
4. Copy the generated URL — this is what invites the bot to your server
5. Open the URL yourself to invite the bot to your class server

#### Step 5: Distribute Credentials to Students

**What each student needs:**
- Bot token (for OpenClaw channel plugin configuration)
- Channel ID (for which channel their agent should monitor and respond to)
- Server invite link (for joining the class server with their personal Discord account)

**How to distribute securely:**
- Option A: School email — one email per student with their specific token (never put multiple students' tokens in the same email)
- Option B: Sealed envelope (old school, surprisingly effective for small classes)
- Option C: Ephemeral share tool (e.g., OneTimeSecret) — create a one-time link per student; they click it once to retrieve their token
- **Never distribute tokens in Discord DMs, Google Docs visible to multiple students, or on a projected screen.**

#### Step 6: Student Configuration in OpenClaw

Students open `lab-channel-connection/` and follow the guided steps to enter their token and channel ID into the OpenClaw channel plugin configuration. The lab instructions are step-by-step — your job is to troubleshoot, not to walk through every step yourself.

---

### iMessage / BlueBubbles Setup: Step-by-Step

#### Prerequisites

- One Mac computer that will run BlueBubbles continuously during lab days. A classroom Mac or a Mac you can leave on is ideal; a laptop that closes or sleeps will break the connection.
- A dedicated Apple ID for the class agent. Create one at [appleid.apple.com](https://appleid.apple.com) if you don't have one. Use a school email address if your school supports Apple ID creation.

#### Step 1: Install BlueBubbles

1. Download from [bluebubbles.app](https://bluebubbles.app)
2. Follow the installation guide — it includes signing into iCloud with your class Apple ID
3. Enable BlueBubbles' "REST API" in Settings → Server → Enable REST API
4. Note the server URL and API key — you'll need these for OpenClaw

#### Step 2: Test the Connection

1. Send an iMessage from your personal phone to the class Apple ID
2. Confirm it appears in BlueBubbles on the Mac
3. Configure a simple OpenClaw connection and confirm a reply is sent

#### Step 3: Student Onboarding

Students add the class Apple ID as a contact (you share this openly — it's not a secret)
Students' agents are configured in OpenClaw with their unique system prompts; OpenClaw routes replies based on who the message is from

**Privacy note:** With BlueBubbles, multiple students are messaging the same Apple ID. Consider:
- Whether students can see each other's messages (they generally should not — configure BlueBubbles access accordingly)
- Whether you want students to use real names or pseudonyms in their messages
- What happens to messages after the class ends — have a plan to delete or archive them

---

### Credential and Token Management

**The cardinal rules:**

1. **Tokens are like passwords.** They authenticate your bot to the platform. Anyone with a token can control the bot. Treat them accordingly.
2. **Never put tokens in shared documents.** Not Google Docs. Not shared notes. Not the board.
3. **Never screenshot a token.** Screenshots can be shared, uploaded to cloud services, or left in camera rolls.
4. **If a token is exposed, rotate it immediately.** In the Discord Developer Portal, click "Reset Token" to invalidate the old one and generate a new one. This is the first response to any suspected exposure.
5. **Tokens expire when you reset them.** If a student loses their token, reset it and distribute the new one securely.

**Practical classroom token management:**

- Keep your own copy of all student tokens in a password manager (e.g., 1Password) under a clearly labeled vault — "M5 Class Bot Tokens"
- Use a spreadsheet to track which student has which bot name and channel ID — but **not** the token itself in the spreadsheet
- If you use a printed credential sheet, collect them at the end of each lab day and store them securely

---

### What To Do When Discord Is Blocked by the School Network

**Diagnose before assuming:** Discord may be:
- Blocked at the website level (discord.com) — but the API may still work
- Blocked at the API level (discord.com/api) — this breaks the bot connection
- Available on some network segments but not others (student vs. teacher vs. guest network)
- Blocked via DNS filtering but accessible if DNS is changed (don't do this without IT approval)

**Ask IT these specific questions:**
1. "Is discord.com accessible from the student network?"
2. "Is discord.com/api/v10 accessible from the student network?" (Test with `curl -s https://discord.com/api/v10 | head -c 200` from a student device terminal if available)
3. "Can we get a whitelist exception for `discord.com` and `discordapp.com` during our AI class lab in [month]?" — specify the dates and the educational purpose

**Escalation path if Discord remains blocked:**

Option A — **Switch to BlueBubbles/iMessage.** This is the cleanest fallback. The learning objectives are identical; the platform is different. If you set this up as a backup ahead of time, the switch is seamless.

Option B — **Use the webhook/CLI fallback.** Students configure their agent to expose a webhook endpoint locally and test it using curl commands in the terminal. This is more technical and less visceral, but all the API/webhook concepts are present. The `lab-channel-connection/` folder includes a `webhook-fallback/` path for this scenario.

Option C — **Simulate the channel with a shared document.** Students post "messages" to a shared Google Doc and their partner "acts as" the channel, pasting student messages into the terminal to invoke the agent and pasting replies back into the doc. Very low-tech, but it demonstrates the same concepts. Use this as a last resort for up to half a class period.

**Do NOT:**
- Tell students to use personal hotspots to bypass the school network filter (network policy violation)
- Attempt to proxy through a VPN (same issue)
- Ask students to configure bots at home without supervision (credential management safety)

---

### Troubleshooting Guide: Most Common Lab Issues

| Problem | Likely Cause | Solution |
|---------|-------------|----------|
| "Bot is offline / not responding" | Bot token not entered correctly, or bot not invited to server | Check token character by character; confirm invite URL was used to add bot to server |
| "I see my message but get no reply" | OpenClaw not running, or channel ID wrong | Confirm OpenClaw agent process is running; double-check channel ID (right-click channel in Discord with Developer Mode on) |
| "Permission denied" error | Bot lacks message-sending permission in the channel | Check bot role permissions in Server Settings → Roles; ensure bot can view and send in the specific channel |
| "Rate limited" error | Too many messages sent too quickly | Wait 5–10 minutes; explain rate limiting (platforms protect themselves from bots that send thousands of messages) |
| "Unknown channel" error | Channel ID from wrong server | Confirm the channel ID matches the class server, not a personal server |
| Bot responds to everyone's messages | Channel routing not configured by student name/channel | Check OpenClaw routing configuration; ensure each student's agent monitors only their assigned channel |
| Token already in use (another session) | Student opened two OpenClaw sessions | Close all but one session; tokens can only maintain one WebSocket connection |

---

## 9. Lesson 5.4: AI as Study Partner — Academic Integrity Discussion Guide

### Why This Lesson Needs Special Preparation

Lesson 5.4 is the most personally relevant and potentially charged lesson in the module — possibly in the entire curriculum. Students are using AI tools for schoolwork right now. Some of them are doing things that would violate school policy; some are doing things that are completely legitimate; most are somewhere in a genuinely gray area. This lesson needs to:

1. Create genuine space for honest reflection without triggering defensive self-protection
2. Surface the real complexity without collapsing it into easy rules
3. Give students a framework for making their own decisions — not just telling them what's allowed
4. Not become a lecture on why AI is dangerous or a gotcha about past behavior

**This is not a lecture. It is a structured conversation.** Your job is to hold the space, surface disagreement, and resist the urge to resolve the tension prematurely.

---

### Setting the Tone

Before the lesson begins, be explicit about the discussion container:

> "I'm going to ask you to think carefully about something that's genuinely complicated — how you use AI for schoolwork. I want to be honest with you: I'm not here to catch anyone or change anyone's grade. I'm asking you to think, not to confess. Whatever you write in the reflection part today is private — I'll collect it but I won't grade it on content, only on evidence that you took it seriously. Okay?"

This matters. Without this frame, students will perform the "correct" position rather than actually thinking.

---

### The Spectrum Activity

**Setup:** Create a physical or virtual spectrum from "Clearly Fine" on one end to "Clearly Not Okay" on the other.

**Prompt students to place themselves on the spectrum for each scenario:**

| Scenario | Why It's Interesting |
|----------|---------------------|
| Using AI to check your grammar and spelling | Almost everyone says "fine" — this is the anchor |
| Using AI to get a definition of a word you don't know | Still easy — but is Google the same? |
| Asking AI to explain a concept you're confused about | Usually fine, but this is where it starts getting interesting |
| Asking AI to give you an outline for your essay | The first real divide — "structure isn't writing" vs. "your teacher wants YOUR ideas" |
| Asking AI to write a draft of your essay and then editing it heavily | Major disagreement expected — use this one |
| Copying an AI-written paragraph into your essay without changes | Most will say not okay — but explore *why* |
| Using AI to generate practice test questions and quizzing yourself | Usually fine — but schools might still have rules |
| Submitting AI-generated work for a grade as your own | Clearest case of not okay — why? |
| Using AI to translate your ideas from your first language to English | Very interesting — is this different from using a dictionary? |

**The goal is not consensus.** Where students disagree, slow down and ask: "What value are you actually defending?" Usually it's one of: fairness to other students, what the teacher is actually trying to assess, what the student will actually learn, or what the rules say. These are four different frameworks, and they can produce different answers for the same scenario.

---

### Key Questions for Discussion

**On fairness:**
> "If some students have access to AI tools and others don't, does that affect whether using them is fair? Does it matter that AI tools are free to many people but not all?"

**On learning:**
> "If you use AI to write your essay, what have you practiced? If you use AI to check your essay, what have you practiced? Are those different? Does it matter to the outcome?"

**On assessment:**
> "When a teacher assigns an essay, what are they actually trying to find out? Is there a world where AI-assisted work could still show them what they want to know?"

**On trust:**
> "If your teacher can't tell whether you used AI or not, does that change whether you should? Why?"

**On the rules:**
> "Your school has a policy about this. Have you read it? What does it actually say — versus what people assume it says? Do you think the policy is clear? Is it fair?"

---

### The "Use AI as Your Study Partner" Framing

Help students distinguish between AI as a *substitute* (does the work instead of them) and AI as a *tutor* or *thinking partner* (helps them understand and develop their own work).

Present these as two modes:

**Study partner mode (usually fine):**
- "Explain this concept to me in simpler terms"
- "Quiz me on Chapter 4"
- "What's wrong with this argument I'm making? Push back on it."
- "I wrote this paragraph — what's weak about it? Don't rewrite it."
- "What are 3 different perspectives on this issue? I'll decide which I agree with."

**Substitution mode (usually not fine, depending on assignment):**
- "Write my essay for me"
- "Give me the answer to problem 7"
- "Summarize this article so I don't have to read it and answer my comprehension questions"

The distinction isn't always clean — but helping students name the two modes gives them language for their own decision-making.

---

### Handling the Hard Situations

**"Everyone does it."**
> "That might be true. Does that make it okay? Has 'everyone does it' ever been a good argument for anything?" [Pause for responses.] "What would change if we all agreed that using AI to do your work for you is fine? What happens to what school is for?"

**"AI is just a tool, like a calculator."**
> "Interesting comparison. What do calculators do? They compute things that would take a human a long time to compute, but they don't decide *what* to compute or *why* that calculation matters. If AI wrote your essay, what did you do? What did you learn?" [Wait for responses — don't answer for them.]

**"The assignments are pointless anyway, so why does it matter?"**
> Validate the critique first: "Sometimes they are. What would make an assignment worth your genuine effort?" Then: "Even if the assignment feels pointless, is using AI to get through it building anything in you?"

**"You can't even tell, so how does it matter?"**
> "You can tell. You know what you did and didn't do. Does that matter to you? Why or why not?" This is the most honest version of the conversation — it's about values, not detection.

**A student seems to be describing past behavior that may be a policy violation:**
> Do not make it worse by treating this as a confession. The point of the lesson is reflection, not prosecution. Keep the conversation at the hypothetical level: "What would you think about that choice now?" If you have specific concerns about a specific student's past submissions, address that separately, privately, and through your school's standard academic integrity process — not in this lesson.

---

### Private Reflection Prompt

Students write privately at the end of class (not shared, not graded on content):

> "How do I currently use AI for my schoolwork? Is there anything I'd want to think more carefully about? What's one thing I'll do differently — or the same, and why?"

Collect these. Skim for students who seem genuinely troubled or who disclose something significant — follow up with those students privately. For most students, this will be a moment of honest self-inventory that they haven't had before.

---

### If Your School Has Strict AI Policies

Some schools have blanket prohibitions on AI use in schoolwork. If yours does:
- Be clear about the policy without apology: "Our school's policy says X. I want you to know what that is."
- Make space for the discussion anyway: "Even knowing the policy, the question of when AI assistance is helpful vs. harmful is worth thinking about — because you'll face this your whole life, not just in this class."
- Avoid undermining the policy even if you disagree with it. If you think the policy is too strict, that's a conversation for the faculty meeting, not the classroom.

---

## 10. Differentiation Strategies + Offline Fallbacks

### English Language Learners (ELL)

| Strategy | When | How |
|----------|------|-----|
| Visual vocabulary cards | Every lesson | Cards for: *prompt, token, API, webhook, channel, system prompt, hallucination, training data, context window* — include diagrams |
| AI as translation partner (explicitly) | Lesson 5.2 onward | ELL students often find AI translation tools genuinely useful — validate this and discuss it as an example of prompting well |
| Native language prompting | Practice activities | Allow students to write prompts in their L1 first, then translate — observe the output difference |
| Sentence frames | Discussions and exit tickets | "A good prompt includes ___." / "The AI responded this way because ___." / "I would change my prompt by ___." |
| Reduced-language interface advantage | Channel Connection Lab | The configuration UI is mostly technical and visual — often more accessible for ELL students than written assignments |
| Spoken assessment | All | Allow verbal demonstration of channel connection instead of written test plan |

**Note:** Lesson 5.4 (Academic Integrity) may surface complex feelings for students from educational systems with different norms around collaboration and AI use. Be sensitive to this without making assumptions about any individual student's background.

---

### Advanced Learners

| Extension | Activity | Challenge Level |
|-----------|----------|-----------------|
| System prompt red-teaming | After Day 10 | Write a system prompt, give it to a partner, have them try to make the agent misbehave; document results |
| API documentation reading | Day 9 extension | Read the actual Discord API documentation and identify 3 things not covered in class |
| Bot command design | Lab extension | Design and implement a custom slash command for their Discord bot |
| Multi-turn conversation analysis | Any prompt engineering lesson | Analyze how the model's responses shift across a multi-turn conversation; document patterns |
| Rate limiting investigation | Lab extension | Find the Discord rate limits; design a test to confirm them |
| Cross-model comparison | Any | Same prompt, 3 different models — how do outputs differ? What does that tell you about the models? |

**The real advanced challenge in this module is system prompt design.** A sophisticated system prompt that gracefully handles edge cases, refuses inappropriate requests, maintains consistent persona, and guides the model to be genuinely useful is a genuinely hard design problem. Push advanced students to make theirs progressively better.

---

### Students With IEPs / 504 Plans

| Accommodation Type | M5 Application |
|-------------------|----------------|
| Extended time | Prompt engineering activities can be completed with additional time; channel connection lab steps can span an additional session |
| Text-to-speech | The AI responses themselves can often be read aloud — the tool accommodates itself |
| Reduced writing requirements | Accept voice-recorded reflections for exit tickets and test plans |
| Flexible seating / quiet space | The channel connection lab has periods of intense focus; designated quiet zones help |
| Chunked instructions | Break the channel connection lab into one-step-at-a-time cards rather than the full document |
| Peer support | Pair students who need support with students who have technical confidence; establish clear "helper" roles |

---

### Offline Fallbacks

For classes with limited or no device access, or when platforms are unavailable:

| Activity | Offline Version |
|----------|----------------|
| How LLMs work (Lesson 5.1) | "Human token prediction" — students predict the next word in a sentence; compare to what others predicted; discuss how this is similar to (and different from) what LLMs do |
| Prompt engineering practice | Write prompts on index cards; teacher reads them aloud and "acts as" the AI giving a response; students identify what made each prompt better or worse |
| Haiku Challenge | Students write haikus themselves to the teacher's prompts — then compare: can you tell which was AI-generated? What does that tell you? |
| Channel connection concepts | Paper-based roleplay: "sender" writes a message on a card, passes it through a "platform" (another student) to the "agent" (another student with the system prompt), who writes a response |
| System prompt design | Students write their system prompt on paper and exchange with a partner; partner plays the agent using only the system prompt as instructions |
| Academic integrity discussion | No devices needed — the richest version of this lesson is entirely analog |

**Offline module capstone:** Students write a "Channel Design Proposal" — describe the platform they'd connect to, the system prompt they'd write, 5 test cases with expected outputs, and 2 failure modes they'd want to guard against. This demonstrates conceptual mastery without requiring a working connection.

---

## 11. Cross-Subject Connections

### ELA — Rhetoric and Audience

**The core connection:** Prompt engineering is rhetoric. Aristotle's three appeals — ethos (credibility), pathos (emotion), logos (logic) — map cleanly onto prompt engineering: role assignment (ethos), tone specification (pathos), chain-of-thought and evidence (logos). Students who understand rhetoric understand why prompts work the way they do.

**Specific connections:**

*Audience analysis:*
The most powerful prompt improvement is specifying the audience. "Explain photosynthesis to a 5-year-old" vs. "Explain photosynthesis to a biology PhD student" — the same words, the same knowledge base, completely different outputs. This is audience analysis: the same topic requires different choices of vocabulary, examples, structure, and tone depending on who's reading.

*Purpose and genre:*
"Write a persuasive essay" and "Explain objectively" are different genre expectations. The AI knows these conventions because it was trained on enormous quantities of human text in all genres. Students can explore how naming the genre changes the output — just as a human writer makes different choices for a news article vs. an op-ed vs. a lab report.

*Voice and tone:*
System prompt design is tone specification. "Respond in a warm, encouraging tone" vs. "Respond in a formal academic tone" — students are making stylistic choices that directly affect how their agent sounds. This is voice: the personality behind the words.

*Source evaluation:*
LLMs can hallucinate. Students must evaluate AI-generated content the same way they'd evaluate any other source: Who said this? What evidence supports it? Can I verify it? Does it match what I know from reliable sources? This is information literacy applied to AI output.

**Classroom tie-in:**
If students are working on persuasive writing in ELA, challenge them to write a prompt that generates a persuasive argument for a position — then identify what rhetorical moves the AI made. Can they name them? Does the argument hold up to scrutiny? What did the AI get right? What did it miss?

**Vocabulary overlap:** audience, purpose, genre, voice, tone, rhetoric, argument, evidence, source, credibility

**Standards:** CCSS.ELA-LITERACY.W.6-8.4 (produce writing appropriate to task, purpose, and audience), CCSS.ELA-LITERACY.SL.6-8.4 (present information adapted to task, purpose, and audience), CCSS.ELA-LITERACY.W.6-8.1 (write arguments with clear reasons and relevant evidence)

---

### CS — APIs, Protocols, and Network Communication

**The core connection:** The channel connection lab is applied computer networking. APIs are the syntax and semantics of software-to-software communication. Protocols define the rules both sides follow. Authentication is the mechanism by which identity is verified. These are foundational CS concepts, made concrete and motivating by the goal of connecting a real agent to a real platform.

**Specific connections:**

*Abstraction and interfaces:*
An API is an abstraction: you don't need to know how Discord works internally — you just need to know the API contract. This is the same principle as function signatures in programming: you don't need to read the function body to use the function. M5 gives students their first experience of using an abstraction they didn't build.

*Client-server architecture:*
The channel connection lab implements a client-server interaction: the student's OpenClaw agent is a client that registers with the Discord server (or BlueBubbles server) and receives events. The platform is the server. Understanding this architecture is prerequisite to understanding almost all web technology.

*Authentication and security:*
Bot tokens are bearer credentials: anyone with the token can act as the bot. This is the same model as API keys, OAuth access tokens, and session cookies. Understanding *why* tokens must be kept secret — and what happens when they're exposed — is security literacy that every technology user needs.

*Protocols and contracts:*
Discord's API has a defined message format: JSON, specific field names, required vs. optional fields. If the client sends the wrong format, the API rejects it. This is protocol: the shared agreement about data shape and meaning that makes software interoperability possible.

*Event-driven programming:*
Webhooks are event-driven: something happens (a message arrives), the platform pushes a notification, the agent reacts. This is the event-driven programming paradigm — foundational to GUIs, mobile apps, game engines, and IoT systems. Students who understand webhooks understand the core concept of event handlers.

**Classroom tie-in:**
If students are in a CS class working on functions, abstractions, or data structures, coordinate to have students examine the JSON format of a Discord message event. What fields are there? What types are they? What's required? Treating the API response as a data structure exercise makes the CS connection explicit.

**Vocabulary overlap:** API, protocol, client, server, authentication, token, endpoint, request, response, JSON, webhook, event, handler

**Standards:** CSTA 2-NI-04 (model the role of protocols in transmitting data across networks), CSTA 2-CS-02 (design projects combining hardware and software), CSTA 3A-CS-02 (evaluate tradeoffs between abstractions in computer systems)

---

### Social Studies / Civics — Platform Governance and Digital Rights

**The core connection:** Discord, iMessage, and every other platform are governed by terms of service, community guidelines, and moderation policies. When students deploy a bot, they're operating within that platform's governance structure. The rules that govern bots — and the consequences of violating them — are a microcosm of the broader questions around platform governance and digital rights.

**Specific connections:**

*Platform power:*
Discord can disable a bot — or ban a server — without appeal. Platform companies have enormous unilateral power over what can and cannot exist in their spaces. Students experience this directly when a feature they want isn't supported by the API. What does it mean that so much of our communication infrastructure is owned and governed by private companies?

*Terms of service as law:*
When a student creates a Discord bot, they agree to Discord's Terms of Service. Most students have never read a ToS document. Having students read the relevant sections of Discord's developer ToS — especially around prohibited bot behaviors — is a concrete civics exercise in reading the rules that actually govern the digital spaces they inhabit.

*Content moderation and AI:*
Discord uses AI for content moderation. Students are deploying AI onto a platform that uses AI to govern it. What happens when the governing AI and the deployed AI disagree about what's appropriate? This is a live tension in platform governance, made concrete by the students' lab experience.

**Classroom tie-in:**
Ask the social studies teacher if they're covering digital rights, platform governance, or consumer protection. Offer to have students read and summarize Discord's Bot Developer ToS as a primary source analysis exercise.

---

### Optional: Cross-Subject Unit Design

M5 has strong potential for interdisciplinary collaboration:

| Class | Contribution |
|-------|--------------|
| CS/Technology | Channel Connection Lab — APIs, authentication, event-driven architecture |
| ELA | Prompt engineering as rhetoric — audience, purpose, tone, voice |
| Social Studies | Platform governance, digital rights, ToS as primary source analysis |
| Math | Probability and next-token prediction — how does a language model "choose" the next word? |

Students produce one integrated project: a connected agent with a thoughtfully designed system prompt (ELA), properly configured and tested (CS), analyzed for what platform rules it must follow (Social Studies).

---

## 12. Common Student Questions + Teacher FAQ

### Student Questions

**"Is this basically just ChatGPT?"**
> "The AI model powering your agent is similar in kind to ChatGPT — it's a large language model trained on text. What's different is the setup around it: your SKILL.md knowledge base from M3, your trained model capability from M4, and — after this module — a direct connection to a real channel. ChatGPT is a finished product. What you're building is infrastructure."

**"Why do my prompts sometimes not work even when I follow all the rules?"**
> "Because LLMs aren't deterministic — the same prompt can produce different outputs each time. And because our 'rules' are heuristics, not laws. The model is making probabilistic guesses at every step. Sometimes those guesses surprise you. That's a feature (it's creative) and a bug (it's unpredictable). The goal is to narrow the range of surprises with better prompts."

**"What happens if someone sends my agent something inappropriate?"**
> "Great question — this is exactly what Module 6 is about. For now: your agent will respond based on its system prompt and the underlying model's safety training. Most models have baseline filtering. But that filtering isn't perfect. In M6, you'll add your own guardrails on top of that. For now, make sure your system prompt includes clear instructions about what your agent should refuse."

**"My agent replied with something completely wrong — like a made-up fact. What happened?"**
> "That's called hallucination. The model generates the most statistically likely next tokens — and sometimes those tokens form something that sounds confident but is completely false. There's no internal fact-checker. The model can't distinguish what it knows reliably from what it's guessing. This is one of the most important limitations to understand. What would you do differently to reduce the chances of this?"

**"Can people outside our class message my bot?"**
> "If your bot is in a server that others have access to — yes. If it's in a private server you control — only people you've invited. For this class, we're keeping bots in the class server, so only people in this class can message them. In M6, we'll talk about what you'd need to do before deploying an agent to a broader audience."

**"How do the big AI companies decide what the model will and won't say?"**
> "A process called RLHF — Reinforcement Learning from Human Feedback. Human reviewers rate model responses as good or bad; the model is retrained to produce responses more like the good ones. This is where a lot of the 'safety training' happens — human reviewers flag harmful outputs, and the model learns to avoid producing them. It's imperfect — hence why models can still be 'jailbroken' with clever prompts. M6 goes deeper into this."

**"Why do I need a token? Can't I just log in with a username and password?"**
> "Good instinct — but tokens are a better design for bots. A username/password is for humans interacting through a browser. A token is a machine-readable credential that grants specific permissions (in this case: read messages, send messages) without exposing your full account. If someone steals your bot token, they can control your bot — but they can't log in to your full Discord account. Credential scoping is a security best practice."

**"My bot is responding to every message in the channel, including other bots. How do I fix it?"**
> "Filtering. Your OpenClaw configuration should be checking that messages come from human users, not bots, and from the right channel. Check your channel plugin configuration — there's usually a setting to ignore bot messages. This is also a real problem in production bot development — bots replying to each other can create infinite loops."

---

### Teacher FAQ

**Q: I've never used a language model seriously. How much do I need to know before teaching this?**
A: You need to have used one seriously for at least a week — actually trying to accomplish things with it, hitting its limits, and getting frustrated. You don't need to understand the math. You need to have felt the difference between a bad prompt and a good one. That experience is more useful than any lecture notes.

**Q: Should I use the same AI model for all students, or let them use what they want?**
A: For consistency in Part A (prompt engineering), using the same model makes comparing outputs meaningful. For Part B (channel connection), the model is determined by your OpenClaw configuration. Stick with whatever your school's OpenClaw instance is configured to use — usually Claude or GPT-4.

**Q: A student is clearly using AI to complete assignments in other classes. What do I do?**
A: Separate concerns. If Lesson 5.4 surfaces specific concerns about a specific student and specific past assignments, address that through your school's standard academic integrity process — not in this lesson, and not publicly. The lesson is not a trap. Students who reflect honestly shouldn't find that honesty used against them.

**Q: The Prompt Engineering Olympics got really competitive and some students are upset about the judging. What do I do?**
A: Validate the competition instinct and reframe the point: "The goal of the Olympics was to find strategies that work, not to rank people. Which strategies appeared in the winning prompts across all rounds? Let's steal those." Shift from who won to what worked. The Olympics is a discovery mechanism, not a tournament.

**Q: How do I handle a student who "jailbreaks" the AI during a class activity?**
A: Don't shut it down punitively — use it pedagogically. "Interesting. So you found a way to get the model to bypass its safety training. What does that tell you about how those guardrails work? What would you think about a world where anyone can do that to any AI system, including the ones making medical or legal decisions?" Then redirect. This connects directly to M6.

**Q: Some students don't have Discord accounts and their parents don't want them to create one. What do I do?**
A: Have an alternative path ready. Options: (1) they work with iMessage/BlueBubbles if available; (2) they use the webhook/CLI fallback; (3) they partner with another student who does have Discord access and observe/contribute to the setup and testing process. Don't require Discord account creation if a family has objected. The technical learning is accessible through alternatives.

**Q: Should I monitor what students' agents are saying in Discord?**
A: Yes. You should be in the class server and able to read the channels where student agents are operating. Not to surveil, but to catch genuine problems (a student who has inadvertently set up an agent that provides harmful information, for example) before they become serious. Position it as quality assurance, not surveillance.

**Q: Can I skip the academic integrity discussion?**
A: We strongly encourage you not to. Your students are navigating this in real time, across every class. They deserve a structured, thoughtful space to think about it — not just a policy statement. The 50 minutes of Lesson 5.4 is an investment in students making better decisions on their own.

---

## Appendix: Quick Reference Card

*Print and keep with you during Module 5.*

**Module 5 in one sentence:** Students learn how LLMs work, practice prompt engineering as a deliberate skill, and connect their agent to a live communication channel for the first time.

**The three essential concepts:**
1. LLMs predict next tokens from training data — they generate, they don't look up
2. Precision in prompts is a skill, not a trick
3. Connecting to a channel is publishing — with all the responsibility that implies

**The arc:**
M4 (Learning) → **M5 (Communication)** → M6 (Ethics)

**The two-part structure:**
- Part A (Days 1–10): LLMs + prompt engineering — conceptual, hands-on, discussion-rich
- Part B (Days 11–15): Channel connection lab — technical, procedural, profoundly satisfying

**When a student's prompt doesn't work:**
Ask three questions: "What exactly do you want? Who is this for? What should it NOT do?"

**When Discord is blocked:**
Switch to BlueBubbles, use the webhook/CLI fallback, or run the paper simulation. Don't go around IT.

**For the academic integrity discussion:**
Don't lecture. Hold space. Let disagreement surface. Resist resolving the tension. The point is reflection, not verdict.

**When the agent says something wrong:**
"That's called hallucination. Why did it do that? What does your prompt not specify? What would you add?"

**When the first real reply arrives:**
Make it a moment. Someone should read it aloud.

**The most common teacher mistake:** Rushing the system prompt design (Day 10) to get to the lab. The system prompt is the bridge between everything students learned in Part A and everything they'll build in Part B. Give it real time.

---

*Module 5 Teacher Guide — OpenClaw Curriculum*
*For educators without a CS/AI background. The agent has a voice now. Help it use it well.*

*Part of the OpenClaw Curriculum — Module 5 of 7*
*Previous: [Module 4 Teacher Guide](../../module4/teacher-guide/teacher-guide.md) | Next: Module 6 Teacher Guide (coming soon)*
