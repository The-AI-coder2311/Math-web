---
order: 17
difficulty: hard
lesson: 03-quadratics-and-vieta
choices: ["28","20","32","36","44"]
answer: A
mistakes:
  B: "That's $36 - 16$. The middle part is $2rs = 8$."
  C: "That subtracts only $rs$. The middle part is $2rs$."
  D: "That's $(r + s)^2$. Subtract $2rs$."
  E: "That adds $2rs$. Subtract it."
verify: "(() => { const r = 3 + Math.sqrt(5); const s = 3 - Math.sqrt(5); return Math.round(r * r + s * s); })()"
---

Let $r$ and $s$ be the two solutions of $x^2 - 6x + 4 = 0$. What is the value of $r^2 + s^2$?

## Hint

You don't need to find $r$ and $s$. What do the solutions add up to? What do they multiply to?

## Hint 2

$r + s = 6$ and $rs = 4$.

## Solution

**Step 1.** By Vieta's formulas, $r + s = 6$ and $rs = 4$.

**Step 2.** Use the rearranged perfect square pattern:

$$r^2 + s^2 = (r + s)^2 - 2rs = 36 - 8 = 28$$

**Answer: (A) 28**
