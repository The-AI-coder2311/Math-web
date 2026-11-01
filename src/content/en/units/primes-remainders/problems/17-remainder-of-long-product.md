---
order: 15
difficulty: medium
lesson: 04-units-digits-and-remainders
choices: ["0","4","2","3","1"]
answer: B
mistakes:
  A: "That would need a multiple of 5 in the product. None of these numbers is."
  E: "That's only the first number's remainder. Multiply all four."
  C: "Multiply the remainders: $1 \\times 2 \\times 3 \\times 4 = 24$, and 24 leaves 4."
  D: "Multiply the remainders: $1 \\times 2 \\times 3 \\times 4 = 24$, and 24 leaves 4."
verify: "(101 * 102 * 103 * 104) % 5"
---

What is the remainder when $101 \times 102 \times 103 \times 104$ is divided by 5?

## Hint

Replace each number by its remainder when divided by 5.

## Hint 2

The remainders are 1, 2, 3, and 4. Multiply them.

## Solution

The remainders are 1, 2, 3, and 4, and $1 \times 2 \times 3 \times 4 = 24$. Since $24 = 5 \times 4 + 4$, the remainder is 4.

**Answer: (B) 4**
