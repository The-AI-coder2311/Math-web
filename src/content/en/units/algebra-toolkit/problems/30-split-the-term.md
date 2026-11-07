---
order: 30
difficulty: hard
lesson: 05-am-gm-inequality
choices: ["18","27","30","54"]
answer: B
mistakes:
  A: "That's the value of $\\frac{54}{x}$ at the best $x$. Add the $x^2$ term."
  C: "That's a value the expression reaches, near the best one. Split the second term into two equal parts to find the true smallest value."
  D: "That's the number on top of the fraction."
verify: "Math.round(Math.min(...range(1, 3000).map((i) => (i / 100) ** 2 + 54 / (i / 100))))"
---

For $x > 0$, what is the smallest possible value of $x^2 + \frac{54}{x}$?

## Hint

Split $\frac{54}{x}$ into two equal parts.

## Hint 2

The product of $x^2$, $\frac{27}{x}$, and $\frac{27}{x}$ is 729.

## Solution

Write it as $x^2 + \frac{27}{x} + \frac{27}{x}$. The product of the three terms is 729, so the sum is at least $3\sqrt[3]{729} = 3 \times 9 = 27$. We reach it when $x^2 = \frac{27}{x}$, so $x = 3$, and $9 + 9 + 9 = 27$.

**Answer: (B) 27**
