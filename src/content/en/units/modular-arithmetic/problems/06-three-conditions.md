---
order: 10
difficulty: medium
lesson: 03-several-conditions
choices: ["22","52","37","67","87"]
answer: B
mistakes:
  A: "It leaves 1 when divided by 3 and 2 when divided by 5, but 1 when divided by 7."
  C: "It leaves 1 when divided by 3 and 2 when divided by 5, but 2 when divided by 7."
  D: "It leaves 1 when divided by 3 and 2 when divided by 5, but 4 when divided by 7."
  E: "It leaves 2 when divided by 5 and 3 when divided by 7, but 0 when divided by 3."
verify: "range(1, 1000).find((n) => n % 3 === 1 && n % 5 === 2 && n % 7 === 3)"
---

What is the smallest positive whole number that leaves a remainder of 1 when divided by 3, a remainder of 2 when divided by 5, and a remainder of 3 when divided by 7?

## Hint

Start with the rule for the biggest number. List the numbers that have a remainder of 3 when divided by 7, and test each against the other rules.

## Hint 2

Numbers leaving 3 when divided by 7: 3, 10, 17, 24, 31, 38, 45, 52. Keep those ending in 2 or 7.

## Solution

**Step 1.** List the numbers with a remainder of 3 when divided by 7: 3, 10, 17, 24, 31, 38, 45, 52, and so on.

**Step 2.** Keep those with a remainder of 2 when divided by 5, which means ending in 2 or 7: 17 and 52 are the first two.

**Step 3.** Test them with 3: 17 has a remainder of 2, so it fails. And 52 has a remainder of 1, since $52 = 3 \times 17 + 1$. It works.

**Answer: (B) 52**
