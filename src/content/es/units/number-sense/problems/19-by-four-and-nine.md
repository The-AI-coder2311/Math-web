---
order: 19
difficulty: hard
lesson: 03-divisibility-rules
choices: ["25","26","27","28","36"]
answer: A
mistakes:
  B: "Eso quita un solo número. Tanto 36 como 72 tienen solo 2 dígitos."
  C: "Eso cuenta todos los múltiplos de 36 hasta 999, incluidos 36 y 72, que tienen 2 dígitos."
  D: "El múltiplo más grande es $36 \\times 27 = 972$, así que hay 27 hasta 999. Luego quita los de 2 dígitos."
  E: "Ese es el número del que estás contando múltiplos. Divide para saber cuántos múltiplos hay."
verify: "range(100, 999).filter((n) => n % 4 === 0 && n % 9 === 0).length"
---

¿Cuántos números de 3 dígitos son divisibles entre 4 y entre 9?

## Hint

Un número divisible entre 4 y entre 9 es múltiplo de ¿qué número?

## Hint 2

Es múltiplo de 36. ¿Cuántos múltiplos de 36 son menores o iguales que 999? ¿Cuántos de ellos son menores que 100?

## Solution

**Paso 1.** 4 y 9 no tienen factores en común, así que el número tiene que ser múltiplo de 36.

**Paso 2.** Como $36 \times 27 = 972$, hay 27 múltiplos hasta 999.

**Paso 3.** Dos de ellos, 36 y 72, solo tienen 2 dígitos. Así que $27 - 2 = 25$.

**Respuesta: (A) 25**
