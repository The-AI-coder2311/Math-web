---
order: 24
difficulty: medium
lesson: 01-perimeter-and-area
choices: ["20","22","28","50"]
answer: A
mistakes:
  B: "Ese es un rectángulo de 3 por 8. Una figura más parecida a un cuadrado sale mejor."
  C: "Ese es un rectángulo de 2 por 12. Una figura más parecida a un cuadrado sale mejor."
  D: "Ese es un rectángulo de 1 por 24, que tiene el mayor perímetro."
verify: "Math.min(...factors(24).map((w) => 2 * (w + 24 / w)))"
---

Un rectángulo tiene lados enteros y un área de 24. ¿Cuál es el menor perímetro que puede tener?

## Hint

Haz la lista de las parejas de números enteros que multiplicados dan 24.

## Hint 2

Las parejas son 1 y 24, 2 y 12, 3 y 8, y 4 y 6.

## Solution

Las parejas de lados son 1 y 24, 2 y 12, 3 y 8, y 4 y 6. La pareja más cercana da el menor perímetro: $2 \times (4 + 6) = 20$.

**Respuesta: (A) 20**
