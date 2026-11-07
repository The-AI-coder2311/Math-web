---
order: 8
difficulty: medium
lesson: 01-multiply-choices
choices: ["15","60","100","243","125"]
answer: E
mistakes:
  A: "Eso es $5 + 5 + 5$. Cada posición es otra elección, así que multiplica."
  B: "Eso es $5 \\times 4 \\times 3$, que no permite repetir. El número 111 cuenta, así que los dígitos se pueden repetir."
  C: "Eso es $4 \\times 5 \\times 5$, que sería correcto si el 0 fuera uno de los dígitos. Los dígitos impares no incluyen el 0, así que el primer dígito tiene 5 opciones."
  D: "Eso es $3^5$, que invierte los dos números. Hay 3 posiciones con 5 opciones cada una."
verify: "range(100, 999).filter((n) => digits(n).every((d) => d % 2 === 1)).length"
---

¿Cuántos números de tres dígitos tienen solo dígitos impares? (Por ejemplo, 739 y 111 cuentan, pero 725 no.)

## Hint

Primero haz la lista de los dígitos impares y cuéntalos. ¿Se puede repetir un dígito? El ejemplo 111 te da una pista.

## Hint 2

Los dígitos impares son 1, 3, 5, 7 y 9. Cada una de las 3 posiciones tiene las 5 opciones.

## Solution

**Paso 1.** Los dígitos impares son 1, 3, 5, 7 y 9. Son 5 dígitos.

**Paso 2.** Cada uno de los 3 lugares (centenas, decenas y unidades) puede ser cualquier dígito impar. El ejemplo 111 muestra que los dígitos se pueden repetir, así que cada lugar tiene 5 opciones.

**Paso 3.** Multiplica:

$$5 \times 5 \times 5 = 125$$

**Respuesta: (E) 125**
