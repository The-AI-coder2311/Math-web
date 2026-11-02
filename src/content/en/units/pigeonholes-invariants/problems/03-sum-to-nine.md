---
order: 3
difficulty: easy
lesson: 01-pigeonhole-power
choices: ["3","4","5","6","8"]
answer: C
mistakes:
  A: "The picks 1, 2, and 3 have no pair that adds up to 9."
  B: "The picks 1, 2, 3, and 4 have no pair that adds up to 9."
  D: "That's enough, but you can be sure with one fewer."
  E: "That's all of the numbers. You need far fewer."
verify: "range(1, 8).find((k) => combos(range(1, 8), k).every((s) => s.some((a) => s.includes(9 - a))))"
---

You pick numbers from 1 to 8. How many must you pick to be sure that two of them add up to 9?

## Hint

Sort the numbers into boxes, where two numbers in one box add up to 9.

## Hint 2

The boxes are 1 and 8, 2 and 7, 3 and 6, and 4 and 5.

## Solution

There are 4 boxes, so 5 picks put two numbers in one box, and those two add up to 9. Four picks aren't enough, since 1, 2, 3, and 4 have no such pair.

**Answer: (C) 5**
