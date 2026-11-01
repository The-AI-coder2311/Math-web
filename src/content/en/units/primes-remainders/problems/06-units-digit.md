---
order: 8
difficulty: medium
lesson: 04-units-digits-and-remainders
choices: ["1","3","7","9","0"]
answer: D
mistakes:
  A: "That's the last spot, for a remainder of 0. Here, 50 divided by 4 leaves 2."
  B: "That's the 3rd spot. Here, 50 divided by 4 leaves 2."
  C: "That's the 1st spot. Here, 50 divided by 4 leaves 2."
  E: "Powers of 7 never end in 0, since 7 has no factors of 2 or 5."
verify: "range(1, 50).reduce((digit) => (digit * 7) % 10, 1)"
---

What is the last digit of $7^{50}$?

## Hint

Find the last digits of $7^1$, $7^2$, $7^3$, and so on, until they repeat.

## Hint 2

The cycle is 7, 9, 3, 1. Divide 50 by 4 to find the spot.

## Solution

**Step 1.** Find the last digits of the first few powers of 7. They are 7, 9, 3, 1, and then they repeat: 7, 9, 3, 1.

**Step 2.** The pattern has 4 digits. Since $4 \times 12 = 48$, the power $7^{48}$ ends the pattern, so it ends in 1.

**Step 3.** Go 2 more steps: $7^{49}$ ends in 7, and $7^{50}$ ends in 9.

**Answer: (D) 9**
