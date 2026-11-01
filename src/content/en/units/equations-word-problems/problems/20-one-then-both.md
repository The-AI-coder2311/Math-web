---
order: 20
difficulty: hard
lesson: 05-work-rates
choices: ["1","1.5","2","2.5","3"]
answer: B
mistakes:
  A: "In 1 hour, they finish only 4 of the 6 walls that are left."
  C: "That's how long Ana worked alone. The remaining part goes faster with two people."
  D: "In 2.5 hours, they'd finish 10 walls, but only 6 are left. Together, they finish 4 walls per hour."
  E: "That's the time for all 12 walls together. Half of the job is already done."
verify: "(() => { const job = lcm(4, 12); const left = job - 2 * (job / 4); return left / (job / 4 + job / 12); })()"
---

Ana can paint a room in 4 hours, and Ben can paint it in 12 hours. Ana works alone for 2 hours, and then Ben joins her. How many more hours does it take to finish?

## Hint

Pick a friendly size for the job. How much does each person do per hour?

## Hint 2

Let the job be 12 walls. Ana does 3 per hour, and Ben does 1 per hour. How much is left after 2 hours?

## Solution

Let the job be 12 walls. Ana does 3 per hour and Ben does 1 per hour. After 2 hours, Ana has done 6, so 6 are left. Together, they do 4 per hour, so that takes $6 \div 4 = 1.5$ hours.

**Answer: (B) 1.5**
