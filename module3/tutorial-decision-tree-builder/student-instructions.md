# Student Instructions: Build Your Own Decision Tree
**Module 3 — Online Tutorial**

---

## 🎯 What You're Going to Do

In this activity, you'll build a **decision tree** — a kind of flowchart that a computer can use to make decisions. You'll:

1. Pick a dataset (animals, weather, or lunch foods)
2. Drag and drop questions to build your tree
3. Test your tree to see how accurate it is
4. Improve it until you're satisfied

By the end, you'll understand *how* machine learning models make decisions — and why some questions are more useful than others.

---

## 🚀 Getting Started

### Step 1: Open the Tool

Open the Decision Tree Builder in your browser. You should see:
- A blank canvas in the middle (this is where you'll build your tree)
- A **Node Palette** on the left with two types of nodes
- A **Dataset Selector** in the top bar
- A **Test Tree** button in the top right

### Step 2: Pick Your Dataset

Click the **Dataset Selector** dropdown at the top and choose one:

| Dataset | What you're classifying |
|---------|------------------------|
| 🐾 Animals | Mammal, Bird, Fish, or Insect |
| 🌤 Weather Types | Sunny, Rainy, Cloudy, or Snowy |
| 🥗 Lunch Foods | Fruit, Vegetable, Protein, or Grain |

**💡 Tip:** Start with **Animals** — it's the most intuitive.

---

## 🌳 Building Your Tree

### The Basic Idea

A decision tree works by asking **yes/no questions**. Each question splits your examples into two groups. Keep asking questions until every group has a single answer (class label).

```
Does it have fur?
├── YES → It's probably a Mammal
└── NO  → Ask another question...
```

### Adding Your First Question (Decision Node)

1. Drag a **Decision Node** (blue, gear icon) from the left panel onto the canvas, OR click the (+) icon on the root node.
2. Click on the node to open the **Condition Editor**.
3. Choose a **feature** from the dropdown (e.g., "Has fur?").
4. The node will show your question with YES and NO branches hanging below it.

### Adding More Questions

Click the **(+)** button on any branch to add another node below it. You can add:
- Another **Decision Node** (to ask another question)
- A **Leaf Node** (to give a final answer)

### Adding a Final Answer (Leaf Node)

1. Drag a **Leaf Node** (green, tag icon) from the panel, or click (+) on a branch.
2. Click the leaf node and choose a **class label** from the dropdown (e.g., "Mammal").
3. This is your tree's final answer for that path.

### Example Tree (Animals)

```
Does it have fur?
├── YES → [Leaf: Mammal]
└── NO
    └── Does it have feathers?
        ├── YES → [Leaf: Bird]
        └── NO
            └── Does it have gills?
                ├── YES → [Leaf: Fish]
                └── NO  → [Leaf: Insect]
```

---

## 🧪 Testing Your Tree

When you've built a complete tree, click **[Test Tree ▶]** in the top right.

The tool will:
1. Run every example through your tree
2. Compare your tree's predictions to the real answers
3. Show you an **accuracy score** (like 75%)

### Reading Your Results

| Score | What it means |
|-------|--------------|
| 90%+ 🎉 | Excellent! Your tree is very well designed |
| 75–89% 💙 | Nice work! A few more tweaks could improve it |
| 50–74% 💛 | Good start — try a different first question |
| Below 50% ❤️ | Keep experimenting — which question might work better? |

You can also scroll through the **per-example results** to see exactly which examples your tree got right (✅) and wrong (❌).

---

## 🔧 Improving Your Tree

Here are some strategies when your accuracy isn't where you want it:

### Strategy 1: Change Your First Question

The first question matters most because it splits *all* your data. Ask yourself:
> "What one question would divide my examples into the most separate groups?"

For animals, "Has fur?" cleanly separates all 5 mammals from the rest.

### Strategy 2: Look at the Wrong Answers

Click through the ❌ examples in your results panel. What do they have in common? What question would have sorted them correctly?

### Strategy 3: Add More Levels

If a branch is mixing up two classes, add another question to that branch to separate them further.

### Strategy 4: Simplify

Sometimes too many questions make a tree *worse* (it gets too specific). Try removing a level and see what happens to your accuracy.

---

## 💾 Saving Your Work

Your tree **saves automatically** in your browser. If you close the tab and come back, it'll ask if you want to resume your tree.

You can also:
- Click **[Save]** to manually save a snapshot
- Click **[Export PNG]** to download an image of your tree

---

## ✏️ Reflection Prompts

After completing the activity, answer these questions in your notebook or on the class discussion board:

### Prompt 1: Your Best Tree
> Describe the tree you built. What was your first question, and why did you choose it? What accuracy did you reach?

### Prompt 2: Feature Importance
> Which feature (question) turned out to be the most useful? Which was least useful? How could you tell?

### Prompt 3: Hard Cases
> Were there any examples your tree kept getting wrong, no matter what? What made them hard to classify?

### Prompt 4: Real-World Connection
> Think of a real situation where a doctor, scientist, or app might use a decision tree. What kinds of questions would it ask?

### Prompt 5 (Challenge): Overfitting
> What do you think would happen if your tree had 20 questions for just 20 examples? Try it! What accuracy did you get on the training data — and why might that be a problem in the real world?

---

## ⌨️ Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Add decision node | Alt+D |
| Add leaf node | Alt+L |
| Undo | Ctrl+Z (Mac: Cmd+Z) |
| Redo | Ctrl+Y (Mac: Cmd+Shift+Z) |
| Run test | Ctrl+Enter |
| Delete selected node | Delete |

---

## 🆘 Troubleshooting

**"Some branches aren't connected yet"**
→ Every YES and NO branch needs to connect to a node. Look for branches with no node attached — add a leaf node to complete them.

**"One or more leaf nodes don't have a label"**
→ Click each green leaf node and make sure you've chosen a class label from the dropdown.

**My tree looks right but the accuracy is low**
→ Check that your decision node conditions actually match the dataset's features. If you're using the Animals dataset, make sure you're using the right feature names.

**I accidentally deleted a node**
→ Hit Ctrl+Z (or Cmd+Z on Mac) to undo.

---

*Good luck — and remember, even expert data scientists iterate many times before getting a great model!*

---

*Instructions authored by ClawDawg for openclaw-curriculum Module 3.*
