---
order: 17
difficulty: hard
from: basic-geometry/01-perimeter-and-area
choices: ["192","112","48","196","768"]
answer: A
mistakes:
  C: "Eso es $3 \\times 4 \\times 4$. Primero encuentra los dos lados: 12 y 16."
  B: "Eso es $4 \\times 28$. Encuentra los dos lados y multiplícalos."
  D: "Eso es $14 \\times 14$, un cuadrado. Los lados están en una razón de 3 a 4."
  E: "Eso duplica los lados al usar todo el perímetro. Los lados suman 28, no 56."
verify: "(() => { const u = range(1, 20).find((x) => 2 * (3 * x + 4 * x) === 56); return 3 * u * (4 * u); })()"
---

Un rectángulo tiene un perímetro de 56, y sus lados están en una razón de 3 a 4. ¿Cuál es su área?

## Hint

La mitad del perímetro es un lado corto más un lado largo. Usa cajas para los lados.

## Hint 2

Los lados suman 28, en 7 cajas. Así que cada caja tiene 4.

## Solution

Los lados suman 28. Con 7 cajas, cada una tiene 4. Así que los lados miden 12 y 16, y el área es $12 \times 16 = 192$.

**Respuesta: (A) 192**
