---
order: 22
difficulty: hard
lesson: 04-harder-probability
choices: ["$\\frac{1}{6}$","$\\frac{5}{12}$","$\\frac{4}{9}$","$\\frac{1}{2}$","$\\frac{5}{9}$"]
answer: C
mistakes:
  A: "That's the chance that the second die matches the first. There are more ways to get a match."
  B: "That's the chance of exactly two matching. It leaves out the case where all three match."
  D: "It's close, but compute it exactly. The chance of no match is 120 out of 216."
  E: "That's the chance that all three are **different**. You need to subtract it from 1."
verify: "fraction(product(range(1, 6), range(1, 6), range(1, 6)).filter((d) => new Set(d).size < 3).length, 216)"
---

You roll 3 standard dice. What is the probability that at least two of them show the same number?

## Hint

The words "at least" are a clue. What's the opposite?

## Hint 2

The opposite is "all three are different." Count those: $6 \times 5 \times 4$.

## Solution

**Step 1.** The opposite is that all three are different: $6 \times 5 \times 4 = 120$ outcomes out of $6^3 = 216$. That's $\frac{120}{216} = \frac{5}{9}$.

**Step 2.** So the probability of a match is $1 - \frac{5}{9} = \frac{4}{9}$.

**Answer: (C) $\frac{4}{9}$**
