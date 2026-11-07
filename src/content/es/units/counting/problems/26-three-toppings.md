---
order: 26
difficulty: medium
lesson: 03-overcount-then-divide
choices: ["24","56","112","336"]
answer: B
mistakes:
  A: "Eso es 8 por 3. Estás eligiendo un grupo, así que usa primero 8 por 7 por 6."
  C: "Dividiste entre 3 en lugar de 6. Tres ingredientes se pueden ordenar de 6 formas."
  D: "Eso cuenta los órdenes de los ingredientes. Una pizza con champiñones y aceitunas es la misma que una con aceitunas y champiñones."
verify: "combos(range(1, 8), 3).length"
---

Una pizzería tiene 8 ingredientes. ¿De cuántas formas puedes elegir 3 ingredientes diferentes?

## Hint

Cuenta como si el orden importara. Luego corrige lo que contaste de más.

## Hint 2

Cualquier grupo de 3 se puede ordenar de $3 \times 2 \times 1 = 6$ formas.

## Solution

En orden, hay $8 \times 7 \times 6 = 336$ elecciones. Cada grupo de 3 se cuenta 6 veces, así que hay $336 \div 6 = 56$ grupos.

**Respuesta: (B) 56**
