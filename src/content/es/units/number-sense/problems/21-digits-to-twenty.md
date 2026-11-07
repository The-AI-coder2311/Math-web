---
order: 21
difficulty: easy
lesson: 01-place-value
choices: ["20","29","31","40"]
answer: C
mistakes:
  A: "Esa es la cantidad de números. Muchos de ellos tienen 2 dígitos."
  B: "Vuelve a contar los números de dos dígitos. Del 10 al 20 hay 11, no 10."
  D: "Eso cuenta los 20 números como si tuvieran 2 dígitos. Del 1 al 9 solo tienen 1."
verify: "sum(range(1, 20).map((n) => String(n).length))"
---

Escribes los números enteros del 1 al 20 en fila. ¿Cuántos dígitos escribes?

## Hint

Separa los números en los de un dígito y los de dos dígitos.

## Hint 2

Hay 9 números de un dígito. ¿Cuántos números hay del 10 al 20, contando los dos extremos?

## Solution

Del 1 al 9 se usan 9 dígitos. Del 10 al 20 hay 11 números de 2 dígitos cada uno, que dan 22 dígitos. En total, $9 + 22 = 31$.

**Respuesta: (C) 31**
