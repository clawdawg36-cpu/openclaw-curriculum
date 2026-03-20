# Class Aggregation: Pooling Findings Across Groups

**Teacher use — projected or written on board during class share-out**

This template helps the class see patterns across all groups' findings. Use this after each group's 3-minute report.

---

## Option A: Whiteboard Version

Draw this table on the board and fill it in as groups report:

```
┌─────────────────┬──────────────┬───────────────────────────────┬────────────┐
│ Bias Axis       │ # Tests w/   │ Strongest Finding             │ Confidence │
│                 │ Bias Found   │                               │ (avg)      │
├─────────────────┼──────────────┼───────────────────────────────┼────────────┤
│ A: Gender       │    / total   │                               │            │
├─────────────────┼──────────────┼───────────────────────────────┼────────────┤
│ B: Race/Names   │    / total   │                               │            │
├─────────────────┼──────────────┼───────────────────────────────┼────────────┤
│ C: Geography    │    / total   │                               │            │
├─────────────────┼──────────────┼───────────────────────────────┼────────────┤
│ D: Age          │    / total   │                               │            │
├─────────────────┼──────────────┼───────────────────────────────┼────────────┤
│ E: Mainstream   │    / total   │                               │            │
│   vs. Niche     │              │                               │            │
└─────────────────┴──────────────┴───────────────────────────────┴────────────┘
```

**Class Totals:**
- Total tests run: _______
- Tests where bias was found: _______ (_______%)
- Tests where no bias was found: _______
- Tests where result was unclear: _______

---

## Option B: Digital Spreadsheet (Google Sheets)

Create a shared spreadsheet with these columns. Each group adds their rows during or after their report.

| Group | Axis | Test # | Prompt Summary | Variable Compared | Bias Found? | Confidence | Notes |
|-------|------|--------|----------------|-------------------|-------------|------------|-------|
| 1 | A | 1 | | | | | |
| 1 | A | 2 | | | | | |
| ... | | | | | | | |

**Setup instructions:**
1. Create a new Google Sheet and share with the class
2. Project on screen during share-out
3. Groups add their rows in real time or while others present

---

## Synthesis Questions to Ask After All Groups Report

Use these to draw out patterns from the aggregated data:

**Pattern recognition:**
- *"Look at the table — which axis had the most evidence of bias? Which had the least? Why might that be?"*
- *"Did multiple groups find the same type of finding even on different axes?"*
- *"Were there any surprises — an axis where you expected to find bias but didn't?"*

**Confidence calibration:**
- *"Which findings are we most confident in? What makes a finding credible?"*
- *"Which findings need more testing? What additional tests would you run?"*

**So what?**
- *"If all of these findings are real, what does that tell us about the data OpenClaw was trained on?"*
- *"Who in the real world might be harmed if these biases show up consistently?"*
- *"Is this OpenClaw's fault? The company that made the underlying model? The people who collected the training data? All of them?"*

---

## Patterns Often Found by Classes Running This Workshop

*(Teacher reference — don't share in advance, but useful to know what's typical)*

**Commonly found:**
- Geography axis tends to show the clearest differences — responses about less-known regions are often shorter, vaguer, and more likely to include disclaimers
- Mainstream vs. niche tends to show clear length/depth disparities
- Gender bias often appears in profession contexts — different tone assumptions, different emotional language

**Less predictable:**
- Race/name axis results vary; sometimes students find clear patterns, sometimes not — both outcomes are worth discussing
- Age axis results often surprise students — the AI may be patronizing toward elderly people in ways students hadn't anticipated

**Common student misconceptions to address:**
- *"We didn't find bias, so there's no bias"* — remind students that absence of evidence ≠ evidence of absence; their test design may not have been sensitive enough
- *"This proves OpenClaw is bad"* — bias testing is not an indictment; it's a diagnostic tool. All large AI systems have these patterns to some degree
- *"They could just fix it"* — see `analysis-guide.md` for why this is more complicated than it sounds
