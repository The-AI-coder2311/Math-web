---
order: 9
difficulty: medium
choices: ['$\frac{1}{3}$', '$\frac{1}{2}$', '$\frac{2}{3}$', '$\frac{5}{6}$', '$\frac{4}{5}$']
answer: C
verify: "fraction(range(1, 30).filter((n) => n % 2 === 0 || n % 3 === 0).length, 30)"
---

A whole number from 1 to 30 is chosen at random. What is the probability that it is divisible by 2 or by 3 (or both)?

## Hint

Count the multiples of 2 and the multiples of 3. Some numbers get counted twice. Which ones?

## Solution

**Step 1.** There are 15 multiples of 2 and 10 multiples of 3.

**Step 2.** Multiples of 6 are divisible by both, so they got counted twice. There are 5 of them, since $6 \times 5 = 30$.

**Step 3.** Subtract the double-counted ones: $15 + 10 - 5 = 20$.

**Step 4.** The probability is $\frac{20}{30}$, which simplifies to $\frac{2}{3}$.

**Answer: (C) $\frac{2}{3}$**
