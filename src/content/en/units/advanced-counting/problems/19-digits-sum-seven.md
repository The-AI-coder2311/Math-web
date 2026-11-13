---
order: 19
difficulty: hard
lesson: 02-stars-and-bars
choices: ["28","35","36","45","56"]
answer: A
mistakes:
  B: "Check by listing by first digit: 1 gives 7 numbers, 2 gives 6 numbers, and so on down to 1. Those add up to 28."
  C: "That's $\\binom{9}{2}$, which counts all 7 stars and allows a first digit of 0, like 016. That isn't a 3-digit number."
  D: "That's the count for digits that add up to 8 when the first digit is allowed to be 0. Here the digits add up to 7, and the first digit can't be 0."
  E: "That's $\\binom{8}{3}$, which uses 3 bars. Three digits need only 2 bars."
verify: "range(100, 999).filter((n) => sum(digits(n)) === 7).length"
---

How many 3-digit numbers have digits that add up to 7?

## Hint

Call the digits $a$, $b$, and $c$. What rule does the first digit have to follow?

## Hint 2

The first digit must be at least 1. Hand that out, and share the remaining 6 among the 3 digits.

## Solution

**Step 1.** The first digit must be at least 1, so hand out 1 to it. That leaves 6.

**Step 2.** Share the 6 among the 3 digits: 6 stars and 2 bars give $\binom{8}{2} = 28$.

No digit can go above 9 here, since the total is only 7.

**Answer: (A) 28**
