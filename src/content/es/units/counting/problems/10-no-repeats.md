---
order: 11
difficulty: medium
lesson: 02-when-order-matters
choices: ["81","504","576","648","720"]
answer: D
mistakes:
  A: "Eso es $9 \\times 9$, que llena solo los dos primeros dígitos. El tercer dígito todavía tiene 8 opciones."
  B: "Eso es $9 \\times 8 \\times 7$. El segundo dígito tiene 9 opciones, porque ahí sí se permite el 0."
  C: "Eso es $9 \\times 8 \\times 8$. Vuelve a contar: 9, luego 9, luego 8."
  E: "Eso es $10 \\times 9 \\times 8$, que permite que el primer dígito sea 0. Eso no es un número de 3 dígitos."
verify: "range(100, 999).filter((n) => new Set(digits(n)).size === 3).length"
---

¿Cuántos números de tres dígitos tienen tres dígitos diferentes? (Por ejemplo, 305 cuenta, pero 330 no.)

## Hint

Empieza por el dígito más exigente: el de las centenas no puede ser 0. Luego pregúntate si el de las decenas puede ser 0.

## Hint 2

El dígito de las centenas tiene 9 opciones. El de las decenas también tiene 9, porque ahora sí se permite el 0. ¿Cuántas tiene el de las unidades?

## Solution

**Paso 1.** El dígito de las centenas no puede ser 0, así que puede ser del 1 al 9. Son 9 opciones.

**Paso 2.** El dígito de las decenas puede ser cualquiera de los 10 dígitos excepto el que ya se usó. Ahora sí se permite el 0, así que hay 9 opciones.

**Paso 3.** El dígito de las unidades no puede ser igual a ninguno de los dos que ya se usaron. Quedan 8 opciones.

**Paso 4.** Multiplica:

$$9 \times 9 \times 8 = 648$$

**Un error común:** contestar $10 \times 9 \times 8 = 720$. Esa cuenta incluye "números" como 012, que en realidad no tienen tres dígitos.

**Respuesta: (D) 648**
