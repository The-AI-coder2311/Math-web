---
order: 29
difficulty: hard
lesson: 04-logic-tables-pigeonholes
choices: ["4","10","12","13"]
answer: B
mistakes:
  A: "Ese es el caso con más suerte. La pregunta es sobre estar seguro."
  C: "Con 10 canicas, algún color ya tiene que tener 4. Revisa el peor caso."
  D: "Eso es más de lo que necesitas. El peor caso tiene 3 de cada color."
verify: "range(1, 21).find((n) => product(range(0, 5), range(0, 7), range(0, 9)).filter(([r, b, g]) => r + b + g === n).every((d) => Math.max(...d) >= 4))"
---

Una bolsa tiene 5 canicas rojas, 7 azules y 9 verdes. ¿Cuántas canicas tienes que sacar, sin ver, para estar seguro de tener 4 del mismo color?

## Hint

¿Cuántas puedes sacar como máximo sin que ningún color llegue a 4?

## Hint 2

Puedes sacar 3 de cada color.

## Solution

Con la peor suerte, sacas 3 de cada color, que son 9 canicas. Cada color tiene por lo menos 3 canicas, así que esto puede pasar. La siguiente canica completa 4 de algún color. Así que necesitas 10.

**Respuesta: (B) 10**
