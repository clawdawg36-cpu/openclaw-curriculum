# Lesson 1.5 — Intro to Agentic AI

**Module:** 1 — What Is AI and Why Does It Matter?
**Duration:** ~50 minutes
**Grade Level:** 6th–8th Grade
**Placement:** After Lab 1.3b (students have deployed their personal OpenClaw assistant)

---

## Learning Objectives

By the end of this lesson, students will be able to:

1. Define "AI agent" in their own words and distinguish it from a simple chatbot
2. Describe the **Perceive → Reason → Act** loop that defines agentic behavior
3. Identify at least 3 real-world examples of agentic AI systems
4. Articulate one potential benefit and one potential risk of autonomous AI agents
5. Reflect on their own deployed OpenClaw as an example of an agent

---

## Standards Alignment

| Standard | Description |
|---|---|
| CSTA K-12 CS: 2-AP-11 | Create clearly named variables and use correct data types |
| CSTA K-12 CS: 3A-AP-16 | Describe decomposition as breaking a problem into smaller tasks |
| ISTE 1.1c | Students use technology to seek feedback on their work |
| ISTE 1.7a | Students use digital tools to broaden their perspectives |
| Common Core ELA: SL.6-8.1 | Engage effectively in collaborative discussion |
| AI4K12 Big Idea 4 | AI can perceive the world using a variety of sensors |
| AI4K12 Big Idea 5 | AI interacts with the world by making decisions and taking actions |

---

## Materials

- Whiteboard or projected display
- Printed copies of `what-is-an-agent-handout.md` (1 per student)
- Printed copies of `my-agent-wishlist-activity.md` (1 per student)
- Printed copies of `exit-ticket.md` (1 per student)
- Optional: teacher laptop/screen share for live demo
- Optional: access to a video of an AI agent completing a multi-step task

---

## Lesson Sequence

---

### ⏱️ 0–5 min | Warm-Up: Tool vs. Assistant

**Goal:** Activate prior knowledge, surface intuitions about agency

**Prompt (write on board or project):**

> *"What's the difference between a hammer and a personal assistant?"*

Give students 60 seconds to discuss with a partner, then share out 2–3 responses.

**Guiding questions:**
- A hammer does one thing when you use it. Does a personal assistant wait for you to tell it every step?
- What can a personal assistant do that a hammer can't?
- What about a search engine — is that more like a tool or an assistant? What about Siri? What about your deployed OpenClaw?

**Bridge:** "Today we're going to zoom in on that question — what makes something an *agent* instead of just a tool? And we're going to discover that your OpenClaw is already a kind of agent."

---

### ⏱️ 5–15 min | Concept Intro: What Is an Agent?

**Goal:** Introduce the formal definition of an AI agent and the Perceive→Reason→Act loop

**Distribute the `what-is-an-agent-handout.md`.**

#### The Dictionary Definition vs. The AI Definition

> *In everyday language, an "agent" is someone who acts on behalf of another person — like a sports agent or a travel agent.*

> *In AI, an **agent** is a system that **perceives** its environment, **reasons** about what to do, and **acts** to accomplish a goal — often without needing a human to guide every single step.*

Write on board:

```
PERCEIVE → REASON → ACT
```

Walk through each:
- **Perceive:** The agent takes in information. Could be a message, a calendar entry, sensor data, a file, or even a screenshot.
- **Reason:** The agent thinks about what the information means and what should happen next. This is where LLMs and other AI models come in.
- **Act:** The agent does something — sends a message, runs a search, writes code, updates a database, controls a device.

#### The Agent Spectrum

Draw a spectrum on the board:

```
[Simple Chatbot] -------- [Tool-Using AI] -------- [Autonomous Agent]
```

- **Simple Chatbot:** Responds to one message at a time. You ask, it answers. Done.
- **Tool-Using AI:** Can use external tools (search the web, run code, check the weather) to help answer your question. Still mostly reactive.
- **Autonomous Agent:** Sets its own sub-goals, executes multi-step plans, can loop back and try again if something fails. Works over long periods without hand-holding.

Ask: *"Where do you think your OpenClaw sits on this spectrum?"*

---

### ⏱️ 15–25 min | Real-World Examples

**Goal:** Make agentic AI concrete and relatable

Go through each example. Encourage students to identify the **Perceive → Reason → Act** loop in each.

#### 1. Email Auto-Reply Agent
- **Perceives:** Incoming email
- **Reasons:** Is this urgent? Who sent it? What's the right response?
- **Acts:** Drafts and sends a reply, maybe also creates a calendar event

#### 2. Smart Scheduling Assistant
- **Perceives:** Your calendar, a meeting request, your preferences
- **Reasons:** When is everyone free? What's the best time?
- **Acts:** Proposes times, sends invites, reschedules if conflicts arise

#### 3. Smart Home Automation
- **Perceives:** Time of day, motion sensors, your typical patterns
- **Reasons:** Is anyone home? Should the lights adjust? Is it time to lock up?
- **Acts:** Adjusts lights, locks doors, turns off appliances

#### 4. AI Research Assistant
- **Perceives:** A research question you asked
- **Reasons:** What sources are reliable? What needs to be cross-checked?
- **Acts:** Searches the web, reads pages, summarizes findings, flags contradictions

#### 5. Coding Agent
- **Perceives:** A bug report or feature request
- **Reasons:** What code needs to change? What tests should pass?
- **Acts:** Edits files, runs tests, commits code, opens a pull request

#### 6. ClawDawg — The Kanban Worker 🐾
*This one is personal — it's a real agent your teacher works with.*

- **Perceives:** A task card on a Kanban board (title, description, steps)
- **Reasons:** What needs to be done? In what order? What tools are needed?
- **Acts:** Runs commands, creates files, sends messages, pushes to GitHub, marks the task done
- **The cool part:** No human guides it step by step. It reads the task and figures it out.

> *"This is actually how this lesson was created — a ClawDawg agent read the task card and wrote the files you're holding right now."*

---

### ⏱️ 25–35 min | Demo + Discussion

**Goal:** See an agent in action; discuss decisions and risks

#### Option A: Live Teacher Demo
Show your OpenClaw completing a multi-step task:
- Ask it to "check the weather, then add a reminder to bring an umbrella if it's going to rain tomorrow"
- Walk through what's happening at each step (perceive, reason, act)
- What decisions did it make? What could it have gotten wrong?

#### Option B: Video Demo
Show a short clip of an AI agent (GitHub Copilot Workspace, Claude completing a task, or similar). Pause at key moments.

#### Discussion Questions (5 min):
1. What decisions did the AI make that a human would normally make?
2. What information did it need that it had to find or figure out?
3. What would happen if it got one step wrong?
4. Would you trust this agent with your homework? Your email? Your bank account? Why or why not?

---

### ⏱️ 35–45 min | "What Would YOUR Agent Do?" Activity

**Goal:** Students apply concepts to their own lives and reflect on feasibility and risk

**Distribute `my-agent-wishlist-activity.md`.**

Students work individually (5–7 min) to fill in their 3 tasks, then pair-share briefly before a short class debrief.

**Debrief prompts:**
- Who wants to share their most useful task idea?
- Who thought of something that might be risky?
- What's a task you want your agent to do that might not be possible yet?

---

### ⏱️ 45–50 min | Exit Ticket + Bridge to Module 2

**Distribute `exit-ticket.md`.** Students complete individually (3 min).

#### Bridge to Module 2

> *"In Module 2, we're going to zoom in on how AI actually thinks — how language models work, how they decide what to say, and what their limits are. Understanding the 'reasoning' part of Perceive → Reason → Act is key to understanding why agents sometimes get things wrong — and how to build better ones."*

> *"And in Module 6, we'll come back to agents in a BIG way — you'll actually build your own agentic workflows. Today was the seed. Module 6 is where it grows."*

---

## Differentiation Strategies

### For Students Who Need More Support
- Pre-fill some sections of the wishlist activity with sentence starters: *"I would want my agent to… It would need to know… One thing that could go wrong is…"*
- Pair with a partner for the concept intro section
- Focus on just 2–3 of the real-world examples rather than all 6

### For Advanced Students
- Challenge: Can you design an agent loop for a task not mentioned in class? Draw it as a flowchart showing all the perceive → reason → act steps.
- Extension question: *"What's the difference between a workflow (pre-programmed steps) and a truly autonomous agent? Can you think of cases where each is better?"*
- Research prompt: Look up "AI alignment" — why is it important that agents do what we *actually* want, not just what we *say* we want?

### For ELL Students
- Provide handout with key vocabulary pre-highlighted
- Use visual analogies (the spectrum diagram)
- Allow partner work during concept intro

---

## Assessment

| Component | Weight | Notes |
|---|---|---|
| Exit ticket (3 questions) | Formative | Not graded; used to inform next lesson |
| Wishlist activity | Participation | Check for understanding of the loop |
| Class discussion | Observation | Note students who can give examples |

---

## Teacher Tips

- The "ClawDawg Kanban worker" example lands well if you briefly explain: *"This is a real AI agent that helps manage my work. It reads tasks from a board and does them — including creating this lesson."* Students find it funny and relatable.
- Don't shy away from risk/safety discussion. Students will bring up AI takeover fears — see `teacher-notes.md` for constructive framing.
- The exit ticket is a great preview of Module 2 vocabulary. Review responses before next class.

---

*Part of the openclaw-curriculum project. Last updated 2026.*
