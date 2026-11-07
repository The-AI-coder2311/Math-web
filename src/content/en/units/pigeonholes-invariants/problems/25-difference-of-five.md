---
order: 25
difficulty: medium
lesson: 01-pigeonhole-power
choices: ["5","6","7","8"]
answer: B
mistakes:
  A: "The picks 1, 2, 3, 4, and 5 have no two with a difference of 5."
  C: "That's enough, but one fewer is already enough."
  D: "That's enough, but you need fewer. There are only 5 pairs."
verify: "range(1, 10).find((k) => combos(range(1, 10), k).every((s) => s.some((a) => s.includes(a + 5))))"
---

You pick numbers from 1 to 10. How many must you pick to be sure that two of them differ by exactly 5?

## Hint

Make boxes where two picks in a box differ by 5.

## Hint 2

The boxes are 1 and 6, 2 and 7, 3 and 8, 4 and 9, and 5 and 10.

## Solution

There are 5 boxes, so 6 picks put two numbers in a box, and those two differ by 5. Five picks aren't enough, as 1, 2, 3, 4, 5 shows.

**Answer: (B) 6**
