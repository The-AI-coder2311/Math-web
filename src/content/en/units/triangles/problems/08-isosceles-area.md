---
order: 8
difficulty: medium
choices: [30, 48, 60, 65, 120]
answer: B
verify: "(() => { const h = range(1, 17).find((x) => x * x + 6 * 6 === 10 * 10); return (12 * h) / 2; })()"
---

An isosceles triangle has sides of length 10, 10, and 12. What is its area?

## Hint

Draw the height from the top corner down to the side of length 12. It cuts that side exactly in half.

## Solution

**Step 1.** The height cuts the base of 12 into two pieces of 6, which makes two right triangles. Each has a leg of 6 and a hypotenuse of 10.

**Step 2.** Find the height $h$: $h^2 = 10^2 - 6^2 = 100 - 36 = 64$, so $h = 8$.

**Step 3.** The area is $\frac{1}{2} \times 12 \times 8 = 48$.

**Answer: (B) 48**
