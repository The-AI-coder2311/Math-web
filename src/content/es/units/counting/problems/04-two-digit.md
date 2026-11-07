---
order: 4
difficulty: easy
lesson: 02-when-order-matters
choices: ["6","16","14","12","24"]
answer: D
mistakes:
  A: "Eso es \"combinaciones de 4 en 2\", que trata 35 y 53 como iguales. Son números diferentes, así que el orden importa."
  C: "Eso es $7 \\times 2$. Arma el número dígito por dígito: 4 opciones y luego 3."
  B: "Eso es $4 \\times 4$, que deja repetir un dígito. El problema no lo permite."
  E: "Eso es $4 \\times 3 \\times 2$, que forma números de 3 dígitos."
verify: "product([3, 5, 7, 9], [3, 5, 7, 9]).filter(([a, b]) => a !== b).length"
---

¿Cuántos números diferentes de dos dígitos se pueden formar con los dígitos 3, 5, 7 y 9 si ningún dígito se puede usar dos veces en el mismo número?

## Hint

Arma el número un dígito a la vez. Una vez que usaste un dígito en las decenas, ¿cuántos quedan para las unidades?

## Hint 2

Hay 4 opciones para el primer dígito. ¿Cuántas quedan para el segundo?

## Solution

**Paso 1.** El dígito de las decenas puede ser cualquiera de los 4 dígitos, así que hay 4 opciones.

**Paso 2.** El dígito de las unidades no puede ser igual al de las decenas, así que quedan 3 opciones.

**Paso 3.** Multiplica:

$$4 \times 3 = 12$$

**Una comprobación:** los números que empiezan con 3 son 35, 37 y 39. Son 3 números, y pasa lo mismo con cada uno de los 4 dígitos iniciales.

**Respuesta: (D) 12**
