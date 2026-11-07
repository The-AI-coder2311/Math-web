---
order: 23
difficulty: easy
lesson: 03-overcount-then-divide
choices: ["14","21","42","49"]
answer: B
mistakes:
  A: "That's 7 times 2. Each person shakes hands with 6 others."
  C: "That counts each handshake twice. One handshake involves two people."
  D: "That's 7 times 7, which has people shaking their own hands."
verify: "combos(range(1, 7), 2).length"
---

Seven people meet, and each pair shakes hands once. How many handshakes are there?

## Hint

Each person shakes 6 hands. What happens if you multiply 7 by 6?

## Hint 2

Multiplying counts each handshake twice, so divide by 2.

## Solution

Each of the 7 people shakes 6 hands, which gives $7 \times 6 = 42$. That counts each handshake twice, so there are $42 \div 2 = 21$ handshakes.

**Answer: (B) 21**
