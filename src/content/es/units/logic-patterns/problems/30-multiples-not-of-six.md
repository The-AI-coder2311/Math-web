---
order: 30
difficulty: hard
lesson: 01-repeating-and-growing
choices: ["8","17","25","33"]
answer: B
mistakes:
  A: "Esos son los números que son múltiplos de 4 y de 6 a la vez. Réstalos de los múltiplos de 4."
  C: "Eso cuenta todos los múltiplos de 4. Algunos también son múltiplos de 6."
  D: "Esos son los múltiplos de 3. Busca primero los múltiplos de 4."
verify: "range(1, 100).filter((n) => n % 4 === 0 && n % 6 !== 0).length"
---

¿Cuántos números enteros del 1 al 100 son múltiplos de 4 pero no múltiplos de 6?

## Hint

¿Cuántos múltiplos de 4 hay? ¿Cuáles de ellos también son múltiplos de 6?

## Hint 2

Un número que es múltiplo de 4 y de 6 a la vez es múltiplo de 12.

## Solution

Hay 25 múltiplos de 4 hasta 100. Los que también son múltiplos de 6 son los múltiplos de 12, y hay 8. Así que $25 - 8 = 17$ números cumplen.

**Respuesta: (B) 17**
