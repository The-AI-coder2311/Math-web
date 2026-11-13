---
order: 10
difficulty: medium
lesson: 01-multiply-choices
choices: ["48","60","81","120","243"]
answer: A
mistakes:
  B: "Eso es $5 \\times 4 \\times 3$. Hay 3 colores, y cada franja solo tiene que evitar el color de la franja anterior, así que cada franja siguiente tiene 2 opciones."
  C: "Eso es $3 \\times 3 \\times 3 \\times 3$. Después de la primera, una franja solo tiene 2 opciones, porque tiene que ser diferente de su vecina."
  D: "Eso es $5!$. Eso acomodaría 5 franjas diferentes. Aquí los colores pueden repetirse."
  E: "Eso es $3^5$, que ignora la regla de las franjas que se tocan."
verify: "product([1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]).filter((flag) => flag.every((color, i) => i === 0 || color !== flag[i - 1])).length"
---

Una bandera tiene 5 franjas en fila. Cada franja es roja, azul o dorada, y dos franjas que se tocan no pueden ser del mismo color. Un color se puede volver a usar siempre que las franjas no se toquen. ¿Cuántas banderas diferentes son posibles?

## Hint

Colorea las franjas de izquierda a derecha. La primera franja puede ser de cualquier color. ¿Y la siguiente? El único color que no puede tener es el de la franja que está justo al lado.

## Hint 2

La primera franja tiene 3 opciones. Cada franja siguiente tiene 2, porque no puede ser igual a la anterior.

## Solution

**Paso 1.** La primera franja puede ser cualquiera de los 3 colores, así que hay 3 opciones.

**Paso 2.** La segunda franja puede ser de cualquier color excepto el de la primera, así que hay 2 opciones.

**Paso 3.** La tercera franja solo tiene que ser diferente de la segunda. Puede ser igual a la primera, así que otra vez hay 2 opciones. Lo mismo pasa con la cuarta y la quinta.

**Paso 4.** Multiplica:

$$3 \times 2 \times 2 \times 2 \times 2 = 48$$

**Fíjate:** aquí el número de opciones no sigue bajando. Cada franja solo tiene que evitar un color: el de la franja que está justo antes.

**Respuesta: (A) 48**
