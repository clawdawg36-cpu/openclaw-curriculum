# Module 5 Vocabulary List

**Unit:** AI Literacy & Prompt Engineering  
**Module:** 5 — Talking to AI

---

## Core Terms

### Token
**Definition:** The basic unit of text that AI language models process. A token is roughly a word, but can be shorter (parts of a word) or longer (common phrases). When an AI "reads" your prompt, it breaks it into tokens.

**Example:** The sentence "Let's go!" is about 4 tokens: "Let", "'s", "go", "!"

**Why it matters:** AI models have limits on how many tokens they can handle at once. More tokens = more processing = more cost.

---

### Context Window
**Definition:** The maximum amount of text (measured in tokens) that an AI can "see" and remember at one time — including the conversation history and your current message.

**Example:** If an AI has a 4,000-token context window and your conversation gets longer than that, it starts "forgetting" earlier parts of the conversation.

**Why it matters:** Very long chats can cause AI to lose track of what you said at the beginning.

---

### Hallucination
**Definition:** When an AI confidently produces information that is false, made up, or not supported by its training data. The AI isn't lying — it's pattern-matching in a way that produces incorrect output.

**Example:** Asking an AI about a book and having it describe chapters or characters that don't exist.

**Why it matters:** Always verify AI-generated facts, especially for important decisions, schoolwork, or anything where accuracy matters.

---

### API (Application Programming Interface)
**Definition:** A way for two software programs to talk to each other. An API defines the rules for how requests and responses are structured.

**Example:** When you ask OpenClaw to check the weather, it uses an API to talk to a weather service. Your app asks, the weather service answers.

**Why it matters:** APIs are how AI assistants connect to external tools, services, and data sources.

---

### Webhook
**Definition:** A type of API connection where one service automatically notifies another when something happens — instead of the other service having to ask.

**Example:** A webhook could notify OpenClaw every time a new message arrives in a Discord channel. OpenClaw doesn't have to keep asking "any new messages?" — Discord just tells it.

**Why it matters:** Webhooks make real-time connections possible. They're how channels "push" information to your AI.

---

### Bot
**Definition:** A software program that automatically performs tasks, often in response to messages or events. In messaging apps, bots appear as user accounts but are controlled by code.

**Example:** A Discord bot that answers questions, plays music, or moderates a server.

**Why it matters:** Many AI assistants (including OpenClaw) operate as bots on messaging platforms.

---

### Credential
**Definition:** A piece of identifying information used to prove you have permission to access a system or service. Usually a username + password, API key, or token.

**Example:** An API key is a credential — a secret string of characters that proves you're allowed to use a particular service.

**Why it matters:** Credentials must be kept private. If someone gets your API key, they can use your account and may run up charges or access your data.

---

### Prompt Engineering
**Definition:** The practice of carefully crafting inputs (prompts) to get the best possible outputs from an AI model. A skill that combines clarity, structure, and strategy.

**Example:** Instead of asking "write something about dogs," a prompt engineer might write: "Write a 200-word informational paragraph about golden retrievers for a 4th-grade reading level. Use friendly language and include 3 fun facts."

**Why it matters:** The same AI can give wildly different results depending on how you ask. Prompt engineering is how you unlock better, more reliable responses.

---

### Few-Shot Prompting
**Definition:** A prompting technique where you include 2–5 examples of the pattern you want, so the AI learns from them and applies the same pattern to your actual request.

**Example:** Giving the AI 3 examples of "word → definition in kid-friendly language" before asking it to define a new word.

**Why it matters:** Examples teach the AI your format and style far more effectively than descriptions alone.

---

### Chain-of-Thought Prompting
**Definition:** A prompting technique where you ask the AI to show its reasoning step-by-step before giving the final answer. Helps the AI "think through" complex problems more accurately.

**Example:** Adding "Let's think through this step by step" or "Explain your reasoning before answering" to a math or logic question.

**Why it matters:** Asking for reasoning often dramatically improves accuracy on complex or multi-step problems. It also helps you spot where the AI went wrong.

---

## Quick Reference Card

| Term | One-Line Definition |
|------|---------------------|
| Token | The basic unit of text an AI processes |
| Context Window | How much text an AI can "see" at once |
| Hallucination | When AI confidently makes something up |
| API | Rules for how two programs talk to each other |
| Webhook | Automatic notification from one service to another |
| Bot | A program that automatically performs tasks |
| Credential | A secret key proving you have access permission |
| Prompt Engineering | Crafting inputs to get better AI outputs |
| Few-Shot Prompting | Teaching AI by example in the prompt |
| Chain-of-Thought | Asking AI to show its reasoning step by step |
