---
order: 14
difficulty: medium
lesson: 03-geometric-sequences
choices: ["$\\frac{1}{2}$","$\\frac{2}{3}$","$\\frac{3}{4}$","1","$\\frac{3}{2}$"]
answer: A
mistakes:
  B: "That's the bottom of the formula, $1 - r$. You still need to divide the first term by it."
  C: "Try adding the first few terms: they're heading toward a value below this one."
  D: "That's the answer for $\\frac{1}{2} + \\frac{1}{4} + \\cdots$. These terms are smaller, so the sum is too."
  E: "That's the sum when the list starts at 1, as in $1 + \\frac{1}{3} + \\frac{1}{9} + \\cdots$. This sum starts at $\\frac{1}{3}$."
verify: "fraction(Math.round(sum(range(1, 40).map((n) => 1 / 3 ** n)) * 2), 2)"
---

The sum $\frac{1}{3} + \frac{1}{9} + \frac{1}{27} + \cdots$ goes on forever. What number does it equal?

## Hint

Call the sum $S$. What happens if you multiply everything by 3?

## Hint 2

$3S = 1 + \frac{1}{3} + \frac{1}{9} + \cdots$, and everything after the 1 is $S$ again. So $3S = 1 + S$.

## Solution

Let $S$ be the sum. Multiplying by 3 gives $3S = 1 + S$, since everything after the 1 is the original sum. So $2S = 1$, and $S = \frac{1}{2}$.

**Answer: (A) $\frac{1}{2}$**

## Another way

Use the formula $\frac{a}{1 - r}$ with $a = \frac{1}{3}$ and $r = \frac{1}{3}$. That gives $\frac{1}{3} \div \frac{2}{3} = \frac{1}{2}$.
