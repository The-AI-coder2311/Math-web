---
order: 19
difficulty: hard
lesson: 03-several-conditions
choices: ["5","7","6","20","33"]
answer: C
mistakes:
  A: "That misses one. List them from 11, going up by 15: 11, 26, 41, 56, 71, 86."
  B: "That includes 101, which is more than 100."
  D: "That's how many leave 1 when divided by 5. They also have to leave 2 when divided by 3."
  E: "That's about how many leave 2 when divided by 3. They also have to leave 1 when divided by 5."
verify: "range(1, 100).filter((n) => n % 3 === 2 && n % 5 === 1).length"
---

How many whole numbers from 1 to 100 leave a remainder of 2 when divided by 3, and a remainder of 1 when divided by 5?

## Hint

Find the smallest such number. Then how far apart are they?

## Hint 2

The smallest is 11, and they're spaced by the LCM, 15.

## Solution

The smallest is 11. The numbers are spaced by 15, so they're 11, 26, 41, 56, 71, and 86. The next would be 101, which is too big. That's 6 numbers.

**Answer: (C) 6**
