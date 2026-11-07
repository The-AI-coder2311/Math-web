---
order: 3
difficulty: easy
lesson: 04-factors-primes-leftovers
choices: ["14","6","7","8","4"]
answer: E
mistakes:
  B: "Eso cuenta todos los factores de 28. No se permite una sola fila ni un solo pupitre por fila."
  C: "Ese es uno de los números posibles de filas, no cuántos hay."
  D: "Haz la lista de factores: 1, 2, 4, 7, 14, 28. Solo son 6, y 2 de ellos no se permiten."
  A: "Ese es uno de los números posibles de filas, no cuántos hay."
verify: "factors(28).filter((rows) => rows >= 2 && 28 / rows >= 2).length"
---

Una maestra quiere acomodar 28 pupitres en filas iguales. Tiene que haber por lo menos 2 filas y por lo menos 2 pupitres en cada fila. ¿Cuántos números diferentes de filas son posibles?

## Hint

El número de filas tiene que ser factor de 28. Haz la lista de factores y luego tacha los que rompen las reglas.

## Hint 2

Los factores de 28 son 1, 2, 4, 7, 14 y 28. ¿Cuáles rompen las reglas de "por lo menos 2"?

## Solution

**Paso 1.** El número de filas tiene que dividir 28 exactamente, así que tiene que ser factor de 28. Los factores son 1, 2, 4, 7, 14 y 28.

**Paso 2.** Ahora aplica las reglas:

- 1 fila no se permite, porque tiene que haber por lo menos 2 filas.
- 28 filas no se permiten, porque cada fila tendría solo 1 pupitre.

**Paso 3.** Quedan 2, 4, 7 y 14 filas, así que hay 4 posibilidades.

**Respuesta: (E) 4**
