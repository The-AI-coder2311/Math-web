---
order: 2
difficulty: easy
from: modular-arithmetic/01-mod-notation
choices: ["2","1","3","4","5"]
answer: A
mistakes:
  B: "Check: $100 - 1 = 99$, which isn't a multiple of 7."
  C: "Check: $100 - 3 = 97$, which isn't a multiple of 7."
  D: "Check: $100 - 4 = 96$, which isn't a multiple of 7."
  E: "Check: $100 - 5 = 95$, which isn't a multiple of 7."
verify: "100 % 7"
---

What is the remainder when 100 is divided by 7?

## Hint

What's the largest multiple of 7 up to 100?

## Hint 2

$7 \times 14 = 98$.

## Solution

Since $7 \times 14 = 98$, the remainder is $100 - 98 = 2$.

**Answer: (A) 2**
