---
order: 15
difficulty: medium
from: intro-probability/02-list-the-real-outcomes
choices: ["$\\frac{1}{36}$","$\\frac{1}{12}$","$\\frac{1}{9}$","$\\frac{5}{36}$","$\\frac{1}{6}$"]
answer: C
mistakes:
  A: "That counts one outcome. Four pairs make 5."
  B: "That counts 3 pairs. There are 4."
  D: "That would be 5 pairs. There are 4, which makes a total of 5."
  E: "That's the chance of a total of 7."
verify: "fraction(product(range(1, 6), range(1, 6)).filter(([a, b]) => a + b === 5).length, 36)"
---

You roll two standard dice. What is the probability that the numbers add up to 5?

## Hint

Think of one red die and one blue die. List the pairs.

## Hint 2

The pairs are (1, 4), (2, 3), (3, 2), and (4, 1).

## Solution

Four pairs make 5, out of 36 outcomes. So the probability is $\frac{4}{36} = \frac{1}{9}$.

**Answer: (C) $\frac{1}{9}$**
