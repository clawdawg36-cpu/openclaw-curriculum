# Teacher Notes — Lesson 1.5: Intro to Agentic AI

*Background reading and facilitation guidance for non-CS teachers.*

---

## Background: What Is Agentic AI?

You don't need a computer science degree to teach this lesson — but here's some context that will help you feel confident fielding questions.

### What We Mean by "Agent"

The word "agent" in AI has a specific meaning rooted in a field called **reinforcement learning** and **autonomous systems**. The basic idea: an agent is any system that takes in information from its environment, processes it, and takes actions to achieve a goal.

What's new in 2024–2026 is that large language models (LLMs) — the kind of AI that powers ChatGPT, Claude, and similar tools — have gotten good enough to be used as the "brain" of an agent. They can understand complex instructions, plan multi-step tasks, use tools (search the web, run code, send messages), and loop back to try again if something fails.

The result: AI systems that can complete real-world tasks over minutes or hours without a human guiding every step.

### The Perceive → Reason → Act Loop

This is the core mental model for the lesson. It's not unique to AI — it applies to humans and animals too:

- A dog *perceives* a squirrel, *reasons* about whether to chase it, and *acts* by running.
- A thermostat *perceives* temperature, *reasons* about whether the target temperature is met, and *acts* by turning the heat on or off.
- An AI agent *perceives* a task, *reasons* about the best approach, and *acts* by using tools to complete it.

The spectrum from chatbot to autonomous agent is really about how many steps the system handles independently before handing back to a human.

---

## Three Accessible Sources for Teachers

### 1. "What Are AI Agents?" — IBM Think Blog
A plain-language explainer from IBM. Covers the definition, types of agents (reactive, deliberative, learning), and real-world applications without requiring any technical background. Great for your own pre-reading before class.
- Search: *"IBM What are AI agents Think blog"*
- URL: https://www.ibm.com/think/topics/ai-agents

### 2. "AI Agents: A Primer" — MIT Technology Review (various issues)
MIT Technology Review regularly covers agentic AI in accessible language. Search for their coverage of "AI agents" or "autonomous AI." Articles like *"The AI agents are coming"* (2024) give good context on where the technology is headed and what the real concerns are.
- Search: *"MIT Technology Review AI agents primer"*
- URL: https://www.technologyreview.com (search "AI agents")

### 3. AI4K12 Initiative — Big Idea 5: "AI can act"
The AI4K12 initiative (a national effort to bring AI literacy to K-12 education) has excellent grade-appropriate frameworks. Their "Big Idea 5" covers how AI systems take actions in the world. Their teacher resources include explainer videos, discussion guides, and activity ideas.
- URL: https://ai4k12.org/resources/
- Look for: Big Idea 5 materials, grades 6–8

---

## Handling "Will AI Take Over?" Anxieties

Students *will* bring up AI takeover fears. This is developmentally appropriate — they've grown up with Terminator, HAL 9000, and news headlines about AI risk. Here's how to handle it constructively:

### What NOT to Do
- Don't dismiss concerns with "that's just science fiction." Some experts take these risks seriously, and students are perceptive.
- Don't amplify fears into a doom spiral. The goal is critical thinking, not anxiety.
- Don't pretend all AI experts agree — they don't, and that's worth acknowledging.

### A Constructive Framing

> *"You're asking a really serious question that a lot of smart people are working on. The good news is: right now, AI agents can only do what they're told to do, with the tools they're given. They don't have their own goals or desires. But some researchers do worry about what happens as they get more capable — which is why there are entire teams of people working on 'AI safety' right now."*

Key points to normalize:
1. **Humans are still in the loop.** Right now, most agents can be stopped, modified, or corrected by humans. The question is how to keep it that way as they get more powerful.
2. **This is a design challenge, not a fate.** The choices engineers and policymakers make now will determine how autonomous AI becomes. Students can be part of that conversation.
3. **Uncertainty is okay.** It's genuinely unclear how capable AI will become, and when. Being uncertain isn't weakness — it's honesty.

### A Useful Analogy
> *"A car can cause a lot of harm if it's driven recklessly or without safety features. But we didn't respond to that by banning cars — we built seatbelts, traffic laws, and driver's licenses. AI safety is trying to do the same thing for AI."*

---

## Preview: Module 6 Connection

Lesson 1.5 is a **seed**. In Module 6, students will go much deeper:

- They'll build their own agentic workflows using OpenClaw
- They'll explore how to give agents clear, safe instructions
- They'll experiment with what happens when agents have bugs or ambiguous goals
- They'll discuss AI safety and the ethics of autonomous systems

When wrapping up this lesson, you can say:
> *"Everything we talked about today is the foundation for Module 6, where you'll actually build agents of your own. By then, you'll have a much better understanding of how language models work (Module 2), how AI makes decisions (Module 3), and what can go wrong (Module 4 and 5). Think of today as planting the seed."*

---

## Connection to Lab 1.3b

Students deployed their personal OpenClaw in Lab 1.3b. This lesson should feel like a revelation: *"Wait — the thing I deployed is an agent?"*

The ClawDawg Kanban worker example is especially powerful here because it's concrete, relatable, and true:
- ClawDawg is a real AI agent used in this curriculum's development
- It reads task cards, executes multi-step plans, creates files, commits code, and sends messages
- It uses the same underlying technology as the students' deployed OpenClaw
- This lesson was literally created by a ClawDawg agent completing a task card

If students ask "can MY OpenClaw do what ClawDawg does?" — the honest answer is: mostly, yes. With the right instructions and tools configured, their OpenClaw can autonomously complete multi-step tasks. Module 6 is where they'll unlock that.

---

## FAQ

**"Is this the same as ChatGPT?"**
ChatGPT is a chatbot — it's mostly reactive (you ask, it answers). When OpenAI adds "tools" like web search or code execution, it moves toward being an agent. A fully agentic system like ClawDawg can work for long periods without prompting.

**"Can agents learn on their own?"**
Today's agents don't typically learn in the way humans do. They use a frozen model and follow instructions. Some research systems can update their own instructions or learn from feedback, but that's cutting-edge and not how most agents you'd encounter work.

**"Are there rules about AI agents?"**
This is evolving rapidly. The EU AI Act (2024) and various US executive orders address some aspects of autonomous AI, but regulation is still catching up to the technology. A great discussion topic!

---

*openclaw-curriculum | Module 1, Lesson 1.5 | Teacher Notes*
