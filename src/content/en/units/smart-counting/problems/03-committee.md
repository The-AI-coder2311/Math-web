---
order: 3
difficulty: easy
choices: [5, 10, 15, 20, 60]
answer: B
verify: "combos(range(1, 5), 3).length"
---

A team of 5 students must choose 3 of its members to form a committee. How many different committees are possible?

## Hint

Multiply first. Then ask how many different orders the same 3 people could be picked in.

## Solution

**Step 1.** Picking one at a time gives $5 \times 4 \times 3 = 60$.

**Step 2.** The same 3 people can be picked in $3 \times 2 \times 1 = 6$ different orders, so divide by 6: $60 \div 6 = 10$.

**Answer: (B) 10**
