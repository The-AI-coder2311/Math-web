---
order: 8
difficulty: medium
from: counting/03-overcount-then-divide
choices: ["20","18","30","60","120"]
answer: A
mistakes:
  B: "That's $6 \\times 3$. Pick one at a time, and then divide."
  C: "That's $6 \\times 5$, which stops after 2 picks."
  D: "That divides by 2. Three people can be ordered in 6 ways."
  E: "That counts every order of the same group. Divide by 6."
verify: "combos(range(1, 6), 3).length"
---

Six students volunteer, and a teacher picks 3 of them to set up chairs. How many different groups of 3 are possible?

## Hint

If the same 3 students are picked in a different order, is it a different group?

## Hint 2

$6 \times 5 \times 4 = 120$ counts each group $3 \times 2 \times 1$ times.

## Solution

Picking in order gives $6 \times 5 \times 4 = 120$. Each group is counted 6 times, so $120 \div 6 = 20$.

**Answer: (A) 20**
