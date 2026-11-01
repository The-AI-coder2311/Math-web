---
order: 19
difficulty: hard
lesson: 04-two-unknowns
choices: ["9","15","12","18","21"]
answer: C
mistakes:
  A: "Check it: 9 dimes and 21 nickels are worth 195 cents."
  B: "That's half of the coins. Check it: 15 dimes and 15 nickels are worth 225 cents."
  D: "That's the number of nickels. The question asks about dimes."
  E: "That comes from the 210 cents, but it would mean that all of the money is in dimes, with no nickels. There are 30 coins."
verify: "range(0, 30).find((d) => 10 * d + 5 * (30 - d) === 210)"
---

A jar has 30 coins, all nickels and dimes, worth \$2.10 in all. How many dimes are there?

## Hint

Work in cents. What if all 30 coins were nickels?

## Hint 2

They would be worth 150 cents. Each dime adds 5 cents more than a nickel.

## Solution

If all 30 coins were nickels, they'd be worth 150 cents. There are $210 - 150 = 60$ extra cents, and each dime adds 5 extra cents. So there are $60 \div 5 = 12$ dimes.

**Answer: (C) 12**
