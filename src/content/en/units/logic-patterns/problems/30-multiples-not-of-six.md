---
order: 30
difficulty: hard
lesson: 01-repeating-and-growing
choices: ["8","17","25","33"]
answer: B
mistakes:
  A: "That's the numbers that are multiples of both 4 and 6. Subtract those from the multiples of 4."
  C: "That counts all of the multiples of 4. Some of them are also multiples of 6."
  D: "Those are the multiples of 3. Look for multiples of 4 first."
verify: "range(1, 100).filter((n) => n % 4 === 0 && n % 6 !== 0).length"
---

How many whole numbers from 1 to 100 are multiples of 4 but not multiples of 6?

## Hint

How many multiples of 4 are there? Which of those are also multiples of 6?

## Hint 2

A number that's a multiple of both 4 and 6 is a multiple of 12.

## Solution

There are 25 multiples of 4 up to 100. Those that are also multiples of 6 are the multiples of 12, and there are 8 of those. So $25 - 8 = 17$ numbers work.

**Answer: (B) 17**
