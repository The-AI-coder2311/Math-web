---
order: 24
difficulty: medium
lesson: 01-pigeonhole-power
choices: ["10","11","12","13"]
answer: B
mistakes:
  A: "Check the possible counts: 0 through 11 is 12 values, and two of them can't both appear."
  C: "That's every count from 0 to 11. But 0 and 11 can't both appear."
  D: "A person can have at most 11 friends in a group of 12."
verify: "12 - 1"
---

In a group of 12 people, some pairs are friends. What is the largest number of different friend counts that can appear in the group?

## Hint

What values could a person's friend count be?

## Hint 2

The counts go from 0 to 11. Can 0 and 11 both appear?

## Solution

A count can be 0 through 11, which is 12 values. If someone has 11 friends, then everyone has at least 1, so 0 and 11 can't both appear. So at most 11 different counts can appear.

**Answer: (B) 11**
