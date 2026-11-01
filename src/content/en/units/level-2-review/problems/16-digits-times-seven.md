---
order: 16
difficulty: hard
from: equations-word-problems/02-age-and-number-stories
choices: ["24","42","31","53","64"]
answer: B
mistakes:
  A: "Its ones digit is the larger one. The tens digit has to be 2 more."
  C: "Its tens digit is 2 more, but $7 \\times 4$ is 28, not 31."
  D: "Its tens digit is 2 more, but $7 \\times 8$ is 56, not 53."
  E: "Its tens digit is 2 more, but $7 \\times 10$ is 70, not 64."
verify: "range(10, 99).find((n) => { const [a, b] = digits(n); return a === b + 2 && n === 7 * (a + b); })"
---

The tens digit of a 2-digit number is 2 more than its ones digit. The number equals 7 times the sum of its digits. What is the number?

## Hint

Let the ones digit be $d$. What are the tens digit and the number?

## Hint 2

The number is $10(d + 2) + d = 11d + 20$, and the digits add up to $2d + 2$.

## Solution

The number is $11d + 20$, and the digit sum is $2d + 2$. So $11d + 20 = 14d + 14$, which gives $d = 2$. The number is 42.

**Check:** $4 + 2 = 6$, and $7 \times 6 = 42$.

**Answer: (B) 42**
