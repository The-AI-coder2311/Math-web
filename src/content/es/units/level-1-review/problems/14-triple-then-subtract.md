---
order: 14
difficulty: medium
from: logic-patterns/03-working-backwards
choices: ["9","17","27","61","81"]
answer: A
mistakes:
  B: "Eso resta 5 al regresar. Para deshacer una resta, suma."
  C: "Eso es solo un paso hacia atrás. Deshaz también el triplicar."
  D: "Eso es $22 \\times 3 - 5 = 61$, que le aplica los pasos de Lee al 22. Pero 22 es el resultado, así que deshaz los pasos."
  E: "Eso multiplica por 3 al regresar. Para deshacer triplicar, divide."
verify: "range(0, 100).find((n) => 3 * n - 5 === 22)"
---

Lee triplica un número y luego le resta 5. El resultado es 22. ¿Cuál era el número?

## Hint

Empieza en 22 y deshaz primero el último paso.

## Hint 2

Suma 5 para obtener 27. Luego deshaz el triplicar.

## Solution

Deshaz la resta: $22 + 5 = 27$. Deshaz el triplicar: $27 \div 3 = 9$.

**Respuesta: (A) 9**
