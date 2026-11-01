---
order: 1
difficulty: easy
lesson: 01-similarity-tools
choices: ["12","14","15","16","24"]
answer: C
mistakes:
  A: "The short side grew by 6, and you added 6 to the long side too. Similar shapes multiply, and they don't add."
  B: "That's $10 + 4$. The long side comes from multiplying 6 by the scale factor."
  D: "That's $10 + 6$, adding the two sides together. Multiply the long side, 6, by the scale factor."
  E: "That's $6 \\times 4$. The scale factor is $10 \\div 4$, not 4."
verify: "range(1, 50).find((long) => long * 4 === 6 * 10)"
---

A 4 by 6 rectangle is enlarged into a similar rectangle whose short side is 10. How long is its long side?

## Hint

How many times longer is the new short side than the old one?

## Hint 2

The scale factor is $10 \div 4 = 2.5$. Every length gets multiplied by it.

## Solution

The scale factor is $10 \div 4 = 2.5$. So the long side is $6 \times 2.5 = 15$.

**Answer: (C) 15**
