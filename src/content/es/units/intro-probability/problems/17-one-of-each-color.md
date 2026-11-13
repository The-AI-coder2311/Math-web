---
order: 17
difficulty: hard
lesson: 03-trees-and-multiplying
choices: ["$\\frac{4}{15}$","$\\frac{2}{5}$","$\\frac{4}{9}$","$\\frac{8}{15}$","$\\frac{2}{3}$"]
answer: D
mistakes:
  A: "Ese es solo un camino. Roja y luego azul, y azul y luego roja, son las dos formas de tener una de cada una."
  B: "Esa es la probabilidad de que las dos sean rojas. Quieres una de cada una."
  C: "Eso regresa la primera canica. La bolsa cambia después de la primera sacada."
  E: "Esa es la probabilidad de que la primera canica sea roja. Importan las dos sacadas."
verify: "fraction(combos(['R', 'R', 'R', 'R', 'B', 'B'], 2).filter((p) => p[0] !== p[1]).length, combos(['R', 'R', 'R', 'R', 'B', 'B'], 2).length)"
---

Una bolsa tiene 4 canicas rojas y 2 azules. Sacas 2 sin regresar la primera. ¿Cuál es la probabilidad de sacar una canica de cada color?

## Hint

Hay dos caminos: roja y luego azul, o azul y luego roja. Sigue cada uno.

## Hint 2

Roja y luego azul es $\frac{4}{6} \times \frac{2}{5}$. Azul y luego roja es $\frac{2}{6} \times \frac{4}{5}$.

## Solution

Roja y luego azul es $\frac{4}{6} \times \frac{2}{5} = \frac{8}{30}$. Azul y luego roja es $\frac{2}{6} \times \frac{4}{5} = \frac{8}{30}$. Suma los caminos: $\frac{16}{30} = \frac{8}{15}$.

**Respuesta: (D) $\frac{8}{15}$**
