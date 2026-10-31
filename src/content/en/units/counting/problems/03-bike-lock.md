---
order: 3
difficulty: easy
choices: [30, 100, 729, 999, 1000]
answer: E
verify: "product(range(0, 9), range(0, 9), range(0, 9)).length"
---

A bike lock has 3 dials. Each dial can be set to any digit from 0 through 9, and digits are allowed to repeat. How many different codes are possible?

## Hint

First, count the digits from 0 through 9. Be careful: it's more than 9! Then think of each dial as a separate choice.

## Solution

**Step 1.** The digits from 0 through 9 are 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9. That's 10 digits, so each dial has 10 options.

**Step 2.** There are 3 dials, and each is a separate choice. Digits can repeat, so the number of options stays the same:

$$10 \times 10 \times 10 = 1000$$

**A check:** the codes run from 000 up to 999. That's every whole number from 0 to 999, which is 1000 numbers.

**Answer: (E) 1000**
