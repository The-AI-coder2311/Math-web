---
order: 16
difficulty: medium
lesson: 03-divisibility-rules
choices: ["1234","2316","3141","4505","5114"]
answer: B
mistakes:
  A: "Es par, pero sus dígitos suman 10, que no es múltiplo de 3."
  C: "Sus dígitos suman 9, pero es impar. Un múltiplo de 6 tiene que ser par."
  D: "Es impar, y sus dígitos suman 14. No pasa ninguna de las dos pruebas."
  E: "Es par, pero sus dígitos suman 11, que no es múltiplo de 3."
verify: "[1234, 2316, 3141, 4505, 5114].find((n) => n % 6 === 0)"
---

¿Qué número es divisible entre 6?

## Hint

¿Qué dos pruebas tiene que pasar un número para ser divisible entre 6?

## Hint 2

Tiene que ser par, y la suma de sus dígitos tiene que ser múltiplo de 3.

## Solution

Un número divisible entre 6 tiene que pasar las pruebas del 2 y del 3. Solo 2316 lo hace: es par, y sus dígitos suman 12.

**Respuesta: (B) 2316**
