---
order: 17
difficulty: hard
lesson: 01-place-value
choices: ["4","2","3","1","9"]
answer: A
mistakes:
  D: "Testing one number isn't enough. Find the rule, $a = 2b$, and list all of the numbers that fit."
  B: "That misses some. With $a = 2b$, the ones digit can be 1, 2, 3, or 4."
  C: "That misses one. With $a = 2b$, the ones digit can be 1, 2, 3, or 4."
  E: "That's how many tens digits there are. The rule $a = 2b$ allows only some of them."
verify: "range(10, 99).filter((n) => n === 7 * sum(digits(n))).length"
---

How many 2-digit numbers are equal to 7 times the sum of their digits?

## Hint

Write the number as $10a + b$. What does the sentence say in symbols?

## Hint 2

$10a + b = 7(a + b)$ simplifies to $3a = 6b$, so $a = 2b$. Which digits fit?

## Solution

**Step 1.** Write $10a + b = 7(a + b)$. That gives $3a = 6b$, so $a = 2b$.

**Step 2.** The tens digit is twice the ones digit: 21, 42, 63, and 84. That's 4 numbers. (20, 40, 60, and 80 don't work, since $b = 0$ would make $a = 0$.)

**Check:** $7 \times (6 + 3) = 63$.

**Answer: (A) 4**
