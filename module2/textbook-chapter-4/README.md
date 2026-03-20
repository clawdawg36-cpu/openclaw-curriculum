# Companion Textbook — Chapter 4: How Computers Hear — Sound, Speech, Signals

**Module:** 2 — How AI Perceives the World
**Reading Level:** Grades 6–8 (Flesch-Kincaid 6th–7th grade)
**Length:** ~560 lines (~28KB) — full first draft

## Overview

Chapter 4 of the *AI Explorers* companion textbook. Covers how AI processes audio — from raw waveform data through spectrogram conversion, speech recognition pipelines, and the Whisper model. Includes a significant section on bias in speech recognition and closes with the audio half of the Lab 2.4 pipeline. Also includes the "Module 2 Complete" summary and preview of Module 3.

**Note:** This chapter contains the audio/speech content previously in `module2/textbook-chapter-2/chapter-2.md` (Sections 5–7 of the combined "How AI Sees and Hears" chapter). Split into a dedicated chapter per the canonical chapter numbering plan.

## Chapter Structure

| Section | Content |
|---------|---------|
| Opening Story | "The Voice That Taught a Machine to Listen" — origin story of Whisper |
| Your Agent's Journey | Module 2 arc: hearing unlock (Part 2 of perception) |
| Section 1: Sound Is a Wave | Waveforms, sample rate, audio as numbers, connection to Chapter 3 pixels |
| Section 2: Waveform to Spectrogram | How spectrograms work, visual parallel to image AI, "see what you hear" |
| Section 3: Speech Recognition | Full pipeline (capture → spectrogram → neural net → language model correction → text) |
| Section 4: OpenAI's Whisper | Training on 680,000 hours of diverse audio, 99 languages, design choices |
| Section 5: Bias in Speech Recognition | Accent bias, AAVE error rates, hiring AI discrimination, consequences |
| Section 6: Audio Pipeline | What was built in Lab 2.4 — speech recognition pipeline, before/after |
| Chapter Summary + Vocab | 12-term vocabulary table |
| OpenClaw Challenges | 3 experiments: Whisper Test, Spectrogram Explorer, Hearing Equality Audit |
| Review Questions | 5 questions with answer guidance |
| Going Further | 5 resources with QR code placeholders |
| Module 2 Complete | Build recap, agent status tracker, Module 3 preview |

## New Opening Story

Unlike the original combined chapter, Chapter 4 has a new opening story — "The Voice That Taught a Machine to Listen" — focused on how the Whisper model was developed with diversity as a design goal. This reframes the audio content around the specific ethical dimension of speech recognition bias, which is Chapter 4's major ethical focus (parallel to facial recognition bias in Chapter 3).

## Connection to Chapter 3

Chapter 4 explicitly connects back to Chapter 3's pixel/feature-detection framework. The spectrogram analogy ("turning sound into an image that AI can see") directly mirrors the pixel discussion from Chapter 3. Students who read both chapters will see the underlying unity of AI perception.

## Files

- `chapter-4.md` — Full chapter text (first draft)
- `README.md` — This file

## History

The audio content in this chapter was originally Sections 5–7 of `module2/textbook-chapter-2/chapter-2.md`. Extracted and significantly expanded (new opening story, new spectrogram analogy section, more detailed bias section) into standalone Chapter 4 per cross-curriculum fix task (March 2026). The original combined file is preserved at `module2/textbook-chapter-2/chapter-2.md`.
