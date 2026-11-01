---
order: 18
difficulty: hard
lesson: 01-overlaps
choices: ["16","62","46","50","44"]
answer: E
mistakes:
  A: "That's how many are divisible by **none** of them. Subtract it from 60."
  C: "That adds back too much. Multiples of 30 number only 2, so it's $62 - 20 + 2$."
  D: "That subtracts only some of the pairs. Subtract all three."
  B: "That adds the groups without fixing the overlaps."
verify: "range(1, 60).filter((n) => n % 2 === 0 || n % 3 === 0 || n % 5 === 0).length"
---

How many whole numbers from 1 to 60 are divisible by 2, 3, or 5 (or more than one of them)?

## Hint

Count each group, subtract the pairs, and add back the triple.

## Hint 2

Groups: 30, 20, and 12. Pairs: 10, 6, and 4. Triple: 2.

## Solution

**Step 1.** Groups: $30 + 20 + 12 = 62$.

**Step 2.** Pairs (multiples of 6, 10, and 15): $10 + 6 + 4 = 20$.

**Step 3.** Triple (multiples of 30): 2.

**Step 4.** $62 - 20 + 2 = 44$.

**Answer: (E) 44**
