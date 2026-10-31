---
order: 6
difficulty: medium
choices: [1, 3, 7, 9, 0]
answer: D
verify: "range(1, 50).reduce((digit) => (digit * 7) % 10, 1)"
---

What is the last digit of $7^{50}$?

## Hint

Find the last digits of $7^1$, $7^2$, $7^3$, and so on, until they repeat.

## Solution

**Step 1.** Find the last digits of the first few powers of 7. They are 7, 9, 3, 1, and then they repeat: 7, 9, 3, 1.

**Step 2.** The pattern has 4 digits. Since $4 \times 12 = 48$, the power $7^{48}$ ends the pattern, so it ends in 1.

**Step 3.** Go 2 more steps: $7^{49}$ ends in 7, and $7^{50}$ ends in 9.

**Answer: (D) 9**
