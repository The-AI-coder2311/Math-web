---
order: 13
difficulty: easy
lesson: 03-law-of-sines-cosines
choices: ["6","7","8","9","13"]
answer: B
mistakes:
  A: "Recheck: $25 + 64 - 40 = 49$."
  C: "That's one of the given sides. The third side is opposite the $60^\\circ$ angle."
  D: "That uses $\\cos 60^\\circ = \\frac{1}{4}$ or similar. The cosine is $\\frac{1}{2}$."
  E: "That adds the correction term. For an acute angle, the Law of Cosines subtracts it."
verify: "Math.round(Math.sqrt(25 + 64 - 2*5*8*Math.cos(60*Math.PI/180)))"
---

Two sides of a triangle have lengths 5 and 8, and the angle between them is $60^\circ$. How long is the third side?

## Hint

Use the Law of Cosines.

## Hint 2

$c^2 = a^2 + b^2 - 2ab\cos C$, with $\cos 60^\circ = \frac{1}{2}$.

## Solution

$c^2 = 25 + 64 - 2 \cdot 5 \cdot 8 \cdot \frac{1}{2} = 49$, so $c = 7$.

**Answer: (B) 7**
