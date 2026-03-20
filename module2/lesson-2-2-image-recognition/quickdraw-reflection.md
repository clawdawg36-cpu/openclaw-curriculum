# QuickDraw Reflection

**Lesson:** 2.2 — Image Recognition Deep Dive  
**Name:** ___________________________  **Date:** _______________  **Period:** _______

---

## About Google QuickDraw

[Google QuickDraw](https://quickdraw.withgoogle.com/) is an online game where you draw something and a neural network tries to guess what it is — in real time, in under 20 seconds.

It's been played over 1 billion times. Every drawing you make **becomes training data** that helps the model get smarter.

The dataset (now publicly available) contains **50 million drawings** across **345 categories**, drawn by people all over the world.

---

## Part 1: Your Experience

*Answer these based on watching or playing QuickDraw during class.*

**1. What did you (or the volunteer) draw? Did QuickDraw guess correctly?**

_______________________________________________________________________________

_______________________________________________________________________________

**2. How quickly did the AI guess? Did it seem confident right away, or did it change its mind?**

_______________________________________________________________________________

_______________________________________________________________________________

**3. Did the AI make any wrong guesses on the way to the right answer? What were they?**

_______________________________________________________________________________

_______________________________________________________________________________

---

## Part 2: Now That You Know How It Works

*Apply what you learned about CNNs and training data.*

**4. QuickDraw was trained on millions of drawings. Based on what you learned today about feature detectors, what do you think the model is looking for in your drawing?**

*(Hint: Think about edges, shapes, and parts — not the final object)*

_______________________________________________________________________________

_______________________________________________________________________________

_______________________________________________________________________________

**5. QuickDraw has a "banana" category. If 10 million people all drew bananas as yellow crescents, but some people from Southeast Asia draw bananas as short and green — what might happen when they play?**

_______________________________________________________________________________

_______________________________________________________________________________

_______________________________________________________________________________

**6. When you drew, you were (unknowingly) creating training data for Google's model. Does that feel okay to you? Why or why not?**

_______________________________________________________________________________

_______________________________________________________________________________

_______________________________________________________________________________

---

## Part 3: Connecting to Your Agent

**7. Your OpenClaw agent can receive images. Without a vision model, what can it do with an image?**

- [ ] Understand what's in it immediately
- [ ] See only the filename or metadata
- [ ] Nothing — it just sees raw bytes it can't interpret
- [ ] Automatically draw conclusions about the image

**8. Based on today's lesson, if you wanted your agent to recognize images, what would be the fastest way to add that ability?**

*(Circle one and explain)*

**A)** Train a new neural network from scratch on thousands of my own labeled images  
**B)** Use a pre-trained vision model from Hugging Face that already knows how to see

**Why?** ______________________________________________________________________

_______________________________________________________________________________

**9. In one sentence, explain to a friend why your AI agent needs a vision model to understand photos:**

_______________________________________________________________________________

_______________________________________________________________________________

---

## Part 4: Going Further (Optional / Bonus)

**10. QuickDraw lets you explore its dataset at [quickdraw.withgoogle.com/data](https://quickdraw.withgoogle.com/data). If you had access to this data, describe one interesting experiment you could run or one question you could answer.**

_______________________________________________________________________________

_______________________________________________________________________________

_______________________________________________________________________________

**11. Google's model gets better every time someone plays. Is this a good thing, a concerning thing, or both? Explain.**

_______________________________________________________________________________

_______________________________________________________________________________

_______________________________________________________________________________

---

## 📊 Self-Assessment

Rate your understanding after today's lesson:

| Concept | 😕 Not yet | 🤔 Kind of | 😊 Got it |
|---------|-----------|-----------|----------|
| How CNNs detect features (edges → shapes → objects) | | | |
| Why labeled training data matters | | | |
| What data annotation is and who does it | | | |
| What a pre-trained model is | | | |
| How vision models connect to AI agents | | | |

**One thing I want to learn more about:**

_______________________________________________________________________________
