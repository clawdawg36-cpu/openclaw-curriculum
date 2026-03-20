# Accessibility Notes — How AI Thinks
**Module 3 | Tutorial Video**

---

## Captions

### Format
- **Standard:** SRT or WebVTT (both should be provided)
- **Font size:** Minimum 18pt display equivalent
- **Line max:** 42 characters per line, 2 lines max on screen at once
- **Timing:** Captions sync to narration, not animation — do not delay captions for visual effects

### Caption File
A separate `captions.srt` file should be generated from the final recorded narration. Draft caption timecodes are aligned to the script in `SCRIPT.md`. The following caption conventions apply:

- Speaker identification not required (single narrator)
- Sound effects captioned: `[upbeat music]`, `[badge chime]`, `[keyboard typing sound]`
- Meaningful silences do not need captions
- All on-screen text that is NOT read aloud must appear as a caption: `[On screen: Feature Vector = [255, 40, 40, 7.5, 182, 0.82]]`

---

## Alt Text (Per Scene)

All visual scenes have alt text specified in `STORYBOARD.md`. These should be used:
1. As `aria-label` / `alt` attributes if the video is embedded in a web player
2. As image descriptions in any still-frame exports used in supporting materials
3. In the course platform's accessible video description field

---

## Color Contrast

| Color Use | Passes WCAG AA? | Notes |
|-----------|----------------|-------|
| White text on dark BG (intro) | ✅ Yes | Contrast ratio ~15:1 |
| Black text on white BG (outro) | ✅ Yes | Contrast ratio ~21:1 |
| Green checkmarks on white | ✅ Yes | Also labeled with ✅ emoji |
| Red X marks on white | ✅ Yes | Also labeled with ❌ emoji |
| Gold badge on white | ⚠️ Check | Verify badge text is dark enough |

**Rule:** Never rely on color alone to convey meaning. All color-coded elements (green/red success/failure) include text labels or icons.

---

## Motion & Animation

- **Reduced motion support:** The video player or course platform should provide a "reduced motion" playback option or static slide alternative
- **Flashing:** No flashing elements faster than 3Hz (safe for photosensitivity)
- **Auto-scroll text:** All scrolling/streaming text is slow enough to read (min 300ms per line)
- **Transition speed:** No cuts faster than 0.3s; all major transitions use dissolve or slide (not hard cuts with strobe potential)

---

## Audio

- **Background music:** Should be at least 20dB below narration level (mix note for post-production)
- **Sound effects:** Optional enhancement only — no critical information conveyed via audio cue alone
- **Narration pace:** Target 140–150 wpm; allow natural pauses at section breaks
- **Audio description track:** Not required for this video (all visual content is described in narration or on-screen text), but if added later, use the storyboard alt text as source material

---

## Keyboard & Screen Reader (Course Platform)

- Video player must be keyboard-navigable: play/pause (Space), seek (←/→), captions toggle (C), fullscreen (F)
- Chapter markers should correspond to the 6 sections in `SCRIPT.md`
- Transcript link should appear below the embedded video
- Badge teaser at end: ensure badge image has `alt="Logic Builder badge — a golden shield with a brain and lightbulb icon"`

---

## Chapter Markers (for Course Platform)

| Time | Chapter Title |
|------|--------------|
| 0:00 | Introduction |
| 0:30 | Features & Representation |
| 2:00 | Decision Trees |
| 3:00 | Pattern Recognition |
| 4:00 | Where AI Succeeds & Fails |
| 5:00 | Chain-of-Thought Prompting |
| 6:00 | Lab Preview |
| 6:30 | Recap & Badge |

---

## Transcript

A full text transcript (`TRANSCRIPT.txt`) should be generated from the final recorded narration. It must include:
- All spoken narration
- All on-screen text (prefixed with `[ON SCREEN:]`)
- All relevant audio cues (prefixed with `[SOUND:]`)

The draft transcript is the narration text in `SCRIPT.md` — production should finalize it against the actual recording.

---

*Accessibility review checklist should be completed before video is published to the course platform.*
