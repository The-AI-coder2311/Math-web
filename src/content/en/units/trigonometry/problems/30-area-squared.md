---
order: 30
difficulty: hard
lesson: 05-trig-area
choices: ["100","225","300","375","400"]
answer: C
mistakes:
  A: "That's $10^2$. The area is $10\\sqrt{3}$, so its square has a factor of 3."
  B: "Check the angle: the angle between 5 and 8 is $60^\\circ$, with $\\cos = \\frac{1}{2}$."
  D: "Recheck the area: $\\frac{1}{2} \\cdot 5 \\cdot 8 \\cdot \\frac{\\sqrt{3}}{2} = 10\\sqrt{3}$."
  E: "That's $20^2$, which forgets the one half in the area formula."
verify: "(() => { const a = 5, b = 7, c = 8, s = (a+b+c)/2; return Math.round(s*(s-a)*(s-b)*(s-c)); })()"
---

A triangle has sides 5, 7, and 8. What is the square of its area?

## Hint

Find the angle between the sides 5 and 8 with the Law of Cosines.

## Hint 2

That angle has cosine $\frac{1}{2}$.

## Solution

**Step 1.** The angle between 5 and 8 is opposite 7, with cosine $\frac{25 + 64 - 49}{80} = \frac{1}{2}$. So it's $60^\circ$.

**Step 2.** The area is $\frac{1}{2} \cdot 5 \cdot 8 \cdot \frac{\sqrt{3}}{2} = 10\sqrt{3}$.

**Step 3.** Its square is $100 \times 3 = 300$.

**Answer: (C) 300**
