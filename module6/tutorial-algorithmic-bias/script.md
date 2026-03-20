# Script: What Is Algorithmic Bias?
**Module 6, Tutorial B — Online Tutorial**
**Target duration:** ~5 minutes (300 seconds)
**Format:** Narrated animation with on-screen graphics
**Anchor case study:** Amazon AI Hiring Screener (2018)

---

## [00:00–00:30] HOOK — What Is Bias?

*[Narrator speaks over a simple animated scene: two identical-looking résumés side by side, treated differently]*

> "Quick question: what's bias?"

> "Bias is when something gets treated differently — not because of what it actually is, but because of assumptions baked into the system. A biased coin always lands heads. A biased judge always favors one side. A biased algorithm? It always scores certain people lower — even when they don't deserve it."

> "Today we're going to talk about algorithmic bias. Which sounds complicated. But it's really just bias — in a machine. And that matters because machines are making more and more decisions that affect your life."

**[On-screen text]:** "Algorithmic Bias: When a computer system treats people differently in unfair ways."

---

## [00:30–01:30] HOW BIAS GETS INTO AI

*[Animated pipeline: person → data → algorithm → decision]*

> "Here's the thing about AI: it learns by looking at examples. You show it thousands of job applications and tell it which ones led to successful hires. It finds the patterns. Then it uses those patterns to score new applications."

> "Sounds smart, right? But here's the problem. If the examples you learn from are biased — if, historically, certain types of people were hired and others weren't, for reasons that had nothing to do with ability — the AI learns *those* patterns too."

> "It doesn't know the difference between 'this person is skilled' and 'this person looks like the people who historically got hired.' It just finds the pattern and runs with it."

> "And once that pattern is in the algorithm, it gets applied at scale. One biased hiring model, used by a thousand companies, can affect millions of job seekers — all running on the same bad logic."

**[On-screen callout]:** "Biased examples in → biased decisions out. At scale."

---

## [01:30–03:00] CASE STUDY: AMAZON'S AI HIRING SCREENER

*[Narrator speaks over a stylized graphic of the Amazon logo and a résumé stack]*

> "Let's look at a real example. In 2014, Amazon built an AI system to help screen job applicants. The idea was simple: feed it thousands of résumés, it learns what 'good' looks like, it scores new applicants, and human reviewers can focus on the top-scoring ones. Efficient, right?"

> "The system trained on résumés submitted to Amazon over the previous ten years. Here's the thing about Amazon's workforce over those ten years: like most tech companies, it was predominantly male, especially in technical roles. Not because women are less capable — but because of a long history of women being discouraged from or excluded from tech."

> "So the model learned: 'résumés that look like the ones from people we hired historically are good.' And 'résumés that look different are less good.'"

> "And then something specific happened. The system started penalizing résumés that contained the word 'women's.' As in: 'captain of the women's chess club.' Or: 'graduate of a women's university.' The model didn't know it was doing anything wrong. It just learned that 'women's' appeared more often in résumés that — historically — didn't lead to a hire. So it down-scored them."

> "Amazon's engineers discovered this in 2018 and scrapped the tool. But think about how many résumés it had already scored. Think about how many people may have been filtered out — not because of their skills, but because of a word."

> "And Amazon is a sophisticated tech company with thousands of engineers. Most companies using AI hiring tools don't have the resources to audit like that. They might never even know."

**[On-screen callout]:** "Amazon AI screener: downgraded résumés containing 'women's' — scrapped in 2018. Reported by Reuters."

---

## [03:00–04:00] WHAT'S A PROXY VARIABLE? (6th-grade level)

*[Animated explainer: a treasure map metaphor]*

> "Here's a key concept you need to know: the proxy variable. And I promise it's less scary than it sounds."

> "Imagine you want to find buried treasure. You don't have a direct map to the treasure. But you know treasure is usually buried near old oak trees. So you use oak trees as a *proxy* — a stand-in — for where to dig."

> "A proxy variable works the same way. It's something you *can* measure, which you use as a stand-in for something you *can't* directly measure — or something you're not allowed to measure."

> "In the Amazon example: Amazon couldn't — and wouldn't — tell its AI 'prefer men.' That would be illegal. But the AI found a proxy. It found that certain words, clubs, and schools correlated with gender. And it used those as stand-ins."

> "Here's another example: zip code. An algorithm trying to predict 'loan risk' might use zip code as a variable. But zip code correlates strongly with race, because of decades of segregated housing policies. The algorithm isn't explicitly considering race — but through the proxy of zip code, it might as well be."

> "That's why proxy variables are tricky. The bias hides. The algorithm doesn't 'know' it's discriminating. It's just following a pattern. But the pattern was shaped by history."

**[On-screen callout]:** "Proxy variable: a stand-in measurement that correlates with something the algorithm wasn't supposed to use."

---

## [04:00–05:00] WHAT YOU CAN DO

*[Narrator speaks over a clean action card, items appearing one at a time]*

> "So: algorithmic bias is real. It's in systems that affect hiring, lending, healthcare, and more. It hides inside proxy variables and historical data. And it's often invisible — to the people affected by it and sometimes to the engineers who built it."

> "But it's not inevitable. And you don't have to be a data scientist to do something about it."

> "**Ask who the system was trained on.** When an AI system affects you, ask: whose data did it learn from? Were people like you in that training set?"

> "**Ask for transparency.** You have a right to ask whether AI was used in a decision that affected you. In some places, you have a legal right to an explanation. Know your rights."

> "**Call it out.** If you see an AI system being used in a way that seems unfair, say something. Talk to a teacher, an employer, a public official. Document what you observed."

> "**Learn more.** Organizations like the Algorithmic Justice League exist specifically to fight algorithmic bias. They have resources, they run campaigns, and they welcome supporters."

> "**And if you go into tech?** Remember this video. Test your models for bias before you ship them. Include people from affected communities in your design process. Build systems you'd be comfortable explaining to Jordan."

**[On-screen text]:** "Algorithmic bias is not inevitable. You have a role in fighting it."

---

*End of script.*

---

**Production notes:**
- Narrator pace: ~130 words/minute — slightly faster than Tutorial A; this is more energized
- Total word count: ~850 words → ~6.5 minutes at 130 wpm; edit for pacing to hit 5 minutes
- Amazon case study: cite Reuters 2018 report in transcript footnote
- Proxy variable section: test comprehension with actual 6th graders if possible before final recording
- Jordan reference at the end intentionally connects back to Tutorial A — good for cohesion
- Background music: slightly upbeat but focused — this ends on an empowering note
