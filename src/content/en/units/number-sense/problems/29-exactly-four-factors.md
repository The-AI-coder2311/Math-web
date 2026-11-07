---
order: 29
difficulty: hard
lesson: 04-factors-primes-leftovers
choices: ["10","12","15","18"]
answer: C
mistakes:
  A: "You may have left out numbers such as 8 and 27, which are prime cubes, or some products of two primes."
  B: "Check for prime cubes: 8 and 27 both have exactly 4 factors."
  D: "Check your list. Numbers such as 12 and 18 have 6 factors, so they don't belong."
verify: "range(1, 50).filter((n) => factors(n).length === 4).length"
---

How many whole numbers from 1 to 50 have exactly 4 factors?

## Hint

Try a few. What do 6, 8, 10, and 15 have in common?

## Hint 2

There are two kinds: a product of two different primes, and a prime multiplied by itself three times.

## Solution

A number with exactly 4 factors is either a product of two different primes or a prime cubed.

The products of two different primes up to 50 are 6, 10, 14, 15, 21, 22, 26, 33, 34, 35, 38, 39, and 46, which makes 13. The prime cubes are 8 and 27, which makes 2. In all, $13 + 2 = 15$.

**Answer: (C) 15**
