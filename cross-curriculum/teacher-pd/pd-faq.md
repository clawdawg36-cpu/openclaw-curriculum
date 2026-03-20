# Teacher FAQ
## 20 Most Common Teacher Questions — OpenClaw AI Curriculum

> **How to use this document:** These are the questions teachers ask most during PD and in the first weeks of teaching the curriculum. Answers draw directly from the module teacher guides. References are included so you can read the full context when needed.

---

## Section A: Getting Started and Technical Setup

---

### FAQ 1: I'm not a tech person. Can I really teach this curriculum?

**Yes.** This is the most common question, and the answer is unequivocally yes.

The most important concepts in this curriculum — what makes a good knowledge base, what kinds of AI systems might cause harm, how to design an agent with a clear purpose — are not programming concepts. They are design and reasoning concepts. You don't need to write code to facilitate excellent thinking about these ideas.

What you *do* need: to try the tools yourself before teaching, to read the teacher guides in full before each module, and to be comfortable saying "I don't know — let's find out together." Students respond to authentic curiosity. Confident-but-wrong is worse than curious-and-honest.

The scripts in each lesson plan are tested and usable verbatim. The teacher guides are written specifically for educators without CS backgrounds.

*Reference: Module 3 Teacher Guide, Section 4 (Teacher Prerequisites)*

---

### FAQ 2: What if OpenClaw breaks during a lesson?

Every module has an offline path. Here's the short version:

- **M1–M3 labs:** Students can complete skill design and knowledge base work on paper — write SKILL.md by hand, test via partner role-play where one person plays the agent
- **M2 (Teachable Machine):** Use the Feature Extraction Game from printed cards
- **M4 (Training data):** Data sorting and classification activities by hand
- **M6 (Bias audit):** The audit prompts and worksheet work on any device; if agents are down, students can audit a shared demo agent or use a pre-recorded session
- **M7 (Expo):** Screenshare recorded demos as a fallback; the rubric still applies

**Most important:** Have your IT contact's information ready. Know what port OpenClaw runs on and whether your school network allows it. Test this *before* your first session — not the day of.

*Reference: Module 3 Teacher Guide, Section 4 (IT Checklist); Module 7 Teacher Guide tech-contingency-guide*

---

### FAQ 3: How much time does setup take? Can I do this in a week?

A conservative estimate:
- First-time OpenClaw setup: 30–60 minutes (including reading docs)
- Trying each tool (Teachable Machine, ML4Kids, Hugging Face): 30 minutes each
- Reading each module's teacher guide before teaching it: 45–90 minutes

**Don't try to do all of this in a week.** The best approach:
1. Set up OpenClaw and deploy a simple agent *now* — before anything else
2. Work through each module's teacher guide about 1 week before you teach it
3. Try the lab yourself before students do — always

The one non-negotiable: **try the lab yourself before students do.** Teachers who don't do this are surprised by exactly what students get stuck on. Teachers who do it are prepared.

*Reference: Module 3 Teacher Guide, Section 4 (Teacher Prerequisites)*

---

### FAQ 4: Do all students need their own OpenClaw account? What does IT need to set up?

Students each run their own OpenClaw instance — this is what makes the curriculum work. Each student's agent has their own personality, knowledge base, and configuration.

**What IT needs to do:**
- Pre-install OpenClaw on student devices (or provide instructions for student self-install)
- Confirm that localhost ports (typically 3456) are accessible on the school network
- Confirm npm packages can be installed (or pre-install them)
- Test that external URLs used in some skills (e.g., `wttr.in` for the weather skill) aren't blocked

**Run this test before your first class:**
```
curl https://wttr.in/London?format=3
```
If you see weather data: you're fine. If you see an error: coordinate with IT on an alternative or use a skill that doesn't require external URLs.

Submit your IT request at least two weeks before the course starts.

*Reference: Module 3 Teacher Guide, Section 4 (IT Checklist)*

---

### FAQ 5: What happens when a student's API key expires or they run out of credits?

This is a real issue to plan for. Typical scenarios and solutions:

- **School provides a shared API key:** Simplest approach — one key in the class config, rotated as needed. Means students can't take their agents home, but avoids individual billing issues.
- **Students use individual accounts:** More autonomy, but requires monitoring usage. Most AI providers have free tiers sufficient for a single student for one course.
- **Mid-course expiration:** Have a backup shared-access URL ready so affected students can continue with a demo agent while the issue is resolved.

**Before the course:** Clarify with your school whether individual or shared API access is the policy. This is an IT/admin decision, not a curriculum one.

---

## Section B: Content and Concepts

---

### FAQ 6: I don't fully understand how neural networks work. How do I teach M4?

You don't need to understand the math of backpropagation to teach M4. What you need:

**The conceptual model (say this):**
> "A neural network is a system that adjusts itself based on feedback. You show it examples. When it gets something right, you reinforce the patterns that led there. When it gets something wrong, you adjust. After thousands of examples, the adjustments add up to a system that's gotten pretty good at the task."

**The analogy that works:**
> "It's like learning to catch a ball. You didn't calculate trajectory and apply physics. You threw, missed, adjusted, threw again. Your arm learned from feedback. The network does the same thing — with math."

The Teachable Machine is your best friend here: students can *see* the training happening. When you add more images and accuracy goes up, the concept is visible.

What to say when you get technical questions you can't answer: "Great question. Let's look that up together." Then model how to look it up.

*Reference: Module 4 Teacher Guide; 3Blue1Brown Neural Networks playlist (pd-resource-list.md)*

---

### FAQ 7: What's the difference between Teachable Machine and ML4Kids? When should I use each?

Both train classification models. The key differences:

| | Teachable Machine | ML4Kids |
|---|---|---|
| Account required | No (Google account optional) | Yes |
| Output | TensorFlow.js (browser-ready) | Scratch, Python, App Inventor |
| Best age | Middle and High School | Elementary through High School |
| Strongest use case | M2 (image perception), M4 (visual training) | M4 (multi-platform training), Scratch integration |
| Offline | No | Limited |

**Use Teachable Machine as your primary tool** for M2 and M4. It's the most accessible and produces the most immediate visual feedback.

**Use ML4Kids as a backup** — and as an alternative if students are more comfortable with Scratch.

*Reference: PD Session 2 materials; pd-resource-list.md, Section 4*

---

### FAQ 8: What's the actual difference between a "skill" and what the AI already knows?

This is a great conceptual question — and Lesson 3.1 is designed to answer it through experience rather than explanation.

**The short version:**
The underlying AI model knows a lot — trained on billions of text documents. A skill adds *your specific, curated knowledge* — things that no general training data would have: your school's schedule, a specific bird species in your region, the house rules for a game you invented.

**The analogy that lands:**
> "The model knows about libraries in general. Your skill tells it about *this* library — where the graphic novels are, when it closes, what the late fee is. General knowledge + specific knowledge = a useful agent."

Why students build skills by hand in M3 (rather than just uploading a PDF): the act of deciding what goes in and what stays out is itself a lesson in representation and design. See M3 Teacher Guide Section 3 for the full "through-line bridge" framing.

*Reference: Module 3 Teacher Guide, Sections 1 and 3*

---

### FAQ 9: Can students build skills about inappropriate topics?

Common examples: weapons information, content that targets specific people, adult topics.

**Standard to apply:** The skill must be demoable to the full class. If a student can't present it to the group without you being concerned, it doesn't meet the standard.

**In practice:** Most students, when asked "who is the audience for this skill?" and "could you show this to the class?", self-moderate. The assignment framing — designing for a real use case — tends to channel students toward appropriate topics.

**For edge cases:** Redirect with curiosity, not prohibition. "What problem does this solve? Who would actually use it?" Often the answer to these questions either legitimizes the topic or exposes that there isn't a real use case.

*Reference: Module 3 Teacher Guide, Section 11 (Teacher FAQ)*

---

### FAQ 10: How do I explain "bias" in AI without making it feel abstract?

The word "bias" activates defensiveness ("are you calling me biased?"). The reframe that works:

> "We're not talking about individual prejudice. We're talking about pattern. When an AI learns from data that reflects historical exclusions — like a decade of resumes from a company that mostly hired men — it learns that pattern. No one intended bias. The math faithfully encoded what was in the data."

Then show, don't tell. The word embedding demonstration in M6 Lesson 6.1 is the strongest single activity for this: students *see* that a word association algorithm produces gender-biased analogies because that bias was in the training text.

**What not to say:** "The algorithm is racist." This is imprecise and derails the analytical conversation. What to say instead: "The algorithm produces racially disparate outcomes. Let's look at the mechanism."

*Reference: Module 6 Teacher Guide, Sections 4 and 6 (Language to Use and Avoid; Lesson 6.1 facilitation)*

---

## Section C: Facilitation

---

### FAQ 11: A student became very upset during an ethics discussion. What should I have done?

First: a student getting emotionally activated by content about real injustice is not a classroom management failure. It's a sign the content is landing.

In the moment:
1. Don't push for continued participation. Offer a written reflection alternative.
2. Don't make their reaction the center of the discussion — redirect gently to the content.
3. If they need to step out briefly: allow it.

After class:
- Check in privately: "How are you doing? Was it okay to share that?"
- Assess whether a counselor referral is appropriate — not because something is wrong, but because the student may benefit from a dedicated space to process.
- If the reaction suggested a safety concern, follow your school's protocol.

**The general principle:** Module 6 content — bias in criminal justice, surveillance, hiring discrimination — directly intersects with some students' lived experiences. Their reactions are not obstacles to the lesson. They are the lesson becoming real.

*Reference: Module 6 Teacher Guide, Sections 4 and 8*

---

### FAQ 12: A student disclosed something personal during a lesson. What do I do?

The five-step framework from the M6 Teacher Guide:

1. **Pause and acknowledge.** "Thank you for sharing that. That matters." Don't rush past it.
2. **Don't make the student the lesson's example.** Don't reference them again in the discussion without explicit consent.
3. **Don't analyze the disclosure.** Your job in the moment is to hold space, not to assess whether the system that affected them was or wasn't biased.
4. **Bridge carefully.** "What you're describing is something researchers have documented. You're not alone in this." Validates, contextualizes, and offers some hope without minimizing.
5. **Protect them from the spotlight.** Redirect the conversation to the content without erasing the disclosure.

**Three types of disclosure** and how to handle them:
- **Safety concern** → immediate protocol; do not promise confidentiality
- **Emotional processing** → acknowledge, offer written alternative, private follow-up after class
- **Information-sharing** (student just tells you something) → receive warmly; don't over-intervene

*Reference: Module 6 Teacher Guide, Section 8; Module 3 Teacher Guide, Section 9*

---

### FAQ 13: A student said "math can't be racist." How do I respond?

This is one of the most common and important classroom moments in M6. The response that works:

> "You're right that the math itself is neutral. The question is what the math is doing. If I train a system on 10 years of hiring decisions from a company that rarely hired women, the math will faithfully learn the pattern: male applicants are more often hired. The math is accurate — about the past. But does 'accurate about the past' mean 'should shape the future'?"

The key move: don't say the algorithm is biased as if it has intent. Say it *produces biased outcomes* and explain the mechanism. The mechanism is what students need to understand — and it's convincing.

Then ask: "So if the math is working correctly and still producing disparate outcomes — what would you change?"

*Reference: Module 6 Teacher Guide, Section 6 (Lesson 6.1 facilitation, Common Misconceptions)*

---

### FAQ 14: A student says "we're just students — our agents aren't real, why does any of this matter?"

Two answers, use both:

**The skill answer:**
> "The habits you build writing a usage policy for a small project are the habits that shape how you think about big projects. Engineers at major AI companies make the exact same decisions you're making this week. The scale is different; the decision structure is identical."

**The now answer:**
> "Your agent is running right now. If someone uses it and something goes wrong — and we've seen in the bias audit that agents can produce surprising outputs — it matters. Even at classroom scale, you're designing something that interacts with people."

The underlying point: ethics as a last step ("after we ship, we'll think about harm") is the standard workflow that has produced most documented AI harm. M6 teaches ethics as a design constraint — built in, not bolted on.

*Reference: Module 6 Teacher Guide, Section 1 (Big Ideas); Module 6 Teacher Guide, Section 11 (Student Questions)*

---

### FAQ 15: The discussion is getting heated and going nowhere productive. How do I redirect?

A few moves that work:

**Anchor to evidence:**
> "Let's come back to what the research actually shows. [Student name], what did the ProPublica analysis find? [Another student], what's the strongest argument against that finding?"

This keeps it analytical. Heated discussions usually drift from evidence to opinion; returning to evidence resets the frame.

**Name the disagreement:**
> "I'm hearing two different things. [Student A] is arguing that equal inaccuracy means equal harm. [Student B] is arguing it doesn't. That's actually a real debate among researchers. Let's sit with the tension instead of resolving it — because it doesn't resolve cleanly."

This validates both positions without adjudicating.

**Use the parking lot:**
> "That's an important question and it deserves more than 2 minutes. I'm writing it on the board and we're coming back to it next class."

*Reference: Module 6 Teacher Guide, Section 6 (facilitation moves across lessons)*

---

## Section D: Assessment

---

### FAQ 16: How do I grade the labs? What if a student's code doesn't work but they clearly understood the concepts?

The general principle across all module rubrics: **weight conceptual understanding and design decisions more heavily than technical perfection.**

For M3 (Build Your First Skill lab):
A student with a thoughtfully designed, well-reasoned skill that has a minor formatting error has demonstrated more understanding than a student who copy-pasted a template that works.

For M6 (Ethics lab):
The deliverables are mostly writing: a bias audit report, a usage policy, a documented guardrail. These are assessable on clarity, specificity, and honest self-assessment — not on whether the guardrail syntax is perfect.

For M7 (AI Expo):
The rubric weights Technical Completeness at 30% — but Clarity of Explanation (25%), Reflection Quality (15%), and Q&A (10%) add up to 50%. A student who can't make a feature work but can honestly and insightfully explain what went wrong and what they'd fix can still score very well.

*Reference: Module 3 lab rubric; Module 6 rubric-key-lab.md; Module 7 ai-expo-presentation-rubric.md*

---

### FAQ 17: Can guests at the AI Expo give grades? How does guest evaluation work?

Guests don't give grades. Guests use the **Audience Evaluation Card** (module7/assessments/audience-evaluation-card.md), which is a simplified rating form that captures: overall impression, most impressive element, and questions they'd ask.

Guest ratings feed into the **Student Choice Awards** — peer and audience recognition separate from the official grade. These are meaningful to students and worth doing, but they don't affect the rubric-based score.

**The official grade comes from you**, using the M7 AI Expo Presentation Rubric. Brief this to guests clearly when they arrive: "Your job is to be a curious, enthusiastic audience. Ask them questions. Rate them on this card. The grade is handled separately by the teacher."

The best thing to tell guests: "Ask them to explain it to you like you've never heard of AI." This generates the best conversations and the best rubric evidence for Clarity of Explanation.

*Reference: Module 7 ai-expo-presentation-rubric.md; audience-evaluation-card.md; student-choice-awards.md*

---

### FAQ 18: What do I do when a student's agent barely works for the Expo?

Four principles from the M7 Teacher Guide:

1. **Scoping down is not giving up.** An honest, thoughtful presentation of a minimal agent can score higher on Reflection Quality than a dishonest presentation of a non-working one.

2. **Screenshots and video fallback are legitimate.** The rubric's Live Demo Execution category explicitly includes "graceful handling of technical fallback" as a scorable skill — not a deficit.

3. **"What I would build next" is a deliverable.** Students who can articulate specifically what's missing and why, and what they'd do to fix it, are demonstrating exactly the kind of reflection the rubric rewards.

4. **You saw this student for 7 modules.** Your holistic assessment of their growth across the whole course is legitimate and valuable. The rubric is a floor, not a ceiling.

**In the week before the Expo:** Work with the student to find the most complete and honest story they can tell. Not the most impressive — the most complete.

*Reference: Module 7 Teacher Guide, Section 5 (Handling Incomplete Agents)*

---

## Section E: Classroom Logistics

---

### FAQ 19: Can I teach part of this curriculum without all 7 modules? What's the minimum viable version?

Yes — modules are designed to be modular (deliberately). If you're constrained by time, the most important through-line is:

**Minimum viable sequence (3–4 modules):**
- M1 (Identity + setup) — students build their agent
- M3 (Knowledge base) — students build something custom
- M6 (Ethics) — students make it responsible
- M7 (Expo) — students present it

This covers the build arc, the ethics arc, and the capstone. M2 (vision), M4 (learning), and M5 (language) deepen the experience but aren't required for the core narrative.

**If you're doing a single-module standalone:** M6 is the most self-contained for ethics/social studies integration. M3 is the most self-contained for a knowledge-representation/coding unit.

**What you lose without M4 (Learning):** The conceptual contrast between hand-curated knowledge (M3) and machine-learned knowledge (M4) is one of the curriculum's most powerful insights. If you skip M4, make sure students understand the distinction conceptually even if they don't do the training lab.

---

### FAQ 20: How do I handle students who are significantly more technically advanced than their peers?

Every module's teacher guide has a differentiation section with extension activities. Common patterns that work across the curriculum:

**Give them the "explain it simply" challenge:**
> "You clearly understand this technically. Can you explain it to someone who's never coded, in a way that actually makes sense to them?" This is legitimately harder than technical mastery and more valuable for AI careers — communication is the real skill.

**Make them a station helper:**
Students who sail through technical setup become the table's first point of escalation — before you. This reduces your load and gives them a real role. Brief them explicitly: "Your job isn't to solve it for them — it's to help them think through it."

**Extension paths by module:**
- M3: Explore the COMPAS fairness impossibility theorem — mathematical proof that multiple definitions of fairness cannot all be satisfied simultaneously
- M4: Run a full model training experiment with deliberately skewed data; document the results
- M6: Red-team other students' guardrails and write a formal security report
- M7: Write a "responsible AI card" for their agent — a public-facing summary of guardrails and usage policy in language a non-technical audience can understand

**What to avoid:** Don't let advanced students disengage. Don't let them make other students feel slow. Reframe their role as collaborative, not competitive.

*Reference: Each module's teacher guide, Differentiation section*

---

## Appendix: Where to Get Help

**Within this curriculum:**
- Each module's `teacher-guide/` directory — the primary resource
- `cross-curriculum/teacher-pd/pd-resource-list.md` — external reading and communities
- The AI4K12 community forums — `ai4k12.org/community/`

**When you need a quick answer:**
- r/CSEducation on Reddit
- The AI4K12 teacher Slack (link in their community page)
- Your PD facilitator's contact information (provided during the PD program)

**When something feels like an emergency:**
- Student safety disclosures → your school's counselor and mandatory reporting protocol
- Tech failures mid-class → IT contact (have this number in your phone before the course starts)
- Content that you're unsure is appropriate → department head, then curriculum lead

---

*Teacher PD FAQ — OpenClaw Curriculum | cross-curriculum/teacher-pd/*  
*Questions drawn from Module 3 Teacher Guide Section 11, Module 6 Teacher Guide Section 11, Module 7 Teacher Guide, and PD program experience.*
