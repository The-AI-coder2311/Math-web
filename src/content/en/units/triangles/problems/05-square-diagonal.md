---
order: 5
difficulty: medium
choices: [9, 12, 18, 24, 36]
answer: C
verify: "(() => { const sideSquared = range(1, 36).find((s) => s + s === 6 * 6); return sideSquared; })()"
---

A square has a diagonal of length 6. What is the area of the square?

## Hint

The diagonal is the hypotenuse of a right triangle with two equal legs. You don't need to find the side length itself. You just need to know the side times itself.

## Solution

**Step 1.** Let the side be $s$. The diagonal makes a right triangle with two legs of length $s$, so:

$$s^2 + s^2 = 6^2$$

**Step 2.** That means $2 s^2 = 36$, so $s^2 = 18$.

**Step 3.** The area of a square is exactly $s^2$, so the area is 18.

**Answer: (C) 18**
