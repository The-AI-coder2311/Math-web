---
order: 28
difficulty: medium
lesson: 03-geometric-sequences
choices: ["2","3","4","6"]
answer: B
mistakes:
  A: "That's the common ratio. The question asks for the first term."
  C: "Test it: with a first term of 4 and a ratio of 2, the 3rd term is 16."
  D: "That's the 2nd term."
verify: "product(range(1, 10), range(2, 5)).find(([a, r]) => a * r ** 2 === 12 && a * r ** 5 === 96)[0]"
---

A geometric sequence has a 3rd term of 12 and a 6th term of 96. What is its first term?

## Hint

Going from the 3rd term to the 6th takes 3 multiplications by the ratio.

## Hint 2

$r^3 = 8$, so $r = 2$.

## Solution

Going from the 3rd term to the 6th multiplies by $r^3$. So $r^3 = 96 \div 12 = 8$, and $r = 2$. Going back 2 steps from 12 gives $12 \div 4 = 3$.

**Answer: (B) 3**
