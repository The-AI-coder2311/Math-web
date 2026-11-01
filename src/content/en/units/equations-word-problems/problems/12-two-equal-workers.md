---
order: 6
difficulty: easy
lesson: 05-work-rates
choices: ["2","1","4","8","16"]
answer: A
mistakes:
  B: "That would take 4 equal workers. There are only 2."
  C: "That's the time for one worker. With a helper, it has to be faster."
  D: "That adds the times. A helper makes the job faster, so add the rates."
  E: "That multiplies the times. Find how much gets done per hour."
verify: "(() => { const job = 4; return job / (job / 4 + job / 4); })()"
---

Two workers each take 4 hours to paint a wall alone. How many hours does the job take if they work together at those rates?

## Hint

What fraction of the wall does each worker paint in one hour?

## Hint 2

Each paints $\frac{1}{4}$ per hour, so together they paint $\frac{1}{2}$ per hour.

## Solution

Together, they paint $\frac{1}{4} + \frac{1}{4} = \frac{1}{2}$ of the wall per hour, so the job takes 2 hours.

**Answer: (A) 2**
