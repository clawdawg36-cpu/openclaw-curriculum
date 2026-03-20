# Teacher Guide — Prompt Engineering Lab
## Module 5, Lab 1

**Grade Level:** 7–8  
**Time:** 3–4 class periods (adjust pacing notes below)  
**Prerequisites:** Students have a working OpenClaw agent from Modules 1–4

---

## Purpose of This Lab

Prompt engineering is the bridge between "AI exists" and "I can use AI effectively." Students spend a lot of time in the culture *around* AI without developing actual competence at using it. This lab addresses that gap.

More importantly, it builds metacognition: students learn to think about *why* a prompt works, not just *what* to type. That reasoning skill transfers to any AI tool they'll encounter.

This lab also sets up the Channel Connection Lab (Lab 5.2) by ensuring students can confidently direct their agent before connecting it to a live platform.

---

## Learning Objectives

By the end of this lab, students will be able to:
- Identify and apply at least 5 prompting techniques by name
- Evaluate AI outputs for quality, reliability, and usefulness
- Design a prompt with multiple deliberate techniques
- Reflect on the relationship between prompt quality and output quality
- Document their prompting work in a structured Prompt Portfolio

---

## Pacing Guide

### Option A: 3-Period Version

| Period | Challenges | Focus |
|--------|-----------|-------|
| 1 | 1–6 | Specificity + Role Assignment |
| 2 | 7–12 | Few-Shot + Chain-of-Thought + Constraints |
| 3 | 13–15 + Portfolio | Formatting + Portfolio selection + Reflection |

### Option B: 4-Period Version (recommended)

| Period | Challenges | Focus |
|--------|-----------|-------|
| 1 | 1–5 | Specificity + Audience + Role Assignment |
| 2 | 6–9 | Role combos + Few-shot techniques |
| 3 | 10–12 | Chain-of-thought + Constraints + Iteration |
| 4 | 13–15 + Portfolio | Formatting + Hallucination + Portfolio |

### Option C: Compressed (2-period sprint)

Skip challenges 2, 5, 9, 13. Students still do Tiers 1–5 but hit fewer variations. Portfolios are reduced to 2 entries instead of 3.

---

## Setup Checklist (Before Lab Day 1)

- [ ] All students have working OpenClaw agents (from M1–M4)
- [ ] `openclaw start` confirmed to work for all student machines
- [ ] Students know how to access their agent's chat interface
- [ ] Printed or digital access to lab-guide.md and challenge-worksheets.md
- [ ] Optional: projector ready to demo Challenge 1 as a class warm-up

**If any student's agent is broken:** They can still complete the prompting challenges using Claude.ai, Gemini, or another accessible chatbot. The techniques work identically — the agent is the platform, not the technique.

---

## Period-by-Period Teaching Notes

### Period 1 Opener (10 min)

**Hook:** Ask the class: *"What's the worst thing you've ever gotten back from an AI when you asked it something?"* Take 3–4 answers. Usually someone has a hallucination story, something weirdly off-topic, or a response that was just uselessly generic.

Then say: *"Everything wrong with those responses was fixable — not by the AI, by you. That's what today is about."*

**Demo Challenge 1 as a class** before releasing students to work independently. Show the "before" and "after" on the projector. The contrast is usually dramatic and gets students excited to try.

---

### Facilitation Strategy by Tier

**Tier 1 (Challenges 1–3):** These are fast and satisfying. Most students finish in 20–30 minutes. Let them move at their own pace — some will want to linger on Challenge 3 if it touches on a real question they have.

**Tier 2 (Challenges 4–6):** Challenge 5 (Opposing Roles) often sparks a good discussion. Watch for it. The discussion prompt — *"If an AI can argue both sides equally well, how should you trust AI-written content?"* — is worth pausing the class for. Give it 5 minutes.

**Tier 3 (Challenges 7–9):** Challenge 7 (zero/one/three-shot) is a "whoa" moment for most students. The difference between zero and three-shot is usually stark. Let students compare with a neighbor.

**Tier 4 (Challenges 10–12):** Challenge 12 (Iteration Loop) often takes longer than expected — in a good way. Students get invested in their agent bio. This is the first time many students experience the AI as a *collaborator* rather than an *oracle*. Watch for it.

**Tier 5 (Challenges 13–15):** Challenge 14 (hallucination) is critically important. If time allows, have a student share a risky-prompt result where the AI invented citations. This is the lab's most important ethical moment — AI confidently stating false information.

---

## Common Student Struggles

**"My agent keeps giving the same answer no matter what I try"**  
This usually means the student isn't actually changing the prompt much. Ask them: "Is your prompt twice as long? Three times? Did you add a role?" Show them Challenge 1's before/after as a model of how dramatic the change should be.

**"What does 'few-shot' mean? I've never heard that word"**  
It just means "giving a few examples before the task." The word "shot" comes from ML research (zero-shot, one-shot, few-shot learning). The concept is intuitive — most students immediately understand it once explained with the translation example.

**"My challenge 14 AI gave me 10 real studies!"**  
This is a teaching moment, not a student win. Ask: "How do you know they're real?" Have the student Google one. The studies are usually either fabricated, real but don't exist, or real but don't say what the AI claimed. This is the hallucination lesson.

**"I don't know what to put in my Portfolio"**  
Redirect them: "Which challenge surprised you most? Which output did you actually want to save and use?" The Portfolio should contain prompts they're genuinely proud of, not the most impressive-sounding ones.

---

## Differentiation

### For students who finish early:
- Challenge 15 extension: Create a prompt that produces a prompt (meta-prompting)
- Portfolio bonus: Add a 4th entry with a completely original challenge they designed
- Research task: Find and explain 2 prompting techniques NOT covered in this lab (e.g., self-consistency, tree-of-thought, prompt chaining)

### For students who struggle:
- Allow partner work through Tier 1–2
- Provide sentence starters for the worksheet reflection sections
- Allow verbal responses recorded as audio or transcribed by a partner for reflection sections
- Reduce Challenge 15 to a "before vs. after" exercise without the full Portfolio requirements

### For English Language Learners:
- The translation examples in Challenge 7 are a natural entry point — ELL students often have high intuition for language register and formality
- Allow reflections in student's primary language with translation notes

---

## Discussion Questions (Whole-Class Use)

Use these at transition points between tiers or as period openers:

1. *"Is prompt engineering a skill, a trick, or just effort? What's the difference?"*

2. *"If you can get a better answer just by asking better, what does that say about how you've been using AI before today?"*

3. *"At what point does giving an AI enough constraints just become... writing the answer yourself?"* (This one is great for the end of Tier 4.)

4. *"Should students learn prompt engineering in school? Why or why not — make an argument."*

5. *"Who benefits from people NOT knowing how to prompt well? Why might that be?"*

---

## Assessment

### Formative (during lab):
- Circulate and spot-check worksheets — are students actually recording both before/after outputs, or just describing what they think happened?
- Ask individual students to explain WHY a specific technique worked. Not what — why.

### Summative (Prompt Portfolio):
Use the Portfolio Rubric below.

| Criterion | 4 — Exceeds | 3 — Meets | 2 — Approaching | 1 — Beginning |
|-----------|------------|----------|----------------|---------------|
| **Technique Identification** | Names 3+ techniques per prompt, explains mechanism | Names 2 techniques, explains most | Names techniques but limited explanation | Lists challenge names without explanation |
| **Prompt Quality** | Prompts are deliberate, polished, and multi-technique | Prompts show intentional design | Some design evident, some accidental | Prompts are minimally modified from lab examples |
| **Output Evaluation** | Critically evaluates output including limitations | Evaluates output with reasoning | Summarizes output without critique | Copies output without commentary |
| **Reflection** | Draws generalizable principles from specific experience | Reflects meaningfully on one key insight | Surface-level reflection | Minimal engagement |
| **Effort & Completion** | All 15 challenges completed with genuine engagement | 12+ challenges completed | 9–11 challenges completed | Fewer than 9 challenges |

---

## Connections to Other Modules

**Module 1 (Identity):** SOUL.md and identity prompting — students already wrote a prompt-like description of their agent. Return to it: "Is your SOUL.md well-prompted? What would you change now?"

**Module 3 (Knowledge):** When students wrote custom skills for their agent, they were effectively prompt engineering in code. The techniques here apply to skill design.

**Module 6 (Ethics):** Challenge 5's opposing roles and Challenge 14's hallucination discussion directly preview Module 6 themes: AI as persuader, AI as unreliable narrator.

**Module 7 (Expo):** The Prompt Portfolio is a natural exhibit piece for the AI Expo. Students can demonstrate live prompting at their station.

---

## Materials Checklist

- [ ] `lab-guide.md` — student-facing guide (1 per student or shared link)
- [ ] `challenge-worksheets.md` — printed or digital (1 per student)
- [ ] Devices with working OpenClaw agents
- [ ] Optional: projector for demo + discussion
- [ ] Optional: printed "Prompt Engineering Cheat Sheet" for reference (one-page summary of 6 techniques with examples)

---

## A Note on the Cheat Sheet

Consider creating a simple one-page reference students can keep at their desk during the lab. Something like:

```
PROMPT ENGINEERING CHEAT SHEET

1. SPECIFICITY — Add scope, audience, constraints, format
2. ROLE — "You are a [specific expert] who is [doing X right now]..."
3. FEW-SHOT — Show examples before your task: "Here are 3 examples... Now do this:"
4. CHAIN-OF-THOUGHT — "Think step by step. Show your work."
5. CONSTRAINTS — "Do not... Max X words... Only include... Avoid..."
6. FORMATTING — "Output as a table/JSON/bullet list. Example: [show format]"
7. ITERATE — First response is a draft. Follow up to refine.
```

---

*Teacher Guide — Prompt Engineering Lab | Module 5 | OpenClaw AI Curriculum*
