---
order: 16
difficulty: hard
lesson: 02-list-the-real-outcomes
choices: ["$\\frac{1}{18}$","$\\frac{1}{9}$","$\\frac{1}{6}$","$\\frac{2}{9}$","$\\frac{5}{18}$"]
answer: D
mistakes:
  A: "Eso es $\\frac{2}{36}$, que cuenta una sola pareja, como 1 y 3, en los dos órdenes. Hay 4 parejas así."
  B: "Eso cuenta 4 resultados, tratando (1, 3) y (3, 1) como iguales. Cada pareja tiene 2 órdenes."
  C: "Eso cuenta 6 resultados. Hay 4 parejas, cada una con 2 órdenes."
  E: "Esa es la probabilidad de que se diferencien exactamente en 1, que tiene 10 resultados."
verify: "fraction(product(range(1, 6), range(1, 6)).filter(([a, b]) => Math.abs(a - b) === 2).length, 36)"
---

Lanzas dos dados normales. ¿Cuál es la probabilidad de que los dos números se diferencien exactamente en 2?

## Hint

Haz la lista de las parejas que se diferencian en 2, como (1, 3). Recuerda que (3, 1) es otro resultado.

## Hint 2

El número menor puede ser 1, 2, 3 o 4. Cada uno da 2 resultados.

## Solution

Las parejas son 1 y 3, 2 y 4, 3 y 5, y 4 y 6. Cada una puede pasar en 2 órdenes, lo que da 8 resultados. Así que la probabilidad es $\frac{8}{36} = \frac{2}{9}$.

**Respuesta: (D) $\frac{2}{9}$**
