# Teacher Guide: Interactive Decision Tree Builder
**Module 3 — Online Tutorial**

---

## Overview

This guide covers everything you need to successfully deploy the decision tree builder activity — whether you're using it as an in-class exercise, a homework assignment, or a hybrid. It includes grading guidance, common student mistakes, and facilitation tips.

**Estimated time:**
- In-class: 30–45 minutes for activity + 15 minutes discussion
- Homework: 45–60 minutes self-paced

**Prerequisites for students:**
- Module 3, Lessons 1–2 (what is a decision tree; features and labels)
- Basic familiarity with yes/no logic

---

## Learning Objectives

By the end of this activity, students will be able to:

1. Construct a decision tree to classify labeled examples
2. Evaluate tree performance using accuracy as a metric
3. Explain why some features are more useful than others
4. Connect decision tree logic to broader machine learning concepts

---

## In-Class Usage

### Recommended Flow (45-minute class)

| Time | Activity |
|------|----------|
| 0–5 min | Teacher introduces the tool with a live demo (project your screen) |
| 5–10 min | Students open the tool and explore the Animals dataset |
| 10–20 min | Students build their first tree individually (no instruction — encourage experimentation) |
| 20–25 min | Pair share: "What accuracy did you get? What was your first question?" |
| 25–35 min | Class discussion (use prompts below), then students iterate |
| 35–40 min | Students switch to a second dataset of their choice |
| 40–45 min | Exit ticket / reflection prompt (see §Reflection below) |

### Live Demo Script (5 minutes)

1. Open the tool on the projector.
2. Ask: "We need to teach a computer to recognize animals. What's the first question you'd ask?"
3. Take 2–3 student suggestions; type the best one into a decision node.
4. Ask: "What should happen if the answer is yes? What if no?"
5. Build 2–3 nodes, then click Test Tree and show the accuracy result.
6. Say: "Your job is to beat this. Go!"

**Tip:** Deliberately start with a bad first question (e.g., "Has wings?") to demonstrate that a seemingly-logical question can give poor accuracy. This primes students to think critically rather than just using the first question that comes to mind.

### Facilitation Prompts (Mid-Activity)

Use these to get students unstuck or to deepen thinking:

- "What does your accuracy tell you about your first question?"
- "Look at the examples you got wrong — what do they have in common?"
- "What's the minimum number of questions you need to separate all four classes?"
- "Can two different trees give the same accuracy? Build one and find out."
- "What would happen if you put your second question first?"

### Pair Share Protocol

Have students turn to a partner and share:
> "My tree asks [X] first. I got [Y]% accuracy. The hardest example to classify was [Z] because..."

This surfaces different strategies and creates natural peer teaching.

---

## Homework Usage

When assigning as homework, give students:

1. **The student instructions** (printed or linked)
2. **A specific target:** "Build the most accurate tree you can for the Animals dataset. Try at least two different first questions and compare the results."
3. **A reflection prompt** to submit (see §Grading below)

### Pacing Guidance for Students

Recommend students spend:
- 5 minutes exploring the dataset before building
- 15–20 minutes building and testing their first tree
- 10 minutes trying at least one alternative approach
- 10–15 minutes on the reflection prompt

### Home Tech Requirements

The tool runs in any modern browser — Chrome, Safari, Firefox, or Edge. No installation, no login. Works offline once loaded. If a student's device can't run the tool, provide the printed dataset tables and have them draw the tree on paper.

---

## Common Student Mistakes

### Mistake 1: Using a low-signal first question

**Example:** "Does it have wings?" as the first question for animals.
- Wings splits the data unevenly: only Bat, Bee, Butterfly, Eagle, Parrot, Robin have wings (6/20)
- Most classes remain mixed in the "No wings" branch

**How to help:** Ask "Which answer do most examples fall into? Is that good or bad?"

---

### Mistake 2: Forgetting to label leaf nodes

Students often build a tree shape but forget to set the class labels on leaf nodes. The tool will warn them when they try to Test — redirect them to look for unlabeled green nodes.

---

### Mistake 3: Incomplete branches

Students add decision nodes but leave one branch unconnected. Remind them: every YES and every NO must lead somewhere — either to another question or to a final answer.

---

### Mistake 4: Making the tree too deep/complex

Some students add a question for every single feature, creating a tree with 7+ levels. This often reaches 100% accuracy — and this is a great teaching moment about **overfitting**.

> "Your tree memorized the examples. What would happen if we added a 21st animal it's never seen?"

---

### Mistake 5: Confusing features and labels

Students sometimes try to use the class label as a feature (e.g., "Is it a mammal?"). The Condition Editor only shows valid features, which prevents this — but if a student seems frustrated, check that they understand the difference between *what we're trying to predict* vs. *what we're using to predict it*.

---

### Mistake 6: Giving up after first low-accuracy attempt

Normalize iteration. Say: "Getting 40% accuracy is not a failure — it's information. Now you know that question doesn't work well. What does?"

---

## Dataset Selection Guidance

| Dataset | Best for | Complexity |
|---------|----------|-----------|
| 🐾 Animals | First-timers; very clean data | Easy |
| 🌤 Weather Types | Strong prior knowledge; good discussion | Medium |
| 🥗 Lunch Foods | Surprising edge cases; great for debate | Medium |

**Differentiation:**
- Struggling students → Animals (clear features, near-perfect tree possible)
- Advanced students → Lunch Foods (edge cases like tofu, peanut butter challenge assumptions)
- Extension → Have advanced students try to build the *smallest* tree that still achieves ≥80% accuracy

---

## Discussion: Key Concepts to Surface

After the activity, use these questions to connect to broader ML concepts:

### 1. Feature importance
> "Which question was most valuable? How do you know?"

Connect to: in real ML, algorithms calculate this automatically using metrics like *information gain*.

### 2. Overfitting
> "What does 100% accuracy on training data mean? Is that always good?"

Connect to: real models are tested on *new* data they've never seen (test set), not just the data they were trained on.

### 3. Bias in features
> "What if we didn't have the 'Has gills?' feature — could we still classify fish?"

Connect to: when real-world datasets are missing important features, models fail on underrepresented groups.

### 4. Greedy algorithms
> "Did you pick the best first question, or just a good-enough one?"

Connect to: most real decision tree algorithms (like CART, ID3) pick greedily — the best split at each step, not the globally optimal tree.

---

## Grading

### Submission Requirements

Students should submit:
1. An exported PNG of their final tree (via the [Export PNG] button)
2. A written reflection (3–5 sentences minimum per prompt, or as assigned)

### Rubric

| Criterion | 4 — Exceeds | 3 — Meets | 2 — Developing | 1 — Beginning |
|-----------|-------------|-----------|----------------|---------------|
| **Tree construction** | Tree is complete, all branches connected, all leaves labeled | Tree is complete with minor issues | Tree has 1–2 missing branches or labels | Tree is largely incomplete |
| **Accuracy** | ≥85% on chosen dataset | 70–84% | 50–69% | Below 50% |
| **Iteration** | Tried ≥2 different approaches; compared results | Tried 2 approaches | Tried 1 approach with minor tweaks | Single attempt only |
| **Reflection quality** | Accurately explains feature importance and connects to real-world ML | Explains feature importance with some connection | Basic description without deeper insight | Minimal or off-topic |
| **Overfitting awareness** (bonus) | Identifies and explains overfitting concept from prompt 5 | Identifies overfitting | Partially identifies | Not attempted |

### Grading Shortcuts

- Students who achieve ≥85% accuracy on Animals with a tree of ≤5 nodes: strong signal of understanding
- Students stuck below 50%: check if they're confusing features and labels; a brief conversation usually unblocks them quickly
- Watch for copy-paste trees (all four students in a group submitting identical PNGs): use reflection questions for authenticity

---

## Extension Activities

### Extension 1: Paper vs. Machine
Have students build a tree on paper *before* opening the tool, then compare. Did the computer-tested version match their intuition?

### Extension 2: Create Your Own Dataset
Challenge students to design a 4-class, 5-feature dataset about something they know (sports, music genres, types of games). They swap datasets with a partner and try to build a tree.

### Extension 3: Minimum Complexity Challenge
What is the smallest (fewest nodes) tree that achieves ≥75% accuracy? Students compete to find the most efficient tree.

### Extension 4: The Impossible Split
Remove one feature from the Animals dataset (mentally). Which feature, if removed, makes it impossible to classify correctly? Why?

---

## Accessibility Notes

The tool meets WCAG AA accessibility standards. If a student needs accommodations:
- **Keyboard-only navigation:** Full keyboard support is built in (see student instructions for shortcuts)
- **Screen reader:** The tool uses ARIA labels for all nodes and live regions for results
- **Low vision:** Text scales up to 200% without layout breakage; all color coding is paired with text labels
- **Motor difficulties:** Touch events supported; all drag-and-drop operations have click-based alternatives

If a student cannot use the browser tool, the datasets in `sample-datasets.md` can be printed and used for a paper-based version of the activity with the same learning outcomes.

---

## Technical Notes for Teachers

- **No login required.** Students open a URL and start building.
- **Saved locally.** Trees save in the browser (localStorage). Remind students: clearing browser data will delete their saved tree. Export PNG before clearing.
- **No data collection.** Nothing is sent to a server. Student work stays on their device.
- **Offline capable.** Once the page is loaded, it works without internet. Good for schools with unreliable Wi-Fi.
- **LMS embedding:** The tool can be embedded in an iframe in Canvas, Schoology, or Google Classroom. Contact the developer for embed instructions.

---

*Teacher guide authored by ClawDawg for openclaw-curriculum Module 3.*
