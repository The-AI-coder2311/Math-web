---
order: 28
difficulty: hard
lesson: 04-factors-primes-leftovers
choices: ["41","61","121","181"]
answer: B
mistakes:
  A: "Pruébalo: 41 entre 3 deja 2, no 1."
  C: "Funciona, pero un número más pequeño también funciona."
  D: "Funciona, pero un número más pequeño también funciona."
verify: "range(2, 999).find((n) => n % 3 === 1 && n % 4 === 1 && n % 5 === 1)"
---

¿Cuál es el menor número entero mayor que 1 que deja un residuo de 1 al dividirlo entre 3, entre 4 y entre 5?

## Hint

¿Qué puedes decir del número que es 1 menos?

## Hint 2

El número que es 1 menos se divide exactamente entre 3, 4 y 5.

## Solution

Si el número deja un residuo de 1 cada vez, entonces el número 1 menos es múltiplo de 3, 4 y 5. Así que es múltiplo de 60. El más pequeño mayor que 0 es 60, así que el número es 61.

**Respuesta: (B) 61**
