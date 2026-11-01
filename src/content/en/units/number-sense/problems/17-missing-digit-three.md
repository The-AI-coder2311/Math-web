---
order: 15
difficulty: medium
lesson: 03-divisibility-rules
choices: ["1","2","3","5","4"]
answer: E
mistakes:
  A: "That counts only one digit. Test all of the digits from 0 to 9."
  B: "Test all of the digits. Any multiple of 3 works, including 0 and 9."
  C: "That forgets 0. 402 has a digit sum of 6, so it works."
  D: "Only 0, 3, 6, and 9 work. Test your list with the digit-sum rule."
verify: "range(0, 9).filter((d) => (400 + 10 * d + 2) % 3 === 0).length"
---

The number $4\square2$ is divisible by 3. How many different digits could go in the box?

## Hint

A number is divisible by 3 when its digit sum is a multiple of 3. What do the known digits add up to?

## Hint 2

The known digits add up to 6. So the box must itself be a multiple of 3. Don't forget 0.

## Solution

The known digits add up to $4 + 2 = 6$, so the box has to be a multiple of 3. The options are 0, 3, 6, and 9. That's 4 digits.

**Answer: (E) 4**
