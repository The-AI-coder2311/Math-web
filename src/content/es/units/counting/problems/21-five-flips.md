---
order: 21
difficulty: easy
lesson: 01-multiply-choices
choices: ["10","25","32","64"]
answer: C
mistakes:
  A: "Eso suma 2 cinco veces. Cada lanzamiento multiplica la cuenta por 2."
  B: "Eso es 5 por 5. Hay 2 resultados para cada uno de 5 lanzamientos, así que es 2 multiplicado 5 veces."
  D: "Eso son 6 lanzamientos. Vuelve a contar: son 5 lanzamientos."
verify: "product([0, 1], [0, 1], [0, 1], [0, 1], [0, 1]).length"
---

Se lanza una moneda 5 veces, y los resultados se anotan en orden, como CXXCC (C es cara y X es cruz). ¿Cuántos resultados diferentes son posibles?

## Hint

Cada lanzamiento tiene 2 resultados posibles. ¿Qué haces con elecciones seguidas?

## Hint 2

Multiplica 2 por sí mismo, una vez por cada lanzamiento.

## Solution

Cada uno de los 5 lanzamientos tiene 2 resultados, así que hay $2 \times 2 \times 2 \times 2 \times 2 = 32$ resultados.

**Respuesta: (C) 32**
