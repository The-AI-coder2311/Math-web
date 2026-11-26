---
order: 14
difficulty: easy
lesson: 03-diophantine-equations
choices: ["3","4","5","6","7"]
answer: E
mistakes:
  A: "List every $y$ that is 2 more than a multiple of 3, all the way up to 20."
  B: "That stops at $y = 11$. Keep going up to 20."
  C: "Count the list again: 2, 5, 8, 11, 14, 17, 20."
  D: "Don't forget $y = 20$, which gives $x = 0$. Zero is allowed."
verify: "range(0, 20).filter((y) => (100 - 5 * y) >= 0 && (100 - 5 * y) % 3 === 0).length"
---

How many ordered pairs of nonnegative integers $(x, y)$ satisfy $3x + 5y = 100$?

## Hint

Reduce mod 3 to see which values of $y$ work.

## Hint 2

You need $y \equiv 2 \pmod 3$ and $y \le 20$.

## Solution

Mod 3, $5y \equiv 100$ becomes $2y \equiv 1$, so $y \equiv 2 \pmod 3$. Also $5y \le 100$, so $y \le 20$. The values $y = 2, 5, 8, 11, 14, 17, 20$ all work. That's 7 pairs.

**Answer: (E) 7**
