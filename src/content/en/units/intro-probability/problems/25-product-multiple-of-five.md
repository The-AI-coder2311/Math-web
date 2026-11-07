---
order: 25
difficulty: medium
lesson: 02-list-the-real-outcomes
choices: ["$\\frac{1}{6}$","$\\frac{5}{18}$","$\\frac{11}{36}$","$\\frac{1}{3}$"]
answer: C
mistakes:
  A: "That's the chance that one die shows a 5. Either die could."
  B: "That's 10 of the 36 outcomes. It leaves out the roll with two 5s."
  D: "That counts two 5s twice. There's only one such outcome."
verify: "fraction(product(range(1, 6), range(1, 6)).filter(([a, b]) => (a * b) % 5 === 0).length, 36)"
---

Two dice are rolled. What is the probability that the product of the numbers is a multiple of 5?

## Hint

For the product to be a multiple of 5, what must one of the dice show?

## Hint 2

At least one die must show a 5. What's the opposite?

## Solution

At least one die must show a 5. The opposite is that neither does, which has $5 \times 5 = 25$ outcomes. So $36 - 25 = 11$ outcomes work, and the probability is $\frac{11}{36}$.

**Answer: (C) $\frac{11}{36}$**
