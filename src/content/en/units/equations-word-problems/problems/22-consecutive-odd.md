---
order: 22
difficulty: easy
lesson: 02-age-and-number-stories
choices: ["17","18","19","21"]
answer: C
mistakes:
  A: "That's the smaller number. The question asks for the larger."
  B: "That's half of 36, but 18 is even. The two numbers are on either side of it."
  D: "Test it: 19 and 21 add up to 40."
verify: "range(1, 40).filter((n) => n % 2 === 1 && n + n + 2 === 36).map((n) => n + 2).join()"
---

Two consecutive odd numbers add up to 36. What is the larger one?

## Hint

Consecutive odd numbers differ by 2. So call them $n$ and $n + 2$.

## Hint 2

$2n + 2 = 36$.

## Solution

Let the numbers be $n$ and $n + 2$. Then $2n + 2 = 36$, so $n = 17$. The larger number is 19.

**Answer: (C) 19**
