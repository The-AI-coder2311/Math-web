---
order: 14
difficulty: medium
lesson: 05-split-into-cases
choices: ["5","8","7","6","36"]
answer: D
mistakes:
  A: "Eso deja fuera el 60. Un 0 en las unidades está bien, siempre que el dígito de las decenas no sea 0."
  C: "Eso incluye el 06, que no es un número de 2 dígitos."
  B: "Haz la lista según el dígito de las decenas: 15, 24, 33, 42, 51, 60. Solo son 6."
  E: "Eso es $6 \\times 6$. Los dígitos dependen uno del otro, así que divide en casos."
verify: "range(10, 99).filter((n) => sum(digits(n)) === 6).length"
---

¿Cuántos números de 2 dígitos tienen dígitos que suman 6?

## Hint

Divide en casos según el dígito de las decenas. ¿Qué dígitos de las decenas son posibles?

## Hint 2

El dígito de las decenas puede ser 1, 2, 3, 4, 5 o 6. Cada uno decide el dígito de las unidades.

## Solution

Cada dígito de las decenas del 1 al 6 decide el de las unidades: 15, 24, 33, 42, 51 y 60. Son 6 números.

**Respuesta: (D) 6**
