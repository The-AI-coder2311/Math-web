---
order: 7
difficulty: medium
choices: [15, 60, 100, 125, 243]
answer: D
verify: "range(100, 999).filter((n) => digits(n).every((d) => d % 2 === 1)).length"
---

How many three-digit numbers have only odd digits? (For example, 739 and 111 both count, but 725 does not.)

## Hint

List the odd digits first and count them. Can a digit repeat? The example 111 gives you a clue.

## Solution

**Step 1.** The odd digits are 1, 3, 5, 7, and 9. That's 5 digits.

**Step 2.** Each of the 3 places (hundreds, tens, and ones) can be any odd digit. The example 111 shows that digits can repeat, so each place has 5 options.

**Step 3.** Multiply:

$$5 \times 5 \times 5 = 125$$

**Answer: (D) 125**
