---
order: 23
difficulty: easy
lesson: 04-logic-tables-pigeonholes
choices: ["2","4","5","8"]
answer: C
mistakes:
  A: "Ese es el caso con más suerte. La pregunta pide algo seguro."
  B: "Con 4 gorras, podrías tener una de cada color y ninguna pareja."
  D: "Eso es más de lo que necesitas. Uno más que el número de colores es suficiente."
verify: "range(1, 20).find((n) => Math.ceil(n / 4) >= 2)"
---

Un cajón tiene muchas gorras de 4 colores. ¿Cuántas gorras tienes que sacar, sin ver, para estar seguro de tener dos del mismo color?

## Hint

¿Cuál es la peor suerte que podrías tener?

## Hint 2

Podrías sacar una de cada color. ¿Qué pasa con la siguiente gorra?

## Solution

Con la peor suerte, las primeras 4 gorras son todas diferentes. La 5.ª gorra tiene que coincidir con alguna.

**Respuesta: (C) 5**
