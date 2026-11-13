---
order: 14
difficulty: medium
lesson: 02-list-the-real-outcomes
choices: ["$\\frac{1}{18}$","$\\frac{1}{12}$","$\\frac{1}{11}$","$\\frac{1}{9}$","$\\frac{1}{6}$"]
answer: D
mistakes:
  A: "Eso cuenta solo 2 tiradas, como 3 y luego 6, y 6 y luego 3. Las tiradas 4 y luego 5, y 5 y luego 4, también funcionan."
  B: "Eso cuenta 3 parejas. Son 4: (3, 6), (4, 5), (5, 4) y (6, 3)."
  C: "Eso trata los 11 totales posibles como igual de probables. No lo son."
  E: "Esa es la probabilidad de un total de 7, el total más probable."
verify: "fraction(product(range(1, 6), range(1, 6)).filter(([a, b]) => a + b === 9).length, 36)"
---

Lanzas dos dados normales. ¿Cuál es la probabilidad de que los números sumen 9?

## Hint

Piensa en un dado rojo y uno azul. Haz la lista de las parejas que dan 9.

## Hint 2

Las parejas son (3, 6), (4, 5), (5, 4) y (6, 3).

## Solution

Hay 4 parejas que dan 9 de 36 resultados, así que la probabilidad es $\frac{4}{36} = \frac{1}{9}$.

**Respuesta: (D) $\frac{1}{9}$**
