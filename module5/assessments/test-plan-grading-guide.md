# Test Plan Grading Guide
## What Makes a Good Test Case?

This guide helps teachers grade Channel Connection Lab test plans consistently.

---

## The Three Elements of a Good Test Case

Every test case needs all three:

### 1. 📥 Clear Input
*What exactly did the student do or send?*

**Strong example:**
> "Sent the message 'hello bot' to the #test channel in Discord at 2:14 PM"

**Weak example:**
> "Sent a message"

A clear input is specific enough that another person could repeat it exactly. Channel, message text, timing, and any setup steps all count.

---

### 2. 📤 Specific Expected Output
*What was the student expecting to happen?*

**Strong example:**
> "Expected OpenClaw to reply in Discord within 30 seconds with a greeting response"

**Weak example:**
> "Expected it to work"

A specific expected output states *what* should happen, *where* it should appear, and optionally *when*. Vague expectations like "it works" or "it responds" don't count.

---

### 3. ✅ Honest Actual Output
*What actually happened?*

**Strong example:**
> "OpenClaw replied in 8 seconds: 'Hey! What can I help you with?' — connection confirmed."

**Also strong (failure case):**
> "No response appeared in Discord after 2 minutes. OpenClaw showed no activity in the logs. Tried resending — same result."

**Weak example:**
> "It worked" or "It didn't work"

The honest actual output must describe what the student actually observed. If it failed, they should describe exactly what happened (or what didn't happen). Full credit for honest failure documentation — it's better than a vague "it worked."

---

## Scoring Test Cases

| Quality | Score |
|---------|-------|
| All 3 elements present, clear and specific | Full credit |
| 2 of 3 elements present | Partial credit |
| Only 1 element present, or all 3 are vague | Minimal credit |
| No test case / copied from example without modification | No credit |

---

## Bonus: Signs of Good Testing Thinking

Award extra appreciation (not extra points) when students:
- **Test a failure case** (e.g., "What happens if I send an empty message?")
- **Test an edge case** (e.g., "What if the message is very long?")
- **Repeat a test** after making a change and document the difference
- **Note unexpected behavior** that wasn't part of the expected output

---

## Common Issues to Watch For

| Issue | What to Say |
|-------|-------------|
| Expected and actual output are identical word-for-word | Ask: "Did you write this before or after testing?" |
| Actual output just says "worked" | Ask: "What specifically did you see?" |
| No failure test cases | Prompt: "What did you test that *didn't* work as expected?" |
| Test plan has inputs but no expected outputs | Explain: "Without expecting something specific, you can't know if a test passed or failed" |

---

## Sample Full-Credit Test Case

**Test Case 2: Failure Scenario**

| | |
|---|---|
| **Input** | Sent "test message" to #ai-bot channel without setting up the webhook URL first |
| **Expected Output** | Expected the message to fail or show an error — wanted to see what happens when the setup is incomplete |
| **Actual Output** | No response from OpenClaw. Discord showed the message sent, but nothing came back. No error message visible. Had to check the OpenClaw logs to see "webhook URL not configured." |

This earns full credit because:
- ✅ Input is specific (channel, message, intentional setup state)
- ✅ Expected output is specific (failure expected, with a reason)
- ✅ Actual output is honest and detailed (what happened, where to find the error)
