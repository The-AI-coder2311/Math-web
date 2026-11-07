---
order: 30
difficulty: hard
lesson: 03-several-conditions
choices: ["67","94","157","220"]
answer: C
mistakes:
  A: "67 fits mod 5 and mod 9, but 67 has a remainder of 4 mod 7."
  B: "94 fits mod 7 and mod 9, but 94 has a remainder of 4 mod 5."
  D: "220 is a multiple of 5, so its remainder mod 5 is 0, not 2."
verify: "range(1, 400).find((x) => x % 5 === 2 && x % 7 === 3 && x % 9 === 4)"
---

What is the smallest positive whole number with remainders of 2 mod 5, 3 mod 7, and 4 mod 9?

## Hint

Start with the largest modulus, 9.

## Hint 2

Numbers that work for 7 and 9 are 31, 94, 157, and so on, since they repeat every 63.

## Solution

The numbers with a remainder of 4 mod 9 are 4, 13, 22, 31, and so on. The first that has a remainder of 3 mod 7 is 31. These repeat every 63: 31, 94, 157. Mod 5, those are 1, 4, and 2. So 157 works.

**Answer: (C) 157**
