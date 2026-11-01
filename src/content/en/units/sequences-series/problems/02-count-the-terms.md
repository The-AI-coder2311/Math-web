---
order: 2
difficulty: easy
lesson: 01-arithmetic-sequences
choices: ["16","17","18","19","85"]
answer: C
mistakes:
  A: "That's too few. Try your method on 12, 17, 22, which has 2 steps and 3 numbers."
  B: "That's the number of steps. 17 steps connect 18 numbers, like gaps between fence posts."
  D: "You may have added 2 to the steps. The number of terms is exactly 1 more than the number of steps."
  E: "That's the total climb. Each step climbs 5, so you still need to divide."
verify: "range(12, 97).filter((n) => (n - 12) % 5 === 0).length"
---

How many numbers are in the list 12, 17, 22, ..., 97?

## Hint

How far does the list climb in total, and how much does it climb at each step?

## Hint 2

The climb divided by the step size gives the number of steps. How does the number of steps compare with the number of numbers?

## Solution

**Step 1.** The list climbs $97 - 12 = 85$, and each step is 5. That's $85 \div 5 = 17$ steps.

**Step 2.** The number of terms is one more than the number of steps, so there are $17 + 1 = 18$ numbers.

**Answer: (C) 18**
