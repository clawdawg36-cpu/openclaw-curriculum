# Teacher Guide: Prompt Engineering Sandbox

**Module:** 5 — The Art of the Prompt  
**Tool:** Prompt Engineering Sandbox (`sandbox/index.html`)  
**Companion Resources:** `cheat-sheet.md`, `lesson-5-2-art-of-the-prompt`, `lesson-5-3-prompt-engineering-olympics`

---

## Overview

The Prompt Engineering Sandbox is a browser-based side-by-side comparison tool where students write a weak prompt on the left and an improved version on the right, then run both to see the difference in AI responses. It's the practical backbone of the Prompt Olympics activity.

This guide covers how to set up the tool, how to run it effectively in class, common mistakes to watch for, and facilitation tips from beta testing.

---

## Before Class: Setup Checklist

### 1. Test the Tool (Day Before)
- Open `sandbox/index.html` in Chrome on a Chromebook
- Enter the classroom API key in ⚙️ Settings
- Run both Example Pair 1 (Book Recommendation) to confirm responses load
- Check that the layout looks clean on tablet size (test in DevTools at 768px)

### 2. API Key
- The tool requires an API key for the AI calls
- **Option A (Recommended):** Set up a shared classroom API key with a spending limit. Paste it into Settings before class — it stays in sessionStorage (not saved after browser close)
- **Option B:** Have students use a free OpenAI or Anthropic key if they have one
- **Option C:** Pre-cache 2–3 example responses in the HTML so the tool works without live API calls (good for unreliable Wi-Fi days)

### 3. Print Cheat Sheets
- Print `cheat-sheet.md` double-sided and fold in half
- One per student, placed on desks before they arrive
- Consider laminating a classroom set for reuse

### 4. Set Up Example Pairs
- The tool ships with 5 pre-loaded pairs in the "Load Example" dropdown
- You can pre-select a pair as the starter (edit `app.js` → `defaultExampleIndex: 0`)

---

## Classroom Flow (45-Minute Session)

### 0:00–0:05 — Hook: "Same Question, Different Answers"

Before opening the tool, ask students (verbally or on whiteboard):

> *"If I asked three different people 'Can you help me?' — would they all give me the same kind of help?"*

Discuss briefly: the question is vague, so responses vary. Then:

> *"AI works the same way. Vague question → vague answer. Specific question → specific answer. Today we're going to prove it."*

### 0:05–0:12 — Live Demo (Teacher-Led)

Project the sandbox on screen. Open it to the blank state.

1. Type into the left (Weak) box: `Tell me about space`
2. Click Run → show the response
3. Type into the right (Improved) box: `You are a science teacher explaining to 7th graders. Describe what happens to the human body during a 6-month trip to the International Space Station. Use 3 bullet points, each under 30 words.`
4. Click Run → show that response

Ask the class: *"What's different? What did I add?"* Take 3–4 hands.

Connect to the cheat sheet: *"Each of those changes has a name. Those are your six techniques."*

### 0:12–0:30 — Pair Activity: Load an Example, Then Improve It

Put students in pairs. Instructions:

1. Open `sandbox/index.html` (link on your LMS, Google Classroom, etc.)
2. Click **Load Example ▾** and pick one of the 5 pairs
3. Read both prompts. Can you figure out what techniques were used?
4. Run both. Compare the responses.
5. Now: **Edit the improved prompt** to make it even better. Run again.
6. Check the Techniques Checklist — which boxes apply?

Circulate the room. Focus on pairs who are confused about why the responses differ.

### 0:30–0:42 — Prompt Olympics Warm-Up Round

Each pair writes their own original prompt pair from scratch using a topic the teacher provides (e.g., "study tips for an upcoming test" or "explain climate change").

- 5 minutes to write both prompts
- 2 minutes to run and compare
- 3 minutes: 3 pairs share their improved prompts + explain the techniques

### 0:42–0:45 — Debrief

Ask:
- *"What technique made the biggest difference today?"*
- *"What's one thing you'd do differently?"*
- *"What makes a prompt bad vs. good?"*

Collect a 2-sentence exit ticket: "My improved prompt used [technique] because..."

---

## Common Student Errors (and What to Do)

### Error 1: Weak prompt is still pretty good
**What it looks like:** Students write "Recommend a book" on the left, then "Recommend a mystery book" on the right. Responses barely differ.

**Why it happens:** Students don't want to look "dumb" by writing something really vague.

**Fix:** Tell them the weak prompt *should* be bad — that's the point. Challenge them: "Can you make the weak one even worse?" Often this unlocks creativity. Let them be silly on the left side.

---

### Error 2: Improved prompt is still vague
**What it looks like:** Students add a few words ("Tell me more about space and planets") and think they've improved it.

**Why it happens:** They don't have vocabulary for *what makes it better*.

**Fix:** Reference the cheat sheet. Ask: "Did you give it a role? Did you add any constraints? Did you tell it how to format the answer?" One technique at a time.

---

### Error 3: Copy-pasting the example pairs without engaging
**What it looks like:** Students load Example 3, click Run Both, read the responses, and start talking about something else.

**Why it happens:** Passive interaction feels like "done."

**Fix:** Tell them the example is just the starting point. "Your job is to make the improved prompt even better. What would you change?" Then require them to edit at least 2 things before running again.

---

### Error 4: "The AI got it wrong" (distrust of output)
**What it looks like:** A student's prompt gets a weird or inaccurate response, and they conclude the tool is broken or the AI is bad.

**Why it happens:** Early frustration. Also, some topics *do* produce unreliable AI output.

**Fix:** Reframe it positively. "Interesting — why did it do that? What in your prompt might have confused it?" This is actually one of the best teaching moments. Use it.

---

### Error 5: Over-engineering the prompt
**What it looks like:** A student writes a 12-line prompt with every technique included. The response is messy because the AI can't balance all the constraints.

**Why it happens:** They think more is always better.

**Fix:** Constraints can conflict. If you say "be funny" and "be formal," the AI will struggle. "Write me a 3-sentence essay in bullet points" is also a contradiction. Teach: quality of constraints > quantity.

---

### Error 6: Can't articulate WHY it worked
**What it looks like:** Students produce a good improved prompt but can't explain what they changed or why.

**Why it happens:** Intuitive improvement without metacognition.

**Fix:** Before they run the improved prompt, ask them to name the technique(s) in the Techniques Checklist. This forces articulation before the reward of seeing the result.

---

## Facilitation Tips

### Make the weak prompt a feature, not a flaw
The left side is intentionally "bad." Frame it as: "Being able to write a bad prompt means you understand what makes a good one." Some students are embarrassed — normalize it.

### Use "What would a stranger understand?" as the test
Tell students to imagine their prompt is being sent to someone they've never met. Would that person know exactly what to do? If not, add more specificity.

### Celebrate iteration, not just first attempts
The Reflect button is under-used. After the first run, push students to make one change, run again, and explain what changed. Improvement over time is the skill.

### Live mistakes are learning gold
If you run a demo and get a bad response, lean into it. "That wasn't great — what technique am I missing?" Models that failure is part of the process.

### The cheat sheet is a crutch (in a good way)
Encourage students to have it out and use it, not put it away. Professionals refer to documentation. That's not cheating — that's smart.

### For advanced students: prompt injection
If students finish early, challenge them: "Can you write a prompt that gets the AI to respond in rhyme? As a news article? In the style of Shakespeare?" This extends the lesson into creative constraint-setting.

### Managing API costs
- Set `max_tokens: 300` in the config (default) — this limits response length and cost
- Consider rate-limiting: add a 5-second cooldown between runs in `app.js`
- If using a free tier: have students write both prompts *before* running either, to reduce iteration waste

---

## Differentiation

### For students who struggle:
- Pre-load Example Pair 1 (simplest) as the starting point
- Give them the left (weak) prompt — they only have to improve it, not write from scratch
- Pair with a stronger student
- Focus on 1 technique: specificity. Just make it more specific.

### For students who excel:
- Challenge them to use all 5 techniques in a single prompt
- Ask them to write their own example pair for a topic from another class (cross-curricular)
- Have them teach a technique to the class (jigsaw)
- Try the "worst possible prompt" challenge: write something intentionally terrible, explain *every* way it fails

---

## Connecting to Prompt Olympics (Lesson 5-3)

This sandbox is the practice round. In the Prompt Olympics, students:
- Get a new topic at the start of each round (3 rounds)
- Have 8 minutes to write and run a high-quality prompt
- Are scored on accuracy, technique use, and ability to explain their choices

Use the sandbox session to:
1. Familiarize students with the interface before competition pressure
2. Establish shared vocabulary (students should be able to say "I used a role and constraints")
3. Practice the explain-your-thinking habit — Prompt Olympics requires verbal explanation

---

## FAQ

**Q: What if the internet is down?**  
Pre-save 3–4 response pairs as HTML in the tool for "offline mode." Alternatively, run the comparison as a class discussion with the teacher running the live demo.

**Q: Can students save their work?**  
The Export button downloads a `.txt` file. For formal assessment, have students copy their best prompt pair and paste it into a Google Doc submission.

**Q: What if a student inputs inappropriate content?**  
The tool sends directly to the API, which has its own content filtering. For extra safety, add a simple keyword blocklist in `app.js`. Monitor on a projector or circulate actively.

**Q: Can I add my own example pairs?**  
Yes — edit the `EXAMPLE_PAIRS` array in `app.js`. Add your own classroom-relevant topics (science vocab, history questions, writing prompts for current units).

**Q: Does this work on iOS/Android?**  
Yes. The layout is responsive and touch-optimized. On iPad, use landscape mode for the best side-by-side view.

---

*Teacher Guide for OpenClaw Curriculum · Module 5: The Art of the Prompt*  
*Questions or feedback? Submit an issue at github.com/clawdawg36-cpu/openclaw-curriculum*
