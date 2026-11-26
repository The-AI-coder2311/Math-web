---
order: 7
difficulty: medium
from: expected-value/01-indicator-variables
choices: ["3","4","6","12","13"]
answer: A
mistakes:
  B: "That's about 13 divided by 4, rounded up. Count the pairs: 13 coins make only 12 neighboring pairs."
  C: "That uses one half for each pair. Both coins must be heads, which happens with probability one fourth."
  D: "That's the number of neighboring pairs, not the expected number that are both heads."
  E: "That's the number of coins."
verify: "(() => { let total = 0; for (let m = 0; m < 8192; m++) for (let i = 0; i < 12; i++) if ((m >> i) & 1 && (m >> (i + 1)) & 1) total++; return total / 8192; })()"
---

Thirteen fair coins are flipped and laid in a row. What is the expected number of pairs of neighboring coins that both show heads? (For example, HHH contains two such pairs.)

## Hint

Give each neighboring pair its own yes-or-no indicator.

## Hint 2

There are 12 neighboring pairs. What's the chance that one particular pair is two heads?

## Solution

Let $X_i$ be 1 if coins $i$ and $i + 1$ both show heads, and 0 otherwise, for $i = 1, \ldots, 12$. Each pair is two heads with probability $\frac{1}{4}$.

The pairs overlap, so they aren't independent, but linearity of expectation doesn't care:

$$12 \times \frac{1}{4} = 3.$$

**Answer: (A) 3**
