---
order: 19
difficulty: hard
from: similar-shapes-circles/01-similarity-tools
choices: ["10","25","12.5","12","144"]
answer: D
mistakes:
  A: "Use the rule: height squared is the product of the pieces."
  C: "That's half of the hypotenuse. The height is a little shorter."
  B: "That's the hypotenuse."
  E: "That's the height squared. Take the square root."
verify: "range(1, 30).find((h) => h * h === 9 * 16)"
---

In a right triangle, the height drawn from the right angle splits the hypotenuse into pieces of 9 and 16. How long is the height?

## Hint

The two smaller triangles are similar.

## Hint 2

Height squared equals the product of the pieces.

## Solution

The height squared equals $9 \times 16 = 144$, so the height is 12.

**Answer: (D) 12**
