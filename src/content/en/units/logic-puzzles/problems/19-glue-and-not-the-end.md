---
order: 19
difficulty: hard
lesson: 03-ordering-and-seating
choices: ["6","12","18","24","48"]
answer: D
mistakes:
  A: "That's only the arrangements with A on the left and C in one fixed spot. Count all of them."
  B: "That's how many have C at one end. Subtract those from the total."
  C: "Check your count of arrangements with C at an end. Each end gives 12, not 15."
  E: "That's the count with A next to B, but C could still be at an end."
verify: "perms(['A', 'B', 'C', 'D', 'E']).filter((o) => Math.abs(o.indexOf('A') - o.indexOf('B')) === 1 && o[0] !== 'C' && o[4] !== 'C').length"
---

Five people, A, B, C, D, and E, stand in a row. A must stand next to B, and C can't stand at either end. How many arrangements are possible?

## Hint

First glue A and B together. How many arrangements have A next to B?

## Hint 2

There are 48 of those. Now subtract the ones with C at the left end or at the right end.

## Solution

Glue A and B into a block. There are 4 units, which gives $4! = 24$ orders, and 2 orders inside the block, so there are 48 arrangements.

Now take out the ones with C at an end. With C at the left end, the block, D, and E can go in $3! = 6$ orders, and the block has 2 orders inside, so that's 12. The right end gives 12 more.

So $48 - 24 = 24$ arrangements are left.

**Answer: (D) 24**
