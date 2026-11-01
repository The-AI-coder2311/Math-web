---
order: 9
difficulty: medium
lesson: 02-perfect-squares
choices: ["8","18","16","14","2"]
answer: D
mistakes:
  A: "That's $4 \\times 2$. Square both sides of the equation."
  C: "That's the square of the sum, which includes the middle part of 2."
  B: "That adds the 2. To remove the middle part, subtract it."
  E: "That's the middle part. The question asks for the rest."
verify: "(() => { const x = 2 + Math.sqrt(3); return Math.round(x * x + 1 / (x * x)); })()"
---

If $x + \frac{1}{x} = 4$, what is the value of $x^2 + \frac{1}{x^2}$?

## Hint

Square both sides of the equation. What happens to the middle part when you multiply $x$ by $\frac{1}{x}$?

## Hint 2

Squaring gives $x^2 + 2 + \frac{1}{x^2} = 16$.

## Solution

**Step 1.** Square both sides:

$$x^2 + 2 \times x \times \frac{1}{x} + \frac{1}{x^2} = 16$$

**Step 2.** The middle part simplifies, since $x \times \frac{1}{x}$ is 1. So the middle part is 2.

**Step 3.** That leaves $x^2 + \frac{1}{x^2} + 2 = 16$, so the value we want is $16 - 2 = 14$.

**Answer: (D) 14**
