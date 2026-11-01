---
order: 10
difficulty: medium
lesson: 03-chords-and-tangents
choices: ["6","7","8","13","14"]
answer: B
mistakes:
  A: "That's the tangent from $B$. Check: $13 - 7 = 6$."
  C: "That's the tangent from $C$. Check: $15 - 7 = 8$."
  D: "That's the whole side $AB$. The tangent only goes from $A$ to the point where the circle touches."
  E: "That's the side across from $A$. The tangent from $A$ is only part of a side next to $A$."
verify: "range(1, 13).find((x) => 13 - x + (15 - x) === 14)"
---

A circle sits inside triangle $ABC$, touching all three sides. $AB = 13$, $BC = 14$, and $CA = 15$. How long is the tangent from corner $A$ to the circle?

## Hint

Two tangents from the same point are equal. Call the tangents from $A$ both $x$. What are the leftover pieces of $AB$ and $AC$?

## Hint 2

The leftover pieces are $13 - x$ and $15 - x$. Together, they make up side $BC$.

## Solution

**Step 1.** Let the tangents from $A$ be $x$. The leftover pieces of $AB$ and $AC$ are $13 - x$ and $15 - x$.

**Step 2.** Those are the tangents from $B$ and $C$, so they make up side $BC$: $(13 - x) + (15 - x) = 14$.

**Step 3.** So $28 - 2x = 14$, and $x = 7$.

**Answer: (B) 7**
