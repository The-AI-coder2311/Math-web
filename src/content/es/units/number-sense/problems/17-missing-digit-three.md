---
order: 15
difficulty: medium
lesson: 03-divisibility-rules
choices: ["1","2","3","4","5"]
answer: D
mistakes:
  A: "Eso cuenta un solo dígito. Prueba todos los dígitos del 0 al 9."
  B: "Prueba todos los dígitos. Cualquier múltiplo de 3 funciona, incluidos 0 y 9."
  C: "Eso olvida el 0. 402 tiene una suma de dígitos de 6, así que funciona."
  E: "Solo funcionan 0, 3, 6 y 9. Revisa tu lista con la regla de la suma de dígitos."
verify: "range(0, 9).filter((d) => (400 + 10 * d + 2) % 3 === 0).length"
---

El número $4\square2$ es divisible entre 3. ¿Cuántos dígitos diferentes podrían ir en el cuadro?

## Hint

Un número es divisible entre 3 cuando la suma de sus dígitos es múltiplo de 3. ¿Cuánto suman los dígitos que conoces?

## Hint 2

Los dígitos conocidos suman 6. Así que el cuadro también tiene que ser múltiplo de 3. No olvides el 0.

## Solution

Los dígitos conocidos suman $4 + 2 = 6$, así que el cuadro tiene que ser múltiplo de 3. Las opciones son 0, 3, 6 y 9. Son 4 dígitos.

**Respuesta: (D) 4**
