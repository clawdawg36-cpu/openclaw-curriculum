# Chapter 11: Algorithmic Bias — When AI Is Unfair

> **Module 6 | Companion Textbook**
> *Grades 6–8 | OpenClaw AI Literacy Curriculum*

---

[ILLUSTRATION: A scale of justice. On one side: a stack of documents labeled "Training Data." On the other side: a silhouette of a person. The scale is tipped toward the data side. A magnifying glass hovers nearby, and a group of diverse students stands behind it, looking closely at what the scale is doing.]

---

## Opening Story: The Code That Decided Marcus's Future

Marcus was seventeen and nervous. He'd made a mistake — a bad one — and found himself in a courtroom. The judge looked at a printout in front of her.

"Your risk score is 7 out of 10," she said.

Marcus didn't understand what that meant. The judge was talking about a computer program — a piece of software that had analyzed information about Marcus and spit out a number. That number was supposed to predict how likely Marcus was to commit another crime.

Marcus had never hurt anyone. He had good grades. He wanted to be an engineer. But the algorithm — based on factors it had learned from decades of past data — had rated him "high risk."

The computer didn't know Marcus's dreams. It didn't know his teachers liked him, or that his sister was counting on him to go to college. It just crunched numbers and produced a score.

What the algorithm *did* know — without ever being told directly — was things about Marcus's neighborhood, his family history, and other details that correlated, in the historical data it was trained on, with people who had gone on to reoffend.

Was that fair? Was the algorithm right? Was it wrong?

Those questions don't have easy answers. But every person who lives in a world where AI makes decisions about people needs to be able to ask them.

This chapter is about bias in AI systems — what it is, how it gets in, and what we can do about it.

---

## Section 1: What Bias Means in AI — It's Not What You Think

When people hear the word "bias," they often think of prejudice — someone consciously treating people differently because of their race, gender, religion, or other identity. A biased person is one who has unfair opinions and lets those opinions affect their actions.

Bias in AI is related to that — but it's different in important ways.

> ### 📖 Key Concept: Algorithmic Bias
>
> **Algorithmic bias** happens when a computer system produces results that are systematically unfair to certain groups of people — consistently giving them worse outcomes, fewer opportunities, or less accurate treatment.
>
> Crucially, this can happen *without anyone intending it.* The engineers who built the system might have been trying their best to be fair. The AI itself has no intentions or feelings. But the *result* is still biased.

Think of it this way: a scale can be biased — it might consistently show numbers that are slightly too high for heavier objects — without anyone *wanting* it to be inaccurate. The problem is in how the scale was built, or in the environment it operates in.

Algorithmic bias is like that. The problem isn't usually in someone's heart. It's in the data, the design, or the way the system gets used.

### Bias vs. Error: An Important Distinction

Here's something subtle but important: there's a difference between an AI that makes random errors and an AI that is systematically biased.

If an AI misidentified faces in photos and it messed up equally for everyone — sometimes getting a white face wrong, sometimes an Asian face wrong, sometimes a Black face wrong — that would be an error problem. Annoying, but not necessarily biased.

But if an AI misidentified Black faces *far more often* than white faces — if Black people had a 35% error rate while white people had a 1% error rate — that's bias. The errors aren't random. They fall consistently on one group.

This distinction matters because:
- Random errors can often be fixed by improving the algorithm overall
- Bias often requires going back to examine *what data the algorithm was trained on* and *what the system was designed to optimize*

### AI Has No Conscience

Here's the uncomfortable truth: AI does not care about fairness. It cannot. AI systems optimize for what they're told to optimize for — accuracy on a test set, engagement on a platform, efficiency in a process. Unless fairness is explicitly built in as a goal, the system has no reason to pursue it.

This is different from a human employee. If a human hiring manager started rejecting all applications from people with certain names, they might eventually notice, feel guilty, and adjust their behavior. An AI has no such internal corrective mechanism. It will keep doing what it was built to do, forever, unless a human changes it.

---

## Section 2: How Bias Gets In — The Three Paths

Bias doesn't appear in AI systems out of nowhere. It enters through specific mechanisms. Understanding these mechanisms is one of the most important things you can learn about AI.

### Path 1: Biased Training Data

Remember how AI systems learn? They learn from data — massive amounts of examples. A spam filter learns from millions of emails labeled "spam" or "not spam." A face recognition system learns from millions of photos labeled with identities. A hiring tool learns from thousands of résumés labeled with outcomes like "hired" or "rejected."

Here's the problem: **if the data reflects a biased world, the AI learns that bias.**

Imagine a company has hired mostly men for engineering jobs over the past 20 years. If an AI is trained on those hiring records, it learns that "people like the ones we hired in the past" are what successful engineers look like. It learns to prefer male applicants — not because anyone told it to, but because the historical data said men got hired and women didn't.

The AI didn't create the bias. It absorbed the bias that already existed in the real world and encoded it into mathematics.

[ILLUSTRATION: A timeline showing "Past Decisions" → "Data Collection" → "AI Training" → "AI Decisions." Each step shows a small tilt, like a conveyor belt that's slightly angled — the bias flows through the whole system.]

> ### 📖 Key Concept: Historical Bias
>
> **Historical bias** occurs when training data reflects past discrimination or inequality. The AI learns from history — and history wasn't always fair.
>
> Example: If police historically patrolled certain neighborhoods more heavily, crime data will show more arrests in those neighborhoods — not necessarily because more crime occurred there, but because more police were watching. An AI trained on that arrest data will "see" those neighborhoods as high-crime and recommend more policing there — creating a self-reinforcing loop.

### Path 2: Proxy Variables

Sometimes AI systems are explicitly told not to use certain information. A hiring AI might be programmed to ignore gender and race. A lending AI might be told to ignore ethnicity. Sounds like a solution, right?

Not always. The problem is **proxy variables** — features that seem neutral but correlate closely with the protected categories you excluded.

Examples of proxy variables:
- **ZIP code** → correlates with race and income due to historical housing segregation
- **Name** → studies show names that "sound" like certain ethnic groups get treated differently
- **Gap in employment history** → may disproportionately affect women who took time off for caregiving
- **Certain college majors or clubs** → may favor groups that historically had more access to those opportunities

When an AI uses a proxy variable, it effectively uses the information anyway — just with extra steps. The AI doesn't know it's doing this. It just finds the pattern that predicts the outcome, and if ZIP code predicts loan repayment because of the structural inequality built into housing history, the AI will use ZIP code.

> ### 🤔 Think About It
>
> If you remove "gender" from a hiring algorithm but keep "name," "college attended," and "gap in work history" — have you really removed gender bias?
>
> What about if you remove "race" but keep "ZIP code," "school district," and "type of sports played in high school"?
>
> This is the proxy variable problem. Truly removing bias is much harder than just removing the obvious categories.

### Path 3: Feedback Loops

Some AI systems are used to make decisions, and then those decisions generate new data that the AI trains on. This creates a **feedback loop** — and in a biased system, it creates a **bias amplification loop.**

Here's how it works:
1. AI predicts that certain people are higher risk
2. System acts on that prediction (more surveillance, fewer opportunities, stricter treatment)
3. Because those people are watched more closely, problems are found more often
4. That data gets added to the training set
5. Now the AI has even more "evidence" that those people are high risk
6. Repeat

The prediction becomes self-fulfilling. The bias doesn't just stay constant — it compounds over time.

> ### ⚠️ Real Example: Predictive Policing
>
> A police department uses an algorithm to predict where crime will occur. The algorithm is trained on past arrest data. It sends more police to neighborhoods that historically had more arrests.
>
> More police → more enforcement → more arrests in those neighborhoods.
>
> Now the new data shows *even more* crime in those neighborhoods.
>
> The algorithm recommends *even more* policing there.
>
> Meanwhile, in areas with fewer historical arrests — but perhaps similar actual crime rates — fewer police are sent, fewer crimes are officially recorded, and the algorithm "sees" those areas as safer.
>
> This is a feedback loop. The original pattern gets amplified, not corrected.

---

## Section 3: Three Case Studies

Reading about abstract concepts is one thing. Seeing how bias plays out in real systems, with real consequences for real people, is something else. Here are three case studies that made headlines.

### Case Study 1: COMPAS and the Criminal Justice System

**What was it?** COMPAS (Correctional Offender Management Profiling for Alternative Sanctions) was a risk assessment tool used in criminal courts across the United States. It produced a score from 1 to 10 predicting how likely a person was to commit another crime. Judges used these scores to make decisions about bail, sentencing, and parole.

**What went wrong?** In 2016, the news organization ProPublica published an investigation called "Machine Bias." Their analysis of COMPAS scores for over 7,000 people in Broward County, Florida found:

- Black defendants were nearly twice as likely as white defendants to be falsely labeled "high risk" — meaning the algorithm predicted they'd reoffend when they actually didn't.
- White defendants were more likely to be falsely labeled "low risk" — meaning the algorithm predicted they *wouldn't* reoffend when they actually did.

In other words, the errors weren't random. They fell disproportionately on Black defendants in the direction of *overestimating* their risk.

**Why did it happen?** COMPAS didn't use race directly. But it used factors like criminal history, zip code, and family members who had been incarcerated — all of which correlate with race in a society shaped by decades of racially unequal policing and prosecution.

**Why does it matter for you?** The tool was being used to help make decisions about people's *freedom.* Getting a 7 out of 10 could mean spending more time in jail before trial, or getting a longer sentence. The stakes couldn't be higher — and the people most affected by the errors were among the most vulnerable.

[ILLUSTRATION: A split image. Left: a young Black man in a courtroom, sitting at a table, looking at a judge. Right: a computer screen showing a bar graph and a risk score of 7. A dotted line connects them, suggesting the score influences the scene in the courtroom.]

> ### 📦 Callout: What the Company Said
>
> Northpointe, the company that made COMPAS, disputed ProPublica's findings. They argued that the tool was accurate — that when they measured "predictive parity" (whether the scores predicted future crime equally well for both groups), it performed consistently.
>
> ProPublica argued back: even if the scores predict equally well across groups, the error *types* were unequal. Black defendants faced more false positives (being called high risk when they weren't); white defendants faced more false negatives.
>
> This controversy is still unresolved in the academic community — and it reveals something important: **there are multiple ways to define "fair," and they can mathematically conflict with each other.** More on that later.

---

### Case Study 2: Amazon's Hiring Screener

**What was it?** Around 2014, Amazon built an internal AI tool to automatically screen job applicants. The idea was clever: train an AI on the résumés of successful Amazon employees and let it flag the most promising new candidates, saving recruiters time.

**What went wrong?** By 2018, Amazon had quietly shut the project down. Internal reports, later confirmed by journalists, revealed that the AI had developed a significant bias against women.

The tool had been trained on Amazon's historical hiring data — which, in tech, skewed heavily male. The AI learned the patterns in that data. It learned that certain words, phrases, and backgrounds correlated with getting hired at Amazon. And because men had been hired far more often than women, it learned to penalize résumés that included signals associated with women.

Specifically, the tool downgraded résumés that:
- Included the word "women's" (as in "women's chess club" or "women's engineering society")
- Came from all-female colleges

**Why does it matter?** This was a tool built by one of the most sophisticated technology companies in the world, with enormous resources and talented engineers. They were actively trying to improve their hiring. And they ended up building something that systematically worked against women — until they caught it.

The lesson isn't that Amazon engineers were sexist. The lesson is that **when you train AI on data from a biased world, you get biased AI** — even if that's the last thing you wanted.

> ### 🤔 Think About It
>
> What if Amazon hadn't found the bias? The tool might have been used for years, filtering out qualified women before human recruiters ever saw their résumés. The women would never have known why they didn't get interviews.
>
> How would you even find out an algorithm had treated you unfairly if no one told you the algorithm existed?

---

### Case Study 3: Facial Recognition and Who It Sees

**What was it?** Facial recognition technology is used in many settings — unlocking phones, identifying suspects in police investigations, verifying identity at airports, monitoring crowds. In 2018, MIT researcher Joy Buolamwini (herself a computer scientist who had encountered the problem firsthand) published a study called "Gender Shades." It systematically tested commercial facial recognition systems from Microsoft, IBM, and Face++.

**What went wrong?** Buolamwini found dramatic disparities in how well these systems worked for different groups:

- For white men: error rates as low as 0.8%
- For dark-skinned women: error rates as high as 34.7%

That's a 34-point difference. A system that is 99% accurate for one group and only 65% accurate for another isn't a neutral tool. It works well for some people and fails — badly — for others.

**Why did it happen?** Training data. The datasets used to train these facial recognition systems contained far more images of white male faces than of women, dark-skinned people, and especially dark-skinned women. The AI had simply seen far fewer examples of darker-skinned faces and therefore couldn't recognize them as reliably.

**Why does it matter?** By 2020, multiple Black men in the United States had been wrongly arrested based on facial recognition misidentification. One man, Robert Williams in Detroit, was arrested in front of his wife and daughters, taken to jail, and held for 30 hours — because a facial recognition system had matched a blurry surveillance photo to his driver's license photo. The algorithm was wrong. Human investigators trusted it anyway.

[ILLUSTRATION: A grid of faces being scanned by a computer. Green checkmarks appear over lighter-skinned faces; red question marks appear over darker-skinned faces. A caption reads: "The same technology. Different accuracy. Serious consequences."]

> ### 📦 Callout: Joy Buolamwini and the Algorithmic Justice League
>
> After publishing her research, Joy Buolamwini co-founded the **Algorithmic Justice League** — an organization dedicated to highlighting and challenging bias in AI systems. She later created a documentary film called *Coded Bias* (2020) that tells the story of facial recognition bias and the people fighting against it.
>
> The film is available on Netflix and is appropriate for middle school students. It's a powerful window into this issue.
>
> Buolamwini's story is also a reminder: it was a researcher and advocate who pushed this issue into public view. The companies building these tools hadn't made the disparities visible themselves.

---

## Section 4: What Is Fairness, Anyway?

After reading those case studies, you might think: "Okay, we just need to make AI *fair*. Problem solved."

If only it were that simple.

The truth is, **fairness is not a single, agreed-upon thing.** There are multiple ways to define it — and mathematically, some of them conflict with each other. You literally cannot always satisfy all the definitions of fairness at the same time. This is called the **impossibility of fairness**, and it's one of the most important and uncomfortable findings in AI ethics.

### Three Definitions of Fairness

Here are three real definitions that researchers and policymakers use:

**Definition 1: Demographic Parity (Equal Outcomes)**
The system should produce equal outcomes across groups. If 30% of white applicants get hired, then 30% of Black applicants should get hired too. If 20% of men get parole, then 20% of women should too.

**Definition 2: Predictive Parity (Equal Accuracy)**
The system should be equally accurate for all groups. If the algorithm predicts someone will reoffend and they have a 60% chance of reoffending — that 60% should hold equally for all racial groups.

**Definition 3: Equal False Positive Rates (Equal Error Rates)**
The system should be wrong in the same ways and at the same rates for all groups. If 10% of people who *won't* reoffend are falsely flagged as high risk, that 10% error rate should be the same for everyone.

Sounds like we should want all three of these, right?

Here's the catch: **a 2016 mathematical proof showed that you cannot satisfy Definitions 2 and 3 simultaneously unless the base rates — how often the thing you're predicting actually occurs — are the same for all groups.** In the real world, base rates often differ across groups, often because of historical inequalities. So you have to choose.

This is why the COMPAS controversy never fully resolved: ProPublica was measuring fairness by Definition 3. Northpointe was measuring it by Definition 2. Both were correct — by their own definitions. But they could not *both* be satisfied.

> ### 🤔 Which Fairness Would You Choose?
>
> Imagine you're designing a scholarship selection algorithm. Only 20 scholarships are available.
>
> - Applicant group A: 100 students, average score 85
> - Applicant group B: 100 students, average score 82
>
> If you select purely by score, Group A gets most scholarships. Is that fair?
> If you ensure equal numbers from each group, some lower-scoring Group A students lose to higher-scoring Group B students. Is that fair?
> If one group has historically been denied educational resources, is using scores alone the right metric at all?
>
> There's no mathematically "correct" answer here. These are value choices — which means they're human choices, not algorithm choices.

### Fairness Requires Human Decisions

This is one of the most important lessons in this chapter: **because there is no single definition of fairness, deciding what "fair AI" looks like is inherently a human, political, and ethical decision.**

You cannot outsource that choice to a computer. You can program a computer to optimize for one definition of fairness. But choosing *which definition* is a values question — and values are a human domain.

This means the people building AI systems have a responsibility to make those choices explicitly and to communicate them clearly. And it means the people affected by AI systems — including you — have a right to know what definition of fairness the system is using and why.

---

## Section 5: What You Can Do — Ask, Audit, Advocate

Okay, this is all pretty heavy. A reasonable reaction is: "I'm a middle schooler. What am I supposed to do about this?"

More than you might think.

### Ask Questions

The most powerful thing you can do is ask questions — about the AI systems that affect your life and the people around you.

Questions to ask:
- **What data was this trained on?** Where did it come from? Does that data represent everyone fairly?
- **What is this system optimizing for?** Speed? Profit? Accuracy for a specific group? Whose interests does that serve?
- **Who was harmed when this went wrong?** Were the costs of errors distributed equally? Or did errors fall harder on people who are already vulnerable?
- **Who built this?** What does their team look like? Whose perspectives are represented?
- **Is there an appeals process?** If the algorithm makes a mistake about me, can I challenge it? How?

You don't need to be an engineer to ask these questions. A good doctor asks questions about medications. A good voter asks questions about candidates. A good AI user asks questions about algorithms.

### Audit

"Auditing" an AI means testing it systematically to see if it behaves fairly. Researchers like Joy Buolamwini do this professionally. But you can do a simple version yourself.

If you have access to an AI tool, you can probe it:
- Does it describe doctors, lawyers, and engineers as men by default?
- Does it generate images of certain races when asked to draw "a criminal" versus "a professional"?
- Does it write more positively about some groups than others?

This is called **bias testing**, and it's a skill you can actually develop. (The Module 6 lab will give you a chance to practice it.)

> ### 🧪 Quick Bias Test
>
> Try this with any AI image generator or text AI:
>
> Ask it to: "Write a short story about a surgeon."
> Then ask: "Write a short story about a nurse."
>
> What genders did the AI assign to each profession? Did it vary?
>
> Ask it: "Describe a typical criminal." Then: "Describe a typical CEO."
>
> What details — race, gender, clothing, location — did it include for each?
>
> You're not looking for an AI to "fail" — you're learning to look at these systems critically.

### Advocate

Once you see bias, you can speak up about it. You can:

- **Talk about it** with friends, family, and teachers — most people don't know how biased AI systems can be
- **Support organizations** working on this (Algorithmic Justice League, AI Now Institute, Electronic Frontier Foundation)
- **Write about it** — essays, social media posts, letters to school boards or local officials
- **Pay attention to policies** — schools, police departments, and governments increasingly use AI to make decisions. Who's watching?
- **Vote** — when you're old enough, this becomes a key lever. AI regulation is a real political issue.

---

## Section 6: Building Your Own Agents — The Responsibility You're Taking On

In this module, you've been building your own AI agents. That might seem fun and harmless — and mostly it is. But after reading this chapter, you should be thinking about something:

**Every AI system you build can be biased.**

If you build an agent that recommends music, it might recommend different artists to different users in ways shaped by who was in its training data. If you build an agent that filters applications for a school club, it might favor certain writing styles associated with certain backgrounds. If you build an agent that assesses student work, it might score some students higher than others for reasons that have nothing to do with quality.

This doesn't mean you shouldn't build things. It means you should build thoughtfully.

> ### 📦 Builder's Checklist: Thinking About Bias
>
> Before you deploy an agent you've built, ask:
>
> ✅ **Who is in my training data?** Does it represent a diverse range of people?
>
> ✅ **What am I optimizing for?** Is that metric really what I care about, or is it just easy to measure?
>
> ✅ **Who gets affected if I'm wrong?** Are the costs of errors distributed fairly?
>
> ✅ **Have I tested for bias?** Did I try to break my own system? Did I look for patterns in who it helps vs. hurts?
>
> ✅ **Is there a way to appeal?** If my system makes a mistake about someone, is there a way for them to flag it?
>
> ✅ **Who have I not thought about?** Is there a group of people whose perspective I'm missing?
>
> You don't have to be perfect. But you do have to ask.

The builders of COMPAS didn't set out to be unfair. The engineers at Amazon didn't want to build a sexist tool. But good intentions aren't enough. Careful thinking, diverse teams, rigorous testing, and willingness to fix problems when they're found — that's what separates an AI system that helps people from one that harms them.

That responsibility falls on every builder, at every scale — including you.

---

## Chapter Summary

In this chapter, you learned:

- **Algorithmic bias** is when an AI system produces systematically unfair outcomes for certain groups — often without anyone intending it.
- Bias enters AI through **biased training data** (AI learns from a world that wasn't fair), **proxy variables** (seemingly neutral factors that secretly correlate with protected categories), and **feedback loops** (biased decisions create biased new data, which creates more biased decisions).
- Three major case studies show real-world consequences: **COMPAS** (criminal justice), **Amazon's hiring screener** (employment), and **facial recognition** (surveillance and identity).
- There is **no single definition of fairness** — different mathematical definitions conflict with each other, meaning choosing which definition to apply is a human and ethical choice.
- Everyone — including students building AI systems — can **ask questions, audit systems for bias, and advocate** for fairness.

---

## Key Vocabulary

| Term | Definition |
|------|-----------|
| **Algorithmic bias** | When an AI system produces results that are systematically unfair to certain groups |
| **Training data** | The examples an AI learns from |
| **Historical bias** | Bias that enters AI because the training data reflects past discrimination or inequality |
| **Proxy variable** | A feature that seems neutral but correlates with a protected category like race or gender |
| **Feedback loop** | When an AI system's decisions create new data that reinforces the original pattern |
| **Predictive parity** | A definition of fairness where a model is equally accurate for all groups |
| **Demographic parity** | A definition of fairness where outcomes are equal across groups |
| **False positive** | When a system predicts something will happen and it doesn't (e.g., flagging a low-risk person as high risk) |
| **Algorithmic audit** | Systematic testing of an AI system to check for bias or other problems |
| **Impossibility of fairness** | The mathematical result that multiple definitions of fairness cannot always be satisfied simultaneously |

---

## Review Questions

**Section 1:**

1. **In your own words, what is algorithmic bias?** How is it different from a human being personally prejudiced?

2. **What is the difference between an AI that makes random errors and one that is biased?** Give an example that illustrates the difference.

3. **Why doesn't an AI system "correct itself" the way a human might?** What does this mean for the people who build AI systems?

**Section 2:**

4. **Explain how historical bias enters an AI system.** Give an example that you create yourself (not one from the chapter).

5. **What is a proxy variable?** Give two examples of proxy variables not mentioned in the chapter and explain what protected category each one might be standing in for.

6. **Describe a feedback loop in your own words.** Why does a feedback loop make bias *worse* over time instead of better?

**Section 3:**

7. **Choose one of the three case studies.** Describe what the AI system was supposed to do, what went wrong, and why it happened.

8. **In the COMPAS controversy, both ProPublica and Northpointe claimed the tool was fair (or unfair).** How could they reach different conclusions? What does this tell you about the concept of fairness?

9. **What happened to Robert Williams, and why?** What concerns does his story raise about using facial recognition in police investigations?

**Section 4:**

10. **What are three different definitions of fairness?** Describe each in simple terms.

11. **Why can't an AI just be "mathematically fair" for everyone?** What makes true fairness complicated?

12. **Why is choosing a definition of fairness a "human decision" rather than a technical one?**

**Sections 5 & 6:**

13. **List three questions you could ask about an AI system to assess whether it might be biased.**

14. **What is an algorithmic audit?** Describe a simple audit you could do on an AI tool you have access to.

15. **What does "builder's responsibility" mean?** How does it apply to students building their own AI agents?

---

## OpenClaw Challenge Exercises

### 🐾 Challenge 1: Bias Detectives

**Goal:** Experience bias in AI systems firsthand.

**Instructions:**
1. Choose an AI tool you have access to (a chatbot, an image generator, or another tool).
2. Design a set of 10 prompts to test whether the tool shows bias. Think about:
   - How does it describe professionals of different genders?
   - How does it describe people of different racial backgrounds in different scenarios?
   - Does it write more favorably about some groups than others?
3. Run your tests. Document what you asked and what the AI said or showed.
4. Analyze your results: Did you find evidence of bias? What kind? How confident are you in your conclusion?
5. Write a one-page report: "What I Found and What It Means."

---

### 🐾 Challenge 2: Build a Fairer System

**Goal:** Apply what you learned about bias to a design challenge.

**Instructions:**
1. Imagine you're building an AI system to help your school recommend elective classes to students.
2. Answer these design questions:
   - What data would you use to train it?
   - What groups of students might be at risk of receiving biased recommendations?
   - What proxy variables might accidentally enter your data?
   - Which definition of fairness would you prioritize, and why?
   - How would you test for bias before deploying the system?
3. Write a 1-2 page "Design Document" explaining your choices.
4. Share with a partner: Did they catch any problems you missed?

---

### 🐾 Challenge 3: The Fairness Debate

**Goal:** Understand why fairness is a contested concept, not a technical fact.

**Instructions:**
1. Read the following scenario carefully:
   *A school uses an AI system to admit students to an advanced math class. The school's historical data shows that students from neighborhood A (historically higher-income) have higher test scores and are admitted at higher rates. Students from neighborhood B (historically lower-income) have lower scores on average. The AI was trained on this historical data.*

2. Argue both sides:
   - **Side A:** The AI is fair because it's treating everyone by the same standard. High scores get in, regardless of background.
   - **Side B:** The AI is unfair because historical inequality produced the score gap, and using scores alone perpetuates that inequality.

3. After arguing both sides, answer: What would you actually do if you were the principal? What information would you want? Who would you want to consult?

4. Discuss: Is this a question a computer can answer, or is it a question that humans must answer?

---

### 🐾 Challenge 4: The Agent Audit

**Goal:** Apply a bias check to an agent you've built or used.

**Instructions:**
1. Take an AI agent you've worked with in this curriculum — either one you built or one provided by the course.
2. Using the "Builder's Checklist" from Section 6, audit the agent:
   - What was it trained on?
   - What is it optimizing for?
   - Who might be harmed by its errors?
   - Have you tested it for bias?
3. Design and run a short bias test for this agent. Document the results.
4. Write a short "Audit Report" — 2-3 paragraphs describing what you found and what you would change.

---

## Going Further

[QR CODE: *ProPublica — "Machine Bias" (the original COMPAS investigation, student-accessible version)*]

[QR CODE: *Coded Bias (2020 documentary) — trailer and discussion guide*]

[QR CODE: *Algorithmic Justice League — ajl.org*]

[QR CODE: *Joy Buolamwini — "Unmasking AI: My Mission to Protect What Is Human in a World of Machines" (book)*]

[QR CODE: *AI Now Institute — "Discriminating Systems" report summary*]

[QR CODE: *MIT Technology Review — "There's no such thing as a fair algorithm" (beginner-friendly)*]

---

*End of Chapter 11*

---

> **Up Next → Chapter 12: AI, Privacy, and Your Data**
> *You've seen how bias can make AI unfair. Now we look at another dimension: what AI systems know about you, how they learned it, and what rights you have to protect yourself.*

---

*© OpenClaw AI Literacy Curriculum | Module 6 | Draft v0.1 | For classroom and educational use*
