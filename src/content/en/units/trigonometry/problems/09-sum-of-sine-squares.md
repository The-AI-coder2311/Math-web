---
order: 9
difficulty: medium
lesson: 02-trig-identities
choices: ["44","45","88","89","90"]
answer: D
mistakes:
  A: "That's the number of pairs. Double the whole sum, including the middle term."
  B: "That's about half the answer. The problem asks for twice the sum."
  C: "That forgets the middle term $\\sin^2 45^\\circ$, which contributes 1 after doubling."
  E: "That counts 90 terms. The sum runs from $1^\\circ$ to $89^\\circ$."
verify: "Math.round(2 * sum(range(1,89).map(k => Math.sin(k*Math.PI/180)**2)))"
---

What is $2\left(\sin^2 1^\circ + \sin^2 2^\circ + \sin^2 3^\circ + \cdots + \sin^2 89^\circ\right)$?

## Hint

Pair each angle with its complement.

## Hint 2

$\sin(90^\circ - x) = \cos x$, so $\sin^2 x + \sin^2(90^\circ - x) = 1$.

## Solution

**Step 1.** Pair $1^\circ$ with $89^\circ$, $2^\circ$ with $88^\circ$, and so on. Each pair adds to $\sin^2 x + \cos^2 x = 1$.

**Step 2.** There are 44 pairs and the middle term $\sin^2 45^\circ = \frac{1}{2}$. The sum is $44 + \frac{1}{2} = 44.5$.

**Step 3.** Doubling gives 89.

**Answer: (D) 89**
