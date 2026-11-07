---
order: 25
difficulty: medium
lesson: 01-lines-and-slopes
choices: ["2","4","4.5","8"]
answer: B
mistakes:
  A: "Test it: no line through (1, 2) with positive whole intercepts gives this area."
  C: "That's the other option. It's slightly bigger."
  D: "That forgets to take half of the product of the intercepts."
verify: "Math.min(...product(range(2, 20), range(3, 20)).filter(([a, b]) => b + 2 * a === a * b).map(([a, b]) => (a * b) / 2))"
---

A line passes through $(1, 2)$, and it crosses the positive axes at whole numbers $a$ and $b$. What is the smallest possible area of the triangle it makes with the axes?

## Hint

$\frac{1}{a} + \frac{2}{b} = 1$. Clear the fractions.

## Hint 2

This factors as $(a - 1)(b - 2) = 2$.

## Solution

From $\frac{1}{a} + \frac{2}{b} = 1$, we get $(a - 1)(b - 2) = 2$. The options are $a = 2$, $b = 4$, and $a = 3$, $b = 3$. Their areas are 4 and 4.5, so the smallest is 4.

**Answer: (B) 4**
