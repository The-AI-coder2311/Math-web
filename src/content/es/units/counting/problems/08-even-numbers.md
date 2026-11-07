---
order: 9
difficulty: medium
lesson: 01-multiply-choices
choices: ["24","100","75","50","125"]
answer: D
mistakes:
  A: "Eso es $4 \\times 3 \\times 2$, que no permite repetir. Este problema sí lo permite."
  C: "Eso es $3 \\times 5 \\times 5$, que usa los dígitos impares en el último lugar. Solo 2 y 4 son pares."
  B: "Eso es la mitad de $200$. Solo 2 de los 5 dígitos son pares, no la mitad."
  E: "Eso cuenta todos los números. El último dígito tiene que ser par."
verify: "product(range(1, 5), range(1, 5), range(1, 5)).filter(([a, b, c]) => c % 2 === 0).length"
---

Se forma un número de tres dígitos usando solo los dígitos 1, 2, 3, 4 y 5. Los dígitos se pueden repetir. ¿Cuántos de estos números son pares?

## Hint

¿Qué hace que un número sea par? Solo uno de los tres dígitos lo decide. Empieza por el dígito más exigente.

## Hint 2

El último dígito tiene que ser 2 o 4. Los otros dos dígitos tienen 5 opciones cada uno.

## Solution

**Paso 1.** Un número es par cuando su dígito de las unidades es par. Así que el dígito de las unidades es la elección más exigente. De nuestros dígitos, tiene que ser 2 o 4, lo que da 2 opciones.

**Paso 2.** El dígito de las centenas no tiene ninguna regla especial, así que tiene 5 opciones. Lo mismo pasa con el de las decenas.

**Paso 3.** Multiplica:

$$5 \times 5 \times 2 = 50$$

**Respuesta: (D) 50**
