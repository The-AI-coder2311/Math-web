---
order: 10
difficulty: medium
lesson: 05-work-rates
choices: ["1.5","2","3","4.5","9"]
answer: B
mistakes:
  A: "Check it: in 1.5 hours, the hoses fill only $\\frac{3}{4}$ of the pool."
  C: "That's the larger hose alone. With both, it has to be faster."
  D: "That's the average of 3 and 6. Two hoses have to be faster than either one alone."
  E: "That adds the times. Two hoses have to be faster than one, so add the rates instead."
verify: "(() => { const pool = lcm(6, 3); return pool / (pool / 6 + pool / 3); })()"
---

One hose can fill a pool in 6 hours. A larger hose can fill the same pool in 3 hours. How many hours does it take to fill the pool using both hoses at once?

## Hint

What fraction of the pool does each hose fill in one hour?

## Hint 2

Together, they fill $\frac{1}{6} + \frac{1}{3}$ of the pool per hour.

## Solution

**Step 1.** In one hour, the first hose fills $\frac{1}{6}$ of the pool, and the larger hose fills $\frac{1}{3}$ of it.

**Step 2.** Together, they fill this much per hour:

$$\frac{1}{6} + \frac{1}{3} = \frac{1}{2}$$

**Step 3.** If they fill half of the pool each hour, the whole pool takes 2 hours.

**Answer: (B) 2**
