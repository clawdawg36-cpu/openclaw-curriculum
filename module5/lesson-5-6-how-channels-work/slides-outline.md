# Slides Outline — Lesson 5.6: How Channels Work: APIs, Bots & Webhooks

**Module:** 5 — Give Your Agent a Voice  
**Lesson:** 5.6 — How Channels Work  
**Format:** ~14 slides, 50-minute period  
**⚠️ Note: This is the scaffolding lesson immediately before the Channel Connection Lab. The last slide bridges directly to lab day.**

---

## Slide 1 — Title Slide

**Headline:** How Channels Work  
**Subhead:** APIs · Bots · Webhooks · Credentials  
**Visual:** An agent in a terminal → arrow → Discord/iMessage icon (the agent "escaping" into the world)  
**Note:** Do NOT show this slide first. Open with the live bot demo instead. Come back to title slide only if needed for pacing.

---

## Slide 2 — [DEMO SLIDE — no text]

**Headline:** (blank)  
**Content:** (blank — full screen backdrop while demo runs)  
**Note:** Teacher sends a message to the bot on Discord/projector. Wait for reply. Let students react. THEN ask: "How did that happen?"

---

## Slide 3 — What Is an API?

**Headline:** API = Application Programming Interface  
**Subhead:** (That tells us nothing. Here's the real explanation.)  
**Content:**

```
[You / Your Bot]  ←→  [API / Waiter]  ←→  [Platform / Kitchen]
```

- **You**: want to send a message, get a user list, post a reply
- **The Kitchen** (Discord, Twitter, etc.): has those capabilities
- **The Waiter** (API): the defined set of rules for how to ask

**Key line:** APIs exist because platforms don't let anyone access their systems directly — that would be chaotic and insecure. An API is the contract.

**Visual:** Restaurant diagram — customer, waiter, kitchen  
**Note:** Draw on whiteboard first, then advance to this slide to reinforce.

---

## Slide 4 — APIs Are Everywhere

**Headline:** You use APIs every day  
**Content:**
- Weather app → weather API
- "Login with Google" → Google auth API  
- Your AI agent → OpenAI / Anthropic API
- Maps in apps → Google Maps API
- Payments in apps → Stripe API

**Question:** What other apps do you use that are probably built on APIs?

**Visual:** App icons with arrows pointing to API labels  
**Note:** Quick — 2 minutes. Then move to the bot-specific API concept.

---

## Slide 5 — How Does a Bot Message Look?

**Headline:** An API call, in plain English  
**Content:**

```
Your bot says:
  "Hey Discord API — please send this message
   to channel #general in server XYZ."

Discord says:
  "Done. Sent at 2:34:07 PM. Message ID: 1234."
```

- Every action your bot takes = an API call
- Every API call = a formatted request with authentication + instructions
- The API responds with a confirmation (or an error)

**Visual:** Request/response diagram  
**Note:** No code required. Keep this conceptual.

---

## Slide 6 — The Problem: How Does Your Bot Know?

**Headline:** Your bot is running. Someone sends a message. How does it find out?  
**Content:** (blank — let students think)

**Note:** Pause here. Ask students to guess. Then advance to slides 7 and 8.

---

## Slide 7 — Option 1: Polling (The Old Way)

**Headline:** Polling: "Any messages? Any messages? Any messages?"  
**Content:**

```
Bot → Discord: "Any new messages?" → "Nope."
Bot → Discord: "Any new messages?" → "Nope."
Bot → Discord: "Any new messages?" → "Yes! Here."
Bot → Discord: "Any new messages?" → "Nope."
```

**Problems:**
- Slow — updates only as often as you ask
- Wasteful — most checks return nothing
- Scales badly with many bots

**Visual:** Bot hammering Discord with requests, Discord looking annoyed  
**Note:** Play this up a bit — it's a genuinely silly approach.

---

## Slide 8 — Option 2: Webhooks (The Smart Way)

**Headline:** Webhooks: "Call me when something happens"  
**Content:**

```
Bot tells Discord: "Here's my URL. Call it when a message arrives."
[Someone sends a message]
Discord → Bot's URL: "Hey — message arrived! Here it is."
[Bot processes instantly]
```

**Analogy:** Doorbell vs. opening the door every 5 minutes to check if someone's there.

**Key word:** The bot "registers" a webhook URL. That's a one-time setup.

**Visual:** Doorbell graphic → bot wakes up  
**Note:** This is the key concept for lab day — they're going to configure a webhook URL.

---

## Slide 9 — Polling vs. Webhooks

**Headline:** Side by side  
**Content:**

| | Polling | Webhooks |
|--|---------|----------|
| How it works | Bot asks repeatedly | Platform notifies instantly |
| Speed | Delayed | Real-time |
| Efficiency | Wasteful | Efficient |
| Used for | Simple/legacy bots | Modern bots |

**Note:** Quick comparison — 1 minute. Then move to the full flow.

---

## Slide 10 — The Full Message Journey

**Headline:** Follow the message  
**Content (build step by step — one click per step):**

```
① User types a message in Discord
        ↓
② Discord receives it
        ↓
③ Discord sends HTTP POST to your bot's webhook URL
        ↓
④ Your OpenClaw agent receives the request
        ↓
⑤ Agent calls the AI API (Claude/ChatGPT)
        ↓
⑥ AI returns a response
        ↓
⑦ Agent calls Discord API: "Send this reply"
        ↓
⑧ Discord posts the reply
        ↓
⑨ User sees the reply
```

**Timing:** This whole path = 1–5 seconds. Seven network hops. Two AI calls.

**Note:** Build this diagram step by step on the whiteboard FIRST — then advance to this slide. Students copy the diagram into their journals and label each arrow.

---

## Slide 11 — What Is a Bot Token?

**Headline:** Token = Key. Guard it like one.  
**Content:**

```
Token = a string of random characters
       that proves you're allowed to control this bot

Discord sees your token → "Yep, that's Bot #12345's key → Access granted."
```

**What a token unlocks:**
- Send messages as your bot
- Read channel messages
- Manage users (if bot has permissions)
- Join/leave servers

**Visual:** Key icon → door to "your bot's capabilities"  
**Note:** Make this real. Ask: "What would happen if someone got your house key?"

---

## Slide 12 — Why You NEVER Share Your Token

**Headline:** 🚨 Never. Seriously. Never.  
**Content:**
- Don't paste it in Discord
- Don't include it in a GitHub commit
- Don't put it in a screenshot
- Don't put it in the shared class doc
- Don't send it in an email

**What happens if you do:**
- Someone else controls your bot
- They can message anyone in your servers
- GitHub scans for tokens — if found, the platform revokes it and notifies you
- Discord bot tokens are traded in hacker communities

**Where it DOES go:** Your OpenClaw config file. On your machine. Nowhere else.

**Visual:** Giant red X over all the places you shouldn't put it  
**Note:** Be dramatic here. This is the most important safety concept of the module.

---

## Slide 13 — Summary: The Key Concepts

**Headline:** Now you know  
**Content:**

| Concept | In Plain English |
|---------|-----------------|
| API | Rules for asking a platform to do things |
| Webhook | A URL your bot registers — platform calls it when something happens |
| Bot token | A secret credential — proves you can control the bot |
| Message flow | User → Platform → Webhook → Agent → AI → API → Platform → User |

**Visual:** Clean summary table  
**Note:** Ask 3 volunteers to explain one row each in their own words.

---

## Slide 14 — Bridge to the Lab

**Headline:** Next class: you build it  
**Content:**

In the Channel Connection Lab, you will:
1. ✅ Choose your channel platform
2. ✅ Generate a bot token — keep it safe
3. ✅ Configure your OpenClaw channel plugin
4. ✅ Register the webhook URL
5. ✅ Send a test message — watch your agent reply in real time

> "Every one of these steps should now make sense. You're not following a recipe — you understand what's happening and why."

**Exit Ticket:**
> In your journal: Explain the path a message takes from the moment you type it to when your bot replies. Use the terms: API, webhook, token.

**Visual:** Lab setup preview / checklist  
**Note:** 2 minutes for exit ticket. Build anticipation — they're almost there.

---

## Teacher Notes — Slide Deck Setup

- **Slide 10 (message flow) is the most important slide** — build it on the whiteboard first, then use the slide to reinforce. Students MUST draw this diagram themselves.
- **Slide 12 (never share the token)** — consider printing this as a half-sheet to keep on students' desks during the lab
- The live bot demo doesn't need slides — it should feel unscripted and spontaneous
- If time runs short: prioritize slides 8 (webhooks), 10 (full flow), and 12 (token safety). Everything else is supporting material.
- **This lesson comes immediately before the Channel Connection Lab.** The lab's step-by-step instructions will map directly to the concepts in slides 8–14.

---

*Slides for Lesson 5.6 | OpenClaw AI Curriculum | Module 5: Give Your Agent a Voice*  
*⚠️ Scaffolding lesson — must appear immediately before the Channel Connection Lab in the pacing calendar.*
