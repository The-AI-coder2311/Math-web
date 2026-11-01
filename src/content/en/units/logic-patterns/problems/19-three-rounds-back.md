---
order: 19
difficulty: hard
lesson: 03-working-backwards
choices: ["5","4","10","22","23"]
answer: B
mistakes:
  A: "Run it forward: 5 becomes 12, then 26, then 54."
  C: "That's after one round from the start. Go back one more round."
  D: "That's only one round back from 46. There are three rounds."
  E: "That's $46 \\div 2$. You also need to subtract 1, and to do it for all three rounds."
verify: "range(0, 50).find((n) => [1, 2, 3].reduce((x) => (x + 1) * 2, n) === 46)"
---

Start with a number, add 1, and double the result. Then repeat that with the new number: add 1, and double. Do it a third time, and the result is 46. What number did you start with?

## Hint

Work backwards. To undo "add 1 and double," what do you do, and in what order?

## Hint 2

Divide by 2, and then subtract 1. From 46, that gives 22. Do it twice more.

## Solution

Undo each round by dividing by 2 and subtracting 1: 46 becomes 22, then 22 becomes 10, and then 10 becomes 4.

**Check:** 4 becomes 10, then 22, then 46.

**Answer: (B) 4**
