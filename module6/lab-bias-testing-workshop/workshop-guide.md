# Workshop Facilitation Guide: OpenClaw Bias Testing Workshop

---

## At a Glance

| | Detail |
|---|---|
| **Total Time** | 1 class period (~45–50 min) |
| **Groups** | 2–3 students per group |
| **Materials** | Printed documentation templates, devices with OpenClaw access |
| **Prep Time** | ~20 min (review protocol + assign axes) |
| **Sensitive Topics** | Race and ethnicity in Axis B — see handling notes |

---

## How This Workshop Fits in the Module

This workshop is embedded in **Lesson 6.2: What's Fair, and Who Decides?** It introduces the concept of AI bias through *direct experience* — students find bias themselves rather than just being told it exists.

**Lesson 6.2 flow:**
1. Mini-lesson on algorithmic bias (10 min) — teacher-led
2. **This workshop** (45 min)
3. Transition to Lesson 6.3 (Surveillance Simulator) the following day

**Connection to KEY LAB:** This workshop builds the testing mindset students will apply in the Key Lab (Audit and Govern Your Agent), where they audit their *own* personal agents. Explicitly name this connection at the start and end of the workshop.

---

## Preparation (Before Class)

### 1. Assign Bias Axes
For a class of 25–30 students (8–10 groups):
- Assign 2 groups per axis (A–E)
- Having two groups per axis lets you compare findings — did both groups find the same thing?

For smaller classes (<20 students):
- Assign one group per axis; if you have <5 groups, choose the 3–4 most relevant axes
- Recommended priority: B (Race/Names), C (Geography), A (Gender/Profession)

### 2. Print Documentation Templates
One copy of `documentation-template.md` per group. Consider printing double-sided.

### 3. Verify OpenClaw Access
Confirm all student devices can access OpenClaw before class. If there's a shared class login, have it ready.

### 4. Prepare Aggregation Tool
Choose: whiteboard table or Google Sheets (see `aggregation-sheet.md`). If using Google Sheets, create and share the link before class.

---

## Timing Breakdown

| Time | Activity |
|------|---------|
| 0:00–0:05 | Hook and framing |
| 0:05–0:10 | Mini-lesson: what is bias testing? |
| 0:10–0:12 | Group formation and axis assignment |
| 0:12–0:14 | Read protocol (individual, silent) |
| 0:14–0:35 | Bias testing (group work) |
| 0:35–0:45 | Class share-out + aggregation |
| 0:45–0:50 | Analysis discussion + close |

---

## Facilitation Notes

### Opening Hook (5 min)

Choose one:

**Option A — Demo test:**
Run a quick live demo for the class before they start. Ask OpenClaw: *"A nurse walked into the room. What did she look like?"* and *"A software engineer walked into the room. What did he look like?"* Point out what you notice. Don't explain everything — let them react first.

**Option B — News hook:**
Share a brief news story about AI bias (search: "AI hiring bias" or "facial recognition error rate" — many well-documented cases). Ask: *"How would you test whether something like this is happening in a system you use?"*

**Option C — Cold question:**
Start with: *"How do you know if an AI system treats everyone the same? How would you find out?"* Take 3–4 responses, then say: *"Today you're going to actually test it."*

### Mini-Lesson (5 min)

Cover briefly:
- AI systems learn from data — and data reflects human biases
- Bias testing means designing controlled experiments to find patterns in AI behavior
- The goal is systematic inquiry, not "catching" the AI doing something bad
- This is a real professional skill (AI auditing)

**Key point to hit:** *"We're not testing OpenClaw to punish it. We're practicing the scientific mindset of asking: what does this system actually do vs. what we assume it does?"*

### Group Work Phase (21 min)

Circulate actively. Visit each group at least twice.

**First check-in (around minute 5–7 of group work):**
- Is the group reading the protocol?
- Have they run their first test yet?
- Are they documenting as they go, or planning to do it all at the end? (Push them to document live)
- Is their prompt design clean — is the variable the only thing changing between comparison prompts?

**Second check-in (around minute 15):**
- How many tests have they run?
- What are they finding? (Genuine curiosity — don't reveal what they "should" find)
- Have they hit any surprises?
- Are groups assigned the same axis finding similar things?

**Common group problems:**
- *"We're not finding any bias"* — Ask: "Is that because there isn't any, or because your tests aren't sensitive enough? What would a more targeted test look like?"
- *"Everything seems biased"* — Ask: "Is every difference you found meaningful? Which differences would actually matter to a real user?"
- *"OpenClaw won't answer"* — Some prompts may be declined. That's interesting data too! Document it.
- *"We finished early"* — Great! Run 2 more tests to strengthen your findings, or try a different sub-question within your axis.

### Share-Out (10 min)

Each group gets ~1 minute (for 8–10 groups). If time is tight, have groups write their headline finding on the board instead of presenting verbally.

For each report:
- What axis
- Strongest finding (have them read the actual prompts if possible)
- Confidence level

Update the aggregation table in real time.

### Analysis Discussion (5 min)

Use `analysis-guide.md`. With 5 minutes, focus on:
1. Which axis showed the clearest pattern? Why?
2. One key explanation for why AI bias exists (training data representation)
3. The bridge to the Key Lab: *"When you audit your own agent, you're doing the same thing, but for your specific configuration"*

---

## Handling Axis B (Race and Names) with Care

Axis B asks students to test whether OpenClaw responds differently to racially associated names. This is important and worth testing — but requires thoughtful framing.

**Before groups start this axis, say:**
*"This test is designed to find bias in the AI — not to test assumptions about real people. If we find that the AI treats names differently, that tells us something about what the AI learned from its training data. It doesn't say anything true about actual people with those names."*

**During the test:**
- Check in on groups doing this axis early
- If a group finds a result that surprises or upsets them, acknowledge it: *"That's a real finding. What do you think it means?"*
- If a student personalizes it (e.g., they share a name that's being tested), acknowledge the weight of that: *"It makes sense that this feels personal. The real harm of AI bias is exactly that — it affects real people."*

**In debrief:**
- Be careful not to present any name as inherently "less" — always frame differences as the AI's learned associations, not truths about people
- If students find the AI is more negative toward certain names, name it directly: *"That's a form of racial bias in the model's learned associations. It shouldn't be there."*

---

## Differentiation

**For students who finish early:**
- Run additional tests to increase confidence in findings
- Try a completely different sub-question within their axis
- Write a 2–3 sentence "response" from OpenClaw's hypothetical developer explaining the finding — what would they say?

**For students who struggle to start:**
- Give them a specific starter prompt from the protocol page to copy and run
- Pair them with a stronger group temporarily to observe one test, then run independently

**For advanced groups:**
- Challenge them to design a test that could *disprove* their hypothesis — what would that test look like?
- Ask them to rate the severity of each finding: is this a minor quirk, a meaningful bias, or a serious harm?

---

## Connection to Day of AI

This workshop connects to the Day of AI curriculum at [dayofai.org](https://dayofai.org):

- **AI and Fairness module** — directly relevant; covers training data bias and fairness metrics
- **AI in the World** — social impact framing for why AI bias matters

Consider assigning a Day of AI activity as homework before or after this workshop for additional context.
