---
order: 14
difficulty: medium
lesson: 02-list-the-real-outcomes
choices: ["$\\frac{1}{12}$","$\\frac{1}{11}$","$\\frac{1}{9}$","$\\frac{1}{6}$","$\\frac{4}{9}$"]
answer: C
mistakes:
  A: "Eso cuenta 3 parejas. Son 4: (3, 6), (4, 5), (5, 4) y (6, 3)."
  B: "Eso trata los 11 totales posibles como igual de probables. No lo son."
  D: "Esa es la probabilidad de un total de 7, el total más probable."
  E: "Eso usa 9 como número de abajo. Hay 36 resultados."
verify: "fraction(product(range(1, 6), range(1, 6)).filter(([a, b]) => a + b === 9).length, 36)"
---

Lanzas dos dados normales. ¿Cuál es la probabilidad de que los números sumen 9?

## Hint

Piensa en un dado rojo y uno azul. Haz la lista de las parejas que dan 9.

## Hint 2

Las parejas son (3, 6), (4, 5), (5, 4) y (6, 3).

## Solution

Hay 4 parejas que dan 9 de 36 resultados, así que la probabilidad es $\frac{4}{36} = \frac{1}{9}$.

**Respuesta: (C) $\frac{1}{9}$**
