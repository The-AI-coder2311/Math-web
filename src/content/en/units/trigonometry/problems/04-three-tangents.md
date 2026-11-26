---
order: 4
difficulty: medium
lesson: 01-unit-circle
choices: ["-3","-1","0","1","3"]
answer: B
mistakes:
  A: "That makes all three tangents $-1$. In quadrant III, both coordinates are negative, so tangent is positive."
  C: "Two of the three tangents are $-1$ and one is $1$. They don't all cancel."
  D: "Check the signs: tangent is negative in quadrants II and IV."
  E: "That treats every tangent as positive. Only $225^\\circ$ is in a quadrant where tangent is positive."
verify: "Math.round(Math.tan(135*Math.PI/180) + Math.tan(225*Math.PI/180) + Math.tan(315*Math.PI/180))"
---

What is the value of $\tan 135^\circ + \tan 225^\circ + \tan 315^\circ$?

## Hint

Each angle has reference angle $45^\circ$. Only the signs differ.

## Hint 2

Tangent is positive where sine and cosine have the same sign: quadrants I and III.

## Solution

Each angle has reference angle $45^\circ$, so each tangent is $1$ or $-1$.

- $135^\circ$ is in quadrant II, so $\tan 135^\circ = -1$.
- $225^\circ$ is in quadrant III, so $\tan 225^\circ = 1$.
- $315^\circ$ is in quadrant IV, so $\tan 315^\circ = -1$.

The sum is $-1 + 1 - 1 = -1$.

**Answer: (B) -1**
