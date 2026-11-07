---
order: 5
difficulty: easy
lesson: 02-list-the-real-outcomes
choices: ["$\\frac{1}{36}$","$\\frac{1}{18}$","$\\frac{1}{12}$","$\\frac{1}{11}$","$\\frac{1}{6}$"]
answer: C
mistakes:
  A: "Eso cuenta un resultado. Tres parejas suman 10."
  B: "Eso cuenta 2 resultados, tratando (4, 6) y (6, 4) como iguales. Son resultados diferentes."
  D: "Eso trata los 11 totales posibles como igual de probables. No lo son."
  E: "Esa es la probabilidad de un total de 7, el total más probable."
verify: "fraction(product(range(1, 6), range(1, 6)).filter(([a, b]) => a + b === 10).length, 36)"
---

Lanzas dos dados normales. ¿Cuál es la probabilidad de que los números sumen 10?

## Hint

Piensa en un dado rojo y uno azul. Haz la lista de cada pareja que da 10, y recuerda que hay 36 resultados en total.

## Hint 2

Las parejas son (4, 6), (5, 5) y (6, 4). Hay 36 resultados.

## Solution

**Paso 1.** Haz la lista de las parejas (rojo, azul) que suman 10: (4, 6), (5, 5) y (6, 4). Son 3 resultados.

**Paso 2.** Hay 36 resultados igual de probables, así que la probabilidad es $\frac{3}{36}$, que se simplifica a $\frac{1}{12}$.

**Respuesta: (C) $\frac{1}{12}$**
