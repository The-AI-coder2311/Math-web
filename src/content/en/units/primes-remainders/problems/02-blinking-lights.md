---
order: 2
difficulty: easy
lesson: 03-gcf-and-lcm
choices: ["24","16","14","32","48"]
answer: A
mistakes:
  C: "That's $6 + 8$. They line up at a common multiple."
  B: "That's a multiple of 8, but the first light blinks at 12 and 18, so it isn't lit then."
  D: "That's a multiple of 8 but not of 6."
  E: "That's $6 \\times 8$, which is a common multiple, but not the first one."
verify: "range(1, 100).find((t) => t % 6 === 0 && t % 8 === 0)"
---

One light blinks every 6 seconds, and another blinks every 8 seconds. They blink together right now. How many seconds will pass before they next blink together?

## Hint

They blink together at a time that is a multiple of both 6 and 8. Which multiple is the smallest?

## Hint 2

List the multiples of 8: 8, 16, 24. Which is the first that 6 also divides?

## Solution

The lights line up again at the LCM of 6 and 8. List the multiples of 8 until you reach a multiple of 6: 8, 16, 24. Since $6 \times 4 = 24$, the answer is 24 seconds.

**Answer: (A) 24**
