---
order: 2
difficulty: easy
from: number-sense/03-divisibility-rules
choices: ["513","412","245","614","701"]
answer: A
mistakes:
  C: "Sus dígitos suman 11, que no es múltiplo de 3."
  B: "Sus dígitos suman 7, que no es múltiplo de 3."
  D: "Sus dígitos suman 11, que no es múltiplo de 3."
  E: "Sus dígitos suman 8, que no es múltiplo de 3."
verify: "[245, 412, 513, 614, 701].find((n) => n % 3 === 0)"
---

¿Qué número es divisible entre 3?

## Hint

Suma los dígitos de cada número.

## Hint 2

La suma de los dígitos tiene que ser múltiplo de 3.

## Solution

Las sumas de los dígitos son 11, 7, 9, 11 y 8. Solo 513 tiene una suma de dígitos que es múltiplo de 3.

**Respuesta: (A) 513**
