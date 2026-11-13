---
order: 12
difficulty: medium
lesson: 01-circle-formulas
choices: ["$18\\pi$","$27\\pi$","$36\\pi$","$81\\pi$","$162\\pi$"]
answer: A
mistakes:
  B: "That's $3 \\times 9$. Use $2 \\pi r$."
  C: "That's $2 \\times \\pi \\times 18$, which uses the diameter as the radius. The radius is 9."
  D: "That's the area. The question asks for the distance around."
  E: "That doubles the area. Find the radius first."
verify: "pi(2 * range(1, 20).find((r) => r * r === 81))"
---

A circle has an area of $81\pi$. What is its circumference?

## Hint

Find the radius first.

## Hint 2

$r^2 = 81$, so $r = 9$.

## Solution

Since $r^2 = 81$, the radius is 9. The circumference is $2 \times 9 \times \pi$, which is $18\pi$.

**Answer: (A) $18\pi$**
