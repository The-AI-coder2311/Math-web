---
order: 15
difficulty: medium
from: intro-probability/02-list-the-real-outcomes
choices: ["$\\frac{1}{36}$","$\\frac{1}{12}$","$\\frac{1}{9}$","$\\frac{5}{36}$","$\\frac{1}{6}$"]
answer: C
mistakes:
  A: "Eso cuenta un resultado. Cuatro parejas dan 5."
  B: "Eso cuenta 3 parejas. Son 4."
  D: "Eso serían 5 parejas. Son 4, que suman 5."
  E: "Esa es la probabilidad de un total de 7."
verify: "fraction(product(range(1, 6), range(1, 6)).filter(([a, b]) => a + b === 5).length, 36)"
---

Lanzas dos dados normales. ¿Cuál es la probabilidad de que los números sumen 5?

## Hint

Piensa en un dado rojo y uno azul. Haz la lista de las parejas.

## Hint 2

Las parejas son (1, 4), (2, 3), (3, 2) y (4, 1).

## Solution

Cuatro parejas dan 5, de 36 resultados. Así que la probabilidad es $\frac{4}{36} = \frac{1}{9}$.

**Respuesta: (C) $\frac{1}{9}$**
