---
order: 16
difficulty: hard
lesson: 01-lines-and-slopes
choices: ["6","31","13","19","7"]
answer: E
mistakes:
  A: "That's the number of jumps, which is the GCF of 12 and 18. The jumps connect 7 points."
  C: "That counts every whole-number $x$. For an odd $x$, the $y$-coordinate isn't a whole number."
  D: "That counts every whole-number $y$. Most of those have an $x$-coordinate that isn't whole."
  B: "That's $12 + 18 + 1$. Only points landing exactly on the line count."
verify: "range(0, 12).filter((x) => (x * 18) % 12 === 0).length"
---

A segment runs from $(0, 0)$ to $(12, 18)$. How many points on the segment, including its two ends, have whole-number coordinates for both $x$ and $y$?

## Hint

Simplify the slope as far as you can. What's the smallest whole-number jump along the line?

## Hint 2

The slope is $\frac{18}{12} = \frac{3}{2}$, so each jump is 2 across and 3 up. How many jumps reach $x = 12$?

## Solution

**Step 1.** The slope simplifies to $\frac{3}{2}$, so each jump goes 2 across and 3 up.

**Step 2.** Reaching $x = 12$ takes $12 \div 2 = 6$ jumps.

**Step 3.** 6 jumps connect 7 points.

**Answer: (E) 7**
