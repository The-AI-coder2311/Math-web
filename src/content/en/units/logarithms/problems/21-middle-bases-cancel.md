---
order: 21
difficulty: medium
lesson: 03-change-of-base
choices: ["2","3","4","8","16"]
answer: C
mistakes:
  A: "That's $\\log_4 16$. The chain starts in base 2."
  B: "The 3 cancels in the chain. It doesn't stay in the answer."
  D: "That's half of 16. The chain gives $\\log_2 16$."
  E: "That's the final input. Take its log in base 2."
verify: "Math.round((Math.log(5) / Math.log(2)) * (Math.log(3) / Math.log(5)) * (Math.log(16) / Math.log(3)))"
---

For every $x > 1$, the product $\log_2 x \cdot \log_x 3 \cdot \log_3 16$ has the same value. What is it?

## Hint

Write each log as a fraction of base-10 logs.

## Hint 2

The chain rule says $\log_a b \cdot \log_b c = \log_a c$.

## Solution

Chaining, $\log_2 x \cdot \log_x 3 = \log_2 3$, and then $\log_2 3 \cdot \log_3 16 = \log_2 16 = 4$.

**Answer: (C) 4**
