---
order: 8
difficulty: medium
choices: [24, 50, 75, 100, 125]
answer: B
verify: "product(range(1, 5), range(1, 5), range(1, 5)).filter(([a, b, c]) => c % 2 === 0).length"
---

A three-digit number is made using only the digits 1, 2, 3, 4, and 5. Digits may repeat. How many of these numbers are even?

## Hint

What makes a number even? Only one of the three digits decides that. Start with the pickiest digit.

## Solution

**Step 1.** A number is even when its ones digit is even. So the ones digit is the pickiest choice. From our digits, it must be 2 or 4, which gives 2 options.

**Step 2.** The hundreds digit has no special rule, so it has 5 options. The same is true for the tens digit.

**Step 3.** Multiply:

$$5 \times 5 \times 2 = 50$$

**Answer: (B) 50**
