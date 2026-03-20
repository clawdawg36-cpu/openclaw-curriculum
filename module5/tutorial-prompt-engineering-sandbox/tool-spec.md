# Tool Spec: Prompt Engineering Sandbox

**Version:** 1.0  
**Module:** 5 — The Art of the Prompt  
**Type:** Interactive browser-based comparison tool  
**Target Devices:** Chromebook, tablet, laptop, desktop (no install required)

---

## Overview

The Prompt Engineering Sandbox is a side-by-side comparison tool that lets students write two versions of the same prompt and see how different phrasing produces different AI responses. The goal is to make the abstract idea of "prompt quality" viscerally visible: students can *see* the difference between a vague prompt and a well-crafted one.

The tool is designed for classroom use during the Prompt Olympics activity and as a self-paced practice tool. No login, no account, no install. Works on any modern browser.

---

## Design Principles

- **Zero friction:** Students should be writing prompts within 10 seconds of opening the page
- **Visual clarity:** Weak vs. strong should feel obviously different at a glance
- **Tablet-first:** All interactive elements work with touch; no hover-only interactions
- **Chromebook compatible:** Pure HTML/CSS/JS, no Node, no build step, no backend required
- **No login:** All state lives in the browser session (localStorage for saved comparisons)

---

## Layout

### Desktop / Wide Screen

```
┌─────────────────────────────────────────────────────────────────┐
│  🧪 Prompt Engineering Sandbox         [Load Example ▾] [?]     │
├────────────────────────────┬────────────────────────────────────┤
│  WEAK PROMPT               │  IMPROVED PROMPT                   │
│  ┌──────────────────────┐  │  ┌──────────────────────────────┐  │
│  │ (text area)          │  │  │ (text area)                  │  │
│  └──────────────────────┘  │  └──────────────────────────────┘  │
│  [Run →]                   │  [Run →]              [Run Both →] │
├────────────────────────────┼────────────────────────────────────┤
│  AI Response               │  AI Response                       │
│  ┌──────────────────────┐  │  ┌──────────────────────────────┐  │
│  │ (response area)      │  │  │ (response area)              │  │
│  └──────────────────────┘  │  └──────────────────────────────┘  │
├────────────────────────────┴────────────────────────────────────┤
│  TECHNIQUES CHECKLIST                                           │
│  ☐ Specificity  ☐ Role  ☐ Few-Shot  ☐ Constraints  ☐ Format   │
│                                                      [Reflect]  │
└─────────────────────────────────────────────────────────────────┘
```

### Mobile / Narrow Screen (< 768px)

Stack vertically: Weak Prompt → Weak Response → Improved Prompt → Improved Response → Checklist

---

## Core Features

### 1. Dual Prompt Entry

- **Left panel:** "Weak Prompt" — labeled with 🔴 and gray border
- **Right panel:** "Improved Prompt" — labeled with 🟢 and green border
- Both panels: multi-line textarea, ~4–6 lines visible, resizable
- Character count displayed below each textarea
- Placeholder text: left = "Type a vague or basic prompt here...", right = "Type your improved prompt here..."

### 2. Run Buttons

- **[Run →] per panel:** Sends that single prompt and shows response in that panel only
- **[Run Both →] button:** Sends both simultaneously (parallel requests), shows responses side-by-side at the same time
- Loading state: spinner animation while waiting
- Error state: friendly message if API call fails ("Something went wrong — check your connection and try again")

### 3. Response Display

- Response rendered as formatted text (markdown → HTML)
- Word count badge on each response: "~84 words"
- **Response quality indicators** (auto-scored, heuristic):
  - 🔴 Very short (< 30 words): "This response might be too vague — did the prompt give enough context?"
  - 🟡 Generic (contains phrases like "it depends", "there are many ways"): "The AI hedged. Try being more specific."
  - 🟢 Specific and structured: "Looks detailed! What techniques made this work?"
- Copy-to-clipboard button on each response

### 4. Techniques Checklist

Below both response panels, a shared "What techniques did you use?" section:

| Technique | Checkbox | One-liner |
|---|---|---|
| Specificity | ☐ | I described exactly what I want |
| Role | ☐ | I gave the AI a persona or job |
| Few-Shot Examples | ☐ | I showed 1–3 examples of what I want |
| Constraints | ☐ | I set limits (length, tone, format) |
| Output Format | ☐ | I specified how to structure the answer |

Checking a technique highlights it in green and shows a one-sentence tip.

### 5. Pre-Loaded Example Pairs

A dropdown "Load Example ▾" with 5 pairs. Loading a pair populates both text areas.

#### Example Pair 1: Book Recommendation
- **Weak:** `Recommend a book`
- **Improved:** `You are a school librarian helping a 7th grader who loves mystery novels and finished the Sherlock Holmes series. Recommend 3 books they'd enjoy, with a 1-sentence description of each and why a mystery fan would like it.`
- **Techniques used:** Specificity, Role, Output Format, Constraints

#### Example Pair 2: Explain a Concept
- **Weak:** `Explain photosynthesis`
- **Improved:** `Explain photosynthesis to a 6th grader who already understands that plants need sunlight to grow. Use an analogy involving cooking or a kitchen. Keep your explanation under 100 words.`
- **Techniques used:** Specificity, Constraints, Few-Shot (analogy as example)

#### Example Pair 3: Writing Help
- **Weak:** `Help me write an email`
- **Improved:** `Write a professional but friendly email from me (a student) to my science teacher asking if I can redo the lab report I got a C on. Explain that I was sick during the week it was due. Keep it under 150 words and end with a specific question.`
- **Techniques used:** Role, Specificity, Constraints, Output Format

#### Example Pair 4: Study Quiz
- **Weak:** `Quiz me on history`
- **Improved:** `You are a quiz show host. Give me 5 multiple-choice questions about the causes of World War I, with 4 answer options each (A, B, C, D). After I answer all 5, tell me my score and explain any I got wrong. Start immediately with Question 1.`
- **Techniques used:** Role, Specificity, Output Format, Constraints, Few-Shot

#### Example Pair 5: Creative Writing
- **Weak:** `Write a story`
- **Improved:** `Write the opening paragraph (3–4 sentences) of a science fiction story set on a space station in 2150. The main character is a 14-year-old girl who discovers something strange in the recycling unit. Write in first person, past tense. Make the last sentence a cliffhanger.`
- **Techniques used:** Specificity, Constraints, Output Format

### 6. Reflection Prompt

After running both prompts, a "Reflect" button appears below the checklist. Clicking it opens a modal with:

> **What did you notice?**
> - Which response was more useful? Why?
> - Which techniques made the biggest difference?
> - What would you change if you ran it again?

This is a journaling prompt — not submitted anywhere. Just for the student to think through.

### 7. Save / Share (Optional, Stretch)

- **Save:** Stores current pair + responses to localStorage as JSON
- **Export:** Downloads a `.txt` file with both prompts and responses labeled
- **History:** A "Recent Comparisons" drawer showing last 5 saved pairs

---

## Technical Specification

### Stack

- Pure HTML5 + CSS3 + Vanilla JavaScript
- No frameworks, no build step, no npm
- Single `index.html` file (or `index.html` + `style.css` + `app.js`)
- Total size target: < 50KB before response data

### API Integration

The tool is designed to call any OpenAI-compatible API endpoint:

```js
// Configuration block at top of app.js
const CONFIG = {
  apiUrl: "https://your-openclaw-instance/v1/chat/completions",
  model: "gpt-4o-mini",  // or any available model
  apiKey: "",  // Optional: if left blank, tool prompts user to paste key in settings
  maxTokens: 300,
  temperature: 0.7
};
```

**For classroom use without a deployed backend:**
- Include a simple "API Key" input field (hidden behind a ⚙️ Settings button)
- Teacher pastes classroom API key once; it's stored in sessionStorage (not localStorage, for security)
- Key is never displayed in plain text after entry

**Request format:**
```json
{
  "model": "gpt-4o-mini",
  "messages": [
    {"role": "user", "content": "<student prompt text>"}
  ],
  "max_tokens": 300,
  "temperature": 0.7
}
```

### Accessibility

- All interactive elements keyboard accessible (Tab, Enter, Space)
- Color is never the only indicator of state (icons + labels alongside color)
- Sufficient contrast ratios (WCAG AA minimum)
- Textarea labels use `<label for="...">` association
- Loading states announced via `aria-live` regions

### Performance

- No external CDN dependencies (embed any icons as inline SVG)
- Fonts: system font stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`)
- Should load in < 1 second on school Wi-Fi

---

## File Structure

```
module5/tutorial-prompt-engineering-sandbox/
├── tool-spec.md          ← this file
├── cheat-sheet.md
├── teacher-guide.md
└── sandbox/
    ├── index.html        ← main app (can be opened directly from file system)
    ├── style.css
    └── app.js
```

> Note: `sandbox/index.html` should work when opened directly from the file system (`file://`) *or* served via any simple HTTP server. Do not use features that require `https://` (e.g., navigator.clipboard requires secure context — use `document.execCommand` fallback).

---

## Visual Design Guidelines

### Color Palette

| Role | Color | Use |
|---|---|---|
| Weak/left | `#FF6B6B` (coral red) | Left panel border, label |
| Improved/right | `#51CF66` (green) | Right panel border, label |
| Background | `#F8F9FA` | Page bg |
| Panel bg | `#FFFFFF` | Textarea + response areas |
| Accent | `#339AF0` (blue) | Buttons, active states |
| Text | `#212529` | Body text |
| Muted | `#868E96` | Hints, placeholders |

### Typography

- **Headings:** Bold, 18–24px
- **Labels:** All-caps, letter-spaced, 11–12px (e.g., "WEAK PROMPT")
- **Response text:** 14–15px, line-height 1.6
- **Textarea:** 15px, monospace optional

### Spacing

- Panel gap: 16px minimum
- Border radius: 8px on panels, 4px on buttons
- Padding inside panels: 16px

---

## Scope Boundaries (Not Included in v1)

- No user accounts or authentication
- No server-side storage of prompts or responses
- No analytics or logging
- No real-time collaboration
- No audio/voice input
- No image prompts (text only)
- No assignment submission or grade integration

---

## Success Metrics (For Teacher Review)

After a class session, the tool "worked" if:
- Students can articulate what changed between their two prompts
- Students can name at least 2 techniques they applied
- Both prompts actually ran and returned visible responses
- No student needed more than 2 minutes of help to get started
