---
order: 16
difficulty: hard
lesson: 01-similarity-tools
choices: ["5","6","6.5","13","36"]
answer: B
mistakes:
  A: "That's $9 - 4$. Use similar triangles: the height squared is the product of the pieces."
  C: "That's half of the hypotenuse, which is the distance to the center of the circle around the triangle. The height is a little shorter."
  D: "That's the whole hypotenuse. The height must be shorter than it."
  E: "That's the height squared. You need one more step: which number squared is 36?"
verify: "range(1, 20).find((h) => h * h === 4 * 9)"
---

In a right triangle, the height drawn from the right angle splits the hypotenuse into pieces of 4 and 9. How long is the height?

## Hint

The height creates two smaller triangles, and they're similar. Write a ratio using the height in both.

## Hint 2

The ratio is $\frac{h}{4} = \frac{9}{h}$, so $h \times h = 4 \times 9$.

## Solution

The two small triangles are similar, so $\frac{h}{4} = \frac{9}{h}$. That gives $h \times h = 36$, and $h = 6$.

**Answer: (B) 6**
