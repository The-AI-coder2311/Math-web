---
order: 20
difficulty: hard
lesson: 04-units-digits-and-remainders
choices: ["1","3","9","7","5"]
answer: E
mistakes:
  A: "That's the last spot for 3s. Here, 101 divided by 4 leaves 1."
  B: "That's the last digit of $3^{101}$ alone. Add the last digit of $2^{101}$."
  D: "That's from the last spots, $6 + 1$, for a remainder of 0. Here, 101 divided by 4 leaves 1."
  C: "Check each last digit: 2 and 3, for a remainder of 1."
verify: "(range(1, 101).reduce((u) => (u * 2) % 10, 1) + range(1, 101).reduce((u) => (u * 3) % 10, 1)) % 10"
---

What is the last digit of $2^{101} + 3^{101}$?

## Hint

Find each last digit separately. What are the cycles for 2 and 3?

## Hint 2

The cycles are 2, 4, 8, 6 and 3, 9, 7, 1. Since $101 = 4 \times 25 + 1$, you land on the 1st spot of each.

## Solution

Both cycles have length 4, and $101 = 4 \times 25 + 1$. So $2^{101}$ ends in 2, and $3^{101}$ ends in 3. The sum ends in $2 + 3 = 5$.

**Answer: (E) 5**
