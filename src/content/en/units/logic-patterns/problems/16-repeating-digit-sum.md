---
order: 16
difficulty: hard
lesson: 01-repeating-and-growing
choices: ["120","250","125","128","124"]
answer: E
mistakes:
  A: "That's the 12 full cycles. There are also 2 extra digits."
  C: "That's $12.5 \\times 10$, treating the leftover as half of a cycle. Add the actual extra digits, 3 and 1."
  D: "The extra digits are the first 2 in the cycle, 3 and 1. They add 4, not 8."
  B: "That's 25 cycles. A cycle has 4 digits, so 50 digits make 12 cycles and a bit."
verify: "sum(range(0, 49).map((i) => [3, 1, 4, 2][i % 4]))"
---

The digits 3, 1, 4, 2 repeat in that order forever: 3, 1, 4, 2, 3, 1, 4, 2, ... What is the sum of the first 50 digits?

## Hint

How much does one full cycle add up to? How many full cycles fit in 50 digits?

## Hint 2

One cycle adds up to 10, and $50 = 4 \times 12 + 2$. So there are 12 cycles and 2 extra digits.

## Solution

**Step 1.** One cycle adds up to $3 + 1 + 4 + 2 = 10$.

**Step 2.** $50 = 4 \times 12 + 2$, so 12 cycles add up to 120.

**Step 3.** The 2 extra digits are 3 and 1, which add 4. The total is 124.

**Answer: (E) 124**
