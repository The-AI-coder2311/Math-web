---
order: 8
difficulty: medium
lesson: 04-factors-primes-leftovers
choices: ["4","7","8","9","12"]
answer: B
mistakes:
  A: "Esa es solo parte de la lista. Los factores de 36 mayores que 2 son 3, 4, 6, 9, 12, 18 y 36."
  C: "Haz la lista de factores de 36: son 9. Solo 1 y 2 son demasiado pequeños."
  D: "Eso cuenta todos los factores de 36. Con 1 o 2 amigos, las 2 galletas extra todavía se podrían repartir."
  E: "Ese es un número posible de amigos, no cuántas posibilidades hay."
verify: "range(1, 38).filter((friends) => 38 % friends === 2).length"
---

Nadia reparte 38 galletas en partes iguales entre algunos amigos, dando todas las que puede, y le sobran exactamente 2 galletas. ¿Cuántos números diferentes de amigos son posibles?

## Hint

Primero aparta las 2 galletas que sobran. ¿Cuántas galletas se repartieron exactamente? Luego recuerda: si solo hubiera 2 amigos, ¿de verdad podrían sobrar 2 galletas?

## Hint 2

Los amigos se repartieron 36 galletas exactamente. Así que el número de amigos es factor de 36, y tiene que ser mayor que 2.

## Solution

**Paso 1.** Aparta las que sobran. El número de galletas repartidas exactamente es:

$$38 - 2 = 36$$

**Paso 2.** Así que el número de amigos tiene que ser factor de 36. Los factores son 1, 2, 3, 4, 6, 9, 12, 18 y 36.

**Paso 3.** El número de amigos también tiene que ser mayor que 2. Con 1 o 2 amigos, las 2 galletas extra todavía se podrían repartir, así que no sobrarían.

**Paso 4.** Tacha el 1 y el 2. Quedan 3, 4, 6, 9, 12, 18 y 36, que son 7 posibilidades.

**Un error común:** contestar 9 por contar todos los factores de 36.

**Respuesta: (B) 7**
