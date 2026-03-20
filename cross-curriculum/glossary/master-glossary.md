# Master Glossary — OpenClaw AI Curriculum
## All Modules | Alphabetical Reference

> **For students and teachers:** This glossary collects every vocabulary term from Modules 1–6. (Module 7 introduces no new terms — it consolidates everything.) Use it to look up a word, find where it first appeared, and see how terms connect across the curriculum.

---

## A

### Accountability
**Definition:** The principle that individuals, organizations, and systems should be answerable for the outcomes they produce. In AI, accountability asks: who is responsible when an AI system causes harm? Requires clear lines of responsibility — from data collectors to model designers to deployers to regulators.
**First introduced:** Module 6 (AI Ethics, Bias & Fairness)
**Related terms:** Transparency, Fairness, Stakeholder, Responsible Disclosure

---

### Accuracy
**Definition:** The percentage of predictions a model gets right. Accuracy = correct predictions ÷ total predictions. High accuracy on training data alone is misleading — test accuracy on new, unseen data is what really matters.
**First introduced:** Module 2 (How Computers See)
**Related terms:** Overfitting, Classifier, Training Data, Feature
**Consistency note:** Used consistently across M2 and M4. M4 adds the distinction between *training accuracy* and *test/validation accuracy*.

---

### Algorithm
**Definition:** A step-by-step set of instructions that a computer follows to solve a problem or complete a task — like a recipe that, when followed in order, produces a specific result.
**First introduced:** Module 1 (Introduction to AI)
**Related terms:** Machine Learning, Model, Automation
**Example:** Google Maps uses an algorithm to find the fastest route.

---

### Algorithmic Bias
**Definition:** A systematic error in an AI system's outputs that creates unfair outcomes for certain groups of people. Bias can be introduced at any stage — from problem framing and data collection to model design and deployment.
**First introduced:** Module 6 (AI Ethics, Bias & Fairness)
**Related terms:** Bias (in AI), Proxy Variable, Feedback Loop, Fairness, Training Data
**Example:** A hiring algorithm that scores résumés from women lower than from men because it was trained on historical data where men were more often hired.

---

### Alignment
**Definition:** The challenge of ensuring that an AI system's goals, behaviors, and outputs match the intentions and values of its designers and society. A misaligned AI might technically do what it was optimized to do while still causing harm.
**First introduced:** Module 6 (AI Ethics, Bias & Fairness)
**Related terms:** Guardrail, Usage Policy, Accountability, Fairness
**Example:** An AI optimized to maximize user engagement might promote outrage and misinformation because these drive clicks.

---

### Annotation
**Definition:** The process of labeling data so a model can learn from it. For images, this means tagging them with the correct class (e.g., "wave," "thumbs up," "neutral"). Human annotators are the invisible workforce behind AI.
**First introduced:** Module 2 (How Computers See)
**Related terms:** Training Data, Label, Dataset, Classifier

---

### API (Application Programming Interface)
**Definition:** A way for two software programs to talk to each other. An API defines the rules for how requests and responses are structured.
**First introduced:** Module 5 (Talking to AI)
**Related terms:** Webhook, Bot, Credential
**Example:** When you ask OpenClaw to check the weather, it uses an API to talk to a weather service.

---

### Artificial Intelligence (AI)
**Definition:** When computers are programmed to do things that normally require human thinking, like recognizing faces, understanding speech, or making decisions.
**First introduced:** Module 1 (Introduction to AI)
**Related terms:** Machine Learning, Neural Network, Algorithm, Automation
**Example:** When your phone suggests the next word as you type, that's AI at work.

---

### Automation
**Definition:** Using technology — often AI — to do tasks with little or no human effort once it's set up. Saves time and reduces repetitive work.
**First introduced:** Module 1 (Introduction to AI)
**Related terms:** Artificial Intelligence (AI), Algorithm, Bot
**Example:** Car factories use robotic automation to weld and assemble vehicles faster than humans could by hand.

---

## B

### Bias (in AI)
**Definition:** AI bias happens when an AI system produces unfair or skewed results because the training data it learned from wasn't balanced or representative. This can lead to the AI treating some groups of people differently than others.
**First introduced:** Module 1 (Introduction to AI)
**Related terms:** Algorithmic Bias, Training Data, Dataset, Fairness
**Consistency note:** Module 1 introduces the concept broadly. Module 4 develops it further (distribution shift, data ethics). Module 6 formalizes it with terms like Proxy Variable, Feedback Loop, and Algorithmic Bias.

---

### Bot
**Definition:** A software program that automatically performs tasks, often in response to messages or events. In messaging apps, bots appear as user accounts but are controlled by code.
**First introduced:** Module 5 (Talking to AI)
**Related terms:** API, Automation, Webhook
**Example:** A Discord bot that answers questions, plays music, or moderates a server.

---

## C

### Chain-of-Thought (Prompting)
**Definition:** A prompting technique where you ask an AI to show its reasoning step by step — rather than jumping directly to an answer. Asking for reasoning often dramatically improves AI accuracy on complex or multi-step problems.
**First introduced:** Module 3 (How AI Thinks)
**Related terms:** Prompt Engineering, Reasoning, Inference, Hallucination
**Consistency note:** Introduced as a concept in M3; M5 reinforces it as a concrete prompting technique.

---

### Classification
**Definition:** Sorting data into categories — assigning a label or group to something based on its features. One of the most common tasks in AI.
**First introduced:** Module 3 (How AI Thinks)
**Related terms:** Classifier, Feature, Decision Tree, Pattern
**Example:** An AI looks at a photo and classifies it as "cat" or "dog."

---

### Classifier
**Definition:** A type of AI model that sorts inputs into labeled categories (classes).
**First introduced:** Module 2 (How Computers See)
**Related terms:** Classification, Feature, Accuracy, Pre-Trained Model
**Example:** An image classifier that looks at a photo and decides: wave, thumbs up, or neutral.

---

### CNN (Convolutional Neural Network)
**Definition:** A type of AI architecture designed specifically for images. It scans images in small patches to find patterns (edges, shapes, textures), then combines those patterns into higher-level features.
**First introduced:** Module 2 (How Computers See)
**Related terms:** Neural Network, Feature, Pixel, Computer Vision
**Example:** Almost every powerful image AI (face recognition, self-driving cars, medical scans) uses a CNN.

---

### Computer Vision
**Definition:** The field of AI that teaches computers to "see" and make sense of images and videos, similar to how human eyes and brain work together.
**First introduced:** Module 1 (Introduction to AI)
**Related terms:** CNN, Pixel, RGB, Feature, Neural Network
**Example:** Self-driving cars use computer vision to detect pedestrians, traffic lights, and other vehicles.

---

### Context Window
**Definition:** The maximum amount of text (measured in tokens) that an AI can "see" and remember at one time — including the conversation history and the current message.
**First introduced:** Module 5 (Talking to AI)
**Related terms:** Token, Hallucination, Prompt Engineering
**Example:** If an AI has a 4,000-token context window and your conversation gets longer, it starts "forgetting" earlier parts.

---

### Credential
**Definition:** A piece of identifying information used to prove you have permission to access a system or service — usually a username + password, API key, or token.
**First introduced:** Module 5 (Talking to AI)
**Related terms:** API, Bot, Webhook
**Example:** An API key is a credential — a secret string of characters that proves you're allowed to use a particular service.

---

## D

### Dataset
**Definition:** An organized collection of data — like a big table, folder of images, or list of text — used to train, test, or evaluate an AI system. The quality and size of a dataset directly affects how well an AI performs.
**First introduced:** Module 1 (Introduction to AI)
**Related terms:** Training Data, Annotation, Bias (in AI), Model

---

### Decision Tree
**Definition:** A flowchart-like model that asks a series of yes/no questions to arrive at a decision or classification. One of the clearest examples of how AI can reason step-by-step.
**First introduced:** Module 3 (How AI Thinks)
**Related terms:** Node, Leaf, Classification, Feature, Pattern
**Example:** "Does it have fur? → Yes → Does it bark? → Yes → Probably a dog."

---

### Deepfake
**Definition:** Synthetic media — typically video, audio, or images — generated by AI to make it appear that a real person said or did something they did not. Created using deep learning techniques.
**First introduced:** Module 6 (AI Ethics, Bias & Fairness)
**Related terms:** Neural Network, Surveillance, Transparency

---

## F

### Fairness
**Definition:** In the context of AI, the equitable treatment of individuals and groups by an AI system. Fairness is complex because different definitions conflict: *equal treatment* (same rules for everyone) vs. *equal outcomes* (comparable results across groups). No single definition fits all contexts.
**First introduced:** Module 6 (AI Ethics, Bias & Fairness)
**Related terms:** Algorithmic Bias, Accountability, Transparency, Stakeholder, Alignment

---

### Feature
**Definition:** A specific measurable property that a model uses to make predictions. For images, features might include edges, colors, textures, or shapes. Features are how the real world becomes something a computer can work with.
**First introduced:** Module 2 (How Computers See)
**Related terms:** Representation, Classifier, CNN, Decision Tree, Pattern
**Consistency note:** Introduced in M2 for image AI; M3 generalizes the concept to all data types.

---

### Feedback Loop
**Definition:** A cycle in which an algorithm's outputs influence future inputs, which then reinforce the original outputs. In AI systems, feedback loops can amplify existing biases over time.
**First introduced:** Module 6 (AI Ethics, Bias & Fairness)
**Related terms:** Algorithmic Bias, Proxy Variable, Alignment
**Example:** A predictive policing algorithm sends more police to already over-policed neighborhoods → more arrests → algorithm predicts more crime there → reinforcing the cycle.

---

### Few-Shot Prompting
**Definition:** A prompting technique where you include 2–5 examples of the pattern you want, so the AI learns from them and applies the same pattern to your actual request. Examples teach the AI your format far more effectively than descriptions alone.
**First introduced:** Module 5 (Talking to AI)
**Related terms:** Prompt Engineering, Chain-of-Thought, Token

---

## G

### Guardrail
**Definition:** A technical or procedural constraint built into an AI system to prevent specific harmful, unsafe, or unintended outputs or uses. Can be implemented as filters, rules, classifiers, rate limits, or human review requirements.
**First introduced:** Module 6 (AI Ethics, Bias & Fairness)
**Related terms:** Alignment, Usage Policy, Accountability, Responsible Disclosure

---

## H

### Hallucination
**Definition:** When an AI generates a confident, fluent, specific-sounding response that is factually incorrect — making something up rather than admitting it doesn't know. The AI isn't lying; it's pattern-matching in a way that produces incorrect output.
**First introduced:** Module 3 (How AI Thinks)
**Related terms:** Reasoning, Knowledge Base, Inference, Pattern
**Consistency note:** Defined identically in M3 and M5. Both modules emphasize verifying AI-generated facts.

---

## I

### Inference
**Definition:** Drawing a conclusion from available information — making a reasonable guess based on evidence, even when you don't have all the facts.
**First introduced:** Module 3 (How AI Thinks)
**Related terms:** Reasoning, Pattern, Hallucination, Classification
**Example:** An AI sees a yellow curved object and infers it's probably a banana, even without being told directly.

---

## K

### Knowledge Base
**Definition:** A structured collection of facts, rules, or information that an AI can look up or reference when answering questions. AI only knows what it was trained on or what's in its knowledge base.
**First introduced:** Module 3 (How AI Thinks)
**Related terms:** Hallucination, Reasoning, Inference, Pre-Trained Model

---

## L

### Label
**Definition:** The correct answer attached to a training example — the tag that tells the model what the right output should be for a given input.
**First introduced:** Module 4 (Give Your Agent the Ability to Learn)
**Related terms:** Annotation, Training Data, Dataset, Supervised Learning
**Example:** Each email in a spam-filter dataset has a label: "spam" or "not spam."

---

### Leaf
**Definition:** The final outcome at the end of a branch in a decision tree — the answer you arrive at after following all the decision nodes.
**First introduced:** Module 3 (How AI Thinks)
**Related terms:** Decision Tree, Node, Classification
**Example:** After answering all questions in a Pet Advisor tree, you might reach the leaf "Recommend: goldfish."

---

## M

### Machine Learning
**Definition:** A type of AI where a computer learns from examples instead of being told every rule. The more examples it sees, the better it gets. Traditional programming: humans write the rules. Machine learning: the machine finds the rules.
**First introduced:** Module 1 (Introduction to AI)
**Related terms:** Training Data, Model, Algorithm, Neural Network, Overfitting
**Consistency note:** Used consistently across all modules. M4 adds formal detail (training loop, weights, supervised learning).

---

### Model
**Definition:** In AI, the result of training a machine learning system — the "brain" the computer builds after learning from data, which it then uses to make predictions or decisions.
**First introduced:** Module 1 (Introduction to AI)
**Related terms:** Machine Learning, Training Data, Weights, Accuracy, Pre-Trained Model
**Consistency note:** Defined consistently across M1, M2, M4, and M5. M4 adds depth (weights, training loop, overfitting). No conflicting definitions found across modules.

---

## N

### Natural Language Processing (NLP)
**Definition:** The branch of AI that helps computers understand, interpret, and respond to human language — whether typed or spoken.
**First introduced:** Module 1 (Introduction to AI)
**Related terms:** Speech Recognition, Token, Prompt Engineering, Machine Learning
**Example:** When you ask Siri a question, NLP is what lets it understand what you said.

---

### Neural Network
**Definition:** A type of AI system loosely inspired by how the human brain works, using layers of connected "nodes" that pass information to each other. Especially good at recognizing patterns like faces, voices, and handwriting.
**First introduced:** Module 1 (Introduction to AI)
**Related terms:** CNN, Machine Learning, Feature, Computer Vision, Weights
**Example:** The Face ID on modern phones uses a neural network to recognize your face.

---

### Node
**Definition:** A single decision point in a decision tree — the place where a question is asked and the path splits. The quality of a decision tree depends on asking the *right* questions at each node.
**First introduced:** Module 3 (How AI Thinks)
**Related terms:** Decision Tree, Leaf, Classification

---

## O

### Overfitting
**Definition:** When a model memorizes the training data so well that it fails on new examples. It learned the specifics (including noise and quirks) instead of the underlying pattern. Signs: very high training accuracy, much lower test accuracy.
**First introduced:** Module 2 (How Computers See)
**Related terms:** Accuracy, Training Data, Model, Pre-Trained Model
**Consistency note:** Introduced in M2; M4 deepens the explanation with training vs. validation accuracy curves and prevention strategies.

---

## P

### Pattern
**Definition:** A repeated structure in data that an AI can learn to recognize and use to make predictions. AI doesn't actually understand things the way humans do — it finds patterns in huge amounts of data and uses them to generate responses.
**First introduced:** Module 3 (How AI Thinks)
**Related terms:** Feature, Representation, Machine Learning, Neural Network

---

### Pixel
**Definition:** The smallest unit of a digital image. Every photo, screenshot, or video frame is made up of a grid of pixels, each with an RGB color value. When image-recognition AI "sees" a cat, it's really analyzing patterns across millions of pixel values.
**First introduced:** Module 2 (How Computers See)
**Related terms:** RGB, CNN, Computer Vision, Feature

---

### Pre-Trained Model
**Definition:** A model that was already trained by someone else on a large dataset, then made available for others to use — as-is, or fine-tuned for a specific task.
**First introduced:** Module 2 (How Computers See)
**Related terms:** Model, Training Data, Classifier, Overfitting
**Example:** Instead of training from zero, you use a pre-trained model that already knows how to detect faces and just add your own gesture classes on top.

---

### Prompt Engineering
**Definition:** The practice of carefully crafting inputs (prompts) to get the best possible outputs from an AI model. A skill that combines clarity, structure, and strategy. The same AI can give wildly different results depending on how you ask.
**First introduced:** Module 5 (Talking to AI)
**Related terms:** Few-Shot Prompting, Chain-of-Thought, Token, Context Window, Hallucination

---

### Proxy Variable
**Definition:** A variable used to represent something that's difficult to measure directly. Proxy variables can introduce bias when they correlate with protected characteristics (like race or gender) even if those characteristics are not explicitly included in the data.
**First introduced:** Module 6 (AI Ethics, Bias & Fairness)
**Related terms:** Algorithmic Bias, Feedback Loop, Fairness
**Example:** Using ZIP code as a proxy for creditworthiness can indirectly encode racial segregation.

---

## R

### Reasoning
**Definition:** The process of using logic, evidence, and rules to reach a conclusion — working through a problem step by step. One of the biggest debates in AI is whether large language models actually *reason* or just produce text that *looks* like reasoning.
**First introduced:** Module 3 (How AI Thinks)
**Related terms:** Chain-of-Thought, Inference, Hallucination, Pattern

---

### Representation
**Definition:** The way information is converted into a form a computer can process — usually numbers or patterns. Everything an AI "knows" is a representation of the real world.
**First introduced:** Module 3 (How AI Thinks)
**Related terms:** Feature, Pixel, RGB, Pattern
**Example:** The word "cat" might be represented as a list of 300 numbers in a language model.

---

### Responsible Disclosure
**Definition:** The practice of reporting a security vulnerability, bias, or harmful flaw in an AI (or software) system to the developers or appropriate authorities — rather than exploiting it or publicizing it without warning — so they have the opportunity to fix it.
**First introduced:** Module 6 (AI Ethics, Bias & Fairness)
**Related terms:** Accountability, Transparency, Usage Policy, Guardrail

---

### RGB
**Definition:** The color system computers use. Every color on a screen is made by mixing Red, Green, and Blue light at different intensities (0–255 each). When an AI looks at an image, it sees a grid of RGB numbers — not a picture.
**First introduced:** Module 2 (How Computers See)
**Related terms:** Pixel, CNN, Computer Vision, Feature

---

## S

### Speech Recognition
**Definition:** AI that converts spoken words into text. It listens to audio, identifies phonemes (sound units), and reconstructs words and sentences. Has known bias problems based on accent, dialect, and language.
**First introduced:** Module 2 (How Computers See)
**Related terms:** Natural Language Processing (NLP), Spectrogram, Bias (in AI)
**Example:** Voice assistants use speech recognition to turn "Hey, what's the weather?" into words the AI can process.

---

### Spectrogram
**Definition:** A visual representation of sound over time — showing frequency (pitch) on one axis and time on the other, with color or brightness showing volume. Turning sound into an image lets AI "see" speech.
**First introduced:** Module 2 (How Computers See)
**Related terms:** Speech Recognition, CNN, Pixel, Feature

---

### Stakeholder
**Definition:** Any person, group, or organization affected by an AI system — whether directly (users, subjects) or indirectly (communities, competitors, regulators). Good AI design requires identifying all stakeholders, especially those with less power.
**First introduced:** Module 6 (AI Ethics, Bias & Fairness)
**Related terms:** Accountability, Fairness, Transparency, Usage Policy

---

### Surveillance
**Definition:** The monitoring of individuals or groups, often using technology, to collect data on their behavior, location, or activities. AI-powered surveillance includes facial recognition, license plate readers, and behavioral tracking. Raises significant concerns about privacy, consent, and disproportionate targeting.
**First introduced:** Module 6 (AI Ethics, Bias & Fairness)
**Related terms:** Deepfake, Computer Vision, Algorithmic Bias, Transparency

---

## T

### Token
**Definition:** The basic unit of text that AI language models process. A token is roughly a word, but can be shorter (parts of a word) or longer (common phrases). AI models have limits on how many tokens they can handle at once.
**First introduced:** Module 5 (Talking to AI)
**Related terms:** Context Window, Prompt Engineering, Hallucination
**Example:** The sentence "Let's go!" is about 4 tokens: "Let", "'s", "go", "!"

---

### Training Data
**Definition:** The collection of examples that a machine learning system learns from. The bigger and more varied the training data, the smarter the AI can become. The quality of your data determines the quality of your model.
**First introduced:** Module 1 (Introduction to AI)
**Related terms:** Dataset, Annotation, Label, Model, Overfitting, Bias (in AI)
**Consistency note:** Defined consistently across M1, M2, and M4. All modules agree: quality and variety of training data is the most important factor in model performance.

---

### Training Loop
**Definition:** The foundational cycle of supervised machine learning: Collect Data → Label → Train → Evaluate → Iterate. Repeating this cycle with improved data or settings is how models get better.
**First introduced:** Module 4 (Give Your Agent the Ability to Learn)
**Related terms:** Machine Learning, Model, Training Data, Accuracy, Weights

---

### Transparency
**Definition:** The degree to which an AI system's design, training data, decision-making process, and limitations are visible and understandable to users, affected parties, and overseers. Transparency is a prerequisite for accountability.
**First introduced:** Module 6 (AI Ethics, Bias & Fairness)
**Related terms:** Accountability, Fairness, Stakeholder, Responsible Disclosure, Alignment

---

### Turing Test
**Definition:** A challenge proposed by scientist Alan Turing to determine whether a computer can think like a human: if a person can't tell whether they're chatting with a human or a machine, the machine passes the test.
**First introduced:** Module 1 (Introduction to AI)
**Related terms:** Artificial Intelligence (AI), Machine Learning, Natural Language Processing (NLP)

---

## U

### Usage Policy
**Definition:** A formal document that defines how an AI system may and may not be used. A strong usage policy includes: permitted use cases, prohibited uses, data privacy rules, stakeholder responsibilities, consequences for misuse, and a process for updates.
**First introduced:** Module 6 (AI Ethics, Bias & Fairness)
**Related terms:** Guardrail, Alignment, Accountability, Responsible Disclosure

---

## W

### Webhook
**Definition:** A type of API connection where one service automatically notifies another when something happens — instead of the other service having to ask. Webhooks make real-time connections possible.
**First introduced:** Module 5 (Talking to AI)
**Related terms:** API, Bot, Credential
**Example:** A webhook notifies OpenClaw every time a new message arrives in a Discord channel. OpenClaw doesn't have to keep asking "any new messages?" — Discord just tells it.

---

### Weights
**Definition:** Adjustable numbers inside a machine learning model that encode learned patterns. During training, the model sees examples, makes predictions, checks if it's right, and nudges the weights to do better next time. After millions of examples, weights encode the patterns.
**First introduced:** Module 4 (Give Your Agent the Ability to Learn)
**Related terms:** Model, Machine Learning, Training Loop, Neural Network

---

## Summary: Term Count by Module

| Module | New Terms Introduced |
|--------|---------------------|
| Module 1 — Intro to AI | AI, Machine Learning, Algorithm, Training Data, Neural Network, NLP, Computer Vision, Turing Test, Automation, Bias (in AI), Dataset, Model |
| Module 2 — How Computers See | Pixel, RGB, Classifier, Accuracy, Feature, CNN, Spectrogram, Speech Recognition, Overfitting, Annotation, Pre-Trained Model |
| Module 3 — How AI Thinks | Representation, Decision Tree, Node, Leaf, Classification, Pattern, Chain-of-Thought, Hallucination, Reasoning, Inference, Knowledge Base |
| Module 4 — Give Your Agent the Ability to Learn | Label, Training Loop, Weights |
| Module 5 — Talking to AI | Token, Context Window, API, Webhook, Bot, Credential, Prompt Engineering, Few-Shot Prompting |
| Module 6 — AI Ethics, Bias & Fairness | Algorithmic Bias, Proxy Variable, Feedback Loop, Surveillance, Deepfake, Usage Policy, Guardrail, Alignment, Responsible Disclosure, Stakeholder, Fairness, Transparency, Accountability |
| Module 7 — AI Expo | *(no new vocabulary terms — consolidates all prior learning)* |

**Total unique terms: 47**

---

*Master Glossary — OpenClaw AI Curriculum | cross-curriculum/glossary/master-glossary.md*
