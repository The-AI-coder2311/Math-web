---
order: 11
difficulty: medium
lesson: 01-mod-notation
choices: ["1","3","5","7","9"]
answer: B
mistakes:
  A: "Add the first four factorials: they total 33."
  C: "Add the first four factorials: they total 33."
  D: "Add the first four factorials: they total 33."
  E: "Add the first four factorials: they total 33."
verify: "sum(range(1, 50).map((n) => Number(range(1, n).reduce((p, k) => p * BigInt(k), 1n) % 10n))) % 10"
---

What is the last digit of the sum $1! + 2! + 3! + \cdots + 50!$?

## Hint

What's the last digit of $5!$? What does that tell you about $6!$, $7!$, and every factorial after that?

## Hint 2

From $5!$ on, every factorial ends in 0. So add $1 + 2 + 6 + 24$.

## Solution

**Step 1.** Since $5! = 120$ ends in 0, every later factorial is a multiple of $5!$, so it ends in 0 too. Those terms don't affect the last digit.

**Step 2.** Add the first four terms: $1 + 2 + 6 + 24 = 33$.

**Step 3.** The last digit of 33 is 3.

**Answer: (B) 3**
