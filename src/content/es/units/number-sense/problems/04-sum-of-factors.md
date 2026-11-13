---
order: 4
difficulty: easy
lesson: 04-factors-primes-leftovers
choices: ["6","16","27","28","36"]
answer: D
mistakes:
  A: "Ese es el número de factores que tiene el 12. La pregunta pide su suma."
  B: "Eso deja fuera el 12. Un número es factor de sí mismo."
  C: "Eso deja fuera el 1. Es factor de todos los números."
  E: "Eso es más de lo que suman todos los factores. Revisa tu lista: 1, 2, 3, 4, 6, 12."
verify: "sum(factors(12))"
---

¿Cuál es la suma de todos los factores positivos de 12?

## Hint

Primero haz la lista de todos los factores usando parejas. ¡No olvides el 1 y el 12!

## Hint 2

Los factores son 1, 2, 3, 4, 6 y 12. Súmalos todos.

## Solution

**Paso 1.** Las parejas de factores de 12 son 1 y 12, 2 y 6, y 3 y 4.

**Paso 2.** Suma los seis factores:

$$1 + 12 + 2 + 6 + 3 + 4 = 28$$

**Un error común:** contestar 16 por dejar fuera el 12, o 27 por dejar fuera el 1. El 1 y el número mismo siempre son factores.

**Respuesta: (D) 28**
