---
order: 26
difficulty: medium
lesson: 02-small-cases
choices: ["1","3","7","9"]
answer: A
mistakes:
  B: "Ese es el último dígito de la 1.ª potencia. Usa el ciclo de 4."
  C: "Ese es el último dígito de la 3.ª potencia. Usa el ciclo de 4."
  D: "Ese es el último dígito de la 2.ª potencia. Usa el ciclo de 4."
verify: "Number(3n ** 2000n % 10n)"
---

¿Cuál es el último dígito de $3^{2000}$?

## Hint

Encuentra los últimos dígitos de las primeras potencias de 3.

## Hint 2

Los últimos dígitos van 3, 9, 7, 1, y luego se repiten cada 4.

## Solution

Los últimos dígitos van 3, 9, 7, 1, y luego se repiten. Como 2000 es múltiplo de 4, el último dígito es igual al de $3^4$, así que es 1.

**Respuesta: (A) 1**
