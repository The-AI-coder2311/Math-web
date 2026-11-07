---
order: 6
difficulty: easy
lesson: 03-working-backwards
choices: ["6","8","11","23","28"]
answer: A
mistakes:
  B: "Síguelo hacia adelante: $(8 + 5) \\times 3$ da 39, no 33."
  C: "Ese es solo el primer paso hacia atrás. Todavía tienes que deshacer sumar 5."
  D: "Eso deshace los pasos en el orden equivocado. Deshaz primero el último paso."
  E: "Eso es $33 - 5$. Deshaz primero el triplicar, porque pasó al final."
verify: "range(0, 50).find((n) => (n + 5) * 3 === 33)"
---

Bo le suma 5 a un número y luego triplica el resultado. La respuesta es 33. ¿Con qué número empezó Bo?

## Hint

Empieza en 33. ¿Qué fue lo último que hizo Bo?

## Hint 2

Deshaz el triplicar: $33 \div 3 = 11$. Luego deshaz sumar 5.

## Solution

Deshaz el triplicar: $33 \div 3 = 11$. Deshaz sumar 5: $11 - 5 = 6$.

**Comprobación:** $(6 + 5) \times 3 = 33$.

**Respuesta: (A) 6**
