# Chapter 4: How Computers Hear — Sound, Speech, Signals

> **Module 2 | Companion Textbook**
> *Grades 6–8 | OpenClaw AI Literacy Curriculum*

---

[ILLUSTRATION: A dynamic visualization of sound. On the left, a person speaks into a microphone. In the center, the audio waveform flows out like a river of colored waves — then transforms, mid-illustration, into a colorful spectrogram (a rainbow heat-map grid). On the right, the spectrogram flows into a neural network diagram, which outputs clean text: "Hello, my name is Jordan." The overall image is vibrant and kinetic, capturing the invisible-made-visible quality of audio AI.]

---

## Opening Story: The Voice That Taught a Machine to Listen

In 2015, a research team at OpenAI set out to do something ambitious: build a speech recognition system that could understand anyone — any accent, any language, any background noise level.

Most speech recognition systems at the time worked fine for American English spoken clearly in a quiet room. They fell apart with accents. They gave up on background noise. They were trained almost exclusively on the voices of white Americans, mostly men, and they worked best for that group and worst for everyone else.

The team had a different idea. Instead of carefully curating a "clean" dataset, they would scrape the internet for audio — podcasts, YouTube videos, interviews, lectures — in every language they could find. 680,000 hours of audio. Messy. Noisy. Accented. Real.

They called the result **Whisper.** When they released it in 2022, it could transcribe speech in 99 languages and handle accents, background noise, and technical vocabulary better than almost anything before it.

It wasn't perfect. But it was a new kind of imperfect — one that failed more equally across different groups, instead of failing mostly for the people who were already marginalized by technology.

By the end of this chapter, you'll understand exactly how Whisper works — and why diverse training data made all the difference.

---

> ### 🤖 Your Agent's Journey — Where We Are
>
> **Your agent's current capabilities:**
> - ✅ Has a name and personality (Module 1)
> - ✅ Vision — can describe images (Chapter 3)
> - 🔓 *Unlocking now:* Hearing — the ability to process and transcribe audio
>
> In Chapter 3, you gave your agent eyes. Now it's time to give it ears.
>
> By the time you finish Lab 2.4, your agent will be able to accept an audio clip and tell you what was said — turning spoken words into text it can respond to.
>
> Module 3 is next: *Knowledge.* Once your agent can perceive the world — both see and hear — you'll teach it specialized things to know.

---

## Section 1: Sound Is a Wave

Sound travels as pressure waves through the air. When you speak, your vocal cords vibrate, sending waves rippling outward. A microphone converts those waves into an electrical signal. A computer samples that signal thousands of times per second and stores it as a sequence of numbers.

That sequence of numbers is called a **waveform** — a record of the sound's amplitude (loudness) over time.

[ILLUSTRATION: A microphone on the left. A sound wave (like a speech waveform) flowing from it to the right, with a section zoomed in to show the digital sample points. Below it, the same segment shown as a list of numbers: [0.03, 0.12, 0.24, 0.31, 0.28 ...]]

A typical audio recording captures **44,100 samples per second** (this is called the "sample rate"). A one-minute recording is over 2.6 million numbers. Like image data, audio is just numbers — lots of them, arriving very fast.

### Why Does This Sound Familiar?

Remember Chapter 3? Images are grids of pixel numbers. Audio is sequences of amplitude numbers. Different format, same fundamental idea: everything digital is numbers, and AI learns to find patterns in those numbers.

This analogy runs deep, as you'll see when we talk about spectrograms — the technique that lets AI "see" sound the same way it "sees" images.

---

> ### 🤔 Think About It
>
> Your phone's microphone samples sound 44,100 times per second — fast enough to capture frequencies up to about 22,000 Hz, which covers the full range of human hearing.
>
> A one-minute voice recording stores over 2.6 million numbers. A two-hour movie's audio? About 316 million numbers — and that's just the audio track, not the video.
>
> When an AI processes that audio, it's finding patterns in those millions of numbers. The fact that it can do this at all — and do it well — is remarkable.

---

## Section 2: From Waveform to Spectrogram

Raw waveforms are hard for AI to learn from directly. They change a lot based on pitch, speed, and emphasis, making it tricky to recognize patterns across different speakers.

A smarter approach: turn the waveform into a **spectrogram** — a visual map of frequency over time.

A spectrogram shows:
- **Time** on the horizontal axis (left to right)
- **Frequency** (pitch) on the vertical axis (low to high)
- **Brightness** or color showing how loud each frequency is at each moment

When you say the word "hello," the spectrogram shows a distinctive fingerprint — a pattern of bright horizontal bands that shifts as your mouth moves. The same word spoken by different people looks similar on a spectrogram, even if the raw waveforms look very different.

[ILLUSTRATION: Two waveforms of different people saying "hello" — they look quite different. Below them, the same two audio clips shown as spectrograms — they show similar patterns, with similar bright band patterns in similar locations. Caption: "Different voices, same word — spectrograms reveal the pattern."]

AI speech recognition models are often trained on spectrograms, treating audio processing almost like image processing: find patterns in a 2D picture.

### Why This Works

The spectrogram trick is clever because it converts a one-dimensional signal (amplitude over time) into a two-dimensional representation (frequency over time) that AI can analyze using the same image recognition techniques you learned in Chapter 3.

In some ways, training an AI to recognize speech from spectrograms is similar to training it to recognize objects from photos. Both are about finding patterns in grids of numbers. The underlying technology — deep neural networks, feature detection, trained on labeled examples — is the same.

[ILLUSTRATION: Side-by-side comparison. Left: the pixel grid of a dog photo with "Image → Feature Detection → 'Golden Retriever'" label. Right: a spectrogram grid with "Spectrogram → Feature Detection → 'Hello'" label. Both with the same layered neural network diagram underneath. Caption: "Different inputs, same approach."]

---

> ### 🌍 AI in the Wild: Real-Time Captioning for Deaf Students
>
> Google's **Live Caption** feature on Android phones uses on-device speech recognition to automatically caption any audio playing on your phone — a video, a podcast, a phone call — in real time.
>
> For Deaf and hard-of-hearing students, this is transformative. Before tools like this, a student watching an un-captioned video in class would simply miss the content.
>
> Today, a speech recognition model running entirely on a phone can caption a video in real time, for free, with no internet connection required.
>
> That's what happens when powerful AI technology becomes genuinely accessible.
>
> [QR CODE: Google Live Caption overview — Android Help Center]

---

## Section 3: Speech Recognition — From Sound to Words

**Speech recognition** is the task of converting spoken audio into text. You've used it whenever you said "Hey Siri," used voice-to-text on your phone, or talked to a customer service bot.

Modern speech recognition works in a few stages:

1. **Audio capture** — The microphone picks up sound and converts it to a waveform.
2. **Preprocessing** — The waveform is converted to a spectrogram (or similar representation).
3. **Neural network** — The AI scans the spectrogram and predicts what words were spoken.
4. **Language model correction** — A second AI reads the predicted words and corrects errors based on what makes sense in context. (If the acoustic model heard "recognize speech" as "wreck a nice beach," the language model fixes it — because "wreck a nice beach" doesn't usually appear in normal sentences.)
5. **Output** — Clean transcribed text.

[ILLUSTRATION: Flow diagram showing: Audio waveform → Spectrogram → Neural Network (audio) → "wreck a nice beach" → Language Model → "recognize speech." Shows the correction step clearly. Maybe add a small lightbulb at the language model step to show the "wait, that doesn't make sense" correction.]

### The Two-Model System

Notice that speech recognition actually uses *two* AI models working together:

- **The acoustic model** listens to the audio and produces its best guess at the words, based purely on sound patterns.
- **The language model** looks at those words and checks whether they make sense together. "Wreck a nice beach" sounds like "recognize speech" but means nothing, so the language model corrects it.

This two-step pipeline — a perceptual model plus a language model — shows up in many AI systems. Perception and language are often handled by separate, specialized models that work together.

---

> ### 🤔 Think About It
>
> The language model correction step is doing something interesting: it's using knowledge about *how language works* (what combinations of words are normal) to fix errors from the acoustic model.
>
> In a way, it's like having a proofreader who can't hear you, but can read and correct what a transcriptionist wrote.
>
> This kind of two-model pipeline — one model for perception, one for language — shows up a lot in AI systems. Your OpenClaw agent uses a similar structure when you give it images or audio to process.

---

## Section 4: OpenAI's Whisper — A New Approach

One of the most impressive speech recognition models available on Hugging Face is **Whisper**, released by OpenAI in 2022.

Whisper was trained on 680,000 hours of audio from the internet — more audio than any previous model. That training data included:

- Podcasts in dozens of languages
- YouTube videos with and without background noise
- Interviews with speakers from many different countries
- Technical content (lectures, coding tutorials, science videos)
- Music, news broadcasts, audio books

The result is a model that can:
- Transcribe speech in **99 languages**
- Handle **accents** better than most previous systems
- Work with **background noise** (traffic, music, crowds)
- Transcribe **technical vocabulary** (medical terms, code, scientific language)
- Even handle **multilingual speech** — sentences that switch between languages

[ILLUSTRATION: A world map with speech bubble icons scattered across it, in many languages (Arabic, Chinese, Spanish, Hindi, English, French, Swahili, etc.). All the bubbles point toward a central icon labeled "Whisper." The diversity of language is the point. Clean, colorful, global feel.]

In Lab 2.4, you'll connect Whisper to your OpenClaw agent, giving it the ability to transcribe audio clips.

### How Whisper Handles the "Hard Cases"

The secret behind Whisper's broad capability is the diversity and scale of its training data. When a model has heard 680,000 hours of audio from all over the world, it builds robust patterns that generalize better.

Compare this to a model trained on 1,000 hours of clean American English: it will be excellent for that specific case and terrible for almost everything else.

Scale and diversity of training data isn't just a technical trick. It's a design choice with ethical implications — a choice to build AI that serves more people more equally.

---

> ### 🤖 Your Agent's Journey — Ears Online
>
> Adding audio recognition to your agent is the second half of Lab 2.4. By the end of the lab, your agent will have both image captioning (from Chapter 3) AND audio transcription.
>
> Think about what that means: your agent could take a video clip, describe what it sees in the frames, AND transcribe what was said.
>
> Combined with the identity from Module 1, your agent is becoming something genuinely powerful. It knows who it is. It can see. It can hear.
>
> What it still can't do: *know specific things* (Module 3), *learn from new examples* (Module 4), or *talk back out loud* (Module 5).

---

## Section 5: Bias in Speech Recognition — Whose Voice Gets Heard?

Just as vision AI can fail unequally (as you saw in Chapter 3 with facial recognition), speech recognition AI fails unequally too.

### The Pattern

Studies have found that speech recognition systems — including commercial systems from Google, Apple, Amazon, and Microsoft — perform worse for:

- Speakers with non-American or non-British accents
- African American Vernacular English (AAVE)
- Older speakers
- Speakers with speech disorders or different voice qualities
- Speakers in noisy environments (disproportionately affects people in urban areas and working-class jobs)

One 2020 study found that a major commercial speech recognition system had an **error rate two times higher** for Black speakers than white speakers, even when controlling for audio quality.

Two times higher. On the same system. For the same task.

### Why This Happens

Like vision AI bias, speech recognition bias traces back to training data.

If you train primarily on audio from one demographic group — and most early speech datasets heavily over-represented white American English speakers — your model learns that group's patterns best. Other accents, dialects, and speaking styles look like "noise" to the model because it's never seen them as signal.

The fix is the same as for vision bias: more diverse training data, more diverse development teams, testing across groups, and user feedback loops.

Whisper's design — deliberately training on diverse, messy, internet-scraped audio — was partly a response to this problem.

### Why This Matters

Speech recognition isn't just a tech product feature. It powers:

- **Voice assistants** (Siri, Alexa, Google Assistant) — If your accent doesn't work well, you can't use features everyone else takes for granted
- **Automatic captioning** — Deaf and hard-of-hearing users depend on these; inaccurate captions for certain speakers means those users are excluded
- **Medical transcription** — Doctors use speech recognition to document patient visits; errors affect patient records
- **911 call centers** — Some police departments use transcription AI on 911 calls; errors can have life-or-death consequences
- **Hiring tools** — AI phone screeners that struggle with certain accents can discriminate in hiring

When AI doesn't hear certain voices well, the people who use those voices have less access to AI's benefits and more exposure to its harms.

---

> ### 🌍 AI in the Wild: Accent Discrimination in Hiring AI
>
> An investigation by the Washington Post found that several companies selling AI phone screening software — systems that score job applicants based on their recorded voice responses — performed significantly worse for applicants with certain accents.
>
> One company's system rated non-native English speakers lower not because of the content of their answers, but because their speech patterns were less familiar to the model.
>
> The applicants never knew why they didn't advance in the hiring process. The AI made no note that it had struggled to understand them.
>
> [QR CODE: Washington Post investigation — AI in hiring and accent bias]

---

## Section 6: Your Agent's New Ears — What You Built in Lab 2.4 (Audio Half)

Let's look at what you built in the audio portion of Lab 2.4.

You connected your OpenClaw agent to a speech recognition model on Hugging Face:

**A speech recognition model** (like `openai/whisper-base`) — Give it an audio clip, it produces a text transcription.

Here's what happened under the hood:

### The Speech Recognition Pipeline

```
[You send an audio file to your agent]
        ↓
[Your agent uploads the audio to Hugging Face's API]
        ↓
[Hugging Face runs Whisper on the audio]
        ↓
[Whisper converts waveform → spectrogram → text]
        ↓
[Hugging Face returns transcribed text]
        ↓
[Your agent reads the transcription and responds to you]
```

### What Your Agent Can Do Now

Before Lab 2.4 (audio):
> "Here's a voice recording."
> Agent: "I can't process audio."

After Lab 2.4 (audio):
> [Audio file: "My name is Jordan and I want to know about climate change."]
> Agent: "I heard: 'My name is Jordan and I want to know about climate change.' Let me help with that..."

---

> ### 🤖 Your Agent's Journey — Capability Unlocked
>
> You've done something real. Your agent now has:
>
> - **Module 1 unlock:** Identity — name, personality, memory
> - **Module 2 unlock:** Perception — vision (Chapter 3) + hearing (Chapter 4)
>
> Your agent is still limited. It can describe what it sees, but it doesn't deeply *understand* context. It can transcribe what it hears, but it doesn't know specialized facts about your domain. It can perceive the world — but it doesn't yet *know* very much about it.
>
> That's Module 3: **Knowledge.** You'll teach your agent things. Domain expertise. Custom facts. Specialized skills. See you there.

---

## Chapter Summary

**Sound is numbers.** Audio is captured as a waveform — a sequence of amplitude values sampled 44,100 times per second. A one-minute recording is over 2.6 million numbers.

**Spectrograms turn sound into images.** Converting a waveform to a spectrogram — a frequency-over-time map — lets AI apply image recognition techniques to audio processing. Same technology, different input.

**Speech recognition is a two-model pipeline.** An acoustic model converts audio to word candidates; a language model corrects those candidates based on what makes linguistic sense in context.

**Whisper changed what was possible.** Trained on 680,000 hours of diverse internet audio, Whisper can transcribe speech in 99 languages with much better handling of accents, noise, and real-world variation than previous systems.

**Bias in audio AI is real.** Speech recognition systems historically perform worse for certain accents, dialects, and speaking styles. This traces directly to non-diverse training data — and has real consequences for who can access AI-powered tools.

**Your agent can now hear.** By connecting to Hugging Face models through an API, your agent can transcribe audio. Combined with the vision capability from Chapter 3, your agent now has full perceptual access to the world.

---

### Vocabulary

| Term | Definition |
|------|-----------|
| **Waveform** | A digital representation of sound as a sequence of amplitude values over time |
| **Sample rate** | How many times per second audio is measured; typical is 44,100 samples/second |
| **Amplitude** | The loudness of a sound at a given moment; what the waveform measures |
| **Spectrogram** | A visual map of a sound's frequencies over time, used as input for speech recognition AI |
| **Frequency** | The pitch of a sound, measured in Hz; lower numbers = lower pitch, higher = higher pitch |
| **Speech recognition** | Converting spoken audio to text |
| **Acoustic model** | The AI component that converts audio patterns (spectrograms) to word candidates |
| **Language model** | The AI component that corrects word candidates based on linguistic context |
| **Whisper** | OpenAI's open-source speech recognition model, trained on 680,000 hours of multilingual audio |
| **Transcription** | The text output produced by a speech recognition system |
| **Accent bias** | The tendency of speech recognition systems to perform worse for speakers whose accents differ from the dominant training data |
| **Multimodal** | Able to process multiple types of input (text, images, audio) — what your agent is becoming |

---

## OpenClaw Challenges

### 🔬 Challenge 1: Whisper Test

Use your OpenClaw agent's audio transcription ability on at least 5 different audio clips. Try to find examples that reveal its strengths and limits.

Test at least:
- Clean speech with no background noise
- Speech with background music or crowd noise
- A non-American or non-British English accent
- Technical vocabulary (a science explanation, a coding tutorial)
- Very fast speech vs. very slow speech

For each clip, rate the transcription accuracy (1–5) and note specific errors you find. What patterns do you see?

---

### 🔬 Challenge 2: The Spectrogram Explorer

Using the free tool at SpeechProcessingLearningLab (linked below), generate spectrograms of different sounds.

Try recording:
- The same word spoken softly vs. loudly
- The same word at a normal pitch vs. high-pitched vs. low
- The same word whispered vs. spoken vs. shouted
- Different vowels ("eeee" vs. "aaaa" vs. "oooo")
- Environmental sounds (clapping, tapping, music)

For each pair, describe what looks *different* in the spectrogram and what looks *similar.*

**Bonus:** Can you "read" a spectrogram? Try to describe what sound a spectrogram shows before playing the audio to confirm.

[QR CODE: Free spectrogram visualizer — SpeechProcessingLearningLab (online tool)]

---

### 🔬 Challenge 3: Hearing Equality Audit

Design and run an experiment to test whether your audio transcription model performs equally across different speakers.

Steps:
1. Find (or create) audio clips of the same content read by 4–5 different people with different accents or speaking styles
2. Run each through your agent's audio transcription
3. Count the number of errors in each transcription
4. Calculate the error rate for each speaker

Write a 1-page report answering:
- Did you find accuracy differences across speakers?
- If yes, what might explain the pattern?
- What would you do differently if you were building a speech recognition system?

---

## Review Questions

**1.** What is a waveform, and how is it related to a spectrogram?

*(Guidance: Waveform is amplitude over time — the raw representation of sound. Spectrogram converts this to frequency over time, creating a 2D visual representation. The spectrogram is derived from the waveform through mathematical analysis, and is often easier for AI to find patterns in.)*

---

**2.** Why do modern speech recognition systems use a two-model pipeline (acoustic model + language model)?

*(Guidance: The acoustic model handles the sound-to-word translation, but can produce nonsensical word sequences. The language model checks whether those words make sense together and corrects errors. Neither model alone is as good as both together — perception and language are complementary skills.)*

---

**3.** What made Whisper's approach to training data different from previous speech recognition systems?

*(Guidance: Whisper trained on 680,000 hours of messy, diverse internet audio — including many languages, accents, and noisy environments. Previous systems trained on much smaller, cleaner, less diverse datasets (often predominantly white American English). The diversity and scale made Whisper more broadly capable.)*

---

**4.** How does Chapter 4's explanation of audio AI connect to what you learned about image AI in Chapter 3?

*(Guidance: Both images and audio are ultimately numbers; both use neural networks trained on labeled examples; both use the spectrogram-as-image trick to apply similar pattern-recognition techniques. Both also have bias problems traceable to unrepresentative training data. The underlying principles are the same.)*

---

**5.** A student says: "Speech recognition AI is accurate enough now. We don't need to worry about bias anymore." Write a 3–4 sentence response explaining why you agree or disagree.

*(Guidance: Disagree. Even state-of-the-art systems like Whisper still show performance differences across accents and dialects. The consequences of errors are unequal — Deaf users relying on captions, job seekers being screened by voice AI, medical transcription affecting patient care. "Good enough on average" is not the same as "fair for everyone.")*

---

## Going Further

**🎙️ Whisper Demo** — Try OpenAI's Whisper model yourself on Hugging Face Spaces. Record or upload audio and see it transcribed in real time.
[QR CODE: Whisper Hugging Face demo — huggingface.co/openai/whisper-base]

**🎥 "Crash Course AI"** — YouTube playlist covering AI fundamentals at a beginner-friendly level, including a great episode on natural language processing and speech.
[QR CODE: Crash Course AI playlist — YouTube]

**📄 "Dissecting Racial Bias in an Algorithm Used to Manage the Health of Populations" (Obermeyer et al., Science 2019)** — If you want a serious look at how data bias affects high-stakes AI systems, this is one of the most important papers of the decade. Worth reading even just the abstract.
[QR CODE: Obermeyer et al. — Science magazine]

**🎙️ Spectrogram Lab** — Visualize your own voice as a spectrogram. Free, browser-based tool.
[QR CODE: SpeechProcessingLearningLab — see-what-you-hear tool]

**📖 "Race After Technology" by Ruha Benjamin** — A sociologist examines how technology — including AI — encodes racial bias. Written for a general audience. Excellent background for the Module 6 ethics content.
[QR CODE: "Race After Technology" — book info]

---

## Module 2 Complete — Your Agent Can Now See 👁️ and Hear 👂

Congratulations. You just unlocked your agent's second and third superpowers.

Let's look at what you built across this module:

### What You Built

**Lab 2.4 — Vision + Hearing Upgrade**

You integrated two Hugging Face models into your OpenClaw agent:

1. **Image captioner** (Chapter 3) — Your agent can now accept an image and describe what it sees in plain English, using the BLIP model trained on millions of image-caption pairs.

2. **Speech recognizer** (Chapter 4) — Your agent can now accept an audio file and transcribe what was said, using OpenAI's Whisper model trained on 680,000 hours of multilingual audio.

You learned how to:
- Call the Hugging Face Inference API from your agent's code
- Handle image and audio as inputs (not just text)
- Interpret model outputs and turn them into natural language responses
- Test your agent for accuracy and bias across different types of input

### Your Agent's Current Status

```
🤖 [YOUR AGENT NAME]
   Module 1: ✅ Identity — name, personality, custom system prompt
   Module 2: ✅ Perception — image captioning (Ch 3) + speech recognition (Ch 4)
   Module 3: [ ] Knowledge — not yet
   Module 4: [ ] Learning — not yet
   Module 5: [ ] Voice — not yet
   Module 6: [ ] Ethics — not yet
   Module 7: [ ] Expo — not yet
```

Update your Agent Design Journal with this progress. Note what your agent can do now that it couldn't do before, and what you noticed when testing its vision and hearing abilities.

### What's Next: Module 3 — Knowledge

In Module 3, you'll teach your agent things.

Right now, your agent can *describe* what it sees — but it doesn't know *why* things matter. It can transcribe what it hears — but it doesn't have expertise in any particular domain.

Module 3 fixes that. You'll write a **custom skill** — a structured body of knowledge your agent can access and reason about. Want your agent to know everything about marine biology? The history of hip-hop? Local hiking trails? You'll define a knowledge base, write retrieval logic, and watch your agent become genuinely *knowledgeable* about something specific.

Your agent will go from *"I can perceive the world"* to *"I know things about the world."*

**See you in Module 3.**

---

*AI Explorers Curriculum — Module 2: How AI Perceives the World*
*Chapter 4: How Computers Hear — Sound, Speech, Signals*
*Version 1.0 — First Draft — March 2026*
*Note: This chapter contains the audio/speech content previously in module2/textbook-chapter-2/chapter-2.md (Sections 5–7). Split per canonical chapter plan.*
