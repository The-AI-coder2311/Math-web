---
order: 13
difficulty: medium
lesson: 02-shaded-regions
choices: ["$36\\pi - 36$","$36\\pi - 72$","$36\\pi - 144$","$72 - 36\\pi$","$144 - 36\\pi$"]
answer: B
mistakes:
  A: "That uses a side of 6, which is the radius. The diagonal is 12."
  C: "That uses a side of 12, but 12 is the diagonal. Also, $36\\pi$ is smaller than that square."
  D: "That's backwards, and it's negative. The circle is the larger shape here."
  E: "That's a circle inside a square with sides of 12. Here, the square is inside the circle."
verify: "(() => { const s2 = range(1, 200).find((x) => x + x === 12 * 12); return `${pi(36)} - ${s2}`; })()"
---

A square is drawn inside a circle of radius 6, with all four of its corners on the circle. What is the area of the part of the circle outside the square?

## Hint

The diagonal of the square goes through the center. How long is it?

## Hint 2

The diagonal is 12, so $s^2 + s^2 = 144$, and the square's area is 72.

## Solution

The diagonal of the square is a diameter, 12. So $s^2 + s^2 = 144$, which means the square's area, $s^2$, is 72. The circle's area is $36\pi$, so the answer is $36\pi - 72$.

**Answer: (B) $36\pi - 72$**
