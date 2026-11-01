---
order: 14
difficulty: medium
lesson: 04-units-digits-and-remainders
choices: ["0","2","4","8","6"]
answer: D
mistakes:
  A: "Powers of 8 never end in 0, since 8 has no factor of 5."
  B: "That's the 3rd spot. Here, 41 divided by 4 leaves 1."
  C: "That's the 2nd spot. Here, 41 divided by 4 leaves 1."
  E: "That's the 4th spot, for a remainder of 0. Here, 41 divided by 4 leaves 1."
verify: "range(1, 41).reduce((u) => (u * 8) % 10, 1)"
---

What is the last digit of $8^{41}$?

## Hint

Write the last digits of the first few powers of 8.

## Hint 2

The cycle is 8, 4, 2, 6. Divide 41 by 4.

## Solution

The last digits cycle through 8, 4, 2, 6. Since $41 = 4 \times 10 + 1$, it lands on the 1st spot, which is 8.

**Answer: (D) 8**
