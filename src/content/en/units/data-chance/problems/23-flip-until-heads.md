---
order: 23
difficulty: easy
lesson: 04-expected-value
choices: ["1","1.5","2","4"]
answer: C
mistakes:
  A: "That's the luckiest case, when the first flip is heads."
  B: "Use the rule: the average wait is 1 divided by the chance."
  D: "That's the wait for an event with a chance of one fourth."
verify: "1 / (1 / 2)"
---

You flip a fair coin until you get heads. On average, how many flips does it take?

## Hint

If something has a chance of $p$ on each try, the average wait is $\frac{1}{p}$ tries.

## Hint 2

Here, $p = \frac{1}{2}$.

## Solution

The chance of heads is $\frac{1}{2}$ on each flip, so the average wait is $1 \div \frac{1}{2} = 2$ flips.

**Answer: (C) 2**
