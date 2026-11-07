---
order: 22
difficulty: easy
lesson: 02-when-order-matters
choices: ["10","20","25","120"]
answer: B
mistakes:
  A: "That's the number of pairs, if order doesn't matter. Gold and silver are different prizes."
  C: "That lets one runner win both medals."
  D: "That fills 5 spots. There are only 2 medals."
verify: "perms(range(1, 5)).map((p) => p.slice(0, 2).join()).filter((x, i, l) => l.indexOf(x) === i).length"
---

Five runners race. In how many ways can the gold and silver medals be awarded?

## Hint

How many runners can win gold? After that, how many are left for silver?

## Hint 2

There are 5 choices for gold, then 4 for silver.

## Solution

Gold can go to any of 5 runners. Silver can go to any of the other 4. So there are $5 \times 4 = 20$ ways.

**Answer: (B) 20**
