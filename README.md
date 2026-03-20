# AI Explorers: OpenClaw/AI Curriculum for Middle School

> **🤖 Build Your AI Assistant, Piece by Piece**
>
> *Every module, you add one new superpower to your agent. By Module 7, you own something you built from scratch — and you'll demo it to the world.*

A project-based, hands-on curriculum introducing AI concepts to middle school students (grades 6–8) using OpenClaw as the primary learning environment. Students follow a single through-line arc across all 7 modules: **building a fully customized personal AI assistant from the ground up.**

---

## 🧭 The Arc: Your Agent Journey

This isn't a survey course — it's a build. Each module unlocks one new capability for your personal AI agent. By the end, you don't just *understand* AI; you *have* one — and you made it.

| Module | Capability Unlock | What You'll Do |
|--------|------------------|----------------|
| **M1** 🐣 | **Deploy your agent** — give it a name & personality | Set up OpenClaw, write your agent's identity |
| **M2** 👁️ | **Give it vision** — connect image & audio models | Plug in Hugging Face models; your agent can now see |
| **M3** 🧠 | **Give it a knowledge base** — build a custom skill | Write a skill with reasoning; your agent knows things |
| **M4** 📚 | **Give it the ability to learn** — train a model | Train a real model; integrate it into your agent |
| **M5** 🎙️ | **Give it a voice** — connect to a live channel | Wire up Discord or iMessage; your agent can talk |
| **M6** ⚖️ | **Make it ethical** — add guardrails & policies | Add bias checks and usage rules; your agent is responsible |
| **M7** 🎓 | **Capstone: AI Expo** — present your finished agent | Demo your creation to peers, teachers, and guests |

See the full [Your Agent Journey](./AGENT_JOURNEY.md) progress tracker.

---

## 🗺️ Module Overview

| Module | Title | Description | Grade Level |
|--------|-------|-------------|-------------|
| **M1** | What Is AI? | Foundations: history, vocabulary, first contact with OpenClaw; deploy and name your agent | 6–8 |
| **M2** | Give Your Agent Vision | Connect Hugging Face image/audio models; your agent can now perceive the world | 6–8 |
| **M3** | Give Your Agent a Knowledge Base | Build a custom skill with reasoning; your agent knows things you taught it | 6–8 |
| **M4** | Give Your Agent the Ability to Learn | Train a model on real data and integrate it; your agent gets smarter over time | 6–8 |
| **M5** | Give Your Agent a Voice | Connect your agent to a live channel (Discord, iMessage, etc.); it can now speak to people | 7–8 |
| **M6** | Make Your Agent Ethical | Add guardrails, bias checks, and usage policies; responsible AI by design | 7–8 |
| **M7** | Capstone — AI Expo | Present your fully built agent to an audience; celebrate what you made | 6–8 |

---

## 📁 Repo Structure

```
openclaw-curriculum/
├── README.md                ← You are here
├── AGENT_JOURNEY.md         ← Student-facing progress tracker
├── CURRICULUM_VISION.md     ← Teacher/admin 1-pager on the arc
├── module1/                 ← What Is AI? + Deploy Your Agent
│   ├── README.md
│   ├── lesson-1-1-what-is-ai/
│   ├── lesson-1-2-ai-in-your-world/
│   ├── lesson-1-3-first-contact/
│   ├── lesson-1-4-turing-test/
│   ├── lesson-1-5-intro-to-agentic-ai/
│   ├── activity-sorting-cards/
│   ├── lab-openclaw-101/
│   ├── lab-deploy-your-openclaw/
│   ├── tutorial-welcome-to-openclaw/
│   ├── tutorial-first-conversation/
│   ├── quiz-ai-or-not-ai/
│   ├── assessments/
│   ├── teacher-guide/
│   └── textbook-chapter-1/
├── module2/                 ← Give Your Agent Vision
├── module3/                 ← Give Your Agent a Knowledge Base
│   ├── README.md
│   ├── lesson-3-1-data-to-knowledge/
│   ├── lesson-3-2-decision-trees/
│   ├── lesson-3-3-pattern-recognition/
│   ├── lesson-3-4-openclaw-reasoning/
│   ├── lab-build-your-first-skill/
│   ├── activity-build-a-tree/
│   ├── activity-pattern-detective/
│   ├── activity-stump-the-ai/
│   ├── assessments/
│   └── teacher-guide/
├── module4/                 ← Give Your Agent the Ability to Learn
├── module5/                 ← Give Your Agent a Voice
├── module6/                 ← Make Your Agent Ethical
└── module7/                 ← Capstone — AI Expo
```

Each module folder contains:
- `README.md` — module overview, learning objectives, capability unlock, prerequisites
- Lesson folders (`lesson-X-Y-slug/`) — full lesson plans, slides, handouts
- Activity folders (`activity-*/`) — hands-on activities with teacher notes
- Lab folders (`lab-*/`) — guided student labs using OpenClaw
- Tutorial folders (`tutorial-*/`) — step-by-step walkthroughs
- Quiz/assessment folders — formative and summative assessments
- `teacher-guide/` — pacing guide, differentiation tips, answer keys
- `textbook-chapter-X/` — readable chapter text for students

---

## 🚀 Getting Started

### For Teachers
1. Read [`CURRICULUM_VISION.md`](./CURRICULUM_VISION.md) for the full arc rationale and pacing philosophy
2. Start with `module1/teacher-guide/README.md` for the Module 1 pacing guide
3. Each lesson folder has a `LESSON_PLAN.md` with objectives, materials, and timing
4. Labs require students to have access to OpenClaw (or the teacher's shared instance)

### For Students
1. Start at `module1/tutorial-welcome-to-openclaw/` — this is Day 1 of your agent journey
2. Follow the numbered lessons in order within each module
3. Complete labs and activities as directed by your teacher
4. Track your progress with the [Your Agent Journey](./AGENT_JOURNEY.md) tracker

---

## 🤝 Contributing

We welcome contributions from teachers, students, and AI enthusiasts!

1. **Fork** this repo
2. **Create a branch**: `git checkout -b feature/your-contribution`
3. **Make your changes** — follow the existing folder/file structure
4. **Submit a Pull Request** with a clear description of what you added or changed

### Contribution Guidelines
- Keep language accessible for grades 6–8
- Include teacher notes for every lesson
- Test all OpenClaw-based activities before submitting
- Use plain Markdown — no proprietary formats
- Images go in an `assets/` subfolder within the relevant lesson folder

---

## 📄 License

This curriculum is licensed under the **[Creative Commons Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0)](https://creativecommons.org/licenses/by-sa/4.0/)**.

You are free to:
- **Share** — copy and redistribute in any medium or format
- **Adapt** — remix, transform, and build upon the material for any purpose, even commercially

Under the following terms:
- **Attribution** — give appropriate credit and link to the license
- **ShareAlike** — distribute your contributions under the same license

---

## 📬 Contact

Built with ❤️ by the OpenClaw team. Questions? Open an issue or reach out via the OpenClaw community.

---

*AI Explorers Curriculum — empowering the next generation of AI-literate humans.*
