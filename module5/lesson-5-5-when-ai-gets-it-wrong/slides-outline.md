# Slides Outline — Lesson 5.5: When AI Gets It Wrong

**Module:** 5 — Give Your Agent a Voice  
**Lesson:** 5.5 — When AI Gets It Wrong  
**Format:** ~10 slides, 50-minute period

---

## Slide 1 — Title Slide

**Headline:** When AI Gets It Wrong  
**Subhead:** Hallucinations · Fact-Checking · Cross-Referencing  
**Visual:** Confident-looking robot holding a piece of paper labeled "FACTS" — but the paper has errors circled  
**Note:** Don't read the title slide. Jump immediately to the live demo.

---

## Slide 2 — The Opening Demo

**Headline:** Let's ask AI something specific…  
**Content:** (blank — teacher types live)

**Prompt to type live:**
> "Tell me about the 1987 Nobel Prize in Literature winner and the specific themes of their most celebrated short story collection."

**Note:** Show the output. Then immediately open a new tab to verify. Pause. "Was it right?"

---

## Slide 3 — What Is a Hallucination?

**Headline:** Hallucination: confident, fluent, wrong  
**Content:**
- The model predicts the next token based on patterns — not facts
- "Sounding authoritative" is a pattern in training data
- There is no internal fact-check before output
- The model has no way to know if it's right

**Visual:** The mechanism diagram from Lesson 5.1 — next-token prediction — with an annotation: "Pattern match ≠ truth check"  
**Note:** Ask students: "Do you remember how chatbots work?" Let them explain it before you do.

---

## Slide 4 — Why It Sounds So Confident

**Headline:** Probability doesn't care about truth  
**Content:**
- The training data includes encyclopedias, textbooks, authoritative writing
- All of that writing uses confident language
- The model learned to sound confident — regardless of whether it knows
- This is a feature (fluency) that creates a bug (false confidence)

**Visual:** Two columns — "What sounds confident" vs "What's actually true" — with a gap between them  
**Note:** Quick explanation. Key insight: the model's goal is to generate likely text, not to verify facts.

---

## Slide 5 — Six High-Risk Categories

**Headline:** When to be extra skeptical  
**Content (reveal one at a time):**

1. 📅 Specific dates and statistics
2. 📚 Citations and sources (AI often invents fake papers)
3. 🔢 Calculations and math
4. 📰 Recent events (after training cutoff)
5. 👤 Information about specific, less-famous people
6. ⚠️ Legal, medical, or financial advice

**Visual:** Six warning icons  
**Note:** Ask students: "Which of these surprises you most?" Fake citations are usually the most shocking.

---

## Slide 6 — Hallucination Hunting Lab

**Headline:** 🔍 Your turn: find the lies  
**Content:**

**Prompt 1 (citations):**
> "Give me three academic papers on social media and teen mental health. Include authors, journals, and publication years."

**Prompt 2 (specific facts):**
> "What was the population of Constantinople in 1453? What percentage was Greek Orthodox?"

**Prompt 3 (recent events):**
> [Teacher fills in a post-cutoff event relevant to students]

**Task:** Run each prompt. Mark claims as ✅ Verified / ❌ Wrong / 🟡 Can't verify. Find the real answer.  
**Note:** Keep this slide visible during the lab. Give 10–12 minutes.

---

## Slide 7 — Lab Debrief

**Headline:** What did you find?  
**Content:**
- Which category had the most errors?
- How confident did it sound on the wrong ones?
- Did you notice a pattern?

**Visual:** Tally chart — teacher fills in live based on class results  
**Key finding to name:** AI often sounds MORE confident on wrong answers than right ones.

---

## Slide 8 — The 3-Step Fact-Check Protocol

**Headline:** Your verification playbook  
**Content:**

**Step 1: Flag the claims**
Identify every specific, checkable claim. Number them.

**Step 2: Source each claim independently**
Find at least ONE source that isn't the AI. Ideally two.
- Good: .gov, .edu, peer-reviewed journals, established news
- Bad: other AI outputs, AI-generated content farms

**Step 3: Assess confidence level**
- ✅ Two+ independent sources → safe to use with citation
- 🟡 One source → use with caution
- ❌ No support or contradicted → don't use

**Visual:** Three-step flowchart  
**Note:** Walk through this live with one output from the lab.

---

## Slide 9 — The Bigger Picture

**Headline:** This isn't just about homework  
**Content:**
- Medical misinformation
- Legal hallucinations in court documents
- AI-generated fake quotes from real people
- Misinformation at scale on social media

**Question:**
> "Who is responsible when AI misinformation spreads — the user, the platform, or the company?"

**Visual:** News headline mockups with plausible-sounding AI misinformation  
**Note:** Open discussion. Don't resolve. Let it sit.

---

## Slide 10 — The AI Skeptic's Toolkit + Exit Ticket

**Headline:** Verify. Always.  
**Content:**

**The Toolkit:**
1. Never trust a specific date, stat, or citation without checking
2. Confident tone ≠ accurate
3. Use the 3-step protocol for anything important
4. AI = starting point, not finishing point

**Exit Ticket:**
> Describe a situation where you'd use AI for something important. What claims would you need to verify? How?

**Visual:** Checklist icon  
**Note:** 2 minutes to write. Collect journals.

---

## Teacher Notes — Slide Deck Setup

- The opening demo (slide 2) is the most important moment — choose your hallucination prompt carefully and TEST it beforehand
- Slide 6 (lab) stays visible the whole lab — don't advance until debrief begins
- Slide 9 works well with a quick Mentimeter or show-of-hands poll on "who's responsible"
- Consider having Perplexity AI open in a second tab to show students what source-grounded AI looks like in contrast

---

*Slides for Lesson 5.5 | OpenClaw AI Curriculum | Module 5: Give Your Agent a Voice*
