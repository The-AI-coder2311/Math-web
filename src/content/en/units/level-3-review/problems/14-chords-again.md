---
order: 14
difficulty: medium
from: similar-shapes-circles/03-chords-and-tangents
choices: ["2","4.5","5","7","8"]
answer: E
mistakes:
  A: "That's $6 - 4$. The rule uses multiplication."
  B: "That's $6 \\times 3 \\div 4$, which mixes pieces of different chords. The two pieces of one chord multiply to the same number as the two pieces of the other."
  C: "Check it: $3 \\times 5$ is 15, but $6 \\times 4$ is 24. The products have to match."
  D: "That's $10 - 3$, which assumes that the chords are equal. They don't have to be."
verify: "range(1, 30).find((d) => 3 * d === 6 * 4)"
---

Chords $AB$ and $CD$ of a circle cross at $E$. If $AE = 6$, $EB = 4$, and $CE = 3$, how long is $ED$?

## Hint

The products of the pieces are equal.

## Hint 2

$6 \times 4 = 3 \times ED$.

## Solution

The products are equal: $6 \times 4 = 3 \times ED$. So $ED = 24 \div 3 = 8$.

**Answer: (E) 8**
