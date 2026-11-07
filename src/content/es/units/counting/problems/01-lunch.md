---
order: 1
difficulty: easy
lesson: 01-multiply-choices
choices: ["7","9","24","16","12"]
answer: E
mistakes:
  A: "Eso es $3 + 4$. Sumar cuenta las cosas del menú. Maya elige un sándwich **y** una bebida, así que multiplica."
  B: "Eso es $3 \\times 3$. Hay 4 bebidas, no 3."
  D: "Eso es $4 \\times 4$. Hay 3 sándwiches, no 4."
  C: "Eso es $3 \\times 4 \\times 2$. Aquí solo hay dos elecciones, así que detente en $3 \\times 4$."
verify: "product(range(1, 3), range(1, 4)).length"
---

La cafetería de una escuela ofrece 3 tipos de sándwiches y 4 tipos de bebidas. Maya elige un sándwich y una bebida. ¿Cuántos almuerzos diferentes podría elegir?

## Hint

Maya hace una elección y luego otra. Imagina que primero elige un sándwich. ¿Cuántas bebidas podrían ir con él?

## Hint 2

Para cada uno de los 3 sándwiches hay 4 bebidas. Son 3 grupos de 4.

## Solution

**Paso 1.** Maya hace dos elecciones: un sándwich (3 opciones) y una bebida (4 opciones).

**Paso 2.** Cada uno de los 3 sándwiches puede ir con cualquiera de las 4 bebidas, así que multiplicamos:

$$3 \times 4 = 12$$

**Un error común:** sumar y obtener $3 + 4 = 7$. Sumar cuenta las cosas del menú, no los almuerzos posibles.

**Respuesta: (E) 12**
