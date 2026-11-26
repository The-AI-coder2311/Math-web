---
order: 17
difficulty: medium
lesson: 03-law-of-sines-cosines
choices: ["49","89","109","119","129"]
answer: E
mistakes:
  A: "That's the square of the shorter diagonal, which faces the $60^\\circ$ angle."
  B: "That's $25 + 64$ with no correction term. The angle matters."
  C: "Check the correction term: $2 \\cdot 5 \\cdot 8 \\cdot \\frac{1}{2} = 40$."
  D: "Recheck the addition: $25 + 64 + 40 = 129$."
verify: "Math.round(25 + 64 - 2*5*8*Math.cos(120*Math.PI/180))"
---

A parallelogram has sides of length 5 and 8, and one of its angles is $60^\circ$. What is the square of the length of its longer diagonal?

## Hint

The longer diagonal faces the obtuse angle of the parallelogram.

## Hint 2

The obtuse angle is $120^\circ$, and $\cos 120^\circ = -\frac{1}{2}$.

## Solution

**Step 1.** The longer diagonal is opposite the $120^\circ$ angle, in a triangle with sides 5 and 8.

**Step 2.** $d^2 = 25 + 64 - 2 \cdot 5 \cdot 8 \cdot \left(-\frac{1}{2}\right) = 25 + 64 + 40 = 129$.

**Answer: (E) 129**
