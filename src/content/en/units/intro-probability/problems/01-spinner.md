---
order: 1
difficulty: easy
choices: ['$\frac{1}{8}$', '$\frac{1}{4}$', '$\frac{3}{8}$', '$\frac{1}{3}$', '$\frac{1}{2}$']
answer: B
verify: "fraction(range(1, 8).filter((n) => n % 3 === 0).length, 8)"
---

A spinner has 8 equal sections numbered 1 through 8. What is the probability of landing on a multiple of 3?

## Hint

List the multiples of 3 that are on the spinner. How many are there?

## Solution

**Step 1.** The multiples of 3 on the spinner are 3 and 6, so there are 2 outcomes you want.

**Step 2.** There are 8 equally likely outcomes in all, so the probability is $\frac{2}{8}$, which simplifies to $\frac{1}{4}$.

**Answer: (B) $\frac{1}{4}$**
