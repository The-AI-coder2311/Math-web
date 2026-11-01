---
order: 14
difficulty: medium
lesson: 03-angle-facts
choices: ["50","60","80","70","90"]
answer: D
mistakes:
  A: "That's $x$, the smallest angle. The question asks for the largest."
  B: "That's the middle angle. It's also the average of the three."
  C: "Check it: $60 + 70 + 80$ is 210, which is too much."
  E: "The problem doesn't say it's a right triangle. Use the sum of 180°."
verify: "range(1, 100).find((x) => x + (x + 10) + (x + 20) === 180) + 20"
---

The angles of a triangle measure $x$, $x + 10$, and $x + 20$ degrees. How many degrees is the largest angle?

## Hint

All three angles add up to 180°. Write that as an equation.

## Hint 2

$3x + 30 = 180$, so $3x = 150$.

## Solution

The angles add up to 180°: $3x + 30 = 180$. So $3x = 150$ and $x = 50$. The largest angle is $50 + 20 = 70$ degrees.

**Answer: (D) 70**
