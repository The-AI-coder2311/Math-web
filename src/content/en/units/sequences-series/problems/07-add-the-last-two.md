---
order: 7
difficulty: easy
lesson: 04-recursive-and-special
choices: ["47","40","29","58","76"]
answer: A
mistakes:
  C: "That's the 7th term. Go one step further."
  B: "You may have doubled a term. Each new term is the sum of the two before it, so the 8th is $18 + 29$."
  D: "That's $29 \\times 2$. The rule adds the two previous terms, which are 18 and 29."
  E: "That's the 9th term. You went one step too far."
verify: "range(3, 8).reduce(([a, b]) => [b, a + b], [1, 3])[1]"
---

In the list 1, 3, 4, 7, 11, ..., each term is the sum of the two terms before it. What is the 8th term?

## Hint

You have 5 terms. Keep adding the last two to get the next one.

## Hint 2

The 6th term is 18, and the 7th is 29.

## Solution

The list continues with $7 + 11 = 18$, then $11 + 18 = 29$, then $18 + 29 = 47$. Counting positions, 47 is the 8th term.

**Answer: (A) 47**
