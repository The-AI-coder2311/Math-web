---
order: 26
difficulty: easy
lesson: 03-several-conditions
choices: ["5","7","11","23"]
answer: C
mistakes:
  A: "5 has a remainder of 2 mod 3, but 1 mod 4."
  B: "7 has a remainder of 3 mod 4, but 1 mod 3."
  D: "This works, but it isn't the smallest."
verify: "range(1, 100).find((x) => x % 3 === 2 && x % 4 === 3)"
---

What is the smallest positive whole number with a remainder of 2 when divided by 3, and a remainder of 3 when divided by 4?

## Hint

List the numbers with a remainder of 3 mod 4.

## Hint 2

The list is 3, 7, 11, 15, and so on.

## Solution

Numbers with a remainder of 3 mod 4 are 3, 7, 11, and so on. Mod 3, those are 0, 1, and 2. So 11 is the first one that works.

**Answer: (C) 11**
