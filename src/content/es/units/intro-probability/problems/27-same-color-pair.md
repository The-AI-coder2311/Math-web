---
order: 27
difficulty: medium
lesson: 03-trees-and-multiplying
choices: ["$\\frac{1}{3}$","$\\frac{2}{5}$","$\\frac{7}{15}$","$\\frac{5}{9}$"]
answer: C
mistakes:
  A: "Revisa el camino de dos rojas. Por sí solo tiene probabilidad $\\frac{2}{5}$."
  B: "Ese es solo el camino de dos rojas. Suma el camino de dos azules."
  D: "Eso regresa la primera canica. Aquí no se regresa."
verify: "fraction(combos([0, 0, 0, 0, 1, 1], 2).filter(([a, b]) => a === b).length, 15)"
---

Una bolsa tiene 4 canicas rojas y 2 azules. Sacas dos, sin regresar la primera. ¿Cuál es la probabilidad de que sean del mismo color?

## Hint

Suma dos caminos: las dos rojas, y las dos azules.

## Hint 2

Las dos rojas es $\frac{4}{6} \times \frac{3}{5}$. Las dos azules es $\frac{2}{6} \times \frac{1}{5}$.

## Solution

Las dos rojas tiene probabilidad $\frac{4}{6} \times \frac{3}{5} = \frac{12}{30}$. Las dos azules tiene probabilidad $\frac{2}{6} \times \frac{1}{5} = \frac{2}{30}$. Así que la respuesta es $\frac{14}{30} = \frac{7}{15}$.

**Respuesta: (C) $\frac{7}{15}$**
