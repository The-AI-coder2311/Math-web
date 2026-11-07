---
order: 30
difficulty: hard
lesson: 04-count-the-opposite
choices: ["120","240","480","600"]
answer: C
mistakes:
  A: "That's 5 factorial. It counts the row with Al and Bo as one unit, and without their two orders."
  B: "That's the number of ways they DO sit together. Subtract it from the total."
  D: "Check the count of arrangements together: it's 5 factorial times 2, which is 240."
verify: "perms(range(1, 6)).filter((p) => Math.abs(p.indexOf(1) - p.indexOf(2)) !== 1).length"
---

Six kids line up in a row, including Al and Bo, who can't stand next to each other. How many orders are possible?

## Hint

Count the orders where they DO stand together, and subtract.

## Hint 2

Glue them into one unit. That makes 5 units, and they have 2 orders inside the block.

## Solution

There are $6! = 720$ orders in all. If Al and Bo are together, there are $5! \times 2 = 240$ orders. So $720 - 240 = 480$ keep them apart.

**Answer: (C) 480**
