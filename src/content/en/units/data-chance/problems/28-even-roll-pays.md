---
order: 28
difficulty: medium
lesson: 04-expected-value
choices: ["1","2","3","3.5"]
answer: B
mistakes:
  A: "Check the sum: the even numbers add up to 12, and each has a chance of one sixth."
  C: "That's the sum divided by 4. There are 6 outcomes, not 4."
  D: "That's the average roll, when every roll pays. Odd rolls pay nothing here."
verify: "sum(range(1, 6).map((n) => (n % 2 === 0 ? n : 0))) / 6"
---

You roll a die. If the number is even, you win that many dollars. If it's odd, you win nothing. What is your expected win, in dollars?

## Hint

Multiply each result by its chance, and add.

## Hint 2

The wins are 2, 4, and 6, each with a chance of $\frac{1}{6}$.

## Solution

The expected win is $\frac{2 + 4 + 6}{6} = \frac{12}{6} = 2$ dollars.

**Answer: (B) 2**
