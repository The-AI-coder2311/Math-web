---
order: 28
difficulty: medium
lesson: 05-split-into-cases
choices: ["1","2","3","4"]
answer: D
mistakes:
  A: "Eso encuentra un solo número. Piensa en qué parejas de dígitos multiplican 12, y voltéalas."
  B: "Eso cuenta parejas de dígitos. Cada pareja da dos números, porque el orden importa."
  C: "Haz la lista completa: hay un número par de ellos, porque cada pareja se puede voltear."
verify: "range(10, 99).filter((n) => digits(n)[0] * digits(n)[1] === 12).length"
---

¿Cuántos números de dos dígitos tienen dígitos cuyo producto es 12?

## Hint

¿Qué parejas de dígitos de una cifra multiplican 12?

## Hint 2

Las parejas son 2 y 6, y 3 y 4. Cada pareja puede ir en cualquier orden.

## Solution

Las parejas de dígitos son 2 y 6, y 3 y 4. (La pareja 1 y 12 no funciona, porque 12 no es un dígito.) Los números son 26, 62, 34 y 43, que son 4.

**Respuesta: (D) 4**
