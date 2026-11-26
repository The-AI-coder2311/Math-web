---
order: 20
difficulty: medium
lesson: 03-change-of-base
choices: ["6","27","81","243","729"]
answer: E
mistakes:
  A: "That's $\\log_3 x$. Convert back to $x$."
  B: "That's $3^3$. Solve for $\\log_3 x$ first: it's 6."
  C: "That's $3^4$. Check: $\\log_9 81$ is 2 and $\\log_3 81$ is 4, which add to 6."
  D: "That's $3^5$. Check: the logs would add to 7.5, not 9."
verify: "range(1, 10000).find((x) => Math.abs(Math.log(x) / Math.log(9) + Math.log(x) / Math.log(3) - 9) < 1e-9)"
---

Solve $\log_9 x + \log_3 x = 9$.

## Hint

Convert $\log_9 x$ to base 3.

## Hint 2

$\log_9 x = \frac{\log_3 x}{2}$.

## Solution

Let $u = \log_3 x$. Then $\log_9 x = \frac{u}{2}$, and $\frac{u}{2} + u = 9$ gives $u = 6$. So $x = 3^6 = 729$.

**Answer: (E) 729**
