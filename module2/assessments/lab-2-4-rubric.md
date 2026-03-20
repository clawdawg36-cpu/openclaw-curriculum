# Lab 2.4 Rubric — Connect Your Agent to a Hugging Face Vision Model

**Module 2 — Lab 2.4 Assessment**
**Project:** Deploy an OpenClaw skill that calls a Hugging Face vision model and document your results.

**Total Points:** 20 (5 criteria × 4 points each)

---

## Scoring Guide

### 4 — Exceeds Expectations
Work goes beyond the requirements. Shows deep understanding, strong connections, and independent thinking.

### 3 — Meets Expectations
Work fully addresses the requirements with clear understanding. Minor gaps don't affect the overall quality.

### 2 — Approaching Expectations
Work partially addresses the requirements. Some understanding present but key gaps or errors remain.

### 1 — Beginning
Work is incomplete or shows significant misunderstanding. Major gaps in content or execution.

---

## Criterion 1: Skill Deployment

| Score | Descriptor |
|-------|-----------|
| **4** | Skill is deployed, callable, and responds correctly to the agent. Student can demonstrate calling the skill live, explains the deployment steps taken, and can describe what would happen if the skill were missing or misconfigured. |
| **3** | Skill is deployed and callable. Student can invoke it successfully and show a response from the agent. Minor issues (e.g., error handling gaps) don't prevent basic functionality. |
| **2** | Skill is partially deployed — may be registered but not callable, or callable with inconsistent results. Student needed significant help to get it working. |
| **1** | Skill is not deployed or not callable. Student cannot demonstrate a working invocation. |

---

## Criterion 2: Vision Model Response

| Score | Descriptor |
|-------|-----------|
| **4** | Vision model returns a response reliably. Student demonstrates the full round-trip: image in → model processes → response returned to agent. Can explain the role of the Hugging Face Inference API in this flow and what the raw API response looks like. |
| **3** | Vision model returns a response for at least one image. Student can show the model output and understands that the agent is calling an external API. Response is correctly passed back through the skill. |
| **2** | Vision model returns a response in some cases but the integration is fragile or incomplete. Student may have hardcoded values or is unsure why it works in some cases and not others. |
| **1** | Vision model does not return a response, or the response is not reaching the agent. Integration is non-functional. |

---

## Criterion 3: Explanation of Skill Behavior

| Score | Descriptor |
|-------|-----------|
| **4** | Student clearly explains what the skill does, how it works end-to-end (agent call → skill logic → Hugging Face API → response parsing → returned result), and *why* each step is needed. Can answer follow-up questions about the code without looking at it. |
| **3** | Student can explain what the skill does and walk through the main steps. May need to reference their code for specific details but demonstrates genuine understanding of the flow. |
| **2** | Student can describe what the skill does at a high level ("it looks at images") but struggles to explain how it works. Limited understanding of the API call or how data flows through the skill. |
| **1** | Student cannot explain what the skill does or how it works. Explanation is absent, inaccurate, or entirely dependent on reading back comments from the code. |

---

## Criterion 4: Testing with Multiple Images

| Score | Descriptor |
|-------|-----------|
| **4** | Student tested with 5 or more images and documented results for each (image description, model output, and whether the result was accurate/surprising). Notes patterns across images (e.g., "it was more confident with clear backgrounds"). |
| **3** | Student tested with at least 3 images and documented the results. Notes which images produced better or worse results. Documentation is clear enough that someone else could reproduce the test. |
| **2** | Student tested with fewer than 3 images, or tested 3 but documentation is sparse (e.g., only noted "it worked"). Results are not clearly tied to specific inputs. |
| **1** | Student tested with 1 or no images, or did not document results. Testing was not systematic. |

---

## Criterion 5: Failure Mode Identification

| Score | Descriptor |
|-------|-----------|
| **4** | Student identified 2 or more failure modes with specific examples (e.g., "the model returned an error when the image URL was not publicly accessible" or "confidence was low on blurry images"). Proposes a concrete fix or workaround for at least one. |
| **3** | Student identified at least one failure mode with a specific example. Shows understanding that failures are informative — describes what went wrong and offers a reasonable hypothesis for why. |
| **2** | Student acknowledges that something didn't work but is vague about what the failure was or why it happened. No concrete example or hypothesis. |
| **1** | Student did not identify any failure modes, or claims the skill never failed without evidence of stress-testing. |

---

## Scoring Summary

| Criterion | Points Possible | Points Earned |
|-----------|----------------|---------------|
| 1. Skill Deployment | 4 | |
| 2. Vision Model Response | 4 | |
| 3. Explanation of Skill Behavior | 4 | |
| 4. Testing with Multiple Images | 4 | |
| 5. Failure Mode Identification | 4 | |
| **Total** | **20** | |

**Grade conversion (optional):**
- 18–20: A
- 14–17: B
- 10–13: C
- 6–9: D
- 0–5: Incomplete / Redo

---

## Lab Checklist (for students)

Before turning in Lab 2.4, make sure you can answer yes to each of these:

- [ ] My skill is registered and my agent can call it by name
- [ ] I can show my agent receiving a vision model response for a real image
- [ ] I can explain (without reading the code aloud) what happens when the skill is called
- [ ] I tested with at least 3 different images and wrote down what the model returned
- [ ] I found at least one case where the model failed or gave a weird result — and I can describe it

*Include screenshots of at least one successful response and one failure case.*

---

*Rubric aligned with Module 2 Lab 2.4 learning objectives. Designed for grades 5–8.*
