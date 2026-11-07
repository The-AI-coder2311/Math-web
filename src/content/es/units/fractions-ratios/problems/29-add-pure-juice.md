---
order: 29
difficulty: hard
lesson: 04-percents
choices: ["5","6","10","12"]
answer: C
mistakes:
  A: "Pruébalo: 11 litros de jugo en 35 litros es menos del 40%."
  B: "Ese es el jugo que ya tiene la bebida."
  D: "Pruébalo: 18 litros de jugo en 42 litros es más del 40%."
verify: "range(1, 100).find((x) => (6 + x) * 5 === (30 + x) * 2)"
---

Una bebida de 30 litros tiene 20% de jugo y 80% de agua. ¿Cuántos litros de jugo puro necesitas agregar para que tenga 40% de jugo?

## Hint

Agregar jugo no cambia el agua. ¿Cuánta agua hay?

## Hint 2

Hay 24 litros de agua, y serán el 60% de la bebida nueva.

## Solution

Hay 24 litros de agua, y eso no cambia. En la bebida nueva, el agua es el 60%, así que el total nuevo es $24 \div 0.6 = 40$ litros. Así que agregas $40 - 30 = 10$ litros de jugo.

**Respuesta: (C) 10**
