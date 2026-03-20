# Module 3 Vocabulary List
## How AI Thinks — Key Terms

> **For students:** These are the 12 most important words from Module 3. You'll see them on exit tickets, in the Logic Lab, and in your portfolio reflection. Get comfortable using them — especially in your own words.

---

### 1. Feature
**What it means:** A measurable property of something — a single number that describes one aspect of an object or piece of data.

**Example:** The color of a fruit can be a feature. So can its weight, its size, or whether it has seeds. When you write down [1, 4.2, 0] to describe a fruit, each number in that list is a feature.

**Why it matters:** AI can't look at a cat and "see" it the way you do. It sees a list of features — numbers that stand in for things like fur length, ear shape, and weight. Features are how the real world becomes something a computer can work with.

---

### 2. Representation
**What it means:** The way information is converted into a form a computer can process — usually numbers or patterns.

**Example:** The word "cat" might be represented as a list of 300 numbers in a language model. An image might be represented as millions of pixel values.

**Why it matters:** Everything an AI "knows" is a representation of the real world. The better the representation, the better the AI can reason about it. A bad representation leads to bad decisions.

---

### 3. Decision Tree
**What it means:** A flowchart-like model that asks a series of yes/no questions to arrive at a decision or classification.

**Example:** "Does it have fur? → Yes → Does it bark? → Yes → Probably a dog."

**Why it matters:** Decision trees are one of the clearest examples of how AI can reason step-by-step. They're also easy to build by hand — which is why we used one for the Pet Advisor challenge.

---

### 4. Node
**What it means:** A single decision point in a decision tree — the place where a question is asked and the path splits.

**Example:** In a Pet Advisor tree, "Does the person have a yard?" is a node. The answer (Yes/No) determines which branch you follow.

**Why it matters:** The quality of a decision tree depends on asking the *right* questions at each node. Nodes are the building blocks of AI decision-making.

---

### 5. Leaf
**What it means:** The final outcome at the end of a branch in a decision tree — the answer you arrive at after following all the decision nodes.

**Example:** After answering all the questions in your Pet Advisor tree, you might reach the leaf "Recommend: goldfish." That's your final answer.

**Why it matters:** Leaves are what the AI actually *outputs*. Every path through a decision tree must end at a leaf, and good trees cover enough leaves to handle all realistic inputs.

---

### 6. Classification
**What it means:** Sorting data into categories — assigning a label or group to something based on its features.

**Example:** An AI looks at a photo and classifies it as "cat" or "dog." Your Pet Advisor tree classifies users as "fish owner" or "dog owner" or "reptile owner."

**Why it matters:** Classification is one of the most common things AI does — spam filters, image recognition, and recommendation engines all rely on it.

---

### 7. Pattern
**What it means:** A repeated structure in data that an AI can learn to recognize and use to make predictions.

**Example:** The words "I feel" often appear before emotional words. An AI trained on text learns this pattern, so when it sees "I feel," it predicts that a feeling word is likely next.

**Why it matters:** AI doesn't actually understand things the way you do. It finds patterns in huge amounts of data and uses those patterns to generate responses. This is powerful — and also a source of errors when patterns don't apply.

---

### 8. Chain-of-Thought
**What it means:** A prompting technique where you ask an AI to show its reasoning step by step, rather than just jumping to an answer.

**Example prompt:** "Think step by step and show your work. If Maya has 3 boxes with 8 crayons each and gives away 7, how many does she have left?"

**Why it matters:** Chain-of-thought often improves AI accuracy on complex problems. It also makes errors visible — instead of just getting a wrong answer, you can see *where* the reasoning went wrong.

---

### 9. Hallucination
**What it means:** When an AI generates a confident, fluent, specific-sounding response that is factually incorrect — making something up rather than admitting it doesn't know.

**Example:** You ask an AI about a fictional historical event, and it gives you a detailed account with dates and names — all invented.

**Why it matters:** Hallucination is one of the most dangerous failure modes in AI. Because the text sounds credible, people often believe it without checking. This is why you should always verify important information from an AI against a reliable source.

---

### 10. Reasoning
**What it means:** The process of using logic, evidence, and rules to reach a conclusion — working through a problem step by step.

**Example:** "It's cloudy outside. The forecast says 80% chance of rain. I have a 30-minute walk. Therefore, I should bring an umbrella." That's reasoning.

**Why it matters:** One of the biggest debates in AI is whether large language models actually *reason* or just produce text that *looks* like reasoning. In the Logic Lab, you tested this yourself.

---

### 11. Inference
**What it means:** Drawing a conclusion from available information — making a reasonable guess based on evidence, even when you don't have all the facts.

**Example:** An AI sees a photo of a yellow object with a curved shape. It *infers* that it's probably a banana, even without being told directly.

**Why it matters:** Inference is how AI fills in gaps. It's useful when data is incomplete, but it's also where errors can sneak in — the AI might infer incorrectly if the evidence is ambiguous.

---

### 12. Knowledge Base
**What it means:** A structured collection of facts, rules, or information that an AI can look up or reference when answering questions.

**Example:** OpenClaw's built-in knowledge base includes information about coding, general topics, and facts from its training data. When you add a custom skill, you're extending that knowledge base.

**Why it matters:** AI only knows what it was trained on or what's in its knowledge base. If the answer to your question isn't there, the AI might hallucinate instead of saying "I don't know."

---

## Quick Review Flashcard Format

| Term | One-sentence definition |
|---|---|
| Feature | A measurable property turned into a number for AI |
| Representation | How real-world info gets converted into computer-readable form |
| Decision tree | A series of yes/no questions that lead to an outcome |
| Node | A single question/decision point in a tree |
| Leaf | The final outcome at the end of a tree branch |
| Classification | Sorting data into labeled categories |
| Pattern | A repeated structure in data that AI learns to recognize |
| Chain-of-thought | Asking AI to show its step-by-step reasoning |
| Hallucination | When AI confidently makes something up |
| Reasoning | Using logic and evidence to reach a conclusion |
| Inference | Drawing conclusions from incomplete information |
| Knowledge base | The collection of facts an AI can draw from |
