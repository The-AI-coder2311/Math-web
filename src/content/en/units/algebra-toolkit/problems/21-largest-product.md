---
order: 21
difficulty: easy
lesson: 05-am-gm-inequality
choices: ["72","77","80","81","324"]
answer: D
mistakes:
  A: "That's $6 \\times 12$. Closer numbers give a bigger product."
  B: "That's $7 \\times 11$. Closer numbers give a bigger product."
  C: "That's $8 \\times 10$, which is close. Can the two numbers get even closer?"
  E: "That's $18 \\times 18$, but those two numbers add up to 36, not 18."
verify: "Math.max(...range(1, 17).map((a) => a * (18 - a)))"
---

Two positive numbers add up to 18. What is their largest possible product?

## Hint

With a fixed sum, the product is largest when the numbers are as close as possible.

## Hint 2

Try making the two numbers equal. What is each one?

## Solution

With a fixed sum, the product is largest when the numbers are equal. So both are 9, and $9 \times 9 = 81$.

**Answer: (D) 81**
