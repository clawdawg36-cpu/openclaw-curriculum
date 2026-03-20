# AI Explorers Online — Platform Product Requirements Document (PRD)

**Version:** 1.0  
**Date:** March 2026  
**Status:** Draft — Ready for Engineering Review  
**Project:** AI Explorers: OpenClaw/AI Curriculum for Middle School  

---

## 1. Overview

### 1.1 Product Summary

**AI Explorers Online** is the companion progressive web application (PWA) for the AI Explorers middle school curriculum. It serves as the digital home for students and teachers throughout the 7-module course: a place where students track their progress, build their Agent Design Journal, earn badges, and access online learning content — and where teachers monitor class analytics, manage assignments, and moderate discussions.

The platform is not a replacement for the hands-on curriculum (OpenClaw, Hugging Face labs, real agent deployment) — it's the scaffolding and progression layer that ties it all together.

### 1.2 Problem Statement

The AI Explorers curriculum has rich content (lessons, labs, tutorials, assessments, journal templates) and a compelling through-line arc (building a personal AI agent module-by-module). Without a platform:

- Students lose track of where they are and what they've unlocked
- Teachers can't see class-wide progress without manual grade checks
- The Agent Design Journal lives in separate documents with no continuity
- Badge/XP gamification has no engine to run it
- COPPA-compliant data handling has no structure

### 1.3 Goals

1. Give students a single destination for their entire AI Explorers journey
2. Motivate progression through visible XP gain, badges, and (optional) leaderboards
3. Give teachers real-time class analytics without extra manual work
4. Keep all student data private, safe, and COPPA-compliant
5. Work well on tablets, Chromebooks, and phones — the devices students actually have

### 1.4 Non-Goals

- **Not a full LMS.** This is a lightweight companion app, not a replacement for Canvas or Google Classroom.
- **Not a grading system.** Teachers assess work in their LMS; this tracks completion and engagement, not grades.
- **Not an OpenClaw replacement.** Students still deploy and use OpenClaw as the primary hands-on tool.
- **Not responsible for per-module interactive tools.** The prompt sandbox, stakeholder mapper, decision tree builder, and training simulator are specced per-module; this platform hosts and launches them but doesn't define them.

---

## 2. Users and Roles

### 2.1 Role: Student

**Who:** Middle school students (grades 6–8), ages 11–14, working through the 7-module curriculum.

**Access:** Authenticated via teacher-created classroom code (no email required for minors). All account creation goes through a teacher or parent/guardian authorization flow.

**Core capabilities:**
- View personal dashboard with module progress and XP total
- Access lesson content, tutorials, and labs for each module
- Complete interactive quizzes embedded in the platform
- Maintain their Agent Design Journal (structured digital notebook)
- Earn and view badges as they complete module milestones
- View XP history and badge collection
- Optionally view class leaderboard (teacher controls visibility)
- Submit reflection prompts from each lesson
- Launch per-module interactive tools (prompt sandbox, etc.)

**What students cannot do:**
- See other students' journal entries
- See other students' assignment submissions
- Access teacher-only analytics
- Change account settings without teacher/parent

### 2.2 Role: Teacher

**Who:** Classroom teachers running the AI Explorers curriculum. One teacher per class section; multiple sections possible.

**Access:** Email-based authentication with institutional SSO (Google, Microsoft) as preferred option.

**Core capabilities:**
- Create and manage class sections with enrollment codes
- View class-wide progress dashboard (modules, XP, badges)
- View individual student progress drill-down
- Create and manage assignments (link curriculum content + set deadlines)
- Moderate discussion forums (approve/flag posts)
- Enable/disable leaderboard for a class
- Export student progress data (CSV) for gradebook import
- Send announcements to students in their class
- Manage student accounts (reset access code, remove student, reassign to new class)

**What teachers cannot do:**
- Access students outside their own class sections
- Read student DMs or private journal notes
- See another teacher's class data

### 2.3 Role: School Administrator (Optional)

**Who:** IT admin or curriculum coordinator managing the platform at a school or district level.

**Core capabilities:**
- View aggregate reports across classes (no individual student data)
- Manage teacher accounts
- Configure school-level privacy settings
- Enable/disable features by grade level or class
- Download anonymized usage reports

### 2.4 Role: Parent/Guardian (COPPA Flow Only)

**Who:** Parent or guardian of a student under 13 providing consent.

**Core capabilities:**
- Receive consent request email
- Grant/revoke consent for student account creation
- Request deletion of student data

---

## 3. Feature List

### 3.1 Authentication and Account Management

| Feature | Student | Teacher | Admin |
|---------|---------|---------|-------|
| Class code enrollment (no email needed) | ✅ | — | — |
| Email + password login | Optional | ✅ | ✅ |
| Google/Microsoft SSO | Optional | ✅ | ✅ |
| Parental consent flow (under-13) | Required | — | — |
| Password reset | Via teacher | Self-service | Self-service |
| Account deletion / data purge | Via teacher/parent | Self-service | ✅ |

**COPPA Note:** Students under 13 may not create accounts using email or personal information without verifiable parental consent (see Section 8). The class code enrollment flow is designed to minimize PII collection: username + display name only, with parental consent collected out-of-band by the teacher using the platform's consent email tool.

### 3.2 Student Dashboard

The student's home screen. Shows at a glance:

- **Agent Card:** Student's agent name, avatar image (uploaded or selected from preset gallery), and current XP total
- **Module Progress Bar:** Visual arc of 7 modules with completion status (locked / in-progress / complete) and badge earned indicators
- **Recent Activity Feed:** Last 3 actions (quiz completed, badge earned, journal entry saved, etc.)
- **Current Module Focus:** Next recommended action for the current module ("Complete Lesson 3-2 → Earn 50 XP")
- **Leaderboard Widget:** Class rank + top-3 classmates (teacher-optional; off by default)
- **Quick Links:** Agent Design Journal, My Badges, Class Announcements

### 3.3 Module Content Hub

Each of the 7 modules has a dedicated page containing:

- **Module Overview:** Title, capability unlock description, learning objectives (from module README)
- **Content Sections:** Organized by type:
  - 📖 Lessons (links to lesson plan content, readable textbook chapter)
  - 🎬 Tutorials (embedded video player or link-out with captions)
  - 🧪 Labs (link to OpenClaw or external tool + completion checkbox)
  - 🎮 Activities (interactive or printable, as available)
  - ✅ Quizzes (embedded, auto-graded, XP-awarding)
  - 📝 Reflection Prompts (open-text, saved to Journal)
  - 🛠️ Interactive Tool (module-specific tool: prompt sandbox, decision tree builder, etc.)
- **Module Badge:** Display with locked/earned state and criteria preview
- **XP Summary:** XP earned vs. available in this module
- **Progress Indicator:** Completion percentage for the module

### 3.4 Agent Design Journal

The Agent Design Journal is a running digital portfolio that students maintain throughout the course. It mirrors the physical/paper journal in the curriculum.

**Structure:**
- One journal **entry per module** (7 total), with standardized sections matching the paper journal template
- Each entry includes:
  - Agent capability tracker (checkboxes for unlocked capabilities)
  - Reflection prompts (pre-loaded from curriculum, answered by student)
  - "What's changed" free-write section
  - Uploaded screenshot/image (optional — for showing their agent)
- A **Cover Page** section with agent name, avatar, and student info (no last name required)
- A **Full Journal View** showing all entries in chronological order
- **Read-only share link** (student can optionally share with teacher for feedback)

**Privacy:** Journal entries are private to the student by default. Teachers cannot read journals unless the student shares a link. Platform administrators cannot read individual journal content.

### 3.5 XP System

**XP (Experience Points)** are earned by completing curriculum activities. They are cumulative, never decrease, and are displayed prominently on the student dashboard.

**XP Event Table:**

| Action | XP Awarded |
|--------|-----------|
| Complete a quiz (any score) | 25 XP |
| Score 80%+ on a quiz | Bonus 25 XP |
| Score 100% on a quiz | Bonus 50 XP |
| Complete a lesson (mark complete) | 30 XP |
| Complete a lab (mark complete) | 50 XP |
| Complete a tutorial (mark complete) | 20 XP |
| Submit a reflection prompt | 15 XP |
| Earn a module badge | 100 XP |
| Journal entry saved (per module) | 40 XP |
| First login / account setup | 10 XP |
| **Max XP per module (approx.)** | **~350–500 XP** |
| **Max XP full course (approx.)** | **~2,500–3,500 XP** |

**XP Design Principles:**
- Rewarding participation, not perfection (full XP for completing, bonus for excellence)
- Teachers cannot manually award or deduct XP (prevents gaming)
- XP is visible on leaderboard only if teacher has enabled leaderboard
- XP is never reset

### 3.6 Badge System

One **per-module badge** for each of the 7 modules, plus optional cross-curriculum achievement badges.

**Module Badges (7 core):**

| Badge | Module | Criteria |
|-------|--------|----------|
| 🐣 AI Pioneer | M1 | Complete all M1 lessons + deploy your agent lab |
| 👁️ Vision Builder | M2 | Complete M2 + connect an image/audio model |
| 🧠 Knowledge Architect | M3 | Complete M3 + build a custom skill |
| 📚 ML Engineer | M4 | Complete M4 + train and integrate a model |
| 🎙️ Channel Commander | M5 | Complete M5 + connect agent to a live channel |
| ⚖️ Ethics Guardian | M6 | Complete M6 + write an agent usage policy |
| 🎓 AI Explorer | M7 | Complete M7 + present at AI Expo |

**Achievement Badges (optional cross-curriculum):**

| Badge | Criteria |
|-------|----------|
| 🔥 Streak Scholar | Complete activities 5 days in a row |
| 💯 Perfectionist | Score 100% on any 3 quizzes |
| 📓 Journal Keeper | Complete all 7 journal entries |
| 🚀 Fast Starter | Complete M1 within first week of class |
| 🤝 Peer Reviewer | Participate in 3 discussion forum posts |

**Badge Display:** Badges appear in a badge collection grid on the student profile. Locked badges show a silhouette + criteria. Earned badges are full color with earn date.

### 3.7 Leaderboard (Optional, Teacher-Controlled)

- Off by default; teacher enables per class
- Shows student display name (not real name) + XP total
- Filters: All-time, This Module, This Week
- Student can choose to opt out individually (shows "Anonymous Explorer" on leaderboard)
- Never shows: grade-level data, assignment scores, journal content
- No cross-class leaderboards

### 3.8 Teacher Dashboard

The teacher's home screen for a class section.

**Summary Cards:**
- Total students enrolled / active this week
- Class average XP
- Badges earned (class total count)
- Modules in progress / completed

**Class Progress Table:**
- One row per student
- Columns: Display Name, Current Module, % Complete, XP Total, Badges Earned, Last Active
- Sortable and filterable
- Click row → individual student detail view

**Individual Student Detail:**
- Module-by-module progress breakdown
- Quiz scores (averages by module)
- Badge timeline
- Activity log (dates, not content)
- Note: Journal content NOT visible here

**Assignment Tracker:**
- Teacher creates assignment linking to specific lesson/lab/quiz
- Sets due date and optional instructions
- Students see assignment in their dashboard
- Teacher sees completion status per student (complete / incomplete / not started)
- No automatic late penalties; teacher handles grading in their own LMS

**Discussion Moderation Panel:**
- View all posts in class discussion forums
- Flag, approve, or remove posts
- Reply as teacher
- Export discussion thread

**Announcements:**
- Teacher posts announcements visible to all students in the class
- Students see announcements on dashboard and receive in-app notification

### 3.9 Quizzes

- Auto-graded multiple choice and true/false (matching curriculum quiz format)
- Students see results immediately after submission
- Students can retake quizzes (unlimited), but XP bonus is only awarded once per quiz
- Teachers see aggregate scores (class average per quiz); individual scores visible in student detail
- Quiz questions loaded from content schema (see Section 5)

### 3.10 Discussion Forums

- One forum thread per module (teacher can create additional threads)
- Students post in their class's thread only (no cross-class)
- Posts are moderated: teacher approves before public visibility (teacher configures this per class: pre-moderated or post-moderated)
- No direct messaging between students
- Teacher can post as "Teacher" role with distinct styling
- COPPA: No student-to-student private messaging

### 3.11 Notifications

- **In-app only** for students (no email, no push notifications to personal devices — COPPA)
- Notification types: Badge earned, XP milestone, Assignment due, Teacher announcement
- Teachers receive email notifications for: new student enrollments, flagged discussion posts
- All notifications stored in-platform; 30-day retention

---

## 4. User Flows

### 4.1 Student Onboarding Flow

```
Teacher creates class → generates 6-digit class code
    ↓
Student opens platform on device (no app install required — PWA)
    ↓
Student enters class code
    ↓
Student creates display name (no email required)
    ↓
IF student age < 13:
    Platform sends consent email to parent (teacher provides email list during class setup)
    Parent receives email → clicks consent link → account activated
    Student sees "waiting for parent approval" holding screen
    ↓
ELSE (age 13+):
    Account activated immediately
    ↓
Student completes cover page: Agent name, avatar selection
    ↓
Student arrives at dashboard → Module 1 highlighted → "Start Your Journey" CTA
```

### 4.2 Module Progression Flow

```
Student opens Module 1 page
    ↓
Student completes Lesson 1-1 → marks complete → earns 30 XP
    ↓
Student completes Tutorial → earns 20 XP
    ↓
Student takes quiz → earns 25–75 XP based on score
    ↓
Student completes lab (external: OpenClaw) → returns, marks complete → earns 50 XP
    ↓
Student writes journal entry → earns 40 XP
    ↓
All module criteria met → Module Badge unlocked → 100 XP burst animation
    ↓
Module 2 unlocks
```

### 4.3 Teacher Setup Flow

```
Teacher registers (Google/Microsoft SSO or email)
    ↓
Teacher creates a class: name, grade level, school year, LMS integration (optional)
    ↓
Teacher configures class settings: leaderboard on/off, moderation mode, consent method
    ↓
Platform generates class code (6-digit alphanumeric, easy to share on whiteboard)
    ↓
Teacher shares class code with students (on projector, printed handout, etc.)
    ↓
Students enroll → teacher sees them appear in roster
    ↓
Teacher can create first assignment, enable leaderboard, post welcome announcement
```

### 4.4 Badge Earn Flow

```
Student completes final badge criterion for a module
    ↓
Platform detects completion event
    ↓
Full-screen confetti animation + badge reveal
    ↓
Badge added to student collection
    ↓
+100 XP added with animated counter
    ↓
Badge appears in teacher's analytics (badge earned event)
    ↓
Student can share badge image (generated PNG with name + badge) via teacher-mediated flow only
```

### 4.5 Parental Consent Flow (COPPA)

```
Teacher creates class → uploads student roster OR enters student count
    ↓
Teacher collects parent emails (via school systems, not the platform itself)
    ↓
Teacher triggers consent emails from platform (platform sends on teacher's behalf)
    ↓
Parent receives email with:
  - School name + teacher name
  - What data is collected (see Section 8)
  - Link to privacy policy
  - "Approve" and "Deny" buttons
    ↓
Parent approves → student account activated
Parent denies → account stays locked; teacher notified
    ↓
Student with pending consent sees "Waiting for parent approval" screen
    ↓
Consent records stored for compliance audit trail
```

---

## 5. Content Schema

All content in the platform is driven by a structured content schema. This enables future CMS integration and keeps content separate from UI logic.

### 5.1 Module Object

```json
{
  "id": "module-1",
  "title": "What Is AI?",
  "subtitle": "Deploy Your Agent",
  "capabilityUnlock": "Deploy your agent — give it a name & personality",
  "emoji": "🐣",
  "gradeLevel": "6-8",
  "estimatedWeeks": 2,
  "badge": {
    "id": "badge-ai-pioneer",
    "name": "AI Pioneer",
    "emoji": "🐣",
    "criteria": "Complete all M1 lessons and the Deploy Your Agent lab",
    "xpReward": 100
  },
  "totalXPAvailable": 450,
  "contentItems": [...],
  "order": 1
}
```

### 5.2 Content Item Object

```json
{
  "id": "m1-lesson-1-1",
  "moduleId": "module-1",
  "type": "lesson | tutorial | lab | activity | quiz | reflection | interactive-tool",
  "title": "What Is AI?",
  "slug": "lesson-1-1-what-is-ai",
  "description": "Introduction to AI concepts, history, and vocabulary",
  "contentPath": "module1/lesson-1-1-what-is-ai/",
  "xpReward": 30,
  "estimatedMinutes": 45,
  "prerequisiteIds": [],
  "completionCriteria": "mark-complete | quiz-score | teacher-verify",
  "badgeContributes": true,
  "order": 1
}
```

### 5.3 Quiz Object

```json
{
  "id": "quiz-m1-ai-or-not-ai",
  "moduleId": "module-1",
  "title": "AI or Not AI?",
  "questions": [
    {
      "id": "q1",
      "type": "multiple-choice | true-false",
      "text": "Which of the following is an example of AI?",
      "options": ["A calculator", "A spam filter", "A light switch", "A thermostat"],
      "correctIndex": 1,
      "explanation": "A spam filter uses machine learning to classify emails..."
    }
  ],
  "passingScore": 70,
  "xpBase": 25,
  "xpBonusGood": 25,
  "xpBonusPerfect": 50
}
```

### 5.4 Journal Entry Schema

```json
{
  "studentId": "...",
  "moduleId": "module-1",
  "createdAt": "...",
  "updatedAt": "...",
  "sections": {
    "agentName": "string",
    "agentAvatarUrl": "string",
    "capabilityTracker": {
      "capability-1": true,
      "capability-2": false
    },
    "reflections": [
      {
        "promptId": "m1-reflection-1",
        "promptText": "What surprised you most about what AI can and can't do?",
        "studentResponse": "string"
      }
    ],
    "freeWrite": "string",
    "screenshotUrl": "string (optional)"
  },
  "isSharedWithTeacher": false
}
```

### 5.5 Assignment Object

```json
{
  "id": "...",
  "classId": "...",
  "teacherId": "...",
  "title": "Complete Module 2 Labs",
  "contentItemIds": ["m2-lab-image-classifier", "m2-lab-hugging-face-intro"],
  "dueDate": "2026-04-15",
  "instructions": "Complete both labs and mark them done by Friday.",
  "completionTracker": {
    "student-id-1": { "status": "complete", "completedAt": "..." },
    "student-id-2": { "status": "incomplete" }
  }
}
```

---

## 6. Badge and XP Design (Detailed)

### 6.1 XP Philosophy

XP is a **participation currency**, not a performance metric. The goal is to reward consistent engagement, not just high scores. Students who try hard but struggle on quizzes still earn most of the available XP through completion.

**XP is never visible to teachers in individual detail** — teachers see progress %, badges, and quiz scores. XP is a student-facing motivator only.

### 6.2 Badge Criteria (Detailed)

Each module badge requires completing a meaningful subset of module content — enough to demonstrate real engagement, but not 100% completion to remove gatekeeping pressure.

| Badge | Exact Criteria |
|-------|---------------|
| 🐣 AI Pioneer | Complete Lessons 1-1 through 1-5 + Lab: Deploy Your OpenClaw + Journal Entry M1 |
| 👁️ Vision Builder | Complete Lessons 2-1 through 2-5 + Lab: Image Classifier + connect a Hugging Face model + Journal Entry M2 |
| 🧠 Knowledge Architect | Complete Lessons 3-1 through 3-4 + Lab: Build Your First Skill + Journal Entry M3 |
| 📚 ML Engineer | Complete Lessons 4-1 through 4-5 + Lab: Sentiment Classifier + Journal Entry M4 |
| 🎙️ Channel Commander | Complete Lessons 5-1 through 5-5 + Lab: Channel Connection + Journal Entry M5 |
| ⚖️ Ethics Guardian | Complete Lessons 6-1 through 6-6 + Lab: Audit and Govern + write usage policy + Journal Entry M6 |
| 🎓 AI Explorer | Complete M7 activities + teacher marks "Expo Presented" for student |

### 6.3 Badge Unlock UX

- When final criteria is met: immediate unlock animation (no delay, no teacher approval needed except M7)
- Animation: Module badge zooms in from center, confetti burst, "You earned [Badge Name]!" overlay
- Badge appears on dashboard and badge collection page
- Teacher sees badge earned event in analytics feed
- Optional: generated badge card (PNG) student can print/save — styled with agent name and earn date

---

## 7. Privacy Requirements (COPPA Compliance)

### 7.1 COPPA Overview

The Children's Online Privacy Protection Act (COPPA) applies to all platform users under 13. Because the primary audience is middle school students (ages 11–14), the platform must be designed with COPPA compliance as a **default state**, not an opt-in.

### 7.2 Data Minimization

**Data we collect from students:**
- Display name (chosen by student — need not be real name)
- Class code (links to teacher's class, not school database)
- Agent name and avatar (curriculum artifact, not PII)
- XP totals, badge status, content completion flags (activity data)
- Quiz answers/scores (anonymized in aggregate for teacher analytics)
- Journal entries (stored encrypted, not read by platform staff)
- IP address (logged for security, not stored with student record, 7-day retention)

**Data we do NOT collect from students under 13:**
- Email address (unless teacher explicitly adds for 13+ students)
- Real name (display name only)
- Photos of students
- Location data
- Device identifiers linked to student identity
- Any third-party tracking or advertising data

### 7.3 Parental Consent

- **Required for students under 13** before account activation
- Consent method: teacher-mediated email consent (teacher collects parent emails via school systems, platform sends consent request)
- Consent records stored for compliance audit
- Parents can revoke consent at any time → immediate data deletion
- School can act as parent's agent for consent (school authority model) per COPPA guidelines

### 7.4 Data Access and Deletion

- Teachers can delete a student account at any time
- Parents can request data deletion via teacher or direct platform contact
- Data deletion is complete and permanent within 30 days of request
- No data is retained after deletion request (no backups held longer than 30 days)
- Students can export their own Agent Design Journal at any time

### 7.5 Data Storage and Security

- All data stored in US-based servers (or EU if school is EU-based)
- Student data encrypted at rest (AES-256) and in transit (TLS 1.3)
- Journal entries encrypted with student-specific key
- No third-party advertising networks
- No selling or sharing of student data with any third party
- Platform vendor must sign FERPA/COPPA data processing addendum (DPA) with school
- Annual penetration testing required
- Incident response plan with 72-hour breach notification

### 7.6 No Social Features Between Students

Per COPPA and general best practices for this age group:
- No student-to-student private messaging
- No public profiles visible to other students
- No ability for students to find or contact each other outside class context
- Discussion forums are class-scoped and teacher-moderated
- Leaderboard shows display names only, is optional, and students can opt out

---

## 8. Technical Requirements Summary

*(Full recommendations in `tech-recommendations.md`)*

### 8.1 PWA Requirements

- **Installable:** Works as a home screen app on iOS (Safari), Android (Chrome), and Chrome OS
- **Offline support:** Read-only content (lessons, journal view) available offline; sync on reconnect
- **Responsive:** Optimized for 768px–1280px (tablet/Chromebook primary), functional at 375px (phone)
- **Performance:** First Contentful Paint < 2s on 4G; Lighthouse PWA score ≥ 90
- **Accessibility:** WCAG 2.1 AA compliance; keyboard navigable; screen reader compatible

### 8.2 Integration Points

- **Google Classroom:** Optional add-on for assignment sync (teacher creates assignments in Google Classroom; completion syncs to platform)
- **Canvas LMS:** Optional LTI 1.3 integration for grade passback
- **OpenClaw:** Webhook or API integration for lab completion verification (future phase)
- **Hugging Face:** Link-out from Module 2–4 labs (no data exchange)

### 8.3 Supported Browsers/Devices

| Device | Browser | Support Level |
|--------|---------|---------------|
| Chromebook | Chrome | Primary (must be perfect) |
| iPad | Safari | Primary |
| Android tablet | Chrome | Primary |
| iPhone | Safari | Secondary (functional) |
| Windows laptop | Chrome/Edge | Secondary |
| Mac laptop | Safari/Chrome | Secondary |

---

## 9. Success Metrics

| Metric | Target |
|--------|--------|
| Student DAU/WAU (active ratio) | ≥ 60% weekly during active course |
| Module badge completion rate | ≥ 70% of enrolled students per module |
| Journal entry completion | ≥ 80% per module for enrolled students |
| Teacher dashboard weekly logins | ≥ 3x/week per active class |
| Quiz retake rate | < 40% (indicates appropriate difficulty) |
| Parental consent completion rate | ≥ 90% within 1 week of enrollment |
| Crash/error rate | < 0.1% of sessions |
| Accessibility score (Lighthouse) | ≥ 90 |

---

## 10. Out of Scope (Future Phases)

- Mobile native apps (iOS/Android)
- Student-facing AI tutor chatbot
- Automated grading of free-text submissions
- Parent portal with direct login
- Cross-school leaderboards
- Custom badge creator (teacher-created badges)
- Video hosting (current spec links out to YouTube/Vimeo)
- Real-time collaborative features
- AI-generated personalized learning paths

---

*Document Owner: AI Explorers Curriculum Team*  
*For questions or revisions, open an issue at [github.com/clawdawg36-cpu/openclaw-curriculum](https://github.com/clawdawg36-cpu/openclaw-curriculum)*
