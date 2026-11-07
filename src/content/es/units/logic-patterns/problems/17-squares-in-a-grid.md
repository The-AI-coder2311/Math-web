---
order: 17
difficulty: hard
lesson: 02-small-cases
choices: ["16","25","30","36","40"]
answer: C
mistakes:
  A: "Eso solo cuenta los cuadritos. Los cuadrados más grandes también cuentan."
  B: "Eso deja fuera algunos tamaños. Suma 16, 9, 4 y 1."
  D: "Eso es $6 \\times 6$. Mejor cuenta por tamaños."
  E: "Eso es más de los que hay. Cuenta por tamaños: 16, 9, 4 y 1."
verify: "sum(range(1, 4).map((s) => (5 - s) * (5 - s)))"
---

Una cuadrícula cuadrada tiene 4 filas y 4 columnas de cuadritos. ¿Cuántos cuadrados de todos los tamaños hay?

## Hint

Cuenta por tamaños. ¿Cuántos cuadrados de 1 por 1 hay? ¿Cuántos de 2 por 2?

## Hint 2

Un cuadrado de 2 por 2 puede estar en 3 posiciones a lo ancho y 3 hacia abajo, que son 9 lugares.

## Solution

Cuenta por tamaños. Hay 16 cuadrados de tamaño 1, 9 de tamaño 2, 4 de tamaño 3 y 1 de tamaño 4. El total es $16 + 9 + 4 + 1 = 30$.

**Respuesta: (C) 30**
