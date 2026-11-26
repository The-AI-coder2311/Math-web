---
order: 15
difficulty: medium
lesson: 03-law-of-sines-cosines
choices: ["60","75","90","105","120"]
answer: E
mistakes:
  A: "That's the angle with cosine $+\\frac{1}{2}$. Check the sign of $49 + 64 - 169$."
  B: "Compute the cosine with the Law of Cosines instead of estimating."
  C: "A right angle would need $7^2 + 8^2$ to equal $13^2$, but $49 + 64$ is only 113."
  D: "The cosine comes out to exactly $-\\frac{1}{2}$, which is not $105^\\circ$."
verify: "Math.round(Math.acos((49 + 64 - 169) / (2*7*8)) * 180 / Math.PI)"
---

A triangle has sides of length 7, 8, and 13. What is the measure, in degrees, of its largest angle?

## Hint

The largest angle is opposite the longest side.

## Hint 2

Solve the Law of Cosines for the cosine: $\cos C = \frac{a^2 + b^2 - c^2}{2ab}$.

## Solution

**Step 1.** The largest angle $C$ is opposite the side of length 13.

**Step 2.** $\cos C = \frac{49 + 64 - 169}{112} = \frac{-56}{112} = -\frac{1}{2}$.

**Step 3.** The angle between $0^\circ$ and $180^\circ$ with that cosine is $120^\circ$.

**Answer: (E) 120**
