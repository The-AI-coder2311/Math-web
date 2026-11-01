---
order: 14
difficulty: medium
lesson: 03-several-conditions
choices: ["3","9","15","21","27"]
answer: C
mistakes:
  A: "It leaves 3 in both cases, but the problem asks for a number greater than 3."
  B: "It leaves 3 when divided by 6, but 1 when divided by 4."
  D: "It leaves 3 when divided by 6, but 1 when divided by 4."
  E: "It works, but it isn't the smallest. It comes from $24 + 3$."
verify: "range(4, 100).find((n) => n % 4 === 3 && n % 6 === 3)"
---

What is the smallest whole number greater than 3 that leaves a remainder of 3 when divided by 4 and also when divided by 6?

## Hint

The remainders match. What happens if you subtract 3 from the number?

## Hint 2

The result is a common multiple of 4 and 6. What's the LCM?

## Solution

Subtracting 3 gives a common multiple of 4 and 6. The smallest positive one is 12. So the number is $12 + 3 = 15$.

**Answer: (C) 15**
