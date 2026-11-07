---
order: 25
difficulty: medium
lesson: 02-ratios-as-boxes
choices: ["12","16","20","24"]
answer: C
mistakes:
  A: "Esa es la cantidad de niños. La pregunta pide el grupo completo."
  B: "Revísalo: 16 no se divide en 5 cajas iguales."
  D: "Revísalo: un grupo de 24 no se divide en 5 cajas iguales."
verify: "range(1, 100).find((n) => n % 5 === 0 && (n * 3) / 5 - (n * 2) / 5 === 4)"
---

Un grupo tiene niños y niñas en una razón de 3 a 2, y hay 4 niños más que niñas. ¿Cuántos estudiantes hay en el grupo?

## Hint

¿Cuántas cajas más tienen los niños que las niñas?

## Hint 2

Una caja extra tiene 4 estudiantes.

## Solution

Los niños tienen 1 caja más que las niñas, así que 1 caja tiene 4 estudiantes. Hay 5 cajas en total, así que hay $5 \times 4 = 20$ estudiantes.

**Respuesta: (C) 20**
