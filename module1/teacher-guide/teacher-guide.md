# Module 1 Teacher Guide: What Is AI?

**For Educators Without a CS or AI Background**
**Grade Level:** 6–8 | **Duration:** ~3 weeks (15 class periods)
**Last Updated:** March 2026

---

> **You don't need to be an AI expert to teach this.** This guide is written for curious, adaptable educators who are willing to learn alongside their students. The most important thing you bring is not technical knowledge — it's good facilitation, genuine curiosity, and the courage to say "I don't know — let's find out together."

---

## Table of Contents

1. [Module Overview](#1-module-overview)
2. [Prerequisites & Setup](#2-prerequisites--setup)
3. [Materials Checklist](#3-materials-checklist)
4. [Day-by-Day Pacing Guide](#4-day-by-day-pacing-guide)
5. [Facilitation Tips Per Lesson](#5-facilitation-tips-per-lesson)
6. [Differentiation Strategies](#6-differentiation-strategies)
7. [FAQ: Common Student Questions + Teacher Responses](#7-faq-common-student-questions--teacher-responses)
8. [Background Reading for Teachers](#8-background-reading-for-teachers)
9. [Cross-Subject Connections](#9-cross-subject-connections)
10. [Parent Communication Email Template](#10-parent-communication-email-template)

---

## 1. Module Overview

### Big Ideas

Module 1 is the foundation of the entire curriculum. Students arrive with wildly different prior knowledge — some have never thought about AI; others think it means killer robots. Your job is to build a **shared, accurate vocabulary** and spark genuine curiosity.

Three big ideas anchor this module:

1. **AI is not magic, and it's not sci-fi.** It's software — written by humans, trained on data, and designed to accomplish specific tasks. It has real limits.

2. **AI is already in students' lives.** Recommendation algorithms, voice assistants, spam filters, auto-correct — AI is not something coming in the future; it's here now, and students are already interacting with it.

3. **Humans and machines are different kinds of "intelligent."** AI can beat world champions at chess and Go, but it doesn't know what it means to feel lonely. Understanding that difference is the beginning of AI literacy.

### Learning Goals

By the end of Module 1, students will be able to:

- Define artificial intelligence in their own words
- Give examples of AI in everyday life
- Distinguish AI from automation and human intelligence
- Describe 3–4 historical milestones in AI development
- Explain the Turing Test in plain language
- Have their first guided conversation with an AI assistant (OpenClaw)
- Identify the 5 Big Ideas in AI (AI4K12 framework)
- Demonstrate curious, responsible engagement with AI tools

### Standards Alignment

| Standard | Alignment |
|----------|-----------|
| AI4K12 Five Big Ideas in AI | Lessons 1.1, 1.4 |
| CSTA K-12 CS Standards 2-IC-20 | Lessons 1.2, 1.4 |
| CSTA 2-AP-10 | Lab: OpenClaw 101 |
| CCSS ELA Speaking & Listening 6-8 | Discussions throughout |
| NGSS Science & Engineering Practices | Scientific thinking in Lesson 1.4 |

### Pacing Overview

| Week | Focus | Days |
|------|-------|------|
| Week 1 | What is AI? History and definitions | Days 1–5 |
| Week 2 | AI in the real world + first AI conversations | Days 6–10 |
| Week 3 | Turing Test, limits of AI, assessment | Days 11–15 |

---

## 2. Prerequisites & Setup

### For You (The Teacher)

No prior CS or AI experience is required. Before the module begins:

- **Read this guide fully** (you're doing it!) — 30–45 min
- **Skim the Background Reading** in Section 8 — pick at least one article
- **Try OpenClaw yourself** before your students do. Log in, have a conversation, make a mistake, see what happens. You don't need to master it — you just need to be comfortable saying "let me show you what happened when I tried this."
- **Watch a 10-min YouTube explainer** on what machine learning is. (See Section 8 for a recommendation.)

### Technical Setup

**Before Day 1:**

- [ ] Confirm all student devices can access the school network
- [ ] Test the OpenClaw login page on a student device (not just your teacher computer)
- [ ] Verify student accounts are created and credentials are distributed
- [ ] Check that classroom projection is working
- [ ] Print any physical materials (sorting cards, exit tickets) or confirm digital alternatives

**OpenClaw Specific:**

- [ ] Log into OpenClaw as yourself — confirm your teacher account works
- [ ] Run through `tutorial-welcome-to-openclaw` yourself before Day 7
- [ ] Have a backup plan if internet is slow: the Turing Test activity (Lesson 1.4) and the sorting cards activity work offline

### Room Setup

- Desks in clusters of 3–4 work best for this module (lots of pair/group discussion)
- Whiteboard or chart paper visible for capturing student thinking
- Charging stations or extension cords if devices run low

---

## 3. Materials Checklist

### Physical Materials

| Item | Quantity | Used In |
|------|----------|---------|
| Sticky notes (2 colors) | 1 pad each color per class | Lessons 1.1, 1.4 |
| Index cards | 1 per student | Exit tickets throughout |
| Printed AI sorting cards (activity-sorting-cards/) | 1 set per pair | Day 4 |
| Markers (for chart paper) | 1 set per group | Days 1, 3, 14 |
| Student journals or composition notebooks | 1 per student | All lessons |
| Timer (phone or wall clock visible to all) | 1 per room | Lessons 1.3, 1.4 |
| Optional: printed Turing Test activity sheets | 1 per pair | Day 12 |

### Digital Materials (on student devices)

| Resource | Location |
|----------|----------|
| OpenClaw student login | (your school URL) |
| Module 1 slide decks | In each lesson folder |
| Tutorial: Welcome to OpenClaw | tutorial-welcome-to-openclaw/ |
| Tutorial: First Conversation | tutorial-first-conversation/ |
| Textbook Chapter 1 | textbook-chapter-1/ |
| Quiz: AI or Not AI? | quiz-ai-or-not-ai/ |

### Teacher-Only Materials

| Resource | Location |
|----------|----------|
| Answer keys | assessments/answer-keys/ |
| Facilitation guides per lesson | Each lesson's teacher-facilitation-guide.md |
| This teacher guide | teacher-guide/teacher-guide.md |

---

## 4. Day-by-Day Pacing Guide

> **Timing:** All lessons are designed for 50-minute class periods. If your periods are shorter (45 min), trim the warm-up or extension. If longer (60+ min), use the extension activities.

### Week 1: What Is AI?

#### Day 1 — Lesson 1.1, Part 1: What Makes Something Intelligent?
**Goal:** Surface prior knowledge, build community, introduce the question
- (10 min) Warm-up: Think-Pair-Share — "What makes something intelligent?"
- (15 min) Brief history of AI: Turing → Deep Blue → AlphaGo → ChatGPT
- (10 min) Introduce the 5 Big Ideas in AI (AI4K12 framework)
- (10 min) Curriculum arc preview — where we're going together
- (5 min) Exit ticket: "In your own words, what is AI? What question do you have?"

**Teacher checkpoint:** Collect exit tickets. Skim for misconceptions — especially the "AI = robots" framing.

#### Day 2 — Lesson 1.1, Part 2: AI vs. Automation vs. Human Intelligence
**Goal:** Sharpen the definition; clear up the biggest misconceptions
- (8 min) Return to yesterday's exit tickets — share 2–3 interesting student definitions anonymously
- (20 min) Direct instruction: What AI *is*, what it isn't — automation vs. AI, AI vs. human intelligence
- (12 min) Partner activity: "Is this AI, automation, or human?" scenario sort (preview of sorting cards)
- (10 min) Reflection journal: "How has your definition changed since yesterday?"

#### Day 3 — Lesson 1.2, Part 1: AI in Your World
**Goal:** Connect AI to students' real lives
- (5 min) Warm-up: On sticky notes — "Name one AI you used in the past 24 hours" (no wrong answers)
- (20 min) Lesson 1.2 core: AI in entertainment, health, transportation, social media
- (15 min) Class audit: Map student sticky notes to sectors on the board
- (10 min) Discussion: "Is it a problem that AI is everywhere? Who benefits? Who might not?"

**Note:** This is often when students get most animated. Budget extra discussion time if the conversation is good.

#### Day 4 — Activity: Sorting Cards + Lesson 1.2 Homework
**Goal:** Practice identifying AI vs. non-AI; reinforce vocabulary
- (5 min) Vocabulary review game (flash cards, kahoot, or whiteboard relay — your choice)
- (30 min) AI Sorting Cards activity (pairs) — sort scenario cards into AI / Not AI / Unsure
- (10 min) Debrief: What was easy to sort? What was hard? Why?
- (5 min) Assign homework: AI Bingo (lesson-1-2-ai-in-your-world/homework-assignment.md)

#### Day 5 — Textbook Chapter 1 + Quiz Prep
**Goal:** Consolidate Week 1 learning; check for understanding
- (30 min) Read Textbook Chapter 1 (individually, or read-aloud in sections if needed)
- (10 min) Chapter discussion: 2–3 discussion questions from the chapter
- (10 min) Preview Quiz (quiz-ai-or-not-ai/) — remind students it's formative, not graded as high stakes

---

### Week 2: First Contact with AI

#### Day 6 — Quiz: AI or Not AI?
**Goal:** Formative assessment on Week 1 concepts
- (25 min) Quiz: AI or Not AI?
- (15 min) Self-check: Go over answers together; students mark their own
- (10 min) "Muddiest Point" — What's still fuzzy? Collect on index cards.

**Teacher checkpoint:** Review muddiest points. Decide if any concept needs re-teaching before moving on.

#### Day 7 — Tutorial: Welcome to OpenClaw
**Goal:** Demystify the tool; ensure all students can log in and navigate
- (5 min) Explain what OpenClaw is and how it fits the curriculum (not magic, not Google, not a search engine)
- (35 min) Self-paced: tutorial-welcome-to-openclaw/ (walk around and troubleshoot)
- (10 min) Share-out: "One thing that surprised me," "One question I have"

**Likely tech trouble:** 10–15% of students will have login issues. Have a tech support contact ready, or pair struggling students with a partner for today.

#### Day 8 — Tutorial: First Conversation
**Goal:** Students have their first intentional AI conversation
- (5 min) "How to ask a good question" — mini-lesson on prompting (curious, specific, open-ended)
- (35 min) Self-paced: tutorial-first-conversation/
- (10 min) Partner share: "Show me the most interesting thing that happened in your conversation"

#### Day 9 — Lab: OpenClaw 101, Part 1
**Goal:** Open-ended exploration with a purpose
- (5 min) Lab intro + norms (curiosity, respect, honesty in journaling)
- (40 min) Lab: OpenClaw 101 (lab-openclaw-101/) — first half
- (5 min) Journal reflection: "What surprised you? What frustrated you?"

#### Day 10 — Lab: OpenClaw 101, Part 2 + Synthesis
**Goal:** Complete lab; start making meaning
- (35 min) Complete lab-openclaw-101/
- (15 min) Full-class debrief: What can OpenClaw do well? What can't it do? How did you know?

---

### Week 3: The Turing Test, Limits, and Assessment

#### Day 11 — Lesson 1.3 Wrap-Up + Transition to Turing Test
**Goal:** Bridge from "talking to AI" to "understanding what AI is doing"
- (15 min) Revisit their first conversations: Did OpenClaw seem "intelligent"? Why or why not?
- (20 min) Introduce the Turing Test concept (preview before the full lesson)
- (15 min) Mini-debate: "Does it matter if AI is *really* thinking, or just seems to be?"

#### Day 12 — Lesson 1.4, Part 1: The Turing Test
**Goal:** Understand the Turing Test and its implications
- (5 min) Warm-up: "What 3 questions would you ask to figure out if you're talking to a human?"
- (10 min) Direct instruction: Who is Alan Turing? What is the Imitation Game?
- (25 min) "Is It Human?" activity — students evaluate mystery text responses
- (10 min) Debrief: How did you decide? What fooled you?

#### Day 13 — Lesson 1.4, Part 2: AI Limits + Ethical Dimensions
**Goal:** Understand that AI has real limits, and those limits matter
- (10 min) What AI does well vs. what AI struggles with — discussion
- (20 min) Lesson 1.4 core: biases, errors, the difference between pattern-matching and understanding
- (15 min) "Should AI be allowed to...?" discussion stations
- (5 min) Exit ticket: "Name one thing AI is better at than humans, and one thing humans are better at."

#### Day 14 — Review + Summative Assessment
**Goal:** Assess student learning
- (10 min) Module 1 review game or student-led review
- (35 min) Summative assessment (assessments/ folder)
- (5 min) Preview of Module 2

#### Day 15 — Reflection + Module 2 Preview
**Goal:** Celebrate growth; build excitement for what's next
- (15 min) Reflection: "How has your definition of AI changed? What do you want to understand next?"
- (20 min) Module 2 preview activity or teaser
- (15 min) Optional: student share-outs or class gallery walk of best journal entries

---

## 5. Facilitation Tips Per Lesson

> This section prepares you for the moments in class that are hardest to navigate — the questions that stumped a teacher last year, the conversations that went sideways, and the misconceptions that come up again and again.

---

### Lesson 1.1 — What Is AI?

#### Common Misconceptions

| Misconception | How to Address It |
|---------------|-------------------|
| "AI = robots" | Affirm the image is from sci-fi, then pivot: "Most AI you interact with has no body at all — it's just software running on a server." Give examples: Netflix recommendations, spam filters, auto-correct. |
| "AI is sentient / has feelings" | "That's a big, important question — and we're going to keep coming back to it. For now, let's look at what we know AI *does* vs. what we're not sure about." |
| "AI knows everything" | "AI is trained on data — so it knows what it was taught. Does it know what happened yesterday? Let's test it." |
| "AI is about to take over / destroy humanity" | Take it seriously, not dismissively. "That's a concern a lot of thoughtful people have. Let's figure out what's real versus what's science fiction." |

#### Tough Questions and How to Handle Them

**"Is ChatGPT smarter than you?"**
> "What does 'smarter' mean? ChatGPT can write an essay in 3 seconds. It doesn't know what it's like to be nervous, or to be a 7th grader, or to care about anything. Is that smart? That's genuinely interesting to think about."

**"Did AI make this curriculum?"**
> Be honest. "Parts of this were developed with AI assistance. AI helped with drafts; humans shaped the ideas, made decisions, and checked the work. That's actually a great example of how AI works best — as a tool with humans in charge."

**"Why should we learn about AI? We'll just use it."**
> "You use a car, but understanding how brakes work could save your life. You use the internet, but understanding misinformation helps you think clearly. AI is going to affect your career, your politics, your creative work. Understanding it isn't optional anymore."

#### Energy Management
- Lesson 1.1 is lecture-heavy by design. Break it up with the sticky note activity and check-in questions.
- If students seem glazed over during the history section, skip to "what AI are *you* using?" — it re-energizes the room.

---

### Lesson 1.2 — AI in Your World

#### Common Misconceptions

| Misconception | How to Address It |
|---------------|-------------------|
| "The algorithm knows me better than my friends" | "It knows your behavior — what you click, how long you watch. That's different from knowing *you*. A friend knows what you're going through emotionally. The algorithm doesn't." |
| "Only big tech companies use AI" | Ask: "Does your doctor's office use software? Does your city have traffic lights?" AI is in far more places than students realize. |
| "AI is neutral / objective" | "AI is built by humans, trained on human data. Human biases can get baked in. We'll talk about this a lot more in Module 5." |

#### Tough Questions

**"Is it creepy that my phone knows where I go?"**
> "A lot of adults think so too. This connects to real policy debates happening right now. What do you think — is the convenience worth it? Does it depend on who's watching?"

**"Can AI be racist?"**
> Take this seriously. "Yes — and that's been documented with facial recognition systems, hiring algorithms, and more. It's not that the AI is racist like a person would be — it's that it learned from data that reflected existing inequalities. That's a big part of why understanding AI matters."

---

### Lesson 1.3 — First Contact (OpenClaw)

#### Common Misconceptions

| Misconception | How to Address It |
|---------------|-------------------|
| "It's just Googling for me" | "Search engines find pages. OpenClaw generates responses. That's a fundamentally different process — there are no links, it's composing language from patterns it learned." |
| "If it says something confidently, it must be right" | "AI can be confidently wrong. We call these 'hallucinations.' Let's test it — ask it something you know the answer to." |
| "I can say anything to it" | Establish norms early: "We treat AI tools the same way we treat any learning tool. Respectful, purposeful, curious." |

#### Practical Facilitation Tips

- **Walk around constantly** during the tutorials. Some students will go off-task; most will find something genuinely interesting that leads to great class discussions.
- **Create a "things we noticed" shared doc** or whiteboard section where students can post interesting/surprising/confusing things OpenClaw said.
- **Have a plan for students who finish early.** "Ask it to explain [concept from another class] and see if its explanation makes sense."
- **What if OpenClaw gives a wrong answer?** — That's a teaching moment, not a crisis. "Great catch! Let's talk about *why* it got that wrong and how you knew."

---

### Lesson 1.4 — The Turing Test

#### Common Misconceptions

| Misconception | How to Address It |
|---------------|-------------------|
| "If it passes the Turing Test, it's really thinking" | "Turing himself wasn't claiming that. Passing the test means being convincing, not being conscious. Philosophers still argue about this." |
| "AI will definitely pass the Turing Test soon / has already" | "Some systems fool some judges in limited settings. But in realistic, extended conversations? Humans are still much better at detecting the difference — for now." |
| "The Turing Test is the goal of AI" | "Most AI researchers don't actually work toward passing the Turing Test. They're building systems to do specific things well — not to pretend to be human." |

#### Handling the "Is AI conscious?" Conversation

This question *will* come up. Here's a framework:

1. **Validate:** "That is one of the most interesting questions in philosophy and science right now."
2. **Clarify:** "We don't have a scientific test for consciousness even in humans, so this is genuinely hard."
3. **Distinguish:** "We can observe what AI *does*. Whether there's any experience behind it — any 'what it's like' — we genuinely don't know."
4. **Redirect constructively:** "For now, let's focus on what AI can do, what it can't do, and what that means for how we use it."

---

## 6. Differentiation Strategies

### For Struggling Learners

**Vocabulary support:**
- Provide a visual glossary at the start of the module: *algorithm, data, machine learning, neural network, automation, training data, output, prompt*
- Post key vocabulary on the classroom wall throughout the module
- Let students use the glossary during all activities (this isn't a spelling test)

**Scaffolding activities:**
- Provide sentence starters for discussion: "I think AI is... because..." / "One example is..."
- Use a graphic organizer for the Day 1 history timeline (dates + blank space for "why it matters")
- For the sorting activity: start by modeling 2–3 cards together before releasing to pairs
- For the exit ticket: allow verbal responses (pull students aside, ask them to tell you)

**Tech support:**
- Pre-load tabs and tutorials on devices before class
- Pair students who struggle with tech with confident peers (rotate so the "helper" changes)
- Provide step-by-step printed instructions for the OpenClaw tutorials

**Assessment adjustments:**
- Allow the summative assessment to be oral (interview format) for students with test anxiety or IEPs
- Accept voice memos as journal entries
- Reduce the number of required examples per question

### For Advanced Learners

**Depth extensions:**
- Read the abstract of Alan Turing's 1950 paper and respond in writing: Do you find the test convincing? Why or why not?
- Research the "AI Winter" — why did AI progress stall in the 1980s and 1990s? What caused it?
- Compare how AlphaGo learns Go versus how a human beginner learns Go. What are the similarities? Differences?
- Investigate one documented case of AI bias (e.g., COMPAS recidivism tool, Amazon hiring algorithm) and write a brief analysis

**Leadership opportunities:**
- Ask advanced students to be "tech mentors" during lab days (without doing others' work for them)
- Invite them to present one interesting AI fact to the class each week ("AI in the news")
- Challenge them to find an AI claim they think is wrong in a news article

**Curriculum connections:**
- Point them to AI4K12.org's interactive modules for independent exploration
- Suggest the "Elements of AI" free online course (elements-of-ai.com) for students who want more

### For English Language Learners

- Provide bilingual vocabulary cards if translation resources are available
- Use image-heavy slides with minimal text
- Allow journal entries and exit tickets in the student's first language
- Use visual sorting activities (physical cards, less writing) when possible
- Seat ELL students near peers who speak their language for pair activities when available

### For Students with IEPs / 504s

- Check IEP accommodations before the module begins; apply them throughout
- Tech accessibility: confirm screen reader compatibility if needed; adjust font sizes
- Extended time for all assessments by default
- Break multi-step activities into numbered steps on a handout

---

## 7. FAQ: Common Student Questions + Teacher Responses

### Conceptual Questions

**Q: Is AI alive?**
> A: "AI runs on computers, so in that sense — no. But 'alive' and 'intelligent' might be different things. A virus is alive but not intelligent (in the way we mean). An AI can process language but isn't alive. What do *you* think matters more — being alive or being able to think?"

**Q: Does AI have feelings?**
> A: "That's genuinely one of the hardest questions in philosophy and science. We know AI produces outputs that look emotional — 'I'm happy to help!' But does it experience anything? We don't have a way to test that. For now, we know it processes information, not that it feels."

**Q: Can AI lie?**
> A: "Interesting question. AI can produce false statements — often called 'hallucinations.' But lying usually means *intending* to deceive. AI doesn't have intentions the way you do. It produces responses based on patterns, not goals. So: it can be wrong, but 'lying' might be the wrong word."

**Q: Will AI replace teachers?**
> A: "AI is already changing how people learn — it can explain concepts, answer questions, give feedback. What it can't do: notice that you're having a rough day and adjust. Build a relationship with you over time. Decide what actually matters to learn. Judge what's worth caring about. Teachers do all of that."

**Q: Can AI create art / music / stories? Is that real creativity?**
> A: "AI can generate things that look creative. Whether that's *the same* as human creativity — people disagree. A human artist makes choices with intention, emotion, and cultural context. AI recombines patterns from data. Is that creativity? That's a real debate. What do you think?"

**Q: Who owns what AI creates?**
> A: "Great question, and lawyers are figuring this out right now. Copyright law was written before AI existed. In most countries currently, AI-generated content can't be owned the way human-created work can be. This is changing fast."

**Q: Is it cheating to use AI for homework?**
> A: "That depends on what your teacher asked you to do. If they asked *you* to think through a problem, having AI do it isn't showing your thinking — same as copying from a textbook. But using AI as a tool to *help* you understand something? That's more like using a calculator. The question is: are you learning, or are you hiding?"

### Practical / Safety Questions

**Q: Is it safe to tell OpenClaw personal things?**
> A: "Good question to always ask. For this class, don't share private information — your address, phone number, family situations. Treat it like a public space. The conversations may be reviewed by teachers or administrators."

**Q: Can OpenClaw remember our conversations?**
> A: "It depends on how the system is set up. In general, AI systems don't have memory across separate conversations the way humans do. Each conversation often starts fresh."

**Q: Can hackers use AI?**
> A: "Yes — and so can security experts trying to *stop* hackers. AI is a tool, and tools can be used well or badly. This is part of why AI literacy matters: understanding the technology helps you understand both the possibilities and the risks."

**Q: What happens to the data I put into AI?**
> A: "Excellent question — and one adults don't always ask enough. Your school uses OpenClaw in an educational setting with privacy protections. For general AI tools you use on your own: always read the privacy policy or ask an adult."

---

## 8. Background Reading for Teachers

You do not need to read all of these before Day 1. Pick one, skim it, and come back to others as you progress through the module.

---

### 1. "How Does ChatGPT Work?" — Vox Explained
**Why read it:** The clearest, most accessible explanation of large language models for a non-technical audience. After reading this (15–20 min), you'll be able to honestly say "here's roughly what's happening under the hood" without needing a math degree.
**Where to find it:** Search "Vox ChatGPT how it works explained" — multiple video and text versions are available. The "Explain It Like I'm 5" format versions are especially good.
**Key takeaway:** AI language models predict the next word based on patterns in training data. They are not looking things up. They are not thinking. They are pattern-matching at massive scale.

---

### 2. "The AI Literacy Imperative" — MIT Technology Review
**Why read it:** Explains why teaching AI literacy is urgent, what it means in practice, and what schools are getting right and wrong. Gives you the "why we're doing this" language for parent conversations and your own conviction.
**Where to find it:** Search "MIT Technology Review AI literacy schools" — free articles are available; a brief free account may be needed.
**Key takeaway:** AI literacy isn't about becoming a programmer. It's about being an informed citizen in a world AI is reshaping — knowing enough to ask good questions and make good decisions.

---

### 3. "AI4K12: Five Big Ideas in Artificial Intelligence" — ai4k12.org
**Why read it:** This is the curricular framework this module is built on. The site has free, teacher-friendly summaries of each of the Five Big Ideas, with grade-appropriate examples and classroom resources. Bookmark it.
**Where to find it:** ai4k12.org → "Five Big Ideas"
**Key takeaway:** The five big ideas — Perception, Representation & Reasoning, Learning, Natural Interaction, Societal Impact — are the organizing framework. When students ask "but how does it *actually* work?", these ideas are your answer structure.

---

### Bonus: 10-Minute Video Option
If you prefer video over reading: search YouTube for **"3Blue1Brown But what is a neural network?"** — it's a beautifully animated, non-intimidating explanation of the core ideas behind modern AI. You don't need to understand all of it; watching it once will make you more confident in Week 2 discussions.

---

## 9. Cross-Subject Connections

Module 1 is unusually rich for cross-curricular connections. Here are concrete ways to link AI to other subjects students are studying.

### ELA — English Language Arts

**Connections:**
- **Argument writing:** "Is AI a net benefit or net harm for society?" — Module 1's discussions set up a clear argument essay prompt
- **Media literacy:** Distinguishing AI-generated content from human-created content is a new media literacy skill
- **Narrative analysis:** The "AI as character" in fiction (from Frankenstein to HAL 9000 to WALL-E) is a rich lens for analyzing how society thinks about intelligence and humanity
- **Vocabulary:** *algorithm, data, bias, intelligence, automation* — all high-utility academic vocabulary

**Collaboration opportunity:** Ask the ELA teacher if students are reading any science fiction — there may be a natural tie-in to Lesson 1.4 and themes of what makes something "human."

### Social Studies / History

**Connections:**
- **Industrial Revolution parallel:** The shift from manual labor to machines is a historical analogy for the current AI transition. How did that go? What can we learn?
- **World War II:** Alan Turing's role in breaking the Enigma code — connects AI history to WWII history many students already know
- **Civic engagement:** AI in elections (deepfakes, microtargeting), AI in law enforcement (facial recognition), AI in immigration decisions — all connect to civics units
- **Global inequality:** Who has access to AI tools? Who benefits? Who is harmed? Connects to global studies themes

**Collaboration opportunity:** If students are studying WWII, coordinate with the history teacher — Turing's story can be introduced in both classes simultaneously for reinforcement.

### Math

**Connections:**
- **Probability and statistics:** AI "predicts" based on probability. The concept of a model being X% accurate is directly tied to stats units
- **Data and graphs:** Training data, bias in datasets, visualizing how AI decisions differ across groups
- **Patterns and functions:** AI learns patterns in data — connects directly to functions and algebraic thinking
- **Binary and number systems:** The "how computers work" foundation — though not required for this module, curious students who want more will find it here

**Collaboration opportunity:** If students are in a data/statistics unit, suggest the math teacher use AI examples in their datasets.

### Science

**Connections:**
- **Scientific method:** AI models are tested and evaluated — the concept of accuracy, error, and iteration mirrors scientific inquiry
- **Brain and nervous system:** The (imperfect) analogy of neural networks to human neurons — a good hook if students are in a biology unit
- **Climate and environment:** AI is used in climate modeling, also consumes significant energy — worth noting when the topic comes up

---

## 10. Parent Communication Email Template

*Use this as a starting point. Personalize with your name, school, and any specific dates or tools your district uses.*

---

**Subject:** Introducing Our AI Literacy Unit — What Your Student Will Learn

Dear Families,

I'm writing to share some exciting news about what we're beginning in class this week. Over the next three weeks, your student will be starting **Module 1 of our AI Literacy curriculum: "What Is AI?"**

**What is this curriculum?**

This is a hands-on, discussion-based unit designed to help students become thoughtful, informed users of AI technology. It was developed for middle school students — no prior computer science experience is needed.

**What will my student do?**

Students will:
- Learn what AI actually is (and what it isn't)
- Explore how AI appears in their everyday lives — from social media to streaming to voice assistants
- Have guided, supervised conversations with **OpenClaw**, an educational AI assistant designed for schools
- Think critically about the limits, biases, and ethical dimensions of AI
- Study the history of AI, including the famous "Turing Test"

**Is this safe?**

Yes. All AI interactions happen in a supervised, school-approved educational platform. Students will be guided on digital citizenship and privacy throughout the unit. They will not share personal information with the AI tool.

**What about AI and cheating?**

One of the things we'll discuss directly in class is responsible, honest use of AI. Students will learn to use AI as a thinking partner and learning tool — not as a shortcut to avoid doing their own work. This is an active part of the curriculum, not an afterthought.

**How can I support my student at home?**

- Ask them: "Did you use any AI today without realizing it?" — great dinner table conversation
- If you use AI tools yourself (voice assistants, navigation apps, streaming recommendations), point that out and talk about it
- If you have concerns or questions, I'd love to hear from you

**When can I learn more?**

I'm happy to schedule a brief call or meeting if you'd like to discuss this unit further. You can also find our full curriculum materials at [SCHOOL CURRICULUM LINK IF AVAILABLE].

Thank you for supporting your student's learning. I'm genuinely excited about this unit — these are some of the most important questions students can engage with right now.

Warmly,

[Your Name]
[Grade/Subject]
[School Name]
[Email / Phone]

---

*P.S. — If you'd like to try OpenClaw yourself, ask your student to show you. Exploring it together is a great way to start the conversation.*

---

*End of Module 1 Teacher Guide*

---

**Version:** 1.0 | **Curriculum:** OpenClaw AI Literacy | **Module:** 1 — What Is AI?
**Feedback:** File issues or suggestions in the curriculum repo. This is a living document.
