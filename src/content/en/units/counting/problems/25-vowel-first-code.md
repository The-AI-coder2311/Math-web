---
order: 25
difficulty: medium
lesson: 02-when-order-matters
choices: ["60","120","240","360"]
answer: B
mistakes:
  A: "That's one vowel only. There are 2 vowels to start with: A and E."
  C: "That lets the first letter have 4 options. Only A and E are vowels."
  D: "That's every code with no rule. The first letter must be a vowel."
verify: "product(range(0, 5), range(0, 5), range(0, 5), range(0, 5)).filter((w) => new Set(w).size === 4 && (w[0] === 0 || w[0] === 4)).length"
---

A 4-letter code uses letters from A, B, C, D, E, and F, with no repeats. The first letter must be a vowel. How many codes are possible?

## Hint

Deal with the first letter first, since it has the rule.

## Hint 2

There are 2 vowels. Then 5 letters are left for the second spot.

## Solution

The first letter is A or E, which is 2 choices. The next spots have 5, 4, and 3 choices. So there are $2 \times 5 \times 4 \times 3 = 120$ codes.

**Answer: (B) 120**
