---
order: 22
difficulty: easy
lesson: 02-list-the-real-outcomes
choices: ["$\\frac{1}{36}$","$\\frac{1}{12}$","$\\frac{1}{6}$","$\\frac{1}{2}$"]
answer: C
mistakes:
  A: "Esa es la probabilidad de un doble en particular, como dos 4."
  B: "Eso cuenta solo la mitad de los dobles. Hay 6 dobles."
  D: "La mayoría de los lanzamientos no son dobles. Haz la lista: solo 6 de los 36 lo son."
verify: "fraction(product(range(1, 6), range(1, 6)).filter(([a, b]) => a === b).length, 36)"
---

Se lanzan dos dados. ¿Cuál es la probabilidad de que muestren el mismo número?

## Hint

¿Cuántos resultados hay con dos dados?

## Hint 2

Hay 36 resultados. Haz la lista de los que coinciden: 1 y 1, 2 y 2, y así sucesivamente.

## Solution

Hay 36 resultados, y 6 coinciden. Así que la probabilidad es $\frac{6}{36} = \frac{1}{6}$.

**Respuesta: (C) $\frac{1}{6}$**
