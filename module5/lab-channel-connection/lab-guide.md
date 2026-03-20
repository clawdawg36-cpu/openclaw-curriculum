# Channel Connection Lab — Student Guide
## The Key Lab: Wiring Your Agent to the World

**Module:** 5 — Give Your Agent a Voice  
**Time:** 2 class periods  
**Capability Unlock:** 🎙️ Your agent gets a real-world presence

---

## This Is It

Up until now, your agent has lived in a terminal. It's been private. You were the only one who could talk to it.

That's about to change.

In this lab, you'll connect your agent to a **real communication channel** — an actual platform where real messages arrive and your agent sends real replies. After today, someone could send a message in a Discord server, or to an iMessage number, or to a webhook endpoint, and your agent will respond.

This is the Module 5 capability unlock: **Communication**. Your agent isn't a tool you run in a terminal anymore. It has a presence.

> 🔑 **This is the same kind of moment as Lab 2.4** — when your agent first saw an image, the world expanded. Today, your agent can be *heard*.

---

## Before You Start: Choose Your Pathway

You'll connect your agent using **one of three pathways**. Choose based on what's available in your class:

| Pathway | What you need | Best for |
|---------|--------------|---------|
| **A. Discord Bot** | Teacher-provisioned Discord server | Classes with a shared Discord |
| **B. Webhook Endpoint** | Any platform that can send HTTP requests | Most universal — works anywhere |
| **C. iMessage via BlueBubbles** | A Mac with Messages.app + BlueBubbles installed | Schools with shared Mac setup |

Your teacher will tell you which pathway(s) are available. Some of you may have a choice; others may have only one option.

**Circle your pathway: A / B / C**

> **All three pathways end at the same place:** your agent reads a message from the real world and replies. The journey is different; the destination is the same.

---

## 🚨 Credential Safety — Read This First

Every pathway involves a **secret token or credential**. These are like passwords. If someone else gets your token, they can control your bot or access your account.

**The rules:**
1. **Never paste your token into a chat, document, or shared screen.** Never.
2. **Never commit your token to a git repository.** (OpenClaw handles this for you — but know the rule.)
3. **If you accidentally expose a token, revoke it immediately.** We'll show you how in each pathway.
4. **Your token is yours.** Don't share it, even with classmates.

OpenClaw stores credentials in your local config — you won't have to paste them into code files. But you'll still need to handle them carefully during setup.

---

## How OpenClaw Channel Plugins Work

Before jumping into the pathways, here's a quick mental model.

OpenClaw is modular. At its core, it's a conversation engine. **Channel plugins** are adapters that connect that engine to communication platforms.

```
Real World            OpenClaw
-----------           --------
Discord user    →     Channel Plugin (Discord)   →   Your Agent
Your agent      →     Channel Plugin (Discord)   →   Discord user
```

When you set up a channel plugin:
1. The plugin authenticates with the platform (using your token)
2. The platform sends incoming messages to OpenClaw
3. OpenClaw passes the message to your agent
4. Your agent generates a response
5. The plugin sends the response back to the platform

You're not writing this plumbing — OpenClaw handles it. Your job today is configuration and testing.

---

# Pathway A: Discord Bot

*For classes with a teacher-provisioned Discord server*

---

## A.1 — What You're Building

A Discord bot account that your OpenClaw agent "inhabits." When someone sends a message in your designated channel, your agent reads it and replies — automatically, in real time.

**Time estimate:** 60–90 minutes (including testing)

---

## A.2 — Prerequisites

- [ ] Teacher has created a class Discord server
- [ ] Teacher has created a dedicated channel for you (e.g., `#student-alice-agent`)
- [ ] You have been invited to the server
- [ ] You have a Discord account (or will create one with school email)

---

## A.3 — Step 1: Create a Discord Application

A Discord "bot" is actually a special type of Discord application. You need to create one.

1. Go to **https://discord.com/developers/applications**
2. Log in with your Discord account
3. Click **"New Application"** (top right)
4. Name it after your agent — e.g., `Aria-Bot` or `[YourAgentName]-Bot`
5. Accept the terms and click **Create**

You'll land on your application's dashboard. This is where you manage your bot.

---

## A.4 — Step 2: Create the Bot User

Your application needs a bot account — the actual user that will appear in Discord.

1. In the left sidebar, click **"Bot"**
2. Click **"Add Bot"** → **"Yes, do it!"**
3. You'll see a bot has been created with your app name

**Turn on these settings under "Privileged Gateway Intents":**
- ✅ **Message Content Intent** — required for your agent to read message text
- ✅ **Server Members Intent** — optional but useful

Click **Save Changes**.

---

## A.5 — Step 3: Get Your Bot Token

Your bot token is the credential that lets OpenClaw control your bot.

1. On the Bot page, find the **Token** section
2. Click **"Reset Token"** (you may need to confirm with 2FA)
3. **Copy the token immediately** — you'll only see it once
4. **Store it temporarily in a private text file** (not shared with anyone)

> ⚠️ **This token = full control of your bot.** Treat it like a password. If you close this page without copying it, click Reset Token again.

---

## A.6 — Step 4: Invite the Bot to Your Class Server

Before the bot can join the server, you need to generate an invite link with the right permissions.

1. In the left sidebar, click **"OAuth2"** → **"URL Generator"**
2. Under **Scopes**, check: `bot`, `applications.commands`
3. Under **Bot Permissions**, check:
   - `Read Messages/View Channels`
   - `Send Messages`
   - `Read Message History`
4. Copy the generated URL at the bottom
5. Open the URL in your browser
6. Select your class server from the dropdown
7. Click **Authorize**

Your bot should now appear in the server's member list (probably offline for now — that's expected).

---

## A.7 — Step 5: Configure OpenClaw

Now connect your bot to OpenClaw.

Open a terminal and run:
```bash
openclaw plugin add discord
```

Follow the prompts:
- **Bot Token:** paste your token (it won't display on screen — that's normal)
- **Guild ID:** your class server's ID (right-click the server icon → Copy Server ID — you may need Developer Mode enabled in Discord settings)
- **Channel ID:** your designated channel's ID (right-click the channel → Copy Channel ID)

Verify it was saved:
```bash
openclaw plugin list
```

You should see `discord` in the list with a `✓` status.

---

## A.8 — Step 6: Start Your Agent with Discord

```bash
openclaw start --channel discord
```

You should see output like:
```
[OpenClaw] Starting agent: [YourAgentName]
[Discord] Connecting to gateway...
[Discord] Bot ready: [YourAgentName]#1234
[Discord] Listening on: #student-[yourname]-agent
```

If you see errors, go to the **Troubleshooting** section at the end of this pathway.

---

## A.9 — Step 7: The Test

Now the moment. Open Discord, go to your channel, and type:

```
Hello! Are you there?
```

Wait 2–5 seconds.

If everything is working, your agent will reply. You should see a response in the channel from your bot account.

**Capture this moment:** Screenshot the first reply and paste it in your Test Plan document.

---

## A.10 — Step 8: Run the Full Test Script

Don't stop at "hello." Run through all the tests in your **Test Plan Template** (separate document). These tests verify your agent handles:
- Basic Q&A
- A multi-turn conversation
- An ambiguous or tricky question
- An off-topic message
- A message with an attachment or mention

Document every result.

---

## A.11 — Troubleshooting

**Bot is online but doesn't respond:**
- Check that Message Content Intent is enabled (A.4)
- Verify you configured the right Channel ID (not the server ID)
- Run `openclaw plugin test discord` to diagnose

**"Missing Access" error:**
- Bot wasn't invited to the server with correct permissions
- Re-run the invite URL generator (A.6) and reinvite

**Bot appears offline:**
- `openclaw start --channel discord` isn't running, or crashed
- Check for error output in the terminal

**Token invalid:**
- Token may have been reset or expired
- Go back to Discord Developer Portal, reset the token, and re-run `openclaw plugin add discord`

---

# Pathway B: Webhook Endpoint

*The most universally accessible option — works with any platform that can send HTTP requests*

---

## B.1 — What You're Building

A public-facing URL (a **webhook endpoint**) that your OpenClaw agent listens on. When any system sends an HTTP POST to this URL, your agent reads the message and can reply.

Webhooks are how the modern internet talks to itself. Slack, GitHub, Stripe, Discord — they all use webhooks. Learning this pathway gives you a skill that transfers everywhere.

**Time estimate:** 45–75 minutes (including ngrok setup)

---

## B.2 — How Webhooks Work

A webhook is just an HTTP endpoint — a URL that accepts incoming POST requests.

```
External service         Your endpoint
---------------          -------------
"Something happened!"  →  POST /webhook
                       ←  200 OK (received)
                       
OpenClaw reads the incoming request and runs your agent.
Agent reply → sent back via the platform's API (or logged).
```

The challenge is that your agent runs on your local machine, which doesn't have a public URL. We solve this with **ngrok** — a free tool that creates a temporary public URL that tunnels to your localhost.

---

## B.3 — Step 1: Install ngrok

**On Mac:**
```bash
brew install ngrok
```

**On Windows:**
Download from https://ngrok.com/download and follow the installer.

**On Linux/Chromebook:**
```bash
curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc | sudo tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null
echo "deb https://ngrok-agent.s3.amazonaws.com buster main" | sudo tee /etc/apt/sources.list.d/ngrok.list
sudo apt update && sudo apt install ngrok
```

Verify:
```bash
ngrok version
```

---

## B.4 — Step 2: Create a Free ngrok Account

1. Go to **https://ngrok.com**
2. Sign up with your school email
3. After login, go to **Your Authtoken** in the dashboard
4. Copy your authtoken
5. Run:
```bash
ngrok config add-authtoken YOUR_TOKEN_HERE
```

This authenticates ngrok on your machine.

---

## B.5 — Step 3: Start Your OpenClaw Webhook Server

OpenClaw includes a built-in webhook receiver. Start it:

```bash
openclaw start --channel webhook --port 8080
```

You should see:
```
[OpenClaw] Starting agent: [YourAgentName]
[Webhook] Listening on http://localhost:8080/webhook
[Webhook] Ready to receive POST requests
```

Keep this terminal open.

---

## B.6 — Step 4: Create Your Public URL with ngrok

In a **second terminal window:**

```bash
ngrok http 8080
```

You'll see output like:
```
Forwarding  https://abc123.ngrok-free.app -> http://localhost:8080
```

**Copy your ngrok URL** (the `https://abc123.ngrok-free.app` part). This is your public webhook URL.

> ⚠️ **This URL is temporary.** Every time you restart ngrok, you get a new URL. For today's lab, that's fine.

---

## B.7 — Step 5: Test Your Webhook with a Simple Request

Before connecting any platform, verify the webhook works from the command line.

Open a **third terminal** and run:

```bash
curl -X POST https://YOUR_NGROK_URL/webhook \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello from curl! Are you there?"}'
```

Look back at your first terminal (where OpenClaw is running). You should see:
```
[Webhook] Received: "Hello from curl! Are you there?"
[Agent] Processing...
[Agent] Response: "Hello! Yes, I'm here and ready to help..."
```

If you see that, **your webhook works.**

> 💡 **What just happened?** You simulated an incoming message using curl. OpenClaw received it, passed it to your agent, and your agent processed it. This same flow happens when a real platform sends the webhook.

---

## B.8 — Step 6: Connect a Real Platform (Choose One)

Now connect your webhook URL to a platform that can send it messages.

**Option B-i: Connect to a test form (Simplest)**

Use a free tool like **Webhook.site** or **Pipedream** to create a test workflow:
1. Go to **https://pipedream.com** → New Workflow
2. Choose HTTP Trigger → copy the trigger URL
3. Actually, we're going the other direction: use Pipedream to *send* to your webhook

Or simply use the curl test above — it's a perfectly valid test for the lab.

**Option B-ii: Connect to a Slack workspace**

If your school has Slack:
1. Go to https://api.slack.com/apps → Create New App
2. Choose "From scratch" → name it → select your workspace
3. Under **Event Subscriptions**: enable events, paste your ngrok URL + `/webhook`
4. Subscribe to `message.im` event
5. Install the app to your workspace
6. DM your app to test

**Option B-iii: Connect to a web form**

Create a simple HTML page that submits form data to your webhook:

```html
<!DOCTYPE html>
<html>
<body>
  <h2>Talk to My Agent</h2>
  <form id="form">
    <input type="text" id="msg" placeholder="Ask something...">
    <button type="submit">Send</button>
  </form>
  <div id="response"></div>
  
  <script>
    document.getElementById('form').onsubmit = async (e) => {
      e.preventDefault();
      const msg = document.getElementById('msg').value;
      const res = await fetch('YOUR_NGROK_URL/webhook', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({message: msg})
      });
      const data = await res.json();
      document.getElementById('response').textContent = data.reply || JSON.stringify(data);
    };
  </script>
</body>
</html>
```

Save as `agent-chat.html`, open in your browser, and send messages.

---

## B.9 — Step 7: Run the Full Test

Whether you used curl, Slack, or the web form, now run through your full **Test Plan Template**.

Document every result: what you sent, what your agent said, whether it was right, and whether it was fast.

---

## B.10 — Troubleshooting

**ngrok says "connection refused":**
- OpenClaw webhook server isn't running — check your first terminal
- The port numbers don't match — verify both are using 8080

**curl returns HTML error:**
- The ngrok URL expired — restart `ngrok http 8080` and get a new URL
- Agent crashed — check first terminal for errors

**OpenClaw receives the message but gives no response:**
- Run `openclaw status` in another terminal to check agent health
- Restart with `openclaw start --channel webhook --port 8080`

**Slack events not arriving:**
- Slack requires your webhook URL to respond with 200 OK within 3 seconds for verification
- ngrok free tier has rate limits — try a different tab

---

# Pathway C: iMessage via BlueBubbles

*For schools with a shared Mac running Messages.app + BlueBubbles Server*

---

## C.1 — What You're Building

A connection between your OpenClaw agent and real iMessages. When someone texts a specific number (the Mac's number), your agent reads the iMessage and sends a reply — as a real iMessage.

This is the most "real-world" pathway — your agent has a phone number.

**Time estimate:** 45–60 minutes (much of the setup is teacher-side)

---

## C.2 — Prerequisites

This pathway requires setup that **your teacher does in advance**. Ask them to confirm:

- [ ] BlueBubbles Server is installed and running on the class Mac
- [ ] BlueBubbles is configured with a server URL (local or via Cloudflare Tunnel)
- [ ] You've been given the server URL and API password
- [ ] The Mac is signed into iMessage with an Apple ID
- [ ] You know the iMessage address to send test messages to

---

## C.3 — How BlueBubbles Works

BlueBubbles is an open-source tool that exposes the Mac's Messages.app via an API. It acts as a bridge:

```
iMessage Network           BlueBubbles              OpenClaw
----------------           -----------              --------
Someone sends a text  →   Server receives it   →   Reads message
                      ←   Server sends reply   ←   Agent responds
```

OpenClaw has a built-in BlueBubbles channel plugin. You'll configure it with the server URL and credentials your teacher provides.

---

## C.4 — Step 1: Get Your Credentials

Your teacher will provide:
- **Server URL:** something like `http://192.168.1.100:1234` (local) or `https://yourschool.trycloudflare.com` (remote tunnel)
- **API Password:** the password set during BlueBubbles setup
- **Your designated chat handle:** a contact name or phone number for your testing

Write these down in a secure place. **Do not share them.**

---

## C.5 — Step 2: Configure the BlueBubbles Plugin

In your terminal:

```bash
openclaw plugin add bluebubbles
```

Follow the prompts:
- **Server URL:** paste the URL your teacher gave you
- **API Password:** paste the password (won't display — normal)
- **Your phone/handle:** enter your personal phone number in format `+1XXXXXXXXXX` (this is who you'll send from during testing)

Verify:
```bash
openclaw plugin list
```

Should show `bluebubbles` with a `✓` status.

---

## C.6 — Step 3: Test the Connection

Before involving live messages, verify the plugin can reach BlueBubbles:

```bash
openclaw plugin test bluebubbles
```

Expected output:
```
[BlueBubbles] Connecting to https://... ✓
[BlueBubbles] Authentication OK ✓
[BlueBubbles] Server version: X.X.X ✓
[BlueBubbles] Ready
```

If you see errors here, stop and troubleshoot before continuing.

---

## C.7 — Step 4: Start Your Agent

```bash
openclaw start --channel bluebubbles
```

Expected output:
```
[OpenClaw] Starting agent: [YourAgentName]
[BlueBubbles] Connected to server
[BlueBubbles] Polling for new messages...
[BlueBubbles] Ready — listening for iMessages
```

---

## C.8 — Step 5: The Test

Take out your phone (or borrow a classmate's phone if yours isn't allowed).

Text the Mac's iMessage address (your teacher will give you this — it's the phone number or Apple ID email associated with the Mac).

Send:
```
Hello! Are you there?
```

Wait 5–10 seconds.

Your agent should reply via iMessage. You'll see the reply arrive on your phone just like a regular text.

**This is the moment.** Your agent is now reachable from anywhere in the world with an iPhone.

Screenshot the conversation and paste it in your Test Plan.

---

## C.9 — Step 6: Run the Full Test

Follow the full test script in your **Test Plan Template**.

Note: because BlueBubbles uses the Mac's real Apple ID, message timing can vary (1–10 seconds). This is normal.

---

## C.10 — Troubleshooting

**Plugin test fails — "connection refused":**
- BlueBubbles Server isn't running on the Mac — ask your teacher
- Server URL might be wrong — double-check with your teacher
- If using local IP, you must be on the same WiFi network

**Plugin test says "authentication failed":**
- API password is wrong — get it from your teacher again
- Try re-running `openclaw plugin add bluebubbles` to re-enter credentials

**Agent starts but doesn't respond to texts:**
- Make sure you're texting the correct number/Apple ID
- Check that your agent terminal is still running (hasn't crashed)
- BlueBubbles polling interval may be slow — wait 30 seconds and try again

**Replies come from the wrong contact:**
- The Mac's Apple ID may have multiple handles — ask teacher which one is active
- Make sure you're texting the exact handle the Mac is registered with

---

# All Pathways: After You're Connected

---

## What Just Happened?

Take a moment before you rush into testing.

Your agent — the thing you've been building since Module 1, the entity you named and gave a personality to — just gained the ability to communicate with the outside world.

Before today: terminal only, you only.  
After today: a real channel, real messages, potentially real people.

That's a meaningful threshold. Before you move into testing, open your Agent Design Journal and write one sentence about how that feels.

---

## Running Your Full Test Suite

Now run through your **Test Plan Template** systematically.

The test plan has 5 categories:
1. **Basic connectivity** — does it respond at all?
2. **Q&A** — can it answer questions correctly?
3. **Multi-turn conversation** — does it maintain context?
4. **Edge cases** — what happens with weird inputs?
5. **Failure modes** — what should it refuse?

Don't skip the edge cases. The edge cases are where you learn what your agent is really like when it's "in the wild."

---

## The Reflection Moment

After testing, answer these questions in your worksheet or journal:

1. **The first message:** What was the first message your agent received from the real world? What did it say back?

2. **What worked:** Which tests passed? What did that tell you about your agent's capabilities?

3. **What failed:** Which tests failed or gave unexpected results? What would you fix?

4. **The stranger problem:** Imagine someone who didn't build your agent started using it. What would they think? What would confuse them? What might go wrong?

5. **Responsibility:** Your agent now exists in a space where real people could interact with it. What's one thing you would NOT want it to do in that space?

---

## Wrapping Up

Before you leave today:

```bash
openclaw stop
```

This stops your agent from running in the background. For Discord and BlueBubbles, this also disconnects the bot from the platform.

> **Note:** Your configuration is saved. Next time you want to run your agent on this channel, just:
> ```bash
> openclaw start --channel [discord|webhook|bluebubbles]
> ```

---

## What's Next?

Your agent is connected. That's enormous.

Module 6 is about what happens next: what should your agent *refuse* to do? Who gets to decide? What are the ethics of deploying an AI agent into a real communication channel?

The questions you started asking today — *"what if someone sends something weird?"* and *"what should it refuse?"* — those are exactly the questions Module 6 is built around.

You built the capability. Now you'll build the responsibility to match it.

---

*Module 5 Lab 2 — Channel Connection | OpenClaw AI Curriculum*
