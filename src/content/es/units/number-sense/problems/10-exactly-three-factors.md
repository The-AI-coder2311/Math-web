---
order: 11
difficulty: medium
lesson: 04-factors-primes-leftovers
choices: ["1","2","3","4","7"]
answer: D
mistakes:
  A: "Eso encuentra muy pocos. Revisa 4, 9, 25 y 49: cada uno tiene exactamente 3 factores."
  B: "Eso encuentra muy pocos. Revisa 4, 9, 25 y 49: cada uno tiene exactamente 3 factores."
  C: "Te falta uno. Revisa 4, 9, 25 y 49: cada uno tiene exactamente 3 factores."
  E: "Eso cuenta todos los cuadrados perfectos hasta 50. Algunos tienen más de 3 factores. Por ejemplo, 16 tiene 5, y 1 solo tiene 1."
verify: "range(1, 50).filter((n) => factors(n).length === 3).length"
---

¿Cuántos números enteros del 1 al 50 tienen exactamente 3 factores positivos?

## Hint

Un número impar de factores significa que el número tiene que ser un cuadrado perfecto. Prueba los cuadrados perfectos hasta 50 y cuenta los factores de cada uno.

## Hint 2

Un número con 3 factores tiene que ser un cuadrado perfecto, y su raíz cuadrada tiene que ser prima. Prueba 4, 9, 16, 25, 36 y 49.

## Solution

**Paso 1.** Solo los cuadrados perfectos tienen un número impar de factores. Los cuadrados perfectos del 1 al 50 son 1, 4, 9, 16, 25, 36 y 49.

**Paso 2.** Cuenta los factores de cada uno:

- 1 tiene 1 factor.
- 4 tiene 3 factores: 1, 2 y 4.
- 9 tiene 3 factores: 1, 3 y 9.
- 16 tiene 5 factores: 1, 2, 4, 8 y 16.
- 25 tiene 3 factores: 1, 5 y 25.
- 36 tiene 9 factores.
- 49 tiene 3 factores: 1, 7 y 49.

**Paso 3.** Los números con exactamente 3 factores son 4, 9, 25 y 49, así que son 4.

**Un patrón para notar:** cada uno es un número primo multiplicado por sí mismo, como $5 \times 5 = 25$.

**Un error común:** contestar 7 por contar todos los cuadrados perfectos.

**Respuesta: (D) 4**
