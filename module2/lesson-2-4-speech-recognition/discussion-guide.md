# Discussion Guide — Speech Recognition Challenges & Bias

**Lesson:** 2.4 — How AI Hears: Speech Recognition  
**Segment:** "Who Does AI Hear?" (~7 minutes)  
**Facilitator:** Teacher (or student-led with facilitation support)

---

## 🎯 Purpose

This discussion does two things:
1. Deepens understanding of *why* speech recognition is a hard, context-dependent problem
2. Introduces the concept of systemic bias in AI systems — previewing the ethics work in Module 6

The goal is not to resolve these questions, but to **name them clearly** and **make them feel real** before the technical deep-dive in Lab 2.4.

---

## 🔁 Transition Into Discussion

After the Teachable Machine activity debrief, use this bridge:

> *"You just discovered that your model might work better for your clap than for mine. Now scale that up: what happens when you train a speech recognition system on millions of voice samples — but most of them are from one type of person?"*

Wait for responses. Then:

> *"Let's dig into that. I'm going to ask you some questions — there are no perfect answers here. These are questions researchers and engineers are still working on."*

---

## 💬 Discussion Prompts

### Round 1: The Technical Challenges

These prompts focus on environmental and acoustic problems — relatively "neutral" terrain before moving to bias.

**Prompt 1:**
> *"When we tested speech-to-text earlier, what made it struggle?"*

*Listen for:* background noise, fast speech, unfamiliar words, accents, quiet voices, overlapping speech.

**Prompt 2:**
> *"If you were designing a speech recognition system for a hospital, what challenges would you expect?"*

*Listen for:* medical terminology, noise from equipment, patients with different voice characteristics (age, illness, language), emergency situations where speed matters.

**Prompt 3:**
> *"Why might a word like 'Nguyen' or 'Czajkowski' be harder for a speech recognition system than 'Smith' or 'Jones'?"*

*Listen for:* uncommon names may appear rarely in training data, phoneme patterns that differ from dominant training language, system optimized for common names.

---

### Round 2: The Data & Design Problem

These prompts shift from "technical" to "who made this, and who for?"

**Prompt 4:**
> *"If you were building a speech recognition dataset from scratch, where would you get audio recordings? Who would you ask to contribute? Who might not be included?"*

*Listen for:* internet audio skews toward English, educated speakers, certain demographics. People without reliable internet access, people who distrust data collection, speakers of minority languages — all underrepresented.

**Prompt 5:**
> *"In 2020, a Stanford and University of Washington study found that speech recognition systems from Apple, Amazon, Google, IBM, and Microsoft made errors at almost twice the rate for Black speakers compared to white speakers. Why do you think that happened? What would have had to be different for that not to be the case?"*

> **Teacher note:** This is a real study — "Racial Disparities in Automated Speech Recognition" (Koenecke et al., 2020). It's okay to share the citation. This isn't a hypothetical.

*Listen for:* training data demographics, who tests the system before release, whose feedback shapes updates, economic incentives to serve majority markets.

**Prompt 6:**
> *"There are over 7,000 languages spoken in the world. Models like OpenAI's Whisper support about 100. What happens to speakers of the other 6,900?"*

*Listen for:* exclusion from voice-based technology, reliance on translation layers, inequitable access to AI tools, languages at risk of being further marginalized.

---

### Round 3: Stakes & Responsibility

These prompts push toward real-world impact and student agency.

**Prompt 7:**
> *"Can you think of a situation where a speech recognition error isn't just annoying — it could actually matter? Where the stakes are high?"*

*Possible examples students might surface:*
- Medical transcription (wrong diagnosis)
- Legal proceedings (court transcription)
- Voice-controlled accessibility tools for people with disabilities
- Emergency services (911 calls)
- Voice authentication / security systems

**Prompt 8:**
> *"Whose responsibility is it to fix this? The engineers who built the model? The companies that sell it? The governments that regulate it? The users? All of them?"*

*This doesn't need a resolution.* The goal is to surface the distributed nature of responsibility in AI systems. Let students hold the tension.

**Prompt 9 (optional — if time allows):**
> *"When you add audio capabilities to your agent in Lab 2.4 — how will you think about this? Is there anything you'll do differently knowing what you know now?"*

*This connects ethics back to the project work. Powerful if time allows.*

---

## 🗺️ Facilitation Tips

**If the conversation gets heated:**  
That's okay — it means students are engaging. Acknowledge the emotion, then redirect to specifics: *"I hear real frustration there. Let's make that concrete — what would you want changed, and by whom?"*

**If the room is quiet:**  
Try the "1-2 share" move: give students 60 seconds to write an answer, then pair-share before whole group. Many students have personal experiences with speech recognition failure but haven't been invited to name it.

**If a student shares personal experience:**  
Center it. *"That's exactly the kind of real-world evidence that researchers point to. Can you say more about what happened?"* Don't rush past it.

**Watch for "but it's just technology" deflection:**  
If students say *"it's not racist, it's just math"* — that's a common and worth-addressing response. Reply: *"The math was designed by humans, trained on data collected by humans, deployed by companies run by humans. Where in that chain do you think the choices got made?"*

---

## 🏁 Closing the Discussion

**Sticky note capture:**
Give each student a sticky note and ask them to write:

> *"Who was this system built for?"*

Tell them to keep it. You'll return to this question in Module 6.

**Teacher bridge:**
> *"We're going to come back to this in Module 6 when we study AI fairness in depth. For now, I want you to sit with the tension between 'this technology is incredible' and 'this technology doesn't work equally for everyone.' Both things are true. Your job as future AI builders — and as people — is to hold both."*

---

## 📚 Background Resources for Teachers

- **Koenecke et al. (2020):** "Racial disparities in automated speech recognition" — PNAS. https://www.pnas.org/doi/10.1073/pnas.1915768117
- **Washington Post coverage:** "Siri and Alexa are better at understanding white speakers" (2020)
- **Mozilla Common Voice:** An open-source multilingual dataset project explicitly addressing the diversity gap in speech data. https://commonvoice.mozilla.org
- **AI Now Institute reports:** Annual reports on AI accountability and bias
- **Algorithmic Justice League:** Joy Buolamwini's work on bias in AI systems — accessible for student audiences

---

*Part of Lesson 2.4 — How AI Hears: Speech Recognition | OpenClaw AI Curriculum*
