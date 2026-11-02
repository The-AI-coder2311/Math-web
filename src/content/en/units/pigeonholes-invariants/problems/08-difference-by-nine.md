---
order: 8
difficulty: medium
lesson: 01-pigeonhole-power
choices: ["8","9","10","11","18"]
answer: C
mistakes:
  A: "Eight numbers can all have different remainders when divided by 9."
  B: "Nine numbers can have all nine remainders, 0 through 8. Then no two differ by a multiple of 9."
  D: "That's enough, but one fewer is already enough."
  E: "That's more than you need. The boxes are the remainders mod 9."
verify: "range(1, 12).find((k) => combos(range(0, 8), k).length === 0)"
---

What is the smallest number of whole numbers you can choose so that, no matter which you choose, two of them must differ by a multiple of 9?

## Hint

Use remainders as boxes. How many remainders are possible when you divide by 9?

## Hint 2

Two numbers with the same remainder differ by a multiple of 9.

## Solution

There are 9 possible remainders, from 0 to 8. With 10 numbers, two share a remainder, so their difference is a multiple of 9. Nine numbers aren't enough, since 0 through 8 all have different remainders.

**Answer: (C) 10**
