---
order: 11
difficulty: medium
lesson: 03-helper-lines
choices: ["30","60","48","65","120"]
answer: C
mistakes:
  A: "That's half of a 5 by 12 rectangle. Find the height first: it's 8."
  B: "That uses 10 as the height. The side of 10 slants, so it isn't the height."
  D: "Find the height first with the Pythagorean Theorem. It's 8."
  E: "That's $10 \\times 12$. The side of 10 isn't the height, and you also need the one half."
verify: "(() => { const h = range(1, 17).find((x) => x * x + 6 * 6 === 10 * 10); return (12 * h) / 2; })()"
---

An isosceles triangle has sides of length 10, 10, and 12. What is its area?

## Hint

Draw the height from the top corner down to the side of length 12. It cuts that side exactly in half.

## Hint 2

The height cuts the 12 into 6 and 6. The right triangle has a leg of 6 and a hypotenuse of 10.

## Solution

**Step 1.** The height cuts the base of 12 into two pieces of 6, which makes two right triangles. Each has a leg of 6 and a hypotenuse of 10.

**Step 2.** Find the height $h$: $h^2 = 10^2 - 6^2 = 100 - 36 = 64$, so $h = 8$.

**Step 3.** The area is $\frac{1}{2} \times 12 \times 8 = 48$.

**Answer: (C) 48**
