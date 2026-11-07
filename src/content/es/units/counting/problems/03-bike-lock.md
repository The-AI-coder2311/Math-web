---
order: 3
difficulty: easy
lesson: 01-multiply-choices
choices: ["30","100","1000","999","729"]
answer: C
mistakes:
  A: "Eso es $10 + 10 + 10$. Cada rueda es otra elección, así que multiplica."
  B: "Eso es solo para 2 ruedas. Una tercera rueda multiplica por 10 otra vez."
  E: "Eso es $9 \\times 9 \\times 9$. Los dígitos del 0 al 9 son 10 dígitos, no 9."
  D: "Eso deja fuera el código 000. Los códigos van del 000 al 999."
verify: "product(range(0, 9), range(0, 9), range(0, 9)).length"
---

El candado de una bicicleta tiene 3 ruedas. Cada rueda puede marcar cualquier dígito del 0 al 9, y los dígitos se pueden repetir. ¿Cuántos códigos diferentes son posibles?

## Hint

Primero cuenta los dígitos del 0 al 9. Cuidado: ¡son más de 9! Luego piensa en cada rueda como una elección separada.

## Hint 2

Hay 10 dígitos para cada una de las 3 ruedas. Los dígitos se pueden repetir, así que las opciones no se reducen.

## Solution

**Paso 1.** Los dígitos del 0 al 9 son 0, 1, 2, 3, 4, 5, 6, 7, 8 y 9. Son 10 dígitos, así que cada rueda tiene 10 opciones.

**Paso 2.** Hay 3 ruedas, y cada una es una elección separada. Los dígitos se pueden repetir, así que el número de opciones no cambia:

$$10 \times 10 \times 10 = 1000$$

**Una comprobación:** los códigos van del 000 al 999. Son todos los números enteros del 0 al 999, o sea 1000 números.

**Respuesta: (C) 1000**
