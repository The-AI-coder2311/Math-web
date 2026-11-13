---
order: 17
difficulty: hard
lesson: 02-ratios-as-boxes
choices: ["50","75","100","125","150"]
answer: D
mistakes:
  A: "That's the number of red beads at the start. The question asks for all of the beads."
  B: "That's the number of blue beads at the start. The question asks for all of the beads."
  C: "Check it: 40 red and 60 blue. Adding 10 red gives 50 to 60, which isn't 4 to 5."
  E: "Check it: 60 red and 90 blue. Adding 10 red gives 70 to 90, which isn't 4 to 5."
verify: "range(1, 100).map((x) => [x, 2 * x, 3 * x]).find(([, a, b]) => (a + 10) * 5 === b * 4)[0] * 5"
---

A jar holds red and blue beads in a ratio of 2 to 3. After 10 red beads are added, the ratio of red to blue is 4 to 5. How many beads were in the jar at the start?

## Hint

Say each box holds $x$ beads, so there are $2x$ red and $3x$ blue. What does the new ratio say?

## Hint 2

$\frac{2x + 10}{3x} = \frac{4}{5}$. Cross-multiply: $5(2x + 10) = 4 \times 3x$.

## Solution

**Step 1.** Start with $2x$ red and $3x$ blue beads. After adding, $\frac{2x + 10}{3x} = \frac{4}{5}$.

**Step 2.** Cross-multiplying gives $10x + 50 = 12x$, so $x = 25$.

**Step 3.** The start had $5x = 125$ beads.

**Check:** 50 red and 75 blue. Then 60 to 75 simplifies to 4 to 5.

**Answer: (D) 125**
