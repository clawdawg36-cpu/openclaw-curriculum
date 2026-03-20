# Lesson 7.2 — Know Your Agent: Capability Inventory

**Module:** 7 — Capstone: AI Expo  
**Grade Level:** 6–10 (adaptable)  
**Duration:** 50–60 minutes  
**Session Type:** Structured Workshop / Individual Work  
**Standards Alignment:** AI4K12 Five Big Ideas; CSTA K-12 CS Standards

---

## Overview

Before students can write their demo script, they need to know *exactly* what their agent can do. This session is a systematic capability audit across all 6 modules. Students test every feature, document what works, flag what's shaky, and decide what to feature vs. de-emphasize in the demo. The output is a Capability Inventory document — their honest, complete map of what they built.

---

## Learning Objectives

By the end of this lesson, students will be able to:

1. List every capability their agent has, organized by module (M1–M6).
2. Rate each capability as **Solid** (works reliably), **Shaky** (works sometimes), or **Skip** (broken or incomplete).
3. Identify their 3–5 strongest capabilities to feature in the demo.
4. Write an honest "Known Limitations" list — at least 3 real limitations they'll be prepared to discuss.
5. Connect their capability inventory to the demo structure from Lesson 7.1.

---

## Materials & Technology

| Item | Notes |
|------|-------|
| Capability Inventory Template (printout or digital) | One per student — see template below |
| Student's agent running on their device | Full access to test capabilities live |
| Student Agent Design Journals | Reference for what they built each module |
| Teacher's master capability checklist | One per module, for reference — see appendix |
| Colored highlighters (3 colors) | Green = Solid / Yellow = Shaky / Red = Skip |
| Whiteboard | For class-level debrief |

---

## Lesson Sequence

### Warm-Up: Your Best Three (5 min)

**Quick write + share**

Prompt: *"Without opening your agent, what are the three capabilities you're most proud of? Write them down."*

Students write for 1 minute, then 2–3 volunteers share. Teacher notes these on the board.

**Bridge:** "You just named your gut answer. Now we're going to verify it — and find out if the real answer matches. Sometimes students are surprised by what they find."

---

### Direct Instruction: How to Do a Capability Inventory (8 min)

**Format:** Teacher demo with example agent (or fictional example)

Walk through the Capability Inventory Template, explaining each column:

**Capability Inventory Template — Column Definitions:**

| Column | What Goes Here |
|--------|---------------|
| **Module** | Which module this capability came from (M1–M6) |
| **Capability** | Short description (e.g., "Identifies objects in photos") |
| **Test Input Used** | The specific input you tested it with today |
| **Status** | Solid / Shaky / Skip |
| **Notes** | What works, what fails, edge cases, error messages |
| **Demo it?** | Yes / Maybe / No |

**Model the process:** Show how to go through each module's capabilities systematically — actually running the agent with a real input, watching what happens, and rating honestly.

**Key mindset:** "You're not grading yourself. You're documenting reality. A 'Skip' doesn't hurt your grade — an honest Skip you flag now is better than a broken demo at the Expo."

---

### Work Time: Full Capability Inventory (30 min)

**Format:** Independent work, teacher circulates

Students work through the Capability Inventory Template systematically, testing each capability live.

**Module-by-module prompts:**

**M1 — Name + Personality:**
- Does your agent respond consistently with the personality you designed?
- Does it handle off-topic or rude inputs in character?
- Does it introduce itself the way you intended?

**M2 — Perception (Image / Audio):**
- Can it identify objects in photos? Test with 3 different images.
- Can it describe what it hears? Test with a short audio clip.
- What breaks it? (blurry images, background noise, unusual objects)

**M3 — Custom Domain Knowledge:**
- Does it answer questions correctly in its specialty area?
- Does it handle questions outside its domain gracefully?
- Test 5 different questions — how many does it get right?

**M4 — Trained Model:**
- Does the custom-trained behavior work as intended?
- What inputs does it handle well vs. struggle with?
- Can you demo the "before/after" effect of training?

**M5 — Live Channel:**
- Does the messaging channel connection work right now?
- Can you send a message and get a response in real time?
- What's the latency? Is it demo-friendly?

**M6 — Ethics + Guardrails:**
- Do your guardrails activate correctly on test inputs?
- Can you demo a guardrail working in a way that feels intentional, not broken?
- Is your usage policy accessible and clear?

**Pacing check at 15 min:** Teacher announces "You should be through at least M1–M3 by now." Redirect students who are stuck.

---

### Analysis: What to Feature, What to De-emphasize (8 min)

**Format:** Individual reflection → partner consult → class share

After completing the inventory, students make decisions:

**Step 1 — Highlight your inventory:**
- Green = Solid (you'll demo this)
- Yellow = Shaky (maybe, with caveats)
- Red = Skip (don't demo this — mention it in Reflect honestly)

**Step 2 — Complete the "Demo Plan" section:**
> "My three demo moments are: ________________, ________________, ________________."
> "The capability I'm most excited to show: ________________"
> "The capability I'm most nervous about: ________________"
> "My honest limitations (at least 3): ________________"

**Step 3 — Share with a partner:** "Does my demo plan match my strongest capabilities? Am I hiding anything I should be honest about?"

---

### Teacher Approval Checkpoint (optional, 5 min)

If time allows, teacher does a quick 60-second check with each student (or tables):
- Does their Featured capabilities list feel honest?
- Is there something broken they're planning to demo anyway? Redirect.
- Is there something solid they're not planning to show? Highlight it.

This checkpoint can also happen at the start of Workshop 7.3.

---

### Debrief + Preview (4 min)

**Class discussion:**
- "Did anyone find a capability that works BETTER than you remembered? What was it?"
- "Did anyone discover something they thought worked that doesn't? How will you handle that?"
- "Anyone change their Hook idea from last session after seeing what's solid?"

**Preview Workshop 7.3:** "Next session, you'll use this inventory to write your full demo script and outline your slide deck. Bring this inventory — it's your raw material."

**Journal prompt:**
> *List your three demo moments. For each one: what's the input you'll use, and what will the audience see? Also: what's one limitation you'll mention honestly in your Reflect?*

---

## Timing Summary

| Segment | Time |
|---------|------|
| Warm-up: Your best three | 5 min |
| Capability inventory instruction | 8 min |
| Work time: Full inventory | 30 min |
| Analysis: Feature vs. de-emphasize | 8 min |
| Debrief + preview | 4 min |
| Buffer / transitions | 5 min |
| **Total** | **60 min** |

---

## Capability Inventory Template

*(Also available as a standalone printable/digital handout)*

**Student Name:** ___________________  
**Agent Name:** ___________________  
**Date:** ___________________

| Module | Capability | Test Input Used | Status (S/Sh/Skip) | Notes | Demo It? |
|--------|-----------|----------------|-------------------|-------|----------|
| M1 | Personality / intro | | | | |
| M1 | Off-topic handling | | | | |
| M2 | Image identification | | | | |
| M2 | Audio processing | | | | |
| M3 | Domain Q&A #1 | | | | |
| M3 | Domain Q&A #2 | | | | |
| M3 | Domain Q&A #3 | | | | |
| M4 | Trained behavior | | | | |
| M4 | Before/after contrast | | | | |
| M5 | Live channel — send | | | | |
| M5 | Live channel — receive | | | | |
| M6 | Guardrail activation | | | | |
| M6 | Usage policy display | | | | |
| Other | | | | | |

**Status Key:** S = Solid (works reliably) | Sh = Shaky (works sometimes) | Skip = Don't demo

**My Top 3 Demo Moments:**
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

**Known Limitations (at least 3):**
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

---

## Differentiation

### For students who need support:
- Pre-populate the Capability column with the standard list from the teacher's checklist; they only need to test and rate
- Allow partner testing — one student operates the agent, one documents
- Reduce the required limitations list to 2 instead of 3

### For advanced students:
- Add a column: "How would I fix this if I had one more week?"
- Challenge: rank all capabilities from most to least impressive and justify the ranking
- Ask: "What capability could you add in the next 48 hours that would make the demo stronger?"

### For students with incomplete agents:
- Focus on what they HAVE, not what they wish they'd built
- A student with solid M1–M3 capabilities has a compelling 5-minute demo — help them see it
- Frame: "Your story is 'I built a foundation.' That's real and worth showing."

---

## Assessment

**Formative:** Completed Capability Inventory with:
- All 6 modules addressed (even if some are Skip)
- At least 3 Solid capabilities identified
- At least 3 limitations listed honestly
- Demo plan completed

**Journal prompt** connects inventory to demo structure from 7.1.

---

## Teacher Notes

- Students commonly overestimate broken features and underestimate working ones. Trust testing over memory.
- Some students will discover things they thought were working are broken. This is a gift — better to find out now. Help them reframe it.
- The "Known Limitations" section feels risky to students. Normalize: "Everyone's agent has limitations. The Expo audience respects honesty."
- If a student's agent is substantially broken across multiple modules, have a private conversation now. Options: focus on what works, use a simplified demo, or consider a "portfolio presentation" format that explains the journey even if the tech is incomplete.
