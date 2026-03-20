# Teacher Professional Development Program
## Facilitator Guide — All 4 Sessions
### OpenClaw Curriculum: AI Education for Middle & High School

**Total Duration:** 8 hours (4 × 2-hour sessions)  
**Audience:** Teachers preparing to facilitate the OpenClaw 7-module AI curriculum  
**Facilitator:** Curriculum lead, instructional coach, or experienced OpenClaw teacher  
**Format:** Workshop-style; experiential learning throughout  

---

> **Philosophy:** The best way to prepare teachers to facilitate student learning is to have them *experience* what students experience — confusion, breakthrough moments, and all. These sessions are not lectures about teaching AI. They are structured experiences that put teachers in the student seat first, then zoom out to facilitation strategy.

---

## Before You Begin

### Facilitator Prerequisites

You should have:
- Completed all 7 modules as a student (or equivalent self-directed experience)
- Run a live OpenClaw instance with at least one skill deployed
- Trained a Teachable Machine model personally
- Read all 7 teacher guides in full

### Room Setup

- **Round tables or clusters** (4–6 per table) — collaborative throughout
- **Projector + screen** for slides (see `pd-slides-outline.md`)
- **Reliable Wi-Fi** — all hands-on activities require internet
- **Power strips at every table** — laptops needed throughout
- **Whiteboard or large sticky paper** per table
- **Printed workbooks** (see `pd-participant-workbook.md`) — one per teacher
- **Name tents** if participants don't know each other

### Materials Checklist

- [ ] Printed participant workbooks (one per participant)
- [ ] Printed resource lists (one per participant, or shared link)
- [ ] Printed FAQ handouts
- [ ] Sticky notes (3 colors, 10+ per participant)
- [ ] Markers (one per table)
- [ ] Index cards
- [ ] Tech failure cards (laminated, one per table) — see Session 2
- [ ] Role-play scenario cards — see Session 3
- [ ] M7 rubric copies — see Session 4

### Tech Setup (Test the Night Before)

- [ ] OpenClaw gateway running on demo machine
- [ ] Backup: shared demo agent URL for participants without local install
- [ ] Teachable Machine accessible: `teachablemachine.withgoogle.com`
- [ ] ML4Kids accessible: `machinelearningforkids.co.uk`
- [ ] Hugging Face Spaces accessible: `huggingface.co/spaces`
- [ ] Day of AI site accessible: `dayofai.org`

---

## Session 1: AI Literacy for Teachers — Experience the Student Journey

**Time:** 2 hours  
**Goal:** Teachers understand AI concepts firsthand by *doing* what their students will do — not by reading about it.  
**Core experience:** Deploy OpenClaw → Train a Teachable Machine model → Build a simple skill

---

### Session 1 Overview

| Time | Activity | Format |
|------|----------|--------|
| 0:00–0:10 | Welcome, introductions, session arc overview | Full group |
| 0:10–0:30 | OpenClaw deploy experience | Hands-on pairs |
| 0:30–0:55 | Teachable Machine model training | Hands-on individual |
| 0:55–1:15 | Build a simple skill (guided) | Hands-on individual |
| 1:15–1:40 | Debrief: the student experience | Full group discussion |
| 1:40–1:55 | Connecting experience to curriculum arc | Full group |
| 1:55–2:00 | Reflection and workbook | Individual |

---

### 0:00–0:10 — Welcome and Framing

**Facilitator script:**

> "Welcome to the OpenClaw Teacher PD. Over the next two days, we're going to do something a little unusual: before we talk about how to teach this curriculum, you're going to *be* students in it. We'll work our way through the exact experiences your students will have — the confusing parts, the breakthrough parts, and yes, the 'why isn't this working' parts.
>
> We're starting today with a question: **What does it actually feel like to build something with AI for the first time?** Not just read about it — but actually deploy a thing, train a thing, and ship a thing.
>
> By the end of this session, you'll have a live AI agent running and a custom skill installed. Let's go."

**Ask participants to introduce themselves:** Name, school, subject, and "one word for how you feel about AI right now." Write the words on the board. Return to them at the end of Session 1.

---

### 0:10–0:30 — OpenClaw Deploy Experience

**What participants do:**
- Pair up at tables
- Follow the deploy guide in their workbook (see `pd-participant-workbook.md`, Exercise 1.1)
- One person drives, one navigates; swap halfway

**What you watch for:**
- Pairs who sail through → assign them as table helpers for Session 2
- Pairs who get stuck → note the specific sticking point; this becomes Session 2 content
- Common sticking points: port configuration, API key entry, agent name setup

**Facilitation notes:**
- Resist the urge to solve everything immediately — the frustration of getting unstuck is the lesson
- After 15 minutes: "Anyone still not seeing their agent respond? Let's look at the most common issue together."
- End at 20 minutes regardless of completion status — have backup access URL ready

**Discussion bridge (2 min):**
> "How many of you got it working on the first try? [hands] How many needed to troubleshoot something? [hands] That ratio is almost exactly what you'll see in your classroom. Keep that in mind."

---

### 0:30–0:55 — Teachable Machine Model Training

**What participants do:**
- Open Teachable Machine (teachablemachine.withgoogle.com)
- Train an image classification model with 3 classes (exercise in workbook)
- Export and test the model
- Observe what happens with different amounts of training data

**What you watch for:**
- The "it works!" moment — make a mental note of who looks genuinely delighted; their reaction is what students will feel
- The "why is it classifying this wrong?" moment — excellent for discussion
- Teachers who want to go deeper — let them experiment, but keep group moving

**Discussion (5 min at end of this block):**

> "What surprised you? What confused you? What did you notice about how training data amount affected accuracy?"

Prompt toward: *"If you trained with only 3 images of a cat and 30 images of a dog, what happens? Why does that matter for your students' understanding of bias?"*

**The key teaching moment:** The bias in Teachable Machine is tangible. Teachers who experience a poorly trained model immediately understand what they'll be teaching in M4.

---

### 0:55–1:15 — Build a Simple Skill

**What participants do:**
- Follow the skill build guide in their workbook (Exercise 1.3)
- Write a minimal SKILL.md for their agent
- Deploy it to their running OpenClaw instance
- Test it with a prompt

**The skill to build:** A "Quick Reference" skill for their classroom — 5–10 facts about a topic they teach. Example: a history teacher builds a "Key Dates" skill. An English teacher builds a "Literary Terms" skill.

**Why this framing:**
- The first question teachers have is "how does this apply to what I teach?" Answer: *they just did it*
- The skill they build becomes a personal reference point for M3 content throughout the program

**If time is short:** Provide a pre-written SKILL.md template they can customize quickly.

**Common issues:**
- Formatting errors in SKILL.md — YAML syntax requires exact indentation
- Agent not seeing the new skill — requires restart or refresh
- "It's not using my skill" — often the prompt doesn't match the skill's context window

---

### 1:15–1:40 — Debrief: The Student Experience

**Purpose:** Synthesize the hands-on experience into pedagogical understanding.

**Facilitation questions (work through 2–3 of these):**

1. "What moment in the last hour felt most like a breakthrough? What made it feel that way?"
2. "What moment felt most frustrating? What would a 12-year-old do at that moment that a teacher might not?"
3. "When your model classified something wrong, how did you feel? How does that connect to Module 4's content on bias?"
4. "You built a skill. What decisions did you make? What would a student struggle to decide?"
5. "If you were teaching yourself from 30 minutes ago, what one thing would you say?"

**Note:** Write responses on the board. These themes will anchor Sessions 2 and 3.

---

### 1:40–1:55 — Connecting Experience to Curriculum Arc

**Facilitate a visual mapping exercise:**

Draw the arc on the board:
```
M1 → M2 → M3 → M4 → M5 → M6 → M7
```

Ask participants: "Based on what you just did — where does each part of today's experience land?"

Expected mapping:
- OpenClaw deploy → M1 (identity, setup)
- Teachable Machine → M2 (perception) and M4 (learning)
- Skill building → M3 (knowledge base)

Then ask: "What haven't we touched yet?" → M5 (language/channels), M6 (ethics), M7 (expo)

**Brief preview:** "Sessions 2, 3, and 4 of this PD cover those three areas — with hands-on tool training, facilitation of difficult discussions, and running the Expo. For now: you've been your own students. That's the foundation."

---

### 1:55–2:00 — Reflection

Participants write in their workbooks (Exercise 1.4):
- "The most important thing I experienced today was..."
- "The thing I'm most nervous about teaching is..."
- "One thing I want to learn in the next sessions is..."

**Collect the "nervous" answers on sticky notes.** These become your Session 2 and 3 agenda-building prompts.

---

### Session 1 Facilitator Notes

**Common facilitator traps:**
- **Over-helping technically:** Let people struggle a bit. The frustration is data.
- **Over-lecturing during debrief:** You want their words, not yours. Ask more questions than you answer.
- **Skipping the personal skill exercise:** This is the one that makes M3 feel real. Don't skip it.

**If the tech completely breaks:**
- Move to paper simulation: write a SKILL.md by hand, pair-share how it would work
- Use the Workbook's offline fallback exercises
- Frame it explicitly: "This happens in classrooms. What do you do?"

---

---

## Session 2: Tool Training — Setup, Failure Modes, and Recovery

**Time:** 2 hours  
**Goal:** Teachers are confident with all 5 primary tools in the curriculum and know exactly what breaks and how to fix it.  
**Core experience:** Deep tool training → Failure mode scenarios → Recovery protocols  

---

### Session 2 Overview

| Time | Activity | Format |
|------|----------|--------|
| 0:00–0:10 | Opener: "What broke?" — consolidate Session 1 issues | Full group |
| 0:10–0:40 | OpenClaw setup deep-dive (common failure modes) | Small groups + hands-on |
| 0:40–0:55 | Teachable Machine + ML4Kids comparison | Pairs, hands-on |
| 0:55–1:10 | Hugging Face Spaces and Day of AI tour | Individual exploration |
| 1:10–1:35 | Failure mode simulation | Table teams |
| 1:35–1:50 | Recovery protocols and tech contingency planning | Full group |
| 1:50–2:00 | Workbook: personal tech contingency card | Individual |

---

### 0:00–0:10 — Opener: "What Broke?"

**Purpose:** Surface the real technical issues from Session 1 and normalize them.

Draw a simple T-chart on the board: "What worked | What broke"

Ask each table to share one item from each column. Record all.

> "Everything on the 'what broke' side — that's your classroom. Those aren't bugs you need to prevent. Those are teachable moments you need to be ready for. This session is about that readiness."

---

### 0:10–0:40 — OpenClaw Setup Deep-Dive

**Format:** Three rotating small-group stations (10 minutes each)

**Station 1: Fresh Install Simulation**
- Wipe participant's OpenClaw config and do a complete fresh install from scratch
- Time it — how long does it actually take for a student who's never done it?
- Identify the two or three places where students reliably get stuck

**Station 2: Common Configuration Failures**
Teacher encounters and diagnoses these deliberately injected failures:
- Wrong port in config → agent won't respond
- Missing API key → agent responds with error
- YAML formatting error in SKILL.md → skill not loaded
- Agent name conflict → unexpected behavior

Each table has a "Tech Failure Card" (laminated) with the failure described. Goal: diagnose and fix in under 3 minutes.

**Station 3: Network and School Firewall Issues**
- What gets blocked on school networks? (wttr.in, some npm packages, port forwarding)
- How to test before your class starts
- The offline fallback plan

**Debrief (5 min):**
> "Which failure took the longest to diagnose? Why? What's the one-liner you'd tell a student to check first?"

Write the "one-liners" on the board — these become the Quick-Fix Reference Card in the workbook.

---

### 0:40–0:55 — Teachable Machine vs. ML4Kids

**What participants do:**
- Open both tools simultaneously
- Complete the same 3-class classification task in both
- Compare: interface, student accessibility, flexibility, output format

**Key comparison points:**

| Factor | Teachable Machine | ML4Kids |
|--------|------------------|---------|
| No account required? | Yes (Google account optional) | Requires account setup |
| Runs in browser | Yes | Yes |
| Works offline | No | Limited |
| Age-appropriate? | Middle+High | Elementary-High |
| Output format | TensorFlow.js | Scratch, Python, App Inventor |
| Best for | M2, M4 image tasks | M4, Scratch-based projects |

**Facilitation prompt:**
> "If you had 10 minutes before class and your Teachable Machine link broke, which alternative would you reach for? Do you know how to use it?"

---

### 0:55–1:10 — Hugging Face Spaces and Day of AI Tour

**Individual exploration (10 minutes):**
Participants explore:
- Hugging Face Spaces: `huggingface.co/spaces` — find 2 spaces relevant to their subject area
- Day of AI: `dayofai.org` — find 1 lesson plan that would complement a module they're teaching

**Share-out (5 minutes):**
Each table shares one discovery. Record on shared doc or board.

**Key facilitation point:**
> "These aren't add-ons. Hugging Face has models your students can fine-tune in M4. Day of AI has standalone lessons that work when your OpenClaw instance is having a bad day. Know where they live."

---

### 1:10–1:35 — Failure Mode Simulation

**The Setup:**
Each table is assigned a "Day of Doom" scenario card describing a class session where something goes wrong. Teams have 15 minutes to develop a response plan, then 2 minutes to present it.

**Scenario Cards:**

*Scenario A: The Day OpenClaw Breaks for Everyone*
"It's the start of the Build Your First Skill lab (M3, Day 3). Three minutes in, every student's OpenClaw instance is returning a 503 error. You have 47 minutes left. The IT department says they can't help until tomorrow. What do you do?"

*Scenario B: The Teachable Machine Accuracy Crisis*
"Your class just trained their M2 models. One student stands up and announces that their model 'is racist' — it classifies dark-skinned images in one category and light-skinned images in another. Half the class is laughing; the other half looks uncomfortable. What do you do in the next 30 seconds? The next 5 minutes? The next 20 minutes?"

*Scenario C: The School Firewall Problem*
"You've planned the Bias Testing workshop (M6, Lab Day 1). When students open their agents, they get 'ERR_CONNECTION_REFUSED' — your school's network is blocking the local port. You didn't test this before class. You have 5 minutes before students start checking their phones. What do you do?"

*Scenario D: The Student Who Knows More Than You*
"During the M4 neural network lesson, a student (who clearly has significant ML background) starts correcting your explanations in front of the class. Other students are watching to see how you respond. You're not sure if the corrections are accurate. What do you do?"

*Scenario E: The Sensitive Disclosure During a Tech Lesson*
"During the OpenClaw Bias Testing workshop, a student quietly tells you that their family doesn't use facial recognition because their cousin was wrongly detained at an airport. Three other students nearby heard. The class is in the middle of running test prompts. What do you do right now? What do you do after class?"

**Debrief (8 min):**
Full group shares key moves from each scenario. Facilitator highlights:
- The difference between a "tech failure plan" and a "pedagogical recovery plan"
- Scenario E: this is NOT a tech failure — it's a human moment that happens to occur during a tech lesson

---

### 1:35–1:50 — Recovery Protocols and Tech Contingency Planning

**Facilitated discussion:** "What's the offline version of each tool?"

Build the chart together:

| Tool | Primary Use | Offline Fallback |
|------|-------------|-----------------|
| OpenClaw | Agent deployment | Paper simulation — write SOUL.md, SKILL.md, test via partner role-play |
| Teachable Machine | Image classification | Feature extraction game (printed cards, M2 materials) |
| ML4Kids | Training data | Sorting and classification by hand (M4 data sorting activity) |
| Hugging Face | Model exploration | Pre-downloaded model cards and screenshots |
| Day of AI | Supplemental lessons | Print PDF versions; available in advance |

**Key takeaway:**
> "Every lesson in this curriculum has an offline path. You don't need to cancel a class because the internet breaks. You need to know where the offline path is before you need it."

---

### 1:50–2:00 — Personal Tech Contingency Card

Participants complete their workbook's Tech Contingency Card (Exercise 2.4):
- One tool they feel least confident with
- The specific thing they'll practice before teaching
- Their offline fallback plan for each module
- IT contact at their school and what to request in advance

---

### Session 2 Facilitator Notes

**The most important thing you can convey:**
Confidence in the face of tech failure is the single biggest predictor of how well a teacher facilitates this curriculum. Not technical expertise — *confidence under pressure*. This session is designed to build that by exposing failure in a safe environment.

**If Session 1 had major tech issues:** Spend more time on the Station 1 fresh install simulation. Don't skip it because "they already struggled enough" — they need to struggle in a structured, observed way.

**For teachers who are very technically confident:** Push them to the "how do you explain this simply?" role. "You know how it works — can you explain it in a way that would help a 7th grader who's never coded?"

---

---

## Session 3: Facilitating Difficult Discussions

**Time:** 2 hours  
**Goal:** Teachers have practiced language and moves for the hardest facilitation moments in the curriculum — ethics discussions (M6) and student disclosures.  
**Core experience:** Framework study → Role-play scenarios → Debrief  

---

> **Reference materials for this session:**
> - Module 3 Teacher Guide Section 9 (Ethics Discussion Facilitation, Lesson 3.5)
> - Module 6 Teacher Guide Sections 4, 6, and 8 (Content Sensitivity, Facilitation Tips, Handling Disclosures)
>
> Both are included in the participant workbook. Direct participants to tab/flag these sections before this session.

---

### Session 3 Overview

| Time | Activity | Format |
|------|----------|--------|
| 0:00–0:10 | Opener: What's hardest to teach? | Full group |
| 0:10–0:30 | Framework deep-dive: M3 Section 9 + M6 Section 4 | Small group reading + annotation |
| 0:30–0:55 | Role-play scenarios: ethics discussions | Triads (facilitator/student/observer) |
| 0:55–1:20 | Role-play scenarios: student disclosures | Triads |
| 1:20–1:40 | Full group debrief | Full group |
| 1:40–1:55 | Language toolkit: what to say when | Pairs + workbook |
| 1:55–2:00 | Personal reflection | Individual |

---

### 0:00–0:10 — Opener: What's Hardest to Teach?

Display these three statements. Ask participants to stand near the one that resonates most:

- "I'm most nervous about students saying something I don't know how to respond to."
- "I'm most nervous about getting the content wrong when explaining AI bias."
- "I'm most nervous about students getting upset or the conversation going somewhere I can't bring back."

After they cluster: brief conversation with people nearby about *why* that one.

**Facilitator bridge:**
> "All three of these are real. This session is about the third one especially — the conversations that go somewhere hard, fast. We're going to practice the moves so they're in muscle memory when you need them."

---

### 0:10–0:30 — Framework Deep-Dive

**Distribute the participant workbook to the M3/M6 teacher guide excerpts (Exercise 3.1).**

Small groups (3–4 people) read and annotate:
- M3 Teacher Guide Section 9: Ethics Discussion Facilitation
- M6 Teacher Guide Section 4: Content Sensitivity Guidance
- M6 Teacher Guide Section 8: Handling Student Disclosures

Each group answers on sticky notes:
1. "What's the most useful specific piece of language from these sections?"
2. "What's one situation described here that you've already experienced in another class?"
3. "What's one situation described here that you haven't experienced but want to be ready for?"

**Sticky note gallery (5 min):** Post by question. Facilitator reads highlights.

**The core framework (read aloud or project):**

From M6 Section 8, the disclosure framework:
1. Pause and acknowledge
2. Don't make the student the lesson's example
3. Don't analyze the disclosure
4. Bridge carefully
5. Protect them from the spotlight

> "These five steps are short and they go fast. We're going to practice them until they're automatic."

---

### 0:30–0:55 — Role-Play: Ethics Discussions

**Setup:** Triads. Roles: Facilitator (teacher), Student, Observer

Each triad gets one scenario card. Facilitator runs the discussion for 5 minutes. Observer takes notes on what worked. Rotate roles twice so everyone is facilitator once.

**Scenario Cards for Ethics Discussion Role-Plays:**

*Ethics Scenario 1: "Math Can't Be Racist"*
During M6 Lesson 6.1, a student says: "I think this whole 'algorithmic bias' thing is made up. Math is math. Numbers can't be racist. If the AI says someone is high risk, that's just the data."

Three other students are nodding agreement. One student looks visibly uncomfortable.

*Facilitator goal: redirect without dismissing, bring in the data mechanism, protect the student who looks uncomfortable.*

---

*Ethics Scenario 2: "It's Not Our Problem"*
During M6 Lesson 6.7 (Builder's Responsibility), a student says: "We're just students doing a project. The real companies are the ones with the responsibility. Why does my little agent need a usage policy?"

*Facilitator goal: validate the distinction, connect the small-scale work to the skill being built, avoid lecturing.*

---

*Ethics Scenario 3: The Strong Emotional Reaction*
During M6 Lesson 6.2 (Bias in the Wild), a student responds to the COMPAS case study by saying loudly: "This is disgusting. The companies who built this should be in prison. Anyone who defends this is defending racism."

Four students look like they want to engage; two look withdrawn.

*Facilitator goal: validate the emotion without inflaming, keep analytical thread alive, protect students who may feel implicated.*

---

**Observer checklist during each role-play:**
- Did the facilitator acknowledge the student's statement before redirecting?
- Did the facilitator use "the system" or "the algorithm" as the object of analysis, rather than "people"?
- Did the facilitator check in with any students who looked affected?
- Did the facilitator land on a specific, checkable claim (not just vibes)?

**Debrief after each round:** 
Observer shares one thing that worked, one thing to try differently.

---

### 0:55–1:20 — Role-Play: Student Disclosures

**Same triad structure, now with disclosure scenarios from M6 Section 8 and M3 Section 9.**

*Disclosure Scenario 1: The Family Connection*
During the COMPAS case study discussion, a student (not visibly upset) says: "My dad got a score like that. He thinks it's why he got a longer sentence than his co-defendant."

Four students nearby heard.

*Facilitator goal: acknowledge without analyzing, protect from spotlight, bridge to content.*

---

*Disclosure Scenario 2: The Surveillance Context*
During M6 Lesson 6.3 (Surveillance Simulator), after the simulation, a student approaches you and quietly says: "This wasn't really a simulation for me. My family doesn't go certain places because of the cameras."

Other students are doing their index card reflection.

*Facilitator goal: acknowledge, assess need (counselor? follow-up?), don't broadcast.*

---

*Disclosure Scenario 3: The Mid-Lab Moment*
During the M3 Build Your First Skill Lab, a student building a "student rights" skill for their agent says to their partner: "I'm building this because my family doesn't trust schools after what happened to my brother."

The partner looks uncertain whether to continue the conversation or call you over. You overhear from nearby.

*Facilitator goal: gentle check-in without interrupting the work, assessment of whether follow-up is needed.*

---

**After all disclosure role-plays — full group debrief:**

> "What's the difference between a disclosure that requires immediate action and one that requires a warm acknowledgment and a private follow-up? What signals were you reading in each scenario?"

Key distinctions (write on board):
- **Safety concern** → immediate protocol; don't promise confidentiality
- **Emotional processing** → acknowledge, offer written alternative, check in after class
- **Information-sharing** (student just telling you something) → receive warmly, don't over-intervene

---

### 1:20–1:40 — Full Group Debrief

**Discussion prompts:**

1. "Which role-play was hardest? What made it hard?"
2. "Which facilitator move — from the teacher guides — are you most likely to actually remember in the moment?"
3. "What's the difference between facilitating a difficult discussion and managing a difficult discussion?"
4. "What do you do *after* a class where something heavy came up? What's your own recovery routine?"

The last question is often skipped in PD but matters. Teachers need to process these moments too. Normalize that.

---

### 1:40–1:55 — Language Toolkit: What to Say When

**Pairs activity:** Using the teacher guides and their own role-play experience, pairs build a "Language Toolkit" card in their workbook (Exercise 3.4).

The card has 6 sentence starters for 6 situations:

| Situation | Your go-to sentence |
|-----------|-------------------|
| Student says something dismissive of bias | |
| Student says something with strong emotional charge | |
| Student makes a connection to their personal experience | |
| Student discloses something that may need follow-up | |
| You don't know the answer to a content question | |
| The discussion is going nowhere productive | |

**Facilitator share-out:** Ask 2–3 participants to share one they're proud of. Write on board.

The goal: everyone leaves with specific language, not just a general sense of "be sensitive."

---

### 1:55–2:00 — Personal Reflection

Workbook prompt (Exercise 3.5):
- "One module or lesson where I anticipate needing these skills most..."
- "One student I'm already thinking about as I prepare for this curriculum..."
- "The thing I'll do before I teach M6 is..."

*Note to facilitator: the second prompt is powerful but personal. Don't call on people. It's for the teacher's own planning.*

---

### Session 3 Facilitator Notes

**For facilitators who have not taught AI specifically:**
The role-play debriefs draw on general facilitation skills that transfer from any content area. You don't need to be an AI expert to facilitate this session — you need to have read the relevant sections of the teacher guides and to be comfortable with ambiguity.

**If a participant becomes genuinely distressed during a role-play:**
This happens occasionally — a scenario lands close to a personal experience. Use the exact moves from the disclosure framework you just taught. The irony is instructive: you're modeling what you're asking them to model.

**On the language toolkit:**
Push for specificity. Vague intentions ("I'll be sensitive") don't survive contact with a real classroom. Specific sentences do. If someone's toolkit sentence is vague, ask: "What would you actually say? Give me the words."

---

---

## Session 4: Running the AI Expo

**Time:** 2 hours  
**Goal:** Teachers have a complete operational plan for AI Expo Day — logistics, assessment, guest coordination, and handling incomplete student agents.  
**Core experience:** Logistics planning → Rubric calibration → Incomplete agent protocols → Mock Expo debrief  

---

### Session 4 Overview

| Time | Activity | Format |
|------|----------|--------|
| 0:00–0:10 | Opener: What does a great Expo look like? | Full group |
| 0:10–0:35 | Logistics deep-dive: Expo Day planning | Small groups |
| 0:35–0:55 | Rubric calibration: scoring student presentations | Pairs + full group |
| 0:55–1:15 | Handling incomplete agents | Small groups |
| 1:15–1:35 | Guest coordination and prep | Full group |
| 1:35–1:50 | Mock Expo simulation | Pairs |
| 1:50–2:00 | Closing reflection + next steps | Individual + full group |

---

### 0:00–0:10 — Opener: What Does a Great Expo Look Like?

**Quick visualization exercise:**
> "Close your eyes for a moment. It's AI Expo Day. Picture the best version of how it goes. What are you seeing? What are students doing? What are guests doing? What are you doing?"

Two minutes of writing in the workbook, then pair-share.

**Bring out common themes:** Usually: students explaining confidently, guests genuinely engaged, a few surprising demos, at least one student who surprised even themselves.

> "That's the target. This session is about the logistics that make that possible — not the performance, but the infrastructure."

---

### 0:10–0:35 — Logistics Deep-Dive

**Small group rotation: each group develops one logistics area, then presents to full group.**

**Group 1: Room Setup**
Reference: Module 7 Teacher Guide Section 4 (Expo Day Logistics)

Develop:
- Station layout for 25 students (table arrangement, circulation flow, poster/screen placement)
- Tech setup sequence (who sets up first, what needs to run before guests arrive)
- "Tech dry run" protocol (what to test, when, with whom)

**Group 2: Schedule Design**
Reference: M7 Teacher Guide Session 6 timing notes

Develop:
- 90-minute Expo timeline with buffer points
- Guest arrival protocol (what do they see first? who greets them?)
- Buffer scenarios: What if a student's demo takes twice as long? What if guests arrive early or late?

**Group 3: Assessment Logistics**
Reference: M7 Rubric (`module7/assessments/ai-expo-presentation-rubric.md`)

Develop:
- How do you score 25 students in 90 minutes? (You can't watch every presentation fully)
- Which rubric criteria can a guest evaluator score? Which require teacher observation?
- What's the plan for students who present when you're at another station?

**Group 4: Parent and Guest Communication**
Reference: M7 Teacher Guide Section 4

Develop:
- Invitation language for guests (what should they expect?)
- What to tell guests about how to interact (ask questions but not challenge students unfairly)
- How to prep guests on the rubric without overwhelming them

**Full group share-out (8 min):** Each group presents; facilitator captures key decisions on a shared "Expo Planning Template" (see workbook Appendix).

---

### 0:35–0:55 — Rubric Calibration

**Purpose:** Ensure teachers are scoring consistently and can explain the rubric to students and guests.

**Setup:** Distribute copies of the M7 AI Expo Presentation Rubric.

**Phase 1: Individual scoring (5 min)**
Show a 3-minute video clip of a student presentation (use a real clip from a previous cohort, or a scripted demo by the facilitator). Each participant scores independently on all 5 criteria.

**Phase 2: Table comparison (5 min)**
Compare scores at tables. Discuss: where was there disagreement? What's in the description that you interpreted differently?

**Phase 3: Calibration discussion (10 min)**
Full group:
- "Technical Completeness" — what counts as a capability being 'present and working'? What if it's partially working?
- "Reflection Quality" — how do you distinguish a "3" from a "4"? What would a student have to say to get a 4?
- "Q&A Responses" — how do you score Q&A if you weren't at that station when it happened?

**Output:** A "Scoring Notes" card that each teacher writes for themselves — their interpretations of edge cases.

**Key facilitator point:**
> "Calibration doesn't mean everyone scores identically — it means everyone can *explain their score* using specific evidence from the rubric. That's what makes scores defensible to students, parents, and administrators."

---

### 0:55–1:15 — Handling Incomplete Agents

**This section addresses one of the most common teacher anxieties about M7: "What if a student shows up to the Expo with an agent that barely works?"**

**Reference:** M7 Teacher Guide Section 5 (Handling Incomplete Agents)

**Facilitation: Problem-Solving in Small Groups**

Each group gets one "incomplete agent" scenario. Groups develop: (1) what to do in the week before the Expo, (2) what to do if this student is presenting in 10 minutes, (3) how to score this student fairly.

*Scenario A: The Minimally Viable Agent*
Student has M1 (identity/personality) working perfectly but M2–M5 didn't fully deploy. The agent converses well but can't perceive, has no trained model, no custom skills, and no live channel. Student is embarrassed. Expo is in 4 days.

*Scenario B: The Technical Failure at Demo Time*
Student had a working agent at the dress rehearsal yesterday. This morning, something broke. Agent responds with an API error. Student is near tears. Expo starts in 20 minutes.

*Scenario C: The Ambitious But Broken Agent*
Student built something impressive but it only works about 60% of the time — randomly. The demo sometimes works perfectly, sometimes fails. Student wants to live-demo despite the risk. Expo is in 2 days.

*Scenario D: The "I Didn't Do Much" Honest Student*
Student's agent is functional but minimal. When asked during Session 1 what they're proud of, they couldn't find an answer. They have 5 days. They're not in crisis — they're just quiet and disengaged.

**After small group work, full group debrief:**

Key principles to land:
1. **Scoping down is not giving up.** An honest, thoughtful presentation of a minimal agent can score higher on reflection quality than a dishonest presentation of a broken one.
2. **Screenshots and video fallback are legitimate.** The rubric's Live Demo category includes graceful handling of fallback — that's a skill, not a cheat.
3. **"What I would build next" is an M7 deliverable.** A student who can honestly assess what's missing and articulate what they'd do next is demonstrating real learning.
4. **You saw this student for 7 modules.** Your holistic assessment carries weight. Use the rubric as a floor, not a ceiling.

---

### 1:15–1:35 — Guest Coordination and Prep

**Discussion: Who should you invite?**

Great Expo guests include:
- Parents (obvious — also motivating for students)
- Local tech professionals (engineers, product managers, data scientists)
- Adjacent-subject teachers from your school (history, ELA, civics)
- School administrators (good for buy-in; brief them in advance)
- Other student groups (peer learning is powerful)
- Local journalists or community leaders (especially for projects with civic focus)

**Practice: The guest briefing conversation**

Pairs role-play: one is the teacher, one is a guest who knows nothing about the curriculum. The teacher has 3 minutes to brief the guest on:
- What the students built
- What to ask them
- What NOT to do (build-it-for-them questions, dismissive reactions to bugs)
- How to use the audience evaluation card

**Discuss:** What's the most important thing to tell a guest before they start interacting with students?

*The most common answer: "Ask them to explain it to you like you've never heard of AI." This generates the best conversations and the best rubric evidence.*

**Guest evaluation card:**
Briefly walk through the Audience Evaluation Card (M7 assessments). Guests don't use the full rubric — they use this simplified card. Point out that their ratings inform the student awards, not the official grade.

---

### 1:35–1:50 — Mock Expo Simulation

**Setup:**
- Half the group plays students (they can use their own agents from Session 1)
- Half the group plays guests
- 5 minutes per "station" — then rotate
- One facilitator circulates as "teacher managing the Expo"

**During simulation, observers note:**
- What questions from guests generated the best student responses?
- What questions were unfair or hard to answer?
- Where did the "student" presenter stumble? Was it tech, content, or confidence?
- What did the "teacher" do when a station seemed to go sideways?

**Debrief (8 min):**
> "What's the teacher's job during Expo Day? It's not facilitation anymore — it's navigation. You're watching for fires and helping students who need support without interrupting those who don't."

---

### 1:50–2:00 — Closing Reflection + Next Steps

**Individual workbook reflection (Exercise 4.5):**
- "The part of the Expo I feel most ready for is..."
- "The part I still need to prepare is..."
- "The first thing I'll do this week is..."

**Full group closing:**
Each participant shares one word for how they feel about teaching this curriculum now, compared to the word they shared at Session 1 opening.

**Facilitator closing:**
> "You've spent two days being students, troubleshooters, ethics facilitators, and event producers. You are more prepared than almost any teacher who has done this before you. The curriculum is thorough — the teacher guides are your partner, not just documentation. Use them.
>
> The most important thing isn't perfect execution. It's showing up with curiosity and honesty. Your students will follow your lead. Lead well."

---

### Session 4 Facilitator Notes

**On the rubric calibration:**
Don't skip this even if time is tight. Teachers who haven't calibrated score inconsistently, and students (and parents) notice. 20 minutes of calibration prevents hours of grade disputes.

**On incomplete agents:**
The tone matters more than the policies. Frame this positively: "What's the best story this student can honestly tell?" Not "how do we rescue them?"

**On the mock Expo:**
Use real agents from Session 1 if possible. The experience of being evaluated on something you built (even a simple skill) is a glimpse of what students will feel. Debrief that feeling explicitly.

---

---

## Appendix A: PD Program Quick Reference

### Session Sequence
| Session | Core Theme | Primary Outcome |
|---------|-----------|-----------------|
| 1 | Experience the student journey | Teachers have deployed OpenClaw, trained a model, built a skill |
| 2 | Tool mastery + failure modes | Teachers have a contingency plan for every major tech failure |
| 3 | Facilitating difficult discussions | Teachers have practiced language for ethics discussions and disclosures |
| 4 | Running the Expo | Teachers have a complete Expo plan and calibrated rubric understanding |

### Key References

| Module | Document | When to Reference |
|--------|----------|------------------|
| M3 | `module3/teacher-guide/README.md` — Section 9 | Session 3 (ethics discussion frameworks) |
| M6 | `module6/teacher-guide.md` — Sections 4, 6, 8 | Session 3 (sensitivity, facilitation, disclosures) |
| M7 | `module7/teacher-guide/teacher-guide.md` — Sections 4, 5 | Session 4 (Expo logistics, incomplete agents) |
| M7 | `module7/assessments/ai-expo-presentation-rubric.md` | Session 4 (rubric calibration) |

---

*Teacher PD Facilitator Guide — OpenClaw Curriculum | cross-curriculum/teacher-pd/*  
*For facilitators of the OpenClaw AI Curriculum PD Program*
