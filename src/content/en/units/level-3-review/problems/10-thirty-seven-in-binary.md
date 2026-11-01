---
order: 10
difficulty: medium
from: modular-arithmetic/04-other-bases
choices: ["100011","100101","101001","110001","111001"]
answer: B
mistakes:
  A: "That's $32 + 2 + 1$, which is 35."
  C: "That's $32 + 8 + 1$, which is 41."
  D: "That's $32 + 16 + 1$, which is 49."
  E: "That's $32 + 16 + 8 + 1$, which is 57."
verify: "(37).toString(2)"
---

What is 37 when written in base 2?

## Hint

Which powers of 2 add up to 37?

## Hint 2

$37 = 32 + 4 + 1$.

## Solution

$37 = 32 + 4 + 1$. Those are the places worth 32, 4, and 1, so the digits are 100101.

**Answer: (B) 100101**
