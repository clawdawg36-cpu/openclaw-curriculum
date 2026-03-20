# Module 5 Quiz: Prompt Engineering Concepts

**Topic:** How to Communicate with AI — Prompting, Tokens, and Responsible Use  
**Questions:** 5  
**Estimated Time:** 8–10 minutes  
**Format:** Auto-graded (multiple choice, true/false, scenario)

---

## Question 1 — Multiple Choice

**Which of the following best describes what a "token" is in the context of a large language model (LLM)?**

- A) A password or access key used to authenticate with an AI service
- B) A chunk of text — such as a word, part of a word, or punctuation mark — that the model processes as a single unit
- C) A single character (letter or number) that the model reads one at a time
- D) A complete sentence that the model analyzes all at once

**✅ Correct Answer: B) A chunk of text — such as a word, part of a word, or punctuation mark — that the model processes as a single unit**

**Explanation:**  
Tokens are the basic units an LLM uses to read and generate text. A token is often a whole word, but common prefixes, suffixes, or punctuation marks can also be their own tokens, and rare or long words may be split into multiple tokens. Tokens are not individual characters, nor complete sentences — they sit somewhere in between. Understanding tokens helps explain why LLMs have input limits (context windows are measured in tokens) and why unusual spellings or very long words can sometimes trip up a model.

---

## Question 2 — Multiple Choice

**A student writes this prompt: "Tell me about climate change." A teacher suggests adding: "You are an environmental science educator explaining to 9th-grade students." Why does adding this role context improve the response?**

- A) It gives the model access to more recent data about climate change
- B) It helps the model select an appropriate vocabulary, depth, and tone for the intended audience
- C) It prevents the model from making up facts
- D) It increases the model's token limit so it can write a longer answer

**✅ Correct Answer: B) It helps the model select an appropriate vocabulary, depth, and tone for the intended audience**

**Explanation:**  
LLMs are trained on enormous amounts of text written for many different audiences — research papers, textbooks, news articles, casual blogs, and more. Without context, the model has to guess what kind of response is appropriate. By specifying a role (e.g., "environmental science educator") and an audience (e.g., "9th-grade students"), you give the model a clear frame of reference. It can then calibrate: avoid overly technical jargon, use relatable examples, and pitch the explanation at the right level. Role context doesn't change what the model knows — it shapes *how* it communicates.

---

## Question 3 — True/False

**True or False: When an AI "hallucinates," it means the model is deliberately making up false information to mislead the user.**

- A) True
- B) False

**✅ Correct Answer: B) False**

**Explanation:**  
Hallucination is not intentional deception — it's a limitation of how language models work. LLMs generate text by predicting what word or token is most likely to come next, based on patterns learned during training. They don't "look things up" in real time or have a fact-checking mechanism. When a model produces plausible-sounding but incorrect information (like a made-up citation, a wrong date, or a fictional person), it's because the pattern-matching process produced a confident-sounding output that doesn't reflect reality. The model has no awareness that it's wrong. This is why verifying AI-generated facts against reliable sources is always important.

---

## Question 4 — Multiple Choice

**Read these two prompts. Which one is more likely to produce a useful, focused response from an AI?**

**Prompt A:** *"Write something about healthy eating."*

**Prompt B:** *"Write a 200-word explanation for middle school students about why eating vegetables and whole grains gives you more lasting energy than eating candy or chips. Use simple language and one relatable example."*

- A) Prompt A, because shorter prompts give the AI more creative freedom to produce better results
- B) Prompt B, because it specifies the audience, length, topic focus, and format, reducing ambiguity
- C) Both prompts will produce equally good results — the AI always figures out what you mean
- D) Prompt A, because adding too many details confuses the AI and produces worse output

**✅ Correct Answer: B) Prompt B, because it specifies the audience, length, topic focus, and format, reducing ambiguity**

**Explanation:**  
Specificity is one of the most powerful tools in prompt engineering. Prompt A is so open-ended that the model might produce anything from a list of superfoods to a research-style essay — probably not what you wanted. Prompt B defines four key constraints: *who* it's for (middle schoolers), *how long* it should be (200 words), *what it should cover* (vegetables, whole grains, energy vs. junk food), and *how* it should be written (simple language, one example). Each constraint narrows the space of possible responses toward what's actually useful. More detail is almost always better — as long as the details are accurate and relevant.

---

## Question 5 — Scenario

**Jaylen has a history essay due tomorrow on the causes of World War I. He's short on time and considers two options:**

**Option A:** Use an AI chatbot to generate the entire essay, then submit it with his name on it.

**Option B:** Use an AI chatbot to create a bullet-point outline of the main causes, review it for accuracy using his textbook, then write the essay himself using the outline as a guide.

**Which option represents an appropriate and academically honest use of AI?**

- A) Option A, because using AI for schoolwork is always acceptable if you don't copy from another student
- B) Option B, because he is using AI as a thinking and planning tool while doing the writing and verification work himself
- C) Both options are equally acceptable — the teacher just wants a good essay
- D) Neither option is acceptable — students should never use AI for any part of a school assignment

**✅ Correct Answer: B) Option B, because he is using AI as a thinking and planning tool while doing the writing and verification work himself**

**Explanation:**  
Academic integrity isn't just about not copying another student's work — it's about ensuring that the work you submit genuinely reflects your own learning and effort. Option A bypasses the learning process entirely: Jaylen wouldn't develop his own understanding, practice writing, or build the skills the assignment is designed to teach. Most schools and teachers consider submitting AI-generated work as your own to be academic dishonesty. Option B is different: using AI to brainstorm or organize ideas — then verifying, refining, and writing independently — is more like using a dictionary or study guide. It supports learning rather than replacing it. When in doubt, ask your teacher what's allowed. Policies vary, and transparency is always the right move.

---

*End of Quiz*
