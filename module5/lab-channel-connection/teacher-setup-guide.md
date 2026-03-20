# Teacher Setup Guide — Channel Connection Lab
## Module 5, Lab 2: The Key Lab

**Grade Level:** 7–8  
**Time:** 2 class periods  
**Lead time required:** Minimum 1 week before lab day (platform setup is non-trivial)

---

## Why This Lab Matters

The Channel Connection Lab is the Module 5 capability unlock — the equivalent of Lab 2.4 when your students first gave their agent vision. This is the moment the agent stops being a terminal program and becomes a presence in a real communication space.

That transition is meaningful, and students feel it. Your job is to make sure the infrastructure is ready so the magic moment isn't blocked by a failed API token.

**Block off at least 2–3 hours of prep time before lab day.** There's no shortcut here.

---

## Choose Your School's Pathway

Before anything else, decide which pathway(s) you'll support.

| Pathway | Complexity | Infrastructure Needed | Best for |
|---------|-----------|----------------------|---------|
| A. Discord | Medium | Class Discord server + admin access | Schools with active Discord culture |
| B. Webhook | Low-Medium | Just ngrok (free) | Most universally accessible; minimal infra |
| C. BlueBubbles | High | Dedicated Mac + Apple ID | Schools with shared Mac hardware |

**Recommendation for most schools:** Offer Pathway B (Webhook) as the default. It requires no persistent server infrastructure, works on any operating system, and teaches the most transferable concept.

Offer Pathway A as an option if you have a class Discord server already.

**Only set up Pathway C if you have a dedicated Mac for it.** Don't use a personal Mac — it requires leaving BlueBubbles Server running continuously and uses your Apple ID.

---

## Pathway A: Discord Setup (Teacher Tasks)

### A.1 — Create the Class Discord Server

If you don't have one already:
1. Open Discord → click **+** (Add a Server) → Create My Own → For a club or community
2. Name it: `[School] AI Class — [Year]` or similar
3. Right-click the server icon → **Server Settings** → **Members** → send invite links to students

### A.2 — Create Per-Student Channels

Each student needs their own bot channel to avoid interference:

Option 1 (small class, ≤20 students): Create channels manually  
- `#student-alice-bot`, `#student-bob-bot`, etc.

Option 2 (larger class): Create a single `#bot-testing` channel — students share it and identify their bot by name.

### A.3 — Enable Developer Mode for Students

Students need Developer Mode to copy Channel IDs and Server IDs.

Share these instructions: **Discord Settings → Advanced → Developer Mode → ON**

### A.4 — Verify Bot Permissions Work

After a student creates their bot and invites it, verify it can:
- Read messages in their channel
- Send messages
- View the channel at all

If the bot appears but can't post, the invite link permissions were wrong. Have the student regenerate the invite URL with correct permissions (see Lab Guide A.6).

### A.5 — Discord Teacher Token (Optional)

If you want a "monitor bot" to observe all student channels:
- Create a second application in Discord Developer Portal
- Give it View Messages permission in all student channels
- This lets you debug without being at each student's machine

---

## Pathway B: Webhook Setup (Teacher Tasks)

**Pathway B is almost entirely student-side.** Your role is:

### B.1 — Pre-Install ngrok on School Machines

If students can't install software, install ngrok ahead of time:

**macOS (admin required):**
```bash
brew install ngrok
```

**Windows (admin required):**
Download from https://ngrok.com/download, extract to `C:\ngrok\`, add to PATH.

### B.2 — Create a Shared ngrok Account (Optional)

If students can't create accounts (privacy concerns, no email), create one class ngrok account:
1. Sign up at ngrok.com with a school/class email
2. Get the authtoken from the dashboard
3. Pre-configure all machines:
   ```bash
   ngrok config add-authtoken CLASS_AUTHTOKEN_HERE
   ```

> ⚠️ **Note:** Free ngrok allows only 1 active tunnel per account. If all students share one account, they'll conflict. Use multiple accounts or the free tier's anonymous tunnels: `ngrok http 8080 --no-authtoken` (limited but functional for testing).

### B.3 — Firewall Check

Verify that your school's network doesn't block ngrok's outbound connections. ngrok uses ports 443 and 80 — if these are blocked, students won't be able to create tunnels.

Test this yourself before lab day:
```bash
ngrok http 8080
```
If you get a tunnel URL, you're good. If you get "connection failed," contact your IT department.

---

## Pathway C: BlueBubbles Setup (Teacher Tasks)

### C.1 — Hardware Requirements

You need a dedicated Mac that will stay running during class hours. Minimum spec:
- macOS 12 (Monterey) or later
- Signed into iMessage with a dedicated Apple ID (do NOT use your personal Apple ID)
- Connected to a reliable WiFi connection

**Strongly recommended:** Create a new Apple ID specifically for this class. Use a school email if possible. This prevents:
- Personal messages being mixed with student tests
- Privacy concerns if students see message history
- Your personal Apple ID being used for test messages 24/7

### C.2 — Install BlueBubbles Server

1. Download from **https://bluebubbles.app/downloads** (free, open source)
2. Install on the dedicated Mac
3. Grant all required permissions (Full Disk Access, Contacts, etc.) — macOS will prompt for each
4. On first launch, follow the setup wizard

### C.3 — Configure BlueBubbles Server

Key settings to configure:

**Server URL (choose one):**

Option 1 (same WiFi network): Use the Mac's local IP
- Find it: **System Preferences → Network → WiFi → IP Address**
- Server URL: `http://192.168.X.X:1234`
- Students must be on the same WiFi

Option 2 (remote access via Cloudflare Tunnel): More reliable, works across networks
- In BlueBubbles Server settings → Cloudflare → Enable
- You'll get a URL like `https://yourschool.trycloudflare.com`
- Students can connect from any network

**API Password:**
- Set under Server Settings → Password
- Create something memorable but not your personal password
- Share this with students on lab day (it can be a class-wide password)

**Recommended Settings:**
- Enable polling mode: ON (more reliable than socket for classroom use)
- Auto restart on crash: ON
- Start on login: ON

### C.4 — Test BlueBubbles Before Lab Day

From any device on your network:
```bash
curl -X GET "http://YOUR_SERVER_URL/api/v1/ping" \
  -H "Authorization: Bearer YOUR_API_PASSWORD"
```

Expected response:
```json
{"status": 200, "message": "pong"}
```

If that works, the server is ready.

### C.5 — Set Up Student Message Routing

By default, all students will be messaging the same Apple ID (the Mac). You'll want to help them identify their test thread.

**Recommended approach:**
- Have each student include their name in their first message: `"Hi, this is Alice testing my agent"`
- They then continue their tests in that same thread
- The agent will respond to all incoming messages, regardless of who sent them

> ⚠️ **Important:** All students will be texting the same number. Their agents will receive all incoming texts, not just their own. For testing purposes, instruct students to work one at a time or to include their name so they know which responses are theirs.

### C.6 — Privacy and Data Considerations

Before the lab:
- Inform students that test messages go through a school-managed Apple ID
- Remind students not to send personal information in test messages
- The Mac's message history is accessible to the teacher — make this clear
- Consider clearing message history before the lab: **Messages app → delete all conversations**

---

## Day-of Checklist (All Pathways)

### Night Before:
- [ ] Pathway A: Discord server is live, student channels created
- [ ] Pathway B: ngrok is installed on all school machines, test tunnel works
- [ ] Pathway C: BlueBubbles Server is running, API ping test passes

### Morning of Lab Day 1:
- [ ] Write credential info on the board or distribute via Google Classroom (pathway-specific)
  - Pathway A: server invite link (students have their own tokens)
  - Pathway B: ngrok authtoken (if shared) or confirm individual accounts work
  - Pathway C: server URL + API password
- [ ] Confirm `openclaw` is working on student machines: `openclaw --version`
- [ ] Have one machine ready to demo the "first reply" moment to the class

---

## Classroom Flow (2 Periods)

### Period 1: Setup and First Connection (50 min)

**0:00–0:10** — Overview and pathways explanation  
Show the diagram: "Your message → platform → OpenClaw → agent → platform → reply." Emphasize this is a real connection, not a simulation.

**0:10–0:15** — Credential safety discussion  
Before any tokens are generated, establish the rules. Have students repeat back: "Never paste your token in a chat. Never push it to GitHub."

**0:15–0:45** — Students work through their pathway setup  
Circulate. The most common blockers per pathway:
- Pathway A: Message Content Intent not enabled, wrong channel ID
- Pathway B: OpenClaw not running before ngrok starts, port mismatch
- Pathway C: Server URL wrong, not on same WiFi

**0:45–0:50** — "First reply" moment  
When a student gets their first reply, celebrate it out loud. Ask them to show the class. This is the capability unlock — it should feel like a milestone.

### Period 2: Testing and Reflection (50 min)

**0:00–0:05** — Any remaining setup help; stragglers who didn't finish Period 1

**0:05–0:35** — Students work through the Test Plan Template  
Encourage them not to rush. The edge cases in Category 4 often produce the most interesting (and funny) results.

**0:35–0:45** — Pair share: What surprised you?  
Have students turn and tell a partner their most interesting test result. Then share a few with the class.

**0:45–0:50** — Agent Journal update and close

---

## Differentiation

### For students who finish early:
- Deploy their agent in a different pathway (if they did Discord, try webhook)
- Write a second test plan with adversarial tests (trying to break the agent)
- Research: What's the difference between a webhook and a websocket? When would you use each?

### For students who struggle with setup:
- Pair them with a student who got connected (peer teaching)
- Walk through the pathway steps yourself with them
- If time runs out: they can complete the test plan hypothetically, then catch up the connection in a makeup session

### If technology fails completely:
- Have students walk through the test plan *conceptually* — describe what they would send and what they'd expect
- Use the lab guide's "How OpenClaw Channel Plugins Work" diagram as a whiteboard exercise
- Discussion substitute: "If your agent had a Discord account, what would be the first three rules you'd give it?"

---

## Assessment

### Completion Check (Period 2 exit):
Students show you their Test Plan with at least Category 1 and 2 completed, and at least one screenshot of a real agent reply.

### Full Rubric:

| Criterion | 4 — Exceeds | 3 — Meets | 2 — Approaching | 1 — Beginning |
|-----------|------------|----------|----------------|---------------|
| **Connection** | Connected successfully, documented setup steps | Connected successfully | Connection attempted, partially successful | Did not connect |
| **Test Plan** | All 16 tests run, results documented thoroughly | 12+ tests with accurate documentation | 8–11 tests documented | Fewer than 8 tests |
| **Edge Cases** | Designed original test 5.4, explained reasoning | Completed all edge cases | Completed some edge cases | Skipped edge cases |
| **Reflection** | Nuanced reflection on responsibility + deployment | Thoughtful journal entry | Basic journal entry | Missing journal entry |
| **Credential Safety** | Demonstrates understanding of token security | Can explain token safety | Needs reminders about token safety | N/A |

---

## Connection to Module 6

Module 6 (Ethics/Guardrails) follows directly from this lab. The questions students encountered during testing — *What should it refuse? What happens with unexpected inputs? Who's responsible if the agent says something wrong?* — are the driving questions of Module 6.

In your Module 6 opener, reference specific things that happened in this lab. "Remember when [student]'s agent did X? That's exactly the kind of thing we'll learn to prevent."

---

## Frequently Asked Questions

**Q: Do students keep their bots running after this lab?**  
A: Only if they choose to. Running `openclaw stop` disconnects the channel plugin. For the rest of Module 5, they can run with or without the channel connection. By Module 7, they'll want it running for the AI Expo.

**Q: What if a student's bot sends something inappropriate during testing?**  
A: This is a rare but real possibility, especially if a student (or someone else) sends a provocative prompt. If this happens during class, use it as a teaching moment — this is exactly why Module 6 exists. Have the student shut down their agent (`openclaw stop`), and address it in discussion.

**Q: Can students keep their Discord bot/BlueBubbles connection after class ends?**  
A: For Discord bots: the bot is their own Discord application — yes, they can keep it running. For BlueBubbles (Pathway C): it depends on whether the school Mac stays running. For webhooks: ngrok tunnels expire — they'd need to restart each session.

**Q: Is the ngrok free tier sufficient?**  
A: For classroom testing, yes. The free tier allows 1 active tunnel, 40 connections/minute. That's plenty for a 1-2 period test session. If the entire class is on one ngrok account, you'll hit the rate limit — use individual free accounts or anonymous tunnels instead.

---

*Teacher Setup Guide — Channel Connection Lab | Module 5 | OpenClaw AI Curriculum*
