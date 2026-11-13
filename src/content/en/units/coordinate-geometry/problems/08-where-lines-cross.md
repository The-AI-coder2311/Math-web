---
order: 8
difficulty: medium
lesson: 01-lines-and-slopes
choices: ["3","7","10","11","21"]
answer: C
mistakes:
  A: "That's $a$ alone. The question asks for $a + b$."
  B: "That's $b$ alone. The question asks for $a + b$."
  D: "That adds the two numbers in the equations, 1 and 10. Find the crossing point first."
  E: "That's $3 \\times 7$. The question asks for the sum."
verify: "(() => { const x = range(-50, 50).find((n) => 2 * n + 1 === -n + 10); return x + (2 * x + 1); })()"
---

The lines $y = 2x + 1$ and $y = -x + 10$ cross at the point $(a, b)$. What is $a + b$?

## Hint

At the crossing point, both lines have the same $y$. Set the two right sides equal.

## Hint 2

$2x + 1 = -x + 10$ gives $x = 3$. Now find $y$.

## Solution

**Step 1.** Setting the two equal gives $2x + 1 = -x + 10$, so $3x = 9$ and $x = 3$.

**Step 2.** Then $y = 2 \times 3 + 1 = 7$. So $a + b = 3 + 7 = 10$.

**Answer: (C) 10**
