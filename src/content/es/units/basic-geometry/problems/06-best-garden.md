---
order: 7
difficulty: medium
lesson: 01-perimeter-and-area
choices: ["9","16","21","24","25"]
answer: E
mistakes:
  A: "Esa es el área de un jardín de 1 por 9. Otras formas tienen más."
  B: "Esa es el área de un jardín de 2 por 8. Otras formas tienen más."
  C: "Esa es el área de un jardín de 3 por 7. Otras formas tienen más."
  D: "Esa es el área de un jardín de 4 por 6. Un cuadrado tiene un poco más."
verify: "Math.max(...range(1, 9).map((length) => length * (10 - length)))"
---

Sam tiene 20 metros de cerca para rodear un jardín rectangular. Los lados tienen que medir un número entero de metros, y Sam usa toda la cerca. ¿Cuál es la mayor área que puede tener el jardín, en metros cuadrados?

## Hint

El largo más el ancho tiene que ser la mitad del perímetro. Haz una lista de las posibilidades.

## Hint 2

Haz la lista de las parejas que suman 10 y multiplica cada pareja.

## Solution

**Paso 1.** Al rodear el rectángulo, cada lado se usa dos veces, así que el largo más el ancho es $20 \div 2 = 10$ metros.

**Paso 2.** Haz la lista de las parejas que suman 10, con sus áreas:

| Largo y ancho | Área |
|---|---|
| 1 y 9 | 9 |
| 2 y 8 | 16 |
| 3 y 7 | 21 |
| 4 y 6 | 24 |
| 5 y 5 | 25 |

La mayor área es de 25 metros cuadrados, y viene del cuadrado.

**Respuesta: (E) 25**
