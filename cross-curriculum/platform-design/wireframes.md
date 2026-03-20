# AI Explorers Online — Text-Based Wireframes

**Version:** 1.0  
**Date:** March 2026  
**Format:** Text-based wireframes for key screens. Dimensions assume tablet-first layout (768px+). Mobile adaptations noted.

---

## Screen Index

1. [Student Onboarding — Class Code Entry](#1-student-onboarding--class-code-entry)
2. [Student Onboarding — Account Setup](#2-student-onboarding--account-setup)
3. [Student Dashboard (Home)](#3-student-dashboard-home)
4. [Module Page](#4-module-page)
5. [Agent Design Journal — Entry View](#5-agent-design-journal--entry-view)
6. [Badge Collection Page](#6-badge-collection-page)
7. [Leaderboard Page](#7-leaderboard-page)
8. [Quiz Screen](#8-quiz-screen)
9. [Teacher Dashboard (Home)](#9-teacher-dashboard-home)
10. [Teacher — Class Roster / Progress Table](#10-teacher--class-roster--progress-table)
11. [Teacher — Individual Student Detail](#11-teacher--individual-student-detail)
12. [Teacher — Assignment Creator](#12-teacher--assignment-creator)
13. [Discussion Forum — Student View](#13-discussion-forum--student-view)
14. [Discussion Forum — Teacher Moderation View](#14-discussion-forum--teacher-moderation-view)
15. [Badge Unlock Animation Overlay](#15-badge-unlock-animation-overlay)
16. [Parental Consent Email](#16-parental-consent-email)

---

## 1. Student Onboarding — Class Code Entry

**Purpose:** First screen a student sees. No account needed yet. Minimal friction.

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│    🤖  AI EXPLORERS ONLINE                                      │
│                                                                 │
│    ─────────────────────────────────────────────────────        │
│                                                                 │
│         Welcome, future AI Explorer! 🚀                         │
│                                                                 │
│         Enter your class code to get started.                   │
│         (Your teacher wrote it on the board)                    │
│                                                                 │
│         ┌─────────────────────────────────┐                     │
│         │         _ _ _ _ _ _            │  ← 6-character code  │
│         └─────────────────────────────────┘                     │
│                                                                 │
│         [ JOIN CLASS → ]                                        │
│                                                                 │
│    ─────────────────────────────────────────────────────        │
│                                                                 │
│    Already have an account?  [ Sign In ]                        │
│                                                                 │
│    Teacher?  [ Teacher Sign In ]                                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Notes:**
- No email, no password, no personal info collected here
- Class code auto-formats with dashes as typed (e.g. "XK3-7P9")
- "Join Class" button activates when 6 chars entered
- Mobile: full-screen, large input, numeric-friendly keyboard suggestion

---

## 2. Student Onboarding — Account Setup

**Purpose:** After class code verified. Student picks display name and agent avatar.

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│    🤖  AI EXPLORERS ONLINE                        Step 1 of 2  │
│                                                                 │
│    ─────────────────────────────────────────────────────        │
│                                                                 │
│    You joined:  Ms. Rivera's Period 3 — Room 204  ✅            │
│                                                                 │
│    ─────────────────────────────────────────────────────        │
│                                                                 │
│    STEP 1: Choose your display name                             │
│    (This is what classmates see — not your real name)           │
│                                                                 │
│    ┌─────────────────────────────────────────┐                  │
│    │ Display name...                         │                  │
│    └─────────────────────────────────────────┘                  │
│                                                                 │
│    ─────────────────────────────────────────────────────        │
│                                                                 │
│    STEP 2: Name your AI agent                                   │
│                                                                 │
│    ┌─────────────────────────────────────────┐                  │
│    │ Agent name (e.g. "ARIA", "MAX-3000")    │                  │
│    └─────────────────────────────────────────┘                  │
│                                                                 │
│    ─────────────────────────────────────────────────────        │
│                                                                 │
│    STEP 3: Pick your agent's avatar                             │
│                                                                 │
│    [🤖] [👾] [🐉] [🦊] [🌟] [🔵] [🟣] [🦾]                   │
│    [🐱] [🐸] [⚡] [🔮] [🚀] [🏆] [🎯] [💡]                   │
│                                  ↑ 16 preset emoji avatars      │
│                                                                 │
│    Or [ Upload your own image ]                                 │
│                                                                 │
│    [ CREATE MY AGENT → ]                                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Notes:**
- Profanity filter on display names
- Agent name max 20 chars
- Custom image upload: 500KB max, JPEG/PNG only, no face detection required
- Step 2 of 2 is parental consent pending screen (for under-13) or direct to dashboard (13+)

---

## 3. Student Dashboard (Home)

**Purpose:** Primary home screen. At-a-glance progress + motivation + navigation.

```
┌─────────────────────────────────────────────────────────────────┐
│  [🤖 AI EXPLORERS]       [🔔]  [👾 ARIA]  Ms. Rivera · P3       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────────────────────┐  ┌─────────────┐ │
│  │  👾  ARIA                                │  │   MY BADGES │ │
│  │  ─────────────────────────────────────  │  │             │ │
│  │  ⭐ 1,240 XP                             │  │  🐣 👁️ 🧠  │ │
│  │  Module 4 — ML Engineer                  │  │  📚 🔒 🔒  │ │
│  │  [████████████░░░░░░░░] 60% complete     │  │             │ │
│  │                                          │  │  4 / 7 🏅   │ │
│  │  [ Continue Module 4 → ]                 │  │ [View All]  │ │
│  └──────────────────────────────────────────┘  └─────────────┘ │
│                                                                 │
│  YOUR JOURNEY  ─────────────────────────────────────────────── │
│                                                                 │
│  [🐣 M1]──[👁️ M2]──[🧠 M3]──[📚 M4 ▶]──[🔒 M5]──[🔒 M6]──[🔒 M7] │
│   DONE     DONE     DONE    IN PROGRESS   LOCKED  LOCKED  LOCKED │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  RECENT ACTIVITY                        WHAT'S NEXT            │
│  ────────────────────                   ─────────────────────   │
│  ✅ Lab: Sentiment Classifier            📝 Lesson 4-4:         │
│     2 days ago · +50 XP                    Overfitting          │
│                                            → Earn 30 XP         │
│  🏅 Earned: ML Engineer badge                                   │
│     3 days ago · +100 XP               [ Start Lesson → ]      │
│                                                                 │
│  📝 Journal Entry M3 saved                                      │
│     5 days ago · +40 XP                                         │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  CLASS LEADERBOARD (this week)                                  │
│  1. 🥇 StarCoder99  — 1,410 XP                                  │
│  2. 🥈 ARIA (you)   — 1,240 XP  ← highlighted                  │
│  3. 🥉 RoboKnight   — 1,190 XP                                  │
│  [See Full Leaderboard]                                         │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  [🏠 Home] [📚 Modules] [📓 Journal] [🏅 Badges] [💬 Forum]   │
└─────────────────────────────────────────────────────────────────┘
```

**Notes:**
- Bottom nav bar is persistent on all student screens
- Leaderboard section hidden if teacher has disabled it
- "Continue Module" button always points to next incomplete item
- XP counter animates upward when page loads if new XP was earned since last visit
- Mobile: Agent card is full-width; module journey scrolls horizontally; bottom nav is fixed

---

## 4. Module Page

**Purpose:** Full content hub for one module. Shows all content items + progress.

```
┌─────────────────────────────────────────────────────────────────┐
│  [← Back]  MODULE 4: Give Your Agent the Ability to Learn       │
│            📚  ML Engineer Badge                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  📚  GIVE YOUR AGENT THE ABILITY TO LEARN                       │
│  Capability Unlock: Train a model and integrate it into         │
│  your agent so it learns from real data.                        │
│                                                                 │
│  Progress: [████████████████░░░░░░░░] 60%  •  780 / 1,300 XP   │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  LESSONS  ──────────────────────────────────────────────────── │
│                                                                 │
│  ✅ Lesson 4-1: What Is Machine Learning?          +30 XP DONE  │
│  ✅ Lesson 4-2: Training Data                      +30 XP DONE  │
│  ✅ Lesson 4-3: Supervised Learning Lab            +30 XP DONE  │
│  ▶  Lesson 4-4: Overfitting                        +30 XP  ←   │
│  🔒 Lesson 4-5: Bias in Training Data              +30 XP       │
│  🔒 Lesson 4-6: Comparing Models                  +30 XP       │
│                                                                 │
│  TUTORIALS  ────────────────────────────────────────────────── │
│                                                                 │
│  ✅ How AI Learns (Video)                          +20 XP DONE  │
│  🔒 ML for Kids Walkthrough (Video)               +20 XP       │
│                                                                 │
│  LABS  ─────────────────────────────────────────────────────── │
│                                                                 │
│  ✅ Lab: Sentiment Classifier                      +50 XP DONE  │
│  🔒 Lab: Bias Testing Workshop                    +50 XP       │
│  🔒 Lab: Integrate Your Model                     +50 XP       │
│                                                                 │
│  ACTIVITIES  ───────────────────────────────────────────────── │
│                                                                 │
│  ✅ Activity: Human Learning Machine Game          +20 XP DONE  │
│  🔒 Activity: Labeling Sprint                     +20 XP       │
│                                                                 │
│  QUIZ  ──────────────────────────────────────────────────────  │
│                                                                 │
│  ✅ Quiz: ML Concepts                        78% · +50 XP DONE  │
│                                                                 │
│  INTERACTIVE TOOL  ─────────────────────────────────────────── │
│                                                                 │
│  🔒 Interactive Training Simulator                +30 XP       │
│     [Unlocks after Lab: Sentiment Classifier]                   │
│                                                                 │
│  JOURNAL  ───────────────────────────────────────────────────  │
│                                                                 │
│  ✅ Journal Entry — Module 4                      +40 XP DONE  │
│     Last edited: 3 days ago  [Edit →]                           │
│                                                                 │
│  DISCUSSION  ───────────────────────────────────────────────── │
│                                                                 │
│  💬 Module 4 Forum (12 posts)                 [Join Discussion] │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  🏅 ML ENGINEER BADGE                                           │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ Earn this badge by completing:                           │  │
│  │  ✅ Lessons 4-1 through 4-5                              │  │
│  │  ✅ Lab: Sentiment Classifier                            │  │
│  │  🔒 Lab: Integrate Your Model                           │  │
│  │  ✅ Journal Entry M4                                     │  │
│  │                                                          │  │
│  │  3 of 4 criteria met — almost there!                     │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  [🏠 Home] [📚 Modules] [📓 Journal] [🏅 Badges] [💬 Forum]   │
└─────────────────────────────────────────────────────────────────┘
```

**Notes:**
- Locked items show lock icon and prerequisite hint
- Completed items show checkmark + XP earned
- Current/next item has "▶" indicator and subtle highlight
- Badge progress card is always visible at bottom, updates live as criteria are met
- Mobile: single-column layout; section headers collapse

---

## 5. Agent Design Journal — Entry View

**Purpose:** Student writes and saves their journal entry for a module.

```
┌─────────────────────────────────────────────────────────────────┐
│  [← Back to M4]  📓 AGENT DESIGN JOURNAL — Module 4           │
│                  Last saved: 3 days ago  [💾 Save]              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  YOUR AGENT THIS MODULE                                         │
│  ─────────────────────────────────────────────────────────────  │
│  Agent: [👾 ARIA]   Name: ARIA                                  │
│                                                                 │
│  Capability Tracker — what can ARIA do now?                     │
│  ✅ My agent has a name and personality (M1)                    │
│  ✅ My agent can see images (M2)                                │
│  ✅ My agent has a custom skill (M3)                            │
│  ✅ My agent was fine-tuned on custom data (M4) ← new this mod  │
│  ☐ My agent has a voice (M5)                                   │
│  ☐ My agent is reachable via a channel (M5)                    │
│  ☐ My agent has a usage policy (M6)                            │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  REFLECTION PROMPTS                                             │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  1. What did you train your model on? What problem does        │
│     it solve?                                                   │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ I trained ARIA on movie review data to tell if a review │   │
│  │ is positive or negative. I used about 500 examples      │   │
│  │ and it got to 84% accuracy...                           │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  2. What surprised you about how training data affects          │
│     the model?                                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ I was surprised that when I only used positive reviews  │   │
│  │ for training, the model thought everything was good.    │   │
│  │ Balance matters a lot!                                  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  3. What's one thing you'd do differently if you could          │
│     retrain the model?                                          │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Type your answer here...                                │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  FREE WRITE — What changed for ARIA this module?                │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Type freely here — this is your space...                │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  SCREENSHOT (optional)                                          │
│  [ + Add screenshot of your agent in action ]                   │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  Privacy: 🔒 Only you can see this journal                      │
│  [ Share with teacher for feedback ]                            │
│                                                                 │
│  [ 💾 Save Journal Entry ]          [ + 40 XP when saved ]     │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  [🏠 Home] [📚 Modules] [📓 Journal] [🏅 Badges] [💬 Forum]   │
└─────────────────────────────────────────────────────────────────┘
```

**Notes:**
- XP only awarded on first save per module entry
- Subsequent edits save silently with no XP change
- Text areas auto-expand
- "Share with teacher" creates a one-time read link; teacher cannot edit or comment (Phase 1)
- Mobile: single-column, full-width text areas

---

## 6. Badge Collection Page

**Purpose:** Gallery of all earned and locked badges.

```
┌─────────────────────────────────────────────────────────────────┐
│  [← Back]  🏅 MY BADGES — ARIA                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  4 of 7 module badges earned  •  ⭐ 1,240 XP total             │
│                                                                 │
│  MODULE BADGES  ────────────────────────────────────────────── │
│                                                                 │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐            │
│  │  🐣           │ │  👁️           │ │  🧠           │           │
│  │  AI Pioneer  │ │ Vision Build.│ │ Knowledge    │            │
│  │              │ │              │ │ Architect    │            │
│  │ Earned       │ │ Earned       │ │ Earned       │            │
│  │ Oct 12, 2025 │ │ Nov 3, 2025  │ │ Nov 24, 2025 │            │
│  └──────────────┘ └──────────────┘ └──────────────┘            │
│                                                                 │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐            │
│  │  📚           │ │  🔒          │ │  🔒          │            │
│  │  ML Engineer │ │  Channel     │ │  Ethics      │            │
│  │              │ │  Commander   │ │  Guardian    │            │
│  │ Earned       │ │              │ │              │            │
│  │ Dec 8, 2025  │ │ [See Module] │ │ [See Module] │            │
│  └──────────────┘ └──────────────┘ └──────────────┘            │
│                                                                 │
│  ┌──────────────┐                                               │
│  │  🔒          │                                               │
│  │  AI Explorer │                                               │
│  │  (Capstone)  │                                               │
│  │ [See Module] │                                               │
│  └──────────────┘                                               │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  ACHIEVEMENT BADGES  ───────────────────────────────────────── │
│                                                                 │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐            │
│  │  💯           │ │  📓           │ │  🔒          │            │
│  │  Perfectionist│ │ Journal      │ │  Streak      │            │
│  │              │ │  Keeper      │ │  Scholar     │            │
│  │ Earned!      │ │ In Progress  │ │ 5 days in    │            │
│  │              │ │ 4/7 entries  │ │ a row needed │            │
│  └──────────────┘ └──────────────┘ └──────────────┘            │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  [ 📥 Download Badge Card (PNG) ]                               │
│  Share your achievement — great for portfolios!                 │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  [🏠 Home] [📚 Modules] [📓 Journal] [🏅 Badges] [💬 Forum]   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 7. Leaderboard Page

**Purpose:** Optional class ranking by XP. Teacher-controlled.

```
┌─────────────────────────────────────────────────────────────────┐
│  [← Back]  🏆 CLASS LEADERBOARD — Ms. Rivera's Period 3        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Filter: [All Time ▼]  [This Module ▼]  [This Week ▼]          │
│                                                                 │
│  Rank  Explorer          XP      Badges                         │
│  ─────────────────────────────────────────────────────────────  │
│  🥇 1  StarCoder99        1,410   🐣👁️🧠📚                    │
│  🥈 2  ARIA (you!) ←      1,240   🐣👁️🧠📚                    │
│  🥉 3  RoboKnight         1,190   🐣👁️🧠                      │
│     4  NeuralNova         1,050   🐣👁️🧠                      │
│     5  ByteMaster          980   🐣👁️                         │
│     6  QuantumFox          920   🐣👁️                         │
│     7  DataWizard          870   🐣👁️                         │
│     8  AlgoAce             800   🐣                            │
│     9  CircuitSage         760   🐣                            │
│    10  Anonymous Explorer  720   🐣                            │
│        (opted out)                                              │
│    ...                                                          │
│    18  (your class has 18 students)                             │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  Your rank: 2nd of 18 students 🎉                               │
│                                                                 │
│  Want to opt out of the leaderboard?                            │
│  [ Show me as "Anonymous Explorer" instead ]                    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  [🏠 Home] [📚 Modules] [📓 Journal] [🏅 Badges] [💬 Forum]   │
└─────────────────────────────────────────────────────────────────┘
```

**Notes:**
- If teacher has disabled leaderboard: this page shows "Leaderboard not enabled for this class" message
- No cross-class or school-wide leaderboards
- "Anonymous Explorer" option is student-controlled; rank is still included, name hidden

---

## 8. Quiz Screen

**Purpose:** Embedded auto-graded quiz. Immediate feedback, XP reward.

```
┌─────────────────────────────────────────────────────────────────┐
│  [← Exit Quiz]  Quiz: ML Concepts  •  Module 4                  │
│                 Question 3 of 10  [▓▓▓░░░░░░░] 30%              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  QUESTION 3                                                     │
│                                                                 │
│  When a model performs very well on training data but           │
│  poorly on new data, this is called:                            │
│                                                                 │
│  ○  A) Underfitting                                             │
│                                                                 │
│  ○  B) Overfitting  ← (correct answer, shown after submit)      │
│                                                                 │
│  ○  C) Normalization                                            │
│                                                                 │
│  ○  D) Regularization                                           │
│                                                                 │
│  [ CHECK ANSWER ]                                               │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  [After answering — feedback panel appears:]                    │
│                                                                 │
│  ✅ Correct!                                                     │
│  Overfitting happens when a model "memorizes" the training      │
│  data instead of learning general patterns. It's like           │
│  memorizing test answers instead of understanding the topic.    │
│                                                                 │
│  [ NEXT QUESTION → ]                                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

[After final question — Results screen:]

┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  🎉 Quiz Complete!                                              │
│                                                                 │
│  You scored:  78%  (8 / 10 correct)                             │
│                                                                 │
│  XP Earned This Quiz:                                           │
│  +25 XP  Completion                                             │
│  +25 XP  Scored 70%+                                            │
│  ─────────────────                                              │
│  +50 XP  Total                                                  │
│                                                                 │
│  Want a higher score?  [ Retake Quiz ]                          │
│  (No additional XP for retakes, but practice helps!)            │
│                                                                 │
│  [ Back to Module 4 → ]                                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 9. Teacher Dashboard (Home)

**Purpose:** Teacher's home screen. Class health at a glance.

```
┌─────────────────────────────────────────────────────────────────┐
│  [🤖 AI EXPLORERS]              [+ New Class] [👤 Ms. Rivera ▼] │
├─────────────────────────────────────────────────────────────────┤
│  Period 3 — Room 204  ▼  (switch class)                         │
│  Class code: XK3-7P9   18 students enrolled                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  CLASS OVERVIEW                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌─────┐ │
│  │   18         │  │  1,085       │  │     47       │  │  4  │ │
│  │  Students    │  │  Avg XP      │  │  Badges      │  │ Due │ │
│  │  (15 active  │  │  per student │  │  earned      │  │Soon │ │
│  │   this week) │  │              │  │  this week   │  │     │ │
│  └──────────────┘  └──────────────┘  └──────────────┘  └─────┘ │
│                                                                 │
│  MODULE DISTRIBUTION                                            │
│  ─────────────────────────────────────────────────────────────  │
│  M1 ████████████████████ 18 (all complete)                      │
│  M2 ███████████████████  17                                     │
│  M3 █████████████████    15                                     │
│  M4 ████████████         12 ← most students here               │
│  M5 ████                  4                                     │
│  M6 ░                     1                                     │
│  M7 ░                     0                                     │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  RECENT ACTIVITY FEED                   ASSIGNMENTS             │
│  ──────────────────────                 ──────────────────────  │
│  🏅 StarCoder99 earned                  ⏰ Lab: Integrate Model  │
│     ML Engineer badge (2h ago)              Due Apr 15 · 6/18  │
│                                             complete            │
│  📝 12 students submitted                                       │
│     M4 journal entry (today)            ⏰ M4 Quiz              │
│                                             Due Apr 10 · 14/18 │
│  💬 New post in M4 forum                    complete            │
│     (needs review)                                              │
│                                         [ + Create Assignment ] │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  [ 👥 View Full Roster ]  [ 📊 Export Progress CSV ]           │
│  [ 💬 Forum Moderation ]  [ 📢 Post Announcement ]             │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  [📊 Dashboard] [👥 Students] [📋 Assignments] [💬 Forum] [⚙️]  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 10. Teacher — Class Roster / Progress Table

**Purpose:** Per-student progress at a glance. Sortable/filterable.

```
┌─────────────────────────────────────────────────────────────────┐
│  [← Dashboard]  👥 STUDENTS — Period 3                          │
│  Search: [_______________]  Sort by: [XP ▼]  Filter: [All ▼]   │
├──────────────────┬───────┬───────┬─────────┬──────────┬────────┤
│  Student         │ Mod.  │ Prog. │   XP    │  Badges  │  Last  │
│                  │       │       │         │          │ Active │
├──────────────────┼───────┼───────┼─────────┼──────────┼────────┤
│ StarCoder99      │  M4   │  72%  │  1,410  │ 🐣👁️🧠📚 │ Today  │
│ ARIA (Rivera, J) │  M4   │  60%  │  1,240  │ 🐣👁️🧠📚 │ 2d ago │
│ RoboKnight       │  M4   │  55%  │  1,190  │ 🐣👁️🧠   │ Today  │
│ NeuralNova       │  M4   │  48%  │  1,050  │ 🐣👁️🧠   │ 3d ago │
│ ByteMaster       │  M3   │  90%  │    980  │ 🐣👁️     │ 1d ago │
│ QuantumFox       │  M3   │  75%  │    920  │ 🐣👁️     │ Today  │
│ DataWizard       │  M3   │  60%  │    870  │ 🐣👁️     │ 5d ago │
│ AlgoAce          │  M2   │  85%  │    800  │ 🐣        │ Today  │
│ CircuitSage      │  M2   │  70%  │    760  │ 🐣        │ 2d ago │
│ TechStar         │  M2   │  55%  │    720  │ 🐣        │ 6d ago │
│ ...              │  ...  │  ...  │   ...   │   ...    │  ...   │
│ (18 rows total)  │       │       │         │          │        │
├──────────────────┴───────┴───────┴─────────┴──────────┴────────┤
│                                                                 │
│  ⚠️ 3 students haven't logged in this week — [View]             │
│                                                                 │
│  [ 📊 Export CSV ]                                              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Notes:**
- Click any row → individual student detail view
- "Last Active" flagged red if > 7 days
- Filter options: By module, By badge status, By last active
- Export CSV: display names + XP + badge status + module progress (no personal info beyond display name)

---

## 11. Teacher — Individual Student Detail

**Purpose:** Drill-down on one student's progress. No journal content shown.

```
┌─────────────────────────────────────────────────────────────────┐
│  [← Back to Roster]  ARIA  (Rivera, J.)  •  Display: "ARIA"    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ⭐ 1,240 XP  •  4 Module Badges  •  Last Active: 2 days ago   │
│                                                                 │
│  MODULE PROGRESS                                                │
│  ─────────────────────────────────────────────────────────────  │
│  ✅ M1 — AI Pioneer          100% complete  •  Oct 12, 2025     │
│  ✅ M2 — Vision Builder      100% complete  •  Nov 3, 2025      │
│  ✅ M3 — Knowledge Architect 100% complete  •  Nov 24, 2025     │
│  ▶  M4 — ML Engineer          60% complete  •  In Progress      │
│     M5–M7 — Locked                                              │
│                                                                 │
│  QUIZ SCORES (M4)                                               │
│  ─────────────────────────────────────────────────────────────  │
│  Quiz: ML Concepts                  78%  (Dec 2025)             │
│  (M1–M3 scores available on expand)                             │
│  [ ▼ Show all quiz history ]                                    │
│                                                                 │
│  ASSIGNMENTS                                                    │
│  ─────────────────────────────────────────────────────────────  │
│  ✅ Lab: Sentiment Classifier        Complete  Dec 8, 2025       │
│  ⏰ Lab: Integrate Your Model        Due Apr 15  •  Not started  │
│  ⏰ M4 Quiz                          Due Apr 10  •  Complete ✅  │
│                                                                 │
│  BADGES EARNED                                                  │
│  ─────────────────────────────────────────────────────────────  │
│  🐣 AI Pioneer           Oct 12, 2025                           │
│  👁️ Vision Builder        Nov 3, 2025                           │
│  🧠 Knowledge Architect  Nov 24, 2025                           │
│  📚 ML Engineer           Dec 8, 2025                           │
│                                                                 │
│  JOURNAL                                                        │
│  ─────────────────────────────────────────────────────────────  │
│  🔒 Journal content is private to the student.                  │
│     If they've shared a link, view it here:                     │
│  [ Enter shared journal link ]                                  │
│                                                                 │
│  TEACHER NOTES (private — not visible to student)               │
│  ─────────────────────────────────────────────────────────────  │
│  ┌────────────────────────────────────────────────────────┐     │
│  │ Private notes about this student's progress...        │     │
│  └────────────────────────────────────────────────────────┘     │
│  [ Save Note ]                                                  │
│                                                                 │
│  [ 📧 Reset Student Access Code ]  [ 🗑️ Remove Student ]        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 12. Teacher — Assignment Creator

**Purpose:** Link curriculum content to an assignment with deadline.

```
┌─────────────────────────────────────────────────────────────────┐
│  [← Back]  📋 CREATE ASSIGNMENT — Period 3                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Assignment Title                                               │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Complete Module 4 Labs by April 15                      │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  Content to Include  (search or browse by module)              │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ 🔍 Search lessons, labs, quizzes...                     │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  Selected:                                                      │
│  ✅ [×] Lab: Sentiment Classifier (M4)                          │
│  ✅ [×] Lab: Integrate Your Model (M4)                          │
│  ✅ [×] Quiz: ML Concepts (M4)                                  │
│  [ + Add more ]                                                 │
│                                                                 │
│  Due Date                                                       │
│  [ April 15, 2026 ▼ ]                                          │
│                                                                 │
│  Instructions (optional)                                        │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Complete both labs in OpenClaw before taking the quiz.  │   │
│  │ Mark each item done in the platform when finished.      │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  Assign to:  ● All students in Period 3                         │
│              ○ Select specific students                         │
│                                                                 │
│  [ CANCEL ]             [ CREATE ASSIGNMENT ]                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 13. Discussion Forum — Student View

**Purpose:** Class discussion thread, moderated by teacher.

```
┌─────────────────────────────────────────────────────────────────┐
│  [← Back]  💬 MODULE 4 DISCUSSION — Period 3                    │
│  Topic: "What surprised you about training data?"               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Ms. Rivera (Teacher)  •  Dec 1, 2025                           │
│  ┌────────────────────────────────────────────────────────┐     │
│  │ Welcome to the Module 4 discussion! Share something    │     │
│  │ that surprised you when training your model. What      │     │
│  │ happened that you didn't expect?                       │     │
│  └────────────────────────────────────────────────────────┘     │
│                                                                 │
│  StarCoder99  •  Dec 2, 2025                                    │
│  ┌────────────────────────────────────────────────────────┐     │
│  │ I was shocked that adding more data didn't always      │     │
│  │ help — sometimes it made things worse if the data      │     │
│  │ was messy!                                             │     │
│  └────────────────────────────────────────────────────────┘     │
│  [👍 4 likes]                                                    │
│                                                                 │
│  ARIA  •  Dec 2, 2025                                           │
│  ┌────────────────────────────────────────────────────────┐     │
│  │ My model was 95% accurate on training data but only    │     │
│  │ 60% on new data. That's when I finally understood      │     │
│  │ overfitting!                                           │     │
│  └────────────────────────────────────────────────────────┘     │
│  [👍 7 likes]                                                    │
│                                                                 │
│  [8 more posts — load more]                                     │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  YOUR REPLY:                                                    │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Share your thoughts...                                  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ℹ️ Posts are reviewed by your teacher before appearing.        │
│  [ POST REPLY ]                    [ + 15 XP for participating ]│
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 14. Discussion Forum — Teacher Moderation View

**Purpose:** Teacher reviews and approves/removes posts.

```
┌─────────────────────────────────────────────────────────────────┐
│  [← Forum]  💬 MODERATION — Module 4 Discussion                 │
│  Pending: 3 posts  •  Published: 12 posts  •  Flagged: 0        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  PENDING APPROVAL (3)                                           │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  RoboKnight  •  Submitted 10 min ago                            │
│  ┌────────────────────────────────────────────────────────┐     │
│  │ I tried to train my model with only 10 examples and   │     │
│  │ it was terrible! Lesson learned: more data = better   │     │
│  │ (usually)                                             │     │
│  └────────────────────────────────────────────────────────┘     │
│  [ ✅ Approve ] [ 🚫 Remove ] [ ✏️ Edit & Approve ]             │
│                                                                 │
│  NeuralNova  •  Submitted 25 min ago                            │
│  ┌────────────────────────────────────────────────────────┐     │
│  │ Training is way harder than I thought. My first model  │     │
│  │ predicted "positive" for everything 😅                 │     │
│  └────────────────────────────────────────────────────────┘     │
│  [ ✅ Approve ] [ 🚫 Remove ] [ ✏️ Edit & Approve ]             │
│                                                                 │
│  ByteMaster  •  Submitted 1 hr ago                              │
│  ┌────────────────────────────────────────────────────────┐     │
│  │ [pending post content]                                 │     │
│  └────────────────────────────────────────────────────────┘     │
│  [ ✅ Approve ] [ 🚫 Remove ] [ ✏️ Edit & Approve ]             │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  [ Approve All Pending ]    [ Switch to Post-Moderation Mode ]  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 15. Badge Unlock Animation Overlay

**Purpose:** Full-screen celebratory moment when a badge is earned.

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   🎊 🎊 🎊 🎊 🎊 🎊 🎊 🎊 🎊 🎊 🎊 🎊  ← confetti animation │
│                                                                 │
│                                                                 │
│                  ╔═══════════════════╗                          │
│                  ║                   ║                          │
│                  ║        📚          ║  ← badge zooms in       │
│                  ║                   ║                          │
│                  ║   ML ENGINEER     ║                          │
│                  ║                   ║                          │
│                  ╚═══════════════════╝                          │
│                                                                 │
│              🎉 Badge Unlocked! 🎉                              │
│                                                                 │
│          You earned the ML Engineer badge                       │
│           for completing Module 4! 🙌                           │
│                                                                 │
│             + 100 XP  →  1,240 XP total                        │
│             (counter animates upward)                           │
│                                                                 │
│   🎊 🎊 🎊 🎊 🎊 🎊 🎊 🎊 🎊 🎊 🎊 🎊                        │
│                                                                 │
│              [ Continue My Journey → ]                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Notes:**
- Full-screen overlay with dark backdrop
- Badge animates: starts small, zooms to full size with bounce
- Confetti uses module's theme color
- Audio: brief success chime (respects system mute)
- Auto-advances after 5 seconds OR on tap/click

---

## 16. Parental Consent Email

**Purpose:** Plain-text consent email sent to parents by the platform on teacher's behalf.

```
Subject: Permission needed for your child's AI Explorers Online account

Hello [Parent/Guardian Name],

Your child [Display Name] is enrolled in an AI Explorers class taught by 
[Teacher Name] at [School Name]. As part of this class, they'll use a 
web app called AI Explorers Online to track their progress.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHAT IS AI EXPLORERS ONLINE?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

AI Explorers Online helps students:
• Track their progress through 7 learning modules
• Write in a digital learning journal
• Earn badges as they complete projects
• Participate in teacher-moderated class discussions

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WHAT INFORMATION IS COLLECTED?
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

We collect only what is needed for the platform to work:
• A chosen display name (not your child's real name)
• Progress data (quizzes completed, badges earned)
• Journal entries your child writes themselves

We do NOT collect:
• Real name, email, address, or phone number
• Photos of your child
• Location data
• Any information for advertising purposes

Full privacy policy: [link]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
YOUR CONSENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Because your child is under 13, we need your permission.

[ ✅ YES, I give permission ] ← button/link

[ ❌ No, do not create an account ] ← button/link

You can withdraw consent at any time by contacting:
[Teacher email] or [Platform support contact]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This email was sent on behalf of [Teacher Name] at [School Name].
AI Explorers Online — Privacy Policy | Contact Us
```

---

*Wireframes by AI Explorers Curriculum Team · March 2026*  
*For design handoff, these descriptions should be converted to high-fidelity mockups in Figma or equivalent.*
