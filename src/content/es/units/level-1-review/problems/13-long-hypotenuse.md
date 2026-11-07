---
order: 13
difficulty: medium
from: basic-geometry/05-right-triangles
choices: ["17","19","23","120","289"]
answer: A
mistakes:
  B: "Revísalo: $19 \\times 19$ es 361."
  C: "Eso es $8 + 15$. La hipotenusa es más corta que los dos catetos juntos."
  D: "Eso es $8 \\times 15$. Eleva los catetos al cuadrado y súmalos."
  E: "Esa es la hipotenusa al cuadrado. Saca la raíz cuadrada."
verify: "range(1, 40).find((c) => c * c === 8 * 8 + 15 * 15)"
---

Un triángulo rectángulo tiene catetos de longitud 8 y 15. ¿Cuánto mide su hipotenusa?

## Hint

Usa $a^2 + b^2 = c^2$.

## Hint 2

$64 + 225 = 289$. ¿Qué número multiplicado por sí mismo da 289?

## Solution

$8^2 + 15^2 = 64 + 225 = 289$, y $17 \times 17 = 289$. Así que la hipotenusa mide 17.

**Respuesta: (A) 17**
