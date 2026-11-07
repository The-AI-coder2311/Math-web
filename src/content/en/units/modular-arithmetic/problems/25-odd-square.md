---
order: 25
difficulty: easy
lesson: 01-mod-notation
choices: ["0","1","2","3"]
answer: B
mistakes:
  A: "That's the remainder for an even square. Test some odd squares: 9, 25, and 49."
  C: "Squares never have this remainder mod 4."
  D: "Squares never have this remainder mod 4."
verify: "[...new Set(range(1, 200).filter((n) => n % 2 === 1).map((n) => (n * n) % 4))].join()"
---

When $n$ is odd, what is the remainder when $n^2$ is divided by 4?

## Hint

Test a few odd numbers.

## Hint 2

$3^2 = 9$, $5^2 = 25$, and $7^2 = 49$.

## Solution

An odd number is $2k + 1$, and $(2k + 1)^2 = 4k^2 + 4k + 1$. Everything but the last 1 is a multiple of 4. So the remainder is 1.

**Answer: (B) 1**
