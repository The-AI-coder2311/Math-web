---
order: 3
difficulty: easy
choices: [4, 6, 7, 8, 14]
answer: A
verify: "factors(28).filter((rows) => rows >= 2 && 28 / rows >= 2).length"
---

A teacher wants to arrange 28 desks in equal rows. There must be at least 2 rows and at least 2 desks in each row. How many different numbers of rows are possible?

## Hint

The number of rows has to be a factor of 28. List the factors, then cross out any that break the rules.

## Solution

**Step 1.** The number of rows must divide 28 evenly, so it must be a factor of 28. The factors are 1, 2, 4, 7, 14, and 28.

**Step 2.** Now apply the rules:

- 1 row isn't allowed, because there must be at least 2 rows.
- 28 rows isn't allowed, because each row would have just 1 desk.

**Step 3.** That leaves 2, 4, 7, and 14 rows, so there are 4 possibilities.

**Answer: (A) 4**
