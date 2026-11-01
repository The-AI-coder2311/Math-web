---
order: 14
difficulty: medium
from: similar-shapes-circles/03-chords-and-tangents
choices: ["2","5","7","8","13"]
answer: D
mistakes:
  A: "That's $6 - 4$. The rule uses multiplication."
  B: "Check it: $3 \\times 5$ is 15, but $6 \\times 4$ is 24. The products have to match."
  C: "That's $10 - 3$, which assumes that the chords are equal. They don't have to be."
  E: "That's $6 + 4 + 3$. The rule is about products."
verify: "range(1, 30).find((d) => 3 * d === 6 * 4)"
---

Chords $AB$ and $CD$ of a circle cross at $E$. If $AE = 6$, $EB = 4$, and $CE = 3$, how long is $ED$?

## Hint

The products of the pieces are equal.

## Hint 2

$6 \times 4 = 3 \times ED$.

## Solution

The products are equal: $6 \times 4 = 3 \times ED$. So $ED = 24 \div 3 = 8$.

**Answer: (D) 8**
