---
order: 17
difficulty: hard
lesson: 02-triangle-area
choices: ["36","48","72","96","144"]
answer: C
mistakes:
  A: "That's only one side triangle, if $P$ is in the middle. The question asks for both together."
  B: "That's $\\frac{1}{3}$ of the square. The three triangles aren't equal in general."
  D: "That's $\\frac{2}{3}$ of the square. The middle triangle is exactly half of the square, so the rest is half."
  E: "That's the whole square, which includes the middle triangle."
verify: "(() => { const middle = (x) => Math.abs(12 * 12 - x * 0) / 2; const left = range(0, 12).map((x) => 144 - middle(x)); return new Set(left).size === 1 ? left[0] : -1; })()"
---

A square has sides of 12. Point $P$ is anywhere on the top side, between the two top corners. Lines from $P$ to the two bottom corners cut the square into 3 triangles. What is the total area of the two side triangles?

## Hint

Start with the middle triangle. What are its base and height?

## Hint 2

Its base is the bottom side, 12, and its height is the full height of the square, 12. So its area is half of the square, wherever $P$ is.

## Solution

The middle triangle has a base of 12 and a height of 12, so its area is $\frac{1}{2} \times 12 \times 12 = 72$. The square's area is 144, so the two side triangles together have $144 - 72 = 72$.

**Answer: (C) 72**
