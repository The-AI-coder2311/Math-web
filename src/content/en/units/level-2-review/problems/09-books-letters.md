---
order: 9
difficulty: medium
from: smart-counting/03-repeats
choices: ["12","24","30","60","120"]
answer: D
mistakes:
  A: "That divides by 10. Only one letter repeats, so divide by 2."
  B: "That's $4!$. There are 5 letters."
  C: "That divides by 4. Only one letter repeats, so divide by $2!$."
  E: "That treats the two Os as different."
verify: "new Set(perms([...'BOOKS']).map((x) => x.join(''))).size"
---

How many different ways can you arrange the letters in the word BOOKS?

## Hint

What would it be if all of the letters were different? Which letter repeats?

## Hint 2

Start with $5! = 120$. The two Os can swap.

## Solution

There are $5! = 120$ orders if the letters are all different. The two Os can swap, so divide by 2: $120 \div 2 = 60$.

**Answer: (D) 60**
