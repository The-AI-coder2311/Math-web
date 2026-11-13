---
order: 12
difficulty: medium
lesson: 04-logic-tables-pigeonholes
choices: ["2","5","6","10","11"]
answer: C
mistakes:
  A: "Ese es el caso con más suerte. \"Estar seguro\" significa planear para la peor suerte."
  B: "Todavía podrías tener uno de cada color. Necesitas uno más para forzar una pareja."
  D: "Eso son 2 de cada color, mucho más de lo que necesitas."
  E: "Eso garantizaría 3 de un color. Solo necesitas 2."
verify: "range(1, 20).find((n) => Math.ceil(n / 5) >= 2)"
---

Un cajón tiene muchos calcetines de 5 colores. A oscuras, ¿cuántos calcetines tienes que sacar para estar seguro de tener 2 del mismo color?

## Hint

Piensa en la peor suerte posible. ¿Cuántos calcetines podrías sacar sin que coincidan?

## Hint 2

Podrías sacar uno de cada color, que son 5 calcetines, sin pareja. ¿Qué pasa con el siguiente calcetín?

## Solution

Con la peor suerte, sacas uno de cada color: 5 calcetines y ninguna pareja. El siguiente calcetín tiene que coincidir con alguno, así que necesitas 6.

**Respuesta: (C) 6**
