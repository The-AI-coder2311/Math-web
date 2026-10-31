---
order: 2
difficulty: easy
choices: [14, 16, 24, 32, 48]
answer: C
verify: "range(1, 100).find((t) => t % 6 === 0 && t % 8 === 0)"
---

One light blinks every 6 seconds, and another blinks every 8 seconds. They blink together right now. How many seconds will pass before they next blink together?

## Hint

They blink together at a time that is a multiple of both 6 and 8. Which multiple is the smallest?

## Solution

The lights line up again at the LCM of 6 and 8. List the multiples of 8 until you reach a multiple of 6: 8, 16, 24. Since $6 \times 4 = 24$, the answer is 24 seconds.

**Answer: (C) 24**
