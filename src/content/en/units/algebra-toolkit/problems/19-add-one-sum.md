---
order: 15
difficulty: medium
lesson: 04-add-one-and-telescoping
choices: ["8","6","10","20","21"]
answer: A
mistakes:
  B: "That's $y$ alone. Add $x$ too."
  C: "That's $3 + 7$, the sum of the factors. Each factor is 1 more than $x$ or $y$."
  D: "That's the right side of the equation. Add 1, factor, and find $x$ and $y$."
  E: "That's the product after adding 1. Find the factors first."
verify: "(() => { const [x, y] = product(range(1, 20), range(1, 20)).find(([a, b]) => a <= b && a * b + a + b === 20); return x + y; })()"
---

Positive whole numbers $x$ and $y$ satisfy $xy + x + y = 20$. What is $x + y$?

## Hint

Add 1 to both sides. Can you factor the left side?

## Hint 2

$(x + 1)(y + 1) = 21$, and both factors are at least 2.

## Solution

Adding 1 gives $(x + 1)(y + 1) = 21$. The only pair with both factors at least 2 is 3 and 7. So $x$ and $y$ are 2 and 6, and $x + y = 8$.

**Answer: (A) 8**
