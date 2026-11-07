---
order: 27
difficulty: medium
lesson: 03-trees-and-multiplying
choices: ["$\\frac{1}{3}$","$\\frac{2}{5}$","$\\frac{7}{15}$","$\\frac{5}{9}$"]
answer: C
mistakes:
  A: "Check the path for two reds. It has a chance of $\\frac{2}{5}$ by itself."
  B: "That's only the two-red path. Add the two-blue path."
  D: "That puts the first marble back. Here, it stays out."
verify: "fraction(combos([0, 0, 0, 0, 1, 1], 2).filter(([a, b]) => a === b).length, 15)"
---

A bag holds 4 red and 2 blue marbles. You draw two, without replacement. What is the probability that they're the same color?

## Hint

Add two paths: both red, and both blue.

## Hint 2

Both red is $\frac{4}{6} \times \frac{3}{5}$. Both blue is $\frac{2}{6} \times \frac{1}{5}$.

## Solution

Both red has a probability of $\frac{4}{6} \times \frac{3}{5} = \frac{12}{30}$. Both blue has a probability of $\frac{2}{6} \times \frac{1}{5} = \frac{2}{30}$. So the answer is $\frac{14}{30} = \frac{7}{15}$.

**Answer: (C) $\frac{7}{15}$**
