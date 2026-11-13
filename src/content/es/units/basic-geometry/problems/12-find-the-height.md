---
order: 12
difficulty: medium
lesson: 02-triangle-area
choices: ["5","10","15","18","360"]
answer: A
mistakes:
  B: "Eso es el doble de la altura. La mitad de 12 es 6, y $30 \\div 6 = 5$."
  C: "Eso es $30 \\div 2$. Sacar la mitad del área no es el último paso. El área es la mitad de $12$ por la altura, así que la mitad de 12 por la altura debe dar 30."
  D: "Eso es $30 - 12$. El área viene de multiplicar, así que divide para regresar."
  E: "Eso es $30 \\times 12$. Divide para regresar."
verify: "range(1, 100).find((h) => (12 * h) / 2 === 30)"
---

Un triángulo tiene un área de 30 y una base de 12. ¿Cuál es su altura?

## Hint

Empieza con la fórmula: $\frac{1}{2} \times 12 \times$ altura $= 30$.

## Hint 2

La mitad de 12 es 6. Así que 6 por la altura es 30.

## Solution

La fórmula da $\frac{1}{2} \times 12 \times h = 30$, así que $6h = 30$ y $h = 5$.

**Respuesta: (A) 5**
