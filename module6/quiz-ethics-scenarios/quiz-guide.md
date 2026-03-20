# Module 6 Quiz — Teacher Guide: Ethics Scenarios

**Quiz:** Ethics Scenarios (6 Questions)  
**Module:** Module 6 — Responsible AI  
**Recommended Use:** Discussion starter + light assessment (not pure grading exercise)  
**Time:** 12–15 min quiz + 15–20 min discussion (adjust as needed)

---

## Philosophy of This Quiz

Unlike M4 and M5 quizzes (which focus on technical knowledge with clear right/wrong answers), this quiz is about **ethical reasoning**. The "correct" answers are defensible and well-reasoned — but the real learning happens in *why* students chose what they chose.

**Resist the urge to just mark it correct/incorrect and move on.** Use this quiz as a window into how students think about responsibility, harm, and power.

---

## Quick Reference: Answer Key

| Q | Topic | Answer |
|---|-------|--------|
| 1 | Bias Identification | B |
| 2 | Stakeholder Analysis | B |
| 3 | Responsible Disclosure | C |
| 4 | Usage Policy | B |
| 5 | Guardrail Design | B |
| 6 | Builder Responsibility | B |

---

## Question-by-Question Teaching Notes

### Q1 — Bias Identification (Hiring Algorithm)

**Core concept:** Historical bias in training data.

**Common wrong answer:** Students often pick **A** ("it's broken") because it feels like a technical problem with a technical fix. This is a great teachable moment — the algorithm *is* working correctly. It's doing exactly what it learned to do. The problem is *what it learned from*.

**Discussion prompt:**  
> "If the company promised to collect better data going forward but kept using the old algorithm for now — would that be okay? Why or why not?"

**Stretch question:**  
> "Is it possible to ever fully remove bias from a hiring algorithm? What would 'fair' even mean?"

**Watch for:** Students who dismiss bias because the algorithm has no "intent." This is the key misconception to address — bias doesn't require intent. It's about outcomes.

---

### Q2 — Stakeholder Analysis (Facial Recognition Attendance)

**Core concept:** Who benefits vs. who bears risk. Power asymmetry. Consent.

**Common wrong answer:** Students may pick **A** (everyone benefits equally) because they accept the school's framing that "faster attendance = good for all." Push them to ask: *who defined the problem? Who got to decide the solution?*

**Discussion prompt:**  
> "If students and parents were asked to vote on whether to use this system, do you think it would pass? Does that matter?"

**Stretch question:**  
> "What if the system were 99.9% accurate? Does that change the ethics?"

**Watch for:** Students who think secure data storage = safe. Data security is about protection from external breach, but it doesn't address the power imbalance, consent issues, or chilling effects of surveillance. These are separate concerns.

---

### Q3 — Responsible Disclosure (School Bot Vulnerability)

**Core concept:** What to do when you discover a safety problem in someone else's work.

**Common wrong answer:** **A** (ignore it) often resonates with students who don't want to cause social friction. This is a chance to discuss how inaction is *also a choice* with consequences.

**Discussion prompt:**  
> "What if Jordan reacts badly and accuses Maya of snooping? Does that change what Maya should do?"

**Role-play opportunity:**  
Have two students role-play the Maya/Jordan conversation. What does Maya say to not sound accusatory? This is a real skill.

**Stretch question:**  
> "Is there a version of this where going public (answer B) would actually be the right call? When?"

**Watch for:** Students who pick **D** (exploit it further "to understand it better"). This rationalizes harmful behavior with good-sounding justifications — a pattern worth naming.

---

### Q4 — Usage Policy (Research Agent)

**Core concept:** What a good AI usage policy looks like and why it matters.

**Common wrong answer:** Students may struggle between **B** (correct) and other answers depending on what they think policies are *for*. This is a good time to distinguish policy from documentation, marketing, or restrictions.

**Discussion prompt:**  
> "Have you ever read a terms of service or usage policy? What's usually in them? What's usually missing?"

**Activity idea:**  
Show students a real usage policy (ChatGPT's, Google's, or a classroom tool) and have them identify: what does it say the tool is for? What does it say it's *not* for? What happens when something goes wrong?

**Watch for:** Students who pick **C** (guarantee accuracy). This reflects over-trust in AI outputs. Worth discussing: *what should happen when an AI gets something wrong and someone relied on that wrong answer?*

---

### Q5 — Guardrail Design (Discord Agent)

**Core concept:** Prioritizing safety measures for public-facing AI.

**Common wrong answer:** Students may be drawn to **D** (time restrictions) because it feels like a practical "school hours" rule. This is a good proxy-thinking trap — the restriction sounds responsible but doesn't address the actual risk.

**Discussion prompt:**  
> "After adding the output filter, what's the *next* most important guardrail to add? Rank these: rate limiting, topic restrictions, user authentication, logging/audit trail."

**Technical connection:**  
If your class has covered any agent architecture, connect this to system prompts, content moderation APIs, and prompt injection. Guardrails can exist at multiple layers.

**Watch for:** Students who think the *goal* of guardrails is to restrict usage. Reframe: the goal is to make the agent safe and useful. Restrictions are a means, not the end.

---

### Q6 — Builder Responsibility (Unintended Use)

**Core concept:** Ongoing responsibility doesn't end at deployment. Discovering misuse creates new obligations.

**This is the most philosophically complex question.** Expect disagreement.

**Common split:** Students often split between **A** ("I can't control what people do") and **B** (the correct answer). Both positions reflect real moral intuitions — the debate is worth having.

**Discussion prompt:**  
> "What specifically should Sam do *now*? Let's make a list and discuss the tradeoffs of each option."

Options to explore:
- **Take the tool down** — stops harm, but punishes good-faith users
- **Add restrictions** — harder for misuse, but requires Sam to maintain it
- **Report to a teacher** — appropriate escalation, but might feel like "getting people in trouble"
- **Post a disclaimer** — low effort, probably not enough
- **Do nothing** — still a choice

**Stretch question:**  
> "Do large companies face the same question? When YouTube's algorithm recommends harmful videos it didn't intend to promote — who is responsible?"

**Watch for:** Students drawn to **D** (expulsion). This overcorrects and conflates punishment with responsibility. Good-faith builders shouldn't be penalized for unintended misuse — but they *do* have obligations when they find out.

---

## Grading Guidance

**Suggested approach:** Don't grade on a strict right/wrong curve. Ethics isn't always binary.

| Score | Interpretation |
|-------|----------------|
| 6/6 | Excellent reasoning alignment; invite this student to explain their thinking to the class |
| 4–5/6 | Solid ethical reasoning; use wrong answers as discussion anchors |
| 2–3/6 | Some misconceptions; prioritize Q1 (bias) and Q3 (disclosure) for individual follow-up |
| 0–1/6 | May benefit from re-reading Module 6 materials; consider a re-take after discussion |

**If the whole class misses the same question:** That's a signal the concept needs more instruction, not just grading. Don't move on — go back.

---

## Extension Activities

1. **Ethics Case Study:** Find a real AI ethics story in the news. Identify: What went wrong? Who was harmed? Who was responsible? What should have happened differently?

2. **Write Your Own Scenario:** Have students write a Q7 for this quiz. What ethical situation have *they* observed or wondered about? Exchange and discuss.

3. **Policy Draft:** As a class, write a one-page usage policy for an AI tool the school actually uses (or could use). Present it to administration.

4. **Debate:** "AI builders should be legally liable for foreseeable misuse of their tools." Assign sides, debate, then discuss.

---

## Module 6 Big Ideas (Reinforce These)

- **Bias is inherited, not always intentional.** It lives in data, not just in people.
- **Stakeholder analysis means asking: who has power? Who bears risk?** They're rarely the same group.
- **Responsible disclosure is a skill.** It requires courage, tact, and knowing when to escalate.
- **Policies exist to set shared expectations.** They're not restrictions — they're agreements.
- **Guardrails protect users.** The most important ones address the highest-impact failure modes first.
- **Building something creates responsibility.** That responsibility doesn't disappear when the project ends.

---

*This guide is for teacher use only — do not distribute to students before the quiz.*
