---
order: 19
difficulty: hard
from: triangles/04-similar-triangles
choices: ["10","15","20","40","45"]
answer: D
mistakes:
  A: "That uses a scale factor of 2, comparing $DB$ with $AD$. Compare $AB$ with $AD$, and square."
  B: "That multiplies the area by 3. Area scales by the square of the scale factor."
  C: "That's $5 \\times 4$, using a scale factor of 2. Compare $AB$ with $AD$."
  E: "That's the whole triangle. Subtract the small one."
verify: "(() => { const k = (1 + 2) / 1; return 5 * k * k - 5; })()"
---

In triangle $ABC$, a line parallel to $BC$ crosses $AB$ at $D$ and $AC$ at $E$. If $AD = 3$, $DB = 6$, and triangle $ADE$ has an area of 5, what is the area of the four-sided region $DBCE$?

## Hint

What's the scale factor from the small triangle to the whole one?

## Hint 2

It's $9 \div 3 = 3$. Areas scale by $3 \times 3$.

## Solution

$AB = 9$, so the scale factor is 3. The whole triangle has an area of $5 \times 9 = 45$. The region is $45 - 5 = 40$.

**Answer: (D) 40**
