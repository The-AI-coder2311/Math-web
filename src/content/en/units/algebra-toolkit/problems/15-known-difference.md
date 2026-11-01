---
order: 11
difficulty: medium
lesson: 01-difference-of-squares
choices: ["4","8","6","10","12"]
answer: B
mistakes:
  A: "That's $x - y$, and also $y$. The question asks for $x$."
  C: "That's half of 12. It would need $x$ and $y$ to be equal, but they differ by 4."
  D: "Check it: then $y = 6$, and $100 - 36$ is 64."
  E: "That's $x + y$. Find $x$ itself."
verify: "range(1, 50).find((x) => x * x - (x - 4) * (x - 4) === 48)"
---

If $x^2 - y^2 = 48$ and $x - y = 4$, what is the value of $x$?

## Hint

Factor $x^2 - y^2$. You know one of the factors.

## Hint 2

$(x + y) \times 4 = 48$, so $x + y = 12$.

## Solution

Factoring gives $(x + y) \times 4 = 48$, so $x + y = 12$. Adding $x - y = 4$ gives $2x = 16$, so $x = 8$.

**Answer: (B) 8**
