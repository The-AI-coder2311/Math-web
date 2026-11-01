---
order: 3
difficulty: easy
lesson: 01-solving-and-translating
choices: ["23","24","25","26","27"]
answer: C
mistakes:
  A: "That's the smallest number. The question asks for the largest."
  B: "That's the middle number, $72 \\div 3$. The question asks for the largest."
  D: "Check it: $24 + 25 + 26$ is 75."
  E: "Check it: $25 + 26 + 27$ is 78."
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

**Answer: (C) 25**
