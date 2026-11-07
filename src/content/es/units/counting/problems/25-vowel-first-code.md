---
order: 25
difficulty: medium
lesson: 02-when-order-matters
choices: ["60","120","240","360"]
answer: B
mistakes:
  A: "Eso es con una sola vocal. Hay 2 vocales para empezar: A y E."
  C: "Eso le da 4 opciones a la primera letra. Solo A y E son vocales."
  D: "Eso cuenta todos los códigos sin la regla. La primera letra tiene que ser vocal."
verify: "product(range(0, 5), range(0, 5), range(0, 5), range(0, 5)).filter((w) => new Set(w).size === 4 && (w[0] === 0 || w[0] === 4)).length"
---

Un código de 4 letras usa letras de A, B, C, D, E y F, sin repetir. La primera letra tiene que ser vocal. ¿Cuántos códigos son posibles?

## Hint

Resuelve primero la primera letra, porque es la que tiene la regla.

## Hint 2

Hay 2 vocales. Luego quedan 5 letras para el segundo lugar.

## Solution

La primera letra es A o E, que son 2 opciones. Los lugares siguientes tienen 5, 4 y 3 opciones. Así que hay $2 \times 5 \times 4 \times 3 = 120$ códigos.

**Respuesta: (B) 120**
