# Teacher PD Slides Outline
## All 4 Sessions — OpenClaw Curriculum Teacher Professional Development

> **How to use this outline:** Each slide is described with a title, content notes, and a facilitation tip. Build slides in whatever tool you prefer (Google Slides, Keynote, PowerPoint). Use the content notes to write the actual slide text; facilitation tips are for your speaker notes only.

---

## Session 1: AI Literacy for Teachers
### Experiencing the Student Journey

---

**Slide 1.01 — Title Slide**
- Title: *AI Literacy for Teachers*
- Subtitle: *Session 1: Experience the Student Journey*
- OpenClaw Curriculum logo / school logo
- Date and facilitator name

---

**Slide 1.02 — Your Word**
- Large font: *"How do you feel about AI right now?"*
- Subtitle: *One word. No wrong answers.*
- [Leave blank space visually — words get collected and added to the board, not the slide]

*Facilitation: Don't project a word cloud here — that comes at the end of Session 4. For now, write words on a physical whiteboard or sticky note wall. The before/after contrast is the point.*

---

**Slide 1.03 — What We're Doing Today**
- 4 bullet points:
  - 🚀 Deploy a live OpenClaw instance
  - 🧠 Train a Teachable Machine model
  - 🛠️ Build and deploy a simple skill
  - 🪞 Debrief: what did you experience?
- Footer: *"You're the student today."*

---

**Slide 1.04 — The 7-Module Arc**
- Visual arc (boxes connected by arrows):
  M1: Identity → M2: Vision → M3: Knowledge → M4: Learning → M5: Language → M6: Ethics → M7: Expo
- Highlight M1, M2, M3 in one color ("Today's territory")
- Others in lighter color

*Facilitation: Don't explain the whole arc. Just orient. Return to this slide at Slide 1.14.*

---

**Slide 1.05 — Activity: Deploy OpenClaw**
- Header: *Exercise 1.1 — OpenClaw Deploy*
- Instructions:
  - Open your workbook to Exercise 1.1
  - Pair up — one drives, one navigates
  - Goal: Your agent responds to a message in 20 minutes
  - Swap roles halfway through
- Timer: 20 minutes [use a visible timer on screen or phone]

---

**Slide 1.06 — What Just Happened?**
- Two questions:
  - *How many got it working on the first try?*
  - *How many needed to troubleshoot something?*
- Quote: *"That ratio is almost exactly what you'll see in your classroom."*

---

**Slide 1.07 — How AI Learns to See**
- Simple visual: image → feature extraction → classification
- 3-word captions: Input → Process → Output
- One sentence: *"Teachable Machine does all of this in your browser, trained by you."*

*Facilitation: Keep this brief — theory is minimal here. The experience is the lesson.*

---

**Slide 1.08 — Activity: Train a Model**
- Header: *Exercise 1.2 — Teachable Machine*
- Instructions:
  - Open: teachablemachine.withgoogle.com
  - Create a 3-class image classification project
  - Train, export, test
  - Try: uneven training data — what happens?
- Timer: 20 minutes

---

**Slide 1.09 — What Is a Skill?**
- Visual: SKILL.md structure (simplified — title, description, context block)
- 3 bullet points:
  - A text file your agent reads
  - Gives the agent specialized knowledge
  - Written by *you*, loaded by OpenClaw
- One sentence: *"This is Module 3. You're about to do it."*

---

**Slide 1.10 — Activity: Build Your First Skill**
- Header: *Exercise 1.3 — Your First Skill*
- Instructions:
  - Think: What topic do you teach?
  - Write 5–10 facts in SKILL.md format
  - Deploy to your agent
  - Test: Ask your agent something the skill covers
- Timer: 20 minutes
- Hint: Use the template in your workbook

---

**Slide 1.11 — Debrief Questions**
- 5 questions (display one at a time or all at once):
  1. What moment felt like a breakthrough?
  2. What moment was most frustrating?
  3. When your model classified something wrong — how did you feel?
  4. What decisions did you make when building your skill?
  5. If you were teaching yourself from an hour ago, what would you say?
- Instruction: *"3 minutes with a partner. Then we'll hear from the room."*

---

**Slide 1.12 — The Confusion IS the Lesson**
- Large font quote: *"Your students will feel exactly what you felt today."*
- Two sub-bullets:
  - The frustration of getting unstuck is the breakthrough
  - The confusion before it clicks is where learning lives
- One question: *"What does that mean for how you respond when a student is stuck?"*

---

**Slide 1.13 — The Arc — Revisited**
- Same arc as Slide 1.04
- This time: highlight today's territory AND where students go from here
- One sentence: *"You've been your own student. Now let's talk about what's next."*

---

**Slide 1.14 — What Comes in Sessions 2–4**
- Session 2: *Tools and failure modes — what breaks, and how to recover*
- Session 3: *Facilitating difficult discussions — ethics, disclosures, hard moments*
- Session 4: *Running the AI Expo — logistics, rubric, guests, incomplete agents*

---

**Slide 1.15 — Reflection Prompt**
- Workbook Exercise 1.4:
  - *"The most important thing I experienced today was..."*
  - *"The thing I'm most nervous about teaching is..."*
  - *"One thing I want to learn in the next sessions is..."*
- Timer: 3 minutes

---

---

## Session 2: Tool Training
### Setup, Failure Modes, and Recovery

---

**Slide 2.01 — Title Slide**
- Title: *Tool Training*
- Subtitle: *Session 2: Setup, Failure Modes, and Recovery*

---

**Slide 2.02 — Opener: What Broke?**
- Two-column visual: *What worked | What broke*
- Instruction: *"Each table: share one from each column"*
- Quote: *"Everything in the 'broke' column is your classroom."*

---

**Slide 2.03 — The 5 Tools**
- Icons or logos for each:
  1. OpenClaw (agent deployment)
  2. Teachable Machine (image classification)
  3. ML4Kids (multi-platform training)
  4. Hugging Face Spaces (model exploration)
  5. Day of AI (standalone lessons + fallback)
- One sentence: *"You need to know all five. You'll use all five."*

---

**Slide 2.04 — Station Rotation Instructions**
- Header: *OpenClaw Deep-Dive — 3 Stations*
- Station 1: Fresh Install Simulation (what takes students the longest?)
- Station 2: Diagnose and Fix Common Failures (failure cards on tables)
- Station 3: Network and Firewall Issues (what to test before your class starts)
- Timer: 10 minutes per station; rotate on buzzer

---

**Slide 2.05 — Common OpenClaw Failure Modes**
- Table:
  | Failure | Symptom | One-Line Fix |
  |---------|---------|-------------|
  | Wrong port | Agent won't respond | Check config.yaml port matches running server |
  | Missing API key | Error on every message | Add key to .env file, restart |
  | YAML formatting error | Skill not loaded | Check indentation — YAML requires exact spaces |
  | Agent name conflict | Unexpected behavior | Check for duplicate agent names in config |
  | Network block | ERR_CONNECTION_REFUSED | Test port access; use mobile hotspot if needed |

*Facilitation: This slide is reference, not lecture. Point to it; let them explore.*

---

**Slide 2.06 — Teachable Machine vs. ML4Kids**
- Side-by-side comparison table (from facilitator guide)
- Bottom line: *"Know both. Teach with one. Have the other as backup."*

---

**Slide 2.07 — Hugging Face + Day of AI**
- Two logos
- Hugging Face: *"Find 2 Spaces relevant to your subject"*
- Day of AI: *"Find 1 lesson plan that complements a module"*
- Timer: 10 minutes exploration, 5 minutes share-out

---

**Slide 2.08 — The Offline Truth**
- Table: Tool | Offline Fallback
  - OpenClaw → Paper simulation (SOUL.md + partner role-play)
  - Teachable Machine → Feature extraction game (printed cards)
  - ML4Kids → Data sorting by hand
  - Hugging Face → Pre-downloaded model cards
  - Day of AI → Print PDF versions in advance
- Quote: *"Every lesson has an offline path. Know it before you need it."*

---

**Slide 2.09 — Failure Mode Simulation**
- Header: *Your "Day of Doom" Scenario*
- Instructions:
  - Find your table's scenario card
  - 15 minutes: develop your response plan
  - 2 minutes: present to the group
- Five scenarios: A (OpenClaw breaks for everyone) / B (model accuracy crisis) / C (firewall) / D (student expert) / E (sensitive disclosure)

---

**Slide 2.10 — Key Failure Mode Insights**
- 3 principles:
  1. The fix is usually simpler than the panic suggests
  2. Your calm is the students' calm — show it first
  3. Scenario E is not a tech failure — it's a human moment

*Facilitation: Dwell on point 3. This bridges to Session 3.*

---

**Slide 2.11 — Your Tech Contingency Card**
- Workbook Exercise 2.4
- Prompts:
  - Tool I feel least confident with: ___
  - What I'll practice before teaching: ___
  - My IT contact at school: ___
  - Offline fallback for each module: ___
- Timer: 5 minutes

---

---

## Session 3: Facilitating Difficult Discussions

---

**Slide 3.01 — Title Slide**
- Title: *Facilitating Difficult Discussions*
- Subtitle: *Session 3: Ethics, Disclosures, and the Hard Moments*

---

**Slide 3.02 — Three Anxieties**
- Three statements (movement activity — stand near the one that resonates):
  - *"I'm most nervous about students saying something I don't know how to respond to."*
  - *"I'm most nervous about getting the content wrong."*
  - *"I'm most nervous about conversations going somewhere I can't bring back."*
- After clustering: *"This session is especially about the third one."*

---

**Slide 3.03 — Your Source Texts**
- Two boxes with document references:
  - M3 Teacher Guide, Section 9: *Ethics Discussion Facilitation*
  - M6 Teacher Guide, Sections 4, 6, 8: *Sensitivity / Facilitation / Disclosures*
- Instruction: *"Open your workbook to these excerpts. You have 15 minutes to read and annotate."*

---

**Slide 3.04 — The Core Framework**
- Header: *When a Student Discloses Something Personal*
- Five numbered steps (from M6 Section 8):
  1. Pause and acknowledge
  2. Don't make the student the lesson's example
  3. Don't analyze the disclosure
  4. Bridge carefully
  5. Protect them from the spotlight
- Footer: *"These go fast. Practice until they're automatic."*

---

**Slide 3.05 — Language That Holds the Room**
- Side-by-side:
  | Avoid | Use Instead |
  |-------|------------|
  | "The algorithm is racist" | "Produces racially disparate outcomes" |
  | "These companies are evil" | "Financial incentives overrode safety concerns" |
  | "Don't worry, it's getting better" | "Progress is real — and so is current harm" |
  | "This is just a tool" | "Tools reflect the choices of their builders" |
- Source: *M6 Teacher Guide, Section 4*

---

**Slide 3.06 — Role-Play: Ethics Discussions**
- Header: *Triad Role-Play — Facilitation Practice*
- Roles: Facilitator / Student / Observer
- Instructions:
  - Facilitator leads discussion for 5 minutes
  - Observer notes: what worked, what to try differently
  - Rotate: everyone is facilitator once
- Observer prompt: *"Did they acknowledge before redirecting? Did they keep the analysis on the system, not the person?"*

---

**Slide 3.07 — Ethics Scenario Prompts**
- [Display one scenario at a time]
- Scenario 1: *"Math can't be racist"*
- Scenario 2: *"It's not our problem"*  
- Scenario 3: *The strong emotional reaction*
- Small text: *Full scenarios on scenario cards at your table*

---

**Slide 3.08 — Role-Play: Disclosure Scenarios**
- Same triad structure
- Three scenarios:
  - The Family Connection
  - The Surveillance Context
  - The Mid-Lab Moment
- Key question after each: *"What's the difference between immediate action and warm follow-up?"*

---

**Slide 3.09 — Three Disclosure Types**
- Visual: 3 boxes
  - 🔴 Safety concern → immediate protocol; don't promise confidentiality
  - 🟡 Emotional processing → acknowledge, offer written alternative, check in after class
  - 🟢 Information-sharing → receive warmly, don't over-intervene
- Footer: *"The signal you're reading determines the response."*

---

**Slide 3.10 — The Debrief Questions**
- Which role-play was hardest? Why?
- Which facilitator move will you actually remember in the moment?
- What's the difference between *facilitating* and *managing* a difficult discussion?
- What do you do *after* a heavy class? What's your own recovery?

---

**Slide 3.11 — Your Language Toolkit**
- Workbook Exercise 3.4
- Six situations; your go-to sentence for each:
  - Student dismisses bias
  - Student has strong emotional charge
  - Student connects to personal experience
  - Student discloses something requiring follow-up
  - You don't know the answer
  - Discussion is going nowhere
- Timer: 8 minutes

---

**Slide 3.12 — Reflection Prompt**
- Workbook Exercise 3.5:
  - *"The module where I'll need these skills most..."*
  - *"The thing I'll do before I teach M6..."*
- Timer: 3 minutes / personal; not shared

---

---

## Session 4: Running the AI Expo

---

**Slide 4.01 — Title Slide**
- Title: *Running the AI Expo*
- Subtitle: *Session 4: Logistics, Assessment, Guests, and Incomplete Agents*

---

**Slide 4.02 — Visualization Opener**
- Prompt: *"Close your eyes. It's AI Expo Day. What's the best version of how it goes?"*
- Timer: 2 minutes writing, 2 minutes pair-share
- Note: *No slide content needed — this is a facilitated reflection, not a slide-driven one.*

---

**Slide 4.03 — What Makes Expos Work**
- Three pillars:
  - **Infrastructure:** Room setup, tech dry run, schedule
  - **Assessment:** Rubric calibration, guest evaluators, scoring logistics
  - **Support:** Handling incomplete agents, guest prep, teacher role on the day
- Footer: *"This session builds all three."*

---

**Slide 4.04 — Group Work: Logistics Areas**
- Header: *4 Groups — 20 Minutes Each*
- Group 1: Room Setup
- Group 2: Schedule Design
- Group 3: Assessment Logistics
- Group 4: Guest Communication
- Instructions: *See workbook for reference materials. Develop your recommendations. Present in 2 minutes.*

---

**Slide 4.05 — Expo Day Schedule Template**
- Sample 90-minute timeline:
  - 0:00–0:10 — Student setup and final tech check
  - 0:10–0:15 — Guest arrival and orientation
  - 0:15–1:05 — Open presentations (rotation format)
  - 1:05–1:20 — Structured Q&A or awards
  - 1:20–1:30 — Closing remarks and cleanup
- Footer: *"Add 10 minutes of buffer. You will need it."*

---

**Slide 4.06 — The M7 Rubric — Overview**
- Five criteria with weights:
  - Technical Completeness — 30%
  - Clarity of Explanation — 25%
  - Live Demo Execution — 20%
  - Reflection Quality — 15%
  - Q&A Responses — 10%
- Footer: *"Full rubric in your workbook and at module7/assessments/ai-expo-presentation-rubric.md"*

---

**Slide 4.07 — Rubric Calibration Exercise**
- Instructions:
  1. Watch the presentation clip
  2. Score independently — all 5 criteria
  3. Compare at your table
  4. Discuss: Where did you disagree?
- Key questions: *"What counts as a working capability? How do you distinguish a 3 from a 4 on Reflection?"*

---

**Slide 4.08 — Scoring Edge Cases**
- Three scenarios for discussion:
  - A capability is present but only works sometimes — score?
  - Student handles tech failure gracefully with screenshots — Live Demo score?
  - Strong reflection on limitations but weak live demo — overall?
- Footer: *"Write your edge-case decisions on your Scoring Notes card."*

---

**Slide 4.09 — Handling Incomplete Agents**
- Header: *This Will Happen. Here's What to Do.*
- Reference: *M7 Teacher Guide, Section 5*
- Four scenarios: Minimally Viable / Technical Failure at Demo Time / Ambitious but Broken / Quiet and Disengaged
- Key principle: *"What's the best story this student can honestly tell?"*

---

**Slide 4.10 — The Three Principles**
- Large, clear text:
  1. Scoping down is not giving up
  2. Screenshots and video fallback are legitimate
  3. "What I would build next" is an M7 deliverable
- Quote: *"Your holistic assessment of 7 modules of work carries weight. Use it."*

---

**Slide 4.11 — Guest Roles**
- Two types of guests:
  - **Evaluators** — use simplified Audience Evaluation Card; ratings inform student awards
  - **Visitors** — interact freely; don't score
- Best guest briefing question: *"Ask them to explain it to you like you've never heard of AI."*
- What to tell every guest: *"You'll be amazed at what they built."*

---

**Slide 4.12 — Mock Expo Instructions**
- Split: half students, half guests
- Students: use your agent from Session 1
- Guests: use Audience Evaluation Card
- Timer: 5 minutes per station; rotate twice
- Observer goal: *"What questions generate the best responses?"*

---

**Slide 4.13 — Teacher Role on Expo Day**
- Not: Facilitator of content
- Yes: Navigator of the space
  - Watch for fires
  - Support students who need it
  - Don't interrupt those who don't
  - Celebrate what you see
- Quote: *"Step back. Let them shine."*

---

**Slide 4.14 — Your One Word — Revisited**
- Return to the words from Slide 1.02
- New prompt: *"One word for how you feel about teaching this curriculum NOW."*
- [Physical board — add new words next to the old ones]

---

**Slide 4.15 — Closing Reflection**
- Workbook Exercise 4.5:
  - *"The part of the Expo I feel most ready for..."*
  - *"The part I still need to prepare..."*
  - *"The first thing I'll do this week..."*
- Timer: 3 minutes

---

**Slide 4.16 — You're Ready**
- Large font: *"Your students will follow your lead. Lead well."*
- Subtext: *"The teacher guides are your partner, not just documentation. Use them."*
- Resources: Cross-curriculum/teacher-pd/ folder → all PD materials
- Next step: *See pd-resource-list.md for pre-teaching preparation*

---

---

*Teacher PD Slides Outline — OpenClaw Curriculum | cross-curriculum/teacher-pd/*
