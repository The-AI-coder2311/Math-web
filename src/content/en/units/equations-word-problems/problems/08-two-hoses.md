---
order: 8
difficulty: medium
choices: [1.5, 2, 3, 4.5, 9]
answer: B
verify: "(() => { const pool = lcm(6, 3); return pool / (pool / 6 + pool / 3); })()"
---

One hose can fill a pool in 6 hours. A larger hose can fill the same pool in 3 hours. How many hours does it take to fill the pool using both hoses at once?

## Hint

What fraction of the pool does each hose fill in one hour?

## Solution

**Step 1.** In one hour, the first hose fills $\frac{1}{6}$ of the pool, and the larger hose fills $\frac{1}{3}$ of it.

**Step 2.** Together, they fill this much per hour:

$$\frac{1}{6} + \frac{1}{3} = \frac{1}{2}$$

**Step 3.** If they fill half of the pool each hour, the whole pool takes 2 hours.

**Answer: (B) 2**
