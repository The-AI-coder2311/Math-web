---
order: 8
difficulty: medium
choices: [13, 15, 17, 18, 21]
answer: B
verify: "range(1, 50).find((c) => c * c === 9 * 9 + 12 * 12)"
---

A right triangle has legs of length 9 and 12. How long is its hypotenuse?

## Hint

Use $a^2 + b^2 = c^2$. Then ask which number, times itself, gives your total.

## Solution

**Step 1.** Square the legs and add:

$$9^2 + 12^2 = 81 + 144 = 225$$

**Step 2.** Since $15 \times 15 = 225$, the hypotenuse is 15.

**Notice:** This is the 3-4-5 triangle with every side multiplied by 3.

**Answer: (B) 15**
