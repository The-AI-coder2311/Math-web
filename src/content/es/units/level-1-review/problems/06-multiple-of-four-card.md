---
order: 6
difficulty: easy
from: intro-probability/01-count-what-you-want
choices: ["$\\frac{1}{12}$","$\\frac{1}{6}$","$\\frac{1}{4}$","$\\frac{1}{3}$","$\\frac{1}{2}$"]
answer: C
mistakes:
  A: "Eso cuenta una sola tarjeta. Tres de ellas son múltiplos de 4."
  B: "Eso cuenta solo 2 tarjetas. No olvides el 12."
  D: "Eso serían 4 tarjetas. Solo funcionan 4, 8 y 12."
  E: "Esa es la probabilidad de un número par. Solo algunos números pares son múltiplos de 4."
verify: "fraction(range(1, 12).filter((n) => n % 4 === 0).length, 12)"
---

En un sombrero hay tarjetas numeradas del 1 al 12, y sacas una. ¿Cuál es la probabilidad de que su número sea múltiplo de 4?

## Hint

Haz la lista de los múltiplos de 4 hasta 12.

## Hint 2

Son 4, 8 y 12.

## Solution

Los múltiplos son 4, 8 y 12. Son 3 de 12 tarjetas, así que la probabilidad es $\frac{3}{12} = \frac{1}{4}$.

**Respuesta: (C) $\frac{1}{4}$**
