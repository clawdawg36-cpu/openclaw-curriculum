# Interactive ML Training Simulator
**Module 4 — Drag-and-Drop Training Data Simulator**

## Overview
A fully self-contained HTML5 interactive that simulates the three-phase machine learning pipeline:

1. **Label Data** — Students assign category labels to 16 emoji items (animals, vehicles, food, plants)
2. **Train Model** — Animated training simulation shows epochs, accuracy growth, and loss curve
3. **Test Model** — Model is applied to 8 unseen test items with confidence scores and correct/wrong feedback

## Features
- ✅ Mobile & Chromebook compatible (responsive CSS, touch-friendly)
- ✅ No dependencies — single HTML file, no npm required
- ✅ Works offline
- ✅ Simulated accuracy reflects label quality (correct labels → higher accuracy)
- ✅ Animated epoch progress, real-time log output, accuracy chart
- ✅ Results summary with pedagogical feedback

## Learning Objectives
By completing this activity, students will:
- Understand the role of labeled training data
- Experience the iterative nature of model training (epochs, loss, accuracy)
- See how test accuracy differs from training accuracy
- Observe the effect of label quality on model performance

## Deployment
Drop `index.html` on any static file server, LMS (Google Classroom, Canvas), or open directly in browser.

## Customization
Edit the `TRAINING_DATA` and `TEST_DATA` arrays in the `<script>` block to change items/categories.
