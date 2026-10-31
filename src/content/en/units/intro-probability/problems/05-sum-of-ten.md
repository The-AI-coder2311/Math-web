---
order: 5
difficulty: easy
choices: ['$\frac{1}{36}$', '$\frac{1}{18}$', '$\frac{1}{12}$', '$\frac{1}{11}$', '$\frac{1}{6}$']
answer: C
verify: "fraction(product(range(1, 6), range(1, 6)).filter(([a, b]) => a + b === 10).length, 36)"
---

You roll two standard dice. What is the probability that the numbers add up to 10?

## Hint

Think of one red die and one blue die. List every pair that makes 10, and remember that there are 36 outcomes in all.

## Solution

**Step 1.** List the pairs (red, blue) that add up to 10: (4, 6), (5, 5), and (6, 4). That's 3 outcomes.

**Step 2.** There are 36 equally likely outcomes, so the probability is $\frac{3}{36}$, which simplifies to $\frac{1}{12}$.

**Answer: (C) $\frac{1}{12}$**
