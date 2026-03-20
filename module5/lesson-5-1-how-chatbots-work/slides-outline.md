# Slides Outline — Lesson 5.1: How Chatbots Work

**Module:** 5 — Give Your Agent a Voice  
**Lesson:** 5.1 — How Chatbots Work  
**Format:** ~12 slides, 50-minute period

---

## Slide 1 — Title Slide

**Headline:** How Chatbots Work — Under the Hood  
**Subhead:** Tokens, Context Windows & Next-Word Prediction  
**Visual:** A speech bubble breaking apart into puzzle pieces (representing tokens)  
**Note:** No reading aloud. Teacher opens with the warm-up activity immediately.

---

## Slide 2 — Warm-Up: Complete the Sentence

**Headline:** Complete the sentence…  
**Content:**
- *"The cat sat on the ___"*
- *"The quantum field fluctuation disrupted the ___"*

**Visual:** Two text boxes with blanks, styled like game show prompts  
**Note:** Ask 5 students. Get answers. Discuss. Don't advance until students have predicted both.

---

## Slide 3 — Your Phone Does This Too

**Headline:** Sound familiar?  
**Visual:** Screenshot of a phone keyboard showing autocomplete suggestions  
**Content:**
- Your phone suggests the next word
- Your AI agent does the same thing — at 100× the scale
- Today: we open the hood

---

## Slide 4 — What Is a Token?

**Headline:** AI doesn't think in words — it thinks in tokens  
**Content:**
- A token = a chunk of text (word, part of a word, punctuation, space)
- Most words = 1 token
- Long or rare words = split into 2–4 tokens
- Numbers and symbols can be multiple tokens

**Visual:** "Hello, how are you?" broken into 6 colored token blocks  
**Note:** Transition to the LIVE DEMO on the tokenizer site — don't advance until you've done the demo.

---

## Slide 5 — Live Demo: The Tokenizer

**Headline:** Let's see tokens in action  
**Content:**
- Go to: platform.openai.com/tokenizer
- Try: a simple sentence
- Try: a long/rare word
- Try: your name
- Try: a word in another language

**Visual:** QR code or URL prominently displayed  
**Note:** Invite 3–4 students to suggest words to tokenize. Make it collaborative.

---

## Slide 6 — Next-Token Prediction

**Headline:** The core mechanism: predict what comes next  
**Visual:** Pipeline diagram:
```
"The" → "cat" → "sat" → [MODEL] → predicts "on" (probability: 72%)
                                              "by" (probability: 11%)
                                              "near" (probability: 8%)
                                              "..." 
```
**Content:**
- The model sees all previous tokens
- It computes the probability of every possible next token
- It picks one (most likely, or random from the top)
- Then adds it to the sequence and repeats

**Note:** Draw this live on the board first, then advance to this slide.

---

## Slide 7 — Class Activity: Human Token Prediction

**Headline:** You be the model  
**Content:**
- Teacher shows a sentence with the last word hidden
- You vote on what comes next
- 4 options — raise hands

**Round 1:** "She opened the door and ___"  
Options: ran / smiled / turned / exploded

**Round 2:** "The algorithm recursively traversed the ___"  
Options: tree / museum / sandwich / sky

**Visual:** Poll-style layout with 4 options  
**Note:** Debrief — why is Round 2 harder? (Less training data for that domain in our heads)

---

## Slide 8 — What Is a Context Window?

**Headline:** The model can only see so much at once  
**Visual:** Sliding window diagram — a long conversation with a highlighted window showing the "visible" portion  
**Content:**
- Context window = how much text the model can consider at once
- Measured in tokens (e.g., 4K, 8K, 32K, 128K tokens)
- Outside the window = forgotten
- This is why chatbots lose track of long conversations

**Analogy on slide:** "Like reading a book through a 5-page window — you can only answer questions about what's in the window."

---

## Slide 9 — Context Window: What This Means for You

**Headline:** Your context window matters  
**Content:**
- ✅ The beginning of your conversation shapes the whole thing
- ✅ More context = better, more targeted responses
- ⚠️ Very long conversations may cause the model to "forget" earlier details
- ⚠️ Your prompt IS the context — make it count

**Note:** Optional live demo — have students test memory limits with their agent.

---

## Slide 10 — Four Implications of Next-Token Prediction

**Headline:** What this means for how chatbots behave  
**Content (reveal one at a time):**

1. 🎭 **Confident but wrong** — probable ≠ true (hallucinations!)
2. ✏️ **Sensitive to phrasing** — different words → different probabilities → different answers
3. 📚 **Context-dependent** — give it more, get more
4. 🧠 **No persistent memory** — every conversation starts fresh

**Visual:** Four icons, each paired with a short example

---

## Slide 11 — Why Prompt Engineering Matters

**Headline:** You control the input. The model controls the output.  
**Content:**
- The model predicts based on what you give it
- Vague prompt → vague (but probable) output
- Specific, rich prompt → better predictions → better answers
- **Next lesson:** we learn to craft prompts like pros

**Visual:** Two side-by-side chat examples — vague prompt vs. specific prompt, different output quality  
**Note:** Don't spend time here — this is the bridge. Just plant the seed.

---

## Slide 12 — Exit Ticket

**Headline:** Before you go…  
**Content:** Pick ONE:
1. Explain how a chatbot generates a response — as if explaining to a 5th grader.
2. Why might a chatbot confidently give you wrong information? Use today's concepts.
3. What's one thing you now understand about your AI agent that you didn't before today?

**Visual:** Timer icon (2 minutes)  
**Note:** Collect in journals. Scan responses as students leave for quick formative data.

---

## Teacher Notes — Slide Deck Setup

- Suggested tool: Google Slides or Keynote
- Embed the tokenizer URL as a clickable link on slide 5
- For slide 6, consider building the diagram with animation (tokens appearing one at a time)
- Slide 7 works best as a quick whole-class game — keep energy up
- Slide 10 should be a "reveal" — cover items and click through one at a time

---

*Slides for Lesson 5.1 | OpenClaw AI Curriculum | Module 5: Give Your Agent a Voice*
