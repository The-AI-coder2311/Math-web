---
order: 6
difficulty: easy
lesson: 01-place-value
choices: ["7","70","700","4730","7000"]
answer: C
mistakes:
  A: "That's the digit's face value. Its place makes it worth more."
  B: "That's the tens place. The 3 is in the tens place, and the 7 is one place to its left."
  D: "That's the whole number. The question asks about the 7 alone."
  E: "That's the thousands place, where the 4 is."
verify: "Math.floor(4730 / 100) % 10 * 100"
---

In the number 4,730, how much is the digit 7 worth?

## Hint

Which place is the 7 in?

## Hint 2

From the right, the places are ones, tens, hundreds, and thousands.

## Solution

The 7 is in the hundreds place, so it's worth $7 \times 100 = 700$.

**Answer: (C) 700**
