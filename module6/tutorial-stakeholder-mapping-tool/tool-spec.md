# Tool Spec: Interactive Stakeholder Mapping Tool

**Version:** 1.0  
**Module:** 6 — AI Ethics, Bias, and Accountability  
**Type:** Interactive browser-based drag-and-drop mapping tool  
**Used In:** Lesson 6.7 (Fairness Proposal activity) and activity-stakeholder-mapping  
**Target Devices:** Chromebook, tablet, laptop, desktop (no install required)

---

## Overview

The Stakeholder Mapping Tool lets students visually place stakeholders (individuals, institutions, and groups) onto a 2×2 grid based on two dimensions: **how much power they hold** vs. **how much they are harmed or benefited** by an AI system. The goal is to make abstract power dynamics concrete and visible — students can *see* who gains, who loses, and who has the leverage to change it.

The tool comes pre-loaded with three case study scenarios drawn from real-world AI deployments. Students explore each scenario, argue about where stakeholders belong, and use the map as a foundation for their Fairness Proposal.

No login, no install, no account. Works on any modern browser including Chromebook.

---

## Design Principles

- **Drag first, think second:** Placing a card should take less thought than the discussion it sparks
- **Productive disagreement:** The tool should make it easy to move a card and explain why — argument is the point
- **Tablet-first:** All interactions work by touch; no hover-only states
- **Chromebook compatible:** Pure HTML/CSS/JS, no Node, no build step, no backend
- **No login:** State lives in the browser (localStorage for saved maps); nothing leaves the device
- **Accessible color + shape:** Quadrant differences communicated by color AND label, never color alone

---

## The 2×2 Grid

### Axes

```
                        HIGH POWER
                             │
                             │
         ┌───────────────────┼───────────────────┐
         │  POWERFUL &       │  POWERFUL &        │
    H    │  HARMED           │  BENEFITED         │
    A    │                   │                    │
    R    │  (Rare but        │  (Who designed     │
    M    │  significant —    │  this? Who         │
    ◄────┤  sometimes        │  profits?)         ├────► BENEFIT
         │  regulators       │                    │
         │  face backlash)   │                    │
         │                   │                    │
         ├───────────────────┼───────────────────┤
         │  LOW-POWER &      │  LOW-POWER &       │
         │  HARMED           │  BENEFITED         │
         │                   │                    │
         │  ⚠ Most           │  (Often the        │
         │  vulnerable:      │  stated            │
         │  people who       │  rationale for     │
         │  bear the cost    │  building it)      │
         │  without choice   │                    │
         └───────────────────┴───────────────────┘
                        LOW POWER
```

### Quadrant Labels (displayed in corners)

| Quadrant | Label | Color | Key Question |
|---|---|---|---|
| Top-right | **Power + Benefit** | `#51CF66` (green) | *Who designed this, and who profits?* |
| Top-left | **Power + Harm** | `#FF922B` (orange) | *Who has power but faces backlash?* |
| Bottom-right | **Affected + Benefit** | `#74C0FC` (blue) | *Who was this supposedly built for?* |
| Bottom-left | **Affected + Harm** ⚠ | `#FF6B6B` (red) | *Who pays the price without a voice?* |

The bottom-left quadrant is the ethical danger zone — stakeholders placed here are the primary focus of the Fairness Proposal.

---

## Stakeholder Cards

### Card Anatomy

Each stakeholder card displays:
- **Name** (e.g., "Students")
- **Role blurb** (1 line: *"Use the system daily; can't opt out"*)
- **Icon** (emoji or inline SVG — no external CDN dependency)
- **Scenario-specific note** (short — populated when a scenario is loaded)

Cards are draggable. On touch devices, use touch-start/move/end drag. Cards snap to a loose grid inside each quadrant (not pixel-precise — placement within the quadrant is intentional and freeform).

### Default Stakeholder Set

These 10 stakeholders are available in every scenario. Scenario-specific notes change per case study.

| ID | Name | Icon | Default Role |
|---|---|---|---|
| `students` | Students | 🎒 | End users of the system, often without a choice |
| `teachers` | Teachers | 📚 | Implement or are evaluated by the system |
| `employers` | Employers / Admins | 🏢 | Deploy or make decisions based on the system |
| `tech_companies` | Tech Companies | 💻 | Build and sell the system |
| `advertisers` | Advertisers | 📣 | Fund the system through data or revenue |
| `governments` | Government / Regulators | 🏛️ | Set policy; may contract for or restrict the system |
| `parents` | Parents / Guardians | 👨‍👩‍👧 | Affected by system outcomes for their children |
| `marginalized` | Marginalized Groups | ✊ | Disproportionately impacted by bias |
| `journalists` | Journalists / Advocates | 📰 | Investigate and expose system failures |
| `investors` | Investors / Shareholders | 💰 | Financially benefit from system adoption |

### Adding Custom Cards

A **[+ Add Stakeholder]** button opens a small modal:
- Name field (text)
- Role blurb field (text, 60 char max)
- Icon picker (emoji, 10 pre-suggested or free text)
- [Add to Map] button

Custom cards are saved to the current session (localStorage). They appear in the card tray alongside default cards.

---

## Pre-Loaded Scenarios

A scenario selector at the top of the page switches between three pre-built case studies. Loading a scenario:
1. Resets all card positions to the card tray (sidebar)
2. Updates scenario-specific notes on each card
3. Shows a brief scenario description panel
4. Optionally suggests a "starter placement" (teacher can toggle this off)

### Scenario 1: Facial Recognition in Schools

**Short title:** Facial Recognition in Schools  
**Description:**

> A school district has installed AI-powered facial recognition cameras at all entrances. The system checks students' faces against a database and flags anyone not on the approved list. It's also used to track attendance automatically and alert staff if a person with a prior disciplinary record enters the building.  
>
> The system was purchased from a private tech company and contracted by the school board. Students and parents were not consulted.

**Scenario-specific card notes:**

| Stakeholder | Note |
|---|---|
| Students | Face scanned every time they enter school. Can't opt out. |
| Teachers | Receive alerts; attendance logged automatically. Mixed views. |
| Employers / Admins | School board contracted the system; administrators enforce it. |
| Tech Companies | Sold the system to the district; data may be retained. |
| Advertisers | Not directly involved in this scenario. |
| Government | May have funded the system through grants; regulators may investigate. |
| Parents | Not consulted; may support (safety) or oppose (privacy). |
| Marginalized Groups | Studies show higher error rates for students of color. |
| Journalists / Advocates | ACLU and privacy groups have challenged similar systems. |
| Investors | Tech company shareholders benefit from school contracts. |

**Suggested starting discussion:**  
*"Where does the school board go? They have power — but do they benefit or are they exposed to backlash?"*

---

### Scenario 2: Hiring Algorithm

**Short title:** Hiring Algorithm  
**Description:**

> A large company uses an AI system to screen job applications. The algorithm scores each candidate based on their resume, assigning a number from 0–100. Candidates below 60 are automatically rejected without human review. The algorithm was trained on ten years of the company's past hires — a workforce that was historically 80% white and male.  
>
> The algorithm is used across all departments. Hiring managers see only the scores, not the reasoning behind them.

**Scenario-specific card notes:**

| Stakeholder | Note |
|---|---|
| Students | Recent graduates applying for entry-level roles; algorithm-screened. |
| Teachers | Not directly involved in this scenario. |
| Employers / Admins | HR teams and managers trust algorithm scores; less manual review. |
| Tech Companies | Built and licensed the algorithm; profits from adoption. |
| Advertisers | Not directly involved in this scenario. |
| Government | EEOC may investigate if discrimination patterns are found. |
| Parents | Not directly involved. Indirectly affected by family employment. |
| Marginalized Groups | Disproportionately screened out if algorithm replicates historical bias. |
| Journalists / Advocates | Investigative reporters and organizations like the AJL audit these systems. |
| Investors | Companies using efficient hiring save costs; investors benefit. |

**Suggested starting discussion:**  
*"Who had input into how this algorithm was trained? Does anyone in the bottom-left quadrant have a way to appeal?"*

---

### Scenario 3: Social Media Recommendation Algorithm

**Short title:** Social Media Recommendation  
**Description:**

> A popular social media platform uses an AI recommendation algorithm to decide what content appears in each user's feed. The algorithm is designed to maximize engagement — time spent on the app. Internal research at the company found that emotionally intense, divisive, and alarming content consistently drives higher engagement.  
>
> The algorithm is not disclosed to users. There is no opt-out. The platform earns revenue from advertisers who pay for access to the platform's most engaged users.

**Scenario-specific card notes:**

| Stakeholder | Note |
|---|---|
| Students | Primary users; feed shaped invisibly; may see amplified anxiety or misinformation. |
| Teachers | Not in control; deal with the effects (distracted students, misinformation). |
| Employers / Admins | Social media companies' leadership decides the objective function. |
| Tech Companies | Designed the algorithm; profits from engagement → ad revenue. |
| Advertisers | Pay for engagement; algorithm serves their interest by maximizing time-on-app. |
| Government | Some regulators push for transparency; others want access to data (surveillance). |
| Parents | Concerned about effects on teens; limited ability to restrict. |
| Marginalized Groups | Amplification of hate content disproportionately targets minority users. |
| Journalists / Advocates | Whistleblowers (e.g., Frances Haugen) exposed internal research. |
| Investors | Engagement-maximization strategy drives revenue; shareholders benefit. |

**Suggested starting discussion:**  
*"The platform says this tool is free — it's a benefit for users. Where does that argument break down?"*

---

## Features

### 1. Card Tray (Sidebar)

On load, all 10 stakeholder cards sit in a sidebar tray on the left (desktop) or a collapsible drawer at the bottom (mobile/tablet). Students drag cards from the tray onto the grid.

- Cards in the tray are greyed out / dimmed
- Cards on the grid show their full color and icon
- Cards can be dragged back to the tray to "remove" them from the map
- The tray shows a count: "4 of 10 placed"

### 2. Drag and Drop

- Desktop: mouse drag-and-drop using HTML5 Drag and Drop API
- Mobile/tablet: touch events (`touchstart`, `touchmove`, `touchend`) with a polyfill fallback
- Drop zones: the entire 2×2 grid is one large drop target divided into four quadrant zones
- Cards snapped loosely within their dropped quadrant — exact placement within a quadrant is free-form (positions saved as percentage-based `top`/`left` within the quadrant)
- If two cards overlap significantly, a subtle bounce animation prompts the user to separate them

### 3. Scenario Notes Panel

Below the grid (or in a collapsible sidebar on mobile), a panel shows:
- Scenario name + 2-sentence description
- 2–3 "Consider" prompts (scenario-specific discussion starters)
- A "Starter placement" toggle (teacher can enable to show suggested positions as ghost/dashed outlines)

### 4. Save + Compare

- **[Save Map]** button: stores current placement as JSON in localStorage with a timestamp
- Students can save multiple snapshots (e.g., "Before discussion" and "After discussion")
- A **[Compare]** view shows two saved maps side by side, highlighting cards that moved
- Saved maps persist for the browser session; a clear button wipes them

### 5. Discussion Mode

A **[Discussion Mode]** toggle hides the quadrant labels and color coding — the grid axes are still labeled but the quadrant "buckets" are removed. This forces students to argue about placement without the label anchoring their thinking, then reveal the labels afterward.

### 6. Export

- **[Export PNG]** button: generates a screenshot of the current map (using `html2canvas` or manual Canvas drawing — no external CDN; include minified library inline if needed)
- **[Export Text]** button: generates a plain-text summary listing each stakeholder and which quadrant they're placed in, suitable for pasting into a Google Doc

### 7. Reset

- **[Reset Map]** button: returns all cards to the tray; prompts "Save current map first?" before clearing

---

## Technical Specification

### Stack

- Pure HTML5 + CSS3 + Vanilla JavaScript
- No frameworks, no build step, no npm
- Single-file deployment option: `index.html` (JS and CSS can be inlined) OR split as `index.html` + `style.css` + `app.js`
- Total target size: < 80KB (before any base64 image exports)
- Works when opened directly from filesystem (`file://`) OR served via HTTP

### Touch Support

The Drag and Drop HTML5 API does not work on iOS/Android natively. Use a lightweight touch-drag approach:

```js
// Touch drag implementation
let draggingCard = null;
let dragOffsetX = 0, dragOffsetY = 0;

cardEl.addEventListener('touchstart', (e) => {
  draggingCard = cardEl;
  const touch = e.touches[0];
  // Calculate offset from card top-left
  dragOffsetX = touch.clientX - cardEl.getBoundingClientRect().left;
  dragOffsetY = touch.clientY - cardEl.getBoundingClientRect().top;
  cardEl.style.position = 'fixed';
  cardEl.style.zIndex = 1000;
  e.preventDefault();
});

document.addEventListener('touchmove', (e) => {
  if (!draggingCard) return;
  const touch = e.touches[0];
  draggingCard.style.left = (touch.clientX - dragOffsetX) + 'px';
  draggingCard.style.top = (touch.clientY - dragOffsetY) + 'px';
  e.preventDefault();
}, { passive: false });

document.addEventListener('touchend', (e) => {
  if (!draggingCard) return;
  // Determine which quadrant the card was dropped in
  const touch = e.changedTouches[0];
  const quadrant = getQuadrantAtPoint(touch.clientX, touch.clientY);
  dropCardIntoQuadrant(draggingCard, quadrant);
  draggingCard = null;
});
```

### Data Model

```js
// Scenario definition
const SCENARIOS = {
  facial_recognition: {
    id: "facial_recognition",
    title: "Facial Recognition in Schools",
    shortTitle: "Facial Recognition",
    description: "...",
    discussionPrompts: ["...", "...", "..."],
    starterPlacements: {
      tech_companies: { quadrant: "power_benefit", xPct: 70, yPct: 30 },
      students: { quadrant: "affected_harm", xPct: 40, yPct: 60 },
      // ... etc
    },
    cardNotes: {
      students: "Face scanned every time they enter school. Can't opt out.",
      // ... etc
    }
  },
  // hiring_algorithm, social_media_recommendation...
};

// Current map state
const mapState = {
  scenario: "facial_recognition",
  placements: {
    // cardId -> { quadrant: "power_benefit" | "power_harm" | "affected_benefit" | "affected_harm", xPct, yPct }
  },
  customCards: [],
  savedSnapshots: []
};
```

### localStorage Schema

```js
// Key: "stakeholder-map-state"
{
  "version": 1,
  "scenario": "facial_recognition",
  "placements": { ... },
  "customCards": [ ... ],
  "snapshots": [
    { "label": "Before discussion", "timestamp": 1234567890, "placements": { ... } },
    { "label": "After discussion", "timestamp": 1234567999, "placements": { ... } }
  ]
}
```

### Accessibility

- All card drag operations have a keyboard alternative: focus card → Arrow keys move to quadrant, Enter to drop
- Quadrant labels are `role="region"` with `aria-label`
- Card positions announced via `aria-live` on drop: *"Students placed in: Affected + Harm quadrant"*
- Touch targets minimum 44×44px (WCAG 2.5.5)
- Color is never the sole differentiator — quadrants also labeled by name

### Performance

- No external CDN; all icons as inline emoji or SVG data URIs
- System font stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- Loads in < 1 second on school Wi-Fi
- No API calls at runtime — fully offline after initial load

---

## Layout

### Desktop / Wide Screen (≥ 900px)

```
┌────────────────────────────────────────────────────────────────────────────┐
│  🗺️ Stakeholder Mapping Tool     [Scenario ▾]  [Discussion Mode]  [?]      │
├────────────┬───────────────────────────────────────────────────────────────┤
│  CARD TRAY │                   HIGH POWER                                   │
│  ┌───────┐ │         ┌─────────────────┬─────────────────┐                 │
│  │🎒     │ │    H    │  POWER + HARM   │  POWER + BENEFIT│                 │
│  │Student│ │    A    │                 │                  │                 │
│  └───────┘ │    R ◄──┤                 │                  ├──► BENEFIT      │
│  ┌───────┐ │    M    │                 │                  │                 │
│  │📚     │ │         ├─────────────────┼─────────────────┤                 │
│  │Teacher│ │         │ AFFECTED + HARM │ AFFECTED+BENEFIT │                 │
│  └───────┘ │         │    ⚠            │                  │                 │
│  ...        │         │                 │                  │                 │
│            │         └─────────────────┴─────────────────┘                 │
│  [+ Add]   │                   LOW POWER                                    │
├────────────┴───────────────────────────────────────────────────────────────┤
│  📋 Scenario Notes                                                          │
│  A school district installed facial recognition cameras...                  │
│  Consider: Where does the school board go? Who had no say?                  │
│  [Save Map]  [Compare]  [Export ▾]  [Reset]                                │
└────────────────────────────────────────────────────────────────────────────┘
```

### Tablet / Touch (< 900px)

- Card tray collapses to a horizontally-scrolling strip at the bottom
- Grid occupies full width above the tray
- Scenario notes in a collapsible accordion below the grid
- Toolbar collapses to a hamburger menu `≡`

### Chromebook Considerations

- Chromebooks support touch AND mouse/trackpad — both drag modes must work simultaneously
- Tested on 1366×768 (most common school Chromebook resolution)
- No Chrome extensions required

---

## Visual Design

### Color Palette

| Role | Color | Use |
|---|---|---|
| Power + Benefit | `#51CF66` (green) | Top-right quadrant background (10% opacity), border |
| Power + Harm | `#FF922B` (orange) | Top-left quadrant |
| Affected + Benefit | `#74C0FC` (blue) | Bottom-right quadrant |
| Affected + Harm | `#FF6B6B` (red) | Bottom-left quadrant — **danger zone** |
| Card base | `#FFFFFF` | Card background |
| Card border | `#DEE2E6` | Default; changes to quadrant color on drop |
| Grid background | `#F8F9FA` | |
| Tray background | `#F1F3F5` | |
| Axis labels | `#495057` | |
| Body text | `#212529` | |

### Cards

- Size: ~120×80px (desktop), ~90×65px (tablet)
- Rounded corners: 8px
- Drop shadow when dragging: `box-shadow: 0 8px 24px rgba(0,0,0,0.15)`
- Card border left (4px) color matches quadrant color when placed; neutral when in tray

### Grid

- Axis lines: 2px solid `#CED4DA` (the cross in the center)
- Axis arrow tips: simple SVG arrowheads
- Axis labels positioned outside the grid, mid-axis
- Quadrant labels in corners, small font (11px, all-caps, letter-spaced)

---

## File Structure

```
module6/tutorial-stakeholder-mapping-tool/
├── tool-spec.md          ← this file
├── activity-guide.md
├── teacher-guide.md
├── printable-version.md
└── tool/
    ├── index.html        ← main app (open directly from filesystem or serve via HTTP)
    ├── style.css
    └── app.js
```

> Note: `tool/index.html` must work when opened via `file://` AND when served via HTTP. Avoid features requiring `https://` secure context (e.g., Clipboard API — use `document.execCommand('copy')` as fallback).

---

## Scope Boundaries (Not in v1)

- No real-time collaboration (multiple students on the same map simultaneously)
- No teacher dashboard / class-wide view
- No accounts or submissions — not an LMS replacement
- No AI integration — this is a thinking tool, not an AI tool
- No translation / multilingual support
- No audio/video

---

## Success Metrics (Teacher Review)

The tool "worked" if:
- Every student placed at least 5 stakeholders before the debrief
- At least one student moved a card during class discussion and explained why
- Students can identify at least one stakeholder in the bottom-left (Affected + Harm) quadrant
- Students can articulate what that quadrant position implies for their Fairness Proposal
- No student needed more than 90 seconds of setup help to start dragging cards

---

*Tool Spec for OpenClaw Curriculum · Module 6: AI Ethics, Bias, and Accountability*  
*Questions or feedback? Submit an issue at github.com/clawdawg36-cpu/openclaw-curriculum*
