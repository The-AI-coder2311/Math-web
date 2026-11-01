---
order: 11
difficulty: medium
lesson: 03-chords-and-tangents
choices: ["5","10","12","13","36"]
answer: C
mistakes:
  A: "That's $9 - 4$. The rule uses multiplication, not subtraction."
  B: "That's $13 - 3$, as if the two chords had the same length. They don't have to."
  D: "That's the whole chord $AB$. The rule gives the piece $ED$ by itself."
  E: "That's the product of the pieces. Divide by 3 to find $ED$."
verify: "range(1, 50).find((d) => 3 * d === 4 * 9)"
---

Chords $AB$ and $CD$ of a circle cross at $E$. If $AE = 4$, $EB = 9$, and $CE = 3$, how long is $ED$?

## Hint

When two chords cross, the products of their pieces are equal.

## Hint 2

So $4 \times 9 = 3 \times ED$.

## Solution

The products of the pieces are equal: $4 \times 9 = 3 \times ED$. So $ED = 36 \div 3 = 12$.

**Answer: (C) 12**
