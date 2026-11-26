---
order: 6
difficulty: easy
from: functional-equations/01-substitution-tricks
choices: ["12","30","32","35","50"]
answer: C
mistakes:
  A: "That adds 1 for each step. The rule adds 3 each time."
  B: "That's $3 \\times 10$. Don't forget the starting value, which is 2."
  D: "That's $f(11)$. From 0 to 10 there are 10 steps, not 11."
  E: "That adds 5 each step. The rule adds 3."
verify: "(() => { let f = 2; for (let x = 0; x < 10; x++) f = f + 3; return f; })()"
---

A function satisfies $f(0) = 2$ and $f(x + 1) = f(x) + 3$ for every real number $x$. What is $f(10)$?

## Hint

Substitute $x = 0$, then $x = 1$, and look for the pattern.

## Hint 2

Each substitution moves one step and adds 3. How many steps get from 0 to 10?

## Solution

Substituting $x = 0, 1, 2, \ldots, 9$ in turn moves from $f(0)$ to $f(10)$ in 10 steps, and each step adds 3. So

$$2 + 10 \times 3 = 32.$$

In general $f(n) = 2 + 3n$ for every whole number $n$.

**Answer: (C) 32**
