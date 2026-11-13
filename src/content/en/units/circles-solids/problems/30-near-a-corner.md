---
order: 30
difficulty: hard
lesson: 03-sectors-and-probability
choices: ["$\\frac{1}{4}$","$\\frac{1}{2}$","$\\frac{\\pi}{4}$","$\\frac{\\pi}{2}$"]
answer: C
mistakes:
  A: "That's one corner's share of the square, if the regions were squares. They're quarter circles."
  B: "Check the area: the four quarter circles make one whole circle of radius 2."
  D: "That's more than 1, so it can't be a probability."
verify: "Math.abs((Math.PI * 2 ** 2) / 16 - Math.PI / 4) < 1e-9 ? '\\\\frac{\\\\pi}{4}' : 'no match'"
---

A point is chosen at random inside a square with sides of 4. What is the probability that it's within 2 units of some corner?

## Hint

Around each corner, the points within 2 units form a quarter circle.

## Hint 2

Those quarter circles touch but don't overlap. Together, they make one circle of radius 2.

## Solution

Around each corner, the region is a quarter circle of radius 2. The four quarter circles make one circle with an area of $4\pi$. The square has an area of 16, so the probability is $\frac{4\pi}{16} = \frac{\pi}{4}$.

**Answer: (C) $\frac{\pi}{4}$**
