---
order: 4
difficulty: easy
lesson: 01-repeating-and-growing
choices: ["120","121","126","125","131"]
answer: C
mistakes:
  A: "Esos son los 24 pasos de 5. Todavía tienes que empezar desde el primer número, 6."
  B: "Eso empieza desde el 1. El primer número es 6."
  D: "Eso es $25 \\times 5$. Deja fuera el valor inicial y usa 25 pasos."
  E: "Eso usa 25 pasos. Para llegar al número 25 solo se necesitan 24 pasos."
verify: "range(2, 25).reduce((value) => value + 5, 6)"
---

¿Cuál es el número 25 de la lista 6, 11, 16, 21, ...?

## Hint

¿Cuántos pasos se necesitan para ir del 1.er número al 25? Prueba un caso pequeño: ¿cuántos pasos hay del 1.º al 3.º?

## Hint 2

Se necesitan 24 pasos para llegar al número 25.

## Solution

**Paso 1.** Ir del 1.er número al 25 toma 24 pasos, y cada paso suma 5.

**Paso 2.** El número 25 es:

$$6 + 24 \times 5 = 126$$

**Respuesta: (C) 126**
