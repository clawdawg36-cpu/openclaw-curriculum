# 🧪 Bot Test Plan Worksheet

**Module 5 | Channel Connection Lab**
*Name: _________________________________ Period: _______ Date: _________*

---

## Why Write a Test Plan BEFORE You Test?

Professional software engineers don't just poke around randomly hoping things work. They write a **test plan** first — a set of specific, repeatable tests that prove the system does what it's supposed to do.

Writing test cases *before* running them forces you to think clearly about:
- What should happen (expected behavior)
- What could go wrong (edge cases)
- How to tell if something is broken

**Your job:** Write 5 test cases for your channel-connected agent *before* running them. Then run the tests and record what actually happened.

---

## My Agent's Name: _____________________________

## Channel I'm Testing: ☐ Discord &nbsp; ☐ iMessage &nbsp; ☐ Other: _____________

---

## 📝 Test Case 1 — Basic Hello

**Test Type:** ☐ Normal input &nbsp; ☐ Edge case &nbsp; ☐ Stress test

### BEFORE Running (fill this out first!):

**Input I will send:**
```
[Write the exact message you will send]


```

**Expected Output** *(What should the agent say back?)*:

_______________________________________________________________________________

_______________________________________________________________________________

**Why I expect this** *(what does the agent do that should produce this?)*:

_______________________________________________________________________________

### AFTER Running:

**Actual Output** *(Copy/paste or summarize what the agent actually said)*:

_______________________________________________________________________________

_______________________________________________________________________________

**Result:** &nbsp;&nbsp; ☐ PASS &nbsp;&nbsp; ☐ FAIL &nbsp;&nbsp; ☐ PARTIAL

**If FAIL or PARTIAL — what was different from expected?**

_______________________________________________________________________________

---

## 📝 Test Case 2 — Core Functionality

**Test Type:** ☐ Normal input &nbsp; ☐ Edge case &nbsp; ☐ Stress test

*Test something the agent is specifically designed to do — its main purpose.*

### BEFORE Running:

**Input I will send:**
```
[Write the exact message]


```

**Expected Output:**

_______________________________________________________________________________

_______________________________________________________________________________

**Why I expect this:**

_______________________________________________________________________________

### AFTER Running:

**Actual Output:**

_______________________________________________________________________________

_______________________________________________________________________________

**Result:** &nbsp;&nbsp; ☐ PASS &nbsp;&nbsp; ☐ FAIL &nbsp;&nbsp; ☐ PARTIAL

**Notes:**

_______________________________________________________________________________

---

## 📝 Test Case 3 — Edge Case: Unexpected Input

**Test Type:** ☐ Normal input &nbsp; ☐ Edge case &nbsp; ☐ Stress test

*Try something the agent was NOT designed for. What happens when it gets a weird or off-topic message?*

### BEFORE Running:

**Input I will send:**
```
[Something off-topic, confusing, or unexpected]


```

**Expected Output** *(How SHOULD the agent handle this gracefully?)*:

_______________________________________________________________________________

_______________________________________________________________________________

**Why I expect this:**

_______________________________________________________________________________

### AFTER Running:

**Actual Output:**

_______________________________________________________________________________

_______________________________________________________________________________

**Result:** &nbsp;&nbsp; ☐ PASS &nbsp;&nbsp; ☐ FAIL &nbsp;&nbsp; ☐ PARTIAL

**Was the handling graceful? Could it embarrass you if a real user sent this?**

_______________________________________________________________________________

---

## 📝 Test Case 4 — Edge Case: Empty or Minimal Input

**Test Type:** ☐ Normal input &nbsp; ☐ Edge case &nbsp; ☐ Stress test

*What happens if someone sends almost nothing — a single character, or just punctuation?*

### BEFORE Running:

**Input I will send:**
```
[Very short or nearly empty message: e.g., "?", ".", "hi"]


```

**Expected Output:**

_______________________________________________________________________________

_______________________________________________________________________________

**Why I expect this:**

_______________________________________________________________________________

### AFTER Running:

**Actual Output:**

_______________________________________________________________________________

_______________________________________________________________________________

**Result:** &nbsp;&nbsp; ☐ PASS &nbsp;&nbsp; ☐ FAIL &nbsp;&nbsp; ☐ PARTIAL

**Notes:**

_______________________________________________________________________________

---

## 📝 Test Case 5 — Your Own Creative Test

**Test Type:** ☐ Normal input &nbsp; ☐ Edge case &nbsp; ☐ Stress test

*Design your own test. Think: what could a real user send that might cause problems?*

**Why I chose this test** *(what am I trying to find out?)*:

_______________________________________________________________________________

### BEFORE Running:

**Input I will send:**
```
[Your creative test input]


```

**Expected Output:**

_______________________________________________________________________________

_______________________________________________________________________________

**Why I expect this:**

_______________________________________________________________________________

### AFTER Running:

**Actual Output:**

_______________________________________________________________________________

_______________________________________________________________________________

**Result:** &nbsp;&nbsp; ☐ PASS &nbsp;&nbsp; ☐ FAIL &nbsp;&nbsp; ☐ PARTIAL

**Notes:**

_______________________________________________________________________________

---

---

## 📊 Test Results Summary

| Test Case | Description | Result |
|-----------|-------------|--------|
| 1 | Basic Hello | ☐ PASS &nbsp;☐ FAIL &nbsp;☐ PARTIAL |
| 2 | Core Functionality | ☐ PASS &nbsp;☐ FAIL &nbsp;☐ PARTIAL |
| 3 | Edge Case: Unexpected Input | ☐ PASS &nbsp;☐ FAIL &nbsp;☐ PARTIAL |
| 4 | Edge Case: Minimal Input | ☐ PASS &nbsp;☐ FAIL &nbsp;☐ PARTIAL |
| 5 | My Custom Test | ☐ PASS &nbsp;☐ FAIL &nbsp;☐ PARTIAL |

**Total Passed:** ______ / 5

---

## 🔬 Post-Test Analysis

**1. Which test surprised you the most (passed or failed when you didn't expect it)?**

_______________________________________________________________________________

_______________________________________________________________________________

**2. If one test FAILED, what might be causing it? Brainstorm 2 possible reasons:**

1. _______________________________________________________________________________

2. _______________________________________________________________________________

**3. If you were going to add a 6th test case, what would you test and why?**

_______________________________________________________________________________

_______________________________________________________________________________

**4. What's one change you'd make to your agent's prompt or configuration based on these results?**

_______________________________________________________________________________

_______________________________________________________________________________

---

## 🧠 Connection to Real Software Testing

Real developers use similar frameworks:
- **Unit tests** — test one small piece at a time
- **Integration tests** — test how pieces work together
- **Edge case tests** — test the weird stuff users actually do
- **Regression tests** — make sure fixing one thing doesn't break another

*Writing tests before code (or before running) is called **Test-Driven Development (TDD)**. You just did it.*

---

*Module 5 — Channel Connection Lab | openclaw-curriculum*
