---
order: 17
difficulty: medium
lesson: 03-diophantine-equations
choices: ["36","39","46","49","52"]
answer: C
mistakes:
  A: "That's only $n = 36$. The divisor 13 gives $n = 10$ too."
  B: "That's the number $n + 3$ must divide. Find the values of $n$ and add them."
  D: "Check whether $n = 0$ belongs. The problem asks for positive $n$, so $n + 3 = 3$ is out."
  E: "That adds the divisors 13 and 39. Subtract 3 from each to get $n$."
verify: "sum(range(1, 500).filter((n) => (n * n + 30) % (n + 3) === 0))"
---

Find the sum of all positive integers $n$ such that $n + 3$ divides $n^2 + 30$.

## Hint

Replace $n$ by $-3$ to find the remainder of $n^2 + 30$ when divided by $n + 3$.

## Hint 2

$n + 3$ must divide 39, and $n + 3 \ge 4$.

## Solution

Since $n \equiv -3 \pmod{n + 3}$, we get $n^2 + 30 \equiv 39 \pmod{n + 3}$. So $n + 3$ divides 39. The divisors of 39 that are at least 4 are 13 and 39, so $n = 10$ or $n = 36$. The sum is $10 + 36 = 46$.

**Answer: (C) 46**
