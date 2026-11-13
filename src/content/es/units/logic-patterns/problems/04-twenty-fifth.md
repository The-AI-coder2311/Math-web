---
order: 4
difficulty: easy
lesson: 01-repeating-and-growing
choices: ["31","120","121","125","126"]
answer: E
mistakes:
  A: "Eso es $6 + 25$. Cada paso suma 5, y hay 24 pasos del primer número al número 25."
  B: "Esos son los 24 pasos de 5. Todavía tienes que empezar desde el primer número, 6."
  C: "Eso empieza desde el 1. El primer número es 6."
  D: "Eso es $25 \\times 5$. Deja fuera el valor inicial y usa 25 pasos."
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

**Respuesta: (E) 126**
