---
order: 20
difficulty: hard
from: polynomials/01-roots-and-factoring
choices: ["29","30","53","125","149"]
answer: A
mistakes:
  B: "That's $24 + 6$. After finding the cubic part, add 5, the value of $x$."
  C: "That doubles the product. The cubic is monic, so the factor in front is 1."
  D: "That's $5^3$. P isn't $x^3$. It's $x$ plus the product $(x-1)(x-2)(x-3)$."
  E: "That's $125 + 24$. Add 5, not $5^3$."
verify: "(() => { const found = []; for (const a of range(-20, 20)) for (const b of range(-20, 20)) for (const c of range(-20, 20)) { const P = (x) => x ** 3 + a * x ** 2 + b * x + c; if (P(1) === 1 && P(2) === 2 && P(3) === 3) found.push(P(5)); } return found.length === 1 ? found[0] : NaN; })()"
---

$P(x)$ is a cubic polynomial with leading coefficient 1, and $P(1) = 1$, $P(2) = 2$, and $P(3) = 3$. What is $P(5)$?

## Hint

Look at $Q(x) = P(x) - x$. What are its roots?

## Hint 2

$Q$ is a cubic with leading coefficient 1 and roots 1, 2, and 3.

## Solution

Let $Q(x) = P(x) - x$. Then $Q(1)$, $Q(2)$, and $Q(3)$ are all 0, and $Q$ is a cubic with leading coefficient 1. So $Q(x) = (x - 1)(x - 2)(x - 3)$, and

$$P(5) = 5 + 4 \times 3 \times 2 = 29.$$

The trick of subtracting off the visible pattern turns many 'find the next value' problems into a factoring problem.

**Answer: (A) 29**
