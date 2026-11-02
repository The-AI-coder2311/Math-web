---
order: 1
difficulty: easy
lesson: 01-if-then-reasoning
choices: ["If it has 4 sides, it is a square.","If it is not a square, it does not have 4 sides.","If it does not have 4 sides, it is not a square.","If it has 4 sides, it is not a square."]
answer: C
mistakes:
  A: "That's the rule flipped. A rectangle has 4 sides and might not be a square."
  B: "That's the rule with both parts negated. A rectangle isn't a square, yet it has 4 sides."
  D: "A square has 4 sides, so this statement is false for every square."
verify: "[['If it has 4 sides, it is a square.', (p, q) => !q || p], ['If it is not a square, it does not have 4 sides.', (p, q) => p || !q], ['If it does not have 4 sides, it is not a square.', (p, q) => q || !p], ['If it has 4 sides, it is not a square.', (p, q) => !q || !p]].filter(([t, f]) => product([true, false], [true, false]).every(([p, q]) => f(p, q) === (!p || q))).map(([t]) => t).join()"
---

Which statement means the same as this rule?

"If a shape is a square, it has 4 sides."

## Hint

Flip the rule and negate both parts. That version always means the same as the rule.

## Hint 2

Flipped and negated, "it is a square" becomes the second part, with a "not." So does "it has 4 sides," and it moves to the front.

## Solution

Flip the two parts of the rule, and negate both. That gives, "If it does not have 4 sides, it is not a square." This is the contrapositive, and it always means the same as the rule.

**Answer: (C) If it does not have 4 sides, it is not a square.**
