---
order: 12
difficulty: medium
lesson: 02-pythagoras-why
choices: ["26","24","28","38","100"]
answer: A
mistakes:
  B: "That's the height. The rod is longer, since it also moves across."
  C: "That's a slip in the second step. Legs of 10 and 24 give 26."
  D: "That's $6 + 8 + 24$, the walk along three edges. The rod is a straight shortcut."
  E: "That's the bottom diagonal squared. Keep going with the height."
verify: "range(1, 60).find((d) => d * d === 6 * 6 + 8 * 8 + 24 * 24)"
---

A rectangular box measures 6 by 8 by 24. What is the length of the longest straight rod that fits inside, going from one corner to the opposite corner?

## Hint

Start with the diagonal of the bottom of the box. Then use it again, with the height.

## Hint 2

The bottom diagonal is 10. Now use legs of 10 and 24.

## Solution

The bottom diagonal is 10, by the 6-8-10 triple. With the height of 24, it makes a right triangle, and $10^2 + 24^2 = 676$. So the rod is 26.

**Answer: (A) 26**
