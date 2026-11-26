---
order: 16
difficulty: hard
from: functional-equations/03-sequences-from-recurrences
choices: ["6305","6561","6817","7073","13634"]
answer: C
mistakes:
  A: "That's $3^8 - 2^8$. Since 8 is even, $(-2)^8$ is positive."
  B: "That's $3^8$ alone. Don't drop the $(-2)^n$ part."
  D: "That adds 256 one extra time."
  E: "That's twice the answer. The starting value 2 is already built into $3^n + (-2)^n$."
verify: "(() => { let a = 2, b = 1; for (let n = 2; n <= 8; n++) { const c = b + 6 * a; a = b; b = c; } return b; })()"
---

A sequence has $a_0 = 2$, $a_1 = 1$, and $a_n = a_{n-1} + 6a_{n-2}$ for $n \ge 2$. What is $a_8$?

## Hint

Try $a_n = r^n$ in the recurrence to get the characteristic equation.

## Hint 2

The characteristic equation $r^2 = r + 6$ has roots 3 and $-2$.

## Solution

The characteristic equation $r^2 = r + 6$ has roots 3 and $-2$, so $a_n = A \cdot 3^n + B \cdot (-2)^n$.

From $a_0$: $A + B = 2$. From $a_1$: $3A - 2B = 1$. These give $A = B = 1$, so $a_n = 3^n + (-2)^n$.

$$a_8 = 3^8 + (-2)^8 = 6561 + 256 = 6817.$$

**Answer: (C) 6817**
