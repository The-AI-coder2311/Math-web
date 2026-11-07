---
order: 28
difficulty: medium
lesson: 05-split-into-cases
choices: ["1","2","3","4"]
answer: D
mistakes:
  A: "That finds one number. Think about which digit pairs multiply to 12, and flip them."
  B: "That counts pairs of digits. Each pair gives two numbers, since order matters."
  C: "List them all: there's an even number of them, since each pair flips."
verify: "range(10, 99).filter((n) => digits(n)[0] * digits(n)[1] === 12).length"
---

How many two-digit numbers have digits that multiply to 12?

## Hint

Which pairs of single digits multiply to 12?

## Hint 2

The pairs are 2 and 6, and 3 and 4. Each pair can go in either order.

## Solution

The digit pairs are 2 and 6, and 3 and 4. (The pair 1 and 12 doesn't work, since 12 isn't a digit.) The numbers are 26, 62, 34, and 43, which makes 4.

**Answer: (D) 4**
