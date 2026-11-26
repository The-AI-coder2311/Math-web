---
order: 22
difficulty: medium
lesson: 04-p-adic-valuation
choices: ["2","4","6","8","10"]
answer: B
mistakes:
  A: "That counts only the 1s in 20. Each 1 can be on or off in $k$, giving $2^2$ choices."
  C: "Check with the rule: $k$ can only use the positions where 20 has a 1. That's 0, 4, 16, and 20."
  D: "That would need three 1s in 20. In base 2, 20 has two 1s."
  E: "Odd entries don't come in pairs this simply. Use the base 2 digits of 20."
verify: "(() => { let c = 0, b = 1n; for (let k = 0; k <= 20; k++) { if (b % 2n === 1n) c++; b = (b * BigInt(20 - k)) / BigInt(k + 1); } return c; })()"
---

How many of the 21 numbers $\binom{20}{0}, \binom{20}{1}, \ldots, \binom{20}{20}$ are odd?

## Hint

$\binom{20}{k}$ is odd exactly when adding $k$ and $20 - k$ in base 2 has no carries.

## Hint 2

In base 2, 20 is written 10100. How many numbers have their 1s only where 20 has 1s?

## Solution

By Kummer's theorem with $p = 2$, $\binom{20}{k}$ is odd exactly when every 1 in $k$ (in base 2) sits under a 1 in 20. In base 2, 20 is written 10100, with two 1s, so there are $2^2 = 4$ such $k$: 0, 4, 16, and 20.

**Answer: (B) 4**
