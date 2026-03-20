# Lesson 5.5 — When AI Gets It Wrong

**Module:** 5 — Give Your Agent a Voice  
**Duration:** 1 period (~50 minutes)  
**Grade Level:** 7–8 (adaptable for 9–12)  
**Prerequisites:** Lessons 5.1–5.4 (students understand how chatbots work and use AI regularly as a tool)

---

## 🔗 Through-Line Connection

> *"You've been using AI as a powerful tool. Now we have to talk about the part that can get you in trouble: it doesn't always tell the truth. And when it lies, it sounds completely confident."*

Lesson 5.5 directly addresses hallucinations — the phenomenon where AI generates confident, fluent, plausible-sounding content that is simply wrong. This lesson isn't about scaring students away from AI. It's about building the habit of verification that separates a naive user from a skilled one. Students who complete this lesson will trust AI more appropriately — and be harder to fool.

**Bridge to Lesson 5.6:** After understanding what AI can and can't verify, students are ready to think about how AI connects to the real world — channels, APIs, and live data — which is exactly what 5.6 covers.

---

## 🎯 Learning Objectives

By the end of this lesson, students will be able to:

1. Define "hallucination" in the context of AI and explain why it happens mechanistically (connecting to Lesson 5.1).
2. Identify at least three categories of AI outputs that are high-risk for errors (dates, citations, calculations, recent events).
3. Apply a 3-step fact-checking process to an AI-generated output.
4. Cross-reference an AI claim using at least two independent sources.
5. Explain why AI sounds confident even when wrong — and what that means for how we use it.

---

## 📋 Materials & Setup

| Item | Notes |
|------|-------|
| Computers / tablets | AI access for each student |
| Projector | For teacher demos |
| Whiteboard | For mapping hallucination categories |
| Fact-Check Worksheet | Print or share (see `fact-check-worksheet.md`) |
| Student journals/notebooks | For exit ticket |

**Teacher Prep:**
- Prepare 3–4 "hallucination prompts" that reliably produce wrong-but-confident AI output
- Good categories: obscure historical dates, fake citations, made-up statistics, fictional "facts" about real people
- Test these with your AI platform before class — outputs vary; know what to expect
- Have Google Scholar and a reliable encyclopedia (Britannica, etc.) accessible for cross-referencing demos

---

## ⏱️ Lesson Outline

### Opening: The Confident Lie (7 min)

**No setup — just the demo:**

Project the AI interface. Type this prompt (or one you've pre-tested):

> *"Tell me about the 1987 Nobel Prize in Literature winner and the specific themes of their most celebrated short story collection."*

Let it answer. The output will sound authoritative. Then:

*"OK, let's check that."*

Open a new tab. Search the actual winner. Compare.

**Discussion:**
- *"Was it right? Wrong? Partially right?"*
- *"How confident did it sound?"*
- *"If you had just copy-pasted that into your essay — what would have happened?"*

**Bridge:** *"This is called a hallucination. And it's one of the most important things to understand about AI. Today we're going to learn what causes it — and how to catch it."*

---

### Segment 1: Why AI Hallucinates (10 min)

**Mechanistic explanation — connect directly to Lesson 5.1:**

Ask: *"Remember how we said chatbots work? What's the core mechanism?"*

Students recall: next-token prediction. The model predicts the most probable next word based on patterns in training data.

**The crucial insight:**
> *"The model doesn't know if something is true. It knows what sounds right — based on patterns. A hallucination happens when the model generates text that sounds like the right pattern for an answer, but isn't actually grounded in fact."*

Draw this on the board:
```
Prompt: "Who won the 1987 Nobel Prize for Literature?"
Model: [searches context window for patterns]
       → "Nobel Prize + Literature + year" patterns → generate plausible-sounding name
       → It produces: confident, fluent, authoritative text
       → It may or may not be right
```

**Why it sounds confident:**
- The model was trained on authoritative text (encyclopedia articles, news, textbooks) that uses confident language
- "Sounding confident" is the pattern — not "being right"
- There's no internal fact-checking step before it outputs

**Key vocabulary:**
- **Hallucination** — AI-generated content that is wrong but presented confidently
- **Grounding** — connecting AI output to verified, real-world sources (the fix)

**Categories of high-risk outputs (list on board):**
1. Specific dates and statistics
2. Citations and sources (AI often invents fake papers, books, URLs)
3. Calculations and math
4. Recent events (past the training cutoff)
5. Information about specific people (especially less-famous people)
6. Legal, medical, or financial advice

---

### Segment 2: Hallucination Hunting Lab (15 min)

**Activity: Find the lies**

Students work in pairs. Each pair gets 3 prompts designed to potentially trigger hallucinations.

**Prompt set (display on board or distribute as worksheet):**

*Prompt 1 (citations):*
> "Give me three academic papers I can cite for my essay on the effects of social media on teen mental health. Include authors, journal names, and publication years."

*Prompt 2 (specific facts):*
> "What was the population of Constantinople in 1453 when it fell to the Ottoman Empire? What percentage of the population was Greek Orthodox?"

*Prompt 3 (recent events — pick something after your AI's training cutoff):*
> "What was the outcome of [recent event students would know about]?"

**Student task:**
1. Run each prompt — paste the output into the fact-check worksheet
2. Mark each claim as: ✅ Verifiable / ❌ Wrong / 🟡 Can't verify
3. For each ❌ or 🟡 — try to find the correct information using Google Scholar, Britannica, or other reliable sources
4. Note: How confident did the AI sound on the wrong ones?

**Circulate and observe.** Common finding: the AI often sounds MORE confident on the things it gets wrong.

**Debrief (3 min):**
- *"What did you find?"*
- *"Which category had the most errors?"*
- *"Did the confident-sounding claims turn out to be wrong more or less than the tentative ones?"*

---

### Segment 3: The 3-Step Fact-Check Protocol (10 min)

**Introduce a repeatable verification process:**

**Step 1: Flag the claims**
Before you use AI output for anything important, identify every specific, checkable claim. Number them.

**Step 2: Source each claim independently**
For each claim, find at least ONE source that isn't the AI. Ideally two sources that don't rely on each other.
- Good sources: Wikipedia as a starting point (check *its* citations), .gov and .edu domains, peer-reviewed journals, established news organizations
- Bad sources: Other AI outputs, sites that aggregate AI content, anonymous forums

**Step 3: Assess confidence level**
After checking:
- ✅ Verified by two+ independent sources → safe to use with citation
- 🟡 Found one source, couldn't corroborate → use with caution, note uncertainty
- ❌ Can't find support, or found contradicting info → don't use, ask AI again or find another source

**Live demo (5 min):**
Take one of the outputs from the lab. Walk through the 3-step protocol in real time, on the projector, step by step. Students follow along.

**Key message:**
> *"This isn't about not trusting AI. It's about trusting AI appropriately — the same way you wouldn't cite Wikipedia without checking its sources. AI is a starting point, not an ending point."*

---

### Segment 4: The Bigger Picture (5 min)

**Discussion — connecting to the broader world:**

> *"Hallucinations aren't just an academic problem. What are some real-world contexts where a wrong AI output could cause serious harm?"*

Guide toward:
- Medical information (wrong dosage, wrong diagnosis)
- Legal information (made-up case law, fake statutes)
- News and journalism (AI-written fake quotes)
- Homework and research (submitting wrong citations)
- Social media (AI-generated misinformation at scale)

**Ask:** *"Who is responsible when AI gets it wrong? The person who asked? The company that built it? The person who shared the wrong information?"*

Let this land without a tidy resolution — it's genuinely contested.

---

### Closing (3 min)

**Summary: The AI Skeptic's Toolkit**
1. Never trust a specific date, statistic, or citation without checking
2. Confident tone ≠ accurate information
3. Use the 3-step protocol for anything that matters
4. AI is a starting point — not a finishing point

**Exit Ticket (in journal, 2 min):**
> *"Describe a situation where you might use AI to help with something important. What specific claims would you need to verify before using the output? How would you verify them?"*

---

## 📊 Assessment

| Method | Description |
|--------|-------------|
| Hallucination Hunting Lab worksheet | Applied identification and verification skill |
| 3-step protocol demo | Did student follow the protocol? Could they explain it? |
| Exit ticket | Shows transfer to a realistic scenario |
| Discussion participation | Engages with the "who's responsible" question |

---

## 🔧 Differentiation

**For students who finish early / advanced:**
- Research: "What is RAG (Retrieval-Augmented Generation)? How does it reduce hallucinations?"
- Challenge: Design a "hallucination-resistant" prompting strategy — how would you ask a question to minimize the chance of getting a wrong answer?
- Explore: What fact-checking tools exist specifically for AI content? (e.g., Perplexity, AI detection tools)

**For students who struggle:**
- Focus on the 3-step protocol — make it concrete and procedural
- Pair students for the hallucination hunting lab
- The categories of high-risk outputs are a simple heuristic — teach these as a "warning list" they can remember

**For ELL students:**
- The "confident tone ≠ accurate information" concept translates across languages
- Invite students to test whether the AI hallucinates differently in their home language (often yes — less training data = more hallucinations)

---

## 💬 Discussion Questions

1. *"AI sounds confident even when it's wrong. What other sources of information have this problem? (Politicians? Advertising? Social media?)"*
2. *"If AI makes up a fake citation, is that a lie? Does it matter that it doesn't 'know' it's lying?"*
3. *"Should AI systems warn you when they're uncertain? Do they? What would it look like if they did?"*
4. *"In what situations is it OK to use AI output without fact-checking? In what situations is it never OK?"*
5. *"Who is responsible when AI misinformation spreads: the user, the platform, the company, or no one?"*

---

## 📎 Slide Outline

See `slides-outline.md` for the full slide-by-slide guide.

**Slide summary:**
1. Title: "When AI Gets It Wrong"
2. Opening demo setup
3. What is a hallucination? (mechanistic explanation)
4. Six categories of high-risk outputs
5. Hallucination Hunting Lab instructions
6. Debrief: What did you find?
7. The 3-step fact-check protocol
8. Live demo: the protocol in action
9. The bigger picture: real-world consequences
10. AI Skeptic's Toolkit summary + exit ticket

---

## 🔗 Connections & Resources

- **Snopes.com** — for fact-checking AI-generated general claims
- **Google Scholar** — for checking academic citation hallucinations
- **Perplexity AI** — a good model of source-grounded AI responses (contrast with non-grounded)
- **Research: "A Survey of Hallucination in Large Language Models" (2023)** — for advanced readers
- **Previous Lesson:** 5.4 — AI as a Study Partner (the risk side of that lesson)
- **Next Lesson:** 5.6 — How Channels Work (moving from AI behavior to AI infrastructure)

---

*Lesson authored for the OpenClaw AI Curriculum | Module 5: Give Your Agent a Voice*
