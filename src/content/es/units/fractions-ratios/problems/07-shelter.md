---
order: 8
difficulty: medium
lesson: 02-ratios-as-boxes
choices: ["14","21","56","35","70"]
answer: C
mistakes:
  A: "Esa es la diferencia. Vale 2 cajas, así que cada caja tiene 7."
  B: "Esos son solo los perros. La pregunta es de gatos y perros."
  D: "Esos son solo los gatos. La pregunta es de gatos y perros."
  E: "Eso usa 10 cajas. Hay $5 + 3 = 8$ cajas."
verify: "range(1, 200).filter((n) => n % 8 === 0).find((total) => (total * 5) / 8 - (total * 3) / 8 === 14)"
---

Un refugio de animales tiene gatos y perros en una razón de 5 a 3. Hay 14 gatos más que perros. ¿Cuántos gatos y perros hay en total?

## Hint

Dibuja 5 cajas para los gatos y 3 para los perros. ¿Cuántas cajas extra tienen los gatos, y cuántos animales hay en esas cajas extra?

## Hint 2

Los gatos tienen 2 cajas más que los perros, y esas cajas tienen los 14 gatos extra. Así que una caja tiene 7.

## Solution

**Paso 1.** Los gatos tienen 5 cajas y los perros 3, así que los gatos tienen $5 - 3 = 2$ cajas extra.

**Paso 2.** Esas 2 cajas extra tienen los 14 gatos extra, así que cada caja tiene $14 \div 2 = 7$ animales.

**Paso 3.** Hay $5 + 3 = 8$ cajas en total, y $8 \times 7 = 56$.

**Comprobación:** Son $5 \times 7 = 35$ gatos y $3 \times 7 = 21$ perros. La diferencia es $35 - 21 = 14$.

**Respuesta: (C) 56**
