---
order: 9
difficulty: medium
lesson: 01-pigeonhole-power
choices: ["3","4","5","6","9"]
answer: C
mistakes:
  A: "Three grid points can have no good pair, such as $(0, 0)$, $(0, 1)$, and $(1, 0)$."
  B: "The points $(0, 0)$, $(0, 1)$, $(1, 0)$, and $(1, 1)$ have no pair with a whole-number midpoint."
  D: "That's enough, but one fewer is already enough."
  E: "That's more than you need. Sort the points by whether each coordinate is odd or even."
verify: "range(1, 10).find((k) => combos(product([0, 1], [0, 1]), k).length === 0)"
---

A grid point is a point $(x, y)$ where $x$ and $y$ are both whole numbers. What is the smallest number of grid points you can choose so that, no matter which you choose, two of them have a midpoint that is also a grid point?

## Hint

The midpoint's $x$-coordinate is $\frac{x_1 + x_2}{2}$. When is that a whole number?

## Hint 2

Sort each point by whether $x$ is odd or even, and whether $y$ is odd or even. How many boxes is that?

## Solution

The midpoint is a grid point when the two $x$-coordinates are both odd or both even, and the same goes for the $y$-coordinates. So sort the points into 4 boxes: odd-odd, odd-even, even-odd, and even-even. With 5 points, two share a box, and their midpoint is a grid point. Four points aren't enough, since one in each box gives no such pair.

**Answer: (C) 5**
