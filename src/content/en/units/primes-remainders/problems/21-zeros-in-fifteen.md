---
order: 21
difficulty: easy
lesson: 05-factorial-zeros
choices: ["1","2","3","5","15"]
answer: C
mistakes:
  A: "That only counts the multiples of 10 up to 15. Multiples of 5 also make zeros."
  B: "Count all of the multiples of 5 up to 15. There's one more than that."
  D: "Five is the number you divide by. Find $15 \\div 5$."
  E: "Only some of the numbers up to 15 hold a factor of 5."
verify: "(() => { let f = 1n; for (let i = 2n; i <= 15n; i++) f *= i; return String(f).match(/0*$/)[0].length; })()"
---

How many zeros does $15!$ end with?

## Hint

Each zero needs a factor of 5, and there are plenty of 2s. So count the 5s.

## Hint 2

Which numbers up to 15 are multiples of 5?

## Solution

The multiples of 5 up to 15 are 5, 10, and 15. There are no multiples of 25. So there are 3 fives, and $15!$ ends with 3 zeros.

**Answer: (C) 3**
