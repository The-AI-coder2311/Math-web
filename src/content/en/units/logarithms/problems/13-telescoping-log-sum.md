---
order: 13
difficulty: medium
lesson: 02-log-rules
choices: ["1","2","3","4","81"]
answer: D
mistakes:
  A: "The product of the fractions telescopes to 81, not 3."
  B: "The product of the fractions telescopes to 81, not 9."
  C: "That's $\\log_3 27$. The product ends at 81."
  E: "That's the product itself. Take its log in base 3."
verify: "Math.round(sum(range(1, 80).map((k) => Math.log((k + 1) / k))) / Math.log(3))"
---

What is $\log_3 \frac{2}{1} + \log_3 \frac{3}{2} + \log_3 \frac{4}{3} + \cdots + \log_3 \frac{81}{80}$?

## Hint

A sum of logs is the log of a product.

## Hint 2

In the product, each top number cancels the next bottom number.

## Solution

The sum is $\log_3$ of the product $\frac{2}{1} \cdot \frac{3}{2} \cdots \frac{81}{80}$. Everything cancels except 81 on top, so the sum is $\log_3 81 = 4$.

**Answer: (D) 4**
