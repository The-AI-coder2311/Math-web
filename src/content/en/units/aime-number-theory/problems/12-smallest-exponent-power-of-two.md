---
order: 12
difficulty: hard
lesson: 02-lifting-the-exponent
choices: ["64","128","256","512","1024"]
answer: C
mistakes:
  A: "For $n = 64$, LTE gives $2 + 6 = 8$ factors of 2. That's two short."
  B: "For $n = 128$, LTE gives $2 + 7 = 9$ factors of 2. One short."
  D: "That works, but 256 already gives 10 factors of 2."
  E: "That's $2^{10}$ itself. A much smaller exponent works."
verify: "(() => { for (let n = 1; ; n++) { let p = 1; for (let i = 0; i < n; i++) p = (p * 3) % 1024; if (p === 1) return n; } })()"
---

What is the smallest positive integer $n$ such that $3^n - 1$ is divisible by $2^{10}$?

## Hint

If $n$ is odd, $3^n - 1$ has only one factor of 2. So $n$ is even.

## Hint 2

For even $n$, $v_2(3^n - 1) = 2 + v_2(n)$.

## Solution

If $n$ is odd, $v_2(3^n - 1) = v_2(3 - 1) = 1$. So $n$ is even, and by LTE for $p = 2$:

$$v_2(3^n - 1) = 1 + 2 + v_2(n) - 1$$

We need $2 + v_2(n) \ge 10$, so $v_2(n) \ge 8$. The smallest such $n$ is $2^8 = 256$.

**Answer: (C) 256**
