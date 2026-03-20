# Teacher Contingency Guide: Managing Tech Failures at the AI Expo

> **What separates a great Expo from a stressful one:** Not whether the tech works — but whether *you* prepared for when it doesn't.

This guide is your operational manual for handling technical failures at the AI Expo. Read it the day before. Run through the checklist. Brief your students. Then accept that some demos will fail, and that's okay.

---

## Part 1: Pre-Expo Technical Checklist (Run Through the Day Before)

Run this checklist in the actual Expo space if possible, or on the same network you'll use.

### Internet & Network
- [ ] Confirm venue WiFi SSID and password — write it on a physical sticky note
- [ ] Test connection speed (minimum 10 Mbps download/upload for reliable API calls)
- [ ] Confirm WiFi reaches all demo stations (walk the room with your phone)
- [ ] Identify a cellular hotspot as backup (your phone or a spare device)
- [ ] Check if venue network blocks any ports (OpenClaw uses HTTP/WebSocket — ask IT if unsure)

### OpenClaw Setup
- [ ] Verify OpenClaw gateway is running on each demo device: `openclaw gateway status`
- [ ] Confirm API keys are loaded and not expired (check config or ask students to test a prompt)
- [ ] Restart OpenClaw gateway once as a fresh-start test: `openclaw gateway restart`
- [ ] Confirm BlueBubbles or iMessage channel is connected (if students are demoing message-based agents)
- [ ] Test a live prompt on each demo device the morning of the Expo

### Student Backups
- [ ] Confirm every student has a demo video saved to Google Drive
- [ ] Confirm every student has screenshots saved and accessible
- [ ] Spot-check: ask 3–4 students to pull up their backup video right now
- [ ] Make sure backup videos play without internet (downloaded locally, not just a Drive link)

### Hardware
- [ ] All demo devices are charged to 100% (or plugged in)
- [ ] Any external displays or projectors are tested and connected
- [ ] Extra charging cables available at the Expo table
- [ ] Backup device available (teacher laptop or spare Chromebook) if a student's device fails

---

## Part 2: Common Failure Modes and Quick Fixes

### 🔴 Internet Outage

**Symptoms:** API calls hang, agent doesn't respond, OpenClaw shows connection error

**Quick fixes:**
1. **Switch to cellular hotspot immediately** — have one ready on your phone, share the password verbally
2. **Move to backup video** — signal the student to switch to their recorded demo
3. If only partial outage: try toggling WiFi off/on on the demo device to force reconnect
4. Check if it's venue-wide (ask neighboring presenters) or device-specific

**Triage time budget:** 60 seconds max. If not resolved, go to backup.

---

### 🟡 OpenClaw Gateway Not Responding

**Symptoms:** Agent doesn't receive messages, chat shows no response, UI appears frozen

**Quick fixes:**
1. Run: `openclaw gateway restart` in terminal
2. Wait 15–20 seconds, then test with a simple prompt
3. If still unresponsive: `openclaw gateway stop && openclaw gateway start`
4. Check for error logs: `openclaw gateway status` will show recent errors

**Prevention:** Restart the gateway once before doors open. A fresh restart is healthier than one that's been idle overnight.

---

### 🟠 Channel Disconnected (BlueBubbles / iMessage)

**Symptoms:** Messages sent to the agent number don't trigger responses; no activity in OpenClaw logs

**Quick fixes:**
1. On the host Mac, open BlueBubbles server app — check connection status
2. If disconnected: click **Reconnect** or restart the BlueBubbles server
3. Test: send a message to the agent from your own phone
4. If BlueBubbles can't reconnect quickly, have the student demo via direct OpenClaw web UI instead (if available) or switch to video backup

**Note:** If the host Mac (the one running BlueBubbles) isn't at the Expo, this failure is unrecoverable without remote access. Factor this into logistics.

---

### 🔵 API Rate Limit Hit

**Symptoms:** Agent suddenly stops responding mid-demo, returns error messages like "rate limit exceeded" or "429"

**Quick fixes:**
1. Wait 60 seconds — most rate limits reset within a minute
2. If using a free-tier API key: the limit may be per-minute or per-day. A minute of waiting usually resolves it.
3. If rate limit is daily: switch to video backup for that student
4. **Prevention:** Stagger demo times. Don't have 10 students all running agents simultaneously on the same API key.

**Best practice:** Have a separate API key for Expo day — one that hasn't been hammered by testing. Store it in the project config the night before.

---

### ⚪ Device Won't Boot / App Won't Open

**Symptoms:** Student's laptop won't start, browser crashes, OpenClaw won't launch

**Quick fixes:**
1. Move the student to the backup device immediately
2. Pull up their Google Drive backup on the backup device
3. Have student proceed with video + narrated walkthrough
4. Don't spend Expo time troubleshooting a crashed machine — swap and move on

---

## Part 3: How to Grade a Student Whose Live Demo Failed

This is the most nuanced part of your job at the Expo. Here's a framework.

### The Failure Isn't the Grade

A broken demo doesn't automatically mean a bad grade. What you're assessing is the student's understanding of their project, their communication ability, and their professional maturity — not the reliability of internet infrastructure.

### Grading Framework: Demo Failure Scenarios

**Scenario A: Demo fails, student pivots gracefully**
- Student says something like: "Technology is unpredictable — let me show you my backup video."
- Student presents their recording or screenshots confidently
- Student explains the project clearly: what it does, how it works, what they learned
- Student answers questions thoughtfully

**Grade impact:** None. Full marks available. A graceful pivot demonstrates exactly the kind of professional resilience you want to see. Note it positively in your feedback.

---

**Scenario B: Demo fails, student is flustered but recovers**
- Student visibly panics for 30–60 seconds
- With prompting ("do you have a backup?"), student switches to video
- Student explains the project adequately

**Grade impact:** Minor. Slight deduction for communication composure if that's in your rubric. Do not penalize heavily — this is a high-stress situation and recovering mid-panic is still a skill.

---

**Scenario C: Demo fails, student has no backup and panics**
- Student has no video, no screenshots, no narration prepared
- Student spends the demo time saying "it was working" or trying to fix it
- Student cannot explain the project without the tech running

**Grade impact:** Moderate. The lack of preparation (no backup) and inability to explain the project without the tool suggests surface-level understanding. This is gradable.

---

**Scenario D: Demo works but student can't explain anything**
- Tech works fine, but student clicks through without understanding
- Can't answer questions about how it works or what they'd change

**Grade impact:** Same as Scenario C or worse. A working demo without comprehension is not the learning goal.

---

### Assessment Note for Your Records

> **A graceful failure with an honest, composed response demonstrates deeper learning than a panicked excuse with a working demo.**

When a student says: *"My agent broke, here's my backup video — let me walk you through what it does and what I'd improve"* — they are demonstrating:
- Planning and preparation
- Technical communication
- Self-awareness
- Resilience under pressure

These are exactly the skills we want students to develop. Grade them accordingly.

Consider adding a rubric row: **"Handles unexpected challenges professionally"** — scored separately from whether the demo worked.

---

## Part 4: Teacher Day-Of Protocol

### Before Doors Open (30–60 min)
1. Run `openclaw gateway restart` on all demo devices
2. Confirm internet is working on all devices
3. Walk the room: check that every student can pull up their backup video
4. Brief students: "If your demo breaks, you have a plan. Use it. Don't freeze."
5. Remind students: one pivot phrase they can use — "Let me show you my backup while I troubleshoot."

### During the Expo
- Do a lap every 15–20 minutes to spot failing demos early
- If you see a student struggling, catch their eye and signal: *"Go to backup."*
- Don't hover — it makes students more nervous
- Keep a notes doc open on your phone: jot student names + any demo issues you observe (for fair grading later)

### After the Expo
- Collect any student reflection notes on what went wrong
- In your grade notes, distinguish between "demo failed" and "student failed" — they're different
- Consider sharing anonymized examples with the class: "Here's how three students handled a broken demo..."

---

## Emergency Contact Quick Reference

| Problem | First step | Second step |
|---|---|---|
| No internet | Enable phone hotspot | Student goes to backup video |
| OpenClaw down | `openclaw gateway restart` | Student goes to backup video |
| Channel disconnected | Restart BlueBubbles | Student demos via OpenClaw UI or video |
| API rate limit | Wait 60 sec | Student goes to backup video |
| Device failure | Swap to backup device | Student demos from Google Drive |

**When in doubt:** Skip the fix. Go to backup. Keep the Expo moving.

---

> **Final thought:** The AI Expo is about celebrating what students built and what they learned. Some of the most memorable Expo moments happen when something breaks and a student handles it with grace, humor, and clarity. Create space for that to be a win.
