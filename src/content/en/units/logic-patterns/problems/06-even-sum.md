---
order: 7
difficulty: medium
lesson: 02-small-cases
choices: ["2500","2525","5050","2550","5100"]
answer: D
mistakes:
  A: "That's $25 \\times 100$. Each pair adds up to 102, not 100."
  B: "Check your pairs. 2 and 100 add up to 102, and there are 25 pairs."
  C: "That's the sum from 1 to 100, which includes the odd numbers."
  E: "That's $50 \\times 102$, the total if you write the list twice. Divide by 2."
verify: "sum(range(1, 100).filter((n) => n % 2 === 0))"
---

What is the sum of all the even numbers from 2 to 100?

$$2 + 4 + 6 + \cdots + 100$$

## Hint

Try pairing the first number with the last, and the second with the second-to-last. What does each pair add up to? How many pairs are there?

## Hint 2

There are 50 numbers, which make 25 pairs that each add up to 102.

## Solution

**Step 1.** Pair the numbers from the outside in: 2 and 100 make 102, 4 and 98 make 102, and so on. Every pair adds up to 102.

**Step 2.** The list has 50 numbers, because 100 is $2 \times 50$. So there are 25 pairs.

**Step 3.** The sum is $25 \times 102 = 2550$.

**Answer: (D) 2550**
