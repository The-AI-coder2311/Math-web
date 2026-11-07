---
order: 24
difficulty: medium
lesson: 01-arithmetic-sequences
choices: ["6","7","8","10"]
answer: C
mistakes:
  A: "Test it: 4, 5, 6 has a product of 120, not 80."
  B: "Test it: 3, 5, 7 has a product of 105, not 80."
  D: "Test it: 0, 5, 10 has a product of 0, not 80."
verify: "range(0, 5).map((d) => [5 - d, 5, 5 + d]).filter((l) => l[0] * l[1] * l[2] === 80).map((l) => l[2]).join()"
---

Three numbers in an arithmetic sequence have a sum of 15 and a product of 80. What is the largest of them?

## Hint

Call them $a - d$, $a$, and $a + d$. What's $a$?

## Hint 2

$a = 5$. So $5(25 - d^2) = 80$.

## Solution

The middle is $15 \div 3 = 5$. Then $5(25 - d^2) = 80$, so $25 - d^2 = 16$, and $d = 3$. The numbers are 2, 5, and 8, so the largest is 8.

**Answer: (C) 8**
