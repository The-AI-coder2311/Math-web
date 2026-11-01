---
order: 1
difficulty: easy
lesson: 04-factors-primes-leftovers
choices: ["6","4","8","9","18"]
answer: A
mistakes:
  B: "That leaves out 1 and 18, which are factors too."
  C: "List the pairs again. There are 3 pairs, which makes 6 factors."
  D: "That's half of 18. Factors have to divide 18 evenly, so count them using pairs."
  E: "That's the number itself. Not every number up to 18 is a factor."
verify: "factors(18).length"
---

How many positive whole numbers are factors of 18?

## Hint

Look for factor pairs, starting with 1 and 18. What pairs with 2? Keep going until a number repeats.

## Hint 2

The pairs are 1 and 18, 2 and 9, and 3 and 6. Count every number in those pairs.

## Solution

**Step 1.** Write the factor pairs of 18:

$$1 \times 18 = 18$$

$$2 \times 9 = 18$$

$$3 \times 6 = 18$$

**Step 2.** Check the next numbers: 4 and 5 don't divide 18 evenly, and 6 is already on our list. So we're done.

**Step 3.** There are 3 pairs, so there are 6 factors: 1, 2, 3, 6, 9, and 18.

**A common mistake:** answering 18. Not every number up to 18 is a factor of 18!

**Answer: (A) 6**
