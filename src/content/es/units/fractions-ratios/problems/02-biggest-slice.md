---
order: 2
difficulty: easy
lesson: 01-equal-groups
choices: ["$\\frac{2}{5}$","$\\frac{5}{12}$","$\\frac{4}{9}$","$\\frac{1}{2}$","$\\frac{3}{5}$"]
answer: E
mistakes:
  A: "Esto es menos que un medio, porque la mitad de 5 es 2.5."
  B: "Los números son más grandes, pero esto es menos que un medio, porque la mitad de 12 es 6."
  C: "Esto es menos que un medio, porque la mitad de 9 es 4.5."
  D: "Es una buena referencia, pero $\\frac{3}{5}$ es un poco más que un medio."
verify: "[[1, 2], [2, 5], [3, 5], [4, 9], [5, 12]].sort((a, b) => b[0] * a[1] - a[0] * b[1]).map(([n, d]) => fraction(n, d))[0]"
---

¿Qué fracción es la mayor?

## Hint

Compara cada fracción con $\frac{1}{2}$. ¿El número de arriba es más que la mitad del de abajo?

## Hint 2

Solo una de estas fracciones es más que $\frac{1}{2}$.

## Solution

Una fracción es mayor que $\frac{1}{2}$ solo cuando el número de arriba es más que la mitad del de abajo. Revisemos cada una:

- $\frac{1}{2}$ es exactamente un medio.
- $\frac{2}{5}$ es menos que un medio, porque la mitad de 5 es 2.5.
- $\frac{3}{5}$ es más que un medio, porque 3 es más que 2.5.
- $\frac{4}{9}$ es menos que un medio, porque la mitad de 9 es 4.5.
- $\frac{5}{12}$ es menos que un medio, porque la mitad de 12 es 6.

Solo $\frac{3}{5}$ es mayor que un medio, así que es la mayor.

**Respuesta: (E) $\frac{3}{5}$**
