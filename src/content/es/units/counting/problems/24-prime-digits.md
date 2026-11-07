---
order: 24
difficulty: medium
lesson: 01-multiply-choices
choices: ["12","27","64","81"]
answer: C
mistakes:
  A: "Eso es 4 por 3. Los dígitos se pueden repetir, así que cada lugar tiene las 4 opciones."
  B: "Eso usa 3 dígitos primos. Son 4: 2, 3, 5 y 7."
  D: "Eso es 3 multiplicado 4 veces. Hay 4 opciones y 3 lugares, así que es 4 multiplicado 3 veces."
verify: "range(100, 999).filter((n) => digits(n).every(isPrime)).length"
---

¿Cuántos números de tres dígitos tienen solo dígitos primos?

## Hint

¿Qué dígitos de una sola cifra son primos?

## Hint 2

Los dígitos primos son 2, 3, 5 y 7. Cada uno de los 3 lugares puede usar cualquiera de ellos.

## Solution

Los dígitos primos son 2, 3, 5 y 7, y cada uno de los 3 lugares puede usar cualquiera de ellos. Así que hay $4 \times 4 \times 4 = 64$ números.

**Respuesta: (C) 64**
