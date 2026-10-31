---
order: 6
difficulty: medium
choices: ['$\frac{1}{8}$', '$\frac{1}{4}$', '$\frac{1}{3}$', '$\frac{3}{8}$', '$\frac{1}{2}$']
answer: D
verify: "fraction(product([0, 1], [0, 1], [0, 1]).filter((f) => sum(f) === 2).length, 8)"
---

You flip 3 fair coins. What is the probability of getting exactly 2 heads?

## Hint

List every outcome, such as HHT and HTH. How many are there in all?

## Solution

**Step 1.** Each coin has 2 outcomes, so there are $2 \times 2 \times 2 = 8$ equally likely outcomes.

**Step 2.** The ones with exactly 2 heads are HHT, HTH, and THH, which makes 3 outcomes.

**Step 3.** The probability is $\frac{3}{8}$.

**Answer: (D) $\frac{3}{8}$**
