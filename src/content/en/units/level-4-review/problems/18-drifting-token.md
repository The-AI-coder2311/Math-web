---
order: 18
difficulty: hard
from: expected-value/02-states-and-chains
choices: ["10","11","13","16","17"]
answer: B
mistakes:
  A: "That's $\\frac{3}{7}$, the chance of reaching 0 instead."
  C: "That's $\\frac{4}{9}$, the chance of stepping right twice in a row. The token can also wander back and forth."
  D: "That's $\\frac{7}{9}$, which treats the walk as ending after two steps. Set up an equation for each state instead."
  E: "That's $\\frac{8}{9}$, the chance of not stepping left twice in a row. Losing happens after one left step from 1."
verify: "(() => { let p = [0, 0, 0, 1]; for (let k = 0; k < 500; k++) p = [0, (2 / 3) * p[2] + (1 / 3) * p[0], (2 / 3) * p[3] + (1 / 3) * p[1], 1]; for (let n = 1; n <= 100; n++) { const m = Math.round(p[1] * n); if (Math.abs(m / n - p[1]) < 1e-9) return m + n; } return NaN; })()"
---

A token starts at 1 on a number line. Each step, it moves right 1 with probability $\frac{2}{3}$ or left 1 with probability $\frac{1}{3}$. It stops when it reaches 0 or 3. The probability that it reaches 3 is $\frac{m}{n}$ in lowest terms. What is $m + n$?

## Hint

Let $p_1$ and $p_2$ be the chances of reaching 3 from positions 1 and 2. Write one equation for each.

## Hint 2

$p_1 = \frac{2}{3} p_2$ and $p_2 = \frac{2}{3} + \frac{1}{3} p_1$.

## Solution

Let $p_k$ be the chance of reaching 3 starting from $k$, so $p_0$ is 0 and $p_3$ is 1. Looking one step ahead:

- $p_1 = \frac{2}{3} p_2$
- $p_2 = \frac{2}{3} + \frac{1}{3} p_1$

Substituting, $p_1 = \frac{4}{9} + \frac{2}{9} p_1$, so $\frac{7}{9} p_1 = \frac{4}{9}$ and $p_1 = \frac{4}{7}$.

So $m + n = 11$.

**Answer: (B) 11**
