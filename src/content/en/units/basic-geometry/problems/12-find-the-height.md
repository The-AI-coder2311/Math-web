---
order: 12
difficulty: medium
lesson: 02-triangle-area
choices: ["5","2.5","10","18","360"]
answer: A
mistakes:
  B: "That's $30 \\div 12$, which leaves out the one half. A triangle is half of a rectangle."
  C: "That's twice the height. Half of 12 is 6, and $30 \\div 6 = 5$."
  D: "That's $30 - 12$. Area comes from multiplying, so divide to go backwards."
  E: "That's $30 \\times 12$. Divide to go backwards."
verify: "range(1, 100).find((h) => (12 * h) / 2 === 30)"
---

A triangle has an area of 30 and a base of 12. What is its height?

## Hint

Start from the formula: $\frac{1}{2} \times 12 \times$ height $= 30$.

## Hint 2

Half of 12 is 6. So 6 times the height is 30.

## Solution

The formula gives $\frac{1}{2} \times 12 \times h = 30$, so $6h = 30$ and $h = 5$.

**Answer: (A) 5**
