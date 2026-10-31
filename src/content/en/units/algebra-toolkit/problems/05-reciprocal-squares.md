---
order: 5
difficulty: medium
choices: [8, 14, 16, 18, 2]
answer: B
verify: "(() => { const x = 2 + Math.sqrt(3); return Math.round(x * x + 1 / (x * x)); })()"
---

If $x + \frac{1}{x} = 4$, what is the value of $x^2 + \frac{1}{x^2}$?

## Hint

Square both sides of the equation. What happens to the middle part when you multiply $x$ by $\frac{1}{x}$?

## Solution

**Step 1.** Square both sides:

$$x^2 + 2 \times x \times \frac{1}{x} + \frac{1}{x^2} = 16$$

**Step 2.** The middle part simplifies, since $x \times \frac{1}{x}$ is 1. So the middle part is just 2.

**Step 3.** That leaves $x^2 + \frac{1}{x^2} + 2 = 16$, so the value we want is $16 - 2 = 14$.

**Answer: (B) 14**
