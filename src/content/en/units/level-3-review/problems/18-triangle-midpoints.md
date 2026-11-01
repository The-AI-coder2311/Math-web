---
order: 18
difficulty: hard
from: sequences-series/03-geometric-sequences
choices: ["48","64","72","96","192"]
answer: B
mistakes:
  A: "That's only the first triangle."
  C: "Check the formula: $48 \\div \\left(1 - \\frac{1}{4}\\right)$."
  D: "That uses a ratio of $\\frac{1}{2}$. Each triangle has a quarter of the last one's area."
  E: "That's $48 \\times 4$. Divide by $1 - \\frac{1}{4}$, not by $\\frac{1}{4}$."
verify: "Math.round(sum(range(0, 40).map((n) => 48 / 4 ** n)))"
---

A triangle has an area of 48. Joining the midpoints of its sides makes a middle triangle with one fourth of its area. The same thing is done to that middle triangle, and this continues forever. What is the sum of the areas of the first triangle and all of the middle triangles, counting each one in full?

## Hint

What are the first terms of the list of areas? What's the ratio?

## Hint 2

The areas are 48, 12, 3, and so on, with a ratio of $\frac{1}{4}$.

## Solution

The areas have a first term of 48 and a ratio of $\frac{1}{4}$. The sum is $48 \div \frac{3}{4} = 64$.

**Answer: (B) 64**
