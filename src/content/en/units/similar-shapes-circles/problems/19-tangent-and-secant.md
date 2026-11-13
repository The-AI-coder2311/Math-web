---
order: 19
difficulty: hard
lesson: 03-chords-and-tangents
choices: ["6","7","8","12","64"]
answer: C
mistakes:
  A: "That would need $PT^2 = 36$. Multiply $PA$ by the whole length $PB$, which gives 64."
  B: "That's close to $\\sqrt{48}$, which comes from using $4 \\times 12$. $PB$ includes the outside piece, so it's 16, not 12."
  D: "That's the piece inside the circle. The tangent length comes from the rule $PT^2 = PA \\times PB$."
  E: "That's $PT^2$. Which number squared is 64?"
verify: "range(1, 30).find((t) => t * t === 4 * (4 + 12))"
---

From a point $P$ outside a circle, a line passes through the circle, meeting it first at $A$ and then at $B$. Another line from $P$ is tangent to the circle at $T$. If $PA = 4$ and $AB = 12$, how long is $PT$?

## Hint

The rule is $PT^2 = PA \times PB$. What is $PB$?

## Hint 2

$PB$ is the whole distance from $P$, which is $4 + 12 = 16$.

## Solution

**Step 1.** The whole distance is $PB = 4 + 12 = 16$.

**Step 2.** So $PT^2 = 4 \times 16 = 64$, and $PT = 8$.

**Answer: (C) 8**
