---
order: 13
difficulty: medium
lesson: 04-mixed-circle-problems
choices: ["2","2.4","3","4","5"]
answer: A
mistakes:
  B: "That's half of the height to the hypotenuse, 4.8. The rule uses area and semiperimeter."
  C: "That's half of the short leg. A circle with a radius of 3 wouldn't fit inside this triangle."
  D: "That's the area divided by the short leg. Use the semiperimeter."
  E: "That's half of the hypotenuse, which is the radius of the circle **around** the triangle. This circle is inside it."
verify: "range(1, 50).map((n) => n / 10).find((r) => Math.abs(Math.abs(3 * r + 4 * r - 24) / 5 - r) < 1e-9)"
---

A circle sits inside a right triangle with sides 6, 8, and 10, touching all three sides. What is the radius of the circle?

## Hint

Connect the center to each corner. What are the areas of the three small triangles?

## Hint 2

Each has a height of $r$. Adding them gives area = $r$ × semiperimeter. The area is 24, and the semiperimeter is 12.

## Solution

The area is $\frac{1}{2} \times 6 \times 8 = 24$, and the semiperimeter is $(6 + 8 + 10) \div 2 = 12$. Since area = $r$ × semiperimeter, $r = 24 \div 12 = 2$.

**Answer: (A) 2**
