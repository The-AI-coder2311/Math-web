---
order: 25
difficulty: medium
lesson: 02-small-cases
choices: ["55","81","100","121"]
answer: C
mistakes:
  A: "Esa es la suma del 1 al 10, no de los primeros 10 impares."
  B: "Esa es la suma de los primeros 9 impares."
  D: "Esa es la suma de los primeros 11 impares."
verify: "sum(range(1, 10).map((n) => 2 * n - 1))"
---

¿Cuál es la suma de los primeros 10 números impares, $1 + 3 + 5 + \cdots + 19$?

## Hint

Prueba casos pequeños: 1, luego $1 + 3$, luego $1 + 3 + 5$.

## Hint 2

Las sumas son 1, 4 y 9. ¿Qué notas?

## Solution

Las sumas de los primeros impares son 1, 4, 9 y 16, que son cuadrados perfectos. Así que los primeros 10 impares suman $10 \times 10 = 100$.

**Respuesta: (C) 100**
