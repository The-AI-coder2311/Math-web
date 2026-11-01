---
order: 9
difficulty: medium
lesson: 04-factors-primes-leftovers
choices: ["16","17","19","23","32"]
answer: A
mistakes:
  B: "That's $5 + 12$. A pair closer together, $6 + 10$, gives less."
  C: "That's $4 + 15$. Keep going toward the middle of the list."
  D: "That's $3 + 20$. Keep going toward the middle of the list."
  E: "That's $2 + 30$. The closer together the pair is, the smaller its sum."
verify: "Math.min(...factors(60).map((a) => a + 60 / a))"
---

Two positive whole numbers have a product of 60. What is the smallest possible value of their sum?

## Hint

List every factor pair of 60 and add each pair. Do you notice what happens to the sum as the two numbers get closer together?

## Hint 2

The pairs of 60 are 1 and 60, 2 and 30, 3 and 20, 4 and 15, 5 and 12, and 6 and 10. Which adds up to the least?

## Solution

**Step 1.** List every factor pair of 60, and add each pair:

| Pair | Sum |
|---|---|
| 1 and 60 | 61 |
| 2 and 30 | 32 |
| 3 and 20 | 23 |
| 4 and 15 | 19 |
| 5 and 12 | 17 |
| 6 and 10 | 16 |

**Step 2.** The smallest sum comes from the pair that's closest together:

$$6 + 10 = 16$$

**Answer: (A) 16**
