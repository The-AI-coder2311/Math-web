---
order: 18
difficulty: hard
lesson: 04-add-one-and-telescoping
choices: ["2","3","4","5","9"]
answer: D
mistakes:
  A: "That's the first bottom number. Its partner is the last top number."
  B: "Write it out as fractions, and cancel. What survives?"
  C: "Write it out as fractions, and cancel. What survives?"
  E: "That's the last bottom number. It cancels with the 9 on top."
verify: "Math.round(range(2, 9).reduce((p, n) => p * (1 + 1 / n), 1))"
---

What is the value of this product?

$$\left(1 + \frac{1}{2}\right) \left(1 + \frac{1}{3}\right) \left(1 + \frac{1}{4}\right) \cdots \left(1 + \frac{1}{9}\right)$$

## Hint

Turn each part into a single fraction. For example, $1 + \frac{1}{2} = \frac{3}{2}$. Then write out the first few and look for what cancels.

## Hint 2

Written as fractions, the product is $\frac{3}{2} \times \frac{4}{3} \times \cdots \times \frac{10}{9}$.

## Solution

**Step 1.** Rewrite each part as a single fraction:

$$\frac{3}{2} \times \frac{4}{3} \times \frac{5}{4} \times \cdots \times \frac{10}{9}$$

**Step 2.** Each top number cancels with the next bottom number. Only the first bottom number (2) and the last top number (10) remain.

**Step 3.** The product is $\frac{10}{2} = 5$.

**Answer: (D) 5**
