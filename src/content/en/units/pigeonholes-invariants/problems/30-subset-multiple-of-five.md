---
order: 30
difficulty: hard
lesson: 01-pigeonhole-power
choices: ["3","4","5","6"]
answer: C
mistakes:
  A: "The numbers 1, 1, and 1 have no such group."
  B: "The numbers 1, 1, 1, and 1 have no such group."
  D: "That's enough, but one fewer is already enough."
verify: "range(1, 6).find((k) => product(...Array(k).fill(range(0, 4))).every((w) => range(1, 2 ** k - 1).some((mask) => sum(w.filter((_, i) => (mask >> i) & 1)) % 5 === 0)))"
---

What is the smallest number $k$ such that, among any $k$ whole numbers, some group of one or more of them has a sum that's a multiple of 5?

## Hint

Line the numbers up, and look at the running totals. What are the boxes?

## Hint 2

Use the running totals' remainders mod 5 as boxes.

## Solution

Take any 5 numbers in a row, and look at the 5 running totals. If one is a multiple of 5, we're done. If not, they have 4 possible remainders, so two running totals share one. Subtracting those two leaves a group of numbers in a row with a sum that's a multiple of 5.

Four numbers aren't enough, since 1, 1, 1, and 1 have sums of only 1 through 4.

**Answer: (C) 5**
