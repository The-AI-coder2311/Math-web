---
order: 13
difficulty: medium
lesson: 03-quadratics-and-vieta
choices: ["$\\frac{3}{5}$","$\\frac{5}{3}$","2","8","15"]
answer: B
mistakes:
  A: "That's upside down. It's the sum over the product."
  C: "That's $5 - 3$. It's the sum divided by the product."
  D: "That's $5 + 3$. It's the sum divided by the product."
  E: "That's $5 \\times 3$. It's the sum divided by the product."
verify: "(() => { const d = Math.sqrt(25 - 12); const r = (5 + d) / 2; const s = (5 - d) / 2; return fraction(Math.round((1 / r + 1 / s) * 3), 3); })()"
---

Let $r$ and $s$ be the solutions of $x^2 - 5x + 3 = 0$. What is the value of $\frac{1}{r} + \frac{1}{s}$?

## Hint

Add the fractions by giving them the same bottom number.

## Hint 2

$\frac{1}{r} + \frac{1}{s} = \frac{r + s}{rs}$. Then use Vieta.

## Solution

$\frac{1}{r} + \frac{1}{s} = \frac{r + s}{rs}$. Since $r + s = 5$ and $rs = 3$, the value is $\frac{5}{3}$.

**Answer: (B) $\frac{5}{3}$**
