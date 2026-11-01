---
order: 12
difficulty: medium
from: basic-geometry/03-angle-facts
choices: ["50","70","60","120","180"]
answer: C
mistakes:
  A: "That's $85 - 35$. All three angles add up to 180°."
  B: "Check it: $35 + 85 + 70$ is 190."
  D: "That's $35 + 85$. Subtract it from 180."
  E: "That's what all three add up to."
verify: "range(1, 179).find((x) => x + 35 + 85 === 180)"
---

Two angles of a triangle measure 35° and 85°. How many degrees does the third angle measure?

## Hint

What do the three angles add up to?

## Hint 2

They add up to 180°.

## Solution

The third angle is $180 - 35 - 85 = 60$ degrees.

**Answer: (C) 60**
