# Lab 1.3b — Teacher Setup Guide: Deploy Your Own OpenClaw

> **Lab:** 1.3b — Deploy Your Own OpenClaw
> **Audience:** Teachers only
> **Read before:** Running this lab with students

---

## 1. What to Set Up Before Class

This lab goes smoothly when teachers do the groundwork ahead of time. Here's your pre-lab checklist:

### At Least 3 Days Before

- [ ] **Set up your own OpenClaw instance** and go through the full student experience yourself. You cannot troubleshoot what you haven't done.
- [ ] **Confirm your account provisioning method.** Options:
  - Students use personal emails to create individual accounts
  - You create shared class accounts (one per table group or pair)
  - Your school uses SSO (Single Sign-On) — confirm the link with your IT department
- [ ] **Test your school's network.** Log in from a school device on the school Wi-Fi. Some schools block new accounts or certain ports. Better to find out Wednesday than Friday.
- [ ] **Prepare backup accounts.** Create 3–5 pre-configured "emergency" accounts for students who can't create their own. Label them clearly (e.g., "ClassBackup-1@yourschool.edu").

### Day Before

- [ ] **Write your setup URL/link on the board or share via your LMS** (Google Classroom, Canvas, etc.) so students can access it immediately when class starts.
- [ ] **Print the deployment checklist** (`deployment-checklist.md`) if you're using paper verification. Otherwise, share digitally.
- [ ] **Prepare the verification prompt** you'll use at the end (see Section 4 below).
- [ ] **Test your demo device** — project your screen or use a classroom display so you can walk students through steps live if needed.

### Day-Of

- [ ] Have the **backup accounts** available (on a notecard or your device — NOT projected).
- [ ] Write the **setup URL and teacher invite code** where all students can see it.
- [ ] Have a **timer visible** — students lose track of time during setup.
- [ ] Know your **"early finisher" plan** — the Customization Guide is the natural next step for students who race through setup.

---

## 2. Common Student Issues + Fixes

These are the issues that come up in *every* run of this lab. Read them now so you're not Googling mid-class.

### Account Problems

| Issue | What's Happening | Fix |
|---|---|---|
| Verification email not arriving | Spam filter, slow server, or wrong email entered | Check spam folder first. If nothing after 3 minutes, use a backup account. |
| "Email already registered" error | Student already tried once before class, or email is shared | Use password reset flow; if truly stuck, use backup account. |
| School email requires parent approval | Some districts lock student accounts | Use backup accounts. Follow up with IT after class. |
| Student doesn't have a personal email | No email at all | Assign a pre-made class account — they still get the full experience. |

### Login Errors

| Issue | Fix |
|---|---|
| "Password incorrect" | Password reset via email. If email is inaccessible, use backup account. |
| Browser blocks the site | Try a different browser (Chrome > Safari > Firefox). Clear cache if needed. |
| Page loads but nothing works | Hard refresh (Ctrl+Shift+R / Cmd+Shift+R). Try incognito/private mode. |
| Student logged into *your* demo account | Log out, clear browser data, try again. Always demo in incognito mode. |

### Unexpected Responses

| Issue | Context | What to Do |
|---|---|---|
| The assistant gave a wrong answer | AI makes mistakes — this is a teaching moment! | Ask the class: "How would we check if this is true?" Don't dismiss it; explore it. |
| The assistant said something confusing or weird | System prompts may not be set correctly, or the model is just unpredictable | Use it as an example: "This is why we configure our assistants carefully." |
| The assistant refused to answer | Safety filters triggered | Reassure the student, have them rephrase. If persistent, note it and move on. |
| The assistant gave a very adult-sounding response | Student may have a non-student account or misconfigured settings | Check the account type. Switch to backup account if needed. |

---

## 3. Accessibility Accommodations

Every student deserves the full experience. Here's how to adapt for common situations:

### Students Without Personal Devices

- **Option A: School-provided device** — Coordinate with your tech coordinator in advance. Request a class set if you don't already have one.
- **Option B: Partner pairs** — Pair students who need devices with students who have their own. Both students should complete the checklist — one drives, one navigates.
- **Option C: Teacher station** — For students who need extra support, walk through the setup at your station during independent work time.

### Students Without Personal Email Accounts

- Use pre-made class accounts. Label them "Student A," "Student B," etc., and record who used which.
- **Important:** If students use shared accounts, their conversations are not private. Make this clear to students.
- Consider creating throwaway accounts specifically for this lab (e.g., `aiclass.student1@gmail.com`).

### Shared Account Considerations

When multiple students use the same account:
- Remind students **not to share personal information** in conversations with a shared account assistant.
- Each student can still customize their own system prompt — just have them save a screenshot of it.
- For the verification activity, students can each run the prompt in the chat — the shared history won't affect the response.

### Privacy Considerations

- **Do not** require students to use their real name in their system prompt or assistant setup.
- **Do** let students know what data the platform stores (check the platform's privacy policy ahead of time).
- **Do** remind students that conversations with AI are generally not private — they shouldn't share passwords, addresses, or sensitive family information.
- **FERPA note:** If your school has specific guidelines about student data in third-party tools, verify this lab complies before running it.

### Language and Reading Support

- The setup guide is written at approximately a 6th-grade reading level.
- For students who need additional support, consider: pairing with a partner, providing a translated copy, or pre-reading the guide aloud as a class.
- The system prompt activity is flexible — students who struggle with writing can dictate their prompt to a partner or the teacher.

---

## 4. How to Run the "Introduce Yourself" Verification Activity

This is the culminating activity for Lab 1.3b. It doubles as both verification and a class-building moment.

### Setup (5 minutes)

1. When about 10 minutes remain in the period, give a 5-minute warning: *"Finish up your customization and run the verification prompt."*
2. Tell students the prompt they'll use (write it on the board):
   > **"Introduce yourself to my class. Keep it to 3 sentences."**
3. Students type this into their chat and read the response.

### Share-Out (5–10 minutes)

**Option A: Popcorn share** — Students volunteer to share their assistant's introduction. Read a few aloud. Notice the differences based on each student's system prompt.

**Option B: Gallery walk** — Students write their assistant's introduction on a sticky note (or type it in a shared doc) and post it. Class walks around and reads them.

**Option C: Partner pairs** — Students share with a partner: "What's your assistant's name, and how did it introduce itself?" Then a few pairs share out to the whole class.

### Discussion Prompts (Use 1–2)

- "Why did different students get different introductions even though we all used the same prompt?"
- "What does this tell us about how system prompts work?"
- "How is this different from everyone using the exact same app or website?"
- "If you could add one more thing to your system prompt to make the introduction better, what would it be?"

### Verification

During or after the share-out, circulate with the checklist. Mark students complete when you see:
- They're logged in and can navigate
- They have a named assistant with a personality
- Their assistant's introduction reflects their system prompt

**For students who aren't done:** Schedule a quick check-in. The lab can be completed as homework if needed.

---

*Lab 1.3b — Deploy Your Own OpenClaw | Module 1: What Is AI?*
*Teacher reference document — not for student distribution*
