---
order: 26
difficulty: medium
lesson: 05-nt-constructions
choices: ["2","4","6","8","16"]
answer: D
mistakes:
  A: "Those are 1 and 104. CRT also glues mixed choices, like 1 mod 3 and $-1$ mod 5."
  B: "There are three primes, each with 2 choices, so multiply three 2s."
  C: "Solution counts multiply, they don't add. That's $2 \\times 2 \\times 2$."
  E: "Mod an odd prime there are only 2 square roots of 1, not 4."
verify: "range(0, 104).filter((x) => (x * x) % 105 === 1).length"
---

How many integers $x$ with $0 \le x \le 104$ satisfy $x^2 \equiv 1 \pmod{105}$?

## Hint

Split $105 = 3 \times 5 \times 7$ and count the solutions mod each prime.

## Hint 2

Mod each odd prime, $x \equiv 1$ or $x \equiv -1$.

## Solution

Since $105 = 3 \times 5 \times 7$, we need $x^2 \equiv 1$ mod 3, 5, and 7. Mod each prime there are 2 solutions, 1 and $-1$. By CRT, every combination gives one solution mod 105, so there are $2 \times 2 \times 2 = 8$.

**Answer: (D) 8**
