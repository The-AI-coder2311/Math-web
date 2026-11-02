---
order: 23
difficulty: medium
lesson: 05-heron-and-inradius
choices: ["33","44","66","132","143"]
answer: C
mistakes:
  A: "That's half of the answer. Check the differences again."
  B: "Check your differences. They're 11, 9, and 2."
  D: "That's twice the answer. It's what you'd get using $\\frac{1}{2}bh$ and forgetting the $\\frac{1}{2}$."
  E: "That's $11 \\times 13$. Two sides of a triangle only give the area if they meet at a right angle."
verify: "Math.sqrt(22 * 11 * 9 * 2)"
---

What is the area of a triangle with sides 11, 13, and 20?

## Hint

Half the perimeter is 22. What are the three differences?

## Hint 2

The differences are 11, 9, and 2. Pair up factors: $22 \times 2 = 44$, and $44 \times 11 = 484$.

## Solution

Here, $s = 22$, and the differences are 11, 9, and 2. So $A = \sqrt{22 \times 11 \times 9 \times 2}$. Pairing the factors, $22 \times 11 \times 2 = 484 = 22^2$, and $9 = 3^2$. So $A = 22 \times 3 = 66$.

**Answer: (C) 66**
