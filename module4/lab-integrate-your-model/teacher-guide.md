# Teacher Guide: [M4] Lab — Integrate Your Trained Model into OpenClaw

> **Who this is for:** Teachers, facilitators, and TAs running Module 4 of the OpenClaw curriculum.
> 
> This is the KEY lab of Module 4 — the moment where everything clicks. Students see the full ML pipeline in action: from the data they labeled to a live agent capability. Plan extra time and energy here.

---

## Lab at a Glance

| | Details |
|--|---------|
| **Duration** | 60–90 minutes (can split across 2 class periods) |
| **Pacing** | After Sentiment Classifier Lab + Bias Lab |
| **Group size** | Individual preferred; pairs acceptable |
| **Tech required** | OpenClaw installed, trained model from earlier lab, terminal access |
| **Skill level** | Intermediate — students have seen the skill structure before |

---

## Setup Checklist (Do This Before Class)

### 1. Verify Student Models Exist
Students should have a trained model from one of these paths:
- **ML4Kids** — they need their project ID and API key
- **Teachable Machine** — they need their hosted model URL
- **Hugging Face** — they need their model ID and an inference API token

**Common issue:** Students may not have saved their model credentials. Have a "model recovery" plan ready (see Contingency Plans below).

### 2. Pre-Test the API Calls
Run these curl commands yourself before class to make sure the APIs are up:

```bash
# ML4Kids — replace with a test account
curl -s "https://machinelearningforkids.co.uk/api/v1/projects" \
  -H "x-api-key: TEST_KEY"

# Hugging Face — test with a public model
curl -s "https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"inputs": "test"}'
```

### 3. Have the Skill Structure Ready
If students get stuck, have a working example skill they can reference:
- Show the structure: `skills/my-model/SKILL.md` + `scripts/classify.sh`
- Have a demo agent that has already integrated a simple model

### 4. 1Password Access
Students need 1Password set up if they're storing API keys there. Verify:
- Each student can run `op read 'op://...'`
- Alternatively, set up environment variables as a fallback (less secure but works for class)

### 5. Teachable Machine Dependencies (if applicable)
If students are using Teachable Machine (image/audio), they need Node.js packages:
```bash
npm install -g @teachablemachine/image @tensorflow/tfjs-node canvas node-fetch
```
**Pre-install these on lab machines** — the downloads are large and slow.

---

## Suggested Timing

| Phase | Time | What Students Are Doing |
|-------|------|------------------------|
| Intro + worksheet | 10 min | Fill out `integration-worksheet.md` before touching code |
| Find model endpoint | 10–15 min | Locate credentials, test curl command manually |
| Write skill | 15–20 min | Scaffold SKILL.md + classify script |
| First test | 10 min | Run script, then ask agent |
| Comparison activity | 10 min | Same input → their model vs Claude |
| Reflection + debrief | 10–15 min | Discussion, worksheet completion, through-line |

**Tip:** Students will spend more time on the endpoint/credentials step than you expect. Budget generously.

---

## Common Errors by Tool

### 🟦 ML4Kids Errors

| Error | Cause | Fix |
|-------|-------|-----|
| `{"error":"No api key"}` | API key not passed in header | Verify `x-api-key` header spelling — it's case-sensitive |
| `{"error":"Not Found"}` | Wrong project ID | Student used the wrong project — they may have multiple |
| `401 Unauthorized` | Key expired or wrong | Regenerate key in ML4Kids dashboard |
| `404 on /classify` | Wrong URL format | URL must end with `/classify` exactly as shown |
| Empty array `[]` | Model not trained yet | The model training step was incomplete or the model needs more examples |
| Model returns wrong class | Imbalanced training data | Ask: "How many examples did you label per class?" — should be roughly equal |

**ML4Kids-specific gotcha:** The training happens in the browser but the API uses a different base. Students sometimes confuse the "test" interface with the actual API endpoint.

### 🟩 Teachable Machine Errors

| Error | Cause | Fix |
|-------|-------|-----|
| Model URL 404 | Model was deleted or not published | Re-export and re-upload in Teachable Machine |
| `Cannot find module '@teachablemachine/image'` | npm packages not installed | `npm install @teachablemachine/image` |
| TF.js memory errors | Too many model loads | Restart Node process; dispose model after use |
| Wrong predictions on images | Image preprocessing mismatch | TM expects 224×224 pixels; use Canvas to resize |
| Audio model not working | Browser-only API | Audio models require special handling — redirect to image or text model for this lab |

**Teachable Machine-specific gotcha:** Audio models from Teachable Machine are very hard to use outside the browser. If a student trained an audio model, redirect them to the image or text path for this lab specifically, or help them retrain a simpler model.

### 🟨 Hugging Face Errors

| Error | Cause | Fix |
|-------|-------|-----|
| `{"error":"Authorization header is invalid"}` | Wrong token format | Must be `Bearer <token>`, not just the token |
| `{"error":"Model ... is currently loading"}` | Cold start (free tier) | Wait 20–30 seconds and retry — HF spins down inactive models |
| `503 Service Unavailable` | Model loading | Same as above — just retry |
| `{"error":"Input validation error"}` | Wrong request format | Check the model card on HF for correct input schema |
| Rate limit (429) | Too many requests | Free tier has limits — stagger student requests or use one shared test account |
| Private model + wrong permissions | Model is private | Ensure students push to a public repo, or share the token with correct permissions |

**Hugging Face-specific gotcha:** The free Inference API cold-starts models after inactivity. Students will hit this and think something is broken. Teach them to retry once after ~30 seconds.

---

## Scaffolding Guidance

### For Students Who Are Stuck

**"I can't find my model credentials"**
→ Walk them to their original training tool. ML4Kids: dashboard → project → API. Teachable Machine: share URL. HF: model repo page.
→ Contingency: have a shared "class model" they can use temporarily to complete the integration.

**"My curl command isn't working"**
→ First: check for copy-paste issues (smart quotes, extra spaces)
→ Second: test with a simpler endpoint (`curl -s https://httpbin.org/get`)
→ Third: check network (are they on the school WiFi? ML4Kids may be blocked)

**"My script runs but gives weird output"**
→ Run the curl separately and look at the raw JSON first
→ Then add the `| jq` filter
→ Isolate each problem independently

**"The agent isn't using my skill"**
→ Check if `SKILL.md` is in the correct location
→ Check if the description clearly states when to use it
→ Try a more explicit trigger phrase

**"My model gives the same answer for everything"**
→ This is a real ML problem! Use it as a teaching moment
→ Likely cause: imbalanced training data or too few examples
→ Discuss: "What would you add to fix this?"

### For Students Moving Fast

**Extensions to offer:**
- Add confidence threshold: "Only report the label if confidence > 70%, otherwise say 'I'm not sure'"
- Chain models: run their model AND Claude, then have the agent compare both
- Build a mini benchmark: test 10 inputs, score each model, pick a winner
- Write a `retrain.md` document: if they could add 50 more examples, what would they add?

---

## Classroom Discussion: Debrief

Use these questions to drive the closing discussion (10–15 minutes):

**On performance:**
- "Who found their model was *better* than Claude at something? What was it?"
- "Who found their model was *worse*? Why do you think that happened?"

**On data:**
- "How many training examples did you use? How many does Claude have?"
- "If you could add 100 more examples to your model right now, what would they be?"

**On the pipeline:**
- "Walk me through what happens from the moment you speak to your agent to the moment it gives you an answer using your model."
- "Where could something go wrong in that pipeline?"

**Through-line connection:**
- "Raise your hand if your agent can do something no other agent in this room can do."
- Have students complete the sentence: *"I gave my agent a capability no other agent has — because I trained it to _______________."*

---

## Contingency Plans

### "I don't have a trained model"
If a student didn't complete the earlier training labs:
1. They can use a public Hugging Face model (not *their* model, but they can still practice integration)
2. Or they can use the ML4Kids demo project that's publicly available
3. Note: this student should complete the training lab as homework

### "The APIs are down / blocked on school network"
1. Pre-download a simple model and run it locally (scikit-learn + pickle, 10 lines of Python)
2. Or use a mock endpoint: `https://httpbin.org/post` — returns the input as JSON, students can see the round-trip
3. The worksheet + reflection can still be completed even without live API access

### "Teachable Machine models are complex to integrate"
Teachable Machine requires Node.js + specific npm packages. If this is too complex for your setup:
- Redirect image-model students to describe the integration conceptually on the worksheet
- Or have them export to TensorFlow Lite and describe how they'd integrate it hypothetically
- The ML4Kids or HF paths are more straightforward for terminal-based integration

---

## Assessment Rubric

| Skill | 4 (Exceeds) | 3 (Meets) | 2 (Approaching) | 1 (Beginning) |
|-------|-------------|-----------|-----------------|----------------|
| **Model access** | Independently found and tested endpoint before writing skill | Found endpoint with minor guidance | Found endpoint with significant help | Could not locate endpoint |
| **Skill creation** | Skill has clear description, examples, and handles errors | Skill is complete and functional | Skill functions but lacks description | Skill incomplete |
| **Testing** | Tested 5+ inputs, documented results | Tested 3 inputs as required | Tested 1–2 inputs | No documented testing |
| **Comparison** | Insightful analysis of model differences with specific examples | Compared models and noted differences | Compared models but analysis is vague | No comparison attempted |
| **Reflection** | Concrete, specific ideas for improvement grounded in evidence | Clear reflection with some specifics | Generic reflection ("add more data") | No reflection |

---

## Key Vocabulary (for board/display)

- **Training** → Teaching a model using examples you labeled
- **Inference** → Using a trained model on new data
- **Endpoint** → The URL your agent calls to get a prediction
- **Confidence** → How sure the model is (0–100%)
- **API key** → A secret that proves your code is allowed to use a service
- **Overfitting** → Memorized training data, can't handle new examples
- **The full pipeline** → Collect → Label → Train → Deploy → Integrate

---

## Notes for Next Year

_[Space for teachers to add their own notes after running this lab]_

_______________________________________________
_______________________________________________
_______________________________________________
_______________________________________________

---

*Module 4 · OpenClaw Curriculum · Teacher Edition*
