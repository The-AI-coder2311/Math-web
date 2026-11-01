---
order: 10
difficulty: medium
lesson: 04-factors-primes-leftovers
choices: ["6","12","10","8","16"]
answer: B
mistakes:
  A: "It has only 4 factors: 1, 2, 3, and 6."
  D: "It has only 4 factors: 1, 2, 4, and 8."
  C: "It has only 4 factors: 1, 2, 5, and 10."
  E: "It has only 5 factors: 1, 2, 4, 8, and 16."
verify: "range(1, 100).find((n) => factors(n).length === 6)"
---

What is the smallest positive whole number that has exactly 6 positive factors?

## Hint

Six factors means 3 factor pairs. Start with the smallest answer choice and count the factors of each one.

## Hint 2

Test the choices from the smallest. How many factors does 8 have? How many does 10 have?

## Solution

**Step 1.** Count the factors of each choice, starting with the smallest:

- 6 has factors 1, 2, 3, and 6. That's 4 factors.
- 8 has factors 1, 2, 4, and 8. That's 4 factors.
- 10 has factors 1, 2, 5, and 10. That's 4 factors.
- 12 has factors 1, 2, 3, 4, 6, and 12. That's 6 factors!

**Step 2.** Since the choices are in order, and 6, 8, and 10 don't work, the answer among them is 12.

**A check:** the numbers we skipped don't work either. The numbers 1 through 11 each have 4 or fewer factors, so 12 really is the smallest.

**Answer: (B) 12**
