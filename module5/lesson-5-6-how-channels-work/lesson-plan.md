# Lesson 5.6 — How Channels Work: APIs, Bots, and Webhooks

**Module:** 5 — Give Your Agent a Voice  
**Duration:** 1 period (~50 minutes)  
**Grade Level:** 7–8 (adaptable for 9–12)  
**Prerequisites:** Lessons 5.1–5.5; Module 4 (students have a working OpenClaw agent)

---

## 🔗 Through-Line Connection

> *"Your agent can think. It can prompt. It can study with you and get things wrong and recover. But right now it lives in a terminal. Today we answer the question: how does it get out into the world — into Discord, into iMessage, into a real conversation?"*

**This is the conceptual scaffolding lesson for the Channel Connection Lab — the key lab of Module 5.**

Lesson 5.6 plays the same role here that Lesson 2.4 played in Module 2 (scaffolding the Hugging Face audio lab) and Lesson 3.4 played in Module 3 (scaffolding the skill-building lab). Students leave this lesson with a clear mental model of APIs, webhooks, bots, and credentials — so that when they sit down for the Channel Connection Lab, the configuration steps make sense instead of feeling like magic.

**Direct bridge:** Every step of the lab — choosing a platform, getting a token, configuring the plugin, testing the connection — will feel familiar because students conceptually walked through it today.

---

## 🎯 Learning Objectives

By the end of this lesson, students will be able to:

1. Explain what an API is using a concrete analogy (the menu/waiter metaphor).
2. Describe the difference between polling and webhooks, and explain why webhooks are more efficient.
3. Trace the full message path: user sends message → platform → webhook → agent → response → platform → user.
4. Explain what a bot token / API credential is, why it exists, and why you never share it.
5. Anticipate what they will do in the Channel Connection Lab and why each step matters.

---

## 📋 Materials & Setup

| Item | Notes |
|------|-------|
| Projector / display | For live demo |
| Whiteboard or chart paper | For drawing the message flow diagram |
| "Message Flow" handout | Optional — students can draw their own |
| Computers (optional) | For the live bot demo |
| Discord server (teacher-run) | Pre-configured; teacher account with a bot already connected |
| Sticky notes | For the "what travels in the message" activity |

**Teacher Prep (critical for this lesson):**

Before class, set up a simple Discord bot (or equivalent) that:
- Is already connected to a teacher-run server
- Can receive a message and respond with a simple reply (even just "I got your message!")
- Is safe to demo in class

This does NOT need to be a full OpenClaw agent — a simple echo bot or a bot connected to a basic AI API is enough. The goal is to show the mechanism, not to demo the full product.

**Optional setup:** Have the Discord developer portal open in a browser tab to show the token/configuration screen (credentials obscured).

---

## ⏱️ Lesson Outline

### Opening: The Magic Trick (5 min)

**No explanation — just the demo:**

Have Discord open on the projector (teacher screen). Type a message into the teacher's Discord server. Watch the bot reply — in real time, in Discord, in front of the class.

Let students react for a moment. Then:

- *"How did that just happen?"*
- *"Where was the response generated?"*
- *"What connected the message you saw to the code that generated that reply?"*

Take 3–4 guesses. Don't answer yet.

**Bridge:** *"By the end of today, you'll be able to explain exactly what just happened — every step. And next class, you're going to build it yourself."*

---

### Segment 1: What Is an API? (10 min)

**The Core Concept**

Write on the board: **API = Application Programming Interface**

*"That name tells us nothing. Let's use a better explanation."*

**The Restaurant Analogy:**

Draw on the board:
```
[You / Customer] ←→ [Waiter / API] ←→ [Kitchen / Service]
```

- **You** (your code / your bot) want something — a message sent, a user's profile, a list of channels
- **The kitchen** (Discord's servers, Twitter's servers, etc.) has that thing
- **The waiter** (the API) is the defined set of rules for how to ask for it — what you can request, how to format the request, and what you'll get back

**Key points:**
- APIs exist because platforms don't let just anyone access their systems directly — that would be chaotic and insecure
- An API defines a contract: "Here are the exact requests I accept, and here's exactly what you'll get back"
- When your bot sends a message to Discord, it's making an API call — a structured request that follows Discord's API contract

**Real-world examples (ask students):**
- Weather apps → use a weather API
- "Login with Google" → uses Google's auth API
- Your AI agent → uses OpenAI's or Anthropic's API to generate responses

**API in action:**

Show (conceptually, no code required) what an API call looks like:
```
Request:  "Hey Discord API — send this message to channel #general"
Response: "Done. Here's the timestamp of when it was delivered."
```

*"Every time your bot does anything — read a message, send a reply, check who's in a server — it's making API calls like this."*

---

### Segment 2: How Bots Receive Messages — Polling vs. Webhooks (10 min)

**The Problem: How Does Your Bot Know When Someone Messaged It?**

*"Here's the challenge: your bot is running somewhere. Someone sends a message in Discord. How does your bot find out?"*

**Option 1: Polling (the old way)**

Draw:
```
Bot: "Hey Discord, any new messages?"  → Discord: "Nope."
Bot: "Hey Discord, any new messages?"  → Discord: "Nope."
Bot: "Hey Discord, any new messages?"  → Discord: "Yes! Here it is."
Bot: "Hey Discord, any new messages?"  → Discord: "Nope."
```

- The bot keeps asking, over and over, on a schedule
- **Problem:** Slow (you only get updates as often as you ask), wasteful (most checks = "nope"), scales badly with many bots

**Option 2: Webhooks (the smart way)**

Draw:
```
[Someone sends message] → Discord → "I'll notify your bot" → [Bot gets notified instantly]
```

- Instead of the bot asking Discord, the bot gives Discord a URL to notify
- When something happens, Discord sends an HTTP request to that URL immediately
- **Like a doorbell** vs. someone going to the front door every 5 minutes to check if anyone's there

**Why this matters for lab day:**
> *"When you configure your OpenClaw channel plugin, you're setting up a webhook URL. That's how Discord (or iMessage, or whatever platform) knows where to send incoming messages. You're registering your bot as 'the doorbell destination.'"*

**Check for understanding:** Ask a student to explain the difference between polling and webhooks to a partner in 30 seconds.

---

### Segment 3: The Full Message Journey (10 min)

**Trace the path, step by step**

*"Let's follow a message all the way through — from the moment someone types it to the moment they see a reply."*

Draw this on the board, building it piece by piece as you narrate:

```
[User types message in Discord]
        ↓
[Discord receives it]
        ↓
[Discord sends HTTP POST to your bot's webhook URL]
        ↓
[Your OpenClaw agent receives the request]
        ↓
[Agent runs the message through the AI (API call to Claude/ChatGPT)]
        ↓
[AI returns a response]
        ↓
[Agent makes an API call back to Discord: "Send this reply to that channel"]
        ↓
[Discord posts the reply]
        ↓
[User sees the reply]
```

**Ask students to label each step:** What's happening? What's talking to what?

**Time the journey:**

> *"This entire path — message in, AI response, message back — typically takes 1–5 seconds. That's 7 network hops and two AI calls in under 5 seconds. This is what 'real-time' looks like under the hood."*

**Student activity (2 min):**
Students draw the diagram in their own journal. Label each arrow with what's being transmitted.

---

### Segment 4: Tokens, Credentials & Why You Never Share Them (10 min)

**The Most Important Safety Lesson of This Module**

*"Before you can set up any of this — before your bot can make a single API call — you need credentials. Specifically, a token."*

**What is a bot token?**

> *"A token is like a key. When Discord (or any platform) issues you a bot token, they're saying: 'This string of characters proves you're allowed to act as this bot.' When your code makes an API call, it includes the token. Discord sees the token, recognizes it, and grants access."*

**Draw the analogy:**

```
Token = Key to your bot's front door
Anyone who has the key can unlock the door
Anyone who has the token can control your bot
```

**What can someone do with your bot token?**
- Send messages as your bot (to anyone, in any server your bot is in)
- Read messages in any channel your bot can see
- Ban users (if your bot has those permissions)
- Delete messages
- Join or leave servers

**Why you NEVER share your token:**

> *"I want you to treat your bot token like you treat your password. Actually — treat it like you treat your password AND your house key combined. If you post it in a Discord message, a screenshot, a GitHub commit — you have been pwned. Someone else controls your bot."*

**Real examples to share:**
- Developers routinely accidentally commit API keys to GitHub — GitHub even has a scanner that detects this and notifies the platform to revoke them
- Leaked Discord bot tokens are auctioned in hacker communities
- OpenClaw credentials, like all secrets, go in the config — never in code, never in chat, never in screenshots

**Where do tokens live?**
- In your OpenClaw channel plugin config file (which stays on your machine, not in code)
- You'll generate yours during the lab
- Never paste it anywhere public — not in the shared doc, not in the chat, not in your commit

**Token security demo:**
Show the Discord developer portal (with everything redacted). Show WHERE the token appears and where students will need to copy-paste it during the lab — and where NOT to put it.

---

### Segment 5: Live Demo — The Message in Action (optional, 5 min if time permits)

**If time allows:**

Return to the demo bot from the opening. Walk through the flow:
- Show the webhook URL in the bot's config (redacted/obfuscated)
- Send a message → point at the step in the diagram where we are right now
- Watch the reply → point at the return step

*"You're watching every step of that diagram happen in real time."*

---

### Closing & Bridge to the Lab (5 min)

**The "Now You Know" Summary:**

Write on the board (or reveal pre-written):

| Concept | In Plain English |
|---------|-----------------|
| API | The set of rules for how to ask a platform to do something |
| Webhook | A URL your bot registers so platforms can notify it instantly |
| Bot token | A secret credential that proves you're allowed to control the bot |
| Message flow | User → Platform → Webhook → Agent → AI → API → Platform → User |

**Direct bridge to the lab:**

> *"Tomorrow (or next class), you're going to do exactly what we've been describing. You'll:*
> 1. *Choose your channel platform*
> 2. *Generate a bot token — keep it safe*
> 3. *Configure your OpenClaw channel plugin with that token*
> 4. *Register the webhook so the platform knows where to send messages*
> 5. *Send a test message and watch your agent respond in real time*
>
> *Every one of those steps should now make sense. You're not following a recipe blindly — you understand what's happening and why.*"

**Exit Ticket (in journal, 2 min):**

> *"Explain the path a message takes from the moment you type it to the moment your bot replies. Use the terms: API, webhook, token."*

---

## 📊 Assessment

| Method | Description |
|--------|-------------|
| Message flow diagram (journal) | Can student trace the full path with labels? |
| Exit ticket | Uses API, webhook, and token accurately in context |
| Discussion participation | Engages with the "why tokens matter" discussion |
| Lab readiness | Key assessment is in the Channel Connection Lab itself |

---

## 🔧 Differentiation

**For students who finish early / advanced:**
- Research: What's OAuth? How is it different from a bot token?
- Explore: Discord's API documentation — what's the rate limit? What happens if you exceed it?
- Challenge: Draw a diagram of what would happen if the webhook URL goes down — how would the system fail? How could you design around it?

**For students who struggle:**
- Focus on the restaurant analogy for APIs — it's the most accessible mental model
- The message flow diagram is the core deliverable — spend extra time on this with struggling students
- Polling vs. webhooks: if the distinction is confusing, just teach webhooks. The polling context is helpful but not essential for lab success.

**For ELL students:**
- "API" and "webhook" are domain vocabulary — visual diagrams are essential for these students
- The restaurant analogy translates well across cultures
- Consider providing a pre-drawn blank message flow diagram for students to label rather than draw from scratch

---

## 💬 Discussion Questions

1. *"APIs are everywhere — you use them every day without knowing. What other parts of your digital life are probably powered by APIs?"*
2. *"If your bot token is like a key, and someone steals your key — what's the equivalent of 'changing the locks'?"* (Answer: regenerate/revoke the token)
3. *"We said webhooks are more efficient than polling. Can you think of any situations where polling might actually be the better choice?"*
4. *"Your agent can now technically message anyone in the channel. What are the responsibilities that come with that?"*
5. *"Why do companies charge for API access? What does it cost them when you make an API call?"*

---

## 📎 Slide Outline

See `slides-outline.md` for the full slide-by-slide guide.

**Slide summary:**
1. Title: "How Channels Work: APIs, Bots & Webhooks"
2. Opening demo (no slides — just the bot)
3. What is an API? (Restaurant analogy)
4. API calls — what they look like
5. How bots receive messages: polling diagram
6. How bots receive messages: webhook diagram
7. Polling vs. webhooks comparison
8. The full message journey (build step by step)
9. What is a bot token?
10. Why you NEVER share your token
11. Token security demo / where tokens live
12. Summary table: key concepts
13. Bridge to the lab
14. Exit ticket

---

## 🔗 Connections & Resources

- **Discord Developer Portal:** https://discord.com/developers/applications
- **ngrok (for local webhook testing):** https://ngrok.com — students may see this in the lab
- **OpenClaw Channel Plugin docs:** (internal curriculum reference)
- **"How Discord Bots Work" (simple explainer):** Search YouTube for beginner Discord bot explainers
- **GitHub secret scanning (token safety):** https://docs.github.com/en/code-security/secret-scanning
- **Previous Lesson:** 5.5 — When AI Gets It Wrong (completes the conceptual arc)
- **Next:** Channel Connection Lab — this lesson is the direct prerequisite

---

*Lesson authored for the OpenClaw AI Curriculum | Module 5: Give Your Agent a Voice*  
*Note: This lesson is the conceptual scaffolding for the Channel Connection Lab. It must appear immediately before the lab in the pacing calendar.*
