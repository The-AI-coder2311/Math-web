---
order: 12
difficulty: medium
lesson: 04-one-minus
choices: ["$\\frac{1}{36}$","$\\frac{1}{6}$","$\\frac{11}{36}$","$\\frac{1}{3}$","$\\frac{25}{36}$"]
answer: C
mistakes:
  A: "That's the chance of two 6s. \"At least one\" includes one 6 as well."
  B: "That's the chance for one roll. Two rolls give you more chances."
  D: "That adds $\\frac{1}{6} + \\frac{1}{6}$, which counts the double 6 twice."
  E: "That's the chance of no 6s. Subtract it from 1."
verify: "fraction(product(range(1, 6), range(1, 6)).filter((r) => r.includes(6)).length, 36)"
---

You roll a die 2 times. What is the probability of rolling at least one 6?

## Hint

What's the opposite of "at least one 6"?

## Hint 2

The opposite is no 6s. The chance of that is $\frac{5}{6} \times \frac{5}{6}$.

## Solution

The chance of no 6s is $\frac{5}{6} \times \frac{5}{6} = \frac{25}{36}$. So the chance of at least one 6 is $1 - \frac{25}{36} = \frac{11}{36}$.

**Answer: (C) $\frac{11}{36}$**
