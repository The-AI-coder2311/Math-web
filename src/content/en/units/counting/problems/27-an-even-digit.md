---
order: 27
difficulty: medium
lesson: 04-count-the-opposite
choices: ["125","450","775","875"]
answer: C
mistakes:
  A: "That's the opposite: numbers with no even digit. Subtract it from the total."
  B: "That's the numbers ending in an even digit. An even digit could also be in another spot."
  D: "That subtracts 125 from 1000. There are only 900 three-digit numbers."
verify: "range(100, 999).filter((n) => digits(n).some((d) => d % 2 === 0)).length"
---

How many three-digit numbers have at least one even digit?

## Hint

What's the opposite of "at least one even digit"?

## Hint 2

The opposite is "all digits are odd." Count those, and subtract from 900.

## Solution

There are 900 three-digit numbers. All odd digits gives $5 \times 5 \times 5 = 125$ numbers. So $900 - 125 = 775$ have an even digit.

**Answer: (C) 775**
