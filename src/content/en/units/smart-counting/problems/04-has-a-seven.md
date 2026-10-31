---
order: 4
difficulty: medium
choices: [171, 225, 252, 270, 648]
answer: C
verify: "range(100, 999).filter((n) => digits(n).includes(7)).length"
---

How many 3-digit numbers have at least one digit that is a 7?

## Hint

The words "at least one" are a clue. Count the numbers with no 7s at all. Be careful with the first digit, which can't be 0.

## Solution

**Step 1.** There are 900 three-digit numbers in all.

**Step 2.** For numbers with no 7s, the first digit has 8 choices (not 0 or 7), and each of the other two digits has 9 choices:

$$8 \times 9 \times 9 = 648$$

**Step 3.** Subtract: $900 - 648 = 252$.

**Answer: (C) 252**
