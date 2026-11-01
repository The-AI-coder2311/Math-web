---
order: 7
difficulty: medium
lesson: 01-pascal-and-binomials
choices: ["5","20","10","25","32"]
answer: C
mistakes:
  A: "That's the coefficient of $x^4$ or $x$. For $x^2$, you choose 2 of the 5 groups."
  B: "That's $5 \\times 4$, which counts ordered picks. The order of the groups doesn't matter, so divide by 2."
  D: "That's $5^2$. Multiplying out doesn't work like that. Use \"5 choose 2.\""
  E: "That's $2^5$, the sum of all of the coefficients."
verify: "range(1, 5).reduce((p) => { const n = Array(p.length + 1).fill(0); p.forEach((c, i) => { n[i] += c; n[i + 1] += c; }); return n; }, [1])[2]"
---

When $(x + 1)^5$ is multiplied out, what is the coefficient of $x^2$? (The coefficient is the number in front of $x^2$.)

## Hint

Think of $(x + 1)(x + 1)(x + 1)(x + 1)(x + 1)$. To get $x^2$, from how many groups do you pick the $x$?

## Hint 2

You pick $x$ from exactly 2 of the 5 groups. So it's $\binom{5}{2}$.

## Solution

To get $x^2$, choose $x$ from 2 of the 5 groups, and 1 from the rest. That can be done in $\binom{5}{2} = \frac{5 \times 4}{2} = 10$ ways.

**Answer: (C) 10**
