---
order: 8
difficulty: medium
lesson: 01-pascal-and-binomials
choices: ["10","20","32","40","80"]
answer: D
mistakes:
  A: "That's the answer for $(x + 1)^5$. Here, the other 2 groups each contribute a 2."
  B: "That counts only one factor of 2. There are 2 groups left over, and each contributes a 2."
  C: "That's $2^5$. It isn't the coefficient you're looking for, which needs \"5 choose 3\" too."
  E: "That uses $2^3$. The 2s come from the groups where you **don't** pick $x$, and there are only 2 of those."
verify: "range(1, 5).reduce((p) => { const n = Array(p.length + 1).fill(0); p.forEach((c, i) => { n[i] += 2 * c; n[i + 1] += c; }); return n; }, [1])[3]"
---

When $(x + 2)^5$ is multiplied out, what is the coefficient of $x^3$?

## Hint

To get $x^3$, you pick $x$ from 3 of the groups. What do you pick from the other 2 groups?

## Hint 2

There are $\binom{5}{3} = 10$ ways to pick the groups, and each way also multiplies in $2 \times 2$.

## Solution

**Step 1.** Choose $x$ from 3 of the 5 groups: $\binom{5}{3} = 10$ ways.

**Step 2.** From each of the other 2 groups, you pick up a 2, which gives $2 \times 2 = 4$.

**Step 3.** The coefficient is $10 \times 4 = 40$.

**Answer: (D) 40**
