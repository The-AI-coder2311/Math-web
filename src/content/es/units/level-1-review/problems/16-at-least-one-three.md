---
order: 16
difficulty: hard
from: counting/04-count-the-opposite
choices: ["9","19","18","20","72"]
answer: C
mistakes:
  A: "Esos son solo los que tienen un 3 en una posición. Revisa las dos posiciones."
  B: "Eso cuenta el 33 dos veces. Es un solo número."
  D: "Eso cuenta los 10 números con un 3 en cada posición, y cuenta el 33 dos veces."
  E: "Esa es la cuenta **sin** ningún 3. Réstala de 90."
verify: "range(10, 99).filter((n) => digits(n).includes(3)).length"
---

¿Cuántos números de 2 dígitos tienen al menos un dígito que sea 3?

## Hint

Cuenta lo contrario. ¿Cuántos números de 2 dígitos no tienen ningún 3?

## Hint 2

Sin ningún 3, hay 8 opciones para el primer dígito y 9 para el segundo.

## Solution

Hay 90 números de dos dígitos. Sin ningún 3 hay $8 \times 9 = 72$. Así que $90 - 72 = 18$.

**Respuesta: (C) 18**
