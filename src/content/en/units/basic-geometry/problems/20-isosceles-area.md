---
order: 20
difficulty: hard
lesson: 05-right-triangles
choices: ["10","20","12","24","40"]
answer: C
mistakes:
  A: "That's half of 5 times 4, using a slanted side as the height. Draw the real height first."
  B: "That's $\\frac{1}{2} \\times 8 \\times 5$, using a slanted side as the height. The height meets the base at a right angle."
  D: "That's the rectangle around the triangle. The triangle is half of it."
  E: "That's $8 \\times 5$. The slanted side isn't the height, and you also need the one half."
verify: "(() => { const h = range(1, 10).find((x) => x * x + 4 * 4 === 5 * 5); return (8 * h) / 2; })()"
---

An isosceles triangle has sides of length 5, 5, and 8. What is its area?

## Hint

Draw the height from the top corner to the side of length 8. Where does it land?

## Hint 2

It cuts the 8 in half. Now there's a right triangle with a hypotenuse of 5 and a leg of 4.

## Solution

**Step 1.** The height cuts the base into 4 and 4. The right triangle has a leg of 4 and a hypotenuse of 5, so the height is 3.

**Step 2.** The area is $\frac{1}{2} \times 8 \times 3 = 12$.

**Answer: (C) 12**
