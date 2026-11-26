---
order: 6
difficulty: hard
lesson: 01-crt-and-order
choices: ["1001","1376","1626","2001","2002"]
answer: E
mistakes:
  A: "That's $1000 + 1$. There are two more solutions, 376 and 625."
  B: "That leaves out 1 and 625. Every combination of 0 or 1 mod 8 with 0 or 1 mod 125 gives a solution."
  C: "That leaves out 376, the solution that is 0 mod 8 and 1 mod 125."
  D: "That leaves out $n = 1$. Since $1^2 - 1 = 0$, it counts."
verify: "sum(range(1, 1000).filter((n) => (n * n - n) % 1000 === 0))"
---

Find the sum of all integers $n$ with $1 \le n \le 1000$ such that $n^2 - n$ is divisible by 1000.

## Hint

$n$ and $n - 1$ share no factors. So all of 8 must divide one of them, and all of 125 must divide one of them.

## Hint 2

That gives four combinations of $n \equiv 0$ or $1$ mod 8 with $n \equiv 0$ or $1$ mod 125. Glue each with CRT.

## Solution

We need 1000 to divide $n(n - 1)$. Since $n$ and $n - 1$ are coprime, 8 divides one of them and 125 divides one of them. So $n \equiv 0$ or $1 \pmod 8$ and $n \equiv 0$ or $1 \pmod{125}$.

- 0 mod 8 and 0 mod 125: $n = 1000$.
- 1 mod 8 and 1 mod 125: $n = 1$.
- 0 mod 8 and 1 mod 125: $n = 376$.
- 1 mod 8 and 0 mod 125: $n = 625$.

The sum is $1000 + 1 + 376 + 625 = 2002$.

**Answer: (E) 2002**
