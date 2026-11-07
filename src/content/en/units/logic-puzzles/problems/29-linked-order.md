---
order: 29
difficulty: hard
lesson: 03-ordering-and-seating
choices: ["10","15","20","30"]
answer: B
mistakes:
  A: "That divides by 12. Here, the clues link together, so count the orders of A, B, C, and D directly."
  C: "Check the orders of A, B, C, and D. There are only 3 that work, out of 24."
  D: "That only uses two of the clues. A before C cuts the count further."
verify: "perms(['A', 'B', 'C', 'D', 'E']).filter((o) => o.indexOf('A') < o.indexOf('B') && o.indexOf('C') < o.indexOf('D') && o.indexOf('A') < o.indexOf('C')).length"
---

Five runners, A, B, C, D, and E, finish a race with no ties. A beats B, C beats D, and A beats C. How many finishing orders are possible?

## Hint

Ignore E for now. In how many ways can A, B, C, and D be ordered?

## Hint 2

A must come first among those four. Then C must come before D, and B can go anywhere.

## Solution

Among A, B, C, and D, A must be first. Then B, C, and D can go in the orders with C before D, which is 3 orders out of 6. So 3 of the 24 orders of these four work. That's $\frac{1}{8}$ of them. Adding E doesn't change that fraction, so $\frac{120}{8} = 15$ orders work.

**Answer: (B) 15**
