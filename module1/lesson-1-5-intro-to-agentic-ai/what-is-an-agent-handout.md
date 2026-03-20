# What Is an AI Agent?
### Student Reference Card — Lesson 1.5

---

## 1. Definition

> **An AI agent is a system that perceives its environment, reasons about what to do, and takes action — often without needing a human to guide every single step.**

In everyday life, an *agent* is someone who acts on your behalf — like a travel agent who books your flights, or a sports agent who handles a player's contracts. An **AI agent** does the same thing: it works *for you*, figuring out what needs to happen and making it happen.

The key word is **autonomously** — an agent can do more than answer a single question. It can complete a whole task, step by step, using tools, making decisions, and adjusting if something goes wrong.

---

## 2. The 3 Properties of an Agent

Every AI agent has these three core properties:

### 👁️ PERCEIVE
*Take in information from the world.*

The agent reads messages, checks files, searches the web, looks at your calendar, or senses its environment. It collects the input it needs to understand what's going on.

> **Example:** An email agent reads your inbox and notices a message asking to schedule a meeting.

---

### 🧠 REASON
*Think about what to do.*

The agent uses what it perceived to figure out the right next step. This is where AI language models (like the one inside your OpenClaw) do their work — understanding context, making decisions, planning ahead.

> **Example:** The email agent figures out when you're free, who needs to attend, and what time zone everyone is in.

---

### ⚡ ACT
*Do something in the world.*

The agent takes a real action — sends a message, runs a search, updates a file, writes code, turns on a light, or marks a task complete.

> **Example:** The email agent sends out calendar invites to all attendees.

---

### The Loop

These three steps happen over and over:

```
PERCEIVE → REASON → ACT → PERCEIVE → REASON → ACT → ...
```

An agent keeps looping until the task is done — or until it decides it needs help from a human.

---

## 3. The Agent Spectrum

Not all AI is equally autonomous. Think of a spectrum:

```
[ILLUSTRATION: spectrum from simple chatbot → tool-using AI → autonomous agent]

Simple Chatbot          Tool-Using AI          Autonomous Agent
      |                       |                        |
Answers one            Can search the web,      Sets its own sub-goals,
question at a          run code, or check        works over long periods,
time. Waits for        the weather to help       loops back and retries,
your next message.     answer your question.     acts without hand-holding.
```

Most AI assistants today live somewhere in the middle — they can use some tools, but still need you to guide the big decisions.

---

## 4. Six Real-World Examples

| Agent | What It Does |
|---|---|
| **Email Auto-Reply** | Reads incoming emails, decides how to respond, sends replies automatically |
| **Smart Scheduling** | Checks everyone's calendars, finds the best meeting time, sends invites |
| **Smart Home** | Watches sensors (motion, time, weather), adjusts lights/temperature/locks |
| **Research Assistant** | Gets a question, searches multiple sources, summarizes findings |
| **Coding Agent** | Gets a bug report, finds the problem in code, writes a fix, runs tests |
| **ClawDawg Kanban Worker** | Reads a task card, plans the steps, creates files, sends messages, pushes code — all by itself 🐾 |

---

## 5. What Makes YOUR OpenClaw an Agent?

Your deployed OpenClaw isn't just a chatbot — it can:

- 🔍 **Perceive** your messages, files, calendar, and connected services
- 🧠 **Reason** using a powerful language model to decide what to do
- ⚡ **Act** by sending messages, running commands, creating files, browsing the web, and more

When you ask OpenClaw to *"check if it's raining tomorrow and remind me to bring an umbrella if so"*, it doesn't just answer — it **takes action in the world on your behalf**. That's what makes it an agent.

---

## 6. Key Vocabulary

| Term | Definition |
|---|---|
| **Agent** | An AI system that perceives, reasons, and acts to accomplish a goal |
| **Autonomous** | Able to operate independently, without a human guiding every step |
| **Tool-use** | The ability of an AI to use external tools (search, code execution, APIs) to get things done |
| **Workflow** | A sequence of steps that an agent follows to complete a task |
| **Task** | A specific goal or job given to an agent to complete |
| **Loop** | The repeating cycle of Perceive → Reason → Act that agents follow |

---

*openclaw-curriculum | Module 1, Lesson 1.5*
