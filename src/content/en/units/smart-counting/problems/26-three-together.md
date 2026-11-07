---
order: 26
difficulty: medium
lesson: 02-restrictions
choices: ["120","720","840","5040"]
answer: B
mistakes:
  A: "That's the orders of the 5 units. Don't forget the 3 friends' order inside the block."
  C: "Check the multiplication: it's 5 factorial times 3 factorial."
  D: "That's every order of 7 people, with no rule."
verify: "perms(range(1, 7)).filter((p) => Math.max(p.indexOf(1), p.indexOf(2), p.indexOf(3)) - Math.min(p.indexOf(1), p.indexOf(2), p.indexOf(3)) === 2).length"
---

Seven people stand in a row. Three of them are friends who must stand together. How many orders are possible?

## Hint

Glue the three friends into one block. How many units is that?

## Hint 2

There are 5 units. The friends can also change order inside their block.

## Solution

The block and the other 4 people make 5 units, which can go in $5! = 120$ orders. The friends can go in $3! = 6$ orders inside the block. So there are $120 \times 6 = 720$ orders.

**Answer: (B) 720**
