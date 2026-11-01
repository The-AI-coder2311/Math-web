---
order: 14
difficulty: medium
lesson: 03-sectors-and-probability
choices: ["$3\\pi$","$3\\pi + 9$","$6\\pi + 18$","$3\\pi + 18$","$9\\pi + 18$"]
answer: D
mistakes:
  A: "That's only the arc. The perimeter also includes the two straight edges."
  B: "That includes only one straight edge. A slice has two."
  C: "Check the arc: $\\frac{1}{6}$ of $18\\pi$ is $3\\pi$."
  E: "Check the arc: $\\frac{1}{6}$ of $18\\pi$ is $3\\pi$."
verify: "`${pi((2 * 9 * 60) / 360)} + ${2 * 9}`"
---

A slice of a circle with a radius of 9 has an angle of 60°. What is the perimeter of the slice?

## Hint

The perimeter goes all the way around the slice. What are its three edges?

## Hint 2

The arc is $\frac{1}{6}$ of $18\pi$. The other two edges are radii.

## Solution

The arc is $\frac{60}{360} = \frac{1}{6}$ of the circumference $18\pi$, which is $3\pi$. The two straight edges are radii, which add $9 + 9 = 18$. So the perimeter is $3\pi + 18$.

**Answer: (D) $3\pi + 18$**
