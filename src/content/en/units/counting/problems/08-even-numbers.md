---
order: 9
difficulty: medium
lesson: 01-multiply-choices
choices: ["24","50","75","100","125"]
answer: B
mistakes:
  A: "That's $4 \\times 3 \\times 2$, which doesn't allow repeats. This problem does allow them."
  C: "That's $3 \\times 5 \\times 5$, which uses the odd digits for the last spot. Only 2 and 4 are even."
  D: "That's half of $200$. Only 2 of the 5 digits are even, not half of them."
  E: "That counts all of the numbers. The last digit has to be even."
verify: "product(range(1, 5), range(1, 5), range(1, 5)).filter(([a, b, c]) => c % 2 === 0).length"
---

A three-digit number is made using only the digits 1, 2, 3, 4, and 5. Digits may repeat. How many of these numbers are even?

## Hint

What makes a number even? Only one of the three digits decides that. Start with the pickiest digit.

## Hint 2

The last digit must be 2 or 4. The other two digits have 5 options each.

## Solution

**Step 1.** A number is even when its ones digit is even. So the ones digit is the pickiest choice. From our digits, it must be 2 or 4, which gives 2 options.

**Step 2.** The hundreds digit has no special rule, so it has 5 options. The same is true for the tens digit.

**Step 3.** Multiply:

$$5 \times 5 \times 2 = 50$$

**Answer: (B) 50**
