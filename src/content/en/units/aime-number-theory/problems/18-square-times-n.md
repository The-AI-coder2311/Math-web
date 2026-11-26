---
order: 18
difficulty: hard
lesson: 03-diophantine-equations
choices: ["66","110","121","231","441"]
answer: A
mistakes:
  B: "That gives the exponent of 3 in $m$ ten choices. Since $2b \\le 10$, it has only 6."
  C: "That's $11 \\times 11$. The exponent of 3 in $m$ is at most 5, since $2b \\le 10$."
  D: "That's the number of divisors of $12^{10}$. Here $m$ appears squared, so its exponents are limited."
  E: "That's $21 \\times 21$. The exponents in $m$ are limited because $m$ is squared."
verify: "(() => { let c = 0; for (let a = 0; a <= 10; a++) for (let b = 0; b <= 5; b++) c++; return c; })()"
---

How many ordered pairs of positive integers $(m, n)$ satisfy $m^2 n = 12^{10}$?

## Hint

Write $12^{10}$ as a product of prime powers.

## Hint 2

$12^{10} = 2^{20} \times 3^{10}$. Choose the exponents of 2 and 3 in $m$, and $n$ is forced.

## Solution

Since $12^{10} = 2^{20} \times 3^{10}$, write $m = 2^a 3^b$. Then $n = 2^{20 - 2a} 3^{10 - 2b}$, which is a positive integer exactly when $0 \le a \le 10$ and $0 \le b \le 5$. That's $11 \times 6 = 66$ pairs.

**Answer: (A) 66**
