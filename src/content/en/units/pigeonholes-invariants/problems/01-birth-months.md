---
order: 1
difficulty: easy
lesson: 01-pigeonhole-power
choices: ["12","13","14","24"]
answer: B
mistakes:
  A: "All 12 students could have different birth months. You need one more."
  C: "That works, but it's more than you need. Try one fewer."
  D: "That guarantees 2 in a month, but a much smaller group does too."
verify: "range(1, 30).find((n) => Math.ceil(n / 12) >= 2)"
---

What is the smallest number of students a group must have to be sure that two of them share a birth month?

## Hint

How many students can you have, with every birth month different?

## Hint 2

There are 12 months, so 12 students can all be different.

## Solution

Up to 12 students could have 12 different birth months. A 13th student has to share a month with someone.

**Answer: (B) 13**
