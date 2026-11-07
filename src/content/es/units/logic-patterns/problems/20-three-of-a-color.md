---
order: 20
difficulty: hard
lesson: 04-logic-tables-pigeonholes
choices: ["3","7","8","10","16"]
answer: B
mistakes:
  A: "Ese es el caso con más suerte. \"Estar seguro\" significa planear para la peor suerte."
  C: "Con 7 canicas, algún color ya tiene que tener 3. Revisa: 6 canicas pueden evitarlo, pero 7 no."
  D: "Eso es más de lo que necesitas. Dos de cada color es lo máximo que puedes sacar sin tener 3 de un color."
  E: "Esas son todas las canicas de la bolsa. Necesitas muchas menos."
verify: "range(1, 16).find((n) => product(range(0, 7), range(0, 5), range(0, 4)).filter(([r, b, g]) => r + b + g === n).every((d) => Math.max(...d) >= 3))"
---

Una bolsa tiene 7 canicas rojas, 5 azules y 4 verdes. ¿Cuántas canicas tienes que sacar, sin ver, para estar seguro de tener 3 canicas del mismo color?

## Hint

Piensa en la peor suerte. ¿Cuántas canicas puedes sacar sin que ningún color llegue a 3?

## Hint 2

Podrías sacar 2 de cada color, que son 6 canicas. ¿Y la siguiente?

## Solution

Con la peor suerte, sacas 2 de cada color: 6 canicas, y ningún color llega a 3. La siguiente canica tiene que completar 3 de algún color, así que necesitas 7.

**Respuesta: (B) 7**
