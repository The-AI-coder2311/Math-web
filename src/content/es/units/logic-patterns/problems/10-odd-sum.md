---
order: 11
difficulty: medium
lesson: 02-small-cases
choices: ["200","361","400","441","800"]
answer: C
mistakes:
  A: "Eso es la mitad de la respuesta correcta. La suma de los primeros 20 impares es $20 \\times 20$."
  B: "Eso es $19 \\times 19$. Hay 20 números impares del 1 al 39."
  D: "Eso es $21 \\times 21$. Hay 20 números impares del 1 al 39."
  E: "Eso es $20 \\times 40$, el total si escribes la lista dos veces. Divide entre 2."
verify: "sum(range(1, 39).filter((n) => n % 2 === 1))"
---

¿Cuál es la suma de los números impares del 1 al 39?

$$1 + 3 + 5 + \cdots + 39$$

## Hint

Por el dibujo de puntos de la lección, la suma de los primeros $n$ números impares es $n \times n$. Entonces, ¿cuántos números impares hay en esta lista?

## Hint 2

Hay 20 números impares del 1 al 39. ¿Qué te dice el dibujo de puntos?

## Solution

**Paso 1.** Cuenta los impares del 1 al 39. Los números del 1 al 40 son mitad impares y mitad pares, así que hay 20 impares.

**Paso 2.** La suma de los primeros 20 impares forma un cuadrado de 20 por 20 puntos:

$$20 \times 20 = 400$$

**Respuesta: (C) 400**
