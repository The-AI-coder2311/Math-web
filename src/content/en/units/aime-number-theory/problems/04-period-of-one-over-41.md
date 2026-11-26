---
order: 4
difficulty: medium
lesson: 01-crt-and-order
choices: ["2","5","8","20","40"]
answer: B
mistakes:
  A: "$10^2 = 100$ leaves remainder 18 when divided by 41, not 1."
  C: "8 is the order of 10 mod 73. For 41, try $10^5$."
  D: "That's half of 40, but a smaller power of 10 already gives 1."
  E: "Fermat guarantees $10^{40} \\equiv 1$, but the order can be a smaller divisor of 40."
verify: "(() => { let k = 1, p = 10 % 41; while (p !== 1) { p = (p * 10) % 41; k++; } return k; })()"
---

The decimal expansion of $\frac{1}{41}$ repeats. How many digits are in its shortest repeating block?

## Hint

The period is the order of 10 modulo 41.

## Hint 2

The order divides 40. Test 1, 2, 4, 5 in that order.

## Solution

The period is the smallest $k$ with $10^k \equiv 1 \pmod{41}$. It divides 40.

- $10^2 = 100 \equiv 18$.
- $10^4 \equiv 18^2 = 324 \equiv 37$.
- $10^5 = 100000$, which is $41 \times 2439 + 1$, so $10^5 \equiv 1$.

So the period is 5. Indeed, the repeating block is 02439.

**Answer: (B) 5**
