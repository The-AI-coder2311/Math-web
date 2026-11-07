---
order: 27
difficulty: medium
lesson: 04-count-the-opposite
choices: ["125","450","775","875"]
answer: C
mistakes:
  A: "Eso es lo contrario: números sin ningún dígito par. Réstalo del total."
  B: "Esos son los números que terminan en un dígito par. Un dígito par también podría estar en otro lugar."
  D: "Eso resta 125 de 1000. Solo hay 900 números de tres dígitos."
verify: "range(100, 999).filter((n) => digits(n).some((d) => d % 2 === 0)).length"
---

¿Cuántos números de tres dígitos tienen al menos un dígito par?

## Hint

¿Qué es lo contrario de "al menos un dígito par"?

## Hint 2

Lo contrario es "todos los dígitos son impares". Cuéntalos y réstalos de 900.

## Solution

Hay 900 números de tres dígitos. Con todos los dígitos impares hay $5 \times 5 \times 5 = 125$ números. Así que $900 - 125 = 775$ tienen un dígito par.

**Respuesta: (C) 775**
