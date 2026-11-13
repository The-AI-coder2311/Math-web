---
order: 10
difficulty: medium
lesson: 02-fast-sums
choices: ["65","585","617.5","650","1235"]
answer: D
mistakes:
  A: "That's $4 + 61$, the sum of one pair. There are 10 pairs."
  B: "That uses 18 terms. The 19 steps connect 20 terms."
  C: "That uses 19 terms, which is the number of steps. 19 steps connect 20 terms."
  E: "That's $19 \\times 65$. There are 20 terms, not 19, and you also need to divide by 2."
verify: "sum(range(4, 61).filter((n) => (n - 4) % 3 === 0))"
---

What is the value of $4 + 7 + 10 + \cdots + 61$?

## Hint

First, how many terms are there? Find the climb, and divide by the step size.

## Hint 2

There are 20 terms. The first and last add up to 65.

## Solution

**Step 1.** The list climbs $61 - 4 = 57$ in steps of 3, so there are 19 steps, which means 20 terms.

**Step 2.** The sum is $\frac{20 \times (4 + 61)}{2} = 650$.

**Answer: (D) 650**
