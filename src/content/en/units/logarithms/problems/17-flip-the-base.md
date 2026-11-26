---
order: 17
difficulty: easy
lesson: 03-change-of-base
choices: ["$\\frac{2}{5}$","$\\frac{3}{5}$","$\\frac{5}{8}$","$\\frac{5}{3}$","4"]
answer: B
mistakes:
  A: "That's $\\log_{32} 4$. 8 is $2^3$."
  C: "That's 5 over 8. Use exponents of 2: 3 over 5."
  D: "That's flipped. The log of the input goes on top."
  E: "That's 32 divided by 8. Change of base divides logs, not inputs."
verify: "fraction(Math.round(Math.log2(8)), Math.round(Math.log2(32)))"
---

What is $\log_{32} 8$?

## Hint

Change to base 2.

## Hint 2

$\log_{32} 8 = \frac{\log_2 8}{\log_2 32}$.

## Solution

Changing to base 2, $\log_{32} 8 = \frac{\log_2 8}{\log_2 32} = \frac{3}{5}$.

**Answer: (B) $\frac{3}{5}$**
