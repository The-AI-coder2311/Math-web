---
order: 3
difficulty: easy
lesson: 04-factors-primes-leftovers
choices: ["4","6","7","8","14"]
answer: A
mistakes:
  B: "That counts all of the factors of 28. One row, or one desk per row, isn't allowed."
  C: "That's one of the possible numbers of rows, not how many there are."
  D: "List the factors: 1, 2, 4, 7, 14, 28. There are only 6, and 2 of them are ruled out."
  E: "That's one of the possible numbers of rows, not how many there are."
verify: "factors(28).filter((rows) => rows >= 2 && 28 / rows >= 2).length"
---

A teacher wants to arrange 28 desks in equal rows. There must be at least 2 rows and at least 2 desks in each row. How many different numbers of rows are possible?

## Hint

The number of rows has to be a factor of 28. List the factors, then cross out any that break the rules.

## Hint 2

The factors of 28 are 1, 2, 4, 7, 14, and 28. Which ones break the "at least 2" rules?

## Solution

**Step 1.** The number of rows must divide 28 evenly, so it must be a factor of 28. The factors are 1, 2, 4, 7, 14, and 28.

**Step 2.** Now apply the rules:

- 1 row isn't allowed, because there must be at least 2 rows.
- 28 rows isn't allowed, because each row would have only 1 desk.

**Step 3.** That leaves 2, 4, 7, and 14 rows, so there are 4 possibilities.

**Answer: (A) 4**
