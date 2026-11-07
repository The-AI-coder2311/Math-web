---
order: 29
difficulty: hard
lesson: 03-trees-and-multiplying
choices: ["$\\frac{1}{5}$","$\\frac{2}{5}$","$\\frac{1}{2}$","$\\frac{3}{5}$"]
answer: B
mistakes:
  A: "Esa es la probabilidad para una sacada en particular. Dos de las sacadas son pares."
  C: "Hay 5 posiciones, y solo 2 son pares."
  D: "Esa es la probabilidad de que la azul salga en una sacada impar."
verify: "fraction(range(1, 5).filter((p) => p % 2 === 0).length, 5)"
---

Una bolsa tiene 4 canicas rojas y 1 azul. Sacas canicas una a la vez, sin regresarlas, hasta que sale la azul. ¿Cuál es la probabilidad de que la canica azul salga en una sacada con número par?

## Hint

Imagina que acomodas las 5 canicas en una fila al azar. ¿Dónde puede estar la azul?

## Hint 2

La canica azul es igual de probable en cualquiera de los 5 lugares.

## Solution

Imagina las 5 canicas en una fila al azar. La azul es igual de probable en cualquiera de los 5 lugares. Los lugares 2 y 4 son los pares, así que la probabilidad es $\frac{2}{5}$.

**Respuesta: (B) $\frac{2}{5}$**
