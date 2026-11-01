---
order: 15
difficulty: medium
from: data-chance/03-multi-step-chance
choices: ["$\\frac{1}{5}$","$\\frac{4}{15}$","$\\frac{1}{3}$","$\\frac{2}{5}$","$\\frac{8}{15}$"]
answer: C
mistakes:
  A: "That's only the Bag A path. Add the Bag B path too."
  B: "Compute each path: $\\frac{3}{15}$ and $\\frac{2}{15}$."
  D: "That averages $\\frac{3}{5}$ and $\\frac{1}{5}$. The bags aren't equally likely."
  E: "That adds $\\frac{1}{3}$ and $\\frac{1}{5}$. Multiply along each path first."
verify: "fraction(5 * 3 + 10 * 1, 75)"
---

You roll a die. On a 1 or 2, you draw from Bag A, which has 3 red and 2 blue marbles. Otherwise, you draw from Bag B, which has 1 red and 4 blue marbles. What is the probability of drawing red?

## Hint

Follow each path. What's the chance of using each bag?

## Hint 2

Bag A: $\frac{1}{3} \times \frac{3}{5}$. Bag B: $\frac{2}{3} \times \frac{1}{5}$.

## Solution

Bag A and red: $\frac{1}{3} \times \frac{3}{5} = \frac{3}{15}$. Bag B and red: $\frac{2}{3} \times \frac{1}{5} = \frac{2}{15}$. Together, that's $\frac{5}{15} = \frac{1}{3}$.

**Answer: (C) $\frac{1}{3}$**
