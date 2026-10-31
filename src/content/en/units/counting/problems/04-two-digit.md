---
order: 4
difficulty: easy
choices: [6, 12, 14, 16, 24]
answer: B
verify: "product([3, 5, 7, 9], [3, 5, 7, 9]).filter(([a, b]) => a !== b).length"
---

How many different two-digit numbers can be made using the digits 3, 5, 7, and 9 if no digit can be used twice in the same number?

## Hint

Build the number one digit at a time. Once you've used a digit for the tens place, how many are left for the ones place?

## Solution

**Step 1.** The tens digit can be any of the 4 digits, so there are 4 options.

**Step 2.** The ones digit can't match the tens digit, so there are 3 options left.

**Step 3.** Multiply:

$$4 \times 3 = 12$$

**A check:** the numbers starting with 3 are 35, 37, and 39. That's 3 numbers, and the same is true for each of the 4 starting digits.

**Answer: (B) 12**
