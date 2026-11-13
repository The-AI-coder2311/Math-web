---
order: 2
difficulty: easy
lesson: 04-factors-primes-leftovers
choices: ["15","21","25","27","31"]
answer: E
mistakes:
  A: "Eso es $3 \\times 5$, así que no es primo."
  B: "Eso es $3 \\times 7$, así que no es primo."
  C: "$25 = 5 \\times 5$, así que no es primo."
  D: "Eso es $3 \\times 9$, así que no es primo."
verify: "[15, 21, 27, 31, 33].filter(isPrime).join()"
---

¿Cuál de estos números es primo?

## Hint

Un número primo tiene una sola pareja de factores: 1 y el número mismo. Prueba dividir cada opción entre números pequeños como 3 y 5.

## Hint 2

Prueba cada uno dividiendo entre 3 y entre 5. Usa la prueba de la suma de dígitos para el 3.

## Solution

**Paso 1.** Busca una pareja de factores de cada número, aparte de 1 y el número mismo:

- $15 = 3 \times 5$
- $21 = 3 \times 7$
- $27 = 3 \times 9$
- $33 = 3 \times 11$

Así que ninguno de estos cuatro números es primo.

**Paso 2.** Ahora prueba con 31. No es divisible entre 2, 3 ni 5. Podemos parar ahí porque $6 \times 6 = 36$ ya es más que 31, así que cualquier pareja de factores tendría que incluir un número menor que 6. Eso significa que su única pareja es 1 y 31.

**Respuesta: (E) 31**
