---
order: 7
difficulty: medium
lesson: 02-small-cases
choices: ["2500","2525","2550","5050","5100"]
answer: C
mistakes:
  A: "Eso es $25 \\times 100$. Cada pareja suma 102, no 100."
  B: "Revisa tus parejas. 2 y 100 suman 102, y hay 25 parejas."
  D: "Esa es la suma del 1 al 100, que incluye los impares."
  E: "Eso es $50 \\times 102$, el total si escribes la lista dos veces. Divide entre 2."
verify: "sum(range(1, 100).filter((n) => n % 2 === 0))"
---

¿Cuál es la suma de todos los números pares del 2 al 100?

$$2 + 4 + 6 + \cdots + 100$$

## Hint

Prueba juntar el primer número con el último, y el segundo con el penúltimo. ¿Cuánto suma cada pareja? ¿Cuántas parejas hay?

## Hint 2

Hay 50 números, que forman 25 parejas que suman 102 cada una.

## Solution

**Paso 1.** Junta los números de afuera hacia adentro: 2 y 100 dan 102, 4 y 98 dan 102, y así sucesivamente. Cada pareja suma 102.

**Paso 2.** La lista tiene 50 números, porque 100 es $2 \times 50$. Así que hay 25 parejas.

**Paso 3.** La suma es $25 \times 102 = 2550$.

**Respuesta: (C) 2550**
