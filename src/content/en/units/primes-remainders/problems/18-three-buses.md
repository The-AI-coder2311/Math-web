---
order: 18
difficulty: hard
lesson: 03-gcf-and-lcm
choices: ["60","90","180","360","6480"]
answer: C
mistakes:
  A: "That works for 12 and 30, but it isn't a multiple of 18."
  B: "That works for 18 and 30, but it isn't a multiple of 12."
  D: "That's a common multiple, but not the first. Use each prime's largest power once."
  E: "That's $12 \\times 18 \\times 30$, a common multiple, but far from the first."
verify: "lcm(lcm(12, 18), 30)"
---

Three buses leave a station together. One leaves every 12 minutes, one every 18 minutes, and one every 30 minutes. How many minutes pass before all three leave together again?

## Hint

They need a common multiple of all three times. Write each one as primes.

## Hint 2

$12 = 2^2 \times 3$, $18 = 2 \times 3^2$, and $30 = 2 \times 3 \times 5$. Use the larger power of each prime.

## Solution

Using the larger power of each prime gives $2^2 \times 3^2 \times 5 = 180$ minutes.

**Answer: (C) 180**
