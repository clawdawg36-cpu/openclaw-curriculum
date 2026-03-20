# OpenClaw Bias Lab — Teacher Guide
## Facilitation Notes, Discussion Tips, and Troubleshooting

---

## At a Glance

| | |
|---|---|
| **Duration** | 60–90 minutes |
| **Grade Level** | 7–12 |
| **Group Size** | Pairs recommended (encourages peer discussion during testing) |
| **Prerequisites** | None required; familiarity with OpenClaw helpful |
| **Sensitivity Level** | Medium — covers topics of fairness and representation. See "Sensitive Topics" section. |
| **Materials** | Devices with OpenClaw access, printed worksheets or digital forms |

---

## Learning Objectives

By the end of this lab, students will be able to:
- Define AI bias and explain multiple types (geographic, demographic, historical, temporal)
- Design and execute controlled experiments to detect AI bias
- Analyze AI outputs for patterns using a structured framework
- Articulate real-world implications of AI bias
- Propose specific, evidence-based improvements to AI training

---

## Why This Lab Matters

Students often arrive with one of two misconceptions about AI:
1. "AI is perfectly objective — it's just math"
2. "AI is secretly evil and designed to harm certain groups"

Neither is accurate, and both are dangerous. This lab builds toward a third view: AI reflects its training data, which reflects the humans who created it and the world they drew it from. Understanding this gives students the tools to use AI critically — and eventually, to build better systems.

This is also a rare opportunity to let students be experts: they're testing something that their teacher may not know the answers to either. Lean into that.

---

## Preparation (Do This Before Class)

### 1. Run the Lab Yourself First
Go through the student guide yourself. Note:
- Which tests produce the clearest results in your environment
- Any topics that are particularly sensitive for your student population
- OpenClaw responses that might need extra discussion

### 2. Prepare Context-Setting
Consider sharing brief background on how large language models are trained:
- Trained on massive text corpora (Common Crawl, Wikipedia, books, etc.)
- ~70–80% of training data is in English despite English being ~17% of the world's languages
- Content about historically marginalized groups is underrepresented relative to population

You don't need to be a technical expert — the key point is: **the training data shapes everything.**

### 3. Know Your Students
Some of the niche topics in the lab involve underrepresented cultures and communities that may be represented in your classroom. This can be a powerful moment of validation ("the AI doesn't know much about my heritage") or a source of frustration. Be prepared for both.

### 4. Printing
If printing worksheets, `bias-worksheet.md` is the most worksheet-like — designed for table completion. `findings-template.md` works better digitally or as a longer homework assignment.

---

## Suggested Timing

### Single Period (60 min)

| Time | Activity |
|------|----------|
| 0–10 min | Introduction: What is AI bias? Why does it matter? |
| 10–15 min | Walk through the testing protocol together (first warm-up as a class) |
| 15–50 min | Student experiment time — bias worksheet (pairs) |
| 50–60 min | Share-out and class discussion using reflection prompts |

### Extended Lab (90 min)

| Time | Activity |
|------|----------|
| 0–10 min | Hook and introduction |
| 10–50 min | Full student guide protocol + bias worksheet |
| 50–65 min | Findings documentation template |
| 65–80 min | Small group discussion (Tier 1 + Tier 2 prompts) |
| 80–90 min | Whole-class synthesis: "What would YOU change?" |

### Two-Period Option

**Day 1:** Introduction + experiment running (collect raw data, fill worksheets)  
**Day 2:** Analysis, findings template, discussion, written reflection

---

## Facilitation Tips

### Opening the Lab

A good hook question: *"How many of you have ever Googled something about your family's culture or heritage and gotten results that felt... off? Or thin? Or like it was written by an outsider?"*

This grounds the abstract concept of bias in something most students have experienced. Follow with: *"That same thing can happen with AI — and today we're going to measure it."*

### During Experiments

- Circulate and ask students to narrate what they're noticing: "What are you seeing? What did you expect?"
- When a student finds a particularly striking gap, invite them to share with the class in real time
- Encourage students to go off-script — the most interesting findings often come from tests they designed themselves
- Remind students: **write down exact quotes from OpenClaw** — vague summaries make for weak evidence

### Common Student Reactions

**"OpenClaw was actually pretty good at everything!"**  
This sometimes happens, especially if students tested popular/well-documented niche subjects (e.g., Día de Muertos is very well-represented online). Help them find less-documented examples or try languages other than English.

**"This proves AI is racist"**  
Redirect: "That's a strong claim. What's your specific evidence? What would 'racist' mean for a text model? Is this intentional design or an emergent property of training data?" The goal is precision, not dismissal of concern.

**"Who cares, it's just AI"**  
Ask: "Where do AI systems like this get used in real life?" Pull up examples: hiring tools, content moderation, medical diagnosis, academic tools. The stakes are real.

**"The AI is just less educated about some things"**  
This is actually a sophisticated observation! Use it to explore: is lack of knowledge the same as bias? What would "fair" AI knowledge look like?

---

## Discussion Facilitation

### Best Opening Questions (choose one):
- "What was the most surprising thing you found?"
- "Which test gave you the biggest gap between mainstream and niche? Why do you think that happened?"
- "If you found something OpenClaw was wrong about, how would you feel if someone used that wrong answer to make a decision about you?"

### Handling Disagreement
Students often disagree about whether observed differences are "really" bias or just reflect reality (e.g., "There IS more English Wikipedia content about WWII than the Biafran War — that's not bias, that's just a fact"). This is a genuinely interesting philosophical question — what IS bias when training on biased data?

Good reframe: "You're right that the data reflects what gets documented. But WHO decides what gets documented? Why has WWII received more documentation? What are the power dynamics behind that?"

### Avoiding False Balance
Be careful not to present "AI can be biased" and "AI is objective" as equally valid positions. The evidence for AI bias is substantial and documented in academic research. Students can be skeptical of their own methodology without being skeptical of the underlying phenomenon.

---

## Sensitive Topics Guidance

### Cultural Topics
Some students may find that their cultural background, religion, or heritage is poorly represented in OpenClaw. This can feel validating ("I knew it!") or painful ("Why doesn't it know about us?"). Create space for both reactions. Frame it as information about a systemic problem, not a judgment on the worth of their culture.

### Demographic Bias Tests
The "swap test" (same question about Bradley Johnson vs. Fatima Al-Hassan) can generate powerful discussion about stereotyping. Be prepared:
- Some students may be surprised the AI doesn't show obvious bias (models have been refined over time)
- Some students may see subtle differences others miss
- Discuss: what does it mean if OpenClaw treats all names identically? Is that enough?

### Historical Events
The Biafran War, the Dirty War in Argentina, and similar events involve real atrocities with living survivors and descendants. Treat them with appropriate gravity — they're not just test cases, they're real history.

---

## Troubleshooting

### "OpenClaw isn't available / isn't working"
This lab can be adapted for ANY accessible LLM: ChatGPT, Google Gemini, Claude.ai. The testing protocol is the same. Consider running the lab with two different AI systems and comparing results — an even richer experiment.

### "Students are getting distracted and not running systematic tests"
Enforce the worksheet structure early. Require students to fill in each row before moving to the next test. Pairs are helpful here — one person types prompts, the other records responses.

### "The responses are too long to record"
Have students summarize or quote one key sentence. The quality rating (1–5) captures the overall assessment; full transcripts aren't necessary.

### "Students are trying to 'break' OpenClaw with inappropriate prompts"
Acknowledge that adversarial testing is actually a real technique in AI safety research — but redirect to the structured protocol. The most useful findings come from parallel comparisons, not edge-case breaking.

---

## Assessment

### Formative
- Circulate and check worksheet tables for specificity (exact prompts, real quotes)
- Listen for students who can explain *why* a gap exists, not just that it exists

### Summative Options

**Option A — Lab Report (Tier 1):** Submit completed `findings-template.md` with at least 8 test logs and a completed pattern analysis.

**Option B — Written Reflection (Tier 2):** Respond to one Tier 3 and one Tier 4 prompt in 400–500 words, citing at least two specific examples from lab data.

**Option C — Recommendation Memo (Tier 3):** Complete Prompt 4.4 (formal recommendation memo) as a structured writing assessment. Requires evidence, analysis, and concrete recommendations.

---

## Extension Ideas

1. **Cross-system comparison:** Run the same tests on two different AI systems and compare results
2. **Language testing:** Run prompts in a non-English language and compare to English prompts about the same topic
3. **Historical snapshot:** Have students research what the internet looked like in 2010 and hypothesize how older AI training data might differ
4. **Policy writing:** Draft a "Bias Mitigation Policy" that AI companies should adopt, based on lab findings
5. **Community audit:** Invite students to test AI knowledge about their own community or heritage — bring in findings to share

---

## Resources for Deeper Learning

- Joy Buolamwini's work on algorithmic bias (MIT Media Lab) — accessible TED Talk available
- "Coded Bias" documentary (Netflix) — excellent classroom film
- AI Now Institute annual reports
- Google's "What-If Tool" for exploring ML fairness
- Timnit Gebru's work on training data representation

---

## Notes from Field Testing

> *"The best moment in this lab is when a student finds something specific and gets genuinely angry about it — in a productive way. 'This is unfair. How do we fix it?' That's the energy we want."*

> *"Don't rush the discussion. The experiment runs itself. The 20 minutes of structured share-out at the end is where the real learning happens."*

> *"Some teachers worry this lab will make students distrust AI entirely. In practice, the opposite happens — students who understand bias become more sophisticated users, not AI-avoiders."*
