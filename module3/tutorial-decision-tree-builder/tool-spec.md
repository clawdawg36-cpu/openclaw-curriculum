# Tool Spec: Interactive Decision Tree Builder
**Module 3 — Online Tutorial**
**Version:** 1.0
**Status:** Handoff-ready for developer

---

## Overview

A browser-based, drag-and-drop decision tree builder where students construct their own classification tree, test it against labeled sample data, and receive real-time accuracy feedback. No installation required — runs entirely in the browser.

**Target audience:** Middle/high school students (grades 6–10), no prior coding experience assumed.

---

## 1. Functional Requirements

### 1.1 Core Capabilities

| # | Feature | Priority |
|---|---------|----------|
| F1 | Create a decision tree by adding nodes via drag or click | P0 |
| F2 | Define question/condition at each internal node | P0 |
| F3 | Add YES/NO or labeled branches per node | P0 |
| F4 | Assign a class label to leaf nodes | P0 |
| F5 | Test tree against a selected dataset | P0 |
| F6 | Display accuracy score (%) in real time | P0 |
| F7 | Show per-example classification result (correct / incorrect) | P1 |
| F8 | Save/load tree state (localStorage) | P1 |
| F9 | Export tree as PNG or JSON | P2 |
| F10 | Undo/redo (Ctrl+Z / Ctrl+Y) | P1 |
| F11 | Reset tree to blank canvas | P0 |
| F12 | Switch between datasets without losing tree structure | P1 |

### 1.2 Node Types

| Type | Description |
|------|-------------|
| **Root node** | One per tree; automatically created on canvas load |
| **Decision node** | Internal node with a yes/no question and exactly 2 child branches |
| **Leaf node** | Terminal node; holds a class label (e.g., "Mammal", "Sunny") |

---

## 2. UX / Interface Specification

### 2.1 Layout

```
┌─────────────────────────────────────────────────────────────────┐
│  HEADER: [Tool Title]  [Dataset Selector ▾]  [Test Tree ▶]      │
├──────────────┬──────────────────────────────────┬───────────────┤
│  SIDEBAR     │         CANVAS (tree view)        │  RESULTS      │
│              │                                   │  PANEL        │
│  Node Palette│  [drag-and-drop tree building]    │  Accuracy:    │
│  ─────────   │                                   │  72%          │
│  [Decision]  │                                   │               │
│  [Leaf]      │                                   │  [per-example │
│              │                                   │   results]    │
│  Instructions│                                   │               │
│  shortcut    │                                   │               │
├──────────────┴──────────────────────────────────┴───────────────┤
│  BOTTOM BAR: [Undo] [Redo] [Reset] [Save] [Export PNG]           │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 Canvas

- **Default state:** Single root node labeled "Start" centered on canvas.
- **Pan:** Click and drag on empty canvas area.
- **Zoom:** Mouse wheel or pinch gesture (min 50%, max 200%).
- **Snap-to-grid:** Optional toggle; 20px grid.
- **Edge drawing:** Edges auto-draw between parent and child nodes; not manually positioned.
- **Minimap:** Optional (P2) — small inset showing full tree when zoomed in.

### 2.3 Node Palette (Sidebar)

Two draggable items:
1. **Decision Node** — gear icon, blue border
2. **Leaf Node** — tag icon, green border

Dragging from palette onto canvas adds a disconnected node. Dragging onto an existing node's branch connector attaches it automatically.

### 2.4 Node Interactions

#### Decision Node
- **Click to edit:** Opens inline edit field for question text (e.g., "Does it have fur?")
- **Branch labels:** Default "Yes" / "No"; editable to custom text (e.g., "Hot" / "Cold")
- **Expand button:** (+) icon adds a child node to an unconnected branch
- **Delete:** (×) icon removes node and all descendants; prompts confirmation

#### Leaf Node
- **Click to edit:** Opens dropdown or free-text field for class label
- **Class label options:** Populated from current dataset's label list (auto-suggested)
- **Delete:** (×) icon removes the leaf

### 2.5 Dataset Selector

Dropdown in header. Options:
- 🐾 Animals
- 🌤 Weather Types
- 🥗 Lunch Foods

Switching datasets shows a preview panel: "Dataset has X training examples across Y classes."

### 2.6 Test Tree Panel

Triggered by **[Test Tree ▶]** button.

**Pre-test validation:**
- Tree must have at least one decision node and one leaf node.
- All decision nodes must have both branches connected.
- All leaf nodes must have a class label assigned.
- If validation fails → show inline error banner (see §5 Feedback Messages).

**Test execution:**
- Each training example is passed through the tree top-down.
- At each decision node, the example's features are compared to the node's condition.
- Result is "correct" if the leaf label matches the example's true label.

**Results Panel (post-test):**
- **Accuracy bar:** Animated fill bar (0–100%) with numeric percentage.
- **Color coding:** <50% red, 50–74% yellow, 75–89% blue, 90%+ green.
- **Per-example table:** Scrollable list of examples showing:
  - Example name/ID
  - True label
  - Predicted label
  - ✅ / ❌ icon
- **Summary:** "Your tree correctly classified X out of Y examples."

### 2.7 Condition Editor

When a student labels a decision node, a **Condition Editor** popover appears:

1. **Feature selector:** Dropdown of available features from the current dataset (e.g., "Has fur?", "Temperature")
2. **Operator selector:** Matches feature type:
   - Boolean features: "is Yes" / "is No"
   - Categorical: "equals [value]"
   - Numeric (if any): ">", "<", "≥", "≤", "="
3. **Value selector:** Populated based on feature + operator selection.

The resulting node label auto-fills with a human-readable string: e.g., "Has fur? → Yes / No"

---

## 3. Data Model

### 3.1 Tree JSON Schema

```json
{
  "treeId": "string (uuid)",
  "datasetId": "animals | weather | lunch",
  "createdAt": "ISO8601 timestamp",
  "root": {
    "id": "string",
    "type": "decision | leaf",
    "question": "string (decision nodes)",
    "feature": "string",
    "operator": "equals | gt | lt | gte | lte | is_yes | is_no",
    "value": "string | number | boolean",
    "label": "string (leaf nodes only)",
    "branches": {
      "yes": { /* child node or null */ },
      "no":  { /* child node or null */ }
    }
  }
}
```

### 3.2 Dataset JSON Schema

```json
{
  "datasetId": "string",
  "name": "string",
  "description": "string",
  "classes": ["string"],
  "features": [
    {
      "name": "string",
      "type": "boolean | categorical | numeric",
      "values": ["string"] // for categorical
    }
  ],
  "examples": [
    {
      "id": "string",
      "label": "string (true class)",
      "features": { "featureName": "value" }
    }
  ]
}
```

---

## 4. State Management

| State | Storage | Notes |
|-------|---------|-------|
| Current tree | React state + localStorage | Auto-saved on every change |
| Selected dataset | React state | Not persisted across page load |
| Test results | React state | Cleared when tree is modified |
| Undo/redo stack | In-memory (max 50 steps) | Not persisted |

**Auto-save behavior:** Tree is saved to `localStorage` under key `dtb-tree-{datasetId}` after every node add/edit/delete. On page load, offer "Resume your previous tree?" toast if saved tree exists.

---

## 5. Feedback Messages

| Trigger | Message | Type |
|---------|---------|------|
| Tree has incomplete branches | "Some branches aren't connected yet. Connect all branches before testing." | Warning banner |
| Leaf node missing label | "One or more leaf nodes don't have a label. Add a class to every leaf." | Warning banner |
| Tree is empty | "Add at least one question and one answer to test your tree." | Info banner |
| Test passes (<50% accuracy) | "Your tree got X% — try asking a different question first!" | Result panel (red) |
| Test passes (50–74%) | "Good start! X% accuracy. Can you find a better first question?" | Result panel (yellow) |
| Test passes (75–89%) | "Nice work! X% accuracy. What question could improve this?" | Result panel (blue) |
| Test passes (≥90%) | "🎉 Excellent! X% accuracy — your tree is really good!" | Result panel (green) |
| Saved successfully | "Tree saved." | Toast (bottom-right, 2s) |
| Node deleted with children | "This will also delete all nodes below it. Are you sure?" | Modal confirm |
| Dataset switched with active tree | "Switching datasets will reset your test results. Continue?" | Modal confirm |

---

## 6. Accessibility Requirements

### 6.1 Keyboard Navigation

| Action | Keyboard Shortcut |
|--------|-----------------|
| Add decision node | Alt+D |
| Add leaf node | Alt+L |
| Delete selected node | Delete or Backspace (with confirm) |
| Undo | Ctrl+Z / Cmd+Z |
| Redo | Ctrl+Y / Cmd+Shift+Z |
| Run test | Ctrl+Enter |
| Pan canvas | Arrow keys (when no node focused) |
| Focus next node | Tab |
| Open node editor | Enter (when node focused) |
| Close popover | Escape |

### 6.2 Screen Reader Support

- All nodes have `aria-label` describing type and content (e.g., "Decision node: Does it have fur? Yes branch leads to leaf node: Mammal")
- Canvas uses `role="application"` with `aria-roledescription="decision tree builder"`
- Results panel uses `role="region"` with `aria-live="polite"` for accuracy updates
- Error/warning banners use `role="alert"`

### 6.3 Visual Accessibility

- Minimum color contrast ratio: 4.5:1 (WCAG AA)
- Color is never the sole indicator of state; always paired with icon + text
- Node borders use distinct shapes in addition to color (decision = rounded rect, leaf = rect with tag cutout)
- Font size minimum: 14px; all text scalable up to 200% without layout breakage
- Focus indicators: 3px solid outline on all interactive elements

### 6.4 Touch / Mobile

- Minimum touch target size: 44×44px
- Drag-and-drop supports touch events (pointer events API)
- Two-finger pan and pinch-to-zoom on canvas
- Sidebar collapses to bottom sheet on viewport width <768px

---

## 7. Technical Stack (Recommendations)

| Concern | Recommendation | Notes |
|---------|----------------|-------|
| Framework | React 18+ | Hooks-based; no class components |
| Canvas rendering | React Flow (reactflow.dev) | Handles nodes/edges/pan/zoom; well-maintained |
| State management | Zustand or React Context | Zustand preferred for undo/redo |
| Styling | Tailwind CSS | Utility-first; responsive by default |
| Persistence | localStorage | No backend needed |
| Export (PNG) | html2canvas or React Flow's built-in snapshot | |
| Testing | Vitest + React Testing Library | |
| Build tool | Vite | Fast dev + build |

**Browser support:** Latest 2 versions of Chrome, Firefox, Safari, Edge. IE not supported.

**Offline capable:** All assets must work offline (no CDN dependencies at runtime). Bundle everything.

---

## 8. Out of Scope (v1)

- User accounts / server-side persistence
- Sharing trees via URL
- Multi-split nodes (>2 branches)
- Continuous/numeric feature splitting (v1 uses categorical/boolean only)
- Auto-building the tree (algorithm-generated trees)
- Mobile-native app

---

## 9. Open Questions for Developer

1. Should the condition editor support free-text questions (not tied to dataset features), or strict feature-based conditions only? (Recommendation: start with feature-based for v1; free-text as v2 option)
2. Should students be able to test on a held-out test split, or only on training data? (Recommendation: training data only in v1 to keep it simple)
3. Should accuracy update live as the student edits, or only on "Test Tree" button press? (Recommendation: button-press only to avoid confusion mid-edit)
4. What LMS (if any) will embed this tool? Needs iframe-friendly layout.

---

*Spec authored by ClawDawg for openclaw-curriculum Module 3.*
