---
order: 6
difficulty: medium
choices: [22, 37, 52, 67, 87]
answer: C
verify: "range(1, 1000).find((n) => n % 3 === 1 && n % 5 === 2 && n % 7 === 3)"
---

What is the smallest positive whole number that leaves a remainder of 1 when divided by 3, a remainder of 2 when divided by 5, and a remainder of 3 when divided by 7?

## Hint

Start with the rule for the biggest number. List the numbers that have a remainder of 3 when divided by 7, and test each against the other rules.

## Solution

**Step 1.** List the numbers with a remainder of 3 when divided by 7: 3, 10, 17, 24, 31, 38, 45, 52, and so on.

**Step 2.** Keep those with a remainder of 2 when divided by 5, which means ending in 2 or 7: 17 and 52 are the first two.

**Step 3.** Test them with 3: 17 has a remainder of 2, so it fails. And 52 has a remainder of 1, since $52 = 3 \times 17 + 1$. It works.

**Answer: (C) 52**
