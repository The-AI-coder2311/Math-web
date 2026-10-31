---
order: 3
difficulty: easy
choices: ['3, 4, 5', '2, 3, 6', '5, 5, 8', '4, 6, 9', '7, 8, 9']
answer: B
verify: "[[3, 4, 5], [2, 3, 6], [5, 5, 8], [4, 6, 9], [7, 8, 9]].find(([a, b, c]) => a + b <= c).join(', ')"
---

Which three lengths **cannot** be the sides of a triangle?

## Hint

Add the two shorter sides together. What has to be true of that sum?

## Solution

The two shorter sides must add up to more than the longest side. Check each choice:

- For 3, 4, 5: $3 + 4 = 7$, which is more than 5.
- For 2, 3, 6: $2 + 3 = 5$, which is **less** than 6.
- For 5, 5, 8: $5 + 5 = 10$, which is more than 8.
- For 4, 6, 9: $4 + 6 = 10$, which is more than 9.
- For 7, 8, 9: $7 + 8 = 15$, which is more than 9.

Only 2, 3, 6 fails.

**Answer: (B) 2, 3, 6**
