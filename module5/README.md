# Module 5: Give Your Agent a Voice — LLMs, Prompting & Live Communication

---

## 🤖 Your Agent Journey — Module 5 of 7

> **Arc:** *Build Your AI Assistant, Piece by Piece*

**This module's capability unlock: 🎙️ Communication — Connect your agent to a live channel.**

Your agent has been living in a terminal. Time to set it free. This module has two intertwined missions: first, you'll develop a real conceptual model of *how* large language models work and how to talk to them effectively through prompting — and then you'll wire your agent to a live communication channel where real people can actually reach it.

These two halves belong together. You can't write good prompts without understanding what's happening inside the model. And connecting your agent to a live channel without understanding how it generates responses would be like installing a phone before learning how to talk.

| Before M5 | After M5 |
|-----------|----------|
| Agent lives in a terminal | ✅ Agent connected to a live channel |
| Prompting feels like magic or guesswork | ✅ Prompting feels like engineering |
| No real-world audience | ✅ Agent can receive and reply to real messages |

**Previous unlock → Module 4:** Learning (trained model)
**Next unlock → Module 6:** Make your agent ethical (guardrails + policies)

See your full progress: [Your Agent Journey](../AGENT_JOURNEY.md)

---

> *"Language is the most powerful interface ever invented. LLMs are just the newest things that learned to use it."*

**Duration:** 2–3 weeks (10–15 class periods, ~50 min each)
**Grade Band:** 7–8 (primary target)
**Subject Integration:** Computer Science · ELA · Critical Thinking

---

## Essential Questions

1. **What is actually happening inside an LLM when it generates a response?** How is that different from looking something up, following rules, or "thinking"?
2. **Why does the way you phrase a prompt change the output so dramatically?** What does that tell us about how these systems work?
3. **What changes when your AI agent can communicate with people who didn't build it?** What new responsibilities does that create?
4. **How do APIs and webhooks work?** What's the contract between a platform and a bot?
5. **How do you evaluate a response from an AI?** What makes a source credible, an argument sound, or an output safe to trust?
6. **What does it mean to deploy an agent into a social context?** Who is your audience, and how should that shape your agent's behavior?

---

## Student "I Can" Statements

By the end of this module, students will be able to say:

- **I can** explain in plain language how a large language model (LLM) predicts and generates text.
- **I can** describe what a token is and why LLMs process text as tokens rather than words.
- **I can** explain the difference between a system prompt, a user message, and context window.
- **I can** write a clear, specific prompt and explain *why* each element of it matters.
- **I can** apply at least three prompt engineering techniques (role assignment, chain-of-thought, few-shot examples) and compare their results.
- **I can** explain what an API is and why platforms expose them.
- **I can** describe how a webhook works at a conceptual level.
- **I can** configure an OpenClaw channel plugin (Discord, iMessage, or webhook equivalent).
- **I can** test my agent end-to-end: send a message on the platform, receive a reply from my agent.
- **I can** identify at least three ways an AI response could be misleading, incomplete, or harmful — and explain how to catch them.
- **I can** write a simple test plan for a channel-connected agent.
- **I can** tailor an AI response for a specific audience and explain what I changed and why.

---

## Standards Alignment

### AI4K12 — Big Idea 4: Natural Interaction

> *Computers interface with humans using natural language and gestures.*

This is the primary home standard for Module 5. LLMs are the most powerful realization of Natural Interaction yet built — they respond to language, generate language, and can be customized by language (prompts). The channel connection lab adds the real-world interaction layer.

| Standard | Description | Module 5 Connection |
|----------|-------------|---------------------|
| **4-A** | Humans communicate with computers using languages | Prompting as structured language; chat interfaces |
| **4-B** | Computers can understand some natural language | LLM generation, NLP concepts; limits of understanding |
| **4-C** | Humans design language interfaces for specific contexts | Prompt engineering Olympics; persona lab |
| **4-D** | Interaction interfaces impact who can use a system | Channel accessibility; Discord vs. webhook vs. iMessage |

### CSTA K–12 CS Standards

| Code | Standard | Module 5 Connection |
|------|----------|---------------------|
| **2-AP-10** | Use flowcharts/pseudocode to address complex problems | Map the LLM inference pipeline; channel message flow diagram |
| **2-AP-13** | Decompose problems into parts | Break down prompt engineering task; channel config steps |
| **2-AP-16** | Incorporate existing code, libraries, and APIs | OpenClaw channel plugin; platform API usage |
| **2-DA-07** | Represent data using multiple encoding schemes | Tokenization activity; how text becomes numbers |
| **2-IC-20** | Describe tradeoffs of computing technologies | Discord vs. iMessage vs. webhook; capability vs. accessibility |
| **2-IC-21** | Discuss bias and accessibility in tech design | Whose voices are represented in LLM training data? |
| **2-IC-22** | Collaborate to develop broader perspectives on computational artifacts | Class prompt engineering challenge; test plan peer review |
| **3A-AP-13** | Create prototypes that use algorithms to solve problems | Extension: design a prompt-powered mini-application |
| **3A-IC-24** | Evaluate how computing impacts personal, ethical, and social practices | Deploying agent to real channel; considering real-world audience |

### ISTE Standards for Students

| Standard | Indicator | Connection |
|----------|-----------|------------|
| **1. Empowered Learner** | 1d — Understand fundamental concepts of technology operations | LLM architecture; tokenization; context windows |
| **3. Knowledge Constructor** | 3b — Evaluate accuracy, relevance, and bias of information | Fact-check-the-AI worksheet; source evaluation |
| **3. Knowledge Constructor** | 3c — Curate and credit information from digital sources | Evaluating AI outputs vs. authoritative sources |
| **4. Innovative Designer** | 4a — Apply design process to solve problems | Prompt engineering as iterative design |
| **5. Computational Thinker** | 5a — Formulate problem definitions suited for technology solutions | What problem does your prompt solve? |
| **5. Computational Thinker** | 5b — Collect data or identify relevant data sets | Collect prompt outputs; compare and analyze results |
| **6. Creative Communicator** | 6d — Publish or present content customized for intended audience | Tailor agent persona and prompts for a real channel audience |
| **7. Global Collaborator** | 7c — Contribute constructively to collaborative discussions | Prompt engineering Olympics; channel test plan peer review |

### Common Core ELA Standards

Module 5 is the module with the strongest ELA integration in the curriculum. The work of evaluating AI outputs, writing prompts for specific audiences, and arguing about what makes a source credible maps directly to core literacy standards.

| Standard | Application in Module 5 |
|----------|------------------------|
| **CCSS.ELA-LITERACY.RI.7.1** — Cite textual evidence | Fact-check-the-AI: students find primary sources to verify or refute LLM claims |
| **CCSS.ELA-LITERACY.RI.7.4** — Domain-specific vocabulary | LLM vocabulary: token, context window, temperature, hallucination, system prompt |
| **CCSS.ELA-LITERACY.RI.7.6** — Determine author's purpose/point of view | Who does an LLM "represent"? Whose perspective shapes its outputs? |
| **CCSS.ELA-LITERACY.RI.7.8** — Evaluate an argument and reasoning | When AI Gets It Wrong: evaluate AI reasoning errors and identify what failed |
| **CCSS.ELA-LITERACY.W.7.1** — Write arguments to support claims | Lab reflection: argue for or against deploying AI in a specific public channel |
| **CCSS.ELA-LITERACY.W.7.4** — Write clearly for a task, purpose, audience | Prompt engineering: rewrite a prompt for a different audience; explain your choices |
| **CCSS.ELA-LITERACY.W.7.9** — Draw evidence from informational texts | Research on AI hallucination and source reliability |
| **CCSS.ELA-LITERACY.SL.7.1** — Engage effectively in collaborative discussions | Prompt engineering Olympics; bot test plan peer review |
| **CCSS.ELA-LITERACY.SL.7.4** — Present claims and findings clearly | Channel demo: present your connected agent to the class |
| **CCSS.ELA-LITERACY.SL.7.5** — Use digital media in presentations | Live agent demo as presentation artifact |

---

## Module Structure

This module has two halves that build on each other. **Do not swap the order.** The channel connection lab is the capstone — it only makes sense after students have built real intuition for how LLMs work and how to prompt them effectively.

| # | Type | Title | Duration | Notes |
|---|---|---|---|---|
| 5.1 | Lesson | How Chatbots (Really) Work | 2 days | LLMs, tokens, prediction — the real mechanism |
| 5.2 | Lesson | The Art of the Prompt | 2 days | Prompt engineering concepts + first practice |
| 5.3 | Lab | Prompt Engineering Olympics | 1–2 days | Competitive prompting challenges |
| 5.4 | Lesson | AI Study Partner | 1 day | Using AI as a learning tool; metacognitive framing |
| 5.5 | Lesson | When AI Gets It Wrong | 1–2 days | Hallucination, bias, source evaluation |
| 5.6 | Lesson | How Channels Work | 1 day | APIs, webhooks, message routing — conceptual bridge |
| **Lab** | **Key Lab** | **Connect Your Agent to a Live Channel** | **2–3 days** | **⭐ Capstone lab — comes AFTER all LLM/prompting lessons** |
| — | Tutorial | How LLMs Work (deep dive) | Flexible | Supplemental technical tutorial |
| — | Tutorial | Credential Safety Checklist | Flexible | Required before channel lab |

> ⚠️ **Pacing note:** The channel connection lab is the capstone of this module — it comes **last**, not first. Students need the conceptual foundation from Lessons 5.1–5.5 before they wire up a live channel. Jumping straight to the channel lab without that foundation leads to agents that misbehave in ways students don't understand and can't debug.

---

## Day-by-Day Pacing Calendar

> **Standard version: 3 weeks (15 days)**
> Adjust using the flex options below for compressed or extended implementations.

### Week 1 — How LLMs Actually Work

| Day | Focus | Activity | Materials |
|-----|-------|----------|-----------|
| **Day 1** | Module Hook + LLM Intro | "Predict the next word" game — play the game humans play to guess how LLMs work; intro the token model | Slides, prediction worksheet |
| **Day 2** | Tokenization + Context | Tokenizer demo (Tiktokenizer or similar); discussion — what's in the context window? What's left out? | Tiktokenizer (browser tool), context window diagram |
| **Day 3** | Lesson 5.1 — How Chatbots Really Work | Mini-lecture: temperature, sampling, system prompts vs. user messages; architecture overview without the math | Lesson 5.1 materials, slides |
| **Day 4** | Lesson 5.2 — The Art of the Prompt | Intro to prompt engineering: role assignment, chain-of-thought, few-shot examples; students write and compare prompts | Lesson 5.2 materials, prompt worksheet |
| **Day 5** | Week 1 Check-in | Vocabulary quiz (terms 1–8); "What I Know / What I Wonder" journal entry | Vocab list, notebooks |

### Week 2 — Prompting Deep Dive + When AI Fails

| Day | Focus | Activity | Materials |
|-----|-------|----------|-----------|
| **Day 6** | Lab: Prompt Engineering Olympics | Teams compete in structured prompting challenges (summarization, persona, refusal bypass, translation); debrief what worked | Lab 5.3 materials, challenge cards |
| **Day 7** | Lab: Prompt Engineering Olympics (continued) | Finish challenges; class vote on best prompts; discuss *why* winning prompts worked | Lab 5.3 materials |
| **Day 8** | Lesson 5.4 — AI Study Partner | How to use AI as a learning tool without outsourcing your thinking; metacognitive strategies | Lesson 5.4 materials, academic integrity cards |
| **Day 9** | Lesson 5.5 — When AI Gets It Wrong | Hallucination demo; bias examples; fact-check-the-AI worksheet; source reliability discussion | Fact-check worksheet, case study cards |
| **Day 10** | Source Evaluation + Argument | Using primary sources to verify or refute AI claims; structured argument writing | Source evaluation handout, writing scaffold |

### Week 3 — Channel Connection

> ⚠️ **All channel work starts here — Week 3, after the LLM/prompting foundation is solid.**

| Day | Focus | Activity | Materials |
|-----|-------|----------|-----------|
| **Day 11** | Lesson 5.6 — How Channels Work | Conceptual intro: what is an API? What is a webhook? How does a message travel from Discord to your agent and back? | API/webhook diagram, Lesson 5.6 materials |
| **Day 12** | Channel Lab — Setup & Config | Students choose channel, complete credential safety checklist, begin config; teacher verifies credentials are secured | Channel lab guide, credential safety checklist, teacher setup guide |
| **Day 13** | Channel Lab — First Connection | Students send first test message; verify agent responds; debug connection issues | Lab guide, bot test plan worksheet |
| **Day 14** | Channel Lab — Test Plan + Edge Cases | Students run through structured test cases: Q&A, edge inputs, unexpected questions, multi-turn conversation | Bot test plan worksheet, challenge worksheets |
| **Day 15** | Demo Day + Reflection | Each student (or pair) demos their connected agent live; class observes; reflection card completed | Channel lab reflection card, assessment rubric |

---

## Materials & Technology List

### Physical Materials
- Index cards (for prompt engineering warm-ups and Olympics challenge cards)
- Printed vocabulary list (LLM terms)
- Source evaluation handout
- Academic integrity discussion cards
- Fact-check-the-AI worksheet
- Bot test plan worksheet
- Channel lab reflection card
- Credential safety checklist
- Student notebooks or journals

### Technology — LLM/Prompting (Weeks 1–2)

| Tool | Purpose | Access |
|------|---------|--------|
| **Tiktokenizer** | Visualize how text becomes tokens | [tiktokenizer.vercel.app](https://tiktokenizer.vercel.app) — free, browser-based |
| **OpenClaw Chat** | Primary prompting interface (uses student's own agent) | Student's deployed OpenClaw instance |
| **Claude.ai** or **ChatGPT** | Side-by-side prompt comparison | Free tier; accounts may need teacher setup |
| **AI4K12 Lesson Resources** | Supplemental activities | [ai4k12.org](https://ai4k12.org) |
| Laptops or tablets | 1:1 preferred throughout | — |

### Technology — Channel Connection (Week 3)

> **Choose one channel per class.** Read the requirements below carefully before Day 12.

| Channel | Requirements | Teacher Burden | Student Experience |
|---------|-------------|---------------|-------------------|
| **Webhook (Recommended fallback)** | Any HTTP endpoint; easiest to provision | Low — no platform admin needed | Less "real" but most reliable |
| **Discord Bot** | Server admin access required; bot token from Discord Developer Portal | **Medium-high** — teacher must provision server and walk through bot creation | Most familiar to students; feels most "real" |
| **iMessage (via BlueBubbles)** | BlueBubbles server running on a Mac with Messages.app signed in | **High** — requires dedicated Mac, Apple ID, server setup | Highest "wow factor" but most infrastructure |
| **Slack Bot** | Workspace admin access; Slack app creation | Medium | Good alternative to Discord if school uses Slack |

> **💡 Recommendation:** If you're running this for the first time, use **webhooks**. They work on any infrastructure, have no platform-admin dependencies, and still teach the same API/webhook concepts. Switch to Discord once you've run the module once and know the setup process.
>
> **Discord:** Requires a server where the teacher has Admin permissions. Students create bot tokens in the Discord Developer Portal — walk through this carefully; credential hygiene is a learning objective.
>
> **iMessage via BlueBubbles:** Requires a Mac running BlueBubbles server with an Apple ID signed in to Messages. If your school has a dedicated "bot Mac," this is spectacular. If not, skip it — the setup complexity isn't worth it for a single lab.

### Optional Enrichment
- Documentary clips: *Coded Bias* (AI language and bias angle)
- *You Look Like a Thing and I Love You* — Janelle Shane (fun, accessible LLM explainer)
- Guest speaker: developer who works with LLM APIs

---

## Module Arc Narrative

**Module 5** is the module where two rivers merge. One river is conceptual: how do LLMs actually work, and how do you talk to them skillfully? The other is practical: what does it take to connect your agent to the real world, and what changes when it's there?

**Phase 1 (Lessons 5.1–5.2): The Mental Model**

Students begin with a common misconception: that chatbots "know" things the way humans do, or that they're looking things up in a database. Lesson 5.1 dismantles this. We introduce the actual mechanism — next-token prediction, sampling, temperature — without burying students in math. The tokenizer activity is often a genuine "wait, what?" moment: students are surprised to learn that the model doesn't even see words, just tokens.

With the mental model in place, Lesson 5.2 becomes engineering rather than magic. When students understand that the model is predicting the most likely continuation of the context, they understand *why* being specific helps, *why* examples in the prompt improve output, and *why* a poorly worded prompt gets a confidently wrong answer. Prompt engineering stops being trial-and-error and starts being structured problem-solving.

**Phase 2 (Lab 5.3, Lessons 5.4–5.5): Skill + Critical Eye**

The Prompt Engineering Olympics turns prompting into a competitive, social activity — students see each other's work, debate what worked, and start building intuition fast. Lesson 5.4 zooms out: now that students can prompt effectively, how do they use AI tools without losing their own thinking? Academic integrity and metacognition both show up here.

Lesson 5.5 is arguably the most important lesson in the module for ELA integration. Hallucination, bias, and source reliability aren't abstract concepts — students watch an LLM confidently cite a fake paper, then learn how to fact-check it. The source evaluation skills here connect directly to CCSS ELA standards around argument and evidence.

**Phase 3 (Lesson 5.6 + Channel Lab): Going Live**

Lesson 5.6 is the conceptual bridge. Before students touch the channel configuration, they understand what an API is, what a webhook does, and how a message actually travels from a chat platform to their agent and back. Drawing this diagram on the whiteboard is worth five minutes of class time.

Then the channel lab. Students choose their channel (within teacher-provisioned options), work through credential setup, send their first message, and watch their agent reply. The test plan activity forces structured thinking: what are the expected behaviors? What edge cases might break things? What would you *not* want this agent to do?

**The through-line:** Communication is more than just sending messages. This module asks students to think carefully about *how* language works, *what* LLMs are actually doing, *why* the words you choose matter, and *who* is on the other end when your agent goes live. By the end, students have both a deeper understanding of LLM technology and a connected, live agent — and they understand why those two things belong together.

---

## Key Lab: Connect Your Agent to a Live Channel

> **This lab is the capstone of Module 5. It comes after all LLM/prompting lessons — not before.**

Students will:
1. **Review credential safety checklist** — before any account setup; tokens stay local, never shared or committed to git
2. **Choose a channel** — from teacher-provisioned options (see Materials section)
3. **Configure the OpenClaw channel plugin** — following the lab guide and teacher setup guide
4. **Send a first test message** — and verify their agent responds (hello world moment)
5. **Run through the structured test plan** — basic Q&A, edge cases, multi-turn conversation, unexpected inputs
6. **Document results** — what worked, what failed, what they'd watch for in production
7. **Complete the reflection card** — what's different about your agent now that a real audience could interact with it?

See [`lab-channel-connection/`](./lab-channel-connection/) for:
- `lab-guide.md` — full step-by-step lab instructions
- `teacher-setup-guide.md` — channel provisioning instructions for each supported platform
- `bot-test-plan-worksheet.md` — structured test case template
- `credential-safety-checklist.md` — required pre-lab security review
- `channel-lab-reflection-card.md` — post-lab reflection artifact

---

## Assessment Overview

| Assessment | Type | When | Weight |
|------------|------|------|--------|
| Vocabulary Quiz (Terms 1–8) | Formative | Day 5 | Ungraded / progress check |
| Prompt Engineering Olympics | Performance | Days 6–7 | Participation rubric |
| Fact-check-the-AI Worksheet | Formative | Day 9 | Completion grade |
| Source Evaluation Argument | Formative | Day 10 | Writing rubric |
| Channel Lab: Test Plan | Formative | Day 14 | Completion + quality check |
| Channel Lab Demo | Performance | Day 15 | Lab rubric (see `assessments/`) |
| Channel Lab Reflection Card | Summative | Day 15 | Full rubric |
| Vocabulary Post-Test (All 14 terms) | Summative | Day 15 | Quiz grade |
| Module Self-Assessment | Reflection | Day 15 | Student-facing, ungraded |

See [`assessments/`](./assessments/) for all rubrics and assessment materials.

---

## Flex Options

### ⚡ 1-Week Sprint (5 days)

Use when: sub unit, preview module, or compressed schedule.

| Day | Focus |
|-----|-------|
| Day 1 | LLM overview + tokenizer demo (Lessons 5.1 condensed) |
| Day 2 | Prompt engineering intro + 3 quick challenges (Lesson 5.2 + abbreviated Olympics) |
| Day 3 | When AI Gets It Wrong — hallucination demo + fact-check activity |
| Day 4 | How Channels Work — conceptual only; draw the message-flow diagram |
| Day 5 | Channel Lab (webhook only) — first connection + basic test; reflection card |

**Skip:** Full Prompt Engineering Olympics, AI Study Partner lesson, deep source evaluation work, iMessage/Discord (use webhook only)
**Compress:** All formative assessments become exit tickets; reflection card is the only summative artifact

---

### 📅 4-Week Extended Version (20 days)

Use when: standalone elective unit, or when students need more scaffolding.

**Add in Week 2:**
- Day 7b: Students build their own "prompt library" — a personal collection of 5–10 prompts for tasks they care about
- Day 10b: Deeper argument writing — full paragraph (claim, evidence, reasoning) on a specific AI reliability question

**Add in Week 3:**
- Day 11b: Guest speaker or video — developer who works with LLM APIs shares what production prompting looks like
- Day 12b: Students diagram the full message flow for their chosen channel before touching any configuration

**Add in Week 4 (new):**
- Day 16: Design a prompt-powered mini-application — what would you build if you had a live agent?
- Day 17: Build prototype: system prompt + channel config + one custom behavior
- Day 18: Peer test — students test each other's agents and file "bug reports"
- Day 19: Revise based on feedback; update test plan
- Day 20: Live demo gallery — each agent gets 2 minutes in front of the class

**Extended assessments:** Add a design document (prompt spec + channel rationale) as a summative artifact alongside the lab reflection.

---

## Resource Table

| Resource | Type | Purpose | URL / Location |
|----------|------|---------|----------------|
| **Tiktokenizer** | Browser tool | Visualize tokenization | [tiktokenizer.vercel.app](https://tiktokenizer.vercel.app) |
| **AI4K12 Big Idea 4 Resources** | Curriculum reference | Standards-aligned activities for Natural Interaction | [ai4k12.org](https://ai4k12.org) |
| **OpenClaw Channel Plugin Docs** | Technical docs | Channel configuration reference | [docs.openclaw.dev](https://docs.openclaw.dev) |
| **Discord Developer Portal** | Platform | Bot token creation (Discord channel only) | [discord.com/developers](https://discord.com/developers) |
| **BlueBubbles** | Platform | iMessage integration server | [bluebubbles.app](https://bluebubbles.app) |
| **Janelle Shane — AI Weirdness Blog** | Reading | Accessible, funny examples of LLM failure modes | [aiweirdness.com](https://aiweirdness.com) |
| *You Look Like a Thing and I Love You* | Book | Janelle Shane — student-friendly LLM explainer | Library / purchase |
| **Prompt Engineering Guide** | Reference | Comprehensive prompt techniques (advanced) | [promptingguide.ai](https://www.promptingguide.ai) |
| **Day of AI** | Curriculum reference | Supplemental lesson resources aligned to AI4K12 | [dayofai.org](https://dayofai.org) |
| **CCSS ELA Argument Standards** | Standards reference | W.7.1, RI.7.8 used in source evaluation lessons | [corestandards.org](https://www.corestandards.org) |
| **lab-channel-connection/** | Lab materials | Full channel connection lab | [`./lab-channel-connection/`](./lab-channel-connection/) |
| **lab-prompt-engineering/** | Lab materials | Prompt Engineering Olympics | [`./lab-prompt-engineering/`](./lab-prompt-engineering/) |
| **tutorial-how-llms-work/** | Tutorial | Deep-dive LLM explainer for students | [`./tutorial-how-llms-work/`](./tutorial-how-llms-work/) |
| **textbook-chapter-9/** | Reading | "How Language Models Work" — student textbook chapter | [`./textbook-chapter-9/`](./textbook-chapter-9/) |
| **textbook-chapter-10/** | Reading | "Talking to Your Agent" — student textbook chapter | [`./textbook-chapter-10/`](./textbook-chapter-10/) |
| **teacher-guide/** | Teacher resource | Full teacher guide for Module 5 | [`./teacher-guide/`](./teacher-guide/) |

---

## 📓 Module Close — Agent Design Journal

> **For teachers:** See [`journal-teacher-guide.md`](../journal-teacher-guide.md) for facilitation tips, formative check-in timing, and grading guidance for the Agent Design Journal.

> Complete this section at the end of Day 15 (or the final class period of Module 5).

**Open your `AGENT_JOURNEY.md` file now.** Find the **Agent Status After M5** block and fill it in:

```
🤖 [YOUR AGENT NAME]
   Personality: _______________
   Can: Have a conversation, see images, access knowledge, learn, communicate via [channel]
   Can't yet: Behave ethically by design, act fully autonomously
```

Then find the **Module Notes** table and add your M5 row:

| Module | What I built | What surprised me | What I'd change |
|--------|-------------|-------------------|-----------------|
| M5 | *(e.g., Connected my agent to Discord; wrote a 6-part system prompt)* | *(e.g., How much the wording of the system prompt changed the personality)* | *(e.g., I'd test more edge cases before going live)* |

**Journal Prompts:**

1. **What I built:** Which channel did you connect? What was the first real message your agent received?
2. **What surprised me:** What did you learn about LLMs that changed how you think about them? What was the hardest part of the channel connection?
3. **What I would change:** What would you NOT want your agent to do in this channel? What guardrails would you add before letting strangers interact with it?

> 💡 *Your agent can now communicate with the world. The next module asks: should it always? Module 6 is about guardrails, ethics, and building an agent that behaves well when you're not watching.*

---

*Module 5 of 7 — Previous: [Module 4: Give Your Agent the Ability to Learn](../module4/README.md) | Next: [Module 6: Make Your Agent Ethical](../module6/README.md)*

*Last updated: March 2026 — ClawDawg*
