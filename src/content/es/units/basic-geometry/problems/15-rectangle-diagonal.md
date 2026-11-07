---
order: 15
difficulty: medium
lesson: 05-right-triangles
choices: ["7","17","13","60","169"]
answer: C
mistakes:
  A: "Eso es $12 - 5$. La diagonal es más larga que cualquiera de los lados."
  B: "Eso es $5 + 12$, caminar por dos lados. La diagonal es un atajo."
  D: "Esa es el área del rectángulo."
  E: "Esa es la diagonal al cuadrado. ¿Qué número al cuadrado da 169?"
verify: "range(1, 30).find((d) => d * d === 5 * 5 + 12 * 12)"
---

Un rectángulo mide 5 pulgadas de ancho y 12 pulgadas de largo. ¿Cuánto mide su diagonal, en pulgadas?

## Hint

La diagonal corta el rectángulo en dos triángulos rectángulos. ¿Cuáles son los catetos?

## Hint 2

Los catetos son 5 y 12. Tal vez reconozcas esta terna.

## Solution

La diagonal es la hipotenusa de un triángulo rectángulo con catetos 5 y 12: $5^2 + 12^2 = 169$. Así que la diagonal mide 13.

**Respuesta: (C) 13**
