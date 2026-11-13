---
order: 10
difficulty: medium
from: fractions-ratios/02-ratios-as-boxes
choices: ["5","10","14","18","35"]
answer: E
mistakes:
  A: "Ese es el tamaño de una parte, $45 \\div 9 = 5$. Las azules son 7 de esas partes."
  B: "Esas son las cuentas rojas. La pregunta es sobre las azules."
  C: "Eso es $2 \\times 7$, que multiplica los dos números de la razón. Primero divide las 45 cuentas en $2 + 7 = 9$ partes iguales."
  D: "Eso es $2 \\times 9$. Primero encuentra lo que tiene una caja."
verify: "range(1, 45).find((x) => x * 2 === (45 - x) * 7)"
---

Unas cuentas rojas y azules están en una razón de 2 a 7, y hay 45 cuentas. ¿Cuántas son azules?

## Hint

¿Cuántas cajas hay? ¿Cuánto tiene cada una?

## Hint 2

Hay 9 cajas, así que cada una tiene 5.

## Solution

Hay 9 cajas, así que cada una tiene $45 \div 9 = 5$. El azul llena 7 cajas: $7 \times 5 = 35$.

**Respuesta: (E) 35**
