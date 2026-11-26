---
order: 4
difficulty: medium
lesson: 01-what-logs-mean
choices: ["$\\frac{3}{5}$","$\\frac{2}{3}$","$\\frac{4}{3}$","$\\frac{3}{2}$","$\\frac{5}{3}$"]
answer: E
mistakes:
  A: "That's flipped. It's $\\log_{32} 8$, not $\\log_8 32$."
  B: "That's $\\log_8 4$. Rewrite 32 as $2^5$."
  C: "That's $\\log_8 16$. Rewrite 32 as $2^5$."
  D: "Check it: $8^{3/2}$ is the square root of 512, not 32."
verify: "(() => { for (let d = 1; d <= 6; d++) for (let n = 1; n <= 30; n++) if (Math.abs(Math.pow(8, n / d) - 32) < 1e-9) return fraction(n, d); })()"
---

What is $\log_8 32$?

## Hint

Both 8 and 32 are powers of 2.

## Hint 2

Let $8^y = 32$. Then $2^{3y} = 2^5$.

## Solution

Let $y = \log_8 32$, so $8^y = 32$. Writing both as powers of 2 gives $2^{3y} = 2^5$, so $3y = 5$ and $y = \frac{5}{3}$.

**Answer: (E) $\frac{5}{3}$**
