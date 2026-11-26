---
order: 16
difficulty: medium
lesson: 02-log-rules
choices: ["15","30","60","120","240"]
answer: C
mistakes:
  A: "That counts the factors. Add their exponents."
  B: "That halves 60. Check the conversion: $\\log_4 2$ is one half."
  D: "That's $\\log_2$ of the product. Convert to base 4."
  E: "That doubles 120. Since 4 is $2^2$, divide by 2 instead."
verify: "Math.round(sum(range(1, 15)) * Math.log(2) / Math.log(4))"
---

What is $\log_4 (2^1 \cdot 2^2 \cdot 2^3 \cdots 2^{15})$?

## Hint

Multiplying powers of 2 adds their exponents.

## Hint 2

The product is $2^{120}$.

## Solution

The product is $2^{1 + 2 + \cdots + 15} = 2^{120}$. Since $2^{120} = 4^{60}$, the log base 4 is 60.

**Answer: (C) 60**
