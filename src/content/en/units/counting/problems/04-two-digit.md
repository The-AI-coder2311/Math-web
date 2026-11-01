---
order: 4
difficulty: easy
lesson: 02-when-order-matters
choices: ["6","16","14","12","24"]
answer: D
mistakes:
  A: "That's \"4 choose 2,\" which treats 35 and 53 as the same. They're different numbers, so order matters."
  C: "That's $7 \\times 2$. Build it digit by digit: 4 options, and then 3."
  B: "That's $4 \\times 4$, which lets a digit repeat. The problem doesn't allow that."
  E: "That's $4 \\times 3 \\times 2$, which makes 3-digit numbers."
verify: "product([3, 5, 7, 9], [3, 5, 7, 9]).filter(([a, b]) => a !== b).length"
---

How many different two-digit numbers can be made using the digits 3, 5, 7, and 9 if no digit can be used twice in the same number?

## Hint

Build the number one digit at a time. Once you've used a digit for the tens place, how many are left for the ones place?

## Hint 2

There are 4 options for the first digit. How many are left for the second?

## Solution

**Step 1.** The tens digit can be any of the 4 digits, so there are 4 options.

**Step 2.** The ones digit can't match the tens digit, so there are 3 options left.

**Step 3.** Multiply:

$$4 \times 3 = 12$$

**A check:** the numbers starting with 3 are 35, 37, and 39. That's 3 numbers, and the same is true for each of the 4 starting digits.

**Answer: (D) 12**
