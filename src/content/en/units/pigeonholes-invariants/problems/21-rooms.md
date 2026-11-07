---
order: 21
difficulty: easy
lesson: 01-pigeonhole-power
choices: ["12","13","14","61"]
answer: B
mistakes:
  A: "That rounds down. Since 61 divided by 5 is 12.2, round up."
  C: "The students could split as 13, 12, 12, 12, 12. So 14 isn't guaranteed."
  D: "That would need everyone to be in one room."
verify: "Math.ceil(61 / 5)"
---

There are 61 students in 5 rooms. What is the largest number $N$ such that some room must have at least $N$ students?

## Hint

Divide, and think about whether to round up or down.

## Hint 2

$61 \div 5 = 12.2$.

## Solution

If each room had at most 12 students, there would be at most 60. So some room has at least 13. And the split 13, 12, 12, 12, 12 shows that 14 isn't guaranteed.

**Answer: (B) 13**
