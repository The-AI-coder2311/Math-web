---
order: 3
difficulty: easy
from: aime-combinatorics/01-inclusion-exclusion
choices: ["233","266","267","299","333"]
answer: B
mistakes:
  A: "That subtracts the 33 multiples of 30 twice. In inclusion-exclusion with three sets, the triple overlap is subtracted once at the end."
  C: "That's 1000 times 4/15, rounded up. Count exactly with whole-number counts instead of estimating."
  D: "That forgets the last step. After adding back the pairs, the multiples of 30 must be subtracted once more."
  E: "333 counts the numbers divisible by neither 2 nor 3. You still need to remove the multiples of 5."
verify: "range(1, 1000).filter((n) => n % 2 !== 0 && n % 3 !== 0 && n % 5 !== 0).length"
---

How many integers from 1 to 1000 are divisible by none of 2, 3, and 5?

## Hint

Count the numbers divisible by at least one of them with inclusion-exclusion, then subtract from 1000.

## Hint 2

You need the number of multiples of 2, 3, 5, 6, 10, 15, and 30 up to 1000.

## Solution

Up to 1000 there are 500 multiples of 2, 333 of 3, 200 of 5, 166 of 6, 100 of 10, 66 of 15, and 33 of 30. By inclusion-exclusion, the count divisible by at least one of 2, 3, 5 is

$$500 + 333 + 200 - 166 - 100 - 66 + 33 = 734$$

So $1000 - 734 = 266$ numbers are divisible by none of them.

**Answer: (B) 266**
