---
order: 24
difficulty: medium
lesson: 01-place-value
choices: ["4","13","14","20"]
answer: C
mistakes:
  A: "Eso solo cuenta el 3 en las unidades. Los treintas tienen un 3 en las decenas."
  B: "El número 33 tiene dos 3. Cuenta los dos."
  D: "Cuenta las dos posiciones por separado: 4 en las unidades y 10 en las decenas."
verify: "sum(range(1, 40).map((n) => digits(n).filter((d) => d === 3).length))"
---

Escribes los números del 1 al 40. ¿Cuántas veces escribes el dígito 3?

## Hint

Cuenta por separado la posición de las unidades y la de las decenas.

## Hint 2

Las unidades tienen un 3 en 3, 13, 23 y 33. ¿Qué números tienen un 3 en las decenas?

## Solution

Las unidades dan 3, 13, 23 y 33, que son 4 veces. Las decenas dan del 30 al 39, que son 10 veces. En total, $4 + 10 = 14$. El 33 se cuenta dos veces, y está bien, porque tiene dos 3.

**Respuesta: (C) 14**
