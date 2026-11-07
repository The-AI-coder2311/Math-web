---
order: 25
difficulty: medium
lesson: 02-restrictions
choices: ["5","24","60","120"]
answer: B
mistakes:
  A: "That's the number of ways to rotate one seating."
  C: "That divides by 2 as well. Here, only rotations count as the same."
  D: "That counts rotations as different seatings."
verify: "perms(range(2, 5)).length"
---

Five people sit around a round table. Two seatings count as the same if one can be rotated into the other. How many seatings are there?

## Hint

Sit one person down first, as a reference point.

## Hint 2

The other 4 people then fill the other seats.

## Solution

Fix one person's seat, since rotations don't matter. The other 4 people can be arranged in $4! = 24$ ways.

**Answer: (B) 24**
