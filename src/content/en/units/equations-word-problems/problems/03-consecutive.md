---
order: 3
difficulty: easy
lesson: 01-solving-and-translating
choices: ["21","22","23","24","25"]
answer: E
mistakes:
  A: "If the largest were 21, the numbers would be 19, 20, and 21, which add up to 60."
  B: "If the largest were 22, the numbers would be 20, 21, and 22, which add up to 63."
  C: "That's the smallest number. The question asks for the largest."
  D: "That's the middle number, $72 \\div 3$. The question asks for the largest."
verify: "range(1, 100).find((n) => n + (n + 1) + (n + 2) === 72) + 2"
---

Three consecutive whole numbers add up to 72. What is the largest of the three numbers?

## Hint

Call the smallest number $n$. What are the other two?

## Hint 2

$3n + 3 = 72$. Find $n$, and then find the largest number.

## Solution

**Step 1.** The numbers are $n$, $n + 1$, and $n + 2$. Adding them gives $3n + 3 = 72$.

**Step 2.** Subtract 3 to get $3n = 69$, and divide by 3 to get $n = 23$.

**Step 3.** The numbers are 23, 24, and 25, so the largest is 25.

**Answer: (E) 25**
