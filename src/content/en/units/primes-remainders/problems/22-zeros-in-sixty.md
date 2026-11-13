---
order: 22
difficulty: medium
lesson: 05-factorial-zeros
choices: ["2","6","12","14","15"]
answer: D
mistakes:
  A: "That counts only the extra 5s inside 25 and 50. Add the 12 multiples of 5 as well."
  B: "That counts the multiples of 10. Multiples of 5 also make zeros."
  C: "That counts the multiples of 5. But 25 and 50 each hold a second 5."
  E: "You counted something extra. 125 is bigger than 60, so it doesn't add anything."
verify: "(() => { let f = 1n; for (let i = 2n; i <= 60n; i++) f *= i; return String(f).match(/0*$/)[0].length; })()"
---

How many zeros does $60!$ end with?

## Hint

Count the multiples of 5, then count the multiples of 25.

## Hint 2

$60 \div 5 = 12$. How many multiples of 25 are there up to 60?

## Solution

There are $60 \div 5 = 12$ multiples of 5. The multiples of 25 are 25 and 50, which add 2 more. So there are $12 + 2 = 14$ zeros.

**Answer: (D) 14**
