---
order: 1
difficulty: easy
lesson: 01-crt-and-order
choices: ["8","23","38","53","128"]
answer: B
mistakes:
  A: "That's 2 mod 3 and 3 mod 5, but it leaves remainder 1 when divided by 7."
  C: "That works mod 3 and mod 5, but it leaves remainder 3 mod 7. Check the condition for 7."
  D: "That's 2 mod 3 and 3 mod 5, but 53 leaves remainder 4 mod 7."
  E: "That's the answer plus 105. It works, but it isn't the smallest."
verify: "range(1, 200).find((n) => n % 3 === 2 && n % 5 === 3 && n % 7 === 2)"
---

What is the smallest positive integer $n$ such that $n$ leaves a remainder of 2 when divided by 3, a remainder of 3 when divided by 5, and a remainder of 2 when divided by 7?

## Hint

Sieve. List the numbers that leave remainder 2 when divided by 7, and test each one.

## Hint 2

The list starts 2, 9, 16, 23. Check each against the conditions for 3 and 5.

## Solution

The numbers that leave remainder 2 mod 7 are 2, 9, 16, 23, and so on.

- 2 leaves remainder 2 mod 5, not 3.
- 9 leaves remainder 0 mod 3.
- 16 leaves remainder 1 mod 3.
- 23 leaves remainder 2 mod 3 and 3 mod 5.

So $n = 23$.

**Answer: (B) 23**
