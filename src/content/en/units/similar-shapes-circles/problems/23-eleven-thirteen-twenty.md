---
order: 23
difficulty: medium
lesson: 05-heron-and-inradius
choices: ["22","33","44","66","132"]
answer: D
mistakes:
  A: "That's half of the perimeter. Heron's formula uses it to find the area, but it isn't the area."
  B: "That's half of the answer. Check the differences again."
  C: "Check your differences. They're 11, 9, and 2."
  E: "That's twice the answer. It's what you'd get using $\\frac{1}{2}bh$ and forgetting the $\\frac{1}{2}$."
verify: "Math.sqrt(22 * 11 * 9 * 2)"
---

What is the area of a triangle with sides 11, 13, and 20?

## Hint

Half the perimeter is 22. What are the three differences?

## Hint 2

The differences are 11, 9, and 2. Pair up factors: $22 \times 2 = 44$, and $44 \times 11 = 484$.

## Solution

Here, $s = 22$, and the differences are 11, 9, and 2. So $A = \sqrt{22 \times 11 \times 9 \times 2}$. Pairing the factors, $22 \times 11 \times 2 = 484 = 22^2$, and $9 = 3^2$. So $A = 22 \times 3 = 66$.

**Answer: (D) 66**
