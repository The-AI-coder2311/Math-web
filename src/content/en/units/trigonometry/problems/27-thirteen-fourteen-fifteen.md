---
order: 27
difficulty: medium
lesson: 05-trig-area
choices: ["56","60","65","70","84"]
answer: C
mistakes:
  A: "That's $4 \\times 14$. Use $R = \\frac{abc}{4K}$ with $K = 84$."
  B: "Recheck $\\frac{2730}{336}$. It simplifies to $\\frac{65}{8}$."
  D: "That's $5 \\times 14$. Compute $R$ from the formula."
  E: "That's the area, not $8R$."
verify: "(() => { const s = 21; const K = Math.sqrt(s*(s-13)*(s-14)*(s-15)); return Math.round(8 * 13*14*15 / (4*K)); })()"
---

A triangle has sides 13, 14, and 15. Let $R$ be the radius of the circle through its three corners. What is $8R$?

## Hint

Find the area with Heron's formula first.

## Hint 2

Then use $K = \frac{abc}{4R}$.

## Solution

**Step 1.** The semiperimeter is 21, so $K = \sqrt{21 \cdot 8 \cdot 7 \cdot 6} = 84$.

**Step 2.** $R = \frac{13 \cdot 14 \cdot 15}{4 \cdot 84} = \frac{2730}{336} = \frac{65}{8}$.

**Step 3.** So $8R = 65$.

**Answer: (C) 65**
