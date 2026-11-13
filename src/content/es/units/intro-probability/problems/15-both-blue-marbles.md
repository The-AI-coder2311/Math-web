---
order: 15
difficulty: medium
lesson: 03-trees-and-multiplying
choices: ["$\\frac{3}{28}$","$\\frac{1}{8}$","$\\frac{9}{64}$","$\\frac{1}{4}$","$\\frac{3}{8}$"]
answer: A
mistakes:
  B: "Eso es una sola canica de 8. Tienen que ser azules dos canicas."
  C: "Eso es $\\frac{3}{8} \\times \\frac{3}{8}$, como si regresaras la primera canica. La bolsa cambia."
  D: "Eso es $\\frac{2}{8}$. Multiplica las probabilidades de la primera y la segunda canica."
  E: "Eso es solo la primera canica. La segunda también tiene que ser azul."
verify: "fraction(combos(range(1, 8), 2).filter((p) => p.every((x) => x <= 3)).length, combos(range(1, 8), 2).length)"
---

Una bolsa tiene 5 canicas rojas y 3 azules. Sacas 2 sin regresar la primera. ¿Cuál es la probabilidad de que las dos sean azules?

## Hint

Después de sacar una canica azul, ¿cuántas canicas quedan? ¿Cuántas de ellas son azules?

## Hint 2

Es $\frac{3}{8}$ para la primera, y luego $\frac{2}{7}$ para la segunda.

## Solution

La primera es azul con probabilidad $\frac{3}{8}$. Luego 2 de las 7 que quedan son azules. Así que la probabilidad es $\frac{3}{8} \times \frac{2}{7} = \frac{6}{56} = \frac{3}{28}$.

**Respuesta: (A) $\frac{3}{28}$**
