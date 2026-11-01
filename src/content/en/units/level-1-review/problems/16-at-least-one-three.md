---
order: 16
difficulty: hard
from: counting/04-count-the-opposite
choices: ["9","19","18","20","72"]
answer: C
mistakes:
  A: "That's only those with a 3 in one place. Check both places."
  B: "That counts 33 twice. It's a single number."
  D: "That counts the 10 numbers with a 3 in each place, and it counts 33 twice."
  E: "That's the count with **no** 3s. Subtract it from 90."
verify: "range(10, 99).filter((n) => digits(n).includes(3)).length"
---

How many 2-digit numbers have at least one digit that is a 3?

## Hint

Count the opposite. How many 2-digit numbers have no 3s?

## Hint 2

With no 3s, there are 8 options for the first digit and 9 for the second.

## Solution

There are 90 two-digit numbers. With no 3s, there are $8 \times 9 = 72$. So $90 - 72 = 18$.

**Answer: (C) 18**
