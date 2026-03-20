# AI Explorers — Style Consistency Notes

> **Cross-Curriculum Assembly | Copyediting Pass**
> *Compiled: March 2026*
> *Scope: All available chapters (Ch 1, Ch 2 [missing], Ch 3-4 [combined], Ch 5–15)*

---

## Purpose of This Document

This document records voice, tone, and formatting inconsistencies found during the cross-curriculum copyediting pass, along with the decisions made to resolve them. It serves as the style guide for future chapter authors and revision passes.

---

## Overall Voice Assessment

The textbook as a whole has a **strong, consistent base voice**: warm, direct, slightly conversational, intellectually respectful of middle schoolers without talking down to them. Opening stories across chapters are uniformly high quality — character-driven, grounded in everyday experience, and effective at introducing abstract concepts.

The "Your Agent's Journey" sidebars are consistently formatted and appear in chapters 2–7 (Modules 2–4). They taper off in Modules 5–7 as the focus shifts from building to ethics and futures — which is appropriate given the curriculum arc.

---

## Inconsistencies Found and Resolutions

---

### 1. Chapter Numbering Mismatch — Module 2

**Issue:**
The file `module2/textbook-chapter-2/chapter-2.md` is titled **"Chapter 2: How AI Sees and Hears"** but covers content for what the canonical chapter inventory calls **Chapters 3 and 4**. The Module 2 file label says "Chapter 2" because it was the second textbook chapter file written — before the decision was made to add a dedicated Chapter 2 for AI history (which would make Module 2 content Chapters 3–4).

Additionally, Chapter 1 ends with a teaser that reads:
> *"Up Next → Chapter 2: How Does AI Learn?"*

This is wrong on two counts: (a) Chapter 2 should be "AI Through History," and (b) "How Does AI Learn?" is actually Chapter 7.

**Resolution:**
- The Module 2 chapter file remains **as-written** for now (fix tracked separately).
- For the compiled textbook, Module 2's chapter is treated as covering **Chapters 3 and 4**, with the split between them at Section 5 (the transition from vision to hearing content).
- The Chapter 1 "Up Next" teaser should be updated to: *"Up Next → Chapter 2: AI Through History — From Turing to Today"* when Chapter 2 is written.
- **Action for fix task:** Split `module2/textbook-chapter-2/chapter-2.md` into `chapter-3.md` (vision, Sections 1–4) and `chapter-4.md` (hearing + bias, Sections 5–7), and update cross-references in Chapter 1.

---

### 2. Chapter 1 History Section Overlaps with Missing Chapter 2

**Issue:**
Chapter 1, Section 2 ("What Is AI? Definition, History, and Key Milestones") contains a moderately detailed AI history timeline, from the 1940s through the 2020s. This coverage overlaps with what the planned Chapter 2 ("AI Through History — From Turing to Today") is intended to cover in greater depth.

**Resolution:**
- Chapter 1's history section is appropriate as a *brief overview* — it serves Chapter 1's purpose (orienting students quickly) and doesn't need to be cut.
- When Chapter 2 is written, it should go **deeper** than Chapter 1's overview: more human stories, more nuance, more on the AI winters and why they happened, profiles of key figures not covered in Chapter 1 (Minsky, McCarthy, Hinton, LeCun, etc.).
- **Do not cut** the Ch 1 history section. **Do add** a sentence at the start of Chapter 2 acknowledging the brief overview in Chapter 1: *"In Chapter 1, you got a quick tour of AI history. In this chapter, we slow down and go deeper."*

---

### 3. "Big Question" Formatting — Modules 3 vs. Others

**Issue:**
Chapters 5 and 6 (Module 3) open with an explicit **"🤔 Big Question"** callout box before the opening story. No other chapters use this formatting element. The other chapters move directly into the opening story.

**Examples:**
- Chapter 5: `## 🤔 Big Question` (before opening story)
- Chapter 6: `## Big Question` (before opening story, missing emoji)
- All other chapters: No "Big Question" section; concept questions are embedded in prose

**Resolution:**
The "Big Question" format is a nice pedagogical feature. Two options:
- **Option A (Uniformity):** Remove the explicit "Big Question" box from Chapters 5–6 and instead ensure every chapter's opening story implicitly raises the chapter's central question — which most already do effectively.
- **Option B (Expansion):** Add a standardized "Big Question" callout to every chapter header, positioned between the header metadata and the opening story.

**Recommendation:** **Option B** — adding Big Question callouts to all chapters creates useful visual consistency and helps teachers frame discussions. Future chapter authors should include it as standard template.

**Decision recorded:** Implement Option B in the next revision pass. Chapter authors for Modules 5–7 should add Big Questions when chapters are revised.

---

### 4. Opening Story Character Names — No Conflicts, But Note Recurring Characters

**Issue/Observation (not a conflict — just a note):**
The textbook uses several named student characters across chapters:
- **Maya** — Chapter 1 (morning routine AI), Chapter 6 (Spotify sad Sunday)
- **Jordan** — Chapter 5 (rainy morning decision)
- **Jaylen and Priya** — Chapter 9 (WWI prompt comparison)
- **Amara** — Chapter 10 (fictional scientist report)
- **Marcus** — Chapter 11 (algorithmic risk score)
- **Zara** — Chapter 12 (quiz app data collection)
- **Sofia and James** — Chapter 14 (career paths)

Maya appears in two chapters. This is fine — it could even be intentional continuity. However, no guidance exists for future authors about whether these are meant to be a recurring cast or independent characters.

**Resolution:**
- Maya's recurrence (Ch 1 and Ch 6) is consistent with the curriculum's agent-building narrative, where Maya represents a typical student.
- **Add to style guide:** Future chapter authors may use the established character names for continuity, or create new characters — but should not contradict established characterizations.
- Consider creating a brief "character roster" in the teacher guide so authors know who has been established and what we know about them.

---

### 5. "AI in the Wild" Sidebar Consistency

**Issue:**
The "AI in the Wild" sidebar format is consistent in Chapters 1–8 (Module 1–4) but shows minor variations in Chapters 9–15:
- Chapters 1–8: Sidebar titled `> ### 🌍 AI in the Wild: [Title]` with QR code at end
- Chapters 9–12: Some sidebars drop the globe emoji 🌍 or vary casing
- Chapters 13–15 (Module 7): Some chapters use bullet-point lists inside sidebars instead of narrative paragraphs

**Resolution:**
- Standardize all "AI in the Wild" sidebars to the format established in Chapters 1–8:
  - Start: `> ### 🌍 AI in the Wild: [Descriptive Title]`
  - Body: Narrative paragraph(s), not bullet lists
  - End: `> [QR CODE: Description — Source]`
- **Action for next revision pass:** Audit Chapters 9–15 sidebars and apply standard format.

---

### 6. Vocabulary Table Placement — Minor Variation

**Issue:**
Most chapters place the vocabulary table **before** the OpenClaw Challenges. Chapter 2 (Module 2) places it **after** the chapter summary but formatted differently — as a larger, more detailed table with an extra "module" column that doesn't appear in other chapters.

**Resolution:**
- Standard placement: vocabulary table after chapter summary, before OpenClaw Challenges.
- Standard format: two-column table (Term | Definition), no module column.
- Chapter 2's vocabulary table is more comprehensive than others — this is a strength, not a problem. The extra detail should be preserved, just formatted in the standard two-column layout.

---

### 7. "Your Agent's Journey" Sidebar Tapering — Intentional

**Observation (not an issue):**
The "Your Agent's Journey" sidebars appear consistently in Chapters 2–8 (Modules 2–4), tracking agent capabilities as students build. They are absent from Chapters 9–15 (Modules 5–7).

This is **intentional** — Modules 5–7 shift focus from building capabilities to using, evaluating, and thinking ethically about AI. The agent is now "complete" enough that the capability-building sidebars are no longer needed.

No action required. However, a brief recap of the agent's completed capabilities could be added to Chapter 13 or 15 as a capstone callback.

---

### 8. Tone Shift in Ethics Chapters (Modules 6–7)

**Observation:**
Chapters 11–12 (Module 6) adopt a noticeably more serious, measured tone than earlier chapters. The opening stories (Marcus's algorithmic risk score, Zara's data privacy) carry more emotional weight than the lighter "Maya's Monday morning" or "Jordan's rainy decision."

This is **appropriate and intentional** — the subject matter demands it. However, Chapter 11 in particular could benefit from a brief reorientation sentence early in the chapter acknowledging that the material is heavier: something like *"This chapter tackles some hard questions. That's okay — these questions matter, and you're ready for them."*

**Resolution:**
No structural change needed. Recommend adding a brief "reorientation" sentence to Chapter 11's introduction in the next revision pass, to signal the tonal shift deliberately rather than abruptly.

---

### 9. QR Code Placeholder Formatting

**Issue:**
All chapters use `[QR CODE: Description — Source]` as a placeholder for actual QR codes. This is consistent, but the descriptions vary in detail:
- Some: `[QR CODE: Turing Test explainer video — CS for All / Code.org]` (detailed, good)
- Some: `[QR CODE: Link]` (too vague for production)

**Resolution:**
Before final production layout, all QR code placeholders should be audited for:
1. A clear description of what the QR code links to
2. A specific source or URL
3. Confirmation that the linked resource is still live and accessible

This is a production task, not a content task — flag for the layout/production phase.

---

### 10. Reading Level Consistency

**Assessment:**
A sample readability analysis across chapters (Flesch-Kincaid estimation):
- Chapters 1–6: Grade 6–7 level ✅
- Chapters 7–10: Grade 6–7 level, with occasional grade 8–9 technical passages ✅ (acceptable)
- Chapters 11–12: Grade 7–8 level ✅
- Chapters 13–15: Grade 7–8 level, slightly more sophisticated sentence structures ✅

The reading level is consistent with the target (grades 6–8). Chapters 13–15 skew slightly harder, which is appropriate — students at the end of the course have built more vocabulary and reading stamina.

No action required.

---

## Summary of Actions Required

| Priority | Issue | Action | When |
|----------|-------|--------|------|
| 🔴 High | Ch 2 missing | Write Chapter 2 (AI history, deep dive) | Fix task |
| 🔴 High | Module 2 chapter numbering | Split chapter-2.md into chapter-3.md + chapter-4.md | Fix task |
| 🔴 High | Ch 1 "Up Next" teaser | Update to reference correct Ch 2 title | With Ch 2 fix |
| 🟡 Medium | "Big Question" uniformity | Add Big Question callouts to all chapters | Next revision pass |
| 🟡 Medium | AI in the Wild sidebar format | Standardize emoji/format in Ch 9–15 | Next revision pass |
| 🟡 Medium | Ch 11 tone reorientation | Add brief "this chapter is heavier" sentence | Next revision pass |
| 🟢 Low | QR code descriptions | Audit and complete all QR placeholders | Production phase |
| 🟢 Low | Character roster | Create reference document for future authors | Teacher guide |
| 🟢 Low | Vocabulary table format | Standardize Ch 2 table to two-column format | Next revision pass |

---

## Resolved Decisions (Voice/Style Guide for Future Authors)

The following decisions are now **locked** as the textbook's style standards:

1. **Reading level:** Target grades 6–7 for most content; up to grade 8 acceptable for Module 7 chapters.
2. **Opening stories:** 400–700 words, character-driven, everyday relatable context, present tense preferred.
3. **Section headers:** `##` for main sections, `###` for subsections. Use sentence case, not title case.
4. **Vocabulary:** Bold first use of new terms in body text. All new terms must appear in the chapter's vocabulary table.
5. **"Big Question":** Add to all chapters using emoji 🤔 and format `## 🤔 Big Question`.
6. **"AI in the Wild" sidebars:** Use `> ### 🌍 AI in the Wild: [Title]` + narrative paragraphs + QR code.
7. **"Your Agent's Journey" sidebars:** Required for chapters in Modules 2–4. Optional for Modules 5–7.
8. **OpenClaw Challenges:** Minimum 2, maximum 4 per chapter. Include goal, instructions, and discussion questions.
9. **Review questions:** 4–6 per chapter, ranging from recall to analysis. Include answer guidance (not just answers).
10. **Character names:** Use established names (Maya, Jordan, Jaylen, Priya, Amara, Marcus, Zara) for continuity when possible; introduce new characters when needed.
11. **Tone:** Warm, direct, intellectually respectful. Never condescending. Never sycophantic. Treat students as smart people who are learning something real.

---

*Cross-Curriculum Assembly | AI Explorers Companion Textbook | March 2026*
