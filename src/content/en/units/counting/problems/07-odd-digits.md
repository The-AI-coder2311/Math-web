---
order: 8
difficulty: medium
lesson: 01-multiply-choices
choices: ["15","60","100","125","243"]
answer: D
mistakes:
  A: "That's $5 + 5 + 5$. Each position is another choice, so multiply."
  B: "That's $5 \\times 4 \\times 3$, which doesn't allow repeats. The number 111 counts, so digits can repeat."
  C: "That's $4 \\times 5 \\times 5$, which would be right if 0 were one of the digits. The odd digits don't include 0, so the first digit has 5 options."
  E: "That's $3^5$, which swaps the two numbers. There are 3 positions with 5 options each."
verify: "range(100, 999).filter((n) => digits(n).every((d) => d % 2 === 1)).length"
---

How many three-digit numbers have only odd digits? (For example, 739 and 111 both count, but 725 does not.)

## Hint

List the odd digits first and count them. Can a digit repeat? The example 111 gives you a clue.

## Hint 2

The odd digits are 1, 3, 5, 7, and 9. Each of the 3 positions has all 5 options.

## Solution

**Step 1.** The odd digits are 1, 3, 5, 7, and 9. That's 5 digits.

**Step 2.** Each of the 3 places (hundreds, tens, and ones) can be any odd digit. The example 111 shows that digits can repeat, so each place has 5 options.

**Step 3.** Multiply:

$$5 \times 5 \times 5 = 125$$

**Answer: (D) 125**
