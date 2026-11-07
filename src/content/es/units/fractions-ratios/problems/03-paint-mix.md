---
order: 3
difficulty: easy
lesson: 02-ratios-as-boxes
choices: ["4","7","12","16","21"]
answer: C
mistakes:
  A: "Eso es lo que tiene una caja. El rojo llena 3 cajas."
  B: "Esa es la cantidad de cajas. Cada caja tiene 4 onzas."
  D: "Esa es la pintura amarilla, que llena 4 cajas. El rojo llena 3."
  E: "Eso es $\\frac{3}{4}$ de 28. El rojo son 3 cajas de 7, no 3 de 4."
verify: "range(1, 28).find((red) => red * 4 === (28 - red) * 3)"
---

Una maestra de arte mezcla pintura roja y amarilla en una razón de 3 a 4 para hacer naranja. Prepara 28 onzas de pintura naranja. ¿Cuántas onzas de pintura roja usa?

## Hint

Dibuja 3 cajas para el rojo y 4 cajas para el amarillo. ¿Cuánta pintura va en cada caja?

## Hint 2

Hay 7 cajas en total, y 28 onzas. Así que cada caja tiene 4 onzas.

## Solution

**Paso 1.** Hay $3 + 4 = 7$ cajas iguales.

**Paso 2.** Cada caja tiene $28 \div 7 = 4$ onzas.

**Paso 3.** El rojo llena 3 cajas: $3 \times 4 = 12$ onzas.

**Comprobación:** El amarillo es $4 \times 4 = 16$ onzas, y $12 + 16 = 28$.

**Respuesta: (C) 12**
