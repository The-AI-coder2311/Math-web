---
order: 11
difficulty: medium
lesson: 01-solving-and-translating
choices: ["3","4","6","14","24"]
answer: C
mistakes:
  A: "Put it back in: the left side is 16, and the right side is 28."
  B: "That's the number in front of $x$ after you subtract. You still need to solve for $x$."
  D: "That subtracts 5 in place of adding it. To undo \"minus 5,\" add 5."
  E: "That's $4x$. You still need to divide by 4."
verify: "range(-50, 50).find((x) => 7 * x - 5 === 3 * x + 19)"
---

If $7x - 5 = 3x + 19$, what is the value of $x$?

## Hint

Get the letters on one side and the numbers on the other.

## Hint 2

Subtract $3x$ to get $4x - 5 = 19$, and then add 5.

## Solution

Subtract $3x$ from both sides: $4x - 5 = 19$. Add 5: $4x = 24$. Divide by 4: $x = 6$.

**Check:** Both sides equal 37.

**Answer: (C) 6**
