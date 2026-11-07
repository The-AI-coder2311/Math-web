---
order: 27
difficulty: medium
lesson: 03-working-backwards
choices: ["10","18","22","24"]
answer: C
mistakes:
  A: "That's the amount at the start of day 2. Undo day 1 as well."
  B: "That doubles first and then adds 1. Add 1 first, and then double."
  D: "Check it forward. Half of 24 plus 1 is 13, which leaves 11, not 10."
verify: "range(1, 100).find((n) => { const a = n - (n / 2 + 1); return a - (a / 2 + 1) === 4; })"
---

Each day, Mo gives away half of the marbles on hand, plus 1 more. After 2 days, Mo has 4 marbles left. How many marbles did Mo start with?

## Hint

Undo one day at a time. To undo a day, add 1 and then double.

## Hint 2

Start from 4: $(4 + 1) \times 2 = 10$.

## Solution

Undo day 2: $(4 + 1) \times 2 = 10$. Undo day 1: $(10 + 1) \times 2 = 22$. Check: half of 22 plus 1 is 12, which leaves 10. Half of 10 plus 1 is 6, which leaves 4.

**Answer: (C) 22**
