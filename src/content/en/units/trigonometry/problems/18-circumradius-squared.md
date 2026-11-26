---
order: 18
difficulty: hard
lesson: 03-law-of-sines-cosines
choices: ["21","36","49","64","147"]
answer: C
mistakes:
  A: "That's $3 \\times 7$. Square the side: $R^2 = \\frac{49}{3}$."
  B: "Check which angle you used. The side 7 is opposite the $120^\\circ$ angle."
  D: "Recheck the largest angle: $\\cos C = \\frac{9 + 25 - 49}{30} = -\\frac{1}{2}$."
  E: "That's $3 \\times 49$. You found $(2R)^2 \\cdot \\frac{9}{4}$ or forgot to divide by $\\sin^2 C$ correctly. $R^2 = \\frac{49}{3}$."
verify: "(() => { const C = Math.acos((9 + 25 - 49) / 30); const R = 7 / (2*Math.sin(C)); return Math.round(3*R*R); })()"
---

A triangle has sides of length 3, 5, and 7. Let $R$ be the radius of the circle through its three corners. What is $3R^2$?

## Hint

Find one angle with the Law of Cosines, then use the Law of Sines.

## Hint 2

The angle opposite the side of length 7 has cosine $-\frac{1}{2}$.

## Solution

**Step 1.** The angle $C$ opposite 7 has $\cos C = \frac{9 + 25 - 49}{30} = -\frac{1}{2}$, so $C = 120^\circ$ and $\sin C = \frac{\sqrt{3}}{2}$.

**Step 2.** By the Law of Sines, $2R = \frac{7}{\sin C} = \frac{14}{\sqrt{3}}$, so $R = \frac{7}{\sqrt{3}}$.

**Step 3.** $R^2 = \frac{49}{3}$, and $3R^2 = 49$.

**Answer: (C) 49**
