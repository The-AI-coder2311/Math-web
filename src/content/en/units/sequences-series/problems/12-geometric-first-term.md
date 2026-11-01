---
order: 12
difficulty: medium
lesson: 03-geometric-sequences
choices: ["6","4","3","8","12"]
answer: A
mistakes:
  C: "That's two steps back from the 2nd term. The 1st term is only one step back."
  B: "You may have used a ratio of 3. Check it: $12 \\times 3 \\times 3 \\times 3$ is much more than 96."
  D: "That's the total change over three steps. Each single step multiplies by 2."
  E: "That's the 2nd term. Go back one more step."
verify: "product(range(1, 40), range(1, 10)).filter(([a, r]) => a * r === 12 && a * r ** 4 === 96)[0][0]"
---

In a geometric sequence of positive numbers, the 2nd term is 12 and the 5th term is 96. What is the 1st term?

## Hint

How many steps are there from the 2nd term to the 5th? What does the term get multiplied by, in total?

## Hint 2

Three steps multiply by $96 \div 12 = 8$. Which number used three times makes 8?

## Solution

**Step 1.** Three steps multiply the term by $96 \div 12 = 8$. Since $2 \times 2 \times 2 = 8$, the ratio is 2.

**Step 2.** The 1st term is one step before the 2nd: $12 \div 2 = 6$.

**Answer: (A) 6**
