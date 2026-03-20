# Teacher PD Participant Workbook
## OpenClaw Curriculum — All 4 Sessions

**Name:** _______________________________  
**School:** _______________________________  
**Subject(s):** _______________________________  
**Date:** _______________________________  

---

> **How to use this workbook:**  
> This is yours to write in, argue with, and refer back to. It contains every exercise from the 4 PD sessions, plus reference sections you'll use while teaching. Don't keep it clean — fill it up.

---

## Session 1: AI Literacy for Teachers

---

### Opening — Your Word

Before we start: write one word for how you feel about AI right now.

**Your word:** _______________________________

*We'll come back to this at the end of Session 4.*

---

### Exercise 1.1 — Deploy OpenClaw

**Goal:** Your agent responds to a message in 20 minutes.

**Pair setup:** Person A drives first, Person B navigates. Swap at 10 minutes.

**Step-by-step:**

1. [ ] Open your device and navigate to the OpenClaw install guide (provided by facilitator or pre-installed)
2. [ ] Launch OpenClaw — confirm the gateway is running
3. [ ] Open your agent in a browser or terminal
4. [ ] Type: *"Hello, who are you?"*
5. [ ] Agent responds → ✅ Deploy complete

**If you get stuck — troubleshoot here first:**

| Issue | Check this first |
|-------|-----------------|
| Agent doesn't respond | Is the gateway running? Check the terminal window |
| Browser shows error | Try localhost:3456 and confirm the port matches config |
| API error message | Check that your API key is in the .env file |
| "Agent not found" | Confirm agent name in config matches what you're addressing |

**What worked:**
```
_____________________________________________
_____________________________________________
```

**What you had to troubleshoot:**
```
_____________________________________________
_____________________________________________
```

**Time it took:** _______ minutes

---

### Exercise 1.2 — Train a Teachable Machine Model

**Go to:** teachablemachine.withgoogle.com

**Your task:** Build a 3-class image classification model.

**Suggested classes for non-CS teachers:**
- 3 objects on your desk
- Your hand: open / closed / pointing
- Your face: neutral / smiling / making a face

**Steps:**
1. [ ] Click "Get Started" → "Image Project" → "Standard image model"
2. [ ] Create 3 class labels
3. [ ] Add at least 20 images per class (webcam or upload)
4. [ ] Click "Train Model"
5. [ ] Test: hold up each item — does it classify correctly?

**Now experiment:**
- [ ] Reduce one class to only 5 images. Retrain. What changes?
- [ ] Add images of something that falls between two classes. What happens?

**Record your observations:**

What my model got right:
```
_____________________________________________
```

What my model got wrong:
```
_____________________________________________
```

What happened when I made training data uneven:
```
_____________________________________________
```

**Reflection question:**  
*When your model misclassified something, what did you feel? What does that tell you about how to introduce M2 and M4 to students?*
```
_____________________________________________
_____________________________________________
_____________________________________________
```

---

### Exercise 1.3 — Build Your First Skill

**Goal:** Write and deploy a simple SKILL.md for your agent.

**Your topic:** Choose something you actually teach or care about.

Ideas:
- Key dates in a historical period
- Literary terms and definitions
- Science vocabulary for a unit
- Local community facts
- A hobby or interest (this one is great — it makes the skill feel real)

**SKILL.md Template:**

```markdown
---
name: [Your Skill Name]
description: [One sentence: what does this skill help with?]
author: [Your name]
version: 1.0
---

# [Your Skill Name]

## What I know

[Write 5-10 facts, terms, or pieces of knowledge here.
Use plain language. Structure with headers or lists.]

## How to use this knowledge

[1-2 sentences: When should the agent use this skill? 
What kinds of questions should trigger it?]
```

**Write your skill here (draft):**

```markdown
---
name: 
description: 
author: 
version: 1.0
---

# 




```

**Deploy and test:**
1. [ ] Save your SKILL.md to the skills folder in OpenClaw
2. [ ] Restart OpenClaw (or reload skills)
3. [ ] Ask your agent a question that should use the skill

**Test prompt you used:**
```
_____________________________________________
```

**Agent's response:**
```
_____________________________________________
_____________________________________________
```

**Did it use your skill? What would you change?**
```
_____________________________________________
_____________________________________________
```

---

### Exercise 1.4 — Session 1 Reflection

Complete these before Session 2:

The most important thing I experienced today:
```
_____________________________________________
_____________________________________________
```

The thing I'm most nervous about teaching:
```
_____________________________________________
_____________________________________________
```

One question I want answered in Sessions 2–4:
```
_____________________________________________
```

---

---

## Session 2: Tool Training

---

### Exercise 2.1 — "What Broke?" Table

Fill in before the session opener:

| What worked in Session 1 | What broke in Session 1 |
|--------------------------|------------------------|
| | |
| | |
| | |

---

### Exercise 2.2 — OpenClaw Station Notes

**Station 1: Fresh Install Simulation**

Time it took for fresh install: _______ minutes

The sticking point most likely to hit a student:
```
_____________________________________________
```

My one-liner for students stuck at that point:
```
_____________________________________________
```

**Station 2: Failure Mode Diagnosis**

Which failure card did your table get?
```
_____________________________________________
```

Diagnosis (what was wrong):
```
_____________________________________________
```

Time to fix: _______ minutes

The one question you'd ask first when diagnosing any OpenClaw failure:
```
_____________________________________________
```

**Station 3: Network and Firewall Issues**

Things to test on your school network before you start the unit:
- [ ] Can students access localhost on the configured port?
- [ ] Is the following URL reachable? `curl https://wttr.in/London?format=3`
- [ ] Are npm packages installable, or does IT need to pre-install?
- [ ] Does the school firewall block any tools? Which ones?

My IT contact at school: _______________________________

What I'll request from IT before the course starts:
```
_____________________________________________
_____________________________________________
```

---

### Exercise 2.3 — Tool Comparison Notes

**Teachable Machine vs. ML4Kids:**

The task I'd choose each tool for:
- Teachable Machine: 
```
_____________________________________________
```
- ML4Kids:
```
_____________________________________________
```

**Hugging Face — 2 Spaces I found:**

1. Name: _________________ URL: _________________  
   Why it's relevant to my class:
```
_____________________________________________
```

2. Name: _________________ URL: _________________  
   Why it's relevant to my class:
```
_____________________________________________
```

**Day of AI — 1 lesson plan I found:**

Title: _______________________________  
Module it complements: _______________________________  
What I'd use it for:
```
_____________________________________________
```

---

### Exercise 2.4 — Personal Tech Contingency Card

*Fill this in; keep it with your teaching materials.*

**Tool I feel least confident with:** _______________________________

**What I'll practice before teaching:**
```
_____________________________________________
```

**Offline fallback plan for each module:**

| Module | If tech fails, I'll do this |
|--------|----------------------------|
| M1 — Identity + Setup | |
| M2 — Vision/Perception | |
| M3 — Knowledge Base | |
| M4 — Learning/Training | |
| M5 — Language/Channels | |
| M6 — Ethics Lab | |
| M7 — Expo | |

**IT contact:** _______________________________  
**Request to submit in advance:** _______________________________

---

### Exercise 2.5 — Failure Mode Simulation Notes

**Your table's scenario:**
```
_____________________________________________
```

**Your response plan (3 parts):**

1. What do you do in the week before (if you had advance warning)?
```
_____________________________________________
_____________________________________________
```

2. What do you do if this happens with 10 minutes left in class?
```
_____________________________________________
_____________________________________________
```

3. What does this teach you about something you should always prepare in advance?
```
_____________________________________________
```

---

---

## Session 3: Facilitating Difficult Discussions

---

### Reference: M3 Teacher Guide Section 9 — Ethics Discussion Facilitation

*Excerpt included in workbook appendix. Annotate it as you read.*

**From my reading, the most useful specific language was:**
```
_____________________________________________
_____________________________________________
```

**A situation described in Section 9 that I've already experienced in another class:**
```
_____________________________________________
_____________________________________________
```

---

### Reference: M6 Teacher Guide Sections 4, 6, and 8

*Excerpts included in workbook appendix.*

**Section 4 (Content Sensitivity) — The most important thing I want to remember:**
```
_____________________________________________
_____________________________________________
```

**Section 6 (Facilitation Tips) — One facilitation move I'm going to practice:**
```
_____________________________________________
```

**Section 8 (Handling Disclosures) — The five-step framework:**

1. ___________________________________________
2. ___________________________________________
3. ___________________________________________
4. ___________________________________________
5. ___________________________________________

---

### Exercise 3.1 — Reading and Annotation

Answer on sticky notes, then post by question number:

**Question 1:** The most useful specific piece of language from the teacher guides:
```
_____________________________________________
```

**Question 2:** A situation described that I've experienced in another class:
```
_____________________________________________
```

**Question 3:** A situation I haven't experienced but want to be ready for:
```
_____________________________________________
```

---

### Exercise 3.2 — Role-Play: Ethics Discussion

**Your scenario:** _______________________________  
**Your role in round 1:** _______________________________

**Observer notes (when you're observing):**

Did the facilitator acknowledge before redirecting?  ☐ Yes  ☐ No  ☐ Partially

Did they keep analysis on the system, not the person?  ☐ Yes  ☐ No  ☐ Partially

Did they check in with students who looked affected?  ☐ Yes  ☐ No  ☐ N/A

Did they land on a specific, checkable claim?  ☐ Yes  ☐ No  ☐ Partially

**One thing that worked:**
```
_____________________________________________
```

**One thing to try differently:**
```
_____________________________________________
```

---

### Exercise 3.3 — Role-Play: Disclosure Scenarios

**Your scenario:** _______________________________  
**Your role:** _______________________________

**After the role-play — classify this disclosure:**

☐ Safety concern → immediate protocol  
☐ Emotional processing → warm follow-up needed  
☐ Information-sharing → receive and continue  

**What signal led you to that classification?**
```
_____________________________________________
```

**What would you do after class?**
```
_____________________________________________
_____________________________________________
```

---

### Exercise 3.4 — Your Language Toolkit

Fill in your go-to sentence for each situation. *Be specific — write the actual words.*

| Situation | Your go-to sentence |
|-----------|-------------------|
| Student dismisses the concept of algorithmic bias | |
| Student has a strong emotional reaction to a case study | |
| Student connects content to their personal experience | |
| Student discloses something that may need follow-up | |
| You don't know the answer to a content question | |
| The discussion is going nowhere productive | |

---

### Exercise 3.5 — Session 3 Reflection

*Personal — not shared.*

The module or lesson where I'll need these facilitation skills most:
```
_____________________________________________
```

A student I'm already thinking about as I prepare for this curriculum:
```
_____________________________________________
_____________________________________________
```

The thing I'll do before I teach Module 6:
```
_____________________________________________
_____________________________________________
```

---

---

## Session 4: Running the AI Expo

---

### Exercise 4.1 — Expo Visualization

*Before the opener — write, don't talk yet.*

The best version of Expo Day looks like:
```
_____________________________________________
_____________________________________________
_____________________________________________
```

What I'm most uncertain about:
```
_____________________________________________
```

---

### Exercise 4.2 — Logistics Group Work

**Your group's area:** _______________________________

**Key recommendations your group developed:**

1. 
```
_____________________________________________
```
2. 
```
_____________________________________________
```
3. 
```
_____________________________________________
```

**One thing from another group's presentation that changed how you're thinking about the Expo:**
```
_____________________________________________
_____________________________________________
```

---

### Exercise 4.3 — Rubric Calibration: My Scores

*Score the presentation clip independently before discussing.*

| Criterion | My Score (1–4) | Notes |
|-----------|---------------|-------|
| Technical Completeness (30%) | | |
| Clarity of Explanation (25%) | | |
| Live Demo Execution (20%) | | |
| Reflection Quality (15%) | | |
| Q&A Responses (10%) | | |

**Table comparison — where we disagreed and why:**
```
_____________________________________________
_____________________________________________
```

**My Scoring Notes Card** — edge cases and how I'll handle them:

| Edge Case | My Decision |
|-----------|------------|
| Capability present but only works sometimes | |
| Student handles tech failure with screenshots | |
| Strong reflection, weak demo | |
| [Your own edge case] | |

---

### Exercise 4.4 — Handling Incomplete Agents

**Your scenario:** _______________________________

**1. What do you do in the week before (with advance warning)?**
```
_____________________________________________
_____________________________________________
```

**2. What do you do if this student is presenting in 10 minutes?**
```
_____________________________________________
_____________________________________________
```

**3. How do you score this student fairly?**
```
_____________________________________________
_____________________________________________
```

**The "best honest story" for this student:**
```
_____________________________________________
_____________________________________________
```

---

### Exercise 4.5 — Session 4 Reflection + Next Steps

The part of the Expo I feel most ready for:
```
_____________________________________________
```

The part I still need to prepare:
```
_____________________________________________
```

The first thing I'll do this week:
```
_____________________________________________
```

**Your word — now:** _______________________________

*(Compare to your word from the very beginning of Session 1.)*

---

---

## Appendix A: Quick Reference — The 7 Module Arc

| Module | Core Concept | Key Student Deliverable | Teacher Guide |
|--------|-------------|------------------------|---------------|
| M1 | AI identity and purpose | Agent persona + system prompt | module1/teacher-guide/ |
| M2 | Perception (image + audio) | Teachable Machine model deployed | module2/teacher-guide/ |
| M3 | Knowledge representation | Custom skill deployed (SKILL.md) | module3/teacher-guide/README.md |
| M4 | Machine learning | Trained model from student-collected data | module4/teacher-guide/ |
| M5 | Language + live channels | Agent connected to a real communication channel | module5/teacher-guide/ |
| M6 | Ethics + responsible AI | Bias audit report, usage policy, guardrail | module6/teacher-guide.md |
| M7 | Capstone + AI Expo | 5-min live demo + Q&A | module7/teacher-guide/ |

---

## Appendix B: OpenClaw Quick-Fix Reference

*Fill this in during Session 2, Station 2.*

| Symptom | Check First | Fix |
|---------|------------|-----|
| Agent won't respond | | |
| API error on every message | | |
| Skill not loading | | |
| Agent behaves unexpectedly | | |
| Network blocked | | |
| [Your own] | | |

---

## Appendix C: Expo Day Teacher Checklist

**Week before:**
- [ ] Send guest invitations with brief explanation of the curriculum
- [ ] Share Audience Evaluation Card with guest evaluators
- [ ] Brief school administration on what to expect
- [ ] Confirm room setup and AV needs
- [ ] Run tech dry run with student volunteers
- [ ] Identify students who may need extra support (see Section 5 of M7 teacher guide)
- [ ] Have rubric and scoring sheets ready to print

**Day before:**
- [ ] Walk through the room setup
- [ ] Test every student's agent (or have students do this in class)
- [ ] Print: rubrics, audience evaluation cards, student name cards for stations
- [ ] Confirm guest arrival time and logistics
- [ ] Prepare the fallback plan (what if OpenClaw is down?)

**Day of:**
- [ ] Arrive 30 minutes early
- [ ] Set up and test all tech before students arrive
- [ ] Brief students: "You built this. Show it with confidence."
- [ ] Brief guests when they arrive: 2-minute orientation
- [ ] During Expo: navigate, don't facilitate — let students lead
- [ ] Close with genuine celebration — this is a big deal

**After:**
- [ ] Score rubrics promptly (while memory is fresh)
- [ ] Write one observation per student while you remember specifics
- [ ] Send thank-you notes to guests
- [ ] Debrief with students in Session 7 (M7 teacher guide)

---

## Appendix D: Key Teacher Guide Sections — Quick Links

| Topic | Location |
|-------|----------|
| Ethics discussion facilitation (foundational) | module3/teacher-guide/README.md, Section 9 |
| Content sensitivity and classroom climate | module6/teacher-guide.md, Section 4 |
| Facilitation tips per lesson (M6) | module6/teacher-guide.md, Section 6 |
| Handling student disclosures | module6/teacher-guide.md, Section 8 |
| Expo Day logistics | module7/teacher-guide/teacher-guide.md, Section 4 |
| Incomplete agents | module7/teacher-guide/teacher-guide.md, Section 5 |
| AI Expo Rubric | module7/assessments/ai-expo-presentation-rubric.md |

---

*Teacher PD Participant Workbook — OpenClaw Curriculum | cross-curriculum/teacher-pd/*
