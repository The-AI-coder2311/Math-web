---
order: 17
difficulty: hard
lesson: 03-trees-and-multiplying
choices: ["$\\frac{4}{15}$","$\\frac{2}{5}$","$\\frac{8}{15}$","$\\frac{4}{9}$","$\\frac{2}{3}$"]
answer: C
mistakes:
  A: "That's only one path. Red then blue and blue then red are both ways to get one of each."
  B: "That's the chance that both are red. You want one of each."
  D: "That puts the first marble back. The bag changes after the first draw."
  E: "That's the chance that the first marble is red. Both draws matter."
verify: "fraction(combos(['R', 'R', 'R', 'R', 'B', 'B'], 2).filter((p) => p[0] !== p[1]).length, combos(['R', 'R', 'R', 'R', 'B', 'B'], 2).length)"
---

A bag has 4 red and 2 blue marbles. You pull out 2 without putting the first one back. What is the probability of getting one marble of each color?

## Hint

There are two paths: red and then blue, or blue and then red. Follow each one.

## Hint 2

Red then blue is $\frac{4}{6} \times \frac{2}{5}$. Blue then red is $\frac{2}{6} \times \frac{4}{5}$.

## Solution

Red then blue is $\frac{4}{6} \times \frac{2}{5} = \frac{8}{30}$. Blue then red is $\frac{2}{6} \times \frac{4}{5} = \frac{8}{30}$. Add the paths: $\frac{16}{30} = \frac{8}{15}$.

**Answer: (C) $\frac{8}{15}$**
