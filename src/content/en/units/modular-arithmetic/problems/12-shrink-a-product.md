---
order: 4
difficulty: easy
lesson: 01-mod-notation
choices: ["0","1","2","3","4"]
answer: D
mistakes:
  A: "That would need a multiple of 5 in the product. Neither number is."
  B: "Multiply the remainders: $2 \\times 4 = 8$, and 8 leaves 3."
  C: "That's only the remainder of 27. Multiply it by the remainder of 34."
  E: "That's only the remainder of 34. Multiply it by the remainder of 27."
verify: "(27 * 34) % 5"
---

What is the remainder when $27 \times 34$ is divided by 5?

## Hint

Replace each number with its remainder when divided by 5.

## Hint 2

The remainders are 2 and 4. Multiply them.

## Solution

The remainders are 2 and 4, and $2 \times 4 = 8$. Since 8 leaves 3 when divided by 5, the remainder is 3.

**Answer: (D) 3**
