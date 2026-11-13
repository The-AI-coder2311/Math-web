---
order: 10
difficulty: medium
lesson: 02-perfect-squares
choices: ["20","30","40","50","100"]
answer: A
mistakes:
  B: "That's $10 + 4 \\times 5$. Since $4 = 2^2$, the power $4^5$ equals $2^{10}$, which adds 10 to the exponent, not 20."
  C: "That's $10 \\times 4$. Exponents add when you multiply powers of the same base."
  D: "That's $10 \\times 5$. Exponents add when you multiply powers of the same base."
  E: "That multiplies $10 \\times 10$. Multiplying $2^{10} \\times 2^{10}$ adds the exponents."
verify: "Math.log2(2 ** 10 * 4 ** 5)"
---

If $2^{10} \times 4^{5} = 2^{k}$, what is the value of $k$?

## Hint

Write 4 as a power of 2. What is $(2^2)^5$ as a single power of 2?

## Hint 2

$4^5 = (2^2)^5$. When you raise a power to a power, the exponents multiply.

## Solution

**Step 1.** Since $4 = 2^2$, the value of $4^5$ is $(2^2)^5$. That's five copies of $2^2$, which is $2^{10}$.

**Step 2.** So we have $2^{10} \times 2^{10}$. When you multiply powers of the same number, you add the exponents: $10 + 10 = 20$.

**Answer: (A) 20**
