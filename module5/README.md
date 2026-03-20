# Module 5: Give Your Agent a Voice

---

## 🤖 Your Agent Journey — Module 5 of 7

> **Arc:** *Build Your AI Assistant, Piece by Piece*

**This module's capability unlock: 🎙️ Communication — Connect your agent to a live channel.**

Your agent has been living in a terminal. Time to set it free. In this module, you connect your agent to a real communication channel — Discord, iMessage, or another platform of your choice. Once it's wired up, your agent can receive messages from the real world and reply. For the first time, your agent exists somewhere people actually are.

| Before M5 | After M5 |
|-----------|----------|
| Agent lives in a terminal | ✅ Agent connected to a live channel |
| | ✅ Agent can receive and reply to real messages |
| | ✅ Agent has real-world presence |

**Previous unlock:** Module 4 — Learning (trained model)
**Next unlock → Module 6:** Make your agent ethical (guardrails + policies)

See your full progress: [Your Agent Journey](../AGENT_JOURNEY.md)

---

**Status:** 🚧 Coming Soon

**Grade Level:** 7–8
**Prerequisites:** Module 4 — Give Your Agent the Ability to Learn

---

## Overview

Students configure an OpenClaw channel plugin to connect their agent to a communication platform. They work through the authentication, configuration, and testing process — learning about APIs, webhooks, and message routing along the way. This module also surfaces important questions about what it means to deploy an AI agent into a social context where real people will interact with it.

## Essential Questions

1. What changes when your AI agent can communicate with people who didn't build it?
2. How do APIs and webhooks work? What's the contract between a platform and a bot?
3. What responsibilities come with deploying an agent that can reach real people?
4. How do you test a system that depends on real-time message flow?

## Student "I Can" Statements

By the end of this module, students will be able to say:

- **I can** explain what an API is and why platforms expose them.
- **I can** describe how a webhook works at a conceptual level.
- **I can** configure an OpenClaw channel plugin (Discord, iMessage, or equivalent).
- **I can** test my agent end-to-end: send a message on the platform, receive a reply from my agent.
- **I can** describe at least three ways a deployed agent could behave in unexpected or harmful ways.
- **I can** write a simple test plan for a channel-connected agent.

## Topics

- What is an API? What is a webhook?
- Platform bots: how Discord bots, iMessage integrations, and similar systems work
- Authentication: tokens, credentials, and why you never share them
- OpenClaw channel plugin architecture
- Configuration and testing: from "hello world" to real conversation
- Social context: what changes when a real audience can interact with your agent
- Failure modes: rate limits, downtime, unexpected inputs from strangers
- Privacy considerations: what data flows through the channel, and who can see it

## Key Lab: Connect Your Agent to a Live Channel

Students will:
1. Choose a channel (teacher will provision Discord server or approved platform)
2. Configure the OpenClaw channel plugin with appropriate credentials
3. Send a test message and verify their agent responds
4. Run through a test script: basic Q&A, edge cases, unexpected inputs
5. Document what worked, what failed, and what they'd watch out for in production

## Assessment

- Lab: Working channel connection demonstrated in class
- Test plan: 5 test cases with expected vs. actual behavior
- Reflection: What's different about your agent now that strangers could theoretically interact with it?

## Agent Journal Entry

After this module, update your Agent Design Journal:
- Which channel did you connect?
- What was the first real message your agent received?
- What would you NOT want your agent to do in this channel?

---

*Module 5 of 7 — Previous: [Module 4: Give Your Agent the Ability to Learn](../module4/README.md) | Next: [Module 6: Make Your Agent Ethical](../module6/README.md)*

*Full lesson plans coming soon.*
