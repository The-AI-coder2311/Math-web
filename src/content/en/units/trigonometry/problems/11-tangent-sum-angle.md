---
order: 11
difficulty: medium
lesson: 02-trig-identities
choices: ["45","90","120","135","150"]
answer: D
mistakes:
  A: "Tangent of $45^\\circ$ is 1, not $-1$. Two acute angles with tangents 2 and 3 are each more than $45^\\circ$."
  B: "That would need $1 - \\tan A\\tan B = 0$. Here the product is 6."
  C: "Check: $\\tan 120^\\circ$ is $-\\sqrt{3}$, not $-1$."
  E: "Check: $\\tan 150^\\circ$ is $-\\frac{\\sqrt{3}}{3}$, not $-1$."
verify: "Math.round((Math.atan(2) + Math.atan(3)) * 180 / Math.PI)"
---

Acute angles $A$ and $B$ satisfy $\tan A = 2$ and $\tan B = 3$. What is $A + B$, in degrees?

## Hint

Use the tangent addition formula.

## Hint 2

$\tan(A + B) = \frac{\tan A + \tan B}{1 - \tan A \tan B}$. Then decide which angle between $0^\circ$ and $180^\circ$ has that tangent.

## Solution

**Step 1.** $\tan(A + B) = \frac{2 + 3}{1 - 6} = -1$.

**Step 2.** $A$ and $B$ are acute, so $A + B$ is between $0^\circ$ and $180^\circ$. The only angle there with tangent $-1$ is $135^\circ$.

**Answer: (D) 135**
