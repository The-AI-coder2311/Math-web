---
order: 5
difficulty: easy
lesson: 03-working-backwards
choices: ["3","23","9","13","5"]
answer: E
mistakes:
  A: "Eso es $9 \\div 3$. Deshaz cada paso una vez: divide entre 3 y luego resta 4."
  C: "Ese es solo el primer paso hacia atrás. Todavía tienes que deshacer \"sumar 4\"."
  D: "Eso suma 4 al regresar. Para deshacer sumar 4, resta 4."
  B: "Eso deshace los pasos en el orden equivocado. El último paso se deshace primero."
verify: "range(0, 50).find((n) => (n + 4) * 3 === 27)"
---

Ty piensa en un número. Le suma 4 y luego multiplica el resultado por 3. La respuesta final es 27. ¿Con qué número empezó Ty?

## Hint

Empieza en 27 y deshaz cada paso en orden inverso. ¿Qué es lo contrario de multiplicar por 3?

## Hint 2

Deshaz primero "multiplicar por 3": $27 \div 3 = 9$. Luego deshaz "sumar 4".

## Solution

Trabaja hacia atrás desde 27:

**Paso 1.** Deshaz "multiplicar por 3": $27 \div 3 = 9$.

**Paso 2.** Deshaz "sumar 4": $9 - 4 = 5$.

**Comprobación:** $5 + 4 = 9$, y $9 \times 3 = 27$.

**Respuesta: (E) 5**
