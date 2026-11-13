---
order: 11
difficulty: medium
lesson: 04-grid-paths
choices: ["9","10","12","13","16"]
answer: C
mistakes:
  A: "That misses some cases. Count by dimes: 6, 4, and 2."
  B: "Count by dimes. With 0 dimes, the nickels can be 0 through 5, which is 6 ways."
  D: "Three dimes would be too much. Count by dimes: 6, 4, and 2."
  E: "That's more than there are. Once you pick dimes and nickels, the pennies are decided."
verify: "product(range(0, 2), range(0, 5), range(0, 25)).filter(([d, n, p]) => 10 * d + 5 * n + p === 25).length"
---

How many different ways can you make 25 cents using only dimes, nickels, and pennies? You don't have to use all three kinds of coins.

## Hint

Split it into cases based on the number of dimes. In each case, once you've picked the number of nickels, the pennies are decided.

## Hint 2

With 0 dimes, there are 6 ways. With 1 dime, 15 cents are left. With 2 dimes, 5 cents are left.

## Solution

Split into cases by the number of dimes:

- **0 dimes:** You can use 0, 1, 2, 3, 4, or 5 nickels. That's 6 ways.
- **1 dime:** 15 cents remain, so you can use 0, 1, 2, or 3 nickels. That's 4 ways.
- **2 dimes:** 5 cents remain, so you can use 0 or 1 nickel. That's 2 ways.

Three dimes would be too much. The total is $6 + 4 + 2 = 12$.

**Answer: (C) 12**
