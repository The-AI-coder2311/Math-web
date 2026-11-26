---
order: 8
difficulty: medium
from: expected-value/05-conditional-bayes
choices: ["3","4","5","7","9"]
answer: C
mistakes:
  A: "That's $\\frac{1}{2}$, the answer after one head. Two heads make the two-headed coin more likely."
  B: "That's $\\frac{1}{3}$, the chance before any flips. The heads are evidence."
  D: "That's $\\frac{3}{4}$. Compare the weighted chances: $\\frac{1}{3}$ against $\\frac{2}{3} \\times \\frac{1}{4}$."
  E: "That's $\\frac{4}{5}$, which treats the fair coins as one coin. There are two fair coins, so their weight doubles."
verify: "(() => { const coins = [[1, 1], [1, 0], [1, 0]]; let hh = 0, special = 0; for (let k = 0; k < 3; k++) for (const a of coins[k]) for (const b of coins[k]) if (a && b) { hh++; if (k === 0) special++; } const g = gcd(special, hh); return special / g + hh / g; })()"
---

A bag holds three coins. Two are fair, and one has heads on both sides. You pick a coin at random and flip it twice, and both flips land heads. The probability that you picked the two-headed coin is $\frac{m}{n}$ in lowest terms. What is $m + n$?

## Hint

Find the chance of 'two-headed coin and two heads,' and the chance of 'fair coin and two heads.'

## Hint 2

Those chances are $\frac{1}{3}$ and $\frac{2}{3} \times \frac{1}{4}$. Compare the first to their total.

## Solution

Split by which coin you picked.

- Two-headed coin and two heads: $\frac{1}{3} \times 1$.
- Fair coin and two heads: $\frac{2}{3} \times \frac{1}{4} = \frac{1}{6}$.

Given two heads, the chance it was the two-headed coin is

$$\frac{1/3}{1/3 + 1/6} = \frac{2}{3}.$$

So $m + n = 5$.

**Answer: (C) 5**
