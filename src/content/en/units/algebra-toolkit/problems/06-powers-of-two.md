---
order: 6
difficulty: medium
choices: [15, 20, 40, 50, 100]
answer: B
verify: "Math.log2(2 ** 10 * 4 ** 5)"
---

If $2^{10} \times 4^{5} = 2^{k}$, what is the value of $k$?

## Hint

Write 4 as a power of 2. What is $(2^2)^5$ as a single power of 2?

## Solution

**Step 1.** Since $4 = 2^2$, the value of $4^5$ is $(2^2)^5$. That's five copies of $2^2$, which is $2^{10}$.

**Step 2.** So we have $2^{10} \times 2^{10}$. When you multiply powers of the same number, you add the exponents: $10 + 10 = 20$.

**Answer: (B) 20**
