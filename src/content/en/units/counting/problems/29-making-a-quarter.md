---
order: 29
difficulty: hard
lesson: 05-split-into-cases
choices: ["6","9","12","13"]
answer: C
mistakes:
  A: "That's only the case with no dimes. Try 1 dime and 2 dimes too."
  B: "Count each case again. With 1 dime, 15 cents remain, so there can be 0 to 3 nickels."
  D: "You may have added a case with a quarter. This problem only uses pennies, nickels, and dimes."
verify: "product(range(0, 25), range(0, 5), range(0, 2)).filter(([p, n, d]) => p + 5 * n + 10 * d === 25).length"
---

In how many ways can you make 25 cents using only pennies, nickels, and dimes?

## Hint

Split into cases by the number of dimes. There can be 0, 1, or 2.

## Hint 2

Once the dimes and nickels are set, the pennies are decided. So count the choices for nickels in each case.

## Solution

With 0 dimes, there can be 0 to 5 nickels, which is 6 ways. With 1 dime, 15 cents remain, so 0 to 3 nickels gives 4 ways. With 2 dimes, 5 cents remain, so 0 or 1 nickel gives 2 ways. In all, $6 + 4 + 2 = 12$ ways.

**Answer: (C) 12**
