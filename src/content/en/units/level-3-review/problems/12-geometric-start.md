---
order: 12
difficulty: medium
from: sequences-series/03-geometric-sequences
choices: ["2","3","6","9","54"]
answer: A
mistakes:
  B: "That's the ratio. The question asks for the 1st term."
  C: "That's the 2nd term. Go back one more step."
  D: "That divides by 2 instead of the ratio."
  E: "That goes forward. The 1st term comes before the 3rd."
verify: "product(range(1, 40), range(1, 10)).find(([a, r]) => a * r ** 2 === 18 && a * r ** 5 === 486)[0]"
---

In a geometric sequence, the 3rd term is 18 and the 6th term is 486. What is the 1st term?

## Hint

How many steps are there from the 3rd term to the 6th? What's the total change?

## Hint 2

Three steps multiply by 27, so the ratio is 3.

## Solution

Three steps multiply by $486 \div 18 = 27$, so the ratio is 3. The 1st term is two steps before the 3rd: $18 \div 3 \div 3 = 2$.

**Answer: (A) 2**
