---
order: 29
difficulty: hard
lesson: 04-factors-primes-leftovers
choices: ["10","12","15","18"]
answer: C
mistakes:
  A: "Puede que hayas dejado fuera números como 8 y 27, que son cubos de primos, o algunos productos de dos primos."
  B: "Revisa los cubos de primos: 8 y 27 tienen exactamente 4 factores cada uno."
  D: "Revisa tu lista. Números como 12 y 18 tienen 6 factores, así que no van."
verify: "range(1, 50).filter((n) => factors(n).length === 4).length"
---

¿Cuántos números enteros del 1 al 50 tienen exactamente 4 factores?

## Hint

Prueba algunos. ¿Qué tienen en común 6, 8, 10 y 15?

## Hint 2

Hay dos tipos: el producto de dos primos diferentes, y un primo multiplicado por sí mismo tres veces.

## Solution

Un número con exactamente 4 factores es el producto de dos primos diferentes o el cubo de un primo.

Los productos de dos primos diferentes hasta 50 son 6, 10, 14, 15, 21, 22, 26, 33, 34, 35, 38, 39 y 46, que son 13. Los cubos de primos son 8 y 27, que son 2. En total, $13 + 2 = 15$.

**Respuesta: (C) 15**
