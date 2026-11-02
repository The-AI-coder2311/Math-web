---
order: 2
difficulty: easy
lesson: 01-pigeonhole-power
choices: ["5","6","7","8"]
answer: C
mistakes:
  A: "That's true, but it isn't the most you can promise. The guarantee is higher."
  B: "That rounds down. Since $\\frac{25}{4} = 6.25$, you need to round up."
  D: "The students could split as 7, 6, 6, and 6, so 8 isn't guaranteed."
verify: "Math.ceil(25 / 4)"
---

Each of 25 students picks a favorite from 4 colors. What is the largest number $N$ such that at least $N$ students must have picked the same color?

## Hint

Spread the students across the colors as evenly as you can.

## Hint 2

Use $\frac{25}{4}$, and think about whether to round up or down.

## Solution

Since $\frac{25}{4} = 6.25$, rounding up gives 7. If each color had at most 6 students, there would be at most 24 students, so some color has at least 7. And the split 7, 6, 6, 6 shows that 8 isn't guaranteed.

**Answer: (C) 7**
