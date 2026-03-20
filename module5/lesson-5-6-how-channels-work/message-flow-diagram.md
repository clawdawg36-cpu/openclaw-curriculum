# Message Flow Diagram — Student Handout

**Lesson 5.6 — How Channels Work**  
**Name:** ___________________________ **Date:** ____________

---

## Draw It Yourself

Using the diagram template below, label each step and each arrow with what's happening and what's being transmitted.

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│   ① _______________________                                         │
│            │                                                        │
│            │ (what travels here? _______________)                   │
│            ▼                                                        │
│   ② _______________________                                         │
│            │                                                        │
│            │ (what travels here? _______________)                   │
│            ▼                                                        │
│   ③ _______________________                                         │
│            │                                                        │
│            │ (what travels here? _______________)                   │
│            ▼                                                        │
│   ④ _______________________                                         │
│            │                                                        │
│            │ (what travels here? _______________)                   │
│            ▼                                                        │
│   ⑤ _______________________                                         │
│            │                                                        │
│            │ (what travels here? _______________)                   │
│            ▼                                                        │
│   ⑥ _______________________                                         │
│            │                                                        │
│            │ (what travels here? _______________)                   │
│            ▼                                                        │
│   ⑦ _______________________                                         │
│            │                                                        │
│            │ (what travels here? _______________)                   │
│            ▼                                                        │
│   ⑧ _______________________                                         │
│            │                                                        │
│            │ (what travels here? _______________)                   │
│            ▼                                                        │
│   ⑨ _______________________                                         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Answer Key (for reference — don't look until you've tried!)

| Step | What's happening | What travels |
|------|-----------------|--------------|
| ① | User types message in Discord | Keystrokes → text |
| ② | Discord receives the message | Message object (text, user, channel, timestamp) |
| ③ | Discord POSTs to your bot's webhook URL | HTTP request with message payload |
| ④ | OpenClaw agent receives the webhook | Message content + metadata |
| ⑤ | Agent calls AI API (Claude/ChatGPT) | Prompt + context window |
| ⑥ | AI returns response | Generated text tokens |
| ⑦ | Agent calls Discord API to send reply | HTTP request with reply text + channel ID |
| ⑧ | Discord posts the reply | Message object |
| ⑨ | User sees the reply | Rendered message in Discord client |

---

## Vocabulary Quick Reference

| Term | Definition |
|------|-----------|
| **API** | A defined set of rules for how to request things from a platform |
| **Webhook** | A URL your bot registers; the platform calls it when events happen |
| **HTTP POST** | A type of web request that sends data (used to deliver webhook notifications) |
| **Token** | A secret credential that proves you're authorized to act as your bot |
| **Rate limit** | How many API calls you're allowed to make per minute/hour |
| **Payload** | The data package sent with a webhook notification or API call |

---

## Key Rule

> 🔑 Your bot token is a **secret**. It goes in your config file — and nowhere else.  
> Never paste it in Discord, GitHub, screenshots, or the class shared doc.

---

*Lesson 5.6 Handout | OpenClaw AI Curriculum | Module 5: Give Your Agent a Voice*
