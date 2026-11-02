---
order: 24
difficulty: hard
lesson: 05-angle-bisector
choices: ["$3$","$\\frac{10}{3}$","$\\frac{7}{2}$","$4$","$6$"]
answer: B
mistakes:
  A: "Try the ratio. $AC$ to $AB$ is 5 to 13, which makes 18 boxes on a side of 12."
  C: "Each box holds $\\frac{2}{3}$, and $CD$ fills 5 boxes. Check your multiplication."
  D: "Try the ratio. $AC$ to $AB$ is 5 to 13, not 1 to 2."
  E: "That cuts $BC$ in half. That only happens when the nearby sides are equal."
verify: "fraction(12 * 5, 5 + 13)"
---

A right triangle has its right angle at $C$, with $AC = 5$, $BC = 12$, and $AB = 13$. The bisector of angle $A$ meets $BC$ at $D$. How long is $CD$?

## Hint

The two sides next to angle $A$ are $AC$ and $AB$. The side that gets split is $BC$.

## Hint 2

$CD$ to $DB$ is 5 to 13. That makes 18 boxes on a side of 12.

## Solution

The ratio $CD$ to $DB$ is the same as $AC$ to $AB$, which is 5 to 13. That makes 18 boxes on a side of 12, so each box holds $\frac{12}{18} = \frac{2}{3}$. Since $CD$ fills 5 boxes, $CD = 5 \times \frac{2}{3} = \frac{10}{3}$.

**Answer: (B) $\frac{10}{3}$**
