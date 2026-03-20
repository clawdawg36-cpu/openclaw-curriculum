# Teacher Guide: M3 Lab — Build Your First OpenClaw Skill

**Module:** 3 — Extending Your Agent  
**Lab:** Build Your First OpenClaw Skill  
**Duration:** 60–90 minutes (can split across 2 sessions)  
**Grade Range:** Middle school / early high school (adaptable)

---

## 🎯 Learning Objectives

By the end of this lab, students will be able to:
1. Explain what a "skill" or "tool" is in the context of AI agents
2. Describe how AI decides when to use a tool (tool-use / function calling)
3. Articulate the difference between AI's built-in knowledge and real-time tool access
4. Create a basic SKILL.md file that gives their agent new capabilities
5. Demo their skill to peers in a structured 2-minute presentation

---

## 📋 Materials & Prerequisites

**Students need:**
- OpenClaw installed and configured with a personal agent
- A text editor (VS Code, Notepad, TextEdit — whatever works)
- Access to the lab guide, worksheet, and showcase guide

**Teacher needs:**
- This guide
- Projector/screen to demo the concept of tool use
- Optional: printed copies of the Skill Design Worksheet

**Prerequisite skills:**
- Students should have completed M1 (intro to AI agents) and M2 (customizing their agent)
- Basic familiarity with Markdown formatting is helpful but not required

---

## 🗂️ Session Structure

### Recommended Split (2 sessions)

**Session 1 (~45 min):** Concepts + Planning
- Intro lesson: What is a skill? (15 min)
- Students fill out Skill Design Worksheet (20 min)
- Share-out / check plans (10 min)

**Session 2 (~45 min):** Build + Showcase
- Students build their SKILL.md (25 min)
- Test and refine (10 min)
- 2-minute showcases (10–15 min, can continue next session)

### Single Session (90 min)
- Intro lesson (15 min)
- Worksheet (15 min)
- Build (30 min)
- Test + refine (15 min)
- Showcases (15 min)

---

## 📚 Skill Options: Setup Notes

### Option 1: 🌤️ Weather Skill

**What's actually happening:** The agent reads the SKILL.md instructions and fetches data from `wttr.in`, a free weather API that requires no API key.

**Setup steps:**
1. Verify internet access — students need to reach `wttr.in`
2. No API keys or accounts needed
3. Test URL: `https://wttr.in/London?format=j1` (should return JSON)

**Common issues:**
- If wttr.in is blocked by school network, have students use `https://wttr.in/London?format=3` (returns plain text summary instead)
- Agent may paraphrase instead of fetching live — remind students the SKILL.md tells it to *fetch*, not guess

**Scaffold for beginners:** Have the weather URL format pre-written on the board

**Extend for advanced:** Ask students to add a "clothing recommendation" feature — if under 15°C, suggest a jacket

---

### Option 2: 😂 Joke Generator Skill

**What's actually happening:** The agent reads joke format rules from SKILL.md and generates original jokes using its language model.

**Setup steps:**
- No internet or tools needed beyond the agent itself
- This skill is entirely about *how* to prompt the agent to be funny in specific styles

**Common issues:**
- Students may feel the jokes aren't "real" because the agent writes them. Frame it: the agent is using *their* rules to create something new — they're the comedian's writer!
- Some students will want to write their own jokes into the skill. That's great — encourage it as a knowledge base variant

**Scaffold for beginners:** Provide a starter SKILL.md with 2 joke formats; students add a 3rd

**Extend for advanced:** Students create a "roast generator" for fictional characters (school-appropriate topics only), or a bilingual joke skill that outputs jokes in two languages

---

### Option 3: 📚 Vocabulary Quiz Skill

**What's actually happening:** The agent reads the student's word list from `my-words.md` and uses quiz format rules from SKILL.md to generate questions.

**Setup steps:**
1. Students need to have vocabulary words ready before building
2. Coordinate with English or other subject teachers — this can use *real* class vocabulary
3. The word list is a plain Markdown file the student writes themselves

**Common issues:**
- Students with few words (under 5) will have a repetitive quiz — encourage at least 10 words
- Some students struggle to write their own definitions — allow dictionary lookups
- The agent may not always follow the format perfectly — that's a teaching moment about prompt clarity

**Scaffold for beginners:** Provide a starter word list of 5 common words; students add 5 more of their own

**Extend for advanced:** Add a scoring/leaderboard system; connect to actual class test vocabulary; create a "daily word" feature that introduces one new word per session

**Cross-curricular connection:** English teachers can assign this as a vocab study tool. Science/history teachers can have students build subject-specific vocab skills.

---

### Option 4: 🔍 Mini-Encyclopedia Skill

**What's actually happening:** The agent reads the student's knowledge base file and uses it as context when answering questions. This demonstrates retrieval-augmented generation (RAG) in a student-friendly way.

**Setup steps:**
- No internet access needed (agent uses student-written knowledge base)
- Students need time to write their knowledge base — at least 15–20 minutes
- Encourage passion topics for best engagement

**Common issues:**
- Students who write very little in their knowledge base will get generic AI answers. Remind them: more input = smarter agent on this topic
- Students may ask questions their knowledge base can't answer — teach them to check whether the agent admits this or makes something up (a great lesson about AI honesty)
- Topic choice matters: guide students away from topics so huge that their 1-page knowledge base will be useless (e.g., "world history")

**Scaffold for beginners:** Provide a template knowledge base with section headers; students fill it in

**Extend for advanced:** Add a "fact-check mode" where the agent compares its answer to the knowledge base and notes any uncertainty; students research to fill gaps

**Special note:** This option produces the widest variety of outcomes and is great for diverse classrooms. A student who knows everything about Minecraft and a student who knows everything about classical music will both have a personal, meaningful skill.

---

## 🎓 Scaffolding by Experience Level

### Novice (first coding/technical experience)
- Pre-write most of the SKILL.md template; students fill in 2–3 blanks
- Focus on the *concept* (what is a tool?) rather than the implementation details
- Pair with a more experienced student
- Allow them to just customize the topic/words/style rather than writing from scratch
- Success looks like: understanding what a skill does and being able to demo it

### Intermediate
- Students write their SKILL.md with moderate guidance
- Encourage them to add one feature that wasn't in the template
- Can help novice partners
- Success looks like: a working skill with at least one personalized element

### Advanced
- Challenge: write a SKILL.md that handles edge cases (what if the city doesn't exist? what if they ask for 10 jokes at once?)
- Explore: what happens when you deliberately write a *bad* SKILL.md? How does the agent behave?
- Extend: chain two skills together, or build a skill that wasn't on the list
- Success looks like: a working skill with original features + ability to explain *why* the skill is designed the way it is

---

## 💡 Key Concepts to Cover in Intro Lesson

### The Toolbelt Analogy (5 min)

Draw a stick figure person with a toolbelt. Each tool = a skill. When someone asks a question, the person thinks: "Do I know this from memory, or do I need a tool?"

Point out: humans do this too. If someone asks you the time, you look at your watch (tool!) rather than guessing.

### Live Demonstration (5 min)

Show what happens without a skill:
> "What's the weather in Bangkok right now?"

The agent guesses or says it doesn't know. Then show what happens after a weather skill is installed — it fetches real data.

### The Decision Moment (5 min)

Explain: when an AI sees a skill, it reads the description. If the user's request matches, it uses the tool. If not, it answers from memory.

Ask students: "What questions SHOULD trigger the weather skill? What questions shouldn't?"

This naturally leads to the worksheet activity.

---

## 📊 Assessment Suggestions

### Formative (during lab)
- Circulate and check worksheet completion (Parts 1–4 should be done before building)
- Ask each student: "What does your skill do? When should the agent use it?"

### Summative Options
1. **Showcase presentation** — use the 2-minute format as a presentation grade
2. **SKILL.md quality rubric** — does it have a clear name, description, trigger criteria, and example?
3. **Reflection writing** — "What does it mean to extend AI vs. just use it? What did you build today?"

### Rubric (optional)

| Criteria | 3 — Excellent | 2 — Meets | 1 — Developing |
|----------|--------------|-----------|----------------|
| Skill Design | Worksheet complete with specific, thoughtful answers | Worksheet mostly complete | Worksheet partially complete |
| SKILL.md | Clear name, description, triggers, example; personalized | Has all sections; minimal personalization | Missing sections or unclear |
| Working Demo | Skill works reliably, 3+ test questions pass | Skill works for 1–2 questions | Skill attempted but not working |
| Showcase | Clear hook, live demo, explains how it works, strong close | Covers most sections; somewhat clear | Reads notes; demo unclear |
| Concept Understanding | Can explain tool use in own words without prompting | Can explain with prompts | Struggles to explain the concept |

---

## 🧠 Discussion Questions

Use these at the start, middle, or end of the lab:

1. "What's the difference between something the AI *knows* and something it *looks up*?"
2. "If you were going to give your AI agent one new superpower, what would it be? Could you build that as a skill?"
3. "How does the agent decide when to use a tool vs. just answering from memory?"
4. "What could go wrong with a skill? How would you make it more reliable?"
5. "What would happen if two students' agents had the same skill — would they give the same answers?"

---

## 🔧 Troubleshooting

| Problem | Solution |
|---------|----------|
| Agent ignores the skill | Check SKILL.md is in the right folder; check syntax and formatting |
| Agent always uses the skill even when it shouldn't | Tighten the "When to Use It" section to be more specific |
| Weather skill returns raw JSON | The SKILL.md should tell the agent to format the output nicely — update the instructions |
| Student's joke skill makes inappropriate jokes | Add "school-appropriate" or "for a middle school audience" to the SKILL.md |
| Knowledge base skill answers questions that aren't in the base | Add: "If the answer isn't in the knowledge base, say so honestly rather than guessing" |
| Student is overwhelmed by choices | Default them to the Joke Generator — it's the least technical and most immediately fun |

---

## 📎 Appendix: Example SKILL.md (Reference)

Here's a complete, working example you can show students:

```markdown
# My Riddle Skill

## What This Skill Does
Generates riddles on demand — classic riddles, tricky wordplay riddles, or themed riddles about a topic the user picks.

## When to Use It
Use this skill when someone asks for:
- A riddle
- A brain teaser
- Something tricky or puzzling
- "Stump me with something"

## How to Use It
1. Note if the user wants a specific topic (animals, food, school, etc.)
2. If no topic given, pick one at random
3. Generate a riddle with: a question, a pause ("Take a guess!"), then the answer

## Tone
Playful and mysterious. Build a little suspense before revealing the answer.

## Example
User: "Give me a riddle about animals"
→ "I have a tail and I fly, but I'm not a bird. I hang upside-down and love the night. What am I? 🦇 Take a guess! ... It's a bat!"
```

---

*This lab is part of the OpenClaw Curriculum. Students completing this module have crossed from AI users to AI builders — that distinction matters.*
