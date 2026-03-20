# Teacher Guide: Stakeholder Mapping Tool

**Module:** 6 — AI Ethics, Bias, and Accountability  
**Tool:** Stakeholder Mapping Tool (`tool/index.html`)  
**Companion Resources:** `activity-guide.md`, `printable-version.md`, `lesson-6-7-builders-responsibility/lesson-plan.md`  
**Time:** 20–40 minutes (standalone activity) or embedded in Lesson 6.7 (15 min)

---

## Overview

The Stakeholder Mapping Tool gives students a concrete way to answer one of the hardest questions in AI ethics: *"For whom is this a problem?"* By placing stakeholders on a 2×2 grid of power vs. harm/benefit, students move from abstract moral claims to specific, arguable positions.

This guide covers how to set up and run the tool, common patterns to watch for, facilitation strategies, and debrief questions. It's designed to complement the Lesson 6.7 Fairness Proposal activity but also works as a standalone session in Lessons 6.1–6.6.

---

## Before Class: Setup Checklist

### 1. Test the Tool (Day Before)

- Open `tool/index.html` in Chrome on a Chromebook (most restrictive target device)
- Test drag and drop with mouse AND touch (use DevTools device emulation if no tablet available)
- Load each of the three scenarios and confirm card notes appear correctly
- Test at 1366×768 (common Chromebook resolution) in DevTools
- Verify that [Save Map] and [Export Text] work

### 2. Set Up Student Access

- **Option A (simplest):** Share the file via Google Classroom as a file attachment — students download and open locally
- **Option B:** Host on any simple HTTP server (e.g., your school LMS, a static file host, or `python3 -m http.server` from the tool directory)
- **Option C:** For 1:1 devices, pre-copy the `tool/` folder to student devices via USB or school IT deployment

> The tool works from `file://` — students can double-click `index.html`. No server needed.

### 3. Decide: Assigned Scenario or Free Choice?

For Lesson 6.7 (Fairness Proposal), **assign one scenario to the whole class.** The Facial Recognition scenario works best as a first run — it's the most visceral and students have background from Lesson 6.3 (Surveillance Simulator).

For a standalone activity earlier in Module 6, you can let groups choose different scenarios — it produces richer whole-class comparison ("our hiring algorithm map looked totally different from their social media map").

### 4. Discussion Mode Decision

If students are working in pairs or groups where they'll discuss *before* placing, consider starting in **Discussion Mode** (labels hidden). Students argue in plain language, then reveal the grid structure.

If students are working individually and then comparing, start with labels visible — the structure helps novice mappers.

### 5. Print the Printable Version

Have `printable-version.md` printed as a backup if devices fail. See that document for full low-tech facilitation notes.

---

## Classroom Flow

### Short Version (15–20 min, embedded in Lesson 6.7)

| Time | Activity |
|------|----------|
| 0:00–0:03 | Explain the grid axes. Ask: "What does it mean to have power over an AI system?" |
| 0:03–0:13 | Students place cards individually (all 10 cards, no discussion yet) |
| 0:13–0:18 | Pair share: Find one card where you disagree. Argue it. Move if persuaded. |
| 0:18–0:20 | Class debrief: Who ended up in the bottom-left? What does that mean for the Fairness Proposal? |

### Full Version (35–40 min, standalone activity)

| Time | Activity |
|------|----------|
| 0:00–0:05 | Introduce the grid (see Hook options below) |
| 0:05–0:15 | Individual mapping: place all 10 cards; read scenario notes; save "Before" map |
| 0:15–0:25 | Partner discussion: compare placements; argue disagreements; update maps; save "After" |
| 0:25–0:35 | Class debrief (facilitated — use debrief questions below) |
| 0:35–0:40 | Exit ticket or Fairness Proposal bridge |

---

## Hook Options

Choose one based on where you are in the module:

**Hook A — "Who pays?"** (Good for Lesson 6.2 or 6.7)  
> *"Last time we looked at what AI bias looks like. Today I want to ask a different question: when an AI system causes harm, who actually pays the price? And who decides whether to fix it?"*

**Hook B — Power map warm-up** (Good for any lesson)  
> *"Before we open the tool — on a piece of paper, draw a quick 2×2 grid. Top = more power, bottom = less. Right = benefits from AI, left = harmed by AI. Put yourself somewhere on that grid. Now think about where your parents go. Your principal. The company that makes Instagram. We're going to do this more carefully today."*

**Hook C — Single scenario question** (Good for Lesson 6.3, facial recognition)  
> *"A school district is using facial recognition to track attendance. Whose idea was that? Who thought it was a good idea? Who didn't get to vote? Let's figure out who has a stake in this system — and who has the power to change it."*

---

## Common Patterns to Watch For

### Pattern 1: Everyone in Two Quadrants

**What it looks like:** Students place tech companies and government in the top-right (power + benefit), students and marginalized groups in the bottom-left (affected + harm), and leave the other two quadrants empty.

**Why it happens:** The narrative structure of "powerful oppressors vs. powerless victims" is familiar. It's not wrong — but it's incomplete.

**What to do:**  
Push students to justify empty quadrants. "Is there *anyone* who has power and is genuinely harmed? What about the government official who gets sued after a false arrest?" Ask about journalists, advocates, whistleblowers — they have some platform power but often experience the harms they investigate.

The top-left (power + harm) is the most intellectually interesting placement. Students who put something there are thinking harder.

---

### Pattern 2: Teachers and Parents Placed Identically

**What it looks like:** Both cards in the same quadrant — usually bottom-right (low power, somewhat benefited) or bottom-left (low power, harmed).

**Why it happens:** Students don't differentiate between people *around* the system and people *in* the system. Teachers are often directly evaluated by or required to implement the system; parents have more distance and (in some cases) legal standing to opt out.

**What to do:**  
Ask: "Could your teacher opt out of the facial recognition system? Could your parents pull you out of the school over it? What does that difference tell us about power?"

---

### Pattern 3: The Advertiser Confusion (Social Media Scenario)

**What it looks like:** Students either place advertisers in the top-right (obvious power + benefit) without nuance, or leave the card in the tray because they're not sure what advertisers have to do with anything.

**Why it happens:** The advertiser-engagement-algorithm connection is non-obvious — students may not know how social media business models work.

**What to do:**  
Before the activity, briefly explain: the algorithm is designed to maximize time on the app because more time = more ad impressions = more revenue. Advertisers benefit from engagement but don't directly control the algorithm. This places them in an interesting position: benefiting from a system they didn't design and may not fully understand.

---

### Pattern 4: Marginalized Groups in the Tray (Not Placed)

**What it looks like:** Some students leave the "Marginalized Groups" card in the tray entirely, or aren't sure what it means.

**Why it happens:** The card is more abstract than "Students" or "Teachers" — it's a category, not a specific named group.

**What to do:**  
Make it concrete for the scenario. In the facial recognition scenario: "Studies show the error rate for dark-skinned women is up to 34 times higher than for light-skinned men. Who does that mostly affect? Now where would you put that group on the grid?" Students can also use the [+ Add Stakeholder] button to add a more specific group (e.g., "Black students" for the school scenario).

---

### Pattern 5: Students Place Themselves on the Grid

**What it looks like:** Students say things like "we're the students — we're definitely bottom-left" and place the card quickly without engaging with the scenario's specific dynamics.

**Why it happens:** It's the easiest card — students have a strong personal relationship to it.

**What to do:**  
Lean into this, but push for specificity. "You said students are harmed. How, specifically, in *this* scenario? What decision does the algorithm make about you that you can't appeal?" Then: "Is that the same for all students? Are there students who might benefit? Who?" (Hint: students with perfect attendance records benefit from automatic tracking; students with disabilities or chronic illness may not.)

---

### Pattern 6: Cards Placed but Can't Explain Why

**What it looks like:** Students have a full map but when asked to explain a placement, they say "I just felt like they belong there."

**Why it happens:** The drag-and-drop interface rewards completion over reflection. Students can finish fast without thinking hard.

**What to do:**  
Before the class debrief, do a 2-minute individual writing stop: "Pick one card and write one sentence explaining why you placed it where you did." This surfaces reasoning before the social pressure of group discussion. You can also require students to write their explanation on a sticky note and attach it to the card on the printed version.

---

### Pattern 7: All Groups "Somewhat" Everything

**What it looks like:** Students place all cards near the center of the grid, avoiding the extremes.

**Why it happens:** Students don't want to make strong claims. They've been taught to hedge. "Well, the government is kind of both..." is a reflex.

**What to do:**  
Make the center a paradox. "The center means: this group has average power and is exactly equally harmed and benefited. Is that true for students? For tech company investors? Don't hedge — make a call, then defend it." The argument is the learning. Hedged maps produce no argument.

---

## Debrief Questions

### Opening the Debrief

- *"Before we talk — everyone hold up one finger if you moved any cards during your partner discussion. Two fingers if you moved more than one. Three if you basically rebuilt your whole map."* (This gives you instant temperature-read on engagement quality.)
- *"What was the hardest card to place, and why?"*

### Core Debrief Questions

**On the bottom-left quadrant:**
- *"Look at everyone who ended up in 'Affected + Harm.' What do they have in common? Is there any way for them to change their position?"*
- *"If someone in the bottom-left quadrant wanted to push back against this system, where would they have to go? Who would they need to talk to?"*

**On the top-right quadrant:**
- *"Everyone in 'Power + Benefit' — what would it take for them to move? What's their incentive to change the system?"*
- *"Is there a version of this system where they lose their top-right position? What would that look like?"*

**On disagreements:**
- *"Where did you and your partner disagree most? What was the argument?"*
- *"Did anyone change their mind during discussion? What convinced you?"*

**On the structure itself:**
- *"Is this grid missing anything? Is there a dimension of the problem that 'power' and 'harm/benefit' don't capture?"*
- *"Could the same stakeholder be in different quadrants depending on which *type* of harm we're talking about — financial harm vs. physical harm vs. privacy harm?"*

### Closing the Debrief

- *"Point to the quadrant where you'd most want to NOT be. Now — if you were building this system, what specific thing would you do to make sure that quadrant stays as small as possible?"*
- *"We just spent 20 minutes figuring out who gets hurt. What's the point? Why does mapping stakeholders help us build better systems?"*

---

## Connecting to the Fairness Proposal (Lesson 6.7)

After the stakeholder mapping activity, the debrief bridges directly to the Fairness Proposal:

> *"You've just mapped who has power and who bears the cost in this scenario. Now apply that same lens to your own OpenClaw agent. Who is the most vulnerable person who might interact with it? Where do they fall on this grid? That's where your fairness commitment needs to focus."*

Give students 2 minutes to sketch a quick informal map for their own agent (doesn't need to use the tool — just paper). Then feed that into the Fairness Proposal Part A (Audit Questions).

The key transfer:
- Scenario's bottom-left stakeholder → "Who is my agent's most vulnerable user?"
- Scenario's top-right stakeholder → "Who has the most power over how my agent is used — and is that me?"

---

## Differentiation

### For students who struggle with the abstract concepts:

- Use the **Starter Placement** toggle to show suggested positions as ghost outlines — they can agree or disagree
- Give them one specific question for each card: *"Does this person get to appeal the decision the system makes? (Yes = more power. No = less power)"*
- Pair with a stronger student in the discussion phase
- Focus on just the Facial Recognition scenario — it's the most concrete and emotionally resonant

### For students who finish quickly:

- Challenge them to add **2 custom stakeholders** the tool doesn't include and justify their placement
- Ask: *"Design a version of this AI system that would move [bottom-left stakeholder] to a different quadrant. What would change?"*
- Have them export their map as text and write a 3-sentence summary of the power dynamics for a student who wasn't in class
- Ask them to compare their Facial Recognition map with the Hiring Algorithm scenario — what patterns repeat? What's different?

### For ELL students:

- The visual drag-and-drop requires minimal English — the cards' names and icons carry meaning
- Pair with a bilingual partner for the discussion phase
- Allow placement decisions to be explained verbally or in L1 in writing
- The four quadrant labels are the most important vocabulary — pre-teach: power, harm, benefit, affected

---

## FAQ

**Q: What if the tool doesn't work on a student's Chromebook?**  
Use the printable fallback (`printable-version.md`). The physical version is equally effective for the discussion — it just doesn't support the Compare feature. You can still do everything else with the printed grid and sticky notes.

**Q: Should I tell students where cards "should" go?**  
Resist. Especially for the top-left and top-right quadrants. Let students argue. The tool's suggested starter placements (which you can enable/disable) are intended as provocations, not answers. In early beta sessions, teachers who immediately corrected placements produced shorter, blander discussions.

**Q: Can students use this for a different AI scenario not in the tool?**  
Yes. Encourage advanced students to use the [+ Add Stakeholder] feature to add scenario-specific groups, and to ignore card notes that aren't relevant. The grid itself is universally applicable.

**Q: Is it okay if students never reach consensus?**  
Yes — sometimes the most important outcome is that students recognize the disagreement is *legitimate and real*, not just a matter of one student being wrong. The debrief question *"Why might two reasonable people place [Stakeholder] in different quadrants?"* is often more valuable than resolving the placement.

**Q: What about stakeholders the tool doesn't include?**  
Use [+ Add Stakeholder]. Especially in the Social Media scenario, students often want to add: *Algorithms themselves* (interesting edge case — can a system be a stakeholder?), *Rival platforms*, *Researchers*, *Mental health professionals*. All valid. Let them build the card.

**Q: How do I handle it if students place themselves as "powerful"?**  
Validate it. Students *do* have power in some contexts — as consumers, voters-in-training, creators. Ask them to be specific: "Power to do what? Right now, in this scenario?" The distinction between long-term structural power and immediate practical power is worth unpacking.

---

## Assessment Connections

The stakeholder map is not a formal assessment, but it produces evidence you can use:

- **Exit ticket:** *"Name the stakeholder in the most vulnerable position in today's scenario, and explain what made them vulnerable. (2–3 sentences)"*
- **Fairness Proposal:** The map should directly inform Part A (Audit Questions) — teachers can check whether students' audit reflects the power dynamics they identified in the map
- **Discussion participation:** The "how many cards did you move?" question gives you a quick read on who was engaged in the discussion phase vs. who completed it mechanically

---

*Teacher Guide for OpenClaw Curriculum · Module 6: AI Ethics, Bias, and Accountability*  
*Questions or feedback? Submit an issue at github.com/clawdawg36-cpu/openclaw-curriculum*
