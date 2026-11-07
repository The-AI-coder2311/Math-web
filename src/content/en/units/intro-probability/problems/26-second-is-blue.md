---
order: 26
difficulty: medium
lesson: 03-trees-and-multiplying
choices: ["$\\frac{1}{4}$","$\\frac{2}{7}$","$\\frac{3}{8}$","$\\frac{3}{7}$"]
answer: C
mistakes:
  A: "Use a tree with two paths: red then blue, and blue then blue."
  B: "That's the chance of blue if the first marble was blue. Include the other path too."
  D: "That's the chance of blue if the first marble was red. Include the other path too."
verify: "fraction(5 * 3 + 3 * 2, 8 * 7)"
---

A bag holds 5 red and 3 blue marbles. You draw two, without putting the first one back. What is the probability that the second marble is blue?

## Hint

Two paths end in blue: red then blue, and blue then blue.

## Hint 2

Those paths have probabilities of $\frac{5}{8} \times \frac{3}{7}$ and $\frac{3}{8} \times \frac{2}{7}$.

## Solution

Add the two paths: $\frac{5}{8} \times \frac{3}{7} + \frac{3}{8} \times \frac{2}{7} = \frac{15}{56} + \frac{6}{56} = \frac{21}{56} = \frac{3}{8}$. That equals the chance of blue on the first draw.

**Answer: (C) $\frac{3}{8}$**
