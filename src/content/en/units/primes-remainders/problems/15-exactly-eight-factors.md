---
order: 13
difficulty: medium
lesson: 02-counting-divisors
choices: ["16","24","30","36","40"]
answer: B
mistakes:
  A: "It has 5 factors: 1, 2, 4, 8, and 16."
  C: "It does have 8 factors, but a smaller number does too."
  D: "It has 9 factors, an odd count, since it's a perfect square."
  E: "It does have 8 factors, but a smaller number does too."
verify: "range(1, 100).find((n) => factors(n).length === 8)"
---

What is the smallest positive whole number with exactly 8 factors?

## Hint

Which products of (exponent + 1) make 8? They are $8$, $4 \times 2$, and $2 \times 2 \times 2$.

## Hint 2

Those give $2^7 = 128$, $2^3 \times 3 = 24$, and $2 \times 3 \times 5 = 30$.

## Solution

Factor counts of 8 come from $8$, $4 \times 2$, or $2 \times 2 \times 2$. The smallest number for each is $2^7 = 128$, $2^3 \times 3 = 24$, and $2 \times 3 \times 5 = 30$. The smallest of those is 24.

**Answer: (B) 24**
