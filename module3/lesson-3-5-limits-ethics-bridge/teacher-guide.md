# Teacher Guide — Lesson 3.5
### Limits of Reasoning AI + Ethics Bridge

**For educator use only. Not for student distribution.**

---

## Why This Lesson Matters (And Why It's Delicate)

This lesson is the emotional and intellectual hinge of Module 3. Students have spent four lessons building real skills — they're proud of their work. Now we're asking them to examine that work critically and connect it to real-world harm.

That's productive discomfort. It's also potentially painful discomfort, depending on who's in your room.

**The case studies in this lesson involve:**
- Racial bias in the criminal justice system (COMPAS)
- Gender discrimination in hiring (Amazon)
- Economic and racial discrimination in financial services (credit scoring)

Some of your students or their families may have direct experience with one or more of these systems. A student's parent may have been denied a loan. A student may have an incarcerated family member whose sentence was affected by an algorithm. A student may have watched a parent's job application disappear into an automated system.

This isn't abstract. **Teach it like it isn't abstract.**

---

## Before You Teach This Lesson

### Know Your Room

Before the lesson, ask yourself:
- Do I have students with incarcerated family members?
- Do I have students who have experienced housing or lending discrimination?
- Do I have students who are recent immigrants, undocumented, or from families that distrust institutions?
- Are there students who are likely to feel targeted or singled out by the COMPAS discussion?

You don't need to restructure the lesson based on this — but knowing your room lets you facilitate more carefully.

### Read the Case Studies Yourself First

The case studies are written for students (approximately 9th–10th grade reading level). Read them the night before. Know the facts cold. Students will ask follow-up questions.

### Prepare for the Uncomfortable Question: "Is AI racist?"

Students will ask some version of this. It's a good question. Here's a framework for answering it:

> "AI systems can produce racially discriminatory outcomes — and that's real harm, regardless of whether the AI 'intended' it. Whether we call that racism is partly a question of definition. What we can say clearly: these systems caused harm, those harms fell disproportionately on people of color, and the people who built these systems had a responsibility to check for that."

Avoid: "AI can't be racist because it doesn't have feelings." This closes down the conversation and misses the point — impact matters regardless of intent.

---

## Facilitation Notes by Lesson Segment

### Warm-Up: "Has AI Ever Lied to You?" (5 min)

**Common responses and how to handle them:**
- Students share funny examples (AI told me the capital of Australia is Sydney, etc.) → Great! Use these to build comfort before moving to heavier material.
- Students share no examples → Try: "Has anyone used ChatGPT or a similar tool for homework and wondered if it was right?" Most will have.
- One student dominates → Gently redirect: "Let's hear from someone who hasn't shared yet."

**Do NOT open with the heavy case studies.** The warm-up exists to build a low-stakes foundation for talking about AI being wrong. Don't skip it.

### Case Study Jigsaw (15 min)

**The jigsaw format (each group becomes "experts" on one case) is intentional.** It:
1. Keeps the pace moving — groups don't read all three cases
2. Creates genuine information sharing (students actually teach each other)
3. Prevents any one case from dominating the emotional weight of the lesson

**If a student in a COMPAS group has personal connection to incarceration:**

- Don't call on them unless they volunteer
- If they share something personal: "Thank you for sharing that. It's a reminder that these aren't just statistics." Then redirect to the systemic question: "What does your experience tell us about how this system was supposed to work vs. how it actually worked?"
- After class, check in privately

**If a student says "well, if they didn't commit crimes they wouldn't be in this situation":**

This deflection is common. Don't argue about individual behavior. Redirect to the statistical claim:

> "That's a fair thing to bring up. But here's the data problem: COMPAS gave two people with *identical* criminal histories different scores, and the difference correlated with race. We're not debating whether people should face consequences for crimes. We're asking: if two people have the same history, should they get different predictions? Why might that happen?"

**For the Amazon case — if a student says "companies should be able to hire whoever they want":**

> "That's a real debate in law and policy. But here's the specific question: if a company *didn't intend* to discriminate, but their AI *did* discriminate — should they be held responsible? And: was the AI actually measuring what they wanted it to measure (likely to succeed), or was it measuring something else (resembles past hires)?"

### Why Reasoning AI Fails — Mini-Lecture (10 min)

Keep this tight. The three concepts (GIGO, proxy variables, feedback loops) need to land before the audit.

**Most common student confusion:**
- "But the AI didn't know it was being biased" → Right. That's exactly the point. Harmful outcomes don't require harmful intent. Systems can cause harm by accident, and that doesn't make the harm less real.
- Conflating "biased" with "inaccurate" → Clarify: "An AI can be accurate on average and still be systematically unfair to a specific group. Accuracy and fairness are not the same thing."

**The feedback loop is the hardest concept.** Draw it on the board as an actual loop with arrows. Use the policing example. Check understanding by asking: "Where does the loop start? Where does it end?"

### Skill Audit (10 min)

**This is the most emotionally variable part of the lesson.**

Some students will love this — they'll find sharp, real problems in their own work and feel like engineers.

Some students will feel defensive — they worked hard on their skill and don't want to criticize it.

Some students may feel anxious — especially if their skill involves sensitive data or if they realize it could affect people in ways they hadn't considered.

**Framing to use before handing out the audit:**

> "This is not about whether your skill is good or bad. Every skill has limitations. The engineers who built COMPAS weren't bad people — they just didn't ask these questions carefully enough. You're going to ask them. Finding a problem in your own work is a sign of good engineering, not failure."

**If a student can't find anything wrong with their skill:**

Prompt them: "What happens if someone inputs something your skill wasn't designed for? What's the weirdest possible input? Does it fail gracefully?" Almost every skill has something in Test 4.

**If a student finds a serious problem and seems distressed:**

"That's a really important insight. Noticing this now, before anyone is harmed, is exactly why we do this. In Module 6, you'll have the chance to fix it."

---

## How to Handle Students Who Feel Targeted or Defensive

### The student who is Black and feels the COMPAS discussion is about them

If a Black student (or any student from a marginalized group) seems withdrawn, upset, or disengaged during the COMPAS discussion:

- Don't force participation
- Don't make their identity the center of the discussion ("What do you think, Marcus, since this might affect you?") — this is othering
- Do acknowledge the weight: "I want to name that this isn't just abstract policy discussion. These are decisions that affected real people and real families. If anyone wants to talk more about this after class, I'm here."

**After class:** Check in privately. Listen without fixing. Ask how they're doing. Offer to talk more or refer to a counselor if needed.

### The student who gets defensive about AI ("This is why we shouldn't use AI at all")

This is actually engagement — lean into it:

> "That's a real position that some researchers take. What would the world look like if we used no AI in hiring or criminal justice? What would replace it? Are those alternatives necessarily fairer?"

### The student who defends the AI ("It's just math, it's objective")

Gently challenge this — it's a very common and important misconception:

> "Math can encode human decisions. If I train a math model on 100 human decisions, and 70 of those were biased, what does my math model learn? Is the output objective?"

### The student who says "this is just politics"

> "Whether an AI produces racially disparate outcomes is an empirical question — ProPublica measured it. Whether that's acceptable is a values question. We can separate those. Today we're mostly dealing with the empirical question: what happened, and why?"

---

## Sensitive Topic Framework (General)

When navigating any heated moment in this lesson:

1. **Validate the emotion:** "That's a real reaction and it makes sense."
2. **Return to the data:** "What does the evidence say happened?"
3. **Separate intent from impact:** "The people who built this may not have intended harm. Did harm still occur?"
4. **Separate individual behavior from systemic patterns:** "We're not saying every person or company is bad — we're asking about patterns across thousands of decisions."
5. **Maintain psychological safety:** No student should feel their identity is a problem to be solved.

---

## Deeper Resources

### For Teachers

- **"Weapons of Math Destruction"** by Cathy O'Neil — accessible intro to algorithmic bias; great for teacher prep, readable enough to assign excerpts to advanced students
- **"Race After Technology"** by Ruha Benjamin — deeper sociological framing; excellent for your own background
- **"The Alignment Problem"** by Brian Christian — broader AI safety context; helps with Module 6 prep
- **AI4K12 Big Idea 5** — societal impacts of AI; curriculum-aligned framework: [https://ai4k12.org](https://ai4k12.org)
- **ProPublica's COMPAS investigation** (2016): [https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing](https://www.propublica.org/article/machine-bias-risk-assessments-in-criminal-sentencing)
- **Reuters investigation on Amazon hiring AI** (2018): [https://www.reuters.com/article/us-amazon-com-jobs-automation-insight-idUSKCN1MK08G](https://www.reuters.com/article/us-amazon-com-jobs-automation-insight-idUSKCN1MK08G)

### For Students (Extension / Enrichment)

- **"Coded Bias" (2020 documentary)** — Netflix; about Joy Buolamwini's Algorithmic Justice League and facial recognition bias; highly engaging for students
- **AI Incident Database** — real-world catalog of AI failures: [https://incidentdatabase.ai](https://incidentdatabase.ai)
- **MIT Media Lab — Gender Shades project** — Buolamwini's original research: [http://gendershades.org](http://gendershades.org)
- **Algorithmic Justice League** — Buolamwini's organization; student-friendly resources: [https://www.ajl.org](https://www.ajl.org)

### For Students Who Want to Go Deeper on Criminal Justice AI

- **The Sentencing Project** — policy organization focused on criminal justice reform and data: [https://www.sentencingproject.org](https://www.sentencingproject.org)
- **Electronic Frontier Foundation — AI in criminal justice**: [https://www.eff.org/issues/ai](https://www.eff.org/issues/ai)

---

## Connecting to Module 6

At the end of this lesson, students should leave with:
1. **A concrete artifact** (the audit) that identifies specific risks in their own skill
2. **An emotional hook** — they've seen real harm; they've examined their own work through that lens
3. **A forward-looking question** — "How do we fix this?"

When you introduce Module 6, explicitly reference this lesson:

> "Remember when you audited your own skill in Lesson 3.5? You found the cracks. Module 6 is where you patch them. We're going to build actual guardrails — not just think about what could go wrong, but implement changes that make your skill safer and fairer."

The through-line: students built something → they examined it critically → they'll make it better. This arc is the whole point.

---

## Differentiation

### For students who finish the audit early:
- Ask them to write a "limitation statement" for their skill — one paragraph they could include in documentation to be transparent about what their skill doesn't handle well
- Ask them to imagine they're the person harmed by their skill: what would they want to know? What recourse would they want?

### For students who struggle with the audit:
- Work through Test 4 (confident wrongness) together — it's the most concrete
- Ask: "What's the weirdest thing someone could ask your agent to do? What would happen?"

### For advanced students:
- Assign ProPublica's COMPAS article as reading
- Ask them to critique the ProPublica methodology (Northpointe's rebuttal raised some valid statistical points — this is a great intro to "what does fair even mean in a statistical sense?")
- Ask them to research the CFPB's 2023 guidance on AI in lending

---

## A Note on Your Own Limits

This lesson may bring up things you don't have perfect answers to. That's okay.

If a student asks something you don't know: "That's a great question I don't have a solid answer to — let's look it up together, or I'll find out before next class."

If a student shares something painful about their family's experience: you don't need to fix it. Listen, acknowledge, and offer to connect them with support resources if appropriate.

You don't have to be an expert on algorithmic fairness to teach this lesson well. You just have to take the questions seriously.
