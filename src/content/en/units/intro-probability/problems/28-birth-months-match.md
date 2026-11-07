---
order: 28
difficulty: medium
lesson: 04-one-minus
choices: ["$\\frac{1}{12}$","$\\frac{17}{72}$","$\\frac{55}{72}$","$\\frac{11}{12}$"]
answer: B
mistakes:
  A: "That's the chance for one pair of people. There are three pairs here."
  C: "That's the chance that all three are different. Subtract it from 1."
  D: "That's the chance that two particular people differ."
verify: "fraction(1728 - 12 * 11 * 10, 1728)"
---

Three people are each equally likely to be born in any of the 12 months. What is the probability that at least two of them share a month?

## Hint

Find the chance that all three months are different.

## Hint 2

That chance is $\frac{12}{12} \times \frac{11}{12} \times \frac{10}{12}$.

## Solution

All three are different with a probability of $\frac{11}{12} \times \frac{10}{12} = \frac{55}{72}$. So at least two share a month with a probability of $1 - \frac{55}{72} = \frac{17}{72}$.

**Answer: (B) $\frac{17}{72}$**
