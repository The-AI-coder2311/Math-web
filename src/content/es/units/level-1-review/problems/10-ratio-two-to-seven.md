---
order: 10
difficulty: medium
from: fractions-ratios/02-ratios-as-boxes
choices: ["10","35","18","40","63"]
answer: B
mistakes:
  A: "Esas son las cuentas rojas. La pregunta es sobre las azules."
  C: "Eso es $2 \\times 9$. Primero encuentra lo que tiene una caja."
  D: "Eso son 8 cajas. El azul tiene 7."
  E: "Eso es $7 \\times 9$, que es más que el total. Cada caja tiene 5."
verify: "range(1, 45).find((x) => x * 2 === (45 - x) * 7)"
---

Unas cuentas rojas y azules están en una razón de 2 a 7, y hay 45 cuentas. ¿Cuántas son azules?

## Hint

¿Cuántas cajas hay? ¿Cuánto tiene cada una?

## Hint 2

Hay 9 cajas, así que cada una tiene 5.

## Solution

Hay 9 cajas, así que cada una tiene $45 \div 9 = 5$. El azul llena 7 cajas: $7 \times 5 = 35$.

**Respuesta: (B) 35**
