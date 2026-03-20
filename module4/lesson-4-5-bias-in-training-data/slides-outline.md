# Slides Outline — Lesson 4.5: Bias in Training Data

**Format:** Markdown-based slide-by-slide outline  
**Total Slides:** ~16  
**Presenter Notes** are included in *italics* under each slide.

---

## Slide 1 — Title Slide

**Title:** Bias in Training Data  
**Subtitle:** Module 4, Lesson 4.5 | When the Data Reflects the World's Problems  
**Visual:** A tilted scale with data on one side and a person on the other  

*Presenter: "We've spent four lessons building models. Today we ask: what if the way you build a model causes harm to real people?"*

---

## Slide 2 — Opening Provocation

**Heading:** True or False?

**Body (large text):**

> "Algorithms don't have feelings.  
> They can't be racist or sexist.  
> They're just math."

**Your reaction?** Write 2–3 sentences. You have 2 minutes.

*Presenter: After writing time, cold-call 3–4 responses. Range of views is fine — the point is to surface prior beliefs before instruction. Don't correct yet.*

---

## Slide 3 — What's Missing From That Statement

**Heading:** The Statement Is Wrong — But Specifically Wrong

**Body:**

**True part:** Algorithms themselves don't have feelings.

**Missing part:**
- Training data was *created by humans*
- Humans have biases, blind spots, and historical patterns
- When you train a model on biased data, you train in the bias
- The model then makes decisions at scale — affecting millions of people

**A better statement:**
> "Algorithms reflect the biases in the data they were trained on — at massive scale."

*Presenter: "The algorithm doesn't choose to be biased. But it doesn't have to choose — it inherits it."*

---

## Slide 4 — Three Pathways for Bias

**Heading:** How Bias Gets Into a Model

**Body:**

**1. 🔵 Representation Bias**
Training data doesn't equally represent all relevant groups
→ Model performs differently for underrepresented groups

**2. 🟡 Measurement Bias**
Data collection or labeling systematically disadvantages certain groups
→ Hidden bias in "neutral-looking" features

**3. 🔴 Feedback Loop Bias**
Biased model shapes the world → new data reflects that shaped world → model is retrained, amplifying original bias
→ Bias gets worse over time

*Presenter: "We'll see all three of these in the case studies. As I describe each one, think: where have I seen this before?"*

---

## Slide 5 — Representation Bias: Face Recognition

**Heading:** Case Study — The Face That Wasn't Detected

**Body:**

**Joy Buolamwini, MIT Media Lab (2018)**

- As a student, Buolamwini noticed facial analysis software didn't detect her face
- When she put on a white mask: it worked
- She studied three major commercial facial analysis systems

**Gender Shades Findings:**
- All three systems had significantly higher error rates for darker-skinned women
- Accuracy gap: up to **34 percentage points** between lighter-skinned men and darker-skinned women
- Root cause: Training datasets heavily dominated by lighter-skinned male faces

*Presenter: "34 percentage points isn't a rounding error. This is a system that barely works for one group and works well for another. Deployed at airports, police departments, hiring tools."*

---

## Slide 6 — Gender Shades: Why It Happened

**Heading:** Why Nobody Caught It

**Body:**

**Training data makeup:**
- Standard datasets (like LFW — Labeled Faces in the Wild) were majority white, majority male
- Engineers tested primarily on similar demographics
- Overall accuracy looked fine: ~90%+ on the dominant group masked poor performance on minority groups

**Who didn't notice:**
- The engineers (weren't in the affected group)
- The companies (didn't test across demographic subgroups)
- The regulators (no requirements to test for demographic disparities)

**Who did notice:**
- People whose faces weren't recognized
- Joy Buolamwini, who ran the study

*Presenter: "Ask: If the engineers had included more people from affected communities in testing, would they have caught this? Almost certainly yes. Diversity in teams and in testing is a safety feature."*

---

## Slide 7 — Case Study B: Pulse Oximeters

**Heading:** When Medical Hardware Has Bias

**Body:**

**The device:** Pulse oximeter — clips on your finger, measures blood oxygen level
**The method:** Uses light (wavelengths absorbed differently by oxygenated/non-oxygenated blood)
**Approved by:** FDA, based on clinical validation studies

**The problem (NEJM, 2020):**
- Validation studies were conducted primarily on light-skinned patients
- The device systematically *overestimated* oxygen levels in patients with darker skin tones
- During COVID-19: patients were sent home when their oxygen was actually dangerously low

**Why it matters:**
- This isn't a software model — it's hardware. Bias in validation data affects hardware too.
- Real patients were harmed.

*Presenter: "This is intentionally not a software example. Bias in 'training data' — in this case, clinical validation data — can affect any system that learns from human-collected data."*

---

## Slide 8 — The Feedback Loop

**Heading:** When Bias Compounds Itself

**Body:**

**Scenario: Predictive Policing**

1. Model predicts higher crime risk in Neighborhood A → Police send more officers there
2. More officers → More arrests in Neighborhood A (even if actual crime is similar to Neighborhood B)
3. More arrest data from Neighborhood A → Retraining confirms "more crime there"
4. Next model sends even more officers to Neighborhood A
5. 🔄 Repeat — bias amplifies over time

**Visual:** Circular arrow diagram showing the feedback loop

**Key insight:** The model isn't measuring crime — it's measuring police presence. But it's labeled as measuring crime.

*Presenter: "This is measurement bias AND feedback loop bias together. The model looks objective — it's based on data. But the data itself is a product of the biased deployment."*

---

## Slide 9 — Activity: Bias Audit

**Heading:** 🔍 Your Turn: Audit This Dataset

**Body:**

**Scenario:** A team is building a job recommendation AI.

**Training data:**
- 500,000 "successful" job applications (got the job) from a large Silicon Valley tech company over 10 years
- Features: resume text, years of experience, university name, GPA, job titles

**Audit questions (with a partner):**
1. **Representation bias:** Who is likely underrepresented in "successful" applications from this company?
2. **Measurement bias:** Any features that might be proxies for race, gender, or class?
3. **Feedback loop:** If this model screens new applicants, what happens to future training data?
4. **Your recommendation:** What changes would you require before training?

*Presenter: Give 6–7 minutes for pair work, then debrief. Listen for: gender gap in tech (Representation), university name = family wealth proxy (Measurement), system perpetuates the hiring patterns it was trained on (Feedback loop).*

---

## Slide 10 — Bias Audit Debrief

**Heading:** What the Audit Found

**Body:**

**Representation bias:**
- Tech has historically hired fewer women, people of color, people without elite university degrees
- Training on 10 years of "successful" hires = training on historical discrimination patterns

**Measurement bias:**
- University name correlates strongly with family wealth and geography
- Job titles are gendered (e.g., "administrative assistant" vs. "engineer")
- These features carry bias even though they look neutral

**Feedback loop:**
- Model screens for people who look like past hires
- People who don't fit that mold never get interviews
- Over time: company becomes MORE homogeneous, not less

**Real case:** Amazon built and then scrapped a similar hiring AI for exactly these reasons (2018).

*Presenter: "Amazon spent years building this. Then realized it was systematically downranking resumes that included the word 'women's' (as in 'women's chess club'). They tried to fix it. Couldn't. Discontinued the project."*

---

## Slide 11 — The "Neutrality" Myth

**Heading:** Why "It's Just Math" Doesn't Hold

**Body:**

Every ML system involves human choices:
- **What data to collect** — Who did we include? Who did we leave out?
- **What to label as "success"** — Who defined what counts as a good outcome?
- **What features to use** — What proxies did we allow?
- **What accuracy to accept** — Whose accuracy matters?
- **Where to deploy** — Who will be affected?

**Every one of these is a values decision, not a math decision.**

*Presenter: "Math executes the choices. Humans make the choices. The math doesn't make the system neutral — it makes the choices harder to see and argue with."*

---

## Slide 12 — Who Is Responsible?

**Heading:** Responsibility Is Distributed — But Not Equal

**Body:**

| Stakeholder | When they could intervene |
|-------------|--------------------------|
| Engineers | During design and data collection |
| Product teams | During requirements and testing |
| Companies | During deployment decisions |
| Regulators | Pre-deployment audits, post-deployment enforcement |
| Users | By demanding transparency, reporting harm |
| Courts | After harm occurs |

**Discussion:** Who has the MOST power to prevent harm? Who has the most responsibility?

*Presenter: "This is a genuine debate — don't give a definitive answer. But lean into: the people closest to the system, with the most technical power to change it, bear the most responsibility."*

---

## Slide 13 — What Good Looks Like

**Heading:** Building More Fair Systems

**Body:**

**Practices that help:**
- ✅ Diverse teams — different perspectives catch different blind spots
- ✅ Demographic testing — evaluate model performance per subgroup, not just overall
- ✅ Bias audits before deployment — structured evaluation of data and model
- ✅ Ongoing monitoring — track real-world outcomes after deployment
- ✅ Affected community involvement — include impacted groups in design and testing

**Tools that exist:**
- IBM AI Fairness 360 — open-source bias detection toolkit
- Google's What-If Tool — explore model behavior across demographics
- Deon Ethics Checklist — pre-deployment ethics checklist for ML projects

*Presenter: "None of these are perfect. None fully solve the problem. But they're better than shipping and hoping."*

---

## Slide 14 — The Bigger Picture

**Heading:** Why This Matters Beyond Class

**Body:**

AI systems making decisions about humans are expanding in:
- 🏥 Medical diagnosis and treatment
- ⚖️ Criminal sentencing and parole (COMPAS)
- 💼 Hiring and HR screening
- 🏦 Credit and lending
- 🚔 Predictive policing
- 🎓 College admissions screening

**If these systems are biased, the harm is:**
- Scaled to millions of people
- Invisible (hidden in "the algorithm")
- Hard to challenge (black box)
- Self-reinforcing (feedback loops)

*Presenter: "You are the generation that will build, regulate, and live with these systems. Understanding bias isn't optional — it's a civic skill."*

---

## Slide 15 — Joy Buolamwini Quote

**Heading:** One Person Can Change Things

**Body (large quote):**

> "The Algorithmic Justice League is working to ensure that AI is fair, accountable, and transparent — and that those harmed by AI systems have a voice."  
> — Joy Buolamwini

**What she did:**
- Ran the study as a grad student
- Published findings publicly
- Testified before Congress
- Founded the Algorithmic Justice League
- Major companies updated their systems

**Message to students:** *"You don't have to be a CEO or a regulator. You have to be curious, rigorous, and willing to say something when you see a problem."*

*Presenter: "One grad student changed policy at three major tech companies. What could a class full of people like you do?"*

---

## Slide 16 — Exit Ticket

**Heading:** Before You Go

**Body:**

> 1. Define bias in training data in your own words.
> 2. Name the three types of bias. Give one example of each.
> 3. Why is "the algorithm is neutral" an incomplete statement?
> 4. What's one thing you think should happen — technically, socially, or legally — to address AI bias?

*Presenter: "Question 4 has no right answer. I want your position, with a reason."*

---

*End of slide deck — Lesson 4.5*
