---
order: 30
difficulty: hard
lesson: 04-recursive-and-special
choices: ["0","1","2"]
answer: C
mistakes:
  A: "That's the remainder at every 4th position. Position 102 matches position 6."
  B: "Check the cycle: the remainders go 1, 1, 2, 0, 2, 2, 1, 0."
verify: "(() => { let [a, b] = [1, 1]; for (let i = 3; i <= 102; i++) [a, b] = [b, (a + b) % 3]; return b % 3; })()"
---

The Fibonacci numbers go 1, 1, 2, 3, 5, 8, and so on. What is the remainder when the 102nd Fibonacci number is divided by 3?

## Hint

Write only the remainders mod 3. They follow the same adding rule.

## Hint 2

The remainders go 1, 1, 2, 0, 2, 2, 1, 0, and then repeat every 8.

## Solution

The remainders go 1, 1, 2, 0, 2, 2, 1, 0, with a cycle of 8. Since $102 = 8 \times 12 + 6$, the 102nd matches the 6th, which is 2. Check: the 6th Fibonacci number is 8, which has a remainder of 2.

**Answer: (C) 2**
