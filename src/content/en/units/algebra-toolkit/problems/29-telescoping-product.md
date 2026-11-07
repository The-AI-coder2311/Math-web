---
order: 29
difficulty: medium
lesson: 04-add-one-and-telescoping
choices: ["$\\frac{1}{2}$","$\\frac{9}{16}$","$\\frac{5}{8}$","$\\frac{7}{8}$"]
answer: B
mistakes:
  A: "That leaves out the last piece, which isn't 1. Write out the pieces and see what's left."
  C: "Check the last surviving piece. With $k = 8$, it's nine eighths."
  D: "Each term is less than 1, and there are many of them. Factor each term, and watch what cancels."
verify: "fraction(9, 16)"
---

What is the value of $\left(1 - \frac{1}{2^2}\right)\left(1 - \frac{1}{3^2}\right)\cdots\left(1 - \frac{1}{8^2}\right)$?

## Hint

Factor each term as a difference of squares.

## Hint 2

Each term is $\frac{k-1}{k} \times \frac{k+1}{k}$. Only the first and last pieces survive.

## Solution

Each term equals $\frac{k-1}{k} \times \frac{k+1}{k}$. Nearly everything cancels, leaving the first piece, $\frac{1}{2}$, and the last piece, $\frac{9}{8}$. So the product is $\frac{1}{2} \times \frac{9}{8} = \frac{9}{16}$.

**Answer: (B) $\frac{9}{16}$**
