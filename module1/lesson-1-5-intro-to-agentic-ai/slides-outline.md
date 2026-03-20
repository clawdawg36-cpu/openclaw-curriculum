# Slides Outline — Lesson 1.5: Intro to Agentic AI

**Format:** Markdown-based slide-by-slide outline  
**Total Slides:** ~17  
**Presenter Notes** are included in *italics* under each slide.

---

## Slide 1 — Title Slide

**Title:** Intro to Agentic AI  
**Subtitle:** Module 1, Lesson 1.5 | OpenClaw Curriculum  
**Visual:** A simple loop diagram: Perceive → Reason → Act → (back to Perceive), with a small robot icon at the center  
**No text body**

*Presenter: "Everything you've learned this module — what AI is, where it lives, what it can and can't do — has been leading here. Today we meet a new kind of AI: one that doesn't just answer questions. It acts."*

---

## Slide 2 — Warm-Up: What Could Your Agent Do?

**Heading:** If Your AI Assistant Could Do Anything…

**Body:**
- You've been talking *to* an AI
- What if it could *act* for you?
- Write down 3 things you'd want your personal AI assistant to do — without you asking each time
- Think big. Nothing is too wild.

**Visual:** Thought bubble with "My agent could…" prompt

*Presenter: Give 2 minutes of quiet writing, then pair-share. Chart a few responses. You'll return to these at the end of class when students build their Agent Wishlist. This warm-up surfaces values and priorities that shape the debrief.*

---

## Slide 3 — Big Question

**Heading:** The Big Question

**Body (large text, centered):**
> "What's the difference between an AI that *answers* and an AI that *acts*?"

**Visual:** Two contrasting visuals — a search bar on one side, a robot completing a task on the other

*Presenter: "Chatting with ChatGPT or OpenClaw is one kind of AI interaction. But some AI systems don't just talk — they plan, decide, and take action in the world. That's what we're exploring today."*

---

## Slide 4 — What Is a Chatbot?

**Heading:** Chatbots: Question → Answer

**Body:**
- A **chatbot** responds to one input at a time
- You ask: "What's the capital of France?" → It answers: "Paris"
- You ask: "Write me a poem about the ocean" → It writes the poem
- Each interaction is independent
- The chatbot waits for you — it doesn't do anything on its own

**Visual:** Single Q&A diagram — input arrow → AI → output arrow

*Presenter: "You've been using this kind of AI since Lesson 1.3. It's incredibly useful. But it's reactive — it waits for you to drive. An agent is different."*

---

## Slide 5 — What Is an AI Agent?

**Heading:** AI Agents: Perceive → Reason → Act

**Body:**
> An **AI agent** is a system that perceives its environment, reasons about what to do, and takes actions to achieve a goal — often with minimal human input at each step.

- Agents have **goals**, not just prompts
- Agents can **use tools**: search the web, send emails, run code, check calendars
- Agents can take **multiple steps** to complete a task
- Agents can **operate over time** — not just in a single exchange

**Visual:** Three-part loop diagram: Perceive (inputs) → Reason (planning) → Act (tools + outputs)

*Presenter: "This is the key shift. A chatbot is reactive — it responds to you. An agent is proactive — it pursues a goal. The same underlying AI model can power both."*

---

## Slide 6 — The Perceive → Reason → Act Loop

**Heading:** How Agents Work: The Loop

**Body:**
| Step | What Happens | Example |
|------|-------------|---------|
| **Perceive** | Agent receives input from the environment | Reads your email inbox |
| **Reason** | Agent thinks: what's going on? what should I do? | "There's a meeting request — should I accept?" |
| **Act** | Agent takes action using available tools | Adds it to your calendar, sends a reply |
| *(Loop)* | New state → perceive again | Sees calendar is now full, declines next request |

**Visual:** Annotated loop diagram with the three steps and arrows

*Presenter: "Notice the loop. After the agent acts, it perceives again. That's what makes an agent 'agentic' — it keeps going until the goal is complete, not just until it produces one output."*

---

## Slide 7 — Chatbot vs. Agent: Side by Side

**Heading:** Chatbot vs. Agent

**Body:**

| | Chatbot | Agent |
|---|---------|-------|
| **Goal** | Answer this question | Complete this task |
| **Time horizon** | Single exchange | Multi-step, over time |
| **Tools** | Just language | Search, email, code, APIs |
| **Initiative** | Reactive — waits for you | Proactive — pursues goal |
| **Example** | "Write a birthday message" | "Remember my friend's birthday, write a message, and send it" |

**Visual:** Comparison table (styled cleanly)

*Presenter: "Same AI underneath — different design around it. The agent has been given tools, a goal, and permission to keep going. That's the difference."*

---

## Slide 8 — Real-World Agentic AI Examples

**Heading:** Agents Already in the Wild

**Body:**
- **GitHub Copilot Workspace:** Writes, tests, and submits code based on a task description
- **OpenClaw (with skills):** Checks email, sets reminders, sends messages, controls smart home
- **Devin (Cognition):** An AI software engineer that plans, codes, debugs, and deploys autonomously
- **AutoGPT / LangGraph:** Research agents that search the web, synthesize findings, and write reports
- **AI travel agents:** Plan a trip, book flights, reserve hotels — start to finish

**Visual:** 5 icons representing each example

*Presenter: "These aren't demos — they're real, deployed systems. Some are open-source tools you could use. The capabilities are changing fast. In Module 6, you'll build your own agentic workflow."*

---

## Slide 9 — ClawDawg: A Real Agent You Know

**Heading:** Meet ClawDawg

**Body:**
- ClawDawg is the AI agent that helped build this curriculum
- It's an instance of OpenClaw with skills, memory, and autonomy
- It pulls tasks from a Kanban board, writes files, commits to GitHub, and marks tasks done
- It wrote several of the files in this very lesson's folder
- It runs on a loop: Perceive (task list) → Reason (what to build) → Act (write + commit)

**Visual:** Screenshot of a ClawDawg commit in GitHub, or a Kanban board with tasks

*Presenter: "I want you to sit with that for a second. An AI agent created some of what you're learning today. That's not science fiction — that's today. What does that feel like?" Pause for reactions. This moment often lands hard.*

---

## Slide 10 — The Agent Spectrum

**Heading:** Not All Agents Are the Same

**Body:**
- Agents exist on a spectrum of **autonomy**:
  - **Low:** AI suggests → human approves each step
  - **Medium:** AI acts on routine tasks → alerts human for unusual ones
  - **High:** AI acts fully autonomously → human reviews outcomes later
- More autonomy = more efficiency + more risk

**Visual:** Dial/spectrum from "Human in the loop" to "Fully autonomous"

*Presenter: "Where on this spectrum should your agent sit? That's a design decision — and an ethical one. We'll explore it in depth in Module 6. For today, just notice that autonomy isn't binary."*

---

## Slide 11 — Benefits of Agentic AI

**Heading:** Why This Matters: What Agents Can Do For You

**Body:**
- Handle repetitive tasks without constant supervision
- Work 24/7 across many tasks simultaneously
- Integrate tools you'd struggle to combine manually
- Act faster than any human could on routine decisions
- Free up human attention for creative and high-stakes work

**Visual:** Clock + gear + lightning bolt icons

*Presenter: "The promise of agentic AI is leverage — one person directing an AI agent can accomplish what used to require a team. That's exciting. It also raises real questions about work, access, and accountability."*

---

## Slide 12 — Risks of Agentic AI

**Heading:** Why This Also Needs Care

**Body:**
- **Mistakes compound:** If the agent acts on bad reasoning, it might send 50 wrong emails before anyone notices
- **Hard to audit:** Multi-step autonomous decisions are harder to explain than single outputs
- **Security:** An agent with access to your email, calendar, and accounts is a high-value target
- **Scope creep:** Agents that can do "anything" might do things you didn't intend
- **Accountability gap:** If an AI agent harms someone — who's responsible?

**Visual:** Warning icons for each risk

*Presenter: "This is why the autonomy spectrum matters. More autonomy = more power = more responsibility. In Module 6 we'll build guardrails. For now: any time you hear 'agentic AI,' think: what does it have access to, and who's watching?"*

---

## Slide 13 — Your OpenClaw as an Agent

**Heading:** Your OpenClaw Is Already an Agent

**Body:**
- When you deployed OpenClaw in Lab 1.3, you created an agent
- Right now it's mostly conversational — a chatbot mode
- But the platform supports skills: tools that let it act
- As you go through this curriculum, you'll give your agent more capabilities:
  - Module 2: Perception (it can see and hear)
  - Module 3: Knowledge (custom domain skills)
  - Module 4: Learning (real ML models)
  - Module 6: Guardrails and governance

**Visual:** Module roadmap with capability unlocks labeled

*Presenter: "Every module you complete adds something your agent can do. By Module 6 you'll have a working agent you built from scratch. That's the arc."*

---

## Slide 14 — Activity: My Agent Wishlist

**Heading:** What Should YOUR Agent Do?

**Body:**
- Turn to your wishlist activity sheet
- Describe **3 tasks** you'd want your agent to handle:
  - What is the task?
  - What would it need to perceive?
  - What would it need to reason about?
  - What actions would it take?
- For each task: What's the benefit? What's the risk?

**Visual:** Wishlist worksheet mockup

*Presenter: Give 7–8 minutes for this activity. Walk the room. The best answers will be specific: not "manage my schedule" but "automatically decline meeting invites when I have more than 3 meetings already that day." Specificity reveals the complexity of the design problem.*

---

## Slide 15 — Big Ideas 4 & 5 Connection

**Heading:** AI4K12: Big Ideas 4 & 5

**Body:**
**Big Idea 4 — Natural Interaction:**
> AI perceives the world through sensors and data — agents start with perception before they can reason or act.

**Big Idea 5 — Societal Impact:**
> Agentic AI amplifies both the benefits and risks of AI — understanding it is essential to using it wisely.

**Visual:** AI4K12 pentagon with Big Ideas 4 and 5 highlighted

*Presenter: "These two ideas connect at the agent level. Agents perceive (Big Idea 4) and then act in the world (Big Idea 5). The impact is bigger — and so is the responsibility."*

---

## Slide 16 — Module 1 Wrap-Up & Bridge to Module 2

**Heading:** Module 1 Complete — What You Now Know

**Body:**
- ✅ AI defined: toolbox for making computers seem intelligent
- ✅ AI history: Turing to ChatGPT — 75 years of acceleration
- ✅ AI everywhere: recommendation, automation, surveillance
- ✅ AI firsthand: chatted with OpenClaw, tested its limits
- ✅ AI limits: hallucination, knowledge cutoff, consciousness debate
- ✅ Agentic AI: Perceive → Reason → Act → and the stakes that come with it

**Bridge:**
> "Now that you know agents can reason, let's zoom in on what that 'reasoning' actually looks like. In Module 2, we'll open up the language model — the brain inside your agent — and understand how it works."

**Visual:** Module roadmap with Module 1 complete, Module 2 highlighted

*Presenter: "You've got the foundation. Module 2 goes deeper — into how language models actually work, how they process your words, and why they sometimes go off the rails. See you there."*

---

## Slide 17 — Exit Ticket

**Heading:** Before You Go…

**Body (reflection prompt):**
> Answer in 3–5 sentences:
> 1. **Define** "AI agent" in your own words. How is it different from a chatbot?
> 2. Describe the **Perceive → Reason → Act** loop using a real-world example (not from the slides).
> 3. Name one **benefit** and one **risk** of an AI agent that acts autonomously. How would you decide where to set the autonomy dial?

**Visual:** Pencil/journal icon

*Presenter: "5 minutes. Question 2 is the hardest — it requires you to invent your own example. That's the point. If you can explain the loop in your own terms, you actually understand it."*

---

*End of slide deck — Lesson 1.5*  
*End of Module 1 — Welcome to the AI Builders' journey.*
