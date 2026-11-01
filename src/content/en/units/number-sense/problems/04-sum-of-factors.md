---
order: 4
difficulty: easy
lesson: 04-factors-primes-leftovers
choices: ["16","27","28","36","78"]
answer: C
mistakes:
  A: "That leaves out the 12. A number is a factor of itself."
  B: "That leaves out the 1. It's a factor of every number."
  D: "That's more than all of the factors add up to. Check your list: 1, 2, 3, 4, 6, 12."
  E: "That adds all of the numbers from 1 to 12. Only factors count."
verify: "sum(factors(12))"
---

What is the sum of all the positive factors of 12?

## Hint

First, list every factor using pairs. Don't forget 1 and 12 themselves!

## Hint 2

The factors are 1, 2, 3, 4, 6, and 12. Add them all.

## Solution

**Step 1.** The factor pairs of 12 are 1 and 12, 2 and 6, and 3 and 4.

**Step 2.** Add all six factors:

$$1 + 12 + 2 + 6 + 3 + 4 = 28$$

**A common mistake:** answering 16 by leaving out 12, or 27 by leaving out 1. Both 1 and the number itself are always factors.

**Answer: (C) 28**
