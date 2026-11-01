---
order: 13
difficulty: medium
lesson: 02-giant-powers
choices: ["1","0","2","3","5"]
answer: A
mistakes:
  B: "Powers of 5 are never multiples of 3."
  C: "That's for an odd exponent. Here, 100 is even."
  D: "A remainder has to be less than the number you divide by, which is 3."
  E: "A remainder has to be less than the number you divide by, which is 3."
verify: "range(1, 100).reduce((r) => (r * 5) % 3, 1)"
---

What is the remainder when $5^{100}$ is divided by 3?

## Hint

What does 5 leave when divided by 3? Can you write it as a negative?

## Hint 2

$5 \equiv -1 \pmod{3}$, and the exponent is even.

## Solution

Since $5 \equiv -1 \pmod{3}$, we have $5^{100} \equiv (-1)^{100} = 1$. So the remainder is 1.

**Answer: (A) 1**
