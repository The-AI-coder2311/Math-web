---
order: 5
difficulty: easy
from: logic-patterns/01-repeating-and-growing
choices: ["65","74","70","75","79"]
answer: B
mistakes:
  A: "Revisa tus pasos. Hay 14 pasos de 5, que suman 70."
  C: "Esos son los 14 pasos. Todavía tienes que empezar desde el 4."
  D: "Eso es $15 \\times 5$. Usa demasiados pasos y se salta el inicio."
  E: "Eso es $4 + 15 \\times 5$, que es un paso de más."
verify: "range(2, 15).reduce((t) => t + 5, 4)"
---

¿Cuál es el número 15 de la lista 4, 9, 14, 19, ...?

## Hint

¿Cuántos pasos se necesitan para llegar al número 15?

## Hint 2

Se necesitan 14 pasos de 5.

## Solution

Se necesitan 14 pasos desde el 1.er número: $4 + 14 \times 5 = 74$.

**Respuesta: (B) 74**
