---
order: 11
difficulty: medium
lesson: 02-fast-sums
choices: ["-100","0","-50","50","100"]
answer: C
mistakes:
  A: "That counts 100 pairs. Each pair uses 2 numbers, so 100 numbers make 50 pairs."
  B: "The pairs don't cancel completely. Each one is $-1$, because the larger number in each pair is subtracted."
  D: "You have the right size, but check the sign. In each pair, the larger number is the one being subtracted."
  E: "Check both the size and the sign. There are 50 pairs, and each one is negative."
verify: "sum(range(1, 100).map((n) => (n % 2 === 1 ? n : -n)))"
---

What is the value of $1 - 2 + 3 - 4 + \cdots + 99 - 100$?

## Hint

Try grouping the terms in pairs, starting from the left.

## Hint 2

Each pair like $(1 - 2)$ equals $-1$. How many pairs are there?

## Solution

**Step 1.** Group the terms: $(1 - 2) + (3 - 4) + \cdots + (99 - 100)$. Each pair equals $-1$.

**Step 2.** 100 numbers make 50 pairs, so the sum is $50 \times (-1) = -50$.

**Answer: (C) -50**
