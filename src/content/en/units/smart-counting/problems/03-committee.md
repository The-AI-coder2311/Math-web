---
order: 3
difficulty: easy
lesson: 04-grid-paths
choices: ["10","15","20","30","60"]
answer: A
mistakes:
  B: "That's $5 \\times 3$. Multiply $5 \\times 4 \\times 3$, and then divide by 6."
  C: "That divides by 3. Three people can be picked in $3 \\times 2 \\times 1 = 6$ orders."
  D: "That's $60 \\div 2$. Each committee of 3 was counted $3 \\times 2 \\times 1 = 6$ times, not 2."
  E: "That counts each committee once for every order. Divide by 6."
verify: "combos(range(1, 5), 3).length"
---

A team of 5 students must choose 3 of its members to form a committee. How many different committees are possible?

## Hint

Multiply first. Then ask how many different orders the same 3 people could be picked in.

## Hint 2

$5 \times 4 \times 3 = 60$. The same 3 people can be picked in 6 orders.

## Solution

**Step 1.** Picking one at a time gives $5 \times 4 \times 3 = 60$.

**Step 2.** The same 3 people can be picked in $3 \times 2 \times 1 = 6$ different orders, so divide by 6: $60 \div 6 = 10$.

**Answer: (A) 10**
