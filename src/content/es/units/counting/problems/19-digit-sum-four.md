---
order: 19
difficulty: hard
lesson: 05-split-into-cases
choices: ["4","6","9","10","12"]
answer: D
mistakes:
  A: "Eso cuenta solo los números que empiezan con 1. El primer dígito también puede ser 2, 3 o 4."
  B: "Eso deja fuera un caso completo. Revisa los primeros dígitos 1, 2, 3 y 4."
  C: "Eso deja fuera un número. Un caso como el 400 es fácil de olvidar."
  E: "Haz la lista de los números de cada caso. Un primer dígito de 1 da 4 números, y a partir de ahí las cuentas bajan de 1 en 1."
verify: "range(100, 999).filter((n) => sum(digits(n)) === 4).length"
---

¿Cuántos números de 3 dígitos tienen dígitos que suman 4?

## Hint

Divide en casos según el primer dígito. Puede ser 1, 2, 3 o 4.

## Hint 2

Si el primer dígito es 1, los otros dos dígitos suman 3. ¿De cuántas formas puede pasar eso?

## Solution

Divide según el primer dígito:

- Primer dígito 1: 103, 112, 121, 130. Son 4 números.
- Primer dígito 2: 202, 211, 220. Son 3 números.
- Primer dígito 3: 301, 310. Son 2 números.
- Primer dígito 4: 400. Es 1 número.

El total es $4 + 3 + 2 + 1 = 10$.

**Respuesta: (D) 10**
