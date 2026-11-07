---
order: 14
difficulty: medium
from: logic-patterns/03-working-backwards
choices: ["5","27","17","9","81"]
answer: D
mistakes:
  A: "Ese es el número que se resta. Trabaja hacia atrás desde 22."
  C: "Eso resta 5 al regresar. Para deshacer una resta, suma."
  B: "Eso es solo un paso hacia atrás. Deshaz también el triplicar."
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

**Respuesta: (D) 9**
