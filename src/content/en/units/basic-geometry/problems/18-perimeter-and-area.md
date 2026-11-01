---
order: 18
difficulty: hard
lesson: 01-perimeter-and-area
choices: ["5","8","10","13","20"]
answer: B
mistakes:
  A: "That's the shorter side."
  C: "A 10 by 4 rectangle has an area of 40, but its perimeter is 28."
  D: "That's half of the perimeter, which is the two sides added together."
  E: "A 20 by 2 rectangle has an area of 40, but its perimeter is 44."
verify: "Math.max(...range(1, 13).filter((a) => a * (13 - a) === 40))"
---

A rectangle has a perimeter of 26 and an area of 40. How long is its longer side?

## Hint

Half of the perimeter is one length plus one width. What two numbers add up to that, and multiply to 40?

## Hint 2

The sides add up to 13. List the factor pairs of 40.

## Solution

The sides add up to $26 \div 2 = 13$ and multiply to 40. The factor pair 5 and 8 fits both. So the longer side is 8.

**Answer: (B) 8**
