---
order: 23
difficulty: medium
lesson: 05-factorial-zeros
choices: ["6","8","9","10","18"]
answer: B
mistakes:
  A: "That counts the multiples of 3. But 9 and 18 each hold a second 3."
  C: "That adds a term for 27, but 27 is bigger than 20."
  D: "That's what you get by dividing 20 by 2. Use powers of 3 instead."
  E: "That's the number of 2s in $20!$. This question asks about 3s."
verify: "range(1, 20).find((k) => { let f = 1n; for (let i = 2n; i <= 20n; i++) f *= i; return f % 3n ** BigInt(k + 1) !== 0n; })"
---

What is the largest whole number $k$ such that $3^k$ divides $20!$?

## Hint

Count the multiples of 3, then the multiples of 9, and so on.

## Hint 2

Up to 20, there are 6 multiples of 3. How many multiples of 9 are there?

## Solution

There are 6 multiples of 3 up to 20. There are 2 multiples of 9, which are 9 and 18, and each one adds a second 3. Since 27 is bigger than 20, we stop. So $k = 6 + 2 = 8$.

**Answer: (B) 8**
