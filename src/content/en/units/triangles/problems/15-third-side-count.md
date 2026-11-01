---
order: 13
difficulty: medium
lesson: 03-helper-lines
choices: ["6","7","8","13","14"]
answer: B
mistakes:
  A: "That's the smallest limit, which isn't allowed itself. Count 7 through 13."
  C: "That includes 6 or 14, where the triangle would be flat. Count 7 through 13."
  D: "That's the longest possible side, not how many lengths there are."
  E: "That's $4 + 10$, which would make a flat triangle."
verify: "range(1, 30).filter((c) => 4 + 10 > c && 4 + c > 10 && 10 + c > 4).length"
---

A triangle has sides of length 4 and 10, and its third side is a whole number. How many different lengths are possible for the third side?

## Hint

How long can the third side be? How short can it be?

## Hint 2

It has to be less than 14 and more than 6.

## Solution

The third side has to be less than $4 + 10 = 14$ and more than $10 - 4 = 6$. So it's from 7 to 13, which is 7 lengths.

**Answer: (B) 7**
