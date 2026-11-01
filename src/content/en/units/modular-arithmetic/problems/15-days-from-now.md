---
order: 12
difficulty: medium
lesson: 01-mod-notation
choices: ["Monday","Tuesday","Wednesday","Thursday","Sunday"]
answer: B
mistakes:
  A: "That would need the product to be a multiple of 7. It leaves a remainder of 1."
  C: "That would need a remainder of 2. Multiply the remainders: $1 \\times 1 \\times 1$."
  D: "That adds the remainders. To find a product's remainder, multiply them."
  E: "That goes backward. Move 1 day forward from Monday."
verify: "['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'][(8 * 15 * 22) % 7]"
---

Today is Monday. What day of the week will it be $8 \times 15 \times 22$ days from now?

## Hint

Days repeat every 7, so work mod 7. What does each number leave when divided by 7?

## Hint 2

Each number leaves a remainder of 1.

## Solution

Mod 7, each of 8, 15, and 22 leaves 1. So the product leaves $1 \times 1 \times 1 = 1$. One day after Monday is Tuesday.

**Answer: (B) Tuesday**
