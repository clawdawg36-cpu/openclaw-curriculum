# Case Studies: When Reasoning AI Hurts People

**Lesson 3.5 — Limits of Reasoning AI + Ethics Bridge**

---

> **How to use this document:**
> In groups of 3, each group reads ONE case study closely. Prepare a 60-second summary for the class covering: what the AI decided, who was harmed, what caused the problem, and who should be responsible.

---

## Case Study 1: COMPAS — Predicting Who Will Commit a Crime

### What Is COMPAS?

COMPAS (Correctional Offender Management Profiling for Alternative Sanctions) is a risk-scoring algorithm used by courts across the United States. When someone is convicted of a crime, COMPAS generates a "recidivism risk score" — a number predicting how likely they are to commit another crime. Judges can use this score when deciding:

- Whether to grant bail
- How long a prison sentence to give
- Whether someone qualifies for parole

COMPAS was built by a private company (Equivant, formerly Northpointe). The algorithm is **proprietary** — meaning no one outside the company can see exactly how it works.

### What Went Wrong?

In 2016, the investigative news organization **ProPublica** analyzed COMPAS scores for more than 7,000 people arrested in Broward County, Florida. They compared the predictions to what actually happened two years later.

**Key findings:**

- **Black defendants were nearly twice as likely as white defendants to be falsely flagged as "high risk"** — meaning the algorithm predicted they would reoffend when they did not.
- **White defendants who did reoffend were more likely to have been labeled "low risk"** — the algorithm under-predicted their future crimes.
- Two people with nearly identical criminal histories and circumstances received dramatically different scores based largely on factors correlated with race (like neighborhood, family background, employment).

**Real example from the ProPublica report:**
- **Brisha Borden**, a Black 18-year-old, was arrested for riding a stolen bike. COMPAS scored her as **high risk**. She did not reoffend.
- **Vernon Prater**, a white 41-year-old with prior felony convictions, was scored **low risk**. He later committed additional crimes.

### Why Did This Happen?

COMPAS doesn't use race as an input. But it uses dozens of other factors — neighborhood, employment, family history — that closely correlate with race due to systemic inequalities in the U.S. (housing discrimination, unequal policing, economic segregation). The algorithm learned from historical criminal justice data, which itself reflects decades of racially unequal enforcement.

This is the **proxy variable** problem in action: the algorithm didn't ask "what race is this person?" — but the variables it used answered that question anyway.

### The Black Box Problem

Because COMPAS is proprietary, **defendants cannot see how their score was calculated**. Courts in multiple states upheld the use of COMPAS scores even when defendants argued they had a constitutional right to know how the decision was made.

In *State v. Loomis* (Wisconsin, 2016), the state Supreme Court ruled that COMPAS could be used in sentencing as long as it wasn't the *only* factor. The court acknowledged the proprietary nature but said judges weren't *required* to follow the score.

### Discussion Questions

1. COMPAS doesn't use race as an input. Does that make it fair? Why or why not?
2. Should a defendant have the right to know how their risk score was calculated? What would that require?
3. Who is responsible if COMPAS gives someone an unfairly high score that affects their sentencing — the company that built it, the judge who used it, or both?
4. If you were designing a replacement for COMPAS, what variables would you refuse to include? How would you test for fairness?
5. **Connection to your work:** Imagine your skill recommended something about a person. How would they know if the recommendation was unfair?

---

## Case Study 2: Amazon's AI Hiring Screener

### What Is an Automated Resume Screener?

Many large companies receive thousands of job applications for a single position. To handle the volume, companies use **automated resume screening tools** — AI systems that scan resumes and rank candidates before any human reads them. These tools look for keywords, patterns, and features that historically predicted job success, then score and rank applicants automatically.

### What Amazon Built

Around 2014, Amazon began building a machine learning tool to automate resume screening for software engineering and technical roles. The system was trained on resumes submitted to Amazon over a 10-year period, along with data about which candidates were ultimately hired.

By 2015, the team discovered a serious problem. **The model was systematically downgrading resumes from women.**

### What Went Wrong?

The AI had learned from 10 years of hiring decisions at Amazon. During that time, the tech industry hired significantly more men than women. The model learned that:

- Resumes that included the word **"women's"** (as in "women's chess club" or "women's coding initiative") were associated with *less likely to be hired*.
- Graduates of **all-women's colleges** were scored lower.
- Certain writing patterns more common in women's resumes were penalized.

The AI wasn't told to discriminate against women. It simply learned that "people who were hired in the past" looked a certain way — and women were underrepresented in that group.

### What Amazon Did

Amazon's engineers tried to fix the model by removing gender-specific language and penalizing those variables explicitly. But the model kept finding new proxies — other features correlated with gender that the team hadn't anticipated.

By 2017, Amazon **shut the project down** and stopped using the tool. A Reuters investigation in 2018 revealed the story publicly.

Amazon said the tool was never used to make actual hiring decisions. But it illustrates how quickly a seemingly objective AI can encode and amplify existing inequalities.

### The Broader Problem

Amazon's tool is not unique. A 2019 survey by the Society for Human Resource Management found that **83% of employers** use some form of AI or automation in their hiring process. Tools like HireVue (video interview analysis) and Pymetrics (game-based assessments) are widely used — and critics argue they replicate similar biases.

In 2020, Illinois passed the **Artificial Intelligence Video Interview Act**, requiring employers to notify candidates when AI is used to evaluate video interviews and to report demographic data on who is filtered out.

### Discussion Questions

1. Amazon's AI wasn't *told* to penalize women — it *learned* to. Does that make the discrimination less wrong? Less illegal?
2. Should companies be required to disclose when AI is used in hiring decisions? What information should candidates receive?
3. Amazon stopped using the tool when they found the bias. Is that enough? What else might they owe to people who were already screened out?
4. The AI found "proxy variables" for gender even after engineers tried to remove direct gender signals. Why is this hard to fix?
5. **Connection to your work:** What proxies might exist in the data or rules your skill uses? How would you check?

---

## Case Study 3: Credit Scoring and the Black Box Loan Denial

### How Credit Scoring Works (Traditionally)

The traditional FICO credit score uses a small number of known factors: payment history, credit utilization, length of credit history, new credit inquiries, and credit mix. It's not perfect, but it's at least transparent — you can look up exactly how FICO scores are calculated.

### The New AI-Powered Credit Systems

In the 2010s, fintech companies began building AI-powered alternatives that claimed to make better lending decisions by using far more data. Companies like Upstart, ZestFinance, and others trained models on hundreds or thousands of variables — not just traditional credit data, but things like:

- What time of day you fill out a loan application
- Whether you type in all-caps
- Your education level and school attended
- Your browsing behavior
- How long you spent reading the terms and conditions

The pitch was: "Traditional credit scoring excludes people unfairly. Our AI is smarter and more accurate." And in some ways, this was true — people with thin credit files who were previously denied loans did get access to credit.

### What Went Wrong?

**Problem 1: Hidden discrimination through proxies**

Many of the new variables turned out to be correlated with race and socioeconomic background in ways the companies didn't anticipate (or didn't check for):
- "What school did you attend?" → correlates with race, family wealth
- "What time of day do you apply?" → correlates with employment type (shift workers apply at different times)
- Education level → strongly correlated with income and race

In 2020, the **Consumer Financial Protection Bureau (CFPB)** found that some AI lending models were producing racially disparate outcomes even when they didn't explicitly use race as an input.

**Problem 2: No explanation for denial**

The Equal Credit Opportunity Act (ECOA) requires lenders to give "specific reasons" when they deny a loan. With a traditional model, you could say: "Your application was denied because your debt-to-income ratio is too high."

With a complex AI model using hundreds of variables, the reason often becomes: "The algorithm scored you as high risk." This isn't a specific reason — and consumers have no way to know what to fix or whether the decision was fair.

**Problem 3: No recourse**

A 2022 case in Illinois: A borrower was denied a mortgage refinance. She believed the AI had discriminated against her based on race. But without knowing what the model weighted, she couldn't prove it — or even understand what had happened.

This is the **accountability gap**: harmful AI decisions + no transparency = no ability to seek remedy.

### The Regulatory Response

- **2023:** The CFPB issued guidance that AI models must be able to provide specific, actionable reasons for adverse credit decisions — not just "the model said so."
- **2023:** The Biden Administration's AI executive order required new standards for AI in credit and housing.
- Several states have introduced legislation requiring AI audits in financial services.

### Discussion Questions

1. If an AI model makes better lending decisions overall (approves more people who actually repay) but still produces racially disparate outcomes — is it acceptable to use?
2. Should borrowers have the right to an explanation they can actually understand? What would that require technically?
3. A human loan officer who discriminates can be trained, fired, or sued. What's the equivalent accountability mechanism for an AI model?
4. "Using more data makes AI fairer" — do you agree? What does this case study suggest?
5. **Connection to your work:** Does your skill produce outputs that affect people? What would someone need to know to challenge a decision your skill made?

---

## Cross-Case Synthesis Questions

After the jigsaw share-out, consider these questions as a class:

1. All three cases involve AI that wasn't *explicitly* programmed to discriminate. What does that tell us about intent vs. impact?
2. In all three cases, the people harmed were often from already-marginalized groups. Why might AI systems amplify existing inequalities rather than reduce them?
3. Who has the power to fix these systems? Who has the incentive?
4. What would "fair" actually mean in each case? Is "fair" the same thing as "accurate"?
