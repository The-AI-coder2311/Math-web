---
order: 10
difficulty: medium
lesson: 04-factors-primes-leftovers
choices: ["4","6","8","10","12"]
answer: E
mistakes:
  A: "El 4 solo tiene 3 factores: 1, 2 y 4."
  B: "Solo tiene 4 factores: 1, 2, 3 y 6."
  C: "Solo tiene 4 factores: 1, 2, 4 y 8."
  D: "Solo tiene 4 factores: 1, 2, 5 y 10."
verify: "range(1, 100).find((n) => factors(n).length === 6)"
---

¿Cuál es el menor número entero positivo que tiene exactamente 6 factores positivos?

## Hint

Seis factores significa 3 parejas de factores. Empieza por la opción más pequeña y cuenta los factores de cada una.

## Hint 2

Prueba las opciones desde la más pequeña. ¿Cuántos factores tiene el 8? ¿Cuántos tiene el 10?

## Solution

**Paso 1.** Cuenta los factores de cada opción, empezando por la más pequeña:

- 6 tiene los factores 1, 2, 3 y 6. Son 4 factores.
- 8 tiene los factores 1, 2, 4 y 8. Son 4 factores.
- 10 tiene los factores 1, 2, 5 y 10. Son 4 factores.
- 12 tiene los factores 1, 2, 3, 4, 6 y 12. ¡Son 6 factores!

**Paso 2.** Como las opciones están en orden, y 6, 8 y 10 no funcionan, la respuesta entre ellas es 12.

**Una comprobación:** los números que nos saltamos tampoco funcionan. Del 1 al 11, cada número tiene 4 factores o menos, así que 12 de verdad es el menor.

**Respuesta: (E) 12**
