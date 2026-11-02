---
order: 22
difficulty: medium
lesson: 05-factorial-zeros
choices: ["6","12","14","15","60"]
answer: C
mistakes:
  A: "That counts the multiples of 10. Multiples of 5 also make zeros."
  B: "That counts the multiples of 5. But 25 and 50 each hold a second 5."
  D: "You counted something extra. 125 is bigger than 60, so it doesn't add anything."
  E: "That's how many numbers are multiplied, not how many of them hold a 5."
verify: "(() => { let f = 1n; for (let i = 2n; i <= 60n; i++) f *= i; return String(f).match(/0*$/)[0].length; })()"
---

How many zeros does $60!$ end with?

## Hint

Count the multiples of 5, then count the multiples of 25.

## Hint 2

$60 \div 5 = 12$. How many multiples of 25 are there up to 60?

## Solution

There are $60 \div 5 = 12$ multiples of 5. The multiples of 25 are 25 and 50, which add 2 more. So there are $12 + 2 = 14$ zeros.

**Answer: (C) 14**
