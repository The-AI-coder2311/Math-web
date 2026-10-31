---
order: 9
difficulty: medium
choices: [6, 8, 10, 12, 16]
answer: D
verify: "range(1, 100).find((n) => factors(n).length === 6)"
---

What is the smallest positive whole number that has exactly 6 positive factors?

## Hint

Six factors means 3 factor pairs. Start with the smallest answer choice and count the factors of each one.

## Solution

**Step 1.** Count the factors of each choice, starting with the smallest:

- 6 has factors 1, 2, 3, and 6. That's 4 factors.
- 8 has factors 1, 2, 4, and 8. That's 4 factors.
- 10 has factors 1, 2, 5, and 10. That's 4 factors.
- 12 has factors 1, 2, 3, 4, 6, and 12. That's 6 factors!

**Step 2.** Since the choices are in order, and 6, 8, and 10 don't work, the answer among them is 12.

**A check:** the numbers we skipped don't work either. The numbers 1 through 11 each have 4 or fewer factors, so 12 really is the smallest.

**Answer: (D) 12**
