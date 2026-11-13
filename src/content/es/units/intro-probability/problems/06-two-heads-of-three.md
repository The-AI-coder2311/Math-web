---
order: 7
difficulty: medium
lesson: 02-list-the-real-outcomes
choices: ["$\\frac{1}{8}$","$\\frac{3}{16}$","$\\frac{1}{4}$","$\\frac{1}{3}$","$\\frac{3}{8}$"]
answer: E
mistakes:
  A: "Esa es la probabilidad de un orden específico, como CCX. Funcionan tres órdenes."
  B: "El 3 de arriba está bien, pero 3 monedas tienen $2 \\times 2 \\times 2 = 8$ resultados, no 16."
  C: "Eso cuenta solo 2 órdenes. Funcionan tres."
  D: "Eso trata los números de caras como igual de probables. Haz la lista de los 8 resultados."
verify: "fraction(product([0, 1], [0, 1], [0, 1]).filter((f) => sum(f) === 2).length, 8)"
---

Lanzas 3 monedas justas. ¿Cuál es la probabilidad de sacar exactamente 2 caras?

## Hint

Haz la lista de cada resultado, como CCX y CXC (C es cara y X es cruz). ¿Cuántos hay en total?

## Hint 2

Hay 8 resultados. Los que quieres son CCX, CXC y XCC.

## Solution

**Paso 1.** Cada moneda tiene 2 resultados, así que hay $2 \times 2 \times 2 = 8$ resultados igual de probables.

**Paso 2.** Los que tienen exactamente 2 caras son CCX, CXC y XCC, que son 3 resultados.

**Paso 3.** La probabilidad es $\frac{3}{8}$.

**Respuesta: (E) $\frac{3}{8}$**
