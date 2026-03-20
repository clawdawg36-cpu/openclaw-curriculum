# Lesson 5.3 — Prompt Engineering Lab: The Olympics

**Module:** 5 — Give Your Agent a Voice  
**Duration:** 2 periods (~100 minutes total)  
**Grade Level:** 7–8 (adaptable for 9–12)  
**Prerequisites:** Lessons 5.1 & 5.2 (students have learned tokens/context windows and the three core prompting techniques)

---

## 🔗 Through-Line Connection

> *"You've learned the theory. You've practiced the techniques. Now you compete. The Prompt Engineering Olympics is your chance to prove mastery — not by writing code, but by writing prompts."*

This is the culminating lab for the prompting arc of Module 5. Students apply specificity, role-playing, few-shot prompting, and their own creativity in four structured competitive events. The competitive format drives engagement; the structured debrief after each event drives learning.

**Bridge to Lesson 5.4:** After today, students know how to prompt well. In 5.4, they apply that skill practically as "study partners" for their own academic work — and grapple with what that means for academic integrity.

---

## 🎯 Learning Objectives

By the end of this lesson, students will be able to:

1. Apply specificity, role-playing, and few-shot techniques under time pressure to a novel task.
2. Evaluate prompts (their own and others') for effectiveness using criteria they've learned.
3. Articulate what made a winning prompt work, connecting technique to outcome.
4. Reflect on their prompting strengths and what they'd improve.
5. Collaborate and compete productively in a structured lab format.

---

## 📋 Materials & Setup

| Item | Notes |
|------|-------|
| Computers / tablets | 1 per student (or 1 per team) |
| AI access | OpenClaw agent, ChatGPT, or Claude — consistent across class |
| Projector + timer | For displaying events and countdowns |
| Score tracking | Whiteboard tally or shared Google Sheet |
| Olympics Scorecard | Print or share (see `olympics-scorecard.md`) |
| Event cards | Print or display (see `event-cards.md`) |
| Optional: prizes | Stickers, bonus points, homework pass, etc. |

**Teacher Prep:**
- Set up a shared class doc where students paste their best prompt + output for each event
- Prepare judging criteria for each event (see Event Descriptions below)
- Decide team size: individual or pairs (pairs recommended for mixed-ability classes)
- Test AI access for all students before class
- Print or display all four event cards so students can reference them during the lab

**Room Setup:**
- Consider a "stadium" seating arrangement — pairs facing the front, easy to share screens
- Post a visible scoreboard on the board (team names + tally marks per event)

---

## ⏱️ Lesson Outline

### Period 1 (~50 min)

#### Opening: Welcome to the Prompt Engineering Olympics (5 min)

**Teacher intro (keep it hype):**
> *"Welcome, athletes, to the First Annual Prompt Engineering Olympics. Today you compete not with your muscles but with your minds — and your prompts. There are four events. Each event tests a different skill. Points are awarded for results, technique, and creativity. Let's get to it."*

- Introduce teams (or individual competitors)
- Post scoreboard on the board
- Explain: after each event, you'll share your best attempt and the class will vote / teacher will judge

---

#### Event 1: The Clarity Sprint (15 min)

**Format:** Individual or pair. 8 minutes to compete.

**Task:**
> *"Turn this terrible prompt into an amazing one — and prove it works."*

**The terrible prompt (displayed on board):**
> *"Write something about space."*

**Rules:**
- Students have 8 minutes to craft the best possible improved prompt
- They must run BOTH the original prompt AND their improved prompt
- They save both outputs and their improved prompt text

**Judging (5 min):**
- 2–3 volunteers share their improved prompts and outputs (paste into shared doc, read aloud)
- Class votes: thumbs up/down for each — who got the most dramatically different/better result?
- Teacher awards: **1 point** to the top 3 most effective improvements (or top 3 by class vote)
- Teacher names the winning technique used

**Debrief question:** *"What component of a specific prompt made the biggest difference here?"*

---

#### Event 2: The Persona Relay (15 min)

**Format:** Individual or pair. 8 minutes to compete.

**Task:**
> *"Get the same information from three completely different personas — and make each one unmistakably distinct."*

**The topic:** (Teacher chooses one of):
- How to apologize to a friend
- Why sleep is important
- The difference between wants and needs

**Rules:**
- Students must get a response from THREE different AI personas on the same topic
- Each persona must produce noticeably different tone/voice/content
- Students pick their BEST single persona result to submit

**Judging (5 min):**
- Students paste their best persona prompt + output into shared doc
- Class votes: which persona was most creative AND most useful?
- Teacher awards: **1 point** to the top 3 most distinct / creative persona results

**Debrief question:** *"Why does assigning a role change the output? What's actually happening under the hood?"* (Reference 5.1 — next-token prediction draws on role-specific training data)

---

#### Period 2 (~50 min)

#### Brief Recap + Score Check (5 min)

Display the current standings. Hype up whoever's leading — but emphasize: Events 3 and 4 are worth more.

---

#### Event 3: The Few-Shot Decathlon (20 min)

**Format:** Individual or pair. 12 minutes to compete.

**Task:**
> *"Teach the AI a style it doesn't know using only examples — no instructions."*

**Setup:**
- Teacher displays a "target style" — a specific writing pattern students must get the AI to replicate
- Students may NOT describe the style in words — they must teach it ONLY through examples

**Target style options (teacher picks one or gives students choice):**
- **Option A:** "Corporate jargon gone wrong" (buzzword soup that sounds serious but says nothing)
- **Option B:** "Dramatic nature documentary narrator" (David Attenborough describing mundane things)
- **Option C:** "1800s telegram style" (STOP at end of sentences STOP extremely formal STOP)

**Rules:**
- Students write 2–4 example texts showing the style
- Then ask the AI to write something NEW in that same style (e.g., "describe your morning commute")
- Cannot use words like "make it sound like" or "write in the style of" — examples only

**Judging (8 min):**
- Top 3 funniest/most accurate results shared with class
- Students vote on: Did it nail the style? How many examples did it take?
- Teacher awards: **2 points** to the top 3 (this event is harder — worth more)

**Debrief question:** *"How many examples did you need before the AI 'got it'? What does that tell us about how few-shot learning works?"*

---

#### Event 4: The Grand Finale — Mission Impossible (15 min)

**Format:** Individual or pair. 10 minutes to compete.

**Task:**
> *"Complete the most complex prompt challenge of the day."*

**Mission (displayed on board — teacher reveals at the start of this event):**

Choose ONE of:

**Mission A — The Explainer:**
> *"Get the AI to explain quantum entanglement to a 7-year-old, using only a cooking analogy, in exactly 5 sentences, with no words longer than 3 syllables."*

**Mission B — The Faker:**
> *"Get the AI to write a one-paragraph 'official announcement' that sounds completely real but is about something absurd — a new law requiring all cats to wear hats. Must sound like a government press release."*

**Mission C — The Redeemer:**
> *"Take the WORST output you got all day and use any technique you want to turn it into your best. Document what you changed."*

**Rules:**
- Students pick one mission
- Use any combination of techniques from the whole unit
- Must submit: prompt, output, and a 2-sentence explanation of what technique they used and why

**Judging (5 min):**
- Top 3 results from each mission (or teacher picks 3 overall favorites)
- Class votes: Most creative / Best technique / Best result
- Teacher awards: **3 points** to the top 3 (Grand Finale is worth the most)

---

#### Closing: Ceremony + Debrief (5 min)

**Award ceremony:**
- Tally final scores
- Announce winner(s) — celebrate loudly
- Optional: small prize (stickers, homework pass, etc.)

**Reflection (quick whole-class):**
- *"What technique was most powerful today?"*
- *"What would you do differently?"*
- *"What does it mean to be good at prompting?"*

**Exit Ticket (in journal, 2 min):**
> *"Name one prompting technique you used today, describe what you were trying to achieve with it, and explain whether it worked."*

---

## 📊 Assessment

| Method | Description |
|--------|-------------|
| Olympics Scorecard | Tracks which events students participated in and their scores |
| Submitted prompts (shared doc) | Shows technique application in real tasks |
| Exit ticket | Metacognitive reflection on technique effectiveness |
| Teacher observation | Circulating during events — note who struggles, who excels |

---

## 🔧 Differentiation

**For students who finish events early:**
- Shadow judging: evaluate other teams' prompts using the official criteria — justify their vote in writing
- "Meta challenge": write a prompt that asks the AI to judge prompts — test it on today's entries

**For students who struggle:**
- Provide the Prompt Template card (from 5.2 worksheet) — they can use it as a scaffold
- Allow pairs on all events
- Event 1 (Clarity Sprint) is most accessible — ensure all students can complete it before moving on

**For advanced / extension:**
- Require students to explain MECHANISTICALLY why their winning prompt worked (connecting to 5.1)
- Challenge: design a 5th event for next year's Olympics — write the rules and judging criteria

---

## 💬 Discussion Questions

1. *"Is prompting a skill that will matter in 5 years — or will AI get smart enough that it doesn't matter how you ask?"*
2. *"What would it mean to be a 'professional prompt engineer'? Would you want that job?"*
3. *"We competed for the best result. But what if the 'best' prompt for you is different than the 'best' prompt for me? Is prompt engineering personal?"*
4. *"Today we used AI as a tool. At what point does the AI become a collaborator? What's the line?"*

---

## 📎 Slide Outline

See `slides-outline.md` for the full slide-by-slide guide.

**Slide summary:**
1. Title: "Prompt Engineering Olympics"
2. Welcome + Team Setup
3. Event 1: The Clarity Sprint (task + rules)
4. Event 1: Judging criteria
5. Event 2: The Persona Relay (task + rules)
6. Event 2: Judging criteria
7. Halftime: scoreboard
8. Event 3: The Few-Shot Decathlon (task + rules + style options)
9. Event 3: Judging criteria
10. Event 4: Grand Finale — Mission Impossible (reveal)
11. Award Ceremony + Closing Reflection
12. Exit Ticket

---

## 🔗 Connections & Resources

- **Previous Lesson:** 5.2 — The Art of the Prompt (all three techniques used in today's events)
- **Next Lesson:** 5.4 — AI as a Study Partner (apply prompting skill to academic use)
- **Teacher Tip:** Save the class shared doc from today — it's a great portfolio artifact and makes a good retrospective at the end of the module

---

*Lesson authored for the OpenClaw AI Curriculum | Module 5: Give Your Agent a Voice*
