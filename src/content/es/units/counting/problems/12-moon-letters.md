---
order: 12
difficulty: medium
lesson: 03-overcount-then-divide
choices: ["4","6","12","16","24"]
answer: C
mistakes:
  A: "Esa es la cantidad de letras. Hay muchos ordenamientos posibles."
  B: "Eso divide entre 4. Solo se repite una letra, y 2 copias se pueden intercambiar de 2 formas, así que divide entre 2."
  D: "Eso es $4 \\times 4$. Las letras se van gastando al acomodarlas, y las dos O se ven iguales."
  E: "Eso trata las dos O como diferentes. Intercambiarlas no forma una palabra nueva."
verify: "new Set(perms([...'MOON']).map((p) => p.join(''))).size"
---

¿De cuántas formas diferentes puedes ordenar las letras de la palabra MOON?

## Hint

¿Cuántos ordenamientos habría si las 4 letras fueran diferentes? ¿Qué pasa al intercambiar las dos O?

## Hint 2

Habría $4! = 24$. Cada palabra real se cuenta dos veces, porque las O se pueden intercambiar.

## Solution

Si las 4 letras fueran diferentes, habría $4! = 24$ ordenamientos. Intercambiar las dos O no cambia la palabra, así que cada palabra se cuenta dos veces: $24 \div 2 = 12$.

**Respuesta: (C) 12**
