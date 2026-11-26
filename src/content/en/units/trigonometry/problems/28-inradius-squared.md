---
order: 28
difficulty: hard
lesson: 05-trig-area
choices: ["1","2","3","4","7"]
answer: C
mistakes:
  A: "Check the area: the $120^\\circ$ angle gives $K = 14\\sqrt{3}$."
  B: "Recheck the semiperimeter: $\\frac{7 + 8 + 13}{2} = 14$."
  D: "That uses $\\sin 120^\\circ = 1$. It's $\\frac{\\sqrt{3}}{2}$."
  E: "That's $\\frac{K}{2}$ or similar. Use $r = \\frac{K}{s}$ and then square."
verify: "(() => { const a = 7, b = 8, c = 13, s = (a+b+c)/2; const K = Math.sqrt(s*(s-a)*(s-b)*(s-c)); return Math.round((K/s)**2); })()"
---

A triangle has sides 7, 8, and 13. Let $r$ be the radius of the circle inscribed in the triangle. What is $r^2$?

## Hint

Find the angle between the sides 7 and 8 first.

## Hint 2

That angle is $120^\circ$. Use it for the area, then $K = rs$.

## Solution

**Step 1.** The angle between 7 and 8 has cosine $\frac{49 + 64 - 169}{112} = -\frac{1}{2}$, so it's $120^\circ$.

**Step 2.** $K = \frac{1}{2} \cdot 7 \cdot 8 \cdot \frac{\sqrt{3}}{2} = 14\sqrt{3}$.

**Step 3.** The semiperimeter is 14, so $r = \sqrt{3}$ and $r^2 = 3$.

**Answer: (C) 3**
