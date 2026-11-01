---
order: 19
difficulty: hard
lesson: 04-one-minus
choices: ["$\\frac{1}{216}$","$\\frac{1}{6}$","$\\frac{1}{2}$","$\\frac{91}{216}$","$\\frac{125}{216}$"]
answer: D
mistakes:
  A: "That's the chance of three 6s. \"At least one\" includes one or two as well."
  B: "That's the chance for one roll. Three rolls give you more chances."
  C: "That adds $\\frac{1}{6}$ three times, which counts some outcomes more than once."
  E: "That's the chance of no 6s. Subtract it from 1."
verify: "fraction(product(range(1, 6), range(1, 6), range(1, 6)).filter((r) => r.includes(6)).length, 216)"
---

You roll a die 3 times. What is the probability of rolling at least one 6?

## Hint

Don't add the chances. What's the opposite?

## Hint 2

The chance of no 6s is $\frac{5}{6} \times \frac{5}{6} \times \frac{5}{6}$.

## Solution

The chance of no 6s is $\frac{125}{216}$. So the chance of at least one 6 is $1 - \frac{125}{216} = \frac{91}{216}$.

**Answer: (D) $\frac{91}{216}$**
