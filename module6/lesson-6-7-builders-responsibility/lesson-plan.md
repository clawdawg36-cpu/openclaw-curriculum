# Lesson 6.7 — The Builder's Responsibility

**Module:** 6 — AI Ethics, Bias, and Accountability  
**Duration:** 1 period (~50 minutes)  
**Grade Level:** 7–8 (adaptable for 9–12)  
**Prerequisites:** Lessons 6.1–6.6 (full Module 6)

---

## 🔗 Through-Line Connection

> *"Every lesson in Module 6 has been asking the same question: who is responsible? Today we answer it. Not with a simple answer — but with a framework you can use for the rest of your life as someone who builds, uses, and exists alongside AI systems."*

Lesson 6.7 is the closing lesson of Module 6's ethics arc and the bridge to Module 7's public capstone. It weaves together every thread from the module:
- 6.1: Algorithms encode opinions → builders are responsible for those opinions
- 6.2: Real-world bias → the organizations that deploy systems are responsible
- 6.3: Surveillance → platforms and governments share responsibility
- 6.4: Data trails → consent and transparency are responsibilities
- 6.5: Deepfakes → the information ecosystem is everyone's responsibility
- 6.6: Debate → responsibility is contested, not obvious

The lesson introduces the **Builder's Responsibility Triangle** — a practical framework for distributed accountability — and grounds it in the concept of **responsible disclosure**: what you do when you find a problem in a system you didn't build.

The final 10 minutes bridge explicitly to Module 7 and the AI Expo.

---

## 🎯 Learning Objectives

By the end of this lesson, students will be able to:

1. Describe the three vertices of the Builder's Responsibility Triangle (builder, user, platform) and the responsibilities of each.
2. Apply the responsible disclosure concept to a specific case: what to do when you discover a problem in a system you didn't build.
3. Evaluate their own OpenClaw agent using the Fairness Proposal framework.
4. Articulate what "responsible ownership" means for a system they built and intend to present publicly.
5. Name one commitment they'll make as an AI builder — and one they'll hold others to as an AI user.

---

## 📋 Materials & Setup

| Item | Notes |
|------|-------|
| Builder's Responsibility Triangle poster | Display or print — `responsibility-triangle-diagram.md` |
| Fairness Proposal worksheet | Print one per student — `fairness-proposal-worksheet.md` |
| Module 6 exit ticket collection | Gather all journal prompts/exit slips from 6.1–6.6 |
| Student OpenClaw agents | Accessible during Fairness Proposal activity |
| Chart paper + markers | For collaborative fairness proposals |
| Timer | For timed activities |

**Teacher Prep:**
- Read all prior lesson exit tickets/journals if possible — this gives you the ability to reference specific student moments in the closing
- Prepare your own "responsible disclosure" example — ideally something from the real world announced this year
- Know what Module 7 looks like: the AI Expo format, timeline, and expectations (see M7 README)
- Reserve the final 10 minutes. Do not let discussion run over into the M7 bridge — it is essential.

---

## ⏱️ Lesson Outline

### Opening: Looking Back, Looking Forward (5 min)

**Display the Module 6 arc on screen:**

| Lesson | Big Question |
|--------|-------------|
| 6.1 | What does your AI believe? |
| 6.2 | What harm has AI bias caused? |
| 6.3 | What does it feel like to be inside a surveillance system? |
| 6.4 | What can be inferred from your data? |
| 6.5 | How does AI-generated deception spread? |
| 6.6 | Who wins when we argue about AI? |
| **6.7** | **Who is responsible?** |

Read it together. Ask:
- *"Which lesson hit hardest for you?"*
- *"Where did you leave a question unanswered?"*

Take 3–4 responses. Honor them briefly. This is their module — give it back to them.

---

### Segment 1: The Builder's Responsibility Triangle (10 min)

**Direct instruction + discussion:**

Display the triangle. Three vertices:

```
           [BUILDER]
          /         \
         /           \
    [USER]  ——————  [PLATFORM]
```

**The Builder:**
- Created the system
- Made design choices (what data, what objective, what constraints)
- Responsible for: transparency, documentation, bias auditing, honest communication of limitations
- Examples: OpenAI building GPT, you building your OpenClaw agent

**The User:**
- Operates the system in a specific context
- Made deployment choices (how to use it, for what purpose)
- Responsible for: appropriate use, understanding limitations, not outsourcing judgment
- Examples: A police department using PredPol, you using your agent to answer your friend's questions

**The Platform:**
- Provides the infrastructure and terms of use
- Controls distribution and amplification
- Responsible for: moderation policies, transparency reports, surfacing limitations, liability when things go wrong
- Examples: App stores hosting AI tools, social media platforms hosting AI-generated content

**Key insight:** Real-world AI harms almost always involve all three. The question is not "who is responsible?" but "how is responsibility distributed — and who bears the consequences when it fails?"

**Discussion (3 min):**
- *"Go back to the Robert Williams case from 6.2. Which vertex is most responsible — the company that built the facial recognition, the police department that used it, or the city that contracted it?"*
- *"Is there a fourth vertex? What about the government? The public? The person harmed?"*

---

### Segment 2: Responsible Disclosure (8 min)

**Concept introduction:**

Responsible disclosure is a principle from cybersecurity, now applied more broadly:

> **If you find a problem in a system — especially a system you didn't build — you have choices. What you do with that information matters.**

The three options:
1. **Ignore it** — do nothing, hope someone else finds it
2. **Go public immediately** — announce the problem before the builder can fix it (can cause harm)
3. **Responsible disclosure** — notify the builder privately, give them time to fix it, then go public if they don't

The responsible disclosure timeline:
1. Find the problem
2. Document it clearly
3. Contact the organization that owns the system
4. Give them a reasonable window (security standard: 90 days)
5. If no response or no fix: go public, escalate to regulators, or contact journalists

**Real-world example:** Algorithmic Justice League's process when they find discriminatory patterns in a facial recognition system.

**Scenario discussion (4 min):**

> *"You're testing your OpenClaw agent and you discover that when you ask it about job candidates with certain names, it consistently assigns lower confidence scores to candidates with traditionally Black or Latino names. You didn't design that. The underlying model did it. What do you do?"*

Take responses. There's no single right answer. Guide toward:
- Document it clearly
- Notify Anthropic (the model provider) with evidence
- Consider whether to keep using the system in that context
- Be honest with users about the limitation in the meantime

---

### Segment 3: Fairness Proposal Activity (15 min)

**Setup:**

> *"Now it's your turn. You're the builder. You built an OpenClaw agent. You've spent five lessons learning how AI systems can cause harm. What commitments are you making for yours?"*

**The Fairness Proposal worksheet guides students through:**

**Part A — Audit Questions (5 min, individual):**
Students answer 4 questions about their own agent:
1. What domain does my agent operate in? Who does it serve?
2. Where in my agent's design or knowledge base could bias enter?
3. What's the worst-case harm if my agent gives a wrong or biased answer?
4. What limitations have I disclosed (or should disclose) to users?

**Part B — Commitments (5 min, individual):**
Students write 3 builder commitments:
1. I will [do X] to reduce the risk of [specific harm]
2. I will tell users [Y] so they can make informed decisions about when to trust my agent
3. If I discover [Z problem], I will [take this specific action]

**Part C — Partner Review (5 min, pairs):**
Exchange worksheets. Partner answers:
- *"Does this commitment actually address the risk?"*
- *"Is this commitment specific enough to hold yourself to?"*
- *"What's missing?"*

---

### Closing: The Bridge to Module 7 (10 minutes — DO NOT SKIP)

**This segment is mandatory. Do not let time run over earlier sections.**

**Transition (1 min):**

> *"For six weeks, you've been auditors. You've investigated bias, felt surveillance, traced your data, evaluated deepfakes, and argued. You've done the hard work of understanding what it means when AI systems go wrong.*
>
> *Starting in Module 7, you shift roles. You're not just a builder anymore — you're a presenter. You're going to the AI Expo."*

**What the AI Expo is (2 min):**

Briefly describe Module 7's capstone (adjust to match actual M7 structure):
- Students present their OpenClaw agent to an audience (peers, family, community, or judging panel)
- They demonstrate what it does, what they built, and how they thought about it
- They're expected to answer hard questions

**The Module 6 Connection (5 min):**

> *"You've spent this module auditing and governing your agent. Now you'll present it to the world. What does responsible ownership look like in public?"*

Discussion questions for this segment:
- *"What would you tell someone who asks: 'Could your agent cause harm?'"*
- *"What does it mean to present an AI system responsibly — not just showing what it can do, but showing that you've thought about what it shouldn't do?"*
- *"If someone at the Expo asks you about bias in your agent — and you found something in the Bias Testing Workshop — what do you say?"*

**The Builder's Oath (2 min):**

Optional, powerful closing ritual. Read together:

> *"I built this. I know what it does. I know what it can't do. I know where it might fail.*
>
> *I won't pretend it's perfect. I won't pretend I've thought of everything.*
>
> *I commit to staying curious about the harms I haven't seen yet.*
>
> *I commit to being honest with the people who use what I build.*
>
> *I commit to doing something when I find a problem — not just moving on."*

Students can adapt this. It's not a contract — it's a commitment they make to themselves.

---

## 💬 Discussion Questions

**Warm-up level:**
- If you find a bug in an app and don't report it, did you do anything wrong?
- What's the difference between "responsible" and "liable"?

**Core discussion:**
- The Builder's Responsibility Triangle puts responsibility on builders, users, and platforms. Who is missing from that triangle? Who else should be accountable?
- Is there such a thing as an AI system that's "good enough" — where the builder's responsibility is done? Or is it ongoing?
- What would it look like to build an AI system and be honest about its limitations — in the real world, where companies have financial incentives not to be?

**Extension / advanced:**
- What is the difference between responsible disclosure in cybersecurity and whistleblowing? When does one become the other?
- What legal frameworks exist for holding AI builders accountable? What's missing?
- Design a "Responsible AI Certification" — what would a company need to demonstrate to receive it?

---

## 📊 Slide Outline

*(See `slides-outline.md` for full slide notes)*

1. **Title:** Lesson 6.7 — The Builder's Responsibility
2. **Module 6 Arc** — Six lessons, six questions
3. **The Builder's Responsibility Triangle** — Diagram
4. **Vertex 1: The Builder** — Responsibilities and examples
5. **Vertex 2: The User** — Responsibilities and examples
6. **Vertex 3: The Platform** — Responsibilities and examples
7. **Case Study Revisit** — Robert Williams triangle
8. **Responsible Disclosure** — Definition and timeline
9. **Responsible Disclosure Scenario** — What do you do with the bias you found?
10. **Fairness Proposal Instructions** — Worksheet walkthrough
11. **Builder Commitments** — The three commitment types
12. **Bridge: The AI Expo** — Module 7 preview
13. **The Question** — Responsible ownership in public
14. **The Builder's Oath** — Closing ritual
15. **Exit Ticket** — One commitment

---

## 🎯 Differentiation

### Support Strategies

| Need | Strategy |
|------|----------|
| Students who feel overwhelmed by responsibility | Normalize: "Responsibility doesn't mean you'll be perfect. It means you stay engaged." |
| ELL students | Fairness Proposal can be completed in L1; translate key terms |
| Students whose agents are less developed | Focus the audit on what the agent does do — even simple agents have design choices |
| Students who resist the "builder" framing | Offer the "user's responsibility" lens — what do you owe to people who use tools you deploy? |

### Extension Strategies

| Need | Strategy |
|------|----------|
| Advanced learners | Research "algorithmic impact assessments" — how companies like Microsoft and Google approach pre-deployment auditing |
| Policy-minded students | Design a responsible disclosure policy for an AI company — what would it require? What are the incentives for companies to comply or not? |
| Research-curious students | Investigate the Algorithmic Justice League's model for responsible disclosure of discriminatory AI systems |
| Capstone-ready students | Start drafting their AI Expo presentation with a dedicated "what could go wrong" section based on the Fairness Proposal |

---

## ⚠️ Facilitation Notes

**The Builder's Oath is optional but powerful.** Some students will resist the ritual framing. That's fine — let them modify it or skip it. The ones who engage fully often find it the most memorable moment of the module. Don't force it, but don't skip the opportunity either.

**The final 10 minutes are not optional.** The bridge to Module 7 is architecturally important: students need to carry their Module 6 learning into the Expo context. If you're running low on time, cut earlier segments (the Triangle discussion can be shortened; the Fairness Proposal can be homework). But the M7 bridge must happen in class.

**Be honest with students about what you don't know.** This lesson deals with contested questions — legal liability for AI, the limits of responsible disclosure, what "fairness" means for AI systems. You don't need to have definitive answers. Model intellectual humility: *"I don't know the answer to that — but here's what the experts are saying, and here's the question I'd still want answered."*
