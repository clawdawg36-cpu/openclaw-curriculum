# Teacher Guide
## [M6] Lab — Audit and Govern Your Agent

**For:** Instructors facilitating this lab  
**Module:** 6 — Ethics, Safety, and Responsibility  
**Lab:** Bias Audit + Usage Policy + Guardrail Implementation

---

## Overview for Teachers

This is the most ethically serious lab in the curriculum. Students will:
- Actively probe their agents for harmful or biased behavior
- Write binding-style policy documents
- Implement and try to break each other's safety constraints

**This lab will surface real issues.** Agents will sometimes say things that are biased, unfair, or surprising. That's the point — but it requires careful facilitation to ensure the experience is educational rather than distressing or trivializing.

---

## Before the Lab: Setup Checklist

### Technical Setup (Day Before)

- [ ] Confirm all students have working OpenClaw agents from prior modules
- [ ] Test that SOUL.md edits take effect immediately (restart may be needed)
- [ ] Have a backup plan for students whose agents aren't working (they can audit a demo agent)
- [ ] Print or distribute: bias-audit-worksheet.md, usage-policy-template.md, guardrail-examples.md
- [ ] Pre-load real policy excerpts to project (Anthropic, OpenAI — see links below)

### Policy Excerpts to Source

**Anthropic Acceptable Use Policy:** https://www.anthropic.com/legal/aup  
**OpenAI Usage Policies:** https://openai.com/policies/usage-policies

Print 2–3 paragraphs from each. Focus on sections about harmful content, minors, and misuse. Having physical printed excerpts works better than projecting — students can annotate them.

### Classroom Setup

- Arrange desks for individual work (Periods 1 and 2) and easy pair rotation (Period 3)
- Have sticky notes or a whiteboard ready for the Period 2 debrief
- Keep a list of crisis resources visible (in case any sensitive topics emerge)

---

## Period 1: Bias Audit — Facilitation Guide

### Key facilitation moves

**Opening framing matters.** Don't let students think this is about "catching" the AI doing something wrong for fun. Frame it as professional practice:
> "Before any AI product ships, engineers run audits like this. You're not trolling your agent — you're doing your job as a responsible builder."

**Watch for students who don't find anything.** This is almost always because they tested only safe, comfortable prompts. Walk over and ask:
- "Did you try the same question about two different groups?"
- "Did you try asking it to help with something it shouldn't do?"
- "Did you try a jailbreak prompt?"

**Watch for students who go too far.** Some students will try to generate genuinely harmful content under cover of "it's an audit." Intervene quietly:
> "The goal is to find edge cases, not to create the most harmful possible output. If it refused three times, you've learned what you need to know."

**Handle surprising outputs with calm professionalism.** If a student's agent says something genuinely offensive:
1. Don't alarm the class
2. Acknowledge it privately: "That's exactly what an audit is for. Document it, and we'll work on fixing it."
3. Don't project or share the output publicly unless the student consents and it's educational

### Period 1 debrief: what to expect

Students should share in the debrief. Common themes:
- **"Mine didn't do anything bad"** — Probe: did you test edge cases?
- **"It said something weird when I asked about [demographic]"** — Validate: that's real. Document it.
- **"I asked it something it definitely should refuse and it helped anyway"** — Great finding. That's what you're here for.

---

## Period 2: Usage Policy — Facilitation Guide

### Key facilitation moves

**The hardest part is specificity.** Students default to vague language. Circulate and push:
- "What does 'inappropriate content' mean exactly?"
- "Who is 'everyone'? Can a 30-year-old use this?"
- "What happens when someone reports a problem — who do they contact? How?"

**Connect to real examples.** During the policy-reading phase, ask:
- "What's one thing in the Anthropic policy you didn't expect?"
- "What's missing from these policies that you'd want to know as a user?"

**The peer review process (Warm/Cool/Wonder)** works best when students take the reviewer role seriously. Before they start:
> "Your job isn't to be nice — it's to be useful. A warm that's not specific isn't a warm, it's just politeness. Give the feedback you'd want to receive."

**Common feedback you'll see:**
- 🟢 Warm: "Your limitations section is really honest" / "Clear, specific refusals"
- ❄️ Cool: "Your 'what to do if something goes wrong' section doesn't have a real contact" / "You said users can't do X but you haven't blocked it in your agent"
- 🤔 Wonder: "What if someone uses this to do something you didn't think of?" / "How would you update this policy if you found a new problem?"

---

## Period 3: Guardrail Implementation — Facilitation Guide

### Key facilitation moves

**Frame implementation as concrete accountability:**
> "Your usage policy says your agent won't do X. Now you have to make sure it actually doesn't. That's the difference between a promise and a real constraint."

**Help students pick the right guardrail type for their agent:**

| Agent type | Suggested guardrail |
|-----------|---------------------|
| Homework helper | Refusal to write full assignments; topic restriction to subject area |
| Recipe/cooking | Medical advice redirect; scope lock to food topics |
| Creative writing | Content filter for violent/adult content; age-appropriate language |
| Study tool | Anti-plagiarism refusal; jailbreak resistance |
| Personal journal | Privacy protection; no advice on serious personal crises without resource referral |

**When students say "I can't figure out how to implement it":**  
Direct them to guardrail-examples.md. The examples are copy-paste-ready starting points. They should adapt, not invent from scratch.

**For the adversarial testing phase:**
- This is usually students' favorite part — and the most important
- Encourage genuine attempts to bypass (not just one try)
- Require students to document what they tried, not just whether it worked

**If a guardrail breaks:** That's a success. Treat it as data, not failure:
> "You found a gap. That's exactly what adversarial testing is for. Now you know what to fix."

---

## Sensitive Content Handling

### Topics that may emerge

**Self-harm / mental health:** If a student tests prompts related to self-harm (a legitimate audit category), their agent may respond helpfully or unhelpfully. If you see a student sitting with a concerning response, check in privately. Distinguish between academic audit (normal) and genuine distress (requires different response).

**Discriminatory outputs:** Some agents may produce outputs that are genuinely biased or offensive. Handle these as teaching moments. Don't shame the student — their agent said it, not them. Document it, discuss why it happened, fix it.

**Jailbreak attempts that produce harmful content:** If a student successfully bypasses an agent's guardrails and produces something harmful, intervene:
1. Stop the student from sharing it publicly
2. Use it as a private teaching moment: "That's why guardrails matter"
3. Help them implement a fix

**Students who seem to enjoy finding harmful outputs:** Some students will treat the audit as an opportunity to generate shock content. Redirect clearly:
> "The audit is about identifying risks so you can fix them — not about seeing how bad you can make it. If you can't approach it professionally, we'll do this part differently."

### Crisis protocol

If any student shares something that raises genuine concern about their wellbeing:
- Crisis Text Line: Text HOME to 741741
- 988 Suicide & Crisis Lifeline: Call or text 988
- Follow your school's standard mental health referral protocol

Do not let AI ethics discussions become a vector for students to discuss real distress without proper support.

---

## Differentiation

### For advanced students
- Implement multiple guardrail types
- Write a "red team report" — formal documentation of adversarial testing
- Research and compare three different companies' acceptable use policies
- Propose a guardrail improvement for OpenClaw itself

### For students who struggle
- Provide a pre-filled audit worksheet with 5 prompts already written (they fill in results)
- Use a group policy-writing exercise instead of individual
- Pair with a stronger student for guardrail implementation
- Reduce minimum prompts to 6 (with teacher approval)

### For English Language Learners
- Sentence starters in the usage policy template are designed to be scaffolded — use them
- Allow policy writing in home language first, then translate key sections
- Pair with a bilingual peer for peer review

---

## Assessment Guide

### Bias Audit (30 points)
| Points | Criteria |
|--------|---------|
| 25–30 | 10+ prompts, multiple categories, honest and specific findings, clear severity ratings, 2 meaningful "surprised me" findings |
| 18–24 | 8–9 prompts, some category variety, findings documented, at least 1 surprising finding |
| 10–17 | 6–7 prompts, limited category range, superficial findings |
| 0–9 | Fewer than 6 prompts, all rated "no issue" (suspicious), vague findings |

### Usage Policy (30 points)
| Points | Criteria |
|--------|---------|
| 25–30 | All sections complete, specific language throughout, honest about limitations, realistic data/privacy section, clear refusals |
| 18–24 | Most sections complete, some vague language, reasonable overall |
| 10–17 | Some sections missing or very vague, policy doesn't match actual agent capabilities |
| 0–9 | Incomplete, generic, or doesn't reflect the actual agent |

### Guardrail (30 points)
| Points | Criteria |
|--------|---------|
| 25–30 | Implemented, clearly documented, 3+ test prompts, adversarial test attempted and documented, reflection on results |
| 18–24 | Implemented, 2 test prompts, some adversarial testing |
| 10–17 | Implemented but minimally tested |
| 0–9 | Not implemented or no documentation |

### Reflection (10 points)
| Points | Criteria |
|--------|---------|
| 8–10 | Specific, shows genuine learning, connects to through-line |
| 5–7 | Shows some reflection, could be more specific |
| 0–4 | Generic or cursory |

---

## Extension: Panel Discussion Option

If time allows (or as a separate session), run a "Creator's Panel" where students present:
1. One thing they found in their audit that surprised them
2. One rule in their usage policy and why they chose it
3. Their guardrail — what it is, how it works, whether it held

This creates accountability and lets students see each other's work. It also reinforces the through-line: *you built it, you own it*.

---

## Connections to Module 7+

This lab sets up:
- **Module 7:** Publishing / sharing your agent — usage policies become public-facing
- **Module 8:** Reflection and portfolio — audit findings become evidence of responsible building
- **Through-line culmination:** "You built it. You are responsible for it." becomes real and personal

---

## Quick Reference: Things That Will Go Wrong

| Problem | Response |
|---------|---------|
| Student's agent is broken/offline | Pair them with a working agent for auditing; they can write policy and guardrails for their own |
| Student finds nothing in audit | Walk them through targeted edge-case prompts; audit quality matters more than findings count |
| Student produces genuinely offensive output | Handle privately; use as teaching moment; help fix immediately |
| Guardrail breaks immediately | Celebrate the finding; document; improve |
| Student argues their agent "doesn't need" a guardrail | "Every AI system needs constraints — even the most careful ones. What would you add if a user tried to misuse it?" |
| Peer review devolves into complimenting each other | Model specific feedback; require at least one Cool and one Wonder |

---

*Teacher Guide | Module 6 Lab | openclaw-curriculum*
