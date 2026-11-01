---
order: 20
difficulty: hard
from: fractions-ratios/01-equal-groups
choices: ["40","60","72","90","120"]
answer: B
mistakes:
  A: "That treats 24 as $\\frac{3}{5}$ of the jug, skipping Sunday."
  C: "That treats 24 as $\\frac{1}{3}$ of the jug. Find the fraction left after both days."
  D: "Run it forward: Saturday leaves 54, and Sunday leaves 36."
  E: "That treats 24 as $\\frac{1}{5}$ of the jug. It's $\\frac{2}{5}$."
verify: "range(1, 300).find((n) => n - (2 * n) / 5 - (n - (2 * n) / 5) / 3 === 24)"
---

A camper uses $\frac{2}{5}$ of a water jug on Saturday, and then $\frac{1}{3}$ of what's left on Sunday. There are 24 liters left. How many liters did the jug hold at the start?

## Hint

Sunday's fraction is a fraction of what was left. What fraction remains after Saturday?

## Hint 2

After Saturday, $\frac{3}{5}$ remains. After Sunday, $\frac{2}{3}$ of that remains.

## Solution

After both days, $\frac{2}{3} \times \frac{3}{5} = \frac{2}{5}$ of the jug remains. So $\frac{2}{5}$ of the jug is 24 liters. One fifth is 12, and the whole jug is 60 liters.

**Answer: (B) 60**
