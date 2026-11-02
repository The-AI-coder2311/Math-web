---
order: 24
difficulty: hard
lesson: 05-heron-and-inradius
choices: ["3","5","6","7","10"]
answer: C
mistakes:
  A: "That divides the area by the whole perimeter. Use half of the perimeter."
  B: "Check the area. It should be 210."
  D: "Check the division. $210 \\div 35$ is not 7."
  E: "Divide the area by $s$. Check that you've used $s = 35$."
verify: "Math.sqrt(35 * 18 * 10 * 7) / 35"
---

A triangle has sides 17, 25, and 28. What is the radius of the circle inside it that touches all three sides?

## Hint

Find the area with Heron's formula. Half the perimeter is 35.

## Hint 2

The area is 210. Now use $A = rs$.

## Solution

Here, $s = 35$, and the differences are 18, 10, and 7. So $A = \sqrt{35 \times 18 \times 10 \times 7} = \sqrt{44100} = 210$. Then $r = \frac{A}{s} = \frac{210}{35} = 6$.

**Answer: (C) 6**
