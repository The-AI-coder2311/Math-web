---
order: 8
difficulty: medium
choices: [9, 10, 12, 13, 16]
answer: C
verify: "product(range(0, 2), range(0, 5), range(0, 25)).filter(([d, n, p]) => 10 * d + 5 * n + p === 25).length"
---

How many different ways can you make 25 cents using only dimes, nickels, and pennies? You don't have to use all three kinds of coins.

## Hint

Split it into cases based on the number of dimes. In each case, once you've picked the number of nickels, the pennies are decided.

## Solution

Split into cases by the number of dimes:

- **0 dimes:** You can use 0, 1, 2, 3, 4, or 5 nickels. That's 6 ways.
- **1 dime:** 15 cents remain, so you can use 0, 1, 2, or 3 nickels. That's 4 ways.
- **2 dimes:** 5 cents remain, so you can use 0 or 1 nickel. That's 2 ways.

Three dimes would be too much. The total is $6 + 4 + 2 = 12$.

**Answer: (C) 12**
