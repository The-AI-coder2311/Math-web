---
order: 2
difficulty: easy
from: smart-counting/01-overlaps
choices: ["6","22","42","34","26"]
answer: E
mistakes:
  A: "That's the students on the math team only."
  B: "That's $14 + 8$. Add both teams, and subtract the overlap."
  D: "That counts the 8 students twice."
  C: "That adds the 8. Subtract it, since those students were counted twice."
verify: "new Set([...range(1, 14), ...range(7, 26)]).size"
---

In a school, 14 students are on the math team and 20 are on the chess team. Exactly 8 are on both. How many are on at least one team?

## Hint

If you add 14 and 20, who gets counted twice?

## Hint 2

Subtract the 8 once.

## Solution

Add the teams, and subtract the overlap: $14 + 20 - 8 = 26$.

**Answer: (E) 26**
