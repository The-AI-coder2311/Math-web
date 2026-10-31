---
order: 9
difficulty: hard
choices: ['$\frac{\pi}{12}$', '$\frac{\pi}{6}$', '$\frac{\pi}{4}$', '$\frac{\pi}{3}$', '$\frac{1}{3}$']
answer: A
verify: "`${pi(1)}/${(3 * 2) * 2}`"
---

Three identical circles sit in a row inside a rectangle, and each circle touches its neighbors. The rectangle is the smallest one that holds all three circles. A point in the rectangle is chosen at random. What is the probability that it is inside the **middle** circle?

## Hint

The answer doesn't depend on the size of the circles, so let each one have a radius of 1. How long and how wide is the rectangle?

## Solution

**Step 1.** Let each radius be 1, so each circle has a diameter of 2.

**Step 2.** Three circles in a row make the rectangle $3 \times 2 = 6$ long, and it's 2 wide. So its area is $6 \times 2 = 12$.

**Step 3.** The middle circle has an area of $\pi \times 1^2$, which is $\pi$.

**Step 4.** The probability is the area you want divided by the total area, which is $\frac{\pi}{12}$.

**Answer: (A) $\frac{\pi}{12}$**
