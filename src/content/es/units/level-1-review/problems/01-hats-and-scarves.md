---
order: 1
difficulty: easy
from: counting/01-multiply-choices
choices: ["8","9","25","15","35"]
answer: D
mistakes:
  A: "Eso es $3 + 5$. Elige un sombrero **y** una bufanda, así que multiplica."
  B: "Eso es $3 \\times 3$. Hay 5 bufandas."
  C: "Eso es $5 \\times 5$. Hay 3 sombreros."
  E: "Revisa tu multiplicación: $3 \\times 5$."
verify: "product(range(1, 3), range(1, 5)).length"
---

Rosa tiene 3 sombreros y 5 bufandas. Se pone uno de cada uno. ¿Cuántas combinaciones diferentes puede elegir?

## Hint

¿Hace una elección y luego otra?

## Hint 2

Para cada uno de los 3 sombreros hay 5 bufandas.

## Solution

Elige un sombrero y luego una bufanda, así que multiplica: $3 \times 5 = 15$.

**Respuesta: (D) 15**
