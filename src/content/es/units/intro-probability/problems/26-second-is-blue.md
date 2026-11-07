---
order: 26
difficulty: medium
lesson: 03-trees-and-multiplying
choices: ["$\\frac{1}{4}$","$\\frac{2}{7}$","$\\frac{3}{8}$","$\\frac{3}{7}$"]
answer: C
mistakes:
  A: "Usa un árbol con dos caminos: roja y luego azul, y azul y luego azul."
  B: "Esa es la probabilidad de azul si la primera canica fue azul. Incluye también el otro camino."
  D: "Esa es la probabilidad de azul si la primera canica fue roja. Incluye también el otro camino."
verify: "fraction(5 * 3 + 3 * 2, 8 * 7)"
---

Una bolsa tiene 5 canicas rojas y 3 azules. Sacas dos, sin regresar la primera. ¿Cuál es la probabilidad de que la segunda canica sea azul?

## Hint

Dos caminos terminan en azul: roja y luego azul, y azul y luego azul.

## Hint 2

Esos caminos tienen probabilidades de $\frac{5}{8} \times \frac{3}{7}$ y $\frac{3}{8} \times \frac{2}{7}$.

## Solution

Suma los dos caminos: $\frac{5}{8} \times \frac{3}{7} + \frac{3}{8} \times \frac{2}{7} = \frac{15}{56} + \frac{6}{56} = \frac{21}{56} = \frac{3}{8}$. Es igual a la probabilidad de azul en la primera sacada.

**Respuesta: (C) $\frac{3}{8}$**
