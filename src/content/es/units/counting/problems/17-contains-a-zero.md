---
order: 17
difficulty: hard
lesson: 04-count-the-opposite
choices: ["729","2439","2916","3439","6561"]
answer: B
mistakes:
  A: "Esa es la cuenta para 3 dígitos sin ceros. Hay 4 dígitos."
  C: "Eso es $4 \\times 729$, que cuenta un 0 en cada uno de 4 lugares. El primer dígito no puede ser 0, y los números con varios ceros se cuentan más de una vez."
  D: "Eso es $10000 - 6561$. Solo hay 9000 números de cuatro dígitos."
  E: "Esa es la cuenta **sin** ceros. Réstala de 9000."
verify: "range(1000, 9999).filter((n) => digits(n).includes(0)).length"
---

¿Cuántos números de 4 dígitos tienen al menos un dígito que sea 0?

## Hint

Cuenta lo contrario. ¿Cuántos números de 4 dígitos no tienen ningún 0?

## Hint 2

Sin ceros, cada uno de los 4 dígitos tiene 9 opciones, así que hay $9^4 = 6561$. ¿Cuántos números de 4 dígitos hay en total?

## Solution

**Paso 1.** Hay 9000 números de cuatro dígitos.

**Paso 2.** Sin ceros, cada dígito tiene 9 opciones: $9 \times 9 \times 9 \times 9 = 6561$.

**Paso 3.** Así que $9000 - 6561 = 2439$ tienen al menos un 0.

**Respuesta: (B) 2439**
