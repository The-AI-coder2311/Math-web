---
order: 5
difficulty: easy
lesson: 04-factors-primes-leftovers
choices: ["3","4","5","6","7"]
answer: B
mistakes:
  A: "Te falta uno. Los primos son 23, 29, 31 y 37."
  C: "Uno de tus números no es primo. Revisa 27, 33 y 39 con la prueba de la suma de dígitos para el 3."
  D: "Dos de tus números no son primos. Números como 21 y 39 se dividen entre 3."
  E: "Varios de tus números no son primos. Prueba cada uno con 3 y con 5."
verify: "range(20, 40).filter(isPrime).length"
---

¿Cuántos números primos hay entre 20 y 40?

## Hint

Primero tacha todos los números pares, porque aquí no pueden ser primos. Luego prueba los que quedan dividiendo entre 3 y entre 5.

## Hint 2

Los impares que quedan son 21, 23, 25, 27, 29, 31, 33, 35, 37 y 39. ¿Cuáles se dividen entre 3 o entre 5?

## Solution

**Paso 1.** Los números pares son divisibles entre 2, así que no son primos. Quedan los impares: 21, 23, 25, 27, 29, 31, 33, 35, 37 y 39.

**Paso 2.** Tacha los números que tienen una pareja de factores:

- $21 = 3 \times 7$
- $25 = 5 \times 5$
- $27 = 3 \times 9$
- $33 = 3 \times 11$
- $35 = 5 \times 7$
- $39 = 3 \times 13$

**Paso 3.** Quedan 23, 29, 31 y 37. Ninguno se puede dividir exactamente entre 2, 3 o 5. No necesitamos probar más, porque $7 \times 7 = 49$ ya es mayor que todos, así que cualquier pareja de factores tendría que incluir un número menor que 7. Los cuatro son primos.

**Respuesta: (B) 4**
