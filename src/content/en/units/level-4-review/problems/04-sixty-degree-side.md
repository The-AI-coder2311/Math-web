---
order: 4
difficulty: easy
from: trigonometry/03-law-of-sines-cosines
choices: ["3","7","9","11","13"]
answer: B
mistakes:
  A: "That uses $2ab$ without the cosine. Multiply 80 by $\\cos 60^\\circ$, which is one half."
  C: "That's close to $\\sqrt{89}$, the answer for a right angle. A 60° angle subtracts $2ab \\cos C$."
  D: "That's near $\\sqrt{129}$, from adding $2ab \\cos C$. The Law of Cosines subtracts it."
  E: "That's $5 + 8$. The third side must be shorter than the other two combined."
verify: "(() => { const c2 = 25 + 64 - 2 * 5 * 8 * Math.cos(Math.PI / 3); return Math.round(Math.sqrt(c2)); })()"
---

Two sides of a triangle have lengths 5 and 8, and the angle between them is 60°. How long is the third side?

## Hint

This isn't a right triangle, so use the Law of Cosines.

## Hint 2

$c^2 = a^2 + b^2 - 2ab \cos C$, and $\cos 60^\circ$ is one half.

## Solution

The Law of Cosines says $c^2 = a^2 + b^2 - 2ab\cos C$. With $\cos 60^\circ$ equal to one half:

$$c^2 = 25 + 64 - 40 = 49.$$

So the third side is 7. It's a good fact to remember: the triangle with sides 5, 7, 8 has a 60° angle.

**Answer: (B) 7**
